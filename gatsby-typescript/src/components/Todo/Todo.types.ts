export type TodoAction =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; idx: number }

export type TodoState = TodoItemProps[]

export type TodoItemProps = {
  text: string
  isComplete: boolean
}

export type TodoListProps = {
  todos: TodoState
  removeItem: (idx: number) => void
}
