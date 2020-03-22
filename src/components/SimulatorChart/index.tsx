import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as BitcoinDataActions from '../../store/ducks/BitcoinData/actions';
import { BitcoinData } from '../../store/ducks/BitcoinData/types';

interface StateProps {
  bitcoinData: BitcoinData[]
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class SimulatorChart extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { bitcoinData } = this.props;

    return (
      <LineChart
        width={900}
        height={300}
        data={bitcoinData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={['dataMin', 'dataMax']} />
        <Tooltip />
        <Legend height={5} />
        <Line
          type="monotone"
          dataKey="open"
          stroke="#8884d8"
          activeDot={{
            r: 8,
          }}
          dot={false}
        />
        <Line type="monotone" dataKey="close" stroke="#82ca9d" dot={false} />
      </LineChart>
    );
  }
}
const mapStateToProps = (state: ApplicationState) => ({
  bitcoinData: state.bitcoinData.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BitcoinDataActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimulatorChart);
