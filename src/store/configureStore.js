import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import initAllSagas from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from '../reducers/entries.reducers';
import modalsReducer from '../reducers/modals.reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
  }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  initAllSagas(sagaMiddleware);
  return store;
}

export default configureStore;
