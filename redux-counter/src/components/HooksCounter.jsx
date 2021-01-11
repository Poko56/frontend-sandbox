import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes"

function Counter() {
  const { value } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
