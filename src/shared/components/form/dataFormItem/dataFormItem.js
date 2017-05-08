import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'shared/components/label/label';
import styles from './dataFormItem.css';

class DataFormItem extends Component {

  render() {
    return (
      <div className={styles.dataFormItem}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.displayName}</Label>}
        <input
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

DataFormItem.propTypes = {
  label: PropTypes.bool,
  displayName: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired
};

DataFormItem.defaultProps = {
  displayName: null,
  label: true,
  placeholder: null,
  type: 'text'
};

export default DataFormItem;
