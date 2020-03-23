import { Reducer } from 'redux';
import { InvestmentAmountState, InvestmentAmountTypes } from './types';

const INITIAL_STATE: InvestmentAmountState = {
  data: {
    amount: 20000,
  },
};

const reducer: Reducer<InvestmentAmountState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InvestmentAmountTypes.CLICK_SET_INVESTMENT_AMOUNT:
      console.log(action.type, action.data.amount);
      return {
        ...state, data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
