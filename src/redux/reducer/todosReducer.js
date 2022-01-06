import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTERCOM_TASK, FILTERUNC_TASK, } from "../types";

const initialState = {
  todos: [
    { id: Math.random(), task: "Add filter to todo list", isDone: false },
    { id: Math.random(), task: "Retry counter redux", isDone: true },
    {
      id: Math.random(),
      task: "Finish redux course on platform",
      isDone: false,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COMPLETE_TASK:
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((elt) => elt.id !== payload),
      };
    case ADD_TASK:
      return { ...state, todos: [...state.todos, payload] };

    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload.id ? { ...elt, task: payload.value } : elt
        ),
      };
    case FILTERCOM_TASK : 
    return {...state,todos:state.isDone.map().filter((elt) => elt.isDone === true)};
    case FILTERUNC_TASK :
      return {...state,todos:state.isDone.map().filter((elt) => elt.isDone === false)};
    default:
      return state;
  }
};

export default todoReducer;
