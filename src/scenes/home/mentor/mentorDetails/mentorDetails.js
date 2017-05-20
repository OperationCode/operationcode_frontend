import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import ReactTable from 'react-table';
import { getMentor } from 'shared/utils/apiHelper';
import { LED_SQUAD_COLUMNS } from 'shared/constants/table';
import styles from './mentorDetails.css';

export default class MentorDetails extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }
  state = {
    fetchingMessage: 'Fetching Details',
    mentor: {}
  };

  componentDidMount() {
    const mentorId = this.props.match.params.id;
    getMentor(mentorId).then((data) => {
      this.setState({
        fetchingMessage: null,
        mentor: data
      });
    }).catch(this.handleFetchError);
  }

  handleFetchError = (err) => {
    let fetchingMessage;
    if (err.status === 401) {
      fetchingMessage = 'You are not authorized to see this data';
    } else {
      fetchingMessage = 'There was a problem retrieving details. Please try again.';
    }
    this.setState({ fetchingMessage });
  }

  rowClickHandler = (state, rowInfo) => ({
    onClick: () => {
      console.log('It was in this row: ', rowInfo);
    }
  })

  renderLedSquads() {
    const { mentor } = this.state;
    if (mentor.led_squads.length === 0) return <div>No squads to display</div>;

    return (
      <ReactTable
        heading="Led Squads"
        data={mentor.led_squads}
        columns={LED_SQUAD_COLUMNS}
        getTdProps={this.rowClickHandler}
        showPagination={false}
        minRows={0}
      />
    );
  }

  render() {
    const { fetchingMessage, mentor } = this.state;
    if (fetchingMessage) return <h2>{fetchingMessage}</h2>;

    return (
      <Section title={`${mentor.first_name} ${mentor.last_name}`} >
        <div className={styles.mentorDetails}>
          <div className={styles.mentorColumn}>
            <div>
              <h2>Bio</h2>
              <p>{mentor.bio}</p>
            </div>
            <div>
              <h2>Location:</h2>
              <div>{mentor.zip}</div>
            </div>
          </div>
          <div className={styles.mentorColumn}>
            <div>
              <h2>Contact</h2>
              <div>Slack: {mentor.slack_name}</div>
              <div>Email: {mentor.email}</div>
            </div>
            <div>
              <h2>Led Squads</h2>
              { this.renderLedSquads() }
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
