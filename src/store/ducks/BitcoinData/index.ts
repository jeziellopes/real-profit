import { Reducer } from 'redux';
import { BitcoinDataState, BitcoinDataTypes } from './types';

const INITIAL_STATE: BitcoinDataState = {
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
  error: false,
  loading: false,
};

const reducer: Reducer<BitcoinDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BitcoinDataTypes.LOAD_REQUEST:
      return {
        ...state, loading: true,
      };
    case BitcoinDataTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case BitcoinDataTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
