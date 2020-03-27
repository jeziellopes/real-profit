/* eslint-disable no-shadow */
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ptBR } from 'date-fns/locale';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDateTimestamp } from '../../services/time';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';

export default function DatePicker() {
  const { date } = useSelector((state: ApplicationState) => state.simulatorData);
  const dispatch = useDispatch();

  const handleDateChange = (date: Date | null) => {
    if (date !== null) {
      dispatch({
        type: SimulatorDataTypes.SET_DATE,
        payload: getDateTimestamp(date),
      });
    }
  };

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      locale={ptBR}
    >
      <Grid
        container
        justify="space-around"
        style={{
          width: '100%',
        }}
      >
        <KeyboardDatePicker
          style={{
            width: '100%',
          }}
          margin="normal"
          variant="dialog"
          label="Data inicial do investimento "
          format="dd/MM/yyyy"
          value={date}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
