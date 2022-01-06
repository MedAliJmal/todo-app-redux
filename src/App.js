import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';
import FilterTask from './components/filterTask/FilterTask';

function App() {
  return (
    <div className="App">
      <h1>Dali's Todos</h1>
      <div className='form-container'>
      <AddTask/>
      <FilterTask/>
      </div>
      <TaskList/>
    </div>
  );
}

export default App;
