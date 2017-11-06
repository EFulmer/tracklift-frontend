import React, {Component} from 'react'
import request from 'superagent'
import baseURL from '../constants.js'

class Lift extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleWarmupChange = this.handleWarmupChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.submitLift = this.submitLift.bind(this)
  }

  handleNameChange(value) {
    this.setState({name: value})
  }

  handleWarmupChange(value) {
    this.setState({warmup: value})
  }

  handleNotesChange(value) {
    this.setState({notes: value})
  }

  submitLift() {
    const workoutID = this.props.workoutID
    const liftID = this.props.liftID ? this.props.liftID : ''
    const reqURL = new URL('lift/' + liftID, baseURL)
    const payload = {
      workout: workoutID,
      name: this.state.name,
      warm_up: this.state.warmup,
      lift_ord: 0 // TODO
    }
    if (liftID === '') {
      request.post(reqURL)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(payload)
        .type('json')
        .end((err, res) => {
          alert('err = ' + JSON.stringify(err))
          alert('res = ' + JSON.stringify(res))
        })
    }
    else {
      request.put(reqURL)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(payload)
        .type('json')
        .end((err, res) => {
          alert('err = ' + JSON.stringify(err))
          alert('res = ' + JSON.stringify(res))
        })
    }
  }

  render() {
    return (
      <div id="lift">
        <td>
          <tr>
            <th>Lift</th>
            <th>Warm-up?</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td><input id="name"   type="text"     value={this.state.name || ''}     onChange={this.handleNameChange} /></td>
            <td><input id="warmup" type="checkbox" checked={this.state.warmup} onChange={this.handleWarmupChange} /></td>
            <td><input id="notes"  type="text"     value={this.state.notes}    onChange={this.handleNotesChange} /></td>
            <td><input id="save" type="button" value="Save Set"
              onClick={this.submitLift} /></td>
          </tr>
        </td>
      </div>
    )
  }
}

export default Lift;
