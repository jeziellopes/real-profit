
import { Grid } from '@material-ui/core';
import 'date-fns';
import React from 'react';
import DatePicker from '../../../components/DatePicker';

export default function ContainerDate() {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <DatePicker />
    </Grid>

  );
}
