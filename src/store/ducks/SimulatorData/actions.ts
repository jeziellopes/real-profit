import { action } from 'typesafe-actions';
import { ParamsData, SimulatorData, SimulatorDataTypes } from './types';

export const loadRequest = () => action(SimulatorDataTypes.LOAD_REQUEST);

export const setParams = (params: ParamsData) => action(SimulatorDataTypes.SET_PARAMS, {
  params,
});

export const loadSuccess = (data: SimulatorData) => action(SimulatorDataTypes.LOAD_SUCCESS, {
  data,
});

export const loadFailure = () => action(SimulatorDataTypes.LOAD_FAILURE);

