/* eslint-disable no-shadow */
import { Button, Container, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { differenceInCalendarDays } from 'date-fns';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from '../../components/DatePicker';
import InputInvestment from '../../components/InputInvestment/indext';
import ProfitCard from '../../components/ProfitCard';
import SelectAsset from '../../components/SelectAsset';
import Title from '../../components/Title';
import { getDateTimestamp, timestampDate } from '../../services/time';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';
import useStyles from '../../styles/global';

export default function AddAsset() {
  const { date, asset, investment } = useSelector((state: ApplicationState) => state.simulatorData);
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
                  percent={0.5}
                  profit={1000}
                />
              </Grid>

            </Grid>

          </Grid>
        </Grid>

      </Container>

    </>
  );
}

// <Grid
//   container
//   spacing={3}
// >

//   <Grid item xs={12}>
//     <ProfitCard title="Investimento" value="R$ 2.000,00" description="em 15 de Janeiro de 2018" />

//   </Grid>

// </Grid>

// {/* Recent Orders */}
// <Grid item xs={12}>
//   <Paper className={classes.paper}>

//     <Orders />

//   </Paper>
// </Grid>

// <Container maxWidth="lg" className={classes.container}>

//         <Grid item xs={12} md={8} lg={9}>
//           <Grid
//             container
//             spacing={3}
//             direction="column"
//             justify="center"
//             style={{
//               height: '100%',
//             }}
//           >
//             <Grid item>
//               <SelectAsset />
//             </Grid>
//             <Grid
//               item
//             >
//               <DatePicker />
//             </Grid>
//             <ContainerInvestment />
//           </Grid>
//         </Grid>

//         <Button
//           onClick={handleClick}
//           variant="contained"
//           color="primary"
//           className={classes.processingButton}
//         >
//           Processar
//         </Button>

//       </Container>

// import { Fab } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';

// <Fab color="primary" aria-label="add">
// <AddIcon />
// </Fab>
