import React from "react"
import { connect } from "react-redux"
import { increment, decrement, reset } from "../actions"

const Counter = ({ value, increment, decrement, reset }) => (
  <div>
    <div>
      Value: <span>{value}</span>
    </div>
    <div style={{ display: "flex", margin: "1rem 0" }}>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  </div>
)

const mapStateToProps = ({ counter }) => {
  return { value: counter.value }
}

export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
})(Counter)
