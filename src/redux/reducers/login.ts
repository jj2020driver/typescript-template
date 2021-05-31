import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchLogin } from '../api/login'
import { RootState } from '../store'
import { User } from '../../types'

export interface Auth {
  access_token: string
  user: User | null
}
export interface Login {
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

export const loginAsync = createAsyncThunk(
  'login/fetchLogin',
  async (credentials: object, thunkAPI) => {
    try {
      const response = await fetchLogin(credentials)
      return response.data
    } catch (error) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      error.response.data.code = error.response.status
      error.response.data.name = error.response.statusText
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth.access_token = ''
      state.auth.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.auth = action.payload as Auth
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = 'idle'
      })
  },
})

export const selectToken = (state: RootState) => state.login.auth.access_token
export const selectUser = (state: RootState) => state.login.auth.user

export const { logout } = loginSlice.actions

export default loginSlice.reducer
