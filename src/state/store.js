import { createStore } from 'redux';
import login from './login/reducers';

const store = createStore(login);

export default store;
