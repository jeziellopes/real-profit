import { all, takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { load, reload } from './SimulatorData/sagas';
import { SimulatorDataTypes } from './SimulatorData/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(SimulatorDataTypes.LOAD_REQUEST, load),
    takeLatest(SimulatorDataTypes.SET_PARAMS, reload),
    takeLatest(SimulatorDataTypes.SET_INVESTMENT, reload),
  ]);
}
