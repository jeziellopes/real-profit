import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nowSubYear } from '../../services/time';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';

// import { Container } from './styles';

export default function InputDate() {
  const { fromsymbol, tosymbol, limit, totimestamp } = useSelector((state: ApplicationState) => state.simulatorData.params);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState((limit / 365).toString());

  function setDate() {
    dispatch({
      type: SimulatorDataTypes.SET_PARAMS,
      payload: {
        fromsymbol: 'BTC',
        tosymbol: 'USD',
        // eslint-disable-next-line radix
        limit: parseInt(inputValue) * 365,
        // eslint-disable-next-line radix
        totimestamp: nowSubYear(parseInt(inputValue)),
      },
    });
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);
  }

  return (
    <div style={{
      alignSelf: 'center', padding: 20,
    }}
    >
      <h4>Data do Investimento: </h4>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="button" onClick={setDate}>
        Alterar
      </button>
    </div>

  );
}

