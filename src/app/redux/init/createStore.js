import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./index";
import rootSagas from "../rootSagas";

const initialState = {
  users: {
    list: []
  }
};

export const history = createBrowserHistory();
export default function configureStore(state = initialState) {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [routerMiddleware(history), sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const { __REDUX_DEVTOOLS_EXTENSION__: devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(
    connectRouter(history)(rootReducer(history)),
    { ...state },
    composedEnhancers
  );
  sagaMiddleware.run(rootSagas);

  return { history, store };
}