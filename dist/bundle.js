/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// Split a filename into [root, dir, basename, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;\nvar splitPath = function(filename) {\n  return splitPathRe.exec(filename).slice(1);\n};\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function(path) {\n  var result = splitPath(path),\n      root = result[0],\n      dir = result[1];\n\n  if (!root && !dir) {\n    // No dirname whatsoever\n    return '.';\n  }\n\n  if (dir) {\n    // It has a dirname, strip trailing slash\n    dir = dir.substr(0, dir.length - 1);\n  }\n\n  return root + dir;\n};\n\n\nexports.basename = function(path, ext) {\n  var f = splitPath(path)[2];\n  // TODO: make this comparison case-insensitive on windows?\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\n\nexports.extname = function(path) {\n  return splitPath(path)[3];\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/path-browserify/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/assest/css/style.css":
/*!**********************************!*\
  !*** ./src/assest/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assest/css/style.css?");

/***/ }),

/***/ "./src/components/arena.css":
/*!**********************************!*\
  !*** ./src/components/arena.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/arena.css?");

/***/ }),

/***/ "./src/components/arena.js":
/*!*********************************!*\
  !*** ./src/components/arena.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _personajes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personajes */ \"./src/components/personajes.js\");\n/* harmony import */ var _arena_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arena.css */ \"./src/components/arena.css\");\n/* harmony import */ var _arena_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_arena_css__WEBPACK_IMPORTED_MODULE_1__);\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\n\n\n\nvar renderArena = function renderArena($container, arena) {\n  var $divArenas = document.createElement('div');\n  var $title = document.createElement('h1');\n  $title.textContent = \"Seleccione una Arena\";\n  $divArenas.append($title);\n  $divArenas.setAttribute('class', 'arenas');\n  $container.innerHTML = \"\";\n  $container.append($divArenas);\n  arena.map(function (item) {\n    var arenaTemplate = templateArena(item);\n    var htmlstring = createTemplate(arenaTemplate);\n    $divArenas.append(htmlstring);\n    var $figureImg = document.querySelector(\".arena-img-\".concat(item.id));\n    var img = $figureImg.querySelector('img');\n    img.addEventListener('load', function (ev) {\n      ev.target.parentNode.childNodes[3].classList.add('load-icon-desactive');\n    });\n    $figureImg.addEventListener('click', function (ev) {\n      var arenaID = ev.target.dataset.arena;\n      Object(_personajes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($container, arenaID);\n    });\n  });\n};\n\nvar templateArena = function templateArena(arena) {\n  return \"\\n        <div class=\\\"arena\\\">\\n        <figure class=\\\"arena_battle arena-img-\".concat(arena.id, \"\\\" >\\n            <img src=\\\"./src/assest/img/\").concat(arena.ruta, \"\\\" class=\\\"battle-arena\\\"  width=\\\"100%\\\" height=\\\"100%\\\" data-arena=\\\"\").concat(arena.id, \"\\\" />\\n            <div class=\\\"load-icon-active\\\">\\n                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\\\"/><path d=\\\"M0 0h24v24H0z\\\" fill=\\\"none\\\"/></svg>\\n            </div>\\n        </figure>\\n        <p><strong>Arena</strong></p>\\n        <p>\").concat(arena.nombre, \"</p>\\n        </div>\\n        \");\n};\n\nfunction createTemplate(HTMLString) {\n  var html = document.implementation.createHTMLDocument();\n  html.body.innerHTML = HTMLString;\n  return html.body.children[0];\n}\n\nvar imgHTML = function imgHTML(width, height, ruta, id) {\n  var img = document.createElement('img');\n  img.setAttribute('width', width);\n  img.setAttribute('height', height);\n  img.setAttribute('id', \"imageArena_\".concat(id));\n  img.setAttribute('src', \"./src/assest/img/\".concat(ruta));\n  return img;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderArena);\n\n//# sourceURL=webpack:///./src/components/arena.js?");

/***/ }),

/***/ "./src/components/batalla.css":
/*!************************************!*\
  !*** ./src/components/batalla.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/batalla.css?");

/***/ }),

