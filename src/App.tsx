import React from 'react'
import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import Router from './Router'

function App() {
  return (
    <Provider store={store}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        placement="bottom-center"
      >
        <Router />
      </ToastProvider>
    </Provider>
  )
}

export default App
