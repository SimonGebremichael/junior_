import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PageView from "./pageView";

function Start() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pageview" component={PageView} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>,
  document.getElementById("root")
);
