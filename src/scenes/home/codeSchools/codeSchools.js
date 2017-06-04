import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
// import ApprovedSchools from './approvedSchools/approvedSchools';
import styles from './codeSchools.css';

class CodeSchools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schools: {}
    };
  }

  render() {
    return (
      <div>
        <Section
          className={styles.codeSchools}
          title="Code Schools"
          theme="white"
          margin
        >
          <p>
            Code schools prepare aspiring programmers for new careers in software development.
            <br />
            <br />
            Code schools are accelerated learning programs that will prepare you for a career in
            software development. Each school listed below ranges in length, vary in tuition costs,
            and in programming languages. Desirable from an employer&apos;s standpoint, code schools
            are founded by software developers who saw a need for more programmers and aspired to
            teach the next generation.
            <br />
            <br />
            We encourage you to check out the schools below, do your research, and ask fellow
            software developers in <Link to="https://operation-code.slack.com/">Slack</Link>.
          </p>

          <div className={styles.filterButtonDiv}>
            <LinkButton
              text="Code Schools with VA Approval"
              theme="blue"
              link="#schoolsByApproval"
            />
            <LinkButton
              text="Code Schools with Scholarships"
              theme="blue"
              link="#schoolsByScholarship"
            />
            <LinkButton
              text="Code Schools by State"
              theme="blue"
              link="#schoolsByState"
            />
          </div>
        </Section>


        <Section
          className={styles.schoolsByApproval}
          title="VA-Approved Schools"
          headingLines={false}
          margin
        >
          <p>
            Are you a code school seeking state and/or VA approval?
            <br />
            <Link to="mailto:staff@operationcode.org" role="button">
              Request technical assistance today.
            </Link>
          </p>
        </Section>


        <Section
          className={styles.schoolsByScholarship}
          title="Partners With Scholarships"
          theme="white"
          headingLines={false}
          margin
        >
          <p>
            Are you a code school seeking state and/or VA approval?
            <br />
            <Link to="mailto:staff@operationcode.org" role="button">
              Request technical assistance today.
            </Link>
          </p>
        </Section>


        <Section
          id="schoolsByState"
          className={styles.schoolsByState}
          title="Schools by State"
          headingLines={false}
          margin
        >
          <p>
            Many code schools around the nation offer military/veterans discounts to make coding
            education more accessible to those who&apos;ve worn the uniform and served our country.
            <b>Apply for a scholarship with our partners now and get coding:</b>
          </p>

          <LinkButton
            text="Add your code school &raquo;"
            theme="red"
            link="https://github.com/OperationCode/operationcode/blob/master/CONTRIBUTING.md"
          />
        </Section>
      </div>
    );
  }
}

export default CodeSchools;
