import { all, takeLatest } from 'redux-saga/effects';
import { load } from './BitcoinData/sagas';
import { BitcoinDataTypes } from './BitcoinData/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(BitcoinDataTypes.LOAD_REQUEST, load),
  ]);
}
