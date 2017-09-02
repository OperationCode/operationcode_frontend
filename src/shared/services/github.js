import fetch from './utils/fetch';
import log from './utils/log';
import {
  splitArray,
  flattenObject
} from './utils/helpers';

const BASE_URL = 'https://api.github.com';
const API_TOKEN = 'https://github.com/login/oauth/access_token';
const API_GET_USER = `${BASE_URL}/user`;

const API_USERS = `${BASE_URL}/users`;
const API_ORGS = `${BASE_URL}/orgs`;
const API_REPOS = `${BASE_URL}/repos`;


/* ===================== repository =====================*/
const getRepository = (fullname, verify) => {
  const { qs, headers } = verify;
  headers.Accept = 'application/vnd.github.mercy-preview+json';
  return fetch.get({
    qs,
    headers,
    url: `${API_REPOS}/${fullname}`
  });
};

const starRepository = (fullname, verify) => {
  const { qs, headers } = verify;
  return fetch.put({
    qs,
    headers,
    url: `${API_GET_USER}/starred/${fullname}`
  });
};

const unstarRepository = (fullname, verify) => {
  const { qs, headers } = verify;
  return fetch.delete({
    qs,
    headers,
    url: `${API_GET_USER}/starred/${fullname}`
  });
};

const getUserRepos = (login, verify, page = 1) => {
  const { qs, headers } = verify;
  qs.per_page = 100;
  qs.page = page;

  return fetch.get({
    qs,
    headers,
    url: `${API_USERS}/${login}/repos`
  });
};

const getOrgRepos = (org, verify, page = 1) => {
  const { qs, headers } = verify;
  qs.per_page = 100;
  qs.page = page;

  return fetch.get({
    qs,
    headers,
    url: `${API_ORGS}/${org}/repos`
  });
};

const getUserPubOrgs = (login, verify, page = 1) => {
  const { qs, headers } = verify;
  qs.per_page = 100;
  qs.page = page;

  return fetch.get({
    qs,
    headers,
    url: `${API_USERS}/${login}/orgs`
  });
};

const getReposYearlyCommits = async (fullname, verify) => {
  let result = [];
  const { qs, headers } = verify;
  try {
    result = await fetch.get({
      qs,
      headers,
      url: `${API_REPOS}/${fullname}/stats/commit_activity`
    });
  } catch (err) {
    log.error(err);
    result = [];
  }
  return result;
};

const getReposLanguages = async (fullname, verify) => {
  let result = {};
  const { qs, headers } = verify;
  try {
    const languages = await fetch.get({
      qs,
      headers,
      url: `${API_REPOS}/${fullname}/languages`
    });
    let total = 0;
    Object.keys(languages).forEach(key => (total += languages[key]));
    Object.keys(languages).forEach(key => (result[key] = languages[key] / total));
  } catch (err) {
    log.error(err);
    result = {};
  }
  return result;
};

const getReposContributors = async (fullname, verify) => {
  let results = [];
  const { qs, headers } = verify;
  try {
    const contributors = await fetch.get({
      qs,
      headers,
      url: `${API_REPOS}/${fullname}/stats/contributors`
    });
    results = contributors.map((contributor) => {
      const { total, weeks, author } = contributor;
      const weeklyCommits = weeks.map((week) => {
        const { w, a, d, c } = week;
        return {
          week: w,
          data: parseInt((a + d + c), 10)
        };
      });
      const { avatar_url, login } = author;
      return {
        total,
        login,
        avatar_url,
        weeks: weeklyCommits
      };
    });
  } catch (err) {
    log.error(err);
    results = [];
  }
  return results;
};

const fetchByPromiseList = promiseList =>
  Promise.all(promiseList).then((datas) => {
    let results = [];
    datas.forEach(data => (results = [...results, ...data]));
    return Promise.resolve(results);
  }).catch(() => Promise.resolve([]));

const mapReposToGet = async ({ repositories, params }, func) => {
  const repos = splitArray(repositories);
  const results = [];
  for (let i = 0; i < repos.length; i += 1) {
    const repository = repos[i];
    const promiseList = repository.map(item => func(item.fullname || item.full_name, params));
    const datas = await Promise.all(promiseList).catch(() => Promise.resolve([]));
    results.push(...datas);
  }

  return Promise.resolve(results);
};

/* =========================== github api =========================== */

const getOctocat = (verify) => {
  const { qs, headers } = verify;
  return fetch.get({
    qs,
    headers,
    url: `${BASE_URL}/octocat`
  });
};

const getZen = (verify) => {
  const { qs, headers } = verify;
  return fetch.get({
    qs,
    headers,
    url: `${BASE_URL}/zen`
  });
};

const getToken = (code, verify) => {
  const { qs, headers } = verify;
  return fetch.post({
    headers,
    url: `${API_TOKEN}?code=${code}&${flattenObject(qs)}`
  });
};

const getUser = (login, verify) => {
  const { qs, headers } = verify;
  return fetch.get({
    qs,
    headers,
    url: `${API_USERS}/${login}`
  });
};

const getUserByToken = (verify) => {
  const { qs, headers } = verify;
  return fetch.get({
    qs,
    headers,
    url: `${API_GET_USER}`
  });
};

const getOrg = (org, verify) => {
  const { qs, headers } = verify;
  return fetch.get({
    qs,
    headers,
    url: `${API_ORGS}/${org}`
  });
};

const getOrgPubRepos = (org, params, pages = 1) => {
  const promiseList = new Array(pages).fill(0).map(
    (item, index) => getOrgRepos(org, params, index + 1));
  return fetchByPromiseList(promiseList);
};

const getPersonalPubRepos = (login, params, pages = 3) => {
  const promiseList = new Array(pages).fill(0).map(
    (item, index) => getUserRepos(login, params, index + 1));
  return fetchByPromiseList(promiseList);
};

const getPersonalPubOrgs = (login, params, pages = 1) => {
  const promiseList = new Array(pages).fill(0).map(
    (item, index) => getUserPubOrgs(login, params, index + 1));
  return fetchByPromiseList(promiseList);
};

const getAllReposYearlyCommits = async (repositories, params) =>
  await mapReposToGet({ repositories, params }, getReposYearlyCommits);

const getAllReposLanguages = async (repositories, params) =>
  await mapReposToGet({ repositories, params }, getReposLanguages);

const getAllReposContributors = async (repositories, params) =>
  await mapReposToGet({ repositories, params }, getReposContributors);

export default {
  // others
  getZen,
  getOctocat,
  getToken,
  // repos
  getRepository,
  starRepository,
  unstarRepository,
  // user
  getUser,
  getUserByToken,
  getPersonalPubRepos,
  getPersonalPubOrgs,
  // org
  getOrg,
  getOrgPubRepos,
  // repos
  getAllReposYearlyCommits,
  getAllReposLanguages,
  getReposLanguages,
  getAllReposContributors
};
