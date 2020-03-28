import { Box, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Chart from '../../components/Chart';
import Copyright from '../../components/Copyright';
import useStyles from '../../styles/global';

export default function Simulator() {
  const classes = useStyles();

  const simulatorFixedHeight = clsx(classes.paper, classes.SimulatorFixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={simulatorFixedHeight}>
              <Chart />
            </Paper>
          </Grid>

        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>

      </Container>
    </main>
  );
}
