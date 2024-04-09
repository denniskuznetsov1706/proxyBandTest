/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.jsx":
/*!****************************!*\
  !*** ./src/client/App.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UserList */ \"./src/client/components/UserList.jsx\");\n/* harmony import */ var _components_UserPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UserPosts */ \"./src/client/components/UserPosts.jsx\");\n/* harmony import */ var _components_UserAlbums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserAlbums */ \"./src/client/components/UserAlbums.jsx\");\n/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NotFound */ \"./src/client/components/NotFound.jsx\");\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_UserList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/users/:id/posts\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_UserPosts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/users/:id/albums\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_UserAlbums__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"*\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://proxyband/./src/client/App.jsx?");

/***/ }),

/***/ "./src/client/components/Album.jsx":
/*!*****************************************!*\
  !*** ./src/client/components/Album.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction Album(_ref) {\n  var albumId = _ref.albumId,\n    title = _ref.title;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    photos = _useState2[0],\n    setPhotos = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://jsonplaceholder.typicode.com/photos?albumId=\".concat(albumId)).then(function (response) {\n      setPhotos(response.data.slice(0, 5));\n    })[\"catch\"](function (error) {\n      return console.error(\"There was an error fetching the photos\", error);\n    });\n  }, [albumId]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.albumContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.photoContainer\n  }, photos.map(function (photo) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: photo.id,\n      style: styles.photoItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: photo.thumbnailUrl,\n      alt: photo.title,\n      style: styles.photo\n    }));\n  })));\n}\nvar styles = {\n  albumContainer: {\n    marginBottom: '20px'\n  },\n  photoContainer: {\n    display: 'flex',\n    flexWrap: 'wrap'\n  },\n  photoItem: {\n    margin: '10px'\n  },\n  photo: {\n    display: 'block',\n    width: '150px'\n  },\n  viewAllLink: {\n    display: 'block',\n    marginTop: '10px',\n    color: '#007bff',\n    textDecoration: 'none'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Album);\n\n//# sourceURL=webpack://proxyband/./src/client/components/Album.jsx?");

/***/ }),

/***/ "./src/client/components/NotFound.jsx":
/*!********************************************!*\
  !*** ./src/client/components/NotFound.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.heading\n  }, \"404 - Page Not Found\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    style: styles.message\n  }, \"The page you are looking for does not exist.\"));\n}\nvar styles = {\n  container: {\n    padding: '20px',\n    fontFamily: 'Arial, sans-serif'\n  },\n  heading: {\n    color: '#333',\n    fontSize: '24px',\n    marginBottom: '10px'\n  },\n  message: {\n    color: '#555',\n    fontSize: '18px'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://proxyband/./src/client/components/NotFound.jsx?");

/***/ }),

/***/ "./src/client/components/UserAlbums.jsx":
/*!**********************************************!*\
  !*** ./src/client/components/UserAlbums.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Album__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Album */ \"./src/client/components/Album.jsx\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction UserAlbums() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    albums = _useState2[0],\n    setAlbums = _useState2[1];\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),\n    id = _useParams.id;\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://jsonplaceholder.typicode.com/albums?userId=\".concat(id)).then(function (response) {\n      console.log('albums', response.data);\n      setAlbums(response.data);\n    })[\"catch\"](function (error) {\n      return console.error(\"There was an error fetching the albums\", error);\n    });\n  }, [id]);\n  var handleBackClick = function handleBackClick() {\n    history('/');\n  };\n  var styles = {\n    backButton: {\n      marginBottom: '20px',\n      backgroundColor: '#007bff',\n      color: '#fff',\n      border: 'none',\n      borderRadius: '5px',\n      padding: '10px 20px',\n      cursor: 'pointer',\n      textDecoration: 'none',\n      display: 'inline-block'\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Information about users Albums\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"Information about users Albums\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"User Albums\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.backButton,\n    onClick: handleBackClick\n  }, \"Back to Main Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, albums.map(function (album) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Album__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: album.id,\n      albumId: album.id,\n      title: album.title\n    });\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAlbums);\n\n//# sourceURL=webpack://proxyband/./src/client/components/UserAlbums.jsx?");

/***/ }),

