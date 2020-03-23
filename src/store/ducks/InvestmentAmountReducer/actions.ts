import { action } from 'typesafe-actions';
import { InvestmentAmount, InvestmentAmountTypes } from './types';

export const clickButton = (data: InvestmentAmount) => action(InvestmentAmountTypes.CLICK_SET_INVESTMENT_AMOUNT, {
  data,
});
