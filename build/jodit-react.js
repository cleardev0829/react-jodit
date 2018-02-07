(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["JoditEditor"] = factory(require("react"));
	else
		root["JoditEditor"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JoditEditor = __webpack_require__(1);

var _JoditEditor2 = _interopRequireDefault(_JoditEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _JoditEditor2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _jodit = __webpack_require__(3);

var _jodit2 = _interopRequireDefault(_jodit);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JoditEditor = function (_Component) {
    _inherits(JoditEditor, _Component);

    function JoditEditor() {
        _classCallCheck(this, JoditEditor);

        return _possibleConstructorReturn(this, (JoditEditor.__proto__ || Object.getPrototypeOf(JoditEditor)).apply(this, arguments));
    }

    _createClass(JoditEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.editor = new _jodit2.default(this.refs.element);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.editor && this.editor.destruct();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('textarea', { ref: 'element' });
        }
    }]);

    return JoditEditor;
}(_react.Component);

exports.default = JoditEditor;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * 
 *    jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 *    Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 *    Version: v3.1.28
 *    Url: https://xdsoft.net/jodit/
 *    License(s): SEE LICENSE IN <LICENSE>
 * 
 */
!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Jodit = t() : e.Jodit = t();
}("undefined" != typeof self ? self : undefined, function () {
  return function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;var i = o[n] = { i: n, l: !1, exports: {} };return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
    }var o = {};return t.m = e, t.c = o, t.d = function (e, o, n) {
      t.o(e, o) || Object.defineProperty(e, o, { configurable: !1, enumerable: !0, get: n });
    }, t.n = function (e) {
      var o = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(o, "a", o), o;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/build/", t(t.s = 20);
  }([function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(2),
        i = o(3),
        r = {},
        s = r.toString,
        a = r.hasOwnProperty;t.isIE = function () {
      return -1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent);
    };var l = 1;t.$$ = function (e, o) {
      var n;if (!/:scope/.test(e) || !t.isIE() || "undefined" != typeof HTMLDocument && o instanceof HTMLDocument) n = o.querySelectorAll(e);else {
        var i = o.id,
            r = i || "_selector_id_" + ("" + Math.random()).slice(2) + l++;e = e.replace(/:scope/g, "#" + r), !i && o.setAttribute("id", r), n = o.parentNode.querySelectorAll(e), i || o.removeAttribute("id");
      }return [].slice.call(n);
    }, t.isWindow = function (e) {
      return null !== e && e === e.window;
    }, t.type = function (e) {
      return null === e ? "null" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? r[s.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }, t.each = function (e, t) {
      var o, n, i;if (Array.isArray(e)) {
        for (o = e.length, i = 0; o > i; i += 1) {
          if (!1 === t.call(e[i], i, e[i])) return !1;
        }
      } else for (n = Object.keys(e), i = 0; n.length > i; i += 1) {
        if (!1 === t.call(e[n[i]], n[i], e[n[i]])) return !1;
      }return e;
    }, t.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "HTMLDocument", "Window", "HTMLElement", "HTMLBodyElement", "Text", "DocumentFragment"], function (e, t) {
      r["[object " + t + "]"] = t.toLowerCase();
    }), t.inArray = function (e, t) {
      return -1 !== t.indexOf(e);
    }, t.isPlainObject = function (e) {
      return !("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || e.nodeType || t.isWindow(e) || e.constructor && !a.call(e.constructor.prototype, "isPrototypeOf"));
    }, t.extend = function () {
      for (var e = [], o = 0; arguments.length > o; o++) {
        e[o] = arguments[o];
      }var n,
          i,
          r,
          s,
          a,
          l,
          c,
          d,
          u = e[0] || {},
          p = 1,
          f = e.length,
          h = !1;for ("boolean" == typeof u && (h = u, u = e[p] || {}, p += 1), "object" != (typeof u === "undefined" ? "undefined" : _typeof(u)) && "function" === t.type(u) && (u = {}), p === f && (u = this, p += 1), p; f > p; p += 1) {
        if (null !== (n = e[p]) && void 0 !== n) for (d = Object.keys(n), c = 0; d.length > c; c += 1) {
          i = d[c], r = u[i], s = n[i], u !== s && (h && s && (t.isPlainObject(s) || Array.isArray(s)) ? (a = Array.isArray(s), a ? (a = !1, l = r && Array.isArray(r) ? r : []) : l = r && t.isPlainObject(r) ? r : {}, u[i] = t.extend(h, l, s)) : void 0 !== s && (u[i] = s));
        }
      }return u;
    }, t.trim = function (e) {
      return e.replace(n.SPACE_REG_EXP_START, "").replace(n.SPACE_REG_EXP_END, "");
    }, t.colorToHex = function (e) {
      if ("rgba(0, 0, 0, 0)" === e || "" === e) return !1;if (!e) return "#000000";if ("#" === e.substr(0, 1)) return e;var t,
          o,
          n,
          i,
          r,
          s = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);if (!s) return "#000000";for (o = parseInt(s[2], 10), n = parseInt(s[3], 10), i = parseInt(s[4], 10), r = i | n << 8 | o << 16, t = r.toString(16).toUpperCase(); 6 > t.length;) {
        t = "0" + t;
      }return s[1] + "#" + t;
    }, t.normalizeColor = function (e) {
      var o,
          n = ["#"],
          i = t.colorToHex(e);if (!i) return !1;if (i = t.trim(i.toUpperCase()), i = i.substr(1), 3 === i.length) {
        for (o = 0; 3 > o; o += 1) {
          n.push(i[o]), n.push(i[o]);
        }return n.join("");
      }return i.length > 6 && (i = i.substr(0, 6)), "#" + i;
    }, t.normalizeSize = function (e) {
      return (/^[0-9]+$/.test("" + e) ? e + "px" : "" + e
      );
    }, t.getContentWidth = function (e, t) {
      var o = function o(e) {
        return parseInt(e, 10);
      },
          n = t.getComputedStyle(e);return e.offsetWidth - o(n.getPropertyValue("padding-left") || "0") - o(n.getPropertyValue("padding-right") || "0");
    }, t.ctrlKey = function (e) {
      if (-1 !== navigator.userAgent.indexOf("Mac OS X")) {
        if (e.metaKey && !e.altKey) return !0;
      } else if (e.ctrlKey && !e.altKey) return !0;return !1;
    };var c = function c(e) {
      return "file:" === window.location.protocol && /^\/\//.test(e) && (e = "https:" + e), e;
    };t.appendScript = function (e, t, o, n) {
      void 0 === o && (o = "");var i = n.createElement("script");i.className = o, i.type = "text/javascript", i.charset = "utf-8", i.src = c(e), void 0 !== t && (i.onload = t), n.body.appendChild(i);
    }, t.dom = function (e, t) {
      if (e instanceof t.defaultView.HTMLElement) return e;var o = t.createElement("div");return o.innerHTML = e, o.firstChild === o.lastChild && o.firstChild ? o.firstChild : o;
    }, t.hexToRgb = function (e) {
      e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, o, n) {
        return t + t + o + o + n + n;
      });var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
    }, t.clear = function (e, o) {
      return void 0 === o && (o = !1), e = t.trim(e).replace(n.INVISIBLE_SPACE_REG_EXP, "").replace(/[\s]*class=""/g, ""), o && (e = e.replace(/<p[^>]*>[\s\n\r\t]*(&nbsp;|<br>|<br\/>)?[\s\n\r\t]*<\/p>[\n\r]*/g, "")), e;
    }, t.htmlentities = function (e) {
      return e.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/"/gi, "&quot;").replace(/'/gi, "&apos;");
    }, t.isURL = function (e) {
      return RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e);
    }, t.pathNormalize = function (e) {
      return e.replace(/([^:])[\\\/]+/g, "$1/");
    }, t.urlNormalize = function (e) {
      return e.replace(/([^:])[\\\/]+/g, "$1/");
    }, t.isHTML = function (e) {
      return (/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(e)
      );
    }, t.isHTMLFromWord = function (e) {
      return -1 !== e.search(/<meta.*?Microsoft Excel\s[\d].*?>/) || -1 !== e.search(/<meta.*?Microsoft Word\s[\d].*?>/) || -1 !== e.search(/style="[^"]*mso-/) && -1 !== e.search(/<font/);
    }, t.humanSizeToBytes = function (e) {
      if (/^[0-9.]+$/.test("" + e)) return parseFloat(e);var t = e.substr(-2, 2).toUpperCase(),
          o = ["KB", "MB", "GB", "TB"],
          n = parseFloat(e.substr(0, e.length - 2));return -1 !== o.indexOf(t) ? n * Math.pow(1024, o.indexOf(t) + 1) : parseInt(e, 10);
    }, t.parseQuery = function (e) {
      var t,
          o,
          n = {},
          i = e.substr(1).split("&");for (t = 0; i.length > t; t += 1) {
        o = i[t].split("="), n[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
      }return n;
    }, t.convertMediaURLToVideoEmbed = function (e, o, n) {
      if (void 0 === o && (o = 400), void 0 === n && (n = 345), !t.isURL(e)) return e;var i = document.createElement("a"),
          r = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;switch (i.href = e, o || (o = 400), n || (n = 345), i.hostname) {case "www.vimeo.com":case "vimeo.com":
          return r.test(e) ? e.replace(r, '<iframe width="' + o + '" height="' + n + '" src="//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : e;case "youtube.com":case "www.youtube.com":case "youtu.be":case "www.youtu.be":
          var s = i.search ? t.parseQuery(i.search) : { v: i.pathname.substr(1) };return s.v ? '<iframe width="' + o + '" height="' + n + '" src="//www.youtube.com/embed/' + s.v + '" frameborder="0" allowfullscreen></iframe>' : e;}return e;
    }, t.browser = function (e) {
      var t = navigator.userAgent.toLowerCase(),
          o = /(firefox)[\s\/]([\w.]+)/.exec(t) || /(chrome)[\s\/]([\w.]+)/.exec(t) || /(webkit)[\s\/]([\w.]+)/.exec(t) || /(opera)(?:.*version)[\s\/]([\w.]+)/.exec(t) || /(msie)[\s]([\w.]+)/.exec(t) || /(trident)\/([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") || [];return "version" === e ? o[2] : "webkit" === e ? "chrome" === o[1] || "webkit" === o[1] : "ff" === e ? "firefox" === o[1] : "msie" === e ? "trident" === o[1] || "msie" === o[1] : o[1] === e;
    }, t.offset = function (e, o, n) {
      void 0 === n && (n = !1);var i,
          r,
          s = e.getBoundingClientRect(),
          a = e.ownerDocument,
          l = a.body,
          c = a.documentElement,
          d = a.defaultView || a.parentWindow,
          u = d.pageYOffset || c.scrollTop || l.scrollTop,
          p = d.pageXOffset || c.scrollLeft || l.scrollLeft,
          f = c.clientTop || l.clientTop || 0,
          h = c.clientLeft || l.clientLeft || 0;if (!n && o.options.iframe) {
        var m = t.offset(o.iframe, o, !0),
            v = m.top,
            g = m.left;i = s.top + v, r = s.left + g;
      } else i = s.top + u - f, r = s.left + p - h;return { top: Math.round(i), left: Math.round(r), width: s.width, height: s.height };
    }, t.camelCase = function (e) {
      return e.replace(/-(.)/g, function (e, t) {
        return t.toUpperCase();
      });
    }, t.fromCamelCase = function (e) {
      return e.replace(/([A-Z]+)/g, function (e, t) {
        return "-" + t.toLowerCase();
      });
    }, t.htmlspecialchars = function (e) {
      var t = document.createElement("div");return t.innerText = e, t.innerHTML;
    }, t.debounce = function (e, t, o, n) {
      3 === arguments.length && "boolean" != typeof o && (n = o, o = !1);var i = 0;return function () {
        var r = arguments;n = n || this, (o && !i || !t) && e.apply(n, r), t && (clearTimeout(i), i = window.setTimeout(function () {
          o || e.apply(n, r), i = 0;
        }, t));
      };
    }, t.throttle = function (e, t, o) {
      var n,
          i,
          _r,
          s = null;return function () {
        n = arguments, i = !0, o = o || this, s || (_r = function r() {
          i ? (e.apply(o, n), i = !1, s = setTimeout(_r, t)) : s = null;
        })();
      };
    }, t.normilizeCSSValue = function (e, t) {
      switch (e) {case "font-weight":
          return "bold" === t ? 700 : t;}return t;
    }, t.css = function (e, o, n, i) {
      void 0 === i && (i = !1);var r = /^left|top|bottom|right|width|min|max|height|margin|padding|font-size/i;if (t.isPlainObject(o) || void 0 !== n) {
        var s = function s(e, o, n) {
          void 0 !== n && null !== n && r.test(o) && /^[\-+]?[0-9.]+$/.test("" + n) && (n = parseInt("" + n, 10) + "px"), void 0 !== n && t.css(e, o, void 0, !0) !== t.normilizeCSSValue(o, n) && (e.style[o] = n);
        };if (t.isPlainObject(o)) {
          var a = Object.keys(o),
              l = void 0;for (l = 0; a.length > l; l += 1) {
            s(e, t.camelCase(a[l]), o[a[l]]);
          }
        } else s(e, t.camelCase(o), n);return "";
      }var c = t.fromCamelCase(o),
          d = e.ownerDocument,
          u = !!d && (d.defaultView || d.parentWindow),
          p = e.style[o],
          f = void 0 !== p && "" !== p ? p : u && !i ? u.getComputedStyle(e).getPropertyValue(c) : "";return r.test(o) && /^[\-+]?[0-9.]+px$/.test("" + f) && (f = parseInt(f, 10)), t.normilizeCSSValue(o, f);
    }, t.asArray = function (e) {
      return Array.isArray(e) ? e : [e];
    }, t.sprintf = function () {
      for (var e = [], t = 0; arguments.length > t; t++) {
        e[t] = arguments[t];
      }var o = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g,
          n = e,
          i = 0,
          r = n[i++],
          s = function s(e, t, o, n) {
        var i = t > e.length ? Array(1 + t - e.length >>> 0).join(o) : "";return n ? e + i : i + e;
      },
          a = function a(e, t, o, n, i) {
        var r = n - e.length;return r > 0 && (e = o || !i ? s(e, n, " ", o) : e.slice(0, t.length) + s("", r, "0", !0) + e.slice(t.length)), e;
      },
          l = function l(e, t, o, n, i, r, _l) {
        var c = e >>> 0;o = o && c && { 2: "0b", 8: "0", 16: "0x" }[t] || "";var d = o + s(c.toString(t), r || 0, "0", !1);return a(d, o, n, i, _l);
      },
          c = function c(e, t, o, n, i) {
        return null != n && (e = e.slice(0, n)), a(e, "", t, o, i);
      };return r.replace(o, function (e, t, o, r, d, u, p) {
        if ("%%" == e) return "%";for (var f = !1, h = "", m = !1, v = !1, g = 0; o && o.length > g; g++) {
          switch (o.charAt(g)) {case " ":
              h = " ";break;case "+":
              h = "+";break;case "-":
              f = !0;break;case "0":
              m = !0;break;case "#":
              v = !0;}
        }if (r = r ? "*" === r ? +n[i++] : "*" === ("" + r)[0] ? +n[("" + r).slice(1, -1)] : +r : 0, 0 > r && (r = -r, f = !0), !isFinite(r)) throw Error("sprintf: (minimum-)width must be finite");u = u ? "*" === u ? +n[i++] : "*" === u[0] ? +n[u.slice(1, -1)] : +u : "fFeE".indexOf(p) > -1 ? 6 : "d" == p ? 0 : void 0;var _ = t ? n[t.slice(0, -1)] : n[i++];switch (p) {case "s":
            return c(_ + "", f, r, u, m);case "c":
            return c(String.fromCharCode(+_), f, r, u, m);case "b":
            return l(_, 2, v, f, r, u, m);case "o":
            return l(_, 8, v, f, r, u, m);case "x":
            return l(_, 16, v, f, r, u, m);case "X":
            return l(_, 16, v, f, r, u, m).toUpperCase();case "u":
            return l(_, 10, v, f, r, u, m);case "i":case "d":
            var b = parseInt("" + _, 10),
                y = 0 > b ? "-" : h;return _ = y + s(Math.abs(b) + "", u, "0", !1), a(_, y, f, r, m);case "e":case "E":case "f":case "F":case "g":case "G":
            var b = +_,
                y = 0 > b ? "-" : h,
                w = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(p.toLowerCase())],
                C = ["toString", "toUpperCase"]["eEfFgG".indexOf(p) % 2];return _ = y + Math.abs(b)[w](u), a(_, y, f, r, m)[C]();default:
            return e;}
      });
    }, t.val = function (e, t, o) {
      var n = e.querySelector(t);return n ? (o && (n.value = o), n.value) : "";
    }, t.defaultLanguage = function (e) {
      return "auto" === e || void 0 === e ? document.documentElement.lang || navigator.language && navigator.language.substr(0, 2) || !!navigator.browserLanguage && navigator.browserLanguage.substr(0, 2) || "en" : e;
    }, t.normalizeNode = function (e) {
      if (e) {
        if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.parentNode) for (; e.nextSibling && e.nextSibling.nodeType === Node.TEXT_NODE;) {
          null !== e.nextSibling.nodeValue && (e.nodeValue += e.nextSibling.nodeValue), e.nodeValue = e.nodeValue.replace(n.INVISIBLE_SPACE_REG_EXP, ""), e.parentNode.removeChild(e.nextSibling);
        } else t.normalizeNode(e.firstChild);t.normalizeNode(e.nextSibling);
      }
    }, t.cleanFromWord = function (e) {
      -1 !== e.indexOf("<html ") && (e = e.substring(e.indexOf("<html "), e.length), e = e.substring(0, e.lastIndexOf("</html>") + 7));var t = "";try {
        var o = document.createElement("div");o.innerHTML = e;var n = [];o.firstChild && i.Dom.all(o, function (e) {
          switch (e.nodeType) {case Node.ELEMENT_NODE:
              "FONT" === e.nodeName ? i.Dom.unwrap(e) : [].slice.call(e.attributes).forEach(function (t) {
                -1 === ["src", "href", "rel", "content"].indexOf(t.name.toLowerCase()) && e.removeAttribute(t.name);
              });break;case Node.TEXT_NODE:
              break;default:
              n.push(e);}
        }), n.forEach(function (e) {
          return e.parentNode && e.parentNode.removeChild(e);
        }), t = o.innerHTML;
      } catch (e) {}return t && (e = t), e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "");
    }, t.applyStyles = function (e) {
      if (-1 === e.indexOf("<html ")) return e;e = e.substring(e.indexOf("<html "), e.length), e = e.substring(0, e.lastIndexOf("</html>") + 7);var o = document.createElement("iframe");o.style.display = "none", document.body.appendChild(o);var n = "",
          i = [],
          r = [];try {
        var s = o.contentDocument || o.contentWindow.document;s.open(), s.write(e), s.close(), s.styleSheets.length && (r = s.styleSheets[s.styleSheets.length - 1].cssRules);for (var a = 0; r.length > a; a += 1) {
          !function (e) {
            if ("" === r[e].selectorText) return "continue";i = t.$$(r[e].selectorText, s.body), i.forEach(function (t) {
              t.style.cssText += r[e].style.cssText.replace(/mso-[a-z\-]+:[\s]*[^;]+;/g, "").replace(/border[a-z\-]*:[\s]*[^;]+;/g, "");
            });
          }(a);
        }n = s.firstChild ? s.body.innerHTML : "";
      } catch (e) {} finally {
        o.parentNode && o.parentNode.removeChild(o);
      }return n && (e = n), e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "");
    }, t.inView = function (e) {
      var t = e.getBoundingClientRect(),
          o = t.top,
          n = t.height,
          i = e.parentNode;do {
        if (i) {
          if (t = i.getBoundingClientRect(), t.bottom >= o == 0) return !1;if (t.top >= o + n) return !1;i = i.parentNode;
        }
      } while (i && i != document.body);return o <= document.documentElement.clientHeight;
    }, t.scrollIntoView = function (e, o) {
      t.inView(e) || (o.clientHeight !== o.scrollHeight && (o.scrollTop = e.offsetTop), t.inView(e) || e.scrollIntoView());
    };
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(2),
        i = o(0),
        r = o(8),
        s = r.Widget.TabsWidget,
        a = r.Widget.ImageSelectorWidget,
        l = o(5),
        c = function () {
      function e() {
        this.ownerDocument = document, this.ownerWindow = window, this.zIndex = 0, this.readonly = !1, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots"], this.toolbarButtonSize = "middle", this.theme = "default", this.saveModeInCookie = !1, this.spellcheck = !0, this.editorCssClass = !1, this.triggerChangeEvent = !0, this.width = "auto", this.height = "auto", this.minHeight = 100, this.direction = "", this.language = "auto", this.debugLanguage = !1, this.i18n = "en", this.tabIndex = -1, this.toolbar = !0, this.enter = n.PARAGRAPH, this.defaultMode = n.MODE_WYSIWYG, this.useSplitMode = !1, this.colors = { greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"], palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"], full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"] }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraButtons = [], this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = ["source", "|", "bold", "strikethrough", "underline", "italic", "|", "ul", "ol", "|", "outdent", "indent", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "video", "table", "link", "|", "align", "undo", "redo", "|", "hr", "eraser", "copyformat", "|", "symbol", "fullsize", "print", "about"], this.buttonsMD = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "hr", "eraser", "copyformat", "fullsize", "dots"], this.buttonsSM = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "eraser", "copyformat", "fullsize", "dots"], this.buttonsXS = ["bold", "image", "|", "brush", "paragraph", "|", "align", "|", "undo", "redo", "|", "eraser", "dots"], this.events = {}, this.textIcons = !1;
      }return e;
    }();t.Config = c, c.prototype.controls = { print: { exec: function exec(e) {
          var t = window.open("", "PRINT");t && (e.options.iframe ? (e.events.fire("generateDocumentStructure.iframe", t.document), t.document.body.innerHTML = e.getEditorValue()) : (t.document.write("<html><head><title></title></head><body>" + e.getEditorValue() + "</body></html>"), t.document.close()), t.focus(), t.print(), t.close());
        }, mode: n.MODE_SOURCE + n.MODE_WYSIWYG }, about: { exec: function exec(e) {
          var t = e.getInstance("Dialog");t.setTitle(e.i18n("About Jodit")), t.setContent('<div class="jodit_about">                    <div>' + e.i18n("Jodit Editor") + " v." + e.getVersion() + " " + e.i18n("Free Non-commercial Version") + '</div><div><a href="http://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a></div><div><a href="http://xdsoft.net/jodit/doc/" target="_blank">' + e.i18n("Jodit User's Guide") + "</a> " + e.i18n("contains detailed help for using") + "</div><div>" + e.i18n("For information about the license, please go to our website:") + '</div><div><a href="http://xdsoft.net/jodit/license.html" target="_blank">http://xdsoft.net/jodit/license.html</a></div><div><a href="http://xdsoft.net/jodit/#download" target="_blank">' + e.i18n("Buy full version") + "</a></div><div>" + e.i18n("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.") + "</div></div>"), t.open();
        }, tooltip: "About Jodit", mode: n.MODE_SOURCE + n.MODE_WYSIWYG }, hr: { command: "insertHorizontalRule", tags: ["hr"], tooltip: "Insert Horizontal Line" }, image: { popup: function popup(e, t, o, n) {
          var r = function r(t) {
            e.selection.insertNode(i.dom('<img src="' + t + '"/>', e.editorDocument));
          },
              s = null;return t && t.nodeType !== Node.TEXT_NODE && ("IMG" === t.tagName || i.$$("img", t).length) && (s = "IMG" === t.tagName ? t : i.$$("img", t)[0]), a(e, { filebrowser: function filebrowser(e) {
              if (e.files && e.files.length) {
                var t = void 0;for (t = 0; e.files.length > t; t += 1) {
                  r(e.baseurl + e.files[t]);
                }
              }n();
            }, upload: function upload(e) {
              var t;if (e.files && e.files.length) for (t = 0; e.files.length > t; t += 1) {
                r(e.baseurl + e.files[t]);
              }n();
            }, url: function url(t, o) {
              var r = s || i.dom('<img src=""/>', e.editorDocument);r.setAttribute("src", t), r.setAttribute("alt", o), s || e.selection.insertNode(r), n();
            } }, s, n);
        }, tags: ["img"], tooltip: "Insert Image" }, video: { popup: function popup(e) {
          var t = i.dom('<form class="jodit_form">\n                        <input required name="code" placeholder="http://" type="url"/>\n                        <button type="submit">' + e.i18n("Insert") + "</button>\n                        </form>", e.ownerDocument),
              o = i.dom('<form class="jodit_form">\n                        <textarea required name="code" placeholder="' + e.i18n("Embed code") + '"></textarea>\n                        <button type="submit">' + e.i18n("Insert") + "</button>\n                        </form>", e.ownerDocument),
              n = {},
              r = e.selection.save(),
              a = function a(t) {
            e.selection.restore(r), e.selection.insertHTML(t);
          };return n[l.ToolbarIcon.getIcon("link") + "&nbsp;" + e.i18n("Link")] = t, n[l.ToolbarIcon.getIcon("source") + "&nbsp;" + e.i18n("Code")] = o, o.addEventListener("submit", function (e) {
            return e.preventDefault(), i.trim(i.val(o, "textarea[name=code]")) ? (a(i.val(o, "textarea[name=code]")), !1) : (o.querySelector("textarea[name=code]").focus(), o.querySelector("textarea[name=code]").classList.add("jodit_error"), !1);
          }), t.addEventListener("submit", function (e) {
            return e.preventDefault(), i.isURL(i.val(t, "input[name=code]")) ? (a(i.convertMediaURLToVideoEmbed(i.val(t, "input[name=code]"))), !1) : (t.querySelector("input[name=code]").focus(), t.querySelector("input[name=code]").classList.add("jodit_error"), !1);
          }), s(e, n);
        }, tags: ["iframe"], tooltip: "Insert youtube/vimeo video" } };
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.INVISIBLE_SPACE = "\uFEFF", t.INVISIBLE_SPACE_REG_EXP = /[\uFEFF]/g, t.SPACE_REG_EXP = /[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_START = /^[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_END = /[\s\n\t\r\uFEFF\u200b]+$/g, t.IS_BLOCK = /^(PRE|DIV|P|LI|H[1-6]|BLOCKQUOTE|TD|TH|TABLE|BODY|HTML)$/i, t.KEY_BACKSPACE = 8, t.KEY_TAB = 9, t.KEY_ENTER = 13, t.KEY_ESC = 27, t.KEY_LEFT = 37, t.KEY_TOP = 38, t.KEY_RIGHT = 39, t.KEY_BOTTOM = 40, t.KEY_DELETE = 46, t.KEY_F = 70, t.KEY_R = 82, t.KEY_Y = 89, t.KEY_Z = 90, t.KEY_F3 = 114, t.NEARBY = 5, t.ACCURACY = 10, t.BR = "br", t.PARAGRAPH = "P", t.MODE_WYSIWYG = 1, t.MODE_SOURCE = 2, t.MODE_SPLIT = 3, t.TEXT_PLAIN = -1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent) ? "text" : "text/plain", t.TEXT_HTML = -1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent) ? "text" : "text/html", t.MARKER_CLASS = "jodit_selection_marker", t.EMULATE_DBLCLICK_TIMEOUT = 300, t.JODIT_SELECTED_CELL_MARKER = "data-jodit-selected-cell";
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(2),
        i = o(0);t.Dom = function () {
      function e() {}return e.unwrap = function (e) {
        var t = e.parentNode,
            o = e;if (t) {
          for (; o.firstChild;) {
            t.insertBefore(o.firstChild, o);
          }t.removeChild(o);
        }
      }, e.each = function (t, o) {
        var n = t.firstChild;if (n) for (; n;) {
          if (!1 === o.call(n, n) || !1 === e.each(n, o)) return !1;n = e.next(n, function (e) {
            return !!e;
          }, t);
        }return !0;
      }, e.create = function (e, t, o) {
        var n;return e = e.toLowerCase(), "text" === e ? n = o.createTextNode("string" == typeof t ? t : "") : (n = o.createElement(e), void 0 !== t && (n.innerHTML = t)), n;
      }, e.replace = function (t, o, n, r, s) {
        void 0 === n && (n = !1), void 0 === r && (r = !1);var a = "string" == typeof o ? e.create(o, "", s) : o;if (!r) for (; t.firstChild;) {
          a.appendChild(t.firstChild);
        }return n && i.each(t.attributes, function (e, t) {
          a.setAttribute(t.name, t.nodeValue);
        }), t.parentNode && t.parentNode.replaceChild(a, t), a;
      }, e.isCell = function (t, o) {
        return e.isNode(t, o) && /^(td|th)$/i.test(t.nodeName);
      }, e.isImage = function (t, o) {
        return e.isNode(t, o) && /^(img|svg|picture|canvas)$/i.test(t.nodeName);
      }, e.isBlock = function (e) {
        return !!e && "string" == typeof e.nodeName && n.IS_BLOCK.test(e.nodeName);
      }, e.isInlineBlock = function (e) {
        return !!e && e.nodeType === Node.ELEMENT_NODE && -1 !== ["inline", "inline-block"].indexOf("" + i.css(e, "display"));
      }, e.canSplitBlock = function (e, t) {
        return e && e instanceof t.HTMLElement && this.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && void 0 !== e.style && !/^(fixed|absolute)/i.test(e.style.position);
      }, e.prev = function (t, o, n, i) {
        return void 0 === i && (i = !0), e.find(t, o, n, !1, "previousSibling", !!i && "lastChild");
      }, e.next = function (t, o, n, i) {
        return void 0 === i && (i = !0), e.find(t, o, n, void 0, void 0, i ? "firstChild" : "");
      }, e.find = function (t, o, n, i, r, s) {
        if (void 0 === i && (i = !1), void 0 === r && (r = "nextSibling"), void 0 === s && (s = "firstChild"), i && o(t)) return t;var a,
            l = t;do {
          if (a = l[r], o(a)) return a || !1;if (s && a && a[s]) {
            var c = e.find(a[s], o, a, !0, r, s);if (c) return c;
          }a || (a = l.parentNode), l = a;
        } while (l && l !== n);return !1;
      }, e.findWithCurrent = function (t, o, n, i, r) {
        void 0 === i && (i = "nextSibling"), void 0 === r && (r = "firstChild");var s = t;do {
          if (o(s)) return s || !1;if (r && s && s[r]) {
            var a = e.findWithCurrent(s[r], o, s, i, r);if (a) return a;
          }for (; s && !s[i] && s !== n;) {
            s = s.parentNode;
          }s && s[i] && s !== n && (s = s[i]);
        } while (s && s !== n);return !1;
      }, e.isEmptyTextNode = function (e) {
        return e && e.nodeType === Node.TEXT_NODE && (!e.nodeValue || 0 === e.nodeValue.replace(n.INVISIBLE_SPACE_REG_EXP, "").length);
      }, e.isEmpty = function (t) {
        return !t || (t.nodeType === Node.TEXT_NODE ? null === t.nodeValue || 0 === i.trim(t.nodeValue).length : e.each(t, function (e) {
          if (e && e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && 0 !== i.trim(e.nodeValue).length || e && e.nodeType === Node.ELEMENT_NODE && e.nodeName.match(/^(img|table)$/i)) return !1;
        }));
      }, e.isNode = function (e, t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e instanceof t.Node : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
      }, e.up = function (e, t, o) {
        var n = e;if (!e) return !1;do {
          if (t(n)) return n;if (n === o || !n.parentNode) break;n = n.parentNode;
        } while (n && n !== o);return !1;
      }, e.closest = function (t, o, n) {
        var i;return i = "function" == typeof o ? o : o instanceof RegExp ? function (e) {
          return o.test(e.nodeName);
        } : function (e) {
          return RegExp("^(" + o + ")$", "i").test(e.nodeName);
        }, e.up(t, i, n);
      }, e.after = function (e, t) {
        var o = e.parentNode;o && (o.lastChild === e ? o.appendChild(t) : o.insertBefore(t, e.nextSibling));
      }, e.moveContent = function (e, t, o) {
        void 0 === o && (o = !1);var i = e.ownerDocument.createDocumentFragment();[].slice.call(e.childNodes).forEach(function (e) {
          e.nodeType === Node.TEXT_NODE && e.nodeValue === n.INVISIBLE_SPACE || i.appendChild(e);
        }), o && t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i);
      }, e.all = function (t, o, n) {
        void 0 === n && (n = !1);var i = t.childNodes ? Array.prototype.slice.call(t.childNodes) : [];if (o(t)) return t;n && (i = i.reverse()), i.forEach(function (t) {
          e.all(t, o, n);
        });
      }, e.wrap = function (t, o, n) {
        var i,
            r = t,
            s = t,
            a = n.selection.save(),
            l = !1;do {
          l = !1, (i = e.prev(r, function (e) {
            return !!e;
          }, n.editor, !1)) && !e.isBlock(i) && (l = !0, r = i);
        } while (l);do {
          l = !1, (i = e.next(s, function (e) {
            return !!e;
          }, n.editor, !1)) && !e.isBlock(i) && (l = !0, s = i);
        } while (l);var c = "string" == typeof o ? e.create(o, "", n.editorDocument) : o;r.parentNode && r.parentNode.insertBefore(c, r);for (var d = r; d && (d = r.nextSibling, c.appendChild(r), r !== s && d);) {
          r = d;
        }return n.selection.restore(a), c;
      }, e.findInline = function (t, o, n) {
        var i = t,
            r = null;do {
          if (!i) break;if ((r = o ? i.previousSibling : i.nextSibling) || !i.parentNode || i.parentNode === n || !e.isInlineBlock(i.parentNode)) break;i = i.parentNode;
        } while (!r);for (; r && e.isInlineBlock(r) && (o ? r.lastChild : r.firstChild);) {
          r = o ? r.lastChild : r.firstChild;
        }return r;
      }, e.contains = function (e, t) {
        for (; t.parentNode;) {
          if (t.parentNode === e) return !0;t = t.parentNode;
        }return !1;
      }, e.isOrContains = function (t, o) {
        return o && t && (t === o || e.contains(t, o));
      }, e;
    }();
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(6);t.Component = function () {
      function e(e) {
        e && e instanceof n.Jodit && (this.jodit = e, e.components && e.components.push(this));
      }return e.prototype.destruct = function () {}, e;
    }();
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }(),
        i = this && this.__assign || Object.assign || function (e) {
      for (var t, o = 1, n = arguments.length; n > o; o++) {
        t = arguments[o];for (var i in t) {
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
      }return e;
    };Object.defineProperty(t, "__esModule", { value: !0 });var r = o(4),
        s = o(0),
        a = o(2),
        l = o(3),
        c = function (e) {
      function t(t, o, n) {
        void 0 === o && (o = "li"), void 0 === n && (n = "jodit_toolbar_btn");var i = e.call(this, t) || this;return i.parentToolbar = null, i.container = i.jodit.ownerDocument.createElement(o), i.container.classList.add(n), i;
      }return n(t, e), t;
    }(r.Component),
        d = function (e) {
      function t(t, o, n, i) {
        void 0 === i && (i = "jodit_toolbar_popup");var r = e.call(this, t, "div", i) || this;return r.target = o, r.current = n, r.className = i, r.close = function (e) {
          e && l.Dom.isOrContains(r.container, e) || (r.jodit.events.off("closeAllPopups", r.close), r.doClose(), r.container.parentNode && r.container.parentNode.removeChild(r.container), r.jodit.selection && r.jodit.selection.removeMarkers());
        }, r.jodit.events.on(r.container, "mousedown touchstart", function (e) {
          e.stopPropagation();
        }), r;
      }return n(t, e), t.prototype.doOpen = function (e) {
        e && (this.container.innerHTML = '<span class="jodit_popup_triangle"></span>', this.container.appendChild(s.dom(e, this.jodit.ownerDocument)), this.container.style.display = "block", this.container.style.marginLeft = null);
      }, t.prototype.open = function (e, t) {
        this.jodit.events.fire("beforeOpenPopup closeAllPopups", this), this.jodit.events.on("closeAllPopups", this.close), this.container.classList.add(this.className + "-open"), this.doOpen(e), this.target.appendChild(this.container), void 0 !== t && this.container.classList.toggle("jodit_right", t), this.jodit.events.fire("afterOpenPopup", this.container);
      }, t.prototype.doClose = function () {}, t;
    }(c);t.ToolbarPopup = d;var u = function (e) {
      function t(t, o, n, i) {
        void 0 === i && (i = "jodit_toolbar_list");var r = e.call(this, t, o, n, i) || this;return r.target = o, r.current = n, r.className = i, r.defaultControl = { template: function template(e, t, o) {
            return r.jodit.i18n(o);
          } }, r;
      }return n(t, e), t.prototype.doClose = function () {
        this.toolbar && this.toolbar.destruct();
      }, t.prototype.doOpen = function (e) {
        var t = this;this.toolbar = new v(this.jodit), s.each(e.list, function (o, n) {
          var r;if (void 0 !== t.jodit.options.controls[n]) r = new p(t.jodit, i({ name: "" + n }, t.jodit.options.controls[n]), t.current);else if (void 0 !== t.jodit.options.controls[o] && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) r = new p(t.jodit, i({ name: "" + o }, t.jodit.options.controls[o], n), t.current);else {
            r = new p(t.jodit, { name: "" + o, exec: e.exec, command: e.command, isActive: e.isActiveChild, isDisable: e.isDisableChild, args: [e.args && e.args[0] || o, e.args && e.args[1] || n] }, t.current);var s = e.template || t.defaultControl.template;r.textBox.innerHTML = s(t.jodit, o, n);
          }t.toolbar.appendChild(r);
        }), this.container.appendChild(this.toolbar.container), this.container.style.marginLeft = null, this.toolbar.checkActiveButtons();
      }, t;
    }(d);t.ToolbarList = u;var p = function (e) {
      function t(t, o, n) {
        var i = e.call(this, t) || this;i.__disabled = !1, i.__actived = !1, i.checkActiveStatus = function (e, t) {
          var o = 0,
              n = 0;return Object.keys(e).forEach(function (r) {
            var a = e[r];"function" == typeof a ? a(i.jodit, "" + s.css(t, r)) && (o += 1) : -1 !== a.indexOf("" + s.css(t, r)) && (o += 1), n += 1;
          }), n === o;
        }, i.canActionCallback = function (e) {
          i.isDisable() || (i.disable = !e);
        }, i.control = o, i.target = n;var r = i.jodit.ownerDocument.createElement("a");if (i.container.appendChild(r), i.createTooltip(o, r), i.textBox = i.jodit.ownerDocument.createElement("span"), r.appendChild(i.textBox), o.list && r) {
          var a = i.jodit.ownerDocument.createElement("span");a.classList.add("jodit_with_dropdownlist-trigger"), i.container.classList.add("jodit_with_dropdownlist"), r.appendChild(a);
        }var l = o.name.replace(/[^a-zA-Z0-9]/g, "_");return i.createIcon(o, l), i.container.classList.add("jodit_toolbar_btn-" + l), i.jodit.events.on(i.container, "mousedown touchend", function (e) {
          if (e.stopImmediatePropagation(), e.preventDefault(), i.disable) return !1;if (o.list) {
            var t = new u(i.jodit, i.container, i.target);t.open(o), i.jodit.events.fire("closeAllPopups hidePopup", t.container);
          } else if (void 0 !== o.exec && "function" == typeof o.exec) o.exec(i.jodit, i.target || i.jodit.selection.current(), o, e, i.container), i.jodit.setEditorValue(), i.parentToolbar && i.parentToolbar.checkActiveButtons(), i.jodit.events.fire("closeAllPopups hidePopup");else if (void 0 !== o.popup && "function" == typeof o.popup) {
            var n = new d(i.jodit, i.container, i.target);n.open(o.popup(i.jodit, i.target || i.jodit.selection.current(), o, n.close)), i.jodit.events.fire("closeAllPopups hidePopup", n.container);
          } else (o.command || o.name) && (i.jodit.execCommand(o.command || o.name, o.args && o.args[0] || !1, o.args && o.args[1] || null), i.jodit.events.fire("closeAllPopups hidePopup"));
        }), i.jodit.events.on(s.camelCase("can-" + l), i.canActionCallback), i;
      }return n(t, e), Object.defineProperty(t.prototype, "disable", { get: function get() {
          return this.__disabled;
        }, set: function set(e) {
          this.__disabled = e, this.container.classList.toggle("jodit_disabled", e), e ? this.container.hasAttribute("disabled") || this.container.setAttribute("disabled", "disabled") : this.container.hasAttribute("disabled") && this.container.removeAttribute("disabled");
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "active", { get: function get() {
          return this.__actived;
        }, set: function set(e) {
          this.__actived = e, this.container.classList.toggle("jodit_active", e);
        }, enumerable: !0, configurable: !0 }), t.prototype.isDisable = function () {
        var e = void 0 === this.control || void 0 === this.control.mode ? a.MODE_WYSIWYG : this.control.mode,
            t = e === a.MODE_SPLIT || e === this.jodit.getRealMode();return "function" == typeof this.control.isDisable && (t = t && !this.control.isDisable(this.jodit, this.control, this)), this.jodit.options.readonly && -1 === this.jodit.options.activeButtonsInReadOnly.indexOf(this.control.name) && (t = !1), !t;
      }, t.prototype.isActive = function () {
        var e = this;if ("function" == typeof this.control.isActive) return this.control.isActive(this.jodit, this.control, this);var t = this.jodit.selection.current();if (!t) return !1;var o, n, i;return !(!(this.control.tags || this.control.options && this.control.options.tags) || (o = this.control.tags || this.control.options && this.control.options.tags, n = t, !l.Dom.up(n, function (e) {
          if (e && -1 !== o.indexOf(e.nodeName.toLowerCase())) return !0;
        }, this.jodit.editor))) || !(!(this.control.css || this.control.options && this.control.options.css) || (i = this.control.css || this.control.options && this.control.options.css, n = t, !l.Dom.up(n, function (t) {
          if (t && t.nodeType !== Node.TEXT_NODE) return e.checkActiveStatus(i, t);
        }, this.jodit.editor)));
      }, t.prototype.createTooltip = function (e, t) {
        e.tooltip && t.setAttribute("title", this.jodit.i18n(e.tooltip) + (e.hotkeys ? "<br>" + s.asArray(e.hotkeys).join(" ") : ""));
      }, t.prototype.createIcon = function (e, t) {
        if (this.jodit.options.textIcons) this.textBox.innerHTML = e.name;else if (this.control.iconURL) this.textBox.style.backgroundImage = "url(" + e.iconURL + ")";else if (m.exists(e.icon || e.name)) {
          var o = s.dom(m.getIcon(e.icon || e.name, "empty"), this.jodit.ownerDocument);o.classList.add("jodit_icon", "jodit_icon_" + t), this.textBox.appendChild(o);
        }
      }, t.prototype.destruct = function () {
        var e = this.control.name.replace(/[^a-zA-Z0-9]/g, "_");this.jodit.events.off(this.container), this.jodit.events.off(s.camelCase("can-" + e), this.canActionCallback);
      }, t;
    }(c);t.ToolbarButton = p;var f = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;return o.container.classList.add("jodit_toolbar_btn-break"), o;
      }return n(t, e), t;
    }(c);t.ToolbarBreak = f;var h = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;return o.container.classList.add("jodit_toolbar_btn-separator"), o;
      }return n(t, e), t;
    }(c);t.ToolbarSeparator = h;var m = function () {
      function e() {}return e.exists = function (t) {
        return void 0 !== e.icons[t];
      }, e.getIcon = function (t, o) {
        return void 0 === o && (o = "<span></span>"), void 0 !== e.icons[t] ? e.icons[t] : o;
      }, e.icons = {}, e;
    }();t.ToolbarIcon = m;var v = function (e) {
      function t(t) {
        var o = e.call(this, t, "ul", "jodit_toolbar") || this;return o.__buttons = [], o.__getControlType = function (e) {
          var t;return "string" != typeof e ? (t = i({ name: "empty" }, e), void 0 !== o.jodit.options.controls[t.name] && (t = i({}, o.jodit.options.controls[t.name], t))) : t = void 0 !== o.jodit.options.controls[e] ? i({ name: e }, o.jodit.options.controls[e]) : { name: e, command: e, tooltip: e }, t;
        }, o.checkActiveButtons = s.debounce(function () {
          o.__buttons.filter(function (e) {
            return e instanceof p;
          }).forEach(function (e) {
            e.disable = e.isDisable(), e.disable || (e.active = e.isActive()), "function" == typeof e.control.getLabel && e.control.getLabel(o.jodit, e.control, e);
          }), o.jodit.events.fire("updateToolbar");
        }, o.jodit.options.observer.timeout, !0), o.closeAll = function () {
          o.jodit.events.fire("closeAllPopups");
        }, o.afterOpen = function (e) {
          var t = s.offset(o.jodit.container, o.jodit, !0),
              n = s.offset(e, o.jodit, !0),
              i = s.css(e, "marginLeft"),
              r = 0;if (n.left + n.width > t.left + t.width && (r = -(n.left + n.width - (t.left + t.width)), s.css(e, { marginLeft: r + i }), n = s.offset(e, o.jodit, !0)), t.left > n.left && (n.left + n.width > t.left + t.width ? s.css(e, { width: t.width }) : (r = t.left - n.left, s.css(e, { marginLeft: r + i }))), r) {
            var a = e.querySelector(".jodit_popup_triangle");a && (a.style.marginLeft = -r + "px");
          }
        }, o.initEvents = function () {
          o.jodit.events.on(o.jodit.ownerWindow, "mousedown touchstart", o.closeAll).on("afterOpenPopup", o.afterOpen).on("mousedown mouseup keydown change afterSetMode focus afterInit readonly", o.checkActiveButtons);
        }, o.initEvents(), o;
      }return n(t, e), t.prototype.appendChild = function (e) {
        this.__buttons.push(e), e.parentToolbar = this, this.container.appendChild(e.container);
      }, t.prototype.removeChild = function (e) {
        var t = this.__buttons.indexOf(e);-1 !== t && (this.__buttons.splice(t, 1), e.container.parentNode === this.container && this.container.removeChild(e.container)), e.parentToolbar = null;
      }, t.prototype.build = function (e, t, o) {
        var n = this,
            i = !1;this.clear(), ("string" == typeof e ? e.split(/[,\s]+/) : e).map(this.__getControlType).forEach(function (e) {
          var t = null;if (-1 === n.jodit.options.removeButtons.indexOf(e.name)) {
            switch (e.name) {case "\n":
                t = new f(n.jodit);break;case "|":
                i || (i = !0, t = new h(n.jodit));break;default:
                i = !1, t = new p(n.jodit, e, o);}t && n.appendChild(t);
          }
        }), this.container.parentNode !== t && t.appendChild(this.container), this.checkActiveButtons();
      }, t.prototype.clear = function () {
        var e = this;this.__buttons.slice().forEach(function (t) {
          e.removeChild(t), t.destruct();
        }), this.__buttons.length = 0;
      }, t.prototype.destruct = function () {
        e.prototype.destruct.call(this), this.jodit.events.off(this.jodit.ownerWindow, "mousedown touchstart", this.closeAll).off("afterOpenPopup", this.afterOpen).off("mousedown mouseup keydown change afterSetMode focus afterInit readonly", this.checkActiveButtons), this.clear();
      }, t;
    }(c);t.ToolbarCollection = v;
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(4),
        r = o(13),
        s = o(10),
        a = o(11),
        l = o(3),
        c = o(12),
        d = o(2),
        u = o(0),
        p = o(0),
        f = o(5);t.Jodit = function (e) {
      function t(o, n) {
        var i = e.call(this) || this;i.version = "3.1.28", i.components = [], i.__modulesInstances = {}, i.__plugins = {}, i.__defaultStyleDisplayKey = "data-jodit-default-style-display", i.commands = {}, i.__whoLocked = "", i.isLocked = function () {
          return "" !== i.__whoLocked;
        }, i.isLockedNotBy = function (e) {
          return i.isLocked() && i.__whoLocked !== e;
        }, i.mode = d.MODE_WYSIWYG, i.getVersion = function () {
          return i.version;
        }, i.buffer = {}, i.events = new c.EventsNative();var s = function s() {};if (s.prototype = t.defaultOptions, i.options = new s(), void 0 !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && Object.keys(n).forEach(function (e) {
          i.options[e] = "object" != _typeof(t.defaultOptions[e]) || Array.isArray(t.defaultOptions[e]) ? n[e] : u.extend(!0, {}, t.defaultOptions[e], n[e]);
        }), i.editorDocument = i.options.ownerDocument, i.editorWindow = i.options.ownerWindow, i.ownerDocument = i.options.ownerDocument, i.ownerWindow = i.options.ownerWindow, "string" == typeof o) try {
          i.element = i.ownerDocument.querySelector(o);
        } catch (e) {
          throw Error('String "' + o + '" should be valid HTML selector');
        } else i.element = o;if (!i.element || "object" != _typeof(i.element) || i.element.nodeType !== Node.ELEMENT_NODE || !i.element.cloneNode) throw Error('Element "' + o + '" should be string or HTMLElement instance');i.selection = new r.Select(i), i.uploader = new a.Uploader(i), i.container = u.dom('<div class="jodit_container" />', i.ownerDocument), i.container.classList.add("jodit_" + (i.options.theme || "default") + "_theme"), i.options.zIndex && (i.container.style.zIndex = "" + parseInt("" + i.options.zIndex, 10)), i.workplace = u.dom('<div class="jodit_workplace" />', i.ownerDocument), i.progress_bar = u.dom('<div class="jodit_progress_bar"><div></div></div>', i.ownerDocument), i.toolbar = new f.ToolbarCollection(i), i.toolbar.build(i.options.buttons.concat(i.options.extraButtons), i.container), i.container.classList.add("jodit_toolbar_size-" + (-1 !== ["middle", "large", "small"].indexOf(i.options.toolbarButtonSize.toLowerCase()) ? i.options.toolbarButtonSize.toLowerCase() : "middle")), i.options.textIcons && i.container.classList.add("jodit_text_icons"), i.events.on(i.ownerWindow, "resize", function () {
          i.events && i.events.fire("resize");
        }), i.container.appendChild(i.workplace), i.workplace.appendChild(i.progress_bar), i.element.parentNode && i.element.parentNode.insertBefore(i.container, i.element), i.helper = p, i.options.events && u.each(i.options.events, function (e, t) {
          i.events.on(e, t);
        }), i.id = i.element.getAttribute("id") || "" + new Date().getTime(), i.initPlugines(), i.__createEditor(), i.setElementValue(), t.instances[i.id] = i;try {
          i.editorDocument.execCommand("enableObjectResizing", !1, !1), i.editorDocument.execCommand("enableInlineTableEditing", !1, !1);
        } catch (e) {}return i.setMode(i.options.defaultMode), i.options.readonly && i.setReadOnly(!0), i.events.fire("afterInit", i), i;
      }return n(t, e), t.prototype.getInstance = function (e, o) {
        if (void 0 === t.modules[e]) throw Error("Need real module name");return void 0 === this.__modulesInstances[e] && (this.__modulesInstances[e] = new t.modules[e](this, o)), this.__modulesInstances[e];
      }, t.prototype.initPlugines = function () {
        var e = this,
            o = Array.isArray(this.options.disablePlugins) ? this.options.disablePlugins.map(function (e) {
          return e.toLowerCase();
        }) : this.options.disablePlugins.toLowerCase().split(/[\s,]+/);Object.keys(t.plugins).forEach(function (n) {
          -1 === o.indexOf(n.toLowerCase()) && (e.__plugins[n] = new t.plugins[n](e));
        });
      }, t.prototype.__createEditor = function () {
        var e = this;!1 !== this.events.fire("createEditor") && (this.editor = u.dom('<div class="jodit_wysiwyg" contenteditable aria-disabled="false" tabindex="' + this.options.tabIndex + '"></div>', this.ownerDocument), this.workplace.appendChild(this.ownerDocument.createTextNode("\n")), this.workplace.appendChild(this.editor), this.workplace.appendChild(this.ownerDocument.createTextNode("\n"))), this.options.editorCssClass && this.editor.classList.add(this.options.editorCssClass), this.events.on(this.editor, "keydown keyup keypress mousedown mouseup mousepress paste resize touchstart touchend focus blur", function (t) {
          if (!e.options.readonly && e.events && e.events.fire) {
            if (!1 === e.events.fire(t.type, t)) return !1;e.setEditorValue();
          }
        }), this.options.spellcheck && this.editor.setAttribute("spellcheck", "true"), this.options.direction && (this.editor.style.direction = "rtl" === this.options.direction.toLowerCase() ? "rtl" : "ltr"), this.element.style.display && this.element.setAttribute(this.__defaultStyleDisplayKey, this.element.style.display), this.element.style.display = "none", this.options.triggerChangeEvent && this.events.on("change", u.debounce(function () {
          e.events.fire(e.element, "change");
        }, this.options.observer.timeout));
      }, t.prototype.destruct = function () {
        var e = this;!1 !== this.events.fire("beforeDestruct") && this.editor && (this.element.hasAttribute(this.__defaultStyleDisplayKey) ? (this.element.style.display = this.element.getAttribute(this.__defaultStyleDisplayKey), this.element.removeAttribute(this.__defaultStyleDisplayKey)) : this.element.style.display = "", this.element.hasAttribute("style") && !this.element.getAttribute("style") && this.element.removeAttribute("style"), Object.keys(this.__plugins).forEach(function (t) {
          void 0 !== e.__plugins && void 0 !== e.__plugins[t] && void 0 !== e.__plugins[t].destruct && "function" == typeof e.__plugins[t].destruct && e.__plugins[t].destruct(), delete e.__plugins[t];
        }), this.components.forEach(function (e) {
          void 0 !== e.destruct && "function" == typeof e.destruct && e.destruct();
        }), delete this.selection, this.events.off(this.events), this.events.off(this.ownerWindow), this.events.off(this.element), this.events.off(this.editor), delete this.events, this.container.parentNode && this.container.parentNode.removeChild(this.container), delete this.container, delete this.editor, delete this.workplace, delete t.instances[this.id]);
      }, t.prototype.getElementValue = function () {
        return void 0 !== this.element.value ? this.element.value : this.element.innerHTML;
      }, t.prototype.getEditorValue = function () {
        var e;if (void 0 !== (e = this.events.fire("beforeGetValueFromEditor"))) return e;"<br>" === (e = this.editor ? this.editor.innerHTML.replace(d.INVISIBLE_SPACE_REG_EXP, "") : this.getElementValue()) && (e = "");var t = { value: e };return this.events.fire("afterGetValueFromEditor", t), t.value;
      }, t.prototype.setElementValue = function (e) {
        if ("string" != typeof e && void 0 !== e) throw Error("value must be string");void 0 !== e ? void 0 !== this.element.value ? this.element.value = e : this.element.innerHTML = e : e = this.getElementValue(), e !== this.getEditorValue() && this.setEditorValue(e);
      }, t.prototype.setEditorValue = function (e) {
        if (this.editor) {
          if ("string" != typeof e && void 0 !== e) throw Error("value must be string");void 0 !== e && this.editor.innerHTML !== e && (this.editor.innerHTML = e);var t = this.getElementValue(),
              o = this.getEditorValue();t !== o && (this.setElementValue(o), this.events.fire("change", t, o));
        }
      }, t.prototype.execCustomCommands = function (e, t, o) {
        var n = this;if (void 0 === t && (t = !1), void 0 === o && (o = null), e = e.toLowerCase(), void 0 !== this.commands[e]) {
          var i = void 0;return this.commands[e].forEach(function (r) {
            var s;s = "function" == typeof r ? r : r.exec;var a = s.call(n, e, t, o);void 0 !== a && (i = a);
          }), i;
        }
      }, t.prototype.registerCommand = function (e, t) {
        var o = this,
            n = e.toLowerCase();if (void 0 === this.commands[n] && (this.commands[n] = []), this.commands[n].push(t), "function" != typeof t) {
          var i = this.options.commandToHotkeys[n] || this.options.commandToHotkeys[e] || t.hotkeys;i && this.events.off(u.asArray(i).map(function (e) {
            return e + ".hotkey";
          }).join(" ")).on(u.asArray(i).map(function (e) {
            return e + ".hotkey";
          }).join(" "), function () {
            return o.execCommand(n);
          });
        }
      }, t.prototype.execCommand = function (e, t, o) {
        if (void 0 === t && (t = !1), void 0 === o && (o = null), !this.options.readonly) {
          var n;if (e = e.toLowerCase(), n = this.events.fire("beforeCommand", e, t, o), !1 !== n && (n = this.execCustomCommands(e, t, o)), !1 !== n) switch (this.selection.focus(), e) {case "selectall":
              this.selection.select(this.editor, !0);break;default:
              try {
                n = this.editorDocument.execCommand(e, t, o);
              } catch (e) {}}return this.events.fire("afterCommand", e, t, o), this.setEditorValue(), n;
        }
      }, t.prototype.lock = function (e) {
        this.__whoLocked = e, this.editor.classList.add("jodit_disabled");
      }, t.prototype.unlock = function () {
        this.__whoLocked = "", this.editor.classList.remove("jodit_disabled");
      }, t.prototype.getMode = function () {
        return this.mode;
      }, t.prototype.getRealMode = function () {
        return this.getMode() !== d.MODE_SPLIT ? this.getMode() : l.Dom.isOrContains(this.editor, this.ownerDocument.activeElement) || l.Dom.isOrContains(this.toolbar.container, this.ownerDocument.activeElement) ? d.MODE_WYSIWYG : d.MODE_SOURCE;
      }, t.prototype.setMode = function (e) {
        var t = this,
            o = { mode: e },
            n = ["jodit_wysiwyg_mode", "jodit_source_mode", "jodit_split_mode"];!1 !== this.events.fire("beforeSetMode", o) && (this.mode = u.inArray(o.mode, [d.MODE_SOURCE, d.MODE_WYSIWYG, d.MODE_SPLIT]) ? o.mode : d.MODE_WYSIWYG, this.options.saveModeInCookie && s.Cookie.set("jodit_default_mode", this.mode, 31), n.forEach(function (e) {
          t.container.classList.remove(e);
        }), this.container.classList.add(n[this.mode - 1]), this.events.fire("afterSetMode"));
      }, t.prototype.toggleMode = function () {
        var e = this.getMode();u.inArray(e + 1, [d.MODE_SOURCE, d.MODE_WYSIWYG, this.options.useSplitMode ? d.MODE_SPLIT : 9]) ? e += 1 : e = d.MODE_WYSIWYG, this.setMode(e);
      }, t.prototype.i18n = function (e) {
        for (var o = this, n = [], i = 1; arguments.length > i; i++) {
          n[i - 1] = arguments[i];
        }if (void 0 !== this.options && this.options.debugLanguage) return "{" + e + "}";var r;return r = void 0 !== this.options && void 0 !== t.lang[u.defaultLanguage(this.options.language)] ? t.lang[u.defaultLanguage(this.options.language)] : void 0 !== t.lang[u.defaultLanguage(t.defaultOptions.language)] ? t.lang[u.defaultLanguage(t.defaultOptions.language)] : t.lang.en, function (e) {
          return u.sprintf.apply(o, [e].concat(n));
        }(void 0 !== this.options && void 0 !== this.options.i18n[u.defaultLanguage(this.options.language)] && this.options.i18n[u.defaultLanguage(this.options.language)][e] ? this.options.i18n[u.defaultLanguage(this.options.language)][e] : "string" == typeof r[e] && r[e] ? r[e] : "string" == typeof t.lang.en[e] && t.lang.en[e] ? t.lang.en[e] : e);
      }, t.prototype.setReadOnly = function (e) {
        this.options.readonly = e, e ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.events && this.events.fire("readonly", e);
      }, t.prototype.getReadOnly = function () {
        return this.options.readonly;
      }, t.plugins = {}, t.modules = {}, t.instances = {}, t.lang = {}, t;
    }(i.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }(),
        i = this && this.__assign || Object.assign || function (e) {
      for (var t, o = 1, n = arguments.length; n > o; o++) {
        t = arguments[o];for (var i in t) {
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
      }return e;
    };Object.defineProperty(t, "__esModule", { value: !0 });var r = o(6),
        s = o(4),
        a = o(1),
        l = o(0),
        c = o(5),
        d = o(2),
        u = o(12);a.Config.prototype.dialog = { zIndex: 100002, resizable: !0, draggable: !0, fullsize: !1, fullsizeButton: !1 };var p = function (e) {
      function t(t, o) {
        void 0 === o && (o = {});var n = e.call(this, t) || this;n.events = new u.EventsNative(), n.lockSelect = function () {
          n.dialogbox.classList.add("jodit_dialog_box-moved");
        }, n.unlockSelect = function () {
          n.dialogbox.classList.remove("jodit_dialog_box-moved");
        }, n.destinition = document.body, n.document = document, n.window = window, n.destroyAfterClose = !1, n.moved = !1, n.iSetMaximization = !1, n.resizeble = !1, n.draggable = !1, n.startX = 0, n.startY = 0, n.startPoint = { x: 0, y: 0, w: 0, h: 0 }, n.__isDestructed = !1, n.close = function (e) {
          n.__isDestructed || (e && (e.stopImmediatePropagation(), e.preventDefault()), n.jodit && n.jodit.events && n.jodit.events.fire(n, "beforeClose"), n.dialogbox.classList && n.dialogbox.classList.remove("active"), n.iSetMaximization && n.maximization(!1), n.destroyAfterClose && n.destruct(), n.jodit && n.jodit.events.fire(n, "afterClose"));
        }, t && t instanceof r.Jodit && (n.window = t.ownerWindow, n.document = t.ownerDocument, t.events.on("beforeDestruct", function () {
          n.destruct();
        }));var s = n;s.options = t && t.options ? t.options.dialog : a.Config.prototype.dialog, s.options = i({}, s.options, o), s.dialogbox = l.dom('<div style="z-index:' + s.options.zIndex + '" class="jodit jodit_dialog_box"><div class="jodit_dialog_overlay"></div><div class="jodit_dialog"><div class="jodit_dialog_header non-selected"><h4></h4><a href="javascript:void(0)" title="Close" class="jodit_close">' + (r.Jodit.modules.Toolbar ? r.Jodit.modules.ToolbarIcon.getIcon("cancel") : "&times;") + '</a></div><div class="jodit_dialog_content"></div><div class="jodit_dialog_footer"></div>' + (s.options.resizable ? '<div class="jodit_dialog_resizer"></div>' : "") + "</div></div>", n.document), t && t instanceof r.Jodit && s.dialogbox.setAttribute("data-editor_id", t.id), Object.defineProperty(s.dialogbox, "__jodit_dialog", { value: s }), s.dialog = s.dialogbox.querySelector(".jodit_dialog"), s.resizer = s.dialogbox.querySelector(".jodit_dialog_resizer"), s.jodit && s.jodit.options && s.jodit.options.textIcons && s.dialogbox.classList.add("jodit_text_icons"), s.dialogbox_header = s.dialogbox.querySelector(".jodit_dialog_header>h4"), s.dialogbox_content = s.dialogbox.querySelector(".jodit_dialog_content"), s.dialogbox_footer = s.dialogbox.querySelector(".jodit_dialog_footer"), s.dialogbox_close = s.dialogbox.querySelector(".jodit_dialog_header>a.jodit_close"), s.dialogbox_fullsize = l.dom('<a href="javascript:void(0)" class="jodit_dialog_header_fullsize">' + (r.Jodit.modules.ToolbarIcon.getIcon ? r.Jodit.modules.ToolbarIcon.getIcon(o.fullsize ? "fullsize" : "shrink") : "") + "</a>", n.document), s.destinition.appendChild(s.dialogbox), s.dialogbox.addEventListener("close_dialog", s.close), s.dialogbox_close.addEventListener("mousedown", s.close), s.dialogbox_fullsize.addEventListener("click", function () {
          var e = s.maximization();r.Jodit.modules.Toolbar && (s.dialogbox_fullsize.innerHTML = r.Jodit.modules.ToolbarIcon.getIcon(e ? "shrink" : "fullsize"));
        }), s.events.on(n.window, "mousemove", s.onMouseMove.bind(s)).on(n.window, "mouseup", s.onMouseUp.bind(s)).on(n.window, "keydown", s.onKeyDown.bind(s)).on(n.window, "resize", s.onResize.bind(s));var c = s.dialogbox.querySelector(".jodit_dialog_header");return c && c.addEventListener("mousedown", s.onHeaderMouseDown.bind(s)), s.options.resizable && s.resizer.addEventListener("mousedown", s.onResizerMouseDown.bind(s)), n;
      }return n(t, e), t.prototype.setSize = function (e, t) {
        e && l.css(this.dialog, "width", e), t && l.css(this.dialog, "height", t);
      }, t.prototype.setPosition = function (e, t) {
        var o = this.window.innerWidth,
            n = this.window.innerHeight,
            i = o / 2 - this.dialog.offsetWidth / 2,
            r = n / 2 - this.dialog.offsetHeight / 2;void 0 !== e && void 0 !== t && (this.offsetX = e, this.offsetY = t, this.moved = Math.abs(e - i) > 100 || Math.abs(t - r) > 100), this.dialog.style.left = (e || i) + "px", this.dialog.style.top = (t || r) + "px";
      }, t.prototype.setElements = function (e, t) {
        var o = this,
            n = [];l.asArray(t).forEach(function (t) {
          var i = l.dom(t, o.document);n.push(i), i.parentNode !== e && e.appendChild(i);
        }), [].slice.call(e.childNodes).forEach(function (t) {
          -1 === n.indexOf(t) && e.removeChild(t);
        });
      }, t.prototype.setTitle = function (e) {
        this.setElements(this.dialogbox_header, e);
      }, t.prototype.setContent = function (e) {
        this.setElements(this.dialogbox_content, e);
      }, t.prototype.setFooter = function (e) {
        this.setElements(this.dialogbox_footer, e), this.dialog.classList.toggle("with_footer", !!e);
      }, t.prototype.getMaxZIndexDialog = function () {
        var e,
            t,
            o = 0,
            n = this;return l.$$(".jodit_dialog_box", this.destinition).forEach(function (i) {
          e = i.__jodit_dialog, t = parseInt(l.css(i, "zIndex"), 10), e.isOpened() && !isNaN(t) && t > o && (n = e, o = t);
        }), n;
      }, t.prototype.setMaxZIndex = function () {
        var e = 0,
            t = 0;l.$$(".jodit_dialog_box", this.destinition).forEach(function (o) {
          t = parseInt(l.css(o, "zIndex"), 10), e = Math.max(isNaN(t) ? 0 : t, e);
        }), this.dialogbox.style.zIndex = "" + (e + 1);
      }, t.prototype.maximization = function (e) {
        return "boolean" != typeof e && (e = !this.dialogbox.classList.contains("jodit_dialog_box-fullsize")), this.dialogbox.classList.toggle("jodit_dialog_box-fullsize", e), [this.destinition, this.destinition.parentNode].forEach(function (t) {
          t && t.classList && t.classList.toggle("jodit_fullsize_box", e);
        }), this.iSetMaximization = e, e;
      }, t.prototype.open = function (e, t, o, n) {
        this.jodit && this.jodit.events && !1 === this.jodit.events.fire(this, "beforeOpen") || (this.destroyAfterClose = !0 === o, this.options.fullsizeButton && this.dialogbox_close.parentNode && this.dialogbox_close.parentNode.appendChild(this.dialogbox_fullsize), void 0 !== t && this.setTitle(t), e && this.setContent(e), this.dialogbox.classList.add("active"), n && this.dialogbox.classList.add("jodit_modal"), this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex(), this.options.fullsize && this.maximization(!0), this.jodit && this.jodit.events && this.jodit.events.fire(this, "afterOpen"));
      }, t.prototype.isOpened = function () {
        return !this.__isDestructed && this.dialogbox.classList.contains("active");
      }, t.prototype.onMouseUp = function () {
        (this.draggable || this.resizeble) && (this.draggable = !1, this.resizeble = !1, this.unlockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "endResize endMove"));
      }, t.prototype.onHeaderMouseDown = function (e) {
        this.options.draggable && (this.draggable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.x = l.css(this.dialog, "left"), this.startPoint.y = l.css(this.dialog, "top"), this.setMaxZIndex(), e.preventDefault(), this.lockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "startMove"));
      }, t.prototype.onMouseMove = function (e) {
        this.draggable && this.options.draggable && (this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "move", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault()), this.resizeble && this.options.resizable && (this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "resizeDialog", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault());
      }, t.prototype.onKeyDown = function (e) {
        if (this.isOpened() && e.which === d.KEY_ESC) {
          var t = this.getMaxZIndexDialog();t ? t.close() : this.close(), e.stopImmediatePropagation();
        }
      }, t.prototype.onResize = function () {
        !this.options.resizable || this.moved || !this.isOpened() || this.offsetX || this.offsetY || this.setPosition();
      }, t.prototype.destruct = function () {
        this.dialogbox && this.dialogbox.parentNode && this.dialogbox.parentNode.removeChild(this.dialogbox), delete this.dialogbox, this.events.destruct(), this.__isDestructed = !0;
      }, t.prototype.onResizerMouseDown = function (e) {
        this.resizeble = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.jodit.events && this.jodit.events.fire(this, "startResize");
      }, t;
    }(s.Component);t.Dialog = p, t.Alert = function (e, t, o, n) {
      void 0 === n && (n = "jodit_alert"), "function" == typeof t && (o = t, t = void 0);var i = new p(),
          s = l.dom('<div class="' + n + '"></div>', i.document),
          a = l.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + c.ToolbarIcon.getIcon("cancel") + "<span>" + r.Jodit.prototype.i18n("Ok") + "</span></a>", i.document);return s.appendChild(l.dom(e, i.document)), a.addEventListener("click", function () {
        o && "function" == typeof o && !1 === o(i) || i.close();
      }), i.setFooter([a]), i.open(s, t || "&nbsp;", !0, !0), a.focus(), i;
    }, r.Jodit.Alert = t.Alert, t.Promt = function (e, t, o, n) {
      var i = new p(),
          s = l.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + c.ToolbarIcon.getIcon("cancel") + "<span>" + r.Jodit.prototype.i18n("Cancel") + "</span></a>", i.document),
          a = l.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + c.ToolbarIcon.getIcon("check") + "<span>" + r.Jodit.prototype.i18n("Ok") + "</span></a>", i.document),
          d = l.dom('<form class="jodit_promt"></form>', i.document),
          u = l.dom("<input autofocus/>", i.document),
          f = l.dom("<label></label>", i.document);"function" == typeof t && (o = t, t = void 0), n && u.setAttribute("placeholder", n), f.appendChild(l.dom(e, i.document)), d.appendChild(f), d.appendChild(u), s.addEventListener("click", i.close, !1);var h = function h() {
        o && "function" == typeof o && !1 === o(u.value) || i.close();
      };return a.addEventListener("click", h), d.addEventListener("submit", function () {
        return h(), !1;
      }), i.setFooter([a, s]), i.open(d, t || "&nbsp;", !0, !0), u.focus(), i;
    }, r.Jodit.Promt = t.Promt, t.Confirm = function (e, t, o) {
      var n = new p(),
          i = l.dom('<form class="jodit_promt"></form>', n.document),
          s = l.dom("<label></label>", n.document);"function" == typeof t && (o = t, t = void 0), s.appendChild(l.dom(e, n.document)), i.appendChild(s);var a = l.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + c.ToolbarIcon.getIcon("cancel") + "<span>" + r.Jodit.prototype.i18n("Cancel") + "</span></a>", n.document);a.addEventListener("click", function () {
        o && o(!1), n.close();
      });var d = function d() {
        o && o(!0), n.close();
      },
          u = l.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + c.ToolbarIcon.getIcon("check") + "<span>" + r.Jodit.prototype.i18n("Yes") + "</span></a>", n.document);return u.addEventListener("click", d), i.addEventListener("submit", function () {
        return d(), !1;
      }), n.setFooter([u, a]), n.open(i, t || "&nbsp;", !0, !0), u.focus(), n;
    }, r.Jodit.Confirm = t.Confirm;
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(6),
        i = o(0),
        r = o(3);!function (e) {
      e.ColorPickerWidget = function (e, t, o) {
        var s = i.normalizeColor(o),
            a = i.dom('<div class="jodit_colorpicker"></div>', e.ownerDocument),
            l = function l(e) {
          var t = [];return i.isPlainObject(e) ? Object.keys(e).forEach(function (o) {
            t.push('<div class="jodit_colorpicker_group jodit_colorpicker_group-' + o + '">'), t.push(l(e[o])), t.push("</div>");
          }) : Array.isArray(e) && e.forEach(function (e) {
            t.push("<a " + (s === e ? ' class="active" ' : "") + ' title="' + e + '" style="background-color:' + e + '" data-color="' + e + '" href="javascript:void(0)">' + (s === e ? n.Jodit.modules.ToolbarIcon.getIcon("eye") : "") + "</a>");
          }), t.join("");
        };return a.appendChild(i.dom("<div>" + l(e.options.colors) + "</div>", e.ownerDocument)), a.appendChild(i.dom('<a data-color="" href="javascript:void(0)">' + n.Jodit.modules.ToolbarIcon.getIcon("eraser") + "</a>", e.ownerDocument)), e.events.on(a, "mousedown touchstart", function (o) {
          o.stopPropagation();var s = o.target;if ("SVG" !== s.tagName.toUpperCase() && "PATH" !== s.tagName.toUpperCase() || !s.parentNode || (s = r.Dom.closest(s.parentNode, "A", e.editor)), "A" === s.tagName.toUpperCase()) {
            var l = a.querySelector("a.active");l && (l.classList.remove("active"), l.innerHTML = "");var c = s.getAttribute("data-color") || "";if (c) {
              s.innerHTML = n.Jodit.modules.ToolbarIcon.getIcon("eye"), s.classList.add("active");var d = i.hexToRgb(c);d && (s.firstChild.style.fill = "rgb(" + (255 - d.r) + "," + (255 - d.g) + "," + (255 - d.b) + ")");
            }t && "function" == typeof t && t(c), o.preventDefault();
          }
        }), a;
      }, e.TabsWidget = function (e, t, o) {
        var n = i.dom('<div class="jodit_tabs"></div>', e.ownerDocument),
            r = i.dom('<div class="jodit_tabs_wrapper"></div>', e.ownerDocument),
            s = i.dom('<div class="jodit_tabs_buttons"></div>', e.ownerDocument),
            a = {},
            l = "",
            c = 0;return n.appendChild(s), n.appendChild(r), i.each(t, function (t, n) {
          var d = i.dom('<div class="jodit_tab"></div>', e.ownerDocument),
              u = i.dom('<a href="javascript:void(0);"></a>', e.ownerDocument);l || (l = t), u.innerHTML = e.i18n(t), s.appendChild(u), d.appendChild("function" != typeof n ? i.dom(n, e.ownerDocument) : i.dom('<div class="jodit_tab_empty"></div>', e.ownerDocument)), r.appendChild(d), e.events.on(u, "mousedown touchstart", function (a) {
            return i.$$("a", s).forEach(function (e) {
              e.classList.remove("active");
            }), i.$$(".jodit_tab", r).forEach(function (e) {
              e.classList.remove("active");
            }), u.classList.add("active"), d.classList.add("active"), "function" == typeof n && n.call(e), a.stopPropagation(), o && (o.__activeTab = t), !1;
          }), a[t] = { button: u, tab: d }, c += 1;
        }), c ? (i.$$("a", s).forEach(function (e) {
          e.style.width = (100 / c).toFixed(10) + "%";
        }), o && o.__activeTab && a[o.__activeTab] ? (a[o.__activeTab].button.classList.add("active"), a[o.__activeTab].tab.classList.add("active")) : (a[l].button.classList.add("active"), a[l].tab.classList.add("active")), n) : n;
      }, e.ImageSelectorWidget = function (t, o, r, s) {
        var a,
            l = {};if (o.upload && t.options.uploader && t.options.uploader.url) {
          var c = i.dom('<div class="jodit_draganddrop_file_box"><strong>' + t.i18n("Drop image") + "</strong><span><br> " + t.i18n("or click") + '</span><input type="file" accept="image/*" tabindex="-1" dir="auto" multiple=""/></div>', t.ownerDocument);t.getInstance("Uploader").bind(c, function (e) {
            "function" == typeof o.upload && o.upload.call(t, { baseurl: e.baseurl, files: e.files });
          }, function (e) {
            t.events.fire("errorMessage", e.message);
          }), l[n.Jodit.modules.ToolbarIcon.getIcon("upload") + t.i18n("Upload")] = c;
        }if (o.filebrowser && (t.options.filebrowser.ajax.url || t.options.filebrowser.items.url) && (l[n.Jodit.modules.ToolbarIcon.getIcon("folder") + t.i18n("Browse")] = function () {
          s && s(), o.filebrowser && t.getInstance("FileBrowser").open(o.filebrowser);
        }), o.url) {
          var d = i.dom('<form onsubmit="return false;" class="jodit_form"><input type="text" required name="url" placeholder="http://"/><input type="text" name="text" placeholder="' + t.i18n("Alternative text") + '"/><div style="text-align: right"><button>' + t.i18n("Insert") + "</button></div></form>", t.ownerDocument),
              u = d.querySelector("button"),
              p = d.querySelector("input[name=url]");a = null, r && r.nodeType !== Node.TEXT_NODE && ("IMG" === r.tagName || i.$$("img", r).length) && (a = "IMG" === r.tagName ? r : i.$$("img", r)[0], i.val(d, "input[name=url]", a.getAttribute("src")), i.val(d, "input[name=text]", a.getAttribute("alt")), u.innerText = t.i18n("Update")), d.addEventListener("submit", function (e) {
            return e.preventDefault(), e.stopPropagation(), i.val(d, "input[name=url]") ? ("function" == typeof o.url && o.url.call(t, i.val(d, "input[name=url]"), i.val(d, "input[name=text]")), !1) : (p.focus(), p.classList.add("jodit_error"), !1);
          }, !1), l[n.Jodit.modules.ToolbarIcon.getIcon("link") + " URL"] = d;
        }return e.TabsWidget(t, l);
      };
    }(t.Widget || (t.Widget = {}));
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Component = o(4).Component, t.ContextMenu = o(19).ContextMenu, t.Cookie = o(10).Cookie;var n = o(7);t.Dialog = n.Dialog, t.Alert = n.Alert, t.Confirm = n.Confirm, t.Promt = n.Promt, t.Dom = o(3).Dom, t.EventsNative = o(12).EventsNative, t.FileBrowser = o(59).FileBrowser, t.Helpers = o(0), t.ImageEditor = o(60).ImageEditor, t.Observer = o(16).Observer, t.Select = o(13).Select, t.Snapshot = o(17).Snapshot, t.Table = o(15).Table;var i = o(5);t.ToolbarIcon = i.ToolbarIcon, t.ToolbarCollection = i.ToolbarCollection, t.ToolbarButton = i.ToolbarButton, t.Stack = o(18).Stack, t.Uploader = o(11).Uploader;
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(4);t.Cookie = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }return n(t, e), t.set = function (e, t, o) {
        var n, i;o ? (i = new Date(), i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3), n = "; expires=" + i.toUTCString()) : n = "", document.cookie = e + "=" + t + n + "; path=/";
      }, t.get = function (e) {
        var t,
            o,
            n = e + "=",
            i = document.cookie.split(";");for (t = 0; i.length > t; t += 1) {
          for (o = i[t]; " " === o.charAt(0);) {
            o = o.substring(1, o.length);
          }if (0 === o.indexOf(n)) return o.substring(n.length, o.length);
        }return null;
      }, t.remove = function (e) {
        t.set(e, "", -1);
      }, t;
    }(i.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(4),
        r = o(14),
        s = o(1),
        a = o(0),
        l = o(2),
        c = o(3);s.Config.prototype.enableDragAndDropFileToEditor = !0, s.Config.prototype.uploader = { url: "", headers: null, data: null, format: "json", prepareData: function prepareData(e) {
        return e;
      }, isSuccess: function isSuccess(e) {
        return e.success;
      }, getMessage: function getMessage(e) {
        return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : "";
      }, process: function process(e) {
        return e.data;
      }, error: function error(e) {
        this.jodit.events.fire("errorMessage", e.message, "error", 4e3);
      }, defaultHandlerSuccess: function defaultHandlerSuccess(e) {
        var t = this;e.files && e.files.length && e.files.forEach(function (o) {
          t.jodit.selection.insertImage(e.baseurl + o);
        });
      }, defaultHandlerError: function defaultHandlerError(e) {
        this.jodit.events.fire("errorMessage", e.message);
      } }, t.Uploader = function (e) {
      function t(t, o) {
        var n = e.call(this, t) || this;return n.path = "", n.source = "default", n.options = a.extend(!0, {}, s.Config.prototype.uploader, t.options.uploader, o), t.options.enableDragAndDropFileToEditor && t.options.uploader && t.options.uploader.url && t.events.on("afterInit", function () {
          n.bind(t.editor);
        }), n;
      }return n(t, e), t.prototype.buildData = function (e) {
        if (void 0 !== this.jodit.ownerWindow.FormData) {
          if (e instanceof FormData) return e;if ("string" == typeof e) return e;var t = new FormData();return Object.keys(e).forEach(function (o) {
            t.append(o, e[o]);
          }), t;
        }return e;
      }, t.prototype.send = function (e, t) {
        var o = this;this.__ajax = new r.Ajax(this.jodit, { xhr: function xhr() {
            var e = new XMLHttpRequest();return void 0 !== o.jodit.ownerWindow.FormData ? e.upload.addEventListener("progress", function (e) {
              if (e.lengthComputable) {
                var t = e.loaded / e.total;t *= 100, o.jodit.progress_bar.style.display = "block", o.jodit.progress_bar.style.width = t + "%", 100 === t && (o.jodit.progress_bar.style.display = "none");
              }
            }, !1) : o.jodit.progress_bar.style.display = "none", e;
          }, method: "POST", data: this.buildData(e), url: this.options.url, headers: this.options.headers, contentType: (void 0 === this.jodit.ownerWindow.FormData || "string" == typeof e) && "application/x-www-form-urlencoded; charset=UTF-8", dataType: this.options.format || "json" }), this.__ajax.send().then(t).catch(function (e) {
          o.options.error.call(o, e);
        });
      }, t.prototype.sendFiles = function (e, t, o, n) {
        var i = this;if (e) {
          var r,
              s,
              l,
              c,
              d = e.length,
              u = this;if (!d) return !1;s = new FormData(), s.append("path", u.path), s.append("source", u.source);var p;for (r = 0; d > r; r += 1) {
            if ((p = e[r]) && p.type) {
              var f = p.type.match(/\/([a-z0-9]+)/i);l = f[1] ? f[1].toLowerCase() : "", s.append("files[" + r + "]", e[r], e[r].name || ("" + Math.random()).replace(".", "") + "." + l);
            }
          }if (u.options.prepareData(s), n && n(s), u.options.data && a.isPlainObject(u.options.data)) for (c = Object.keys(u.options.data), r = 0; c.length > r; r += 1) {
            s.append(c[r], u.options.data[c[r]]);
          }u.send(s, function (e) {
            if (!i.options.isSuccess.call(u, e)) return void (o || u.options.defaultHandlerError).call(u, Error(u.options.getMessage(e)));"function" == typeof (t || u.options.defaultHandlerSuccess) && (t || u.options.defaultHandlerSuccess).call(u, u.options.process.call(u, e));
          });
        }
      }, t.prototype.setPath = function (e) {
        this.path = e;
      }, t.prototype.setSource = function (e) {
        this.source = e;
      }, t.dataURItoBlob = function (e) {
        var t,
            o = atob(e.split(",")[1]),
            n = e.split(",")[0].split(":")[1].split(";")[0],
            i = new ArrayBuffer(o.length),
            r = new Uint8Array(i);for (t = 0; o.length > t; t += 1) {
          r[t] = o.charCodeAt(t);
        }return new Blob([r], { type: n });
      }, t.prototype.bind = function (e, o, n) {
        var i = this,
            r = this,
            s = function s(e) {
          var s,
              d,
              u,
              p,
              f = function f(e) {
            d && (e.append("extension", u), e.append("mimetype", d.type));
          };if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length) return i.sendFiles(e.clipboardData.files, o, n), !1;if (a.browser("ff")) return void (e.clipboardData.types.length || e.clipboardData.types[0] === l.TEXT_PLAIN || (p = c.Dom.create("div", "", i.jodit.editorDocument), i.jodit.selection.insertNode(p), p.focus(), setTimeout(function () {
            var e = p.firstChild;if (e && e.hasAttribute("src")) {
              var i = e.getAttribute("src") || "";p.parentNode && p.parentNode.removeChild(p), r.sendFiles([t.dataURItoBlob(i)], o, n);
            }
          }, 200)));if (e.clipboardData && e.clipboardData.items && e.clipboardData.items.length) for (s = 0; e.clipboardData.items.length > s; s += 1) {
            if ("file" === e.clipboardData.items[s].kind && "image/png" === e.clipboardData.items[s].type) {
              if (d = e.clipboardData.items[s].getAsFile()) {
                var h = d.type.match(/\/([a-z0-9]+)/i);u = h[1] ? h[1].toLowerCase() : "", i.sendFiles([d], o, n, f);
              }e.preventDefault();break;
            }
          }
        };this.jodit.editor !== e ? r.jodit.events.on(e, "paste", s) : r.jodit.events.on("processPaste", s), r.jodit.events.on(e, "dragover", function (t) {
          e.classList.add("draghover"), t.preventDefault();
        }).on(e, "dragleave dragend", function (t) {
          e.classList.remove("draghover"), t.preventDefault();
        }).on(e, "drop", function (t) {
          if (e.classList.remove("draghover"), t.dataTransfer && t.dataTransfer.files && t.dataTransfer.files.length) t.preventDefault(), i.sendFiles(t.dataTransfer.files, o, n);else if (t.dataTransfer && t.dataTransfer.getData(l.TEXT_PLAIN) && "-" !== t.dataTransfer.getData(l.TEXT_PLAIN) && e === r.jodit.editor) {
            if (t.preventDefault(), t.stopPropagation(), !i.jodit.selection.insertCursorAtPoint(t.clientX, t.clientY)) return !1;if (o || i.options.defaultHandlerSuccess) {
              var s = { baseurl: "", files: [] };s.files = [t.dataTransfer.getData(l.TEXT_PLAIN)], (o || i.options.defaultHandlerSuccess).call(i, s);
            }t.preventDefault();
          }
        });var d = e.querySelector("input[type=file]");d && r.jodit.events.on(d, "change", function () {
          r.sendFiles(this.files, o, n);
        });
      }, t.prototype.uploadRemoteImage = function (e, t, o) {
        var n = this,
            i = this;i.send({ action: "fileUploadRemote", url: e }, function (e) {
          if (i.options.isSuccess.call(i, e)) "function" == typeof t ? t.call(i, n.options.process(e)) : n.options.defaultHandlerSuccess.call(i, n.options.process(e));else if ("function" == typeof (o || i.options.defaultHandlerError)) return void (o || n.options.defaultHandlerError).call(i, Error(i.options.getMessage(e)));
        });
      }, t;
    }(i.Component);
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function () {
      function e() {
        this.__store = {};
      }return e.prototype.get = function (e, t) {
        if (void 0 !== this.__store[t]) return this.__store[t][e];
      }, e.prototype.indexOf = function (e, t, o) {
        var n = this.get(e, t);if (n) for (var i = 0; n.length > i; i += 1) {
          if (n[i].originalCallback === o) return i;
        }return !1;
      }, e.prototype.namespaces = function () {
        return Object.keys(this.__store);
      }, e.prototype.events = function (e) {
        return this.__store[e] ? Object.keys(this.__store[e]) : [];
      }, e.prototype.set = function (e, t, o, n) {
        void 0 === n && (n = !1), void 0 === this.__store[t] && (this.__store[t] = {}), void 0 === this.__store[t][e] && (this.__store[t][e] = []), n ? this.__store[t][e].unshift(o) : this.__store[t][e].push(o);
      }, e;
    }();t.EventsNative = function () {
      function e(e) {
        var t = this;this.__defaultNameSpace = "JoditEventDefaultNamespace", this.__key = "__JoditEventsNativeNamespaces", this.current = "", this.doc = document, this.prepareEvent = function (e) {
          e.cancelBubble || (e.type.match(/^touch/) && e.changedTouches && e.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach(function (t) {
            Object.defineProperty(e, t, { value: e.changedTouches[0][t], enumerable: !0 });
          }), e.originalEvent || (e.originalEvent = e), "paste" === e.type && void 0 === e.clipboardData && t.doc.defaultView.clipboardData && Object.defineProperty(e, "clipboardData", { get: function get() {
              return t.doc.defaultView.clipboardData;
            }, enumerable: !0 }));
        }, this.__stopped = [], e && (this.doc = e);
      }return e.prototype.eachEvent = function (e, t) {
        var o = this;e.split(/[\s,]+/).forEach(function (e) {
          var n = e.split(".");t.call(o, n[0], n[1] || o.__defaultNameSpace);
        });
      }, e.prototype.getStore = function (e) {
        if (void 0 === e[this.__key]) {
          var t = new n();Object.defineProperty(e, this.__key, { enumerable: !1, configurable: !0, value: t });
        }return e[this.__key];
      }, e.prototype.clearStore = function (e) {
        void 0 !== e[this.__key] && delete e[this.__key];
      }, e.prototype.on = function (e, t, o, n, i) {
        var r = this;void 0 === i && (i = !1);var s = "string" == typeof e ? this : e,
            a = "string" == typeof t ? t : e,
            l = o;void 0 === l && "function" == typeof t && (l = t);var c = this.getStore(s);if ("string" != typeof a || "" === a) throw Error("Need events names");if ("function" != typeof l) throw Error("Need event handler");if (Array.isArray(s)) return s.forEach(function (e) {
          r.on(e, a, l, n);
        }), this;var d = "function" == typeof s.addEventListener,
            u = this,
            p = function p() {
          return l && l.apply(this, arguments);
        };return d && (p = function p(e) {
          if (u.prepareEvent(e), l && !1 === l.call(this, e)) return e.preventDefault(), e.stopImmediatePropagation(), !1;
        }, n && (p = function p(e) {
          u.prepareEvent(e);for (var t = e.target; t && t !== this;) {
            if (t.matches(n)) {
              if (l && !1 === l.call(t, e)) return e.preventDefault(), !1;return;
            }t = t.parentNode;
          }
        })), this.eachEvent(a, function (e, t) {
          if ("" === e) throw Error("Need event name");if (!1 === c.indexOf(e, t, l)) {
            var o = { event: e, originalCallback: l, syntheticCallback: p };c.set(e, t, o, i), t !== r.__defaultNameSpace && c.set(e, r.__defaultNameSpace, o, i), d && s.addEventListener(e, p, !1);
          }
        }), this;
      }, e.prototype.off = function (e, t, o) {
        var n = this,
            i = "string" == typeof e ? this : e,
            r = "string" == typeof t ? t : e,
            s = this.getStore(i),
            a = o;if ("string" != typeof r || !r) return s.namespaces().forEach(function (e) {
          n.off(i, "." + e);
        }), this.clearStore(i), this;void 0 === a && "function" == typeof t && (a = t);var l = "function" == typeof i.removeEventListener,
            c = function c(e) {
          l && i.removeEventListener(e.event, e.syntheticCallback, !1);
        },
            d = function d(e, t) {
          if ("" !== e) {
            var o = s.get(e, t);if (o && o.length) {
              var i = !1;if ("function" != typeof a) o.forEach(c), o.length = 0, i = !0;else {
                var r = s.indexOf(e, t, a);!1 !== r && (c(o[r]), o.splice(r, 1), i = !0);
              }i && t !== n.__defaultNameSpace && d(e, n.__defaultNameSpace);
            }
          } else s.events(t).forEach(function (e) {
            "" !== e && d(e, t);
          });
        };return this.eachEvent(r, function (e, t) {
          t === n.__defaultNameSpace ? s.namespaces().forEach(function (t) {
            d(e, t);
          }) : d(e, t);
        }), this;
      }, e.prototype.triggerNativeEvent = function (e, t) {
        var o = this.doc.createEvent("HTMLEvents");"string" == typeof t ? o.initEvent(t, !0, !0) : (o.initEvent(t.type, t.bubbles, t.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach(function (e) {
          Object.defineProperty(o, e, { value: t[e], enumerable: !0 });
        }), Object.defineProperty(o, "originalEvent", { value: t, enumerable: !0 })), e.dispatchEvent(o);
      }, e.prototype.stopPropagation = function (e, t) {
        var o = this,
            n = "string" == typeof e ? this : e,
            i = "string" == typeof e ? e : t;if ("string" != typeof i) throw Error("Need event names");var r = this.getStore(n);this.eachEvent(i, function (e, t) {
          var n = r.get(e, t);n && o.__stopped.push(n);
        });
      }, e.prototype.removeStop = function (e) {
        if (e) {
          var t = this.__stopped.indexOf(e);-1 !== t && this.__stopped.splice(t, 1);
        }
      }, e.prototype.isStopped = function (e) {
        return void 0 !== e && -1 !== this.__stopped.indexOf(e);
      }, e.prototype.fire = function (e, t) {
        for (var o = this, n = [], i = 2; arguments.length > i; i++) {
          n[i - 2] = arguments[i];
        }var r,
            s = void 0,
            a = "string" == typeof e ? this : e,
            l = "string" == typeof e ? e : t,
            c = "string" == typeof e ? [t].concat(n) : n,
            d = "function" == typeof a.dispatchEvent;if (!d && "string" != typeof l) throw Error("Need events names");var u = this.getStore(a);return "string" != typeof l && d ? this.triggerNativeEvent(a, t) : this.eachEvent(l, function (e, t) {
          if (d) o.triggerNativeEvent(a, e);else {
            var n = u.get(e, t);if (n) {
              o.current = e;try {
                n.every(function (e) {
                  return !o.isStopped(n) && (r = e.syntheticCallback.apply(a, c), void 0 !== r && (s = r), !0);
                });
              } finally {
                o.removeStop(n);
              }
            }
          }
        }), s;
      }, e.prototype.destruct = function () {
        this.off(this);
      }, e;
    }();
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(2),
        r = o(4),
        s = o(0),
        a = o(3);t.Select = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;return t.isMarker = function (e) {
          return a.Dom.isNode(e, t.jodit.editorWindow) && "SPAN" === e.tagName && e.hasAttribute("data-" + i.MARKER_CLASS);
        }, t.marker = function (e, o) {
          void 0 === e && (e = !1);var n = null;o && (n = o.cloneRange(), n.collapse(e));var r = t.jodit.editorDocument.createElement("span");return r.id = i.MARKER_CLASS + "_" + +new Date() + "_" + ("" + Math.random()).slice(2), r.style.lineHeight = "0", r.style.display = "none", r.setAttribute("data-" + i.MARKER_CLASS, e ? "start" : "end"), r.appendChild(t.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE)), n && n.insertNode(r), r;
        }, t.focus = function () {
          var e = t.jodit;if (!t.isFocused()) {
            if (e.options.iframe && s.isIE()) for (var o = 0; 1e5 > o && "complete" !== e.editorDocument.readyState;) {
              o++;
            }e.iframe && e.iframe.focus(), e.editorWindow.focus(), e.editor.focus();var n = e.editorWindow.getSelection(),
                r = e.editorDocument.createRange();if (!n.rangeCount || !t.current()) {
              var a = e.editor.firstChild;a || (a = e.editorDocument.createTextNode(i.INVISIBLE_SPACE), e.editor.appendChild(a)), r.selectNodeContents(a), r.collapse(!0), n.removeAllRanges(), n.addRange(r);
            }return !0;
          }return !1;
        }, t.eachSelection = function (e) {
          var o = t.jodit.editorWindow.getSelection();if (o.rangeCount) {
            var n = o.getRangeAt(0),
                i = [],
                r = n.endContainer === t.jodit.editor ? t.jodit.editor.childNodes[n.endOffset - 1] : n.endContainer;a.Dom.find(n.startContainer === t.jodit.editor ? t.jodit.editor.childNodes[n.startOffset] : n.startContainer, function (e) {
              return !e || a.Dom.isEmptyTextNode(e) || t.isMarker(e) || i.push(e), e === r;
            }, t.jodit.editor, !0, "nextSibling", !1), i.forEach(function (t) {
              e(t);
            });
          }
        }, t.applyCSS = function (e, o, n) {
          void 0 === o && (o = "span");var r,
              l = function l(e) {
            return null !== e && !a.Dom.isEmptyTextNode(e) && !t.isMarker(e);
          },
              c = function c(e) {
            return "FONT" !== e.nodeName && e.nodeType === Node.ELEMENT_NODE && (s.isPlainObject(n) && !1 !== s.each(n, function (t, o) {
              var n = s.css(e, t, void 0, !0);return null !== n && "" !== n && -1 !== o.indexOf(("" + n).toLowerCase());
            }) || "function" == typeof n && n(t.jodit, e));
          },
              d = function d(e) {
            return (RegExp("^" + e.nodeName + "$", "i").test(o) || !(!n || !c(e))) && l(e);
          },
              u = function u(t) {
            d(t) && ("SPAN" === t.nodeName && e && Object.keys(e).forEach(function (o) {
              0 === r || s.css(t, o) == s.normilizeCSSValue(o, e[o]) ? (s.css(t, o, ""), void 0 === r && (r = 0)) : (s.css(t, o, e[o]), void 0 === r && (r = 1));
            }), a.Dom.isBlock(t) || t.getAttribute("style") && "SPAN" === t.nodeName || (a.Dom.unwrap(t), void 0 === r && (r = 0)));
          };if (t.isCollapsed()) {
            var p = !1;if (t.current() && a.Dom.closest(t.current(), o, t.jodit.editor)) {
              p = !0;var f = a.Dom.closest(t.current(), o, t.jodit.editor);f && t.setCursorAfter(f);
            }if ("SPAN" === o.toUpperCase() || !p) {
              var h = a.Dom.create(o, i.INVISIBLE_SPACE, t.jodit.editorDocument);t.insertNode(h), "SPAN" === o.toUpperCase() && e && s.css(h, e), t.setCursorIn(h);
            }
          } else {
            var m = t.save();s.normalizeNode(t.jodit.editor.firstChild), t.jodit.editorDocument.execCommand("fontsize", !1, 7), s.$$('font[size="7"]', t.jodit.editor).forEach(function (n) {
              if (a.Dom.next(n, l, n.parentNode) || a.Dom.prev(n, l, n.parentNode) || !d(n.parentNode) || n.parentNode === t.jodit.editor || a.Dom.isBlock(n.parentNode) && !i.IS_BLOCK.test(o)) {
                if (n.firstChild && !a.Dom.next(n.firstChild, l, n) && !a.Dom.prev(n.firstChild, l, n) && d(n.firstChild)) u(n.firstChild);else if (a.Dom.closest(n, d, t.jodit.editor)) {
                  var c = t.jodit.editorDocument.createRange(),
                      p = a.Dom.closest(n, d, t.jodit.editor);c.setStartBefore(p), c.setEndBefore(n);var f = c.extractContents();f.textContent && s.trim(f.textContent).length || !f.firstChild || a.Dom.unwrap(f.firstChild), p.parentNode && p.parentNode.insertBefore(f, p), c.setStartAfter(n), c.setEndAfter(p);var h = c.extractContents();h.textContent && s.trim(h.textContent).length || !h.firstChild || a.Dom.unwrap(h.firstChild), a.Dom.after(p, h), u(p);
                } else {
                  var m = [],
                      v = void 0;n.firstChild && a.Dom.find(n.firstChild, function (e) {
                    return e && d(e) ? (void 0 === v && (v = !0), m.push(e)) : void 0 === v && (v = !1), !1;
                  }, n, !0), m.forEach(a.Dom.unwrap), v || (void 0 === r && (r = 1), 1 === r && s.css(a.Dom.replace(n, o, !1, !1, t.jodit.editorDocument), e && "SPAN" === o.toUpperCase() ? e : {}));
                }
              } else u(n.parentNode);n.parentNode && a.Dom.unwrap(n);
            }), t.restore(m);
          }
        }, t;
      }return n(t, e), t.prototype.insertCursorAtPoint = function (e, t) {
        var o,
            n = this.jodit.editorDocument;this.removeMarkers();try {
          var i = n.createRange();if (n.caretPositionFromPoint ? (o = n.caretPositionFromPoint(e, t), i.setStart(o.offsetNode, o.offset)) : this.jodit.editorDocument.caretRangeFromPoint && (o = this.jodit.editorDocument.caretRangeFromPoint(e, t), i = this.jodit.editorDocument.createRange(), i.setStart(o.startContainer, o.startOffset)), i && void 0 !== this.jodit.editorWindow.getSelection) {
            i.collapse(!0);var r = this.jodit.editorWindow.getSelection();r.removeAllRanges(), r.addRange(i);
          } else if (void 0 !== n.body.createTextRange) {
            var s = n.body.createTextRange();s.moveToPoint(e, t), s.select();
          }return !0;
        } catch (e) {}return !1;
      }, t.prototype.removeMarkers = function () {
        s.$$("span[data-" + i.MARKER_CLASS + "]", this.jodit.editor).forEach(function (e) {
          e.parentNode && e.parentNode.removeChild(e);
        });
      }, t.prototype.restore = function (e) {
        var t = this;if (void 0 === e && (e = []), Array.isArray(e)) {
          var o = this.jodit.editorWindow.getSelection();o.removeAllRanges(), e.forEach(function (e) {
            var n = t.jodit.editorDocument.createRange(),
                i = t.jodit.editor.querySelector("#" + e.endId),
                r = t.jodit.editor.querySelector("#" + e.startId);if (r) {
              if (e.collapsed || !i) {
                var s = r.previousSibling;s && s.nodeType === Node.TEXT_NODE ? n.setStart(s, s.nodeValue ? s.nodeValue.length : 0) : n.setStartBefore(r), r.parentNode && r.parentNode.removeChild(r), n.collapse(!0);
              } else n.setStartAfter(r), r.parentNode && r.parentNode.removeChild(r), n.setEndBefore(i), i.parentNode && i.parentNode.removeChild(i);o.addRange(n);
            }
          });
        }
      }, t.prototype.save = function () {
        var e = this.jodit.editorWindow.getSelection();if (!e.rangeCount) return [];var t,
            o,
            n,
            i = [],
            r = e.rangeCount,
            s = [];for (t = 0; r > t; t += 1) {
          s[t] = e.getRangeAt(t), s[t].collapsed ? (o = this.marker(!0, s[t]), i[t] = { startId: o.id, collapsed: !0, startMarker: o.outerHTML }) : (o = this.marker(!0, s[t]), n = this.marker(!1, s[t]), i[t] = { startId: o.id, endId: n.id, collapsed: !1, startMarker: o.outerHTML, endMarker: n.outerHTML });
        }for (e.removeAllRanges(), t = r - 1; t >= 0; --t) {
          var a = this.jodit.editorDocument.getElementById(i[t].startId);if (a) if (i[t].collapsed) s[t].setStartAfter(a), s[t].collapse(!0);else if (s[t].setStartBefore(a), i[t].endId) {
            var l = this.jodit.editorDocument.getElementById(i[t].endId);l && s[t].setEndAfter(l);
          }try {
            e.addRange(s[t].cloneRange());
          } catch (e) {}
        }return i;
      }, t.prototype.isCollapsed = function () {
        var e,
            t = this.jodit.editorWindow.getSelection();for (e = 0; t.rangeCount > e; e += 1) {
          if (!t.getRangeAt(e).collapsed) return !1;
        }return !0;
      }, t.prototype.isFocused = function () {
        return this.jodit.editorDocument.hasFocus && this.jodit.editorDocument.hasFocus() && this.jodit.editor === this.jodit.editorDocument.activeElement;
      }, t.prototype.current = function () {
        if (this.jodit.getRealMode() === i.MODE_WYSIWYG && void 0 !== this.jodit.editorWindow.getSelection) {
          var e = this.jodit.editorWindow.getSelection();if (e.rangeCount > 0) {
            var t = e.getRangeAt(0),
                o = t.startContainer;if (t.startContainer.nodeType !== Node.TEXT_NODE && t.startContainer === t.endContainer && t.startOffset !== t.endOffset && (o = t.startContainer.childNodes[t.startOffset]), a.Dom.isOrContains(this.jodit.editor, o)) return o;
          }
        }return !1;
      }, t.prototype.insertNode = function (e, t) {
        if (void 0 === t && (t = !0), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");if (this.focus(), !this.jodit.editorWindow.getSelection) throw Error("Jodit does'n support this browser");var o = this.jodit.editorWindow.getSelection();if (this.isCollapsed() || this.jodit.execCommand("Delete"), o.rangeCount) {
          var n = o.getRangeAt(0);!function (e, t) {
            for (var o = t; o;) {
              if (o === e) return !0;o = o.parentNode;
            }return !1;
          }(this.jodit.editor, n.commonAncestorContainer) ? this.jodit.editor.appendChild(e) : (n.deleteContents(), n.insertNode(e));
        } else this.jodit.editor.appendChild(e);t && this.setCursorAfter(e), this.jodit.setEditorValue();
      }, t.prototype.insertHTML = function (e) {
        if ("" !== e) {
          var t,
              o,
              n = this.jodit.editorDocument.createElement("div"),
              i = this.jodit.editorDocument.createDocumentFragment();for (this.isFocused() || this.jodit.editor.focus(), e instanceof this.jodit.editorWindow.Node ? a.Dom.isNode(e, this.jodit.editorWindow) && n.appendChild(e) : n.innerHTML = "" + e, t = n.lastChild; n.firstChild;) {
            t = n.firstChild, i.appendChild(n.firstChild);
          }for (this.insertNode(i, !1), t ? this.setCursorAfter(t) : this.setCursorIn(i), o = this.jodit.editor.lastChild; o && o.nodeType === Node.TEXT_NODE && o.previousSibling && o.nodeValue && /^\s*$/.test(o.nodeValue);) {
            o = o.previousSibling;
          }t && (o && t === o && t.nodeType === Node.ELEMENT_NODE && this.jodit.editor.appendChild(this.jodit.editorDocument.createElement("br")), this.setCursorAfter(t));
        }
      }, t.prototype.insertImage = function (e, t) {
        void 0 === t && (t = {});var o,
            n = "string" == typeof e ? s.dom('<img src=""/>', this.jodit.editorDocument) : s.dom(e, this.jodit.editorDocument);this.isCollapsed() || this.jodit.execCommand("Delete"), "string" == typeof e && n.setAttribute("src", e), o = "" + this.jodit.options.imageDefaultWidth, o && "auto" !== o && 0 > (o + "").indexOf("px") && 0 > (o + "").indexOf("%") && (o += "px"), t.width = o, t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && s.each(t, function (e, t) {
          n.style[t] = e;
        });var i = function i() {
          (n.offsetHeight > n.naturalHeight || n.offsetWidth > n.naturalWidth) && (n.style.width = "", n.style.height = ""), n.removeEventListener("load", i);
        };n.addEventListener("load", i), n.complete && i(), this.insertNode(n), this.jodit.events.fire("afterInsertImage", n);
      }, t.prototype.setCursorAfter = function (e) {
        var t = this;if (!(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");if (!a.Dom.up(e, function (e) {
          return e === t.jodit.editor || e && e.parentNode === t.jodit.editor;
        }, this.jodit.editor)) throw Error("Node element must be in editor");var o = this.jodit.editorDocument.createRange(),
            n = this.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE);return e.nodeType !== Node.TEXT_NODE ? (o.setStartAfter(e), o.insertNode(n), o.selectNode(n)) : o.setStart(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!1), this.selectRange(o), n;
      }, t.prototype.cursorInTheEdge = function (e, t, o) {
        void 0 === e && (e = !1), void 0 === t && (t = !1), void 0 === o && (o = !1);var n = this.jodit.editorWindow.getSelection(),
            i = function i(e) {
          return e && !a.Dom.isEmptyTextNode(e);
        },
            r = t;if (!n.rangeCount) return !1;var s = n.getRangeAt(0),
            l = function () {
          return !1 === o ? e : !e;
        }() ? s.startContainer : s.endContainer;if (!1 === t) r = a.Dom.up(l, a.Dom.isBlock, this.jodit.editor);else if ("function" == typeof t) r = a.Dom.up(l, t, this.jodit.editor);else if (!a.Dom.isOrContains(t, s.startContainer)) return null;return !(!r || (l === r ? e ? 0 !== s.startOffset : s.endOffset !== [].slice.call(r.childNodes).filter(i).length : e ? l.nodeType === Node.TEXT_NODE && 0 !== s.startOffset || a.Dom.prev(l, i, r) : l.nodeType === Node.TEXT_NODE && (!s.startContainer.nodeValue || s.endOffset !== s.startContainer.nodeValue.length) || a.Dom.next(l, i, r)));
      }, t.prototype.setCursorBefore = function (e) {
        var t = this;if (!(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");if (!a.Dom.up(e, function (e) {
          return e === t.jodit.editor || e && e.parentNode === t.jodit.editor;
        }, this.jodit.editor)) throw Error("Node element must be in editor");var o = this.jodit.editorDocument.createRange(),
            n = this.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE);return e.nodeType !== Node.TEXT_NODE ? (o.setStartBefore(e), o.insertNode(n), o.selectNode(n)) : o.setStart(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!0), this.selectRange(o), n;
      }, t.prototype.setCursorIn = function (e, t) {
        var o = this;if (void 0 === t && (t = !1), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");if (!a.Dom.up(e, function (e) {
          return e === o.jodit.editor || e && e.parentNode === o.jodit.editor;
        }, this.jodit.editor)) throw Error("Node element must be in editor");var n = this.jodit.editorDocument.createRange(),
            r = e,
            s = e;do {
          if (r.nodeType === Node.TEXT_NODE) break;s = r, r = t ? r.firstChild : r.lastChild;
        } while (r);if (s === e && e.nodeType !== Node.TEXT_NODE) {
          var l = this.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE);e.appendChild(l), s = l;
        }return n.selectNodeContents(r || s), n.collapse(t), this.selectRange(n), s;
      }, t.prototype.selectRange = function (e) {
        var t = this.jodit.editorWindow.getSelection();t.removeAllRanges(), t.addRange(e), this.jodit.events.fire("changeSelection");
      }, t.prototype.select = function (e, t) {
        var o = this;if (void 0 === t && (t = !1), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");if (!a.Dom.up(e, function (e) {
          return e === o.jodit.editor || e && e.parentNode === o.jodit.editor;
        }, this.jodit.editor)) throw Error("Node element must be in editor");var n = this.jodit.editorDocument.createRange();n[t ? "selectNodeContents" : "selectNode"](e), this.selectRange(n);
      }, t;
    }(r.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(0),
        s = o(4);i.Config.prototype.defaultAjaxOptions = { dataType: "json", method: "GET", url: "", data: null, contentType: "application/x-www-form-urlencoded; charset=UTF-8", headers: { "X-REQUESTED-WITH": "XMLHttpRequest" }, withCredentials: !0, xhr: function xhr() {
        return new ("undefined" == typeof XDomainRequest ? XMLHttpRequest : XDomainRequest)();
      } }, t.Ajax = function (e) {
      function t(t, o) {
        var n = e.call(this, t) || this;return n.options = r.extend(!0, {}, i.Config.prototype.defaultAjaxOptions, o), n.options.xhr && (n.xhr = n.options.xhr()), n;
      }return n(t, e), t.prototype.__buildParams = function (e, t) {
        if ("string" == typeof e || this.jodit.ownerWindow.FormData && e instanceof this.jodit.ownerWindow.FormData) return e;var o,
            n,
            i,
            r = [];for (o in e) {
          e.hasOwnProperty(o) && (n = t ? t + "[" + o + "]" : o, i = e[o], r.push("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? this.__buildParams(i, n) : encodeURIComponent(n) + "=" + encodeURIComponent(i)));
        }return r.join("&");
      }, t.prototype.abort = function () {
        return this.xhr.abort(), this;
      }, t.prototype.send = function () {
        var e = this;return new Promise(function (t, o) {
          var n = function n(t) {
            switch (e.options.dataType) {case "json":
                try {
                  t = JSON.parse(t);
                } catch (t) {
                  return void o.call(e.xhr, t);
                }}return t;
          };if (e.xhr.onabort = function () {
            o(Error(e.xhr.statusText));
          }, e.xhr.onerror = function () {
            o(Error(e.xhr.statusText));
          }, e.xhr.ontimeout = function () {
            o(Error(e.xhr.statusText));
          }, e.xhr.onload = function () {
            e.response = e.xhr.responseText, e.status = e.xhr.status, t.call(e.xhr, n(e.response));
          }, e.xhr.onreadystatechange = function () {
            if (e.xhr.readyState === XMLHttpRequest.DONE) {
              var i = e.xhr.responseText;e.response = i, e.status = e.xhr.status, 200 === e.xhr.status ? t.call(e.xhr, n(i)) : o.call(e.xhr, Error(e.xhr.statusText || e.jodit.i18n("Connection error!")));
            }
          }, e.xhr.withCredentials = e.options.withCredentials || !1, !e.options.url) throw Error("Need URL for AJAX request");e.xhr.open(e.options.method || "get", e.options.url, !0), e.options.contentType && e.xhr.setRequestHeader && e.xhr.setRequestHeader("Content-type", e.options.contentType), e.options.headers && e.xhr.setRequestHeader && r.each(e.options.headers, function (t, o) {
            e.xhr.setRequestHeader(t, o);
          }), setTimeout(function () {
            e.xhr.send(e.options.data ? e.__buildParams(e.options.data) : void 0);
          }, 0);
        });
      }, t;
    }(s.Component);
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(0),
        i = o(2),
        r = o(3);t.Table = function () {
      function e() {}return e.addSelected = function (e) {
        e.setAttribute(i.JODIT_SELECTED_CELL_MARKER, "1");
      }, e.restoreSelection = function (e) {
        e.removeAttribute(i.JODIT_SELECTED_CELL_MARKER);
      }, e.getAllSelectedCells = function (e) {
        return e ? n.$$("td[" + i.JODIT_SELECTED_CELL_MARKER + "],th[" + i.JODIT_SELECTED_CELL_MARKER + "]", e) : [];
      }, e.getRowsCount = function (e) {
        return e.rows.length;
      }, e.getColumnsCount = function (t) {
        return e.formalMatrix(t).reduce(function (e, t) {
          return Math.max(e, t.length);
        }, 0);
      }, e.formalMatrix = function (e, t) {
        for (var o = [[]], n = Array.prototype.slice.call(e.rows), i = 0, r = void 0; n.length > i; i += 1) {
          var s = Array.prototype.slice.call(n[i].cells);for (r = 0; s.length > r; r += 1) {
            if (!1 === function (e, n) {
              void 0 === o[n] && (o[n] = []);for (var i, r, s = e.colSpan, a = e.rowSpan, l = 0; o[n][l];) {
                l += 1;
              }for (r = 0; a > r; r += 1) {
                for (i = 0; s > i; i += 1) {
                  if (void 0 === o[n + r] && (o[n + r] = []), t && !1 === t(e, n + r, l + i, s, a)) return !1;o[n + r][l + i] = e;
                }
              }
            }(s[r], i)) return o;
          }
        }return o;
      }, e.formalCoordinate = function (t, o, n) {
        void 0 === n && (n = !1);var i = 0,
            r = 0,
            s = 1,
            a = 1;return e.formalMatrix(t, function (e, t, l, c, d) {
          if (o === e) return i = t, r = l, s = c || 1, a = d || 1, n && (r += (c || 1) - 1, i += (d || 1) - 1), !1;
        }), [i, r, s, a];
      }, e.appendRow = function (t, o, i) {
        void 0 === o && (o = !1), void 0 === i && (i = !0);var s,
            a = e.getColumnsCount(t),
            l = r.Dom.create("tr", "", t.ownerDocument);for (s = 0; a > s; s += 1) {
          l.appendChild(r.Dom.create("td", "", t.ownerDocument));
        }i && o && o.nextSibling ? o.parentNode && o.parentNode.insertBefore(l, o.nextSibling) : !i && o ? o.parentNode && o.parentNode.insertBefore(l, o) : (n.$$(":scope>tbody", t)[0] || t).appendChild(l);
      }, e.removeRow = function (t, o) {
        var i,
            s = e.formalMatrix(t),
            a = t.rows[o];n.each(s[o], function (e, n) {
          if (i = !1, 0 > o - 1 || s[o - 1][e] !== n) {
            if (s[o + 1] && s[o + 1][e] === n) {
              if (n.parentNode === a && n.parentNode.nextSibling) {
                i = !0;for (var l = e + 1; s[o + 1][l] === n;) {
                  l += 1;
                }var c = r.Dom.next(n.parentNode, function (e) {
                  return e && e.nodeType === Node.ELEMENT_NODE && "TR" === e.nodeName;
                }, t);s[o + 1][l] ? c.insertBefore(n, s[o + 1][l]) : c.appendChild(n);
              }
            } else n.parentNode && n.parentNode.removeChild(n);
          } else i = !0;if (i && (n.parentNode === a || n !== s[o][e - 1])) {
            var d = n.rowSpan;d - 1 > 1 ? n.setAttribute("rowspan", "" + (d - 1)) : n.removeAttribute("rowspan");
          }
        }), a && a.parentNode && a.parentNode.removeChild(a);
      }, e.appendColumn = function (t, o, n) {
        void 0 === n && (n = !0);var i,
            s = e.formalMatrix(t);for (void 0 === o && (o = e.getColumnsCount(t) - 1), i = 0; s.length > i; i += 1) {
          var a = r.Dom.create("td", "", t.ownerDocument),
              l = s[i][o],
              c = !1;n ? (s[i] && l && o + 1 >= s[i].length || l !== s[i][o + 1]) && (l.nextSibling ? l.parentNode && l.parentNode.insertBefore(a, l.nextSibling) : l.parentNode && l.parentNode.appendChild(a), c = !0) : (0 > o - 1 || s[i][o] !== s[i][o - 1] && s[i][o].parentNode) && (l.parentNode && l.parentNode.insertBefore(a, s[i][o]), c = !0), c || s[i][o].setAttribute("colspan", "" + (parseInt(s[i][o].getAttribute("colspan") || "1", 10) + 1));
        }
      }, e.removeColumn = function (t, o) {
        var i,
            r = e.formalMatrix(t);n.each(r, function (e, t) {
          var n = t[o];if (i = !1, 0 > o - 1 || r[e][o - 1] !== n ? t.length > o + 1 && r[e][o + 1] === n ? i = !0 : n.parentNode && n.parentNode.removeChild(n) : i = !0, i && (0 > e - 1 || n !== r[e - 1][o])) {
            var s = n.colSpan;s - 1 > 1 ? n.setAttribute("colspan", "" + (s - 1)) : n.removeAttribute("colspan");
          }
        });
      }, e.getSelectedBound = function (t, o) {
        var n,
            i,
            r,
            s = [[1 / 0, 1 / 0], [0, 0]],
            a = e.formalMatrix(t);for (n = 0; a.length > n; n += 1) {
          for (i = 0; a[n].length > i; i += 1) {
            -1 !== o.indexOf(a[n][i]) && (s[0][0] = Math.min(n, s[0][0]), s[0][1] = Math.min(i, s[0][1]), s[1][0] = Math.max(n, s[1][0]), s[1][1] = Math.max(i, s[1][1]));
          }
        }for (n = s[0][0]; s[1][0] >= n; n += 1) {
          for (r = 1, i = s[0][1]; s[1][1] >= i; i += 1) {
            for (; a[n][i - r] && a[n][i] === a[n][i - r];) {
              s[0][1] = Math.min(i - r, s[0][1]), s[1][1] = Math.max(i - r, s[1][1]), r += 1;
            }for (r = 1; a[n][i + r] && a[n][i] === a[n][i + r];) {
              s[0][1] = Math.min(i + r, s[0][1]), s[1][1] = Math.max(i + r, s[1][1]), r += 1;
            }for (r = 1; a[n - r] && a[n][i] === a[n - r][i];) {
              s[0][0] = Math.min(n - r, s[0][0]), s[1][0] = Math.max(n - r, s[1][0]), r += 1;
            }for (r = 1; a[n + r] && a[n][i] === a[n + r][i];) {
              s[0][0] = Math.min(n + r, s[0][0]), s[1][0] = Math.max(n + r, s[1][0]), r += 1;
            }
          }
        }return s;
      }, e.normalizeTable = function (t) {
        var o,
            n,
            i,
            r,
            s = [],
            a = e.formalMatrix(t);for (n = 0; a[0].length > n; n += 1) {
          for (i = 1e6, r = !1, o = 0; a.length > o; o += 1) {
            if (void 0 !== a[o][n]) {
              if (2 > a[o][n].colSpan) {
                r = !0;break;
              }i = Math.min(i, a[o][n].colSpan);
            }
          }if (!r) for (o = 0; a.length > o; o += 1) {
            void 0 !== a[o][n] && e.__mark(a[o][n], "colspan", a[o][n].colSpan - i + 1, s);
          }
        }for (o = 0; a.length > o; o += 1) {
          for (i = 1e6, r = !1, n = 0; a[o].length > n; n += 1) {
            if (void 0 !== a[o][n]) {
              if (2 > a[o][n].rowSpan) {
                r = !0;break;
              }i = Math.min(i, a[o][n].rowSpan);
            }
          }if (!r) for (n = 0; a[o].length > n; n += 1) {
            void 0 !== a[o][n] && e.__mark(a[o][n], "rowspan", a[o][n].rowSpan - i + 1, s);
          }
        }for (o = 0; a.length > o; o += 1) {
          for (n = 0; a[o].length > n; n += 1) {
            void 0 !== a[o][n] && (a[o][n].hasAttribute("rowspan") && 1 === a[o][n].rowSpan && a[o][n].removeAttribute("rowspan"), a[o][n].hasAttribute("colspan") && 1 === a[o][n].colSpan && a[o][n].removeAttribute("colspan"), a[o][n].hasAttribute("class") && !a[o][n].getAttribute("class") && a[o][n].removeAttribute("class"));
          }
        }e.__unmark(s);
      }, e.mergeSelected = function (t) {
        var o,
            r = e.getSelectedBound(t, e.getAllSelectedCells(t)),
            s = 0,
            a = null,
            l = 0,
            c = [],
            d = 0,
            u = 0,
            p = [];r && (r[0][0] - r[1][0] || r[0][1] - r[1][1]) && (e.formalMatrix(t, function (t, i, f, h, m) {
          if (!(r[0][0] > i || i > r[1][0] || r[0][1] > f || f > r[1][1])) {
            if (o = t, o.__i_am_already_was) return;o.__i_am_already_was = !0, i === r[0][0] && o.style.width && (s += o.offsetWidth), "" !== n.trim(t.innerHTML.replace(/<br(\/)?>/g, "")) && c.push(t.innerHTML), h > 1 && (d += h - 1), m > 1 && (u += m - 1), a ? e.__mark(o, "remove", 1, p) : (a = t, l = f);
          }
        }), d = r[1][1] - r[0][1] + 1, u = r[1][0] - r[0][0] + 1, a && (d > 1 && e.__mark(a, "colspan", d, p), u > 1 && e.__mark(a, "rowspan", u, p), s && (e.__mark(a, "width", (s / t.offsetWidth * 100).toFixed(i.ACCURACY) + "%", p), l && e.setColumnWidthByDelta(t, l, 0, !0, p)), a.innerHTML = c.join("<br/>"), delete a.__i_am_already_was, e.__unmark(p), e.normalizeTable(t), n.each([].slice.call(t.rows), function (e, t) {
          t.cells.length || t.parentNode.removeChild(t);
        })));
      }, e.splitHorizontal = function (t) {
        var o,
            n,
            i,
            s,
            a,
            l = [];e.getAllSelectedCells(t).forEach(function (c) {
          n = r.Dom.create("td", "", t.ownerDocument), n.appendChild(r.Dom.create("br", "", t.ownerDocument)), i = r.Dom.create("tr", "", t.ownerDocument), o = e.formalCoordinate(t, c), 2 > c.rowSpan ? (e.formalMatrix(t, function (t, n, i) {
            o[0] === n && o[1] !== i && t !== c && e.__mark(t, "rowspan", t.rowSpan + 1, l);
          }), r.Dom.after(r.Dom.closest(c, "tr", t), i), i.appendChild(n)) : (e.__mark(c, "rowspan", c.rowSpan - 1, l), e.formalMatrix(t, function (e, n, i) {
            n > o[0] && o[0] + c.rowSpan > n && o[1] > i && e.parentNode.rowIndex === n && (a = e), n > o[0] && e === c && (s = t.rows[n]);
          }), a ? r.Dom.after(a, n) : s.insertBefore(n, s.firstChild)), c.colSpan > 1 && e.__mark(n, "colspan", c.colSpan, l), e.__unmark(l), e.restoreSelection(c);
        }), this.normalizeTable(t);
      }, e.splitVertical = function (t) {
        var o,
            n,
            s,
            a = [];e.getAllSelectedCells(t).forEach(function (l) {
          o = e.formalCoordinate(t, l), 2 > l.colSpan ? e.formalMatrix(t, function (t, n, i) {
            o[1] === i && o[0] !== n && t !== l && e.__mark(t, "colspan", t.colSpan + 1, a);
          }) : e.__mark(l, "colspan", l.colSpan - 1, a), n = r.Dom.create("td", "", t.ownerDocument), n.appendChild(r.Dom.create("br", "", t.ownerDocument)), l.rowSpan > 1 && e.__mark(n, "rowspan", l.rowSpan, a);var c = l.offsetWidth;r.Dom.after(l, n), s = c / t.offsetWidth / 2, e.__mark(l, "width", (100 * s).toFixed(i.ACCURACY) + "%", a), e.__mark(n, "width", (100 * s).toFixed(i.ACCURACY) + "%", a), e.__unmark(a), e.restoreSelection(l);
        }), e.normalizeTable(t);
      }, e.__mark = function (e, t, o, n) {
        n.push(e), e.__marked_value || (e.__marked_value = {}), e.__marked_value[t] = void 0 === o ? 1 : o;
      }, e.__unmark = function (e) {
        e.forEach(function (e) {
          e.__marked_value && (n.each(e.__marked_value, function (t, o) {
            switch (t) {case "remove":
                e.parentNode && e.parentNode.removeChild(e);break;case "rowspan":
                o > 1 ? e.setAttribute("rowspan", o) : e.removeAttribute("rowspan");break;case "colspan":
                o > 1 ? e.setAttribute("colspan", o) : e.removeAttribute("colspan");break;case "width":
                e.style.width = o;}delete e.__marked_value[t];
          }), delete e.__marked_value);
        });
      }, e.setColumnWidthByDelta = function (t, o, n, r, s) {
        var a,
            l,
            c,
            d = e.formalMatrix(t);for (a = 0; d.length > a; a += 1) {
          l = d[a][o].offsetWidth, c = (l + n) / t.offsetWidth * 100, e.__mark(d[a][o], "width", c.toFixed(i.ACCURACY) + "%", s);
        }r || e.__unmark(s);
      }, e;
    }();
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(4),
        s = o(17),
        a = o(2),
        l = o(18),
        c = o(0);i.Config.prototype.observer = { timeout: 100 };var d = function () {
      function e(e, t, o) {
        this.observer = o, this.oldValue = e, this.newValue = t;
      }return e.prototype.execute = function () {}, e.prototype.undo = function () {
        this.observer.snapshot.restore(this.oldValue);
      }, e.prototype.redo = function () {
        this.observer.snapshot.restore(this.newValue);
      }, e;
    }();t.Command = d, t.Observer = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;o.onChangeStack = function () {
          o.__newValue = o.snapshot.make(), s.Snapshot.equal(o.__newValue, o.__startValue) || (o.stack.execute(new d(o.__startValue, o.__newValue, o)), o.__startValue = o.__newValue);
        }, o.stack = new l.Stack(), o.stack.changed = function () {
          o.changed();
        }, o.snapshot = new s.Snapshot(t), o.__startValue = o.snapshot.make(), o.stack.changed();var n = c.debounce(o.onChangeStack, o.jodit.options.observer.timeout);return t.events.on("updateToolbar", function () {
          o.stack.changed();
        }).on("change", function () {
          o.snapshot.isBlocked || n();
        }), o;
      }return n(t, e), t.prototype.changed = function () {
        this.jodit.getMode() === a.MODE_WYSIWYG && (this.jodit.events.fire("canRedo", this.stack.canRedo()), this.jodit.events.fire("canUndo", this.stack.canUndo()));
      }, t.prototype.redo = function () {
        this.stack.redo();
      }, t.prototype.undo = function () {
        this.stack.undo();
      }, t;
    }(r.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(4);t.Snapshot = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;return t.isBlocked = !1, t;
      }return n(t, e), t.__countElementsBefore = function (e) {
        if (!e || !e.parentNode) return 0;var t,
            o = e.parentNode.childNodes,
            n = 0,
            i = null;for (t = 0; o.length > t; t += 1) {
          if (!i || o[t].nodeType === Node.TEXT_NODE && "" === o[t].textContent || i.nodeType === Node.TEXT_NODE && o[t].nodeType === Node.TEXT_NODE || (n += 1), o[t] === e) return n;i = o[t];
        }return 0;
      }, t.prototype.__decomposeHierarchyNodes = function (e) {
        var o = [];if (!e || !e.parentNode) return [];for (; e && e !== this.jodit.editor;) {
          e && o.push(t.__countElementsBefore(e)), e = e.parentNode;
        }return o.reverse();
      }, t.__strokeOffset = function (e, t) {
        for (; e && e.nodeType === Node.TEXT_NODE;) {
          (e = e.previousSibling) && e.nodeType === Node.TEXT_NODE && null !== e.textContent && (t += e.textContent.length);
        }return t;
      }, t.prototype.make = function () {
        var e = { html: "", range: { startContainer: [], startOffset: 0, endContainer: [], endOffset: 0 } };e.html = this.jodit.getEditorValue();var o = this.jodit.editorWindow.getSelection();if (o.rangeCount) {
          var n = o.getRangeAt(0);e.range = { startContainer: this.__decomposeHierarchyNodes(n.startContainer), startOffset: t.__strokeOffset(n.startContainer, n.startOffset), endContainer: this.__decomposeHierarchyNodes(n.endContainer), endOffset: t.__strokeOffset(n.endContainer, n.endOffset) };
        }return e;
      }, t.prototype.__restoreElementByLadder = function (e) {
        var t,
            o = this.jodit.editor;for (t = 0; o && e.length > t; t += 1) {
          o = o.childNodes[e[t]];
        }return o;
      }, t.equal = function (e, t) {
        return e.html === t.html && JSON.stringify(e.range) === JSON.stringify(t.range);
      }, t.prototype.restore = function (e) {
        this.isBlocked = !0, this.jodit.setEditorValue(e.html);try {
          if (e.range) {
            var t = this.jodit.editorWindow.getSelection(),
                o = this.jodit.editorDocument.createRange();o.setStart(this.__restoreElementByLadder(e.range.startContainer), e.range.startOffset), o.setEnd(this.__restoreElementByLadder(e.range.endContainer), e.range.endOffset), t.removeAllRanges(), t.addRange(o);
          }
        } catch (e) {}this.isBlocked = !1;
      }, t;
    }(i.Component);
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Stack = function () {
      function e() {
        this.commands = [], this.stackPosition = -1, this.savePosition = -1;
      }return e.prototype.execute = function (e) {
        this.__clearRedo(), e.execute(), this.commands.push(e), this.stackPosition += 1, this.changed();
      }, e.prototype.undo = function () {
        this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, this.changed();
      }, e.prototype.canUndo = function () {
        return this.stackPosition >= 0;
      }, e.prototype.redo = function () {
        this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), this.changed();
      }, e.prototype.canRedo = function () {
        return this.commands.length - 1 > this.stackPosition;
      }, e.prototype.save = function () {
        this.savePosition = this.stackPosition, this.changed();
      }, e.prototype.__clearRedo = function () {
        this.commands.length = this.stackPosition + 1;
      }, e.prototype.changed = function () {}, e;
    }();
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(4),
        r = o(0),
        s = o(5);t.ContextMenu = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;return o.hide = function () {
          o.context.classList.remove("jodit_context_menu-show"), o.jodit.ownerWindow.removeEventListener("mouseup", o.hide);
        }, o.context = r.dom('<div class="jodit_context_menu"></div>', t.ownerDocument), o.jodit.ownerDocument.body.appendChild(o.context), o;
      }return n(t, e), t.prototype.show = function (e, t, o) {
        var n = this,
            i = this;Array.isArray(o) && (this.context.innerHTML = "", o.forEach(function (e) {
          if (e) {
            var t = r.dom('<a href="javascript:void(0)">' + (e.icon ? s.ToolbarIcon.getIcon(e.icon) : "") + "<span></span></a>", n.jodit.ownerDocument),
                o = t.querySelector("span");t.addEventListener("click", function (t) {
              return e.exec && e.exec.call(i, t), i.hide(), !1;
            }), o.innerText = i.jodit.i18n(e.title || ""), i.context.appendChild(t);
          }
        }), r.css(i.context, { left: e, top: t }), this.jodit.ownerWindow.addEventListener("mouseup", i.hide), this.context.classList.add("jodit_context_menu-show"));
      }, t;
    }(i.Component);
  }, function (e, t, o) {
    "use strict";
    o(21), o(22);var n = o(6),
        i = o(5),
        r = o(2),
        s = o(27),
        a = o(9),
        l = o(64),
        c = o(70),
        d = o(1);Object.keys(r).forEach(function (e) {
      n.Jodit[e] = r[e];
    });var u = function u(e) {
      return "__esModule" !== e;
    };Object.keys(c).filter(u).forEach(function (e) {
      i.ToolbarIcon.icons[e.replace("_", "-")] = c[e];
    }), Object.keys(a).filter(u).forEach(function (e) {
      n.Jodit.modules[e] = a[e];
    }), Object.keys(s).filter(u).forEach(function (e) {
      n.Jodit.plugins[e] = s[e];
    }), Object.keys(l).filter(u).forEach(function (e) {
      n.Jodit.lang[e] = l[e];
    }), n.Jodit.defaultOptions = new d.Config(), e.exports = n.Jodit;
  }, function (e, t) {}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), o(23), o(24), function (e) {
      e.matches || (e.matches = void 0 !== e.matchesSelector ? e.matchesSelector : function (e) {
        var t = this.ownerDocument.querySelectorAll(e),
            o = this;return Array.prototype.some.call(t, function (e) {
          return e === o;
        });
      });
    }(Element.prototype);
  }, function (e, t) {
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (e) {
      "use strict";
      if ("Element" in e) {
        var t = e.Element.prototype,
            o = Object,
            n = String.prototype.trim || function () {
          return this.replace(/^\s+|\s+$/g, "");
        },
            i = Array.prototype.indexOf || function (e) {
          for (var t = 0, o = this.length; o > t; t++) {
            if (t in this && this[t] === e) return t;
          }return -1;
        },
            r = function r(e, t) {
          this.name = e, this.code = DOMException[e], this.message = t;
        },
            s = function s(e, t) {
          if ("" === t) throw new r("SYNTAX_ERR", "An invalid or illegal string was specified");if (/\s/.test(t)) throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character");return i.call(e, t);
        },
            a = function a(e) {
          for (var t = n.call(e.getAttribute("class") || ""), o = t ? t.split(/\s+/) : [], i = 0, r = o.length; r > i; i++) {
            this.push(o[i]);
          }this._updateClassName = function () {
            e.setAttribute("class", "" + this);
          };
        },
            l = a.prototype = [],
            c = function c() {
          return new a(this);
        };if (r.prototype = Error.prototype, l.item = function (e) {
          return this[e] || null;
        }, l.contains = function (e) {
          return e += "", -1 !== s(this, e);
        }, l.add = function () {
          var e,
              t = arguments,
              o = 0,
              n = t.length,
              i = !1;do {
            e = t[o] + "", -1 === s(this, e) && (this.push(e), i = !0);
          } while (++o < n);i && this._updateClassName();
        }, l.remove = function () {
          var e,
              t,
              o = arguments,
              n = 0,
              i = o.length,
              r = !1;do {
            for (e = o[n] + "", t = s(this, e); -1 !== t;) {
              this.splice(t, 1), r = !0, t = s(this, e);
            }
          } while (++n < i);r && this._updateClassName();
        }, l.toggle = function (e, t) {
          e += "";var o = this.contains(e),
              n = o ? !0 !== t && "remove" : !1 !== t && "add";return n && this[n](e), !0 === t || !1 === t ? t : !o;
        }, l.toString = function () {
          return this.join(" ");
        }, o.defineProperty) {
          var d = { get: c, enumerable: !0, configurable: !0 };try {
            o.defineProperty(t, "classList", d);
          } catch (e) {
            void 0 !== e.number && -2146823252 !== e.number || (d.enumerable = !1, o.defineProperty(t, "classList", d));
          }
        } else o.prototype.__defineGetter__ && t.__defineGetter__("classList", c);
      }
    }(window.self), function () {
      "use strict";
      var e = document.createElement("_");if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
        var t = function t(e) {
          var t = DOMTokenList.prototype[e];DOMTokenList.prototype[e] = function (e) {
            var o,
                n = arguments.length;for (o = 0; n > o; o++) {
              e = arguments[o], t.call(this, e);
            }
          };
        };t("add"), t("remove");
      }if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
        var o = DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle = function (e, t) {
          return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e);
        };
      }e = null;
    }());
  }, function (e, t, o) {
    "use strict";
    e.exports = o(25).polyfill();
  }, function (e, t, o) {
    (function (t) {
      !function (t, o) {
        e.exports = function () {
          "use strict";
          function e(e) {
            var t = typeof e === "undefined" ? "undefined" : _typeof(e);return null !== e && ("object" === t || "function" === t);
          }function o(e) {
            return "function" == typeof e;
          }function n(e) {
            R = e;
          }function i(e) {
            H = e;
          }function r() {
            return void 0 !== B ? function () {
              B(a);
            } : s();
          }function s() {
            var e = setTimeout;return function () {
              return e(a, 1);
            };
          }function a() {
            for (var e = 0; P > e; e += 2) {
              (0, X[e])(X[e + 1]), X[e] = void 0, X[e + 1] = void 0;
            }P = 0;
          }function l(e, t) {
            var o = this,
                n = new this.constructor(d);void 0 === n[K] && D(n);var i = o._state;if (i) {
              var r = arguments[i - 1];H(function () {
                return x(i, n, r, o._result);
              });
            } else C(o, n, e, t);return n;
          }function c(e) {
            var t = this;if (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.constructor === t) return e;var o = new t(d);return _(o, e), o;
          }function d() {}function u() {
            return new TypeError("You cannot resolve a promise with itself");
          }function p() {
            return new TypeError("A promises callback cannot return that same promise.");
          }function f(e) {
            try {
              return e.then;
            } catch (e) {
              return Q.error = e, Q;
            }
          }function h(e, t, o, n) {
            try {
              e.call(t, o, n);
            } catch (e) {
              return e;
            }
          }function m(e, t, o) {
            H(function (e) {
              var n = !1,
                  i = h(o, t, function (o) {
                n || (n = !0, t !== o ? _(e, o) : y(e, o));
              }, function (t) {
                n || (n = !0, w(e, t));
              }, "Settle: " + (e._label || " unknown promise"));!n && i && (n = !0, w(e, i));
            }, e);
          }function v(e, t) {
            t._state === J ? y(e, t._result) : t._state === Z ? w(e, t._result) : C(t, void 0, function (t) {
              return _(e, t);
            }, function (t) {
              return w(e, t);
            });
          }function g(e, t, n) {
            t.constructor === e.constructor && n === l && t.constructor.resolve === c ? v(e, t) : n === Q ? (w(e, Q.error), Q.error = null) : void 0 === n ? y(e, t) : o(n) ? m(e, t, n) : y(e, t);
          }function _(t, o) {
            t === o ? w(t, u()) : e(o) ? g(t, o, f(o)) : y(t, o);
          }function b(e) {
            e._onerror && e._onerror(e._result), j(e);
          }function y(e, t) {
            e._state === G && (e._result = t, e._state = J, 0 !== e._subscribers.length && H(j, e));
          }function w(e, t) {
            e._state === G && (e._state = Z, e._result = t, H(b, e));
          }function C(e, t, o, n) {
            var i = e._subscribers,
                r = i.length;e._onerror = null, i[r] = t, i[r + J] = o, i[r + Z] = n, 0 === r && e._state && H(j, e);
          }function j(e) {
            var t = e._subscribers,
                o = e._state;if (0 !== t.length) {
              for (var n = void 0, i = void 0, r = e._result, s = 0; t.length > s; s += 3) {
                n = t[s], i = t[s + o], n ? x(o, n, i, r) : i(r);
              }e._subscribers.length = 0;
            }
          }function E(e, t) {
            try {
              return e(t);
            } catch (e) {
              return Q.error = e, Q;
            }
          }function x(e, t, n, i) {
            var r = o(n),
                s = void 0,
                a = void 0,
                l = void 0,
                c = void 0;if (r) {
              if (s = E(n, i), s === Q ? (c = !0, a = s.error, s.error = null) : l = !0, t === s) return void w(t, p());
            } else s = i, l = !0;t._state !== G || (r && l ? _(t, s) : c ? w(t, a) : e === J ? y(t, s) : e === Z && w(t, s));
          }function q(e, t) {
            try {
              t(function (t) {
                _(e, t);
              }, function (t) {
                w(e, t);
              });
            } catch (t) {
              w(e, t);
            }
          }function T() {
            return ee++;
          }function D(e) {
            e[K] = ee++, e._state = void 0, e._result = void 0, e._subscribers = [];
          }function I() {
            return Error("Array Methods must be provided an Array");
          }function S(e) {
            return new te(this, e).promise;
          }function N(e) {
            var t = this;return new t(z(e) ? function (o, n) {
              for (var i = e.length, r = 0; i > r; r++) {
                t.resolve(e[r]).then(o, n);
              }
            } : function (e, t) {
              return t(new TypeError("You must pass an array to race."));
            });
          }function k(e) {
            var t = this,
                o = new t(d);return w(o, e), o;
          }function A() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }function L() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }function M() {
            var e = void 0;if (void 0 !== t) e = t;else if ("undefined" != typeof self) e = self;else try {
              e = Function("return this")();
            } catch (e) {
              throw Error("polyfill failed because global object is unavailable in this environment");
            }var o = e.Promise;if (o) {
              var n = null;try {
                n = Object.prototype.toString.call(o.resolve());
              } catch (e) {}if ("[object Promise]" === n && !o.cast) return;
            }e.Promise = oe;
          }var O = void 0;O = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };var z = O,
              P = 0,
              B = void 0,
              R = void 0,
              H = function H(e, t) {
            X[P] = e, X[P + 1] = t, 2 === (P += 2) && (R ? R(a) : $());
          },
              W = "undefined" != typeof window ? window : void 0,
              F = W || {},
              V = F.MutationObserver || F.WebKitMutationObserver,
              Y = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
              U = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
              X = Array(1e3),
              $ = void 0;$ = Y ? function () {
            return function () {
              return process.nextTick(a);
            };
          }() : V ? function () {
            var e = 0,
                t = new V(a),
                o = document.createTextNode("");return t.observe(o, { characterData: !0 }), function () {
              o.data = e = ++e % 2;
            };
          }() : U ? function () {
            var e = new MessageChannel();return e.port1.onmessage = a, function () {
              return e.port2.postMessage(0);
            };
          }() : void 0 === W ? function () {
            try {
              var e = Function("return this")().require("vertx");return B = e.runOnLoop || e.runOnContext, r();
            } catch (e) {
              return s();
            }
          }() : s();var K = Math.random().toString(36).substring(2),
              G = void 0,
              J = 1,
              Z = 2,
              Q = { error: null },
              ee = 0,
              te = function () {
            function e(e, t) {
              this._instanceConstructor = e, this.promise = new e(d), this.promise[K] || D(this.promise), z(t) ? (this.length = t.length, this._remaining = t.length, this._result = Array(this.length), 0 === this.length ? y(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && y(this.promise, this._result))) : w(this.promise, I());
            }return e.prototype._enumerate = function (e) {
              for (var t = 0; this._state === G && e.length > t; t++) {
                this._eachEntry(e[t], t);
              }
            }, e.prototype._eachEntry = function (e, t) {
              var o = this._instanceConstructor,
                  n = o.resolve;if (n === c) {
                var i = f(e);if (i === l && e._state !== G) this._settledAt(e._state, t, e._result);else if ("function" != typeof i) this._remaining--, this._result[t] = e;else if (o === oe) {
                  var r = new o(d);g(r, e, i), this._willSettleAt(r, t);
                } else this._willSettleAt(new o(function (t) {
                  return t(e);
                }), t);
              } else this._willSettleAt(n(e), t);
            }, e.prototype._settledAt = function (e, t, o) {
              var n = this.promise;n._state === G && (this._remaining--, e === Z ? w(n, o) : this._result[t] = o), 0 === this._remaining && y(n, this._result);
            }, e.prototype._willSettleAt = function (e, t) {
              var o = this;C(e, void 0, function (e) {
                return o._settledAt(J, t, e);
              }, function (e) {
                return o._settledAt(Z, t, e);
              });
            }, e;
          }(),
              oe = function () {
            function e(t) {
              this[K] = T(), this._result = this._state = void 0, this._subscribers = [], d !== t && ("function" != typeof t && A(), this instanceof e ? q(this, t) : L());
            }return e.prototype.catch = function (e) {
              return this.then(null, e);
            }, e.prototype.finally = function (e) {
              var t = this,
                  o = t.constructor;return t.then(function (t) {
                return o.resolve(e()).then(function () {
                  return t;
                });
              }, function (t) {
                return o.resolve(e()).then(function () {
                  throw t;
                });
              });
            }, e;
          }();return oe.prototype.then = l, oe.all = S, oe.race = N, oe.resolve = c, oe.reject = k, oe._setScheduler = n, oe._setAsap = i, oe._asap = H, oe.polyfill = M, oe.Promise = oe, oe;
        }();
      }();
    }).call(t, o(26));
  }, function (e, t) {
    var o;o = function () {
      return this;
    }();try {
      o = o || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (o = window);
    }e.exports = o;
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.addNewLine = o(28).addNewLine, t.autofocus = o(29).autofocus, t.backspace = o(30).backspace, t.bold = o(31).bold, t.cleanHTML = o(32).cleanHTML, t.color = o(33).color, o(34), t.enter = o(35).enter, t.errorMessages = o(36).errorMessages, t.font = o(37).font, t.formatBlock = o(38).formatBlock, t.fullsize = o(39).fullsize, t.iframe = o(40).iframe, t.indent = o(41).indent, t.imageInlineToolbar = o(42).imageInlineToolbar, t.imageProcessor = o(43).imageProcessor, t.imageProperties = o(44).imageProperties, t.inlinePopup = o(45).inlinePopup, t.justify = o(46).justify, t.link = o(47).link, t.mobile = o(48).mobile, t.orderedlist = o(49).orderedlist, t.paste = o(50).paste, t.placeholder = o(51).placeholder, t.redoundo = o(52).redoundo, t.resizer = o(53).resizer, t.size = o(54).size, t.source = o(55).source, t.symbols = o(56).symbols, t.hotkeys = o(57).hotkeys, t.table = o(58).TableProcessor, t.tableKeyboardNavigation = o(61).tableKeyboardNavigation, t.search = o(62).search, t.sticky = o(63).sticky;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      if (e.options.addNewLine) {
        var t,
            o,
            n = r.dom('<div role="button" tabIndex="-1" title="' + e.i18n("Break") + '" class="jodit-add-new-line"><span>' + s.ToolbarIcon.getIcon("enter") + "</span></div>", e.ownerDocument),
            i = n.querySelector("span"),
            c = RegExp("^(" + e.options.addNewLineTagsTriggers.join("|") + ")$", "i"),
            d = !1,
            u = !1,
            p = function p() {
          e.options.readonly || e.container.classList.contains("jodit_popup_active") || (clearTimeout(t), n.classList.toggle("jodit-add-new-line_after", !u), n.style.display = "block", n.style.width = e.editor.clientWidth + "px", d = !1);
        },
            f = function f() {
          clearTimeout(t), n.style.display = "none", d = !0;
        },
            h = function h(e) {
          return null !== e && l.Dom.isBlock(e) && !/^(img|table|iframe|hr)$/i.test(e.nodeName);
        },
            m = function m() {
          d || (clearTimeout(t), t = window.setTimeout(f, 500));
        };e.events.on("afterInit", function () {
          e.container.appendChild(n), e.events.on(n, "mousemove", function (e) {
            e.stopPropagation();
          }).on(i, "mousedown touchstart", function (t) {
            var n = e.editorDocument.createElement(e.options.enter);n.appendChild(e.editorDocument.createTextNode(a.INVISIBLE_SPACE)), u && o && o.parentNode ? o.parentNode.insertBefore(n, o) : e.editor.appendChild(n), e.selection.setCursorIn(n), e.setEditorValue(), f(), t.preventDefault();
          });
        }).on("change afterInit afterSetMode", r.debounce(function () {
          e.events.on(e.editor, "scroll", function () {
            f();
          }).on(e.container, "mouseleave", function () {
            m();
          }).on(e.editor, "mousemove", r.debounce(function (t) {
            var i = e.editorDocument.elementFromPoint(t.pageX - e.editorWindow.pageXOffset, t.pageY - e.editorWindow.pageYOffset);if (i && i !== n && l.Dom.isOrContains(e.editor, i)) {
              if (!((o = i) && o.nodeName.match(c) && l.Dom.isOrContains(e.editor, o) || (o = l.Dom.closest(o, c, e.editor)))) return void m();if (o.nodeName.match(c)) {
                var s = l.Dom.up(o, l.Dom.isBlock, e.editor);s && s !== e.editor && (o = s);
              }var a = r.offset(o, e),
                  d = !1;10 > Math.abs(t.pageY - a.top) && (d = a.top, u = !0), 10 > Math.abs(t.pageY - (a.top + a.height)) && (d = a.top + a.height, u = !1), !1 !== d && (u && !l.Dom.prev(o, h, e.editor) || !u && !l.Dom.next(o, h, e.editor)) ? (n.style.top = d + "px", p()) : (o = !1, m());
            }
          }, e.options.observer.timeout));
        }, e.options.observer.timeout));
      }
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(0),
        s = o(5),
        a = o(2),
        l = o(3);i.Config.prototype.addNewLine = !0, i.Config.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "jodit"], t.addNewLine = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t;e.events.on("afterInit", function () {
        e.options.autofocus && (e.options.observer.timeout ? t = window.setTimeout(e.selection.focus, 300) : e.selection.focus());
      }).on("beforeDestruct", function () {
        clearTimeout(t);
      });
    }Object.defineProperty(t, "__esModule", { value: !0 }), o(1).Config.prototype.autofocus = !1, t.autofocus = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = function t(_t) {
        var o,
            n = _t;r.normalizeNode(_t);do {
          var a = n.innerHTML.replace(i.INVISIBLE_SPACE_REG_EXP, "");if (a.length && "<br>" !== a || s.Dom.isCell(n, e.editorWindow) || !n.parentNode || _t === e.editor) break;o = n.parentNode, n.parentNode.removeChild(n), n = o;
        } while (n && n !== e.editor);
      },
          o = function o(t, n, r) {
        if (t.node && t.node.nodeType === Node.TEXT_NODE && "string" == typeof t.node.nodeValue) {
          for (var a = n ? t.node.nodeValue.length : 0, l = a, c = t.node.nodeValue, d = n ? -1 : 1; a >= 0 && c.length >= a && c[a + (n ? -1 : 0)] === i.INVISIBLE_SPACE;) {
            a += d;
          }a !== l && (n ? c = c.substr(0, a) + c.substr(l) : (c = c.substr(0, l) + c.substr(a), a = l), t.node.nodeValue = c), r.setStart(t.node, a), r.collapse(!0), e.selection.selectRange(r);var u = s.Dom.findInline(t.node, n, e.editor);if (c.length) {
            if (n) {
              if (a) return t.node.nodeValue = c.substr(0, a - 1) + c.substr(a), t.node.nodeValue.length || (t.node.nodeValue = i.INVISIBLE_SPACE), r.setStart(t.node, a - 1), r.collapse(!0), e.selection.selectRange(r), !1;
            } else if (c.length > a) return t.node.nodeValue = c.substr(0, a) + c.substr(a + 1), t.node.nodeValue.length || (t.node.nodeValue = i.INVISIBLE_SPACE), r.setStart(t.node, a), r.collapse(!0), e.selection.selectRange(r), !1;
          } else r.setStartBefore(t.node), r.collapse(!0), e.selection.selectRange(r), t.node && t.node.parentNode && t.node.parentNode.removeChild(t.node), t.node = u;if (u && (s.Dom.isInlineBlock(u) && (u = n ? u.lastChild : u.firstChild), u && u.nodeType === Node.TEXT_NODE)) return t.node = u, o(t, n, r);
        }
      };e.events.on("afterCommand", function (t) {
        if ("delete" === t) {
          var o = e.selection.current();if (o && o.firstChild && "BR" === o.firstChild.nodeName && o.removeChild(o.firstChild), !r.trim(e.editor.innerText) && !e.editor.querySelector("img")) {
            e.editor.innerHTML = "";var n = e.selection.setCursorIn(e.editor);n.parentNode && n.parentNode.removeChild(n);
          }
        }
      }).on("keydown", function (n) {
        if (n.which === i.KEY_BACKSPACE || n.keyCode === i.KEY_DELETE) {
          var a = n.which === i.KEY_BACKSPACE;if (e.selection.isFocused() || e.selection.focus(), !e.selection.isCollapsed()) return e.execCommand("Delete"), !1;var l = e.editorWindow.getSelection(),
              c = !!l.rangeCount && l.getRangeAt(0);if (!c) return !1;var d = e.ownerDocument.createTextNode(i.INVISIBLE_SPACE),
              u = e.editorDocument.createElement("span");try {
            if (c.insertNode(d), !s.Dom.isOrContains(e.editor, d)) return !1;var p = s.Dom.up(d, s.Dom.isBlock, e.editor),
                f = s.Dom.findInline(d, a, e.editor);if (f) {
              var h = { node: f };if (!1 === o(h, a, c)) return !1;if ((f = h.node || d.parentNode) === e.editor) return !1;if (f && f.nodeName.match(/^(IMG|BR|IFRAME|SCRIPT|INPUT|TEXTAREA|TABLE|HR)$/)) return f.parentNode && f.parentNode.removeChild(f), !1;
            }if (p && p.nodeName.match(/^(TD)$/)) return !1;var m = a ? s.Dom.prev(f || d, s.Dom.isBlock, e.editor) : s.Dom.next(f || d, s.Dom.isBlock, e.editor);if (!m && p && p.parentNode) {
              m = e.editorDocument.createElement(e.options.enter);for (var h = p; h && h.parentNode && h.parentNode !== e.editor;) {
                h = h.parentNode;
              }h.parentNode && h.parentNode.insertBefore(m, h);
            }if (m) {
              var v = e.selection.setCursorIn(m, !a);e.selection.insertNode(u, !1), v.nodeType === Node.TEXT_NODE && v.nodeValue === i.INVISIBLE_SPACE && v.parentNode && v.parentNode.removeChild(v);
            }if (p) {
              if (t(p), m && p.parentNode && (p.nodeName === m.nodeName && p.parentNode && m.parentNode && p.parentNode !== e.editor && m.parentNode !== e.editor && p.parentNode !== m.parentNode && p.parentNode.nodeName === m.parentNode.nodeName && (p = p.parentNode, m = m.parentNode), s.Dom.moveContent(p, m, !a), r.normalizeNode(m)), m && "LI" === m.nodeName) {
                var g = s.Dom.closest(m, "Ul|OL", e.editor);if (g) {
                  var _ = g.nextSibling;_ && _.nodeName === g.nodeName && g !== _ && (s.Dom.moveContent(_, g, !a), _.parentNode && _.parentNode.removeChild(_));
                }
              }if (t(p), u) {
                var v = e.selection.setCursorBefore(u);v.parentNode && v.parentNode.removeChild(v);
              }return !1;
            }
          } finally {
            u.parentNode && u.parentNode.removeChild(u), d.parentNode && d.nodeValue === i.INVISIBLE_SPACE && d.parentNode.removeChild(d);
          }return !1;
        }
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(2),
        r = o(0),
        s = o(3);t.backspace = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = function t(_t2) {
        var o = i({}, r.Jodit.defaultOptions.controls[_t2].css),
            n = {};Object.keys(o).forEach(function (e) {
          n[e] = Array.isArray(o[e]) ? o[e][0] : o[e];
        });var s = r.Jodit.defaultOptions.controls[_t2];return e.selection.applyCSS(n, s.tags ? s.tags[0] : void 0, s.css), e.setEditorValue(), !1;
      };e.registerCommand("bold", { exec: t, hotkeys: "ctrl+b" }), e.registerCommand("italic", { exec: t, hotkeys: "ctrl+i" }), e.registerCommand("underline", { exec: t, hotkeys: "ctrl+u" }), e.registerCommand("strikethrough", { exec: t });
    }var i = this && this.__assign || Object.assign || function (e) {
      for (var t, o = 1, n = arguments.length; n > o; o++) {
        t = arguments[o];for (var i in t) {
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
      }return e;
    };Object.defineProperty(t, "__esModule", { value: !0 });var r = o(6),
        s = o(1);s.Config.prototype.controls.bold = { tagRegExp: /^(strong|b)$/i, tags: ["strong", "b"], css: { "font-weight": ["bold", "700"] }, tooltip: "Bold" }, s.Config.prototype.controls.italic = { tagRegExp: /^(em|i)$/i, tags: ["em", "i"], css: { "font-style": "italic" }, tooltip: "Italic" }, s.Config.prototype.controls.underline = { tagRegExp: /^(u)$/i, tags: ["u"], css: { "text-decoration": "underline" }, tooltip: "Underline" }, s.Config.prototype.controls.strikethrough = { tagRegExp: /^(s)$/i, tags: ["s"], css: { "text-decoration": "line-through" }, tooltip: "Strike through" }, t.bold = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      if (e.options.cleanHTML.cleanOnPaste && e.events.on("processPaste", function (e, t) {
        return s.cleanFromWord(t);
      }), e.options.cleanHTML.allowTags) {
        var t = /([^\[]*)\[([^\]]+)]/,
            o = /[\s]*,[\s]*/,
            n = /^(.*)[\s]*=[\s]*(.*)$/,
            i = {};"string" == typeof e.options.cleanHTML.allowTags ? e.options.cleanHTML.allowTags.split(o).map(function (e) {
          e = s.trim(e);var r = t.exec(e),
              a = {},
              l = function l(e) {
            e = s.trim(e);var t = n.exec(e);t ? a[t[1]] = t[2] : a[e] = !0;
          };if (r) {
            var c = r[2].split(o);r[1] && (c.map(l), i[r[1].toUpperCase()] = a);
          } else i[e.toUpperCase()] = !0;
        }) : i = e.options.cleanHTML.allowTags, e.events.on("beforeSetElementValue", function (t) {
          if (e.getRealMode() === r.MODE_WYSIWYG) {
            var o = a.Dom.create("div", "", e.editorDocument),
                n = null,
                s = [],
                l = void 0,
                c = 0;for (o.innerHTML = t.value, o.firstChild && (n = o.firstChild); n;) {
              if (n && n.nodeName) if (i[n.nodeName]) {
                if (!0 !== i[n.nodeName] && n.attributes && n.attributes.length) {
                  for (l = [], c = 0; n.attributes.length > c; c += 1) {
                    (!i[n.nodeName][n.attributes[c].name] || !0 !== i[n.nodeName][n.attributes[c].name] && i[n.nodeName][n.attributes[c].name] !== n.attributes[c].value) && l.push(n.attributes[c].name);
                  }for (c = 0; l.length >= c; c += 1) {
                    n.removeAttribute(l[c]);
                  }
                }
              } else s.push(n);n = a.Dom.next(n, function (e) {
                return !!e;
              }, o, !0);
            }var d;for (c = 0; s.length > c; c += 1) {
              d = s[c].parentNode, s[c] && d && d.removeChild(s[c]);
            }t.value = o.innerHTML;
          }
        });
      }e.events.on("keyup", function () {
        if (e.selection.isCollapsed()) {
          var t = e.selection.current();if (t && t.nodeType === Node.TEXT_NODE && t.nodeValue !== r.INVISIBLE_SPACE) for (; t = a.Dom.findInline(t, !0, e.editor);) {
            t && t.nodeType === Node.TEXT_NODE && t.nodeValue && t.nodeValue.match(r.INVISIBLE_SPACE_REG_EXP) && (t.nodeValue = t.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP, ""));
          }
        }
      }).on("afterCommand", function (t) {
        var o,
            n,
            i = e.selection;switch (t.toLowerCase()) {case "inserthorizontalrule":
            (o = e.editor.querySelector("hr[id=null]")) && (n = a.Dom.next(o, a.Dom.isBlock, e.editor, !1), n || (n = a.Dom.create(e.options.enter, "", e.editorDocument)) && a.Dom.after(o, n), i.setCursorIn(n));break;case "removeformat":
            n = i.current();var l = function l(t) {
              switch (t.nodeType) {case Node.ELEMENT_NODE:
                  a.Dom.each(t, l), "FONT" === t.nodeName ? a.Dom.unwrap(t) : ([].slice.call(t.attributes).forEach(function (e) {
                    -1 === ["src", "href", "rel", "content"].indexOf(e.name.toLowerCase()) && t.removeAttribute(e.name);
                  }), s.normalizeNode(t));break;case Node.TEXT_NODE:
                  e.options.cleanHTML.replaceNBSP && t.nodeType === Node.TEXT_NODE && null !== t.nodeValue && t.nodeValue.match(r.SPACE_REG_EXP) && (t.nodeValue = t.nodeValue.replace(r.SPACE_REG_EXP, " "));break;default:
                  t.parentNode && t.parentNode.removeChild(t);}
            };if (i.isCollapsed()) for (; n && n.nodeType !== Node.ELEMENT_NODE && n !== e.editor;) {
              l(n), n && (n = n.parentNode);
            } else e.selection.eachSelection(function (e) {
              l(e);
            });}
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(2),
        s = o(0),
        a = o(3);i.Config.prototype.cleanHTML = { replaceNBSP: !0, cleanOnPaste: !0, allowTags: !1 }, i.Config.prototype.controls.eraser = { command: "removeFormat", tooltip: "Clear Formatting" }, t.cleanHTML = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = function t(_t3, o, n) {
        var r = i.normalizeColor(n);switch (_t3) {case "background":
            e.selection.applyCSS({ backgroundColor: r || "" });break;case "forecolor":
            e.selection.applyCSS({ color: r || "" });}return e.setEditorValue(), !1;
      };e.registerCommand("forecolor", t), e.registerCommand("background", t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(0),
        r = o(1),
        s = o(8),
        a = s.Widget.TabsWidget,
        l = s.Widget.ColorPickerWidget,
        c = o(3);r.Config.prototype.controls.brush = { isActive: function isActive(e, t, o) {
        var n = e.selection.current(),
            r = o.container.querySelector("svg");if (n) {
          var s = c.Dom.closest(n, function (t) {
            return c.Dom.isBlock(t) || c.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE;
          }, e.editor) || e.editor,
              a = "" + i.css(s, "color"),
              l = "" + i.css(s, "background-color");if (a !== "" + i.css(e.editor, "color")) return r && (r.style.fill = a), !0;if (l !== "" + i.css(e.editor, "background-color")) return r && (r.style.fill = l), !0;
        }return r && r.style.fill && (r.style.fill = null), !1;
      }, popup: function popup(e, t, o, n) {
        var r,
            s = "",
            d = "",
            u = null;t && t !== e.editor && c.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE && (s = "" + i.css(t, "color"), d = "" + i.css(t, "background-color"), u = t);var p = l(e, function (t) {
          u ? u.style.backgroundColor = t : e.execCommand("background", !1, t), n();
        }, d),
            f = l(e, function (t) {
          u ? u.style.color = t : e.execCommand("forecolor", !1, t), n();
        }, s);return r = "background" === e.options.colorPickerDefaultTab ? { Background: p, Text: f } : { Text: f, Background: p }, a(e, r, u);
      }, tooltip: "Fill color or set the text color" }, t.color = n;
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(1),
        i = o(3),
        r = o(0),
        s = ["fontWeight", "fontStyle", "fontSize", "color", "backgroundColor", "textDecorationLine", "fontFamily"],
        a = function a(e, t, o, n) {
      var i = r.css(o, t);return i == n[t] && (i = o.parentNode && o !== e.editor && o.parentNode !== e.editor ? a(e, t, o.parentNode, n) : void 0), i;
    },
        l = function l(e, t, o) {
      var n = {};return t && s.forEach(function (i) {
        n[i] = a(e, i, t, o);
      }), n;
    };n.Config.prototype.controls.copyformat = { exec: function exec(e, t) {
        if (t) if (e.buffer.copyformat) e.buffer.copyformat = !1, e.events.off(e.editor, "mouseup.copyformat");else {
          var o = {};s.forEach(function (t) {
            o[t] = r.css(e.editor, t);
          });var n = i.Dom.up(t, function (e) {
            return e && e.nodeType !== Node.TEXT_NODE;
          }, e.editor) || e.editor,
              a = l(e, n, o),
              c = function c() {
            e.buffer.copyformat = !1, e.selection.current() && e.selection.applyCSS(a), e.events.off(e.editor, "mouseup.copyformat");
          };e.events.on(e.editor, "mouseup.copyformat", c), e.buffer.copyformat = !0;
        }
      }, isActive: function isActive(e) {
        return !!e.buffer.copyformat;
      }, tooltip: "Paint format" };
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.events.on("keyup", function () {
        if (!e.options.readonly) {
          var t = e.selection.current();if (!1 !== t) {
            var o = s.Dom.up(t, function (t) {
              return t.tagName === e.options.enter.toUpperCase();
            }, e.editor);o && s.Dom.all(o, function (o) {
              o.nodeType === Node.TEXT_NODE && null !== o.nodeValue && r.INVISIBLE_SPACE_REG_EXP.test(o.nodeValue) && 0 !== o.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP, "").length && (o.nodeValue = o.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP, ""), o === t && e.selection.setCursorAfter(o));
            });
          }
        }
      }), e.events.on("keydown", function (o) {
        if (o.which === r.KEY_ENTER || o.keyCode === r.KEY_ENTER) {
          e.selection.isCollapsed() || e.execCommand("Delete"), e.selection.focus();var n = e.selection.current(),
              a = e.editorWindow.getSelection(),
              l = a.rangeCount ? a.getRangeAt(0) : e.editorDocument.createRange();n && n !== e.editor || (n = s.Dom.create("text", r.INVISIBLE_SPACE, e.editorDocument), a.rangeCount ? l.insertNode(n) : e.editor.appendChild(n), l.selectNode(n), l.collapse(!1), a.removeAllRanges(), a.addRange(l));var c = void 0,
              d = !!n && s.Dom.up(n, s.Dom.isBlock, e.editor);if (e.options.enter === r.BR || o.shiftKey || s.Dom.closest(n, "PRE|BLOCKQUOTE", e.editor)) {
            var u = s.Dom.create("br", void 0, e.editorDocument);return e.selection.insertNode(u), i.scrollIntoView(u, e.editor), !1;
          }if (!d && n && !s.Dom.prev(n, function (t) {
            return s.Dom.isBlock(t) || !!t && s.Dom.isImage(t, e.ownerWindow);
          }, e.editor)) {
            var p = n;s.Dom.up(p, function (t) {
              t && t.hasChildNodes() && t !== e.editor && (p = t);
            }, e.editor), d = s.Dom.wrap(p, e.options.enter, e), l = a.rangeCount ? a.getRangeAt(0) : e.editorDocument.createRange();
          }if (d) {
            if (!s.Dom.canSplitBlock(d, e.editorWindow)) {
              var u = e.editorDocument.createElement("br");return e.selection.insertNode(u, !1), e.selection.setCursorAfter(u), !1;
            }if ("LI" === d.nodeName && s.Dom.isEmpty(d)) {
              var f = s.Dom.closest(d, "ol|ul", e.editor);if (s.Dom.prev(d, function (e) {
                return e && "LI" === e.nodeName;
              }, f)) {
                if (s.Dom.next(d, function (e) {
                  return e && "LI" === e.nodeName;
                }, f)) {
                  var h = e.editorDocument.createRange();h.setStartBefore(f), h.setEndAfter(d);var m = h.extractContents();f.parentNode && f.parentNode.insertBefore(m, f), c = e.selection.setCursorBefore(f);
                } else c = e.selection.setCursorAfter(f);
              } else c = e.selection.setCursorBefore(f);return d.parentNode && d.parentNode.removeChild(d), t.insertParagraph(e, c), !i.$$("li", f).length && f.parentNode && f.parentNode.removeChild(f), !1;
            }if (e.selection.cursorInTheEdge(!0, d)) c = e.selection.setCursorBefore(d), t.insertParagraph(e, c, "LI" === d.nodeName ? "li" : e.options.enter), e.selection.setCursorIn(d, !0);else if (e.selection.cursorInTheEdge(!1, d)) c = e.selection.setCursorAfter(d), t.insertParagraph(e, c, "LI" === d.nodeName ? "li" : e.options.enter);else {
              var h = e.editorDocument.createRange();h.setStartBefore(d), h.setEnd(l.startContainer, l.startOffset);var m = h.extractContents();d.parentNode && d.parentNode.insertBefore(m, d), e.selection.setCursorIn(d, !0);
            }
          } else t.insertParagraph(e);return !1;
        }
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(0),
        r = o(2),
        s = o(3);t.insertParagraph = function (e, t, o) {
      o || (o = e.options.enter);var n = e.editorDocument.createElement(o);return n.appendChild(e.editorDocument.createTextNode(r.INVISIBLE_SPACE)), e.selection.insertNode(n, !1), e.selection.setCursorIn(n), t && t.parentNode && t.parentNode.removeChild(t), i.scrollIntoView(n, e.editor), n;
    }, t.enter = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      if (e.options.showMessageErrors) {
        var t,
            o = r.dom('<div class="jodit_error_box_for_messages"></div>', e.ownerDocument),
            n = function n() {
          t = 5, [].slice.call(o.childNodes).forEach(function (n) {
            r.css(o, "bottom", t + "px"), t += n.offsetWidth + e.options.showMessageErrorOffsetPx;
          });
        };e.workplace.appendChild(o), e.events.on("errorMessage", function (t, i, s) {
          var a = r.dom('<div class="active ' + (i || "") + '">' + t + "</div>", e.ownerDocument);o.appendChild(a), n(), setTimeout(function () {
            a.classList.remove("active"), setTimeout(function () {
              o.removeChild(a), n();
            }, 300);
          }, s || e.options.showMessageErrorTime);
        });
      }
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(0);i.Config.prototype.showMessageErrors = !0, i.Config.prototype.showMessageErrorTime = 3e3, i.Config.prototype.showMessageErrorOffsetPx = 3, t.errorMessages = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = function t(_t4, o, n) {
        switch (_t4) {case "fontsize":
            e.selection.applyCSS({ fontSize: i.normalizeSize(n) });break;case "fontname":
            e.selection.applyCSS({ fontFamily: n });}return e.setEditorValue(), !1;
      };e.registerCommand("fontsize", t), e.registerCommand("fontname", t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(0),
        r = o(1),
        s = o(3);r.Config.prototype.controls.fontsize = { command: "fontSize", list: ["8", "9", "10", "11", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"], template: function template(e, t, o) {
        return o;
      }, tooltip: "Font size", isActiveChild: function isActiveChild(e, t) {
        var o = e.selection.current();if (o) {
          var n = s.Dom.closest(o, function (t) {
            return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE;
          }, e.editor) || e.editor,
              r = i.css(n, "font-size");return !(!r || !t.args || "" + t.args[1] != "" + r);
        }return !1;
      }, isActive: function isActive(e) {
        var t = e.selection.current();if (t) {
          var o = s.Dom.closest(t, function (t) {
            return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE;
          }, e.editor) || e.editor;return "" + i.css(o, "font-size") != "" + i.css(e.editor, "font-size");
        }return !1;
      } }, r.Config.prototype.controls.font = { command: "fontname", exec: function exec(e, t, o) {
        e.execCommand(o.command, !1, o.args ? o.args[0] : void 0);
      }, list: { "Helvetica,sans-serif": "Helvetica", "Arial,Helvetica,sans-serif": "Arial", "Georgia,serif": "Georgia", "Impact,Charcoal,sans-serif": "Impact", "Tahoma,Geneva,sans-serif": "Tahoma", "'Times New Roman',Times,serif": "Times New Roman", "Verdana,Geneva,sans-serif": "Verdana" }, template: function template(e, t, o) {
        return '<span style="font-family: ' + t + '">' + o + "</span>";
      }, isActiveChild: function isActiveChild(e, t) {
        var o = e.selection.current(),
            n = function n(e) {
          return e.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9]+/g, ",");
        };if (o) {
          var r = s.Dom.closest(o, function (t) {
            return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE;
          }, e.editor) || e.editor,
              a = "" + i.css(r, "font-family");return !(!a || !t.args || n("" + t.args[0]) !== n(a));
        }return !1;
      }, isActive: function isActive(e) {
        var t = e.selection.current();if (t) {
          var o = s.Dom.closest(t, function (t) {
            return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE;
          }, e.editor) || e.editor;return "" + i.css(o, "font-family") != "" + i.css(e.editor, "font-family");
        }return !1;
      }, tooltip: "Font family" }, t.font = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.registerCommand("formatblock", function (t, o, n) {
        e.selection.focus();var s = !1;if (e.selection.eachSelection(function (t) {
          var o = e.selection.save(),
              r = !!t && i.Dom.up(t, i.Dom.isBlock, e.editor);if (!r && t && (r = i.Dom.wrap(t, e.options.enter, e)), !r) return e.selection.restore(o), !1;r.tagName.match(/TD|TH|TBODY|TABLE|THEAD/i) ? e.selection.isCollapsed() ? i.Dom.wrap(t, n, e) : e.selection.applyCSS({}, n) : i.Dom.replace(r, n, !0, !1, e.editorDocument), s = !0, e.selection.restore(o);
        }), !s) {
          var a = i.Dom.create(n, r.INVISIBLE_SPACE, e.editorDocument);e.selection.insertNode(a, !1), e.selection.setCursorIn(a);
        }return e.setEditorValue(), !1;
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(3),
        r = o(2);o(1).Config.prototype.controls.paragraph = { command: "formatBlock", getLabel: function getLabel(e, t, o) {
        var n = e.selection.current();if (n && e.options.textIcons) {
          var r = i.Dom.closest(n, i.Dom.isBlock, e.editor) || e.editor,
              s = r.nodeName.toLowerCase();t.data && t.data.currentValue !== s && t.list && t.list[s] && (o.textBox.innerHTML = "<span>" + t.list[s] + "</span>", o.textBox.firstChild.classList.add("jodit_icon"), t.data.currentValue = s);
        }return !1;
      }, exec: function exec(e, t, o) {
        e.execCommand(o.command, !1, o.args ? o.args[0] : void 0);
      }, data: { currentValue: "left" }, list: { p: "Normal", h1: "Heading 1", h2: "Heading 2", h3: "Heading 3", h4: "Heading 4", blockquote: "Quote", pre: "Code" }, isActiveChild: function isActiveChild(e, t) {
        var o = e.selection.current();if (o) {
          var n = i.Dom.closest(o, i.Dom.isBlock, e.editor);return n && n !== e.editor && void 0 !== t.args && n.nodeName.toLowerCase() === t.args[0];
        }return !1;
      }, isActive: function isActive(e, t) {
        var o = e.selection.current();if (o) {
          var n = i.Dom.closest(o, i.Dom.isBlock, e.editor);return n && n !== e.editor && void 0 !== t.list && "p" !== n.nodeName.toLowerCase() && void 0 !== t.list[n.nodeName.toLowerCase()];
        }return !1;
      }, template: function template(e, t, o) {
        return "<" + t + ' class="jodit_list_element"><span>' + e.i18n(o) + "</span></" + t + "></li>";
      }, tooltip: "Insert format block" }, t.formatBlock = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = !1,
          o = 0,
          n = 0,
          i = !1,
          a = function a() {
        e.events && (t ? (o = r.css(e.container, "height"), n = r.css(e.container, "width"), r.css(e.container, { height: e.ownerWindow.innerHeight, width: e.ownerWindow.innerWidth }), i = !0) : i && r.css(e.container, { height: o || "auto", width: n || "auto" }));
      },
          l = function l(o) {
        if (void 0 === o && (o = !e.container.classList.contains("jodit_fullsize")), t = o, e.container.classList.toggle("jodit_fullsize", o), e.toolbar) {
          r.css(e.toolbar.container, "width", "auto");var n = r.dom(s.ToolbarIcon.getIcon(o ? "shrink" : "fullsize"), e.ownerDocument),
              i = e.toolbar.container.querySelector(".jodit_toolbar_btn-fullsize a");i && (n.classList.add("jodit_icon"), i.innerHTML = "", i.appendChild(n));
        }if (e.options.globalFullsize) {
          for (var l = e.container.parentNode; l && !(l instanceof Document);) {
            l.classList.toggle("jodit_fullsize_box", o), l = l.parentNode;
          }a();
        }e.events.fire("afterResize");
      };e.options.fullsize && e.events.on("afterInit", function () {
        l(!0);
      }), e.options.globalFullsize && e.events.on(e.ownerWindow, "resize", a), e.events.on("toggleFullsize", l), e.events.on("beforeDestruct", function () {
        l(!1);
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(0),
        s = o(5),
        a = o(2);i.Config.prototype.fullsize = !1, i.Config.prototype.globalFullsize = !0, i.Config.prototype.controls.fullsize = { exec: function exec(e) {
        e.events.fire("toggleFullsize");
      }, tooltip: "Open editor in fullsize", mode: a.MODE_SOURCE + a.MODE_WYSIWYG }, t.fullsize = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.events.on("generateDocumentStructure.iframe", function (t) {
        if (t.open(), t.write('<!DOCTYPE html>\n                    <html dir="' + e.options.direction + '" class="jodit" lang="' + r.defaultLanguage(e.options.language) + '">\n                        <head>\n                            ' + (e.options.iframeBaseUrl ? '<base href="' + e.options.iframeBaseUrl + '"/>' : "") + '\n                        </head>\n                        <body class="jodit_wysiwyg" style="outline:none" contenteditable="true"></body>\n                    </html>'), t.close(), e.options.iframeCSSLinks && e.options.iframeCSSLinks.forEach(function (e) {
          var o = r.dom('<link rel="stylesheet" href="' + e + '">', t);t.head.appendChild(o);
        }), e.options.iframeStyle) {
          var o = t.createElement("style");o.innerHTML = e.options.iframeStyle, t.head.appendChild(o);
        }
      }).on("createEditor", function () {
        if (e.options.iframe) {
          e.iframe = e.ownerDocument.createElement("iframe"), e.iframe.style.display = "block", e.iframe.src = "about:blank", e.iframe.className = "jodit_wysiwyg_iframe", e.iframe.frameBorder = "0", e.iframe.setAttribute("allowtransparency", "true"), e.iframe.setAttribute("tabindex", "0"), e.iframe.setAttribute("frameborder", "0"), e.workplace.appendChild(e.iframe);var t = e.iframe.contentWindow.document;if (e.events.fire("generateDocumentStructure.iframe", t), e.editorDocument = t, e.editorWindow = e.iframe.contentWindow, e.editor = t.body, "auto" === e.options.height) {
            t.documentElement.style.overflowY = "hidden";var o = function o() {
              e.editor && r.css(e.iframe, "height", e.editor.offsetHeight);
            };e.events.on("change afterInit afterSetMode resize", o).on([e.iframe, e.editorWindow, t.documentElement], "load", o).on(t, "readystatechange DOMContentLoaded", o);
          }return r.css(e.editor, "minHeight", e.options.minHeight), function (e) {
            e.matches || (e.matches = Element.prototype.matches);
          }(e.editorWindow.Element.prototype), e.events.on(e.editorWindow, "mousedown click mouseup mousemove scroll", function (t) {
            e.events && e.events.fire && e.events.fire(window, t);
          }), !1;
        }
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(0);i.Config.prototype.iframe = !1, i.Config.prototype.iframeBaseUrl = !1, i.Config.prototype.iframeStyle = 'html{margin: 0px;}body{padding:10px;background:transparent;color:#000;position:relative;z-index: 2;user-select:auto;margin:0px;overflow:auto;}body:after{content:"";clear:both;display:block}table{width:100%;border: none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}td[data-jodit-selected-cell],th[data-jodit-selected-cell]{border: 1px double #1e88e5}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', i.Config.prototype.iframeCSSLinks = [], t.iframe = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = function t(_t5) {
        return e.selection.eachSelection(function (o) {
          var n = e.selection.save(),
              i = !!o && r.Dom.up(o, r.Dom.isBlock, e.editor);if (!i && o && (i = r.Dom.wrap(o, e.options.enter, e)), !i) return e.selection.restore(n), !1;if (i && i.style) {
            var s = i.style.marginLeft ? parseInt(i.style.marginLeft, 10) : 0;s += e.options.indentMargin * ("outdent" === _t5 ? -1 : 1), i.style.marginLeft = s > 0 ? s + "px" : "", i.getAttribute("style") || i.removeAttribute("style");
          }e.selection.restore(n);
        }), e.setEditorValue(), !1;
      };e.registerCommand("indent", { exec: t, hotkeys: "ctrl+]" }), e.registerCommand("outdent", { exec: t, hotkeys: "ctrl+[" });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(3);i.Config.prototype.controls.indent = { tooltip: "Increase Indent" }, i.Config.prototype.controls.outdent = { isDisable: function isDisable(e) {
        var t = e.selection.current();if (t) {
          var o = r.Dom.closest(t, r.Dom.isBlock, e.editor);if (o && o.style && o.style.marginLeft) return 0 >= parseInt(o.style.marginLeft, 10);
        }return !0;
      }, tooltip: "Decrease Indent" }, i.Config.prototype.indentMargin = 10, t.indent = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.events.on("click", function (e) {});
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.imageInlineToolbar = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t,
          o = function o(_o) {
        e.events.off(_o, ".imageProcessor").on(_o, "dragstart.imageProcessor", function (e) {
          t = _o, e.preventDefault();
        }).on(_o, "mousedown.imageProcessor", function () {
          t = _o;
        });
      };e.events.on("afterInit", function () {
        e.events.on(e.editor, "mousemove", i.throttle(function (o) {
          t && e.selection.insertCursorAtPoint(o.clientX, o.clientY);
        }, e.options.observer.timeout)).on(window, "mouseup", function () {
          t = !1;
        }).on(e.editor, "mouseup", function (o) {
          var n,
              i = t;if (i && o.target !== i) {
            if (!1 === e.selection.insertCursorAtPoint(o.clientX, o.clientY)) return !1;n = !i.parentNode || "A" !== i.parentNode.tagName || i.parentNode.textContent && i.parentNode.textContent.length ? i : i.parentNode, n.parentNode && n.parentNode.removeChild(n), n && e.selection.insertImage(n), e.selection.select(n);
          }
        });
      }), e.events.on("change afterInit", i.debounce(function () {
        e.editor && i.$$("img", e.editor).forEach(function (t) {
          t[r] || (t[r] = !0, o(t), t.complete || t.addEventListener("load", function o() {
            e.events && e.events.fire && e.events.fire("resize"), t.removeEventListener("load", o);
          }));
        });
      }, e.options.observer.timeout));
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(0),
        r = "__jodit_imageprocessor_binded";t.imageProcessor = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = function t(_t6) {
        if (!e.options.readonly) {
          var o,
              n = this,
              r = new a.Dialog(e),
              d = s.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + l.ToolbarIcon.getIcon("cancel") + "<span>" + e.i18n("Cancel") + "</span></a>", e.ownerDocument),
              f = s.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + l.ToolbarIcon.getIcon("check") + "<span>" + e.i18n("Ok") + "</span></a>", e.ownerDocument),
              h = { remove: s.dom('<a href="javascript:void(0)" class="jodit_button">' + l.ToolbarIcon.getIcon("bin") + " " + e.i18n("Delete") + "</a>", e.ownerDocument) },
              m = s.dom('<form class="jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-2-5"><div class="jodit_properties_view_box"><div style="' + (e.options.image.showPreview ? "" : "display:none") + '" class="jodit_properties_image_view"><img id="imageViewSrc" src="" alt=""/></div><div style="' + (e.options.image.editSize ? "" : "display:none") + '" class="jodit_form_group jodit_properties_image_sizes"><input type="number" id="imageWidth"/><a class="jodit_lock_helper jodit_lock_size" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("lock") + '</a><input type="number" id="imageHeight"/></div></div></div><div id="tabsbox" class="jodit_col-lg-3-5"></div></div></form>', e.ownerDocument),
              v = s.dom('<div style="' + (e.options.image.editMargins ? "" : "display:none") + '" class="jodit_form_group"><label for="marginTop">' + e.i18n("Margins") + '</label><div class="jodit_grid"><input class="jodit_col-lg-1-5 margins" type="text" placeholder="' + e.i18n("top") + '" id="marginTop"/><a style="text-align: center;" class="jodit_lock_helper jodit_lock_margin jodit_col-lg-1-5" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("lock") + '</a><input disabled="true" class="jodit_col-lg-1-5 margins" type="text" placeholder="' + e.i18n("right") + '" id="marginRight"/><input disabled="true" class="jodit_col-lg-1-5 margins" type="text" placeholder="' + e.i18n("bottom") + '" id="marginBottom"/><input disabled="true" class="jodit_col-lg-1-5 margins" type="text" placeholder="' + e.i18n("left") + '" id="marginLeft"/></div></div><div style="' + (e.options.image.editStyle ? "" : "display:none") + '" class="jodit_form_group"><label for="style">' + e.i18n("Styles") + '</label><input type="text" id="style"/></div><div style="' + (e.options.image.editClass ? "" : "display:none") + '" class="jodit_form_group"><label for="classes">' + e.i18n("Classes") + '</label><input type="text" id="classes"/></div><div style="' + (e.options.image.editId ? "" : "display:none") + '" class="jodit_form_group"><label for="id">Id</label><input type="text" id="id"/></div><div style="' + (e.options.image.editAlign ? "" : "display:none") + '" class="jodit_form_group"><label for="align">' + e.i18n("Align") + '</label><select class="select"  id="align"><option value="">' + e.i18n("--Not Set--") + '</option><option value="left">' + e.i18n("Left") + '</option><option value="center">' + e.i18n("Center") + '</option><option value="right">' + e.i18n("Right") + "</option></optgroup></select></div>", e.ownerDocument),
              g = s.dom('<div style="' + (e.options.image.editSrc ? "" : "display:none") + '" class="jodit_form_group"><label for="imageSrc">' + e.i18n("Src") + '</label><div class="jodit_input_group"><input type="text" id="imageSrc"/>' + (e.options.filebrowser.ajax.url || e.options.uploader.url ? '<div class="jodit_input_group-buttons">' + (e.options.filebrowser.ajax.url || e.options.uploader.url ? '<a class="jodit_button jodit_rechange" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("image") + "</a>" : "") + (e.options.image.useImageEditor && void 0 !== i.Jodit.modules.ImageEditor && e.options.filebrowser.ajax.url ? '<a class="jodit_button jodit_use_image_editor" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("crop") + "</a>" : "") + "</div>" : "") + '</div></div><div style="' + (e.options.image.editTitle ? "" : "display:none") + '" class="jodit_form_group"><label for="imageTitle">' + e.i18n("Title") + '</label><input type="text" id="imageTitle"/></div><div style="' + (e.options.image.editAlt ? "" : "display:none") + '" class="jodit_form_group"><label for="imageAlt">' + e.i18n("Alternative") + '</label><input type="text" id="imageAlt"/></div><div style="' + (e.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><label for="imageLink">' + e.i18n("Link") + '</label><input type="text" id="imageLink"/></div><div style="' + (e.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><input type="checkbox" id="imageLinkOpenInNewTab"/> ' + e.i18n("Open link in new tab") + "</div>", e.ownerDocument),
              _ = n.naturalWidth / n.naturalHeight || 1,
              b = m.querySelector("#imageWidth"),
              y = m.querySelector("#imageHeight"),
              w = function w() {
            n.style.cssFloat && -1 !== ["left", "right"].indexOf(n.style.cssFloat.toLowerCase()) ? s.val(m, "#align", s.css(n, "float")) : "block" === s.css(n, "display") && "auto" === n.style.marginLeft && "auto" === n.style.marginRight && s.val(m, "#align", "center");
          },
              C = function C() {
            s.val(m, "#id", n.getAttribute("id") || "");
          },
              j = function j() {
            s.val(m, "#style", n.getAttribute("style") || "");
          },
              E = function E() {
            s.val(m, "#classes", (n.getAttribute("class") || "").replace(/jodit_focused_image[\s]*/, ""));
          },
              x = function x() {
            if (e.options.image.editMargins) {
              var t = !1;s.$$(".margins", m).forEach(function (e) {
                var o = n.style[e.id];o && (/^[0-9]+(px)?$/.test(o) && (o = parseInt(o, 10)), e.value = "" + o || "", t || "marginTop" === e.id || e.value === s.val(m, "#marginTop") || (t = !0));
              }), N = !t;var o = m.querySelector(".jodit_lock_margin");o && (o.innerHTML = l.ToolbarIcon.getIcon(N ? "lock" : "unlock")), s.$$(".margins:not(#marginTop)", m).forEach(function (e) {
                return N ? e.setAttribute("disabled", "true") : e.removeAttribute("disabled");
              });
            }
          },
              q = function q() {
            b.value = "" + n.offsetWidth, y.value = "" + n.offsetHeight;
          },
              T = function T() {
            n.hasAttribute("title") && s.val(m, "#imageTitle", n.getAttribute("title") || ""), n.hasAttribute("alt") && s.val(m, "#imageAlt", n.getAttribute("alt") || "");var t = c.Dom.closest(n, "a", e.editor);t && (s.val(m, "#imageLink", t.getAttribute("href") || ""), m.querySelector("#imageLinkOpenInNewTab").checked = "_blank" === t.getAttribute("target"));
          },
              D = function D() {
            s.val(m, "#imageSrc", n.getAttribute("src") || "");var e = m.querySelector("#imageViewSrc");e && e.setAttribute("src", n.getAttribute("src") || "");
          },
              I = function I() {
            D(), T(), q(), x(), E(), C(), w(), j();
          },
              S = !0,
              N = !0,
              k = {},
              A = m.querySelector("#tabsbox");k[e.i18n("Image")] = g, k[e.i18n("Advansed")] = v, A && A.appendChild(u(e, k)), I(), e.events.on(r, "afterClose", function () {
            r.destruct(), n.parentNode && e.options.image.selectImageAfterClose && e.selection.select(n);
          }), h.remove.addEventListener("click", function () {
            n.parentNode && n.parentNode.removeChild(n), r.close();
          }), e.options.image.useImageEditor && s.$$(".jodit_use_image_editor", g).forEach(function (t) {
            e.events.on(t, "mousedown touchstart", function () {
              var t = n.getAttribute("src") || "",
                  o = e.ownerDocument.createElement("a"),
                  i = function i() {
                if (o.host !== location.host) return void a.Confirm(e.i18n("You can only edit your own images. Download this image on the host?"), function (t) {
                  t && e.uploader && e.uploader.uploadRemoteImage("" + o.href, function (t) {
                    a.Alert(e.i18n("The image has been successfully uploaded to the host!"), function () {
                      "string" == typeof t.newfilename && (n.setAttribute("src", t.baseurl + t.newfilename), D());
                    });
                  }, function (t) {
                    a.Alert(e.i18n("There was an error loading %s", t.message));
                  });
                });
              };o.href = t, e.getInstance("FileBrowser").getPathByUrl("" + o.href, function (i, r, s) {
                e.getInstance("FileBrowser").openImageEditor(o.href, r, i, s, function () {
                  var e = new Date().getTime();n.setAttribute("src", t + (-1 !== t.indexOf("?") ? "" : "?") + "&_tmp=" + e), D();
                }, function (e) {
                  a.Alert(e.message);
                });
              }, function (e) {
                a.Alert(e.message, i);
              });
            });
          }), s.$$(".jodit_rechange", g).forEach(function (t) {
            t.addEventListener("mousedown", function (o) {
              t.classList.toggle("active");var i = new l.ToolbarPopup(e, t);i.open(p(e, { upload: function upload(e) {
                  e.files && e.files.length && n.setAttribute("src", e.baseurl + e.files[0]), I(), i.close();
                }, filebrowser: function filebrowser(e) {
                  e && e.files && Array.isArray(e.files) && e.files.length && (n.setAttribute("src", e.files[0]), i.close(), I());
                } }, n, i.close), !0), o.stopPropagation();
            });
          });var L = m.querySelector(".jodit_lock_helper.jodit_lock_size"),
              M = m.querySelector(".jodit_lock_helper.jodit_lock_margin");return L && L.addEventListener("click", function () {
            S = !S, this.innerHTML = l.ToolbarIcon.getIcon(S ? "lock" : "unlock"), e.events.fire(b, "change");
          }), M && M.addEventListener("click", function () {
            N = !N, this.innerHTML = l.ToolbarIcon.getIcon(N ? "lock" : "unlock"), N ? s.$$(".margins", m).forEach(function (e) {
              e.matches("#marginTop") || e.setAttribute("disabled", "true");
            }) : s.$$(".margins", m).forEach(function (e) {
              e.matches("#marginTop") || e.removeAttribute("disabled");
            });
          }), e.events.on(s.$$("#imageWidth,#imageHeight", m), "change keydown mousedown paste", function (e) {
            S && (clearTimeout(o), o = window.setTimeout(function () {
              var t = parseInt(b.value, 10),
                  o = parseInt(y.value, 10);"imageWidth" === e.target.getAttribute("id") ? y.value = "" + Math.round(t / _) : b.value = "" + Math.round(o * _);
            }, 100));
          }), r.setTitle([e.i18n("Image properties"), h.remove]), r.setContent(m), d.addEventListener("click", function () {
            r.close();
          }), f.addEventListener("click", function () {
            if (e.options.image.editStyle && (s.val(m, "#style") ? n.setAttribute("style", s.val(m, "#style")) : n.removeAttribute("style")), !s.val(m, "#imageSrc")) return n.parentNode && n.parentNode.removeChild(n), void r.close();n.setAttribute("src", s.val(m, "#imageSrc")), s.val(m, "#imageTitle") ? n.setAttribute("title", s.val(m, "#imageTitle")) : n.removeAttribute("title"), s.val(m, "#imageAlt") ? n.setAttribute("alt", s.val(m, "#imageAlt")) : n.removeAttribute("alt");var t = c.Dom.closest(n, "a", e.editor);s.val(m, "#imageLink") ? (t || (t = c.Dom.wrap(n, "a", e)), t.setAttribute("href", s.val(m, "#imageLink")), m.querySelector("#imageLinkOpenInNewTab").checked ? t.setAttribute("target", "_blank") : t.removeAttribute("target")) : t && t.parentNode && t.parentNode.replaceChild(n, t);var o = function o(e) {
              return e = s.trim(e), /^[0-9]+$/.test(e) ? e + "px" : e;
            };s.css(n, { width: s.trim(b.value) ? o(b.value) : null, height: s.trim(y.value) ? o(y.value) : null }), e.options.image.editMargins && (N ? s.css(n, "margin", o(s.val(m, "#marginTop"))) : s.$$(".margins", m).forEach(function (e) {
              s.css(n, e.id, o(e.value));
            })), e.options.image.editClass && (s.val(m, "#classes") ? n.setAttribute("class", s.val(m, "#classes")) : n.removeAttribute("class")), e.options.image.editId && (s.val(m, "#id") ? n.setAttribute("id", s.val(m, "#id")) : n.removeAttribute("id"));var i = function i() {
              "block" === s.css(n, "display") && s.css(n, "display", ""), "auto" === n.style.marginLeft && "auto" === n.style.marginRight && (n.style.marginLeft = "", n.style.marginRight = "");
            };e.options.image.editAlign && (s.val(m, "#align") ? -1 !== ["right", "left"].indexOf(s.val(m, "#align").toLowerCase()) ? (s.css(n, "float", s.val(m, "#align")), i()) : (s.css(n, "float", ""), s.css(n, { display: "block", "margin-left": "auto", "margin-right": "auto" })) : (s.css(n, "float") && -1 !== ["right", "left"].indexOf(("" + s.css(n, "float")).toLowerCase()) && s.css(n, "float", ""), i())), n.getAttribute("style") || n.removeAttribute("style"), e.setEditorValue(), r.close();
          }), r.setFooter([f, d]), r.setSize(500), r.open(), _t6 && _t6.preventDefault(), !1;
        }
      };e.events.on("afterInit", function () {
        e.options.image.openOnDblClick ? e.events.on(e.editor, "dblclick", t, "img") : e.events.on(e.editor, "dblclick", function () {
          e.selection.select(this);
        }, "img");
      }).on("openImageProperties", function (e) {
        t.call(e);
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(6),
        r = o(1),
        s = o(0),
        a = o(7),
        l = o(5),
        c = o(3),
        d = o(8),
        u = d.Widget.TabsWidget,
        p = d.Widget.ImageSelectorWidget;r.Config.prototype.image = { openOnDblClick: !0, editSrc: !0, useImageEditor: !0, editTitle: !0, editAlt: !0, editLink: !0, editSize: !0, editMargins: !0, editClass: !0, editStyle: !0, editId: !0, editAlign: !0, showPreview: !0, selectImageAfterClose: !0 }, t.imageProperties = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t,
          o = new i.ToolbarCollection(e),
          n = s.dom('<div data-editor_id="' + e.id + '" class="jodit_toolbar_popup-inline"></div>', e.ownerDocument),
          r = function r(t) {
        e.container && e.container.classList && e.container.classList.toggle("jodit_popup_active", t);
      },
          l = function l(t) {
        t && t instanceof e.ownerWindow.Node && a.Dom.isOrContains(n, t) || (n.classList && n.classList.remove("active"), r(!1));
      },
          c = function c(t, i, a) {
        var l = t.tagName.toLowerCase();void 0 !== e.options.popup[l] && (n.innerHTML = '<span class="jodit_popup_triangle"></span>', o.build(e.options.popup[l], n, t), n.classList.add("active"), s.css(n, { left: i + "px", top: a + "px" }), n.style.marginLeft = -Math.round(n.offsetWidth / 2) + "px", r(!0), e.events.fire("afterOpenPopup", n, e.container));
      },
          d = function d(o, n, i) {
        e.options.readonly || (clearTimeout(t), e.options.observer.timeout ? t = setTimeout(c.bind(e, o, n, i), e.options.observer.timeout) : c(o, n, i));
      };e.events.on("hidePopup afterCommand keydown resize", l).on("showPopap", d).on("afterInit", function () {
        e.editorDocument.body.appendChild(n);var t = !1;e.events.on([e.ownerWindow, e.editor], "scroll", l).on(n, "mousedown", function (e) {
          e.stopPropagation();
        }).on(e.editor, "mousedown", function (o) {
          if ("IMG" === o.target.tagName || a.Dom.closest(o.target, "table|a", e.editor)) {
            var n = "IMG" === o.target.tagName ? o.target : a.Dom.closest(o.target, "table|a", e.editor),
                i = s.offset(n, e);d(n, Math.round(i.left + n.offsetWidth / 2), Math.round(i.top + n.offsetHeight)), t = !0;
          } else t = !1;
        }).on(e.ownerWindow, "mousedown", function () {
          t || l(), t = !1;
        });
      }).on("beforeDestruct", function () {
        n.parentNode && n.parentNode.removeChild(n), clearTimeout(t);
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(5),
        r = o(1),
        s = o(0),
        a = o(3),
        l = o(15),
        c = o(8),
        d = c.Widget.ColorPickerWidget,
        u = c.Widget.TabsWidget;r.Config.prototype.popup = { a: [{ name: "eye", tooltip: "Open link", exec: function exec(e, t) {
          var o = t.getAttribute("href");t && o && e.ownerWindow.open(o);
        } }, { name: "link", tooltip: "Edit link", icon: "pencil" }, "unlink", "brush"], img: [{ name: "bin", tooltip: "Delete", exec: function exec(e, t) {
          t.parentNode && t.parentNode.removeChild(t);
        } }, { name: "pencil", exec: function exec(e, t) {
          "img" === t.tagName.toLowerCase() && e.events.fire("openImageProperties", t);
        }, tooltip: "Edit" }, { name: "valign", list: ["Top", "Middle", "Bottom"], tooltip: "Vertical align", exec: function exec(e, t, o) {
          if ("img" === t.tagName.toLowerCase()) {
            var n = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";s.css(t, "vertical-align", n);
          }
        } }, { name: "left", list: ["Left", "Right", "Center", "Normal"], exec: function exec(e, t, o) {
          if ("img" === t.tagName.toLowerCase()) {
            var n = function n() {
              "block" === s.css(t, "display") && s.css(t, "display", ""), "auto" === t.style.marginLeft && "auto" === t.style.marginRight && (t.style.marginLeft = "", t.style.marginRight = "");
            },
                i = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";"normal" !== i ? -1 !== ["right", "left"].indexOf(i) ? (s.css(t, "float", i), n()) : (s.css(t, "float", ""), s.css(t, { display: "block", "margin-left": "auto", "margin-right": "auto" })) : (s.css(t, "float") && -1 !== ["right", "left"].indexOf(s.css(t, "float").toLowerCase()) && s.css(t, "float", ""), n());
          }
        }, tooltip: "Horizontal align" }], table: [{ name: "brush", popup: function popup(e, t, o, n) {
          var i,
              r,
              a,
              c,
              p,
              f,
              h = l.Table.getAllSelectedCells(t);return !!h.length && (c = s.css(h[0], "color"), f = s.css(h[0], "background-color"), p = s.css(h[0], "border-color"), i = d(e, function (e) {
            h.forEach(function (t) {
              s.css(t, "background-color", e);
            }), n();
          }, f), r = d(e, function (e) {
            h.forEach(function (t) {
              s.css(t, "color", e);
            }), n();
          }, c), a = d(e, function (e) {
            h.forEach(function (t) {
              s.css(t, "border-color", e);
            }), n();
          }, p), u(e, { Background: i, Text: r, Border: a }));
        }, tooltip: "Background" }, { name: "valign", list: ["Top", "Middle", "Bottom"], exec: function exec(e, t, o) {
          var n = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";l.Table.getAllSelectedCells(t).forEach(function (e) {
            s.css(e, "vertical-align", n);
          });
        }, tooltip: "Vertical align" }, { name: "splitv", command: "tablesplitv", tooltip: "Split vertical" }, { name: "splitg", command: "tablesplitg", tooltip: "Split horizontal" }, "\n", { name: "merge", command: "tablemerge", tooltip: "Merge" }, { name: "addcolumn", list: { tableaddcolumnbefore: "Insert column before", tableaddcolumnafter: "Insert column after" }, exec: function exec(e, t, o) {
          e.execCommand(o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "", !1, t);
        }, tooltip: "Add column" }, { name: "addrow", list: { tableaddrowbefore: "Insert row above", tableaddrowafter: "Insert row below" }, exec: function exec(e, t, o) {
          e.execCommand(o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "", !1, t);
        }, tooltip: "Add row" }, { name: "bin", list: { tablebin: "Delete table", tablebinrow: "Delete row", tablebincolumn: "Delete column", tableempty: "Empty cell" }, exec: function exec(e, t, o) {
          e.execCommand(o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "", !1, t);
        }, tooltip: "Delete" }] }, t.inlinePopup = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t = function t(_t7) {
        var o = function o(_o2) {
          if (_o2 instanceof e.editorWindow.HTMLElement) switch (_t7.toLowerCase()) {case "justifyfull":
              _o2.style.textAlign = "justify";break;case "justifyright":
              _o2.style.textAlign = "right";break;case "justifyleft":
              _o2.style.textAlign = "left";break;case "justifycenter":
              _o2.style.textAlign = "center";}
        };return e.selection.focus(), e.selection.eachSelection(function (t) {
          if (!t && e.editor.querySelector(".jodit_selected_cell")) return i.$$(".jodit_selected_cell", e.editor).forEach(o), !1;if (t instanceof e.editorWindow.Node) {
            var n = !!t && r.Dom.up(t, r.Dom.isBlock, e.editor);!n && t && (n = r.Dom.wrap(t, e.options.enter, e)), o(n);
          }
        }), !1;
      };e.registerCommand("justifyfull", t), e.registerCommand("justifyright", t), e.registerCommand("justifyleft", t), e.registerCommand("justifycenter", t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(0),
        r = o(3),
        s = o(1),
        a = o(5);s.Config.prototype.controls.align = { name: "left", tooltip: "Align", getLabel: function getLabel(e, t, o) {
        var n = e.selection.current();if (n) {
          var s = r.Dom.closest(n, r.Dom.isBlock, e.editor) || e.editor,
              l = "" + i.css(s, "text-align");t.defaultValue && -1 !== t.defaultValue.indexOf(l) && (l = "left"), t.data && t.data.currentValue !== l && t.list && -1 !== t.list.indexOf(l) && (o.textBox.innerHTML = e.options.textIcons ? "<span>" + l + "</span>" : a.ToolbarIcon.getIcon(l, ""), o.textBox.firstChild.classList.add("jodit_icon"), t.data.currentValue = l);
        }return !1;
      }, isActive: function isActive(e, t) {
        var o = e.selection.current();if (o && t.defaultValue) {
          var n = r.Dom.closest(o, r.Dom.isBlock, e.editor) || e.editor;return -1 === t.defaultValue.indexOf("" + i.css(n, "text-align"));
        }return !1;
      }, defaultValue: ["left", "start", "inherit"], data: { currentValue: "left" }, list: ["center", "left", "right", "justify"] }, s.Config.prototype.controls.center = { command: "justifyCenter", tags: ["center"], css: { "text-align": "center" }, tooltip: "Align Center" }, s.Config.prototype.controls.justify = { command: "justifyFull", css: { "text-align": "justify" }, tooltip: "Align Justify" }, s.Config.prototype.controls.left = { command: "justifyLeft", css: { "text-align": "left" }, tooltip: "Align Left" }, s.Config.prototype.controls.right = { command: "justifyRight", css: { "text-align": "right" }, tooltip: "Align Right" }, t.justify = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.options.link.followOnDblClick && e.events.on("afterInit", function () {
        e.events.on(e.editor, "dblclick", function (e) {
          var t = this.getAttribute("href");t && (location.href = t, e.preventDefault());
        }, "a");
      }), e.options.link.processPastedLink && e.events.on("processPaste", function (t, o) {
        if (r.isURL(o)) {
          var n = r.convertMediaURLToVideoEmbed(o);if (n !== o) return r.dom(n, e.editorDocument);var i = e.editorDocument.createElement("a");return i.setAttribute("href", o), i.innerText = o, e.options.link.openLinkDialogAfterPost && setTimeout(function () {}, 100), i;
        }
      }), e.options.link.removeLinkAfterFormat && e.events.on("afterCommand", function (t) {
        var o,
            n,
            i = e.selection;"removeFormat" === t && (n = i.current(), n && "A" !== n.nodeName && (n = s.Dom.closest(n, "A", e.editor)), n && "A" === n.nodeName && (o = n.innerHTML === n.innerText ? s.Dom.create("text", n.innerText, e.editorDocument) : s.Dom.create("span", n.innerHTML, e.editorDocument), n.parentNode && (n.parentNode.replaceChild(o, n), e.selection.setCursorIn(o, !0))));
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(0),
        s = o(3);i.Config.prototype.link = { followOnDblClick: !0, processVideoLink: !0, processPastedLink: !0, openLinkDialogAfterPost: !0, removeLinkAfterFormat: !0 }, i.Config.prototype.controls.unlink = { exec: function exec(e, t) {
        var o = s.Dom.closest(t, "A", e.editor);o && s.Dom.unwrap(o), e.events.fire("hidePopup");
      } }, i.Config.prototype.controls.link = { popup: function popup(e, t, o, n) {
        var i = e.editorWindow.getSelection(),
            a = r.dom('<form class="jodit_form"><input required type="text" name="url" placeholder="http://" type="text"/><input name="text" placeholder="' + e.i18n("Text") + '" type="text"/><label><input name="target" type="checkbox"/> ' + e.i18n("Open in new tab") + '</label><label><input name="nofollow" type="checkbox"/> ' + e.i18n("No follow") + '</label><div style="text-align: right"><button class="jodit_unlink_button" type="button">' + e.i18n("Unlink") + '</button> &nbsp;&nbsp;<button class="jodit_link_insert_button" type="submit"></button></div><form/>', e.ownerDocument);t = !(!t || !s.Dom.closest(t, "A", e.editor)) && s.Dom.closest(t, "A", e.editor);var l = a.querySelector(".jodit_link_insert_button"),
            c = a.querySelector(".jodit_unlink_button");t ? (r.val(a, "input[name=url]", t.getAttribute("href") || ""), r.val(a, "input[name=text]", t.innerText), a.querySelector("input[name=target]").checked = "_blank" === t.getAttribute("target"), a.querySelector("input[name=nofollow]").checked = "nofollow" === t.getAttribute("rel"), l && (l.innerHTML = e.i18n("Update"))) : (c && (c.style.display = "none"), r.val(a, "input[name=text]", "" + i), l && (l.innerHTML = e.i18n("Insert")));var d = e.selection.save();return c && c.addEventListener("mousedown", function (o) {
          t && s.Dom.unwrap(t), e.selection.restore(d), n(), o.preventDefault();
        }), a.addEventListener("submit", function (o) {
          o.preventDefault(), e.selection.restore(d);var i = t || s.Dom.create("a", "", e.editorDocument);return r.val(a, "input[name=url]") ? (i.setAttribute("href", r.val(a, "input[name=url]")), i.innerText = r.val(a, "input[name=text]"), a.querySelector("input[name=target]").checked ? i.setAttribute("target", "_blank") : i.removeAttribute("target"), a.querySelector("input[name=nofollow]").checked ? i.setAttribute("rel", "nofollow") : i.removeAttribute("rel"), t || e.selection.insertNode(i), n(), !1) : (a.querySelector("input[name=url]").focus(), a.querySelector("input[name=url]").classList.add("jodit_error"), !1);
        }), a;
      }, tags: ["a"], tooltip: "Insert link" }, t.link = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t,
          o = 0,
          n = e.options.buttons;e.events.on("touchend", function (n) {
        n.changedTouches.length && (t = new Date().getTime()) - o > e.options.mobileTapTimeout && (o = t, e.selection.insertCursorAtPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY));
      }).on("getDiffButtons.mobile", function () {
        return e.options.buttons.filter(function (e) {
          return 0 > n.indexOf(e);
        });
      }).on("resize afterInit", function () {
        var t = e.container.offsetWidth;n = e.options.sizeLG > t ? e.options.sizeMD > t ? e.options.sizeSM > t ? e.options.buttonsXS : e.options.buttonsSM : e.options.buttonsMD : e.options.buttons, e.toolbar.build(n.concat(e.options.extraButtons), e.container);
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(5),
        s = o(2);i.Config.prototype.mobileTapTimeout = 300, i.Config.prototype.controls.dots = { mode: s.MODE_SOURCE + s.MODE_WYSIWYG, popup: function popup(e, t, o) {
        var n = o.data;return void 0 === n && (n = { container: e.ownerDocument.createElement("div"), toolbar: new r.ToolbarCollection(e), rebuild: function rebuild() {
            var t = e.events.fire("getDiffButtons.mobile");t && n && n.toolbar.build(t, n.container);
          } }, n.container.style.width = "100px", o.data = n), n.rebuild(), n.container;
      } }, t.mobile = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.events.on("afterCommand", function (t) {
        if (/insert(un)?orderedlist/i.test(t)) {
          var o = i.Dom.up(e.selection.current(), function (e) {
            return e && /^UL|OL$/i.test(e.nodeName);
          }, e.editor);if (o && o.parentNode && "P" === o.parentNode.nodeName) {
            var n = e.selection.save();i.Dom.unwrap(o.parentNode), [].slice.call(o.childNodes).forEach(function (e) {
              e.lastChild && e.lastChild.nodeType === Node.ELEMENT_NODE && "BR" === e.lastChild.nodeName && e.removeChild(e.lastChild);
            }), e.selection.restore(n);
          }e.setEditorValue();
        }
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(3),
        r = o(1);r.Config.prototype.controls.ul = { command: "insertUnorderedList", controlName: "ul", tags: ["ul"], tooltip: "Insert Unordered List" }, r.Config.prototype.controls.ol = { command: "insertOrderedList", controlName: "ol", tags: ["ol"], tooltip: "Insert Ordered List" }, t.orderedlist = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.events.on("paste", function (t) {
        if (!1 === e.events.fire("beforePaste", t)) return t.preventDefault(), !1;if (t && t.clipboardData && t.clipboardData.getData) {
          var o = void 0,
              n = t.clipboardData.types,
              i = "",
              r = "";if (Array.isArray(n)) for (o = 0; n.length > o; o += 1) {
            i += n[o] + ";";
          } else i = n;/text\/html/.test(i) ? r = t.clipboardData.getData("text/html") : /text\/rtf/.test(i) && s.browser("safari") ? r = t.clipboardData.getData("text/rtf") : /text\/plain/.test(i) && !s.browser("mozilla") && (r = s.htmlentities(t.clipboardData.getData(l.TEXT_PLAIN)).replace(/\n/g, "<br/>")), ("" !== r || r instanceof e.editorWindow.Node) && (r = e.events.fire("processPaste", t, r), ("string" == typeof r || r instanceof e.editorWindow.Node) && e.selection.insertHTML(r), t.preventDefault(), t.stopPropagation());
        }return !1 !== e.events.fire("afterPaste", t) && void 0;
      });var t = function t(e) {
        var t = document.createElement("div");return t.innerHTML = e, t.innerText;
      },
          o = function o(t, _o3, n, a, l) {
        void 0 === a && (a = "Clean"), void 0 === l && (l = "Insert only Text");var c = r.Confirm('<div style="word-break: normal; white-space: normal">' + t + "</div>", _o3, n),
            d = s.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + i.Jodit.prototype.i18n("Keep") + "</span></a>", c.document),
            u = s.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + i.Jodit.prototype.i18n(a) + "</span></a>", c.document),
            p = s.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + i.Jodit.prototype.i18n(l) + "</span></a>", c.document),
            f = s.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + i.Jodit.prototype.i18n("Cancel") + "</span></a>", c.document);return e.events.on(d, "click", function () {
          c.close(), n && n(!0);
        }), e.events.on(u, "click", function () {
          c.close(), n && n(!1);
        }), e.events.on(p, "click", function () {
          c.close(), n && n(0);
        }), e.events.on(f, "click", function () {
          c.close();
        }), c.setFooter([d, u, l ? p : "", f]), c;
      },
          n = function n(_n) {
        if (s.isHTML(_n)) return o(e.i18n("Your code is similar to HTML. Keep as HTML?"), e.i18n("Paste as HTML"), function (o) {
          !1 === o && (_n = s.htmlspecialchars(_n)), 0 === o && (_n = t(_n)), e.selection.insertHTML(_n), e.setEditorValue();
        }, "Insert as Text"), !1;
      };e.options.askBeforePasteHTML && e.events.on("beforePaste", function (e) {
        if (e && e.clipboardData && e.clipboardData.getData && e.clipboardData.getData(l.TEXT_PLAIN)) {
          var t = e.clipboardData.getData(l.TEXT_PLAIN);return n(t);
        }
      }), e.options.askBeforePasteFromWord && e.events.on("beforePaste", function (i) {
        if (i && i.clipboardData && i.clipboardData.getData && i.clipboardData.getData(l.TEXT_HTML)) {
          var r = function r(i) {
            if (s.isHTML(i)) return s.isHTMLFromWord(i) ? o(e.i18n("The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?"), e.i18n("Word Paste Detected"), function (o) {
              !0 === o && (i = s.applyStyles(i), e.options.beautifyHTML && e.ownerWindow.html_beautify && (i = e.ownerWindow.html_beautify(i))), !1 === o && (i = s.cleanFromWord(i)), 0 === o && (i = t(s.cleanFromWord(i))), e.selection.insertHTML(i), e.setEditorValue();
            }) : n(i), !1;
          };if (i.clipboardData.types && -1 !== i.clipboardData.types.indexOf("text/html")) {
            var a = i.clipboardData.getData(l.TEXT_HTML);return r(a);
          }var c = s.dom('<div tabindex="-1" style="left: -9999px; top: 0; width: 0; height: 100%; line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; -ms-word-break: break-all;" contenteditable="true"></div>', e.ownerDocument);e.container.appendChild(c), c.focus();var d = 0,
              u = function u() {
            if (d += 1, c.childNodes && c.childNodes.length > 0) {
              var t = c.innerHTML;c.parentNode && c.parentNode.removeChild(c), !1 !== r(t) && e.selection.insertHTML(t);
            } else 5 > d ? setTimeout(function () {
              u();
            }, 20) : c.parentNode && c.parentNode.removeChild(c);
          };u();
        }
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(6),
        r = o(7),
        s = o(0),
        a = o(1),
        l = o(2);a.Config.prototype.askBeforePasteHTML = !0, a.Config.prototype.askBeforePasteFromWord = !0, t.paste = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      if (e.options.showPlaceholder) {
        this.destruct = function () {
          i.parentNode && i.parentNode.removeChild(i);
        };var t = function t() {
          if (i.parentNode && !e.options.readonly) {
            var t = 0,
                o = 0,
                n = e.editorWindow.getComputedStyle(e.editor);if (e.editor.firstChild && e.editor.firstChild.nodeType === Node.ELEMENT_NODE) {
              var r = e.editorWindow.getComputedStyle(e.editor.firstChild);t = parseInt(r.getPropertyValue("margin-top"), 10), o = parseInt(r.getPropertyValue("margin-left"), 10), i.style.fontSize = parseInt(r.getPropertyValue("font-size"), 10) + "px", i.style.lineHeight = r.getPropertyValue("line-height");
            } else i.style.fontSize = parseInt(n.getPropertyValue("font-size"), 10) + "px", i.style.lineHeight = n.getPropertyValue("line-height");s.css(i, { display: "block", marginTop: Math.max(parseInt(n.getPropertyValue("margin-top"), 10), t), marginLeft: Math.max(parseInt(n.getPropertyValue("margin-left"), 10), o) });
          }
        },
            o = function o() {
          i.parentNode && (i.style.display = "none");
        },
            n = s.debounce(function () {
          if (e.editor) return e.getRealMode() !== r.MODE_WYSIWYG ? o() : void (e.getEditorValue() ? o() : t());
        }, e.options.observer.timeout / 100),
            i = s.dom('<span style="display: none;" class="jodit_placeholder">' + e.i18n(e.options.placeholder) + "</span>", e.ownerDocument);"rtl" === e.options.direction && (i.style.right = "0px", i.style.direction = "rtl"), e.options.useInputsPlaceholder && e.element.hasAttribute("placeholder") && (i.innerHTML = e.element.getAttribute("placeholder") || ""), e.events.on("readonly", function (e) {
          e ? o() : n();
        }).on("afterInit", function () {
          e.workplace.appendChild(i), n(), e.events.fire("placeholder", i.innerHTML), e.events.on("change keyup mouseup keydown mousedown afterSetMode", function () {
            null !== i.parentNode && n();
          });
        });
      }
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(2),
        s = o(0);i.Config.prototype.showPlaceholder = !0, i.Config.prototype.useInputsPlaceholder = !0, i.Config.prototype.placeholder = "Type something", t.placeholder = n;
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(16),
        r = o(2),
        s = o(1),
        a = o(4);s.Config.prototype.controls.redo = { mode: r.MODE_SPLIT, tooltip: "Redo" }, s.Config.prototype.controls.undo = { mode: r.MODE_SPLIT, tooltip: "Undo" }, t.redoundo = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;o.observer = new i.Observer(o.jodit);var n = function n() {
          t.events.fire("canRedo", o.observer.stack.canRedo()), t.events.fire("canUndo", o.observer.stack.canUndo());
        };t.events.on("afterSetMode", function () {
          t.getRealMode() === r.MODE_WYSIWYG && n();
        });var s = function s(e) {
          return t.getRealMode() === r.MODE_WYSIWYG && (o.observer.stack["can" + e.substr(0, 1).toUpperCase() + e.substr(1)]() && o.observer.stack[e](), n()), !1;
        };return t.registerCommand("redo", { exec: s, hotkeys: "ctrl+y,ctrl+shift+z" }), t.registerCommand("undo", { exec: s, hotkeys: "ctrl+z" }), o;
      }return n(t, e), t.prototype.destruct = function () {
        this.observer.destruct();
      }, t;
    }(a.Component);
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      var t,
          o,
          n,
          i,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h = !1,
          m = !1,
          v = !1,
          g = s.dom('<div data-editor_id="' + e.id + '" style="display:none" class="jodit_resizer"><i class="jodit_resizer-topleft"></i><i class="jodit_resizer-topright"></i><i class="jodit_resizer-bottomright"></i><i class="jodit_resizer-bottomleft"></i></div>', e.ownerDocument),
          _ = function _() {
        m = !1, v = !1, o = null, g.style.display = "none";
      },
          b = function b() {
        if (v && o && g) {
          var t = s.offset(o, e),
              n = parseInt(g.style.left || "0", 10),
              i = parseInt(g.style.top || "0", 10),
              r = g.offsetWidth,
              a = g.offsetHeight;i === t.top - 1 && n === t.left - 1 && r === o.offsetWidth && a === o.offsetHeight || (g.style.top = t.top - 1 + "px", g.style.left = t.left - 1 + "px", g.style.width = o.offsetWidth + "px", g.style.height = o.offsetHeight + "px", e.events && (e.events.fire(o, "changesize"), isNaN(n) || e.events.fire("resize")));
        }
      },
          y = function y() {
        e.options.readonly || (v = !0, g.style.display = "block", b());
      },
          w = function w(t) {
        var n;if ("IFRAME" === t.tagName) if (t.parentNode && t.parentNode.getAttribute("data-jodit_iframe_wrapper")) t = t.parentNode;else {
          n = s.dom('<jodit data-jodit-temp="1" contenteditable="false" draggable="true" data-jodit_iframe_wrapper="1"></jodit>', e.editorDocument), n.style.display = "inline-block" === t.style.display ? "inline-block" : "block", n.style.width = t.offsetWidth + "px", n.style.height = t.offsetHeight + "px", t.parentNode && t.parentNode.insertBefore(n, t), n.appendChild(t);var i = t;e.events.on(n, "changesize", function () {
            i.setAttribute("width", n.offsetWidth + "px"), i.setAttribute("height", n.offsetHeight + "px");
          }), t = n;
        }var r;e.events.on(t, "dragstart", _).on(t, "mousedown", function (e) {
          s.isIE() && e.preventDefault();
        }).on(t, "mousedown touchstart", function () {
          h || (h = !0, o = t, y(), "IMG" !== o.tagName || o.complete || o.addEventListener("load", function e() {
            b(), o && o.removeEventListener("load", e);
          }), clearTimeout(r)), r = window.setTimeout(function () {
            h = !1;
          }, 400);
        });
      };s.$$("i", g).forEach(function (r) {
        e.events.on(r, "mousedown touchstart", function (s) {
          if (!o || !o.parentNode) return _(), !1;t = r, s.preventDefault(), s.stopImmediatePropagation(), a = o.offsetWidth, l = o.offsetHeight, c = a / l, m = !0, n = s.clientX, i = s.clientY, e.lock("resizer");
        });
      }), e.events.on("readonly", function (e) {
        e && _();
      }).on("beforeDestruct", function () {
        g.parentNode && g.parentNode.removeChild(g);
      }).on("afterInit", function () {
        e.editorDocument.body.appendChild(g), e.events.on(e.editor, "keydown", function (t) {
          v && t.keyCode === r.KEY_DELETE && o && "table" !== o.tagName.toLowerCase() && ("JODIT" !== o.tagName ? e.selection.select(o) : (o.parentNode && o.parentNode.removeChild(o), _(), t.preventDefault()));
        }).on(e.ownerWindow, "mousemove touchmove", function (r) {
          if (m) {
            if (p = r.clientX - n, f = r.clientY - i, !o) return;"IMG" === o.tagName ? p ? (u = a + (t.className.match(/left/) ? -1 : 1) * p, d = Math.round(u / c)) : (d = l + (t.className.match(/top/) ? -1 : 1) * f, u = Math.round(d * c)) : (u = a + (t.className.match(/left/) ? -1 : 1) * p, d = l + (t.className.match(/top/) ? -1 : 1) * f), u > e.options.resizer.min_width && (o.style.width = g.parentNode.offsetWidth > u ? u + "px" : "100%"), d > e.options.resizer.min_height && (o.style.height = d + "px"), b(), r.stopImmediatePropagation();
          }
        }).on(e.ownerWindow, "resize", function () {
          v && b();
        }).on(e.ownerWindow, "mouseup keydown touchend", function (t) {
          v && !h && (m ? (e.unlock(), m = !1, e.setEditorValue(), t.stopImmediatePropagation()) : _());
        }).on([e.ownerWindow, e.editor], "scroll", function () {
          v && !m && _();
        });
      }).on("afterGetValueFromEditor", function (e) {
        e.value = e.value.replace(/<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi, "$1");
      }).on("change afterInit afterSetMode", s.debounce(function () {
        v && (o && o.parentNode ? b() : _()), s.$$("img, table, iframe", e.editor).forEach(function (t) {
          e.getMode() !== r.MODE_SOURCE && !t.__jodit_resizer_binded && ("IFRAME" === t.tagName && e.options.useIframeResizer || "IMG" === t.tagName && e.options.useImageResizer || "TABLE" === t.tagName && e.options.useTableResizer) && (t.__jodit_resizer_binded = !0, w(t));
        });
      }, e.options.observer.timeout));
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(2),
        s = o(0);i.Config.prototype.useIframeResizer = !0, i.Config.prototype.useTableResizer = !0, i.Config.prototype.useImageResizer = !0, i.Config.prototype.resizer = { min_width: 10, min_height: 10 }, t.resizer = n;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      if ("auto" !== e.options.height && (e.options.allowResizeX || e.options.allowResizeY)) {
        var t = i.dom('<div class="jodit_editor_resize" ><a href="javascript:void(0)"></a></div>', e.ownerDocument),
            o = { x: 0, y: 0, w: 0, h: 0 },
            n = !1;e.events.on(t, "mousedown touchstart", function (t) {
          n = !0, o.x = t.clientX, o.y = t.clientY, o.w = e.container.offsetWidth, o.h = e.container.offsetHeight, t.preventDefault();
        }).on(e.ownerWindow, "mousemove touchmove", i.throttle(function (t) {
          n && (i.css(e.container, { width: e.options.allowResizeX ? o.w + t.clientX - o.x : o.w, height: e.options.allowResizeY ? o.h + t.clientY - o.y : o.h }), e.events.fire("resize"));
        }, e.options.observer.timeout)).on(e.ownerWindow, "mouseup touchsend", function () {
          n && (n = !1);
        }).on("afterInit", function () {
          e.container.appendChild(t);
        });
      }e.events.on("afterInit", function () {
        i.css(e.editor, { minHeight: e.options.minHeight }), i.css(e.workplace, { width: e.options.width, height: e.options.height, minHeight: e.options.minHeight }), "auto" !== e.options.height && (i.css(e.editor, { minHeight: "100%" }), i.css(e.workplace, { height: "", minHeight: "" }), i.css(e.container, { height: e.options.height })), "auto" !== e.options.width && (i.css(e.workplace, { width: "" }), i.css(e.container, { width: e.options.width }));
      }, void 0, void 0, !0);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(0),
        r = o(1);r.Config.prototype.allowResizeX = !1, r.Config.prototype.allowResizeY = !0, t.size = n;
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(2),
        s = o(0),
        a = o(4);i.Config.prototype.beautifyHTML = !0, i.Config.prototype.useAceEditor = !0, i.Config.prototype.sourceEditorNativeOptions = { showGutter: !1, theme: "ace/theme/idle_fingers", mode: "ace/mode/html", wrap: !0, highlightActiveLine: !0 }, i.Config.prototype.sourceEditorCDNUrlsJS = ["//cdnjs.cloudflare.com/ajax/libs/ace/1.2.8/ace.js", "//cdnjs.cloudflare.com/ajax/libs/ace/1.2.8/ext-emmet.js"], i.Config.prototype.beautifyHTMLCDNUrlsJS = ["//cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify.min.js", "//cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify-html.min.js"], i.Config.prototype.controls.source = { mode: r.MODE_SPLIT, exec: function exec(e) {
        e.toggleMode();
      }, isActive: function isActive(e) {
        return e.getRealMode() === r.MODE_SOURCE;
      }, tooltip: "Change mode" }, t.source = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;return o.className = "jodit_ace_editor", o.loadNext = function (e, t, n, i) {
          if (void 0 === n && (n = "aceReady"), void 0 === i && (i = o.className), n && void 0 === t[e] && o.jodit && o.jodit.events) return o.jodit.events && o.jodit.events.fire(n), void (o.jodit.events && o.jodit.events.fire(o.jodit.ownerWindow, n));void 0 !== t[e] && s.appendScript(t[e], function () {
            o.loadNext(e + 1, t, n, i);
          }, i, o.jodit.ownerDocument);
        }, o.fromWYSIWYG = function (e) {
          if (void 0 === e && (e = !1), !o.__lock || !0 === e) {
            o.__lock = !0;var t = o.jodit.getEditorValue();t !== o.getMirrorValue() && o.setMirrorValue(t), o.__lock = !1;
          }
        }, o.__lock = !1, o.toWYSIWYG = function () {
          o.__lock || (o.__lock = !0, o.jodit.setEditorValue(o.getMirrorValue()), o.__lock = !1);
        }, o.autosize = function () {
          o.mirror.style.height = "auto", o.mirror.style.height = o.mirror.scrollHeight + "px";
        }, o.getNormalPosition = function (e, t) {
          for (var o = e; o > 0;) {
            if (o--, "<" === t[o] && void 0 !== t[o + 1] && t[o + 1].match(/[\w\/]+/i)) return o;if (">" === t[o]) return e;
          }return e;
        }, o.tempMarkerStart = "{start-jodit-selection}", o.tempMarkerEnd = "{end-jodit-selection}", o.__clear = function (e) {
          return e.replace(r.INVISIBLE_SPACE_REG_EXP, "");
        }, o.selInfo = [], o.getSelectionStart = function () {
          return o.mirror.selectionStart;
        }, o.getSelectionEnd = function () {
          return o.mirror.selectionEnd;
        }, o.setMirrorSelectionRange = function (e, t) {
          o.mirror.setSelectionRange(e, t);
        }, o.saveSelection = function () {
          if (o.jodit.getRealMode() === r.MODE_WYSIWYG) o.selInfo = o.jodit.selection.save() || [], o.jodit.setEditorValue(), o.fromWYSIWYG(!0);else {
            o.selInfo.length = 0;var e = o.getMirrorValue();if (o.getSelectionStart() === o.getSelectionEnd()) {
              var t = o.jodit.selection.marker(!0);o.selInfo[0] = { startId: t.id, collapsed: !0, startMarker: t.outerHTML };var n = o.getNormalPosition(o.getSelectionStart(), o.getMirrorValue());o.setMirrorValue(e.substr(0, n) + o.__clear(o.selInfo[0].startMarker) + e.substr(n));
            } else {
              var i = o.jodit.selection.marker(!0),
                  s = o.jodit.selection.marker(!1);o.selInfo[0] = { startId: i.id, endId: s.id, collapsed: !1, startMarker: o.__clear(i.outerHTML), endMarker: o.__clear(s.outerHTML) };var n = o.getNormalPosition(o.getSelectionStart(), e),
                  a = o.getNormalPosition(o.getSelectionEnd(), e);o.setMirrorValue(e.substr(0, n) + o.selInfo[0].startMarker + e.substr(n, a - n) + o.selInfo[0].endMarker + e.substr(a));
            }o.toWYSIWYG();
          }
        }, o.restoreSelection = function () {
          if (o.selInfo.length) {
            if (o.jodit.getRealMode() === r.MODE_WYSIWYG) return o.__lock = !0, o.jodit.selection.restore(o.selInfo), void (o.__lock = !1);var e = o.getMirrorValue();o.selInfo[0].startMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="start"[^>]*>[<>]*?<\/span>/gim, o.tempMarkerStart)), o.selInfo[0].endMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="end"[^>]*>[<>]*?<\/span>/gim, o.tempMarkerEnd)), o.jodit.ownerWindow.html_beautify && o.jodit.options.beautifyHTML && (e = o.jodit.ownerWindow.html_beautify(e));var t = e.indexOf(o.tempMarkerStart),
                n = t;e = e.replace(o.tempMarkerStart, ""), o.selInfo[0].collapsed && -1 !== t || (n = e.indexOf(o.tempMarkerEnd), -1 === t && (t = n)), e = e.replace(o.tempMarkerEnd, ""), o.setMirrorValue(e), o.setMirrorSelectionRange(t, n), o.toWYSIWYG(), o.setFocusToMirror();
          }
        }, o.mirrorContainer = s.dom('<div class="jodit_source"/>', o.jodit.ownerDocument), o.mirror = s.dom('<textarea class="jodit_source_mirror"/>', o.jodit.ownerDocument), t.events.on(o.mirror, "mousedown keydown touchstart input", s.debounce(o.toWYSIWYG, t.options.observer.timeout)).on(o.mirror, "change keydown mousedown touchstart input", s.debounce(o.autosize, t.options.observer.timeout)).on(o.mirror, "mousedown focus", function (e) {
          t.events.fire(e.type, e);
        }), t.events.on("aceInited", function () {
          t.options.readonly && o.aceEditor && o.aceEditor.setReadOnly(!0);
        }, void 0, void 0, !0).on("readonly", function (e) {
          e ? o.mirror.setAttribute("readonly", "true") : o.mirror.removeAttribute("readonly"), o.aceEditor && o.aceEditor.setReadOnly(e);
        }).on("placeholder", function (e) {
          o.mirror.setAttribute("placeholder", e);
        }).on("afterInit aceInited", function () {
          t.events.on("beforeSetMode", o.saveSelection).on("afterSetMode", o.restoreSelection);
        }).on("afterInit", function () {
          o.mirrorContainer.appendChild(o.mirror), t.workplace.appendChild(o.mirrorContainer), o.autosize(), t.options.beautifyHTML && void 0 === t.ownerWindow.html_beautify && !s.$$("script.beutyfy_html_jodit_helper", t.ownerDocument.body).length && o.loadNext(0, t.options.beautifyHTMLCDNUrlsJS, !1, "beutyfy_html_jodit_helper"), t.options.useAceEditor && o.replaceMirrorToACE();
        }).on("change afterInit", o.fromWYSIWYG), o;
      }return n(t, e), t.prototype.getMirrorValue = function () {
        return this.mirror.value;
      }, t.prototype.setMirrorValue = function (e) {
        this.mirror.value = e;
      }, t.prototype.setFocusToMirror = function () {
        this.mirror.focus();
      }, t.prototype.replaceMirrorToACE = function () {
        var e,
            t,
            o = this,
            n = this.jodit,
            i = function i() {
          t && n.getRealMode() === r.MODE_SOURCE && (n.events.fire("canRedo", t.hasRedo()), n.events.fire("canUndo", t.hasUndo()));
        },
            a = function a(t) {
          return e.session.getLine(t).length;
        },
            l = function l() {
          for (var t = e.session.getLength(), o = [], n = 0, i = 0; t > i; i++) {
            n += a(i), i > 0 && (n += 1), o[i] = n;
          }return o;
        },
            c = function c(e) {
          var t = l();if (t[0] >= e) return { row: 0, column: e };for (var o = 1, n = 1; t.length > n; n++) {
            e > t[n] && (o = n + 1);
          }return { row: o, column: e - t[o - 1] - 1 };
        },
            d = function d(t, o) {
          var n = c(t),
              i = c(o);e.getSelection().setSelectionRange({ start: n, end: i });
        },
            u = function u(e, t) {
          return l()[e] - a(e) + t;
        },
            p = function p() {
          if (void 0 === e && void 0 !== o.jodit.ownerWindow.ace) {
            var a = s.dom('<div class="jodit_source_mirror-fake"/>', o.jodit.ownerDocument);o.mirrorContainer.insertBefore(a, o.mirrorContainer.firstChild), o.aceEditor = e = o.jodit.ownerWindow.ace.edit(a), e.setTheme(n.options.sourceEditorNativeOptions.theme), e.renderer.setShowGutter(n.options.sourceEditorNativeOptions.showGutter), e.getSession().setMode(n.options.sourceEditorNativeOptions.mode), e.setHighlightActiveLine(n.options.sourceEditorNativeOptions.highlightActiveLine), e.getSession().setUseWrapMode(!0), e.setOption("indentedSoftWrap", !1), e.setOption("wrap", n.options.sourceEditorNativeOptions.wrap), e.$blockScrolling = 1 / 0, e.setOptions({ maxLines: 1 / 0 }), e.on("change", o.toWYSIWYG), e.on("focus", function (e) {
              n.events.fire("focus", e);
            }), e.on("mousedown", function (e) {
              n.events.fire("mousedown", e);
            }), o.mirror.style.display = "none", t = e.getSession().getUndoManager(), o.setMirrorValue = function (t) {
              e.setValue(n.options.beautifyHTML && n.ownerWindow.html_beautify ? n.ownerWindow.html_beautify(t) : t), e.clearSelection(), i();
            }, o.jodit.getRealMode() !== r.MODE_WYSIWYG && o.setMirrorValue(o.getMirrorValue()), o.getMirrorValue = function () {
              return e.getValue();
            }, o.setFocusToMirror = function () {
              e.focus();
            }, o.getSelectionStart = function () {
              var t = e.selection.getRange();return u(t.start.row, t.start.column);
            }, o.getSelectionEnd = function () {
              var t = e.selection.getRange();return u(t.end.row, t.end.column);
            }, o.setMirrorSelectionRange = function (e, t) {
              d(e, t);
            }, n.events.fire("aceInited", n);
          }
        };n.events.on(this.jodit.ownerWindow, "aceReady", p).on("aceReady", p).on("afterSetMode", function () {
          n.getRealMode() !== r.MODE_SOURCE && n.getMode() !== r.MODE_SPLIT || (o.fromWYSIWYG(), p());
        }).on("beforeCommand", function (o) {
          if (n.getRealMode() !== r.MODE_WYSIWYG && ("redo" === o || "undo" === o) && t) return t["has" + o.substr(0, 1).toUpperCase() + o.substr(1)] && e[o](), i(), !1;
        }), p(), void 0 !== this.jodit.ownerWindow.ace || s.$$("script." + this.className, this.jodit.ownerDocument.body).length || this.loadNext(0, n.options.sourceEditorCDNUrlsJS, "aceReady", this.className);
      }, t;
    }(a.Component);
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = o(1),
        i = o(7),
        r = o(0),
        s = o(2);n.Config.prototype.usePopupForSpecialCharacters = !1, n.Config.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], n.Config.prototype.controls.symbol = { icon: "omega", hotkeys: "ctrl+shift+i", tooltip: "Insert Special Character", popup: function popup(e, t, o, n) {
        var r = e.events.fire("generateSpecialCharactersTable.symbols");if (r) {
          if (e.options.usePopupForSpecialCharacters) {
            var s = e.ownerDocument.createElement("div");return s.classList.add("jodit_symbols"), s.appendChild(r), e.events.on(r, "close_dialog", n), s;
          }var a = i.Alert(r, e.i18n("Select Special Character"), void 0, "jodit_symbols"),
              l = r.querySelector("a");l && l.focus(), e.events.on("beforeDestruct", function () {
            a && a.close();
          });
        }
      } }, t.symbols = function () {
      function e(e) {
        var t = this;this.countInRow = 17, e.events.on("generateSpecialCharactersTable.symbols", function () {
          for (var o = r.dom('<div class="jodit_symbols-container"><div class="jodit_symbols-container_table"><table><tbody></tbody></table></div><div class="jodit_symbols-container_preview"><div class="jodit_symbols-preview"></div></div></div>', e.ownerDocument), n = o.querySelector(".jodit_symbols-preview"), i = o.querySelector("table"), a = i.tBodies[0], l = [], c = 0; e.options.specialCharacters.length > c;) {
            for (var d = e.ownerDocument.createElement("tr"), u = 0; t.countInRow > u && e.options.specialCharacters.length > c; u += 1, c += 1) {
              var p = e.ownerDocument.createElement("td"),
                  f = r.dom('<a data-index="' + c + '" data-index-j="' + u + '" href="javascript:void(0)" role="option" tabindex="-1">' + e.options.specialCharacters[c] + "</a>", e.ownerDocument);l.push(f), p.appendChild(f), d.appendChild(p);
            }a.appendChild(d);
          }var h = t;return e.events.on(l, "focus", function () {
            n.innerHTML = this.innerHTML;
          }).on(l, "mousedown", function (t) {
            this && "A" === this.nodeName && (e.selection.insertHTML(this.innerHTML), e.events.fire(this, "close_dialog"), t && t.preventDefault(), t && t.stopImmediatePropagation());
          }).on(l, "mouseenter", function () {
            this && "A" === this.nodeName && this.focus();
          }).on(l, "keydown", function (t) {
            var o = t.target;if (o && "A" === o.nodeName) {
              var n = parseInt(o.getAttribute("data-index") || "0", 0),
                  i = parseInt(o.getAttribute("data-index-j") || "0", 0),
                  r = void 0;switch (t.which) {case s.KEY_TOP:case s.KEY_BOTTOM:
                  r = t.which === s.KEY_TOP ? n - h.countInRow : n + h.countInRow, void 0 === l[r] && (r = t.which === s.KEY_TOP ? Math.floor(l.length / h.countInRow) * h.countInRow + i : i) > l.length - 1 && (r -= h.countInRow), l[r] && l[r].focus();break;case s.KEY_RIGHT:case s.KEY_LEFT:
                  r = t.which === s.KEY_LEFT ? n - 1 : n + 1, void 0 === l[r] && (r = t.which === s.KEY_LEFT ? l.length - 1 : 0), l[r] && l[r].focus();break;case s.KEY_ENTER:
                  e.events.fire(o, "mousedown"), t.stopImmediatePropagation(), t.preventDefault();}
            }
          }), o;
        });
      }return e;
    }();
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(4),
        s = o(0);i.Config.prototype.commandToHotkeys = { removeFormat: "ctrl+shift+m", insertOrderedList: "ctrl+shift+7", insertUnorderedList: "ctrl+shift+8", selectall: "ctrl+a" }, t.hotkeys = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;return o.specialKeys = { 8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, o.shiftNums = { "`": "~", 1: "!", 2: "@", 3: "#", 4: "$", 5: "%", 6: "^", 7: "&", 8: "*", 9: "(", 0: ")", "-": "_", "=": "+", ";": ": ", "'": '"', ",": "<", ".": ">", "/": "?", "\\": "|" }, o.possible = {}, o.onKeyPress = function (e) {
          var t = "keypress" !== e.type && o.specialKeys[e.which],
              n = String.fromCharCode(e.which).toLowerCase(),
              i = "";e.metaKey && !e.ctrlKey && (i += "ctrl+"), ["alt", "ctrl", "shift"].forEach(function (o) {
            e[o + "Key"] && t !== o && (i += o + "+");
          }), e.metaKey && i.indexOf("alt+ctrl+shift+") > -1 && (i = i.replace("alt+ctrl+shift+", "hyper+")), t ? o.possible[i + t] = !0 : (o.possible[i + n] = !0, o.shiftNums[n] && (o.possible[i + o.shiftNums[n]] = !0), "shift+" === i && (o.possible[o.shiftNums[n]] = !0));
        }, Object.keys(t.options.commandToHotkeys).forEach(function (e) {
          var o = t.options.commandToHotkeys[e];o && t.events.off(s.asArray(o).map(function (e) {
            return e + ".hotkey";
          }).join(" ")).on(s.asArray(o).map(function (e) {
            return e + ".hotkey";
          }).join(" "), function () {
            return t.execCommand(e);
          });
        }), t.events.on("afterInit", function () {
          var e = function e(_e) {
            var t = !0;if (Object.keys(o.possible).forEach(function (n) {
              !1 === o.jodit.events.fire(n, _e.type) && (t = !1);
            }), !t) return !1;
          },
              n = !1,
              i = o;t.events.on("keydown", function (o) {
            if (i.possible = {}, i.onKeyPress(o), !1 === e(o)) return n = !0, t.events.stopPropagation("keydown"), !1;
          }, void 0, void 0, !0).on("keyup", function (e) {
            if (n) return n = !1, t.events.stopPropagation("keyup"), !1;
          }, void 0, void 0, !0);
        }), o;
      }return n(t, e), t;
    }(r.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(2),
        r = o(0),
        s = o(1),
        a = o(9);s.Config.prototype.useTableProcessor = !0, s.Config.prototype.controls.table = { cols: 10, popup: function popup(e, t, o, n) {
        var i,
            s,
            a,
            l,
            c = 1,
            d = 1,
            u = o.cols || 10,
            p = r.dom('<form class="jodit_form jodit_form_inserter"><label><span>1</span> &times; <span>1</span></label><p class="jodit_form-container"></p></form>', e.ownerDocument),
            f = p.querySelectorAll("span")[0],
            h = p.querySelectorAll("span")[1],
            m = p.querySelector(".jodit_form-container"),
            v = [],
            g = function g(t) {
          var o = (t + 1) * u;if (v.length > o) {
            for (i = o; v.length > i; i += 1) {
              m.removeChild(v[i]), delete v[i];
            }v.length = o;
          }for (i = 0; o > i; i += 1) {
            v[i] || (l = e.ownerDocument.createElement("div"), l.setAttribute("data-index", "" + i), v.push(l));
          }v.forEach(function (e) {
            m.appendChild(e);
          }), m.style.width = v[0].offsetWidth * u + "px";
        };g(1), v[0].className = "hovered";var _ = function _(e, t) {
          var o = e.target;if (o && "DIV" === o.tagName) {
            if (a = void 0 === t || isNaN(t) ? parseInt(o.getAttribute("data-index") || "0", 10) : t || 0, c = Math.ceil((a + 1) / u), d = a % u + 1, g(c), d === u || u - 1 > d && u > 10) return u = d === u ? u + 1 : u - 1, _(e, d + (c - 1) * u - 1);for (i = 0; v.length > i; i += 1) {
              v[i].className = i % u + 1 > d || c < Math.ceil((i + 1) / u) ? "" : "hovered";
            }h.innerText = "" + d, f.innerText = "" + c;
          }
        };return m.addEventListener("mousemove", _), e.events.on(m, "touchstart mousedown", function (t) {
          var o = t.target;if (t.preventDefault(), t.stopImmediatePropagation(), "DIV" === o.tagName) {
            a = parseInt(o.getAttribute("data-index") || "0", 10), c = Math.ceil((a + 1) / u), d = a % u + 1;var r,
                l,
                p,
                f = e.editorDocument.createElement("table"),
                h = null,
                m = (100 / d).toFixed(7);for (i = 1; c >= i; i += 1) {
              for (r = e.editorDocument.createElement("tr"), s = 1; d >= s; s += 1) {
                l = e.editorDocument.createElement("td"), l.style.width = m + "%", h || (h = l), p = e.editorDocument.createElement("br"), l.appendChild(p), r.appendChild(e.editorDocument.createTextNode("\n")), r.appendChild(e.editorDocument.createTextNode("\t")), r.appendChild(l);
              }f.appendChild(e.editorDocument.createTextNode("\n")), f.appendChild(r);
            }e.selection.insertNode(e.editorDocument.createTextNode("\n")), e.selection.insertNode(f, !1), h && e.selection.setCursorIn(h), n();
          }
        }), p;
      }, tooltip: "Insert table" }, t.TableProcessor = function (e) {
      function t(o) {
        var n = e.call(this, o) || this;return n.__key = "table_processor_observer", n.__selectMode = !1, n.__resizerDelta = 0, n.__drag = !1, n.__addResizer = function () {
          if (!n.__resizerHandler && !(n.__resizerHandler = n.jodit.container.querySelector(".jodit_table_resizer"))) {
            n.__resizerHandler = r.dom('<div class="jodit_table_resizer"></div>', n.jodit.ownerDocument);var e = 0;n.jodit.events.on(n.__resizerHandler, "mousedown touchstart", function (t) {
              n.__drag = !0, e = t.clientX, n.jodit.lock(n.__key), n.__resizerHandler.classList.add("jodit_table_resizer-moved");var o,
                  r = n.__workTable.getBoundingClientRect();if (n.__minX = 0, n.__maxX = 1e6, null !== n.__wholeTable) r = n.__workTable.parentNode.getBoundingClientRect(), n.__minX = r.left, n.__maxX = r.left + r.width;else {
                var s = a.Table.formalCoordinate(n.__workTable, n.__workCell, !0);a.Table.formalMatrix(n.__workTable, function (e, t, r) {
                  s[1] === r && (o = e.getBoundingClientRect(), n.__minX = Math.max(o.left + i.NEARBY / 2, n.__minX)), s[1] + 1 === r && (o = e.getBoundingClientRect(), n.__maxX = Math.min(o.left + o.width - i.NEARBY / 2, n.__maxX));
                });
              }
            }).on(n.jodit.ownerWindow, "mousemove touchmoove", function (t) {
              if (n.__drag) {
                var o = t.clientX;n.__minX > o && (o = n.__minX), o > n.__maxX && (o = n.__maxX), n.__resizerDelta = o - e, n.__resizerHandler.style.left = o + "px", n.jodit.editorWindow.getSelection().removeAllRanges(), t.preventDefault && t.preventDefault();
              }
            }), n.jodit.container.appendChild(n.__resizerHandler);
          }
        }, n.onExecCommand = function (e) {
          if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(e)) {
            e = e.replace("table", "");var t = a.Table.getAllSelectedCells(n.jodit.editor);if (t.length) {
              var o = t.shift();if (!o) return;var i = a.Dom.closest(o, "table", n.jodit.editor);switch (e) {case "splitv":
                  a.Table.splitVertical(i);break;case "splitg":
                  a.Table.splitHorizontal(i);break;case "merge":
                  a.Table.mergeSelected(i);break;case "empty":
                  a.Table.getAllSelectedCells(n.jodit.editor).forEach(function (e) {
                    return e.innerHTML = "";
                  });break;case "bin":
                  i.parentNode && i.parentNode.removeChild(i);break;case "binrow":
                  a.Table.removeRow(i, o.parentNode.rowIndex);break;case "bincolumn":
                  a.Table.removeColumn(i, o.cellIndex);break;case "addcolumnafter":case "addcolumnbefore":
                  a.Table.appendColumn(i, o.cellIndex, "addcolumnafter" === e);break;case "addrowafter":case "addrowbefore":
                  a.Table.appendRow(i, o.parentNode, "addrowafter" === e);}
            }return !1;
          }
        }, o.options.useTableProcessor ? (o.events.on(n.jodit.ownerWindow, "mouseup touchend", function () {
          if ((n.__selectMode || n.__drag) && (n.__selectMode = !1, n.jodit.unlock()), n.__resizerHandler && n.__drag) {
            if (n.__drag = !1, n.__resizerHandler.classList.remove("jodit_table_resizer-moved"), null === n.__wholeTable) {
              var e = [];a.Table.setColumnWidthByDelta(n.__workTable, a.Table.formalCoordinate(n.__workTable, n.__workCell, !0)[1], n.__resizerDelta, !0, e);var i = a.Dom.next(n.__workCell, t.isCell, n.__workCell.parentNode);a.Table.setColumnWidthByDelta(n.__workTable, a.Table.formalCoordinate(n.__workTable, i)[1], -n.__resizerDelta, !1, e);
            } else {
              var s = n.__workTable.offsetWidth,
                  l = r.getContentWidth(n.__workTable.parentNode, n.jodit.editorWindow);if (!1 === n.__wholeTable) n.__workTable.style.width = (s + n.__resizerDelta) / l * 100 + "%";else {
                var c = parseInt(n.jodit.editorWindow.getComputedStyle(n.__workTable).marginLeft || "0", 10);n.__workTable.style.width = (s - n.__resizerDelta) / l * 100 + "%", n.__workTable.style.marginLeft = (c + n.__resizerDelta) / l * 100 + "%";
              }
            }o.setEditorValue(), o.selection.focus();
          }
        }).on(n.jodit.ownerWindow, "scroll", function () {
          if (n.__drag) {
            var e = a.Dom.up(n.__workCell, function (e) {
              return e && "TABLE" === e.nodeName;
            }, o.editor);if (e) {
              var t = e.getBoundingClientRect();n.__resizerHandler.style.top = t.top + "px";
            }
          }
        }).on(n.jodit.ownerWindow, "mousedown touchend", function (e) {
          var t = a.Dom.closest(e.originalEvent.target, "TD|TH", n.jodit.editor),
              o = null;t instanceof n.jodit.editorWindow.HTMLTableCellElement && (o = a.Dom.closest(t, "table", n.jodit.editor)), o && n.__deSelectAll(o, t instanceof n.jodit.editorWindow.HTMLTableCellElement && t);
        }).on("afterGetValueFromEditor", function (e) {
          e.value = e.value.replace(RegExp("([s]*)" + i.JODIT_SELECTED_CELL_MARKER + '="1"', "g"), "");
        }).on("change afterCommand afterSetMode", function () {
          r.$$("table", o.editor).forEach(function (e) {
            e[n.__key] || n.observe(e);
          });
        }).on("beforeSetMode", function () {
          a.Table.getAllSelectedCells(o.editor).forEach(function (e) {
            a.Table.restoreSelection(e), a.Table.normalizeTable(a.Dom.closest(e, "table", o.editor));
          });
        }).on("keydown", function (e) {
          e.which === i.KEY_TAB && r.$$("table", o.editor).forEach(function (e) {
            n.__deSelectAll(e);
          });
        }).on("beforeCommand", n.onExecCommand.bind(n)), n) : n;
      }return n(t, e), t.prototype.__deSelectAll = function (e, t) {
        var o = a.Table.getAllSelectedCells(e || this.jodit.editor);o.length && r.each(o, function (e, o) {
          t && t === o || a.Table.restoreSelection(o);
        });
      }, t.isCell = function (e) {
        return !!e && /^TD|TH$/i.test(e.nodeName);
      }, t.prototype.__setWorkCell = function (e, t) {
        void 0 === t && (t = null), this.__wholeTable = t, this.__workCell = e, this.__workTable = a.Dom.up(e, function (e) {
          return e && "TABLE" === e.nodeName;
        }, this.jodit.editor);
      }, t.prototype.__calcResizerPosition = function (e, o, n, s) {
        void 0 === n && (n = 0), void 0 === s && (s = 0);var l = r.offset(o, this.jodit);if (n > i.NEARBY && l.width - n > i.NEARBY) this.__resizerHandler.style.display = "none";else {
          var c = r.offset(e, this.jodit);if (this.__resizerHandler.style.left = (n > i.NEARBY ? l.left + l.width : l.left) + s + "px", this.__resizerHandler.style.height = c.height + "px", this.__resizerHandler.style.top = c.top + "px", this.__resizerHandler.style.display = "block", n > i.NEARBY) this.__setWorkCell(o, !!a.Dom.next(o, t.isCell, o.parentNode) && null);else {
            var d = a.Dom.prev(o, t.isCell, o.parentNode);d ? this.__setWorkCell(d) : this.__setWorkCell(o, !0);
          }
        }
      }, t.prototype.observe = function (e) {
        var o = this;e[this.__key] = !0;var n;this.jodit.events.on(e, "mousedown touchstart", function (i) {
          if (!o.jodit.options.readonly) {
            var r = a.Dom.up(i.target, t.isCell, e);r && r instanceof o.jodit.editorWindow.HTMLElement && (r.firstChild || r.appendChild(a.Dom.create("br", "", o.jodit.editorDocument)), n = r, a.Table.addSelected(r), o.__selectMode = !0, o.jodit.lock(o.__key));
          }
        }).on(e, "mouseleave", function (e) {
          o.__resizerHandler && o.__resizerHandler !== e.relatedTarget && (o.__resizerHandler.style.display = "none");
        }).on(e, "mousemove touchmove", function (i) {
          if (!o.jodit.options.readonly && !o.__drag && !o.jodit.isLockedNotBy(o.__key)) {
            var s = a.Dom.up(i.target, t.isCell, e);if (s) if (o.__selectMode) {
              s !== n && (o.jodit.editorWindow.getSelection().removeAllRanges(), i.preventDefault && i.preventDefault()), o.__deSelectAll(e);for (var l = a.Table.getSelectedBound(e, [s, n]), c = a.Table.formalMatrix(e), d = l[0][0]; l[1][0] >= d; d += 1) {
                for (var u = l[0][1]; l[1][1] >= u; u += 1) {
                  a.Table.addSelected(c[d][u]);
                }
              }var p = c[l[1][0]][l[1][1]],
                  f = c[l[0][0]][l[0][1]];o.jodit.events.fire("showPopap", e, r.offset(f, o.jodit).left + Math.round((r.offset(p, o.jodit).left + p.offsetWidth - r.offset(f, o.jodit).left) / 2), r.offset(p, o.jodit).top + p.offsetHeight), i.stopPropagation();
            } else o.__calcResizerPosition(e, s, i.offsetX);
          }
        }), this.__addResizer();
      }, t;
    }(a.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }(),
        i = this && this.__assign || Object.assign || function (e) {
      for (var t, o = 1, n = arguments.length; n > o; o++) {
        t = arguments[o];for (var i in t) {
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
      }return e;
    };Object.defineProperty(t, "__esModule", { value: !0 });var r = o(6),
        s = o(4),
        a = o(7),
        l = o(1),
        c = o(0),
        d = o(5),
        u = o(19),
        p = o(11),
        f = o(14),
        h = o(2),
        m = o(10);l.Config.prototype.filebrowser = { filter: function filter(e, t) {
        return t = t.toLowerCase(), "string" == typeof e ? -1 !== e.toLowerCase().indexOf(t) : "string" == typeof e.name ? -1 !== e.name.toLowerCase().indexOf(t) : "string" != typeof e.file || -1 !== e.file.toLowerCase().indexOf(t);
      }, sortBy: "changed", sort: function sort(e, t, o) {
        var n,
            i,
            r = function r(e, t) {
          return t > e ? -1 : e > t ? 1 : 0;
        };if ("string" == typeof e) return r(e.toLowerCase(), t.toLowerCase());if (void 0 === e[o] || "name" === o) return "string" == typeof e.name ? r(e.name.toLowerCase(), t.name.toLowerCase()) : "string" == typeof e.file ? r(e.file.toLowerCase(), t.file.toLowerCase()) : 0;switch (o) {case "changed":
            return n = new Date(e.changed), i = new Date(t.changed), i.getTime() - n.getTime();case "size":
            return c.humanSizeToBytes(e.size) - c.humanSizeToBytes(t.size);}return 0;
      }, editImage: !0, preview: !0, showPreviewNavigation: !0, showSelectButtonInPreview: !0, contextMenu: !0, howLongShowMsg: 3e3, createNewFolder: !0, deleteFolder: !0, moveFolder: !0, moveFile: !0, showFoldersPanel: !0, width: 763, height: 400, buttons: ["upload", "remove", "update", "select", "edit", "tiles", "list", "filter", "sort"], view: "tiles", isSuccess: function isSuccess(e) {
        return e.success;
      }, getMessage: function getMessage(e) {
        return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : "";
      }, showFileName: !0, showFileSize: !0, showFileChangeTime: !0, getThumbTemplate: function getThumbTemplate(e, t, o) {
        var n,
            i = "",
            r = "",
            s = "" + new Date().getTime();return "string" == typeof e ? (i = e, r = e) : (void 0 !== e.file && (i = e.file, r = e.file), e.thumb && (r = e.thumb)), n = '<div class="' + g + '-info">\n            ' + (this.options.showFileName ? '<span class="' + g + '-info-filename">' + i + "</span>" : "") + "\n            " + (this.options.showFileSize && e.size ? '<span class="' + g + '-info-filesize">' + e.size + "</span>" : "") + "\n            " + (this.options.showFileChangeTime && e.changed ? '<span class="' + g + '-info-filechanged">' + e.changed + "</span>" : "") + "\n        </div>", '<a draggable="true" class="' + g + '" href="' + c.urlNormalize(t.baseurl + t.path + i) + '" data-source="' + o + '" data-path="' + c.pathNormalize(t.path ? t.path + "/" : "/") + '" data-name="' + i + '" title="' + i + '" data-url="' + c.urlNormalize(t.baseurl + t.path + i) + '">\n            <img src="' + c.urlNormalize(t.baseurl + t.path + r) + "?_tmst=" + s + '" alt="' + i + '"/>\n            ' + (this.options.showFileName || this.options.showFileSize && e.size || this.options.showFileChangeTime && e.changed ? n : "") + "\n        </a>";
      }, ajax: { url: "", async: !0, data: {}, cache: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", method: "POST", processData: !0, dataType: "json", headers: {}, prepareData: function prepareData(e) {
          return e;
        }, process: function process(e) {
          return e;
        } }, create: { data: { action: "folderCreate" } }, getLocalFileByUrl: { data: { action: "getLocalFileByUrl" } }, resize: { data: { action: "imageResize" } }, crop: { data: { action: "imageCrop" } }, move: { data: { action: "fileMove" } }, remove: { data: { action: "fileRemove" } }, items: { data: { action: "files" } }, folder: { data: { action: "folders" } }, permissions: { data: { action: "permissions" } }, uploader: null };var v = "default",
        g = "jodit_filebrowser_files_item";t.FileBrowser = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;o.currentPath = "", o.currentSource = v, o.currentBaseUrl = "", o.__currentPerpissions = null, o.view = "tiles", o.sortBy = "changed", o.dragger = !1, o.filterWord = "", o.getPathByUrl = function (e, t, n) {
          var i = o;o.options.getLocalFileByUrl.data.url = e, o.send("getLocalFileByUrl", function (e) {
            i.options.isSuccess(e) ? t(e.data.path, e.data.name, e.data.source) : n(Error(o.options.getMessage(e)));
          }, function (e) {
            n(e);
          });
        }, o.loadItems = function (e, t) {
          var n = o;n.options.items.data.path = e, n.options.items.data.source = t, n.options.items.url && (n.files.classList.add("active"), n.files.appendChild(n.loader.cloneNode(!0)), n.__ajax2 && n.__ajax2.abort && n.__ajax2.abort(), n.__ajax2 = n.send("items", function (e) {
            var t = n.options.items.process;if (t || (t = o.options.ajax.process), t) {
              var i = t.call(n, e);n.generateItemsBox(i.data.sources), n.someSelectedWasChanged();
            }
          }, function (e) {
            a.Alert(e.message), n.errorHandler(e);
          }));
        }, o.create = function (e, t, n) {
          o.options.create.data.source = n, o.options.create.data.path = t, o.options.create.data.name = e, o.send("create", function (e) {
            o.options.isSuccess(e) ? (o.currentPath = t, o.currentSource = n, o.loadTree(t, n)) : o.status(o.options.getMessage(e));
          }, function (e) {
            o.status(e.message);
          });
        }, o.move = function (e, t, n) {
          o.options.move.data.from = e, o.options.move.data.path = t, o.options.move.data.source = n, o.send("move", function (e) {
            o.options.isSuccess(e) ? o.loadTree(t, n) : o.status(o.options.getMessage(e));
          }, function (e) {
            o.status(e.message);
          });
        }, o.close = function () {
          o.dialog.close();
        }, o.open = function (e) {
          if (o.options.items.url) {
            var t = 0;o.jodit.events.off(o.files, "dblclick").on(o.files, "dblclick", o.onSelect(e), "a").on(o.files, "touchstart", function () {
              var n = new Date().getTime();h.EMULATE_DBLCLICK_TIMEOUT > n - t && o.onSelect(e)(), t = n;
            }, "a").off(o.buttons.select, "click").on(o.buttons.select, "click", o.onSelect(e)), o.loadTree(o.currentPath, o.currentSource);var n = [c.dom('<span class="jodit_dialog_header_title">' + o.jodit.i18n("File Browser") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>", o.jodit.ownerDocument)],
                i = void 0,
                s = void 0;for (i = 0; o.options.buttons.length > i; i += 1) {
              var a = o.options.buttons[i];"string" == typeof a && void 0 !== o.buttons[a] && (o.options.editImage && void 0 !== r.Jodit.modules.ImageEditor || "edit" !== a) ? n.push(o.buttons[a]) : "function" == typeof a ? n.push(a.call(o)) : c.isPlainObject(a) && a.exec && a.name && (s = c.dom('<div class="jodit_button">' + d.ToolbarIcon.getIcon(a.icon || a.name || "") + "</div>", o.jodit.ownerDocument), n.push(s), s.addEventListener("click", a.exec));
            }o.dialog.open(o.browser, n);
          }
        }, o.errorHandler = function (e) {
          o.status(e instanceof Error ? o.jodit.i18n(e.message) : o.options.getMessage(e));
        }, o.uploadHandler = function () {
          o.loadItems(o.currentPath, o.currentSource);
        }, o.openImageEditor = function (e, t, n, i, r, s) {
          o.jodit.getInstance("ImageEditor").open(e, function (e, a, l, c) {
            void 0 === o.options[a.action] && (o.options[a.action] = {}), void 0 === o.options[a.action].data && (o.options[a.action].data = { action: a.action }), o.options[a.action].data.newname = e || t, o.options[a.action].data.box = a.box, o.options[a.action].data.path = n, o.options[a.action].data.name = t, o.options[a.action].data.source = i, o.send(a.action, function (e) {
              o.options.isSuccess(e) ? (o.loadTree(o.currentPath, o.currentSource), l(), r && r()) : (c(Error(o.options.getMessage(e))), s && s(Error(o.options.getMessage(e))));
            }, function (e) {
              c(e), s && s(e);
            });
          });
        }, o.draggable = !1, o.start = { top: 0, left: 0 }, o.client = { x: 0, y: 0 };var n = o,
            s = t.ownerDocument;n.options = c.extend(!0, {}, l.Config.prototype.filebrowser, n.jodit.options.filebrowser), n.dialog = new a.Dialog(t, { fullsizeButton: !0 }), n.loader = c.dom('<div class="jodit_filebrowser_loader"><i class="jodit_icon-loader"></i></div>', s), n.browser = c.dom('<div class="jodit_filebrowser non-selected">' + (n.options.showFoldersPanel ? '<div class="jodit_filebrowser_tree"></div>' : "") + '<div class="jodit_filebrowser_files"></div><div class="jodit_filebrowser_status"></div></div>', s), n.status_line = n.browser.querySelector(".jodit_filebrowser_status"), n.buttons = { upload: c.dom('<div class="jodit_uploadfile_button jodit_button">' + d.ToolbarIcon.getIcon("plus") + '<input type="file" accept="image/*" tabindex="-1" dir="auto" multiple=""/></div>', s), remove: c.dom('<div class="jodit_button disabled">' + d.ToolbarIcon.getIcon("bin") + "</div>", s), update: c.dom('<div class="jodit_button">' + d.ToolbarIcon.getIcon("update") + "</div>", s), select: c.dom('<div class="jodit_button disabled">' + d.ToolbarIcon.getIcon("check") + "</div>", s), edit: c.dom('<div class="jodit_button disabled">' + d.ToolbarIcon.getIcon("pencil") + "</div>", s), tiles: c.dom('<div class="jodit_button jodit_button_tiles disabled">' + d.ToolbarIcon.getIcon("th") + "</div>", s), list: c.dom('<div class="jodit_button disabled">' + d.ToolbarIcon.getIcon("th-list") + "</div>", s), filter: c.dom('<input class="jodit_input" placeholder="' + t.i18n("Filter") + '"/>', s), sort: c.dom('<select class="jodit_input"><option value="changed">' + t.i18n("Sort by changed") + '</option><option value="name">' + t.i18n("Sort by name") + '</option><option value="size">' + t.i18n("Sort by size") + "</option></select>", s) }, n.tree = n.browser.querySelector(".jodit_filebrowser_tree"), n.files = n.browser.querySelector(".jodit_filebrowser_files"), n.jodit.events.on([n.buttons.tiles, n.buttons.list], "click", function (e) {
          var t = e.currentTarget;t.classList.contains("jodit_button_tiles") ? (n.view = "tiles", n.buttons.list.classList.add("disabled")) : (n.view = "list", n.buttons.tiles.classList.add("disabled")), t.classList.remove("disabled"), n.files.classList.remove("jodit_filebrowser_files_view-tiles"), n.files.classList.remove("jodit_filebrowser_files_view-list"), n.files.classList.add("jodit_filebrowser_files_view-" + n.view), m.Cookie.set("jodit_filebrowser_view", n.view, 31);
        }).on(n.buttons.sort, "change", function () {
          n.sortBy = n.buttons.sort.value, m.Cookie.set("jodit_filebrowser_sortby", n.sortBy, 31), n.loadItems(n.currentPath, n.currentSource);
        }).on(n.buttons.sort, "click mousedown", function (e) {
          e.stopPropagation();
        }).on(n.buttons.filter, "click mousedown", function (e) {
          e.stopPropagation();
        }).on(n.buttons.filter, "keydown", c.debounce(function () {
          n.filterWord = n.buttons.filter.value, n.loadItems(n.currentPath, n.currentSource);
        }, 300)).on(n.buttons.remove, "click", function () {
          o.__getActiveElements().length && a.Confirm(t.i18n("Are you shure?"), "", function (e) {
            e && (o.__getActiveElements().forEach(function (e) {
              n.remove(n.currentPath, e.getAttribute("data-name") || "", e.getAttribute("data-source") || "");
            }), n.someSelectedWasChanged(), n.loadTree(n.currentPath, n.currentSource));
          });
        }).on(n.buttons.edit, "click", function () {
          var e = o.__getActiveElements();1 === e.length && n.openImageEditor(e[0].getAttribute("href") || "", e[0].getAttribute("data-name") || "", e[0].getAttribute("data-path") || "", e[0].getAttribute("data-source") || "");
        }).on(n.buttons.update, "click", function () {
          n.loadTree(o.currentPath, o.currentSource);
        }).on(n.tree, "click", function (e) {
          var o = this.parentNode,
              i = o.getAttribute("data-path") || "";return a.Confirm(t.i18n("Are you shure?"), "", function (e) {
            e && (n.remove(i, o.getAttribute("data-name") || "", o.getAttribute("data-source") || ""), n.loadTree(n.currentPath, n.currentSource));
          }), e.stopImmediatePropagation(), !1;
        }, "a>i.remove").on(n.tree, "click", function () {
          var e = this;this.classList.contains("addfolder") ? a.Promt(n.jodit.i18n("Enter Directory name"), n.jodit.i18n("Create directory"), function (t) {
            n.create(t, e.getAttribute("data-path") || "", e.getAttribute("data-source") || "");
          }, n.jodit.i18n("type name")) : (n.currentPath = this.getAttribute("data-path") || "", n.currentSource = this.getAttribute("data-source") || "", n.loadTree(n.currentPath, n.currentSource));
        }, "a").on(o.tree, "dragstart", function () {
          n.dragger = this;
        }, "a").on(o.tree, "drop", function () {
          if (n.options.moveFolder && n.dragger) {
            var e = n.dragger.getAttribute("data-path") || "";if (!n.options.moveFolder && n.dragger.classList.contains("jodit_filebrowser_tree_item")) return !1;if (n.dragger.classList.contains(g) && (e += n.dragger.getAttribute("data-name"), !n.options.moveFile)) return !1;n.move(e, this.getAttribute("data-path") || "", this.getAttribute("data-source") || "");
          }
        }, "a");var f = new u.ContextMenu(o.jodit);return n.jodit.events.on(n.files, "mousedown", function (e) {
          n.client.x = e.clientX, n.client.y = e.clientY, n.start = c.offset(this, n.jodit), n.draggable = this.cloneNode(!0), c.css(n.draggable, { "z-index": 1e14, position: "fixed", display: "none", left: n.start.left, top: n.start.top, width: this.offsetWidth, height: this.offsetHeight }), s.body.appendChild(n.draggable);
        }, "a>img").on(n.files, "dragstart", function (e) {
          n.dragger = this, e.dataTransfer.setData(h.TEXT_PLAIN, this.getAttribute("href") || ""), e.stopPropagation();
        }, "a").on(n.files, "contextmenu", function (e) {
          var t = this;if (n.options.contextMenu) {
            var o = this;return f.show(e.pageX, e.pageY, [!(!n.options.editImage || !n.canI("ImageResize") && !n.canI("ImageCrop")) && { icon: "pencil", title: "Edit", exec: function exec() {
                n.openImageEditor(o.getAttribute("href") || "", o.getAttribute("data-name") || "", o.getAttribute("data-path") || "", o.getAttribute("data-source") || "");
              } }, !!n.canI("FileRemove") && { icon: "bin", title: "Delete", exec: function exec() {
                n.remove(n.currentPath, o.getAttribute("data-name") || "", o.getAttribute("data-source") || ""), n.someSelectedWasChanged(), n.loadTree(n.currentPath, n.currentSource);
              } }, !!n.options.preview && { icon: "eye", title: "Preview", exec: function exec() {
                var e = o.getAttribute("href") || "",
                    i = new a.Dialog(n.jodit),
                    r = c.dom('<div class="jodit_filebrowser_preview"><i class="jodit_icon-loader"></i></div>', s),
                    l = n.buttons.select.cloneNode(!0),
                    u = s.createElement("img"),
                    p = function p() {
                  var a = function a() {
                    if (t.removeEventListener("load", a), r.innerHTML = "", n.options.showPreviewNavigation) {
                      var l = c.dom('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-next">' + d.ToolbarIcon.getIcon("angle-right") + "</a>", s),
                          f = c.dom('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-prev">' + d.ToolbarIcon.getIcon("angle-left") + "</a>", s);o.previousSibling && o.previousSibling.classList && o.previousSibling.classList.contains(g) && r.appendChild(f), o.nextSibling && o.nextSibling.classList && o.nextSibling.classList.contains(g) && r.appendChild(l), n.jodit.events.on([l, f], "click", function () {
                        o = this.classList.contains("jodit_filebrowser_preview_navigation-next") ? o.nextSibling : o.previousSibling, r.innerHTML = '<i class="jodit_icon-loader"></i>', e = o.getAttribute("href") || "", u.setAttribute("src", e), p();
                      });
                    }r.appendChild(u), i.setPosition();
                  };u.addEventListener("load", a), u.complete && a.call(u);
                };p(), u.setAttribute("src", e), i.setContent(r), n.options.showSelectButtonInPreview && (l.removeAttribute("disabled"), i.setTitle(l), l.addEventListener("click", function () {
                  c.$$("a.active", n.files).forEach(function (e) {
                    return e.classList.add("active");
                  }), o.classList.add("active"), n.jodit.events.fire(n.buttons.select, "click"), i.close();
                })), i.open();
              } }, { icon: "upload", title: "Download", exec: function exec() {
                o.getAttribute("href") && n.jodit.ownerWindow.open();
              } }]), e.stopPropagation(), e.preventDefault(), !1;
          }
        }, "a").on(n.files, "click", function (e) {
          c.ctrlKey(e) || (o.__getActiveElements().forEach(function (e) {
            e.classList.remove("active");
          }), n.someSelectedWasChanged());
        }).on(n.files, "click", function (e) {
          return c.ctrlKey(e) || n.__getActiveElements().forEach(function (e) {
            e.classList.remove("active");
          }), this.classList.toggle("active"), n.someSelectedWasChanged(), e.stopPropagation(), !1;
        }, "a").on(n.jodit.ownerDocument, "dragover", function (e) {
          n.isOpened() && n.draggable && void 0 !== e.clientX && c.css(n.draggable, { left: e.clientX + 20, top: e.clientY + 20, display: "block" });
        }).on(n.jodit.ownerWindow, "keydown", function (e) {
          n.isOpened() && e.which === h.KEY_DELETE && n.jodit.events.fire(n.buttons.remove, "click");
        }).on(n.jodit.ownerWindow, "mouseup dragend", function () {
          n.draggable && (n.draggable.parentNode && n.draggable.parentNode.removeChild(n.draggable), n.draggable = !1);
        }), o.dialog.setSize(o.options.width, o.options.height), o.options.getLocalFileByUrl = c.extend(!0, {}, o.options.ajax, o.options.getLocalFileByUrl), o.options.crop = c.extend(!0, {}, o.options.ajax, o.options.crop), o.options.resize = c.extend(!0, {}, o.options.ajax, o.options.resize), o.options.create = c.extend(!0, {}, o.options.ajax, o.options.create), o.options.move = c.extend(!0, {}, o.options.ajax, o.options.move), o.options.remove = c.extend(!0, {}, o.options.ajax, o.options.remove), o.options.folder = c.extend(!0, {}, o.options.ajax, o.options.folder), o.options.items = c.extend(!0, {}, o.options.ajax, o.options.items), o.options.permissions = c.extend(!0, {}, o.options.ajax, o.options.permissions), o.view = "list" === o.options.view ? "list" : "tiles", m.Cookie.get("jodit_filebrowser_view") && (o.view = "list" === m.Cookie.get("jodit_filebrowser_view") ? "list" : "tiles"), o.buttons[o.view].classList.remove("disabled"), o.files.classList.add("jodit_filebrowser_files_view-" + o.view), o.sortBy = -1 !== ["changed", "name", "size"].indexOf(o.options.sortBy) ? o.options.sortBy : "changed", m.Cookie.get("jodit_filebrowser_sortby") && (o.sortBy = -1 !== ["changed", "name", "size"].indexOf(m.Cookie.get("jodit_filebrowser_sortby") || "") ? m.Cookie.get("jodit_filebrowser_sortby") || "" : "changed"), o.buttons.sort.value = o.sortBy, o.currentBaseUrl = c.$$("base", o.jodit.editorDocument).length ? c.$$("base", o.jodit.editorDocument)[0].getAttribute("href") || "" : location.protocol + "//" + location.host, void 0 !== r.Jodit.modules.Uploader && (o.uploader = new p.Uploader(o.jodit, i({}, o.jodit.options.uploader, o.options.uploader ? o.options.uploader : {})), o.uploader.setPath(o.currentPath), o.uploader.setSource(o.currentSource), o.uploader.bind(o.browser, o.uploadHandler, o.errorHandler), o.uploader.bind(o.buttons.upload, o.uploadHandler, o.errorHandler)), o;
      }return n(t, e), t.prototype.canI = function (e) {
        return null !== this.__currentPerpissions && (void 0 === this.__currentPerpissions["allow" + e] || this.__currentPerpissions["allow" + e]);
      }, t.prototype.toggleButtonsByPermissions = function () {
        this.buttons.upload.classList.toggle("jodit_hidden", !this.canI("FileUpload")), this.buttons.remove.classList.toggle("jodit_hidden", !this.canI("FileRemove")), this.buttons.edit.classList.toggle("jodit_hidden", !this.canI("ImageResize") && !this.canI("ImageCrop"));
      }, t.prototype.isOpened = function () {
        return this.dialog.isOpened() && "none" !== this.browser.style.display;
      }, t.prototype.status = function (e, t) {
        var o = this;clearTimeout(this.statustimer), this.status_line.classList.remove("success"), this.status_line.classList.add("active"), this.status_line.innerHTML = e, t && this.status_line.classList.add("success"), this.statustimer = window.setTimeout(function () {
          o.status_line.classList.remove("active");
        }, this.options.howLongShowMsg);
      }, t.prototype.generateFolderTree = function (e) {
        var t = this,
            o = [];c.each(e, function (e, n) {
          e && e !== v && o.push('<div class="jodit_filebrowser_source_title">' + e + "</div>"), n.folders.forEach(function (i) {
            var r = '<a draggable="draggable" class="jodit_filebrowser_tree_item" href="javascript:void(0)" data-path="' + c.pathNormalize(n.path + i) + '/" data-source="' + e + '"><span>' + i + "</span>";t.options.deleteFolder && ".." !== i && "." !== i && (r += '<i class="remove" data-path="' + c.pathNormalize(n.path + i + "/") + '">&times;</i>'), r += "</a>", o.push(r);
          }), t.options.createNewFolder && t.canI("FolderCreate") && o.push('<a class="jodit_button addfolder" href="javascript:void(0)" data-path="' + c.pathNormalize(n.path + name) + '/" data-source="' + e + '">' + d.ToolbarIcon.getIcon("plus") + " " + t.jodit.i18n("Add folder") + "</a>");
        }), this.tree.innerHTML = o.join("");
      }, t.prototype.generateItemsBox = function (e) {
        var t = this,
            o = [];c.each(e, function (e, n) {
          e && e !== v && o.push('<div class="jodit_filebrowser_source_title">' + e + (n.path ? " - " + n.path : "") + "</div>"), n.files && n.files.length ? ("function" == typeof t.options.sort && n.files.sort(function (e, o) {
            return t.options.sort(e, o, t.sortBy, t.jodit);
          }), n.files.forEach(function (i) {
            (void 0 === t.options.filter || t.options.filter(i, t.filterWord)) && o.push(t.options.getThumbTemplate.call(t, i, n, e));
          })) : o.push("<div>" + t.jodit.i18n("There are no files") + "</div>");
        }), this.files.innerHTML = o.join("");
      }, t.prototype.__getActiveElements = function () {
        return c.$$(":scope>a.active", this.files);
      }, t.prototype.someSelectedWasChanged = function () {
        var e = this.__getActiveElements();this.buttons.remove.classList.toggle("disabled", !e.length), this.buttons.select.classList.toggle("disabled", !e.length), this.buttons.edit.classList.toggle("disabled", 1 !== e.length);
      }, t.prototype.send = function (e, t, o) {
        var n,
            i = c.extend(!0, {}, this.options.ajax, void 0 !== this.options[e] ? this.options[e] : this.options.ajax);return i.prepareData && (i.data = i.prepareData.call(this, i.data)), n = new f.Ajax(this.jodit, i), n.send().then(t).catch(o), n;
      }, t.prototype.loadPermissions = function (e, t, o) {
        var n = this,
            i = this;i.options.permissions.data.path = e, i.options.permissions.data.source = t, i.options.permissions.url ? (i.__permissions && i.__permissions.abort && i.__permissions.abort(), i.__permissions = i.send("permissions", function (e) {
          var t = i.options.permissions.process;if (t || (t = n.options.ajax.process), t) {
            var r = t.call(i, e);r.data.permissions && (n.__currentPerpissions = r.data.permissions, n.toggleButtonsByPermissions(), o());
          }
        }, function (e) {
          a.Alert(e.message), i.errorHandler(e), o();
        })) : o();
      }, t.prototype.loadTree = function (e, t) {
        var o = this;this.loadPermissions(e, t, function () {
          var n = o;n.options.folder.data.path = e, n.options.folder.data.source = t, n.uploader && (n.uploader.setPath(e), n.uploader.setSource(t)), n.options.showFoldersPanel && (n.options.folder.url ? (n.tree.classList.add("active"), n.tree.innerHTML = "", n.tree.appendChild(n.loader.cloneNode(!0)), n.__ajax && n.__ajax.abort && n.__ajax.abort(), n.__ajax = o.send("folder", function (e) {
            var t = n.options.folder.process;if (t || (t = o.options.ajax.process), t) {
              var i = t.call(n, e);n.generateFolderTree(i.data.sources);
            }
          }, function () {
            n.errorHandler(Error(n.jodit.i18n("Error on load folders")));
          })) : n.tree.classList.remove("active")), o.loadItems(e, t);
        });
      }, t.prototype.remove = function (e, t, o) {
        var n = this;this.options.remove.data.path = e, this.options.remove.data.name = t, this.options.remove.data.source = o, this.send("remove", function (e) {
          n.options.remove.process && (e = n.options.remove.process.call(n, e)), n.options.isSuccess(e) ? (n.someSelectedWasChanged(), n.status(n.options.getMessage(e), !0)) : n.status(n.options.getMessage(e));
        }, function (e) {
          n.status(e.message);
        });
      }, t.prototype.onSelect = function (e) {
        var t = this;return function () {
          var o = t.__getActiveElements();if (o.length) {
            var n = [];o.forEach(function (e) {
              var t = e.getAttribute("data-url");t && n.push(t);
            }), t.close(), "function" == typeof e && e({ baseurl: "", files: n });
          }return !1;
        };
      }, t;
    }(s.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(4),
        r = o(1),
        s = o(0),
        a = o(5),
        l = o(7);r.Config.prototype.imageeditor = { closeAfterSave: !1, width: "85%", height: "85%", crop: !0, resize: !0, resizeUseRatio: !0, resizeMinWidth: 20, resizeMinHeight: 20, cropUseRatio: !0, cropDefaultWidth: "70%", cropDefaultHeight: "70%" }, t.ImageEditor = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;return o.resizeUseRatio = !0, o.cropUseRatio = !0, o.clicked = !1, o.activeTab = "resize", o.hide = function () {
          o.dialog.close();
        }, o.calcValueByPercent = function (e, t) {
          var o,
              n = "" + t,
              i = parseFloat("" + e);return (o = /^[\-+]?[0-9]+(px)?$/.exec(n)) ? parseInt(n, 10) : (o = /^([\-+]?[0-9.]+)%$/.exec(n), o ? Math.round(i * (parseFloat(o[1]) / 100)) : i || 0);
        }, o.calcCropBox = function () {
          var e = .8 * o.crop_box.parentNode.offsetWidth,
              t = .8 * o.crop_box.parentNode.offsetHeight,
              n = e,
              i = t;e > o.naturalWidth && t > o.naturalHeight ? (n = o.naturalWidth, i = o.naturalHeight) : o.ratio > e / t ? (n = e, i = o.naturalHeight * (e / o.naturalWidth)) : (n = o.naturalWidth * (t / o.naturalHeight), i = t), s.css(o.crop_box, { width: n, height: i });
        }, o.showCrop = function () {
          o.cropImage && (o.calcCropBox(), o.new_w = o.calcValueByPercent(o.cropImage.offsetWidth || o.image.offsetWidth, o.options.cropDefaultWidth), o.new_h = o.cropUseRatio ? o.new_w / o.ratio : o.calcValueByPercent(o.cropImage.offsetHeight || o.image.offsetHeight, o.options.cropDefaultHeight), s.css(o.cropHandler, { backgroundImage: "url(" + o.cropImage.getAttribute("src") + ")", width: o.new_w, height: o.new_h, left: (o.cropImage.offsetWidth || o.image.offsetWidth) / 2 - o.new_w / 2, top: (o.cropImage.offsetHeight || o.image.offsetHeight) / 2 - o.new_h / 2 }), o.jodit.events.fire(o.cropHandler, "updatesize"));
        }, o.cropBox = { x: 0, y: 0, w: 0, h: 0 }, o.updateCropBox = function () {
          if (o.cropImage) {
            var e = o.cropImage.offsetWidth / o.naturalWidth,
                t = o.cropImage.offsetHeight / o.naturalHeight;o.cropBox.x = s.css(o.cropHandler, "left") / e, o.cropBox.y = s.css(o.cropHandler, "top") / t, o.cropBox.w = o.cropHandler.offsetWidth / e, o.cropBox.h = o.cropHandler.offsetHeight / t, o.sizes.innerText = o.cropBox.w.toFixed(0) + "x" + o.cropBox.h.toFixed(0);
          }
        }, o.resizeBox = { w: 0, h: 0 }, o.updateResizeBox = function () {
          o.resizeBox.w = o.image.offsetWidth || o.naturalWidth, o.resizeBox.h = o.image.offsetHeight || o.naturalHeight;
        }, o.open = function (e, t) {
          var n = new Date().getTime();o.image = o.jodit.ownerDocument.createElement("img"), s.$$("img,.jodit_icon-loader", o.resize_box).forEach(function (e) {
            e.parentNode && e.parentNode.removeChild(e);
          }), s.$$("img,.jodit_icon-loader", o.crop_box).forEach(function (e) {
            e.parentNode && e.parentNode.removeChild(e);
          }), s.css(o.cropHandler, "background", "transparent"), o.onSave = t, o.resize_box.appendChild(s.dom('<i class="jodit_icon-loader"></i>', o.jodit.ownerDocument)), o.crop_box.appendChild(s.dom('<i class="jodit_icon-loader"></i>', o.jodit.ownerDocument)), /\?/.test(e) ? e += "&_tst=" + n : e += "?_tst=" + n, o.image.setAttribute("src", e), o.dialog.open();var i = function i() {
            o.image.removeEventListener("load", i), o.naturalWidth = o.image.naturalWidth, o.naturalHeight = o.image.naturalHeight, o.widthInput.value = "" + o.naturalWidth, o.heightInput.value = "" + o.naturalHeight, o.ratio = o.naturalWidth / o.naturalHeight, o.resize_box.appendChild(o.image), o.cropImage = o.image.cloneNode(), o.crop_box.appendChild(o.cropImage), s.$$(".jodit_icon-loader", o.editor).forEach(function (e) {
              e.parentNode && e.parentNode.removeChild(e);
            }), "crop" === o.activeTab && o.showCrop(), o.jodit.events.fire(o.resizeHandler, "updatesize"), o.jodit.events.fire(o.cropHandler, "updatesize"), o.dialog.setPosition(), o.jodit.events.fire("afterImageEditor");
          };o.image.addEventListener("load", i), o.image.complete && i();
        }, o.setHandlers = function () {
          var e = o;e.jodit.events.on([e.editor.querySelector(".jodit_bottomright"), e.cropHandler], "mousedown", function (t) {
            e.target = t.target || t.srcElement, t.preventDefault(), t.stopImmediatePropagation(), e.clicked = !0, e.start_x = t.clientX, e.start_y = t.clientY, "crop" === e.activeTab ? (e.top_x = s.css(e.cropHandler, "left"), e.top_y = s.css(e.cropHandler, "top"), e.width = e.cropHandler.offsetWidth, e.height = e.cropHandler.offsetHeight) : (e.width = e.image.offsetWidth, e.height = e.image.offsetHeight);
          }).off(o.jodit.ownerWindow, ".jodit_image_editor" + e.jodit.id).on(o.jodit.ownerWindow, "mousemove.jodit_image_editor" + e.jodit.id, s.throttle(function (t) {
            e.clicked && (e.diff_x = t.clientX - e.start_x, e.diff_y = t.clientY - e.start_y, "resize" === e.activeTab && e.resizeUseRatio || "crop" === e.activeTab && e.cropUseRatio ? e.diff_x ? (e.new_w = e.width + e.diff_x, e.new_h = Math.round(e.new_w / e.ratio)) : (e.new_h = e.height + e.diff_y, e.new_w = Math.round(e.new_h * e.ratio)) : (e.new_w = e.width + e.diff_x, e.new_h = e.height + e.diff_y), "resize" === e.activeTab ? (e.new_w > e.options.resizeMinWidth && (s.css(e.image, "width", e.new_w + "px"), e.widthInput.value = "" + e.new_w), e.new_h > e.options.resizeMinHeight && (s.css(e.image, "height", e.new_h + "px"), e.heightInput.value = "" + e.new_h), o.jodit.events.fire(e.resizeHandler, "updatesize")) : (e.target !== e.cropHandler ? (e.top_x + e.new_w > e.cropImage.offsetWidth && (e.new_w = e.cropImage.offsetWidth - e.top_x), e.top_y + e.new_h > e.cropImage.offsetHeight && (e.new_h = e.cropImage.offsetHeight - e.top_y), s.css(e.cropHandler, { width: e.new_w, height: e.new_h })) : (e.top_x + e.diff_x + e.cropHandler.offsetWidth > e.cropImage.offsetWidth && (e.diff_x = e.cropImage.offsetWidth - e.top_x - e.cropHandler.offsetWidth), s.css(e.cropHandler, "left", e.top_x + e.diff_x), e.top_y + e.diff_y + e.cropHandler.offsetHeight > e.cropImage.offsetHeight && (e.diff_y = e.cropImage.offsetHeight - e.top_y - e.cropHandler.offsetHeight), s.css(e.cropHandler, "top", e.top_y + e.diff_y)), o.jodit.events.fire(e.cropHandler, "updatesize")), t.stopImmediatePropagation());
          }, 5)).on(o.jodit.ownerWindow, "resize.jodit_image_editor" + e.jodit.id, function () {
            o.jodit.events.fire(e.resizeHandler, "updatesize"), e.showCrop(), o.jodit.events.fire(e.cropHandler, "updatesize");
          }).on(o.jodit.ownerWindow, "mouseup.jodit_image_editor" + e.jodit.id + " keydown.jodit_image_editor" + e.jodit.id, function (t) {
            e.clicked && (e.clicked = !1, t.stopImmediatePropagation());
          }), s.$$(".jodit_btn_group", e.editor).forEach(function (t) {
            var o = t.querySelector("input");e.jodit.events.on(t, "click change", function () {
              var n = this;s.$$("button", t).forEach(function (e) {
                return e.classList.remove("active");
              }), n.classList.add("active"), o.checked = !!n.getAttribute("data-yes"), e.jodit.events.fire(o, "change");
            }, "button");
          }), e.jodit.events.on(o.editor, "click", function () {
            s.$$(".jodit_image_editor_slider,.jodit_image_editor_area", e.editor).forEach(function (e) {
              return e.classList.remove("active");
            });var t = this.parentNode;t.classList.add("active"), e.activeTab = t.getAttribute("data-area") || "";var o = e.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_" + e.activeTab);o && o.classList.add("active"), "crop" === e.activeTab && e.showCrop();
          }, ".jodit_image_editor_slider-title").on(e.widthInput, "change mousedown keydown", s.debounce(function () {
            var t,
                n = parseInt(e.widthInput.value, 10);n > e.jodit.options.resizer.min_width && (s.css(e.image, "width", n + "px"), e.resizeUseRatio && (t = Math.round(n / e.ratio)) > e.jodit.options.resizer.min_height && (s.css(e.image, "height", t + "px"), e.heightInput.value = "" + t)), o.jodit.events.fire(e.resizeHandler, "updatesize");
          }, 200)).on(e.heightInput, "change mousedown keydown", s.debounce(function () {
            var t,
                n = parseInt(e.heightInput.value, 10);n > e.jodit.options.resizer.min_height && (s.css(e.image, "height", n + "px"), e.resizeUseRatio && (t = Math.round(n * e.ratio)) > e.jodit.options.resizer.min_width && (s.css(e.image, "width", t + "px"), e.widthInput.value = "" + t)), o.jodit.events.fire(e.resizeHandler, "updatesize");
          }, 200));var t = e.editor.querySelector(".jodit_image_editor_keep_spect_ratio");t && t.addEventListener("change", function () {
            e.resizeUseRatio = t.checked;
          });var n = e.editor.querySelector(".jodit_image_editor_keep_spect_ratio_crop");n && n.addEventListener("change", function () {
            e.cropUseRatio = n.checked;
          }), e.jodit.events.on(e.resizeHandler, "updatesize", function () {
            s.css(e.resizeHandler, { top: 0, left: 0, width: (e.image.offsetWidth || e.naturalWidth) + "px", height: (e.image.offsetHeight || e.naturalHeight) + "px" }), o.updateResizeBox();
          }).on(e.cropHandler, "updatesize", function () {
            if (e.cropImage) {
              var t = s.css(e.cropHandler, "left"),
                  o = s.css(e.cropHandler, "top"),
                  n = e.cropHandler.offsetWidth,
                  i = e.cropHandler.offsetHeight;0 > t && (t = 0), 0 > o && (o = 0), t + n > e.cropImage.offsetWidth && (n = e.cropImage.offsetWidth - t, e.cropUseRatio && (i = n / e.ratio)), o + i > e.cropImage.offsetHeight && (i = e.cropImage.offsetHeight - o, e.cropUseRatio && (n = i * e.ratio)), s.css(e.cropHandler, { width: n, height: i, left: t, top: o, backgroundPosition: -t - 1 + "px " + (-o - 1) + "px", backgroundSize: e.cropImage.offsetWidth + "px " + e.cropImage.offsetHeight + "px" }), e.updateCropBox();
            }
          }), e.buttons.forEach(function (t) {
            t.addEventListener("mousedown", function (e) {
              e.stopImmediatePropagation();
            }), t.addEventListener("click", function () {
              var o = { action: e.activeTab, box: "resize" === e.activeTab ? e.resizeBox : e.cropBox };switch (t.getAttribute("data-action")) {case "saveas":
                  l.Promt(e.jodit.i18n("Enter new name"), e.jodit.i18n("Save in new file"), function (t) {
                    if (!s.trim(t)) return l.Alert(e.jodit.i18n("The name should not be empty")), !1;e.onSave(t, o, e.hide, function (e) {
                      l.Alert(e);
                    });
                  });break;case "save":
                  e.onSave(void 0, o, e.hide, function (e) {
                    l.Alert(e);
                  });break;case "reset":
                  "resize" === e.activeTab ? (s.css(e.image, { width: null, height: null }), e.widthInput.value = "" + e.naturalWidth, e.heightInput.value = "" + e.naturalHeight, e.jodit.events.fire(e.resizeHandler, "updatesize")) : e.showCrop();}
            });
          });
        }, o.options = t.options.imageeditor, o.resizeUseRatio = o.options.resizeUseRatio, o.cropUseRatio = o.options.cropUseRatio, o.buttons = [s.dom('<button data-action="reset" type="button" class="jodit_btn">' + a.ToolbarIcon.getIcon("update") + " " + t.i18n("Reset") + "</button>", t.ownerDocument), s.dom('<button data-action="save" type="button" class="jodit_btn jodit_btn_success">' + a.ToolbarIcon.getIcon("save") + " " + t.i18n("Save") + "</button>", t.ownerDocument), s.dom('<button data-action="saveas" type="button" class="jodit_btn jodit_btn_success">' + a.ToolbarIcon.getIcon("save") + " " + t.i18n("Save as ...") + "</button>", t.ownerDocument)], o.activeTab = o.options.resize ? "resize" : "crop", o.editor = s.dom('<form class="jodit_image_editor jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-3-4">' + (o.options.resize ? '<div class="jodit_image_editor_area jodit_image_editor_area_resize active">                                <div class="jodit_image_editor_box"></div>                                <div class="jodit_image_editor_resizer">                                    <i class="jodit_bottomright"></i>                                </div>                            </div>' : "") + (o.options.crop ? '<div class="jodit_image_editor_area jodit_image_editor_area_crop' + (o.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_box">                                    <div class="jodit_image_editor_croper">                                        <i class="jodit_bottomright"></i>                                        <i class="jodit_sizes"></i>                                    </div>                                </div>                            </div>' : "") + '</div><div class="jodit_col-lg-1-4">' + (o.options.resize ? '<div data-area="resize" class="jodit_image_editor_slider active">                                <div class="jodit_image_editor_slider-title">' + a.ToolbarIcon.getIcon("resize") + t.i18n("Resize") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_width">' + t.i18n("Width") + '</label>                                        <input type="number" class="jodit_image_editor_width"/>                                    </div>                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_height">' + t.i18n("Height") + '</label>                                        <input type="number" class="jodit_image_editor_height"/>                                    </div>                                    <div class="jodit_form_group">                                        <label>' + t.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (o.resizeUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio"/>                                            <button type="button"  data-yes="1" class="jodit_col6 jodit_btn jodit_btn_success ' + (o.resizeUseRatio ? "active" : "") + '">' + t.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn' + (o.resizeUseRatio ? "" : "active") + '">' + t.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + (o.options.crop ? '<div data-area="crop" class="jodit_image_editor_slider' + (o.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_slider-title">' + a.ToolbarIcon.getIcon("crop") + t.i18n("Crop") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label>' + t.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (o.cropUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio_crop"/>                                            <button type="button" data-yes="1" class="jodit_col6 jodit_btn jodit_btn_success ' + (o.cropUseRatio ? "active" : "") + '">' + t.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn ' + (o.cropUseRatio ? "" : "active") + '">' + t.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + "</div></div></form>", t.ownerDocument), o.widthInput = o.editor.querySelector(".jodit_image_editor_width"), o.heightInput = o.editor.querySelector(".jodit_image_editor_height"), o.resize_box = o.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_resize .jodit_image_editor_box"), o.crop_box = o.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box"), o.sizes = o.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_sizes"), o.resizeHandler = o.editor.querySelector(".jodit_image_editor_resizer"), o.cropHandler = o.editor.querySelector(".jodit_image_editor_croper"), o.dialog = new l.Dialog(t), o.dialog.setContent(o.editor), o.dialog.setSize(o.options.width, o.options.height), o.dialog.setTitle(o.buttons), o.setHandlers(), o;
      }return n(t, e), t;
    }(i.Component);
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      e.events.on("keydown", function (t) {
        var o, n;if ((t.which === i.KEY_TAB || t.which === i.KEY_LEFT || t.which === i.KEY_RIGHT || t.which === i.KEY_TOP || t.which === i.KEY_BOTTOM) && (o = e.selection.current(), n = r.Dom.up(o, function (e) {
          return e && e.nodeName && /^td|th$/i.test(e.nodeName);
        }, e.editor))) {
          var s = e.editorWindow.getSelection(),
              a = s.rangeCount ? s.getRangeAt(0) : e.editorDocument.createRange();if (t.which === i.KEY_TAB || o === n || (t.which !== i.KEY_LEFT && t.which !== i.KEY_TOP || !(r.Dom.prev(o, function (e) {
            return t.which === i.KEY_TOP ? e && "BR" === e.nodeName : !!e;
          }, n) || t.which !== i.KEY_TOP && o.nodeType === Node.TEXT_NODE && 0 !== a.startOffset)) && (t.which !== i.KEY_RIGHT && t.which !== i.KEY_BOTTOM || !(r.Dom.next(o, function (e) {
            return t.which === i.KEY_BOTTOM ? e && "BR" === e.nodeName : !!e;
          }, n) || t.which !== i.KEY_BOTTOM && o.nodeType === Node.TEXT_NODE && o.nodeValue && a.startOffset !== o.nodeValue.length))) {
            var l = r.Dom.up(n, function (e) {
              return e && /^table$/i.test(e.nodeName);
            }, e.editor),
                c = null;switch (t.which) {case i.KEY_TAB:case i.KEY_LEFT:
                var d = t.which === i.KEY_LEFT || t.shiftKey ? "prev" : "next";(c = r.Dom[d](n, function (e) {
                  return e && /^td|th$/i.test(e.tagName);
                }, l)) || (r.Table.appendRow(l, "next" !== d && l.querySelector("tr"), "next" === d), c = r.Dom[d](n, function (t) {
                  return t && r.Dom.isCell(t, e.editorWindow);
                }, l));break;case i.KEY_TOP:case i.KEY_BOTTOM:
                var u = 0,
                    p = 0,
                    f = r.Table.formalMatrix(l, function (e, t, o) {
                  e === n && (u = t, p = o);
                });t.which === i.KEY_TOP ? void 0 !== f[u - 1] && (c = f[u - 1][p]) : void 0 !== f[u + 1] && (c = f[u + 1][p]);}if (c) {
              if (c.firstChild) t.which === i.KEY_TAB ? e.selection.select(c, !0) : e.selection.setCursorIn(c, t.which === i.KEY_RIGHT || t.which === i.KEY_BOTTOM);else {
                var h = r.Dom.create("br", "", e.editorDocument);c.appendChild(h), e.selection.setCursorBefore(h);
              }return !1;
            }
          }
        }
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = o(2),
        r = o(9);t.tableKeyboardNavigation = n;
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(1),
        r = o(0),
        s = o(9),
        a = o(2),
        l = o(2);i.Config.prototype.useSearch = !0, t.search = function (e) {
      function t(o) {
        var n = e.call(this, o) || this;if (n.template = '<div class="jodit_search"><div class="jodit_search_box"><div class="jodit_search_inputs"><input tabindex="0" class="jodit_search-query" placeholder="' + n.jodit.i18n("Search for") + '" type="text"/><input tabindex="0" class="jodit_search-replace" placeholder="' + n.jodit.i18n("Replace with") + '" type="text"/></div><div class="jodit_search_counts"><span>0/0</span></div><div class="jodit_search_buttons"><button tabindex="0" type="button" class="jodit_search_buttons-next">' + s.ToolbarIcon.getIcon("angle-down") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-prev">' + s.ToolbarIcon.getIcon("angle-up") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-cancel">' + s.ToolbarIcon.getIcon("cancel") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-replace">' + n.jodit.i18n("Replace") + "</button></div></div></div>", n.eachMap = function (e, t, o) {
          s.Dom.findWithCurrent(e, function (e) {
            return !!e && !0 === t(e);
          }, n.jodit.editor, o ? "nextSibling" : "previousSibling", o ? "firstChild" : "lastChild");
        }, n.updateCounters = function () {
          if (n.isOpened) {
            n.counterBox.style.display = n.queryInput.value.length ? "inline-block" : "none";var e = n.jodit.editorWindow.getSelection(),
                t = e.rangeCount ? e.getRangeAt(0) : n.jodit.editorDocument.createRange(),
                o = n.calcCounts(n.queryInput.value, t);n.counterBox.innerText = o.join("/");
          }
        }, n.calcCounts = function (e, t) {
          void 0 === t && (t = !1);for (var o = 0, i = 0, r = [], s = !1, a = n.jodit.editor.firstChild; a && e.length;) {
            if (s = n.find(a, e, !0, 0, s || n.jodit.editorDocument.createRange())) {
              if (n.boundAlreadyWas(s, r)) break;r.push(s), a = s.startContainer, i += 1, t && n.boundAlreadyWas(t, [s]) && (o = i);
            } else a = null;
          }return [o, i];
        }, n.findAndReplace = function (e, t) {
          var o = n.jodit.editorWindow.getSelection(),
              i = o.rangeCount ? o.getRangeAt(0) : n.jodit.editorDocument.createRange(),
              r = n.find(e, t, !0, 0, i);if (r && r.startContainer && r.endContainer) {
            var s = n.jodit.editorDocument.createRange();try {
              if (r && r.startContainer && r.endContainer) {
                s.setStart(r.startContainer, r.startOffset), s.setEnd(r.endContainer, r.endOffset), s.deleteContents();var a = n.jodit.editorDocument.createTextNode(n.replaceInput.value);s.insertNode(a), n.jodit.selection.select(a), n.tryScrollToElement(a);
              }
            } catch (e) {}return !0;
          }return !1;
        }, n.findAndSelect = function (e, t, o) {
          var i = n.jodit.editorWindow.getSelection(),
              r = i.rangeCount ? i.getRangeAt(0) : n.jodit.editorDocument.createRange(),
              s = n.find(e, t, o, 0, r);if (s && s.startContainer && s.endContainer) {
            var a = n.jodit.editorDocument.createRange();try {
              a.setStart(s.startContainer, s.startOffset), a.setEnd(s.endContainer, s.endOffset), n.jodit.selection.selectRange(a);
            } catch (e) {}return n.tryScrollToElement(s.startContainer), n.current = s.startContainer, n.updateCounters(), !0;
          }return !1;
        }, n.find = function (e, o, i, a, l) {
          if (e && o.length) {
            var c = "",
                d = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };if (n.eachMap(e, function (e) {
              if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.nodeValue.length) {
                var n = e.nodeValue;i || e !== l.startContainer ? i && e === l.endContainer && (n = a ? n.substr(0, l.startOffset) : n.substr(l.endOffset)) : n = a ? n.substr(l.endOffset) : n.substr(0, l.startOffset);var u = i ? c + n : n + c,
                    p = t.findSomePartOfString(o, u, i);if (!1 !== p) {
                  var f = t.findSomePartOfString(o, n, i);!0 === f ? f = r.trim(o) : !1 === f && !0 === (f = t.findSomePartOfString(n, o, i)) && (f = r.trim(n));var h = t.getSomePartOfStringIndex(o, n, i) || 0;if ((i && !a || !i && a) && e.nodeValue.length - n.length > 0 && (h += e.nodeValue.length - n.length), null === d.startContainer && (d.startContainer = e, d.startOffset = h), !0 === p) return d.endContainer = e, d.endOffset = h, d.endOffset += f.length, !0;c = u;
                } else c = "", d = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
              } else s.Dom.isBlock(e) && "" !== c && (c = i ? c + " " : " " + c);return !1;
            }, i), d.startContainer && d.endContainer) return d;if (!a) return n.current = i ? n.jodit.editor.firstChild : n.jodit.editor.lastChild, n.find(n.current, o, i, a + 1, l);
          }return !1;
        }, n.isOpened = !1, n.open = function (e) {
          void 0 === e && (e = !1), n.isOpened || (n.searchBox.classList.add("jodit_search-active"), n.isOpened = !0), n.jodit.events.fire("hidePopup"), n.searchBox.classList.toggle("jodit_search-and-replace", e), n.current = n.jodit.selection.current(), n.selInfo = n.jodit.selection.save();var t = "" + n.jodit.ownerWindow.getSelection();t && (n.queryInput.value = t), n.updateCounters(), t ? n.queryInput.select() : n.queryInput.focus();
        }, n.selInfo = null, n.current = !1, n.close = function () {
          n.isOpened && (n.selInfo && (n.jodit.selection.restore(n.selInfo), n.selInfo = null), n.searchBox.classList.remove("jodit_search-active"), n.isOpened = !1);
        }, o.options.useSearch) {
          var i = n;i.searchBox = r.dom(i.template, o.ownerDocument), i.queryInput = i.searchBox.querySelector("input.jodit_search-query"), i.replaceInput = i.searchBox.querySelector("input.jodit_search-replace"), i.closeButton = i.searchBox.querySelector(".jodit_search_buttons-cancel"), i.nextButton = i.searchBox.querySelector(".jodit_search_buttons-next"), i.prevButton = i.searchBox.querySelector(".jodit_search_buttons-prev"), i.replaceButton = i.searchBox.querySelector(".jodit_search_buttons-replace"), i.counterBox = i.searchBox.querySelector(".jodit_search_counts span"), o.events.on(i.closeButton, "click", n.close).on(i.queryInput, "mousedown", function () {
            o.selection.isFocused() && (o.selection.removeMarkers(), i.selInfo = o.selection.save());
          }).on(i.replaceButton, "click", function (e) {
            i.findAndReplace(o.selection.current() || o.editor.firstChild, i.queryInput.value), n.updateCounters(), e.preventDefault(), e.stopImmediatePropagation();
          }).on([i.nextButton, i.prevButton], "click", function (e) {
            o.events.fire(i.nextButton === this ? "searchNext" : "searchPrevious"), e.preventDefault(), e.stopImmediatePropagation();
          }).on(n.queryInput, "keydown", r.debounce(function (e) {
            switch (e.which) {case a.KEY_ENTER:
                e.preventDefault(), e.stopImmediatePropagation(), o.events.fire("searchNext") && n.close();break;default:
                n.updateCounters();}
          }, n.jodit.options.observer.timeout)).on(n.jodit.container, "keydown", function (e) {
            if (o.getRealMode() === l.MODE_WYSIWYG) switch (e.which) {case a.KEY_ESC:
                n.close();break;case a.KEY_F3:
                i.queryInput.value && (o.events.fire(e.shiftKey ? "searchPrevious" : "searchNext"), e.preventDefault());}
          }).on("beforeSetMode", function () {
            n.close();
          }).on("afterInit", function () {
            o.workplace.appendChild(n.searchBox);
          }).on("keydown mousedown", function () {
            n.selInfo && (o.selection.removeMarkers(), n.selInfo = null), n.isOpened && (n.current = n.jodit.selection.current(), n.updateCounters());
          }).on("searchNext searchPrevious", function () {
            return i.findAndSelect(o.selection.current() || o.editor.firstChild, i.queryInput.value, "searchNext" === o.events.current);
          }).on("search", function (e, t) {
            void 0 === t && (t = !0), o.execCommand("search", e, t);
          }), o.registerCommand("search", { exec: function exec(e, t, n) {
              return void 0 === n && (n = !0), i.findAndSelect(o.selection.current() || o.editor.firstChild, t, n), !1;
            } }), o.registerCommand("openSearchDialog", { exec: function exec() {
              return i.open(), !1;
            }, hotkeys: "ctrl+f" }), o.registerCommand("openReplaceDialog", { exec: function exec() {
              return o.options.readonly || i.open(!0), !1;
            }, hotkeys: "ctrl+r" });
        }return n;
      }return n(t, e), t.getSomePartOfStringIndex = function (e, t, o) {
        return void 0 === o && (o = !0), this.findSomePartOfString(e, t, o, !0);
      }, t.findSomePartOfString = function (e, t, o, n) {
        void 0 === o && (o = !0), void 0 === n && (n = !1), e = r.trim(e.toLowerCase().replace(a.SPACE_REG_EXP, " ")), t = t.toLowerCase();for (var i = o ? 0 : t.length - 1, s = o ? 0 : e.length - 1, l = null, c = o ? 1 : -1, d = [], u = 0; void 0 !== t[i]; i += c) {
          var p = e[s] === t[i];if (p || null !== l && a.SPACE_REG_EXP.test(t[i]) ? (null !== l && o || (l = i), d.push(t[i]), p && (u += 1, s += c)) : (l = null, d.length = 0, u = 0, s = o ? 0 : e.length - 1), u === e.length) return !n || l;
        }return n ? null !== l && l : !!d.length && (o ? d.join("") : d.reverse().join(""));
      }, t.prototype.boundAlreadyWas = function (e, t) {
        return t.some(function (t) {
          return t.startContainer === e.startContainer && t.endContainer === e.endContainer && t.startOffset === e.startOffset && t.endOffset === e.endOffset;
        }, !1);
      }, t.prototype.tryScrollToElement = function (e) {
        var t = s.Dom.closest(e, function (e) {
          return e && e.nodeType === Node.ELEMENT_NODE;
        }, this.jodit.editor);t || (t = s.Dom.prev(e, function (e) {
          return e && e.nodeType === Node.ELEMENT_NODE;
        }, this.jodit.editor)), t && t !== this.jodit.editor && t.scrollIntoView();
      }, t;
    }(s.Component);
  }, function (e, t, o) {
    "use strict";
    var n = this && this.__extends || function () {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var o in t) {
          t.hasOwnProperty(o) && (e[o] = t[o]);
        }
      };return function (t, o) {
        function n() {
          this.constructor = t;
        }e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      };
    }();Object.defineProperty(t, "__esModule", { value: !0 });var i = o(0),
        r = o(4),
        s = o(1);s.Config.prototype.toolbarSticky = !0, s.Config.prototype.toolbarStickyOffset = 0, t.sticky = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;return o.isToolbarSticked = !1, o.createDummy = function (e) {
          o.dummyBox || (o.dummyBox = o.jodit.ownerDocument.createElement("div"), o.dummyBox.classList.add("jodit_sticky-dummy_toolbar"), o.jodit.container.insertBefore(o.dummyBox, e));
        }, o.addSticky = function (e) {
          o.isToolbarSticked || (o.createDummy(e), o.jodit.container.classList.add("jodit_sticky"), o.isToolbarSticked = !0), i.css(e, { top: o.jodit.options.toolbarStickyOffset, width: o.jodit.container.offsetWidth }), i.css(o.dummyBox, { height: e.offsetHeight });
        }, o.removeSticky = function (e) {
          o.isToolbarSticked && (i.css(e, { width: "", top: "" }), o.jodit.container.classList.remove("jodit_sticky"), o.isToolbarSticked = !1);
        }, t.events.on("afterInit", function () {
          t.events.on(t.ownerWindow, "scroll wheel mousewheel resize", function () {
            var e = t.ownerWindow.pageYOffset || t.ownerDocument.documentElement.scrollTop,
                n = i.offset(t.container, t),
                r = e + t.options.toolbarStickyOffset > n.top && n.top + n.height > e + t.options.toolbarStickyOffset;t.options.toolbarSticky && (r ? o.addSticky(t.toolbar.container) : o.removeSticky(t.toolbar.container)), t.events.fire("toggleSticky", r);
          });
        }), o;
      }return n(t, e), t;
    }(r.Component);
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.de = o(65).default, t.en = o(66).default, t.fr = o(67).default, t.ru = o(68).default, t.ar = o(69).default;
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { "Type something": "Schreibe etwas", "About Jodit": "Über Jodi", "Jodit Editor": "Jodit Editor", "Free Non-commercial Version": "Freie Nicht-kommerzielle Version", "Jodit User's Guide": "Jodit Benutzerhandbuch", "contains detailed help for using": "ausführliche Hilfe enthält für die Verwendung von", "For information about the license, please go to our website:": "Für Informationen über die Lizenz, gehen Sie bitte auf unsere Webseite:", "Buy full version": "Vollversion kaufen", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.", Anchor: "Anker", "Open in new tab": "In neuer Registerkarte öffnen", "Open editor in fullsize": "Editor öffnen in voller Größe", "Clear Formatting": "Formatierung löschen", "Fill color or set the text color": "Füllen Sie Farbe oder stellen Sie die Textfarbe", Redo: "Redo", Undo: "Rückgängig machen", Bold: "Fett gedruckt", Italic: "Kursiv", "Insert Unordered List": "Ungeordnete Liste einfügen", "Insert Ordered List": "Legen Sie Sortierte Liste", "Align Center": "einmitten", "Align Justify": "Begründen Voll", "Align Left": "Begründen links", "Align Right": "Begründen Rechts", "Insert Horizontal Line": "Legen Horizontale Linie", "Insert Image": "Bild einfügen", "Insert youtube/vimeo video": "Youtube/vimeo video einfügen", "Insert link": "Link einfügen", "Font size": "Schriftgröße", "Font family": "Schriftfamilie", "Insert format block": "Insert Format Block", Normal: "Normal", "Heading 1": "Überschrift 1", "Heading 2": "Überschrift 2", "Heading 3": "Überschrift 3", "Heading 4": "Überschrift 4", Quote: "Zitat", Code: "Code", Insert: "Einfügen", "Insert table": "Tabelle einfügen", "Decrease Indent": "Indent verringern", "Increase Indent": "Einrücken mehr", "Select Special Character": "Wählen Sie ein Sonderzeichen", "Insert Special Character": "Sonderzeichen einfügen", "Paint format": "Format klonen", "Change mode": "Änderungsmodus", Margins: "Die Margen", top: "oben", right: "Recht", bottom: "Boden", left: "links", Styles: "Styles", Classes: "Klassen", Align: "Ausrichten", Right: "Recht", Center: "Center", Left: "Links", "--Not Set--": "--Nicht eingestellt--", Src: "src", Title: "Titel", Alternative: "Alternative (alt)", Link: "Link", "Open link in new tab": "Link in neuem Tab öffnen", Image: "Image", Advansed: "Erweiterte", "Image properties": "Bildeigenschaften", Cancel: "Stornieren", Ok: "OK", "Your code is similar to HTML. Keep as HTML?": "Ihr Text, den Sie einfügen möchten, ähnelt HTML. Fügen Sie es als HTML ein?", "Paste as HTML": "Als HTML einfügen?", Keep: "Original speichern", Clean: "Aufräumen", "Insert as Text": "Einfügen als Text", "Word Paste Detected": "Vielleicht ist dies ein Fragment von Word oder Excel", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format speichern oder löschen?", "Insert only Text": "Fügen Sie nur Text ein", "File Browser": "Dateibrowser", "Error on load list": "Fehler beim Ladeliste", "Error on load folders": "Fehler beim Laden Ordner", "Are you shure?": "Bist du sicher?", "Enter Directory name": "Geben Sie Verzeichnisname", "Create directory": "Verzeichnis erstellen", "type name": "Modellname", "Drop image": "Bild Tropfen", "or click": "oder klicken Sie auf", "Alternative text": "Alternativer Text", Browse: "Blättern", Upload: "Hochladen", Background: "Hintergrund", Text: "Text", Top: "Oben", Middle: "Mitte", Bottom: "Boden", "Insert column before": "Spalte einfügen vor", "Insert column after": "Spalte einfügen nach", "Insert row above": "Zeile einfügen oben", "Insert row below": "Zeile unterhalb einfügen", "Delete table": "Tabelle löschen", "Delete row": "Zeile löschen", "Delete column": "Spalte löschen", "Empty cell": "Leere Zelle" };
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { "Type something": "Start writing...", "About Jodit": "", "Jodit Editor": "", "Free Non-commercial Version": "", "Jodit User's Guide": "", "contains detailed help for using": "", "For information about the license, please go to our website:": "", "Buy full version": "", "Copyright � XDSoft.net - Chupurnov Valeriy. All rights reserved.": "", Anchor: "", "Open in new tab": "", "Open editor in fullsize": "", "Clear Formatting": "", "Fill color or set the text color": "", Redo: "", Undo: "", Bold: "", Italic: "", "Insert Unordered List": "", "Insert Ordered List": "", "Align Center": "", "Align Justify": "", "Align Left": "", "Align Right": "", "Insert Horizontal Line": "", "Insert Image": "", "Insert youtube/vimeo video": "", "Insert link": "", "Font size": "", "Font family": "", "Insert format block": "", Normal: "", "Heading 1": "", "Heading 2": "", "Heading 3": "", "Heading 4": "", Quote: "", Code: "", Insert: "", "Insert table": "", "Paint format": "", "Change mode": "", Margins: "", top: "", right: "", bottom: "", left: "", Styles: "", Classes: "", Align: "", Right: "", Center: "", Left: "", "--Not Set--": "", Src: "", Title: "", Alternative: "", Link: "", "Open link in new tab": "", Image: "", Advansed: "", "Image properties": "", Cancel: "", Ok: "", "File Browser": "", "Error on load list": "", "Error on load folders": "", "Are you shure?": "", "Enter Directory name": "", "Create directory": "", "type name": "", "Drop image": "", "or click": "", "Alternative text": "", Upload: "", Browse: "", Background: "", Text: "", Top: "", Middle: "", Bottom: "", "Insert column before": "", "Insert column after": "", "Insert row above": "", "Insert row below": "", "Delete table": "", "Delete row": "", "Delete column": "", "Empty cell": "" };
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { "Type something": "Ecrivez ici", "About Jodit": "A propos de Jodit", "Jodit Editor": "Editeur Jodit", "Free Non-commercial Version": "Version gratuite, non commerciale", "Jodit User's Guide": "Guide de l'utilisateur", "contains detailed help for using": "Aide détaillée à l'utilisation", "For information about the license, please go to our website:": "Consulter la licence sur notre site web:", "Buy full version": "Acheter la version complète", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.", Anchor: "Ancre", "Open in new tab": "Ouvrir dans un nouvel onglet", "Open editor in fullsize": "Ouvrir l'éditeur en pleine page", "Clear Formatting": "Supprimer le formattage", "Fill color or set the text color": "Modifier la couleur du fond ou du texte", Redo: "Refaire", Undo: "Défaire", Bold: "Gras", Italic: "Italique", "Insert Unordered List": "Liste non ordonnée", "Insert Ordered List": "Liste ordonnée", "Align Center": "Centrer", "Align Justify": "Justifier", "Align Left": "Aligner à gauche ", "Align Right": "Aligner à droite", "Insert Horizontal Line": "Insérer une ligne horizontale", "Insert Image": "Insérer une image", "Insert youtube/vimeo video": "Insérer une vidéo", "Insert link": "Insérer un lien", "Font size": "Taille des caractères", "Font family": "Famille des caractères", "Insert format block": "Bloc formatté", Normal: "Normal", "Heading 1": "Titre 1", "Heading 2": "Titre 2", "Heading 3": "Titre 3", "Heading 4": "Titre 4", Quote: "Citation", Code: "Code", Insert: "Insérer", "Insert table": "Insérer un tableau", "Decrease Indent": "Diminuer le retrait", "Increase Indent": "Retrait plus", "Select Special Character": "Sélectionnez un caractère spécial", "Insert Special Character": "Insérer un caractère spécial", "Paint format": "Cloner le format", "Change mode": "Mode wysiwyg <-> code html", Margins: "Marges", top: "haut", right: "droite", bottom: "Bas", left: "gauche", Styles: "Styles", Classes: "Classes", Align: "Alignement", Right: "Droite", Center: "Centre", Left: "Gauche", "--Not Set--": "--Non disponible--", Src: "Source", Title: "Titre", Alternative: "Alternative", Link: "Lien", "Open link in new tab": "Ouvrir le lien dans un nouvel onglet", Image: "Image", Advansed: "Avancé", "Image properties": "Propriétés de l'image", Cancel: "Effacer", Ok: "OK", "Your code is similar to HTML. Keep as HTML?": "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?", "Paste as HTML": "Coller en HTML?", Keep: "Sauvegarder l'original", Clean: "Nettoyer", "Insert as Text": "Coller en tant que texte", "Word Paste Detected": "C'est peut-être un fragment de Word ou Excel", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?", "Insert only Text": "Coller le texte seulement", "File Browser": "Explorateur de fichiers", "Error on load list": "Erreur de liste de chargement", "Error on load folders": "Erreur de dossier de chargement", "Are you shure?": "Etes-vous sûrs ?", "Enter Directory name": "Entrer le non de dossier", "Create directory": "Créer un dossier", "type name": "type de fichier", "Drop image": "Coller une image", "or click": "ou cliquer", "Alternative text": "Texte de remplacemement", Browse: "Chercher", Upload: "Charger", Background: "Arrière-plan", Text: "Texte", Top: "Haut", Middle: "Milieu", Bottom: "Bas", "Insert column before": "Insérer une colonne avant", "Insert column after": "Insérer une colonne après", "Insert row above": "Insérer une ligne en dessus", "Insert row below": "Insérer une ligne en dessous", "Delete table": "Supprimer le tableau", "Delete row": "Supprimer la ligne", "Delete column": "Supprimer la colonne", "Empty cell": "Vider la cellule" };
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { "Type something": "Напишите что-либо", "About Jodit": "О Jodit", "Jodit Editor": "Редактор Jodit", "Free Non-commercial Version": "Версия для не коммерческого использования", "Jodit User's Guide": "Jodit Руководство пользователя", "contains detailed help for using": "содержит детальную информацию по использованию", "For information about the license, please go to our website:": "Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:", "Buy full version": "Купить полную версию", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.", Anchor: "Анкор", "Open in new tab": "Открывать ссылку в новой вкладке", "Open editor in fullsize": "Открыть редактор в полном размере", "Clear Formatting": "Очистить форматирование", "Fill color or set the text color": "Цвет заливки или цвет текста", Redo: "Повтор", Undo: "Отмена", Bold: "Жирный", Italic: "Наклонный", "Insert Unordered List": "Вставка маркированного списка", "Insert Ordered List": "Вставить нумерованный список", "Align Center": "Выровнять по центру", "Align Justify": "Выровнять по ширине", "Align Left": "Выровнять по левому краю", "Align Right": "Выровнять по правому краю", "Insert Horizontal Line": "Вставить горизонтальную линию", "Insert Image": "Вставить изображение", "Insert youtube/vimeo video": "Вставьте видео", "Insert link": "Вставить ссылку", "Font size": "Размер шрифта", "Font family": "Шрифт", "Insert format block": "Вставить блочный элемент", Normal: "Нормальный текст", "Heading 1": "Заголовок 1", "Heading 2": "Заголовок 2", "Heading 3": "Заголовок 3", "Heading 4": "Заголовок 4", Quote: "Цитата", Code: "Код", Insert: "Вставить", "Insert table": "Вставить таблицу", "Decrease Indent": "Уменьшить отступ", "Increase Indent": "Увеличить отступ", "Select Special Character": "Выберите специальный символ", "Insert Special Character": "Вставить специальный символ", "Paint format": "Формат краски", "Change mode": "Источник", Margins: "Отступы", top: "сверху", right: "справа", bottom: "снизу", left: "слева", Styles: "Стили", Classes: "Классы", Align: "Выравнивание", Right: "По правому краю", Center: "По центру", Left: "По левому краю", "--Not Set--": "--не устанавливать--", Src: "src", Title: "Заголовок", Alternative: "Альтернативный текст (alt)", Link: "Ссылка", "Open link in new tab": "Открывать ссылку в новом окне", Image: "Изображение", Advansed: "Расширенные", "Image properties": "Свойства изображения", Cancel: "Отмена", Ok: "Ok", "Your code is similar to HTML. Keep as HTML?": "Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?", "Paste as HTML": "Вставить как HTML?", Keep: "Сохранить оригинал", Clean: "Почистить", "Insert as Text": "Вставить как текст", "Insert only Text": "Вставить только текст", "Word Paste Detected": "Возможно это фрагмент Word или Excel", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?", "File Browser": "Браузер файлов", "Error on load list": "Ошибка при загрузке списка изображений", "Error on load folders": "Ошибка при загрузке списка директорий", "Are you shure?": "Вы уверены?", "Enter Directory name": "Введите название директории", "Create directory": "Создать директорию", "type name": "введите название", "Drop image": "Перетащите сюда изображение", "or click": "или нажмите", "Alternative text": "Альтернативный текст", Browse: "Сервер", Upload: "Загрузка", Background: "Фон", Text: "Текст", Top: " К верху", Middle: "По середине", Bottom: "К низу", "Insert column before": "Вставить столбец до", "Insert column after": "Вставить столбец после", "Insert row above": "Вставить ряд выше", "Insert row below": "Вставить ряд ниже", "Delete table": "Удалить таблицу", "Delete row": "Удалять ряд", "Delete column": "Удалить столбец", "Empty cell": "Отчистить ячейку" };
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { "Type something": "إبدأ في الكتابة...", "About Jodit": "حول جوديت", "Jodit Editor": "محرر جوديت", "Free Non-commercial Version": "الإصدار الغير تجاري مجاني", "Jodit User's Guide": "دليل مستخدم جوديت", "contains detailed help for using": "يحتوي على مساعدة مفصلة للاستخدام", "For information about the license, please go to our website:": "للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:", "Buy full version": "شراء النسخة الكاملة", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.", Anchor: "مِرْساة", "Open in new tab": "فتح في نافذة جديدة", "Open editor in fullsize": "فتح المحرر في الحجم الكامل", "Clear Formatting": "مسح التنسيق", "Fill color or set the text color": "ملء اللون أو تعيين لون النص", Redo: "إعادة", Undo: "تراجع", Bold: "عريض", Italic: "مائل", "Insert Unordered List": "إدراج قائمة غير مرتبة", "Insert Ordered List": "إدراج قائمة مرتبة", "Align Center": "محاذاة للوسط", "Align Justify": "محاذاة مثبتة", "Align Left": "محاذاة لليسار", "Align Right": "محاذاة لليمين", "Insert Horizontal Line": "إدراج خط أفقي", "Insert Image": "إدراج صورة", "Insert youtube/vimeo video": "إدراج فيديو يوتيوب/فيميو ", "Insert link": "إدراج رابط", "Font size": "حجم الخط", "Font family": "نوع الخط", "Insert format block": "إدراج كتلة تنسيق", Normal: "عادي", "Heading 1": "عنوان 1", "Heading 2": "عنوان 2", "Heading 3": "عنوان 3", "Heading 4": "عنوان 4", Quote: "إقتباس", Code: "كود", Insert: "إدراج", "Insert table": "إدراج جدول", "Decrease Indent": "تقليل المسافة البادئة", "Increase Indent": "زيادة المسافة البادئة", "Select Special Character": "تحديد أحرف خاصة", "Insert Special Character": "إدراج حرف خاص", "Paint format": "تنسيق الرسم", "Change mode": "تغيير الوضع", Margins: "هوامش", top: "أعلى", right: "يمين", bottom: "أسفل", left: "يسار", Styles: "الأنماط", Classes: "الطبقات", Align: "محاذاة", Right: "اليمين", Center: "الوسط", Left: "اليسار", "--Not Set--": "--غير مضبوط--", Src: "Src", Title: "العنوان", Alternative: "العنوان البديل", Link: "الرابط", "Open link in new tab": "افتح الرابط في نافذة جديدة", Image: "الصورة", Advansed: "متقدم", "Image properties": "خصائص الصورة", Cancel: "إلغاء", Ok: "حسنا", "File Browser": "متصفح الملفات", "Error on load list": "حدث خطأ في تحميل القائمة ", "Error on load folders": "حدث خطأ في تحميل المجلدات", "Are you shure?": "هل أنت واثق؟", "Enter Directory name": "أدخل اسم المجلد", "Create directory": "إنشاء مجلد", "type name": "أكتب إسم", "Drop image": "إسقاط صورة", "or click": "أو أنقر", "Alternative text": "النص البديل", Upload: "رفع", Browse: "تصفح", Background: "الخلفية", Text: "نص", Top: "أعلى", Middle: "الوسط", Bottom: "الأسفل", "Insert column before": "إدراج عمود قبل", "Insert column after": "إدراج عمود بعد", "Insert row above": "إدراج صف أعلى", "Insert row below": "إدراج صف أسفل", "Delete table": "حذف الجدول", "Delete row": "حذف الصف", "Delete column": "حذف العمود", "Empty cell": "خلية فارغة" };
  }, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.about = o(71), t.addcolumn = o(72), t.addrow = o(73), t.angle_left = o(74), t.angle_down = o(75), t.angle_right = o(76), t.angle_up = o(77), t.arrows_alt = o(78), t.arrows_h = o(79), t.attachment = o(80), t.bin = o(81), t.dots = o(82), t.bold = o(83), t.brush = o(84), t.cancel = o(85), t.center = o(86), t.chain_broken = o(87), t.check_square = o(88), t.check = o(89), t.copyformat = o(90), t.crop = o(91), t.dedent = o(92), t.enter = o(93), t.eraser = o(94), t.eye = o(95), t.folder = o(96), t.font = o(97), t.fontsize = o(98), t.fullsize = o(99), t.hr = o(100), t.image = o(101), t.info_circle = o(102), t.italic = o(103), t.justify = o(104), t.left = o(105), t.link = o(106), t.lock = o(107), t.menu = o(108), t.merge = o(109), t.ol = o(110), t.paragraph = o(111), t.pencil = o(112), t.plus = o(113), t.redo = o(114), t.resize = o(115), t.resizer = o(116), t.right = o(117), t.save = o(118), t.shrink = o(119), t.source = o(120), t.splitg = o(121), t.splitv = o(122), t.strikethrough = o(123), t.table = o(124), t.th_list = o(125), t.th = o(126), t.ul = o(127), t.underline = o(128), t.undo = o(129), t.unlink = o(130), t.unlock = o(131), t.update = o(132), t.upload = o(133), t.valign = o(134), t.video = o(135), t.outdent = o(136), t.indent = o(137), t.print = o(138), t.omega = o(139);
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 18.151 18.151"><g><g><path d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"></path><path d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"></path><polygon points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 "></polygon></g></g></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 432 432"><g><g><polygon points="203.688,96 0,96 0,144 155.688,144 "></polygon><polygon points="155.719,288 0,288 0,336 203.719,336 "></polygon><rect x="252" y="96"></rect><rect></rect><rect x="252" y="288"></rect><rect y="384"></rect><path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z"></path><polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176 "></polygon></g></g></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xml:space="preserve"><circle cx="12" cy="12" r="2.2"></circle><circle cx="12" cy="5" r="2.2"></circle><circle cx="12" cy="19" r="2.2"></circle></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 16 16"><path d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 128 128" xml:space="preserve"><g><polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125 "></polygon></g></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M883 1056q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23zm781-864v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 312.000000 312.000000"><g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z"></path><path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z"></path><path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"></path><path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z"></path></g></svg>';
  }, function (e, t) {
    e.exports = '<svg role="img" viewBox="0 0 1792 1792"><path d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 24 24" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title></title><desc></desc><defs></defs><g><g transform="translate(-251.000000, -443.000000)"><g transform="translate(215.000000, 119.000000)"></g><path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"></path></g></g></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 48 48"><path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"></path><path d="M0 0h48v48h-48z" fill="none"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 48 48"><path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"></path><path d="M0 0h48v48h-48z" fill="none"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 1792 1792"><path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg viewBox="0 0 270 270"><path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"></path></svg>';
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../css-loader/index.js!./jodit.min.css", function() {
		var newContent = require("!!../../css-loader/index.js!./jodit.min.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "/*!\n * \n *    jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser\n *    Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)\n *    Version: v3.1.28\n *    Url: https://xdsoft.net/jodit/\n *    License(s): SEE LICENSE IN <LICENSE>\n * \n */\n.jodit_container{background:#fff}.jodit_container,.jodit_container *{box-sizing:border-box}.jodit_container .jodit_workplace{border:1px solid #ccc;position:relative;height:calc(100% - 33px);overflow:auto;display:-webkit-box;display:-ms-flexbox;display:flex}.jodit_container .jodit_workplace .jodit_wysiwyg,.jodit_container .jodit_workplace .jodit_wysiwyg_iframe{height:100%;width:100%}.jodit_container .jodit_workplace .jodit_wysiwyg{margin:0;padding:10px;outline:0;overflow-x:auto;position:relative}.jodit_container .jodit_workplace .jodit_wysiwyg img{position:relative}.jodit_container .jodit_workplace .jodit_wysiwyg p,.jodit_container .jodit_workplace .jodit_wysiwyg pre{margin:0 0 10px}.jodit_container .jodit_workplace .jodit_wysiwyg h1,.jodit_container .jodit_workplace .jodit_wysiwyg h2,.jodit_container .jodit_workplace .jodit_wysiwyg h3,.jodit_container .jodit_workplace .jodit_wysiwyg h4,.jodit_container .jodit_workplace .jodit_wysiwyg h5{margin-top:0}.jodit_container .jodit_workplace .jodit_wysiwyg::-moz-selection,.jodit_container .jodit_workplace .jodit_wysiwyg ::-moz-selection{background:#b5d6fd;color:#000}.jodit_container .jodit_workplace .jodit_wysiwyg::selection,.jodit_container .jodit_workplace .jodit_wysiwyg ::selection{background:#b5d6fd;color:#000}.jodit_disabled{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.jodit_hidden{display:none!important}.jodit_clearfix:after,.jodit_clearfix:before{content:\" \";display:table}.jodit_clearfix:after{clear:both}.jodit_dark_theme .jodit_workplace{border-color:rgba(87,87,87,.8)}.jodit_dark_theme .jodit_toolbar_popup,.jodit_dark_theme .jodit_toolbar_popup-inline,.jodit_dark_theme .jodit_toolbar_popup-inline:before,.jodit_dark_theme .jodit_toolbar_popup:before{background:#575757}.jodit_dark_theme .jodit_toolbar{background:#5f5c5c}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn>a{color:#d1cccc}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn>a:hover{background-color:#575757}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_toolbar_btn-break{border-top-color:#686767}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_toolbar_btn-separator{border-right-color:#686767}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.active,.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_active,.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn:active,.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn:hover{background-color:#575757}.jodit_dark_theme .jodit_toolbar li.jodit_toolbar_btn.jodit_with_dropdownlist .jodit_with_dropdownlist-trigger{border-top-color:silver}.jodit_dark_theme .jodit_icon{fill:silver}.jodit_dark_theme .jodit_wysiwyg,.jodit_dark_theme .jodit_wysiwyg_iframe{background-color:#575757;color:#d1cccc}.jodit_dark_theme .jodit_wysiwyg [data-jodit-selected-cell],.jodit_dark_theme .jodit_wysiwyg_iframe [data-jodit-selected-cell]{border-color:#152f5f}.jodit_dark_theme .jodit_dropdownlist{background:#5f5c5c}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a{background-color:#686767;color:#d1cccc}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a:hover{background-color:hsla(0,0%,41%,.8);color:#d1cccc;border-color:hsla(0,0%,41%,.9)}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a.active{background:rgba(81,81,81,.41);border-color:#686767}.jodit_dark_theme .jodit_tabs .jodit_tabs_buttons>a svg{fill:silver}.jodit_dark_theme .jodit_form input[type=text],.jodit_dark_theme .jodit_form input[type=url],.jodit_dark_theme .jodit_form textarea{background-color:rgba(81,81,81,.41);border-color:#686767;color:#d1cccc}.jodit_dark_theme .jodit_form button{background-color:hsla(0,0%,41%,.75);color:#d1cccc}.jodit_dark_theme .jodit_placeholder{color:hsla(0,5%,81%,.8)}.jodit_dark_theme .jodit_draganddrop_file_box,.jodit_dark_theme .jodit_uploadfile_button{color:#d1cccc}.jodit_dark_theme .jodit_draganddrop_file_box:hover,.jodit_dark_theme .jodit_uploadfile_button:hover{background-color:hsla(0,0%,41%,.75)}.jodit_dark_theme .jodit-add-new-line:before{border-top-color:#686767}.jodit_dark_theme .jodit-add-new-line span{background:hsla(0,0%,41%,.75);border-color:#686767}.jodit_dark_theme .jodit-add-new-line span svg{fill:#d1cccc}.jodit_dark_theme .jodit_resizer>i{background:hsla(0,0%,41%,.75);border-color:silver}.jodit_btn{border:1px solid;border-radius:0;background-color:#f5f5f5;background-image:linear-gradient(180deg,#fff,#e6e6e6);border-color:#ccc;text-shadow:0 1px 1px hsla(0,0%,100%,.75);color:#333;background-repeat:repeat-x;outline:0;display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit_btn:hover{background-color:#e6e6e6;background-position:0 -15px;text-decoration:none}.jodit_btn.jodit_btn_success{text-shadow:0 -1px 0 rgba(0,0,0,.25);background-color:#5bb75b;background-image:linear-gradient(180deg,#62c462,#51a351);border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);color:#fff}.jodit_btn.jodit_btn_success svg{fill:#fff}.jodit_btn.jodit_btn_success:hover{background-color:#51a351}.jodit_btn.jodit_btn_danger{text-shadow:0 -1px 0 rgba(0,0,0,.25);background-color:#da4f49;background-image:linear-gradient(180deg,#ee5f5b,#bd362f);border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);color:#fff}.jodit_btn.jodit_btn_danger svg{fill:#fff}.jodit_btn.jodit_btn_danger:hover{background-color:#bd362f}.jodit_btn.jodit_btn_inverse{text-shadow:0 -1px 0 rgba(0,0,0,.25);background-color:#363636;background-image:linear-gradient(180deg,#444,#222);border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);color:#fff}.jodit_btn.jodit_btn_inverse svg{fill:#fff}.jodit_btn.jodit_btn_inverse:hover{background-color:#222}.jodit_btn.active,.jodit_btn:active{background-image:none;box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)}.jodit_btn_group{font-size:0;vertical-align:middle}.jodit_btn_group input{display:none}.jodit_btn_group button{float:left}.jodit_btn_group button+button{margin-left:-1px}.jodit_btn_group button:first-child,.jodit_btn_group input:first-child+button{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.jodit_btn_group button:last-child,.jodit_btn_group input:last-child+button{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.jodit_btn_group:after{content:\"\";clear:both;float:none;display:table}.jodit_context_menu{font-family:Helvetica,Arial;display:none;background:#fff;position:absolute;min-width:150px;box-shadow:0 0 5px 0 rgba(0,0,0,.24);z-index:16}.jodit_context_menu a{display:block;border-bottom:1px solid hsla(0,0%,80%,.24);text-decoration:none!important;color:#727272}.jodit_context_menu a svg{float:left;display:block;width:18px;height:28px;margin:0 4.5px;fill:#727272}.jodit_context_menu a span{margin-left:27px;display:block;padding:5px;border-left:1px solid hsla(0,0%,80%,.24);line-height:18px}.jodit_context_menu a:hover{background-color:#e3e3e3;color:#000}.jodit_context_menu a:hover .jodit_icon{fill:#000}.jodit_context_menu a:last-child{border:0}.jodit_context_menu-show{display:block}.jodit_dialog_box{box-sizing:border-box;display:none;width:0;height:0;border:0;position:absolute;will-change:left,top,width,height}.jodit_dialog_box.jodit_dialog_box-moved{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit_dialog_box *{box-sizing:border-box}.jodit_dialog_box .jodit_elfinder,.jodit_dialog_box .jodit_elfinder *{box-sizing:initial}.jodit_dialog_box .jodit_dialog_overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:14;text-align:center;white-space:nowrap;overflow:auto;display:none;background-color:rgba(0,0,0,.5)}.jodit_dialog_box.active,.jodit_dialog_box.jodit_modal .jodit_dialog_overlay{display:block}.jodit_dialog_box .jodit_dialog{z-index:15;display:inline-block;vertical-align:middle;white-space:normal;text-align:left;position:fixed;left:0;top:0;background-color:#fff;box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);min-width:200px;min-height:100px}@media (max-width:480px){.jodit_dialog_box .jodit_dialog{max-width:100%;width:100%!important;height:100%!important;top:0!important;left:0!important}}.jodit_dialog_box .jodit_dialog .jodit_promt{max-width:300px;min-width:200px;padding:10px;word-break:break-all}.jodit_dialog_box .jodit_dialog .jodit_promt label{margin-bottom:5px;display:block}.jodit_dialog_box .jodit_dialog .jodit_promt input[type=text]{display:block;border:1px solid #ccc;background:#fff;width:100%;height:28px;line-height:16px;padding:3px 6px;outline:0}.jodit_dialog_box .jodit_dialog .jodit_alert{max-width:300px;min-width:200px;padding:10px;word-break:break-all}.jodit_dialog_box .jodit_dialog .jodit_button{padding:0;margin:0;border:0;display:inline-block;vertical-align:top;width:32px;height:48px;line-height:48px;text-align:center;cursor:pointer;text-decoration:none}.jodit_dialog_box .jodit_dialog .jodit_button:not(.disabled):hover{background-color:#ecebe9}.jodit_dialog_box .jodit_dialog .jodit_button.disabled{opacity:.7}.jodit_dialog_box .jodit_dialog .jodit_input{border:1px solid #ccc;padding:5px;background-color:#fff;outline:0;width:120px;margin-left:10px;font:13px Arial;height:28px;vertical-align:middle}.jodit_dialog_box .jodit_dialog select.jodit_input{width:75px}.jodit_dialog_box .jodit_dialog .jodit_button .jodit_icon,.jodit_dialog_box .jodit_dialog .jodit_button svg,.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_icon,.jodit_dialog_box .jodit_dialog .jodit_dialog_header svg{width:16px;height:16px;display:inline-block;vertical-align:middle}.jodit_dialog_box .jodit_dialog .jodit_dialog_header{text-align:left;color:#222;box-shadow:0 1px 3px rgba(0,0,0,.16),0 1px 2px rgba(0,0,0,.23);cursor:move;height:48px;overflow:hidden}.jodit_dialog_box .jodit_dialog .jodit_dialog_header h4{font-size:18px;padding:0;padding-left:20px;margin:0;font-weight:400;line-height:48px;display:inline-block;vertical-align:top}@media (max-width:480px){.jodit_dialog_box .jodit_dialog .jodit_dialog_header h4{padding-left:0}}.jodit_dialog_box .jodit_dialog .jodit_dialog_header button{margin-right:10px}.jodit_dialog_box .jodit_dialog .jodit_dialog_header a{color:#222;font-size:24px;font-weight:700;display:inline-block;transition:background-color .2s ease 0s;width:48px;height:48px;vertical-align:top;line-height:48px;text-decoration:none;text-align:center;float:right}.jodit_dialog_box .jodit_dialog .jodit_dialog_header a:hover{background-color:#ecebe9}.jodit_dialog_box .jodit_dialog .jodit_dialog_header .jodit_close svg{width:18px;height:18px;margin:15px 0;vertical-align:top}.jodit_dialog_box .jodit_dialog .jodit_dialog_content{height:calc(100% - 48px);overflow:auto}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group{margin-bottom:10px;padding:0 10px}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group:first-child{margin-top:10px}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input.select,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=number],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=text],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=url],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select.select,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=number],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=text],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=url]{display:block;height:34px;padding:6px 4px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input.select:focus,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=number]:focus,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=text]:focus,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=url]:focus,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select.select:focus,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=number]:focus,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=text]:focus,.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=url]:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input.select[disabled],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=number][disabled],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=text][disabled],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=url][disabled],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select.select[disabled],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=number][disabled],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=text][disabled],.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=url][disabled]{background-color:#f0f0f0;color:#ccc}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input.select:not([class*=col-]),.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=number]:not([class*=col-]),.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=text]:not([class*=col-]),.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group input[type=url]:not([class*=col-]),.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select.select:not([class*=col-]),.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=number]:not([class*=col-]),.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=text]:not([class*=col-]),.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group select[type=url]:not([class*=col-]){width:100%}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group{display:table;border-collapse:separate;width:100%}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group>*{vertical-align:middle;display:table-cell;height:34px}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group>input{float:left;margin:0!important}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group>input:not([class*=col-]){width:100%}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group-buttons{width:1%;font-size:0;white-space:nowrap;vertical-align:middle}.jodit_dialog_box .jodit_dialog .jodit_dialog_content .jodit_form_group .jodit_input_group-buttons>a{text-align:center;display:inline-block;border:1px solid #ccc;margin-left:-1px;position:relative;height:34px;line-height:34px}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer{padding:0 10px;padding-top:10px;text-align:center;height:48px;display:none}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer .jodit_button{width:auto;margin-bottom:10px;height:32px;line-height:100%;padding:0 15px;background-color:#ccc;border:1px solid #ccc;color:#000;font-size:0}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer .jodit_button:before{content:\"\";display:inline-block;vertical-align:middle;height:100%}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer .jodit_button svg{display:inline-block;width:24px;height:24px;vertical-align:middle}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer .jodit_button span{display:inline-block;vertical-align:middle;font-size:14px;margin-left:5px}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer .jodit_button:focus{border:1px solid #8bade4;outline:1px solid #82b2e8}.jodit_dialog_box .jodit_dialog .jodit_dialog_footer .jodit_button:nth-child(n+2){margin-left:10px}.jodit_dialog_box .jodit_dialog.with_footer .jodit_dialog_content{height:calc(100% - 96px)}.jodit_dialog_box .jodit_dialog.with_footer .jodit_dialog_footer{display:block}.jodit_dialog_box .jodit_dialog .jodit_dialog_resizer{position:absolute;bottom:0;right:0;cursor:se-resize;width:7px;height:7px;display:inline-block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpilJGRYcACIoB4ORMuCSCOZMIlga4TRQJZJ4YETCdWCSBmZMIlATIOIMAAEyAPt4RnNx0AAAAASUVORK5CYII=)}.jodit_dialog_box .jodit_dialog .jodit_dialog_resizer:hover{border-color:rgba(0,0,0,.6)}@media (max-width:480px){.jodit_dialog_box .jodit_dialog .jodit_dialog_resizer{display:none}}.jodit_dialog_box-fullsize .jodit_dialog{top:0!important;bottom:0!important;left:0!important;right:0!important;width:100%!important;height:100%!important}.jodit_dialog_box-fullsize .jodit_dialog .jodit_dialog_resizer{display:none}@media (max-width:768px){.jodit_dialog_header .jodit_input,.jodit_dialog_header_fullsize,.jodit_dialog_header_title{display:none!important}}.jodit_toolbar_list>.jodit_toolbar{background:#f9f9f9;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);padding:0;margin:auto;text-align:left;position:absolute;box-sizing:border-box;transition:max-height .2s ease 0s;margin-top:0!important;list-style-type:none;font-size:16px;z-index:9;left:0;top:100%}.jodit_toolbar_list>.jodit_toolbar blockquote,.jodit_toolbar_list>.jodit_toolbar h1,.jodit_toolbar_list>.jodit_toolbar h2,.jodit_toolbar_list>.jodit_toolbar h3,.jodit_toolbar_list>.jodit_toolbar h4,.jodit_toolbar_list>.jodit_toolbar h5,.jodit_toolbar_list>.jodit_toolbar p,.jodit_toolbar_list>.jodit_toolbar pre{font-family:Helvetica,Arial;margin:0;padding:0;font-weight:400}.jodit_toolbar_list>.jodit_toolbar h5{font-size:.8em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar h3{font-size:1.31em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar h4,.jodit_toolbar_list>.jodit_toolbar p{font-size:1em;line-height:1.5em}.jodit_toolbar_list>.jodit_toolbar h2{font-size:1.74em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar h1{font-size:2.17em;line-height:1.4}.jodit_toolbar_list>.jodit_toolbar blockquote,.jodit_toolbar_list>.jodit_toolbar pre{font-family:monospace}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn{display:block;cursor:pointer;white-space:nowrap;color:inherit;text-decoration:none;width:100%;height:auto;box-sizing:border-box;text-align:left}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a{background-image:none;padding:7px 24px;cursor:pointer;line-height:100%;width:auto;height:auto;display:block}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a>span{display:inline-block}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a:hover{background-color:#f3f0f0}.jodit_toolbar_list>.jodit_toolbar li.jodit_toolbar_btn>a:after{display:none}.jodit_filebrowser{font-family:Helvetica,Arial;font-size:0;height:100%}.jodit_filebrowser.draghover{background-color:#ecebe9}.jodit_filebrowser .jodit_filebrowser_loader{height:100%;width:100%;position:absolute;top:0;left:0}.jodit_filebrowser .jodit_filebrowser_loader i{position:absolute;top:50%;left:50%;margin-top:-64px;margin-left:-64px}.jodit_filebrowser .jodit_filebrowser_status{position:absolute;font-size:10px;padding:2px 3px;border-top:1px solid hsla(0,0%,50%,.4);left:31%;right:0;bottom:0;background-color:#4a4a4a;visibility:hidden;opacity:0;transition:opacity .3s linear;color:#b38888;word-break:break-all}.jodit_filebrowser .jodit_filebrowser_status.success{color:#c5c5c5}.jodit_filebrowser .jodit_filebrowser_status.active{visibility:visible;opacity:1}.jodit_filebrowser .jodit_filebrowser_files,.jodit_filebrowser .jodit_filebrowser_tree{display:none;vertical-align:top;height:100%;position:relative}.jodit_filebrowser .jodit_filebrowser_files.active,.jodit_filebrowser .jodit_filebrowser_tree.active{display:inline-block}.jodit_filebrowser .jodit_filebrowser_files::-webkit-scrollbar,.jodit_filebrowser .jodit_filebrowser_tree::-webkit-scrollbar{width:5px}.jodit_filebrowser .jodit_filebrowser_files::-webkit-scrollbar-track,.jodit_filebrowser .jodit_filebrowser_tree::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.jodit_filebrowser .jodit_filebrowser_files::-webkit-scrollbar-thumb,.jodit_filebrowser .jodit_filebrowser_tree::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid #708090}.jodit_filebrowser .jodit_filebrowser_tree.active{width:31%;background-color:#3f3f3f;overflow-y:auto}@media (max-width:480px){.jodit_filebrowser .jodit_filebrowser_tree.active{display:none}}.jodit_filebrowser .jodit_filebrowser_tree.active::-webkit-scrollbar{width:5px}.jodit_filebrowser .jodit_filebrowser_tree.active::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.jodit_filebrowser .jodit_filebrowser_tree.active::-webkit-scrollbar-thumb{background-color:hsla(0,0%,50%,.5);outline:1px solid #708090}.jodit_filebrowser .jodit_filebrowser_tree.active .jodit_filebrowser_source_title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;padding:10px;color:#969696;border-bottom:1px solid #484848;line-height:17px;min-height:38px;position:relative;word-break:break-all;background:#5a5a5a}.jodit_filebrowser .jodit_filebrowser_tree.active a{display:block;padding:10px 20px;text-decoration:none;color:#b1b1b1;font-weight:600;transition:background-color .2s ease 0s;border-bottom:1px solid #474747;line-height:17px;min-height:38px;position:relative;word-break:break-all;font-size:16px}.jodit_filebrowser .jodit_filebrowser_tree.active a i.remove{height:16px;width:16px;line-height:17px;font-size:16px;position:absolute;right:5px;top:11px;opacity:0;padding-left:3px;display:inline-block}.jodit_filebrowser .jodit_filebrowser_tree.active a i.remove:hover{background:#696969}.jodit_filebrowser .jodit_filebrowser_tree.active a:hover{color:#222;background-color:#ecebe9}.jodit_filebrowser .jodit_filebrowser_tree.active a:hover i.remove{opacity:.6}.jodit_filebrowser .jodit_filebrowser_tree.active a.jodit_button{cursor:pointer;background:#696969;text-align:center;width:auto;height:38px;color:#333}.jodit_filebrowser .jodit_filebrowser_tree.active a.jodit_button svg{vertical-align:top}.jodit_filebrowser .jodit_filebrowser_tree.active a.jodit_button:not(.disabled):hover{background-color:#ecebe9}.jodit_filebrowser .jodit_filebrowser_tree.active a.jodit_button.disabled,.jodit_filebrowser .jodit_filebrowser_tree.active a.jodit_button:hover i{opacity:.7}.jodit_filebrowser .jodit_filebrowser_files.active{width:100%;overflow-y:auto;padding:10px}.jodit_filebrowser .jodit_filebrowser_files.active .jodit_filebrowser_source_title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:-10px -10px 0 -5px;display:block;padding:10px;line-height:17px;min-height:38px;position:relative;word-break:break-all;background:0 0}.jodit_filebrowser .jodit_filebrowser_files.active a+.jodit_filebrowser_source_title{margin-top:10px}.jodit_filebrowser .jodit_filebrowser_files.active a{vertical-align:top;display:inline-block;width:150px;height:150px;line-height:150px;text-align:center;border:1px solid #ccc;margin:5px 5px 10px;font-size:0;overflow:hidden;transition:border .1s linear,bottom .1s linear;box-sizing:content-box;position:relative}.jodit_filebrowser .jodit_filebrowser_files.active a img{max-width:100%;vertical-align:middle}.jodit_filebrowser .jodit_filebrowser_files.active a:hover{border-color:#433b5c}.jodit_filebrowser .jodit_filebrowser_files.active a.active{border-color:#b5b5b5;background-color:#b5b5b5}.jodit_filebrowser .jodit_filebrowser_files.active a .jodit_filebrowser_files_item-info{position:absolute;right:0;left:0;bottom:0;white-space:normal;opacity:.85;overflow:visible;padding:.3em .6em;transition:opacity .4s ease;background-color:#e9e9e9;color:#333;text-shadow:#eee 0 1px 0;font-size:14px;line-height:16px;text-align:left}.jodit_filebrowser .jodit_filebrowser_files.active a .jodit_filebrowser_files_item-info>span{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:.75em}.jodit_filebrowser .jodit_filebrowser_files.active a .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filename{font-weight:700;font-size:.9em}.jodit_filebrowser .jodit_filebrowser_files.active a.active .jodit_filebrowser_files_item-info{background-color:#b5b5b5;color:#fff;text-shadow:none}.jodit_filebrowser .jodit_filebrowser_files.active a:hover .jodit_filebrowser_files_item-info{bottom:-100px}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a{display:block;width:100%;height:26px;line-height:26px;margin:0;border-width:0 0 1px;text-align:left;white-space:nowrap}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a img{max-width:16px;vertical-align:middle;display:inline-block;margin-left:4px}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info{padding:0;position:static;display:inline-block;width:calc(100% - 20px);margin-left:4px;background-color:transparent;height:100%;line-height:inherit;vertical-align:middle;font-size:0}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span{display:inline-block;height:100%;font-size:12px}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filename{width:50%}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filechanged,.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a .jodit_filebrowser_files_item-info>span.jodit_filebrowser_files_item-info-filesize{width:25%}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a:hover{background-color:#433b5c}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a:hover .jodit_filebrowser_files_item-info{color:#fff;text-shadow:none}.jodit_filebrowser .jodit_filebrowser_files.active.jodit_filebrowser_files_view-list a:before{height:100%;content:\"\";vertical-align:middle;display:inline-block}.jodit_filebrowser .jodit_filebrowser_tree.active+.jodit_filebrowser_files.active{width:69%}@media (max-width:480px){.jodit_filebrowser .jodit_filebrowser_tree.active+.jodit_filebrowser_files.active{width:auto;display:block}}.jodit_filebrowser_preview{text-align:center;min-width:300px;max-width:900px;max-height:700px;position:relative}.jodit_filebrowser_preview .jodit_filebrowser_preview_navigation{position:absolute;top:0;height:100%;left:0}.jodit_filebrowser_preview .jodit_filebrowser_preview_navigation-next{left:auto;right:0}.jodit_filebrowser_preview .jodit_filebrowser_preview_navigation svg{width:45px;height:45px;position:relative;top:50%;margin-top:-22px;transition:fill .3s linear;fill:#9e9ba7}.jodit_filebrowser_preview .jodit_filebrowser_preview_navigation:hover svg{fill:#000}.jodit_filebrowser_preview img{max-width:100%;max-height:100%}.jodit_grid{width:100%}.jodit_grid [class*=jodit_col-]{display:block;float:left}.jodit_grid .jodit_col-lg-5-5{width:100%}.jodit_grid .jodit_col-lg-4-5{width:80%}.jodit_grid .jodit_col-lg-3-5{width:60%}.jodit_grid .jodit_col-lg-2-5{width:40%}.jodit_grid .jodit_col-lg-1-5{width:20%}.jodit_grid .jodit_col-lg-4-4{width:100%}.jodit_grid .jodit_col-lg-3-4{width:75%}.jodit_grid .jodit_col-lg-2-4{width:50%}.jodit_grid .jodit_col-lg-1-4{width:25%}.jodit_grid:after,.jodit_grid:before{content:\" \";display:table}.jodit_grid:after{clear:both}@-webkit-keyframes a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jodit_icon-loader{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAABRsSURBVHja7F1/aJfVGn/33RgUg8FiNfK2WCykyS7GLoYyUbwYipZMumgLo+iPS9HlXhSHkRXdislESxMz0mapuaFo2myjkfnNlTQ2FJdTu8NvLVcrdbpcfGvxrfs823m/vXt3fjznvOedzr0PPJzzPe+7d+97Ps95nuc851fGAw884CD98ccfI1Jqmc3UpEyQz4FkMqRTgYshn8fymZ57SyGbzf5mENIOz9+ngE9Atg/SLkhPQHoWeEDn3SmpSZlJnvf7ypUrTpb7IyMjY+gGN6WWmaY84l2T3c+u58D1csjOgvwsyBdBvsDRo2zgMl/ZNM59vcAJ4Dj8nzikLa5QmBLv28YCfPd3li7gPHBMwKdcEwhCJgN6FoLOWJtUgiWovALG04FXsbI44xbgw8AplbaU/Q+ZQNgGf0gA/JWhC1aQyle1eN91rPRKKKuEsjzZvSph0m2RiutpIYRrfZC8B+l7kB6jgq0CnQIy9X39v2NYQW5FeUFQlQVN/aALyiYBPw/5M5B+Dvw02vMggqcDukEl57F3xHf9H747+4bA5oD6dzqaYEgAqIDbBl9RhvZ4H/B5yL+IDp3oXhmwNkm3lTLn80VIz+O3QFqm2/rHwgeI6QDOa006LZ3Q4lHNNwK3AVeYAD4WgmHQUivYNzWyb7xufICYaavXVbuKZ6MXfwRVJ+TnXW+Am/oMnNaO3/Y5pPitcyh/a6LqtXwAt+J01LVFEzAJ0jpIj7JunJYd1wHchnBQHUSC3Uan8WPgPVgHlBiBCcAkH4Da2i2DjwGZlcy5W0K17zLwVb9NgaY4iJpawJs+BCnWwUo3SKXT4oOAP8IHCFsIfMCguj8JaQ2kOaaA227d10ALuIR1gHVxErjctPtHBd8btSR3A4MIgSePAZxqVPeQlthq7ZRuZVABCVkLuGkJpGgKsY4ybfUEVO84qhsoAzSgrUfHZ1UQVe99B6o2oMYdwg7latAq5iROGoueQExW6UE0gCe/ANIh9SZ6jqkWsN3STZ0rHWEgpkNmEvILxqQbSAXaAPxqSBswQkbpbpo6fGPR0m3GBYjBIIwqNjCTEAr4wkBQUA0AjKNrdZCu0okAqgQhTKCDhFxV91BNgsDuYx3WQZptG3xtDUCJEDKvthGuLVEJlq4gUMyAylfQERadPrhKOHTmB3Ces4RFEXNsgW8UClbZcEhxqPQIpHOord2k1ZsAH4YvYNJXN3EgWX4Ocw4LbIEvDQSJfADJtULWxSuj+BBUP4DaC6D0DkyFg6JKTVo/5brvXqzbo2zSi3af3/9bGgrW1Ar5kH4MXEzVHEHVf5CuYZC4fti9AoI/gXX8Eda5Tp9f9I4xWWsnOoc5zNMv1okjmKp/vzay3epNJ4+YmALdoWBPWTHksc5zTU1AekqYt7LcWTruTYTZQdmQHoB0GuXv/de8L8e7xrsuA8kPNtx3AZIOxp3APc7wvD6kvi+//DLh3nvPPfegWs1jf4dBGGxpOA+hlOXzgw7VBjEBnDKcs4jzDOZDOmjqD2SJQFGBx9JaSOcQ7xVO2RIJhf86AfB+Z3huHs7Ra2pra+ugtubTp0+jMLgC0e6/ftddd6EgzMO5iGwSaq4NITCdLczy6GzXAj8KnDIxAaM0AKeViwCtgbRSNgGUJwQyDaACngO4w6S/CXgb8KEvvvgiFUaw59y5c64mWXvnnXdmsijdYxjpdP6cXh6oS0g1Bb48zpFEzValA3663pcuXaoleSzFltBIlWhRmWx+v6yMcQJ4PU7A/Oyzz/qca0R33HEHrjlAEJa73rns24JqA0keTUGTjglIJpNOxsMPP6wLfiGkx53hxRbcewwXc1BAx0u4gGMNcP2nn36acq4juv322ytZ5K7UlhBo5LER3AvcTXU60wKgYbsyWTCi3LTV6wLvKesGrvrkk0/qneucCgoKHoJkHbxvYRAhMMij/zMbVzZRTMAvv/wycj4AoRv4Mk7oII4HkLp+vC6drwxt/FrgKeMBfKTe3t69UMFTgPG9B3WcQdMeBsvjhJJqnYGqjMrKSmr/tZxNWAi87o9i+1l5O6SPNjc3dzrjlPLz83HyC/aWpqk0gWZUUHZtJvxuUZmAtAYgtHycr/a6qIXz2DQI5OH1UDRjPIOPdOHChU6o+JmQXW+68JYS4vUB/bozvN5RGAImdwPZA3AC51RKrMAfyBHFGCRBnz4oe7ypqemgc4PQxYsX0YytuOWWW3BRaa3DWd0U1A/w/Z4KvBx4jcoExAitE6dzPStr3RR/QKQ5fOUJ4PsaGxtvGPC9dOnSJfyu+7ALa9MJFPx+lkU05YNBBDVdg0uwKc4eAWCZ83cC8jM+/PDDLucGpr6+Pvy+GWz/ASs9AMFvd7ax1ATEFOBjmLdSBraN3gBwHHhmQ0NDrzMB6PLly73MUYubOs3EiB/GJebyTEB6QogCnGrV6KAFR7AVeP4HH3ww4EwgunLlCn7vfACi1UQDqMb5PWUvm5qAB3HESXNomKz2GaOHv/DAgQNJZwJSf38/fvdC3J5G1iPQnf3jK5sGvx80MQHP69hxHWZ/2wN8//vvv3/BmcD0008/XWCaoEcUJ6C0eoUWeFbXBOBCzTKKJ2/YExgEXrRv374eJyLn6tWrWA+LAJRBy+o/rQUQUx0TsFwzRKzLK/bu3dseQf8nDQwMYH2sCOL0ibx9Vr6cagIKmf0nxe8pguC7vn/Pnj2bIshH088//4z1st+m+veUI6ZFFBOwLGj/XqIh0O4/HkEtJgDmcZ4/EED9e69VKk0ACoDN1u/jqrq6uv4IZjElk0msnypbwPs0wTKVCUBnYbLuMC5REA7v3r37vQhikhBgPTWrTAEFeB9NZt3C0SbAr/6DdPM4jF7/PyNotUzBU26vgAo8x+7zri3jmgAgnOJdKYrVB9QEb+zcubMrgpVOv/76K9bXGzrACwTJfw1D+9k8EzAXOE8GviEPAK+JIDXSAlhvA7yWTWztvMfiXM65PBNQrgLfUBi2v/vuu70RnPo0ODjYC0BtN3D2VNfLR5gAz04eRn17yb0p4A0RlIEI6y+la/MV1xf4fYACSEtDiP031dbWRrY/AP32229dAGCTrs1XrHHEaesFXh+gXCfooyEM2yIIrdC2ADZ/1D1eM+CagHLJ5ExTxrl9hyLsrDiDWI99EjApgPvLRwhAmQh4HV/Axwe3bt06GMEXnFKpFK4tOBgQcH95WdoEAE01nc8Xi8VEArA3gs4q7VWpfsHaCpEg4GrnoeXhOEKUw3u4yZYqbGo4Lk2KR5hZpcOsXjO9GIm0AYFycTErmoDJVLWu0Tto3bJly0CEmT36/fffkzh/UKfVE3yLkix3Xx+v5FjYaaslgiwUZxDrdbrm38guF6EAFFKAF5kEwcFPrRFcoVCrIdAiKsSlYUWqFi/zBwTXOiKsQqGOIKe1cQRmSAPkmYIv0ADY9Yuif+GYgC5Wv9kB1L6X8lAA8k3BFwhB94YNG1IRXPYJutwpINwBpNjSI/O5AhDQGUxEUIVKCRMBEGiFIQG4yX+Daf+fPacvwihUM2Czfm/KcgMLtjZZhudEY//hks2VVJlZ7tJvi5SMMApVA9gMsOVkXYvDFiO6fggFACUqJ6qKcaMBbD5uAH2AlE0fIKJxRSnUAGizcykePtWzjOo1VA2gpa0V2CVRALBbURDwQV4qiGAKVQDyLZ571JfFum0lFqTJvScvgilUytPxAxSY9boawMbD3OtFEUahaoAinQap0gA4JSzhPswSFz733HOZEVT2KZlMYr0WesGV7KpOoQRqgG6DVi4rx5EqjFWfjSCz3vqLHd9IoGyYnoBjNwpAwhBoWXlpJAChCECpv66p5ycJBCSBcwI7daZ7E83FtAiuUGgaT/WLACaYhk4MBCVk0UDKWb2c3+URVqFogOm8OqccqMW5d+Dmm29OuGsDOyw7gmUvvfRSFBCySFevXsX6LBO1cIoG8NEQ5u7KoFbLi0Kz3fODI7JGeHbwTSJADcxCq1cAWnR39yYIQUWEmVX1X2G6SYTgnhavABwL0uoF91dUV1dnR9AFp/7+fjysq0IGvIEGODYkAOwa7t/XYXl3kDzgBRF8Vgg3eczT2SqGYP97vBoA83ELrd6/WPSJCDsr6v8Jw91BRdfS6za9ewQ1qVo9RQv47plXU1NTHEFoTpcvX8aTwueJgKdoAI4wpE8Y9e4SdtgdGLK4S1gm8L8jGAO1fqy/TNmiUE1hQIwPj9AADOQk7ugRdJ9ADj+2bt26aI6AAV26dAnr7THqnsFEYTgEnBRtFl0fwk6hOcCrIjiNaBXOAKIcuq3hG4w4fTXma+lNOEHEZFs4hcA8+eqrr0a+gAZdvHgRbf+TsrMDDMxBr2v/eT7A0L5+8HN7AKdPFhncHMGqZftfB84Wga0yBwKtsN1hk4B5PsCIrd0C2HwRz924cWNlBK2afvzxx0rX89c5Qo4gCNv85bwDI7r8XUKqynfL/KmHazZt2pQbQSymH374AffuqeEB7gWXCrzHFCCmXf5niE4NWxPkJFAJ41GmtRHMUtWP9TNJdYScgQZYo3NoFEYF21WmgAq8776KzZs3Px1BPZq+//57rJcKXhg3oClo90b/qCeHvqLjA2j6B+u2bNlSFkH+J3333XdlAMo6ntq3cJroK6K4gOzgyP2oBaj2nqIdPGXYKzjw5ptvToqgd5yenh5U+Qcgmy07UdxQA7QD7xfFClSnh68Oelag6H5n+Fj6j9566638iQz++fPn8wGMRq/dV4EviwVwrq0W9QpUJsAdINof5LRQxfNLgBu2bt06IaePffvttzjDp8EZ3r6dDL7sQEkfyAdVW82rjo9H/hdkB2y2ft89eEB149tvvz2hlqh/8803OazlTzMFX6ENcKLvU7LgEMUEuIc9vqLb+inBJE8ezyo+un379gkxaPT111/jdx4FEGbJwOd1A2VdQ9896Pj1qIJDMSJI6yHpNGnpGlHFqVgp77zzzg29tjCRSBQx8KfKWrmJBvDkO4HXU3oI7pQwFUDpc/8s9ABk14uB23bs2HFDTiU7d+7cAqj4NrbESxtojeAQYjWoOnyaqwF4AsFSnDm81lT1y2YZ+cpwLmHDzp07a3bt2nVDTCrt6urKBq5hDl8eBXCTHgGjtWxTaVK8IEYFjKWrvVPIdU8VE2kMgUCsBD6ye/fukvEM/ldffVUCFX4EsitVtl3UYjU0wDHg1dQIodQJFJShKXgE0j5dLaACn6MJkKcDH6+rq6uur68fV72EM2fO5Jw9e7YasseBp5u0cKoQsDxO9Vrqqn6R2hdGAjWEoBvSR03B9wPNA95HGDVcBXxqz549D40H8E+fPo3vecoZntGTreqzmwgBRyDw2Plu3TBxxmuvvcYFUQYwy+OQ5UoV6DITQzEJnGsdbLSyfvHixdfVptSnTp2qZMJaqtsVVtWbAiP0zap498ryt956q5OxYcMGyj/gpbhbxS5IlwSJBQQYYsZVzWtREBYtWnTN9ic+efIkOq1LmM9SZDKplioQgrJ6ZpZTVODd32kBIEoZL0UvvdFdCBoUfGo8gXM0/UHgHTireeHChaFrhePHj+N0dzxqdxnwg2xwS0vD6YIvwAOnd89nvhkZeJduu+02J2Pjxo0UKZO9GM7w+cjdFMIgCmiqAXj39bO5DPFYLNY8b948ayeXtLW1lbIT1mcxzjVZUGtqCjh44Bj/34H7ZXjJhCItAAHAd1Mc0fvcPYAqCPhBhIHDF5jP0MF2QkmwE02HTMjs2bPTpqOlpSXPVeHABSwoVcLsOebzTWZH2fADOClO7ZqB3yfDTWUSUACyiHZG9UJY0SiNH7PKIjsiqt6BooegIhTMOYxHUTweN3q26EAN/wkr3t+qvEaKczbvxzoXPcf7brL/a9oNFKXYPZzpnUpGlX6dbqHIDIRNlIWXsuibbjdQkGLdzoQ0YfJ/uJFAamsndllw19HZzDlxVGFmkcqilFnSEFotnnKNOlZPGQX0lWOdzoa01xR47nCwDtBEpwbHoedj94wy0KSKCOoIQhgaQrXZgkoYdMCXPAvrcr57WITuXEHlcLCu00cQGjza7BEcRjbRAFSNQAXXVAh0zuY1BV/Q2r3pekixnz+oGRomvVtMV9Vr3I/98RXAC73LzoM4grIWb1sIxgp8iSnAOlsIKdZhynB8QG8wiKIBDPyCQ5C9F0cRKY6gDFwZ2DaFIEzwCS3e3b/nXlzKras1dFr/KA2go/5FLVRwfzdzDtfodgupZoFqGohbqIYGPsH+Yx3NxF6V7D2omkXlmMZM1T8PDMXfoUl4BruKkHaaaANbtj2MnoEJ+L6/72RdvGe8Kt9kjqBOj4SsAUyvce7BCSV/Ba6C/EBYXcSg5oIKtqkj5ikbgLSKqfwWaheRWqZ6j1gIAFPuQW2AI3lTIN0b1CSonMSwYgCU6wqQ8NunsOHcQcozVKZIVwhiKjVuMEihY0YwevgPSDG0eUy3ezjWYOsEhRRAHWPf/A93Egc1MKTj+FGEIGZhIEgJiMzPYPlmHNxgjmLTtRSCsOw+o2YWzcNvbTYIBVsVgrQGsAW+6cCSJx9nUcS/QbrfVAjCDgQZ/P1+yOM33Q9pPMizqCaAKgSxsMCntk6B2sdVyYsh/QvwC7hriY4QhCkUGi0e3/kF/AYow29pJ8YArJkAihDEwgRfVyNw8rif7X+B74Y8qs03nOGNDq0IgQ3Afff0sXecAfm72bv3UFoxpdWbtH7V32cFcfgoLcyCEKQdJ9zVHNL/AM9ijOP808MYD/CP7UvuO8ZGP+OMB3nP4T1PNfYvey/KXAPKd2XpevA27iWYANk9g8yZamblOa5A4FQtZ/jEsjybWsBTaX1sQkbcA/iACAQd0E2EQgU8RUiyKC02qGnQjS6qwPP9LQJwiLFLuUwQcBuaIiYQuBjTPc8wk/32VtYJFq104xQnmLlJMPuNNr3fUEuQQtDUVm8DeNcc/F+AAQBKd8HaIWdjwQAAAABJRU5ErkJggg==) no-repeat 50%;background-size:100% 100%;width:128px;height:128px;will-change:transform;-webkit-animation:a 2s ease-out 0s infinite;animation:a 2s ease-out 0s infinite}.jodit_icon,.jodit_icon-loader{display:inline-block;vertical-align:middle}.jodit_icon{font-style:normal;width:14px;font-size:8px;fill:#222;-webkit-transform-origin:0 0!important;transform-origin:0 0!important;overflow:visible}.jodit_toolbar_size-small .jodit_icon{width:12px;height:12px;line-height:12px}.jodit_toolbar_size-large .jodit_icon{width:16px;height:16px;line-height:16px}.jodit_image_editor{width:100%;height:100%;padding:10px;overflow:hidden}@media (max-width:768px){.jodit_image_editor{height:auto}}.jodit_image_editor>div,.jodit_image_editor>div>div{height:100%}@media (max-width:768px){.jodit_image_editor>div,.jodit_image_editor>div>div{height:auto;min-height:200px}}.jodit_image_editor *{box-sizing:border-box}.jodit_image_editor .jodit_image_editor_slider-title{text-shadow:#f3f3f3 0 1px 0;color:#333;border-bottom:1px solid hsla(0,0%,62%,.31);background-color:#f9f9f9;padding:.8em 1em;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:700;line-height:1em}.jodit_image_editor .jodit_image_editor_slider-title svg{margin-right:10px;width:16px;display:inline-block;vertical-align:middle}.jodit_image_editor .jodit_image_editor_slider-content{display:none}.jodit_image_editor .jodit_image_editor_slider.active .jodit_image_editor_slider-title{background-color:#5d5d5d;color:#fff;text-shadow:#000 0 1px 0}.jodit_image_editor .jodit_image_editor_slider.active .jodit_image_editor_slider-title svg{fill:#fff}.jodit_image_editor .jodit_image_editor_slider.active .jodit_image_editor_slider-content{display:block}.jodit_image_editor_area{background-color:#eee;background-image:linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc),linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc);background-size:30px 30px;background-position:0 0,15px 15px;height:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none}.jodit_image_editor_area.active{display:block}.jodit_image_editor_area .jodit_image_editor_box{overflow:hidden;position:relative;z-index:1;pointer-events:none;height:100%}.jodit_image_editor_area .jodit_image_editor_box img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:100%;max-height:100%}.jodit_image_editor_area .jodit_image_editor_croper,.jodit_image_editor_area .jodit_image_editor_resizer{z-index:2;width:100px;height:100px;position:absolute;box-shadow:0 0 11px #000;border:1px solid #fff;background-repeat:no-repeat;top:10px;left:20px;pointer-events:none}.jodit_image_editor_area .jodit_image_editor_croper i.jodit_bottomright,.jodit_image_editor_area .jodit_image_editor_resizer i.jodit_bottomright{position:absolute;display:inline-block;border:1px solid #383838;z-index:4;background-color:#8c7878;cursor:se-resize;border-radius:10px;height:20px;width:20px;right:-10px;bottom:-10px;box-shadow:0 0 11px #000;pointer-events:all}.jodit_image_editor_area .jodit_image_editor_croper i.jodit_bottomright:active,.jodit_image_editor_area .jodit_image_editor_resizer i.jodit_bottomright:active{border:1px solid #ff0}.jodit_image_editor_area.jodit_image_editor_area_crop{height:100%;background:#eee;text-align:center;line-height:100%;position:relative}.jodit_image_editor_area.jodit_image_editor_area_crop:before{content:\"\";line-height:100%;vertical-align:middle;height:100%;display:inline-block}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box{height:100%;overflow:visible;display:inline-block;vertical-align:middle;pointer-events:all;font-size:0;text-align:left;line-height:100%}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box img{max-width:100%;max-height:100%}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box:before{content:\"\";line-height:100%;vertical-align:middle;height:100%;display:inline-block}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box:after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;background:hsla(0,0%,100%,.3);z-index:1}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box .jodit_image_editor_croper{pointer-events:all;cursor:move}.jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box .jodit_image_editor_croper i.jodit_sizes{font-size:12px;white-space:pre;position:absolute;bottom:-30px;left:100%;text-align:center;color:#fff;text-shadow:none;background:rgba(0,0,0,.2);border-radius:.4em;padding:9px 6px;display:block}.jodit_properties svg{font-style:normal;display:inline-block;width:14px;height:14px;line-height:14px;font-size:8px;overflow:hidden;vertical-align:middle;fill:#222;-webkit-transform-origin:0 0!important;transform-origin:0 0!important}.jodit_properties #tabsbox{padding:10px}.jodit_properties #tabsbox .jodit_form_group{padding:0}.jodit_properties .jodit_properties_view_box{padding:10px}.jodit_properties .jodit_properties_view_box .jodit_properties_image_view{height:150px;text-align:center;line-height:1;vertical-align:middle;padding:0;background-color:#f6f6f6;margin:0;vertical-align:baseline;font-size:100%;margin-bottom:10px}.jodit_properties .jodit_properties_view_box .jodit_properties_image_view:before{content:\"\";display:inline-block;vertical-align:middle;height:100%}.jodit_properties .jodit_properties_view_box .jodit_properties_image_view img{max-width:100%;max-height:100%;vertical-align:middle}.jodit_properties .jodit_properties_view_box .jodit_properties_image_sizes.jodit_form_group{padding:0!important;margin:0!important}.jodit_properties .jodit_properties_view_box .jodit_properties_image_sizes.jodit_form_group a{display:inline-block;cursor:pointer}.jodit_properties .jodit_properties_view_box .jodit_properties_image_sizes.jodit_form_group input[type=number]{display:inline-block!important;width:calc(50% - 8px)!important}.jodit_toolbar,.jodit_toolbar *{box-sizing:border-box}.jodit_toolbar{position:relative;left:0;top:0;margin:0!important;padding:0!important;list-style:none!important;font-size:0;background:#f9f9f9;box-shadow:0 4px 4px -2px rgba(0,0,0,.14);z-index:5;border:1px solid #ccc;border-bottom:0;min-height:16px!important}.jodit_toolbar+.jodit_toolbar_dummy{display:none}.jodit_toolbar.jodit_fly{position:absolute;left:0;right:0;z-index:11;background:#fff}.jodit_toolbar.jodit_sticky{position:fixed;position:-webkit-sticky;position:sticky;z-index:3;top:0;left:auto}.jodit_toolbar.jodit_sticky+.jodit_toolbar_dummy{display:block}.jodit_toolbar .jodit_toolbar_btn>a{color:#000;text-decoration:none;display:block;background:no-repeat 50%}.jodit_toolbar>li.jodit_toolbar_btn{display:inline-block!important;vertical-align:top;margin:0!important;padding:0;padding-right:0;list-style:none!important;outline:0;position:relative;text-align:center;cursor:pointer;transition:background-color .2s linear,opacity .1s linear}.jodit_toolbar>li.jodit_toolbar_btn.jodit_disabled{background-color:transparent!important;opacity:.3;cursor:default}.jodit_toolbar>li.jodit_toolbar_btn.jodit_disabled a{cursor:default}.jodit_toolbar>li.jodit_toolbar_btn.jodit_toolbar_btn-separator{border-left:0 solid hsla(0,0%,83%,.6);border-right:1px solid #e6e6e6;padding:0;margin:2px 3px 0!important;cursor:default}.jodit_toolbar>li.jodit_toolbar_btn.jodit_toolbar_btn-break{display:block!important;width:auto;border-top:1px solid #f1f1f1;border-bottom:1px solid hsla(0,0%,83%,.6);height:0}.jodit_toolbar>li.jodit_toolbar_btn .jodit_toolbar_btn>a,.jodit_toolbar>li.jodit_toolbar_btn>a{width:100%;height:100%;display:inline-block;outline:0;text-decoration:none}.jodit_toolbar>li.jodit_toolbar_btn .jodit_toolbar_btn>a+.jodit_tooltip,.jodit_toolbar>li.jodit_toolbar_btn>a+.jodit_tooltip{opacity:0;visibility:hidden;display:none;position:absolute;transition:opacity .4s linear;background:#727171;color:#fff;font-size:12px;line-height:15px;padding:4px 5px;font-family:Arial,sans-serif;left:50%;margin-left:-45px;z-index:10;width:90px;transition:opacity .3s linear}@media (max-width:768px){.jodit_toolbar>li.jodit_toolbar_btn .jodit_toolbar_btn>a+.jodit_tooltip,.jodit_toolbar>li.jodit_toolbar_btn>a+.jodit_tooltip{display:none}}.jodit_toolbar>li.jodit_toolbar_btn .jodit_toolbar_btn>a:after,.jodit_toolbar>li.jodit_toolbar_btn>a:after{content:\"\";display:inline-block;height:100%;vertical-align:middle}.jodit_toolbar>li.jodit_toolbar_btn .jodit_toolbar_btn>a:hover+.jodit_tooltip,.jodit_toolbar>li.jodit_toolbar_btn>a:hover+.jodit_tooltip{visibility:visible;display:block;opacity:1}.jodit_toolbar>li.jodit_toolbar_btn .jodit_toolbar_btn>a:active+.jodit_tooltip,.jodit_toolbar>li.jodit_toolbar_btn>a:active+.jodit_tooltip{visibility:hidden!important}.jodit_toolbar>li.jodit_toolbar_btn.jodit_disabled .jodit_tooltip{display:none!important}.jodit_toolbar>li.jodit_toolbar_btn>a{line-height:100%}.jodit_toolbar>li.jodit_toolbar_btn.jodit_dropdown_open .jodit_tooltip,.jodit_toolbar>li.jodit_toolbar_btn .jodit_popap_open,.jodit_toolbar>li.jodit_toolbar_btn.jodit_popup_open .jodit_tooltip{visibility:hidden!important}.jodit_toolbar>li.jodit_toolbar_btn:hover{background-color:#dde4ef;outline:0}.jodit_toolbar>li.jodit_toolbar_btn:first-child .jodit_tooltip{left:0;margin:0}.jodit_toolbar>li.jodit_toolbar_btn.jodit_active,.jodit_toolbar>li.jodit_toolbar_btn:active{background-color:hsla(0,0%,87%,.4);outline:0}.jodit_toolbar>li.jodit_toolbar_btn.jodit-btn-hidden{display:none!important}.jodit_toolbar>li.jodit_toolbar_btn.jodit_with_dropdownlist .jodit_with_dropdownlist-trigger{width:0;height:0;border-right:3px solid transparent;border-left:3px solid transparent;border-top:3px solid #4c4c4c;display:inline-block;vertical-align:middle;margin-left:3px}.jodit_toolbar>li{width:32px;height:32px;line-height:32px}.jodit_toolbar>li.jodit_toolbar_btn-separator{height:28px;width:0}.jodit_toolbar_size-small .jodit_toolbar{min-height:12px!important}.jodit_toolbar_size-small .jodit_toolbar>li{width:24px;height:24px;line-height:24px}.jodit_toolbar_size-small .jodit_toolbar>li.jodit_toolbar_btn-separator{height:20px;width:0}.jodit_toolbar_size-large .jodit_toolbar{min-height:18px!important}.jodit_toolbar_size-large .jodit_toolbar>li{width:36px;height:36px;line-height:36px}.jodit_toolbar_size-large .jodit_toolbar>li.jodit_toolbar_btn-separator{height:32px;width:0}.jodit_toolbar_popup{position:absolute;z-index:8;top:100%;margin-top:10px;padding-top:0;left:0;font-size:14px;line-height:14px!important;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.2)}.jodit_toolbar_popup .jodit_toolbar{box-shadow:none;border:0;background-color:transparent}.jodit_toolbar_popup>*{margin:10px}.jodit_toolbar_popup .jodit_popup_triangle{padding:0;margin:0;width:8px;height:8px;position:absolute;top:-5px;left:9px;display:inline-block;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#fff;border:1px solid rgba(0,0,0,.2);border-width:1px 0 0 1px;z-index:6}.jodit_toolbar_popup.jodit_right{left:auto;right:0}.jodit_toolbar_popup.jodit_right:before{left:auto;right:14px}.jodit_toolbar .jodit_toolbar_btn>svg{max-width:50%;vertical-align:middle;font-smoothing:antialiased}.jodit_container>.jodit_toolbar>li:first-child{margin-left:2px!important}.jodit_draganddrop_file_box,.jodit_uploadfile_button{position:relative;width:220px;border:1px dashed #ccc;padding:25px 0;margin:10px 0;text-align:center;overflow:hidden}.jodit_draganddrop_file_box:hover,.jodit_uploadfile_button:hover{background-color:#ecebe9}.jodit_draganddrop_file_box input,.jodit_uploadfile_button input{cursor:pointer;position:absolute;top:0;bottom:0;right:0;margin:0;padding:0;opacity:0;font-size:400px}@media (max-width:768px){.jodit_draganddrop_file_box{width:auto;max-width:100%;min-width:120px}}.jodit_form{color:#000}.jodit_form input[type=text],.jodit_form input[type=url],.jodit_form textarea{-webkit-appearance:none;-moz-appearance:none;display:block;outline:0;border:1px solid #b5b5b5;height:28px;line-height:28px;padding:0 5px;min-width:220px;margin-top:10px}.jodit_form input[type=text].jodit_error,.jodit_form input[type=url].jodit_error,.jodit_form textarea.jodit_error{border-color:#f7d1d1;box-shadow:inset 0 0 3px 0 hsla(0,0%,74%,.3)}@media (max-width:768px){.jodit_form input[type=text],.jodit_form input[type=url],.jodit_form textarea{min-width:150px}}.jodit_form textarea{height:128px}.jodit_form button{height:36px;line-height:1;color:#000;padding:10px;cursor:pointer;text-decoration:none;border:none;background:#d6d6d6;font-size:16px;outline:0;transition:background .2s ease 0s;margin-top:10px;margin-bottom:10px}.jodit_form button:hover{background-color:#ecebe9;color:#000}.jodit_form button:active{background:#ecebe9;color:#000}.jodit_form input[type=checkbox]{display:inline-block;z-index:2;border:0 none;cursor:pointer;height:16px;margin:0;padding:0;width:16px;position:relative;top:3px}.jodit_form input[type=checkbox]:after{content:\"\";background:#fff;border:1px solid hsla(0,0%,88%,.99);border-radius:2px;background-clip:padding-box;width:16px;height:16px;display:inline-block;position:relative;z-index:1;box-sizing:border-box;transition:background .2s ease 0s,border-color .2s ease 0s}.jodit_form input[type=checkbox]:checked:after{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M27 4L12 19l-7-7-5 5 12 12L32 9z' fill='%23FFF'/%3E%3C/svg%3E\") no-repeat 50%;background-color:#b5b5b5;border-color:#b5b5b5}.jodit_form label{margin-top:10px;display:block;text-align:left}.jodit_form form:after{content:\"\";display:table;clear:both}.jodit_about{padding:20px}.jodit_about a{color:#459ce7;text-decoration:none}.jodit_about a:focus,.jodit_about a:hover{color:#23527c;text-decoration:underline;outline:0}.jodit_about div{margin-bottom:5px}.jodit_colorpicker{min-width:180px;text-align:left;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit_colorpicker .jodit_colorpicker_group{margin-bottom:5px}.jodit_colorpicker a{width:18px;height:18px;line-height:16px;display:inline-block;vertical-align:middle;text-align:center}.jodit_colorpicker a:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;width:0}.jodit_colorpicker a svg{display:inline-block;vertical-align:middle;font-smoothing:antialiased;max-width:14px}.jodit_colorpicker a:hover{border-color:#000}.jodit_colorpicker a:active{background:#d6d6d6;color:#b5b5b5}@-webkit-keyframes b{30%{opacity:.6}60%{opacity:0}to{opacity:.6}}@keyframes b{30%{opacity:.6}60%{opacity:0}to{opacity:.6}}.jodit_progress_bar{position:absolute;top:0;left:0;height:2px;z-index:17;border-radius:1px;display:none}.jodit_progress_bar div{position:relative;background:#b91f1f;height:2px;transition:width .5s ease-out,opacity .5s linear;will-change:width,opacity}.jodit_progress_bar div:after,.jodit_progress_bar div:before{-webkit-animation:b 2s ease-out 0s infinite;animation:b 2s ease-out 0s infinite;content:\"\";display:inline-block;position:absolute;top:0;height:2px;box-shadow:1px 0 6px 1px #b91f1f;border-radius:100%;opacity:.6}.jodit_progress_bar div:before{width:180px;right:-80px;clip:rect(-6px,90px,14px,-6px)}.jodit_progress_bar div:after{width:20px;right:0;clip:rect(-6px,22px,14px,10px)}.jodit_tabs .jodit_tabs_buttons{line-height:18px;margin-bottom:5px;margin-top:4px}.jodit_tabs .jodit_tabs_buttons>a{display:inline-block;text-decoration:none;font-size:11px;font-weight:700;text-align:center;white-space:nowrap;height:29px;line-height:27px;position:relative;vertical-align:middle;transition:background .1s linear;text-overflow:ellipsis;overflow:hidden;box-shadow:none;background-color:#f5f5f5;color:#737373;border:1px solid rgba(0,0,0,.1);outline:0}@media (max-width:768px){.jodit_tabs .jodit_tabs_buttons>a{width:100%!important;border-radius:0!important}}.jodit_tabs .jodit_tabs_buttons>a+a{margin-left:-1px}.jodit_tabs .jodit_tabs_buttons>a i,.jodit_tabs .jodit_tabs_buttons>a svg{width:16px;height:16px;display:inline-block;vertical-align:sub;margin-right:5px;fill:#737373}.jodit_tabs .jodit_tabs_buttons>a:hover{border:1px solid #c6c6c6;color:#111;box-shadow:none;background-color:#f8f8f8;outline:0}.jodit_tabs .jodit_tabs_buttons>a:hover i,.jodit_tabs .jodit_tabs_buttons>a:hover svg{fill:#111}.jodit_tabs .jodit_tabs_buttons>a.active,.jodit_tabs .jodit_tabs_buttons>a:active{outline:0;background:#fff;border:1px solid #ccc;color:#333}.jodit_tabs .jodit_tabs_buttons>a.active i,.jodit_tabs .jodit_tabs_buttons>a.active svg,.jodit_tabs .jodit_tabs_buttons>a:active i,.jodit_tabs .jodit_tabs_buttons>a:active svg{fill:#333}.jodit_tabs .jodit_tabs_wrapper .jodit_tab{display:none}.jodit_tabs .jodit_tabs_wrapper .jodit_tab.active{display:block}.jodit_tabs .jodit_tabs_wrapper .jodit_tab .jodit_tab_empty{min-width:220px;min-height:100px}.jodit-add-new-line{z-index:4;position:absolute;height:20px;top:0;outline:0;margin-top:-10px;padding:5px;vertical-align:middle;display:none}.jodit-add-new-line,.jodit-add-new-line *{box-sizing:border-box}.jodit-add-new-line:before{vertical-align:top;content:\"\";border-top:1px solid #ccc;display:inline-block;width:calc(100% - 30px)}.jodit-add-new-line span{display:inline-block;width:30px;height:20px;background:hsla(40,7%,92%,.3);vertical-align:top;border:1px solid #ccc;padding:0 5px;cursor:pointer}.jodit-add-new-line span:hover{background:#ecebe9}.jodit-add-new-line svg{width:16px;fill:#ccc;vertical-align:top}.jodit-add-new-line.jodit-add-new-line_after{margin-top:-20px}.jodit-add-new-line.jodit-add-new-line_after:before,.jodit-add-new-line.jodit-add-new-line_after span{vertical-align:bottom}.jodit_source_mode .jodit-add-new-line{display:none!important}.jodit_error_box_for_messages{position:absolute;right:0;bottom:0;width:0;height:0;overflow:visible;z-index:3}.jodit_error_box_for_messages>*{position:absolute;right:5px;bottom:0;display:block;transition:opacity .1s linear,bottom .3s linear;opacity:0;background:rgba(255,0,0,.29);color:#e02b2b;padding:2px 7px;border:1px solid hsla(0,65%,67%,.44);font-size:14px;white-space:pre}.jodit_error_box_for_messages>.active{opacity:1}.jodit_error_box_for_messages>.info{background:rgba(204,229,247,.71);color:#776565;border:1px solid hsla(0,0%,60%,.44)}.jodit_error_box_for_messages>.success{background:rgba(77,236,112,.29);color:#5d5a5a;border:1px solid hsla(0,0%,58%,.44)}.jodit_fullsize_box{z-index:12!important;position:static!important;overflow:visible!important}body.jodit_fullsize_box,html.jodit_fullsize_box{height:0!important;width:0!important;overflow:initial!important}html.jodit_fullsize_box{position:fixed!important}.jodit_fullsize{position:absolute;top:0;left:0;right:0;bottom:0;z-index:12}.jodit_fullsize .toolbar{width:100%!important}.jodit_fullsize .jodit_area,.jodit_fullsize .jodit_editor{height:100%}.jodit_fullsize .jodit_workflow{height:calc(100% - 24px);overflow:auto}.jodit_fullsize.jodit_toolbar_size-small .jodit_workflow{height:calc(100% - 18px)}.jodit_fullsize.jodit_toolbar_size-large .jodit_workflow{height:calc(100% - 27px)}.jodit_placeholder{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;top:0;left:0;display:block;position:absolute;padding:10px;color:rgba(0,0,0,.35);z-index:1;pointer-events:none}.jodit_toolbar_popup-inline{position:absolute;display:none;color:hsla(0,0%,88%,.99);background:#fff;box-shadow:none;background-clip:padding-box;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:10px;z-index:13!important;text-align:left;border:0;border:1px solid hsla(0,0%,88%,.99)}.jodit_toolbar_popup-inline.active{display:block}.jodit_toolbar_popup-inline>.jodit_popup_triangle{padding:0;margin:0;width:8px;height:8px;position:absolute;top:-5px;left:50%;margin-left:-4px;display:inline-block;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#fff;border:1px solid hsla(0,0%,88%,.99);border-width:1px 0 0 1px;z-index:6}.jodit_toolbar_popup-inline .jodit_toolbar{z-index:7;border:0}.jodit_toolbar_popup-inline .buttons{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);padding:0 2px;white-space:nowrap;line-height:0;border-bottom:0}[data-jodit_iframe_wrapper]{display:block;clear:both;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}[data-jodit_iframe_wrapper]:after{position:absolute;content:\"\";z-index:1;top:0;left:0;right:0;bottom:0;cursor:pointer;display:block;background:transparent}.jodit_resizer{width:100px;height:100px;position:absolute;border:1px solid rgba(3,14,82,.92);top:0;left:0;display:none;pointer-events:none}.jodit_resizer *{box-sizing:border-box}.jodit_resizer>i{position:absolute;display:inline-block;z-index:4;pointer-events:all;border:1px solid rgba(3,14,82,.92);background-color:hsla(0,0%,88%,.99);width:10px;height:10px}.jodit_resizer>i:hover{background-color:#f8f8f8}.jodit_resizer>i:first-child{left:-5px;top:-5px;cursor:nw-resize}.jodit_resizer>i:nth-child(2){right:-5px;top:-5px;cursor:ne-resize}.jodit_resizer>i:nth-child(3){right:-5px;bottom:-5px;cursor:se-resize}.jodit_resizer>i:nth-child(4){left:-5px;bottom:-5px;cursor:sw-resize}@media (max-width:768px){.jodit_resizer>i{width:20px;height:20px}.jodit_resizer>i:first-child{left:-10px;top:-10px;cursor:nw-resize}.jodit_resizer>i:nth-child(2){right:-10px;top:-10px;cursor:ne-resize}.jodit_resizer>i:nth-child(3){right:-10px;bottom:-10px;cursor:se-resize}.jodit_resizer>i:nth-child(4){left:-10px;bottom:-10px;cursor:sw-resize}}.jodit_editor_resize{position:relative}.jodit_editor_resize a{position:absolute;bottom:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;height:0;overflow:hidden;border-width:7px 7px 0 0;border-color:transparent #ccc transparent transparent;border-style:dashed solid dashed dashed;cursor:se-resize}.jodit_source{display:none;position:relative;background-color:#f8f8f8;-webkit-box-flex:1;-ms-flex:1;flex:1}.jodit_source,.jodit_source .jodit_source_mirror-fake{min-height:100%}.jodit_container.jodit_source_mode .jodit_wysiwyg,.jodit_container.jodit_source_mode .jodit_wysiwyg_iframe{display:none!important}.jodit_container.jodit_source_mode .jodit_source{display:block!important}.jodit_container.jodit_split_mode .jodit_source,.jodit_container.jodit_split_mode .jodit_wysiwyg,.jodit_container.jodit_split_mode .jodit_wysiwyg_iframe{display:block!important;width:50%;-webkit-box-flex:1;-ms-flex:1;flex:1}.jodit_source_mirror{border:0;width:100%;background:#3f3f3f;margin:0;height:100%;box-shadow:none;resize:none;box-sizing:border-box;color:#f0f0f0;outline:0;font-family:Menlo,Monaco,monospace,sans-serif;font-size:13px;line-height:1.3em;z-index:2;padding:10px;overflow:auto;white-space:pre-wrap;-moz-tab-size:2em;-o-tab-size:2em;tab-size:2em;min-height:100%}.jodit_source_mirror::-moz-selection{background:#bdbdbd}.jodit_source_mirror::selection{background:#bdbdbd}.jodit_table_resizer{cursor:col-resize;position:fixed;z-index:3;padding-left:5px;padding-right:5px;margin-left:-5px}.jodit_table_resizer:after{content:\"\";display:block;height:100%;width:0;border:1px solid transparent;border-width:0 1px 0 0}.jodit_table_resizer-moved{z-index:2}.jodit_table_resizer-moved:after{border-color:#1e88e5}.jodit_wysiwyg table{width:100%;border:none;border-collapse:collapse;empty-cells:show;max-width:100%}.jodit_wysiwyg table tr{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit_wysiwyg table tr td,.jodit_wysiwyg table tr th{border:1px solid #ddd;padding:2px 5px;text-align:left;vertical-align:middle;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.jodit_wysiwyg table tr td[data-jodit-selected-cell],.jodit_wysiwyg table tr th[data-jodit-selected-cell]{border:1px double #1e88e5}.jodit_form_inserter .jodit_form-container{padding:0;margin:0;min-width:190px}.jodit_form_inserter .jodit_form-container>div{width:18px;height:18px;display:inline-block;position:relative}.jodit_form_inserter .jodit_form-container>div:after{content:\"\";position:absolute;top:0;left:0;display:inline-block;width:12px;height:12px;border:1px solid #ccc}.jodit_form_inserter .jodit_form-container>div.hovered:after{background:#7a450f;border:1px solid #b5b5b5}.jodit_form_inserter label{text-align:center;font-size:14px;padding:8px;display:block;margin:0}.jodit_text_icons .jodit_icon{width:auto;font-size:13px}.jodit_text_icons .jodit_icon:first-letter{text-transform:uppercase}.jodit_text_icons .jodit_tabs .jodit_tabs_buttons>a{font-family:Arial,Helvetica Neue,Helvetica,Tahoma,sans-serif;width:auto}.jodit_text_icons .jodit_tabs .jodit_tabs_buttons>a i,.jodit_text_icons .jodit_toolbar>li{width:auto}.jodit_text_icons .jodit_toolbar>li>a{text-decoration:none}.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_button,.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_dialog_header a,.jodit_text_icons .jodit_toolbar>li>a{padding:0 12px;font-family:Arial,Helvetica Neue,Helvetica,Tahoma,sans-serif;width:auto;color:rgba(0,0,0,.75)}.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_button .jodit_icon,.jodit_text_icons.jodit_dialog_box .jodit_dialog .jodit_dialog_header a .jodit_icon{width:auto}.jodit_widget,.jodit_widget *{box-sizing:border-box}.jodit_search{visibility:hidden;position:absolute;top:0;right:0;width:0;height:0}.jodit_search.jodit_search-active{visibility:visible}.jodit_search .jodit_search_box{width:320px;position:absolute;right:0;background-color:#f9f9f9;border:1px solid #ccc;border-width:0 0 1px 1px;padding:5px}.jodit_search .jodit_search_box input{margin:0;width:100%;height:100%;border:0;background-color:transparent;outline:0;padding:0 10px}.jodit_search .jodit_search_box input.jodit_search-replace{display:none}.jodit_search .jodit_search_box .jodit_search_buttons,.jodit_search .jodit_search_box .jodit_search_counts,.jodit_search .jodit_search_box .jodit_search_inputs{height:30px;display:inline-block;vertical-align:top}.jodit_search .jodit_search_box .jodit_search_inputs{width:60%;padding-right:5px}.jodit_search .jodit_search_box .jodit_search_counts{width:15%;line-height:100%;text-align:center;color:#ccc;border-left:1px solid #ccc}.jodit_search .jodit_search_box .jodit_search_counts:before{content:\"\";display:inline-block;vertical-align:middle;height:100%}.jodit_search .jodit_search_box .jodit_search_counts span{display:inline-block;vertical-align:middle}.jodit_search .jodit_search_box .jodit_search_buttons{padding-left:0;width:25%}.jodit_search .jodit_search_box .jodit_search_buttons button{outline:0;width:32%;padding:1px 5px;margin-right:1%;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;height:100%;border:1px solid transparent;background-color:transparent}.jodit_search .jodit_search_box .jodit_search_buttons button.jodit_search_buttons-replace{width:100%;border:1px solid #ccc;margin-top:2px;display:none}.jodit_search .jodit_search_box .jodit_search_buttons button:hover{background-color:#ecebe9}.jodit_search .jodit_search_box .jodit_search_buttons button:focus{border:1px solid rgba(181,214,253,.5)}.jodit_search .jodit_search_box .jodit_search_buttons button:active{border:1px solid #b5d6fd;-webkit-transform:scale(.95);transform:scale(.95)}.jodit_search.jodit_search-and-replace .jodit_search_counts,.jodit_search.jodit_search-and-replace .jodit_search_inputs{height:60px}.jodit_search.jodit_search-and-replace .jodit_search_counts input,.jodit_search.jodit_search-and-replace .jodit_search_inputs input{height:50%;transition:background-color .1s linear}.jodit_search.jodit_search-and-replace .jodit_search_counts input:focus,.jodit_search.jodit_search-and-replace .jodit_search_inputs input:focus{box-shadow:inset 0 0 3px 0 hsla(0,0%,80%,.58)}.jodit_search.jodit_search-and-replace .jodit_search_buttons button.jodit_search_buttons-replace,.jodit_search.jodit_search-and-replace .jodit_search_inputs input.jodit_search-replace{display:block}@media (max-width:320px){.jodit_search,.jodit_search .jodit_search_box{width:100%}}.jodit_symbols{width:460px;padding:10px}.jodit_symbols .jodit_symbols-container_preview,.jodit_symbols .jodit_symbols-container_table{display:inline-block;vertical-align:top}.jodit_symbols .jodit_symbols-container_table{width:88%}.jodit_symbols .jodit_symbols-container_preview{width:12%}.jodit_symbols .jodit_symbols-container_preview .jodit_symbols-preview{font-size:34px;text-align:center;padding:20px 0;border:1px solid #ccc}.jodit_symbols table{border:0;border-spacing:0;table-layout:fixed}.jodit_symbols table td{padding:0}.jodit_symbols table td a{font-size:16px;text-decoration:none;color:#000;display:inline-block;box-sizing:border-box;width:21.6px;height:21.6px;border:1px solid transparent;text-align:center;line-height:21.6px;vertical-align:top}.jodit_symbols table td a:focus,.jodit_symbols table td a:hover{border:1px solid #1e88e5}.jodit_sticky-dummy_toolbar{display:none}.jodit_sticky .jodit_toolbar{position:fixed;z-index:3;top:0;left:auto}.jodit_sticky .jodit_sticky-dummy_toolbar{display:block}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});