import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import { LANGUAGES, DISCIPLINES } from 'shared/constants/options';

import Select from 'react-select';
import styles from 'shared/components/form/formOptions/formOptions.css';

class FormOptions extends Component {
  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }
  render() {
    const languages = LANGUAGES
      .map(language =>
          (
            <Select
              name={'languages'}
              value={language}
              options={language}
              onChange={e => this.props.update(e)}
              key={language}
            />
        )
    );
    const disciplines = DISCIPLINES
      .map(discipline =>
          (
            <Select
              name={'disciplines'}
              value={discipline}
              options={discipline}
              onChange={e => this.props.update(e)}
              key={discipline}
            />
        )
    );
    return (
      <Form className={styles.signup}>
        <h3>Progress = {this.props.percent}%</h3>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
        &nbsp;
        <label htmlFor="languages">
          <span className={styles.info__tagsTitle}>
            Select any languages you are interested in:
          </span>
        </label>
        <div className={styles.info__tags}>
          {languages}
        </div>
        <div className={styles.info__tagsTitle}>
          <input
            type="text"
            placeholder={'Your language here'}
            onChange={e => this.props.update(e)}
          />
        </div>
        <label htmlFor="disciplines">
          <span className={styles.info__tagsTitle}>
            Select any disciplines you are interested in:
          </span>
        </label>
        <div className={styles.info__tags}>
          {disciplines}
        </div>
      </Form>
    );
  }
}

FormOptions.propTypes = {
  percent: PropTypes.string,
  update: PropTypes.func,
  onLoad: PropTypes.func
};

FormOptions.defaultProps = {
  percent: '0',
  update: null,
  onLoad: null
};

export default FormOptions;
