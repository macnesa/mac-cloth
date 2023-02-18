import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from './middlewares/logger'
import rootReducer from './reducers'
import thunk from "redux-thunk"
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// store.subscribe(function() {
//   console.log(store.getState())
// })




export default store










const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(require('./routes'))

app.listen(port, () => {
  console.log(`Example app listening on port port`)
})