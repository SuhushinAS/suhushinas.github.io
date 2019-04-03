// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/connect.json":[function(require,module,exports) {
module.exports = {
  "secret": "secret",
  "url": "https://centrifugo.herokuapp.com"
};
},{}],"src/path.json":[function(require,module,exports) {
module.exports = {
  "coordinates": [[84.97244, 56.45895], [84.9723, 56.4589], [84.97189, 56.45875], [84.97188, 56.45872], [84.97195, 56.45857], [84.97194, 56.45849], [84.97175, 56.45841], [84.97128, 56.45881], [84.97106, 56.45899], [84.97087, 56.45915], [84.96999, 56.45988], [84.96985, 56.46], [84.96901, 56.46071], [84.96849, 56.46113], [84.9682, 56.46137], [84.96795, 56.46158], [84.96764, 56.46184], [84.96748, 56.46196], [84.96739, 56.46204], [84.96639, 56.46288], [84.96571, 56.46345], [84.96545, 56.46368], [84.96524, 56.4639], [84.96519, 56.464], [84.9652, 56.46445], [84.96521, 56.46473], [84.96522, 56.46504], [84.96522, 56.46508], [84.96526, 56.46574], [84.96528, 56.46618], [84.96528, 56.46623], [84.96529, 56.46626], [84.96529, 56.46629], [84.9653, 56.4664], [84.96531, 56.46657], [84.96532, 56.46668], [84.96536, 56.46737], [84.96539, 56.46796], [84.9654, 56.46808], [84.96541, 56.46825], [84.96546, 56.46906], [84.96546, 56.46915], [84.96547, 56.46924], [84.9655, 56.47029], [84.96553, 56.47153], [84.96553, 56.47163], [84.96554, 56.47171], [84.96558, 56.47222], [84.96561, 56.47275], [84.96563, 56.47296], [84.96565, 56.47345], [84.96567, 56.47382], [84.96567, 56.47389], [84.96567, 56.47399], [84.9657, 56.47497], [84.96572, 56.47547], [84.96575, 56.47606], [84.96576, 56.47615], [84.96577, 56.47627], [84.96578, 56.47656], [84.96561, 56.47656], [84.96532, 56.47657], [84.96528, 56.47657], [84.96528, 56.47639], [84.96527, 56.47626], [84.96527, 56.47622], [84.96527, 56.47615], [84.96423, 56.47616], [84.96365, 56.47616], [84.96346, 56.47616], [84.96278, 56.47617], [84.96189, 56.47617], [84.96176, 56.47617], [84.96157, 56.47617], [84.96078, 56.47617], [84.95949, 56.47617], [84.95844, 56.47618], [84.95821, 56.47618], [84.9581, 56.47618], [84.95751, 56.47618], [84.95684, 56.47619], [84.95633, 56.4762], [84.95556, 56.4762], [84.9554, 56.47621], [84.95542, 56.4763], [84.95544, 56.47684], [84.95544, 56.47699], [84.95545, 56.47714], [84.95545, 56.4773], [84.95546, 56.47751], [84.95547, 56.47777], [84.95546, 56.47789], [84.95543, 56.47798], [84.95517, 56.47877], [84.95502, 56.47922], [84.955, 56.4793], [84.95499, 56.47933], [84.95497, 56.47939], [84.95496, 56.47943], [84.95486, 56.47968], [84.95448, 56.48064], [84.9543, 56.4811], [84.95418, 56.48152], [84.95414, 56.4818], [84.95418, 56.48236], [84.95425, 56.48285], [84.95425, 56.48288], [84.95421, 56.48309], [84.9542, 56.48312], [84.95415, 56.48321], [84.95392, 56.48346], [84.95346, 56.48391], [84.95328, 56.48408], [84.95315, 56.4842], [84.95301, 56.48433], [84.95292, 56.48441], [84.9528, 56.48453], [84.95241, 56.4845], [84.9519, 56.48448], [84.95182, 56.48451], [84.95176, 56.48454], [84.95172, 56.48458], [84.95172, 56.48462], [84.95173, 56.48484], [84.9518, 56.48521], [84.95186, 56.4854], [84.95191, 56.48555], [84.95196, 56.48565], [84.95217, 56.48603], [84.95233, 56.48625], [84.95249, 56.48657], [84.95251, 56.48664], [84.95249, 56.4867], [84.95246, 56.48676], [84.95242, 56.48683], [84.95235, 56.48689], [84.95227, 56.48696], [84.95188, 56.48718], [84.95176, 56.48725], [84.95155, 56.48733], [84.95128, 56.48742], [84.95123, 56.48743], [84.95118, 56.48741], [84.95113, 56.48739], [84.95109, 56.48737], [84.95101, 56.48732], [84.95088, 56.48716], [84.95083, 56.4869], [84.95025, 56.48575], [84.95008, 56.4854]],
  "type": "LineString"
};
},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/es6-promise/dist/es6-promise.js":[function(require,module,exports) {
var define;
var global = arguments[3];
var process = require("process");
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof require === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));





},{"process":"node_modules/process/browser.js"}],"node_modules/wolfy87-eventemitter/EventEmitter.js":[function(require,module,exports) {
var define;
/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function () {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listenersMap = this.getListenersAsObject(evt);
        var listeners;
        var listener;
        var i;
        var key;
        var response;

        for (key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
                listeners = listenersMap[key].slice(0);
                i = listeners.length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

},{}],"node_modules/centrifuge/src/centrifuge.js":[function(require,module,exports) {
var global = arguments[3];
var Promise = require('es6-promise').Promise;
var EventEmitter = require('wolfy87-eventemitter');

/**
 * Oliver Caldwell
 * http://oli.me.uk/2013/06/01/prototypical-inheritance-done-right/
 */
if (!Object.create) {
    Object.create = (function () {
        var F = function () {
        };
        return function (o) {
            if (arguments.length !== 1) {
                throw new Error('Object.create implementation only accepts one parameter.');
            }
            F.prototype = o;
            return new F();
        }
    })()
}

function extend(destination, source) {
    destination.prototype = Object.create(source.prototype);
    destination.prototype.constructor = destination;
    return source.prototype;
}

/**
 * Array.prototype.indexOf polyfill from
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (vMember, nStartFrom) {
        /*
        In non-strict mode, if the `this` variable is null or undefined, then it is
        set the window object. Otherwise, `this` is automaticly converted to an
        object. In strict mode if the `this` variable is null or undefined a
        `TypeError` is thrown.
        */
        if (!this) {
            throw new TypeError('Array.prototype.indexOf() - can not convert "' + this + '" to object');
        }
        var nIdx = isFinite(nStartFrom) ? Math.floor(nStartFrom) : 0,
            oThis = this instanceof Object ? this : new Object(this),
            nLen = isFinite(oThis.length) ? Math.floor(oThis.length) : 0;
        if (nIdx >= nLen) {
            return -1;
        }
        if (nIdx < 0) {
            nIdx = Math.max(nLen + nIdx, 0);
        }
        if (vMember === undefined) {
            /*
            Since `vMember` is undefined, keys that don't exist will have the same
            value as `vMember`, and thus do need to be checked.
            */
            do {
                if (nIdx in oThis && oThis[nIdx] === undefined) {
                    return nIdx;
                }
            } while (++nIdx < nLen);
        } else {
            do {
                if (oThis[nIdx] === vMember) {
                    return nIdx;
                }
            } while (++nIdx < nLen);
        }
        return -1;
    };
}

function fieldValue(object, name) {
    try {
        return object[name];
    } catch (x) {
        return undefined;
    }
}

/**
 * Mixes in the given objects into the target object by copying the properties.
 * @param deep if the copy must be deep
 * @param target the target object
 * @param objects the objects whose properties are copied into the target
 */
function mixin(deep, target, objects) {
    var result = target || {};
    for (var i = 2, l = arguments.length; i < l; i++) { // Skip first 2 parameters (deep and target), and loop over the others
        var object = arguments[i];
        if (object === undefined || object === null) {
            continue;
        }
        for (var propName in object) {
            var prop = fieldValue(object, propName);
            var targ = fieldValue(result, propName);
            if (prop === target) {
                continue; // Avoid infinite loops
            }
            if (prop === undefined) {
                continue; // Do not mixin undefined values
            }
            if (deep && typeof prop === 'object' && prop !== null) {
                if (prop instanceof Array) {
                    result[propName] = mixin(deep, targ instanceof Array ? targ : [], prop);
                } else {
                    var source = typeof targ === 'object' && !(targ instanceof Array) ? targ : {};
                    result[propName] = mixin(deep, source, prop);
                }
            } else {
                result[propName] = prop;
            }
        }
    }
    return result;
}

function endsWith(value, suffix) {
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
}

function startsWith(value, prefix) {
    return value.lastIndexOf(prefix, 0) === 0;
}

function stripSlash(value) {
    if (value.substring(value.length - 1) === '/') {
        value = value.substring(0, value.length - 1);
    }
    return value;
}

function isString(value) {
    if (value === undefined || value === null) {
        return false;
    }
    return typeof value === 'string' || value instanceof String;
}

function isArray(value) {
    return Object.prototype.toString.call(value) === Object.prototype.toString.call([]);
}

function isFunction(value) {
    if (value === undefined || value === null) {
        return false;
    }
    return typeof value === 'function';
}

function log(level, args) {
    if (global.console) {
        var logger = global.console[level];
        if (isFunction(logger)) {
            logger.apply(global.console, args);
        }
    }
}

function backoff(step, min, max) {
    var jitter = 0.5 * Math.random();
    var interval = min * Math.pow(2, step + 1);
    if (interval > max) {
        interval = max;
    }
    return Math.floor((1 - jitter) * interval);
}

function errorExists(data) {
    return 'error' in data && data.error !== null && data.error !== '';
}

function Centrifuge(options) {
    this._sockJS = null;
    this._isSockJS = false;
    this._status = 'disconnected';
    this._reconnect = true;
    this._reconnecting = false;
    this._transport = null;
    this._transportName = null;
    this._transportClosed = true;
    this._messageId = 0;
    this._clientID = null;
    this._subs = {};
    this._lastMessageID = {};
    this._messages = [];
    this._isBatching = false;
    this._isAuthBatching = false;
    this._authChannels = {};
    this._numRefreshFailed = 0;
    this._refreshTimeout = null;
    this._pingInterval = null;
    this._pongTimeout = null;
    this._retries = 0;
    this._callbacks = {};
    this._latency = null;
    this._latencyStart = null;
    this._config = {
        sockJS: null,
        retry: 1000,
        maxRetry: 20000,
        timeout: 5000,
        info: '',
        resubscribe: true,
        ping: true,
        pingInterval: 30000,
        pongWaitTimeout: 5000,
        debug: false,
        insecure: false,
        server: null,
        privateChannelPrefix: '$',
        onTransportClose: null,
        transports: [
            'websocket',
            'xdr-streaming',
            'xhr-streaming',
            'eventsource',
            'iframe-eventsource',
            'iframe-htmlfile',
            'xdr-polling',
            'xhr-polling',
            'iframe-xhr-polling',
            'jsonp-polling'
        ],
        onRefresh: null,
        refreshEndpoint: '/centrifuge/refresh/',
        refreshHeaders: {},
        refreshParams: {},
        refreshData: {},
        refreshTransport: 'ajax',
        refreshAttempts: null,
        refreshInterval: 3000,
        refreshFailed: null,
        onPrivateChannelAuth: null,
        authEndpoint: '/centrifuge/auth/',
        authHeaders: {},
        authParams: {},
        authTransport: 'ajax'
    };
    if (options) {
        this.configure(options);
    }
}

extend(Centrifuge, EventEmitter);

Centrifuge._jsonpCallbacks = {};
Centrifuge._jsonpTimeouts = {};
Centrifuge._nextJSONPCallbackID = 1;

var centrifugeProto = Centrifuge.prototype;

centrifugeProto._jsonp = function (url, params, headers, data, callback) {
    if (Object.keys(headers).length > 0) {
        this._log('Only AJAX request allows to send custom headers, it is not possible with JSONP.');
    }
    this._debug('sending JSONP request to', url);

    var callbackName = 'centrifuge_jsonp_' + Centrifuge._nextJSONPCallbackID.toString();
    Centrifuge._nextJSONPCallbackID++;

    var document = global.document;
    var script = document.createElement('script');

    var timeoutTrigger = setTimeout(function () {
        Centrifuge._jsonpCallbacks[callbackName] = function () {
        };
        callback(true, 'timeout');
    }, 3000);

    Centrifuge._jsonpCallbacks[callbackName] = function (data) {
        clearTimeout(timeoutTrigger);
        callback(false, data);
        delete Centrifuge._jsonpCallbacks[callbackName];
    };

    var query = '';
    for (var i in params) {
        if (params.hasOwnProperty(i)) {
            if (query.length > 0) {
                query += '&';
            }
            query += encodeURIComponent(i) + '=' + encodeURIComponent(params[i]);
        }
    }

    var callback_name = 'Centrifuge._jsonpCallbacks[\'' + callbackName + '\']';
    script.src = this._config.authEndpoint +
        '?callback=' + encodeURIComponent(callback_name) +
        '&data=' + encodeURIComponent(JSON.stringify(data)) +
        '&' + query;

    var head = document.getElementsByTagName('head')[0] || document.documentElement;
    head.insertBefore(script, head.firstChild);
};

centrifugeProto._ajax = function (url, params, headers, data, callback) {
    var self = this;
    self._debug('sending AJAX request to', url);

    var xhr = (global.XMLHttpRequest ? new global.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'));

    var query = '';
    for (var i in params) {
        if (params.hasOwnProperty(i)) {
            if (query.length > 0) {
                query += '&';
            }
            query += encodeURIComponent(i) + '=' + encodeURIComponent(params[i]);
        }
    }
    if (query.length > 0) {
        query = '?' + query;
    }
    xhr.open('POST', url + query, true);
    if ('withCredentials' in xhr) {
        xhr.withCredentials = true;
    }

    // add request headers
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json');
    for (var headerName in headers) {
        if (headers.hasOwnProperty(headerName)) {
            xhr.setRequestHeader(headerName, headers[headerName]);
        }
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data, parsed = false;
                try {
                    data = JSON.parse(xhr.responseText);
                    parsed = true;
                } catch (e) {
                    callback(true, 'JSON returned was invalid, yet status code was 200. Data was: ' + xhr.responseText);
                }
                if (parsed) { // prevents double execution.
                    callback(false, data);
                }
            } else {
                self._log("Couldn't get auth info from application", xhr.status);
                callback(true, xhr.status);
            }
        }
    };

    setTimeout(function () {
        xhr.send(JSON.stringify(data));
    }, 20);
    return xhr;
};

centrifugeProto._log = function () {
    log('info', arguments);
};

centrifugeProto._debug = function () {
    if (this._config.debug === true) {
        log('debug', arguments);
    }
};

centrifugeProto._websocketSupported = function () {
    return !(typeof WebSocket !== 'function' && typeof WebSocket !== 'object')
};

centrifugeProto._sockjsEndpoint = function () {
    var url = this._config.url;
    url = url
        .replace('ws://', 'http://')
        .replace('wss://', 'https://');
    url = stripSlash(url);
    if (!endsWith(this._config.url, 'connection')) {
        url = url + '/connection';
    }
    return url;
};

centrifugeProto._rawWebsocketEndpoint = function () {
    var url = this._config.url;
    url = url
        .replace('http://', 'ws://')
        .replace('https://', 'wss://');
    url = stripSlash(url);
    if (!endsWith(this._config.url, 'connection/websocket')) {
        url = url + '/connection/websocket';
    }
    return url;
};

centrifugeProto._configure = function (configuration) {
    this._debug('Configuring centrifuge object with', configuration);

    if (!configuration) {
        configuration = {};
    }

    this._config = mixin(false, this._config, configuration);

    if (!this._config.url) {
        throw 'Missing required configuration parameter \'url\' specifying server URL';
    }

    if (!this._config.user && this._config.user !== '') {
        if (!this._config.insecure) {
            throw 'Missing required configuration parameter \'user\' specifying user\'s unique ID in your application';
        } else {
            this._debug('user not found but this is OK for insecure mode - anonymous access will be used');
            this._config.user = '';
        }
    }

    if (!this._config.timestamp) {
        if (!this._config.insecure) {
            throw 'Missing required configuration parameter \'timestamp\'';
        } else {
            this._debug('token not found but this is OK for insecure mode');
        }
    }

    if (!this._config.token) {
        if (!this._config.insecure) {
            throw 'Missing required configuration parameter \'token\' specifying the sign of authorization request';
        } else {
            this._debug('timestamp not found but this is OK for insecure mode');
        }
    }

    this._config.url = stripSlash(this._config.url);

    if (endsWith(this._config.url, 'connection')) {
        this._debug('client will connect to SockJS endpoint');
        if (this._config.sockJS !== null) {
            this._debug('SockJS explicitly provided in options');
            this._sockJS = this._config.sockJS;
        } else {
            if (typeof SockJS === 'undefined') {
                throw 'include SockJS client library before Centrifuge javascript client library or provide SockJS object in options or use raw Websocket connection endpoint';
            }
            this._debug('use globally defined SockJS');
            this._sockJS = SockJS;
        }
    } else if (endsWith(this._config.url, 'connection/websocket')) {
        this._debug('client will connect to raw Websocket endpoint');
    } else {
        this._debug('client will detect connection endpoint itself');
        if (this._config.sockJS !== null) {
            this._debug('SockJS explicitly provided in options');
            this._sockJS = this._config.sockJS;
        } else {
            if (typeof SockJS === 'undefined') {
                this._debug('SockJS not found');
            } else {
                this._debug('use globally defined SockJS');
                this._sockJS = SockJS;
            }
        }
    }
};

centrifugeProto._setStatus = function (newStatus) {
    if (this._status !== newStatus) {
        this._debug('Status', this._status, '->', newStatus);
        this._status = newStatus;
    }
};

centrifugeProto._isDisconnected = function () {
    return this._status === 'disconnected';
};

centrifugeProto._isConnecting = function () {
    return this._status === 'connecting';
};

centrifugeProto._isConnected = function () {
    return this._status === 'connected';
};

centrifugeProto._nextMessageId = function () {
    return ++this._messageId;
};

centrifugeProto._resetRetry = function () {
    this._debug('reset retries count to 0');
    this._retries = 0;
};

centrifugeProto._getRetryInterval = function () {
    var interval = backoff(this._retries, this._config.retry, this._config.maxRetry);
    this._retries += 1;
    return interval;
};

centrifugeProto._clearConnectedState = function (reconnect) {
    this._clientID = null;

    // fire errbacks of registered calls.
    for (var uid in this._callbacks) {
        if (this._callbacks.hasOwnProperty(uid)) {
            var callbacks = this._callbacks[uid];
            var errback = callbacks.errback;
            if (!errback) {
                continue;
            }
            errback(this._createErrorObject('disconnected', 'retry'));
        }
    }
    this._callbacks = {};

    // fire unsubscribe events
    for (var channel in this._subs) {
        if (this._subs.hasOwnProperty(channel)) {
            var sub = this._subs[channel];
            if (reconnect) {
                if (sub._isSuccess()) {
                    sub._triggerUnsubscribe();
                }
                sub._setSubscribing();
            } else {
                sub._setUnsubscribed();
            }
        }
    }

    if (!this._config.resubscribe || !this._reconnect) {
        // completely clear connected state
        this._subs = {};
    }
};

centrifugeProto._send = function (messages) {
    if (messages.length === 0) {
        return;
    }
    if (messages.length === 1) {
        // small optimization to send single object to server to reduce allocations required
        // to parse array compared to parse single object client request.
        messages = messages[0];
    }
    this._debug('Send', messages);
    this._transport.send(JSON.stringify(messages));
};

centrifugeProto._setupTransport = function () {

    var self = this;

    this._isSockJS = false;

    // detect transport to use - SockJS or raw Websocket
    if (this._sockJS !== null) {
        var sockjsOptions = {
            transports: this._config.transports
        };
        if (this._config.server !== null) {
            sockjsOptions.server = this._config.server;
        }
        this._isSockJS = true;
        this._transport = new this._sockJS(this._sockjsEndpoint(), null, sockjsOptions);
    } else {
        if (!this._websocketSupported()) {
            this._debug('No Websocket support and no SockJS configured, can not connect');
            return;
        }
        this._transport = new WebSocket(this._rawWebsocketEndpoint());
    }

    this._transport.onopen = function () {
        self._transportClosed = false;

        if (self._isSockJS) {
            self._transportName = self._transport.transport;
            self._transport.onheartbeat = function () {
                self._restartPing();
            };
        } else {
            self._transportName = 'raw-websocket';
        }

        self._resetRetry();

        if (!isString(self._config.user)) {
            self._log('user expected to be string');
        }
        if (!isString(self._config.info)) {
            self._log('info expected to be string');
        }

        var msg = {
            method: 'connect',
            params: {
                user: self._config.user,
                info: self._config.info
            }
        };

        if (!self._config.insecure) {
            // in insecure client mode we don't need timestamp and token.
            msg.params.timestamp = self._config.timestamp;
            msg.params.token = self._config.token;
            if (!isString(self._config.timestamp)) {
                self._log('timestamp expected to be string');
            }
            if (!isString(self._config.token)) {
                self._log('token expected to be string');
            }
        }
        self._addMessage(msg);
        self._latencyStart = new Date();
    };

    this._transport.onerror = function (error) {
        self._debug('transport level error', error);
    };

    this._transport.onclose = function (closeEvent) {
        self._transportClosed = true;
        var reason = 'connection closed';
        var needReconnect = true;
        if (closeEvent && 'reason' in closeEvent && closeEvent.reason) {
            try {
                var advice = JSON.parse(closeEvent.reason);
                self._debug('reason is an advice object', advice);
                reason = advice.reason;
                needReconnect = advice.reconnect;
            } catch (e) {
                reason = closeEvent.reason;
                self._debug('reason is a plain string', reason);
                needReconnect = reason !== 'disconnect';
            }
        }

        // onTransportClose callback should be executed every time transport was closed.
        // This can be helpful to catch failed connection events (because our disconnect
        // event only called once and every future attempts to connect do not fire disconnect
        // event again).
        if (self._config.onTransportClose !== null) {
            self._config.onTransportClose({
                event: closeEvent,
                reason: reason,
                reconnect: needReconnect
            });
        }

        self._disconnect(reason, needReconnect);

        if (self._reconnect === true) {
            self._reconnecting = true;
            var interval = self._getRetryInterval();
            self._debug('reconnect after ' + interval + ' milliseconds');
            setTimeout(function () {
                if (self._reconnect === true) {
                    self._connect.call(self);
                }
            }, interval);
        }

    };

    this._transport.onmessage = function (event) {
        var data;
        data = JSON.parse(event.data);
        self._debug('Received', data);
        self._receive(data);
        self._restartPing();
    };
};

centrifugeProto._connect = function (callback) {

    if (this.isConnected()) {
        this._debug('connect called when already connected');
        return;
    }

    if (this._status === 'connecting') {
        return;
    }

    this._debug('start connecting');

    this._setStatus('connecting');

    this._clientID = null;
    this._reconnect = true;

    if (callback) {
        this.on('connect', callback);
    }

    this._setupTransport();
};

centrifugeProto._disconnect = function (reason, shouldReconnect) {

    if (this.isDisconnected()) {
        return;
    }

    this._debug('disconnected:', reason, shouldReconnect);

    var reconnect = shouldReconnect || false;
    if (reconnect === false) {
        this._reconnect = false;
    }

    this._clearConnectedState(reconnect);

    if (!this.isDisconnected()) {
        this._setStatus('disconnected');
        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }
        if (this._reconnecting === false) {
            this.trigger('disconnect', [{
                reason: reason,
                reconnect: reconnect
            }]);
        }
    }

    if (!this._transportClosed) {
        this._transport.close();
    }
};

