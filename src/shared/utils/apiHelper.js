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

export function postBackend(path, body) {
  const authHeader = setAuthorizationHeader();
  return axios.post(`${config.backendUrl}/${path}`, body, { headers: authHeader });
}

export function patchBackend(path, body) {
  const authHeader = setAuthorizationHeader();
  return axios.patch(`${config.backendUrl}/${path}`, body, { headers: authHeader });
}

export const getMentorshipData = () => makeGenericGet('airtable/mentorships');
export const getScholarships = () => makeGenericGet('scholarships');
export const getScholarship = id => makeGenericGet(`scholarships/${id}`);

export function createMentorRequest({
  slackUser,
  email,
  serviceIds,
  skillsets,
  additionalDetails,
  mentorId
}) {
  const authHeader = setAuthorizationHeader();

  return axios.post(`${config.backendUrl}/airtable/mentorships`, '', {
    params: {
      slack_user: slackUser,
      email,
      services: serviceIds,
      skillsets,
      additional_details: additionalDetails,
      mentor_requested: mentorId
    },
    headers: authHeader
  });
}

