import axios from 'axios';
import config from 'config/environment.js';

const codeSchoolsData = {
  getCodeSchools() {
    return axios.get(`${config.backendUrl}/code_schools`);
  }
};

export default codeSchoolsData;

