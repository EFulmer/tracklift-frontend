import React, {Component} from 'react'
import request from 'superagent'
import baseURL from '../constants.js'

class LiftSet extends Component {
  render() {
    const id = 0 // TODO this.props.id
    const workoutID = 0 // TODO this.props.workoutID
    const liftID = 0 // TODO this.props.liftID
    // TODO see if i should change the "id"?
    // TODO ord
    return (
      <div id="set">
        <td>
          <tr>
            <th>Weight</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Warm-up?</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td><input id="weight" type="text"     size="6" /></td>
            <td><input id="sets"   type="text"     size="3" /></td>
            <td><input id="reps"   type="text"     size="3" /></td>
            <td><input id="warmup" type="checkbox"          /></td>
            <td><input id="notes"  type="text"              /></td>
            <td><input id="save" type="button" value="Save Set"
              onClick={event => {
                const weight = document.getElementById('weight').value
                const sets = document.getElementById('sets').value
                const reps = document.getElementById('reps').value
                const warmup = document.getElementById('warmup').value
                const notes = document.getElementById('notes').value
                const payload = JSON.stringify({weight: weight,
                  sets: sets,
                  reps: reps,
                  warmup: warmup,
                  notes: notes})
                // TODO handle undef IDs
                const reqURL = new URL('workout/' + workoutID + '/lift/' + liftID + '/set/', baseURL)
                alert(payload)
                alert(reqURL)
                // if (id) {
                //   request.post(reqURL)
                //     .send(payload)
                //     .end()
     
                // }
                // else {
                //   request.put(reqURL)
                //     .send(payload)
                //     .end()
                // }
              }}/></td>
          </tr>
        </td>
      </div>
    )
  }
}

export default LiftSet;
