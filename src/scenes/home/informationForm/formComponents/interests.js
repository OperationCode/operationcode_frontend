import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';
import PropTypes from 'prop-types';
import styles from './formComponents.css';

const languageValues = ['Javascript', 'Ruby', 'Java', 'Python', 'C#', 'C', 'Swift', '.NET', 'HTML / CSS'];
const disciplineValues = ['Web Developer', 'Web Designer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Mobile / IOS', 'Mobile / Android', 'I.T / SysAdmin', 'Cyber Security', 'Data Science'];

class Interests extends Component {

  render() {
    const languages = languageValues
      .map(language =>
        (
          <FormCheckBox
            name={'languages'}
            value={language}
            onChange={e => this.props.update(e.target.value)}
            key={language}
          />
      )
    );
    const disciplines = disciplineValues
      .map(discipline =>
        (
          <FormCheckBox
            name={'disciplines'}
            value={discipline}
            onChange={e => this.props.update(e.target.value)}
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
  update: PropTypes.func
};

Interests.defaultProps = {
  percent: '0',
  update: null,
};

export default Interests;
