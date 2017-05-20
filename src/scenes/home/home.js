/* eslint-disable no-console, react/forbid-prop-types */

import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Login from 'shared/components/login/login';
import familyImage from 'images/Family-2.png';
import SignUp from './signup/signup';
import MentorRequestsTable from './mentor/mentorRequestsTable/mentorRequestsTable';
import Thanks from './thanks/thanks';
import styles from './home.css';
import Header from './header/header';
import Landing from './landing/landing';
import Footer from './footer/footer';
import MentorRequest from './mentorRequest/mentorRequest';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: false,
      bgImageUrl: null
    };

    this.props.history.listen((location) => {
      this.setBgImage(location);
    });
  }

  componentWillMount() {
    this.setBgImage(this.props.location);
  }

  setBgImage(location) {
    if (location.pathname === '/') {
      this.setState({ bgChanged: !(this.state.bgImage), bgImage: true, bgImageUrl: familyImage });
    } else {
      this.setState({ bgChanged: this.state.bgImage, bgImage: false, bgImageUrl: null });
    }
  }

  render() {
    const classes = classNames({
      [`${styles.home}`]: true,
      [`${styles.backgroundImage}`]: this.state.bgImage
    });
    return (
      <div
        className={classes}
        style={(this.state.bgImage) ? { backgroundImage: `url(${this.state.bgImageUrl})` } : {}}
      >
        <Header transparent={this.state.bgImage} />
        <div className={styles.main} >
          <Route
            exact path="/" render={props => (
              <Landing {...props} />
            )}
          />
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/join" component={SignUp} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/mentor-request" component={MentorRequest} />
          <Route path="/mentor/requests" component={MentorRequestsTable} />
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
