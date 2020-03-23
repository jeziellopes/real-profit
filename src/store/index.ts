import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BitcoinDataState } from './ducks/BitcoinData/types';
import { InvestmentAmountState } from './ducks/InvestmentAmountReducer/types';
import { InvestmentDateState } from './ducks/InvestmentDateReducer/types';
import { PreFixedTreasuryDataState } from './ducks/PreFixedTreasuryData/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  bitcoinData: BitcoinDataState,
  preFixedTreasuryData: PreFixedTreasuryDataState,
  investmentAmountReducer: InvestmentAmountState,
  investmentDateReducer: InvestmentDateState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
