import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { InvestmentDateTypes } from '../../store/ducks/InvestmentDateReducer/types';

// import { Container } from './styles';

export default function InputDate() {
  const { date } = useSelector((state: ApplicationState) => state.investmentDateReducer.data);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(date);

  function setDate() {
    dispatch({
      type: InvestmentDateTypes.CLICK_SET_INVESTMENT_DATE,
      data: {
        date: inputValue,
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

