import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

// Source: https://github.com/rokmesojedec/roKit
//This Framework was developed by me
import "./assets/rokit/dist/roKit.css";
import "./style/main.scss";

function App() {
  return (
    <div
      className="
          p-0 
          typescale-minor-second 
          typescale-sm-major-second 
          typescale-xl-minor-third 
          children-p-x-sm-10 
          children-p-x-4
          children-p-y-8"
    >
      <Router>
        <header className="p-y-0 slide-down-delay-5 fixed full-width z-3 top gradient-code-secondary shadow-8">
          <nav className="p-lg-0 nav-flex nav-main typescale-minor-second max-width-center-xxl m-y-1">
            <h1 className="nowrap text-light" href="index.html">
              Rok's CSCI E39 Assignment #1
            </h1>
            <ul className="hover-light children-p-2 text-light">
              <li>
                <Link to="/">Timers</Link>
              </li>
              <li>
                <Link to="/docs">Documentation</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="max-width-center-xxl p-b-0 m-b-0">
          <Switch>
            <Route path="/docs">
              <DocumentationView />
            </Route>
            <Route path="/">
              <TimersView />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
