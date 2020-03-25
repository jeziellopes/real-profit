import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';

// import { Container } from './styles';

export default function InputAmount() {
  const { investment } = useSelector((state: ApplicationState) => state.simulatorData);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(investment);

  function setAmount() {
    dispatch({
      type: SimulatorDataTypes.SET_INVESTMENT,
      investment: inputValue,
    });
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setInputValue(Number(e.currentTarget.value));
  }

  return (
    <div style={{
      alignSelf: 'center', padding: 20,
    }}
    >
      <h4>Valor do Investimento: </h4>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="button" onClick={setAmount}>
        Alterar
      </button>
    </div>

  );
}

