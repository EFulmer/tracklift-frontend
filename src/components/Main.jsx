import React, {Component} from 'react'

import {List, Map} from 'immutable'
import moment from 'moment'

import {createUpdateWorkout} from '../actions/actions'
import Workout from './Workout'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {workouts: List()}
    this.addWorkoutComponent = this.addWorkoutComponent.bind(this)
  }

  addWorkoutComponent() {
    const newWorkout = Map({lifts: List()})
    this.setState(prevState => {
      return {...prevState, workouts: prevState.workouts.push(newWorkout)}
    })
  }

  addLiftComponent(workoutIdx) {
    const newLift = Map({sets: List()})
    this.setState(prevState => {
      return {...prevState, workouts: prevState.workouts.updateIn([workoutIdx, 'lifts'], list => list.push(newLift))}
    })
  }

  addSetComponent(workoutIdx, liftIdx) {
    const newSet = Map()
    this.setState(prevState => {
      return {...prevState, workouts: prevState.workouts.updateIn([workoutIdx, 'lifts', liftIdx, 'sets'], list => list.push(newSet))}
    })
  }

  handleDayChange(workoutIdx, value) {
    if (moment(value) > moment()) {
      alert('You cannot select a future date.')
      return
    }
    this.setState(prevState => {
      return {workouts: prevState.workouts.update(workoutIdx, workout => workout.set('day', value))}
    })
  }

  submitWorkout(workoutIdx) {
    const workout = this.state.workouts.get(workoutIdx)
    const result = createUpdateWorkout(workout)
      .then(res => this.setState(prevState => {
        return {workouts: prevState.workouts.setIn([workoutIdx, 'id'], res.id)}
      }))
      .catch(err => alert('err = ' + err))
  }

  render() {
    const workouts = this.state.workouts.map((workout, idx) =>
      <Workout idx={idx}
        day={workout.get('day')}
        lifts={workout.get('lifts')} 
        addLiftComponent={this.addLiftComponent.bind(this, idx)} 
        addSetComponent={this.addSetComponent.bind(this, idx)} 
        handleDayChange={this.handleDayChange.bind(this, idx)} 
        submitWorkout={this.submitWorkout.bind(this, idx)} />
    )

    return (
      <div id='app-main'>
        <h2>Main Page</h2>
        <input type='button' 
          value='Add New Workout' 
          onClick={this.addWorkoutComponent} />
        {workouts}
        <input type='button' value='See State' onClick={() => alert(JSON.stringify(this.state))} />
      </div>
    )
  }
}

export default Main;
