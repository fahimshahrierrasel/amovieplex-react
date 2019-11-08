import React, { useState } from "react";
import "./admin-login.scss";
import TextField from "../../../components/inputs/text-field";
import GlowButton from "../../../components/inputs/glow-button";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginForm = () => {
    console.log(email, password);
  };
  return (
    <div className="admin-login__container">
      <div className="admin-login__header">Admin Login</div>
      <div className="admin-login__form">
        <TextField
          className="form-item"
          title="Email"
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          className="form-item"
          title="Password"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />

        <GlowButton
          className="submit-btn"
          text="Login"
          onClick={handleLoginForm}
        />
      </div>
    </div>
  );
};

export default AdminLogin;
