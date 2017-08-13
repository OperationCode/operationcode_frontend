import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Home from './scenes/home/home';
import ScrollToTop from './shared/components/ScrollToTop';
import * as CookieHelpers from './shared/utils/cookieHelper';

class App extends Component {
  constructor(prevState, props) {
    super(prevState, props);
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

  setState() {
    const cookies = CookieHelpers.getUserStatus();
    // eslint-disable-next-line
    this.setState((prevState, props) => {
      return {
        streak: prevState.streak + props.count,
        signedIn: cookies.signedIn,
        mentor: cookies.mentor,
        verified: cookies.verified
      };
    });
  }
  // eslint-enable

  render() {
    return (
      <Router history={this.history} setState={this.setState} >
        <ScrollToTop>
          <Route path="/" component={Home} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
