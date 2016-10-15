/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _top = __webpack_require__(27);

	var _top2 = _interopRequireDefault(_top);

	var _about = __webpack_require__(28);

	var _about2 = _interopRequireDefault(_about);

	var _video = __webpack_require__(30);

	var _video2 = _interopRequireDefault(_video);

	var _item = __webpack_require__(32);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Menu = {
	  oninit: function oninit(vnode) {
	    vnode.state.onclick = function (ev) {
	      $('.button-collapse').sideNav('hide');
	    };
	  },
	  oncreate: function oncreate(vnode) {
	    var route = _mithril2.default.route.get().replace('/', '');
	    if (vnode.attrs.title === (route || 'top')) {
	      vnode.dom.setAttribute('class', 'active');
	    }
	  },
	  onupdate: function onupdate(vnode) {
	    var route = _mithril2.default.route.get().replace('/', '');
	    if (vnode.attrs.title === (route || 'top')) {
	      vnode.dom.setAttribute('class', 'active');
	    } else {
	      vnode.dom.removeAttribute('class');
	    }
	  },
	  view: function view(vnode) {
	    var title = vnode.attrs.title;
	    return (0, _mithril2.default)('li', { onclick: vnode.state.onclick }, (0, _mithril2.default)('a#menu-link-' + title + '.waves-effect.waves-light[href=/' + (title === 'top' ? '' : title) + ']', { oncreate: _mithril2.default.route.link }, title));
	  }
	};

	var Side = {
	  oninit: function oninit(vnode) {
	    vnode.state.li = function () {
	      return ['top', 'about', 'video', 'item'].map(function (title) {
	        return (0, _mithril2.default)(Menu, { title: title });
	      });
	    };
	  },
	  oncreate: function oncreate(vnode) {
	    $('.button-collapse').sideNav();
	  },
	  view: function view(vnode) {
	    var li = vnode.state.li;
	    return (0, _mithril2.default)('div.navbar-fixed', [(0, _mithril2.default)('nav.z-depth-0', [(0, _mithril2.default)('div.nav-wrapper', [(0, _mithril2.default)('img#nav-logo[src=static/img/header.png]'), (0, _mithril2.default)('a.button-collapse[data-activates=mobile-menu]', [(0, _mithril2.default)('i.material-icons.humberger', { style: { color: '#333' } }, 'menu')]), (0, _mithril2.default)('ul#menu.right.hide-on-med-and-down', li()), (0, _mithril2.default)('ul#mobile-menu.side-nav', li())])])]);
	  }
	};

	var Layout = {
	  view: function view(vnode) {
	    return (0, _mithril2.default)('div#wrapper', [(0, _mithril2.default)(Side), (0, _mithril2.default)('div#inner.container', [(0, _mithril2.default)('div#content', vnode.children)])]);
	  }
	};

	var region = document.getElementsByTagName('main')[0];

	_mithril2.default.route(region, '/', {
	  '/': {
	    render: function render() {
	      return (0, _mithril2.default)(Layout, (0, _mithril2.default)(_top2.default));
	    }
	  },
	  '/about': {
	    render: function render() {
	      return (0, _mithril2.default)(Layout, (0, _mithril2.default)(_about2.default));
	    }
	  },
	  '/video': {
	    render: function render() {
	      return (0, _mithril2.default)(Layout, (0, _mithril2.default)(_video2.default));
	    }
	  },
	  '/item': {
	    render: function render() {
	      return (0, _mithril2.default)(Layout, (0, _mithril2.default)(_item2.default));
	    }
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var m = __webpack_require__(2);
	var requestService = __webpack_require__(7);
	var redrawService = __webpack_require__(12);

	requestService.setCompletionCallback(redrawService.publish);

	m.mount = __webpack_require__(14);
	m.route = __webpack_require__(20);
	m.withAttr = __webpack_require__(26);
	m.prop = __webpack_require__(8);
	m.render = __webpack_require__(15).render;
	m.redraw = redrawService.publish;
	m.request = requestService.request;
	m.jsonp = requestService.jsonp;
	m.parseQueryString = __webpack_require__(25);
	m.buildQueryString = __webpack_require__(11);
	m.version = "bleeding-edge";

	module.exports = m;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var hyperscript = __webpack_require__(3);

	hyperscript.trust = __webpack_require__(5);
	hyperscript.fragment = __webpack_require__(6);

	module.exports = hyperscript;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Vnode = __webpack_require__(4);

	var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
	var selectorCache = {};
	function hyperscript(selector) {
		if (selector == null || typeof selector !== "string" && selector.view == null) {
			throw Error("The selector must be either a string or a component.");
		}

		if (typeof selector === "string" && selectorCache[selector] === undefined) {
			var match,
			    tag,
			    classes = [],
			    attributes = {};
			while (match = selectorParser.exec(selector)) {
				var type = match[1],
				    value = match[2];
				if (type === "" && value !== "") tag = value;else if (type === "#") attributes.id = value;else if (type === ".") classes.push(value);else if (match[3][0] === "[") {
					var attrValue = match[6];
					if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
					attributes[match[4]] = attrValue || true;
				}
			}
			if (classes.length > 0) attributes.className = classes.join(" ");
			selectorCache[selector] = function (attrs, children) {
				var hasAttrs = false,
				    childList,
				    text;
				var className = attrs.className || attrs.class;
				for (var key in attributes) {
					attrs[key] = attributes[key];
				}if (className !== undefined) {
					if (attrs.class !== undefined) {
						attrs.class = undefined;
						attrs.className = className;
					}
					if (attributes.className !== undefined) attrs.className = attributes.className + " " + className;
				}
				for (var key in attrs) {
					if (key !== "key") {
						hasAttrs = true;
						break;
					}
				}
				if (children instanceof Array && children.length == 1 && children[0] != null && children[0].tag === "#") text = children[0].children;else childList = children;

				return Vnode(tag || "div", attrs.key, hasAttrs ? attrs : undefined, childList, text, undefined);
			};
		}
		var attrs, children, childrenIndex;
		if (arguments[1] == null || _typeof(arguments[1]) === "object" && arguments[1].tag === undefined && !(arguments[1] instanceof Array)) {
			attrs = arguments[1];
			childrenIndex = 2;
		} else childrenIndex = 1;
		if (arguments.length === childrenIndex + 1) {
			children = arguments[childrenIndex] instanceof Array ? arguments[childrenIndex] : [arguments[childrenIndex]];
		} else {
			children = [];
			for (var i = childrenIndex; i < arguments.length; i++) {
				children.push(arguments[i]);
			}
		}

		if (typeof selector === "string") return selectorCache[selector](attrs || {}, Vnode.normalizeChildren(children));

		return Vnode(selector, attrs && attrs.key, attrs || {}, Vnode.normalizeChildren(children), undefined, undefined);
	}

	module.exports = hyperscript;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function Vnode(tag, key, attrs, children, text, dom) {
		return { tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: {}, events: undefined, instance: undefined, skip: false };
	}
	Vnode.normalize = function (node) {
		if (node instanceof Array) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);else if (node != null && (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object") return Vnode("#", undefined, undefined, node, undefined, undefined);
		return node;
	};
	Vnode.normalizeChildren = function normalizeChildren(children) {
		for (var i = 0; i < children.length; i++) {
			children[i] = Vnode.normalize(children[i]);
		}
		return children;
	};

	module.exports = Vnode;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Vnode = __webpack_require__(4);

	module.exports = function (html) {
		return Vnode("<", undefined, undefined, html, undefined, undefined);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Vnode = __webpack_require__(4);

	module.exports = function (attrs, children) {
		return Vnode("[", attrs.key, attrs, Vnode.normalizeChildren(children), undefined, undefined);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Stream = __webpack_require__(8);
	module.exports = __webpack_require__(10)(window, Stream);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(9)(console.log.bind(console));

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (log) {
		var guid = 0,
		    noop = function noop() {},
		    HALT = {};
		function createStream() {
			function stream() {
				if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0], undefined);
				return stream._state.value;
			}
			initStream(stream);

			if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0], undefined);

			return stream;
		}
		function initStream(stream) {
			stream.constructor = createStream;
			stream._state = { id: guid++, value: undefined, error: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], errorStream: undefined, endStream: undefined };
			stream.map = map, stream.ap = ap, stream.of = createStream;
			stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;
			stream.run = run, stream.catch = doCatch;

			Object.defineProperties(stream, {
				error: { get: function get() {
						if (!stream._state.errorStream) {
							var errorStream = function errorStream() {
								if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, undefined, arguments[0]);
								return stream._state.error;
							};
							initStream(errorStream);
							initDependency(errorStream, [stream], noop, noop);
							stream._state.errorStream = errorStream;
						}
						return stream._state.errorStream;
					} },
				end: { get: function get() {
						if (!stream._state.endStream) {
							var endStream = createStream();
							endStream.map(function (value) {
								if (value === true) unregisterStream(stream), unregisterStream(endStream);
								return value;
							});
							stream._state.endStream = endStream;
						}
						return stream._state.endStream;
					} }
			});
		}
		function updateStream(stream, value, error) {
			updateState(stream, value, error);
			for (var id in stream._state.deps) {
				updateDependency(stream._state.deps[id], false);
			}finalize(stream);
		}
		function updateState(stream, value, error) {
			error = unwrapError(value, error);
			if (error !== undefined && typeof stream._state.recover === "function") {
				if (!resolve(stream, updateValues, true)) return;
			} else updateValues(stream, value, error);
			stream._state.changed = true;
			if (stream._state.state !== 2) stream._state.state = 1;
		}
		function updateValues(stream, value, error) {
			stream._state.value = value;
			stream._state.error = error;
		}
		function updateDependency(stream, mustSync) {
			var state = stream._state,
			    parents = state.parents;
			if (parents.length > 0 && parents.filter(active).length === parents.length && (mustSync || parents.filter(changed).length > 0)) {
				var failed = parents.filter(errored);
				if (failed.length > 0) updateState(stream, undefined, failed[0]._state.error);else resolve(stream, updateState, false);
			}
		}
		function resolve(stream, update, shouldRecover) {
			try {
				var value = shouldRecover ? stream._state.recover() : stream._state.derive();
				if (value === HALT) return false;
				update(stream, value, undefined);
			} catch (e) {
				update(stream, undefined, e.__error != null ? e.__error : e);
				if (e.__error == null) reportUncaughtError(stream, e);
			}
			return true;
		}
		function unwrapError(value, error) {
			if (value != null && value.constructor === createStream) {
				if (value._state.error !== undefined) error = value._state.error;else error = unwrapError(value._state.value, value._state.error);
			}
			return error;
		}
		function finalize(stream) {
			stream._state.changed = false;
			for (var id in stream._state.deps) {
				stream._state.deps[id]._state.changed = false;
			}
		}
		function reportUncaughtError(stream, e) {
			if (Object.keys(stream._state.deps).length === 0) {
				setTimeout(function () {
					if (Object.keys(stream._state.deps).length === 0) log(e);
				}, 0);
			}
		}

		function run(fn) {
			var self = createStream(),
			    stream = this;
			return initDependency(self, [stream], function () {
				return absorb(self, fn(stream()));
			}, undefined);
		}
		function doCatch(fn) {
			var self = createStream(),
			    stream = this;
			var derive = function derive() {
				return stream._state.value;
			};
			var recover = function recover() {
				return absorb(self, fn(stream._state.error));
			};
			return initDependency(self, [stream], derive, recover);
		}
		function combine(fn, streams) {
			if (streams.length > streams.filter(valid).length) throw new Error("Ensure that each item passed to m.prop.combine/m.prop.merge is a stream");
			return initDependency(createStream(), streams, function () {
				var failed = streams.filter(errored);
				if (failed.length > 0) throw { __error: failed[0]._state.error };
				return fn.apply(this, streams.concat([streams.filter(changed)]));
			}, undefined);
		}
		function absorb(stream, value) {
			if (value != null && value.constructor === createStream) {
				var absorbable = value;
				var update = function update() {
					updateState(stream, absorbable._state.value, absorbable._state.error);
					for (var id in stream._state.deps) {
						updateDependency(stream._state.deps[id], false);
					}
				};
				absorbable.map(update).catch(function (e) {
					update();
					throw { __error: e };
				});

				if (absorbable._state.state === 0) return HALT;
				if (absorbable._state.error) throw { __error: absorbable._state.error };
				value = absorbable._state.value;
			}
			return value;
		}

		function initDependency(dep, streams, derive, recover) {
			var state = dep._state;
			state.derive = derive;
			state.recover = recover;
			state.parents = streams.filter(notEnded);

			registerDependency(dep, state.parents);
			updateDependency(dep, true);

			return dep;
		}
		function registerDependency(stream, parents) {
			for (var i = 0; i < parents.length; i++) {
				parents[i]._state.deps[stream._state.id] = stream;
				registerDependency(stream, parents[i]._state.parents);
			}
		}
		function unregisterStream(stream) {
			for (var i = 0; i < stream._state.parents.length; i++) {
				var parent = stream._state.parents[i];
				delete parent._state.deps[stream._state.id];
			}
			for (var id in stream._state.deps) {
				var dependent = stream._state.deps[id];
				var index = dependent._state.parents.indexOf(stream);
				if (index > -1) dependent._state.parents.splice(index, 1);
			}
			stream._state.state = 2; //ended
			stream._state.deps = {};
		}

		function map(fn) {
			return combine(function (stream) {
				return fn(stream());
			}, [this]);
		}
		function ap(stream) {
			return combine(function (s1, s2) {
				return s1()(s2());
			}, [this, stream]);
		}
		function valueOf() {
			return this._state.value;
		}
		function toJSON() {
			return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value;
		}

		function valid(stream) {
			return stream._state;
		}
		function active(stream) {
			return stream._state.state === 1;
		}
		function changed(stream) {
			return stream._state.changed;
		}
		function notEnded(stream) {
			return stream._state.state !== 2;
		}
		function errored(stream) {
			return stream._state.error;
		}

		function reject(e) {
			var stream = createStream();
			stream.error(e);
			return stream;
		}

		function merge(streams) {
			return combine(function () {
				return streams.map(function (s) {
					return s();
				});
			}, streams);
		}
		createStream.merge = merge;
		createStream.combine = combine;
		createStream.reject = reject;
		createStream.HALT = HALT;

		return createStream;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var buildQueryString = __webpack_require__(11);

	module.exports = function ($window, Stream) {
		var callbackCount = 0;

		var oncompletion;
		function setCompletionCallback(callback) {
			oncompletion = callback;
		}

		function request(args) {
			var stream = Stream();
			if (args.initialValue !== undefined) stream(args.initialValue);

			var useBody = typeof args.useBody === "boolean" ? args.useBody : args.method !== "GET" && args.method !== "TRACE";

			if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function (value) {
				return value;
			} : JSON.stringify;
			if (typeof args.deserialize !== "function") args.deserialize = deserialize;
			if (typeof args.extract !== "function") args.extract = extract;

			args.url = interpolate(args.url, args.data);
			if (useBody) args.data = args.serialize(args.data);else args.url = assemble(args.url, args.data);

			var xhr = new $window.XMLHttpRequest();
			xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);

			if (args.serialize === JSON.stringify && useBody) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
			}
			if (args.deserialize === deserialize) {
				xhr.setRequestHeader("Accept", "application/json, text/*");
			}

			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr;

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					try {
						var response = args.extract !== extract ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args));
						if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
							stream(cast(args.type, response));
						} else {
							var error = new Error(xhr.responseText);
							for (var key in response) {
								error[key] = response[key];
							}stream.error(error);
						}
					} catch (e) {
						stream.error(e);
					}
					if (typeof oncompletion === "function") oncompletion();
				}
			};

			if (useBody) xhr.send(args.data);else xhr.send();

			return stream;
		}

		function jsonp(args) {
			var stream = Stream();
			if (args.initialValue !== undefined) stream(args.initialValue);

			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++;
			var script = $window.document.createElement("script");
			$window[callbackName] = function (data) {
				script.parentNode.removeChild(script);
				stream(cast(args.type, data));
				if (typeof oncompletion === "function") oncompletion();
				delete $window[callbackName];
			};
			script.onerror = function () {
				script.parentNode.removeChild(script);
				stream.error(new Error("JSONP request failed"));
				if (typeof oncompletion === "function") oncompletion();
				delete $window[callbackName];
			};
			if (args.data == null) args.data = {};
			args.url = interpolate(args.url, args.data);
			args.data[args.callbackKey || "callback"] = callbackName;
			script.src = assemble(args.url, args.data);
			$window.document.documentElement.appendChild(script);
			return stream;
		}

		function interpolate(url, data) {
			if (data == null) return url;

			var tokens = url.match(/:[^\/]+/gi) || [];
			for (var i = 0; i < tokens.length; i++) {
				var key = tokens[i].slice(1);
				if (data[key] != null) {
					url = url.replace(tokens[i], data[key]);
					delete data[key];
				}
			}
			return url;
		}

		function assemble(url, data) {
			var querystring = buildQueryString(data);
			if (querystring !== "") {
				var prefix = url.indexOf("?") < 0 ? "?" : "&";
				url += prefix + querystring;
			}
			return url;
		}

		function deserialize(data) {
			try {
				return data !== "" ? JSON.parse(data) : null;
			} catch (e) {
				throw new Error(data);
			}
		}

		function extract(xhr) {
			return xhr.responseText;
		}

		function cast(type, data) {
			if (typeof type === "function") {
				if (data instanceof Array) {
					for (var i = 0; i < data.length; i++) {
						data[i] = new type(data[i]);
					}
				} else return new type(data);
			}
			return data;
		}

		return { request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (object) {
		if (Object.prototype.toString.call(object) !== "[object Object]") return "";

		var args = [];
		for (var key in object) {
			destructure(key, object[key]);
		}
		return args.join("&");

		function destructure(key, value) {
			if (value instanceof Array) {
				for (var i = 0; i < value.length; i++) {
					destructure(key + "[" + i + "]", value[i]);
				}
			} else if (Object.prototype.toString.call(value) === "[object Object]") {
				for (var i in value) {
					destructure(key + "[" + i + "]", value[i]);
				}
			} else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(13)();

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {
		var callbacks = [];
		function unsubscribe(callback) {
			var index = callbacks.indexOf(callback);
			if (index > -1) callbacks.splice(index, 1);
		}
		function publish() {
			for (var i = 0; i < callbacks.length; i++) {
				callbacks[i].apply(this, arguments);
			}
		}
		return { subscribe: callbacks.push.bind(callbacks), unsubscribe: unsubscribe, publish: publish };
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var renderService = __webpack_require__(15);
	var redrawService = __webpack_require__(12);

	module.exports = __webpack_require__(17)(renderService, redrawService);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(16)(window);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Vnode = __webpack_require__(4);

	module.exports = function ($window) {
		var $doc = $window.document;
		var $emptyFragment = $doc.createDocumentFragment();

		var onevent;
		function setEventCallback(callback) {
			return onevent = callback;
		}

		//create
		function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					insertNode(parent, createNode(vnode, hooks, ns), nextSibling);
				}
			}
		}
		function createNode(vnode, hooks, ns) {
			var tag = vnode.tag;
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
			if (typeof tag === "string") {
				switch (tag) {
					case "#":
						return createText(vnode);
					case "<":
						return createHTML(vnode);
					case "[":
						return createFragment(vnode, hooks, ns);
					default:
						return createElement(vnode, hooks, ns);
				}
			} else return createComponent(vnode, hooks, ns);
		}
		function createText(vnode) {
			return vnode.dom = $doc.createTextNode(vnode.children);
		}
		function createHTML(vnode) {
			var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
			var parent = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" }[match[1]] || "div";
			var temp = $doc.createElement(parent);

			temp.innerHTML = vnode.children;
			vnode.dom = temp.firstChild;
			vnode.domSize = temp.childNodes.length;
			var fragment = $doc.createDocumentFragment();
			var child;
			while (child = temp.firstChild) {
				fragment.appendChild(child);
			}
			return fragment;
		}
		function createFragment(vnode, hooks, ns) {
			var fragment = $doc.createDocumentFragment();
			if (vnode.children != null) {
				var children = vnode.children;
				createNodes(fragment, children, 0, children.length, hooks, null, ns);
			}
			vnode.dom = fragment.firstChild;
			vnode.domSize = fragment.childNodes.length;
			return fragment;
		}
		function createElement(vnode, hooks, ns) {
			var tag = vnode.tag;
			switch (vnode.tag) {
				case "svg":
					ns = "http://www.w3.org/2000/svg";break;
				case "math":
					ns = "http://www.w3.org/1998/Math/MathML";break;
			}

			var attrs = vnode.attrs;
			var is = attrs && attrs.is;

			var element = ns ? is ? $doc.createElementNS(ns, tag, { is: is }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, { is: is }) : $doc.createElement(tag);
			vnode.dom = element;

			if (attrs != null) {
				setAttrs(vnode, attrs, ns);
			}

			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text;else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
			}

			if (vnode.children != null) {
				var children = vnode.children;
				createNodes(element, children, 0, children.length, hooks, null, ns);
				setLateAttrs(vnode);
			}
			return element;
		}
		function createComponent(vnode, hooks, ns) {
			// For object literals since `Vnode()` always sets the `state` field.
			if (!vnode.state) vnode.state = {};
			assign(vnode.state, vnode.tag);

			initLifecycle(vnode.tag, vnode, hooks);
			vnode.instance = Vnode.normalize(vnode.tag.view.call(vnode.state, vnode));
			if (vnode.instance != null) {
				if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as arguments");
				var element = createNode(vnode.instance, hooks, ns);
				vnode.dom = vnode.instance.dom;
				vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
				return element;
			} else {
				vnode.domSize = 0;
				return $emptyFragment;
			}
		}

		//update
		function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
			if (old === vnodes || old == null && vnodes == null) return;else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, undefined);else if (vnodes == null) removeNodes(parent, old, 0, old.length, vnodes);else {
				var recycling = isRecyclable(old, vnodes);
				if (recycling) old = old.concat(old.pool);

				if (old.length === vnodes.length && vnodes[0] != null && vnodes[0].key == null) {
					for (var i = 0; i < old.length; i++) {
						if (old[i] === vnodes[i] || old[i] == null && vnodes[i] == null) continue;else if (old[i] == null) insertNode(parent, createNode(vnodes[i], hooks, ns), getNextSibling(old, i + 1, nextSibling));else if (vnodes[i] == null) removeNodes(parent, old, i, i + 1, vnodes);else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns);
						if (recycling && old[i].tag === vnodes[i].tag) insertNode(parent, toFragment(old[i]), getNextSibling(old, i + 1, nextSibling));
					}
				} else {
					var oldStart = 0,
					    start = 0,
					    oldEnd = old.length - 1,
					    end = vnodes.length - 1,
					    map;
					while (oldEnd >= oldStart && end >= start) {
						var o = old[oldStart],
						    v = vnodes[start];
						if (o === v && !recycling) oldStart++, start++;else if (o != null && v != null && o.key === v.key) {
							oldStart++, start++;
							updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), recycling, ns);
							if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
						} else {
							var o = old[oldEnd];
							if (o === v && !recycling) oldEnd--, start++;else if (o != null && v != null && o.key === v.key) {
								updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
								if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling));
								oldEnd--, start++;
							} else break;
						}
					}
					while (oldEnd >= oldStart && end >= start) {
						var o = old[oldEnd],
						    v = vnodes[end];
						if (o === v && !recycling) oldEnd--, end--;else if (o != null && v != null && o.key === v.key) {
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
							if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
							if (o.dom != null) nextSibling = o.dom;
							oldEnd--, end--;
						} else {
							if (!map) map = getKeyMap(old, oldEnd);
							if (v != null) {
								var oldIndex = map[v.key];
								if (oldIndex != null) {
									var movable = old[oldIndex];
									updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
									insertNode(parent, toFragment(movable), nextSibling);
									old[oldIndex].skip = true;
									if (movable.dom != null) nextSibling = movable.dom;
								} else {
									var dom = createNode(v, hooks, undefined);
									insertNode(parent, dom, nextSibling);
									nextSibling = dom;
								}
							}
							end--;
						}
						if (end < start) break;
					}
					createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
					removeNodes(parent, old, oldStart, oldEnd + 1, vnodes);
				}
			}
		}
		function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			var oldTag = old.tag,
			    tag = vnode.tag;
			if (oldTag === tag) {
				vnode.state = old.state;
				vnode.events = old.events;
				if (shouldUpdate(vnode, old)) return;
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks, recycling);
				}
				if (typeof oldTag === "string") {
					switch (oldTag) {
						case "#":
							updateText(old, vnode);break;
						case "<":
							updateHTML(parent, old, vnode, nextSibling);break;
						case "[":
							updateFragment(parent, old, vnode, hooks, nextSibling, ns);break;
						default:
							updateElement(old, vnode, hooks, ns);
					}
				} else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns);
			} else {
				removeNode(parent, old, null);
				insertNode(parent, createNode(vnode, hooks, undefined), nextSibling);
			}
		}
		function updateText(old, vnode) {
			if (old.children.toString() !== vnode.children.toString()) {
				old.dom.nodeValue = vnode.children;
			}
			vnode.dom = old.dom;
		}
		function updateHTML(parent, old, vnode, nextSibling) {
			if (old.children !== vnode.children) {
				toFragment(old);
				insertNode(parent, createHTML(vnode), nextSibling);
			} else vnode.dom = old.dom, vnode.domSize = old.domSize;
		}
		function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
			updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
			var domSize = 0,
			    children = vnode.children;
			vnode.dom = null;
			if (children != null) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i];
					if (child != null && child.dom != null) {
						if (vnode.dom == null) vnode.dom = child.dom;
						domSize += child.domSize || 1;
					}
				}
				if (domSize !== 1) vnode.domSize = domSize;
			}
		}
		function updateElement(old, vnode, hooks, ns) {
			var element = vnode.dom = old.dom;
			switch (vnode.tag) {
				case "svg":
					ns = "http://www.w3.org/2000/svg";break;
				case "math":
					ns = "http://www.w3.org/1998/Math/MathML";break;
			}
			if (vnode.tag === "textarea") {
				if (vnode.attrs == null) vnode.attrs = {};
				if (vnode.text != null) vnode.attrs.value = vnode.text; //FIXME handle multiple children
			}
			updateAttrs(vnode, old.attrs, vnode.attrs, ns);
			if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text;
			} else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)];
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
				updateNodes(element, old.children, vnode.children, hooks, null, ns);
			}
		}
		function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			vnode.instance = Vnode.normalize(vnode.tag.view.call(vnode.state, vnode));
			updateLifecycle(vnode.tag, vnode, hooks, recycling);
			if (vnode.instance != null) {
				if (old.instance == null) insertNode(parent, createNode(vnode.instance, hooks, ns), nextSibling);else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns);
				vnode.dom = vnode.instance.dom;
				vnode.domSize = vnode.instance.domSize;
			} else if (old.instance != null) {
				removeNode(parent, old.instance, null);
				vnode.dom = undefined;
				vnode.domSize = 0;
			} else {
				vnode.dom = old.dom;
				vnode.domSize = old.domSize;
			}
		}
		function isRecyclable(old, vnodes) {
			if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
				var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0;
				var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0;
				var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0;
				if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
					return true;
				}
			}
			return false;
		}
		function getKeyMap(vnodes, end) {
			var map = {},
			    i = 0;
			for (var i = 0; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					var key = vnode.key;
					if (key != null) map[key] = i;
				}
			}
			return map;
		}
		function toFragment(vnode) {
			var count = vnode.domSize;
			if (count != null || vnode.dom == null) {
				var fragment = $doc.createDocumentFragment();
				if (count > 0) {
					var dom = vnode.dom;
					while (--count) {
						fragment.appendChild(dom.nextSibling);
					}fragment.insertBefore(dom, fragment.firstChild);
				}
				return fragment;
			} else return vnode.dom;
		}
		function getNextSibling(vnodes, i, nextSibling) {
			for (; i < vnodes.length; i++) {
				if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
			}
			return nextSibling;
		}

		function insertNode(parent, dom, nextSibling) {
			if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling);else parent.appendChild(dom);
		}

		//remove
		function removeNodes(parent, vnodes, start, end, context) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					if (vnode.skip) vnode.skip = false;else removeNode(parent, vnode, context);
				}
			}
		}
		function once(f) {
			var called = false;
			return function () {
				if (!called) {
					called = true;
					f();
				}
			};
		}
		function removeNode(parent, vnode, context) {
			var expected = 1,
			    called = 0;
			if (vnode.attrs && vnode.attrs.onbeforeremove) {
				expected++;
				vnode.attrs.onbeforeremove.call(vnode.state, vnode, once(continuation));
			}
			if (typeof vnode.tag !== "string" && vnode.tag.onbeforeremove) {
				expected++;
				vnode.tag.onbeforeremove.call(vnode.state, vnode, once(continuation));
			}
			continuation();
			function continuation() {
				if (++called === expected) {
					onremove(vnode);
					if (vnode.dom) {
						var count = vnode.domSize || 1;
						if (count > 1) {
							var dom = vnode.dom;
							while (--count) {
								parent.removeChild(dom.nextSibling);
							}
						}
						if (vnode.dom.parentNode != null) parent.removeChild(vnode.dom);
						if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") {
							//TODO test custom elements
							if (!context.pool) context.pool = [vnode];else context.pool.push(vnode);
						}
					}
				}
			}
		}
		function onremove(vnode) {
			if (vnode.attrs && vnode.attrs.onremove) vnode.attrs.onremove.call(vnode.state, vnode);
			if (typeof vnode.tag !== "string" && vnode.tag.onremove) vnode.tag.onremove.call(vnode.state, vnode);
			if (vnode.instance != null) onremove(vnode.instance);else {
				var children = vnode.children;
				if (children instanceof Array) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i];
						if (child != null) onremove(child);
					}
				}
			}
		}

		//attrs
		function setAttrs(vnode, attrs, ns) {
			for (var key in attrs) {
				setAttr(vnode, key, null, attrs[key], ns);
			}
		}
		function setAttr(vnode, key, old, value, ns) {
			var element = vnode.dom;
			if (key === "key" || old === value && !isFormAttribute(vnode, key) && (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object" || typeof value === "undefined" || isLifecycleMethod(key)) return;
			var nsLastIndex = key.indexOf(":");
			if (nsLastIndex > -1 && key.substr(0, nsLastIndex) === "xlink") {
				element.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(nsLastIndex + 1), value);
			} else if (key[0] === "o" && key[1] === "n" && typeof value === "function") updateEvent(vnode, key, value);else if (key === "style") updateStyle(element, old, value);else if (key in element && !isAttribute(key) && ns === undefined) {
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if (vnode.tag === "input" && key === "value" && vnode.dom.value === value && vnode.dom === $doc.activeElement) return;
				element[key] = value;
			} else {
				if (typeof value === "boolean") {
					if (value) element.setAttribute(key, "");else element.removeAttribute(key);
				} else element.setAttribute(key === "className" ? "class" : key, value);
			}
		}
		function setLateAttrs(vnode) {
			var attrs = vnode.attrs;
			if (vnode.tag === "select" && attrs != null) {
				if ("value" in attrs) setAttr(vnode, "value", null, attrs.value, undefined);
				if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined);
			}
		}
		function updateAttrs(vnode, old, attrs, ns) {
			if (attrs != null) {
				for (var key in attrs) {
					setAttr(vnode, key, old && old[key], attrs[key], ns);
				}
			}
			if (old != null) {
				for (var key in old) {
					if (attrs == null || !(key in attrs)) {
						if (key === "className") key = "class";
						if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined);else if (key !== "key") vnode.dom.removeAttribute(key);
					}
				}
			}
		}
		function isFormAttribute(vnode, attr) {
			return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement;
		}
		function isLifecycleMethod(attr) {
			return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
		}
		function isAttribute(attr) {
			return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"; // || attr === "type"
		}
		function hasIntegrationMethods(source) {
			return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove);
		}

		//style
		function updateStyle(element, old, style) {
			if (old === style) element.style.cssText = "", old = null;
			if (style == null) element.style.cssText = "";else if (typeof style === "string") element.style.cssText = style;else {
				if (typeof old === "string") element.style.cssText = "";
				for (var key in style) {
					element.style[key] = style[key];
				}
				if (old != null && typeof old !== "string") {
					for (var key in old) {
						if (!(key in style)) element.style[key] = "";
					}
				}
			}
		}

		//event
		function updateEvent(vnode, key, value) {
			var element = vnode.dom;
			var callback = function callback(e) {
				var result = value.call(element, e);
				if (typeof onevent === "function") onevent.call(element, e);
				return result;
			};
			if (key in element) element[key] = callback;else {
				var eventName = key.slice(2);
				if (vnode.events === undefined) vnode.events = {};
				if (vnode.events[key] != null) element.removeEventListener(eventName, vnode.events[key], false);
				if (typeof value === "function") {
					vnode.events[key] = callback;
					element.addEventListener(eventName, vnode.events[key], false);
				}
			}
		}

		//lifecycle
		function initLifecycle(source, vnode, hooks) {
			if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode);
			if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode));
		}
		function updateLifecycle(source, vnode, hooks, recycling) {
			if (recycling) initLifecycle(source, vnode, hooks);else if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode));
		}
		function shouldUpdate(vnode, old) {
			var forceVnodeUpdate, forceComponentUpdate;
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old);
			if (typeof vnode.tag !== "string" && typeof vnode.tag.onbeforeupdate === "function") forceComponentUpdate = vnode.tag.onbeforeupdate.call(vnode.state, vnode, old);
			if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
				vnode.dom = old.dom;
				vnode.domSize = old.domSize;
				vnode.instance = old.instance;
				return true;
			}
			return false;
		}

		function assign(target, source) {
			Object.keys(source).forEach(function (k) {
				target[k] = source[k];
			});
		}

		function render(dom, vnodes) {
			if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
			var hooks = [];
			var active = $doc.activeElement;

			// First time rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = "";

			if (!(vnodes instanceof Array)) vnodes = [vnodes];
			updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), hooks, null, undefined);
			dom.vnodes = vnodes;
			for (var i = 0; i < hooks.length; i++) {
				hooks[i]();
			}if ($doc.activeElement !== active) active.focus();
		}

		return { render: render, setEventCallback: setEventCallback };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Vnode = __webpack_require__(4);
	var autoredraw = __webpack_require__(18);

	module.exports = function (renderer, pubsub) {
		return function (root, component) {
			if (component === null) {
				renderer.render(root, []);
				pubsub.unsubscribe(root.redraw);
				delete root.redraw;
				return;
			}

			var run = autoredraw(root, renderer, pubsub, function () {
				renderer.render(root, Vnode(component, undefined, undefined, undefined, undefined, undefined));
			});

			run();
		};
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var throttle = __webpack_require__(19);

	module.exports = function (root, renderer, pubsub, callback) {
		var run = throttle(callback);
		if (renderer != null) {
			renderer.setEventCallback(function (e) {
				if (e.redraw !== false) pubsub.publish();
			});
		}

		if (pubsub != null) {
			if (root.redraw) pubsub.unsubscribe(root.redraw);
			pubsub.subscribe(run);
		}

		return root.redraw = run;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (callback) {
		//60fps translates to 16.6ms, round it down since setTimeout requires int
		var time = 16;
		var last = 0,
		    pending = null;
		var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout;
		return function (synchronous) {
			var now = Date.now();
			if (synchronous === true || last === 0 || now - last >= time) {
				last = now;
				callback();
			} else if (pending === null) {
				pending = timeout(function () {
					pending = null;
					callback();
					last = Date.now();
				}, time - (now - last));
			}
		};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var mount = __webpack_require__(14);

	module.exports = __webpack_require__(21)(window, mount);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Vnode = __webpack_require__(4);
	var coreRouter = __webpack_require__(22);

	module.exports = function ($window, mount) {
		var router = coreRouter($window);
		var _currentResolve, currentComponent, currentRender, currentArgs, currentPath;

		var RouteComponent = { view: function view() {
				return [currentRender(Vnode(currentComponent, null, currentArgs, undefined, undefined, undefined))];
			} };
		function defaultRender(vnode) {
			return vnode;
		}
		var route = function route(root, defaultRoute, routes) {
			currentComponent = "div";
			currentRender = defaultRender;
			currentArgs = null;

			mount(root, RouteComponent);

			router.defineRoutes(routes, function (payload, args, path) {
				var isResolver = typeof payload.view !== "function";
				var render = defaultRender;

				var resolve = _currentResolve = function currentResolve(component) {
					if (resolve !== _currentResolve) return;
					_currentResolve = null;

					currentComponent = component != null ? component : isResolver ? "div" : payload;
					currentRender = render;
					currentArgs = args;
					currentPath = path;

					root.redraw(true);
				};
				var onmatch = function onmatch() {
					resolve();
				};
				if (isResolver) {
					if (typeof payload.render === "function") render = payload.render.bind(payload);
					if (typeof payload.onmatch === "function") onmatch = payload.onmatch;
				}

				onmatch.call(payload, resolve, args, path);
			}, function () {
				router.setPath(defaultRoute, null, { replace: true });
			});
		};
		route.link = router.link;
		route.prefix = router.setPrefix;
		route.set = router.setPath;
		route.get = function () {
			return currentPath;
		};

		return route;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";

	var buildQueryString = __webpack_require__(11);
	var parseQueryString = __webpack_require__(25);

	module.exports = function ($window) {
		var supportsPushState = typeof $window.history.pushState === "function";
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;

		var prefix = "#!";
		function setPrefix(value) {
			prefix = value;
		}

		function normalize(fragment) {
			var data = $window.location[fragment].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);
			if (fragment === "pathname" && data[0] !== "/") data = "/" + data;
			return data;
		}

		var asyncId;
		function debounceAsync(f) {
			return function () {
				if (asyncId != null) return;
				asyncId = callAsync(function () {
					asyncId = null;
					f();
				});
			};
		}

		function parsePath(path, queryData, hashData) {
			var queryIndex = path.indexOf("?");
			var hashIndex = path.indexOf("#");
			var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length;
			if (queryIndex > -1) {
				var queryEnd = hashIndex > -1 ? hashIndex : path.length;
				var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd));
				for (var key in queryParams) {
					queryData[key] = queryParams[key];
				}
			}
			if (hashIndex > -1) {
				var hashParams = parseQueryString(path.slice(hashIndex + 1));
				for (var key in hashParams) {
					hashData[key] = hashParams[key];
				}
			}
			return path.slice(0, pathEnd);
		}

		function getPath() {
			var type = prefix.charAt(0);
			switch (type) {
				case "#":
					return normalize("hash").slice(prefix.length);
				case "?":
					return normalize("search").slice(prefix.length) + normalize("hash");
				default:
					return normalize("pathname").slice(prefix.length) + normalize("search") + normalize("hash");
			}
		}

		function setPath(path, data, options) {
			var queryData = {},
			    hashData = {};
			path = parsePath(path, queryData, hashData);
			if (data != null) {
				for (var key in data) {
					queryData[key] = data[key];
				}path = path.replace(/:([^\/]+)/g, function (match, token) {
					delete queryData[token];
					return data[token];
				});
			}

			var query = buildQueryString(queryData);
			if (query) path += "?" + query;

			var hash = buildQueryString(hashData);
			if (hash) path += "#" + hash;

			if (supportsPushState) {
				if (options && options.replace) $window.history.replaceState(null, null, prefix + path);else $window.history.pushState(null, null, prefix + path);
				$window.onpopstate();
			} else $window.location.href = prefix + path;
		}

		function defineRoutes(routes, resolve, reject) {
			if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute);else if (prefix.charAt(0) === "#") $window.onhashchange = resolveRoute;
			resolveRoute();

			function resolveRoute() {
				var path = getPath();
				var params = {};
				var pathname = parsePath(path, params, params);

				for (var route in routes) {
					var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");

					if (matcher.test(pathname)) {
						pathname.replace(matcher, function () {
							var keys = route.match(/:[^\/]+/g) || [];
							var values = [].slice.call(arguments, 1, -2);
							for (var i = 0; i < keys.length; i++) {
								params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i]);
							}
							resolve(routes[route], params, path, route);
						});
						return;
					}
				}

				reject(path, params);
			}
			return resolveRoute;
		}

		function link(vnode) {
			vnode.dom.setAttribute("href", prefix + vnode.attrs.href);
			vnode.dom.onclick = function (e) {
				e.preventDefault();
				e.redraw = false;
				var href = this.getAttribute("href");
				if (href.indexOf(prefix) === 0) href = href.slice(prefix.length);
				setPath(href, undefined, undefined);
			};
		}

		return { setPrefix: setPrefix, getPath: getPath, setPath: setPath, defineRoutes: defineRoutes, link: link };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23).setImmediate))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";

	var nextTick = __webpack_require__(24).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23).setImmediate, __webpack_require__(23).clearImmediate))

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
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
	    }
	    // if setTimeout wasn't available but was latter defined
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
	    }
	    // if clearTimeout wasn't available but was latter defined
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
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
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

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (string) {
		if (string === "" || string == null) return {};
		if (string.charAt(0) === "?") string = string.slice(1);

		var entries = string.split("&"),
		    data = {},
		    counters = {};
		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i].split("=");
			var key = decodeURIComponent(entry[0]);
			var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";

			//TODO refactor out
			var number = Number(value);
			if (value !== "" && !isNaN(number) || value === "NaN") value = number;else if (value === "true") value = true;else if (value === "false") value = false;

			var levels = key.split(/\]\[?|\[/);
			var cursor = data;
			if (key.indexOf("[") > -1) levels.pop();
			for (var j = 0; j < levels.length; j++) {
				var level = levels[j],
				    nextLevel = levels[j + 1];
				var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
				var isValue = j === levels.length - 1;
				if (level === "") {
					var key = levels.slice(0, j).join();
					if (counters[key] == null) counters[key] = 0;
					level = counters[key]++;
				}
				if (cursor[level] == null) {
					cursor[level] = isValue ? value : isNumber ? [] : {};
				}
				cursor = cursor[level];
			}
		}
		return data;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (attrName, callback, context) {
		return function (e) {
			return callback.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName));
		};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _top = __webpack_require__(34);

	var _top2 = _interopRequireDefault(_top);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  oninit: function oninit(vnode) {
	    vnode.state.datas = _top2.default.data;
	  },
	  view: function view(vnode) {
	    return (0, _mithril2.default)('div#news', vnode.state.datas.map(function (data) {
	      return (0, _mithril2.default)('div.news-container', [(0, _mithril2.default)('h4.news-date', data.date), (0, _mithril2.default)('h5.news-title', (0, _mithril2.default)('i.material-icons', 'turned_in'), data.title), (0, _mithril2.default)('div.news-text', data.text)]);
	    }));
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _about = __webpack_require__(29);

	var _about2 = _interopRequireDefault(_about);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  view: function view(vnode) {
	    return (0, _mithril2.default)('div#about.container', [(0, _mithril2.default)('img[src=static/img/about.jpg]'), (0, _mithril2.default)('div#weare', _about2.default.description)]);
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
		"description": "男と女が出会い、愛し合った結晶9つくらいが集まりました。"
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _video = __webpack_require__(31);

	var _video2 = _interopRequireDefault(_video);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IFrame = {
	  view: function view(vnode) {
	    var data = vnode.attrs.data;
	    return (0, _mithril2.default)('div.video-wrapper', [(0, _mithril2.default)('div.video-container', [(0, _mithril2.default)('iframe[width=560][height=315][src=https://www.youtube.com/embed/' + data.url + '][frameborder=0]')]), (0, _mithril2.default)('div', '' + data.comment)]);
	  }
	};

	var Dummy = {
	  // Component for lazy loading embed youtube video.
	  view: function view(vnode) {
	    return (0, _mithril2.default)('div');
	  }
	};

	var Row = {
	  oninit: function oninit(vnode) {
	    vnode.state.clicked = _mithril2.default.prop(false);
	    vnode.state.data = vnode.attrs.data;
	    vnode.state.onclick = function (ev) {
	      if (!vnode.state.clicked()) {
	        vnode.state.clicked(true);
	      }
	    };
	  },
	  oncreate: function oncreate(vnode) {
	    // NOTE: Collapsible elements only need initialization if they are added dynamically.
	    // see: http://materializecss.com/collapsible.html
	    $('.collapsible').collapsible();
	  },
	  view: function view(vnode) {
	    var data = vnode.state.data;
	    return (0, _mithril2.default)('li', [(0, _mithril2.default)('div.collapsible-header', { onclick: vnode.state.onclick }, [(0, _mithril2.default)('i.material-icons', 'video_library')], data.date + ' ' + data.at), (0, _mithril2.default)('div.collapsible-body', vnode.state.clicked() ? (0, _mithril2.default)(IFrame, { data: data }) : (0, _mithril2.default)(Dummy))]);
	  }
	};

	exports.default = {
	  oninit: function oninit(vnode) {
	    vnode.state.datas = _video2.default.data;
	  },
	  view: function view(vnode) {
	    return (0, _mithril2.default)('div#video', [(0, _mithril2.default)('ul.collapsible.z-depth-0[data-collapsible=accordion]', vnode.state.datas.map(function (data) {
	      return (0, _mithril2.default)(Row, { data: data });
	    }))]);
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
		"data": [
			{
				"at": "本八幡 ルート14",
				"date": "2016/10/10",
				"url": "uIYm7QojVDs",
				"comment": "新曲やった"
			},
			{
				"at": "前橋 クールフール",
				"date": "2015/09/12",
				"url": "AdtKp3VkV_Q",
				"comment": "初遠征"
			},
			{
				"at": "高円寺 無善寺",
				"date": "2015/02/28",
				"url": "1DRAOtOs3VU",
				"comment": "大きい音が出せた時代"
			},
			{
				"at": "本八幡 ルート14",
				"date": "2015/02/28",
				"url": "Jp4p03aSrP0",
				"comment": "自由闊達"
			},
			{
				"at": "池袋 手刀(チョップ)",
				"date": "2014/12/21",
				"url": "JLBTlGkhxt8",
				"comment": "カレーパンマンやった"
			}
		]
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mithril = __webpack_require__(1);

	var _mithril2 = _interopRequireDefault(_mithril);

	var _item = __webpack_require__(33);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  oninit: function oninit(vnode) {
	    vnode.state.datas = _item2.default.data;
	  },
	  oncreate: function oncreate(vnode) {
	    $('.materialboxed').materialbox();
	  },
	  view: function view(vnode) {
	    var datas = vnode.state.datas;
	    return (0, _mithril2.default)('div#item', datas.map(function (data) {
	      return (0, _mithril2.default)('div.item-container', [(0, _mithril2.default)('b', data.name), (0, _mithril2.default)('span', ' \xA5' + data.value), (0, _mithril2.default)('br'), (0, _mithril2.default)('span', data.description), (0, _mithril2.default)('img.item-image.materialboxed[src=static/img/' + data.img + ']')]);
	    }));
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
		"data": [
			{
				"name": "Tシャツ",
				"description": "サイズは3サイズくらいあります。白と黒があるです。",
				"value": "3,000",
				"img": "tshirt.jpg"
			},
			{
				"name": "ステッカー",
				"description": "冷蔵庫や電柱に貼れます。",
				"value": "500",
				"img": "sticker.jpg"
			}
		]
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
		"index": 1,
		"data": [
			{
				"date": "2016/10/16",
				"title": "サイト更新しました",
				"text": "見たら死ぬはオープンソースなバンドです"
			}
		]
	};

/***/ }
/******/ ]);