import React from "react";
import "../css/Login.css";

const Login = () => (
  <div className="outer-container center">
    <div className="inner-container front-page">
      <div className="access-form">
        <ul className="buttons">
          <li>Sign in</li>
          <li>log in </li>
        </ul>
        <form className="form-inputs">
          <input type="text" required minlength="3" maxlength="6" placeholder="Name:"/>
          <input type="email" placeholder="Email"/>
          <input type="password" required minlength="1" maxlength="15"  placeholder="Password"/>
          <input type="password" required minlength="1" maxlength="15" placeholder="Confirm password"/>
          <input type="submit" />
        </form>
      </div>
    </div>
  </div>
);

export default Login;
