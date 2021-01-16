import React, { useState, useReducer } from "react"

type Action = { type: "add"; text: string } | { type: "remove"; idx: number }

interface TodoItemProps {
  text: string
  isComplete: boolean
}

type State = TodoItemProps[]

const TodoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, isComplete: false }]
    case "remove":
      return state.filter((_, i) => action.idx !== i)
    default:
      return state
  }
}

const Todo: React.FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const [todos, dispatch] = useReducer(TodoReducer, [])

  function addItem(e?: React.FormEvent<HTMLFormElement>): void {
    e?.preventDefault()
    if (!inputText) {
      return
    }
    dispatch({ type: "add", text: inputText })
    setInputText("")
  }

  function removeItem(idx: number): void {
    dispatch({ type: "remove", idx: idx })
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={e => addItem(e)}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={() => addItem()} type="button">
          Add Todo
        </button>
      </form>

      <TodoList todos={todos} removeItem={removeItem} />
    </div>
  )
}

interface TodoListProps {
  todos: State
  removeItem: (idx: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeItem }) => {
  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo: TodoItemProps, idx: number) => (
            <li key={idx}>
              <span>{todo.text}</span>
              <button onClick={() => removeItem(idx)} type="button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Todo
