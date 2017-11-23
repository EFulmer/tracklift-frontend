import React, {Component} from 'react'
import request from 'superagent'
import moment from 'moment'
import Picker from 'rc-calendar'
import {List, Map} from 'immutable'

import baseURL from '../constants.js'
import Lift from './Lift.jsx'

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {day: moment(), workoutID: undefined, lifts: List()}
    this.handleDayChange = this.handleDayChange.bind(this)
    this.submitWorkout = this.submitWorkout.bind(this)
    this.respHandler = this.respHandler.bind(this)
  }

  handleDayChange(value) {
    const day = moment(value)
    this.setState({day: day})
  }

  respHandler(resp) {
    if (resp.statusCode === 200) {
      const workoutID = resp.body.id
      this.setState({workoutID: workoutID})
      if (this.state.lifts.isEmpty()) {
        this.setState({lifts: this.state.lifts.push(Map())})
      }
    } else {
      alert('There was an error saving your data to the database.\n\nError:' + JSON.stringify(resp))
    }
  }

  submitWorkout() {
    if (this.state.day > moment()) {
      alert("You cannot select a future date.")
      return
    }
    const workoutID = this.state.workoutID || ''
    const reqURL = new URL('workouts/' + workoutID, baseURL)
    const date = String(this.state.day.date())
    const month = String(this.state.day.month() + 1)
    const year = String(this.state.day.year())
    const day = month + '-' + date + '-' + year
    const payload = {day: day}

    // TODO could do helpers for these ... 
    if (workoutID === '') {
      request.post(reqURL)
        .send(JSON.stringify(payload))
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .type('json')
        .end((err, res) => {
          if (res) {
            this.respHandler(res)
          } else {
            alert('Error submitting workout: ' + JSON.stringify(err))
          }
        })
    }
    else {
      request.put(reqURL)
        .send(JSON.stringify(payload))
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Cache-Control', 'no-cache')
        .type('json')
        .end((err, res) => {
          if (res) {
            this.respHandler(res)
          } else {
            alert('Error submitting workout: ' + JSON.stringify(err))
          }
        })
    }
  }

  render() {
    // TODO should run a GET for the lifts for the workoutID if defined
    let lifts = this.state.lifts.map((lift, idx) => {
      return <Lift key={this.state.workoutID.toString() + '-' + idx.toString()} 
                   workoutID={this.state.workoutID} />
    })
    return (
      <div id='workout'>
        <h3>Workout</h3>
        <form action='#' onSubmit={this.submitWorkout}>
          <Picker open={true} defaultValue={this.state.day} 
                  onChange={this.handleDayChange} />
          <input type='submit' value='Save' />
        </form>
        {lifts}
      </div>
    )
  }
}

export default Workout;
