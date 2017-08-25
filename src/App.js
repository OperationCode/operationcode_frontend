import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import Home from './scenes/home/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-75642413-1', { debug: false });
      this.history.listen((location) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      });
    }
  }

  render() {
    return (
      <Router history={this.history} >
        <Route component={Home} />
      </Router>
    );
  }
}

export default App;
