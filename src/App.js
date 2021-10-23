import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import "./assets/rokit/src/scss/roKit.scss";
import "./style/main.scss";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <div
      className="
          vh-100 p-0 
          typescale-minor-second 
          typescale-sm-major-second 
          typescale-xl-minor-third 
          children-p-x-sm-10 
          children-p-x-4
          children-p-y-8"
    >
      <Router>
        <header className="p-y-0 slide-down-delay-1 fixed-lg full-width z-3 top gradient-code-secondary shadow-7">
          <nav className="p-lg-0 nav-sm typescale-minor-second max-width-center-xxl nav-flex m-y-1">
            <ul className="hover-light children-p-2 text-lg-light">
              <li>
                <strong className="nowrap" href="index.html">
                  Assignment 1
                </strong>
              </li>
              <li>
                <Link to="/">Timers</Link>
              </li>
              <li>
                <Link to="/docs">Documentation</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="max-width-center-xxl">
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
