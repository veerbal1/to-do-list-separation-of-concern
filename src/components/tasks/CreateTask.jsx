import { Grid, Stack } from '@mui/material';
import React from 'react';
import Button from '../ui/buttons';
import Input from '../ui/input';

const CreateTask = () => {
  return (
    <Grid item xs={12}>
      <Stack direction="column" spacing={2}>
        <div>
          <Stack direction="row" spacing={2}>
            <Input label="New Task" />
            <Input label="Description" />
          </Stack>
        </div>
        <div>
          <Button title="Create Task" fullWidth/>
        </div>
      </Stack>
    </Grid>
  );
};

export default CreateTask;
