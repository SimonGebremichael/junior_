import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./Form";
import "./style/slide.css";
import "./style/style.css";
import "./style/animate.min.css";
import Header from "./components/header";
import Intro from "./components/intro";
import Services from "./components/services";
import Location from "./components/location";
import Review from "./components/review";
import Demo from "./components/demo";
import CovidAlert from "./components/covid";
import Covid2 from "./components/covid2";

function Home() {
  return (
    <>
      <CovidAlert />
      <Header />
      <Intro />
      <Services />
      <Location />
      <Review />
      <Covid2 />
      <Demo />
      <Form />
    </>
  );
}

function Start() {
  return (
    <BrowserRouter>
      <Switch>
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
