import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./Form";
import "./style/slide.css";
import "./style/style.css";
import "./style/animate.min.css";
import Intro from "./components/intro";
import Services from "./components/services";
import Location from "./components/location";
import Review from "./components/review";
import Demo from "./components/demo";
import CovidAlert from "./components/covid";
import CovidIMG from "./img/covid2.png";

function Home() {
  return (
    <>
      <CovidAlert />
      <header className="split">
        <label>
          <i className="fas fa-toolbox"></i>
        </label>
        <div className="align">
            <a href="#about">Services &darr;</a>
            <a href="#location">Location &darr;</a>
            <a href="#form">Contact Us &darr;</a>
        </div>
      </header>
      <Intro />
      <Services />
      <Location />
      <Review />
      <div id="covid2" className="section">
        <img src={CovidIMG} />
        <div id="covidInfo">
          <i id="titleTage" class="fas fa-viruses fa-1x"></i>
          <h1>Covid-19 Safty</h1>
          <br />
          <p>
            Due to the Covid-19 Pandemic in Canada, We recommend that you please
            takes the steps to ensure the safty of both you and the Technitian.
            Thank you for your understanding.
          </p>
          <br />
          <i class="fas fa-people-arrows fa-1x"></i>
          <label>Social Distance</label>
          <br />
          <br />
          <i class="fas fa-head-side-mask fa-1x"></i>
          <label>Wear Face Mask</label>
          <br />
          <br />
          <i class="fas fa-handshake-slash  fa-1x"></i>
          <label>Avoid Close Contact</label>
          <br />
          <br />
          <i class="fas fa-pump-soap  fa-1x"></i>
          <label>Clean Surfaces</label>
        </div>
      </div>
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
