import React, { useEffect, useState } from 'react'
import TodoForm from '../Components/TodoForm'
import { TodoProvider } from '../Contexts'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    const [todoTitle, setTodoTitle] = useState("")

    const addTodo = (todo) =>{
        setTodos((prev)=>[...prev,{id:Date.now(),todo}])
    }

    const getTodo = () =>{
        return todos
    }

    const deleteTodo = (todoId) =>{
        setTodos((todos)=> todos.filter((el)=> el.id !== todoId))
    }


    const updateTodo = (todo,id) =>{
       setTodos((prev)=>prev.map((item)=> item.id == id ? {...item,todo:todoTitle} : item))
       setSelectedId(null); 
       setTodoTitle(""); 
    }

    const handleClick = (todo,id) =>{
        setTodoTitle(todo)
        setSelectedId(id)
    }


    useEffect(()=>{
        let todos = JSON.parse(localStorage.getItem("todos"))
        if(todos && todos.length > 0){
            setTodos(todos)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
  return (
    <TodoProvider value={{todos,addTodo,getTodo,deleteTodo,updateTodo}}>
      <h1>Add Whats In your Bucket List!</h1>
      <TodoForm/>
      {
        todos?.map((el)=>{
            return(
                <div style={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
                    {
                         selectedId == el.id ? <input value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/> :  <h1>{el.todo}</h1>
                    }
                   
                    <button onClick={()=>deleteTodo(el.id)}>Delete</button>
                    
                    {
                        selectedId == el.id ?  <button onClick={()=>updateTodo(el.todo,el.id)}>Save</button> : <button onClick={()=>handleClick(el.todo,el.id)}>Edit</button>
                    }
                    
                </div>
            )
        })
      }
    </TodoProvider>
  )
}

export default Todo
