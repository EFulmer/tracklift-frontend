import fetch from 'isomorphic-fetch'

import baseURL from '../constants.js'

export function createUpdateWorkout(data) {
  const id = data.get('id') || ''
  const method = data.get('id') ? 'PUT' : 'POST'
  const reqURL = new URL('workouts/' + id, baseURL)
  const date = String(data.get('day').date())
  const month = String(data.get('day').month() + 1)
  const year = String(data.get('day').year())
  const day = month + '-' + date + '-' + year
  const payload = JSON.stringify({day})

  alert(reqURL)

  return fetch(reqURL, {
    method: method,
    body: payload,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => res.json())
}

export function deleteWorkout(id) {
  const method = 'DELETE'
  const reqURL = new URL('workouts/' + id, baseURL)

  return fetch(reqURL, {
    method: method,
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())
    .catch(err => err)
}