centrifugeProto._refreshFailed = function () {
    this._numRefreshFailed = 0;
    if (!this.isDisconnected()) {
        this._disconnect('refresh failed', false);
    }
    if (this._config.refreshFailed !== null) {
        this._config.refreshFailed();
    }
};

centrifugeProto._refresh = function () {
    // ask web app for connection parameters - user ID,
    // timestamp, info and token
    var self = this;
    this._debug('refresh credentials');

    if (self._config.refreshAttempts === 0) {
        this._debug('refresh attempts set to 0, do not send refresh request at all');
        self._refreshFailed();
        return;
    }

    if (self._refreshTimeout !== null) {
        clearTimeout(self._refreshTimeout);
    }

    var cb = function (error, data) {
        if (error === true) {
            // We don't perform any connection status related actions here as we are
            // relying on Centrifugo that must close connection eventually.
            self._debug('error getting connection credentials from refresh endpoint', data);
            self._numRefreshFailed++;
            if (self._refreshTimeout) {
                clearTimeout(self._refreshTimeout);
            }
            if (self._config.refreshAttempts !== null && self._numRefreshFailed >= self._config.refreshAttempts) {
                self._refreshFailed();
                return;
            }
            self._refreshTimeout = setTimeout(function () {
                self._refresh.call(self);
            }, self._config.refreshInterval + Math.round(Math.random() * 1000));
            return;
        }
        self._numRefreshFailed = 0;
        self._config.user = data.user;
        self._config.timestamp = data.timestamp;
        if ('info' in data) {
            self._config.info = data.info;
        }
        self._config.token = data.token;
        if (self.isDisconnected()) {
            self._debug('credentials refreshed, connect from scratch');
            self._connect();
        } else {
            self._debug('send refreshed credentials');
            self._addMessage({
                method: 'refresh',
                params: {
                    user: self._config.user,
                    timestamp: self._config.timestamp,
                    info: self._config.info,
                    token: self._config.token
                }
            });
        }
    };

    if (this._config.onRefresh !== null) {
        var context = {};
        this._config.onRefresh(context, cb);
    } else {
        var transport = this._config.refreshTransport.toLowerCase();
        if (transport === 'ajax') {
            this._ajax(this._config.refreshEndpoint, this._config.refreshParams, this._config.refreshHeaders, this._config.refreshData, cb);
        } else if (transport === 'jsonp') {
            this._jsonp(this._config.refreshEndpoint, this._config.refreshParams, this._config.refreshHeaders, this._config.refreshData, cb);
        } else {
            throw 'Unknown refresh transport ' + transport;
        }
    }
};

