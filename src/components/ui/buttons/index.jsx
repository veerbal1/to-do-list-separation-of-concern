import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ title, ...props }) => {
  return (
    <MUIButton size="small" variant="contained" {...props}>
      {title}
    </MUIButton>
  );
};

export default Button;
