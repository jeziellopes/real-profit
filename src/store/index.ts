import { createStore, Store } from 'redux';
import { BitcoinDataState } from './ducks/BitcoinData/types';
import { PreFixedTreasuryDataState } from './ducks/PreFixedTreasuryData/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  bitcoinData: BitcoinDataState,
  preFixedTreasuryData: PreFixedTreasuryDataState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
