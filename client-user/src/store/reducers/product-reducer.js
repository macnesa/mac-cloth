import { 
  WRITE_PRODUCTS, 
  WRITE_PRODUCT, 
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_IMAGEVALUE
 } from '../actions/actionTypes'



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
    case WRITE_PRODUCT:
      return {
        ...state,
        productById: action.payload
      }
    case UPDATE_PRODUCT: 
      return {
        ...state,
        productById: {
          ...state.productById,
          [action.name]: action.payload
        }
      }
    case UPDATE_PRODUCT_IMAGEVALUE:
      const newArr = state.productById.Images.map(each => {
        if(each.id == action.id) {
          each.imgUrl = action.payload
        } ; return each
      })
      return {
        ...state,
        productById: {
          ...state.productById,
          Images: newArr
        }
      }
    default:
      return state
  }
}

export default reducer