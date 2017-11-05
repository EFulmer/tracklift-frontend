import React, {Component} from 'react'
import request from 'superagent'
import baseUrl from '../constants.js'

class Lift extends Component {
  constructor(props) {
    super(props)

  }

  submitLift() {
  }
  render() {
    const id = this.props.liftID ? this.props.liftID : undefined
    const workoutID = this.props.workoutID
    const name = this.props.name
    const warmup = this.props.warmup
    const notes = this.props.notes
    // TODO see if i should change the "id"?
    // TODO ord
    return (
      <div id="lift">
        <td>
          <tr>
            <th>Lift</th>
            <th>Warm-up?</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td><input id="name"   type="text"     value={name}     /></td>
            <td><input id="warmup" type="checkbox" checked={warmup} /></td>
            <td><input id="notes"  type="text"     value={notes}    /></td>
            <td><input id="save" type="button" value="Save Set"
              onClick={event => {
                const name = document.getElementById('name').value
                const warmup = document.getElementById('warmup').value
                const notes = document.getElementById('notes').value
                const payload = JSON.stringify({name: name,
                  warmup: warmup,
                  notes: notes})
                // TODO handle undef IDs
                const reqURL = new URL('workout/' + workoutID + '/lift/', baseUrl)
                if (id === undefined) {
                  const result = request.post(reqURL)
                    .send(payload)
                    .end()
                  alert(JSON.stringify(result))
                }
                else {
                  const result = request.put(reqURL)
                    .send(payload)
                    .end()
                  alert(result)
                }
              }}/></td>
          </tr>
        </td>
      </div>
    )
  }
}

export default Lift;