centrifugeProto._subscribe = function (sub, isResubscribe) {

    var channel = sub.channel;

    if (!(channel in this._subs)) {
        this._subs[channel] = sub;
    }

    if (!this.isConnected()) {
        // subscribe will be called later
        sub._setNew();
        return;
    }

    sub._setSubscribing(isResubscribe);

    var msg = {
        method: 'subscribe',
        params: {
            channel: channel
        }
    };

    // If channel name does not start with privateChannelPrefix - then we
    // can just send subscription message to Centrifuge. If channel name
    // starts with privateChannelPrefix - then this is a private channel
    // and we should ask web application backend for permission first.
    if (startsWith(channel, this._config.privateChannelPrefix)) {
        // private channel
        if (this._isAuthBatching) {
            this._authChannels[channel] = true;
        } else {
            this.startAuthBatching();
            this._subscribe(sub);
            this.stopAuthBatching();
        }
    } else {
        var recover = this._recover(channel);
        if (recover === true) {
            msg.params.recover = true;
            msg.params.last = this._getLastID(channel);
        }
        this._addMessage(msg);
    }
};

centrifugeProto._unsubscribe = function (sub) {
    if (this.isConnected()) {
        // No need to unsubscribe in disconnected state - i.e. client already unsubscribed.
        this._addMessage({
            method: 'unsubscribe',
            params: {
                channel: sub.channel
            }
        });
    }
};

centrifugeProto._getSub = function (channel) {
    var sub = this._subs[channel];
    if (!sub) {
        return null;
    }
    return sub;
};

centrifugeProto._connectResponse = function (message) {
    if (this.isConnected()) {
        return;
    }

    if (!errorExists(message)) {

        if (this._latencyStart !== null) {
            this._latency = (new Date()).getTime() - this._latencyStart.getTime();
            this._latencyStart = null;
        }

        if (!message.body) {
            return;
        }
        if (message.body.expires) {
            var isExpired = message.body.expired;
            if (isExpired) {
                this._reconnecting = true;
                this._disconnect('expired', true);
                this._refresh();
                return;
            }
        }
        this._clientID = message.body.client;
        this._setStatus('connected');
        var wasReconnecting = this._reconnecting;
        this._reconnecting = false;

        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }

        var self = this;

        if (message.body.expires) {
            this._refreshTimeout = setTimeout(function () {
                self._refresh.call(self);
            }, message.body.ttl * 1000);
        }

        if (this._config.resubscribe) {
            this.startBatching();
            this.startAuthBatching();
            for (var channel in this._subs) {
                if (this._subs.hasOwnProperty(channel)) {
                    var sub = this._subs[channel];
                    if (sub._shouldResubscribe()) {
                        this._subscribe(sub, wasReconnecting);
                    }
                }
            }
            this.stopAuthBatching();
            this.stopBatching(true);
        }

        this._restartPing();
        this.trigger('connect', [{
            client: message.body.client,
            transport: this._transportName,
            latency: this._latency
        }]);
    } else {
        this.trigger('error', [{
            message: message
        }]);
    }
};

