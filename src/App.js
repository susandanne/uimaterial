import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nomatch from './compo/Nomatch';

import Home from './compo/Home';
import Details from './compo/Details';


import Typography from '@material-ui/core/Typography';

function App() {

  return (
    <Router>
    <div>
    <Typography >
      
        <ul>
        
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* <li>
            <Link to="/details">Users</Link>
          </li> */}
        </ul>
  
 
</Typography>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:detailsId">
          <Details />
        </Route>
        <Route path="*">
          <Nomatch />
        </Route>
      </Switch>
    </div>
  </Router>
 
  );
}

export default App;


 