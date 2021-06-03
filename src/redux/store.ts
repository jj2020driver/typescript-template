import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchLoginAsync } from './saga/login'
import loginReducer from './reducers/login'

const rootReducer = combineReducers({
  login: loginReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchLoginAsync)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
