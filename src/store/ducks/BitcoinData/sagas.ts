import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '/histoday?fsym=BTC&tsym=USD&limit=10&toTs=1553213497');

    yield put(loadSuccess(response.data.Data.Data));
  } catch (err) {
    yield put(loadFailure());
  }
}
