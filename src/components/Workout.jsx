import React, {Component} from 'react'
import Picker from 'rc-calendar'

import {List} from 'immutable'

import {createUpdateWorkout} from '../actions/actions.js'
import Lift from './Lift'

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {id: undefined, lifts: List()}
    this.submitWorkout = this.submitWorkout.bind(this)
  }

  submitWorkout() {
    // TODO pass in only day and id
    createUpdateWorkout(this.props)
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
          onChange={this.props.handleDayChange} />
        <input type='submit' value='Save' onClick={this.submitWorkout} />
        <input type='submit' value='Add Lift' onClick={this.props.addLiftComponent} />
        {lifts}
      </div>
    )
  }
}

export default Workout;
