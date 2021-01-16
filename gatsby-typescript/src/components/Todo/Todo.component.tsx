import React, { useState, useReducer } from "react"

import TodoReducer from "./Todo.reducer"
import type { TodoItemProps, TodoListProps } from "./Todo.types"

const Todo: React.FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const [todos, dispatch] = useReducer(TodoReducer, [])

  function addItem(e?: React.FormEvent<HTMLFormElement>): void {
    e?.preventDefault()
    if (!inputText) {
      return
    }
    dispatch({ type: "ADD", text: inputText })
    setInputText("")
  }

  function removeItem(idx: number): void {
    dispatch({ type: "REMOVE", idx: idx })
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
