import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import getValue from 'lodash/get';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as CookieHelpers from 'shared/utils/cookieHelper';
import Login from 'shared/components/login/login';
import SocialLogin from 'shared/components/socialLogin/socialLogin';
import IdmeVerify from 'shared/components/idme/idmeverify/idmeverify';
import AuthenticatedRoute from 'shared/components/authenticatedRoute/authenticatedRoute';
import familyImage from 'images/Family-2.jpg';
import lincolnImage from 'images/lincoln.jpg';
import winstonImage from 'images/Winston.jpg';
import colinPowellImage from 'images/colin-powell.jpg';
import policyImage from 'images/policy.jpg';
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
import LeadershipCircle from './leadershipCircle/leadershipCircle';
import CodeSchools from './codeSchools/codeSchools';
import About from './about/about';
import Press from './press/press';
import Branding from './branding/branding';
import ResetPassword from './resetPassword/resetPassword';
import Challenge from './challenge/challenge';
import SignupInformation from './informationForm/informationForm';
import Benefit from './benefit/benefit';
import Gala from './gala/gala';
import Terms from './termsOfService/termsOfService';
import OurPrograms from './ourPrograms/ourPrograms';
import ChapterLeader from './chapterLeader/chapterLeader';
import GetInvolved from './getInvolved/getInvolved';
import Policy from './policy/policy';
import UpgradeBrowser from 'shared/components/upgradeBrowser/upgradeBrowser';
import MentorRequest from './mentorRequest/mentorRequest';
import styles from './home.css';

const ReactToastr = require('react-toastr');

