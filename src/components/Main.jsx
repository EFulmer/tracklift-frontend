import React, {Component} from 'react'
import {List} from 'immutable'


import Workout from './Workout'
import Lift from './Lift'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {workouts: List()}
    this.addWorkoutComponent = this.addWorkoutComponent.bind(this)
    this.deleteWorkout = this.deleteWorkout.bind(this)
  }

  addWorkoutComponent() {
    let newWorkout = <Workout 
      addLiftComponent={this.addLiftComponent} />
    this.setState((prevState, props) => {
      return {workouts: prevState.workouts.push(newWorkout)}
    })
  }

  deleteWorkout(workoutNum) {
    // TODO call delete
    this.setState((prevState, props) => {
      return {workouts: prevState.workouts.delete(workoutNum)}
    })
  }

  addLiftComponent() {
    this.setState((prevState, props) => {
      let newLift = <Lift />
      return {lifts: prevState.lifts.push(newLift)}
    })
  }

  render() {
    const workouts = this.state.workouts.map((workout, idx) =>
      <div id={'workout-' + (idx + 1).toString()}>
        <form>
          <input type='submit' value='Delete' onClick={() => this.deleteWorkout.call(this, idx)} />
        </form>
        {workout}
      </div>
    )

    return (
      <div id='app-main'>
        <h2>Main Page</h2>
        <input type='button' target='#' value='Add New Workout' onClick={this.addWorkoutComponent} />
        {workouts}
      </div>
    )
  }
}

export default Main;
