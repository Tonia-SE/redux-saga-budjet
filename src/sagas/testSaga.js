import { call, fork, delay, put, take, takeEvery, cancelled, cancel, takeLatest } from 'redux-saga/effects';

// 1 introduction
// async function double(x) {
//   console.log(2 * x);
// };
// export function* testSaga() {
//   while(true) {
//     console.log("Starting saga...");
//     console.log("Wish you are here...");
//     yield call(double, 2);
//     yield double(3);
//     const state = yield take('TEST_SAGA');
//     console.log("Finished saga...", state);
//   }
// };
// export function* dispatchTest() {
//   while(true) {
//     yield delay(5000);
//     yield put({ type: 'TEST_SAGA', payload: 1000 });
//   }
// };

// 2 fork vs call
// function* doNothing() {
//   console.log('I have been called');
//   yield delay(1000);
//   console.log('I am doing nothing');
// }
// export function* testSagaFok() {
//   while(true) {
//     yield take('TEST_SAGA_2');
//     // yield fork(doNothing);
//     // yield fork(doNothing);
//     // yield fork(doNothing);
//     yield call(doNothing);
//     yield call(doNothing);
//   }
// }
// export function* dispatchTest() {
//   while(true) {
//     yield delay(5000);
//     yield put({ type: 'TEST_SAGA_2', payload: 1000 });
//   }
// }

//3 takeEvery
// export function* testSagaTakeEveryProcess({payload}) {
//   console.log(`Starting process ${payload}`);
//   yield delay(5000);
//   console.log(`Ending process ${payload}`);
// }
// export function* testSagaTakeEvery() {
//   const {payload} = yield takeEvery('TEST_SAGA_3', testSagaTakeEveryProcess);
//   console.log(`Finish take every for index ${payload}`);
// }
// export function* dispatchTest() {
//   let index = 0;
//   while(true) {
//     yield delay(2000);
//     yield put({ type: 'TEST_SAGA_3', payload: index });
//     index++;
//   }
// };

// 4 cancel 
// export function* testSagaCancel() {
//   yield take('TEST_SAGA_4');
//   const handleCancel = yield fork(infinitySaga);
//   yield delay(3000);
//   yield cancel(handleCancel);
// }
// function* infinitySaga() {
//   console.log('Starting infinity saga');
//   while(true) {
//     try{
//       console.log('inside infifity loop');
//       yield delay(500);
//     } catch (e) {
//       console.error('An error happen: ', e)
//     }
//     finally {
//       console.log('The fork was canceled?', yield cancelled());
//     }
//   }
// }
// export function* dispatchTest() {
//   let index = 0;
//   yield put({ type: 'TEST_SAGA_4', payload: index });
// };

// 5 takeLatest 
export function* testSagaCancel() {
  yield take('TEST_SAGA_4');
  const handleCancel = yield fork(infinitySaga);
  yield delay(3000);
  yield cancel(handleCancel);
}
export function* testSagaTakeLatest() {
  yield takeLatest('TEST_SAGA_5', infinitySaga);
}
function* infinitySaga() {
  console.log('Starting infinity saga');
  let index = 0;
  while(true) {
    index++;
    try{
      console.log('inside infifity loop ', index);
      yield delay(1000);
    } catch (e) {
      console.error('An error happen: ', e)
    }
    finally {
      console.log('The fork was canceled?', yield cancelled());
    }
  }
}
export function* dispatchTest() {
  let index = 0;
  while (true) {
    yield delay(5000);
    yield put({ type: 'TEST_SAGA_5', payload: index });
    index++;
  }
};
