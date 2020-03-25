import { Reducer } from 'redux';
import { nowSubYear } from '../../../services/time';
import { SimulatorDataState, SimulatorDataTypes } from './types';

const INITIAL_STATE: SimulatorDataState = {
  data: [{
    time: 0,
    high: 0,
    low: 0,
    open: 0,
    volumefrom: 0,
    volumeto: 0,
    close: 0,
    conversionType: '',
    conversionSymbol: '',
  }],
  params: {
    fromsymbol: 'BTC',
    tosymbol: 'BRL',
    limit: 365,
    totimestamp: nowSubYear(1),
  },
  investment: 2000,
  pricebuy: 0,
  error: false,
  loading: false,
};

const reducer: Reducer<SimulatorDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SimulatorDataTypes.LOAD_REQUEST:
      // console.log('LOAD_REQUEST', action, state);
      return {
        ...state, loading: true,
      };
    case SimulatorDataTypes.SET_PARAMS:
      // console.log('SET_PARAMS', action, state);
      return {
        ...state, loading: false, error: false, params: action.payload,
      };
    case SimulatorDataTypes.SET_INVESTMENT:
      console.log(action);
      return {
        ...state, loading: false, error: false, investment: action.payload,
      };
    case SimulatorDataTypes.SET_PRICE_BUY:
      console.log(action);
      return {
        ...state, loading: false, error: false, pricebuy: action.payload,
      };
    case SimulatorDataTypes.LOAD_SUCCESS:
      // console.log('LOAD_SUCCESS', action, state);
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case SimulatorDataTypes.LOAD_FAILURE:
      // console.log('LOAD_FAILURE', action, state);
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      // console.log('default', action);
      return state;
  }
};

export default reducer;
