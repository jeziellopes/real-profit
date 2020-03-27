import { Reducer } from 'redux';
import { nowSubYear } from '../../../services/time';
import { SimulatorDataState, SimulatorDataTypes } from './types';

const INITIAL_STATE: SimulatorDataState = {
  data: [{
    title: 'Bitcoin',
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
  asset: {
    key: 'BTC',
    title: 'Bitcoin',
  },
  date: 1548986400000,
  assets: [],
  investment: 2000,
  pricebuy: 0,
  simulator: false,
  error: false,
  loading: false,
};

const reducer: Reducer<SimulatorDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SimulatorDataTypes.ASSETS_REQUEST:
      console.log(action);
      return {
        ...state, loading: true,
      };
    case SimulatorDataTypes.ASSETS_SUCCESS:
      console.log(action);
      return {
        ...state, loading: false, error: false, assets: action.payload,
      };
    case SimulatorDataTypes.SET_ASSET:
      console.log(action);
      return {
        ...state, loading: false, error: false, asset: action.payload,
      };
    case SimulatorDataTypes.SET_DATE:
      console.log(action);
      return {
        ...state, loading: false, error: false, date: action.payload,
      };

    case SimulatorDataTypes.SET_INVESTMENT:
      console.log(action);
      return {
        ...state, loading: false, error: false, investment: action.payload,
      };
    case SimulatorDataTypes.SET_PRICE_BUY:
      return {
        ...state, loading: false, error: false, pricebuy: action.payload,
      };

    case SimulatorDataTypes.SET_PARAMS:
      console.log(action);
      return {
        ...state, loading: false, error: false, params: action.payload,
      };

    case SimulatorDataTypes.SET_SIMULATOR:
      console.log(action);
      return {
        ...state, loading: false, simulator: action.payload,
      };

    case SimulatorDataTypes.LOAD_REQUEST:
      console.log(action);
      return {
        ...state, loading: true,
      };
    case SimulatorDataTypes.LOAD_SUCCESS:
      console.log(action);
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case SimulatorDataTypes.LOAD_FAILURE:
      console.log(action);
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
