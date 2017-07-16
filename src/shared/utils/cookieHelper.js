import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase

const cookieDomain = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'localhost';
  }
  return 'operationcode.org';
};

export const setUserAuthCookie = ({ token, user }) => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/', domain: cookieDomain() });
  cookies.set('firstName', user.first_name, { path: '/' });
  cookies.set('lastName', user.last_name, { path: '/' });
  cookies.set('slackName', user.slack_name, { path: '/' });
  cookies.set('mentor', user.mentor, { path: '/' });
  cookies.set('verified', user.verified, { path: '/' });
};

export const clearAuthCookies = () => {
  const cookies = new Cookies();
  cookies.remove('token');
  cookies.remove('firstName');
  cookies.remove('lastName');
  cookies.remove('slackName');
  cookies.remove('mentor');
  cookies.remove('verified');
};

export const isMentor = () => {
  const cookies = new Cookies();
  return cookies.get('mentor');
};

const validToken = (token) => {
  if (token === undefined) { return false; }

  const jwt = jwt_decode(token);
  const currentTime = new Date().getTime() / 1000;

  // TODO we could validate the signature as well (issue#281)

  if (currentTime > jwt.exp) { return false; }

  return true;
};

export const getUserStatus = () => {
  const cookies = new Cookies();

  return {
    mentor: cookies.get('mentor') === 'true',
    signedIn: validToken(cookies.get('token')),
    verified: cookies.get('verified') === 'true'
  };
};

