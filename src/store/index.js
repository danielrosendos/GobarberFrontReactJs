import createSagaMiddleware from 'redux-saga';

import createStore from '~/store/createStore';
import rootReducer from '~/store/modules/rootReducer';
import rootSaga from '~/store/modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlewares];

const store = createStore(rootReducer, middlewares);

sagaMiddlewares.run(rootSaga);

export default store;
