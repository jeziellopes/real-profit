import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProfitSimulator from './pages/ProfitSimulator';
import Route from './routes/Route';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/simulador">Profit Simulator</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simulador" exact component={ProfitSimulator} />
        </Switch>
      </div>
    </Router>
  );
}
