import moment from 'moment'
import request from 'superagent'
import fetch from 'isomorphic-fetch'

import baseURL from '../constants.js'

export function createUpdateWorkout(data) {
  const workoutID = data.workoutID || ''
  const method = data.workoutID ? 'PUT' : 'POST'
  const reqURL = new URL('workouts/' + workoutID, baseURL)
  const date = String(data.day.date())
  const month = String(data.day.month() + 1)
  const year = String(data.day.year())
  const day = month + '-' + date + '-' + year
  const payload = JSON.stringify({day: day})

  return fetch(reqURL, {
    method: method,
    body: payload,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => res.json())
    .catch(err => err)
}

export function handleResponse(response) {
  if (response.statusCode && 
      response.statusCode === 200 && 
      response.body) {
    // 
  }
}
