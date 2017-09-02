import React, {
  Component,
  PropTypes,
} from 'react';

import styles from './navbar.css';

import {
  View,
} from 'react-native';

const propTypes = {};

const defaultProps = {};

export default class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
				<NavigationBar
			    leftComponent={<TouchableOpacity><Icon name="sidebar" /></TouchableOpacity>}
			    centerComponent={<Title>{props.title}</Title>}
			    />
      </div>
    );
  }

}

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;
