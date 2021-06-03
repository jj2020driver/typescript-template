import { LoginForm, Auth } from '../../types'

export const fetchLogin = (credentials: LoginForm) => {
  return {
    type: 'FETCH_LOGIN',
    payload: credentials,
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

export const fetchLoginRejected = (error: Error) => {
  return {
    type: 'FETCH_LOGIN_REJECTED',
    payload: error,
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}
