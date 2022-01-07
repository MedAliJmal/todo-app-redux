import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../taskItem/TaskItem'

const TaskList = () => {
    const {todos,filter} = useSelector(state => state.todoReducer)
    return (
        
        <div className='todo-list'>
            
        { !filter ? 
            todos.map((elt,index)=> <TaskItem todo={elt} key={index}/> ) : todos.filter(todo=>!todo.isDone).map((elt,index)=> <TaskItem todo={elt} key={index}/> )
        }
        </div>
    )
}

export default TaskList
