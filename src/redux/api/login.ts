import axios from 'axios'

export const fetchLogin = (credentials: object) => {
  return new Promise<{ data: object }>((resolve, reject) => {
    axios.get('http://65.0.121.216:81/sanctum/csrf-cookie').then(() => {
      axios
        .post('http://65.0.121.216:81/api/login', credentials)
        .then((result) => resolve({ data: result.data }))
        .catch((error) => reject(error))
    })
  })
}
