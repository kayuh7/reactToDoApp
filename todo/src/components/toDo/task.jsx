import { useState } from "react"

export const Task = (todo) => {


    return (
        <div className="task" style={{textDecorationLine: todo.completed ? "line-through" : ""}}>
            <li>
                {todo.edit ? 
                <>
                    <input type="text" placeholder={todo.title} value={todo.newToDo} onChange={(e)=>todo.setUpdateToDo(e.target.value)}/>
                    <button onClick={()=>todo.saveToDo(todo.id)}>o</button>
                </> : 
                <>{todo.title}</>}
                <button onClick = {()=>todo.editToDo(todo.id)}>\</button>
                <button onClick = {()=>todo.deleteToDo(todo.id)}>x</button>
                <button onClick = {()=>todo.completeToDo(todo.id)}>_/</button>
            </li>
        </div>
    )
}