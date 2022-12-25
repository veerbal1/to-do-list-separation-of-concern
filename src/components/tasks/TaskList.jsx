import { List } from '@mui/material';
import React from 'react';
import useTasks from '../../hooks/useTasks';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <List dense={true}>
      {tasks.map(({ id, name, description, status }) => (
        <Task key={id} name={name} description={description} status={status} />
      ))}
    </List>
  );
};

export default TaskList;
