import React, { FunctionComponent } from 'react';
import PanelInvestment from '../../components/PanelInvestment';
import SimulatorChart from '../../components/SimulatorChart';

interface ProfitSimulatorProps {
  title?: string
}

const ProfitSimulator: FunctionComponent<ProfitSimulatorProps> = () => (
  <>
    <h1>Profit Simulator</h1>
    <SimulatorChart />
    <PanelInvestment />
  </>

);

export default ProfitSimulator;
