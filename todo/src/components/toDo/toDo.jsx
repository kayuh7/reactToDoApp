import { useState } from "react"
import { InputBar } from "./inputBar"
import { Task } from "./task"

export const Todo = () => {

    const [toDo, setToDo] = useState([])

    const [newToDo, setNewToDo] = useState('')

    const addToDo = () => {
        if(newToDo){
            let newTask = {
                id: toDo.length + 1,
                title: newToDo,
                completed: false,
            }
            setToDo([...toDo, newTask])
            setNewToDo("")
        }
    }

    const deleteToDo = (id) => {
        setToDo(toDo.filter((todo) => todo.id !== id))
    }

    const completeToDo = (id) => {
        setToDo(
            toDo.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            })
        )
    }

    
    return (
        <div className="todoContainer">
            <h1>my todo list</h1>
            <InputBar newToDo = {newToDo} setNewToDo = {setNewToDo} addToDo = {addToDo}/>
            {toDo && toDo.length ? "" : "No Tasks..." }
            {toDo && toDo.map(todo => {
                return(
                    <Task title={todo.title} id={todo.id} completed={todo.completed} deleteToDo={deleteToDo} 
                    completeToDo={completeToDo}/>
                )
            })}
        </div>
    )
}