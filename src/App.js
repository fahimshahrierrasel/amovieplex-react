import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import MovieDetails from "./pages/movie-details";
import ScrollToTop from "./components/hoc/sroll-to-top";
import "./app.scss";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="container">
          <Header />
          <div className="main-content">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/movie" component={MovieDetails} />
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
