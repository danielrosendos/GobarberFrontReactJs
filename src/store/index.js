import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from '~/store/createStore';
import rootReducer from '~/store/modules/rootReducer';
import rootSaga from '~/store/modules/rootSaga';
import persistedReducer from '~/store/persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlewares];

const store = createStore(persistedReducer(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddlewares.run(rootSaga);

export { store, persistor };
