import type { TodoState, TodoAction } from "./Todo.types"

const TodoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.text, isComplete: false }]
    case "REMOVE":
      return state.filter((_, i) => action.idx !== i)
    default:
      return state
  }
}

export default TodoReducer
