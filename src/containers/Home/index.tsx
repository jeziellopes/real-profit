import { Box, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Copyright from '../../components/Copyright';
import useStyles from '../../styles/global';
import Stepper from '../Stepper';

export default function Home() {
  const classes = useStyles();

  const SimulatorHeight = clsx(classes.paper, classes.SimulatorFixedHeight);

  return (
    <main className={classes.content}>

      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>

        <Grid container spacing={3} justify="space-around">
          <Grid item md={12}>
            <Paper className={SimulatorHeight}>
              <Stepper />
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
