import axios from "axios";
import { call, put, fork, take } from "redux-saga/effects";
import { entriesTypes, populateEntries, populateEntryDetail } from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  // const response = yield call(fetch, 'http://localhost:3001/entries');
  // const result = yield response.json();
  const result = yield call(axios, 'http://localhost:3001/entries');
  yield put(populateEntries(result.data));
};

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  yield put(populateEntryDetail(id, data));
};

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let i = 0; i < payload.length; i++) {
    const entry = payload[i];
    yield fork(getEntryDetails, entry.id);
  }
};

// const fetchEntries = async () => {x
//   let result;
//   let response;
//   try {
//     response = await fetch('http://localhost:3001/entries');
//   } catch(e) {
//     console.error('something goes wrong', e);
//   }
//   finally {
//     if (response.status === 200) {
//       const result = await response.json();
//       console.log(result);
//     }
//   }
// }

// const fetchAxios = async () => {
//   const result = await axios.get('http://localhost:3001/entries');
//   console.log(result.data);
// }
