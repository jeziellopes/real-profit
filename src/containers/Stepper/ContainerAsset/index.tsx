
import { Grid } from '@material-ui/core';
import 'date-fns';
import React from 'react';
import SelectAsset from '../../../components/SelectAsset';

export default function ContainerAsset() {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <SelectAsset />
    </Grid>
  );
}
