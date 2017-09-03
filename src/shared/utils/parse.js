import CONFIG from './config/environment';
import _ from 'underscore';
import Backend from './backend';

export default class Parse extends Backend {
  /**
   * Parse.js client
   * @throws tokenMissing if token is undefined
   */
  initialize(token) {
    if (!_.isNull(token) && _.isUndefined(token.sessionToken)) {
      throw new Error('TokenMissing');
    }
    this._sessionToken = _.isNull(token)
      ? null
      : token.sessionToken.sessionToken;

    this._applicationId = CONFIG.PARSE.appId;
    this.config.backendUrl = CONFIG.backend.parseLocal
      ? CONFIG.PARSE.local.url
      : CONFIG.PARSE.remote.url;
  }
  /**
   * ### signup
   *
   * @param data object
   *
   * {username: ''poo', email: 'foo@gmail.com', password: 'Passw0rd!'}
   *
   * @return
   * if ok, res.json={createdAt: '2017-12-30T15:17:05.379Z',
   *   objectId: '5TgExo2wBA',
   *   sessionToken: 'r:dEgdUkcs2ydMV9Y9mt8HcBrDM'}
   *
   * if error, {code: xxx, error: 'message'}
   */
  async signup(data) {
    return await this._fetch({ method: 'POST', url: '/users', body: data })
      .then(res => {
        return res.json().then(function(json) {
          if (res.status === 200 || res.status === 201) {
            return json;
          } else {
            throw json;
          }
        });
      })
      .catch(error => {
        throw error;
      });
  }
  /**
   * ### login
   * encode the data and and call _fetch
   *
   * @param data
   *
   *  {username: ''poo', password: 'Passw0rd!'}
   *
   * @returns
   *
   * createdAt: '2017-12-30T15:29:36.611Z'
   * updatedAt: '2017-12-30T16:08:50.419Z'
   * objectId: 'Z4yvP19OeL'
   * email: ''poo@foo.com'
   * sessionToken: 'r:Kt9wXIBWD0dNijNIq2u5rRllW'
   * username: ''poo'
   *
   */
  async login(data) {
    const formBody = [];
    for (let property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    return await this._fetch({
      method: 'GET',
      url: '/login?' + formBody
    })
      .then(res => {
        return res.json().then(function(json) {
          if (res.status === 200 || res.status === 201) {
            return json;
          } else {
            throw json;
          }
        });
      })
      .catch(error => {
        throw error;
      });
  }
  /**
   * ### logout
   * prepare the request and call _fetch
   */
  async logout() {
    return await this._fetch({ method: 'POST', url: '/logout', body: { } })
      .then(res => {
        if (
          res.status === 200 ||
          res.status === 201 ||
          res.status === 400 ||
          res.code === 209
        ) {
          return {};
        } else {
          throw new Error({ code: 404, error: 'unknown error from OperationCode.com' });
        }
      })
      .catch(error => {
        throw error;
      });
  }
  /**
   * ### resetPassword
   * the data is already in a JSON format, so call _fetch
   *
   * @param data
   * {email: ''poo@foo.com'}
   *
   * @returns empty object
   *
   * if error:  {code: xxx, error: 'message'}
   */
  async resetPassword(data) {
    return await this._fetch({
      method: 'POST',
      url: '/reset_password',
      body: data
    })
      .then(res => {
        return res.json().then(function(json) {
          if (res.status === 200 || res.status === 201) {
            return {};
          } else {
            throw json;
          }
        });
      })
      .catch(error => {
        throw error;
      });
  }
  /**
   * ### getProfile
   * Using the sessionToken, we'll get everything about
   * the current user.
   *
   * @returns
   *
   * if good:
   * {createdAt: '2017-12-30T15:29:36.611Z'
   *  email: ''poo@onme.com'
   *  objectId: 'Z4yvP19OeL'
   *  sessionToken: 'r:uFeYONgIsZMPyxOWVJ6VqJGqv'
   *  updatedAt: '2017-12-30T15:29:36.611Z'
   *  username: ''poo'}
   *
   * if error, {code: xxx, error: 'message'}
   */
  async getProfile() {
    return await this._fetch({ method: 'GET', url: `'/${config.backendUrl}/users/userId'` })
      .then(response => {
        return response.json().then(function(res) {
          if (response.status === 200 || response.status === 201) {
            return res;
          } else {
            throw res;
          }
        });
      })
      .catch(error => {
        throw error;
      });
  }
  /**
   * ### updateProfile
   * for this user, update their record
   * the data is already in JSON format
   *
   * @param userId  _id of Parse.com
   * @param data object:
   * {username: 'user', email: 'poo@foo.com'}
   */
  async updateProfile(userId, data) {
    return await this._fetch({
      method: 'PUT',
      url: `'/${config.backendUrl}'/users/' + userId'`,
      body: data
    })
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          return {};
        } else {
          res.json().then(function(res) {
            throw res;
          });
        }
      })
      .catch(error => {
        throw error;
      });
  }
  /**
   * ### _fetch
   * A generic function that prepares the request
   * @returns object:
   *   code: response.code
   *   status: response.status
   *   json: reponse.json()
   */
  async _fetch(opts) {
    opts = _.extend(
      {
        method: 'GET',
        url: `'/${config.backendUrl}/${request.opts}'`,
        body: setAuthorizationHeader(),
        callback: getRequests()
      },
      opts
    );

    const reqOpts = {
      method: opts.method,
      headers: {
        'X-Parse-Application-Id': this._appId,
        'X-Parse-REST-API-Key': this._restAPIKey
      }
    };
    if (this._sessionToken) {
      reqOpts.headers['X-Parse-Session-Token'] = this._sessionToken;
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers['Accept'] = 'application/json';
      reqOpts.headers['Content-Type'] = 'application/json';
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body);
    }

    return await fetch(this.API_BASE_URL + opts.url, reqOpts);
  }
}
// The singleton constiable
export let parse = new Parse();
