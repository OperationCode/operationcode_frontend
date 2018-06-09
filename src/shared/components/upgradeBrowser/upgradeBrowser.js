import React from 'react';
import ReactModal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faexclamationtriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import firefoxLogo from 'images/browserLogos/firefox-icon.png';
import chromeLogo from 'images/browserLogos/chrome-icon.png';
import edgeLogo from 'images/browserLogos/edge-icon.png';
import safariLogo from 'images/browserLogos/safari-icon.png';
import styles from './upgradeBrowser.css';

const UpgradeBrowser = () => (
  <div>
    <ReactModal className={styles.layout} overlayClassName={styles.overlay} isOpen="true">
      <div className={styles.content_align}>
        <FontAwesomeIcon icon={faexclamationtriangle} className={styles.warning_logo} />
        <div className={styles.upgrade_browser_message}>Please Upgrade Your Browser</div>
        <div className={styles.main_message}>
          You might be experiencing some problems viewing this page. Use the links below to download
          or upgrade your existing browser for a seamless experience.
        </div>
        <div className={styles.flex}>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Microsoft Edge</span>
            <a href="https://www.microsoft.com/windows/microsoft-edge">
              <img className={styles.browser_image} src={edgeLogo} alt="firefox" />
            </a>
          </div>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Google Chrome</span>
            <a href="https://www.google.com/chrome">
              <img className={styles.browser_image} src={chromeLogo} alt="firefox" />
            </a>
          </div>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Mozilla Firefox</span>
            <a href="https://www.mozilla.org/firefox/new">
              <img className={styles.browser_image} src={firefoxLogo} alt="firefox" />
            </a>
          </div>
          <div className={styles.browser}>
            <span className={styles.browser_name}>Safari</span>
            <a href="https://support.apple.com/downloads/safari">
              <img className={styles.browser_image} src={safariLogo} alt="firefox" />
            </a>
          </div>
        </div>
      </div>
    </ReactModal>
  </div>
);

export default UpgradeBrowser;
