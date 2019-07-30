import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/'

import App from './App'
import 'bootstrap-4-grid';
import './scss/main.scss'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

const rootElement = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)


