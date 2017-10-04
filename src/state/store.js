import { createStore } from 'redux';
import register from './registration/reducers';

const store = createStore(register);

export default store;
