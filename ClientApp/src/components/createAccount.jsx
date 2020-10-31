import React from "react";
import { Route, Switch } from 'react-router'


const CreateAccount = () => {

  return (
    <>
      <div className="CreateAccount">
        <h1>
          Triv<span>ia</span>
        </h1>

        <p>A place to play. A place to learn</p>
        <form action="submit">
          <input placeholder="User name" type="text" />
          <input placeholder="First name" type="text" />
          <input placeholder="Last name" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="Password" type="text" />
          <a href="/HomePage">Submit</a>{" "}
        </form>
        <span className="signIn">
          <p>
            Already a member?
            <a href="">Sign in</a>
          </p>
        </span>
      </div>
     
    </>
  );
};

export default CreateAccount;
