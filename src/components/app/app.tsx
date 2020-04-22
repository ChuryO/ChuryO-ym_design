import React, { Component } from "react";
import "./app.scss";
import { Header } from "../header/header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, ContactPage } from "../pages/";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    );
  }
}
