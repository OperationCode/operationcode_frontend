import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  onChange(e) {
    // make sure we have a valid value before propogating the on change call
    let isValid = true;
    if (this.props.validationFunc) {
      isValid = this.props.validationFunc(e);
    }

    if (isValid && this.props.onChange) {
      this.props.onChange(e);
    }
  }

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
      <div>
        <select id={this.props.id} onChange={e => this.onChange(e)}>
          {this.buildOptions()}
        </select>
      </div>
    );
  }
}

FormSelect.propTypes = {
  prompt: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  validationFunc: PropTypes.func
};

FormSelect.defaultProps = {
  onChange: () => {},
  prompt: null,
  id: null,
  validationFunc: null
};

export default FormSelect;
