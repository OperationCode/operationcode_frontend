import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as CookieHelpers from 'shared/utils/cookieHelper';
import Login from 'shared/components/login/login';
import IdmeVerify from 'shared/components/idme/idmeverify/idmeverify';
import AuthenticatedRoute from 'shared/components/authenticatedRoute/authenticatedRoute';
import familyImage from 'images/Family-2.jpg';
import lincolnImage from 'images/lincoln.jpg';
import winstonImage from 'images/Winston.jpg';
import colinPowellImage from 'images/colin-powell.jpg';
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
import Terms from './termsOfService/termsOfService';
import OurPrograms from './ourPrograms/ourPrograms';
import ChapterLeader from './chapterLeader/chapterLeader';
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
  };

  componentWillMount() {
    this.props.history.listen((location) => {
      this.setBgImage(location);
    });
    this.setBgImage(this.props.location);
    this.updateRootAuthState();
  }

  setBgImage(location) {
    if (location.pathname === '/') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: familyImage,
        bgImageStyle: 'backgroundImageHome',
      });
    } else if (location.pathname === '/team') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: lincolnImage,
        bgImageStyle: 'backgroundImageTeam',
      });
    } else if (location.pathname === '/our_programs') {
      this.setState({
        bgChanged: !(this.state.bgImage),
        bgImage: true,
        bgImageUrl: winstonImage,
        bgImageStyle: "backgroundImageGettingStarted"
      });
    } else if (location.pathname === '/history') {
      this.setState({
        bgChanged: !this.state.bgImage,
        bgImage: true,
        bgImageUrl: colinPowellImage,
        bgImageStyle: 'backgroundImageHistory',
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
      }
    );
  };

  sendNotification = (type, title, subtitle) => {
    this.container[type](subtitle, title, {
      timeOut: 3000,
      extendedTimeOut: 3000,
    });
  };

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
    return (
      <div
        className={classes}
        style={
          this.state.bgImage
            ? { backgroundImage: `url(${this.state.bgImageUrl})` }
            : {}
        }
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
                  updateRootAuthState={this.updateRootAuthState}
                  isLoggedIn={this.state.signedIn}
                  {...authProps}
                  sendNotification={this.sendNotification}
                />
              )}
            />
            <Route
              path="/join"
              render={() => (
                <SignUp
                  updateRootAuthState={this.updateRootAuthState}
                  isLoggedIn={this.state.signedIn}
                  {...authProps}
                  sendNotification={this.sendNotification}
                />
              )}
            />
            <Route path="/history" component={History} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/team" component={Team} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact" component={Contact} />
            <Route
              exact
              path="/about/financial-statements"
              component={FinancialStatements}
            />
            <Route path="/about" component={About} />
            <Route path="/press" component={Press} />
            <Route path="/branding" component={Branding} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/media" component={Press} />
            <Route path="/signup-info" component={SignupInformation} />
            <Route path="/challenge" component={Challenge} />
            <Route path="/terms" component={Terms} />
            <Route path="/chapter_leader" component={ChapterLeader} />
            <Route path="/leadership_circle" component={LeadershipCircle} />
            <Route
              exact
              path="/"
              render={props => (
                <Landing {...props} sendNotification={this.sendNotification} />
              )}
            />
            <Route
              path="/our_programs"
              component={OurPrograms}
            />
            <Route exact path="/scholarships" component={Scholarships} />
            <Route path="/benefit" render={() => <Benefit {...authProps} />} />
            <Route path="/gala" render={() => <Benefit {...authProps} />} />

            {/* eslint-disable */}
            <Route
              path="/newgibill"
              component={() =>
                (window.location =
                  'http://www.benefits.va.gov/gibill/post911_gibill.asp')}
            />
            {/* eslint-enable */}

            <Route
              path="/login"
              render={() => (
                <Login
                  updateRootAuthState={this.updateRootAuthState}
                  isLoggedIn={this.state.signedIn}
                  {...authProps}
                  sendNotification={this.sendNotification}
                  history={this.props.history}
                />
              )}
            />
            <AuthenticatedRoute
              exact
              path="/scholarships/:id/apply"
              isLoggedIn={CookieHelpers.getUserStatus().signedIn}
              component={ScholarshipApplication}
            />
            <AuthenticatedRoute
              exact
              path="/profile"
              isLoggedIn={CookieHelpers.getUserStatus().signedIn}
              component={() => <Profile {...authProps} />}
            />
            <AuthenticatedRoute
              exact
              path="/profile/verify"
              isLoggedIn={CookieHelpers.getUserStatus().signedIn}
              component={IdmeVerify}
              updateRootAuthState={this.updateRootAuthState}
              {...authProps}
            />
            <Route exact path="/reset_password" component={ResetPassword} />
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
