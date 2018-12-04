import * as Home from "@modules/Home";
import React from "react";
import { Route, Switch } from "react-router-dom";

export default () => (
  <Switch>
    <Route exact={true} path="/" component={Home.HomeContainer} />
  </Switch>
);
