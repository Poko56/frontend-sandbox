import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import Counter from './components/Counter'
import { logger } from './middlewares'
import reducers from './reducers'
import './styles.css'

const middlewares = applyMiddleware(logger)
const store = createStore(reducers, middlewares)

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter</h1>
        <Counter />
      </div>
    </Provider>
  )
}
