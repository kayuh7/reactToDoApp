import React from 'react'

export const InputBar = (todo) => {

    return (
        <div className = "inputBar">
            <input type="text" placeholder="Add Todo ... " value={todo.newToDo} onChange={(e)=>todo.setNewToDo(e.target.value)}/>
            <button onClick={todo.addToDo}>+</button>
        </div>
    )
}
