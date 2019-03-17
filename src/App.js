import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Router Class</h2>

        </div>
        <ul>
          <li><Link to="/One">One</Link></li>
          <li><Link to="/Two">Two</Link></li>
          <li><Link to="/Three">Three</Link></li>
          <li><Link to="/Four">Four</Link></li>
          <li><Link to="/nopage">No page</Link></li>

          <li><Link to="/shownav">show</Link></li>
        </ul>

      </div>
    );
  }
}

export default App;
