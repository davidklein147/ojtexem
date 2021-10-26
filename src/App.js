import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import React from 'react';
import Login from './pages/login';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Login></Login>
      </div>
    </React.Fragment>
  );
}

export default App;
