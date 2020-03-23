import { action } from 'typesafe-actions';
import { InvestmentDate, InvestmentDateTypes } from './types';

export const clickButton = (data: InvestmentDate) => action(InvestmentDateTypes.CLICK_SET_INVESTMENT_DATE, {
  data,
});
