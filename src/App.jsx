import { Grid } from '@mui/material';
import './App.css';
import CreateTask from './components/tasks/CreateTask';
import TaskList from './components/tasks/TaskList';
import H3 from './components/ui/typography/h3';
import useTasks from './hooks/useTasks';

function App() {
  const { createTask, tasks, deleteTask, toggleComplete } = useTasks();

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
        }}
        justifyContent="center"
      >
        <Grid item xs={12}>
          <H3 title="Task Manager" align="center" />
        </Grid>
        <CreateTask create={createTask} />
        <TaskList
          list={tasks}
          onDelete={deleteTask}
          toggleComplete={toggleComplete}
        />
      </Grid>
    </div>
  );
}

export default App;
