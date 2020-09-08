import React, { useReducer } from 'react';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { reducer, initialState } from './reducers/reducer'
import './App.css';


function App() {

  const [{task}, dispatch] = useReducer(reducer, initialState);
  console.log(task);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm dispatch={dispatch} />
      <TaskList dispatch={dispatch} state={task}/>
    </div>
  );
}

export default App;
