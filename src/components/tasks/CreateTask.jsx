import { Grid, Stack } from '@mui/material';
import React, { useCallback, useId } from 'react';
import useTasks from '../../hooks/useTasks';
import Button from '../ui/buttons';
import Input from '../ui/input';

const CreateTask = ({ create }) => {
  const [task, setTask] = React.useState({
    title: '',
    description: '',
    status: 'pending',
  });

  const handleCreateTask = () => {
    // If title is empty, do not create task
    if (!task.title) {
      return;
    }
    
    create({ ...task, id: crypto.randomUUID() });
    setTask({
      title: '',
      description: '',
    });
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <Grid item xs={12}>
      <Stack direction="column" spacing={2}>
        <div>
          <Stack direction="row" spacing={2}>
            <Input
              name="title"
              label="New Task"
              value={task.title}
              onChange={handleInputChange}
            />
            <Input
              name="description"
              label="Description"
              value={task.description}
              onChange={handleInputChange}
            />
          </Stack>
        </div>
        <div>
          <Button title="Create Task" fullWidth onClick={handleCreateTask} />
        </div>
      </Stack>
    </Grid>
  );
};

export default CreateTask;
