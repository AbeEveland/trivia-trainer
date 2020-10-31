import React from "react";
import { Route, Switch } from 'react-router'

import CreateAccount from "./components/createAccount";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {triviaGame} from "./components/triviaGame";

import HomePage from "./components/HomePage";
import Question from "./components/Question";


import "./custom.css";
export function App() {

  return (
    <>
    <NavBar />
   
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/createAccount" component={CreateAccount} />
        <Route exact path="/Question" component={Question} />
        <Route exact path="/triviaGame" component={triviaGame} />

      </Switch>
      <Footer/>
    </>
  );
}