centrifugeProto._stopPing = function () {
    if (this._pongTimeout !== null) {
        clearTimeout(this._pongTimeout);
        this._pongTimeout = null;
    }
    if (this._pingInterval !== null) {
        clearInterval(this._pingInterval);
        this._pingInterval = null;
    }
};

centrifugeProto._startPing = function () {
    if (this._config.ping !== true || this._config.pingInterval <= 0) {
        return;
    }
    if (!this.isConnected()) {
        return;
    }

    var self = this;

    this._pingInterval = setInterval(function () {
        if (!self.isConnected()) {
            self._stopPing();
            return;
        }
        self.ping();
        self._pongTimeout = setTimeout(function () {
            self._disconnect('no ping', true);
        }, self._config.pongWaitTimeout);
    }, this._config.pingInterval);
};

centrifugeProto._restartPing = function () {
    this._stopPing();
    this._startPing();
};

centrifugeProto._disconnectResponse = function (message) {
    if (!errorExists(message)) {
        var shouldReconnect = false;
        if ('reconnect' in message.body) {
            shouldReconnect = message.body.reconnect;
        }
        var reason = '';
        if ('reason' in message.body) {
            reason = message.body.reason;
        }
        this._disconnect(reason, shouldReconnect);
    } else {
        this.trigger('error', [{
            message: message
        }]);
    }
};

centrifugeProto._subscribeResponse = function (message) {
    var body = message.body;
    if (body === null) {
        return;
    }
    var channel = body.channel;

    var sub = this._getSub(channel);
    if (!sub) {
        return;
    }

    if (!sub._isSubscribing()) {
        return;
    }

    if (!errorExists(message)) {
        var messages = body.messages;
        if (messages && messages.length > 0) {
            // handle missed messages
            messages = messages.reverse();
            for (var i in messages) {
                if (messages.hasOwnProperty(i)) {
                    this._messageResponse({
                        body: messages[i]
                    });
                }
            }
        } else {
            if ('last' in body) {
                // no missed messages found so set last message id from body.
                this._lastMessageID[channel] = body.last;
            }
        }
        var recovered = false;
        if ('recovered' in body) {
            recovered = body.recovered;
        }
        sub._setSubscribeSuccess(recovered);
    } else {
        this.trigger('error', [{
            message: message
        }]);
        sub._setSubscribeError(this._errorObjectFromMessage(message));
    }
};

centrifugeProto._unsubscribeResponse = function (message) {
    var uid = message.uid;
    var body = message.body;
    var channel = body.channel;

    var sub = this._getSub(channel);
    if (!sub) {
        return;
    }

    if (!errorExists(message)) {
        if (!uid) {
            // unsubscribe command from server
            sub._setUnsubscribed(true);
        }
        // ignore client initiated successful unsubscribe responses as we
        // already unsubscribed on client level.
    } else {
        this.trigger('error', [{
            message: message
        }]);
    }
};

centrifugeProto._publishResponse = function (message) {
    var uid = message.uid;
    var body = message.body;
    if (!(uid in this._callbacks)) {
        return;
    }
    var callbacks = this._callbacks[uid];
    delete this._callbacks[uid];
    if (!errorExists(message)) {
        var callback = callbacks.callback;
        if (!callback) {
            return;
        }
        callback(body);
    } else {
        var errback = callbacks.errback;
        if (!errback) {
            return;
        }
        errback(this._errorObjectFromMessage(message));
        this.trigger('error', [{
            message: message
        }]);
    }
};

centrifugeProto._presenceResponse = function (message) {
    var uid = message.uid;
    var body = message.body;
    if (!(uid in this._callbacks)) {
        return;
    }
    var callbacks = this._callbacks[uid];
    delete this._callbacks[uid];
    if (!errorExists(message)) {
        var callback = callbacks.callback;
        if (!callback) {
            return;
        }
        callback(body);
    } else {
        var errback = callbacks.errback;
        if (!errback) {
            return;
        }
        errback(this._errorObjectFromMessage(message));
        this.trigger('error', [{
            message: message
        }]);
    }
};

centrifugeProto._historyResponse = function (message) {
    var uid = message.uid;
    var body = message.body;
    if (!(uid in this._callbacks)) {
        return;
    }
    var callbacks = this._callbacks[uid];
    delete this._callbacks[uid];
    if (!errorExists(message)) {
        var callback = callbacks.callback;
        if (!callback) {
            return;
        }
        callback(body);
    } else {
        var errback = callbacks.errback;
        if (!errback) {
            return;
        }
        errback(this._errorObjectFromMessage(message));
        this.trigger('error', [{
            message: message
        }]);
    }
};

centrifugeProto._joinResponse = function (message) {
    var body = message.body;
    var channel = body.channel;

    var sub = this._getSub(channel);
    if (!sub) {
        return;
    }
    sub.trigger('join', [body]);
};

centrifugeProto._leaveResponse = function (message) {
    var body = message.body;
    var channel = body.channel;

    var sub = this._getSub(channel);
    if (!sub) {
        return;
    }
    sub.trigger('leave', [body]);
};

centrifugeProto._messageResponse = function (message) {
    var body = message.body;
    var channel = body.channel;

    // keep last uid received from channel.
    this._lastMessageID[channel] = body.uid;

    var sub = this._getSub(channel);
    if (!sub) {
        return;
    }
    sub.trigger('message', [body]);
};

centrifugeProto._refreshResponse = function (message) {
    if (this._refreshTimeout) {
        clearTimeout(this._refreshTimeout);
    }
    if (!errorExists(message)) {
        if (message.body.expires) {
            var self = this;
            var isExpired = message.body.expired;
            if (isExpired) {
                self._refreshTimeout = setTimeout(function () {
                    self._refresh.call(self);
                }, self._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            this._clientID = message.body.client;
            self._refreshTimeout = setTimeout(function () {
                self._refresh.call(self);
            }, message.body.ttl * 1000);
        }
    } else {
        this.trigger('error', [{
            message: message
        }]);
    }
};

centrifugeProto._dispatchMessage = function (message) {
    if (message === undefined || message === null) {
        this._debug('dispatch: got undefined or null message');
        return;
    }

    var method = message.method;

    if (!method) {
        this._debug('dispatch: got message with empty method');
        return;
    }

    switch (method) {
        case 'connect':
            this._connectResponse(message);
            break;
        case 'disconnect':
            this._disconnectResponse(message);
            break;
        case 'subscribe':
            this._subscribeResponse(message);
            break;
        case 'unsubscribe':
            this._unsubscribeResponse(message);
            break;
        case 'publish':
            this._publishResponse(message);
            break;
        case 'presence':
            this._presenceResponse(message);
            break;
        case 'history':
            this._historyResponse(message);
            break;
        case 'join':
            this._joinResponse(message);
            break;
        case 'leave':
            this._leaveResponse(message);
            break;
        case 'ping':
            break;
        case 'refresh':
            this._refreshResponse(message);
            break;
        case 'message':
            this._messageResponse(message);
            break;
        default:
            this._debug('dispatch: got message with unknown method' + method);
            break;
    }
};

centrifugeProto._receive = function (data) {
    if (isArray(data)) {
        // array of responses received
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                this._dispatchMessage(data[i]);
            }
        }
    } else if (Object.prototype.toString.call(data) === Object.prototype.toString.call({})) {
        // one response received
        this._dispatchMessage(data);
    }
};

centrifugeProto._flush = function () {
    var messages = this._messages.slice(0);
    this._messages = [];
    this._send(messages);
};

centrifugeProto._ping = function () {
    this._addMessage({
        method: 'ping'
    });
};

centrifugeProto._recover = function (channel) {
    return channel in this._lastMessageID;
};

centrifugeProto._getLastID = function (channel) {
    var lastUID = this._lastMessageID[channel];
    if (lastUID) {
        this._debug('last uid found and sent for channel', channel);
        return lastUID;
    } else {
        this._debug('no last uid found for channel', channel);
        return '';
    }
};

centrifugeProto._createErrorObject = function (err, advice) {
    var errObject = {
        error: err
    };
    if (advice) {
        errObject.advice = advice;
    }
    return errObject;
};

centrifugeProto._errorObjectFromMessage = function (message) {
    return this._createErrorObject(message.error, message.advice);
};

centrifugeProto._registerCall = function (uid, callback, errback) {
    var self = this;
    this._callbacks[uid] = {
        callback: callback,
        errback: errback
    };
    setTimeout(function () {
        delete self._callbacks[uid];
        if (isFunction(errback)) {
            errback(self._createErrorObject('timeout', 'retry'));
        }
    }, this._config.timeout);
};

centrifugeProto._addMessage = function (message) {
    var uid = '' + this._nextMessageId();
    message.uid = uid;
    if (this._isBatching === true) {
        this._messages.push(message);
    } else {
        this._send([message]);
    }
    return uid;
};

centrifugeProto.getClientId = function () {
    return this._clientID;
};

centrifugeProto.isConnected = centrifugeProto._isConnected;

centrifugeProto.isDisconnected = centrifugeProto._isDisconnected;

centrifugeProto.configure = function (configuration) {
    this._configure.call(this, configuration);
};

centrifugeProto.connect = centrifugeProto._connect;

centrifugeProto.disconnect = function () {
    this._disconnect('client', false);
};

centrifugeProto.ping = centrifugeProto._ping;

