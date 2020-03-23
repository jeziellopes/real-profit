import { Reducer } from 'redux';
import { InvestmentDateState, InvestmentDateTypes } from './types';

const INITIAL_STATE: InvestmentDateState = {
  data: {
    date: '1 ano atrás',
  },
};

const reducer: Reducer<InvestmentDateState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InvestmentDateTypes.CLICK_SET_INVESTMENT_DATE:
      console.log(action.type, action.data.date);
      return {
        ...state, data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
