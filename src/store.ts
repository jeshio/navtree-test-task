import { routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./modules/rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => never;
  }
}

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middlewares = [routerMiddleware(history), thunk];

if (process.env.NODE_ENV === "development") {
  /* eslint-disable-next-line */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ || {};

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }

  const logger = createLogger();
  middlewares.push(logger);
}

const composedEnhancers: StoreEnhancer<{}, {}> = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);

export default store;
