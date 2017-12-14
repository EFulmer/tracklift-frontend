import React, {Component} from 'react'

import LiftSet from './LiftSet.jsx'

class Lift extends Component {
  render() {
    let sets = this.props.sets.map((set, idx) => {
      return <LiftSet 
        workoutID={this.props.workoutID} 
        liftID={this.props.liftID} 
        ord={idx+1} />
    })
    return (
      <div id='lift'>
        <td>
          <tr>
            <th>Lift</th>
            <th>Warm-up?</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td><input id='name'   type='text'     defaultValue={this.props.name}   onChange={this.props.handleNameChange}   /></td>
            <td><input id='warmup' type='checkbox' defaultValue={this.props.warmup} onChange={this.props.handleWarmupChange} /></td>
            <td><input id='notes'  type='text'     defaultValue={this.props.notes}  onChange={this.props.handleNotesChange}  /></td>
            <td><input id='save' type='button' value='Save Lift'
              onClick={this.props.submitLift} /></td>
          </tr>
        </td>
        {sets}
        <input id='addlift' type='button' onClick={this.props.addSetComponent} value='Add Set' />
      </div>
    )
  }
}

export default Lift;
