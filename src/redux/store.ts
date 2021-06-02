import { createStore, combineReducers, applyMiddleware, AnyAction } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import loginReducer from './reducers/login'

const rootReducer = combineReducers({
  login: loginReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, void, AnyAction>
