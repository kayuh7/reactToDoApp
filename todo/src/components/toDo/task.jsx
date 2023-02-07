export const Task = (todo) => {


    return (
        <div className="task" style={{textDecorationLine: todo.completed ? "line-through" : ""}}>
            <li>
                {todo.title}
                <button onClick = {()=>todo.deleteToDo(todo.id)}>x</button>
                <button onClick = {()=>todo.completeToDo(todo.id)}>_/</button>
            </li>
        </div>
    )
}