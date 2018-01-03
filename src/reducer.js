export default reducer = (state, action) => {
  switch (action.type) {
  case ADD_WORKOUT:
    return state;
  case HIDE_WORKOUT:
    return state;
  case REMOVE_WORKOUT:
    return state;
  case POST_WORKOUT:
    return state;
  case PUT_WORKOUT:
    return state;
  case DELETE_WORKOUT:
    return state;
  case ADD_LIFT:
    return state;
  case HIDE_LIFT:
    return state;
  case REMOVE_LIFT:
    return state;
  case POST_LIFT:
    return state;
  case PUT_LIFT:
    return state;
  case DELETE_LIFT:
    return state;
  case ADD_SET:
    return state;
  case HIDE_SET:
    return state;
  case REMOVE_SET:
    return state;
  case POST_SET:
    return state;
  case PUT_SET:
    return state;
  case DELETE_SET:
    return state;
  default:
    return state;
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
export const removeWorkout = () => { type: REMOVE_WORKOUT }
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
