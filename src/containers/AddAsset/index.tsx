/* eslint-disable no-shadow */
import { Button, Container, Grid } from '@material-ui/core';
import { differenceInCalendarDays } from 'date-fns';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from '../../components/DatePicker';
import InputInvestment from '../../components/InputInvestment/indext';
import ProfitCard from '../../components/ProfitCard';
import SelectAsset from '../../components/SelectAsset';
import Title from '../../components/Title';
import { percentdecimal } from '../../services/dataset';
import { getDateTimestamp, timestampDate } from '../../services/time';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';
import useStyles from '../../styles/global';

export default function AddAsset() {
  const { asset, data, investment, date, pricebuy } = useSelector((state: ApplicationState) => state.simulatorData);
  const classes = useStyles();
  const dispatch = useDispatch();
  const pricenow = data[data.length - 1].close;
  const profitpercentdecimal = percentdecimal(investment, pricenow, pricebuy);
  const profit = investment * (profitpercentdecimal + 1);

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

  function handleClick() {
    setParams();
  }

  return (
    <>
      <Title>Detalhes dos rendimentos</Title>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          spacing={3}
          justify="center"
        >
          <Grid item xs={12} md={5} lg={5}>
            <Grid
              container
              spacing={3}
              direction="column"
              justify="center"
            >
              <Grid item>
                <SelectAsset />
              </Grid>
              <Grid item>
                <DatePicker />
              </Grid>
              <Grid item>
                <InputInvestment />
              </Grid>
            </Grid>
            <Button
              onClick={handleClick}
              variant="contained"
              color="primary"
              className={classes.addAssetButton}
            >
              Processar
            </Button>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Grid
              container
              spacing={3}
            >
              <Grid item xs={12}>
                <ProfitCard
                  title="Resumo dos investimentos"
                  investment={investment}
                  profitpercent={profitpercentdecimal}
                  profit={profit}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
