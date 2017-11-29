import React, {Component} from 'react'
import request from 'superagent'
import moment from 'moment'
import Picker from 'rc-calendar'
import {List, Map} from 'immutable'

import {createUpdateWorkout} from '../actions/actions.js'
import baseURL from '../constants'
import Lift from './Lift'

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {id: undefined, lifts: List()}
    this.handleDayChange = this.handleDayChange.bind(this)
    this.submitWorkout = this.submitWorkout.bind(this)
  }

  handleDayChange(value) {
    if (moment(value) > moment()) {
      alert('You cannot select a future date.')
      return
    }
    const day = moment(value)
    this.setState({day: day})
  }

  submitWorkout() {
    createUpdateWorkout(this.state)
      .then(res => this.setState({id: res.id}))
      .catch(err => alert('err = ' + err))
  }

  render() {
    const lifts = this.props.lifts.map((lift, idx) => {
      return <Lift idx={idx} 
        sets={lift.get('sets')}
        addSetComponent={() => this.props.addSetComponent(idx)} />
    })

    return (
      <div id='workout'>
        <h3>Workout</h3>
        <Picker open={true} defaultValue={this.state.day} 
          onChange={this.handleDayChange} />
        <input type='submit' value='Save' onClick={this.submitWorkout} />
        <input type='submit' value='Add Lift' onClick={this.props.addLiftComponent} />
        {lifts}
      </div>
    )
  }
}

export default Workout;
