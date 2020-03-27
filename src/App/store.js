import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store =
    process.env.NODE_ENV === 'development'
        ? createStore(rootReducer, composedEnhancers)
        : createStore(rootReducer, middlewareEnhancer);

sagaMiddleware.run(rootSaga);

export { store };
