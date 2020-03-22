import React, { FunctionComponent } from 'react';
import SimulatorChart from '../../components/SimulatorChart';

interface ProfitSimulatorProps {
  title?: string
}

const ProfitSimulator: FunctionComponent<ProfitSimulatorProps> = () => (
  <>
    <h1>Profit Simulator</h1>
    <SimulatorChart />
  </>

);

export default ProfitSimulator;
