import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK,} from "../types";

const initialState = {
  todos: [
    { id: Math.random(), task: "Add filter to todo list", isDone: true },
    { id: Math.random(), task: "Read Course API", isDone: false },
    { id: Math.random(), task: "Complete MIS Brochure design", isDone: false },
    { id: Math.random(), task: "Retry counter redux", isDone: true },
    {
      id: Math.random(),
      task: "Finish redux course on platform",
      isDone: false,
    },
  ],
  filter:false,
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
    case FILTER_TASK :
      return {...state,filter:!state.filter}
    default:
      return state;
  }
};

export default todoReducer;
