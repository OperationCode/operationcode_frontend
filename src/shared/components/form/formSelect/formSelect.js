import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormSelect extends Component {
  buildOptions = () => {
    const { prompt, options } = this.props;
    const opts = [];

    if (prompt) {
      opts.push(<option key="prompt" value="">{ prompt }</option>);
    }
    options.forEach(option => opts.push(<option key={option.value} value={option.value}>{option.label}</option>));
    return opts;
  }

  render() {
    return (
      <select id={this.props.id} onChange={this.props.onChange}>
        {this.buildOptions()}
      </select>
    );
  }
}

FormSelect.propTypes = {
  prompt: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string
};

FormSelect.defaultProps = {
  onChange: () => {},
  prompt: null,
  id: null
};
