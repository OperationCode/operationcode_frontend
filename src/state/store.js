import { createStore } from 'redux';
import register from './reducers'

const store = createStore(register);

export default store;
