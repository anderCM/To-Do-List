"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #f8f9fa;\\r\\n}\\r\\n\\r\\ninput:disabled {\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n#main-tasks {\\r\\n  border-radius: 0;\\r\\n}\\r\\n\\r\\n#input-task,\\r\\n.input-task-added {\\r\\n  border: none;\\r\\n  width: 40vw;\\r\\n}\\r\\n\\r\\n.remove-icon {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.edit-icon {\\r\\n  cursor: all-scroll;\\r\\n}\\r\\n\\r\\n#input-task:focus,\\r\\n.input-task-added:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#delete-all-selected:hover {\\r\\n  cursor: pointer;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.edit-task {\\r\\n  background-color: bisque;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_CreateTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/CreateTasks.js */ \"./src/modules/CreateTasks.js\");\n/* harmony import */ var _modules_RemoveTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/RemoveTask.js */ \"./src/modules/RemoveTask.js\");\n\n\n\n\nconst inputText = document.getElementById('input-task');\n\ninputText.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    if (!inputText.value) {\n      alert('Please enter a Task to add first');\n      return;\n    }\n    const addTask = (0,_modules_CreateTasks_js__WEBPACK_IMPORTED_MODULE_1__.AddTask)(inputText.value);\n    (0,_modules_CreateTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(addTask);\n    inputText.value = '';\n  }\n});\n\n(0,_modules_CreateTasks_js__WEBPACK_IMPORTED_MODULE_1__.ShowAllTasks)();\n\nconst deleteAllSelected = document.getElementById('delete-all-selected');\ndeleteAllSelected.addEventListener('click', () => {\n  (0,_modules_RemoveTask_js__WEBPACK_IMPORTED_MODULE_2__.DeleteAllSelected)();\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/CreateTasks.js":
/*!************************************!*\
  !*** ./src/modules/CreateTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddTask\": () => (/* binding */ AddTask),\n/* harmony export */   \"ShowAllTasks\": () => (/* binding */ ShowAllTasks),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ReadTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadTasks.js */ \"./src/modules/ReadTasks.js\");\n/* harmony import */ var _UpdateTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateTasks.js */ \"./src/modules/UpdateTasks.js\");\n/* harmony import */ var _EditTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditTasks.js */ \"./src/modules/EditTasks.js\");\n/* harmony import */ var _RemoveTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemoveTask.js */ \"./src/modules/RemoveTask.js\");\n\n\n\n\n\nconst mainUl = document.getElementById('main-tasks');\n\nconst AddTask = (description) => {\n  const lastTask = (0,_ReadTasks_js__WEBPACK_IMPORTED_MODULE_0__.GetLastTask)();\n  const getLocalData = (0,_ReadTasks_js__WEBPACK_IMPORTED_MODULE_0__.GetTasks)();\n  const newTask = {\n    id: lastTask.id,\n    description,\n    completed: false,\n    index: lastTask.index,\n  };\n  getLocalData.push(newTask);\n  (0,_UpdateTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getLocalData);\n  return newTask;\n};\n\nconst DisplayTask = (task) => {\n  const {\n    id, description, completed,\n  } = task;\n\n  const mainLi = document.createElement('li');\n  mainLi.classList.add(\n    'list-group-item',\n    'd-flex',\n    'justify-content-between',\n  );\n  mainLi.id = id;\n\n  const checkPContainer = document.createElement('div');\n  checkPContainer.classList.add('d-flex', 'gap-3');\n\n  const checkBox = document.createElement('input');\n  checkBox.classList.add('form-check-input');\n  checkBox.type = 'checkbox';\n  checkBox.id = `check-${id}`;\n\n  if (completed) checkBox.checked = true;\n\n  const addedInputTask = document.createElement('input');\n  addedInputTask.value = description;\n  addedInputTask.setAttribute('type', 'text');\n  addedInputTask.disabled = true;\n  addedInputTask.classList.add('input-task-added');\n\n  checkPContainer.append(checkBox, addedInputTask);\n\n  const icon = document.createElement('div');\n  icon.id = `icon-container-${id}`;\n  icon.innerHTML = `<i id=\"icon-edit-${id}\" class=\"edit-icon fa-solid fa-ellipsis-vertical\"></i>`;\n\n  mainLi.append(checkPContainer, icon);\n  mainUl.append(mainLi);\n\n  const editIcon = document.getElementById(`icon-edit-${id}`);\n  editIcon.addEventListener('click', () => {\n    (0,_EditTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n  });\n\n  (0,_RemoveTask_js__WEBPACK_IMPORTED_MODULE_3__.SelectTask)(id);\n};\n\nconst ShowAllTasks = () => {\n  const getLocalData = (0,_ReadTasks_js__WEBPACK_IMPORTED_MODULE_0__.GetTasks)();\n  getLocalData?.map((task) => DisplayTask(task));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/CreateTasks.js?");

/***/ }),

