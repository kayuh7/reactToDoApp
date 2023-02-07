import { useState } from "react"
import { InputBar } from "./searchBar"
import { Task } from "./task"

export const Todo = () => {

    const [toDo, setToDo] = useState([
        // { "id": 1, "title": "Task 1", "completed":false},
        // { "id": 2, "title": "Task 2", "completed":false}
    ])

    const [newToDo, setNewToDo] = useState('')

    const [updateToDo, setUpdateToDo] = useState([])

    const addToDo = () => {
        if(newToDo){
            let newTask = {
                id: toDo.length + 1,
                title: newToDo,
                completed: false,
                edit: false
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
                if(todo.id === id && newToDo){
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            })
        )
    }
    
    const editToDo = (id) => {
        setToDo(
            toDo.map((todo) => {
                if(todo.id === id){
                    return {...todo, edit: !todo.edit}
                } else {
                    return todo
                }
            })
        )
    }

    const saveToDo = (id) => {
        if (toDo.findIndex((todo) => todo.id == id)){
            let updatedToDo = {
                id: toDo.id,
                title: updateToDo,
                completed: false,
                edit: false
            }
            setToDo([...toDo, updatedToDo])
            setUpdateToDo('')
        }
    }
    
    return (
        <div className="todoContainer">
            <InputBar newToDo = {newToDo} setNewToDo = {setNewToDo} addToDo = {addToDo}/>
            {toDo && toDo.length ? "" : "No Tasks..." }
            {toDo && toDo.map(todo => {
                return(
                    <Task title={todo.title} id={todo.id} completed={todo.completed} edit={todo.edit} deleteToDo={deleteToDo} 
                    updateToDo={saveToDo} 
                    editToDo={editToDo}
                    completeToDo={completeToDo}/>
                )
            })}
        </div>
    )
}