import axios from 'axios'

const apiService = axios.create({
  baseURL: 'http://65.0.121.216:81/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

export const fetchLogin = (credentials: object) => {
  return new Promise<{ data: object }>((resolve, reject) => {
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
