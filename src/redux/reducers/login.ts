import { AxiosError } from 'axios'
import { AnyAction, Reducer } from 'redux'
import { Auth } from '../../types'

import type { RootState } from '../store'
interface Login {
  auth: Auth
  status: 'idle' | 'loading' | 'failed'
  error: AxiosError | Error | null
}

const initialState: Login = {
  auth: {
    access_token: '',
    user: null,
  },
  status: 'idle',
  error: null,
}

const loginReducer: Reducer<Login, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'FETCH_LOGIN_PENDING':
      return {
        ...state,
        status: 'loading',
        error: null,
      }
    case 'FETCH_LOGIN_FULFILLED':
      return {
        auth: action.payload,
        status: 'idle',
        error: null,
      }
    case 'FETCH_LOGIN_REJECTED':
      return {
        ...state,
        status: 'idle',
        error: action.payload,
      }
    case 'LOGOUT':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export const selectToken = (state: RootState) => state.login.auth.access_token
export const selectUser = (state: RootState) => state.login.auth.user
export const selectStatus = (state: RootState) => state.login.status
export const selectError = (state: RootState) => state.login.error

export default loginReducer