const { ToastContainer } = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Home extends Component {
  state = {
    bgImage: false,
    bgImageUrl: null,
    bgImageStyle: null,
    signedIn: false,
    mentor: false,
    showUpgradeBrowserModal: false
  };

  componentWillMount() {
    this.props.history.listen((location) => {
      this.setBgImage(location);
    });
    this.setBgImage(this.props.location);
    this.checkIfIE();
    this.updateRootAuthState();
  }

  setBgImage(location) {
    if (location.pathname === '/team') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: lincolnImage,
        bgImageStyle: 'backgroundImageTeam',
      });
    } else if (location.pathname === '/our_programs') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: winstonImage,
        bgImageStyle: 'backgroundImageGettingStarted',
      });
    } else if (location.pathname === '/about') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: familyImage,
        bgImageStyle: 'backgroundImageAbout',
      });
    } else if (location.pathname === '/history') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: colinPowellImage,
        bgImageStyle: 'backgroundImageHistory',
      });
    } else if (location.pathname === '/policy') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: policyImage,
        bgImageStyle: 'backgroundImagePolicy',
      });
    } else {
      this.setState({
        bgChanged: this.state.bgImage,
        bgImage: false,
        bgImageUrl: null,
        bgImageStyle: null,
      });
    }
  }

  updateRootAuthState = () => {
    const cookies = CookieHelpers.getUserStatus();
    this.setState({
      signedIn: cookies.signedIn,
      mentor: cookies.mentor,
      verified: cookies.verified,
    });
  };

  logOut = () => {
    CookieHelpers.clearAuthCookies();
    this.setState(
      {
        signedIn: false,
        mentor: false,
        verified: false,
      },
      () => {
        this.props.history.push('/');
      },
    );
  };

  sendNotification = (type, title, subtitle) => {
    this.container[type](subtitle, title, {
      timeOut: 3000,
      extendedTimeOut: 3000,
    });
  };

  /*
   * Simple boolean to check that local storage includes the
   * information necessary to visit /social-login
   */
   hasSocialLoginPayload = () => {
     let firstNameExists = null;
     let lastNameExists = null;
     let emailExists = null;
     try {
       firstNameExists = window.localStorage.getItem('firstname');
       lastNameExists = window.localStorage.getItem('lastname');
       emailExists = window.localStorage.getItem('email');
     }
     catch (e) {
       return false;
     }
     if((firstNameExists !== null) && (lastNameExists !== null) && (emailExists !== null)) {
       return true;
     }
     else {
       return false;
     }
   }

   checkIfIE = () => {
    const userAgent = getValue(window, 'navigator.userAgent', '');
    const hasIEUserAgent = (userAgent.indexOf('MSIE')!==-1)||(userAgent.indexOf('Trident')!==-1);
    if (hasIEUserAgent) {
        this.setState({ showUpgradeBrowserModal: true });
    }
  }

  render() {
    const { mentor, signedIn, verified } = this.state;
    const authProps = {
      signedIn,
      mentor,
      verified,
    };

    const classes = classNames({
      [`${styles.home}`]: true,
      [`${styles[this.state.bgImageStyle]}`]: this.state.bgImage,
    });

    return (this.state.showUpgradeBrowserModal)?(<UpgradeBrowser />):(
      <div
        className={classes}
        style={this.state.bgImage ? { backgroundImage: `url(${this.state.bgImageUrl})` } : {}}
      >
        <Header
          transparent={this.state.bgImage}
          logOut={this.logOut}
          signedIn={signedIn}
          mentor={mentor}
        />
        <div className={styles.main}>
          <Switch>
            <Route path="/code-schools" component={CodeSchools} />
            <Route path="/code_schools" component={CodeSchools} />
            <Route
              path="/signup"
              render={() => (
                <SignUp
                  {...authProps}
                  history={this.props.history}
                  isAuth={this.state.signedIn}
                  sendNotification={this.sendNotification}
                  updateRootAuthState={this.updateRootAuthState}
                />
              )}
            />
            <Route
              path="/join"
              render={() => (
                <SignUp
                  {...authProps}
                  history={this.props.history}
                  isAuth={this.state.signedIn}
                  sendNotification={this.sendNotification}
                  updateRootAuthState={this.updateRootAuthState}
                />
              )}
            />
            <Route path="/history" component={History} />
            <Route
              path="/login"
              render={() => (
                <Login
                  {...authProps}
                  history={this.props.history}
                  isAuth={this.state.signedIn}
                  sendNotification={this.sendNotification}
                  updateRootAuthState={this.updateRootAuthState}
                />
              )}
            />
            <Route
              path="/sign-up"
              render={() => (
                <SignUp
                  {...authProps}
                  history={this.props.history}
                  isAuth={this.state.signedIn}
                  sendNotification={this.sendNotification}
                  updateRootAuthState={this.updateRootAuthState}
                />
              )}
            />
            <Route path="/team" component={Team} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/about/financial-statements" component={FinancialStatements} />
            <Route path="/about" component={About} />
            <Route path="/press" component={Press} />
            <Route path="/branding" component={Branding} />
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
            <AuthenticatedRoute
              path="/social-login"
              isAuth={this.hasSocialLoginPayload()}
              component={SocialLogin}
              sendNotification={this.sendNotification}
              updateRootAuthState={this.updateRootAuthState}
              history={this.props.history}
            />
            <AuthenticatedRoute
              path="/social_login"
              isAuth={this.hasSocialLoginPayload()}
              component={SocialLogin}
              sendNotification={this.sendNotification}
              updateRootAuthState={this.updateRootAuthState}
              history={this.props.history}
            />
            <Route
              path="/challenge"
              component={Challenge}
            />
            <Route
              path="/terms"
              component={Terms}
            />
            <Route path="/chapter_leader" component={ChapterLeader} />
            <Route path="/leadership_circle" component={LeadershipCircle} />
            <Route path="/get-involved" component={GetInvolved} />
            <Route
              exact
              path="/"
              render={props => <Landing {...props} sendNotification={this.sendNotification} />}
            />
            <Route path="/our_programs" component={OurPrograms} />
            <Route exact path="/scholarships" component={Scholarships} />
            <Route path="/benefit" component={Benefit} />
            <Route path="/gala" component={Gala} />
            <Route path="/policy" component={Policy} />

            {/* eslint-disable */}
            <Route
              path="/newgibill"
              component={() =>
                (window.location = 'http://www.benefits.va.gov/gibill/post911_gibill.asp')}
            />
            {/* eslint-enable */}

            <Route
              path="/login"
              render={() => (
                <Login
                  {...authProps}
                  history={this.props.history}
                  isAuth={this.state.signedIn}
                  sendNotification={this.sendNotification}
                  updateRootAuthState={this.updateRootAuthState}
                />
              )}
            />
            <AuthenticatedRoute
              exact
              path="/scholarships/:id/apply"
              isAuth={CookieHelpers.getUserStatus().signedIn}
              component={ScholarshipApplication}
            />
            <AuthenticatedRoute
              exact
              path="/profile"
              isAuth={CookieHelpers.getUserStatus().signedIn}
              component={() => (<Profile {...authProps} />)}
            />
            <AuthenticatedRoute
              exact
              path="/profile/verify"
              isAuth={CookieHelpers.getUserStatus().signedIn}
              component={IdmeVerify}
              updateRootAuthState={this.updateRootAuthState}
              {...authProps}
            />
            <Route 
              exact
              path="/mentor-request"
              component={() => (window.location = 'https://op.co.de/mentor-request')}
            />
            {/* <AuthenticatedRoute
              exact
              path="/mentor-request"
              isAuth={CookieHelpers.getUserStatus().signedIn}
              component={() => (<MentorRequest {...authProps} />)}
            /> */}
            <Route exact path="/resetpassword" component={ResetPassword} />
            <Route exact path="/reset_password" component={ResetPassword} />

            {/* Place any new routes above this line */}
            <Route path="*" component={FourOhFour} />
          </Switch>
        </div>
        <ToastContainer
          ref={(input) => {
            this.container = input;
          }}
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
        />
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.shape({
      key: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,

  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default withRouter(Home);
