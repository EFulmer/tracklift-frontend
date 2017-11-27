import React, {Component} from 'react'
import {List} from 'immutable'

import Workout from './Workout'
import Lift from './Lift'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {workouts: List()}
    this.addWorkout = this.addWorkout.bind(this)
    this.deleteWorkout = this.deleteWorkout.bind(this)
  }

  addWorkout() {
    let newWorkout = new Workout()
    this.setState((prevState, props) => {
      return {workouts: prevState.workouts.push(newWorkout)}
    })
  }

  deleteWorkout(workoutNum) {
    this.setState((prevState, props) => {
      return {workouts: prevState.workouts.delete(workoutNum)}
    })
  }

  addLift() {
    this.setState((prevState, props) => {
      // TODO props
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
        <Workout addLift={this.addLift} />
      </div>
    )

    return (
      <div id='app-main'>
        <h2>Main Page</h2>
        <input type='button' target='#' value='Add New Workout' onClick={this.addWorkout} />
        {workouts}
      </div>
    )
  }
}

export default Main;
