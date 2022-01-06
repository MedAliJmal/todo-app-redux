import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';
import FilterTask from './components/filterTask/FilterTask';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector(state => state.todos)
  return (
    <div className="App">
      <h1>Dali's Todos</h1>
      <div className='form-container'>
      <AddTask/>
      <FilterTask todo={todos}/>
      </div>
      <TaskList/>
    </div>
  );
}

export default App;