centrifugeProto.startBatching = function () {
    // start collecting messages without sending them to Centrifuge until flush
    // method called
    this._isBatching = true;
};

centrifugeProto.stopBatching = function (flush) {
    // stop collecting messages
    flush = flush || false;
    this._isBatching = false;
    if (flush === true) {
        this.flush();
    }
};

centrifugeProto.flush = function () {
    // send batched messages to Centrifuge
    this._flush();
};

centrifugeProto.startAuthBatching = function () {
    // start collecting private channels to create bulk authentication
    // request to authEndpoint when stopAuthBatching will be called
    this._isAuthBatching = true;
};

centrifugeProto.stopAuthBatching = function () {
    var i,
        channel;

    // create request to authEndpoint with collected private channels
    // to ask if this client can subscribe on each channel
    this._isAuthBatching = false;
    var authChannels = this._authChannels;
    this._authChannels = {};
    var channels = [];

    for (channel in authChannels) {
        if (authChannels.hasOwnProperty(channel)) {
            var sub = this._getSub(channel);
            if (!sub) {
                continue;
            }
            channels.push(channel);
        }
    }

    if (channels.length === 0) {
        return;
    }

    var data = {
        client: this.getClientId(),
        channels: channels
    };

    var self = this;

    var cb = function (error, data) {
        if (error === true) {
            self._debug('authorization request failed');
            for (i in channels) {
                if (channels.hasOwnProperty(i)) {
                    channel = channels[i];
                    self._subscribeResponse({
                        error: 'authorization request failed',
                        advice: 'fix',
                        body: {
                            channel: channel
                        }
                    });
                }
            }
            return;
        }

        var channelsData;
        if (data.channels && isArray(data.channels)) {
            // data is object with top level key channels containing array of channel data.
            // TODO: make this default format in v2. 
            channelsData = {};
            for (i in data.channels) {
                var channelData = data.channels[i];
                if (!channelData.channel) {
                    continue;
                }
                channelsData[channelData.channel] = channelData;
            }
        } else {
            channelsData = data; // data is map of channels.
        }

        // try to send all subscriptions in one request.
        var batch = false;
        if (!self._isBatching) {
            self.startBatching();
            batch = true;
        }

        for (i in channels) {
            if (channels.hasOwnProperty(i)) {
                channel = channels[i];
                var channelResponse = channelsData[channel];
                if (!channelResponse) {
                    // subscription:error
                    self._subscribeResponse({
                        error: 'channel not found in authorization response',
                        advice: 'fix',
                        body: {
                            channel: channel
                        }
                    });
                    continue;
                }
                if (!channelResponse.status || channelResponse.status === 200) {
                    var msg = {
                        method: 'subscribe',
                        params: {
                            channel: channel,
                            client: self.getClientId(),
                            info: channelResponse.info,
                            sign: channelResponse.sign
                        }
                    };
                    var recover = self._recover(channel);
                    if (recover === true) {
                        msg.params.recover = true;
                        msg.params.last = self._getLastID(channel);
                    }
                    self._addMessage(msg);
                } else {
                    self._subscribeResponse({
                        error: channelResponse.status,
                        body: {
                            channel: channel
                        }
                    });
                }
            }
        }

        if (batch) {
            self.stopBatching(true);
        }

    };

    if (this._config.onPrivateChannelAuth !== null) {
        this._config.onPrivateChannelAuth({
            data: data
        }, cb);
    } else {
        var transport = this._config.authTransport.toLowerCase();
        if (transport === 'ajax') {
            this._ajax(this._config.authEndpoint, this._config.authParams, this._config.authHeaders, data, cb);
        } else if (transport === 'jsonp') {
            this._jsonp(this._config.authEndpoint, this._config.authParams, this._config.authHeaders, data, cb);
        } else {
            throw 'Unknown private channel auth transport ' + transport;
        }
    }
};

centrifugeProto.subscribe = function (channel, events) {
    if (arguments.length < 1) {
        throw 'Illegal arguments number: required 1, got ' + arguments.length;
    }
    if (!isString(channel)) {
        throw 'Illegal argument type: channel must be a string';
    }
    if (!this._config.resubscribe && !this.isConnected()) {
        throw 'Can not only subscribe in connected state when resubscribe option is off';
    }

    var currentSub = this._getSub(channel);

    if (currentSub !== null) {
        currentSub._setEvents(events);
        if (currentSub._isUnsubscribed()) {
            currentSub.subscribe();
        }
        return currentSub;
    } else {
        var sub = new Sub(this, channel, events);
        this._subs[channel] = sub;
        sub.subscribe();
        return sub;
    }
};

var _STATE_NEW = 0;
var _STATE_SUBSCRIBING = 1;
var _STATE_SUCCESS = 2;
var _STATE_ERROR = 3;
var _STATE_UNSUBSCRIBED = 4;

function Sub(centrifuge, channel, events) {
    this.channel = channel;
    this._centrifuge = centrifuge;
    this._setEvents(events);
    this._status = _STATE_NEW;
    this._error = null;
    this._isResubscribe = false;
    this._ready = false;
    this._promise = null;
    this._noResubscribe = false;
    this._initializePromise();
}

extend(Sub, EventEmitter);

var subProto = Sub.prototype;

subProto._initializePromise = function () {
    this._ready = false;
    var self = this;
    this._promise = new Promise(function (resolve, reject) {
        self._resolve = function (value) {
            self._ready = true;
            resolve(value);
        };
        self._reject = function (err) {
            self._ready = true;
            reject(err);
        };
    });
};

subProto._setEvents = function (events) {
    if (!events) {
        return;
    }
    if (isFunction(events)) {
        this.on('message', events);
    } else if (Object.prototype.toString.call(events) === Object.prototype.toString.call({})) {
        var knownEvents = ['message', 'join', 'leave', 'unsubscribe', 'subscribe', 'error'];
        for (var i = 0, l = knownEvents.length; i < l; i++) {
            var ev = knownEvents[i];
            if (ev in events) {
                this.on(ev, events[ev]);
            }
        }
    }
};

subProto._isNew = function () {
    return this._status === _STATE_NEW;
};

subProto._isUnsubscribed = function () {
    return this._status === _STATE_UNSUBSCRIBED;
};

subProto._isSubscribing = function () {
    return this._status === _STATE_SUBSCRIBING;
};

subProto._isReady = function () {
    return this._status === _STATE_SUCCESS || this._status === _STATE_ERROR;
};

subProto._isSuccess = function () {
    return this._status === _STATE_SUCCESS;
};

subProto._isError = function () {
    return this._status === _STATE_ERROR;
};

subProto._setNew = function () {
    this._status = _STATE_NEW;
};

subProto._setSubscribing = function (isResubscribe) {
    this._isResubscribe = isResubscribe || false;
    if (this._ready === true) {
        // new promise for this subscription
        this._initializePromise();
    }
    this._status = _STATE_SUBSCRIBING;
};

subProto._setSubscribeSuccess = function (recovered) {
    if (this._status === _STATE_SUCCESS) {
        return;
    }
    this._status = _STATE_SUCCESS;
    var successContext = this._getSubscribeSuccessContext(recovered);
    this.trigger('subscribe', [successContext]);
    this._resolve(successContext);
};

subProto._setSubscribeError = function (err) {
    if (this._status === _STATE_ERROR) {
        return;
    }
    this._status = _STATE_ERROR;
    this._error = err;
    var errContext = this._getSubscribeErrorContext();
    this.trigger('error', [errContext]);
    this._reject(errContext);
};

subProto._triggerUnsubscribe = function () {
    this.trigger('unsubscribe', [{
        channel: this.channel
    }]);
};

subProto._setUnsubscribed = function (noResubscribe) {
    if (this._status === _STATE_UNSUBSCRIBED) {
        return;
    }
    this._status = _STATE_UNSUBSCRIBED;
    if (noResubscribe === true) {
        this._noResubscribe = true;
        delete this._centrifuge._lastMessageID[this.channel];
    }
    this._triggerUnsubscribe();
};

subProto._shouldResubscribe = function () {
    return !this._noResubscribe;
};

subProto._getSubscribeSuccessContext = function (recovered) {
    return {
        channel: this.channel,
        isResubscribe: this._isResubscribe,
        recovered: recovered
    };
};

subProto._getSubscribeErrorContext = function () {
    var subscribeErrorContext = this._error;
    subscribeErrorContext.channel = this.channel;
    subscribeErrorContext.isResubscribe = this._isResubscribe;
    return subscribeErrorContext;
};

subProto.ready = function (callback, errback) {
    if (this._ready) {
        if (this._isSuccess()) {
            callback(this._getSubscribeSuccessContext());
        } else {
            errback(this._getSubscribeErrorContext());
        }
    }
};

subProto.subscribe = function () {
    if (this._status === _STATE_SUCCESS) {
        return;
    }
    this._noResubscribe = false;
    this._centrifuge._subscribe(this);
    return this;
};

subProto.unsubscribe = function () {
    this._setUnsubscribed(true);
    this._centrifuge._unsubscribe(this);
};

subProto.publish = function (data) {
    var self = this;
    return new Promise(function (resolve, reject) {
        if (self._isUnsubscribed()) {
            reject(self._centrifuge._createErrorObject('subscription unsubscribed', 'fix'));
            return;
        }
        self._promise.then(function () {
            if (!self._centrifuge.isConnected()) {
                reject(self._centrifuge._createErrorObject('disconnected', 'retry'));
                return;
            }
            var uid = self._centrifuge._addMessage({
                method: 'publish',
                params: {
                    channel: self.channel,
                    data: data
                }
            });
            self._centrifuge._registerCall(uid, resolve, reject);
        }, function (err) {
            reject(err);
        });
    });
};

