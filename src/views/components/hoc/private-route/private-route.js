import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "../../../../constants/routes";

function PrivateRoute({ currentUser, children, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Routes.LOGIN_PAGE(),
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(PrivateRoute);
