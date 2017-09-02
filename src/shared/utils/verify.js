import config from 'config';

const app = config.get('app');
const validateApps = Object.keys(app);

const verifyApp = (appName) => {
  const filterApp = validateApps.filter(item => item === appName);
  if (!filterApp.length) {
    throw new Error('403 Forbidden!');
  }
  return filterApp[0];
};

export default verifyApp;
