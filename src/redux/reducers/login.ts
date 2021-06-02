import { AnyAction, Reducer } from 'redux'
import { Auth } from '../../types'

import type { RootState } from '../store'
interface Login {
  auth: Auth
  status: 'idle' | 'loading' | 'failed'
}

const initialState: Login = {
  auth: {
    access_token: '',
    user: null,
  },
  status: 'idle',
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
      }
    case 'FETCH_LOGIN_FULFILLED':
      return {
        status: 'idle',
        auth: action.payload,
      }
    case 'FETCH_LOGIN_REJECTED':
      return {
        ...state,
        status: 'idle',
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

export default loginReducer
