import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppContainer } from "./modules/App";
import * as Pages from "./pages";

export default (
  <Switch>
    <AppContainer>
      <Switch>
        <Route exact={true} path="/" component={Pages.Home} />
        <Route path="/:menuItem" component={Pages.Section} />
        <Route path="/:menuItem/:sectionId" component={Pages.Section} />
        <Route component={Pages.NoMatch} />
      </Switch>
    </AppContainer>
  </Switch>
);
