import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import store from '../..';
import api from '../../../services/api';
import { average, treatAssets, treatData } from '../../../services/dataset';
import { loadAssetsSuccess, loadFailure, loadSuccess } from './actions';

export function* loadAssets() {
  try {
    const response = yield call(api.get, 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=BRL');

    const treatedData = yield call(treatAssets, response.data.Data);

    yield put(loadAssetsSuccess(treatedData));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* load() {
  const { fromsymbol, tosymbol, limit, totimestamp } = store.getState().simulatorData.params;
  const { asset, investment } = store.getState().simulatorData;

  try {
    const response = yield call(api.get, `/histoday?fsym=${fromsymbol}&tsym=${tosymbol}&limit=${limit}&toTs=${totimestamp}`);

    const { low, high } = response.data.Data.Data[0];
    const pricebuy = average([low, high]);

    const treatedData = yield call(treatData, response.data.Data.Data, investment, pricebuy, asset);

    yield put(loadSuccess(treatedData));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* reload() {
  yield call(load);
}
