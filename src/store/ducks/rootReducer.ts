import { combineReducers } from 'redux';
import bitcoinData from './BitcoinData';
import investmentAmountReducer from './InvestmentAmountReducer';
import investmentDateReducer from './InvestmentDateReducer';
import preFixedTreasuryData from './PreFixedTreasuryData';

export default combineReducers({
  bitcoinData, preFixedTreasuryData, investmentAmountReducer, investmentDateReducer,
});
