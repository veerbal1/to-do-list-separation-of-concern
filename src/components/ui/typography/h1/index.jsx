import { Typography } from '@mui/material';
import React from 'react';

const H1 = ({ title, ...props }) => {
  return (
    <Typography variant="h1" {...props}>
      {title}
    </Typography>
  );
};

export default H1;
