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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  "use strict";

  var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = "Expected a function",
      n = NaN,
      o = "[object Symbol]",
      i = /^\s+|\s+$/g,
      a = /^[-+]0x[0-9a-f]+$/i,
      r = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      s = parseInt,
      u = "object" == typeof e && e && e.Object === Object && e,
      d = "object" == typeof self && self && self.Object === Object && self,
      l = u || d || Function("return this")(),
      f = Object.prototype.toString,
      m = Math.max,
      p = Math.min,
      b = function () {
    return l.Date.now();
  };

  function v(e, n, o) {
    var i,
        a,
        r,
        c,
        s,
        u,
        d = 0,
        l = !1,
        f = !1,
        v = !0;
    if ("function" != typeof e) throw new TypeError(t);

    function y(t) {
      var n = i,
          o = a;
      return i = a = void 0, d = t, c = e.apply(o, n);
    }

    function h(e) {
      var t = e - u;
      return void 0 === u || t >= n || t < 0 || f && e - d >= r;
    }

    function k() {
      var e = b();
      if (h(e)) return x(e);
      s = setTimeout(k, function (e) {
        var t = n - (e - u);
        return f ? p(t, r - (e - d)) : t;
      }(e));
    }

    function x(e) {
      return s = void 0, v && i ? y(e) : (i = a = void 0, c);
    }

    function O() {
      var e = b(),
          t = h(e);

      if (i = arguments, a = this, u = e, t) {
        if (void 0 === s) return function (e) {
          return d = e, s = setTimeout(k, n), l ? y(e) : c;
        }(u);
        if (f) return s = setTimeout(k, n), y(u);
      }

      return void 0 === s && (s = setTimeout(k, n)), c;
    }

    return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, v = "trailing" in o ? !!o.trailing : v), O.cancel = function () {
      void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
    }, O.flush = function () {
      return void 0 === s ? c : x(b());
    }, O;
  }

  function g(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
  }

  function w(e) {
    if ("number" == typeof e) return e;
    if (function (e) {
      return "symbol" == typeof e || function (e) {
        return !!e && "object" == typeof e;
      }(e) && f.call(e) == o;
    }(e)) return n;

    if (g(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = g(t) ? t + "" : t;
    }

    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(i, "");
    var u = r.test(e);
    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
  }

  var y = function (e, n, o) {
    var i = !0,
        a = !0;
    if ("function" != typeof e) throw new TypeError(t);
    return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), v(e, n, {
      leading: i,
      maxWait: n,
      trailing: a
    });
  },
      h = "Expected a function",
      k = NaN,
      x = "[object Symbol]",
      O = /^\s+|\s+$/g,
      j = /^[-+]0x[0-9a-f]+$/i,
      E = /^0b[01]+$/i,
      N = /^0o[0-7]+$/i,
      z = parseInt,
      C = "object" == typeof e && e && e.Object === Object && e,
      A = "object" == typeof self && self && self.Object === Object && self,
      q = C || A || Function("return this")(),
      L = Object.prototype.toString,
      T = Math.max,
      M = Math.min,
      S = function () {
    return q.Date.now();
  };

  function D(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
  }

  function H(e) {
    if ("number" == typeof e) return e;
    if (function (e) {
      return "symbol" == typeof e || function (e) {
        return !!e && "object" == typeof e;
      }(e) && L.call(e) == x;
    }(e)) return k;

    if (D(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = D(t) ? t + "" : t;
    }

    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(O, "");
    var n = E.test(e);
    return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
  }

  var $ = function (e, t, n) {
    var o,
        i,
        a,
        r,
        c,
        s,
        u = 0,
        d = !1,
        l = !1,
        f = !0;
    if ("function" != typeof e) throw new TypeError(h);

    function m(t) {
      var n = o,
          a = i;
      return o = i = void 0, u = t, r = e.apply(a, n);
    }

    function p(e) {
      var n = e - s;
      return void 0 === s || n >= t || n < 0 || l && e - u >= a;
    }

    function b() {
      var e = S();
      if (p(e)) return v(e);
      c = setTimeout(b, function (e) {
        var n = t - (e - s);
        return l ? M(n, a - (e - u)) : n;
      }(e));
    }

    function v(e) {
      return c = void 0, f && o ? m(e) : (o = i = void 0, r);
    }

    function g() {
      var e = S(),
          n = p(e);

      if (o = arguments, i = this, s = e, n) {
        if (void 0 === c) return function (e) {
          return u = e, c = setTimeout(b, t), d ? m(e) : r;
        }(s);
        if (l) return c = setTimeout(b, t), m(s);
      }

      return void 0 === c && (c = setTimeout(b, t)), r;
    }

    return t = H(t) || 0, D(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f), g.cancel = function () {
      void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
    }, g.flush = function () {
      return void 0 === c ? r : v(S());
    }, g;
  },
      W = function () {};

  function P(e) {
    e && e.forEach(function (e) {
      var t = Array.prototype.slice.call(e.addedNodes),
          n = Array.prototype.slice.call(e.removedNodes);
      if (function e(t) {
        var n = void 0,
            o = void 0;

        for (n = 0; n < t.length; n += 1) {
          if ((o = t[n]).dataset && o.dataset.aos) return !0;
          if (o.children && e(o.children)) return !0;
        }

        return !1;
      }(t.concat(n))) return W();
    });
  }

  function Y() {
    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  }

  var _ = {
    isSupported: function () {
      return !!Y();
    },
    ready: function (e, t) {
      var n = window.document,
          o = new (Y())(P);
      W = t, o.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }
  },
      B = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      F = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      I = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }

    return e;
  },
      K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

  function R() {
    return navigator.userAgent || navigator.vendor || window.opera || "";
  }

  var U = new (function () {
    function e() {
      B(this, e);
    }

    return F(e, [{
      key: "phone",
      value: function () {
        var e = R();
        return !(!K.test(e) && !G.test(e.substr(0, 4)));
      }
    }, {
      key: "mobile",
      value: function () {
        var e = R();
        return !(!J.test(e) && !Q.test(e.substr(0, 4)));
      }
    }, {
      key: "tablet",
      value: function () {
        return this.mobile() && !this.phone();
      }
    }, {
      key: "ie11",
      value: function () {
        return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
      }
    }]), e;
  }())(),
      V = function (e, t) {
    var n = void 0;
    return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
      detail: t
    }) : n = new CustomEvent(e, {
      detail: t
    }), document.dispatchEvent(n);
  },
      X = function (e) {
    return e.forEach(function (e, t) {
      return function (e, t) {
        var n = e.options,
            o = e.position,
            i = e.node,
            a = (e.data, function () {
          e.animated && (function (e, t) {
            t && t.forEach(function (t) {
              return e.classList.remove(t);
            });
          }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !1);
        });
        n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function (e, t) {
          t && t.forEach(function (t) {
            return e.classList.add(t);
          });
        }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !0) : e.animated && !n.once && a();
      }(e, window.pageYOffset);
    });
  },
      Z = function (e) {
    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;

    return {
      top: n,
      left: t
    };
  },
      ee = function (e, t, n) {
    var o = e.getAttribute("data-aos-" + t);

    if (void 0 !== o) {
      if ("true" === o) return !0;
      if ("false" === o) return !1;
    }

    return o || n;
  },
      te = function (e, t) {
    return e.forEach(function (e, n) {
      var o = ee(e.node, "mirror", t.mirror),
          i = ee(e.node, "once", t.once),
          a = ee(e.node, "id"),
          r = t.useClassNames && e.node.getAttribute("data-aos"),
          c = [t.animatedClassName].concat(r ? r.split(" ") : []).filter(function (e) {
        return "string" == typeof e;
      });
      t.initClassName && e.node.classList.add(t.initClassName), e.position = {
        in: function (e, t, n) {
          var o = window.innerHeight,
              i = ee(e, "anchor"),
              a = ee(e, "anchor-placement"),
              r = Number(ee(e, "offset", a ? 0 : t)),
              c = a || n,
              s = e;
          i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
          var u = Z(s).top - o;

          switch (c) {
            case "top-bottom":
              break;

            case "center-bottom":
              u += s.offsetHeight / 2;
              break;

            case "bottom-bottom":
              u += s.offsetHeight;
              break;

            case "top-center":
              u += o / 2;
              break;

            case "center-center":
              u += o / 2 + s.offsetHeight / 2;
              break;

            case "bottom-center":
              u += o / 2 + s.offsetHeight;
              break;

            case "top-top":
              u += o;
              break;

            case "bottom-top":
              u += o + s.offsetHeight;
              break;

            case "center-top":
              u += o + s.offsetHeight / 2;
          }

          return u + r;
        }(e.node, t.offset, t.anchorPlacement),
        out: o && function (e, t) {
          window.innerHeight;
          var n = ee(e, "anchor"),
              o = ee(e, "offset", t),
              i = e;
          return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), Z(i).top + i.offsetHeight - o;
        }(e.node, t.offset)
      }, e.options = {
        once: i,
        mirror: o,
        animatedClassNames: c,
        id: a
      };
    }), e;
  },
      ne = function () {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function (e) {
      return {
        node: e
      };
    });
  },
      oe = [],
      ie = !1,
      ae = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50
  },
      re = function () {
    return document.all && !window.atob;
  },
      ce = function () {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (oe = te(oe, ae), X(oe), window.addEventListener("scroll", y(function () {
      X(oe, ae.once);
    }, ae.throttleDelay)));
  },
      se = function () {
    if (oe = ne(), de(ae.disable) || re()) return ue();
    ce();
  },
      ue = function () {
    oe.forEach(function (e, t) {
      e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), ae.initClassName && e.node.classList.remove(ae.initClassName), ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
    });
  },
      de = function (e) {
    return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
  };

  return {
    init: function (e) {
      return ae = I(ae, e), oe = ne(), ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ae.disableMutationObserver = !0), ae.disableMutationObserver || _.ready("[data-aos]", se), de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), -1 === ["DOMContentLoaded", "load"].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, function () {
        ce(!0);
      }) : window.addEventListener("load", function () {
        ce(!0);
      }), "DOMContentLoaded" === ae.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && ce(!0), window.addEventListener("resize", $(ce, ae.debounceDelay, !0)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)), oe);
    },
    refresh: ce,
    refreshHard: se
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css.escape/css.escape.js":
/*!***********************************************!*\
  !*** ./node_modules/css.escape/css.escape.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;

(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (true) {
    // For Node.js.
    module.exports = factory(root);
  } else {}
})(typeof global != 'undefined' ? global : this, function (root) {
  if (root.CSS && root.CSS.escape) {
    return root.CSS.escape;
  } // https://drafts.csswg.org/cssom/#serialize-an-identifier


  var cssEscape = function (value) {
    if (arguments.length == 0) {
      throw new TypeError('`CSS.escape` requires an argument.');
    }

    var string = String(value);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = '';
    var firstCodeUnit = string.charCodeAt(0);

    while (++index < length) {
      codeUnit = string.charCodeAt(index); // Note: there’s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.
      // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
      // (U+FFFD).

      if (codeUnit == 0x0000) {
        result += '\uFFFD';
        continue;
      }

      if ( // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F || // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), […]
      index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 || // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
      index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D) {
        // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
        result += '\\' + codeUnit.toString(16) + ' ';
        continue;
      }

      if ( // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      index == 0 && length == 1 && codeUnit == 0x002D) {
        result += '\\' + string.charAt(index);
        continue;
      } // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), […]


      if (codeUnit >= 0x0080 || codeUnit == 0x002D || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
        // the character itself
        result += string.charAt(index);
        continue;
      } // Otherwise, the escaped character.
      // https://drafts.csswg.org/cssom/#escape-a-character


      result += '\\' + string.charAt(index);
    }

    return result;
  };

  if (!root.CSS) {
    root.CSS = {};
  }

  root.CSS.escape = cssEscape;
  return cssEscape;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (window, factory) {
  var lazySizes = factory(window, window.document);
  window.lazySizes = lazySizes;

  if ( true && module.exports) {
    module.exports = lazySizes;
  }
})(typeof window != 'undefined' ? window : {}, function l(window, document) {
  'use strict';
  /*jshint eqnull:true */

  var lazysizes, lazySizesCfg;

  (function () {
    var prop;
    var lazySizesDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 0,
      throttleDelay: 125
    };
    lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

    for (prop in lazySizesDefaults) {
      if (!(prop in lazySizesCfg)) {
        lazySizesCfg[prop] = lazySizesDefaults[prop];
      }
    }
  })();

  if (!document || !document.getElementsByClassName) {
    return {
      init: function () {},
      cfg: lazySizesCfg,
      noSupport: true
    };
  }

  var docElem = document.documentElement;
  var Date = window.Date;
  var supportPicture = window.HTMLPictureElement;
  var _addEventListener = 'addEventListener';
  var _getAttribute = 'getAttribute';
  var addEventListener = window[_addEventListener];
  var setTimeout = window.setTimeout;
  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
  var requestIdleCallback = window.requestIdleCallback;
  var regPicture = /^picture$/i;
  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
  var regClassCache = {};
  var forEach = Array.prototype.forEach;

  var hasClass = function (ele, cls) {
    if (!regClassCache[cls]) {
      regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    }

    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };

  var addClass = function (ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };

  var removeClass = function (ele, cls) {
    var reg;

    if (reg = hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function (dom, fn, add) {
    var action = add ? _addEventListener : 'removeEventListener';

    if (add) {
      addRemoveLoadEvents(dom, fn);
    }

    loadEvents.forEach(function (evt) {
      dom[action](evt, fn);
    });
  };

  var triggerEvent = function (elem, name, detail, noBubbles, noCancelable) {
    var event = document.createEvent('Event');

    if (!detail) {
      detail = {};
    }

    detail.instance = lazysizes;
    event.initEvent(name, !noBubbles, !noCancelable);
    event.detail = detail;
    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function (el, full) {
    var polyfill;

    if (!supportPicture && (polyfill = window.picturefill || lazySizesCfg.pf)) {
      if (full && full.src && !el[_getAttribute]('srcset')) {
        el.setAttribute('srcset', full.src);
      }

      polyfill({
        reevaluate: true,
        elements: [el]
      });
    } else if (full && full.src) {
      el.src = full.src;
    }
  };

  var getCSS = function (elem, style) {
    return (getComputedStyle(elem, null) || {})[style];
  };

  var getWidth = function (elem, parent, width) {
    width = width || elem.offsetWidth;

    while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
      width = parent.offsetWidth;
      parent = parent.parentNode;
    }

    return width;
  };

  var rAF = function () {
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function () {
      var runFns = fns;
      fns = firstFns.length ? secondFns : firstFns;
      running = true;
      waiting = false;

      while (runFns.length) {
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function (fn, queue) {
      if (running && !queue) {
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if (!waiting) {
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;
    return rafBatch;
  }();

  var rAFIt = function (fn, simple) {
    return simple ? function () {
      rAF(fn);
    } : function () {
      var that = this;
      var args = arguments;
      rAF(function () {
        fn.apply(that, args);
      });
    };
  };

  var throttle = function (fn) {
    var running;
    var lastTime = 0;
    var gDelay = lazySizesCfg.throttleDelay;
    var rICTimeout = lazySizesCfg.ricTimeout;

    var run = function () {
      running = false;
      lastTime = Date.now();
      fn();
    };

    var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
      requestIdleCallback(run, {
        timeout: rICTimeout
      });

      if (rICTimeout !== lazySizesCfg.ricTimeout) {
        rICTimeout = lazySizesCfg.ricTimeout;
      }
    } : rAFIt(function () {
      setTimeout(run);
    }, true);
    return function (isPriority) {
      var delay;

      if (isPriority = isPriority === true) {
        rICTimeout = 33;
      }

      if (running) {
        return;
      }

      running = true;
      delay = gDelay - (Date.now() - lastTime);

      if (delay < 0) {
        delay = 0;
      }

      if (isPriority || delay < 9) {
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  }; //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html


  var debounce = function (func) {
    var timeout, timestamp;
    var wait = 99;

    var run = function () {
      timeout = null;
      func();
    };

    var later = function () {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function () {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  var loader = function () {
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;
    var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);
    var shrinkExpand = 0;
    var currentExpand = 0;
    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function (e) {
      isLoading--;

      if (!e || isLoading < 0 || !e.target) {
        isLoading = 0;
      }
    };

    var isVisible = function (elem) {
      if (isBodyHidden == null) {
        isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
      }

      return isBodyHidden || getCSS(elem.parentNode, 'visibility') != 'hidden' && getCSS(elem, 'visibility') != 'hidden';
    };

    var isNestedVisible = function (elem, elemExpand) {
      var outerRect;
      var parent = elem;
      var visible = isVisible(elem);
      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
        visible = (getCSS(parent, 'opacity') || 1) > 0;

        if (visible && getCSS(parent, 'overflow') != 'visible') {
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
        }
      }

      return visible;
    };

    var checkElements = function () {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
      var lazyloadElems = lazysizes.elements;

      if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
        i = 0;
        lowRuns++;

        for (; i < eLlen; i++) {
          if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
            continue;
          }

          if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
            unveilElement(lazyloadElems[i]);
            continue;
          }

          if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
            elemExpand = currentExpand;
          }

          if (!defaultExpand) {
            defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
            lazysizes._defEx = defaultExpand;
            preloadExpand = defaultExpand * lazySizesCfg.expFactor;
            hFac = lazySizesCfg.hFac;
            isBodyHidden = null;

            if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
              currentExpand = preloadExpand;
              lowRuns = 0;
            } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
              currentExpand = defaultExpand;
            } else {
              currentExpand = shrinkExpand;
            }
          }

          if (beforeExpandVal !== elemExpand) {
            eLvW = innerWidth + elemExpand * hFac;
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;

            if (isLoading > 9) {
              break;
            }
          } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto'))) {
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if (autoLoadElem && !loadedSomething) {
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function (e) {
      var elem = e.target;

      if (elem._lazyCache) {
        delete elem._lazyCache;
        return;
      }

      resetPreloading(e);
      addClass(elem, lazySizesCfg.loadedClass);
      removeClass(elem, lazySizesCfg.loadingClass);
      addRemoveLoadEvents(elem, rafSwitchLoadingClass);
      triggerEvent(elem, 'lazyloaded');
    };

    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);

    var rafSwitchLoadingClass = function (e) {
      rafedSwitchLoadingClass({
        target: e.target
      });
    };

    var changeIframeSrc = function (elem, src) {
      try {
        elem.contentWindow.location.replace(src);
      } catch (e) {
        elem.src = src;
      }
    };

    var handleSources = function (source) {
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

      if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
        source.setAttribute('media', customMedia);
      }

      if (sourceSrcset) {
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
      var src, srcset, parent, isPicture, event, firesLoad;

      if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
        if (sizes) {
          if (isAuto) {
            addClass(elem, lazySizesCfg.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
        src = elem[_getAttribute](lazySizesCfg.srcAttr);

        if (isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);
        event = {
          target: elem
        };
        addClass(elem, lazySizesCfg.loadingClass);

        if (firesLoad) {
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if (isPicture) {
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if (srcset) {
          elem.setAttribute('srcset', srcset);
        } else if (src && !isPicture) {
          if (regIframe.test(elem.nodeName)) {
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if (isImg && (srcset || isPicture)) {
          updatePolyfill(elem, {
            src: src
          });
        }
      }

      if (elem._lazyRace) {
        delete elem._lazyRace;
      }

      removeClass(elem, lazySizesCfg.lazyClass);
      rAF(function () {
        // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
        var isLoaded = elem.complete && elem.naturalWidth > 1;

        if (!firesLoad || isLoaded) {
          if (isLoaded) {
            addClass(elem, 'ls-is-cached');
          }

          switchLoadingClass(event);
          elem._lazyCache = true;
          setTimeout(function () {
            if ('_lazyCache' in elem) {
              delete elem._lazyCache;
            }
          }, 9);
        }

        if (elem.loading == 'lazy') {
          isLoading--;
        }
      }, true);
    });

    var unveilElement = function (elem) {
      if (elem._lazyRace) {
        return;
      }

      var detail;
      var isImg = regImg.test(elem.nodeName); //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")

      var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));

      var isAuto = sizes == 'auto';

      if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
        return;
      }

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if (isAuto) {
        autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;
      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var afterScroll = debounce(function () {
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
    });

    var altLoadmodeScrollListner = function () {
      if (lazySizesCfg.loadMode == 3) {
        lazySizesCfg.loadMode = 2;
      }

      afterScroll();
    };

    var onload = function () {
      if (isCompleted) {
        return;
      }

      if (Date.now() - started < 999) {
        setTimeout(onload, 999);
        return;
      }

      isCompleted = true;
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
      addEventListener('scroll', altLoadmodeScrollListner, true);
    };

    return {
      _: function () {
        started = Date.now();
        lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);
        addEventListener('scroll', throttledCheckElements, true);
        addEventListener('resize', throttledCheckElements, true);

        if (window.MutationObserver) {
          new MutationObserver(throttledCheckElements).observe(docElem, {
            childList: true,
            subtree: true,
            attributes: true
          });
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);

          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);

          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true); //, 'fullscreenchange'

        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (name) {
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if (/d$|^c/.test(document.readyState)) {
          onload();
        } else {
          addEventListener('load', onload);

          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);

          setTimeout(onload, 20000);
        }

        if (lazysizes.elements.length) {
          checkElements();

          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement,
      _aLSL: altLoadmodeScrollListner
    };
  }();

  var autoSizer = function () {
    var autosizesElems;
    var sizeElement = rAFIt(function (elem, parent, event, width) {
      var sources, i, len;
      elem._lazysizesWidth = width;
      width += 'px';
      elem.setAttribute('sizes', width);

      if (regPicture.test(parent.nodeName || '')) {
        sources = parent.getElementsByTagName('source');

        for (i = 0, len = sources.length; i < len; i++) {
          sources[i].setAttribute('sizes', width);
        }
      }

      if (!event.detail.dataAttr) {
        updatePolyfill(elem, event.detail);
      }
    });

    var getSizeElement = function (elem, dataAttr, width) {
      var event;
      var parent = elem.parentNode;

      if (parent) {
        width = getWidth(elem, parent, width);
        event = triggerEvent(elem, 'lazybeforesizes', {
          width: width,
          dataAttr: !!dataAttr
        });

        if (!event.defaultPrevented) {
          width = event.detail.width;

          if (width && width !== elem._lazysizesWidth) {
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function () {
      var i;
      var len = autosizesElems.length;

      if (len) {
        i = 0;

        for (; i < len; i++) {
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
    return {
      _: function () {
        autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  }();

  var init = function () {
    if (!init.i && document.getElementsByClassName) {
      init.i = true;

      autoSizer._();

      loader._();
    }
  };

  setTimeout(function () {
    if (lazySizesCfg.init) {
      init();
    }
  });
  lazysizes = {
    cfg: lazySizesCfg,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF
  };
  return lazysizes;
});

/***/ }),

/***/ "./node_modules/rqrauhvmra__tobi/css/tobi.min.css":
/*!********************************************************!*\
  !*** ./node_modules/rqrauhvmra__tobi/css/tobi.min.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/rqrauhvmra__tobi/js/tobi.js":
/*!**************************************************!*\
  !*** ./node_modules/rqrauhvmra__tobi/js/tobi.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tobi
 *
 * @author rqrauhvmra
 * @version 1.8.1
 * @url https://github.com/rqrauhvmra/Tobi
 *
 * MIT License
 */
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  var Tobi = function Tobi(userOptions) {
    /**
     * Global variables
     *
     */
    var config = {},
        browserWindow = window,
        transformProperty = null,
        gallery = [],
        figcaptionId = 0,
        elementsLength = 0,
        lightbox = null,
        slider = null,
        sliderElements = [],
        prevButton = null,
        nextButton = null,
        closeButton = null,
        counter = null,
        currentIndex = 0,
        drag = {},
        isDraggingX = false,
        isDraggingY = false,
        pointerDown = false,
        lastFocus = null,
        firstFocusableEl = null,
        lastFocusableEl = null,
        offset = null,
        offsetTmp = null,
        resizeTicking = false,
        isYouTubeDependencieLoaded = true,
        waitingEls = [],
        player = [],
        playerId = 0,
        x = 0;
    /**
     * Merge default options with user options
     *
     * @param {Object} userOptions - Optional user options
     * @returns {Object} - Custom options
     */

    var mergeOptions = function mergeOptions(userOptions) {
      // Default options
      var options = {
        selector: '.lightbox',
        captions: true,
        captionsSelector: 'img',
        captionAttribute: 'alt',
        nav: 'auto',
        navText: ['<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><polyline points="14 18 8 12 14 6 14 6"></polyline></svg>', '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><polyline points="10 6 16 12 10 18 10 18"></polyline></svg>'],
        navLabel: ['Previous', 'Next'],
        close: true,
        closeText: '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"></path></svg>',
        closeLabel: 'Close',
        loadingIndicatorLabel: 'Image loading',
        counter: true,
        download: false,
        // TODO
        downloadText: '',
        // TODO
        downloadLabel: 'Download',
        // TODO
        keyboard: true,
        zoom: true,
        zoomText: '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><polyline points="21 16 21 21 16 21"/><polyline points="8 21 3 21 3 16"/><polyline points="16 3 21 3 21 8"/><polyline points="3 8 3 3 8 3"/></svg>',
        docClose: true,
        swipeClose: true,
        hideScrollbar: true,
        draggable: true,
        threshold: 100,
        rtl: false,
        // TODO
        loop: false,
        // TODO
        autoplayVideo: false,
        theme: 'dark'
      };

      if (userOptions) {
        Object.keys(userOptions).forEach(function (key) {
          options[key] = userOptions[key];
        });
      }

      return options;
    };
    /**
     * Determine if browser supports unprefixed transform property
     *
     * @returns {string} - Transform property supported by client
     */


    var transformSupport = function transformSupport() {
      return typeof document.documentElement.style.transform === 'string' ? 'transform' : 'WebkitTransform';
    };
    /**
     * Types - you can add new type to support something new
     *
     */


    var supportedElements = {
      image: {
        checkSupport: function (el) {
          return !el.hasAttribute('data-type') && el.href.match(/\.(png|jpe?g|tiff|tif|gif|bmp|webp|svg|ico)$/);
        },
        init: function (el, container) {
          var figure = document.createElement('figure'),
              figcaption = document.createElement('figcaption'),
              image = document.createElement('img'),
              thumbnail = el.querySelector('img'),
              loadingIndicator = document.createElement('div');
          image.style.opacity = '0';

          if (thumbnail) {
            image.alt = thumbnail.alt || '';
          }

          image.setAttribute('src', '');
          image.setAttribute('data-src', el.href); // Add image to figure

          figure.appendChild(image); // Create figcaption

          if (config.captions) {
            figcaption.style.opacity = '0';

            if (config.captionsSelector === 'self' && el.getAttribute(config.captionAttribute)) {
              figcaption.textContent = el.getAttribute(config.captionAttribute);
            } else if (config.captionsSelector === 'img' && thumbnail && thumbnail.getAttribute(config.captionAttribute)) {
              figcaption.textContent = thumbnail.getAttribute(config.captionAttribute);
            }

            if (figcaption.textContent) {
              figcaption.id = 'tobi-figcaption-' + figcaptionId;
              figure.appendChild(figcaption);
              image.setAttribute('aria-labelledby', figcaption.id);
              ++figcaptionId;
            }
          } // Add figure to container


          container.appendChild(figure); // Create loading indicator

          loadingIndicator.className = 'tobi-loader';
          loadingIndicator.setAttribute('role', 'progressbar');
          loadingIndicator.setAttribute('aria-label', config.loadingIndicatorLabel); // Add loading indicator to container

          container.appendChild(loadingIndicator); // Register type

          container.setAttribute('data-type', 'image');
        },
        onPreload: function (container) {
          // Same as preload
          supportedElements.image.onLoad(container);
        },
        onLoad: function (container) {
          var image = container.querySelector('img');

          if (!image.hasAttribute('data-src')) {
            return;
          }

          var figcaption = container.querySelector('figcaption'),
              loadingIndicator = container.querySelector('.tobi-loader');

          image.onload = function () {
            container.removeChild(loadingIndicator);
            image.style.opacity = '1';

            if (figcaption) {
              figcaption.style.opacity = '1';
            }
          };

          image.setAttribute('src', image.getAttribute('data-src'));
          image.removeAttribute('data-src');
        },
        onLeave: function (container) {// Nothing
        },
        onCleanup: function (container) {// Nothing
        }
      },
      html: {
        checkSupport: function (el) {
          return checkType(el, 'html');
        },
        init: function (el, container) {
          var targetSelector = el.hasAttribute('href') ? el.getAttribute('href') : el.getAttribute('data-target'),
              target = document.querySelector(targetSelector);

          if (!target) {
            throw new Error('Ups, I can\'t find the target ' + targetSelector + '.');
          } // Add content to container


          container.appendChild(target); // Register type

          container.setAttribute('data-type', 'html');
        },
        onPreload: function (container) {// Nothing
        },
        onLoad: function (container) {
          var video = container.querySelector('video');

          if (video) {
            if (video.hasAttribute('data-time') && video.readyState > 0) {
              // Continue where video was stopped
              video.currentTime = video.getAttribute('data-time');
            }

            if (config.autoplayVideo) {
              // Start playback (and loading if necessary)
              video.play();
            }
          }
        },
        onLeave: function (container) {
          var video = container.querySelector('video');

          if (video) {
            if (!video.paused) {
              // Stop if video is playing
              video.pause();
            } // Backup currentTime (needed for revisit)


            if (video.readyState > 0) {
              video.setAttribute('data-time', video.currentTime);
            }
          }
        },
        onCleanup: function (container) {
          var video = container.querySelector('video');

          if (video) {
            if (video.readyState > 0 && video.readyState < 3 && video.duration !== video.currentTime) {
              // Some data has been loaded but not the whole package.
              // In order to save bandwidth, stop downloading as soon as possible.
              var clone = video.cloneNode(true);
              removeSources(video);
              video.load();
              video.parentNode.removeChild(video);
              container.appendChild(clone);
            }
          }
        }
      },
      iframe: {
        checkSupport: function (el) {
          return checkType(el, 'iframe');
        },
        init: function (el, container) {
          var iframe = document.createElement('iframe'),
              href = el.hasAttribute('href') ? el.getAttribute('href') : el.getAttribute('data-target');
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('src', '');
          iframe.setAttribute('data-src', href); // Add iframe to container

          container.appendChild(iframe); // Register type

          container.setAttribute('data-type', 'iframe');
        },
        onPreload: function (container) {// Nothing
        },
        onLoad: function (container) {
          var iframe = container.querySelector('iframe');
          iframe.setAttribute('src', iframe.getAttribute('data-src'));
        },
        onLeave: function (container) {// Nothing
        },
        onCleanup: function (container) {// Nothing
        }
      },
      youtube: {
        checkSupport: function (el) {
          return checkType(el, 'youtube');
        },
        init: function (el, container) {
          var iframePlaceholder = document.createElement('div'); // Add iframePlaceholder to container

          container.appendChild(iframePlaceholder);
          player[playerId] = new window.YT.Player(iframePlaceholder, {
            host: 'https://www.youtube-nocookie.com',
            height: el.getAttribute('data-height') || '360',
            width: el.getAttribute('data-width') || '640',
            videoId: el.getAttribute('data-id'),
            playerVars: {
              'controls': el.getAttribute('data-controls') || 1,
              'rel': 0,
              'playsinline': 1
            }
          }); // Set player ID

          container.setAttribute('data-player', playerId); // Register type

          container.setAttribute('data-type', 'youtube');
          playerId++;
        },
        onPreload: function (container) {// Nothing
        },
        onLoad: function (container) {
          if (config.autoplayVideo && typeof (player[container.getAttribute('data-player')] === 'function')) {
            player[container.getAttribute('data-player')].playVideo();
          }
        },
        onLeave: function (container) {
          if (player[container.getAttribute('data-player')].getPlayerState() === 1 && typeof (player[container.getAttribute('data-player')] === 'function')) {
            player[container.getAttribute('data-player')].pauseVideo();
          }
        },
        onCleanup: function (container) {
          if (player[container.getAttribute('data-player')].getPlayerState() === 1 && typeof (player[container.getAttribute('data-player')] === 'function')) {
            player[container.getAttribute('data-player')].pauseVideo();
          }
        }
      }
      /**
       * Init
       *
       */

    };

    var init = function init(userOptions) {
      // Merge user options into defaults
      config = mergeOptions(userOptions); // Transform property supported by client

      transformProperty = transformSupport(); // Check if the lightbox already exists

      if (!lightbox) {
        // Create the lightbox
        createLightbox();
      } // Get a list of all elements within the document


      var els = document.querySelectorAll(config.selector);

      if (!els) {
        throw new Error('Ups, I can\'t find the selector ' + config.selector + '.');
      } // Execute a few things once per element


      Array.prototype.forEach.call(els, function (el) {
        checkDependencies(el);
      });
    };
    /**
     * Check dependencies
     *
     * @param {HTMLElement} el - Element to add
     */


    var checkDependencies = function checkDependencies(el) {
      // Check if there is a YouTube video and if the YouTube iframe-API is ready
      if (document.querySelector('[data-type="youtube"]') !== null && document.getElementById('iframe_api') === null) {
        if (waitingEls.indexOf(el) === -1) {
          waitingEls.push(el);
        }

        window.onYouTubePlayerAPIReady = function () {
          Array.prototype.forEach.call(waitingEls, function (waitingEl) {
            add(waitingEl);
          });
          isYouTubeDependencieLoaded = true;
        };
      } else {
        add(el);
      }
    };
    /**
     * Add element
     *
     * @param {HTMLElement} el - Element to add
     * @param {function} callback - Optional callback to call after add
     */


    var add = function add(el, callback) {
      // Check if element already exists
      if (gallery.indexOf(el) === -1) {
        gallery.push(el);
        elementsLength++; // Set zoom icon if necessary

        if (config.zoom && el.querySelector('img')) {
          var tobiZoom = document.createElement('div');
          tobiZoom.className = 'tobi-zoom__icon';
          tobiZoom.innerHTML = config.zoomText;
          el.classList.add('tobi-zoom');
          el.appendChild(tobiZoom);
        } // Bind click event handler


        el.addEventListener('click', function (event) {
          event.preventDefault();
          open(gallery.indexOf(this));
        }); // Create the slide

        createLightboxSlide(el);

        if (isOpen()) {
          recheckConfig();
          updateLightbox();
        }

        if (callback) {
          callback.call(this);
        }
      } else {
        throw new Error('Ups, element already added to the lightbox.');
      }
    };
    /**
     * Create the lightbox
     *
     */


    var createLightbox = function createLightbox() {
      // Create lightbox container
      lightbox = document.createElement('div');
      lightbox.setAttribute('role', 'dialog');
      lightbox.setAttribute('aria-hidden', 'true');
      lightbox.className = 'tobi tobi--theme-' + config.theme; // Create slider container

      slider = document.createElement('div');
      slider.className = 'tobi__slider';
      lightbox.appendChild(slider); // Create previous button

      prevButton = document.createElement('button');
      prevButton.className = 'tobi__prev';
      prevButton.setAttribute('type', 'button');
      prevButton.setAttribute('aria-label', config.navLabel[0]);
      prevButton.innerHTML = config.navText[0];
      lightbox.appendChild(prevButton); // Create next button

      nextButton = document.createElement('button');
      nextButton.className = 'tobi__next';
      nextButton.setAttribute('type', 'button');
      nextButton.setAttribute('aria-label', config.navLabel[1]);
      nextButton.innerHTML = config.navText[1];
      lightbox.appendChild(nextButton); // Create close button

      closeButton = document.createElement('button');
      closeButton.className = 'tobi__close';
      closeButton.setAttribute('type', 'button');
      closeButton.setAttribute('aria-label', config.closeLabel);
      closeButton.innerHTML = config.closeText;
      lightbox.appendChild(closeButton); // Create counter

      counter = document.createElement('div');
      counter.className = 'tobi__counter';
      lightbox.appendChild(counter); // Resize event using requestAnimationFrame

      browserWindow.addEventListener('resize', function () {
        if (!resizeTicking) {
          resizeTicking = true;
          browserWindow.requestAnimationFrame(function () {
            updateOffset();
            resizeTicking = false;
          });
        }
      });
      document.body.appendChild(lightbox);
    };
    /**
     * Create a lightbox slide
     *
     */


    var createLightboxSlide = function createLightboxSlide(el) {
      // Detect type
      for (var index in supportedElements) {
        if (supportedElements.hasOwnProperty(index)) {
          if (supportedElements[index].checkSupport(el)) {
            // Create slide elements
            var sliderElement = document.createElement('div'),
                sliderElementContent = document.createElement('div');
            sliderElement.className = 'tobi__slider__slide';
            sliderElement.style.position = 'absolute';
            sliderElement.style.left = x * 100 + '%';
            sliderElementContent.className = 'tobi__slider__slide__content'; // Create type elements

            supportedElements[index].init(el, sliderElementContent); // Add slide content container to slider element

            sliderElement.appendChild(sliderElementContent); // Add slider element to slider

            slider.appendChild(sliderElement);
            sliderElements.push(sliderElement);
            ++x;
            break;
          }
        }
      }
    };
    /**
     * Open the lightbox
     *
     * @param {number} index - Index to load
     * @param {function} callback - Optional callback to call after open
     */


    var open = function open(index, callback) {
      if (!isOpen() && !index) {
        index = 0;
      }

      if (isOpen()) {
        if (!index) {
          throw new Error('Ups, Tobi is aleady open.');
        }

        if (index === currentIndex) {
          throw new Error('Ups, slide ' + index + ' is already selected.');
        }
      }

      if (index === -1 || index >= elementsLength) {
        throw new Error('Ups, I can\'t find slide ' + index + '.');
      }

      if (config.hideScrollbar) {
        document.documentElement.classList.add('tobi-is-open');
        document.body.classList.add('tobi-is-open');
      }

      recheckConfig(); // Hide close if necessary

      if (!config.close) {
        closeButton.disabled = false;
        closeButton.setAttribute('aria-hidden', 'true');
      } // Save the user’s focus


      lastFocus = document.activeElement; // Set current index

      currentIndex = index; // Clear drag

      clearDrag(); // Bind events

      bindEvents(); // Load slide

      load(currentIndex); // Makes lightbox appear, too

      lightbox.setAttribute('aria-hidden', 'false'); // Update lightbox

      updateLightbox(); // Preload late

      preload(currentIndex + 1);
      preload(currentIndex - 1);

      if (callback) {
        callback.call(this);
      }
    };
    /**
     * Close the lightbox
     *
     * @param {function} callback - Optional callback to call after close
     */


    var close = function close(callback) {
      if (!isOpen()) {
        throw new Error('Tobi is already closed.');
      }

      if (config.hideScrollbar) {
        document.documentElement.classList.remove('tobi-is-open');
        document.body.classList.remove('tobi-is-open');
      } // Unbind events


      unbindEvents(); // Reenable the user’s focus

      lastFocus.focus(); // Don't forget to cleanup our current element

      var container = sliderElements[currentIndex].querySelector('.tobi__slider__slide__content');
      var type = container.getAttribute('data-type');
      supportedElements[type].onLeave(container);
      supportedElements[type].onCleanup(container);
      lightbox.setAttribute('aria-hidden', 'true'); // Reset current index

      currentIndex = 0;

      if (callback) {
        callback.call(this);
      }
    };
    /**
     * Preload slide
     *
     * @param {number} index - Index to preload
     */


    var preload = function preload(index) {
      if (sliderElements[index] === undefined) {
        return;
      }

      var container = sliderElements[index].querySelector('.tobi__slider__slide__content');
      var type = container.getAttribute('data-type');
      supportedElements[type].onPreload(container);
    };
    /**
     * Load slide
     * Will be called when opening the lightbox or moving index
     *
     * @param {number} index - Index to load
     */


    var load = function load(index) {
      if (sliderElements[index] === undefined) {
        return;
      }

      var container = sliderElements[index].querySelector('.tobi__slider__slide__content');
      var type = container.getAttribute('data-type');
      supportedElements[type].onLoad(container);
    };
    /**
     * Navigate to the previous slide
     *
     * @param {function} callback - Optional callback function
     */


    var prev = function prev(callback) {
      if (currentIndex > 0) {
        leave(currentIndex);
        load(--currentIndex);
        updateLightbox('left');
        cleanup(currentIndex + 1);
        preload(currentIndex - 1);

        if (callback) {
          callback.call(this);
        }
      }
    };
    /**
     * Navigate to the next slide
     *
     * @param {function} callback - Optional callback function
     */


    var next = function next(callback) {
      if (currentIndex < elementsLength - 1) {
        leave(currentIndex);
        load(++currentIndex);
        updateLightbox('right');
        cleanup(currentIndex - 1);
        preload(currentIndex + 1);

        if (callback) {
          callback.call(this);
        }
      }
    };
    /**
     * Leave slide
     * Will be called before moving index
     *
     * @param {number} index - Index to leave
     */


    var leave = function leave(index) {
      if (sliderElements[index] === undefined) {
        return;
      }

      var container = sliderElements[index].querySelector('.tobi__slider__slide__content');
      var type = container.getAttribute('data-type');
      supportedElements[type].onLeave(container);
    };
    /**
     * Cleanup slide
     * Will be called after moving index
     *
     * @param {number} index - Index to cleanup
     */


    var cleanup = function cleanup(index) {
      if (sliderElements[index] === undefined) {
        return;
      }

      var container = sliderElements[index].querySelector('.tobi__slider__slide__content');
      var type = container.getAttribute('data-type');
      supportedElements[type].onCleanup(container);
    };
    /**
     * Update the offset
     *
     */


    var updateOffset = function updateOffset() {
      offset = -currentIndex * window.innerWidth;
      slider.style[transformProperty] = 'translate3d(' + offset + 'px, 0, 0)';
      offsetTmp = offset;
    };
    /**
     * Update the counter
     *
     */


    var updateCounter = function updateCounter() {
      counter.textContent = currentIndex + 1 + '/' + elementsLength;
    };
    /**
     * Set the focus to the next element
     *
     * @param {string} dir - Current slide direction
     */


    var updateFocus = function updateFocus(dir) {
      var focusableEls = null;

      if (config.nav) {
        // Display the next and previous buttons
        prevButton.disabled = false;
        nextButton.disabled = false;

        if (elementsLength === 1) {
          // Hide the next and previous buttons if there is only one slide
          prevButton.disabled = true;
          nextButton.disabled = true;

          if (config.close) {
            closeButton.focus();
          }
        } else if (currentIndex === 0) {
          // Hide the previous button when the first slide is displayed
          prevButton.disabled = true;
        } else if (currentIndex === elementsLength - 1) {
          // Hide the next button when the last slide is displayed
          nextButton.disabled = true;
        }

        if (!dir && !nextButton.disabled) {
          nextButton.focus();
        } else if (!dir && nextButton.disabled && !prevButton.disabled) {
          prevButton.focus();
        } else if (!nextButton.disabled && dir === 'right') {
          nextButton.focus();
        } else if (nextButton.disabled && dir === 'right' && !prevButton.disabled) {
          prevButton.focus();
        } else if (!prevButton.disabled && dir === 'left') {
          prevButton.focus();
        } else if (prevButton.disabled && dir === 'left' && !nextButton.disabled) {
          nextButton.focus();
        }
      } else if (config.close) {
        closeButton.focus();
      }

      focusableEls = lightbox.querySelectorAll('button:not(:disabled)');
      firstFocusableEl = focusableEls[0];
      lastFocusableEl = focusableEls.length === 1 ? focusableEls[0] : focusableEls[focusableEls.length - 1];
    };
    /**
     * Clear drag after touchend and mousup event
     *
     */


    var clearDrag = function clearDrag() {
      drag = {
        startX: 0,
        endX: 0,
        startY: 0,
        endY: 0
      };
    };
    /**
     * Recalculate drag / swipe event
     *
     */


    var updateAfterDrag = function updateAfterDrag() {
      var movementX = drag.endX - drag.startX,
          movementY = drag.endY - drag.startY,
          movementXDistance = Math.abs(movementX),
          movementYDistance = Math.abs(movementY);

      if (movementX > 0 && movementXDistance > config.threshold && currentIndex > 0) {
        prev();
      } else if (movementX < 0 && movementXDistance > config.threshold && currentIndex !== elementsLength - 1) {
        next();
      } else if (movementY < 0 && movementYDistance > config.threshold && config.swipeClose) {
        close();
      } else {
        updateOffset();
      }
    };
    /**
     * Click event handler
     *
     */


    var clickHandler = function clickHandler(event) {
      if (event.target === prevButton) {
        prev();
      } else if (event.target === nextButton) {
        next();
      } else if (event.target === closeButton || event.target.className === 'tobi__slider__slide' && config.docClose) {
        close();
      }

      event.stopPropagation();
    };
    /**
     * Keydown event handler
     *
     */


    var keydownHandler = function keydownHandler(event) {
      if (event.keyCode === 9) {
        // `TAB` Key: Navigate to the next/previous focusable element
        if (event.shiftKey) {
          // Step backwards in the tab-order
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            event.preventDefault();
          }
        } else {
          // Step forward in the tab-order
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            event.preventDefault();
          }
        }
      } else if (event.keyCode === 27) {
        // `ESC` Key: Close the lightbox
        event.preventDefault();
        close();
      } else if (event.keyCode === 37) {
        // `PREV` Key: Navigate to the previous slide
        event.preventDefault();
        prev();
      } else if (event.keyCode === 39) {
        // `NEXT` Key: Navigate to the next slide
        event.preventDefault();
        next();
      }
    };
    /**
     * Touchstart event handler
     *
     */


    var touchstartHandler = function touchstartHandler(event) {
      // Prevent dragging / swiping on textareas inputs and selects
      if (isIgnoreElement(event.target)) {
        return;
      }

      event.stopPropagation();
      pointerDown = true;
      drag.startX = event.touches[0].pageX;
      drag.startY = event.touches[0].pageY;
      slider.classList.add('tobi__slider--is-dragging');
    };
    /**
     * Touchmove event handler
     *
     */


    var touchmoveHandler = function touchmoveHandler(event) {
      event.stopPropagation();

      if (pointerDown) {
        event.preventDefault();
        drag.endX = event.touches[0].pageX;
        drag.endY = event.touches[0].pageY;
        doSwipe();
      }
    };
    /**
     * Touchend event handler
     *
     */


    var touchendHandler = function touchendHandler(event) {
      event.stopPropagation();
      pointerDown = false;
      slider.classList.remove('tobi__slider--is-dragging');

      if (drag.endX) {
        isDraggingX = false;
        isDraggingY = false;
        updateAfterDrag();
      }

      clearDrag();
    };
    /**
     * Mousedown event handler
     *
     */


    var mousedownHandler = function mousedownHandler(event) {
      // Prevent dragging / swiping on textareas inputs and selects
      if (isIgnoreElement(event.target)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      pointerDown = true;
      drag.startX = event.pageX;
      drag.startY = event.pageY;
      slider.classList.add('tobi__slider--is-dragging');
    };
    /**
     * Mousemove event handler
     *
     */


    var mousemoveHandler = function mousemoveHandler(event) {
      event.preventDefault();

      if (pointerDown) {
        drag.endX = event.pageX;
        drag.endY = event.pageY;
        doSwipe();
      }
    };
    /**
     * Mouseup event handler
     *
     */


    var mouseupHandler = function mouseupHandler(event) {
      event.stopPropagation();
      pointerDown = false;
      slider.classList.remove('tobi__slider--is-dragging');

      if (drag.endX) {
        isDraggingX = false;
        isDraggingY = false;
        updateAfterDrag();
      }

      clearDrag();
    };
    /**
     * Decide whether to do horizontal of vertical swipe
     *
     */


    var doSwipe = function doSwipe() {
      if (Math.abs(drag.startX - drag.endX) > 0 && !isDraggingY && config.swipeClose) {
        // Horizontal swipe
        slider.style[transformProperty] = 'translate3d(' + (offsetTmp - Math.round(drag.startX - drag.endX)) + 'px, 0, 0)';
        isDraggingX = true;
        isDraggingY = false;
      } else if (Math.abs(drag.startY - drag.endY) > 0 && !isDraggingX) {
        // Vertical swipe
        slider.style[transformProperty] = 'translate3d(' + (offsetTmp + 'px, -' + Math.round(drag.startY - drag.endY)) + 'px, 0)';
        isDraggingX = false;
        isDraggingY = true;
      }
    };
    /**
     * Bind events
     *
     */


    var bindEvents = function bindEvents() {
      if (config.keyboard) {
        document.addEventListener('keydown', keydownHandler);
      } // Click event


      lightbox.addEventListener('click', clickHandler);

      if (config.draggable) {
        if (isTouchDevice()) {
          // Touch events
          lightbox.addEventListener('touchstart', touchstartHandler);
          lightbox.addEventListener('touchmove', touchmoveHandler);
          lightbox.addEventListener('touchend', touchendHandler);
        } // Mouse events


        lightbox.addEventListener('mousedown', mousedownHandler);
        lightbox.addEventListener('mouseup', mouseupHandler);
        lightbox.addEventListener('mousemove', mousemoveHandler);
      }
    };
    /**
     * Unbind events
     *
     */


    var unbindEvents = function unbindEvents() {
      if (config.keyboard) {
        document.removeEventListener('keydown', keydownHandler);
      } // Click event


      lightbox.removeEventListener('click', clickHandler);

      if (config.draggable) {
        if (isTouchDevice()) {
          // Touch events
          lightbox.removeEventListener('touchstart', touchstartHandler);
          lightbox.removeEventListener('touchmove', touchmoveHandler);
          lightbox.removeEventListener('touchend', touchendHandler);
        } // Mouse events


        lightbox.removeEventListener('mousedown', mousedownHandler);
        lightbox.removeEventListener('mouseup', mouseupHandler);
        lightbox.removeEventListener('mousemove', mousemoveHandler);
      }
    };
    /**
     * Checks whether element has requested data-type value
     *
     */


    var checkType = function checkType(el, type) {
      return el.getAttribute('data-type') === type;
    };
    /**
     * Remove all `src` attributes
     *
     * @param {HTMLElement} el - Element to remove all `src` attributes
     */


    var removeSources = function setVideoSources(el) {
      var sources = el.querySelectorAll('src');

      if (sources) {
        Array.prototype.forEach.call(sources, function (source) {
          source.setAttribute('src', '');
        });
      }
    };
    /**
     * Update Config
     *
     */


    var recheckConfig = function recheckConfig() {
      if (config.draggable && elementsLength > 1 && !slider.classList.contains('tobi__slider--is-draggable')) {
        slider.classList.add('tobi__slider--is-draggable');
      } // Hide buttons if necessary


      if (!config.nav || elementsLength === 1 || config.nav === 'auto' && isTouchDevice()) {
        prevButton.setAttribute('aria-hidden', 'true');
        nextButton.setAttribute('aria-hidden', 'true');
      } else {
        prevButton.setAttribute('aria-hidden', 'false');
        nextButton.setAttribute('aria-hidden', 'false');
      } // Hide counter if necessary


      if (!config.counter || elementsLength === 1) {
        counter.setAttribute('aria-hidden', 'true');
      } else {
        counter.setAttribute('aria-hidden', 'false');
      }
    };
    /**
     * Update lightbox
     *
     * @param {string} dir - Current slide direction
     */


    var updateLightbox = function updateLightbox(dir) {
      updateOffset();
      updateCounter();
      updateFocus(dir);
    };
    /**
     * Reset the lightbox
     *
     * @param {function} callback - Optional callback to call after reset
     */


    var reset = function reset(callback) {
      if (slider) {
        while (slider.firstChild) {
          slider.removeChild(slider.firstChild);
        }
      }

      gallery.length = sliderElements.length = elementsLength = figcaptionId = x = 0;

      if (callback) {
        callback.call(this);
      }
    };
    /**
     * Check if the lightbox is open
     *
     */


    var isOpen = function isOpen() {
      return lightbox.getAttribute('aria-hidden') === 'false';
    };
    /**
     * Detect whether device is touch capable
     *
     */


    var isTouchDevice = function isTouchDevice() {
      return 'ontouchstart' in window;
    };
    /**
     * Checks whether element's nodeName is part of array
     *
     */


    var isIgnoreElement = function isIgnoreElement(el) {
      return ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf(el.nodeName) !== -1 || el === prevButton || el === nextButton || el === closeButton || elementsLength === 1;
    };
    /**
     * Return current index
     *
     */


    var currentSlide = function currentSlide() {
      return currentIndex;
    };

    init(userOptions);
    return {
      open: open,
      prev: prev,
      next: next,
      close: close,
      add: checkDependencies,
      reset: reset,
      isOpen: isOpen,
      currentSlide: currentSlide
    };
  };

  return Tobi;
});

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict'; // polyfill

  function polyfill() {
    // aliases
    var w = window;
    var d = document; // return if scroll behavior is supported and polyfill is not forced

    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    } // globals


    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468; // object gathering original scroll methods

    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    }; // define timing method

    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */

    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }
    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */


    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */

    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }
    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */


    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */


    function shouldBailOut(firstArg) {
      if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      } // throw error when behavior is not supported


      throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
    }
    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */


    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }
    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */


    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
      return overflowValue === 'auto' || overflowValue === 'scroll';
    }
    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */


    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
      return isScrollableY || isScrollableX;
    }
    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */


    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }
    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */


    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

      elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

      value = ease(elapsed);
      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;
      context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }
    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */


    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now(); // define scroll context

      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      } // scroll looping over a frame


      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    } // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo


    w.scroll = w.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
    }; // w.scrollBy


    w.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    }; // Element.prototype.scroll and Element.prototype.scrollTo


    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

      smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    }; // Element.prototype.scrollBy


    Element.prototype.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    }; // Element.prototype.scrollIntoView


    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = {
      polyfill: polyfill
    };
  } else {}
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navigation */ "./src/js/navigation.js");
/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/skip-link-focus-fix */ "./src/js/skip-link-focus-fix.js");
/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rqrauhvmra_tobi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rqrauhvmra__tobi */ "./node_modules/rqrauhvmra__tobi/js/tobi.js");
/* harmony import */ var rqrauhvmra_tobi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rqrauhvmra_tobi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rqrauhvmra_tobi_css_tobi_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rqrauhvmra__tobi/css/tobi.min.css */ "./node_modules/rqrauhvmra__tobi/css/tobi.min.css");
/* harmony import */ var rqrauhvmra_tobi_css_tobi_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rqrauhvmra_tobi_css_tobi_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_8__);




