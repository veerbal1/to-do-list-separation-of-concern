import React from 'react';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({ id, name, description, status, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            onDelete(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        minWidth: 360,
      }}
    >
      <ListItemText primary={name} secondary={description} />
    </ListItem>
  );
};

export default Task;
