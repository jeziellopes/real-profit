import { Reducer } from 'redux';
import { PreFixedTreasuryDataState, PreFixedTreasuryDataTypes } from './types';

const INITIAL_STATE: PreFixedTreasuryDataState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<PreFixedTreasuryDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PreFixedTreasuryDataTypes.LOAD_REQUEST:
      return {
        ...state, loading: true,
      };
    case PreFixedTreasuryDataTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case PreFixedTreasuryDataTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