aos__WEBPACK_IMPORTED_MODULE_3___default.a.init({
  once: true,
  offset: -100
});

 // kick off the polyfill!

smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default.a.polyfill();




__webpack_require__(/*! css.escape */ "./node_modules/css.escape/css.escape.js");

function offset(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

var musicButton = document.querySelector('.music-button');
musicButton.addEventListener('click', function (event) {
  this.classList.toggle('active');
  setTimeout(function () {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': offset(musicButton).top
    });
  }, 400);
});

window.onload = function () {
  if (document.getElementById('iframe_api') === null) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = 'iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  var videos = document.querySelectorAll('.video-player_wrap');

  if (videos.length) {
    var onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
      videos.forEach(function (vid) {
        var theUrl = vid.getAttribute('data-video-url');
        var playerId = vid.getAttribute('data-player-id');

        function getId(url) {
          var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
          var match = url.match(regExp);
          return match && match[1].length == 11 ? match[1] : false;
        }

        console.log(playerId);
        var player;
        player = new YT.Player(playerId, {
          width: '1080',
          height: '720',
          videoId: getId(theUrl),
          playerVars: {
            'autoplay': 1,
            'playsinline': 1,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'enablejsapi': 1,
            'wmode': 'transparent'
          },
          events: {
            'onReady': pkOnPlayerReady,
            'onStateChange': pkOnPlayerStateChange
          }
        });

        function pkOnPlayerStateChange(e) {
          e.target.mute();
          player.mute();

          if (e.data === YT.PlayerState.ENDED) {
            player.playVideo();
            player.mute();
            e.target.mute();
          }

          if (e.data === YT.PlayerState.BUFFERING) {
            e.target.setPlaybackQuality('hd720');
            e.target.mute();
            player.mute();
          }
        }

        function pkOnPlayerReady(event) {
          event.target.setPlaybackQuality('hd720');
          event.target.mute();
          player.mute();
          setTimeout(function () {
            player.mute();
            console.log(player.isMuted());
            vid.classList.add('loaded');
            event.target.mute();
          }, 800);
        }
      });
      var tobi = new rqrauhvmra_tobi__WEBPACK_IMPORTED_MODULE_4___default.a({
        autoplayVideo: true,
        isYouTubeDependencieLoaded: true
      });
    };

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }
};

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key navigation support for dropdown menus.
 */
