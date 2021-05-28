import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchLogin } from '../api/login'

export interface Login {
  user: object | null | undefined
  status: 'idle' | 'loading' | 'failed'
}

const initialState: Login = {
  user: null,
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
    builder.addCase(loginAsync.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.user = action.payload
    })
  },
})

export default loginSlice.reducer
