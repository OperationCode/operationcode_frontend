/* eslint-disable no-console, react/forbid-prop-types */

import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as CookieHelpers from 'shared/utils/cookieHelper';
import familyImage from 'images/Family-2.jpg';
import SignUp from './signup/signup';
import MentorRequestsTable from './mentor/mentorRequestsTable/mentorRequestsTable';
import SquadsTable from './squads/squadsTable/squadsTable';
import Dashboard from './dashboard/dashboard';
import MentorsTable from './mentor/mentorsTable/mentorsTable';
import Thanks from './thanks/thanks';
import Gala from './gala/gala';
import FinancialStatements from './about/financialStatements/financialStatements';
import styles from './home.css';
import Header from './header/header';
import Landing from './landing/landing';
import Footer from './footer/footer';
import FourOhFour from './404/fourOhFour';
import MentorRequest from './mentorRequest/mentorRequest';
import SquadsNew from './squads/squadsNew/squadsNew';
import CodeSchools from './codeSchools/codeSchools';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: false,
      bgImageUrl: null,
      signedIn: false,
      mentor: false
    };

    this.props.history.listen((location) => {
      this.setBgImage(location);
    });
  }

  componentWillMount() {
    this.setBgImage(this.props.location);
    const cookies = CookieHelpers.getUserStatus();
    this.setState({
      signedIn: cookies.signedIn,
      mentor: cookies.mentor
    });
  }

  setBgImage(location) {
    if (location.pathname === '/') {
      this.setState({ bgChanged: !(this.state.bgImage), bgImage: true, bgImageUrl: familyImage });
    } else {
      this.setState({ bgChanged: this.state.bgImage, bgImage: false, bgImageUrl: null });
    }
  }

  updateRootAuthState = () => {
    this.setState({
      mentor: true,
      signedIn: true
    });
  }

  logOut = () => {
    CookieHelpers.clearAuthCookies();
    window.location = '/';
  }

  render() {
    const { mentor, signedIn } = this.state;
    const authProps = {
      signedIn,
      mentor
    };
    const classes = classNames({
      [`${styles.home}`]: true,
      [`${styles.backgroundImage}`]: this.state.bgImage
    });
    return (
      <div
        className={classes}
        style={(this.state.bgImage) ? { backgroundImage: `url(${this.state.bgImageUrl})` } : {}}
      >
        <Header transparent={this.state.bgImage} logOut={this.logOut} signedIn={signedIn} mentor={mentor} />
        <div className={styles.main} >
          <Switch>
            <Route
              path="/home"
              component={Dashboard}
            />
            <Route
              path="/code-schools"
              component={CodeSchools}
            />
            <Route
              path="/code_schools"
              component={CodeSchools}
            />
            <Route
              path="/signup"
              component={SignUp}
            />
            <Route
              path="/join"
              component={SignUp}
            />
            <Route
              path="/sign-up"
              component={SignUp}
            />
            <Route
              path="/thanks"
              component={Thanks}
            />
            <Route
              exact
              path="/"
              render={props => (
                <Landing {...props} />
              )}
            />
            <Route
              path="/mentor-request"
              render={() => (
                <MentorRequest {...authProps} />
              )}
            />
            <Route
              path="/requests"
              render={() => (
                <MentorRequestsTable {...authProps} />
              )}
            />
            <Route
              path="/squads/new-squad"
              render={() => (
                <SquadsNew {...authProps} />
              )}
            />
            <Route
              exact path="/mentors"
              render={() => (
                <MentorsTable {...authProps} />
              )}
            />
            <Route
              path="/squads"
              render={() => (
                <SquadsTable {...authProps} />
              )}
            />
            <Route
              path="/gala"
              render={() => (
                <Gala {...authProps} />
              )}
            />
            <Route
              path="/profile/verify"
              component={Thanks}
            />
            <Route exact path="/about/financial-statements" component={FinancialStatements} />
            <Route
              path="*" component={FourOhFour}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Home);