/***/ "./src/client/components/UserList.jsx":
/*!********************************************!*\
  !*** ./src/client/components/UserList.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction UserList() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    users = _useState2[0],\n    setUsers = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    searchQuery = _useState4[0],\n    setSearchQuery = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('asc'),\n    _useState6 = _slicedToArray(_useState5, 2),\n    sortOrder = _useState6[0],\n    setSortOrder = _useState6[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get('https://jsonplaceholder.typicode.com/users').then(function (response) {\n      setUsers(response.data);\n    })[\"catch\"](function (error) {\n      return console.error(\"There was an error!\", error);\n    });\n  }, []);\n  var filteredUsers = users.filter(function (user) {\n    return user.username.toLowerCase().includes(searchQuery.toLowerCase()) || user.name.toLowerCase().includes(searchQuery.toLowerCase());\n  });\n  var handleSearchInputChange = function handleSearchInputChange(event) {\n    setSearchQuery(event.target.value);\n  };\n  var handleSortChange = function handleSortChange() {\n    var newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';\n    setSortOrder(newSortOrder);\n  };\n  var sortedUsers = _toConsumableArray(filteredUsers).sort(function (a, b) {\n    if (sortOrder === 'asc') {\n      return a.username.localeCompare(b.username);\n    } else {\n      return b.username.localeCompare(a.username);\n    }\n  });\n  var styles = {\n    container: {\n      padding: '20px',\n      fontFamily: 'Arial, sans-serif'\n    },\n    header: {\n      color: '#333'\n    },\n    searchInput: {\n      marginBottom: '20px',\n      padding: '8px',\n      fontSize: '16px',\n      width: '100%',\n      boxSizing: 'border-box'\n    },\n    userList: {\n      listStyle: 'none',\n      padding: 0\n    },\n    userItem: {\n      background: '#f9f9f9',\n      border: '1px solid #ddd',\n      borderRadius: '5px',\n      padding: '10px',\n      margin: '10px 0',\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '8px'\n    },\n    userInfo: {\n      fontSize: '16px',\n      color: '#555'\n    },\n    link: {\n      color: '#007bff',\n      textDecoration: 'none'\n    },\n    blockLink: {\n      display: 'flex'\n    },\n    sortButton: {\n      cursor: 'pointer',\n      color: '#007bff',\n      textDecoration: 'underline',\n      marginLeft: '10px'\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Information about users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"Information about users\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    style: styles.header\n  }, \"User List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Search by username or name \",\n    value: searchQuery,\n    onChange: handleSearchInputChange,\n    style: styles.searchInput\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Sort by username:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.sortButton,\n    onClick: handleSortChange\n  }, sortOrder === 'asc' ? 'Asc' : 'Desc')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    style: styles.userList\n  }, sortedUsers.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: user.id,\n      style: styles.userItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.userInfo\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Username:\"), \" \", user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.userInfo\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Email:\"), \" \", user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.userInfo\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Name:\"), \" \", user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.userInfo\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Phone:\"), \" \", user.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.userInfo\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Company:\"), \" \", user.company.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.userInfo\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Website:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      href: \"http://\".concat(user.website),\n      style: styles.link,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\"\n    }, user.website)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.blockLink\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: \"/users/\".concat(user.id, \"/posts\"),\n      style: styles.link\n    }, \"Posts\"), \"\\xA0|\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: \"/users/\".concat(user.id, \"/albums\"),\n      style: styles.link\n    }, \"Albums\")));\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);\n\n//# sourceURL=webpack://proxyband/./src/client/components/UserList.jsx?");

/***/ }),

/***/ "./src/client/components/UserPosts.jsx":
/*!*********************************************!*\
  !*** ./src/client/components/UserPosts.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction UserPosts() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    posts = _useState2[0],\n    setPosts = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n    _useState4 = _slicedToArray(_useState3, 2),\n    user = _useState4[0],\n    setUser = _useState4[1];\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),\n    id = _useParams.id;\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://jsonplaceholder.typicode.com/posts?userId=\".concat(id)).then(function (response) {\n      setPosts(response.data);\n    })[\"catch\"](function (error) {\n      return console.error(\"There was an error fetching the posts\", error);\n    });\n  }, [id]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://jsonplaceholder.typicode.com/users/\".concat(id)).then(function (response) {\n      setUser(response.data);\n    })[\"catch\"](function (error) {\n      return console.error(\"There was an error fetching the user\", error);\n    });\n  }, [id]);\n  var handleBackClick = function handleBackClick() {\n    history('/');\n  };\n  var styles = {\n    container: {\n      padding: '20px',\n      fontFamily: 'Arial, sans-serif'\n    },\n    header: {\n      color: '#333',\n      marginBottom: '20px'\n    },\n    backButton: {\n      marginBottom: '20px',\n      backgroundColor: '#007bff',\n      color: '#fff',\n      border: 'none',\n      borderRadius: '5px',\n      padding: '10px 20px',\n      cursor: 'pointer',\n      textDecoration: 'none',\n      display: 'inline-block'\n    },\n    postList: {\n      listStyle: 'none',\n      padding: 0\n    },\n    postItem: {\n      background: '#f9f9f9',\n      border: '1px solid #ddd',\n      borderRadius: '5px',\n      padding: '20px',\n      marginBottom: '20px'\n    },\n    postTitle: {\n      fontSize: '20px',\n      marginBottom: '10px'\n    },\n    postBody: {\n      fontSize: '16px'\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Information about user's post \".concat(user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"Information about user's post \".concat(user.name)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    style: styles.header\n  }, \"User Posts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.backButton,\n    onClick: handleBackClick\n  }, \"Back to Main Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"User Information:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Name:\"), \" \", user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Username:\"), \" \", user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Email:\"), \" \", user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Phone:\"), \" \", user.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Website:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"http://\".concat(user.website),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, user.website)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"User Posts:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    style: styles.postList\n  }, posts.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: post.id,\n      style: styles.postItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n      style: styles.postTitle\n    }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      style: styles.postBody\n    }, post.body));\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPosts);\n\n//# sourceURL=webpack://proxyband/./src/client/components/UserPosts.jsx?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.jsx\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, 'public')));\napp.get('*', function (req, res) {\n  var context = {};\n  var appMarkup = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet.renderStatic();\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, 'public/index.html');\n  console.log(indexFile);\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Something went wrong!');\n    }\n    var html = data.replace('<title></title>', helmet.title.toString() + helmet.meta.toString()).replace('<div id=\"app\"></div>', \"<div id=\\\"app\\\">\".concat(appMarkup, \"</div>\"));\n    return res.send(html);\n  });\n});\napp.listen(3000, function () {\n  console.log('Server is running on http://localhost:3000');\n});\n\n//# sourceURL=webpack://proxyband/./src/server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;