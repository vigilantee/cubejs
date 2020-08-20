import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
import test from './pages/test'
import App from './App';
ReactDOM.render(
  <Router>
    <App>
      <Route key="index" exact path="/" component={DashboardPage} />
      <Route key="explore" path="/explore" component={ExplorePage} />
    </App>
    <Route key="test" path="/test" component={test} />
  </Router>, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
