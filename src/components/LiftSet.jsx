import React, {Component} from 'react'
import request from 'superagent'

import baseURL from '../constants.js'

class LiftSet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setID: undefined, 
      weight: undefined,
      set_count: undefined,
      rep_count: undefined,
      warm_up: false,
      notes: '',
    }
    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.handleSetCountChange = this.handleSetCountChange.bind(this)
    this.handleRepCountChange = this.handleRepCountChange.bind(this)
    this.handleWarmupChange = this.handleWarmupChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.submitSet = this.submitSet.bind(this)
  }

  handleWeightChange(event) {
    this.setState({weight: event.currentTarget.value})
  }

  handleSetCountChange(event) {
    this.setState({set_count: event.currentTarget.value})
  }

  handleRepCountChange(event) {
    this.setState({rep_count: event.currentTarget.value})
  }

  handleWarmupChange(event) {
    this.setState({warm_up: event.currentTarget.checked})
  }

  handleNotesChange(event) {
    this.setState({notes: event.currentTarget.value})
  }

  respHandler(resp) {
    if (resp.statusCode === 200) {
      const setID = resp.body.id
      this.setState({setID: setID})
    } else {
      alert('There was an error saving your data to the database.\n\nError:' + JSON.stringify(resp))
    }
  }

  submitSet() {
    if (!this.state.weight) {
      alert('Please enter a weight.')
      return
    }
    if (!this.state.set_count) {
      alert('Please enter a number of sets.')
      return
    }
    if (!this.state.rep_count) {
      alert('Please enter a number of reps.')
      return
    }

    const setID = this.state.setID || ''
    const reqURL = new URL('sets/' + setID, baseURL)
    const payload = JSON.stringify({
      workout: this.state.workoutID,
      lift: this.props.liftID,
      set_ord: this.props.ord,
      weight: this.state.weight,
      set_count: this.state.set_count,
      rep_count: this.state.rep_count,
      warm_up: this.state.warm_up || false,
      notes: this.state.notes
    })

    if (setID === '') {
      request.post(reqURL)
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .type('json')
        .end((err, res) => {
          if (res) {
            this.respHandler(res)
          } else {
            alert('Error submitting workout: ' + JSON.stringify(err))
          }
        })
    }

    else {
      request.put(reqURL)
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .type('json')
        .end((err, res) => {
          if (res) {
            this.respHandler(res)
          } else {
            alert('Error submitting workout: ' + JSON.stringify(err))
          }
        })
    }
  }

  render() {
    return (
      <div id="set">
        <td>
          <tr>
            <th>Weight</th>
            <th>Number of Sets</th>
            <th>Reps</th>
            <th>Warm-up?</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td><input id="weight" type="text"     size="6" defaultValue={this.state.weight} onChange={this.handleWeightChange} /></td>
            <td><input id="sets"   type="text"     size="3" defaultValue={this.state.set_count} onChange={this.handleSetCountChange} /></td>
            <td><input id="reps"   type="text"     size="3" defaultValue={this.state.rep_count} onChange={this.handleRepCountChange} /></td>
            <td><input id="warm_up" type="checkbox"          defaultValue={this.state.warm_up} onChange={this.handleWarmupChange} /></td>
            <td><input id="notes"  type="text"              defaultValue={this.state.notes} onChange={this.handleNotesChange} /></td>
            <td><input id="save" type="button" value="Save Set"
              onClick={this.submitSet}/></td>
          </tr>
        </td>
      </div>
    )
  }
}

export default LiftSet;
