import React from 'react'

export const EditBar = (todo) => {
    return (
        <div className = "editBar">
            <input type="text" placeholder={todo.title} value={todo.newToDo} onChange={(e)=>todo.setNewToDo(e.target.value)}/>
            <button onClick={todo.updateToDo}>-</button>
        </div>
    )
}
