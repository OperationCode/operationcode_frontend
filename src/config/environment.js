const config = {
  backendUrl: process.env.OC_BACKEND_URL || 'http://localhost:3000/api/v1',
  host: process.env.OC_HOST || 'http://localhost:4000',
  idmeClientId: process.env.OC_IDME_CLIENT_ID || '6d781bfd42506613a0fe4ad4123aaf6d',
  idmeOAuthUrl: process.env.OC_IDME_AUTH_URL || 'http://localhost:4001/oauth/authorize'
};

console.dir(config); //eslint-disable-line
export default config;
