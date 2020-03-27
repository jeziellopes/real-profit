import { action } from 'typesafe-actions';
import { AssetsNameData, SimulatorData, SimulatorDataTypes } from './types';

export const loadAssetsRequest = () => action(SimulatorDataTypes.ASSETS_REQUEST);

export const loadAssetsSuccess = (assets: AssetsNameData) => action(SimulatorDataTypes.ASSETS_SUCCESS,
  assets);

export const loadRequest = () => action(SimulatorDataTypes.LOAD_REQUEST);

export const loadSuccess = (data: SimulatorData) => action(SimulatorDataTypes.LOAD_SUCCESS, {
  data,
});

export const loadFailure = () => action(SimulatorDataTypes.LOAD_FAILURE);

