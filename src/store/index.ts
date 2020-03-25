import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
// eslint-disable-next-line import/no-cycle
import rootSaga from './ducks/rootSaga';
import { SimulatorDataState } from './ducks/SimulatorData/types';

export interface ApplicationState {
  simulatorData: SimulatorDataState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
