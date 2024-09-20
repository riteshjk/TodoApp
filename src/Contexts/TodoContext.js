import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: () =>{},
    getTodo: () =>{},
    deleteTodo: () =>{},
    updateTOdo: () =>{}
})

export const UseTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider