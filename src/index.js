import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "./App.css";

import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import NoMatch from './components/NoMatch';
import Fourpointone from './components/Fourpointone';

// import bootstrap v4
import "bootstrap/dist/css/bootstrap.css";

//counter component
import ShowNav from './components/shownav';


import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/One" component={One}></Route>
    <Route path="/Two" component={Two}></Route>
    <Route path="/Three" component={Three}></Route>
    <Route path="/Four" component={Four}>
      <Route path="/Four/:id" component={Fourpointone} />
    </Route>

    <Route path="/shownav" component={ShowNav}></Route>

    <Route path="*" component={NoMatch}></Route>

  </Router>




  ,
  document.getElementById('root')
);
