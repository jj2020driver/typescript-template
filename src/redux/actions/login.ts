import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import type { RootState } from '../store'
import { LoginForm, Auth } from '../../types'
import { fetchLoginAPI } from '../api/login'

export const fetchLogin = (
  credentials: LoginForm
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoginPending())
      const response = await fetchLoginAPI(credentials)
      dispatch(fetchLoginFulfilled(response.data))
    } catch (error) {
      dispatch(fetchLoginRejected())
      throw error
    }
  }
}

export const fetchLoginPending = () => {
  return {
    type: 'FETCH_LOGIN_PENDING',
  }
}

export const fetchLoginFulfilled = (result: Auth) => {
  return {
    type: 'FETCH_LOGIN_FULFILLED',
    payload: result,
  }
}

export const fetchLoginRejected = () => {
  return {
    type: 'FETCH_LOGIN_REJECTED',
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}
