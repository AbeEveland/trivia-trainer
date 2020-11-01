import React from "react";
import { Route, Switch } from "react-router";
import CreateAccount from "./createAccount";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <h1>
          Triv<span>ia</span>
        </h1>
        <span className="Links">
          <a href="">Home</a>
          <a href="/triviaGame">Practice</a>
        </span>
        <span></span>
      </div>
    </>
  );
};

export default NavBar;