/***/ "./src/components/batalla.js":
/*!***********************************!*\
  !*** ./src/components/batalla.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elementos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementos */ \"./src/components/elementos.js\");\n/* harmony import */ var _personajeclass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personajeclass */ \"./src/components/personajeclass.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n/* harmony import */ var _batalla_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batalla.css */ \"./src/components/batalla.css\");\n/* harmony import */ var _batalla_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_batalla_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar $container = document.querySelector('.container');\n\n\n\n\nvar Batalla =\n/*#__PURE__*/\nfunction (_Elementos) {\n  _inherits(Batalla, _Elementos);\n\n  function Batalla(p1, p2) {\n    var _this;\n\n    _classCallCheck(this, Batalla);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Batalla).call(this));\n    _this.p1 = p1;\n    _this.p2 = p2;\n    _this.turno = [];\n\n    _this.render();\n\n    return _this;\n  }\n\n  _createClass(Batalla, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      $container.innerHTML = \"\";\n      this.batallaContainer = this.elementCreate('div', {\n        class: \"batallaContainer\"\n      }, {\n        style: \"background-image:url('./src/assest/img/campo1.png');background-size:cover;width:100%;height:100%;\"\n      });\n      this.dataP1 = new _personajeclass__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.p1);\n      this.dataP2 = new _personajeclass__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.p2);\n      $container.appendChild(this.batallaContainer);\n      var $boxCharacter = this.createTemplate(this.templateBatalla());\n      this.batallaContainer.appendChild($boxCharacter);\n      var $atacar = $boxCharacter.querySelectorAll('.atacar');\n      $atacar.forEach(function (btn) {\n        btn.addEventListener('click', _this2.atacar.bind(_this2));\n      });\n    }\n  }, {\n    key: \"templateBatalla\",\n    value: function templateBatalla() {\n      return \"\\n        <div class=\\\"box-character-container\\\">\\n            <div class=\\\"box-character\\\">\\n                <p>\\n                    \".concat(this.dataP1.nombre, \"\\n                    <button class=\\\"atacar\\\" data-button=\\\"1\\\">Atacar</button>\\n                </p>\\n                <progress max=\").concat(this.dataP1.vida, \" value=\").concat(this.dataP1.vida, \" id=\\\"barraP1\\\" class=\\\"good\\\" ></progress>\\n                <figure>\\n                    <img src='./src/assest/img/\").concat(this.dataP1.image_pelea, \"' width=\\\"200px\\\" height=\\\"250px\\\"  />\\n                </figure>\\n                \\n            </div>\\n\\n            <div class=\\\"box-character\\\">                                \\n                <p>\\n                    <button class=\\\"atacar\\\" data-button=\\\"2\\\">Atacar</button>\\n                    \").concat(this.dataP2.nombre, \"\\n                </p>\\n                <progress max=\").concat(this.dataP2.vida, \" value=\").concat(this.dataP2.vida, \" id=\\\"barraP2\\\" class=\\\"good\\\" ></progress>\\n                <figure>\\n                    <img src='./src/assest/img/\").concat(this.dataP2.image_pelea, \"' width=\\\"200px\\\" height=\\\"250px\\\"  />\\n                </figure>\\n                \\n            </div>\\n            </div>\\n        \");\n    }\n  }, {\n    key: \"atacar\",\n    value: function atacar(ev) {\n      ev.target.disabled = true;\n      this.turno.push(ev.target);\n\n      if (ev.target.dataset.button == 1) {\n        var barraEnemiga = document.getElementById('barraP2');\n        this.turnoAtaque(ev, this.turno.length, barraEnemiga, this.dataP1.maxHit);\n      }\n\n      if (ev.target.dataset.button == 2) {\n        var _barraEnemiga = document.getElementById('barraP1');\n\n        this.turnoAtaque(ev, this.turno.length, _barraEnemiga, this.dataP2.maxHit);\n      }\n    }\n  }, {\n    key: \"turnoAtaque\",\n    value: function turnoAtaque(btn, cant, barraEnemiga, golpe) {\n      if (cant > 1) {\n        var turnoArr = this.turno.length - 2;\n        var btnEnemigo = this.turno[turnoArr];\n        btnEnemigo.disabled = false;\n      }\n\n      var golpeR = Math.round(Math.random() * (golpe - 1) + 1);\n      barraEnemiga.value = barraEnemiga.value - golpeR;\n\n      if (barraEnemiga.value <= 30) {\n        barraEnemiga.classList.add('critical');\n\n        if (barraEnemiga.value <= 0) {\n          this.finish(btn.target.dataset.button);\n        }\n      }\n    }\n  }, {\n    key: \"finish\",\n    value: function finish(personaje) {\n      if (personaje == 2) {\n        new _modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Perdiste!!!', false, {\n          p1: this.p1,\n          p2: this.p2\n        });\n      } else {\n        new _modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Ganaste!!!', true, {\n          p1: this.p1,\n          p2: this.p2\n        });\n      }\n    }\n  }]);\n\n  return Batalla;\n}(_elementos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Batalla);\n\n//# sourceURL=webpack:///./src/components/batalla.js?");

