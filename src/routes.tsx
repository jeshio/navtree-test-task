import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppContainer } from "./modules/App";
import * as Pages from "./pages";

export default (
  <Switch>
    <AppContainer>
      <Route exact={true} path="/" component={Pages.Home} />
    </AppContainer>
  </Switch>
);
