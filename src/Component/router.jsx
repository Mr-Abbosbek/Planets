import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";
import './../style/media.css';
import './../style/style.css';

function Router() {
  return (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <div className="top-list">
      <Switch>
        <Route path="/" component={Mercury} exact />
        <Route path="/venus" component={Venus} exact />
        <Route path="/earth" component={Earth} exact />
        <Route path="/mars" component={Mars} exact />
        <Route path="/jupiter" component={Jupiter} exact />
        <Route path="/saturn" component={Saturn} exact />
        <Route path="/uranus" component={Uranus} exact />
        <Route path="/neptune" component={Neptune} exact />
      </Switch>
    </div>
  </BrowserRouter>
);
}

export default Router;