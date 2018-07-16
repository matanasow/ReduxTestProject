import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, Info, Members } from '../components/Pages/';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dashboard/:id?" component={Dashboard} />
      <Route exact path="/info/:id?" component={Info} />
      <Route exact path="/members/:id?" component={Members} />
    </Switch>
  );
};

export default Routes;
