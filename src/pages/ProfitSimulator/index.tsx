import React, { FunctionComponent } from 'react';
import BitcoinDataList from '../../components/BitcoinDataList';

interface ProfitSimulatorProps {
  title?: string
}

const ProfitSimulator: FunctionComponent<ProfitSimulatorProps> = () => (
  <>
    <h1>Profit Simulator</h1>
    <BitcoinDataList />
  </>

);

export default ProfitSimulator;
