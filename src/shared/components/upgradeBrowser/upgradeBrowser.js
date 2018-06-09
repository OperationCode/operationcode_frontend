import React from 'react';
import ReactModal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import OutboundLink from 'shared/components/outboundLink/outboundLink';
import styles from './upgradeBrowser.css';

const UpgradeBrowser = () => (
  <div>
    <ReactModal className={styles.layout} overlayClassName={styles.overlay} isOpen="true">
      <div className={styles.content_align}>
        <FontAwesomeIcon icon={faExclamationTriangle} className={styles.warning_logo} />
        <div className={styles.upgrade_browser_message}>Please Upgrade Your Browser</div>
        <div className={styles.main_message}>
          You might be experiencing some problems viewing this page. Use the links below to download
          or upgrade your existing browser for a seamless experience.
        </div>
        <div className={styles.flex}>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Microsoft Edge</span>
            <OutboundLink href="https://www.microsoft.com/windows/microsoft-edge" analyticsEventLabel="User clicked on Edge download link">
              <img className={styles.browser_image} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/edge-icon.png" alt="edge" />
            </OutboundLink>
          </div>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Google Chrome</span>
            <OutboundLink href="https://www.google.com/chrome" analyticsEventLabel="User clicked on Chrome download link">
              <img className={styles.browser_image} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/chrome-icon.png" alt="chrome" />
            </OutboundLink>
          </div>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Mozilla Firefox</span>
            <OutboundLink href="https://www.mozilla.org/firefox/new" analyticsEventLabel="User clicked on Firefox download link">
              <img className={styles.browser_image} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/firefox-icon.png" alt="firefox" />
            </OutboundLink>
          </div>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Safari</span>
            <OutboundLink href="https://support.apple.com/downloads/safari" analyticsEventLabel="User clicked on Safari download link">
              <img className={styles.browser_image} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/safari-icon.png" alt="safari" />
            </OutboundLink>
          </div>
        </div>
      </div>
    </ReactModal>
  </div>
);

export default UpgradeBrowser;
