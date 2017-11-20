import React, {Component} from 'react'
import {List} from 'immutable'

import Workout from './Workout.jsx'

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
    // TODO must run delete query
    this.setState((prevState, props) => {
      return {workouts: prevState.workouts.delete(workoutNum)}
    })
  }

  render() {
    let workouts = this.state.workouts.map((workout, idx) =>
      <div id={'workout' + (idx + 1)}>
        <form>
          <input type='submit' value='Delete' onClick={() => this.deleteWorkout.call(this,idx)} />
        </form>
        <Workout />
      </div>
    )
    return (
      <div id='app-main'>
        <h2>Main Page</h2>
          <form>
            <input type='submit' value='Add New Workout' onClick={this.addWorkout} />
          </form>
            {workouts}
      </div>
    )
  }
}

export default Main;
