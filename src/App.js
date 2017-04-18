import React, { Component, Image } from 'react';
import Home from './scenes/home/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    );
  }
}

export default App;