/***/ }),

/***/ "./src/components/elementos.js":
/*!*************************************!*\
  !*** ./src/components/elementos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Elementos =\n/*#__PURE__*/\nfunction () {\n  function Elementos() {\n    _classCallCheck(this, Elementos);\n  }\n\n  _createClass(Elementos, [{\n    key: \"elementCreate\",\n    value: function elementCreate(element, attr, styles) {\n      var $elementHtml = document.createElement(element);\n\n      for (var key in attr) {\n        if (attr.hasOwnProperty(key)) {\n          var attributes = attr[key];\n          $elementHtml.setAttribute(key, attributes);\n        }\n      }\n\n      styles ? $elementHtml.setAttribute('style', styles.style) : null;\n      return $elementHtml;\n    }\n  }, {\n    key: \"createTemplate\",\n    value: function createTemplate(HTMLString) {\n      var html = document.implementation.createHTMLDocument();\n      html.body.innerHTML = HTMLString;\n      return html.body.children[0];\n    }\n  }]);\n\n  return Elementos;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Elementos);\n\n//# sourceURL=webpack:///./src/components/elementos.js?");

/***/ }),

/***/ "./src/components/modal.css":
/*!**********************************!*\
  !*** ./src/components/modal.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/modal.css?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elementos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementos */ \"./src/components/elementos.js\");\n/* harmony import */ var _batalla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batalla */ \"./src/components/batalla.js\");\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.css */ \"./src/components/modal.css\");\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar $container = document.querySelector('.container');\n\nvar Modal =\n/*#__PURE__*/\nfunction (_Elementos) {\n  _inherits(Modal, _Elementos);\n\n  function Modal(contenido, ganador, personajes) {\n    var _this;\n\n    _classCallCheck(this, Modal);\n\n    var p1 = personajes.p1,\n        p2 = personajes.p2;\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this));\n    _this.p1 = p1;\n    _this.p2 = p2;\n    _this.contenido = contenido;\n    _this.ganador = ganador;\n\n    _this.renderModal();\n\n    return _this;\n  }\n\n  _createClass(Modal, [{\n    key: \"renderModal\",\n    value: function renderModal() {\n      var $html = this.createTemplate(this.templateModal());\n      $container.appendChild($html);\n      var $reiniciar = document.getElementById('reiniciar');\n      $reiniciar.addEventListener('click', this.reiniciar.bind(this));\n    }\n  }, {\n    key: \"templateModal\",\n    value: function templateModal() {\n      return \"   \\n        <div class=\\\"overlay\\\">\\n            <div class=\\\"modal\\\">\\n                <div class=\\\"close\\\">\\n                    <button>[X]</button>\\n                </div>\\n                <div class=\\\"content-modal\\\">\\n                    <p>\".concat(this.contenido, \"</p>\\n                    <p>\\n                        <button id=\\\"reiniciar\\\">Reiniciar</button>\\n                        <button id=\\\"inicio\\\">Volver a escoger</button>\\n                    </p>\\n                </div>\\n            </div> \\n        </div>                   \\n        \");\n    }\n  }, {\n    key: \"reiniciar\",\n    value: function reiniciar() {\n      var storage = window.localStorage;\n      var victorias = localStorage.getItem('victoria');\n\n      if (this.ganador == 1) {\n        localStorage.getItem('victoria') ? localStorage.setItem('victoria', parseInt(victorias) + 1) : localStorage.setItem('victoria', 1);\n      }\n\n      new _batalla__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.p1, this.p2);\n    }\n  }]);\n\n  return Modal;\n}(_elementos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./src/components/modal.js?");

