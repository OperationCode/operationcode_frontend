import Cookies from 'universal-cookie';

export const setUserAuthCookie = ({ token, user }) => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/' });
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

export const getUserStatus = () => {
  const cookies = new Cookies();
  return {
    mentor: cookies.get('mentor') === true,
    signedIn: cookies.get('token') !== undefined,
    verified: cookies.get('verified') === true
  };
};
