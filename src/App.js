import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App = () => {
  return(

  <Router>

    <Switch>

    <Route path="/" exact component={Users}>
      <Users /> 
    </Route>

    <Route path="/places/new" exact component={NewPlaces}>
      <NewPlaces /> 
    </Route>

    </Switch>

    {/* <Redirect to="/" /> */}

  </Router>

  );
};

export default App;
