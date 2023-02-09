import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'

export const Task = (todo) => {

    return (
        <div className="task" style={{textDecorationLine: todo.completed ? "line-through" : ""}}>
            <li>
                <input type="checkbox" onClick = {()=>todo.completeToDo(todo.id)}/>
                <a className="todoTitle">{todo.title}</a>
                <button onClick = {()=>todo.deleteToDo(todo.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
            </li>
        </div>
    )
}