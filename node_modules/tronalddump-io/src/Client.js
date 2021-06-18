'use strict';

const https = require('https'),
      pkg = require('../package.json'),
      querystring = require('querystring'),
      url = require('url');

/**
 * Create a new Tronald instance
 * @constructor
 */
function Tronald() {
  if (!(this instanceof Tronald)) {
    return new Tronald();
  }

  this.basePath = '/';
  this.clientVersion = pkg.version;
  this.hostName = 'api.tronalddump.io';
  this.port = 443;
}

/**
 * Call Tronald api
 * @param  {String} method
 * @param  {String} path
 * @param  {Object} query
 * @param  {Object} headers
 * @param  {Object} body
 * @return {Promise}
 */
Tronald.prototype.request = function (method, path, query, headers, body) {
  const options = {
          hostname : this.hostName,
          headers  : headers || null,
          path     : url.resolve(this.basePath, path) + (query ? `?${querystring.stringify(query)}` : ''),
          port     : this.port,
          method
        },
        requestBody = body ? JSON.stringify(body) : null;

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = '';

      res.setEncoding('utf8')
        .on('data', (data) => {
          responseBody += data;
        })
        .on('end', () => {
          resolve({
            body       : responseBody || null,
            statusCode : res.statusCode,
            headers    : res.headers
          });
        });
    });

    req.end(requestBody);

    req.on('error', (err) => {
      reject(err);
    });
  });
};

/**
 * Return the current version of the tronald api client
 * @return {String}
 */
Tronald.prototype.getClientVersion = function () {
  return this.clientVersion;
};

/**
 * @param  {String} quoteId
 * @return {Promise}
 */
Tronald.prototype.getQuote = function (quoteId) {
  const response = this.request('get', `quote/${quoteId}`, null, {
    accept       : 'application/hal+json',
    'user-agent' : `tronalddump-io/client-nodejs#v${pkg.version}`
  });

  return new Promise((resolve, reject) => {
    response.then((res) => {
      resolve(JSON.parse(res.body));
    }).catch((err) => {
      reject(err);
    });
  });
};

/**
 * @param  {String} searchTerm
 * @return {Promise}
 */
Tronald.prototype.search = function (searchTerm) {
  const query = {
          query : searchTerm
        },
        response = this.request('get', 'search/quote', query, {
          accept       : 'application/hal+json',
          'user-agent' : `tronalddump-io/client-nodejs#v${pkg.version}`
        });

  return new Promise((resolve, reject) => {
    response.then((res) => {
      resolve(JSON.parse(res.body));
    }).catch((err) => {
      reject(err);
    });
  });
};

module.exports = Tronald;
