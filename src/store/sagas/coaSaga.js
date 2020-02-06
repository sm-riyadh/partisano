import { call, put, takeLatest } from 'redux-saga/effects'
import API from './api/coa'

import { COA } from '../index'
import { saveCoaList } from '../actions'

function* handleCoaListFetch() {
  try {
    const coa = yield call(API.fetchCoaList)
    yield put(saveCoaList(coa))
  } catch (err) {
    yield put({ type: 'COA.SAVE', message: err.message })
  }
}

function* watchCoa() {
  yield takeLatest(COA.FETCH.LIST, handleCoaListFetch)
}

export default watchCoa
