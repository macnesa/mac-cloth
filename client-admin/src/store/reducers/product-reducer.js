import { WRITE_PRODUCTS } from '../actions/actionTypes'



const initialState = []


function reducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_PRODUCTS:
      return state = action.payload
    default:
      return state
  }
}

export default reducer