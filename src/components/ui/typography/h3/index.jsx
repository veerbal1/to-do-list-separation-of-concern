import { Typography } from '@mui/material';
import React from 'react';

const H3 = ({ title, ...props }) => {
  return (
    <Typography variant="h3" {...props}>
      {title}
    </Typography>
  );
};

export default H3;
