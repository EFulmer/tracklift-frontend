import React, {Component} from 'react'
import {List, Map} from 'immutable'

import {createUpdateWorkout, deleteWorkout} from '../actions/actions'

import Workout from './Workout'
import Lift from './Lift'

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

  render() {
    const workouts = this.state.workouts.map((workout, idx) =>
      <Workout idx={idx}
        lifts={workout.get('lifts')} 
        addLiftComponent={this.addLiftComponent.bind(this, idx)} 
        addSetComponent={this.addSetComponent.bind(this, idx)} />
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
