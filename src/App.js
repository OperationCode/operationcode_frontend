import React, { Component } from 'react';
import Home from './scenes/home/home';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
class App extends Component {

  componentDidMount() {
    if (process.env.NODE_ENV === 'production' && process.env.GA_TRACKER_ID) {
      ReactGA.initialize(process.env.GA_TRACKER_ID);
      this.history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      });
    }
  }
  history = createHistory();

  render() {
    return (
      <Router history={this.history} >
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
