import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import reducers from "./reducers"

export default ({ element }) => {
  const store = createStore(reducers)
  return <Provider store={store}>{element}</Provider>
}
