import React, {Component} from 'react'
import request from 'superagent'
import moment from 'moment'
import {List, Map} from 'immutable'
import Picker from 'rc-calendar'

import baseUrl from '../constants.js'
import Lift from './Lift.jsx'

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {date: moment()}
    this.handleDateChange = this.handleDateChange.bind(this)
    this.postWorkout = this.postWorkout.bind(this)
  }

  handleDateChange(value) {
    this.setState({date: moment(value)})
  }

  postWorkout() {
    const reqURL = new URL('workout/' + this.props.workoutID, baseUrl)
    const payload = {date: this.state.date}
    if (this.props.workoutID === '') {
      request.post(reqURL)
             .send(payload)
             .end((err, res) => alert(err, res))
    }
    else {
      request.put(reqURL)
             .send(payload)
             .end((err, res) => alert(err, res))
    }
  }

  render() {
    const id = this.props.id ? this.props.id : ''
    const testLift = Map({id: 0, name: 'Barbell Overhead Press', warmup: false, notes: 'Very good'})
    const lifts = List([testLift])
    const renderLifts = lifts.map(({id, name, warmup, notes}) =>
      <Lift workoutID={id} name={name} warmup={warmup} notes={notes} />
    )
    return (
      <div idKey={id}>
        <h3>Workout</h3>
        <Picker open={true} defaultValue={this.state.date} 
                onChange={this.handleDateChange} />
        <input type="submit" value="Save" onClick={this.postWorkout} />
        {renderLifts}
      </div>
    )
  }
}

export default Workout;
