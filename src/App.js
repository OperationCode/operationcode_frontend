import React from 'react';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ScrollToTop from 'shared/components/scrollToTop/scrollToTop';
import withTracker from './scenes/withTracker';
import Home from './scenes/home/home';

const history = createHistory();

const App = () => (
  <Router history={history}>
    <ScrollToTop>
      <Route
        path="/"
        component={
          process.env.NODE_ENV === 'production' ? withTracker(Home) : Home
        }
      />
    </ScrollToTop>
  </Router>
);

export default App;
