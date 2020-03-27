/* eslint-disable no-shadow */

/* eslint-disable no-nested-ternary */
import { Button, Container, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { differenceInCalendarDays } from 'date-fns';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { getDateTimestamp, timestampDate } from '../../services/time';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';
import externalStyles from '../../styles/global';
import ContainerAsset from './ContainerAsset';
import ContainerDate from './ContainerDate';
import ContainerInvestment from './ContainerInvestment';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    alignSelf: 'right',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  circularProgress: {
    alignSelf: 'center',
  },
  processingInformations: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  gridInputs: {
    height: '200px',
  },
  stepperOptions: {
    textAlign: 'center',
  },
}));

export default function CustomizedSteppers() {
  const classes = useStyles();
  const externalClasses = externalStyles();
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const { date, asset, loading } = useSelector((state: ApplicationState) => state.simulatorData);
  const steps = ['Selecione o ativo...', 'Data do investimento', 'Valor investido'];

  function setParams() {
    const datefrom = timestampDate(date);
    const dateto = new Date();

    dispatch({
      type: SimulatorDataTypes.SET_PARAMS,
      payload: {
        fromsymbol: asset.key,
        tosymbol: 'BRL',
        limit: differenceInCalendarDays(dateto, datefrom),
        totimestamp: getDateTimestamp(dateto),
      },
    });
  }

  function setSimulator(simulator: boolean) {
    dispatch({
      type: SimulatorDataTypes.SET_SIMULATOR,
      payload: simulator,
    });
  }

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep === steps.length - 1) {
      setParams();

      const timer = setTimeout(() => setSimulator(true), 600);

      return () => clearTimeout(timer);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Title>Simulador de Rentabilidade</Title>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        style={{
          padding: '120px',
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.stepperOptions}>
        {activeStep === steps.length ? (
          <div className={classes.processingInformations}>
            <Typography className={classes.instructions}>
              Processando informações
            </Typography>
            <CircularProgress className={classes.circularProgress} />
          </div>
        ) : (
          <Container maxWidth="lg" className={externalClasses.container}>
            <Grid
              container
              direction="row"
              justify="center"
              className={classes.gridInputs}
            >
              {activeStep === 0 ? <ContainerAsset /> : (activeStep === 1 ? <ContainerDate /> : <ContainerInvestment />)}
            </Grid>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Voltar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Processar' : 'Avançar'}
              </Button>
            </div>
          </Container>
        )}
      </div>
    </div>
  );
}

// <Button onClick={handleReset} className={classes.button}>
// Alterar dados
// </Button>
