import "./login.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { LOGIN_BACKGROUND_IMAGE } from "../../../constants/images";
import { Routes } from "../../../constants/routes";

class Login extends Component {
  state = {
    emailOrPhone: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validateInputs = () => {
    // Todo
  };

  submitHandler = () => {
    // Todo
  };

  render() {
    return (
      <div
        style={{ backgroundImage: `url(${LOGIN_BACKGROUND_IMAGE})` }}
        className="login-page"
      >
        <div className="overlay">
          <div className="container login-container">
            <h3 className="title">Sign In</h3>
            <form className="form-body">
              <div className="form-control">
                <label htmlFor="email-or-phone">Email or Phone</label>
                <input
                  id="emailOrPhone"
                  onChange={this.changeHandler}
                  placeholder="Enter email or password"
                  name="emailOrPhone"
                  type="text"
                  value={this.state.emailOrPhone}
                />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  onChange={this.changeHandler}
                  placeholder="Enter password"
                  name="password"
                  type="password"
                  value={this.state.password}
                />
              </div>

              <div className="btn-container">
                <span
                  role="presentation"
                  onClick={this.submitHandler}
                  className="btn"
                >
                  Sign In
                </span>
              </div>
            </form>
            <div className="links">
              <div className="sign-up">
                New to Movie Plex ? <Link to="/sign-up">Sign Up here</Link>
              </div>
              <div className="sign-up">
                Go To <Link to={Routes.ADMIN_LOGIN()}>Admin Panel</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
