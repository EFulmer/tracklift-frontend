import React, {Component} from 'react';

class WorkoutSet extends Component {
  render() {
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
          </tr>
          <tr>
            <td><input id="save" type="button" value="Save Set" /></td>
          </tr>
        </td>
      </div>
    );
  }
}

export default WorkoutSet;
