import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './views/components/header';
import Footer from './views/components/footer';
import Home from './views/pages/home';
import WhatsOn from './views/pages/whats-on';
import About from './views/pages/about';
import Contact from './views/pages/contact';
import MovieDetails from './views/pages/movie-details';
import ScrollToTop from './views/components/hoc/sroll-to-top';
import Login from './views/pages/login';
import { Routes } from './constants/routes';
import './app.scss';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <div className="container">
                    <Route
                        render={({ location }) => {
                            return location.pathname !== Routes.LOGIN_PAGE() ? (
                                <Header />
                            ) : null;
                        }}
                    />

                    <main className="main-content">
                        <Route
                            exact
                            path={Routes.HOME_PAGE()}
                            component={Home}
                        />
                        <Route
                            exact
                            path={Routes.WHATS_ON_PAGE()}
                            component={WhatsOn}
                        />
                        <Route
                            exact
                            path={Routes.ABOUT_PAGE()}
                            component={About}
                        />
                        <Route
                            exact
                            path={Routes.CONTACT_PAGE()}
                            component={Contact}
                        />
                        <Route
                            exact
                            path={Routes.LOGIN_PAGE()}
                            component={Login}
                        />
                        <Route
                            path={Routes.MOVIE_DETAIL_PAGE(':id')}
                            component={MovieDetails}
                        />
                    </main>

                    <Route
                        render={({ location }) => {
                            return location.pathname !== Routes.LOGIN_PAGE() ? (
                                <Footer />
                            ) : null;
                        }}
                    />
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
