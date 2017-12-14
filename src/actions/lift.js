import fetch from 'isomorphic-fetch'

import baseURL from '../constants.js'

export function createUpdateLift(data) {
  const id = data.get('id') || ''
  const method = data.get('id') ? 'PUT' : 'POST'
  const reqURL = new URL('lifts/' + id, baseURL)
  const name = data.get('name')
  const warmup = data.get('warmup')
  const notes = data.get('notes') || ''
  const payload = JSON.stringify({name, warm_up: warmup, notes})

  return fetch(reqURL, {
    method: method,
    body: payload,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => res.json())
}

export function deleteLift(id) {
  const method = 'DELETE'
  const reqURL = new URL('lifts/' + id, baseURL)

  return fetch(reqURL, {
    method: method,
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())
    .catch(err => err)
}
