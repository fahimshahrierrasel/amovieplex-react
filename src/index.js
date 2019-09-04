import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";



const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    paddingTop: 60,
  }
}));

function App() {
  const paths = [
    { title: "Home", url: "/" },
    { title: "About", url: "about" },
    { title: "Contact", url: "contact" }
  ];
  const classes = useStyles();

  function NavigationLink(props) {
    return <Button component={Link} color="inherit" {...props} />;
  }

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              MovieDB
          </Typography>
            <NavigationLink to={paths[0].url}>Home</NavigationLink>
            <Button color="inherit">What's On</Button>
            <Button color="inherit">News</Button>
            <NavigationLink to={paths[2].url}>Contact</NavigationLink>
            <NavigationLink to={paths[1].url}>About</NavigationLink>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </main>
      </Router>
    </div >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
