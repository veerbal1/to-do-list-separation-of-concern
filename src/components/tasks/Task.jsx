import React from 'react';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ReplayIcon from '@mui/icons-material/Replay';

const Task = ({ id, name, description, status, onDelete, toggleComplete }) => {
  return (
    <ListItem
      secondaryAction={[
        <IconButton
          key={'done'}
          edge="end"
          aria-label="delete"
          onClick={() => {
            toggleComplete(id);
          }}
        >
          {status === 'complete' ? <ReplayIcon /> : <DoneIcon />}
        </IconButton>,
        <IconButton
          key={'delete'}
          edge="end"
          aria-label="delete"
          onClick={() => {
            onDelete(id);
          }}
        >
          <DeleteIcon />
        </IconButton>,
      ]}
      sx={{
        minWidth: 360,
        opacity: status === 'complete' ? 0.5 : 1,
      }}
    >
      <ListItemText primary={name} secondary={description} />
    </ListItem>
  );
};

export default Task;
