/// <reference path="../types/SAM.d.ts" />
// @ts-check

/**
 * We "gatekeep" our action creation
 * with a helper function that throws
 * if you pass in anything egregiously
 * out of place.
 * 
 * @type {ActionFF}
 */
export const action = (type, params) => {
  return { type, ...params}
}

/**
 * @param {number} amt 
 */
export function incrementBy (amt) {
  return action('incrementBy', { amt })
}

/**
 * @param {number} amt 
 */
export function decrementBy (amt) {
  return action('decrementBy', { amt })
}

/**
 * @param {string} greeting 
 */
export function setGreeting (greeting) {
  return action('setGreeting', { greeting })
}

/**
 * @param {string} name 
 */
export function setUserName (name) {
  return action('setUserName', { name })
}

/**
 * @param {string} title 
 */
export function setUserTitle (title) {
  return action('setUserTitle', { title })
}

/**
 * @param {Dog[]} dogs 
 */
export function setDogs (dogs) {
  return action('setDogs', { dogs })
}

export function reverseUserName () {
  return action('reverseUserName', {})
}

/**
 * @param {number} amt 
 */
export function multiplyCount (amt) {
  return action('multiplyCount', { amt })
}