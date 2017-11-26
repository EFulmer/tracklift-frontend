import React, {Component} from 'react'
import request from 'superagent'
import moment from 'moment'
import Picker from 'rc-calendar'
import {List, Map} from 'immutable'

import baseURL from '../constants.js'
import Lift from './Lift.jsx'
import {respHandler} from '../actions/actions.js'

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {day: moment(), workoutID: undefined, lifts: List()}
    this.handleDayChange = this.handleDayChange.bind(this)
    this.submitWorkout = this.submitWorkout.bind(this)
    this.makeLiftKey = this.makeLiftKey.bind(this)
  }

  handleDayChange(value) {
    const day = moment(value)
    this.setState({day: day})
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
    const payload = JSON.stringify({day: day})

    // TODO could do helpers for these ... 
    if (workoutID === '') {
      request.post(reqURL)
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .type('json')
        .end((err, res) => {
          if (res) {
            respHandler(res)
          } else {
            alert('Error submitting workout: ' + JSON.stringify(err))
          }
        })
    }
    else {
      request.put(reqURL)
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Cache-Control', 'no-cache')
        .type('json')
        .end((err, res) => {
          if (res) {
            respHandler(res)
          } else {
            alert('Error submitting workout: ' + JSON.stringify(err))
          }
        })
    }
  }

  makeLiftKey(idx) {
    return this.state.workoutID.toString() + '-' + (idx + 1).toString()
  }

  render() {
    // TODO should run a GET for the lifts for the workoutID if defined
    let lifts = this.state.lifts.map((lift, idx) => {
      return <Lift key={this.makeLiftKey(idx)} 
        workoutID={this.state.workoutID} ord={idx+1} />
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
