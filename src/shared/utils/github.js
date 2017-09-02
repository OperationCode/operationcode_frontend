import dateHelper from './date';

export const getReposInYears = (repos, years = 1) => {
  const oneYearBefore = dateHelper.getDateBeforeYears(years);
  const seconds = dateHelper.getSeconds(oneYearBefore);
  return repos.filter(repository => dateHelper.getSeconds(repository.created_at) >= seconds);
};

export const validateReposList = (repos) => {
  const reposList = repos.filter(repository => !repository.fork).map((repository) => {
    const { name, full_name, reposId, created_at, pushed_at } = repository;
    return {
      name,
      reposId,
      pushed_at,
      created_at,
      fullname: full_name,
    };
  });
  return reposList;
};

const sortCommits = (thisRepos, nextRepos) => nextRepos.totalCommits - thisRepos.totalCommits;

export const sortByCommits = repos => repos.sort(sortCommits);
