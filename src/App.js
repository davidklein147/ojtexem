import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import React from 'react';
import Login from './pages/login';
import Courses from './pages/courses';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect path="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
        </Switch>
      </Router>
      <div className="container-fluid">
      </div>
    </React.Fragment>
  );
}

export default App;
