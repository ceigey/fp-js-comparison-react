/// <reference path="../types/SAM.d.ts" />
// @ts-check

import { produce as set } from 'immer'
import * as actions from './Actions'

/**
 * @param {State} state 
 * @param {number} amt
 */
function incrementBy (state, amt) {
  console.assert(
    typeof amt === 'number',
    'incrementBy expected int'
  )
  return set(state, newState => {
    newState.stats.count += amt
    newState.stats.clicks++
  })
}

/**
 * @param {State} state 
 * @param {Dog[]} dogs 
 */
function setDogs (state, dogs) {
  console.assert(
    dogs instanceof Array,
    'setDogs expected Dog[]'
  )
  return set(state, newState => {
    newState.dogs = dogs
  })
}

/**
 * @param {State} state 
 * @param {string} greeting
 */
function setGreeting (state, greeting) {
  console.assert(
    typeof greeting === 'string',
    'setGreeting expected string'
  )
  return set(state, newState => {
    newState.greeting = greeting
  })
}

/**
 * @param {State} state 
 * @param {string} title
 */
function setUserTitle (state, title) {
  console.assert(
    typeof title === 'string',
    'setUserTitle expected title'
  )
  return set(state, newState => {
    newState.user.title = title
  })
}

/**
 * @param {State} state
 * @param {string} name
 */
function setUserName (state, name) {
  console.assert(
    typeof name === 'string',
    'setUserName expected string'
  )
  return set(state, newState => {
    newState.user.name = name
  })
}

/**
 * @param {State} state 
 */
function reverseUserName (state) {
  return set (state, newState => {
    newState.user.name =
      newState.user.name || ''
        .split('').reverse().join('')
    console.assert(
      state.user.name !== newState.user.name,
      'reverseUserName did not reverse'
    )
  })
}

/**
 * @param {State} state 
 * @param {number} amt 
 */
function multiplyCount (state, amt) {
  console.assert(
    typeof amt === 'number',
    'multipleCount expected number'
  )
  return set (state, newState => {
    newState.stats.count *= amt
    newState.stats.clicks++
  })
}

/**
 * A typesafe reducer that uses the --strict (or --strictNullChecks) tsc flag
 * in order make sure all actions are accounted for,
 * and no extra actions are defined.
 * 
 * @param {State} state 
 * @param {any} action 
 * 
 * @returns {State}
 */
export function reducer (state, action) {
  switch (action.type) {
    case 'incrementBy':
      return incrementBy(state, action.amt)
    case 'decrementBy':
      return incrementBy(state, -action.amt)
    case 'setDogs':
      return setDogs(state, action.dogs)
    case 'setGreeting':
      return setGreeting(state, action.greeting)
    case 'setUserTitle':
      return setUserTitle(state, action.title)
    case 'setUserName':
      return setUserName(state, action.name)
    case 'reverseUserName':
      return reverseUserName(state)
    case 'multiplyCount':
      return multiplyCount(state, action.amt)
    default:
      throw new TypeError(`Action "${action.type}" is undefined!`)
  }
}