subProto.presence = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
        if (self._isUnsubscribed()) {
            reject(self._centrifuge._createErrorObject('subscription unsubscribed', 'fix'));
            return;
        }
        self._promise.then(function () {
            if (!self._centrifuge.isConnected()) {
                reject(self._centrifuge._createErrorObject('disconnected', 'retry'));
                return;
            }
            var uid = self._centrifuge._addMessage({
                method: 'presence',
                params: {
                    channel: self.channel
                }
            });
            self._centrifuge._registerCall(uid, resolve, reject);
        }, function (err) {
            reject(err);
        });
    });
};

subProto.history = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
        if (self._isUnsubscribed()) {
            reject(self._centrifuge._createErrorObject('subscription unsubscribed', 'fix'));
            return;
        }
        self._promise.then(function () {
            if (!self._centrifuge.isConnected()) {
                reject(self._centrifuge._createErrorObject('disconnected', 'retry'));
                return;
            }
            var uid = self._centrifuge._addMessage({
                method: 'history',
                params: {
                    channel: self.channel
                }
            });
            self._centrifuge._registerCall(uid, resolve, reject);
        }, function (err) {
            reject(err);
        });
    });
};

module.exports = Centrifuge;

},{"es6-promise":"node_modules/es6-promise/dist/es6-promise.js","wolfy87-eventemitter":"node_modules/wolfy87-eventemitter/EventEmitter.js"}],"node_modules/jssha/src/sha.js":[function(require,module,exports) {
var define;
/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2017
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
'use strict';(function(Y){function C(c,a,b){var e=0,h=[],n=0,g,l,d,f,m,q,u,r,I=!1,v=[],w=[],t,y=!1,z=!1,x=-1;b=b||{};g=b.encoding||"UTF8";t=b.numRounds||1;if(t!==parseInt(t,10)||1>t)throw Error("numRounds must a integer >= 1");if("SHA-1"===c)m=512,q=K,u=Z,f=160,r=function(a){return a.slice()};else if(0===c.lastIndexOf("SHA-",0))if(q=function(a,b){return L(a,b,c)},u=function(a,b,h,e){var k,f;if("SHA-224"===c||"SHA-256"===c)k=(b+65>>>9<<4)+15,f=16;else if("SHA-384"===c||"SHA-512"===c)k=(b+129>>>10<<
5)+31,f=32;else throw Error("Unexpected error in SHA-2 implementation");for(;a.length<=k;)a.push(0);a[b>>>5]|=128<<24-b%32;b=b+h;a[k]=b&4294967295;a[k-1]=b/4294967296|0;h=a.length;for(b=0;b<h;b+=f)e=L(a.slice(b,b+f),e,c);if("SHA-224"===c)a=[e[0],e[1],e[2],e[3],e[4],e[5],e[6]];else if("SHA-256"===c)a=e;else if("SHA-384"===c)a=[e[0].a,e[0].b,e[1].a,e[1].b,e[2].a,e[2].b,e[3].a,e[3].b,e[4].a,e[4].b,e[5].a,e[5].b];else if("SHA-512"===c)a=[e[0].a,e[0].b,e[1].a,e[1].b,e[2].a,e[2].b,e[3].a,e[3].b,e[4].a,
e[4].b,e[5].a,e[5].b,e[6].a,e[6].b,e[7].a,e[7].b];else throw Error("Unexpected error in SHA-2 implementation");return a},r=function(a){return a.slice()},"SHA-224"===c)m=512,f=224;else if("SHA-256"===c)m=512,f=256;else if("SHA-384"===c)m=1024,f=384;else if("SHA-512"===c)m=1024,f=512;else throw Error("Chosen SHA variant is not supported");else if(0===c.lastIndexOf("SHA3-",0)||0===c.lastIndexOf("SHAKE",0)){var F=6;q=D;r=function(a){var c=[],e;for(e=0;5>e;e+=1)c[e]=a[e].slice();return c};x=1;if("SHA3-224"===
c)m=1152,f=224;else if("SHA3-256"===c)m=1088,f=256;else if("SHA3-384"===c)m=832,f=384;else if("SHA3-512"===c)m=576,f=512;else if("SHAKE128"===c)m=1344,f=-1,F=31,z=!0;else if("SHAKE256"===c)m=1088,f=-1,F=31,z=!0;else throw Error("Chosen SHA variant is not supported");u=function(a,c,e,b,h){e=m;var k=F,f,g=[],n=e>>>5,l=0,d=c>>>5;for(f=0;f<d&&c>=e;f+=n)b=D(a.slice(f,f+n),b),c-=e;a=a.slice(f);for(c%=e;a.length<n;)a.push(0);f=c>>>3;a[f>>2]^=k<<f%4*8;a[n-1]^=2147483648;for(b=D(a,b);32*g.length<h;){a=b[l%
5][l/5|0];g.push(a.b);if(32*g.length>=h)break;g.push(a.a);l+=1;0===64*l%e&&D(null,b)}return g}}else throw Error("Chosen SHA variant is not supported");d=M(a,g,x);l=A(c);this.setHMACKey=function(a,b,h){var k;if(!0===I)throw Error("HMAC key already set");if(!0===y)throw Error("Cannot set HMAC key after calling update");if(!0===z)throw Error("SHAKE is not supported for HMAC");g=(h||{}).encoding||"UTF8";b=M(b,g,x)(a);a=b.binLen;b=b.value;k=m>>>3;h=k/4-1;if(k<a/8){for(b=u(b,a,0,A(c),f);b.length<=h;)b.push(0);
b[h]&=4294967040}else if(k>a/8){for(;b.length<=h;)b.push(0);b[h]&=4294967040}for(a=0;a<=h;a+=1)v[a]=b[a]^909522486,w[a]=b[a]^1549556828;l=q(v,l);e=m;I=!0};this.update=function(a){var c,b,k,f=0,g=m>>>5;c=d(a,h,n);a=c.binLen;b=c.value;c=a>>>5;for(k=0;k<c;k+=g)f+m<=a&&(l=q(b.slice(k,k+g),l),f+=m);e+=f;h=b.slice(f>>>5);n=a%m;y=!0};this.getHash=function(a,b){var k,g,d,m;if(!0===I)throw Error("Cannot call getHash after setting HMAC key");d=N(b);if(!0===z){if(-1===d.shakeLen)throw Error("shakeLen must be specified in options");
f=d.shakeLen}switch(a){case "HEX":k=function(a){return O(a,f,x,d)};break;case "B64":k=function(a){return P(a,f,x,d)};break;case "BYTES":k=function(a){return Q(a,f,x)};break;case "ARRAYBUFFER":try{g=new ArrayBuffer(0)}catch(p){throw Error("ARRAYBUFFER not supported by this environment");}k=function(a){return R(a,f,x)};break;default:throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");}m=u(h.slice(),n,e,r(l),f);for(g=1;g<t;g+=1)!0===z&&0!==f%32&&(m[m.length-1]&=16777215>>>24-f%32),m=u(m,f,
0,A(c),f);return k(m)};this.getHMAC=function(a,b){var k,g,d,p;if(!1===I)throw Error("Cannot call getHMAC without first setting HMAC key");d=N(b);switch(a){case "HEX":k=function(a){return O(a,f,x,d)};break;case "B64":k=function(a){return P(a,f,x,d)};break;case "BYTES":k=function(a){return Q(a,f,x)};break;case "ARRAYBUFFER":try{k=new ArrayBuffer(0)}catch(v){throw Error("ARRAYBUFFER not supported by this environment");}k=function(a){return R(a,f,x)};break;default:throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
}g=u(h.slice(),n,e,r(l),f);p=q(w,A(c));p=u(g,f,m,p,f);return k(p)}}function b(c,a){this.a=c;this.b=a}function O(c,a,b,e){var h="";a/=8;var n,g,d;d=-1===b?3:0;for(n=0;n<a;n+=1)g=c[n>>>2]>>>8*(d+n%4*b),h+="0123456789abcdef".charAt(g>>>4&15)+"0123456789abcdef".charAt(g&15);return e.outputUpper?h.toUpperCase():h}function P(c,a,b,e){var h="",n=a/8,g,d,p,f;f=-1===b?3:0;for(g=0;g<n;g+=3)for(d=g+1<n?c[g+1>>>2]:0,p=g+2<n?c[g+2>>>2]:0,p=(c[g>>>2]>>>8*(f+g%4*b)&255)<<16|(d>>>8*(f+(g+1)%4*b)&255)<<8|p>>>8*(f+
(g+2)%4*b)&255,d=0;4>d;d+=1)8*g+6*d<=a?h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(p>>>6*(3-d)&63):h+=e.b64Pad;return h}function Q(c,a,b){var e="";a/=8;var h,d,g;g=-1===b?3:0;for(h=0;h<a;h+=1)d=c[h>>>2]>>>8*(g+h%4*b)&255,e+=String.fromCharCode(d);return e}function R(c,a,b){a/=8;var e,h=new ArrayBuffer(a),d,g;g=new Uint8Array(h);d=-1===b?3:0;for(e=0;e<a;e+=1)g[e]=c[e>>>2]>>>8*(d+e%4*b)&255;return h}function N(c){var a={outputUpper:!1,b64Pad:"=",shakeLen:-1};c=c||{};
a.outputUpper=c.outputUpper||!1;!0===c.hasOwnProperty("b64Pad")&&(a.b64Pad=c.b64Pad);if(!0===c.hasOwnProperty("shakeLen")){if(0!==c.shakeLen%8)throw Error("shakeLen must be a multiple of 8");a.shakeLen=c.shakeLen}if("boolean"!==typeof a.outputUpper)throw Error("Invalid outputUpper formatting option");if("string"!==typeof a.b64Pad)throw Error("Invalid b64Pad formatting option");return a}function M(c,a,b){switch(a){case "UTF8":case "UTF16BE":case "UTF16LE":break;default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
}switch(c){case "HEX":c=function(a,c,d){var g=a.length,l,p,f,m,q,u;if(0!==g%2)throw Error("String of HEX type must be in byte increments");c=c||[0];d=d||0;q=d>>>3;u=-1===b?3:0;for(l=0;l<g;l+=2){p=parseInt(a.substr(l,2),16);if(isNaN(p))throw Error("String of HEX type contains invalid characters");m=(l>>>1)+q;for(f=m>>>2;c.length<=f;)c.push(0);c[f]|=p<<8*(u+m%4*b)}return{value:c,binLen:4*g+d}};break;case "TEXT":c=function(c,h,d){var g,l,p=0,f,m,q,u,r,t;h=h||[0];d=d||0;q=d>>>3;if("UTF8"===a)for(t=-1===
b?3:0,f=0;f<c.length;f+=1)for(g=c.charCodeAt(f),l=[],128>g?l.push(g):2048>g?(l.push(192|g>>>6),l.push(128|g&63)):55296>g||57344<=g?l.push(224|g>>>12,128|g>>>6&63,128|g&63):(f+=1,g=65536+((g&1023)<<10|c.charCodeAt(f)&1023),l.push(240|g>>>18,128|g>>>12&63,128|g>>>6&63,128|g&63)),m=0;m<l.length;m+=1){r=p+q;for(u=r>>>2;h.length<=u;)h.push(0);h[u]|=l[m]<<8*(t+r%4*b);p+=1}else if("UTF16BE"===a||"UTF16LE"===a)for(t=-1===b?2:0,l="UTF16LE"===a&&1!==b||"UTF16LE"!==a&&1===b,f=0;f<c.length;f+=1){g=c.charCodeAt(f);
!0===l&&(m=g&255,g=m<<8|g>>>8);r=p+q;for(u=r>>>2;h.length<=u;)h.push(0);h[u]|=g<<8*(t+r%4*b);p+=2}return{value:h,binLen:8*p+d}};break;case "B64":c=function(a,c,d){var g=0,l,p,f,m,q,u,r,t;if(-1===a.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");p=a.indexOf("=");a=a.replace(/\=/g,"");if(-1!==p&&p<a.length)throw Error("Invalid '=' found in base-64 string");c=c||[0];d=d||0;u=d>>>3;t=-1===b?3:0;for(p=0;p<a.length;p+=4){q=a.substr(p,4);for(f=m=0;f<q.length;f+=1)l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(q[f]),
m|=l<<18-6*f;for(f=0;f<q.length-1;f+=1){r=g+u;for(l=r>>>2;c.length<=l;)c.push(0);c[l]|=(m>>>16-8*f&255)<<8*(t+r%4*b);g+=1}}return{value:c,binLen:8*g+d}};break;case "BYTES":c=function(a,c,d){var g,l,p,f,m,q;c=c||[0];d=d||0;p=d>>>3;q=-1===b?3:0;for(l=0;l<a.length;l+=1)g=a.charCodeAt(l),m=l+p,f=m>>>2,c.length<=f&&c.push(0),c[f]|=g<<8*(q+m%4*b);return{value:c,binLen:8*a.length+d}};break;case "ARRAYBUFFER":try{c=new ArrayBuffer(0)}catch(e){throw Error("ARRAYBUFFER not supported by this environment");}c=
function(a,c,d){var g,l,p,f,m,q;c=c||[0];d=d||0;l=d>>>3;m=-1===b?3:0;q=new Uint8Array(a);for(g=0;g<a.byteLength;g+=1)f=g+l,p=f>>>2,c.length<=p&&c.push(0),c[p]|=q[g]<<8*(m+f%4*b);return{value:c,binLen:8*a.byteLength+d}};break;default:throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");}return c}function y(c,a){return c<<a|c>>>32-a}function S(c,a){return 32<a?(a-=32,new b(c.b<<a|c.a>>>32-a,c.a<<a|c.b>>>32-a)):0!==a?new b(c.a<<a|c.b>>>32-a,c.b<<a|c.a>>>32-a):c}function w(c,a){return c>>>
a|c<<32-a}function t(c,a){var k=null,k=new b(c.a,c.b);return k=32>=a?new b(k.a>>>a|k.b<<32-a&4294967295,k.b>>>a|k.a<<32-a&4294967295):new b(k.b>>>a-32|k.a<<64-a&4294967295,k.a>>>a-32|k.b<<64-a&4294967295)}function T(c,a){var k=null;return k=32>=a?new b(c.a>>>a,c.b>>>a|c.a<<32-a&4294967295):new b(0,c.a>>>a-32)}function aa(c,a,b){return c&a^~c&b}function ba(c,a,k){return new b(c.a&a.a^~c.a&k.a,c.b&a.b^~c.b&k.b)}function U(c,a,b){return c&a^c&b^a&b}function ca(c,a,k){return new b(c.a&a.a^c.a&k.a^a.a&
k.a,c.b&a.b^c.b&k.b^a.b&k.b)}function da(c){return w(c,2)^w(c,13)^w(c,22)}function ea(c){var a=t(c,28),k=t(c,34);c=t(c,39);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function fa(c){return w(c,6)^w(c,11)^w(c,25)}function ga(c){var a=t(c,14),k=t(c,18);c=t(c,41);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function ha(c){return w(c,7)^w(c,18)^c>>>3}function ia(c){var a=t(c,1),k=t(c,8);c=T(c,7);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function ja(c){return w(c,17)^w(c,19)^c>>>10}function ka(c){var a=t(c,19),k=t(c,61);
c=T(c,6);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function G(c,a){var b=(c&65535)+(a&65535);return((c>>>16)+(a>>>16)+(b>>>16)&65535)<<16|b&65535}function la(c,a,b,e){var h=(c&65535)+(a&65535)+(b&65535)+(e&65535);return((c>>>16)+(a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)&65535)<<16|h&65535}function H(c,a,b,e,h){var d=(c&65535)+(a&65535)+(b&65535)+(e&65535)+(h&65535);return((c>>>16)+(a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)+(d>>>16)&65535)<<16|d&65535}function ma(c,a){var d,e,h;d=(c.b&65535)+(a.b&65535);e=(c.b>>>16)+
(a.b>>>16)+(d>>>16);h=(e&65535)<<16|d&65535;d=(c.a&65535)+(a.a&65535)+(e>>>16);e=(c.a>>>16)+(a.a>>>16)+(d>>>16);return new b((e&65535)<<16|d&65535,h)}function na(c,a,d,e){var h,n,g;h=(c.b&65535)+(a.b&65535)+(d.b&65535)+(e.b&65535);n=(c.b>>>16)+(a.b>>>16)+(d.b>>>16)+(e.b>>>16)+(h>>>16);g=(n&65535)<<16|h&65535;h=(c.a&65535)+(a.a&65535)+(d.a&65535)+(e.a&65535)+(n>>>16);n=(c.a>>>16)+(a.a>>>16)+(d.a>>>16)+(e.a>>>16)+(h>>>16);return new b((n&65535)<<16|h&65535,g)}function oa(c,a,d,e,h){var n,g,l;n=(c.b&
65535)+(a.b&65535)+(d.b&65535)+(e.b&65535)+(h.b&65535);g=(c.b>>>16)+(a.b>>>16)+(d.b>>>16)+(e.b>>>16)+(h.b>>>16)+(n>>>16);l=(g&65535)<<16|n&65535;n=(c.a&65535)+(a.a&65535)+(d.a&65535)+(e.a&65535)+(h.a&65535)+(g>>>16);g=(c.a>>>16)+(a.a>>>16)+(d.a>>>16)+(e.a>>>16)+(h.a>>>16)+(n>>>16);return new b((g&65535)<<16|n&65535,l)}function B(c,a){return new b(c.a^a.a,c.b^a.b)}function A(c){var a=[],d;if("SHA-1"===c)a=[1732584193,4023233417,2562383102,271733878,3285377520];else if(0===c.lastIndexOf("SHA-",0))switch(a=
[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],d=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],c){case "SHA-224":break;case "SHA-256":a=d;break;case "SHA-384":a=[new b(3418070365,a[0]),new b(1654270250,a[1]),new b(2438529370,a[2]),new b(355462360,a[3]),new b(1731405415,a[4]),new b(41048885895,a[5]),new b(3675008525,a[6]),new b(1203062813,a[7])];break;case "SHA-512":a=[new b(d[0],4089235720),new b(d[1],2227873595),
new b(d[2],4271175723),new b(d[3],1595750129),new b(d[4],2917565137),new b(d[5],725511199),new b(d[6],4215389547),new b(d[7],327033209)];break;default:throw Error("Unknown SHA variant");}else if(0===c.lastIndexOf("SHA3-",0)||0===c.lastIndexOf("SHAKE",0))for(c=0;5>c;c+=1)a[c]=[new b(0,0),new b(0,0),new b(0,0),new b(0,0),new b(0,0)];else throw Error("No SHA variants supported");return a}function K(c,a){var b=[],e,d,n,g,l,p,f;e=a[0];d=a[1];n=a[2];g=a[3];l=a[4];for(f=0;80>f;f+=1)b[f]=16>f?c[f]:y(b[f-
3]^b[f-8]^b[f-14]^b[f-16],1),p=20>f?H(y(e,5),d&n^~d&g,l,1518500249,b[f]):40>f?H(y(e,5),d^n^g,l,1859775393,b[f]):60>f?H(y(e,5),U(d,n,g),l,2400959708,b[f]):H(y(e,5),d^n^g,l,3395469782,b[f]),l=g,g=n,n=y(d,30),d=e,e=p;a[0]=G(e,a[0]);a[1]=G(d,a[1]);a[2]=G(n,a[2]);a[3]=G(g,a[3]);a[4]=G(l,a[4]);return a}function Z(c,a,b,e){var d;for(d=(a+65>>>9<<4)+15;c.length<=d;)c.push(0);c[a>>>5]|=128<<24-a%32;a+=b;c[d]=a&4294967295;c[d-1]=a/4294967296|0;a=c.length;for(d=0;d<a;d+=16)e=K(c.slice(d,d+16),e);return e}function L(c,
a,k){var e,h,n,g,l,p,f,m,q,u,r,t,v,w,y,A,z,x,F,B,C,D,E=[],J;if("SHA-224"===k||"SHA-256"===k)u=64,t=1,D=Number,v=G,w=la,y=H,A=ha,z=ja,x=da,F=fa,C=U,B=aa,J=d;else if("SHA-384"===k||"SHA-512"===k)u=80,t=2,D=b,v=ma,w=na,y=oa,A=ia,z=ka,x=ea,F=ga,C=ca,B=ba,J=V;else throw Error("Unexpected error in SHA-2 implementation");k=a[0];e=a[1];h=a[2];n=a[3];g=a[4];l=a[5];p=a[6];f=a[7];for(r=0;r<u;r+=1)16>r?(q=r*t,m=c.length<=q?0:c[q],q=c.length<=q+1?0:c[q+1],E[r]=new D(m,q)):E[r]=w(z(E[r-2]),E[r-7],A(E[r-15]),E[r-
16]),m=y(f,F(g),B(g,l,p),J[r],E[r]),q=v(x(k),C(k,e,h)),f=p,p=l,l=g,g=v(n,m),n=h,h=e,e=k,k=v(m,q);a[0]=v(k,a[0]);a[1]=v(e,a[1]);a[2]=v(h,a[2]);a[3]=v(n,a[3]);a[4]=v(g,a[4]);a[5]=v(l,a[5]);a[6]=v(p,a[6]);a[7]=v(f,a[7]);return a}function D(c,a){var d,e,h,n,g=[],l=[];if(null!==c)for(e=0;e<c.length;e+=2)a[(e>>>1)%5][(e>>>1)/5|0]=B(a[(e>>>1)%5][(e>>>1)/5|0],new b(c[e+1],c[e]));for(d=0;24>d;d+=1){n=A("SHA3-");for(e=0;5>e;e+=1){h=a[e][0];var p=a[e][1],f=a[e][2],m=a[e][3],q=a[e][4];g[e]=new b(h.a^p.a^f.a^
m.a^q.a,h.b^p.b^f.b^m.b^q.b)}for(e=0;5>e;e+=1)l[e]=B(g[(e+4)%5],S(g[(e+1)%5],1));for(e=0;5>e;e+=1)for(h=0;5>h;h+=1)a[e][h]=B(a[e][h],l[e]);for(e=0;5>e;e+=1)for(h=0;5>h;h+=1)n[h][(2*e+3*h)%5]=S(a[e][h],W[e][h]);for(e=0;5>e;e+=1)for(h=0;5>h;h+=1)a[e][h]=B(n[e][h],new b(~n[(e+1)%5][h].a&n[(e+2)%5][h].a,~n[(e+1)%5][h].b&n[(e+2)%5][h].b));a[0][0]=B(a[0][0],X[d])}return a}var d,V,W,X;d=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,
2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];V=[new b(d[0],3609767458),new b(d[1],602891725),new b(d[2],3964484399),new b(d[3],2173295548),new b(d[4],4081628472),new b(d[5],3053834265),new b(d[6],2937671579),new b(d[7],3664609560),new b(d[8],2734883394),new b(d[9],1164996542),new b(d[10],1323610764),new b(d[11],3590304994),new b(d[12],4068182383),new b(d[13],991336113),new b(d[14],633803317),new b(d[15],3479774868),new b(d[16],2666613458),new b(d[17],944711139),new b(d[18],2341262773),
new b(d[19],2007800933),new b(d[20],1495990901),new b(d[21],1856431235),new b(d[22],3175218132),new b(d[23],2198950837),new b(d[24],3999719339),new b(d[25],766784016),new b(d[26],2566594879),new b(d[27],3203337956),new b(d[28],1034457026),new b(d[29],2466948901),new b(d[30],3758326383),new b(d[31],168717936),new b(d[32],1188179964),new b(d[33],1546045734),new b(d[34],1522805485),new b(d[35],2643833823),new b(d[36],2343527390),new b(d[37],1014477480),new b(d[38],1206759142),new b(d[39],344077627),
new b(d[40],1290863460),new b(d[41],3158454273),new b(d[42],3505952657),new b(d[43],106217008),new b(d[44],3606008344),new b(d[45],1432725776),new b(d[46],1467031594),new b(d[47],851169720),new b(d[48],3100823752),new b(d[49],1363258195),new b(d[50],3750685593),new b(d[51],3785050280),new b(d[52],3318307427),new b(d[53],3812723403),new b(d[54],2003034995),new b(d[55],3602036899),new b(d[56],1575990012),new b(d[57],1125592928),new b(d[58],2716904306),new b(d[59],442776044),new b(d[60],593698344),new b(d[61],
3733110249),new b(d[62],2999351573),new b(d[63],3815920427),new b(3391569614,3928383900),new b(3515267271,566280711),new b(3940187606,3454069534),new b(4118630271,4000239992),new b(116418474,1914138554),new b(174292421,2731055270),new b(289380356,3203993006),new b(460393269,320620315),new b(685471733,587496836),new b(852142971,1086792851),new b(1017036298,365543100),new b(1126000580,2618297676),new b(1288033470,3409855158),new b(1501505948,4234509866),new b(1607167915,987167468),new b(1816402316,
1246189591)];X=[new b(0,1),new b(0,32898),new b(2147483648,32906),new b(2147483648,2147516416),new b(0,32907),new b(0,2147483649),new b(2147483648,2147516545),new b(2147483648,32777),new b(0,138),new b(0,136),new b(0,2147516425),new b(0,2147483658),new b(0,2147516555),new b(2147483648,139),new b(2147483648,32905),new b(2147483648,32771),new b(2147483648,32770),new b(2147483648,128),new b(0,32778),new b(2147483648,2147483658),new b(2147483648,2147516545),new b(2147483648,32896),new b(0,2147483649),
new b(2147483648,2147516424)];W=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];"function"===typeof define&&define.amd?define(function(){return C}):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(module.exports=C),exports=C):Y.jsSHA=C})(this);

},{}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

var _connect = _interopRequireDefault(require("./connect.json"));

var _path = _interopRequireDefault(require("./path.json"));

var _centrifuge = _interopRequireDefault(require("centrifuge"));

var _jssha = _interopRequireDefault(require("jssha"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Generator =
/*#__PURE__*/
function () {
  function Generator(connect, user, path) {
    _classCallCheck(this, Generator);

    this.secret = connect.secret;
    this.url = connect.url;
    this.user = user;
    this.centrifuge = new _centrifuge.default();
    this.coordinates = path.coordinates;
    this.length = this.coordinates.length;
    this.interval = 500;
    this.position = 0;
    this.timeout = undefined;
    this.tickBind = this.tick.bind(this);
    this.connect();
    this.sunbscribe();
  }

  _createClass(Generator, [{
    key: "connect",
    value: function connect() {
      if (this.centrifuge.isDisconnected()) {
        this.centrifuge.configure(this.connectData);
        this.centrifuge.connect();
      }
    }
  }, {
    key: "sunbscribe",
    value: function sunbscribe() {
      this.subscription = this.centrifuge.subscribe('userstory-to-devpro');
    }
  }, {
    key: "start",
    value: function start() {
      this.tickBind();
    }
  }, {
    key: "tick",
    value: function tick() {
      if (this.position < this.length) {
        this.timeout = setTimeout(this.tickBind, this.interval);
        this.proccess();
        this.position++;
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      this.position = 0;
      this.proccess();
    }
  }, {
    key: "proccess",
    value: function proccess() {
      var point = this.coordinates[this.position];
      this.subscription.publish(point);
    }
  }, {
    key: "connectData",
    get: function get() {
      var timestamp = Generator.timestamp;
      var token = Generator.getToken(this.user, this.secret, timestamp);
      return {
        timestamp: timestamp,
        token: token,
        url: this.url,
        user: this.user
      };
    }
  }], [{
    key: "getToken",
    value: function getToken(user, secret, timestamp) {
      var hmacBody = "".concat(user).concat(timestamp);
      var shaObj = new _jssha.default("SHA-256", "TEXT");
      shaObj.setHMACKey(secret, "TEXT");
      shaObj.update(hmacBody);
      return shaObj.getHMAC("HEX");
    }
  }, {
    key: "timestamp",
    get: function get() {
      return Math.round(Date.now() / 1000).toString();
    }
  }]);

  return Generator;
}();

var generator = new Generator(_connect.default, 'user', _path.default);
var jApp = document.querySelector('#app');
var jButtonStart = jApp.querySelector('.j-start');
var jButtonPause = jApp.querySelector('.j-pause');
var jButtonStop = jApp.querySelector('.j-stop');
jButtonStart.removeEventListener('click', handleStart);
jButtonStart.addEventListener('click', handleStart);
jButtonPause.removeEventListener('click', handlePause);
jButtonPause.addEventListener('click', handlePause);
jButtonStop.removeEventListener('click', handleStop);
jButtonStop.addEventListener('click', handleStop);

function handleStart() {
  generator.start();
}

function handlePause() {
  generator.pause();
}

function handleStop() {
  generator.stop();
}
},{"./styles.css":"src/styles.css","./connect.json":"src/connect.json","./path.json":"src/path.json","centrifuge":"node_modules/centrifuge/src/centrifuge.js","jssha":"node_modules/jssha/src/sha.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12323" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map