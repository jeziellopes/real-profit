import { Link, Typography } from '@material-ui/core';
import * as React from 'react';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/jlllo/real-profit">
        Real Profit
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

