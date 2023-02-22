import {
  LOADING,
  WRITE_PRODUCTS,
  WRITE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_IMAGEVALUE,
  WRITE_PRODUCT_FAILED
} from '../actions/actionTypes'



const initialState = {
  allProduct: [

  ],
  productById: {

  },
  error: null,
  loading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_PRODUCTS:
      // return state = action.payload
      return {
        ...state,
        allProduct: action.payload
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
        if (each.id == action.id) {
          each.imgUrl = action.payload
        }; return each
      })
      return {
        ...state,
        productById: {
          ...state.productById,
          Images: newArr
        }
      }

    case LOADING:
      return { ...state, 
        error: null,
        loading: true
      }
    case WRITE_PRODUCT:
      return { ...state,
        productById: action.payload,
        error: null,
        loading: false
      }
    case WRITE_PRODUCT_FAILED:
      return { ...state,
        error: action.payload,
        loading: false
      }
      

    default:
      return state
  }
}

export default reducer