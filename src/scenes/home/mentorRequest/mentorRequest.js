import React from 'react';
import styles from './mentorRequest.css';

export default function mentorRequest() {
  return (
    <div className={styles.MentorRequest}>
      <aside>
        Please only fill out requests on the Slack app on your desktop (or Android device). Thank
        you.
      </aside>
      <p>
        Please request for mentorship by joining Operation Code&apos;s Slack team. From there,
        typing and entering the following in any channel:
        <pre>/mentor</pre>
        This will queue a bot to send you a direct message. Fill out that form and expect to
        contacted shortly afterward (usually less than 48 hours).
      </p>
    </div>
  );
}
