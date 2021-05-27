import { createStore, combineReducers } from 'redux'

import { loginReducer } from './reducers/login'

const rootReducer = combineReducers({
  user: loginReducer,
})

const store = createStore(rootReducer)
console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

export default store
