import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ScrollToTop from 'shared/components/scrollToTop/scrollToTop';
import withTracker from './scenes/withTracker';
import Home from './scenes/home/home';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <Route
            path="/"
            component={// process.env.NODE_ENV === 'production' ? withTracker(Home) : Home
            withTracker(Home)}
          />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
