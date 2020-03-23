import React from 'react';
import InputDate from '../InpuDate';
import InputAmount from '../InputAmount';

// import { Container } from './styles';

export default function PanelInvestment() {
  return (
    <div style={{
      alignSelf: 'center', padding: 20,
    }}
    >
      <InputAmount />
      <InputDate />
    </div>

  );
}

