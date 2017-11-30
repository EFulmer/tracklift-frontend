import React, {Component} from 'react'

import {List, Map} from 'immutable'
import moment from 'moment'

import {createUpdateWorkout, deleteWorkout} from '../actions/workout'
import Workout from './Workout'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {workouts: List()}
    this.addWorkoutComponent = this.addWorkoutComponent.bind(this)
  }

  // workout methods
  addWorkoutComponent() {
    const newWorkout = Map({lifts: List()})
    this.setState(prevState => {
      return {...prevState, workouts: prevState.workouts.push(newWorkout)}
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
    createUpdateWorkout(workout)
      .then(res => this.setState(prevState => {
        return {workouts: prevState.workouts.setIn([workoutIdx, 'id'], res.id)}
      }))
      .catch(err => alert('err = ' + err))
  }

  deleteWorkoutComponent(workoutIdx) {
    const workout = this.state.workouts.get(workoutIdx)
    if (workout.get('id')) { 
      // TODO cascade to lower components (API handles the database)
      deleteWorkout(workout.get('id'))
        .then(res => this.setState(prevState => {
          return {workouts: prevState.workouts.delete(workoutIdx)}
        })
        ).catch(err => alert('err = ' + err))
    } else {
      this.setState(prevState => {
        return {workouts: prevState.workouts.delete(workoutIdx)}
      })
    }
  }

  // lift methods
  addLiftComponent(workoutIdx) {
    const newLift = Map({sets: List()})
    this.setState(prevState => {
      return {...prevState, workouts: prevState.workouts.updateIn([workoutIdx, 'lifts'], list => list.push(newLift))}
    })
  }

  handleNameChange(workoutIdx, liftIdx, value) {
  }

  handleWarmupChange(workoutIdx, liftIdx, value) {
  }

  handleNotesChange(workoutIdx, liftIdx, value) {
  }

  submitLift(workoutIdx, liftIdx) {
  }

  deleteLiftComponent(workoutIdx, liftIdx) {
  }

  // set methods
  addSetComponent(workoutIdx, liftIdx) {
    const newSet = Map()
    this.setState(prevState => {
      return {...prevState, workouts: prevState.workouts.updateIn([workoutIdx, 'lifts', liftIdx, 'sets'], list => list.push(newSet))}
    })
  }

  handleWeightChange(workoutIdx, liftIdx, setIdx, value) {
  }

  handleRepCountChange(workoutIdx, liftIdx, setIdx, value) {
  }

  handleSetCountChange(workoutIdx, liftIdx, setIdx, value) {
  }

  handleWarmupChange(workoutIdx, liftIdx, setIdx, value) {
  }

  handleNotesChange(workoutIdx, liftIdx, setIdx, value) {
  }

  submitSet(workoutIdx, liftIdx, setIdx) {
  }

  deleteSet(workoutIdx, liftIdx, setIdx) {
  }

  render() {
    const workouts = this.state.workouts.map((workout, idx) =>
      <Workout idx={idx}
        day={workout.get('day')}
        lifts={workout.get('lifts')} 
        addLiftComponent={this.addLiftComponent.bind(this, idx)} 
        addSetComponent={this.addSetComponent.bind(this, idx)} 
        handleDayChange={this.handleDayChange.bind(this, idx)} 
        submitWorkout={this.submitWorkout.bind(this, idx)}
        deleteWorkoutComponent={this.deleteWorkoutComponent.bind(this, idx)} />
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
