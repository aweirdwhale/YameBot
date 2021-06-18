'use strict';

const assert = require('chai').assert,
      Tronald = require('../src/Client'),
      pkg = require('../package.json');

describe(`${pkg.name}/Client`, () => {
  describe('#Constructor', () => {
    it('Creates a new instance', () => {
      assert.instanceOf(new Tronald(), Tronald);
    });
  });

  describe('#getClientVersion', () => {
    it('should return the client version', () => {
      const client = new Tronald();

      assert.equal(client.getClientVersion(), pkg.version);
    });
  });

  describe('#getQuote', () => {
    it('Should return a quote by its id', (done) => {
      const client = new Tronald(),
            response = client.getQuote('VHKwB8crTte7--FqtIxq9A');

      response.then((res) => {
        assert.isObject(res);
        done();
      });
    });
  });

  describe('#search', () => {
    it('Should perform a free text search', (done) => {
      const client = new Tronald(),
            response = client.search('Money');

      response.then((res) => {
        assert.isObject(res);
        done();
      });
    });
  });
});
