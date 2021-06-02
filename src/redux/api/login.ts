import axios from 'axios'
import { LoginForm, Auth } from '../../types'

const apiService = axios.create({
  baseURL: 'http://65.0.121.216:81/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

export const fetchLoginAPI = (
  credentials: LoginForm
): Promise<{ data: Auth }> => {
  return new Promise((resolve, reject) => {
    apiService.get('../sanctum/csrf-cookie').then(() => {
      apiService
        .post('/login', credentials)
        .then((result) => resolve({ data: result.data }))
        .catch((error) => {
          reject(error)
        })
    })
  })
}