(function () {
  var container, button, menu, links, i, len;
  container = document.getElementById('site-navigation');

  if (!container) {
    return;
  }

  button = container.querySelector('button'); // querySelector will automatically return the first match.

  if ('undefined' === typeof button) {
    return;
  }

  menu = container.querySelector('ul'); // Hide menu toggle button if menu is empty and return early.

  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');

  if (!menu.classList.contains('nav-menu')) {
    menu.classList.add('nav-menu');
  }

  button.onclick = function () {
    if (container.classList.contains('toggled')) {
      container.classList.remove('toggled');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.classList.add('toggled');
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  }; // Get all the link elements within the menu.


  links = menu.querySelectorAll('a'); // Each time a menu link is focused or blurred, toggle focus.

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var link = _step.value;
      link.addEventListener('focus', toggleFocus, true);
      link.addEventListener('blur', toggleFocus, true);
    }
    /**
     * Sets or removes .focus class on an element.
     */

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function toggleFocus() {
    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

    while (!self.classList.contains('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('LI' === self.tagName) {
        if (self.classList.contains('focus')) {
          self.classList.remove('focus');
        } else {
          self.classList.add('focus');
        }
      }

      self = (_readOnlyError("self"), self.parentElement);
    }
  }
  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */


  (function (container) {
    var _this = this;

    var parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
    var touchStartFn, i;

    if ('ontouchstart' in window) {
      touchStartFn = function touchStartFn(e) {
        var menuItem = _this.parentNode;
        var i;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();

          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }

            menuItem.parentNode.children[i].classList.remove('focus');
          }

          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = parentLink[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var child = _step2.value;
          child.addEventListener('touchstart', touchStartFn, false);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  })(container);
})();

/***/ }),

/***/ "./src/js/skip-link-focus-fix.js":
/*!***************************************!*\
  !*** ./src/js/skip-link-focus-fix.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1),
          element;

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=frontend-bundle.js.map