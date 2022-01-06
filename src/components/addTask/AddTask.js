import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/action/todosActions'

const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleAdd = () => {
        if (text){
            dispatch (addTask({id:Math.random(),task:text,isDone:false}))
            setText("")
        } else {alert("Do not enter an empty field!")}
            
    }
    return (
        
        <div className='add'>
            <div className='add-bar'>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
            <button className='addbtn' onClick={handleAdd}><i className="fas fa-plus-square"></i></button>
            </div>
        </div>
    )
}

export default AddTask
