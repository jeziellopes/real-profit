import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { bindActionCreators, Dispatch } from 'redux';
import { formatFullTime, formatTime } from '../../services/time';
import { ApplicationState } from '../../store';
import * as SimulatorDataActions from '../../store/ducks/SimulatorData/actions';
import { AssetData, ParamsData } from '../../store/ducks/SimulatorData/types';

interface StateProps {
  assetData: AssetData[]
  paramsData: ParamsData
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
    const { assetData } = this.props;

    return (
      <LineChart
        style={{
          cursor: 'pointer',
        }}
        width={700}
        height={300}
        data={assetData}
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
        />
        <Line
          name="bitcoin"
          strokeWidth={1.5}
          type="monotone"
          dataKey="bitcoin"
          stroke="#8884d8"
          activeDot={{
            r: 5,
          }}
          dot={false}
        />
        <Line
          name="tesouro prefixado"
          strokeWidth={1.5}
          type="monotone"
          dataKey="treasury"
          stroke="#82ca9d"
          dot={false}
          activeDot={{
            r: 5,
          }}
        />
      </LineChart>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  assetData: state.simulatorData.data,
  paramsData: state.simulatorData.params,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SimulatorDataActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimulatorChart);
