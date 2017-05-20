import axios from 'axios';
import config from 'config/environment';
import Cookies from 'universal-cookie';

export const setAuthorizationHeader = () => {
  const cookies = new Cookies();
  return {
    Authorization: `bearer ${cookies.get('token')}`
  };
};

function makeGenericGet(endpoint) {
  const authHeader = setAuthorizationHeader();
  return axios.get(`${config.backendUrl}/${endpoint}`, {
    headers: authHeader
  }).then(({ data }) => data);
}

export const getServices = () => makeGenericGet('services');

export const getMentors = () => makeGenericGet('mentors');

export function postRequest({ language, additionalDetails, mentor, service }) {
  const authHeader = setAuthorizationHeader();

  return axios.post(`${config.backendUrl}/requests`, {
    request: {
      details: additionalDetails,
      requested_mentor_id: mentor,
      service_id: service,
      language
    }
  }, {
    headers: authHeader
  });
}
