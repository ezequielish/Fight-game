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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.json\");\nvar _data_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data */ \"./src/data/data.json\", 1);\n/* harmony import */ var _personajes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personajes.css */ \"./src/components/personajes.css\");\n/* harmony import */ var _personajes_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_personajes_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar $personajes = document.createElement('div');\n$personajes.setAttribute('class', 'personajes');\nvar $personajesItems = document.createElement('div');\n$personajesItems.setAttribute('class', 'personjes-templates');\nvar $selectedTemplate = document.createElement('div');\n$selectedTemplate.setAttribute('class', 'select-personaje');\nvar $itemsPersonaje = document.createElement('div');\n$itemsPersonaje.setAttribute('class', 'items-personajes');\nvar p1 = false;\nvar p2 = false;\n\nvar personajes = function personajes($container, arenaID) {\n  $container.innerHTML = \"\";\n  $container.append($personajes);\n  var arena = _data_data__WEBPACK_IMPORTED_MODULE_0__.arena.filter(function (mapa) {\n    return mapa.id.includes(arenaID);\n  });\n  arena.map(function (arena) {\n    var templateArena = arenatemplate(arena);\n    var arenaHTML = createTemplate(templateArena);\n    $personajes.append(arenaHTML);\n  });\n  var $title = document.createElement('h3');\n  $title.textContent = \"Selecciona un personaje\";\n  $personajesItems.append($title);\n  $personajes.append($personajesItems);\n  _data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.map(function (personaje) {\n    var templatePersonajes = personajesTemplate(personaje);\n    var personajesHTML = createTemplate(templatePersonajes);\n    $personajesItems.append($itemsPersonaje);\n    $itemsPersonaje.append(personajesHTML);\n    var $imgFace = $personajes.querySelector(\".p-face-\".concat(personaje.id));\n    $imgFace.addEventListener('click', function (ev) {\n      selectedP(ev);\n    });\n  });\n  var selectP = selectPersonaje(_data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.length);\n  var selectPHtml = createTemplate(selectP);\n  $selectedTemplate.append(selectPHtml);\n  $personajes.append($selectedTemplate);\n  var $buttonsSelect = $selectedTemplate.querySelectorAll('.button-select');\n  buttonSelect($buttonsSelect);\n};\n\nfunction buttonSelect(btn) {\n  btn.forEach(function (i) {\n    i.addEventListener('click', function (ev) {\n      selectedP(ev);\n    });\n  });\n}\n\nvar selectedP = function selectedP(ev) {\n  var $p1div = null;\n  var $p2div = null;\n  $p1div = $personajes.querySelector(\".p-1\");\n  $p2div = $personajes.querySelector(\".p-2\");\n  var $checkP1 = $p1div.querySelector('.photo-select-check');\n  var $checkP2 = $p2div.querySelector('.photo-select-check');\n\n  if (!p1) {\n    if (ev.target.tagName == \"IMG\") //definir si viene desde las imágenes o desde el button random\n      {\n        var $img = ev.target;\n        $img.setAttribute('width', '100px');\n        $img.setAttribute('height', '100px');\n        var clone = $img.cloneNode();\n        $checkP1.innerHTML = \"\";\n        $checkP1.appendChild(clone);\n        var $btnFijar = document.createElement('button');\n        $btnFijar.textContent = \"Fijar\";\n        var $btnFijarHtml = $btnFijar;\n        $checkP1.append($btnFijarHtml);\n        $btnFijar.addEventListener('click', selectCheckP);\n      } else {\n      var numLimit = ev.target.dataset.cant;\n      var numRandom = Math.round(Math.random() * (numLimit - 1) + 1);\n      var personaje = _data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.filter(function (personaje) {\n        return personaje.id.includes(numRandom);\n      });\n      personaje.forEach(function (p) {\n        var img = \"<img src=\\\"./src/assest/img/face/\".concat(p.image_face, \"\\\" data-p=\\\"\").concat(p.id, \"\\\" height=\\\"100px\\\" width=\\\"100px\\\" />\");\n        var imgHtml = createTemplate(img);\n        $checkP1.innerHTML = \"\";\n        $checkP1.appendChild(imgHtml);\n        var $btnFijar = document.createElement('button');\n        $btnFijar.textContent = \"Fijar\";\n        var $btnFijarHtml = $btnFijar;\n        $checkP1.append($btnFijarHtml);\n        $btnFijar.addEventListener('click', selectCheckP);\n      });\n    }\n  } else {\n    if (ev.target.tagName == \"IMG\") //definir si viene desde las imágenes o desde el button random\n      {\n        var _$img = ev.target;\n\n        _$img.setAttribute('width', '100px');\n\n        _$img.setAttribute('height', '100px');\n\n        var _clone = _$img.cloneNode();\n\n        $checkP2.innerHTML = \"\";\n        $checkP2.appendChild(_clone);\n\n        var _$btnFijar = document.createElement('button');\n\n        _$btnFijar.textContent = \"Fijar\";\n        var _$btnFijarHtml = _$btnFijar;\n        $checkP2.append(_$btnFijarHtml);\n\n        _$btnFijar.addEventListener('click', selectCheckP);\n      } else {\n      var _numLimit = ev.target.dataset.cant;\n\n      var _numRandom = Math.round(Math.random() * (_numLimit - 1) + 1);\n\n      var _personaje = _data_data__WEBPACK_IMPORTED_MODULE_0__.personajes.filter(function (personaje) {\n        return personaje.id.includes(_numRandom);\n      });\n\n      _personaje.forEach(function (p) {\n        var img = \"<img src=\\\"./src/assest/img/face/\".concat(p.image_face, \"\\\" data-p=\\\"\").concat(p.id, \"\\\" height=\\\"100px width=\\\"100px\\\" />\");\n        var imgHtml = createTemplate(img);\n        $checkP2.innerHTML = \"\";\n        $checkP2.appendChild(imgHtml);\n        var $btnFijar = document.createElement('button');\n        $btnFijar.textContent = \"Fijar\";\n        var $btnFijarHtml = $btnFijar;\n        $checkP2.append($btnFijarHtml);\n        $btnFijar.addEventListener('click', selectCheckP);\n      });\n    }\n  }\n};\n\nvar selectCheckP = function selectCheckP(ev) {\n  ev.target.parentNode.previousElementSibling.disabled = true;\n  ev.target.disabled = true;\n\n  if (p1) {\n    console.log('Esta listo!!!');\n  } else {\n    p1 = true;\n    document.getElementById('randon-2').disabled = false;\n  }\n};\n\nvar selectPersonaje = function selectPersonaje(cantP) {\n  return \"\\n        <div class=\\\"select-personaje\\\">\\n            <div class=\\\"p-1 personaje-selected\\\">\\n            <p>Personaje 1</p>\\n                <button data-cant=\\\"\".concat(cantP, \"\\\" id=\\\"randon-1\\\" class=\\\"button-select\\\">\\n                    random\\n                </button>\\n                <div class=\\\"photo-select-check\\\">\\n                </div>\\n            </div>\\n            <div class=\\\"p-2 personaje-selected\\\">\\n            <p>Personaje 2</p>\\n                <button data-cant=\\\"\").concat(cantP, \"\\\" id=\\\"randon-2\\\" class=\\\"button-select\\\" disabled>\\n                    random\\n                </button>\\n                <div class=\\\"photo-select-check\\\">\\n                </div>\\n            </div>\\n        </div>\\n    \");\n};\n\nfunction createTemplate(HTMLString) {\n  var html = document.implementation.createHTMLDocument();\n  html.body.innerHTML = HTMLString;\n  return html.body.children[0];\n}\n\nvar personajesTemplate = function personajesTemplate(personajes) {\n  return \"\\n            <figure class=\\\"p-face-\".concat(personajes.id, \"\\\">\\n                <span>\").concat(personajes.nombre, \"</span>\\n                <img src=\\\"./src/assest/img/face/\").concat(personajes.image_face, \"\\\" width=\\\"100%\\\" height=\\\"100%\\\" data-p=\\\"\").concat(personajes.id, \"\\\" />\\n            </figure>\\n    \");\n};\n\nvar arenatemplate = function arenatemplate(arena) {\n  return \"\\n        <div class=\\\"arena-selected\\\">\\n            <h2>\".concat(arena.nombre, \"</h2>\\n            <figure>\\n                <img src=\\\"./src/assest/img/\").concat(arena.ruta, \"\\\" class=\\\"battle-arena\\\"  width=\\\"100%\\\" height=\\\"100%\\\" data-arena=\\\"\").concat(arena.id, \"\\\" />\\n            </figure>\\n        </div>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (personajes);\n\n//# sourceURL=webpack:///./src/components/personajes.js?");

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: arena, personajes, default */
/***/ (function(module) {

eval("module.exports = {\"arena\":[{\"nombre\":\"Namek\",\"ruta\":\"campo1.png\",\"id\":\"1\"},{\"nombre\":\"Arena de Cell\",\"ruta\":\"campo2.jpg\",\"id\":\"2\"}],\"personajes\":[{\"nombre\":\"Goku\",\"id\":\"1\",\"image_pelea\":\"goku.png\",\"image_face\":\"goku.png\"},{\"nombre\":\"Vegeta\",\"id\":\"2\",\"image_pelea\":\"vegeta.jpg\",\"image_face\":\"vegeta.png\"},{\"nombre\":\"Gohan\",\"id\":\"3\",\"image_pelea\":\"gohan.png\",\"image_face\":\"gohan.jpg\"},{\"nombre\":\"Picolo\",\"id\":\"4\",\"image_pelea\":\"picolo.png\",\"image_face\":\"picolo.png\"},{\"nombre\":\"Trunk\",\"id\":\"5\",\"image_pelea\":\"trunk.png\",\"image_face\":\"trunk.png\"}]};\n\n//# sourceURL=webpack:///./src/data/data.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ \"./src/data/data.json\");\nvar _data_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/data */ \"./src/data/data.json\", 1);\n/* harmony import */ var _components_arena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/arena */ \"./src/components/arena.js\");\n/* harmony import */ var _assest_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assest/css/style.css */ \"./src/assest/css/style.css\");\n/* harmony import */ var _assest_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assest_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar $container = document.querySelector('.container');\nwindow.onload = Object(_components_arena__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($container, _data_data__WEBPACK_IMPORTED_MODULE_0__.arena);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });