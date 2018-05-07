import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { App } from "../components/Home/App";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
