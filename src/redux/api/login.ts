export const fetchLogin = (credentials: object) => {
  return new Promise<{ data: object }>((resolve) => {
    setTimeout(() => {
      resolve({ data: { name: 'John' } })
    }, 500)
  })
}
