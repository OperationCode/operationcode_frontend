const config = {
  backendUrl: process.env.OC_BACKEND_URL,
  host: process.env.OC_HOST,
  idmeClientId: process.env.OC_IDME_CLIENT_ID,
  idmeOAuthUrl: process.env.OC_IDME_AUTH_URL
};
console.dir(process.env); //eslint-disable-line
console.dir(config); //eslint-disable-line
export default config;
