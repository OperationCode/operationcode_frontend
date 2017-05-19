import axios from 'axios';
import config from 'config/environment';

function makeGenericGet(endpoint) {
  return axios.get(`${config.backendUrl}/${endpoint}`).then(({ data }) => data);
}

export const getServices = () => makeGenericGet('services');

export const getMentors = () => makeGenericGet('mentors');
