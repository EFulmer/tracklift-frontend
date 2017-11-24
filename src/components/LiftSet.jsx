import React, {Component} from 'react'
import request from 'superagent'

import baseURL from '../constants.js'

class LiftSet extends Component {
  constructor(props) {
    super(props)
    this.state = {setID: undefined}
    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.handleSetCountChange = this.handleSetCountChange.bind(this)
    this.handleRepCountChange = this.handleRepCountChange.bind(this)
    this.handleWarmupChange = this.handleWarmupChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
  }

  handleWeightChange(event) {
    this.setState({weight: event.currentTarget.value})
  }

  handleSetCountChange(event) {
    this.setState({setCount: event.currentTarget.value})
  }

  handleRepCountChange(event) {
    this.setState({repCount: event.currentTarget.value})
  }

  handleWarmupChange(event) {
    this.setState({warmup: event.currentTarget.checked})
  }

  handleNotesChange(event) {
    this.setState({notes: event.currentTarget.value})
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
            <td><input id="sets"   type="text"     size="3" defaultValue={this.state.weight} onChange={this.handleSetCountChange} /></td>
            <td><input id="reps"   type="text"     size="3" defaultValue={this.state.weight} onChange={this.handleRepCountChange} /></td>
            <td><input id="warmup" type="checkbox"          defaultValue={this.state.weight} onChange={this.handleWarmupChange} /></td>
            <td><input id="notes"  type="text"              defaultValue={this.state.weight} onChange={this.handleNotesChange} /></td>
            <td><input id="save" type="button" value="Save Set"
              onClick={event => {
                alert('IF THE ZOO BANS ME FOR HOLLERING AT THE ANIMALS I WILL FACE GOD AND WALK BACKWARDS INTO HELL')
             }}/></td>
          </tr>
        </td>
      </div>
    )
  }
}

export default LiftSet;
