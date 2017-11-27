import moment from 'moment'
import request from 'superagent'

import baseURL from '../constants.js'

export function createUpdateWorkout(data) {
  const workoutID = data.workoutID || ''
  const method = data.workoutID ? 'put' : 'post'
  const reqURL = new URL('workouts/' + workoutID, baseURL)
  const date = String(data.day.date())
  const month = String(data.day.month() + 1)
  const year = String(data.day.year())
  const day = month + '-' + date + '-' + year
  const payload = JSON.stringify({day: day})

  return request(method, reqURL)
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .type('json')
}
