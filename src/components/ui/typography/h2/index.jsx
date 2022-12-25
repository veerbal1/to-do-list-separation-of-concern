import { Typography } from '@mui/material';
import React from 'react';

const H2 = ({ title, ...props }) => {
  return (
    <Typography variant="h2" {...props}>
      {title}
    </Typography>
  );
};

export default H2;
