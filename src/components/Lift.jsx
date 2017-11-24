import React, {Component} from 'react'
import request from 'superagent'
import {List} from 'immutable'

import baseURL from '../constants.js'
import LiftSet from './LiftSet.jsx'

class Lift extends Component {
  constructor(props) {
    super(props)
    this.state = {liftID: undefined, sets: List(), name: undefined, notes: undefined, warmup: false}
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleWarmupChange = this.handleWarmupChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.submitLift = this.submitLift.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.currentTarget.value})
  }

  handleWarmupChange(event) {
    this.setState({warm_up: event.currentTarget.value})
  }

  handleNotesChange(event) {
    this.setState({notes: event.currentTarget.value})
  }

  submitLift() {
    const liftID = this.props.liftID || ''
    const reqURL = new URL('lifts/' + liftID, baseURL)
    const payload = JSON.stringify({
      workout: this.props.workoutID,
      name: this.state.name,
      warm_up: this.state.warmup,
      lift_ord: this.props.ord
    })

    if (liftID === '') {
      request.post(reqURL)
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .type('json')
        .end((err, res) => {
        })
    }
    else {
      request.put(reqURL)
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .type('json')
        .end((err, res) => {
        })
    }
  }

  render() {
    let sets = this.state.sets.map((set, idx) => {
      return <LiftSet key={this.props.workoutID.toString() + '-' + this.props.liftID.toString() + '-' + idx.toString()} 
                      workoutID={this.props.workoutID} 
                      liftID={this.state.liftID} />
    })
    return (
      <div id="lift">
        <td>
          <tr>
            <th>Lift</th>
            <th>Warm-up?</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td><input id="name"   type="text"     defaultValue={this.state.name} onChange={this.handleNameChange} /></td>
            <td><input id="warmup" type="checkbox" defaultValue={this.state.warm_up} onChange={this.handleWarmupChange} /></td>
            <td><input id="notes"  type="text"     defaultValue={this.state.notes} onChange={this.handleNotesChange} /></td>
            <td><input id="save" type="button" value="Save Set"
              onClick={this.submitLift} /></td>
          </tr>
        </td>
        {sets}
      </div>
    )
  }
}

export default Lift;
