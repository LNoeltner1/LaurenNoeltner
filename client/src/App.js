import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Portfolio" component={Portfolio} />
              <Route exact path="/Contact" component={Contact} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
