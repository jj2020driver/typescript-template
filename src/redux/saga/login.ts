import { AnyAction } from 'redux'
import { Auth } from '../../types'
import { put, takeEvery, call, StrictEffect } from 'redux-saga/effects'
import {
  fetchLoginPending,
  fetchLoginFulfilled,
  fetchLoginRejected,
} from '../actions/login'
import { fetchLoginAPI } from '../api/login'

export function* loginAsync(
  action: AnyAction
): Generator<StrictEffect, void, { data: Auth }> {
  try {
    yield put(fetchLoginPending())
    const response = yield call(fetchLoginAPI, action.payload)
    yield put(fetchLoginFulfilled(response.data))
  } catch (error) {
    yield put(fetchLoginRejected(error))
  }
}

export function* watchLoginAsync() {
  yield takeEvery('FETCH_LOGIN', loginAsync)
}
