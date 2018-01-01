import {createStore} from 'redux'
import {List, Map} from 'immutable'

let reducer = (state=Map(), action) => {
  switch (actions.type) {
  // Workout functions:
  case 'ADD_WORKOUT':
    return Map.update('workouts', w => w.push(
      Map({lifts: List()}))
    )
  case 'SET_DAY':
    return Map.updateIn(['workouts', actions.workoutIdx], w =>
      w.set('day', actions.value)
    )
  case 'SAVE_WORKOUT':
    break;
  case 'ADD_LIFT':
    break;
  case 'UPDATE_LIFT':
    break;
  }
}

export let addWorkout = (workouts=List()) => Map(
  {
    type: 'ADD_WORKOUT',
    workouts
  }
)

let store = createStore(reducer)

export default store
