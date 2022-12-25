import { Grid } from '@mui/material';
import './App.css';
import CreateTask from './components/tasks/CreateTask';
import TaskList from './components/tasks/TaskList';
import H3 from './components/ui/typography/h3';

function App() {
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
        <CreateTask />
      </Grid>
      <TaskList />
    </div>
  );
}

export default App;
