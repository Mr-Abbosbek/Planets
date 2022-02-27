import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import MercuryList from "./MercuryList";
import Mercury from "./Mercury";
import VenusList from "./VenusList";
import Header from "./Header";
import './../style/media.css';
import './../style/style.css';

function Router() {
  return (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <div className="App">
      <Switch>
        <Route path="/" component={Mercury} exact />
        <Route path="/venus" component={VenusList} exact />
      </Switch>
    </div>
  </BrowserRouter>
);
}

export default Router;