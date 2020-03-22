import { combineReducers } from 'redux';
import bitcoinData from './BitcoinData';
import preFixedTreasuryData from './PreFixedTreasuryData';

export default combineReducers({
  bitcoinData, preFixedTreasuryData,
});
