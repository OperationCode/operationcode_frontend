import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import OutboundLink from 'shared/components/outboundLink/outboundLink';
import FeaturedJob from './featuredJob/featuredJob';
import FeaturedJobsData from './featuredJobs.json';
import styles from './jobs.css';

const zipRecruiterScript = document.createElement('script');

zipRecruiterScript.src = 'https://www.ziprecruiter.com/jobs-widget/pro/v2/63bjfya4arc58ywaxtvi8jkchvzymeep';

document.body.appendChild(zipRecruiterScript);

const initializeZipRecruiter = (zipsearch) => {
  const options = {
    container: 'zipsearch_container',
    alerts_api_key: 'mnsiawwpjgk5i4u42awbp5kdhs8gpy26',
    search: 'software engineer',
    jobs_per_page: '20',
    days_ago: '30',
    font_family: 'Tahoma'
  };
  zipsearch.init(options);
};

class Jobs extends Component {
  componentDidMount() {
    const tryRunInit = () => {
      if (window.zipsearch) {
        return initializeZipRecruiter(window.zipsearch);
      }
      return setTimeout(tryRunInit, 500);
    };
    tryRunInit();
  }

  render() {
    const featuredJobs = FeaturedJobsData
      .filter(x => x.status === 'active')
      .map(job => (
        <FeaturedJob
          key={`${Math.random()} + ${job.name} + ${job.sourceUrl}`}
          title={job.title}
          source={job.source}
          sourceUrl={job.sourceUrl}
          city={job.city}
          state={job.state}
          country={job.country}
          description={job.description}
          status={job.status}
          remote={job.remote}
        />
      ));

    return (
      <div>
        <Section title="Featured Jobs" theme="whiteCondensed">
          <div className={styles.featuredJobsContainer}>
            <div className={styles.featuredJobs}>
              {featuredJobs}
            </div>
          </div>
          <p className={styles.contact}>
            Are you hiring? <OutboundLink href="mailto:kelly@operationcode.org" analyticsEventLabel="User clicked on Job Posting contact">Contact</OutboundLink> us to post your job opening with Operation Code!
          </p>
        </Section>
        <Section title="Search All Jobs" theme="white">
          <div id="zipsearch_container" />
        </Section>
      </div>

    );
  }
}

export default Jobs;
