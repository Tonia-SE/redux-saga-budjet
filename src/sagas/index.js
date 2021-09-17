import * as entriesSaga from './entriesSaga';
import * as entriesSagaDelete from './entriesSagaDelete';
import * as entriesSagaAdd from './entriesSagaAdd';
import * as entriesSagaEdit from './entriesSagaEdit';

// import * as testSaga from './testSaga';

// function initAllSagas(sagaMiddleware) {
//   Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
// };

function initAllSagas(sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaDelete).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaEdit).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}; 

export default initAllSagas;
