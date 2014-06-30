﻿import references = require('references');
import promise = require('./promise');
import cps = require('./cps');
import thunk = require('./thunk');
export = iterableAPI;


var iterableAPI: AsyncAwait.Async.IterableAPI = <any> promise;
iterableAPI.promise = promise.mod<AsyncAwait.Async.IterablePromiseBuilder>({});
iterableAPI.cps = cps;
iterableAPI.thunk = thunk;