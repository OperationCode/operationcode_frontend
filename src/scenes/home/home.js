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
import Scholarships from './scholarship/scholarships';
import ScholarshipApplication from './scholarshipApplication/scholarshipApplication';
import Team from './team/team';
import FAQ from './faq/faq';
import Jobs from './jobs/jobs';
import Contact from './contact/contact';
import History from './history/history';
import FinancialStatements from './about/financialStatements/financialStatements';
import Header from './header/header';
import Landing from './landing/landing';
import Footer from './footer/footer';
import FourOhFour from './404/fourOhFour';
import MentorRequest from './mentorRequest/mentorRequest';
import CodeSchools from './codeSchools/codeSchools';
import About from './about/about';
import Press from './press/press';
import ResetPassword from './resetPassword/resetPassword';
import Challenge from './challenge/challenge';
import SignupInformation from './informationForm/informationForm';
import Benefit from './benefit/benefit';
import styles from './home.css';

class Home extends Component {
  state = {
    bgImage: false,
    bgImageUrl: null,
    signedIn: false,
    mentor: false
  }

  componentWillMount() {
    this.props.history.listen((location) => {
      this.setBgImage(location);
    });
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
              path="/code-schools"
              component={CodeSchools}
            />
            <Route
              path="/code_schools"
              component={CodeSchools}
            />
            <Route
              path="/signup"
              render={() => (
                <SignUp updateRootAuthState={this.updateRootAuthState} isLoggedIn={this.state.signedIn} {...authProps} />
              )}
            />
            <Route
              path="/join"
              render={() => (
                <SignUp updateRootAuthState={this.updateRootAuthState} isLoggedIn={this.state.signedIn} {...authProps} />
              )}
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
              path="/jobs"
              component={Jobs}
            />
            <Route
              path="/media"
              component={Press}
            />
            <Route
              path="/signup-info"
              component={SignupInformation}
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
              exact
              path="/scholarships"
              component={Scholarships}
            />
            <Route
              path="/benefit"
              render={() => (
                <Benefit {...authProps} />
              )}
            />
            <Route
              path="/gala"
              render={() => (
                <Benefit {...authProps} />
              )}
            />
            {/* eslint-disable */}
            <Route
              path="/newgibill"
              component={() => window.location = 'http://www.benefits.va.gov/gibill/post911_gibill.asp'}
            />
            {/* eslint-enable */}
            <Route
              path="/login"
              render={() => (
                <Login updateRootAuthState={this.updateRootAuthState} isLoggedIn={this.state.signedIn} {...authProps} />
              )}
            />
            <AuthenticatedRoute
              exact path="/scholarships/:id/apply"
              isLoggedIn={CookieHelpers.getUserStatus().signedIn}
              component={ScholarshipApplication}
            />
            <AuthenticatedRoute
              exact path="/profile"
              isLoggedIn={CookieHelpers.getUserStatus().signedIn}
              component={() => (<Profile {...authProps} />)}
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
