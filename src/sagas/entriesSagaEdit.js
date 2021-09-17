import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { entriesTypes } from '../actions/entries.actions';

export function* editEntrySaga() {
  yield takeLatest(entriesTypes.UPDATE_ENTRY, editEntryToDb);
}

function* editEntryToDb({ payload }) {
  yield call(editEntry, payload);
  yield call(editEntryDetails, payload);
  yield put({ type: entriesTypes.UPDATE_ENTRY_RESULT, payload });
}

async function editEntry({ id, description }) {
  await axios.delete(`http://localhost:3001/entries/${id}`);
  await axios.post('http://localhost:3001/entries', {
    id,
    description,
  });
}

async function editEntryDetails({ id, isExpensive, value }) {
  await axios.delete(`http://localhost:3001/values/${id}`);
  await axios.post('http://localhost:3001/values', {
    id,
    isExpensive,
    value,
  });
}
