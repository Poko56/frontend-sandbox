import React, { useState, useEffect, useRef } from "react"

const Form: React.FC = () => {
  const [name, setName] = useState<string>("")
  const nameRef = useRef<HTMLInputElement>(null)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value)
  }

  function handleButtonClick(): void {
    nameRef.current?.focus()
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    alert(nameRef.current?.value)
  }

  useEffect(() => {
    nameRef.current?.focus()
  }, [nameRef])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          ref={nameRef}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick} type="button">
          Focus the input
        </button>
        <button type="submit">Submit</button>
      </form>
      <p>Name: {name}</p>
    </div>
  )
}

export default Form
