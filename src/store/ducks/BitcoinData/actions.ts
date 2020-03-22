import { action } from 'typesafe-actions';
import { BitcoinData, BitcoinDataTypes } from './types';

export const loadRequest = () => action(BitcoinDataTypes.LOAD_REQUEST);

export const loadSuccess = (data: BitcoinData[]) => action(BitcoinDataTypes.LOAD_SUCCESS, {
  data,
});

export const loadFailure = () => action(BitcoinDataTypes.LOAD_FAILURE);
