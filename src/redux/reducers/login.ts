import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchLogin } from '../api/login'
import { RootState } from '../store'

export interface Auth {
  access_token: string
  user: object
}
export interface Login {
  auth: Auth
  status: 'idle' | 'loading' | 'failed'
}

const initialState: Login = {
  auth: {
    access_token: '',
    user: {},
  },
  status: 'idle',
}

export const loginAsync = createAsyncThunk(
  'login/fetchLogin',
  async (credentials: object) => {
    const response = await fetchLogin(credentials)
    return response.data
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
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

export default loginSlice.reducer
