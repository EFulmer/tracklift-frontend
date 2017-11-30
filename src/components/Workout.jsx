import React, {Component} from 'react'
import Picker from 'rc-calendar'

import Lift from './Lift'

class Workout extends Component {
  render() {
    const lifts = this.props.lifts.map((lift, idx) => {
      return <Lift idx={idx} 
        sets={lift.get('sets')}
        addSetComponent={() => this.props.addSetComponent(idx)} />
    })

    return (
      <div id='workout'>
        <h3>Workout</h3>
        <Picker open={true} defaultValue={this.props.day} 
          onChange={this.props.handleDayChange} />
        <input type='submit' value='Save Workout' onClick={this.props.submitWorkout} />
        <input type='submit' value='Add Lift' onClick={this.props.addLiftComponent} />
        <input type='submit' value='Delete Workout' onClick={this.props.deleteWorkoutComponent} />
        {lifts}
      </div>
    )
  }
}

export default Workout;
