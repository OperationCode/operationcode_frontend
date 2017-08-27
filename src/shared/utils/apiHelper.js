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

export function joinSquad(id) {
  const authHeader = setAuthorizationHeader();
  return axios.post(`${config.backendUrl}/squads/${id}/join`, {
    request: {

    }
  }, {
    headers: authHeader
  }).then(({ data }) => data);
}

export const getServices = () => makeGenericGet('services');

export const getMentors = () => makeGenericGet('mentors');
export const getMentor = id => makeGenericGet(`mentors/${id}`);

export const getRequests = () => makeGenericGet('requests');

export const getSquads = () => makeGenericGet('squads');

export const getScholarships = () => makeGenericGet('scholarships');
export const getScholarship = id => makeGenericGet(`scholarships/${id}`);

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

export function postSquads({ name, leaderId, description, minimum, maximum, skillLevel, activities, endCondition, mentorIds }) {
  const authHeader = setAuthorizationHeader();

  return axios.post(`${config.backendUrl}/squads`, {
    squad: {
      name,
      leader_id: leaderId,
      description,
      minimum,
      maximum,
      skill_level: skillLevel,
      activities,
      end_condition: endCondition,
      mentor_ids: mentorIds
    }
  }, {
    headers: authHeader
  });
}

export function updateRequest({ request, status, mentor }) {
  const authHeader = setAuthorizationHeader();

  return axios.patch(`${config.backendUrl}/requests/${request}`, {
    request: {
      status,
      mentor
    }
  }, {
    headers: authHeader
  });
}
