import { all, takeEvery, takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { load, loadAssets, reload } from './SimulatorData/sagas';
import { SimulatorDataTypes } from './SimulatorData/types';

export default function* rootSaga() {
  return yield all([
    takeEvery(SimulatorDataTypes.ASSETS_REQUEST, loadAssets),
    takeEvery(SimulatorDataTypes.ASSETS_SUCCESS, reload),
    takeLatest(SimulatorDataTypes.LOAD_REQUEST, load),
    takeLatest(SimulatorDataTypes.SET_PARAMS, reload),
    takeLatest(SimulatorDataTypes.SET_DATE, reload),
    takeLatest(SimulatorDataTypes.SET_INVESTMENT, reload),
    takeLatest(SimulatorDataTypes.SET_ASSET, reload),
  ]);
}
