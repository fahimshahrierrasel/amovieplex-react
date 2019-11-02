import React from "react";
import "./base.scss";
import { Switch, Route } from "react-router-dom";
import { Routes } from "../../../../constants/routes";
import AdminHeader from "../../../components/admin/header";
import AdminFooter from "../../../components/admin/footer";
import Sidebar from "../../../components/admin/sidebar";
import Dashboard from "../dashboard";
import Movies from "../movies";

const AdminBase = () => {
  return (
    <div className="admin__container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <AdminHeader />
        <div className="main-content">
          <Switch>
            <Route
              exact
              path={Routes.ADMIN_DASHBOARD()}
              component={Dashboard}
            />
            <Route path={Routes.ADMIN_MOVIES()} component={Movies} />
          </Switch>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminBase;
