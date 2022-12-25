import { useState } from 'react';
import './App.css';
import TaskList from './components/tasks/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Tasks</h1>
      <TaskList />
    </div>
  );
}

export default App;
