import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import postscribe from 'postscribe';

import styles from './gala.css';

class Gala extends Component {

  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'https://dc161a0a89fedd6639c9-03787a0970cd749432e2a6d3b34c55df.ssl.cf3.rackcdn.com/tt-widget.js';
    script.async = true;
    script.setAttribute('data-url', 'https://www.tickettailor.com/new-order/99297/d163/ref/website_widget/');
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'true');

    postscribe('#tt-widget', script.outerHTML);
  }

  render() {
    return (
      <Section title="Operation Code Gala">
        <div className={styles.header}>
          <h3>Nov 10, 2017</h3>
          <h3>Governor&#39;s Ballroom, Sentinel Hotel</h3>
          <h3>Portland, Oregon</h3>
        </div>
        <div className={styles.container}>
          <div id="tt-widget">
            <div className="tt-widget-fallback">
              <p>
                <a href="https://www.tickettailor.com/new-order/99297/d163/ref/website_widget/" target="_blank" rel="noopener noreferrer">Click here to buy tickets</a><br />
                <small><a href="//www.tickettailor.com?rf=wdg" className="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small>
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Gala;
