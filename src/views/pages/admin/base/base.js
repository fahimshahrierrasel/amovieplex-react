import React from "react";
import "./base.scss";
import { Switch, useRouteMatch } from "react-router-dom";
import { Routes } from "../../../../constants/routes";
import AdminHeader from "../../../components/admin/header";
import Sidebar from "../../../components/admin/sidebar";
import Dashboard from "../dashboard";
import Movies from "../movies";
import PrivateRoute from "../../../components/hoc/private-route/private-route";

const AdminBase = () => {
  let { path } = useRouteMatch();
  return (
    <div className="admin__container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <AdminHeader />
        <div className="main-content">
          <Switch>
            <PrivateRoute exact path={path}>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path={Routes.ADMIN_MOVIES()}>
              <Movies />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminBase;
