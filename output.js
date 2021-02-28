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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tecky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tecky */ \"./js/tecky.js\");\n/* harmony import */ var _tecky__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tecky__WEBPACK_IMPORTED_MODULE_1__);\n // loučíme se s IE\n\n\n\nvar mobilniGrafy = function mobilniGrafy() {\n  var grafy = document.getElementsByClassName(\"graf\");\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = grafy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var g = _step.value;\n      g.src = g.src.replace(\"-des.svg\", \"-mob.svg\");\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\nwindow.innerWidth < 600 ? mobilniGrafy() : null;\n/*\n// snadné načtení souboru pro každého!\nfetch(\"https://blabla.cz/blabla.json\")\n  .then(response => response.json()) // nebo .text(), když to není json\n  .then(data => {\n    // tady jde provést s daty cokoliv\n  });\n*/\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/tecky.js":
/*!*********************!*\
  !*** ./js/tecky.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var muni = {\n  CZ0100: \"Praha\",\n  CZ0201: \"Benešov\",\n  CZ0202: \"Beroun\",\n  CZ0203: \"Kladno\",\n  CZ0204: \"Kolín\",\n  CZ0205: \"Kutná Hora\",\n  CZ0206: \"Mělník\",\n  CZ0207: \"Mladá Boleslav\",\n  CZ0208: \"Nymburk\",\n  CZ0209: \"Praha-východ\",\n  CZ020A: \"Praha-západ\",\n  CZ020B: \"Příbram\",\n  CZ020C: \"Rakovník\",\n  CZ0311: \"České Budějovice\",\n  CZ0312: \"Český Krumlov\",\n  CZ0313: \"Jindřichův Hradec\",\n  CZ0314: \"Písek\",\n  CZ0315: \"Prachatice\",\n  CZ0316: \"Strakonice\",\n  CZ0317: \"Tábor\",\n  CZ0321: \"Domažlice\",\n  CZ0322: \"Klatovy\",\n  CZ0323: \"Plzeň-město\",\n  CZ0324: \"Plzeň-jih\",\n  CZ0325: \"Plzeň-sever\",\n  CZ0326: \"Rokycany\",\n  CZ0327: \"Tachov\",\n  CZ0411: \"Cheb\",\n  CZ0412: \"Karlovy Vary\",\n  CZ0413: \"Sokolov\",\n  CZ0421: \"Děčín\",\n  CZ0422: \"Chomutov\",\n  CZ0423: \"Litoměřice\",\n  CZ0424: \"Louny\",\n  CZ0425: \"Most\",\n  CZ0426: \"Teplice\",\n  CZ0427: \"Ústí nad Labem\",\n  CZ0511: \"Česká Lípa\",\n  CZ0512: \"Jablonec nad Nisou\",\n  CZ0513: \"Liberec\",\n  CZ0514: \"Semily\",\n  CZ0521: \"Hradec Králové\",\n  CZ0522: \"Jičín\",\n  CZ0523: \"Náchod\",\n  CZ0524: \"Rychnov nad Kněžnou\",\n  CZ0525: \"Trutnov\",\n  CZ0531: \"Chrudim\",\n  CZ0532: \"Pardubice\",\n  CZ0533: \"Svitavy\",\n  CZ0534: \"Ústí nad Orlicí\",\n  CZ0631: \"Havlíčkův Brod\",\n  CZ0632: \"Jihlava\",\n  CZ0633: \"Pelhřimov\",\n  CZ0634: \"Třebíč\",\n  CZ0635: \"Žďár nad Sázavou\",\n  CZ0641: \"Blansko\",\n  CZ0642: \"Brno-město\",\n  CZ0643: \"Brno-venkov\",\n  CZ0644: \"Břeclav\",\n  CZ0645: \"Hodonín\",\n  CZ0646: \"Vyškov\",\n  CZ0647: \"Znojmo\",\n  CZ0711: \"Jeseník\",\n  CZ0712: \"Olomouc\",\n  CZ0713: \"Prostějov\",\n  CZ0714: \"Přerov\",\n  CZ0715: \"Šumperk\",\n  CZ0721: \"Kroměříž\",\n  CZ0722: \"Uherské Hradiště\",\n  CZ0723: \"Vsetín\",\n  CZ0724: \"Zlín\",\n  CZ0801: \"Bruntál\",\n  CZ0802: \"Frýdek-Místek\",\n  CZ0803: \"Karviná\",\n  CZ0804: \"Nový Jičín\",\n  CZ0805: \"Opava\",\n  CZ0806: \"Ostrava-město\"\n};\nvar sex = {\n  M: \"muž\",\n  Z: \"žena\"\n};\nvar pltLines = [];\nfetch(\"https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/umrti.csv\").then(function (response) {\n  return response.text();\n}).then(function (resp) {\n  var d = d3.csvParse(resp);\n  var data = [];\n  var ld = d.slice(-1)[0].datum;\n  var yMin = Date.parse(d[0].datum);\n  var yMax = Date.parse(ld);\n  d.forEach(function (r, i) {\n    i % 5000 === 0 && i !== 0 ? pltLines.push({\n      color: \"#de2d26\",\n      value: Date.parse(r.datum),\n      width: 1,\n      label: {\n        text: \"5000\",\n        align: \"right\",\n        style: {\n          color: \"#de2d26\",\n          fontWeight: \"bold\"\n        }\n      }\n    }) : null;\n    data.push([Math.round(Math.random() * 1000) / 10, Date.parse(r.datum), // 86400000)  + (Math.random() * 100) / 10,\n    r.datum, r.pohlavi, r.vek, r.okres_lau_kod]);\n  });\n\n  if (!Highcharts.Series.prototype.renderCanvas) {\n    throw \"Module not loaded\";\n  }\n\n  Highcharts.chart(\"mrtvi-tecky\", {\n    chart: {\n      height: \"130%\"\n    },\n    boost: {\n      useGPUTranslations: true,\n      usePreAllocated: true\n    },\n    credits: {\n      text: \"data (k \".concat(parseInt(ld.split(\"-\")[2]), \". \").concat(parseInt(ld.split(\"-\")[1]), \".): \\xDAZIS\"),\n      href: \"https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19\"\n    },\n    xAxis: {\n      min: 0,\n      max: 115,\n      visible: false\n    },\n    yAxis: {\n      min: yMin,\n      max: yMax,\n      reversed: true,\n      minPadding: 0,\n      maxPadding: 0,\n      endOnTick: true,\n      showLastLabel: false,\n      title: {\n        text: null\n      },\n      labels: {\n        formatter: function formatter() {\n          var tStamp = new Date(this.value);\n          return \"\".concat(tStamp.getDate(), \". \").concat(tStamp.getMonth() + 1, \". \").concat(tStamp.getFullYear() - 2000);\n        }\n      },\n      gridLineWidth: 0,\n      minorGridLineWidth: 0,\n      visible: true,\n      plotLines: pltLines\n    },\n    title: {\n      text: \"\".concat(data.length.toLocaleString(\"cs\"), \" ob\\u011Bt\\xED covidu\")\n    },\n    legend: {\n      enabled: false\n    },\n    series: [{\n      type: \"scatter\",\n      color: \"#636363\",\n      fillOpacity: 1,\n      data: data,\n      marker: {\n        radius: 1\n      },\n      tooltip: {\n        followPointer: false,\n        headerFormat: \"\",\n        pointFormatter: function pointFormatter() {\n          var sel = data[this.index];\n          var dte = \"\".concat(parseInt(sel[2].split(\"-\")[2]), \". \").concat(parseInt(sel[2].split(\"-\")[1]), \". \").concat(sel[2].split(\"-\")[0]);\n          return \"\".concat(dte, \"<br>\").concat(sex[sel[3]], \" \").concat(sel[4], \" let, okres \").concat(muni[sel[5]]);\n        }\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./js/tecky.js?");

/***/ })

/******/ });