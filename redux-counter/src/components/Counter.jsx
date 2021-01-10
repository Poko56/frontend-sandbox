import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../actions'

function Counter({ value, increment, decrement, reset }) {
  return (
    <div>
      <div>
        Value: <span>{value}</span>
      </div>
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
  )
}

const mapStateToProps = (state) => ({ value: state.counter.value })

export default connect(mapStateToProps, { increment, decrement, reset })(
  Counter,
)
