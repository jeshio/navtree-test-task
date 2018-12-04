import * as Section from "@modules/Section";
import NoMatch from "@pages/NoMatch";
import React from "react";
import { Route, Switch } from "react-router-dom";

export default () => (
  <Switch>
    <Route
      exact={true}
      path="/:menuItem/"
      component={Section.SectionContainer}
    />
    <Route
      exact={true}
      path="/:menuItem/:sectionId"
      component={Section.SectionContainer}
    />
    <Route component={NoMatch} />
  </Switch>
);
