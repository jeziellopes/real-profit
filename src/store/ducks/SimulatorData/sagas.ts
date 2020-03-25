import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import store from '../..';
import api from '../../../services/api';
import { average, treatData } from '../../../services/dataset';
import { loadFailure, loadSuccess } from './actions';

export function* load() {
  const { fromsymbol, tosymbol, limit, totimestamp } = store.getState().simulatorData.params;
  const { investment } = store.getState().simulatorData;

  try {
    const response = yield call(api.get, `/histoday?fsym=${fromsymbol}&tsym=${tosymbol}&limit=${limit}&toTs=${totimestamp}`);

    const { low, high } = response.data.Data.Data[0];
    const pricebuy = average([low, high]);

    const treatedData = yield call(treatData, response.data.Data.Data, investment, pricebuy);

    yield put(loadSuccess(treatedData));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* reload() {
  yield call(load);
}
