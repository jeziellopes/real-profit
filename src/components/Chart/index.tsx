
import { Paper } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import AddAsset from '../../containers/AddAsset';
import { currencyString } from '../../services/currency';
import { formatFullTime, formatTime } from '../../services/time';
import { ApplicationState } from '../../store';
import Title from '../Title';

const useStyles = makeStyles((theme: Theme) => createStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function Chart() {
  const { data } = useSelector((state: ApplicationState) => state.simulatorData);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState({
    assetone: 1, treasury: 1,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;
    setOpacity({
      ...opacity, [dataKey]: 0.5,
    });
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;
    setOpacity({
      ...opacity, [dataKey]: 1,
    });
  };

  return (
    <>
      <Title>Comparativo de rendimentos</Title>
      <ResponsiveContainer>
        <LineChart
          onClick={handleClickOpen}
          style={{
            cursor: 'pointer',
          }}
          data={data}
          margin={{
            top: 10, right: 30, left: 20, bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            interval="preserveStartEnd"
            dataKey="time"
            allowDataOverflow
            tickFormatter={(time) => formatTime(time)}
            angle={-20}
            textAnchor="end"
          />
          <YAxis
            scale="auto"
            type="number"
            tickFormatter={(number) => currencyString(number)}
            domain={[(dataMin) => -(Math.abs(dataMin) * 0.2), (dataMax) => (dataMax * 1.2)]}
            label={{
              value: 'Rendimentos (R$)', position: 'left', angle: -90, dy: -30,
            }}
          />
          <Tooltip labelFormatter={(time) => formatFullTime(time)} />
          <Legend
            height={36}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            verticalAlign="top"
          />
          <Line
            name={data[0].title}
            strokeWidth={2}
            type="monotone"
            dataKey="assetone"
            strokeOpacity={opacity.treasury}
            stroke="#8884d8"
            activeDot={{
              r: 5,
            }}
            dot={false}
          />
          <Line
            name="Tesouro Prefixado"
            strokeWidth={3}
            type="monotone"
            dataKey="treasury"
            strokeOpacity={opacity.assetone}
            stroke="orange"
            dot={false}
            activeDot={{
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent>
          <AddAsset />
          <Paper
            elevation={3}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