/***/ }),

/***/ "./src/components/personajeclass.js":
/*!******************************************!*\
  !*** ./src/components/personajeclass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.json\");\nvar _data_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data */ \"./src/data/data.json\", 1);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar personajes = _data_data__WEBPACK_IMPORTED_MODULE_0__.personajes;\n\nvar Personje =\n/*#__PURE__*/\nfunction () {\n  function Personje(idPersonaje) {\n    _classCallCheck(this, Personje);\n\n    this.idPersonaje = idPersonaje;\n    this.vida = 100;\n    this.maxHit = 200;\n    this.filtrarPersonaje();\n  }\n\n  _createClass(Personje, [{\n    key: \"filtrarPersonaje\",\n    value: function filtrarPersonaje() {\n      var _this = this;\n\n      this.idPersonaje = personajes.filter(function (p) {\n        return p.id.includes(_this.idPersonaje);\n      });\n      this.idPersonaje.map(function (p) {\n        _this.nombre = p.nombre, _this.image_face = p.image_face, _this.image_pelea = p.image_pelea, _this.id = p.id;\n      });\n    }\n  }]);\n\n  return Personje;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Personje);\n\n//# sourceURL=webpack:///./src/components/personajeclass.js?");

/***/ }),

/***/ "./src/components/personajes.css":
/*!***************************************!*\
  !*** ./src/components/personajes.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/personajes.css?");

/***/ }),

