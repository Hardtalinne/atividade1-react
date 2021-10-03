import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PagesCalculadora from "./calculadora";
import PagesMensagem from "./mensagem";

export default function PagesRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/calculadora">
          <PagesCalculadora />
        </Route>
        <Route path="/ola">
          <PagesMensagem />
        </Route>
        <Route>
          <Redirect from="/" to="/ola" />
        </Route>
      </Switch>
    </Router>
  );
}
