import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { InvestmentAmountTypes } from '../../store/ducks/InvestmentAmountReducer/types';

// import { Container } from './styles';

export default function InputAmount() {
  const { amount } = useSelector((state: ApplicationState) => state.investmentAmountReducer.data);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(amount);

  function setAmount() {
    dispatch({
      type: InvestmentAmountTypes.CLICK_SET_INVESTMENT_AMOUNT,
      data: {
        amount: inputValue,
      },
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

