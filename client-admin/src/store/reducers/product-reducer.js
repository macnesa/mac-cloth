import { WRITE_PRODUCTS, WRITE_PRODUCT } from '../actions/actionTypes'



const initialState = {
  allProduct: [
    
  ],
  productById: {
    
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_PRODUCTS:
      // return state = action.payload
      return {
        ...state,
        allProduct: action.payload
      } 
      case WRITE_PRODUCTS:
      return {
        ...state,
        productById: action.payload
      }
    default:
      return state
  }
}

export default reducer