/***/ "./src/components/personajes.js":
/*!**************************************!*\
  !*** ./src/components/personajes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.json\");\nvar _data_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data */ \"./src/data/data.json\", 1);\n/* harmony import */ var _personajes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personajes.css */ \"./src/components/personajes.css\");\n/* harmony import */ var _personajes_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_personajes_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _batalla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batalla */ \"./src/components/batalla.js\");\n\n\n\nvar $personajes = document.createElement('div');\n$personajes.setAttribute('class', 'personajes');\nvar $personajesItems = document.createElement('div');\n$personajesItems.setAttribute('class', 'personjes-templates');\nvar $selectedTemplate = document.createElement('div');\n$selectedTemplate.setAttribute('class', 'select-personaje');\nvar $itemsPersonaje = document.createElement('div');\n$itemsPersonaje.setAttribute('class', 'items-personajes');\nvar PS1 = null;\nvar PS2 = null;\nvar p1 = false;\nvar p2 = false;\n\nvar personajes = function personajes($container, arenaID) {\n  $container.innerHTML = \"\";\n  $container.append($personajes);\n  var arena = _data_data__WEBPACK_IMPORTED_MODULE_0__.arena.filter(function (mapa) {\n    return mapa.id.includes(arenaID);\n  });\n  arena.map(function (arena) {\n    var templateArena = arenatemplate(arena);\n    var arenaHTML = createTemplate(templateArena);\n    $personajes.append(arenaHTML);\n  });\n  var $title = document.createElement('h3');\n  $title.textContent = \"Selecciona un personaje\";\n  $personajesItems.append($title);\n  $personajes.append($personajesItems);\n  _data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.map(function (personaje) {\n    var templatePersonajes = personajesTemplate(personaje);\n    var personajesHTML = createTemplate(templatePersonajes);\n    $personajesItems.append($itemsPersonaje);\n    $itemsPersonaje.append(personajesHTML);\n    var $imgFace = $personajes.querySelector(\".p-face-\".concat(personaje.id));\n    $imgFace.addEventListener('click', function (ev) {\n      selectedP(ev);\n    });\n  });\n  var selectP = selectPersonaje(_data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.length);\n  var selectPHtml = createTemplate(selectP);\n  $selectedTemplate.append(selectPHtml);\n  $personajes.append($selectedTemplate);\n  var $buttonsSelect = $selectedTemplate.querySelectorAll('.button-select');\n  buttonSelect($buttonsSelect);\n};\n\nfunction buttonSelect(btn) {\n  btn.forEach(function (i) {\n    i.addEventListener('click', function (ev) {\n      selectedP(ev);\n    });\n  });\n}\n\nvar selectedP = function selectedP(ev) {\n  var $p1div = null;\n  var $p2div = null;\n  $p1div = $personajes.querySelector(\".p-1\");\n  $p2div = $personajes.querySelector(\".p-2\");\n  var $checkP1 = $p1div.querySelector('.photo-select-check');\n  var $checkP2 = $p2div.querySelector('.photo-select-check');\n\n  if (!p1) {\n    if (ev.target.tagName == \"IMG\") //definir si viene desde las imágenes o desde el button random\n      {\n        var $img = ev.target;\n        $img.setAttribute('width', '100px');\n        $img.setAttribute('height', '100px');\n        var clone = $img.cloneNode();\n        $checkP1.innerHTML = \"\";\n        $checkP1.appendChild(clone);\n        var $btnFijar = document.createElement('button');\n        $btnFijar.textContent = \"Fijar\";\n        var $btnFijarHtml = $btnFijar;\n        $checkP1.append($btnFijarHtml);\n        $btnFijar.addEventListener('click', selectCheckP);\n      } else {\n      var numLimit = ev.target.dataset.cant;\n      var numRandom = Math.round(Math.random() * (numLimit - 1) + 1);\n      var personaje = _data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.filter(function (personaje) {\n        return personaje.id.includes(numRandom);\n      });\n      personaje.forEach(function (p) {\n        var img = \"<img src=\\\"./src/assest/img/face/\".concat(p.image_face, \"\\\" data-p=\\\"\").concat(p.id, \"\\\" height=\\\"100px\\\" width=\\\"100px\\\" />\");\n        var imgHtml = createTemplate(img);\n        $checkP1.innerHTML = \"\";\n        $checkP1.appendChild(imgHtml);\n        var $btnFijar = document.createElement('button');\n        $btnFijar.textContent = \"Fijar\";\n        var $btnFijarHtml = $btnFijar;\n        $checkP1.append($btnFijarHtml);\n        $btnFijar.addEventListener('click', selectCheckP);\n      });\n    }\n  } else {\n    if (ev.target.tagName == \"IMG\") //definir si viene desde las imágenes o desde el button random\n      {\n        var _$img = ev.target;\n\n        _$img.setAttribute('width', '100px');\n\n        _$img.setAttribute('height', '100px');\n\n        var _clone = _$img.cloneNode();\n\n        $checkP2.innerHTML = \"\";\n        $checkP2.appendChild(_clone);\n\n        var _$btnFijar = document.createElement('button');\n\n        _$btnFijar.textContent = \"Fijar\";\n        var _$btnFijarHtml = _$btnFijar;\n        $checkP2.append(_$btnFijarHtml);\n\n        _$btnFijar.addEventListener('click', selectCheckP);\n      } else {\n      var _numLimit = ev.target.dataset.cant;\n\n      var _numRandom = Math.round(Math.random() * (_numLimit - 1) + 1);\n\n      var _personaje = _data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.filter(function (personaje) {\n        return personaje.id.includes(_numRandom);\n      });\n\n      _personaje.forEach(function (p) {\n        var img = \"<img src=\\\"./src/assest/img/face/\".concat(p.image_face, \"\\\" data-p=\\\"\").concat(p.id, \"\\\" height=\\\"100px width=\\\"100px\\\" />\");\n        var imgHtml = createTemplate(img);\n        $checkP2.innerHTML = \"\";\n        $checkP2.appendChild(imgHtml);\n        var $btnFijar = document.createElement('button');\n        $btnFijar.textContent = \"Fijar\";\n        var $btnFijarHtml = $btnFijar;\n        $checkP2.append($btnFijarHtml);\n        $btnFijar.addEventListener('click', selectCheckP);\n      });\n    }\n  }\n};\n\nvar selectCheckP = function selectCheckP(ev) {\n  ev.target.parentNode.previousElementSibling.disabled = true;\n  ev.target.disabled = true;\n\n  if (p1) {\n    var PID = document.querySelectorAll('.photo-select-check');\n    Object(_batalla__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PID[0].firstElementChild.dataset.p, PID[1].firstElementChild.dataset.p);\n  } else {\n    p1 = true;\n    document.getElementById('randon-2').disabled = false;\n  }\n};\n\nvar selectPersonaje = function selectPersonaje(cantP) {\n  return \"\\n        <div class=\\\"select-personaje\\\">\\n            <div class=\\\"p-1 personaje-selected\\\">\\n            <p>Personaje 1</p>\\n                <button data-cant=\\\"\".concat(cantP, \"\\\" id=\\\"randon-1\\\" class=\\\"button-select\\\">\\n                    random\\n                </button>\\n                <div class=\\\"photo-select-check\\\">\\n                </div>\\n            </div>\\n            <div class=\\\"p-2 personaje-selected\\\">\\n            <p>Personaje 2</p>\\n                <button data-cant=\\\"\").concat(cantP, \"\\\" id=\\\"randon-2\\\" class=\\\"button-select\\\" disabled>\\n                    random\\n                </button>\\n                <div class=\\\"photo-select-check\\\">\\n                </div>\\n            </div>\\n        </div>\\n    \");\n};\n\nfunction createTemplate(HTMLString) {\n  var html = document.implementation.createHTMLDocument();\n  html.body.innerHTML = HTMLString;\n  return html.body.children[0];\n}\n\nvar personajesTemplate = function personajesTemplate(personajes) {\n  return \"\\n            <figure class=\\\"p-face-\".concat(personajes.id, \"\\\">\\n                <span>\").concat(personajes.nombre, \"</span>\\n                <img src=\\\"./src/assest/img/face/\").concat(personajes.image_face, \"\\\" width=\\\"100%\\\" height=\\\"100%\\\" data-p=\\\"\").concat(personajes.id, \"\\\" />\\n            </figure>\\n    \");\n};\n\nvar arenatemplate = function arenatemplate(arena) {\n  return \"\\n        <div class=\\\"arena-selected\\\">\\n            <h2>\".concat(arena.nombre, \"</h2>\\n            <figure>\\n                <img src=\\\"./src/assest/img/\").concat(arena.ruta, \"\\\" class=\\\"battle-arena\\\"  width=\\\"100%\\\" height=\\\"100%\\\" data-arena=\\\"\").concat(arena.id, \"\\\" />\\n            </figure>\\n        </div>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (personajes);\n\n//# sourceURL=webpack:///./src/components/personajes.js?");

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: arena, personajes, default */
/***/ (function(module) {

eval("module.exports = {\"arena\":[{\"nombre\":\"Namek\",\"ruta\":\"campo1.png\",\"id\":\"1\"},{\"nombre\":\"Arena de Cell\",\"ruta\":\"campo2.jpg\",\"id\":\"2\"}],\"personajes\":[{\"nombre\":\"Goku\",\"id\":\"1\",\"image_pelea\":\"goku.png\",\"image_face\":\"goku.png\"},{\"nombre\":\"Vegeta\",\"id\":\"2\",\"image_pelea\":\"vegeta.png\",\"image_face\":\"vegeta.png\"},{\"nombre\":\"Gohan\",\"id\":\"3\",\"image_pelea\":\"gohan.png\",\"image_face\":\"gohan.jpg\"},{\"nombre\":\"Picolo\",\"id\":\"4\",\"image_pelea\":\"picolo.png\",\"image_face\":\"picolo.png\"},{\"nombre\":\"Trunk\",\"id\":\"5\",\"image_pelea\":\"trunk.png\",\"image_face\":\"trunk.png\"}]};\n\n//# sourceURL=webpack:///./src/data/data.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ \"./src/data/data.json\");\nvar _data_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/data */ \"./src/data/data.json\", 1);\n/* harmony import */ var _components_arena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/arena */ \"./src/components/arena.js\");\n/* harmony import */ var _assest_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assest/css/style.css */ \"./src/assest/css/style.css\");\n/* harmony import */ var _assest_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assest_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_batalla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/batalla */ \"./src/components/batalla.js\");\n\n\n\nvar $container = document.querySelector('.container');\n // window.onload = Arena($container,data.arena);\n\nwindow.onload = new _components_batalla__WEBPACK_IMPORTED_MODULE_3__[\"default\"](2, 4);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });