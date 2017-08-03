import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Home from './scenes/home/home';
import ScrollToTop from './shared/components/ScrollToTop';

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
        <ScrollToTop>
          <Route path="/" component={Home} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
