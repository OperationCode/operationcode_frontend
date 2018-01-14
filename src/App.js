import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import ScrollToTop from 'shared/components/scrollToTop/scrollToTop';
import Home from './scenes/home/home';

const history = createHistory();
ReactGA.initialize('UA-75642413-1');

class App extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      history.listen((location) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      });
    }
  }

  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <Route path="/" component={Home} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
