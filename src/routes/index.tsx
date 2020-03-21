import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ProfitSimulator from '../pages/ProfitSimulator';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/simulador" exact component={ProfitSimulator} />
    </Switch>

  );
}
