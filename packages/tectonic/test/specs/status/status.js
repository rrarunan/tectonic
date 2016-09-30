import { assert } from 'chai';

import Status from '/src/status/status.js';
import * as consts from '/src/consts.js';

describe('status', () => {
  let status;
  let promise = new Promise((resolve, reject) => resolve('ya'));

  describe('constructor', () => {
    it('has a default status of PENDING if undefined', () => {
      status = new Status({ promise });
      assert.equal(consts.PENDING, status.status);
      assert.equal(consts.PENDING, status.status);
    });

    it('throws an error with no promise', () => {
      assert.throws(() => {
        status = new Status();
      }, 'A promise must be provided to the Status constructor');
    });

    it('throws an error with an invalid promise', () => {
      assert.throws(() => {
        status = new Status({ promise: 'doot' });
      }, 'A promise must be provided to the Status constructor');
    });
  });

  describe('status functions', () => {
    it('isPending returns appropriately', () => {
      status = new Status({ status: consts.PENDING, promise });
      assert.isTrue(status.isPending());
      status = new Status({ status: consts.SUCCESS, promise });
      assert.isFalse(status.isPending());
    });

    it('isSuccess returns appropriately', () => {
      status = new Status({ status: consts.SUCCESS, promise });
      assert.isTrue(status.isSuccess());
      status = new Status({ promise });
      assert.isFalse(status.isSuccess());
    });

    it('isError returns appropriately', () => {
      status = new Status({ status: consts.ERROR, promise });
      assert.isTrue(status.isError());
      status = new Status({ promise });
      assert.isFalse(status.isError());
    });
  });

  describe('promises', () => {
    it('chains promises together', () => {
    });
  });

});
