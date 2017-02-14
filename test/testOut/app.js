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
/******/ 	// INSERTED BY THE webpack-export-module PLUGIN////////////////////////////
/******/ 	(function exportModules(moduleMap) {
/******/ 	
/******/ 	  function mergeModuleMap(target, source) {
/******/ 	    if (Object.assign) {
/******/ 	      return Object.assign(target, source);
/******/ 	    } else {
/******/ 	      var ret = {};
/******/ 	      for (var i = 1; i >= 0; i--) {
/******/ 	        var sources = [source, target];
/******/ 	        for (var key in sources[i]) {
/******/ 	          if (Object.prototype.hasOwnProperty.call(sources[i], key)) {
/******/ 	            ret[key] = sources[i][key];
/******/ 	          }
/******/ 	        }
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  if (window.requireExportedModule && window.requireExportedModule.exportedModules) {
/******/ 	    moduleMap = mergeModuleMap(window.requireExportedModule.exportedModules, moduleMap);
/******/ 	  }
/******/ 	
/******/ 	  function requireExportedModule(moduleName) {
/******/ 	    if (moduleName && moduleMap[moduleName]) {
/******/ 	      return __webpack_require__(moduleMap[moduleName]);
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  window.requireExportedModule = requireExportedModule;
/******/ 	  window.requireExportedModule.exportedModules = moduleMap;
/******/ 	
/******/ 	
/******/ 	})({"$app!app":0,"$app!appModules\\module1":1});
/******/ 	//////////////////////////////////////////////////////////////////////////////////

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _appModulesModule1 = __webpack_require__(1);

	var _appModulesModule12 = _interopRequireDefault(_appModulesModule1);

	function app() {
	    if (_appModulesModule12["default"]) {
	        return "test pp " + (0, _appModulesModule12["default"])();
	    }
	}

	app();

	exports["default"] = app;
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function module1() {
	    return "module1";
	}

	exports["default"] = module1;
	module.exports = exports["default"];

/***/ }
/******/ ]);