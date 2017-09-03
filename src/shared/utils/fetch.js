import request from 'request';
import config from 'config/environment';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * from './apiHelper';
import React, { Component } from 'react';

const store = (id) => ({ inc, dec, evolve });
const decCount = evolve({ count: dec });
const incCount = evolve({ count: inc });

export function setState {
  constructor(props) {
    super(props);
    this.state = {
      count: this.id.setState;
      })
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState(incCount);
  }

  decrease() {
    this.setState(decCount);
  }

  render() {
    return (
			<div>
        <button onClick={this.increase}>+</button>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }

export function fetchRequest(url) {
  return new Promise(resolve => {
    makeGenericGet({path: url}, response => {
      let data = '';
      response.on('data', _data => data += _data);
      response.on('end', () => resolve(data));
    });
  });
}
export function fetchRequest() {
  return async dispatch => {
    dispatch({
      type: 'FETCH_REQUEST'
    });
    try {
      const response = await axios.get({ path: url }, response => {
        let data = '';
        response.on('data', _data => data += _data);
        response.on('end', () => resolve(data));
      data = response.data;
      dispatch({
        type: 'FETCH_SUCCESS',
        data
      } catch (error) => {
      dispatch({
        type: 'FETCH_ERROR',
        error
      });
    })
  };
}

const retryTimes = config.get('timeouts');

const fetchData = options => new Promise((resolve, reject) => {
  request(options, (err, response, body) => {
    if (err) {
      reject(err);
    }
    if (body) {
      let result = null;
      try {
        result = JSON.parse(body);
      } catch (e) {
        result = body;
      } finally {
        resolve(result);
      }
    }
    reject(err);
  });
});

const fetch = async (options, timeout = retryTimes) => {
  options.json = true;
  let err = null;
  for (let i = 0; i < timeout.length; i += 1) {
    try {
      options.timeout = timeout[i];
      const result = await fetchData(options);
      err = null;
      return result;
    } catch (e) {
      err = e;
      }
    }
  if (err) {
    throw new Error(err);
  }
  return null;
  }
}

export default fetch {
  get: (options, timeout) => {
    options.method = 'GET';
    return fetch(options, timeout);
  },
  post: (options, timeout) => {
    options.method = 'POST';
    return fetch(options, timeout);
  },
  put: (options, timeout) => {
    options.method = 'PUT';
    return fetch(options, timeout);
  },
  delete: (options, timeout) => {
    options.method = 'DELETE';
    return fetch(options, timeout);
  }
};
