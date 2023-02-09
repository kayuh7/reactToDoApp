import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export const InputBar = (todo) => {

    return (
        <div className="inputBar">
            <input className="bar" type="text" placeholder="Add Todo ... " value={todo.newToDo} onChange={(e)=>todo.setNewToDo(e.target.value)}/>
            <button className="addButton" onClick={todo.addToDo}><FontAwesomeIcon className="plus" icon={faPlus} /></button>
        </div>
    )
}
