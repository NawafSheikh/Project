import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
//import 'todomvc-app-css/index.css'

const store = configureStore({
  reducer: reducer
})


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
