import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTERCOM_TASK, FILTERUNC_TASK } from "../types";

export const completeTask = (payload) => ({
    type: COMPLETE_TASK,
    payload
})

export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload
})


export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
})


export const editTask = (id,value) => ({
    type: EDIT_TASK,
    payload:{id,value}
})

export const completedTask = (payload) => ({
    type: FILTERCOM_TASK,
    payload
})

export const uncompletedTask = (payload) => ({
    type: FILTERUNC_TASK,
    payload
})
