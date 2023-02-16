const { legacy_createStore: createStore } = require('redux')

const initialState = {
  counter: 0,
  users: []
}
function rootReducer(state = initialState, action) {
  // conditonal yg mengecek action apa yg terjadi
  switch (action.type) {
    case "counter/incremented":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "counter/decremented":
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: "counter/incremented" })
store.dispatch({ type: "counter/incremented", payload: 2 }) 