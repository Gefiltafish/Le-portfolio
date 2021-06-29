import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavigationBar } from './Components/NavigationBar/NavigationBar';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Contact } from './Pages/Contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          {/* <Home /> */}
          <Contact />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
