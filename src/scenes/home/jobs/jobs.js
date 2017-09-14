import React, { Component } from 'react';
import Section from 'shared/components/section/section';

const zipRecruiterScript = document.createElement('script');

zipRecruiterScript.src = 'https://www.ziprecruiter.com/jobs-widget/pro/v2/63bjfya4arc58ywaxtvi8jkchvzymeep';

document.body.appendChild(zipRecruiterScript);

const initializeZipRecruiter = (zipsearch) => {
  const options = {
    container: 'zipsearch_container',
    alerts_api_key: 'mnsiawwpjgk5i4u42awbp5kdhs8gpy26',
    search: 'software engineer',
    jobs_per_page: '10',
    days_ago: '30',
    font_family: 'Tahoma',
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
    return (
      <Section title="Open Positions" theme="white">
        <div
          id="zipsearch_container"
        />
      </Section>
    );
  }
}

export default Jobs;
