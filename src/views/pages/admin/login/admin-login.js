import React, { useState, useEffect, useRef } from "react";
import "./admin-login.scss";
import { useHistory } from "react-router-dom";
import { PLAID } from "../../../../constants/images";
import TextField from "../../../components/inputs/text-field";
import GlowButton from "../../../components/inputs/glow-button";
import { userLogin } from "../../../../redux/auth/actions";
import { connect } from "react-redux";
import { Routes } from "../../../../constants/routes";

const backgroundStyle = {
  backgroundImage: `url(${PLAID})`
};

const AdminLogin = ({ adminLogin }) => {
  const isMountedRef = useRef(true);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoginForm = () => {
    setLoading(true);
    adminLogin({ email, password }).then(data => {
      if (isMountedRef.current) {
        setLoading(false);
        setError(data.message);
      }
      if (!data.error) {
        history.push(Routes.ADMIN());
      }
    });
  };

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

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
          {error.length > 0 ? (
            <div className="error-notification">{error}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
const dispatchToProps = dispatch => ({
  adminLogin: authInfo => dispatch(userLogin(authInfo))
});

export default connect(null, dispatchToProps)(AdminLogin);
