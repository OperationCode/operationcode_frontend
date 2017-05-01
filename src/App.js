import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Home from './scenes/home/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production' && process.env.GA_TRACKER_ID) {
      ReactGA.initialize(process.env.GA_TRACKER_ID);
      this.history.listen((location) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      });
    }
  }

  render() {
    return (
      <Router history={this.history} >
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
