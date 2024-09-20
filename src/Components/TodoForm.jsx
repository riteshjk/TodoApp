import React, { useState } from 'react'
import { UseTodo } from '../Contexts'


const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const {addTodo,getTodo} = UseTodo()
    const todos = getTodo()
    console.log(todos,"ritesh")
  
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
