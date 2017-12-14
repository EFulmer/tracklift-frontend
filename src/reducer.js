export default reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_WORKOUT':
  case 'SUBMIT_WORKOUT':
  case 'DELETE_WORKOUT':
  case 'SET_WORKOUT_DATE':
  case 'ADD_LIFT':
  case 'SET_LIFT_NAME':
  case 'SET_LIFT_WARMUP':
  case 'SET_LIFT_NOTES':
  case 'SUBMIT_LIFT':
  case 'DELETE_LIFT':
  case 'ADD_SET':
  case 'SUBMIT_SET':
  case 'DELETE_SET':
  default:
    return state;
  }
}