/***/ "./src/modules/EditTasks.js":
/*!**********************************!*\
  !*** ./src/modules/EditTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UpdateIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateIndex.js */ \"./src/modules/UpdateIndex.js\");\n/* harmony import */ var _RemoveTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoveTask.js */ \"./src/modules/RemoveTask.js\");\n/* harmony import */ var _ReadTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadTasks.js */ \"./src/modules/ReadTasks.js\");\n/* harmony import */ var _UpdateTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateTasks.js */ \"./src/modules/UpdateTasks.js\");\n\n\n\n\n\nconst EditTask = (idTask) => {\n  const idLi = document.getElementById(idTask);\n  const addedInputTask = idLi.querySelector('input[type=text]');\n  const iconContainer = document.getElementById(`icon-container-${idTask}`);\n  idLi.classList.add('edit-task');\n  addedInputTask.classList.add('edit-task');\n  addedInputTask.disabled = false;\n  addedInputTask.focus();\n  iconContainer.innerHTML = `<i id=\"remove-task-${idTask}\" class=\"remove-icon fa-solid fa-trash-can\"></i>`;\n\n  const removeIcon = document.getElementById(`remove-task-${idTask}`);\n  if (removeIcon) {\n    removeIcon.addEventListener('click', () => {\n      let getLocalData = (0,_ReadTasks_js__WEBPACK_IMPORTED_MODULE_2__.GetTasks)();\n      getLocalData = (0,_RemoveTask_js__WEBPACK_IMPORTED_MODULE_1__.RemoveFromLocal)(getLocalData, idTask);\n      document.getElementById(idTask).remove();\n\n      (0,_UpdateIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getLocalData);\n      (0,_UpdateTasks_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(getLocalData);\n    });\n  }\n\n  addedInputTask.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      idLi.classList.remove('edit-task');\n      addedInputTask.classList.remove('edit-task');\n      addedInputTask.disabled = true;\n      iconContainer.innerHTML = `<i id=\"icon-edit-${idTask}\" class=\"edit-icon fa-solid fa-ellipsis-vertical\"></i>`;\n\n      const editIcon = document.getElementById(`icon-edit-${idTask}`);\n      editIcon.addEventListener('click', () => {\n        EditTask(idTask);\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/EditTasks.js?");

/***/ }),

/***/ "./src/modules/ReadTasks.js":
/*!**********************************!*\
  !*** ./src/modules/ReadTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetLastTask\": () => (/* binding */ GetLastTask),\n/* harmony export */   \"GetTasks\": () => (/* binding */ GetTasks)\n/* harmony export */ });\nlet tasks = [];\n\nconst GetTasks = () => {\n  tasks = !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks'));\n  return tasks;\n};\n\nconst GetLastTask = () => {\n  let id = 1;\n  let index = 1;\n  const getLocalData = GetTasks();\n\n  if (getLocalData?.length > 0) {\n    const lastTask = getLocalData.slice(-1);\n    id = lastTask[0].id + 1;\n    index = lastTask[0].index + 1;\n  }\n  return { id, index };\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/ReadTasks.js?");

/***/ }),

/***/ "./src/modules/RemoveTask.js":
/*!***********************************!*\
  !*** ./src/modules/RemoveTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeleteAllSelected\": () => (/* binding */ DeleteAllSelected),\n/* harmony export */   \"RemoveFromLocal\": () => (/* binding */ RemoveFromLocal),\n/* harmony export */   \"SelectTask\": () => (/* binding */ SelectTask)\n/* harmony export */ });\n/* harmony import */ var _UpdateIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateIndex.js */ \"./src/modules/UpdateIndex.js\");\n/* harmony import */ var _ReadTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadTasks.js */ \"./src/modules/ReadTasks.js\");\n/* harmony import */ var _UpdateTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateTasks.js */ \"./src/modules/UpdateTasks.js\");\n\n\n\n\nlet taskToDelete = [];\n\nconst RemoveFromLocal = (tasks, taskId) => tasks.filter((task) => taskId !== task.id);\n\nconst SelectTask = (idTask) => {\n  const mainLi = document.getElementById(idTask);\n  const checkBox = document.getElementById(`check-${idTask}`);\n  const addedInputTask = mainLi.querySelector('input[type=text]');\n  checkBox.addEventListener('change', function select() {\n    const getLocalData = (0,_ReadTasks_js__WEBPACK_IMPORTED_MODULE_1__.GetTasks)();\n    const findIndex = getLocalData.findIndex((task) => task.id === idTask);\n    if (this.checked) {\n      addedInputTask.classList.add('text-decoration-line-through');\n      taskToDelete.push(idTask);\n      getLocalData[findIndex].completed = true;\n      (0,_UpdateTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getLocalData);\n      return;\n    }\n    addedInputTask.classList.remove('text-decoration-line-through');\n    taskToDelete = taskToDelete.filter(((task) => idTask !== task));\n    getLocalData[findIndex].completed = false;\n    (0,_UpdateTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getLocalData);\n  });\n};\n\nconst DeleteAllSelected = () => {\n  if (taskToDelete.length === 0) {\n    alert('Please select at least 1 task first');\n    return;\n  }\n  let getLocalData = (0,_ReadTasks_js__WEBPACK_IMPORTED_MODULE_1__.GetTasks)();\n  taskToDelete.map((taskId) => {\n    getLocalData = RemoveFromLocal(getLocalData, taskId);\n    return document.getElementById(taskId).remove();\n  });\n  (0,_UpdateIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getLocalData);\n  (0,_UpdateTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getLocalData);\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/RemoveTask.js?");

/***/ }),

/***/ "./src/modules/UpdateIndex.js":
/*!************************************!*\
  !*** ./src/modules/UpdateIndex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UpdateIndex = (tasks) => {\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateIndex);\n\n//# sourceURL=webpack://to-do-list/./src/modules/UpdateIndex.js?");

/***/ }),

/***/ "./src/modules/UpdateTasks.js":
/*!************************************!*\
  !*** ./src/modules/UpdateTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst StoreTask = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/UpdateTasks.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);