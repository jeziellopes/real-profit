import { action } from 'typesafe-actions';
import { PreFixedTreasuryData, PreFixedTreasuryDataTypes } from './types';

export const loadRequest = () => action(PreFixedTreasuryDataTypes.LOAD_REQUEST);

export const loadSuccess = (data: PreFixedTreasuryData[]) => action(PreFixedTreasuryDataTypes.LOAD_SUCCESS, {
  data,
});

export const loadFailure = () => action(PreFixedTreasuryDataTypes.LOAD_FAILURE);
