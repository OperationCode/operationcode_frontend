import React, { Component } from 'react';
import styles from './home.css';
import Header from './header/header';
import Landing from './landing/landing';
import Footer from './footer/footer';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Header />
        <div className={styles.main} >
          <Route exact path="/" component={Landing}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;