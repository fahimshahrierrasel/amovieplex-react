import React, { useState } from "react";
import "./admin-login.scss";
import { PLAID } from "../../../../constants/images";
import TextField from "../../../components/inputs/text-field";
import GlowButton from "../../../components/inputs/glow-button";
import { adminLogin } from "../../../../redux/admin/auth/actions";
import { connect } from "react-redux";

const backgroundStyle = {
  backgroundImage: `url(${PLAID})`
};

const AdminLogin = ({ adminLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLoginForm = () => {
    setLoading(true);
    adminLogin({ email, password }).then(data => {
      setLoading(false);
      console.log("Login Data", data);
    });
  };
  return (
    <div className="admin-login" style={backgroundStyle}>
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
            loading={loading}
            onClick={handleLoginForm}
          />
        </div>
      </div>
    </div>
  );
};
const dispatchToProps = dispatch => ({
  adminLogin: authInfo => dispatch(adminLogin(authInfo))
});

export default connect(null, dispatchToProps)(AdminLogin);
