import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../../redux/action/todosActions'
import EditTask from '../editTask/EditTask'

const TaskItem = ({todo}) => {

    const dispatch = useDispatch()
    return (
        <div className='todo-container'>
            <div className='todo'>
            <div className='todo-item'> <h4 className={todo.isDone ? "done" : null}>{todo.task}</h4> </div>
            <button className="complete-btn" onClick={()=>dispatch(completeTask(todo.id))}><i className="fas fa-check"/></button>
            <EditTask todo={todo}/>
            <button className="trash-btn" onClick={()=>dispatch(deleteTask(todo.id))}><i className="fas fa-trash"/></button>
            </div>
        </div>
    )
}

export default TaskItem
