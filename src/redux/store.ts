import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter'
import loginReducer from './reducers/login'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
