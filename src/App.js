import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Routes } from "./constants/routes";
import "./app.scss";
import Header from "./views/components/header";
import Footer from "./views/components/footer";
import Home from "./views/pages/home";
import WhatsOn from "./views/pages/whats-on";
import About from "./views/pages/about";
import Contact from "./views/pages/contact";
import MovieDetails from "./views/pages/movie-details";
import ScrollToTop from "./views/components/hoc/sroll-to-top";
import Login from "./views/pages/login";
import AdminLogin from "./views/pages/admin/login";
import AdminBase from "./views/pages/admin/base";
import { connect } from "react-redux";

function App({ currentUser }) {
  return (
    <Router>
      <ScrollToTop>
        <div className="container">
          <Route
            render={({ location }) => {
              return !location.pathname.includes("admin") &&
                location.pathname !== Routes.LOGIN_PAGE() ? (
                <Header />
              ) : null;
            }}
          />

          <main className="main-content">
            <Route exact path={Routes.HOME_PAGE()} component={Home} />
            <Route exact path={Routes.WHATS_ON_PAGE()} component={WhatsOn} />
            <Route exact path={Routes.ABOUT_PAGE()} component={About} />
            <Route exact path={Routes.CONTACT_PAGE()} component={Contact} />
            <Route exact path={Routes.LOGIN_PAGE()} component={Login} />
            <Route
              path={Routes.MOVIE_DETAIL_PAGE(":id")}
              component={MovieDetails}
            />
            <Route
              exact
              path={Routes.ADMIN_LOGIN()}
              render={props =>
                currentUser && currentUser.role === "admin" ? (
                  <Redirect to={Routes.ADMIN()} />
                ) : (
                  <AdminLogin {...props} />
                )
              }
            />
            <Route path={Routes.ADMIN()} component={AdminBase} />
          </main>

          <Route
            render={({ location }) => {
              return !location.pathname.includes("admin") &&
                location.pathname !== Routes.LOGIN_PAGE() ? (
                <Footer />
              ) : null;
            }}
          />
        </div>
      </ScrollToTop>
    </Router>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
