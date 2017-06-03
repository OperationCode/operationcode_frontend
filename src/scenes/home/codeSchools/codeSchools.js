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
      <Section className={styles.codeSchools} title="Code Schools" theme="gray" margin>
        <h4>
            Code schools prepare aspiring programmers for new careers in software development.
        </h4>
        <p>
          Code schools are accelerated learning programs that will prepare you for a career in
          software development. Each school listed below ranges in length, vary in tuition costs,
          and in programming languages. Desirable from an employer&apos;s standpoint, code schools
          are founded by software developers who saw a need for more programmers and aspired to
          teach the next generation.
        </p>

        <p>
          We encourage you to check out the schools below, do your research, and ask fellow
          software developers in <Link to="https://operation-code.slack.com/">Slack</Link>.
        </p>

        <h2>Code School Scholarships</h2>
        <p>
          Many respective code schools offer military/veterans discounts to make coding education
          more accessible to those who&apos;ve worn the uniform and served our country. <b>Apply
          now and get coding</b>:
        </p>

        <h5><Link to="https://www.thinkful.com/pricing/#scholarships">Thinkful (online)</Link></h5>
        <p>
          Thinkful partnered with Operation Code to offer scholarships for the Web Development
          Career Path program. Recipients receive $400 off each month they&apos;re enrolled for
          the scholarship to apply.
          <Link to="https://www.thinkful.com/pricing/#scholarships">Learn more...</Link>
        </p>

        <hr />

        <h5>
          <Link to="http://www.antiochla.edu/academics/bachelors-degree/coding-options/">
            Sabio (Los Angeles)
          </Link>
        </h5>
        <p>
          Sabio enables Operation Code veterans to get a full-time career in coding in six months
          all while earning credits towards an undergraduate degree. New GI Bill is an option for
          non-BA degree holders. <Link to="http://sabio.la/college">Learn more...</Link>
        </p>

        <hr />

        <h5>
          <Link to="https://launchschool.com/blog/operation-code-scholarship/">
            Launch School (online)
          </Link>
        </h5>
        <p>
          Launch School is offering Operation Code veterans two full scholarships to one male
          veteran, and another scholarship to a female veteran.
          <Link to="https://launchschool.com/blog/operation-code-scholarship/">Learn more...</Link>
        </p>

        <hr />

        <h5>
          <Link to="http://try.bloc.io/operation-code-bootcamp-scholarship/">
            Bloc (online)
          </Link>
        </h5>
        <p>
          Bloc&apos;s Web Developer Track offers all veterans $1,000 tuition credit with the
          remainder of the tuition through financing.
          <Link to="http://try.bloc.io/operation-code-bootcamp-scholarship/">Learn more...</Link>
        </p>

        <hr />

        <h5>
          <Link to="http://go.flatironschool.com/operation-code-overview">
            The Flatiron School (New York City)
          </Link>
        </h5>
        <p>
          New York City-based, Flatiron School provides up to $25,000 in scholarships for
          Operation Code veterans to participate in the Learn-Verified program which includes,
          $500 off the first month&apos;s tuition for the first 50 eligible applicants. Not sure
          about committing full-time? Sign up for
          <Link to="https://learn.co/join/operation-code">Learn.co</Link>, an online platform to get
          introduced to web development and Ruby on Rails. If you get stuck, join the
          <Link to="https://operation-code.slack.com/messages/general/#learn-dot-co">
            #learn-dot-co
          </Link>channel in our Slack.
          <Link to="http://go.flatironschool.com/operation-code-overview">Learn more...</Link>
        </p>

        <hr />

        <h5>
          <Link to="https://www.startupinstitute.com/">
            Startup Institute (Boston and NYC)
          </Link>
        </h5>
        <p>
          Startup Institute offers all veterans an
          <Link to="https://www.startupinstitute.com/admissions/scholarships/">
            automatic $1,000 off
          </Link> the cost of their full-time program. Train to work in the innovation economy in
          the areas of web development, web design, digital marketing, or sales and account
          management. Additional scholarships are also available for: Women in Tech, People of
          Color in Tech, Seasoned Professional in Tech (age 40+), and Excellence in STEM.
          <Link to="https://www.startupinstitute.com/admissions/scholarships/">Learn more...</Link>
        </p>

        <hr />

        <Link to="mailto:staff@operationcode.org" role="button">Partner with us &raquo;</Link>

        <hr />

        <h4>Code Schools by State</h4>
        <ul className="collapsible">
          <li>School 1</li>
          <li>School 2</li>
          <li>School 3</li>
          <li>School 4</li>
        </ul>

        <LinkButton
          text="Add your code school &raquo;"
          theme="red"
          link="https://github.com/OperationCode/operationcode/blob/master/CONTRIBUTING.md"
        />
      </Section>
    );
  }
}

export default CodeSchools;