
import { Paper } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import AddAsset from '../../containers/AddAsset';
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
  const { data, params } = useSelector((state: ApplicationState) => state.simulatorData);
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
          width={1200}
          height={500}
          data={data}
          margin={{
            top: 10, right: 30, left: 20, bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" allowDataOverflow tickFormatter={(time) => formatTime(time)} />
          <YAxis type="number" scale="sqrt" />
          <Tooltip labelFormatter={(time) => formatFullTime(time)} />
          <Legend
            height={8}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';

//   state = {
//     opacity: {
//       uv: 1,
//       pv: 1,
//     },
//   };

//   handleMouseEnter = (o) => {
//     const { dataKey } = o;
//     const { opacity } = this.state;

//     this.setState({
//       opacity: {
//         ...opacity, [dataKey]: 0.5,
//       },
//     });
//   }

//   handleMouseLeave = (o) => {
//     const { dataKey } = o;
//     const { opacity } = this.state;

//     this.setState({
//       opacity: {
//         ...opacity, [dataKey]: 1,
//       },
//     });
//   }

//   render() {
//     const { opacity } = this.state;

//     return (
//       <div>
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5, right: 30, left: 20, bottom: 5,
//           }}
// >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
//           <Line
//             type="monotone"
//             dataKey="pv"
//             strokeOpacity={opacity.pv}
//             stroke="#8884d8"
//             activeDot={{
//               r: 8,
//             }}
//           />
//           <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#82ca9d" />
//         </LineChart>
//         <p className="notes">Tips: Hover the legend !</p>
//       </div>
//     );
//   }
// }
