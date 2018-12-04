import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "./modules/App";
import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";
import store, { history } from "./store";

import "./stylesheets/global.scss";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
