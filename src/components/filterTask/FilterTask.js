import React from 'react'
import { useDispatch } from 'react-redux'
import { completedTask, uncompletedTask } from '../../redux/action/todosActions'

const FilterTask = ({todo}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="select">
        <select  name="todos" className="filter-todo">
          <option value="all" >All</option>
          <option value="completed" onSelect={()=>dispatch(completedTask(todo.isDone))}>Completed</option>
          <option value="uncompleted" onSelect={()=>dispatch(uncompletedTask(todo.isDone))}>Uncompleted</option>
        </select>
      </div>
        </div>
    )
}

export default FilterTask
