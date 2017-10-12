import React, { Component } from 'react';
import { Line } from 'rc-progress';
import { LANGUAGES, DISCIPLINES } from 'shared/constants/status';
import Form from 'shared/components/form/form';
import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';
import PropTypes from 'prop-types';
import styles from './formComponents.css';

class Interests extends Component {
  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }

  render() {
    const languages = LANGUAGES
      .map(language =>
        (
          <FormCheckBox
            name="languages"
            value={language}
            onChange={e => this.props.update(e)}
            key={language}
            checkBox={{ display: 'block', margin: '20px' }}
            label={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: '15px' }}
          />
        ));
    const disciplines = DISCIPLINES
      .map(discipline =>
        (
          <FormCheckBox
            name="disciplines"
            value={discipline}
            onChange={e => this.props.update(e)}
            key={discipline}
            checkBox={{ display: 'block', margin: '20px' }}
            label={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: '15px' }}
          />
        ));
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

Interests.propTypes = {
  percent: PropTypes.string,
  update: PropTypes.func,
  onLoad: PropTypes.func
};

Interests.defaultProps = {
  percent: '0',
  update: null,
  onLoad: null
};

export default Interests;
