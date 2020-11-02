import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { Game } from "./components/Game";

import "./custom.css";
export function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Game" component={Game} />
      </Switch>
      <Footer />
    </>
  );
}
