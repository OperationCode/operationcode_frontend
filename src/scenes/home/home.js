import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from 'shared/components/login/login';
import styles from './home.css';
import Header from './header/header';
import Landing from './landing/landing';
import CodeSchools from './code_schools/codeSchools';
import Footer from './footer/footer';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Header />
        <div className={styles.main} >
          <Route exact path="/" component={Landing} />
          <Route path="/code_schools" component={CodeSchools} />
          <Route path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
