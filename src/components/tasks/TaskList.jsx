import { Grid, List } from '@mui/material';
import React from 'react';
import useTasks from '../../hooks/useTasks';
import Task from './Task';

const TaskList = ({ list, onDelete }) => {
  return (
    <Grid item xs={12}>
      <List dense={true}>
        {list.map(({ id, title, description, status }) => (
          <Task
            key={id}
            id={id}
            name={title}
            description={description}
            status={status}
            onDelete={onDelete}
          />
        ))}
      </List>
    </Grid>
  );
};

export default TaskList;
