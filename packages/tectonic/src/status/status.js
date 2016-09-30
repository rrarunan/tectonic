import * as consts from '../consts.js';

class Status {

  constructor({ status, statusCode, err, promise } = {}) {
    if (!(promise instanceof Promise)) {
      throw new Error('A promise must be provided to the Status constructor');
    }

    this.status = status || consts.PENDING;
    this.statusCode = statusCode;
    this.err = err;
    this.promise = promise;
  }

  isPending() {
    return this.status === consts.PENDING;
  }

  isSuccess() {
    return this.status === consts.SUCCESS;
  }

  isError() {
    return this.status === consts.ERROR;
  }

  then(onFulfilled, onRejected) {
    return this.promise.then(onFulfilled, onRejected);
  }

  catch(onRejected) {
    return this.promise.catch(onRejected);
  }

}

export default Status;
