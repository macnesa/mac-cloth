import { combineReducers } from "redux"

import productReducer from "./product-reducer"
import categoryReducer from "./category-reducer"

const rootReducer = combineReducers(
  {
    product: productReducer,
    category: categoryReducer
  }
)

export default rootReducer