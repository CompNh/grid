import P, { useRef as Ae, useEffect as Le, useState as De, useReducer as qe } from "react";
var X = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Xe() {
  if (Se) return U;
  Se = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(n, a, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      s = {};
      for (var i in a)
        i !== "key" && (s[i] = a[i]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: n,
      key: d,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return U.Fragment = r, U.jsx = l, U.jsxs = l, U;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Ze() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === Be ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case K:
          return "Fragment";
        case M:
          return "Portal";
        case v:
          return "Profiler";
        case y:
          return "StrictMode";
        case ne:
          return "Suspense";
        case re:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case H:
            return (t.displayName || "Context") + ".Provider";
          case L:
            return (t._context.displayName || "Context") + ".Consumer";
          case te:
            var c = t.render;
            return t = t.displayName, t || (t = c.displayName || c.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case le:
            return c = t.displayName || null, c !== null ? c : e(t.type) || "Memo";
          case ae:
            c = t._payload, t = t._init;
            try {
              return e(t(c));
            } catch {
            }
        }
      return null;
    }
    function r(t) {
      return "" + t;
    }
    function l(t) {
      try {
        r(t);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var u = c.error, E = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), r(t);
      }
    }
    function n() {
    }
    function a() {
      if (W === 0) {
        pe = console.log, he = console.info, ye = console.warn, Ee = console.error, me = console.group, xe = console.groupCollapsed, ve = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      W++;
    }
    function s() {
      if (W--, W === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: F({}, t, { value: pe }),
          info: F({}, t, { value: he }),
          warn: F({}, t, { value: ye }),
          error: F({}, t, { value: Ee }),
          group: F({}, t, { value: me }),
          groupCollapsed: F({}, t, { value: xe }),
          groupEnd: F({}, t, { value: ve })
        });
      }
      0 > W && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function d(t) {
      if (ie === void 0)
        try {
          throw Error();
        } catch (u) {
          var c = u.stack.trim().match(/\n( *(at )?)/);
          ie = c && c[1] || "", be = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ie + t + be;
    }
    function i(t, c) {
      if (!t || se) return "";
      var u = ce.get(t);
      if (u !== void 0) return u;
      se = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var E = null;
      E = $.H, $.H = null, a();
      try {
        var S = {
          DetermineComponentFrameRoot: function() {
            try {
              if (c) {
                var I = function() {
                  throw Error();
                };
                if (Object.defineProperty(I.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(I, []);
                  } catch (G) {
                    var q = G;
                  }
                  Reflect.construct(t, [], I);
                } else {
                  try {
                    I.call();
                  } catch (G) {
                    q = G;
                  }
                  t.call(I.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (G) {
                  q = G;
                }
                (I = t()) && typeof I.catch == "function" && I.catch(function() {
                });
              }
            } catch (G) {
              if (G && q && typeof G.stack == "string")
                return [G.stack, q.stack];
            }
            return [null, null];
          }
        };
        S.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var b = Object.getOwnPropertyDescriptor(
          S.DetermineComponentFrameRoot,
          "name"
        );
        b && b.configurable && Object.defineProperty(
          S.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var h = S.DetermineComponentFrameRoot(), D = h[0], V = h[1];
        if (D && V) {
          var T = D.split(`
`), Y = V.split(`
`);
          for (h = b = 0; b < T.length && !T[b].includes(
            "DetermineComponentFrameRoot"
          ); )
            b++;
          for (; h < Y.length && !Y[h].includes(
            "DetermineComponentFrameRoot"
          ); )
            h++;
          if (b === T.length || h === Y.length)
            for (b = T.length - 1, h = Y.length - 1; 1 <= b && 0 <= h && T[b] !== Y[h]; )
              h--;
          for (; 1 <= b && 0 <= h; b--, h--)
            if (T[b] !== Y[h]) {
              if (b !== 1 || h !== 1)
                do
                  if (b--, h--, 0 > h || T[b] !== Y[h]) {
                    var B = `
` + T[b].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), typeof t == "function" && ce.set(t, B), B;
                  }
                while (1 <= b && 0 <= h);
              break;
            }
        }
      } finally {
        se = !1, $.H = E, s(), Error.prepareStackTrace = u;
      }
      return T = (T = t ? t.displayName || t.name : "") ? d(T) : "", typeof t == "function" && ce.set(t, T), T;
    }
    function p(t) {
      if (t == null) return "";
      if (typeof t == "function") {
        var c = t.prototype;
        return i(
          t,
          !(!c || !c.isReactComponent)
        );
      }
      if (typeof t == "string") return d(t);
      switch (t) {
        case ne:
          return d("Suspense");
        case re:
          return d("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case te:
            return t = i(t.render, !1), t;
          case le:
            return p(t.type);
          case ae:
            c = t._payload, t = t._init;
            try {
              return p(t(c));
            } catch {
            }
        }
      return "";
    }
    function w() {
      var t = $.A;
      return t === null ? null : t.getOwner();
    }
    function m(t) {
      if (ge.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function j(t, c) {
      function u() {
        we || (we = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: u,
        configurable: !0
      });
    }
    function k() {
      var t = e(this.type);
      return Ce[t] || (Ce[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function g(t, c, u, E, S, b) {
      return u = b.ref, t = {
        $$typeof: N,
        type: t,
        key: c,
        props: b,
        _owner: S
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: k
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function f(t, c, u, E, S, b) {
      if (typeof t == "string" || typeof t == "function" || t === K || t === v || t === y || t === ne || t === re || t === We || typeof t == "object" && t !== null && (t.$$typeof === ae || t.$$typeof === le || t.$$typeof === H || t.$$typeof === L || t.$$typeof === te || t.$$typeof === Ue || t.getModuleId !== void 0)) {
        var h = c.children;
        if (h !== void 0)
          if (E)
            if (oe(h)) {
              for (E = 0; E < h.length; E++)
                x(h[E], t);
              Object.freeze && Object.freeze(h);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else x(h, t);
      } else
        h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? E = "null" : oe(t) ? E = "array" : t !== void 0 && t.$$typeof === N ? (E = "<" + (e(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          E,
          h
        );
      if (ge.call(c, "key")) {
        h = e(t);
        var D = Object.keys(c).filter(function(T) {
          return T !== "key";
        });
        E = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", je[h + E] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          h,
          D,
          h
        ), je[h + E] = !0);
      }
      if (h = null, u !== void 0 && (l(u), h = "" + u), m(c) && (l(c.key), h = "" + c.key), "key" in c) {
        u = {};
        for (var V in c)
          V !== "key" && (u[V] = c[V]);
      } else u = c;
      return h && j(
        u,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), g(t, h, b, S, w(), u);
    }
    function x(t, c) {
      if (typeof t == "object" && t && t.$$typeof !== Je) {
        if (oe(t))
          for (var u = 0; u < t.length; u++) {
            var E = t[u];
            _(E) && O(E, c);
          }
        else if (_(t))
          t._store && (t._store.validated = 1);
        else if (t === null || typeof t != "object" ? u = null : (u = fe && t[fe] || t["@@iterator"], u = typeof u == "function" ? u : null), typeof u == "function" && u !== t.entries && (u = u.call(t), u !== t))
          for (; !(t = u.next()).done; )
            _(t.value) && O(t.value, c);
      }
    }
    function _(t) {
      return typeof t == "object" && t !== null && t.$$typeof === N;
    }
    function O(t, c) {
      if (t._store && !t._store.validated && t.key == null && (t._store.validated = 1, c = C(c), !_e[c])) {
        _e[c] = !0;
        var u = "";
        t && t._owner != null && t._owner !== w() && (u = null, typeof t._owner.tag == "number" ? u = e(t._owner.type) : typeof t._owner.name == "string" && (u = t._owner.name), u = " It was passed a child from " + u + ".");
        var E = $.getCurrentStack;
        $.getCurrentStack = function() {
          var S = p(t.type);
          return E && (S += E() || ""), S;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          c,
          u
        ), $.getCurrentStack = E;
      }
    }
    function C(t) {
      var c = "", u = w();
      return u && (u = e(u.type)) && (c = `

Check the render method of \`` + u + "`."), c || (t = e(t)) && (c = `

Check the top-level render call using <` + t + ">."), c;
    }
    var R = P, N = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), H = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), We = Symbol.for("react.offscreen"), fe = Symbol.iterator, Be = Symbol.for("react.client.reference"), $ = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = Object.prototype.hasOwnProperty, F = Object.assign, Ue = Symbol.for("react.client.reference"), oe = Array.isArray, W = 0, pe, he, ye, Ee, me, xe, ve;
    n.__reactDisabledLog = !0;
    var ie, be, se = !1, ce = new (typeof WeakMap == "function" ? WeakMap : Map)(), Je = Symbol.for("react.client.reference"), we, Ce = {}, je = {}, _e = {};
    J.Fragment = K, J.jsx = function(t, c, u, E, S) {
      return f(t, c, u, !1, E, S);
    }, J.jsxs = function(t, c, u, E, S) {
      return f(t, c, u, !0, E, S);
    };
  }()), J;
}
var Te;
function Qe() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? X.exports = Xe() : X.exports = Ze()), X.exports;
}
var o = Qe(), Ge = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ke = P.createContext && /* @__PURE__ */ P.createContext(Ge), et = ["attr", "size", "title"];
function tt(e, r) {
  if (e == null) return {};
  var l = nt(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      n = s[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
  }
  return l;
}
function nt(e, r) {
  if (e == null) return {};
  var l = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0) continue;
      l[n] = e[n];
    }
  return l;
}
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var l = arguments[r];
      for (var n in l)
        Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    }
    return e;
  }, Z.apply(this, arguments);
}
function Oe(e, r) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), l.push.apply(l, n);
  }
  return l;
}
function Q(e) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Oe(Object(l), !0).forEach(function(n) {
      rt(e, n, l[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : Oe(Object(l)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(l, n));
    });
  }
  return e;
}
function rt(e, r, l) {
  return r = lt(r), r in e ? Object.defineProperty(e, r, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = l, e;
}
function lt(e) {
  var r = at(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function at(e, r) {
  if (typeof e != "object" || !e) return e;
  var l = e[Symbol.toPrimitive];
  if (l !== void 0) {
    var n = l.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function ze(e) {
  return e && e.map((r, l) => /* @__PURE__ */ P.createElement(r.tag, Q({
    key: l
  }, r.attr), ze(r.child)));
}
function A(e) {
  return (r) => /* @__PURE__ */ P.createElement(ot, Z({
    attr: Q({}, e.attr)
  }, r), ze(e.child));
}
function ot(e) {
  var r = (l) => {
    var {
      attr: n,
      size: a,
      title: s
    } = e, d = tt(e, et), i = a || l.size || "1em", p;
    return l.className && (p = l.className), e.className && (p = (p ? p + " " : "") + e.className), /* @__PURE__ */ P.createElement("svg", Z({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, n, d, {
      className: p,
      style: Q(Q({
        color: e.color || l.color
      }, l.style), e.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ P.createElement("title", null, s), e.children);
  };
  return ke !== void 0 ? /* @__PURE__ */ P.createElement(ke.Consumer, null, (l) => r(l)) : r(Ge);
}
function Pe(e) {
  return A({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(e);
}
function it(e) {
  return A({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(e);
}
function st(e) {
  return A({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(e);
}
function Me(e) {
  return A({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function Ie(e) {
  return A({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(e);
}
function Ke(e) {
  return A({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" }, child: [] }] })(e);
}
function $e(e) {
  return A({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function Fe(e) {
  return A({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function ue(e) {
  return A({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
function Ye(e) {
  return A({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }, child: [] }] })(e);
}
const ct = ({
  menuPosition: e,
  options: r,
  onClose: l,
  reducer: n
}) => {
  var d, i, p, w, m, j, k;
  const a = Ae(null);
  if (Le(() => {
    const g = (f) => {
      a.current && !a.current.contains(f.target) && l();
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [l]), !e || !r) return null;
  const s = [
    r.sortable && e.column.sortable && {
      label: ((d = r.contextMenuLabels) == null ? void 0 : d.sortAsc) || "오름차순 정렬",
      icon: /* @__PURE__ */ o.jsx(Fe, { style: { color: "#2563EB", fontSize: "14px" } }),
      // ✅ text-blue-600
      onClick: () => n == null ? void 0 : n.setSort(e.column.key, "asc")
    },
    r.sortable && e.column.sortable && {
      label: ((i = r.contextMenuLabels) == null ? void 0 : i.sortDesc) || "내림차순 정렬",
      icon: /* @__PURE__ */ o.jsx($e, { style: { color: "#2563EB", fontSize: "14px" } }),
      // ✅ text-blue-600
      onClick: () => n == null ? void 0 : n.setSort(e.column.key, "desc")
    },
    r.sortable && e.column.sortable && {
      label: ((p = r.contextMenuLabels) == null ? void 0 : p.clearSort) || "정렬 해제",
      icon: /* @__PURE__ */ o.jsx(ue, { style: { color: "#DC2626", fontSize: "14px" } }),
      // ✅ text-red-600
      onClick: () => n == null ? void 0 : n.setSort(e.column.key, null)
    },
    r.sortable && e.column.sortable && (r.grouping || r.filterable) && { divider: !0 },
    r.grouping && {
      label: ((w = r.contextMenuLabels) == null ? void 0 : w.group) || "그룹화",
      icon: /* @__PURE__ */ o.jsx(Ke, { style: { color: "#16A34A", fontSize: "14px" } }),
      // ✅ text-green-600
      onClick: () => n == null ? void 0 : n.setGroup(e.column.key)
    },
    r.grouping && {
      label: ((m = r.contextMenuLabels) == null ? void 0 : m.ungroup) || "그룹 해제",
      icon: /* @__PURE__ */ o.jsx(ue, { style: { color: "#DC2626", fontSize: "14px" } }),
      // ✅ text-red-600
      onClick: () => n == null ? void 0 : n.removeGroup(e.column.key)
    },
    (r.grouping || r.sortable) && r.filterable && e.column.filterable && { divider: !0 },
    r.filterable && e.column.filterable && {
      label: ((j = r.contextMenuLabels) == null ? void 0 : j.filter) || "필터",
      icon: /* @__PURE__ */ o.jsx(Ie, { style: { color: "#D97706", fontSize: "14px" } }),
      // ✅ text-amber-500
      onClick: () => n == null ? void 0 : n.setFilter({ [e.column.key]: "" })
    },
    r.filterable && e.column.filterable && {
      label: ((k = r.contextMenuLabels) == null ? void 0 : k.clearFilter) || "필터 해제",
      icon: /* @__PURE__ */ o.jsx(ue, { style: { color: "#DC2626", fontSize: "14px" } }),
      // ✅ text-red-600
      onClick: () => n == null ? void 0 : n.clearFilter(e.column.key)
    }
  ].filter(Boolean);
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: a,
      className: "nh-context-menu",
      style: {
        top: `${e.y}px`,
        left: `${e.x}px`
      },
      children: /* @__PURE__ */ o.jsx("ul", { className: "nh-context-menu-list", children: s.map(
        (g, f) => g.divider ? /* @__PURE__ */ o.jsx("hr", { className: "nh-context-divider" }, `divider-${f}`) : /* @__PURE__ */ o.jsxs(
          "li",
          {
            className: `nh-context-item ${g.disabled ? "nh-context-disabled" : ""}`,
            onClick: () => {
              !g.disabled && g.onClick && g.onClick(), l();
            },
            children: [
              g.icon && /* @__PURE__ */ o.jsx("span", { className: "nh-context-icon", children: g.icon }),
              /* @__PURE__ */ o.jsx("span", { children: g.label })
            ]
          },
          f
        )
      ) })
    }
  );
}, ut = ({
  columns: e,
  showRowNumCol: r,
  showRowCheckboxCol: l,
  options: n,
  reducer: a,
  editedRows: s
}) => {
  const [d, i] = De(null), { filters: p, sortedColumn: w, sortDirection: m, group: j } = a.state, k = (f, x) => {
    f.preventDefault(), n && i({ x: f.clientX, y: f.clientY, column: x });
  }, g = () => i(null);
  return console.log(s), /* @__PURE__ */ o.jsxs("thead", { className: "nh-grid-header", children: [
    /* @__PURE__ */ o.jsxs("tr", { className: "nh-grid-header-row", children: [
      s && Object.keys(s).length > 0 && /* @__PURE__ */ o.jsx("th", { className: "nh-grid-header-cell nh-action-header", children: /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center" }, children: [
        /* @__PURE__ */ o.jsx("button", { className: "nh-btn nh-btn-apply", onClick: a.applyAllChanges, children: /* @__PURE__ */ o.jsx(Pe, {}) }),
        /* @__PURE__ */ o.jsx("button", { className: "nh-btn nh-btn-reset", onClick: a.resetAllChanges, children: /* @__PURE__ */ o.jsx(Ye, {}) })
      ] }) }),
      r && /* @__PURE__ */ o.jsx("th", { className: "nh-grid-header-cell", children: "No." }),
      l && /* @__PURE__ */ o.jsx("th", { className: "nh-grid-header-cell", children: "✔" }),
      e.map((f) => {
        var x;
        return /* @__PURE__ */ o.jsx(
          "th",
          {
            className: `nh-grid-header-cell ${f.sticky === "left" ? "sticky-left" : ""} ${f.sticky === "right" ? "sticky-right" : ""}`,
            style: { width: f.width ? `${f.width}px` : "auto", textAlign: f.align || "left" },
            title: f.tooltip,
            onContextMenu: (_) => k(_, f),
            children: /* @__PURE__ */ o.jsxs("div", { className: "nh-grid-header-content", children: [
              /* @__PURE__ */ o.jsx("span", { children: f.label }),
              f.sortable && w === f.key && m !== null && (m === "asc" ? /* @__PURE__ */ o.jsx(Fe, { style: { color: "#2563EB", fontSize: "14px" } }) : /* @__PURE__ */ o.jsx($e, { style: { color: "#2563EB", fontSize: "14px" } })),
              ((x = j.column) == null ? void 0 : x.includes(f.key)) && /* @__PURE__ */ o.jsx(Ke, { style: { color: "#16A34A", fontSize: "14px" } }),
              (n == null ? void 0 : n.filterable) && p[f.key] !== void 0 && /* @__PURE__ */ o.jsx(Ie, { style: { color: "#D97706", fontSize: "14px" } })
            ] })
          },
          f.key
        );
      })
    ] }),
    e.some((f) => (n == null ? void 0 : n.filterable) && p[f.key] !== void 0) ? /* @__PURE__ */ o.jsxs("tr", { className: "nh-grid-filter-row", children: [
      r ? /* @__PURE__ */ o.jsx("td", { style: { padding: "8px" }, children: " " }) : null,
      l ? /* @__PURE__ */ o.jsx("td", { style: { padding: "8px" }, children: " " }) : null,
      e.map((f) => /* @__PURE__ */ o.jsx("td", { style: { padding: "8px" }, children: f.filterable && p[f.key] !== void 0 && /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          value: p[f.key] || "",
          onChange: (x) => a.setFilter({ ...p, [f.key]: x.target.value }),
          className: "nh-grid-filter-input",
          placeholder: "필터 입력..."
        }
      ) }, f.key))
    ] }) : null,
    n && /* @__PURE__ */ o.jsx(
      ct,
      {
        menuPosition: d,
        options: n,
        onClose: g,
        reducer: a
      }
    )
  ] });
}, Ne = (e) => e.__group === !0, He = (e, r, l) => l ? [...e].sort((n, a) => {
  const s = n[r], d = a[r];
  if (s == null || d == null) return 0;
  if (typeof s == "number" && typeof d == "number")
    return l === "asc" ? s - d : d - s;
  const i = String(s).toLowerCase(), p = String(d).toLowerCase();
  return l === "asc" ? i.localeCompare(p) : p.localeCompare(i);
}) : [...e], dt = (e, r, l) => [...e].sort((n, a) => {
  let s = 0;
  for (let d = 0; d < r.length; d++) {
    const i = r[d], p = l, w = n[i] ?? "", m = a[i] ?? "";
    if (typeof w == "number" && typeof m == "number" ? s = w - m : s = String(w).localeCompare(String(m)), p === "desc" && (s = -s), s !== 0) return s;
  }
  return s;
}), ee = (e, r, l = /* @__PURE__ */ new Set(), n = 0) => {
  if (r.length === n) return e;
  const a = r[n], s = [], d = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    const p = String(i[a]);
    d.has(p) || d.set(p, {
      __group: !0,
      __groupKey: p,
      __children: [],
      __groupLevel: n
    }), d.get(p).__children.push(i);
  }), d.forEach((i) => {
    i.__children = ee(i.__children, r, l, n + 1), s.push(i), l.has(i.__groupKey) && !s.includes(i) && s.push(...i.__children);
  }), s;
}, ft = (e, r) => e.filter(
  (l) => Object.entries(r).every(([n, a]) => a ? String(l[n]).toLowerCase().includes(a.toLowerCase()) : !0)
), de = (e, r, l, n) => {
  const a = (r - 1) * l, s = a + l;
  let d = [...e];
  return (n == null ? void 0 : n.group) !== void 0 && (d = dt(
    d,
    n == null ? void 0 : n.group.column,
    (n == null ? void 0 : n.sortDirection) === void 0 ? "asc" : n == null ? void 0 : n.sortDirection
  )), d.slice(a, s);
}, z = (e) => {
  let r = [...e.originalData];
  return Object.keys(e.filters).length > 0 && (r = ft(r, e.filters)), e.sortedColumn && e.sortDirection && (r = He(r, e.sortedColumn, e.sortDirection)), r = de(
    r,
    e.pagenate.currentPage,
    e.pagenate.pageSize,
    e
  ), e.group.column.length > 0 && (r = ee(r, e.group.column, e.group.expanded)), {
    ...e,
    data: r
  };
}, Ve = (e) => e.map((r, l) => ({
  ...r,
  rowKey: r.rowKey ?? `row-${Date.now()}-${Math.random()}-${l}`
})), gt = ({
  columns: e,
  showRowNumCol: r = !1,
  showRowCheckboxCol: l = !1,
  selectedRows: n,
  isCellEditable: a = !1,
  onToggleRow: s,
  onToggleGroupExpand: d,
  reducer: i
}) => {
  const p = (g, f, x) => {
    i.setEditingCell(g, f, x);
  }, w = (g) => {
    if (!i.state.editingCell) return;
    const { rowKey: f, colKey: x } = i.state.editingCell;
    i.setEditingCell(f, x, g);
    const _ = i.state.originalData.find((C) => C.rowKey === f);
    (_ ? _[x] : void 0) !== g ? i.editCell(f, x, g) : i.removeEditedCell(f, x);
  }, m = (g, f) => {
    if (!i.state.editingCell) return;
    const { rowKey: x, colKey: _ } = i.state.editingCell, O = e.findIndex((C) => C.key === _);
    if (g.key === "Enter" && i.clearEditingCell(), g.key === "Tab") {
      g.preventDefault();
      for (let C = O + 1; C < e.length; C++)
        if (e[C].editable !== !1) {
          i.clearEditingCell(), i.setEditingCell(x, e[C].key, f[e[C].key]);
          return;
        }
      i.clearEditingCell();
    }
  }, j = (g, f) => {
    const x = g.__groupKey, _ = i.state.group.expanded.has(x);
    let O = 0;
    return /* @__PURE__ */ o.jsxs(P.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        "tr",
        {
          style: {
            backgroundColor: "var(--color-second-hover)",
            cursor: "pointer",
            borderBottom: "2px solid var(--color-second)"
          },
          onClick: () => d(x),
          children: /* @__PURE__ */ o.jsx("td", { className: "nh-table-cell", colSpan: e.length + (r ? 1 : 0) + (l ? 1 : 0), children: /* @__PURE__ */ o.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: `${r ? "50px" : ""}${l ? "50px" : ""}min-content ${e.slice(1).map((C) => C.width ? `${C.width}px` : "auto").join("")}`,
                whiteSpace: "nowrap",
                fontWeight: "bold",
                alignItems: "center"
              },
              children: /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", paddingLeft: `${f * 16}px` }, children: [
                /* @__PURE__ */ o.jsx("span", { style: { marginRight: "4px" }, children: _ ? /* @__PURE__ */ o.jsx(it, {}) : /* @__PURE__ */ o.jsx(Me, {}) }),
                /* @__PURE__ */ o.jsxs("span", { children: [
                  x,
                  " (",
                  g.__children.length,
                  ")"
                ] })
              ] })
            }
          ) })
        }
      ),
      _ && g.__children.map(
        (C) => Ne(C) ? j(C, f + 1) : k(C, f + 1, ++O)
        // ✅ 그룹 내부 Row Num 증가
      )
    ] }, `group-${x}`);
  }, k = (g, f, x) => {
    const _ = (R) => {
      var N, M;
      return ((N = i.state.editingCell) == null ? void 0 : N.rowKey) === g.rowKey && ((M = i.state.editingCell) == null ? void 0 : M.colKey) === R;
    }, O = i.state.editedRows[g.rowKey] !== void 0, C = a && Object.keys(i.state.editedRows).length > 0;
    return /* @__PURE__ */ o.jsxs("tr", { style: { borderBottom: "1px solid var(--color-second-hover)" }, children: [
      C && /* @__PURE__ */ o.jsx("td", { className: "nh-table-cell nh-action-cell", children: O && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("button", { className: "nh-btn nh-btn-apply", onClick: () => i.applyRowChanges(g.rowKey), children: /* @__PURE__ */ o.jsx(Pe, {}) }),
        /* @__PURE__ */ o.jsx("button", { className: "nh-btn nh-btn-reset", onClick: () => i.resetRowChanges(g.rowKey), children: /* @__PURE__ */ o.jsx(Ye, {}) })
      ] }) }),
      r ? /* @__PURE__ */ o.jsx("td", { className: "nh-table-cell text-center", children: x }) : null,
      l ? /* @__PURE__ */ o.jsx("td", { className: "nh-table-cell text-center", children: /* @__PURE__ */ o.jsx("input", { type: "checkbox", checked: n.has(g), onChange: () => s(g) }) }) : null,
      e.map((R) => {
        var M, K, y, v, L;
        const N = _(R.key) ? (M = i.state.editingCell) == null ? void 0 : M.value : ((K = i.state.editedRows[g.rowKey]) == null ? void 0 : K[R.key]) ?? (R.renderCell ? R.renderCell(g) : g[R.key]);
        return /* @__PURE__ */ o.jsx(
          "td",
          {
            className: "nh-table-cell",
            style: {
              paddingLeft: `${f * 16}px`,
              fontWeight: ((y = i.state.editedRows[g.rowKey]) == null ? void 0 : y[R.key]) !== void 0 ? "bold" : "normal",
              color: ((v = i.state.editedRows[g.rowKey]) == null ? void 0 : v[R.key]) !== void 0 ? "red" : "inherit"
            },
            onDoubleClick: () => a && p(g.rowKey, R.key, N),
            children: _(R.key) ? /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "text",
                value: ((L = i.state.editingCell) == null ? void 0 : L.value) ?? "",
                onChange: (H) => w(H.target.value),
                onKeyDown: (H) => m(H, g),
                className: "nh-edit-input"
              }
            ) : N
          },
          R.key
        );
      })
    ] }, g.rowKey);
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx("tbody", { children: i.state.data.map(
    (g, f) => Ne(g) ? j(g, 0) : k(g, 0, f + 1)
  ) }) });
}, pt = (e, r, l) => {
  const n = Ve(e);
  return {
    originalData: [...n],
    data: r ? de(n, 1, l) : n,
    // ✅ 페이징 시 빈 Set 사용
    sortedColumn: null,
    sortDirection: null,
    filters: {},
    group: {
      column: [],
      expanded: /* @__PURE__ */ new Set()
      // ✅ 초기 확장 상태 저장
    },
    selectedRows: /* @__PURE__ */ new Set(),
    pagenate: {
      pageSize: l,
      currentPage: 1
    },
    editedRows: {},
    editingCell: null
  };
};
function ht(e, r) {
  switch (r.type) {
    /** 🔹 컬럼 정렬 변경 */
    case "SET_SORT":
      return {
        ...e,
        sortedColumn: r.column,
        sortDirection: r.direction,
        data: r.direction === null ? [...e.originalData] : He(e.originalData, r.column, r.direction)
        // ✅ 정렬된 데이터 반영
      };
    /** 🔹 특정 컬럼에 필터 적용 */
    case "SET_FILTER": {
      const l = {
        ...e.filters,
        // 기존 필터 유지
        ...r.filters
        // 새로운 필터 추가 or 업데이트
      };
      return {
        ...e,
        filters: l
      };
    }
    /** 🔹 특정 컬럼의 필터 제거 */
    case "CLEAR_FILTER":
      return {
        ...e,
        filters: Object.fromEntries(
          Object.entries(e.filters).filter(([l]) => l !== r.column)
        )
      };
    /** 🔹 컬럼을 그룹핑 */
    case "SET_GROUP": {
      const l = [...e.group.column, r.column];
      return {
        ...e,
        group: {
          ...e.group,
          column: l,
          // ✅ 새로운 그룹 컬럼 추가
          expanded: new Set(e.group.expanded)
          // ✅ 기존 확장 상태 유지
        },
        data: ee(e.originalData, l)
      };
    }
    /** 🔹 컬럼 그룹핑 해제 */
    case "REMOVE_GROUP": {
      const l = e.group.column.filter((a) => a !== r.column), n = new Set(e.group.expanded);
      return n.delete(r.column), {
        ...e,
        group: {
          column: l,
          // ✅ 그룹 컬럼에서 제거
          expanded: n
          // ✅ 확장 목록에서도 제거
        },
        data: l.length > 0 ? ee(e.originalData, l, n) : [...e.originalData]
        // ✅ 모든 그룹이 해제되면 원본 데이터 복원
      };
    }
    case "TOGGLE_ROW":
      return { ...e };
    /** 🔹 특정 Row 선택/해제 */
    case "TOGGLE_GROUP_EXPAND": {
      const l = new Set(e.group.expanded);
      return l.has(r.column) ? l.delete(r.column) : l.add(r.column), {
        ...e,
        group: {
          ...e.group,
          // ✅ 기존 그룹 상태 유지
          expanded: l
          // ✅ 업데이트된 그룹 상태 저장
        }
      };
    }
    /** 🔹 페이지 변경 */
    case "SET_PAGE":
      return {
        ...e,
        pagenate: {
          ...e.pagenate,
          currentPage: r.page
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    /** 🔹 페이지 변경 */
    case "SET_PAGE_SIZE":
      return {
        ...e,
        pagenate: {
          ...e.pagenate,
          pageSize: r.pageSize
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    case "SET_EDITING_CELL":
      return {
        ...e,
        editingCell: {
          rowKey: r.payload.rowKey,
          colKey: r.payload.colKey,
          value: r.payload.value
        }
      };
    case "CLEAR_EDITING_CELL":
      return {
        ...e,
        editingCell: null
      };
    case "EDIT_CELL": {
      const { rowKey: l, colKey: n, newValue: a } = r.payload;
      return {
        ...e,
        editedRows: {
          ...e.editedRows,
          [l]: {
            ...e.editedRows[l],
            [n]: a
          }
        }
      };
    }
    case "REMOVE_EDITED_CELL": {
      const { rowKey: l, colKey: n } = r.payload, a = { ...e.editedRows[l] };
      if (delete a[n], Object.keys(a).length === 0) {
        const s = { ...e.editedRows };
        return delete s[l], {
          ...e,
          editedRows: s
        };
      }
      return {
        ...e,
        editedRows: {
          ...e.editedRows,
          [l]: a
        }
      };
    }
    case "APPLY_ROW_CHANGES": {
      const { rowKey: l } = r.payload, n = e.editedRows[l];
      if (!n) return e;
      const a = e.data.map(
        (i) => i.rowKey === l ? { ...i, ...n } : i
      ), s = e.originalData.map(
        (i) => i.rowKey === l ? { ...i, ...n } : i
      ), d = { ...e.editedRows };
      return delete d[l], {
        ...e,
        data: a,
        originalData: s,
        // ✅ 원본 데이터 업데이트
        editedRows: d,
        // ✅ 해당 Row만 제거
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    case "RESET_ROW_CHANGES": {
      const { rowKey: l } = r.payload, n = e.originalData.find(
        (d) => d.rowKey === l
      );
      if (!n) return e;
      const a = e.data.map(
        (d) => d.rowKey === l ? n : d
      ), s = { ...e.editedRows };
      return delete s[l], {
        ...e,
        data: a,
        // ✅ 변경된 데이터 복원
        editedRows: s,
        // ✅ 해당 Row의 변경 사항 삭제
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    case "APPLY_ALL_CHANGES": {
      const l = e.originalData.map(
        (n) => e.editedRows[n.rowKey] ? { ...n, ...e.editedRows[n.rowKey] } : n
      );
      return {
        ...e,
        originalData: l,
        data: de(l, e.pagenate.currentPage, e.pagenate.pageSize, e),
        editedRows: {},
        // ✅ 적용 후 초기화
        editingCell: null
      };
    }
    case "RESET_ALL_CHANGES":
      return {
        ...e,
        editedRows: {},
        // ✅ 모든 변경 사항 초기화
        editingCell: null
      };
    /** 🔹 Grid 상태 변경 */
    case "SET_GRID_STATE":
      return { ...e, ...r.state };
    // ✅ 새로운 상태 적용
    default:
      return e;
  }
}
function yt(e, r = !1, l = 10) {
  const [n, a] = qe(ht, pt(e, r, l));
  return {
    state: n,
    updateGridState: () => {
      a({
        type: "SET_GRID_STATE",
        state: z(n)
      });
    },
    setSort: (y, v) => {
      a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          sortedColumn: y,
          sortDirection: v
        })
      });
    },
    setFilter: (y) => {
      const v = { ...n.filters, ...y };
      a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          filters: v
        })
      });
    },
    clearFilter: (y) => {
      const v = { ...n.filters };
      delete v[y], a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          filters: v
        })
      });
    },
    setGroup: (y) => {
      a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          group: {
            ...n.group,
            column: [...n.group.column, y]
          }
        })
      });
    },
    removeGroup: (y) => {
      a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          group: {
            ...n.group,
            column: n.group.column.filter((v) => v !== y)
          }
        })
      });
    },
    expandGroup: (y) => {
      const v = new Set(n.group.expanded);
      v.has(y) ? v.delete(y) : v.add(y), a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          group: {
            ...n.group,
            expanded: v
          }
        })
      });
    },
    toggleRow: (y) => {
      a({ type: "TOGGLE_ROW", row: y });
    },
    setPage: (y) => {
      a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          pagenate: {
            ...n.pagenate,
            currentPage: y
          }
        })
      });
    },
    setPageSize: (y) => {
      a({
        type: "SET_GRID_STATE",
        state: z({
          ...n,
          pagenate: {
            ...n.pagenate,
            pageSize: y
          }
        })
      });
    },
    editCell: (y, v, L) => {
      a({ type: "EDIT_CELL", payload: { rowKey: y, colKey: v, newValue: L } });
    },
    setEditingCell: (y, v, L) => {
      a({ type: "SET_EDITING_CELL", payload: { rowKey: y, colKey: v, value: L } });
    },
    clearEditingCell: () => {
      a({ type: "CLEAR_EDITING_CELL" });
    },
    applyAllChanges: () => {
      a({ type: "APPLY_ALL_CHANGES" });
    },
    resetAllChanges: () => {
      a({ type: "RESET_ALL_CHANGES" });
    },
    removeEditedCell: (y, v) => {
      a({ type: "REMOVE_EDITED_CELL", payload: { rowKey: y, colKey: v } });
    },
    applyRowChanges: (y) => {
      a({ type: "APPLY_ROW_CHANGES", payload: { rowKey: y } });
    },
    resetRowChanges: (y) => {
      a({ type: "RESET_ROW_CHANGES", payload: { rowKey: y } });
    }
  };
}
const Et = ({
  currentPage: e,
  totalPages: r,
  totalDataCount: l,
  pageSize: n,
  onPageChange: a,
  onPageSizeChange: s
}) => {
  const d = [10, 20, 30, 50, 100], [i, p] = De(!1), w = Ae(null);
  return Le(() => {
    const m = (j) => {
      w.current && !w.current.contains(j.target) && p(!1);
    };
    return i && window.addEventListener("click", m), () => {
      window.removeEventListener("click", m);
    };
  }, [i]), /* @__PURE__ */ o.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        borderTop: "1px solid var(--color-font)",
        backgroundColor: "var(--color-second)"
      },
      children: [
        /* @__PURE__ */ o.jsxs("span", { style: { fontSize: "14px", color: "var(--color-font)" }, children: [
          "Total ",
          /* @__PURE__ */ o.jsx("b", { children: l }),
          " page | Page ",
          e,
          " / ",
          r
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "nh-dropdown-container", children: [
          /* @__PURE__ */ o.jsx("span", { className: "nh-dropdown-label", children: "Page Size:" }),
          /* @__PURE__ */ o.jsxs("div", { className: "nh-dropdown-wrapper", ref: w, children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: (m) => {
                  m.stopPropagation(), p(!i);
                },
                className: "nh-dropdown-button",
                children: n
              }
            ),
            i && /* @__PURE__ */ o.jsx("div", { className: "nh-dropdown-menu", children: d.map((m, j) => /* @__PURE__ */ o.jsx(
              "div",
              {
                onClick: () => {
                  s(m), p(!1);
                },
                className: "nh-dropdown-item",
                children: m
              },
              j
            )) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", gap: "4px" }, children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "nh-button",
              onClick: () => e > 1 && a(e - 1),
              disabled: e === 1,
              children: /* @__PURE__ */ o.jsx(st, { size: 14 })
            }
          ),
          Array.from({ length: r }, (m, j) => j + 1).map((m) => /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `nh-button ${m === e ? "nh-button-active" : ""}`,
              onClick: () => a(m),
              children: m
            },
            m
          )),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "nh-button",
              onClick: () => e < r && a(e + 1),
              disabled: e === r,
              children: /* @__PURE__ */ o.jsx(Me, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, xt = ({
  columns: e,
  data: r,
  options: l,
  showRowNumCol: n = !0,
  showRowCheckboxCol: a = !1,
  pagingable: s = !1,
  pagination: d,
  isCellEditable: i = !1
}) => {
  const p = yt(Ve(r), s, d == null ? void 0 : d.pageSize), { pagenate: w } = p.state, m = r.length, j = Math.ceil(m / w.pageSize);
  return console.log("Grid.tsx - editedRows:", p.state.editedRows), /* @__PURE__ */ o.jsxs("div", { className: "nh-grid-container", children: [
    /* @__PURE__ */ o.jsxs("table", { className: "nh-grid-table", children: [
      /* @__PURE__ */ o.jsx(
        ut,
        {
          columns: e,
          showRowNumCol: n,
          showRowCheckboxCol: a,
          options: l,
          reducer: p,
          editedRows: p.state.editedRows
        }
      ),
      /* @__PURE__ */ o.jsx(
        gt,
        {
          reducer: p,
          columns: e,
          isCellEditable: i,
          showRowNumCol: n,
          showRowCheckboxCol: a,
          selectedRows: p.state.selectedRows,
          onToggleRow: p.toggleRow,
          onToggleGroupExpand: p.expandGroup
        }
      )
    ] }),
    s && /* @__PURE__ */ o.jsx(
      Et,
      {
        currentPage: w.currentPage,
        totalPages: j,
        onPageChange: p.setPage,
        totalDataCount: r.length,
        pageSize: p.state.pagenate.pageSize,
        onPageSizeChange: p.setPageSize
      }
    )
  ] });
};
export {
  xt as Grid
};
