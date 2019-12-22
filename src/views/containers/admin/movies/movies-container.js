import React from "react";
import PrivateRoute from "../../../components/hoc/private-route/private-route";
import { Routes } from "../../../../constants/routes";
import Movies from "../../../pages/admin/movies/all";
import NewMovie from "../../../pages/admin/movies/new/new-movies";
import { Switch, useRouteMatch } from "react-router-dom";

const MovieContainer = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <PrivateRoute exact path={path}>
        <Movies />
      </PrivateRoute>
      <PrivateRoute path={Routes.NEW_MOVIES()}>
        <NewMovie />
      </PrivateRoute>
    </Switch>
  );
};

export default MovieContainer;
