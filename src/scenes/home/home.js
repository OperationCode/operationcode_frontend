/* eslint-disable no-console, react/forbid-prop-types */

import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as CookieHelpers from 'shared/utils/cookieHelper';
import Login from 'shared/components/login/login';
import IdmeVerify from 'shared/components/idme/idmeverify/idmeverify';
import AuthenticatedRoute from 'shared/components/authenticatedRoute/authenticatedRoute';
import familyImage from 'images/Family-2.jpg';
import Profile from './profile/profile';
import SignUp from './signup/signup';
import MentorRequestsTable from './mentor/mentorRequestsTable/mentorRequestsTable';
import SquadsTable from './squads/squadsTable/squadsTable';
import Dashboard from './dashboard/dashboard';
import MentorsTable from './mentor/mentorsTable/mentorsTable';
import Thanks from './thanks/thanks';
import Team from './team/team';
import Gala from './gala/gala';
import FAQ from './faq/faq';
import Contact from './contact/contact';
import History from './history/history';
import FinancialStatements from './about/financialStatements/financialStatements';
import Header from './header/header';
import Landing from './landing/landing';
import Footer from './footer/footer';
import FourOhFour from './404/fourOhFour';
import MentorRequest from './mentorRequest/mentorRequest';
import SquadsNew from './squads/squadsNew/squadsNew';
import CodeSchools from './codeSchools/codeSchools';
import About from './about/about';
import Press from './press/press';
import ResetPassword from './resetPassword/resetPassword';
import Challenge from './challenge/challenge';
import styles from './home.css';

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
    this.updateRootAuthState();
  }

  setBgImage(location) {
    if (location.pathname === '/') {
      this.setState({ bgChanged: !(this.state.bgImage), bgImage: true, bgImageUrl: familyImage });
    } else {
      this.setState({ bgChanged: this.state.bgImage, bgImage: false, bgImageUrl: null });
    }
  }

  updateRootAuthState = (cb) => {
    const cookies = CookieHelpers.getUserStatus();
    this.setState({
      signedIn: cookies.signedIn,
      mentor: cookies.mentor,
      verified: cookies.verified
    }, () => {
      if (cb) {
        cb(this.props.history);
      }
    });
  }

  logOut = () => {
    CookieHelpers.clearAuthCookies();
    this.setState({
      signedIn: false,
      mentor: false,
      verified: false
    }, () => this.props.history.push('/'));
  }

  render() {
    const { mentor, signedIn, verified } = this.state;
    const authProps = {
      signedIn,
      mentor,
      verified
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
              path="/history"
              component={History}
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
              path="/team"
              component={Team}
            />
            <Route
              path="/faq"
              component={FAQ}
            />
            <Route
              path="/contact"
              component={Contact}
            />
            <Route
              exact
              path="/about/financial-statements"
              component={FinancialStatements}
            />
            <Route
              path="/about"
              component={About}
            />
            <Route
              path="/press"
              component={Press}
            />
            <Route
              path="/media"
              component={Press}
            />
            <Route
              path="/challenge"
              component={Challenge}
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
              path="/newgibill"
              component={() => (window.location = 'http://www.benefits.va.gov/gibill/post911_gibill.asp')}
            />
            <Route
              path="/login"
              render={() => (
                <Login updateRootAuthState={this.updateRootAuthState} {...authProps} />
              )}
            />
            <AuthenticatedRoute
              exact path="/profile"
              isLoggedIn={CookieHelpers.getUserStatus().signedIn}
              component={Profile}
              {...authProps}
            />
            <AuthenticatedRoute
              exact path="/profile/verify"
              isLoggedIn={CookieHelpers.getUserStatus().signedIn}
              component={IdmeVerify}
              updateRootAuthState={this.updateRootAuthState}
              {...authProps}
            />
            <Route exact path="/reset_password" component={ResetPassword} />
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
