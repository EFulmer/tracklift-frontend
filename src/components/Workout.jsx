import React, {Component} from 'react'
import Picker from 'rc-calendar'

import Lift from './Lift'

class Workout extends Component {
  constructor(props) {
    super(props)
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
        <Picker open={true} defaultValue={this.props.day} 
          onChange={this.props.handleDayChange} />
        <input type='submit' value='Save' onClick={this.props.submitWorkout} />
        <input type='submit' value='Add Lift' onClick={this.props.addLiftComponent} />
        {lifts}
      </div>
    )
  }
}

export default Workout;
