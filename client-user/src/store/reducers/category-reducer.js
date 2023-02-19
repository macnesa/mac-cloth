import { WRITE_GENRES } from '../actions/actionTypes'



const initialState = []


function reducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_GENRES:
      return state = action.payload
    default:
      return state
  }
}

export default reducer