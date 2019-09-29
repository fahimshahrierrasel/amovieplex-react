import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import MovieDetails from "./pages/movie_details/MovieDetails";
import "./style.scss";
import ScrollToTop from './components/hoc/sroll-to-top'

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
