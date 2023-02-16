import { COUNTER_INCREMENTER } from "./actionTypes"

export const conterIncremented = (payload) => {
  return { type: COUNTER_INCREMENTER, payload }
}



export const dididam = () => {
  return (dispatch, getState) => { //atau return async (dispatch, getState) => {
    // tulis async function
    // complx business logic
    // fetch('http://yourlink.com')
    //   .then(response => response.json())
    //   .then(json => {
    //     dispatch(conterIncremented(json))
    //   })
  }
}