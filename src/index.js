import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

import LoginPage from "app/views/login";
import Welcome from "app/views/welcome";
import Notfound from "app/views/NotFound";
import App from "./App";

ReactDOM.render(
  <App>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={Welcome} />
      <Route path="/welcome" component={Welcome} />
      <Route path="*" component={Notfound} />
    </Switch>
  </App>,
  document.getElementById("root")
);
