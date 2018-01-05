import {List, Map} from 'immutable'

const defaultState = Map({workouts: List()})

export const reducer = (state=defaultState, action) => {
  // I dislike this forward declaration.
  let newState
  switch (action.type) {
  case ADD_WORKOUT:
    newState = state.updateIn(['workouts'],
      (workouts) => workouts.push(Map()));
    return newState
  case HIDE_WORKOUT:
    return state
  case REMOVE_WORKOUT:
    newState = state.updateIn(['workouts'],
      (workouts) => workouts.delete(action.workoutIdx))
    return newState
  case POST_WORKOUT:
    return state
  case PUT_WORKOUT:
    return state
  case DELETE_WORKOUT:
    return state
  case ADD_LIFT:
    newState = state.updateIn(['workouts', action.workoutIdx, 'lifts'],
      (lifts) => lifts.push(Map()))
    return newState
  case HIDE_LIFT:
    return state
  case REMOVE_LIFT:
    newState = state.updateIn(['workouts', action.workoutIdx, 'lifts'],
      (lifts) => lifts.delete(action.liftIdx))
    return newState
  case POST_LIFT:
    return state
  case PUT_LIFT:
    return state
  case DELETE_LIFT:
    return state
  case ADD_SET:
    newState = state.updateIn(['workouts', action.workoutIdx, 'lifts', actions.liftIdx, 'sets'],
      (sets) => sets.push(Map()))
    return newState
  case HIDE_SET:
    return state
  case REMOVE_SET:
    newState = state.updateIn(['workouts', action.workoutIdx, 'lifts', action.liftIdx, 'sets'],
      (sets) => sets.delete(action.setIdx))
    return newState
  case POST_SET:
    return state
  case PUT_SET:
    return state
  case DELETE_SET:
    return state
  default:
    return state
  }
}

// Action constants
// Notes on prefixes:
// * 'ADD_COMPONENT_TYPE' means to add a COMPONENT_TYPE
// * 'HIDE_COMPONENT_TYPE' means to hide (not yet implemented)
// * 'REMOVE_COMPONENT_TYPE' is the companion to DELETE_COMPONENT_TYPE
//   DELETE is an API call, REMOVE removes the component
// * all other prefixes stand for a request
export const ADD_WORKOUT = 'ADD_WORKOUT'
export const HIDE_WORKOUT = 'HIDE_WORKOUT'
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT'
export const POST_WORKOUT = 'POST_WORKOUT'
export const PUT_WORKOUT = 'PUT_WORKOUT'
export const DELETE_WORKOUT = 'DELETE_WORKOUT'

export const ADD_LIFT = 'ADD_LIFT'
export const HIDE_LIFT = 'HIDE_LIFT'
export const REMOVE_LIFT = 'REMOVE_LIFT'
export const POST_LIFT = 'POST_LIFT'
export const PUT_LIFT = 'PUT_LIFT'
export const DELETE_LIFT = 'DELETE_LIFT'

export const ADD_SET = 'ADD_SET'
export const HIDE_SET = 'HIDE_SET'
export const REMOVE_SET = 'REMOVE_SET'
export const POST_SET = 'POST_SET'
export const PUT_SET = 'PUT_SET'
export const DELETE_SET = 'DELETE_SET'

// Action creators
export const addWorkout = () => { type: ADD_WORKOUT }
export const hideWorkout = () => { type: HIDE_WORKOUT }
export const removeWorkout = (workoutIdx) => { type: REMOVE_WORKOUT, workoutIdx }
export const postWorkout = () => { type: POST_WORKOUT }
export const putWorkout = () => { type: PUT_WORKOUT }
export const deleteWorkout = () => { type: DELETE_WORKOUT }

export const addLift = () => { type: ADD_LIFT }
export const hideLift = () => { type: HIDE_LIFT }
export const removeLift = () => { type: REMOVE_LIFT }
export const postLift = () => { type: POST_LIFT }
export const putLift = () => { type: PUT_LIFT }
export const deleteLift = () => { type: DELETE_LIFT }

export const addSet = () => { type: ADD_SET }
export const hideSet = () => { type: HIDE_SET }
export const removeSet = () => { type: REMOVE_SET }
export const postSet = () => { type: POST_SET }
export const putSet = () => { type: PUT_SET }
export const deleteSet = () => { type: DELETE_SET }
