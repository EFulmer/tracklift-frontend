import React, {Component} from 'react'
import request from 'superagent'
import moment from 'moment'
import {List, Map} from 'immutable'
import Picker from 'rc-calendar'

import baseURL from '../constants.js'
import Lift from './Lift.jsx'

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {day: moment()}
    this.handleDayChange = this.handleDayChange.bind(this)
    this.submitWorkout = this.submitWorkout.bind(this)
  }

  handleDayChange(value) {
    // TODO check that it's not a future date.
    this.setState({day: moment(value)})
  }

  submitWorkout() {
    const workoutID = this.props.workoutID ? this.props.workoutID : ''
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
          alert('err = ' + JSON.stringify(err))
          alert('res = ' + JSON.stringify(res))
        })
    }
    else {
      request.put(reqURL)
        .send(payload)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          alert('err = ' + JSON.stringify(err))
          alert('res = ' + JSON.stringify(res))
        })
    }
  }

  render() {
    const testLift = Map({id: 0, name: 'Barbell Overhead Press', warmup: false, notes: 'Very good'})
    const lifts = List([testLift])
    const renderLifts = lifts.map(({id, name, warmup, notes}) =>
      <Lift workoutID={id} name={name} warmup={warmup} notes={notes} />
    )
    return (
      <div id='workout'>
        <h3>Workout</h3>
        <Picker open={true} defaultValue={this.state.day} 
                onChange={this.handleDayChange} />
        <input type="submit" value="Save" onClick={this.submitWorkout} />
        {renderLifts}
      </div>
    )
  }
}

export default Workout;
