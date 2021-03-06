! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                } return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                O.set(a, b, c);
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return this;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    return n.trim(a.value)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var hb = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var ib = a.location,
        jb = n.now(),
        kb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = {},
        sb = {},
        tb = "*/".concat("*"),
        ub = d.createElement("a");
    ub.href = ib.href;

    function vb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function wb(a, b, c, d) {
        var e = {},
            f = a === sb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function xb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function yb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function zb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ib.href,
            type: "GET",
            isLocal: ob.test(ib.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a)
        },
        ajaxPrefilter: vb(rb),
        ajaxTransport: vb(sb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = nb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = wb(sb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Ab = /%20/g,
        Bb = /\[\]$/,
        Cb = /\r?\n/g,
        Db = /^(?:submit|button|image|reset|file)$/i,
        Eb = /^(?:input|select|textarea|keygen)/i;

    function Fb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Fb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Fb(c, a[c], b, e);
        return d.join("&").replace(Ab, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Cb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Cb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Gb = {
            0: 200,
            1223: 204
        },
        Hb = n.ajaxSettings.xhr();
    l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Hb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Ib = [],
        Jb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ib.pop() || n.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), l.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Kb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Kb) return Kb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Lb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Lb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Mb = a.jQuery,
        Nb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n
    }, b || (a.jQuery = a.$ = n), n
});

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.16
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

/*
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
 *
 * $Date: 2012-29-07 (Sun, 29 July 2012) $
 * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
 * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
 *
 * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
 * $version: 1.3.3	- Code tidy prep for minefied version
 *
 * $Date: 2012-04-10 (wed, 4 Oct 2012) $
 * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
 *
 * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
 * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is .noSwipe
 *
 * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
 * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
 *					- Fixed bug with IE and eventPreventDefault()
 * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
 * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
 *					- made the demo site all static local HTML pages so they can be run locally by a developer
 *					- added jsDoc comments and added documentation for the plugin
 *					- code tidy
 *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
 * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
 * $version: 1.6.1	- Added support for ie8 touch events
 * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
 *                   - Deprecated the 'click' handler in favour of tap.
 *                   - added cancelThreshold property
 *                   - added option method to update init options at runtime
 * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
 *
 * $Date: 2013-04-04 (Thurs, 04 April 2013) $
 * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
 *
 * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
 * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
 *
 * $Date: 2014-06-04 (Wed, 04 June 2014) $
 * $version 1.6.6 	- Merge of pull requests.
 *    				- IE10 touch support
 *    				- Only prevent default event handling on valid swipe
 *    				- Separate license/changelog comment
 *    				- Detect if the swipe is valid at the end of the touch event.
 *    				- Pass fingerdata to event handlers.
 *    				- Add 'hold' gesture
 *    				- Be more tolerant about the tap distance
 *    				- Typos and minor fixes
 *
 * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
 * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
 *
 * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
 * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
 *					- Fixed issue with swipe and pinch not triggering at the same time
 *
 * $Date: 2015-9-6 (Tues, 9 June 2015) $
 * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
 *					- Added scrolling demo
 *					- Added version property to plugin
 *
 * $Date: 2015-1-10 (Wed, 1 October 2015) $
 * $version 1.6.10    - Added PR from beatspace to fix tap events
 * $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
 *					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances
 * $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
 *
 * $Date: 2015-12-18 (Fri, 18 December 2015) $
 * $version 1.6.13    - Added PRs
 *                    - Fixed #267 allowPageScroll not working correctly
 * $version 1.6.14    - Fixed #220 / #248 doubletap not firing with swipes, #223 commonJS compatible
 * $version 1.6.15    - More bug fixes
 *
 * $Date: 2016-04-29 (Fri, 29 April 2016) $
 * $version 1.6.16    - Swipes with 0 distance now allow default events to trigger.  So tapping any form elements or A tags will allow default interaction, but swiping will trigger a swipe.
                        Removed the a, input, select etc from the excluded Children list as the 0 distance tap solves that issue.
 */

/**
 * See (http://jquery.com/).
 * @name $
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */


(function(factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS Module
        factory(require("jquery"));
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function($) {
    "use strict";

    //Constants
    var VERSION = "1.6.15",
        LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",

        NONE = "none",
        AUTO = "auto",

        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        HOLD = "hold",

        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",

        ALL_FINGERS = "all",

        DOUBLE_TAP_THRESHOLD = 10,

        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",

        SUPPORTS_TOUCH = 'ontouchstart' in window,

        SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,

        SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,

        PLUGIN_NS = 'TouchSwipe';



    /**
    * The default configuration, and available options to configure touch swipe with.
    * You can set the default values by updating any of the properties prior to instantiation.
    * @name $.fn.swipe.defaults
    * @namespace
    * @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
    * @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe.
    * @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
    * @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch.
    * @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
    * @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release.
    * @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
    * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
    * @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
    * @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
    * @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
    * @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
    * @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
    * @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
    * @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
    * @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
    * @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
    * @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not.
    * @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
    * @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
    * @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
    * @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
    * @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers.
    * @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
    									<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
    									<code>"none"</code> : the page will not scroll when user swipes. <br/>
    									<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
    									<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
    * @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices.
    * @property {string} [excludedElements=".noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes elements with the class .noSwipe .
    * @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can dissable this so both native events fire as well as your handlers.

    */
    var defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null, //Deprecated since 1.6.2
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: ".noSwipe",
        preventDefaultEvents: true
    };



    /**
     * Applies TouchSwipe behaviour to one or more jQuery objects.
     * The TouchSwipe plugin can be instantiated via this method, or methods within
     * TouchSwipe can be executed via this method as per jQuery plugin architecture.
     * An existing plugin can have its options changed simply by re calling .swipe(options)
     * @see TouchSwipe
     * @class
     * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
     * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
     * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the
     * configuration properties defined in the object. See TouchSwipe
     *
     */
    $.fn.swipe = function(method) {
        var $this = $(this),
            plugin = $this.data(PLUGIN_NS);

        //Check if we are already instantiated and trying to execute a method
        if (plugin && typeof method === 'string') {
            if (plugin[method]) {
                return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.swipe');
            }
        }

        //Else update existing plugin with new options hash
        else if (plugin && typeof method === 'object') {
            plugin['option'].apply(this, arguments);
        }

        //Else not instantiated and trying to pass init object (or nothing)
        else if (!plugin && (typeof method === 'object' || !method)) {
            return init.apply(this, arguments);
        }

        return $this;
    };

    /**
     * The version of the plugin
     * @readonly
     */
    $.fn.swipe.version = VERSION;



    //Expose our defaults so a user could override the plugin defaults
    $.fn.swipe.defaults = defaults;

    /**
     * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers.
     * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
     * @namespace
     * @readonly
     * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
     * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
     * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
     * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
     */
    $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    };

    /**
     * The direction constants that are passed to the event handlers.
     * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
     * @namespace
     * @readonly
     * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
     * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
     * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
     * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
     * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
     * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
     */
    $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT
    };

    /**
     * The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
     * These properties are read only
     * @namespace
     * @readonly
     * @see $.fn.swipe.defaults#allowPageScroll
     * @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
     * @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
     * @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
     * @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
     */
    $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    };

    /**
     * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the
     * options object, as well as the value of the <code>fingers</code> event property.
     * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
     * @namespace
     * @readonly
     * @see $.fn.swipe.defaults#fingers
     * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
     * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
     * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
     * @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
     * @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
     * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
     */
    $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: ALL_FINGERS
    };

    /**
     * Initialise the plugin for each DOM element matched
     * This creates a new instance of the main TouchSwipe class for each DOM element, and then
     * saves a reference to that instance in the elements data property.
     * @internal
     */
    function init(options) {
        //Prep and extend the options
        if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
            options.allowPageScroll = NONE;
        }

        //Check for deprecated options
        //Ensure that any old click handlers are assigned to the new tap, unless we have a tap
        if (options.click !== undefined && options.tap === undefined) {
            options.tap = options.click;
        }

        if (!options) {
            options = {};
        }

        //pass empty object so we dont modify the defaults
        options = $.extend({}, $.fn.swipe.defaults, options);

        //For each element instantiate the plugin
        return this.each(function() {
            var $this = $(this);

            //Check we havent already initialised the plugin
            var plugin = $this.data(PLUGIN_NS);

            if (!plugin) {
                plugin = new TouchSwipe(this, options);
                $this.data(PLUGIN_NS, plugin);
            }
        });
    }

    /**
     * Main TouchSwipe Plugin Class.
     * Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
     * @private
     * @name TouchSwipe
     * @param {DOMNode} element The HTML DOM object to apply to plugin to
     * @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
     * @see $.fh.swipe.defaults
     * @see $.fh.swipe
     * @class
     */
    function TouchSwipe(element, options) {

        //take a local/instacne level copy of the options - should make it this.options really...
        var options = $.extend({}, options);

        var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
            START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
            MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
            END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
            LEAVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? 'mouseleave' : null) : 'mouseleave', //we manually detect leave on touch devices, so null event here
            CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



        //touch properties
        var distance = 0,
            direction = null,
            currentDirection = null,
            duration = 0,
            startTouchesDistance = 0,
            endTouchesDistance = 0,
            pinchZoom = 1,
            pinchDistance = 0,
            pinchDirection = 0,
            maximumsMap = null;



        //jQuery wrapped element for this instance
        var $element = $(element);

        //Current phase of th touch cycle
        var phase = "start";

        // the current number of fingers being used.
        var fingerCount = 0;

        //track mouse points / delta
        var fingerData = {};

        //track times
        var startTime = 0,
            endTime = 0,
            previousTouchEndTime = 0,
            fingerCountAtRelease = 0,
            doubleTapStartTime = 0;

        //Timeouts
        var singleTapTimeout = null,
            holdTimeout = null;

        // Add gestures to all swipable areas if supported
        try {
            $element.bind(START_EV, touchStart);
            $element.bind(CANCEL_EV, touchCancel);
        } catch (e) {
            $.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
        }

        //
        //Public methods
        //

        /**
         * re-enables the swipe plugin with the previous configuration
         * @function
         * @name $.fn.swipe#enable
         * @return {DOMNode} The Dom element that was registered with TouchSwipe
         * @example $("#element").swipe("enable");
         */
        this.enable = function() {
            //Incase we are already enabled, clean up...
            this.disable();
            $element.bind(START_EV, touchStart);
            $element.bind(CANCEL_EV, touchCancel);
            return $element;
        };

        /**
         * disables the swipe plugin
         * @function
         * @name $.fn.swipe#disable
         * @return {DOMNode} The Dom element that is now registered with TouchSwipe
         * @example $("#element").swipe("disable");
         */
        this.disable = function() {
            removeListeners();
            return $element;
        };

        /**
         * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
         * @function
         * @name $.fn.swipe#destroy
         * @example $("#element").swipe("destroy");
         */
        this.destroy = function() {
            removeListeners();
            $element.data(PLUGIN_NS, null);
            $element = null;
        };


        /**
         * Allows run time updating of the swipe configuration options.
         * @function
         * @name $.fn.swipe#option
         * @param {String} property The option property to get or set, or a has of multiple options to set
         * @param {Object} [value] The value to set the property to
         * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
         * @example $("#element").swipe("option", "threshold"); // return the threshold
         * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
         * @example $("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
         * @example $("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
         * @example $("#element").swipe("option"); // Return the current options hash
         * @see $.fn.swipe.defaults
         *
         */
        this.option = function(property, value) {

            if (typeof property === 'object') {
                options = $.extend(options, property);
            } else if (options[property] !== undefined) {
                if (value === undefined) {
                    return options[property];
                } else {
                    options[property] = value;
                }
            } else if (!property) {
                return options;
            } else {
                $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
            }

            return null;
        }



        //
        // Private methods
        //

        //
        // EVENTS
        //
        /**
         * Event handler for a touch start event.
         * Stops the default click event from triggering and stores where we touched
         * @inner
         * @param {object} jqEvent The normalised jQuery event object.
         */
        function touchStart(jqEvent) {

            //If we already in a touch event (a finger already in use) then ignore subsequent ones..
            if (getTouchInProgress()) {
                return;
            }

            //Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
            if ($(jqEvent.target).closest(options.excludedElements, $element).length > 0) {
                return;
            }

            //As we use Jquery bind for events, we need to target the original event object
            //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

            var ret,
                touches = event.touches,
                evt = touches ? touches[0] : event;

            phase = PHASE_START;

            //If we support touches, get the finger count
            if (touches) {
                // get the total number of fingers touching the screen
                fingerCount = touches.length;
            }
            //Else this is the desktop, so stop the browser from dragging content
            else if (options.preventDefaultEvents !== false) {
                jqEvent.preventDefault(); //call this on jq event so we are cross browser
            }

            //clear vars..
            distance = 0;
            direction = null;
            currentDirection = null;
            pinchDirection = null;
            duration = 0;
            startTouchesDistance = 0;
            endTouchesDistance = 0;
            pinchZoom = 1;
            pinchDistance = 0;
            maximumsMap = createMaximumsData();
            cancelMultiFingerRelease();

            //Create the default finger data
            createFingerData(0, evt);

            // check the number of fingers is what we are looking for, or we are capturing pinches
            if (!touches || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
                // get the coordinates of the touch
                startTime = getTimeStamp();

                if (fingerCount == 2) {
                    //Keep track of the initial pinch distance, so we can calculate the diff later
                    //Store second finger data as start
                    createFingerData(1, touches[1]);
                    startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
                }

                if (options.swipeStatus || options.pinchStatus) {
                    ret = triggerHandler(event, phase);
                }
            } else {
                //A touch with more or less than the fingers we are looking for, so cancel
                ret = false;
            }

            //If we have a return value from the users handler, then return and cancel
            if (ret === false) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
                return ret;
            } else {
                if (options.hold) {
                    holdTimeout = setTimeout($.proxy(function() {
                        //Trigger the event
                        $element.trigger('hold', [event.target]);
                        //Fire the callback
                        if (options.hold) {
                            ret = options.hold.call($element, event, event.target);
                        }
                    }, this), options.longTapThreshold);
                }

                setTouchInProgress(true);
            }

            return null;
        };



        /**
         * Event handler for a touch move event.
         * If we change fingers during move, then cancel the event
         * @inner
         * @param {object} jqEvent The normalised jQuery event object.
         */
        function touchMove(jqEvent) {

            //As we use Jquery bind for events, we need to target the original event object
            //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

            //If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
            if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
                return;

            var ret,
                touches = event.touches,
                evt = touches ? touches[0] : event;


            //Update the  finger data
            var currentFinger = updateFingerData(evt);
            endTime = getTimeStamp();

            if (touches) {
                fingerCount = touches.length;
            }

            if (options.hold) {
                clearTimeout(holdTimeout);
            }

            phase = PHASE_MOVE;

            //If we have 2 fingers get Touches distance as well
            if (fingerCount == 2) {

                //Keep track of the initial pinch distance, so we can calculate the diff later
                //We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
                if (startTouchesDistance == 0) {
                    //Create second finger if this is the first time...
                    createFingerData(1, touches[1]);

                    startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
                } else {
                    //Else just update the second finger
                    updateFingerData(touches[1]);

                    endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
                    pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
                }

                pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
                pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
            }

            if ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !touches || hasPinches()) {

                //The overall direction of the swipe. From start to now.
                direction = calculateDirection(currentFinger.start, currentFinger.end);

                //The immediate direction of the swipe, direction between the last movement and this one.
                currentDirection = calculateDirection(currentFinger.last, currentFinger.end);

                //Check if we need to prevent default event (page scroll / pinch zoom) or not
                validateDefaultEvent(jqEvent, currentDirection);

                //Distance and duration are all off the main finger
                distance = calculateDistance(currentFinger.start, currentFinger.end);
                duration = calculateDuration();

                //Cache the maximum distance we made in this direction
                setMaxDistance(direction, distance);

                //Trigger status handler
                ret = triggerHandler(event, phase);


                //If we trigger end events when threshold are met, or trigger events when touch leaves element
                if (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {

                    var inBounds = true;

                    //If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
                    if (options.triggerOnTouchLeave) {
                        var bounds = getbounds(this);
                        inBounds = isInBounds(currentFinger.end, bounds);
                    }

                    //Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
                    if (!options.triggerOnTouchEnd && inBounds) {
                        phase = getNextPhase(PHASE_MOVE);
                    }
                    //We end if out of bounds here, so set current phase to END, and check if its modified
                    else if (options.triggerOnTouchLeave && !inBounds) {
                        phase = getNextPhase(PHASE_END);
                    }

                    if (phase == PHASE_CANCEL || phase == PHASE_END) {
                        triggerHandler(event, phase);
                    }
                }
            } else {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            }

            if (ret === false) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            }
        }




        /**
         * Event handler for a touch end event.
         * Calculate the direction and trigger events
         * @inner
         * @param {object} jqEvent The normalised jQuery event object.
         */
        function touchEnd(jqEvent) {
            //As we use Jquery bind for events, we need to target the original event object
            //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
                touches = event.touches;

            //If we are still in a touch with the device wait a fraction and see if the other finger comes up
            //if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
            if (touches) {
                if (touches.length && !inMultiFingerRelease()) {
                    startMultiFingerRelease(event);
                    return true;
                } else if (touches.length && inMultiFingerRelease()) {
                    return true;
                }
            }

            //If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
            //This is used to allow 2 fingers to release fractionally after each other, whilst maintaining the event as containing 2 fingers, not 1
            if (inMultiFingerRelease()) {
                fingerCount = fingerCountAtRelease;
            }

            //Set end of swipe
            endTime = getTimeStamp();

            //Get duration incase move was never fired
            duration = calculateDuration();

            //If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
            if (didSwipeBackToCancel() || !validateSwipeDistance()) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            } else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd === false && phase === PHASE_MOVE)) {
                //call this on jq event so we are cross browser
                if (options.preventDefaultEvents !== false) {
                    jqEvent.preventDefault();
                }
                phase = PHASE_END;
                triggerHandler(event, phase);
            }
            //Special cases - A tap should always fire on touch end regardless,
            //So here we manually trigger the tap end handler by itself
            //We dont run trigger handler as it will re-trigger events that may have fired already
            else if (!options.triggerOnTouchEnd && hasTap()) {
                //Trigger the pinch events...
                phase = PHASE_END;
                triggerHandlerForGesture(event, phase, TAP);
            } else if (phase === PHASE_MOVE) {
                phase = PHASE_CANCEL;
                triggerHandler(event, phase);
            }

            setTouchInProgress(false);

            return null;
        }



        /**
         * Event handler for a touch cancel event.
         * Clears current vars
         * @inner
         */
        function touchCancel() {
            // reset the variables back to default values
            fingerCount = 0;
            endTime = 0;
            startTime = 0;
            startTouchesDistance = 0;
            endTouchesDistance = 0;
            pinchZoom = 1;

            //If we were in progress of tracking a possible multi touch end, then re set it.
            cancelMultiFingerRelease();

            setTouchInProgress(false);
        }


        /**
         * Event handler for a touch leave event.
         * This is only triggered on desktops, in touch we work this out manually
         * as the touchleave event is not supported in webkit
         * @inner
         */
        function touchLeave(jqEvent) {
            //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

            //If we have the trigger on leave property set....
            if (options.triggerOnTouchLeave) {
                phase = getNextPhase(PHASE_END);
                triggerHandler(event, phase);
            }
        }

        /**
         * Removes all listeners that were associated with the plugin
         * @inner
         */
        function removeListeners() {
            $element.unbind(START_EV, touchStart);
            $element.unbind(CANCEL_EV, touchCancel);
            $element.unbind(MOVE_EV, touchMove);
            $element.unbind(END_EV, touchEnd);

            //we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
            if (LEAVE_EV) {
                $element.unbind(LEAVE_EV, touchLeave);
            }

            setTouchInProgress(false);
        }


        /**
         * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
         */
        function getNextPhase(currentPhase) {

            var nextPhase = currentPhase;

            // Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
            var validTime = validateSwipeTime();
            var validDistance = validateSwipeDistance();
            var didCancel = didSwipeBackToCancel();

            //If we have exceeded our time, then cancel
            if (!validTime || didCancel) {
                nextPhase = PHASE_CANCEL;
            }
            //Else if we are moving, and have reached distance then end
            else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave)) {
                nextPhase = PHASE_END;
            }
            //Else if we have ended by leaving and didn't reach distance, then cancel
            else if (!validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave) {
                nextPhase = PHASE_CANCEL;
            }

            return nextPhase;
        }


        /**
         * Trigger the relevant event handler
         * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
         * @param {object} event the original event object
         * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
         * @inner
         */
        function triggerHandler(event, phase) {



            var ret,
                touches = event.touches;

            // SWIPE GESTURES
            if (didSwipe() || hasSwipes()) {
                ret = triggerHandlerForGesture(event, phase, SWIPE);
            }

            // PINCH GESTURES (if the above didn't cancel)
            if ((didPinch() || hasPinches()) && ret !== false) {
                ret = triggerHandlerForGesture(event, phase, PINCH);
            }

            // CLICK / TAP (if the above didn't cancel)
            if (didDoubleTap() && ret !== false) {
                //Trigger the tap events...
                ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
            }

            // CLICK / TAP (if the above didn't cancel)
            else if (didLongTap() && ret !== false) {
                //Trigger the tap events...
                ret = triggerHandlerForGesture(event, phase, LONG_TAP);
            }

            // CLICK / TAP (if the above didn't cancel)
            else if (didTap() && ret !== false) {
                //Trigger the tap event..
                ret = triggerHandlerForGesture(event, phase, TAP);
            }



            // If we are cancelling the gesture, then manually trigger the reset handler
            if (phase === PHASE_CANCEL) {

                touchCancel(event);
            }




            // If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
            if (phase === PHASE_END) {
                //If we support touch, then check that all fingers are off before we cancel
                if (touches) {
                    if (!touches.length) {
                        touchCancel(event);
                    }
                } else {
                    touchCancel(event);
                }
            }

            return ret;
        }



        /**
         * Trigger the relevant event handler
         * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
         * @param {object} event the original event object
         * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
         * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
         * @return Boolean False, to indicate that the event should stop propagation, or void.
         * @inner
         */
        function triggerHandlerForGesture(event, phase, gesture) {

            var ret;

            //SWIPES....
            if (gesture == SWIPE) {
                //Trigger status every time..
                $element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]);

                if (options.swipeStatus) {
                    ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection);
                    //If the status cancels, then dont run the subsequent event handlers..
                    if (ret === false) return false;
                }

                if (phase == PHASE_END && validateSwipe()) {

                    //Cancel any taps that were in progress...
                    clearTimeout(singleTapTimeout);
                    clearTimeout(holdTimeout);

                    $element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

                    if (options.swipe) {
                        ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                        //If the status cancels, then dont run the subsequent event handlers..
                        if (ret === false) return false;
                    }

                    //trigger direction specific event handlers
                    switch (direction) {
                        case LEFT:
                            $element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

                            if (options.swipeLeft) {
                                ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                            }
                            break;

                        case RIGHT:
                            $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

                            if (options.swipeRight) {
                                ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                            }
                            break;

                        case UP:
                            $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

                            if (options.swipeUp) {
                                ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                            }
                            break;

                        case DOWN:
                            $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

                            if (options.swipeDown) {
                                ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                            }
                            break;
                    }
                }
            }


            //PINCHES....
            if (gesture == PINCH) {
                $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

                if (options.pinchStatus) {
                    ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
                    //If the status cancels, then dont run the subsequent event handlers..
                    if (ret === false) return false;
                }

                if (phase == PHASE_END && validatePinch()) {

                    switch (pinchDirection) {
                        case IN:
                            $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

                            if (options.pinchIn) {
                                ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
                            }
                            break;

                        case OUT:
                            $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

                            if (options.pinchOut) {
                                ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
                            }
                            break;
                    }
                }
            }

            if (gesture == TAP) {
                if (phase === PHASE_CANCEL || phase === PHASE_END) {

                    clearTimeout(singleTapTimeout);
                    clearTimeout(holdTimeout);

                    //If we are also looking for doubelTaps, wait incase this is one...
                    if (hasDoubleTap() && !inDoubleTap()) {
                        doubleTapStartTime = getTimeStamp();

                        //Now wait for the double tap timeout, and trigger this single tap
                        //if its not cancelled by a double tap
                        singleTapTimeout = setTimeout($.proxy(function() {
                            doubleTapStartTime = null;
                            $element.trigger('tap', [event.target]);

                            if (options.tap) {
                                ret = options.tap.call($element, event, event.target);
                            }
                        }, this), options.doubleTapThreshold);

                    } else {
                        doubleTapStartTime = null;
                        $element.trigger('tap', [event.target]);
                        if (options.tap) {
                            ret = options.tap.call($element, event, event.target);
                        }
                    }
                }
            } else if (gesture == DOUBLE_TAP) {
                if (phase === PHASE_CANCEL || phase === PHASE_END) {
                    clearTimeout(singleTapTimeout);
                    clearTimeout(holdTimeout);
                    doubleTapStartTime = null;
                    $element.trigger('doubletap', [event.target]);

                    if (options.doubleTap) {
                        ret = options.doubleTap.call($element, event, event.target);
                    }
                }
            } else if (gesture == LONG_TAP) {
                if (phase === PHASE_CANCEL || phase === PHASE_END) {
                    clearTimeout(singleTapTimeout);
                    doubleTapStartTime = null;

                    $element.trigger('longtap', [event.target]);
                    if (options.longTap) {
                        ret = options.longTap.call($element, event, event.target);
                    }
                }
            }

            return ret;
        }


        //
        // GESTURE VALIDATION
        //

        /**
         * Checks the user has swipe far enough
         * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
         * If no threshold was set, then we return true.
         * @inner
         */
        function validateSwipeDistance() {
            var valid = true;
            //If we made it past the min swipe distance..
            if (options.threshold !== null) {
                valid = distance >= options.threshold;
            }

            return valid;
        }

        /**
         * Checks the user has swiped back to cancel.
         * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
         * If no cancelThreshold was set, then we return true.
         * @inner
         */
        function didSwipeBackToCancel() {
            var cancelled = false;
            if (options.cancelThreshold !== null && direction !== null) {
                cancelled = (getMaxDistance(direction) - distance) >= options.cancelThreshold;
            }

            return cancelled;
        }

        /**
         * Checks the user has pinched far enough
         * @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
         * If no threshold was set, then we return true.
         * @inner
         */
        function validatePinchDistance() {
            if (options.pinchThreshold !== null) {
                return pinchDistance >= options.pinchThreshold;
            }
            return true;
        }

        /**
         * Checks that the time taken to swipe meets the minimum / maximum requirements
         * @return Boolean
         * @inner
         */
        function validateSwipeTime() {
            var result;
            //If no time set, then return true
            if (options.maxTimeThreshold) {
                if (duration >= options.maxTimeThreshold) {
                    result = false;
                } else {
                    result = true;
                }
            } else {
                result = true;
            }

            return result;
        }


        /**
         * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
         * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
         * @param {object} jqEvent The normalised jQuery representation of the event object.
         * @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
         * @see $.fn.swipe.directions
         * @inner
         */
        function validateDefaultEvent(jqEvent, direction) {

            //If the option is set, allways allow the event to bubble up (let user handle weirdness)
            if (options.preventDefaultEvents === false) {
                return;
            }

            if (options.allowPageScroll === NONE) {
                jqEvent.preventDefault();
            } else {
                var auto = options.allowPageScroll === AUTO;

                switch (direction) {
                    case LEFT:
                        if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
                            jqEvent.preventDefault();
                        }
                        break;

                    case RIGHT:
                        if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
                            jqEvent.preventDefault();
                        }
                        break;

                    case UP:
                        if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
                            jqEvent.preventDefault();
                        }
                        break;

                    case DOWN:
                        if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
                            jqEvent.preventDefault();
                        }
                        break;

                    case NONE:

                        break;
                }
            }
        }


        // PINCHES
        /**
         * Returns true of the current pinch meets the thresholds
         * @return Boolean
         * @inner
         */
        function validatePinch() {
            var hasCorrectFingerCount = validateFingers();
            var hasEndPoint = validateEndPoint();
            var hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;

        }

        /**
         * Returns true if any Pinch events have been registered
         * @return Boolean
         * @inner
         */
        function hasPinches() {
            //Enure we dont return 0 or null for false values
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
        }

        /**
         * Returns true if we are detecting pinches, and have one
         * @return Boolean
         * @inner
         */
        function didPinch() {
            //Enure we dont return 0 or null for false values
            return !!(validatePinch() && hasPinches());
        }




        // SWIPES
        /**
         * Returns true if the current swipe meets the thresholds
         * @return Boolean
         * @inner
         */
        function validateSwipe() {
            //Check validity of swipe
            var hasValidTime = validateSwipeTime();
            var hasValidDistance = validateSwipeDistance();
            var hasCorrectFingerCount = validateFingers();
            var hasEndPoint = validateEndPoint();
            var didCancel = didSwipeBackToCancel();

            // if the user swiped more than the minimum length, perform the appropriate action
            // hasValidDistance is null when no distance is set
            var valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;

            return valid;
        }

        /**
         * Returns true if any Swipe events have been registered
         * @return Boolean
         * @inner
         */
        function hasSwipes() {
            //Enure we dont return 0 or null for false values
            return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
        }


        /**
         * Returns true if we are detecting swipes and have one
         * @return Boolean
         * @inner
         */
        function didSwipe() {
            //Enure we dont return 0 or null for false values
            return !!(validateSwipe() && hasSwipes());
        }

        /**
         * Returns true if we have matched the number of fingers we are looking for
         * @return Boolean
         * @inner
         */
        function validateFingers() {
            //The number of fingers we want were matched, or on desktop we ignore
            return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
        }

        /**
         * Returns true if we have an end point for the swipe
         * @return Boolean
         * @inner
         */
        function validateEndPoint() {
            //We have an end value for the finger
            return fingerData[0].end.x !== 0;
        }

        // TAP / CLICK
        /**
         * Returns true if a click / tap events have been registered
         * @return Boolean
         * @inner
         */
        function hasTap() {
            //Enure we dont return 0 or null for false values
            return !!(options.tap);
        }

        /**
         * Returns true if a double tap events have been registered
         * @return Boolean
         * @inner
         */
        function hasDoubleTap() {
            //Enure we dont return 0 or null for false values
            return !!(options.doubleTap);
        }

        /**
         * Returns true if any long tap events have been registered
         * @return Boolean
         * @inner
         */
        function hasLongTap() {
            //Enure we dont return 0 or null for false values
            return !!(options.longTap);
        }

        /**
         * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
         * @return Boolean
         * @inner
         */
        function validateDoubleTap() {
            if (doubleTapStartTime == null) {
                return false;
            }
            var now = getTimeStamp();
            return (hasDoubleTap() && ((now - doubleTapStartTime) <= options.doubleTapThreshold));
        }

        /**
         * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
         * @return Boolean
         * @inner
         */
        function inDoubleTap() {
            return validateDoubleTap();
        }


        /**
         * Returns true if we have a valid tap
         * @return Boolean
         * @inner
         */
        function validateTap() {
            return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
        }

        /**
         * Returns true if we have a valid long tap
         * @return Boolean
         * @inner
         */
        function validateLongTap() {
            //slight threshold on moving finger
            return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD));
        }

        /**
         * Returns true if we are detecting taps and have one
         * @return Boolean
         * @inner
         */
        function didTap() {
            //Enure we dont return 0 or null for false values
            return !!(validateTap() && hasTap());
        }


        /**
         * Returns true if we are detecting double taps and have one
         * @return Boolean
         * @inner
         */
        function didDoubleTap() {
            //Enure we dont return 0 or null for false values
            return !!(validateDoubleTap() && hasDoubleTap());
        }

        /**
         * Returns true if we are detecting long taps and have one
         * @return Boolean
         * @inner
         */
        function didLongTap() {
            //Enure we dont return 0 or null for false values
            return !!(validateLongTap() && hasLongTap());
        }




        // MULTI FINGER TOUCH
        /**
         * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
         * @inner
         */
        function startMultiFingerRelease(event) {
            previousTouchEndTime = getTimeStamp();
            fingerCountAtRelease = event.touches.length + 1;
        }

        /**
         * Cancels the tracking of time between 2 finger releases, and resets counters
         * @inner
         */
        function cancelMultiFingerRelease() {
            previousTouchEndTime = 0;
            fingerCountAtRelease = 0;
        }

        /**
         * Checks if we are in the threshold between 2 fingers being released
         * @return Boolean
         * @inner
         */
        function inMultiFingerRelease() {

            var withinThreshold = false;

            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime
                if (diff <= options.fingerReleaseThreshold) {
                    withinThreshold = true;
                }
            }

            return withinThreshold;
        }


        /**
         * gets a data flag to indicate that a touch is in progress
         * @return Boolean
         * @inner
         */
        function getTouchInProgress() {
            //strict equality to ensure only true and false are returned
            return !!($element.data(PLUGIN_NS + '_intouch') === true);
        }

        /**
         * Sets a data flag to indicate that a touch is in progress
         * @param {boolean} val The value to set the property to
         * @inner
         */
        function setTouchInProgress(val) {

            //If destroy is called in an event handler, we have no el, and we have already cleaned up, so return.
            if (!$element) {
                return;
            }

            //Add or remove event listeners depending on touch status
            if (val === true) {
                $element.bind(MOVE_EV, touchMove);
                $element.bind(END_EV, touchEnd);

                //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
                if (LEAVE_EV) {
                    $element.bind(LEAVE_EV, touchLeave);
                }
            } else {

                $element.unbind(MOVE_EV, touchMove, false);
                $element.unbind(END_EV, touchEnd, false);

                //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
                if (LEAVE_EV) {
                    $element.unbind(LEAVE_EV, touchLeave, false);
                }
            }


            //strict equality to ensure only true and false can update the value
            $element.data(PLUGIN_NS + '_intouch', val === true);
        }


        /**
         * Creates the finger data for the touch/finger in the event object.
         * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
         * @param {object} evt The event object containing finger data
         * @return finger data object
         * @inner
         */
        function createFingerData(id, evt) {
            var f = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX;
            f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY;
            fingerData[id] = f;
            return f;
        }

        /**
         * Updates the finger data for a particular event object
         * @param {object} evt The event object containing the touch/finger data to upadte
         * @return a finger data object.
         * @inner
         */
        function updateFingerData(evt) {
            var id = evt.identifier !== undefined ? evt.identifier : 0;
            var f = getFingerData(id);

            if (f === null) {
                f = createFingerData(id, evt);
            }

            f.last.x = f.end.x;
            f.last.y = f.end.y;

            f.end.x = evt.pageX || evt.clientX;
            f.end.y = evt.pageY || evt.clientY;

            return f;
        }

        /**
         * Returns a finger data object by its event ID.
         * Each touch event has an identifier property, which is used
         * to track repeat touches
         * @param {int} id The unique id of the finger in the sequence of touch events.
         * @return a finger data object.
         * @inner
         */
        function getFingerData(id) {
            return fingerData[id] || null;
        }


        /**
         * Sets the maximum distance swiped in the given direction.
         * If the new value is lower than the current value, the max value is not changed.
         * @param {string}  direction The direction of the swipe
         * @param {int}  distance The distance of the swipe
         * @inner
         */
        function setMaxDistance(direction, distance) {
            if (direction == NONE) return;
            distance = Math.max(distance, getMaxDistance(direction));
            maximumsMap[direction].distance = distance;
        }

        /**
         * gets the maximum distance swiped in the given direction.
         * @param {string}  direction The direction of the swipe
         * @return int  The distance of the swipe
         * @inner
         */
        function getMaxDistance(direction) {
            if (maximumsMap[direction]) return maximumsMap[direction].distance;
            return undefined;
        }

        /**
         * Creats a map of directions to maximum swiped values.
         * @return Object A dictionary of maximum values, indexed by direction.
         * @inner
         */
        function createMaximumsData() {
            var maxData = {};
            maxData[LEFT] = createMaximumVO(LEFT);
            maxData[RIGHT] = createMaximumVO(RIGHT);
            maxData[UP] = createMaximumVO(UP);
            maxData[DOWN] = createMaximumVO(DOWN);

            return maxData;
        }

        /**
         * Creates a map maximum swiped values for a given swipe direction
         * @param {string} The direction that these values will be associated with
         * @return Object Maximum values
         * @inner
         */
        function createMaximumVO(dir) {
            return {
                direction: dir,
                distance: 0
            }
        }


        //
        // MATHS / UTILS
        //

        /**
         * Calculate the duration of the swipe
         * @return int
         * @inner
         */
        function calculateDuration() {
            return endTime - startTime;
        }

        /**
         * Calculate the distance between 2 touches (pinch)
         * @param {point} startPoint A point object containing x and y co-ordinates
         * @param {point} endPoint A point object containing x and y co-ordinates
         * @return int;
         * @inner
         */
        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x);
            var diffY = Math.abs(startPoint.y - endPoint.y);

            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
        }

        /**
         * Calculate the zoom factor between the start and end distances
         * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
         * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
         * @return float The zoom value from 0 to 1.
         * @inner
         */
        function calculatePinchZoom(startDistance, endDistance) {
            var percent = (endDistance / startDistance) * 1;
            return percent.toFixed(2);
        }


        /**
         * Returns the pinch direction, either IN or OUT for the given points
         * @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
         * @see $.fn.swipe.directions
         * @inner
         */
        function calculatePinchDirection() {
            if (pinchZoom < 1) {
                return OUT;
            } else {
                return IN;
            }
        }


        /**
         * Calculate the length / distance of the swipe
         * @param {point} startPoint A point object containing x and y co-ordinates
         * @param {point} endPoint A point object containing x and y co-ordinates
         * @return int
         * @inner
         */
        function calculateDistance(startPoint, endPoint) {
            return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
        }

        /**
         * Calculate the angle of the swipe
         * @param {point} startPoint A point object containing x and y co-ordinates
         * @param {point} endPoint A point object containing x and y co-ordinates
         * @return int
         * @inner
         */
        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x;
            var y = endPoint.y - startPoint.y;
            var r = Math.atan2(y, x); //radians
            var angle = Math.round(r * 180 / Math.PI); //degrees

            //ensure value is positive
            if (angle < 0) {
                angle = 360 - Math.abs(angle);
            }

            return angle;
        }

        /**
         * Calculate the direction of the swipe
         * This will also call calculateAngle to get the latest angle of swipe
         * @param {point} startPoint A point object containing x and y co-ordinates
         * @param {point} endPoint A point object containing x and y co-ordinates
         * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
         * @see $.fn.swipe.directions
         * @inner
         */
        function calculateDirection(startPoint, endPoint) {

            if (comparePoints(startPoint, endPoint)) {
                return NONE;
            }

            var angle = calculateAngle(startPoint, endPoint);

            if ((angle <= 45) && (angle >= 0)) {
                return LEFT;
            } else if ((angle <= 360) && (angle >= 315)) {
                return LEFT;
            } else if ((angle >= 135) && (angle <= 225)) {
                return RIGHT;
            } else if ((angle > 45) && (angle < 135)) {
                return DOWN;
            } else {
                return UP;
            }
        }


        /**
         * Returns a MS time stamp of the current time
         * @return int
         * @inner
         */
        function getTimeStamp() {
            var now = new Date();
            return now.getTime();
        }



        /**
         * Returns a bounds object with left, right, top and bottom properties for the element specified.
         * @param {DomNode} The DOM node to get the bounds for.
         */
        function getbounds(el) {
            el = $(el);
            var offset = el.offset();

            var bounds = {
                left: offset.left,
                right: offset.left + el.outerWidth(),
                top: offset.top,
                bottom: offset.top + el.outerHeight()
            }

            return bounds;
        }


        /**
         * Checks if the point object is in the bounds object.
         * @param {object} point A point object.
         * @param {int} point.x The x value of the point.
         * @param {int} point.y The x value of the point.
         * @param {object} bounds The bounds object to test
         * @param {int} bounds.left The leftmost value
         * @param {int} bounds.right The righttmost value
         * @param {int} bounds.top The topmost value
         * @param {int} bounds.bottom The bottommost value
         */
        function isInBounds(point, bounds) {
            return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
        };

        /**
         * Checks if the two points are equal
         * @param {object} point A point object.
         * @param {object} point B point object.
         * @return true of the points match
         */
        function comparePoints(pointA, pointB) {
            return (pointA.x == pointB.x && pointA.y == pointB.y);
        }


    }




    /**
     * A catch all handler that is triggered for all swipe directions.
     * @name $.fn.swipe#swipe
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user swiped
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {object} fingerData The coordinates of fingers in event
     * @param {string} currentDirection The current direction the user is swiping.
     */




    /**
     * A handler that is triggered for "left" swipes.
     * @name $.fn.swipe#swipeLeft
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user swiped
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {object} fingerData The coordinates of fingers in event
     * @param {string} currentDirection The current direction the user is swiping.
     */

    /**
     * A handler that is triggered for "right" swipes.
     * @name $.fn.swipe#swipeRight
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user swiped
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {object} fingerData The coordinates of fingers in event
     * @param {string} currentDirection The current direction the user is swiping.
     */

    /**
     * A handler that is triggered for "up" swipes.
     * @name $.fn.swipe#swipeUp
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user swiped
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {object} fingerData The coordinates of fingers in event
     * @param {string} currentDirection The current direction the user is swiping.
     */

    /**
     * A handler that is triggered for "down" swipes.
     * @name $.fn.swipe#swipeDown
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user swiped
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {object} fingerData The coordinates of fingers in event
     * @param {string} currentDirection The current direction the user is swiping.
     */

    /**
     * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
     * This is triggered regardless of swipe thresholds.
     * @name $.fn.swipe#swipeStatus
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
     * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {object} fingerData The coordinates of fingers in event
     * @param {string} currentDirection The current direction the user is swiping.
     */

    /**
     * A handler triggered for pinch in events.
     * @name $.fn.swipe#pinchIn
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user pinched
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
     * @param {object} fingerData The coordinates of fingers in event
     */

    /**
     * A handler triggered for pinch out events.
     * @name $.fn.swipe#pinchOut
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user pinched
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
     * @param {object} fingerData The coordinates of fingers in event
     */

    /**
     * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
     * @name $.fn.swipe#pinchStatus
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
     * @param {int} distance The distance the user pinched
     * @param {int} duration The duration of the swipe in milliseconds
     * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
     * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
     * @param {object} fingerData The coordinates of fingers in event
     */

    /**
     * A click handler triggered when a user simply clicks, rather than swipes on an element.
     * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
     * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
     * Use the <code>tap</code> event instead.
     * @name $.fn.swipe#click
     * @event
     * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead
     * @default null
     * @param {EventObject} event The original event object
     * @param {DomObject} target The element clicked on.
     */

    /**
     * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
     * @name $.fn.swipe#tap
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {DomObject} target The element clicked on.
     */

    /**
     * A double tap handler triggered when a user double clicks or taps on an element.
     * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property.
     * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
     * as the script needs to check if its a double tap.
     * @name $.fn.swipe#doubleTap
     * @see  $.fn.swipe.defaults#doubleTapThreshold
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {DomObject} target The element clicked on.
     */

    /**
     * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
     * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
     * @name $.fn.swipe#longTap
     * @see  $.fn.swipe.defaults#longTapThreshold
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {DomObject} target The element clicked on.
     */

    /**
     * A hold tap handler triggered as soon as the longTapThreshold is reached
     * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
     * @name $.fn.swipe#hold
     * @see  $.fn.swipe.defaults#longTapThreshold
     * @event
     * @default null
     * @param {EventObject} event The original event object
     * @param {DomObject} target The element clicked on.
     */

}));
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-flexbox-flexboxlegacy-fontface-fullscreen-generatedcontent-hashchange-history-hsla-localstorage-multiplebgs-opacity-pointerlock-rgba-textshadow-touchevents-video-webgl-webglextensions-websockets-domprefixes-hasevent-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, a, i, s;
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                if (e = [], t = b[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function a(e) {
        var t = S.className,
            n = Modernizr._config.classPrefix || "";
        if (E && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), E ? S.className.baseVal = t : S.className = t)
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function d() {
        var e = t.body;
        return e || (e = i(E ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, r, o) {
        var a, s, c, l, u = "modernizr",
            f = i("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) c = i("div"), c.id = o ? o[r] : u + (r + 1), f.appendChild(c);
        return a = i("style"), a.type = "text/css", a.id = "s" + u, (p.fake ? p : f).appendChild(a), p.appendChild(f), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = n(f, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = l, S.offsetHeight) : f.parentNode.removeChild(f), !!s
    }

    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function f(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? u(o, n || t) : o);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + p(t[o]) + ":" + r + ")");
            return a = a.join(" or "), l("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function g(e, t, o, a) {
        function d() {
            u && (delete j.style, delete j.modElem)
        }
        if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
            var l = m(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var u, f, p, g, h, v = ["modernizr", "tspan", "samp"]; !j.style && v.length;) u = !0, j.modElem = i(v.shift()), j.style = j.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (g = e[f], h = j.style[g], s(g, "-") && (g = c(g)), j.style[g] !== n) {
                if (a || r(o, "undefined")) return d(), "pfx" == t ? g : !0;
                try {
                    j.style[g] = o
                } catch (y) {}
                if (j.style[g] != h) return d(), "pfx" == t ? g : !0
            } return d(), !1
    }

    function h(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, o, a) : (s = (e + " " + P.join(i + " ") + i).split(" "), f(s, t, n))
    }

    function v(e, t, r) {
        return h(e, n, n, t, r)
    }
    var y = [],
        b = [],
        x = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr, Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
    });
    var T = !1;
    try {
        T = "WebSocket" in e && 2 === e.WebSocket.CLOSING
    } catch (w) {}
    Modernizr.addTest("websockets", T), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    });
    var C = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = C;
    var S = t.documentElement,
        E = "svg" === S.nodeName.toLowerCase();
    E || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = b.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = n + " " + e, d(t)
        }

        function a(e) {
            var t = y[e[h]];
            return t || (t = {}, v++, e[h] = v, y[v] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) o.createElement(s[i]);
            return o
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return b.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }

        function d(e) {
            e || (e = t);
            var r = a(e);
            return !b.shivCSS || l || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
        }
        var l, u, f = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                l = !0, u = !0
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: d,
            createElement: i,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = b, d(t), "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof e ? e : this, t);
    var k = "Moz O ms Webkit",
        P = x._config.usePrefixes ? k.toLowerCase().split(" ") : [];
    x._domPrefixes = P;
    var _ = function() {
        function e(e, t) {
            var o;
            return e ? (t && "string" != typeof t || (t = i(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = i("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    x.hasEvent = _, Modernizr.addTest("hashchange", function() {
        return _("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    }), Modernizr.addTest("audio", function() {
        var e = i("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = i("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("video", function() {
        var e = i("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("webgl", function() {
        var t = i("canvas"),
            n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", o = 0, a = C.length - 1; a > o; o++) e = 0 === o ? "to " : "", r += t + C[o] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var s = i("a"),
            c = s.style;
        return c.cssText = r, ("" + c.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("multiplebgs", function() {
        var e = i("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = i("a").style;
        return e.cssText = C.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("rgba", function() {
        var e = i("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addAsyncTest(function() {
        if (Modernizr.webglextensions = new Boolean(!1), Modernizr.webgl) {
            var e, t, r;
            try {
                e = i("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl"), r = t.getSupportedExtensions()
            } catch (o) {
                return
            }
            t !== n && (Modernizr.webglextensions = new Boolean(!0));
            for (var a = -1, s = r.length; ++a < s;) Modernizr.webglextensions[r[a]] = !0;
            e = n
        }
    }), Modernizr.addTest("hsla", function() {
        var e = i("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", s(e.backgroundColor, "rgba") || s(e.backgroundColor, "hsla")
    });
    var z = "CSS" in e && "supports" in e.CSS,
        R = "supportsCSS" in e;
    Modernizr.addTest("supports", z || R);
    var N = x._config.usePrefixes ? k.split(" ") : [];
    x._cssomPrefixes = N;
    var $ = x.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            $(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var A = function() {
        var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            o = 533 > t && e.match(/android/gi);
        return n || o || r
    }();
    A ? Modernizr.addTest("fontface", !1) : $('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"),
            o = r.sheet || r.styleSheet,
            a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "",
            i = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }), $('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    }), $("#modernizr { height: 50vh; }", function(t) {
        var n = parseInt(e.innerHeight / 2, 10),
            r = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).height, 10);
        Modernizr.addTest("cssvhunit", r == n)
    }), $("#modernizr { width: 50vw; }", function(t) {
        var n = parseInt(e.innerWidth / 2, 10),
            r = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        Modernizr.addTest("cssvwunit", r == n)
    });
    var F = function(t) {
        var r, o = C.length,
            a = e.CSSRule;
        if ("undefined" == typeof a) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + t;
        for (var i = 0; o > i; i++) {
            var s = C[i],
                c = s.toUpperCase() + "_" + r;
            if (c in a) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = F;
    var O = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete O.elem
    });
    var j = {
        style: O.elem.style
    };
    Modernizr._q.unshift(function() {
        delete j.style
    });
    var B = x.testProp = function(e, t, r) {
        return g([e], n, t, r)
    };
    Modernizr.addTest("textshadow", B("textShadow", "1px 1px")), x.testAllProps = h, x.testAllProps = v, Modernizr.addTest("cssanimations", v("animationName", "a", !0)), Modernizr.addTest("backgroundsize", v("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", v("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", v("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", v("boxShadow", "1px 1px", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = v("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = v("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || v(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)), Modernizr.addTest("cssreflections", v("boxReflect", "above", !0)), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransforms3d", function() {
            var e = !!v("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in S.style)) {
                var n, r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", $(r + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), Modernizr.addTest("csstransitions", v("transition", "all", !0));
    var L = x.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? F(e) : (-1 != e.indexOf("-") && (e = c(e)), t ? h(e, t, n) : h(e, "pfx"))
    };
    Modernizr.addTest("fullscreen", !(!L("exitFullscreen", t, !1) && !L("cancelFullScreen", t, !1))), Modernizr.addTest("pointerlock", !!L("exitPointerLock", t)), o(), a(y), delete x.addTest, delete x.addAsyncTest;
    for (var I = 0; I < Modernizr._q.length; I++) Modernizr._q[I]();
    e.Modernizr = Modernizr
}(window, document);
/**
 * PgwBrowser - Version 1.3
 *
 * Copyright 2014-2015, Jonathan M. Piat
 * http://pgwjs.com - http://pagawa.com
 * 
 * Released under the GNU GPLv3 license - http://opensource.org/licenses/gpl-3.0
 */
(function(a) {
    a.pgwBrowser = function() {
        var c = {};
        c.userAgent = navigator.userAgent;
        c.browser = {};
        c.viewport = {};
        c.os = {};
        resizeEvent = null;
        var b = [{
            name: "Chromium",
            group: "Chrome",
            identifier: "Chromium/([0-9.]*)"
        }, {
            name: "Chrome Mobile",
            group: "Chrome",
            identifier: "Chrome/([0-9.]*) Mobile",
            versionIdentifier: "Chrome/([0-9.]*)"
        }, {
            name: "Chrome",
            group: "Chrome",
            identifier: "Chrome/([0-9.]*)"
        }, {
            name: "Chrome for iOS",
            group: "Chrome",
            identifier: "CriOS/([0-9.]*)"
        }, {
            name: "Android Browser",
            group: "Chrome",
            identifier: "CrMo/([0-9.]*)"
        }, {
            name: "Firefox",
            group: "Firefox",
            identifier: "Firefox/([0-9.]*)"
        }, {
            name: "Opera Mini",
            group: "Opera",
            identifier: "Opera Mini/([0-9.]*)"
        }, {
            name: "Opera",
            group: "Opera",
            identifier: "Opera ([0-9.]*)"
        }, {
            name: "Opera",
            group: "Opera",
            identifier: "Opera/([0-9.]*)",
            versionIdentifier: "Version/([0-9.]*)"
        }, {
            name: "IEMobile",
            group: "Explorer",
            identifier: "IEMobile/([0-9.]*)"
        }, {
            name: "Internet Explorer",
            group: "Explorer",
            identifier: "MSIE ([a-zA-Z0-9.]*)"
        }, {
            name: "Internet Explorer",
            group: "Explorer",
            identifier: "Trident/([0-9.]*)",
            versionIdentifier: "rv:([0-9.]*)"
        }, {
            name: "Spartan",
            group: "Spartan",
            identifier: "Edge/([0-9.]*)",
            versionIdentifier: "Edge/([0-9.]*)"
        }, {
            name: "Safari",
            group: "Safari",
            identifier: "Safari/([0-9.]*)",
            versionIdentifier: "Version/([0-9.]*)"
        }];
        var j = [{
            name: "Windows 2000",
            group: "Windows",
            identifier: "Windows NT 5.0",
            version: "5.0"
        }, {
            name: "Windows XP",
            group: "Windows",
            identifier: "Windows NT 5.1",
            version: "5.1"
        }, {
            name: "Windows Vista",
            group: "Windows",
            identifier: "Windows NT 6.0",
            version: "6.0"
        }, {
            name: "Windows 7",
            group: "Windows",
            identifier: "Windows NT 6.1",
            version: "7.0"
        }, {
            name: "Windows 8",
            group: "Windows",
            identifier: "Windows NT 6.2",
            version: "8.0"
        }, {
            name: "Windows 8.1",
            group: "Windows",
            identifier: "Windows NT 6.3",
            version: "8.1"
        }, {
            name: "Windows 10",
            group: "Windows",
            identifier: "Windows NT 10.0",
            version: "10.0"
        }, {
            name: "Windows Phone",
            group: "Windows Phone",
            identifier: "Windows Phone ([0-9.]*)",
        }, {
            name: "Windows Phone",
            group: "Windows Phone",
            identifier: "Windows Phone OS ([0-9.]*)",
        }, {
            name: "Windows",
            group: "Windows",
            identifier: "Windows",
        }, {
            name: "Chrome OS",
            group: "Chrome OS",
            identifier: "CrOS",
        }, {
            name: "Android",
            group: "Android",
            identifier: "Android",
            versionIdentifier: "Android ([a-zA-Z0-9.-]*)"
        }, {
            name: "iPad",
            group: "iOS",
            identifier: "iPad",
            versionIdentifier: "OS ([0-9_]*)",
            versionSeparator: "[_|.]"
        }, {
            name: "iPod",
            group: "iOS",
            identifier: "iPod",
            versionIdentifier: "OS ([0-9_]*)",
            versionSeparator: "[_|.]"
        }, {
            name: "iPhone",
            group: "iOS",
            identifier: "iPhone OS",
            versionIdentifier: "OS ([0-9_]*)",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Yosemite",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])10([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Mavericks",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])9([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Mountain Lion",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])8([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Lion",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])7([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Snow Leopard",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])6([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Leopard",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])5([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Tiger",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])4([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Panther",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])3([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Jaguar",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])2([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Puma",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])1([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Cheetah",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])0([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS",
            group: "Mac OS",
            identifier: "Mac OS"
        }, {
            name: "Ubuntu",
            group: "Linux",
            identifier: "Ubuntu",
            versionIdentifier: "Ubuntu/([0-9.]*)"
        }, {
            name: "Debian",
            group: "Linux",
            identifier: "Debian",
        }, {
            name: "Gentoo",
            group: "Linux",
            identifier: "Gentoo",
        }, {
            name: "Linux",
            group: "Linux",
            identifier: "Linux",
        }, {
            name: "BlackBerry",
            group: "BlackBerry",
            identifier: "BlackBerry",
        }];
        var h = function() {
            var o = c.userAgent.toLowerCase();
            for (i in b) {
                var p = new RegExp(b[i].identifier.toLowerCase());
                var n = p.exec(o);
                if (n != null && n[1]) {
                    c.browser.name = b[i].name;
                    c.browser.group = b[i].group;
                    if (b[i].versionIdentifier) {
                        var m = new RegExp(b[i].versionIdentifier.toLowerCase());
                        var l = m.exec(o);
                        if (l != null && l[1]) {
                            k(l[1])
                        }
                    } else {
                        k(n[1])
                    }
                    break
                }
            }
            return true
        };
        var k = function(l) {
            var m = l.split(".", 2);
            c.browser.fullVersion = l;
            if (m[0]) {
                c.browser.majorVersion = parseInt(m[0])
            }
            if (m[1]) {
                c.browser.minorVersion = parseInt(m[1])
            }
            return true
        };
        var f = function() {
            var o = c.userAgent.toLowerCase();
            for (i in j) {
                var p = new RegExp(j[i].identifier.toLowerCase());
                var n = p.exec(o);
                if (n != null) {
                    c.os.name = j[i].name;
                    c.os.group = j[i].group;
                    if (j[i].version) {
                        g(j[i].version, (j[i].versionSeparator) ? j[i].versionSeparator : ".")
                    } else {
                        if (n[1]) {
                            g(n[1], (j[i].versionSeparator) ? j[i].versionSeparator : ".")
                        } else {
                            if (j[i].versionIdentifier) {
                                var m = new RegExp(j[i].versionIdentifier.toLowerCase());
                                var l = m.exec(o);
                                if (l != null && l[1]) {
                                    g(l[1], (j[i].versionSeparator) ? j[i].versionSeparator : ".")
                                }
                            }
                        }
                    }
                    break
                }
            }
            return true
        };
        var g = function(l, n) {
            if (n.substr(0, 1) == "[") {
                var m = l.split(new RegExp(n, "g"), 2)
            } else {
                var m = l.split(n, 2)
            }
            if (n != ".") {
                l = l.replace(new RegExp(n, "g"), ".")
            }
            c.os.fullVersion = l;
            if (m[0]) {
                c.os.majorVersion = parseInt(m[0])
            }
            if (m[1]) {
                c.os.minorVersion = parseInt(m[1])
            }
            return true
        };
        var d = function(l) {
            c.viewport.width = a(window).width();
            c.viewport.height = a(window).height();
            if (typeof l == "undefined") {
                if (resizeEvent == null) {
                    a(window).trigger("PgwBrowser::StartResizing")
                } else {
                    clearTimeout(resizeEvent)
                }
                resizeEvent = setTimeout(function() {
                    a(window).trigger("PgwBrowser::StopResizing");
                    clearTimeout(resizeEvent);
                    resizeEvent = null
                }, 300)
            }
            return true
        };
        var e = function() {
            if (typeof window.orientation == "undefined") {
                if (c.viewport.width >= c.viewport.height) {
                    c.viewport.orientation = "landscape"
                } else {
                    c.viewport.orientation = "portrait"
                }
            } else {
                switch (window.orientation) {
                    case -90:
                    case 90:
                        c.viewport.orientation = "landscape";
                        break;
                    default:
                        c.viewport.orientation = "portrait";
                        break
                }
            }
            a(window).trigger("PgwBrowser::OrientationChange");
            return true
        };
        if (typeof window.pgwJsUserAgentTester != "undefined") {
            c.userAgent = window.pgwJsUserAgentTester
        }
        h();
        f();
        d(true);
        e();
        a(window).on("orientationchange", function(l) {
            e()
        });
        a(window).resize(function(l) {
            d()
        });
        return c
    }
})(window.Zepto || window.jQuery);

// performance.now() polyfill from https://gist.github.com/paulirish/5438650
'use strict';

(function() {

    // prepare base perf object
    if (typeof window.performance === 'undefined') {
        window.performance = {};
    }

    if (!window.performance.now) {

        var nowOffset = Date.now();

        if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart;
        }

        window.performance.now = function now() {
            return Date.now() - nowOffset;
        };

    }

    if (!window.performance.mark) {
        window.performance.mark = function() {}
    }

    if (!window.performance.measure) {
        window.performance.measure = function() {}
    }

})();

window.rStats = function rStats(settings) {

    function iterateKeys(array, callback) {
        var keys = Object.keys(array);
        for (var j = 0, l = keys.length; j < l; j++) {
            callback(keys[j]);
        }
    }

    function importCSS(url) {

        var element = document.createElement('link');
        element.href = url;
        element.rel = 'stylesheet';
        element.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(element);

    }

    var _settings = settings || {};
    var _colours = _settings.colours || ['#850700', '#c74900', '#fcb300', '#284280', '#4c7c0c'];

    var _cssFont = 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300';
    var _cssRStats = (_settings.CSSPath ? _settings.CSSPath : '') + 'rStats.css';

    var _css = _settings.css || [_cssFont, _cssRStats];
    _css.forEach(function(uri) {
        importCSS(uri);
    });

    if (!_settings.values) _settings.values = {};

    var _base, _div, _elHeight = 10,
        _elWidth = 200;
    var _perfCounters = {};


    function Graph(_dom, _id, _defArg) {

        var _def = _defArg || {};
        var _canvas = document.createElement('canvas'),
            _ctx = _canvas.getContext('2d'),
            _max = 0,
            _current = 0;

        var c = _def.color ? _def.color : '#666666';

        var _dotCanvas = document.createElement('canvas'),
            _dotCtx = _dotCanvas.getContext('2d');
        _dotCanvas.width = 1;
        _dotCanvas.height = 2 * _elHeight;
        _dotCtx.fillStyle = '#444444';
        _dotCtx.fillRect(0, 0, 1, 2 * _elHeight);
        _dotCtx.fillStyle = c;
        _dotCtx.fillRect(0, _elHeight, 1, _elHeight);
        _dotCtx.fillStyle = '#ffffff';
        _dotCtx.globalAlpha = 0.5;
        _dotCtx.fillRect(0, _elHeight, 1, 1);
        _dotCtx.globalAlpha = 1;

        var _alarmCanvas = document.createElement('canvas'),
            _alarmCtx = _alarmCanvas.getContext('2d');
        _alarmCanvas.width = 1;
        _alarmCanvas.height = 2 * _elHeight;
        _alarmCtx.fillStyle = '#444444';
        _alarmCtx.fillRect(0, 0, 1, 2 * _elHeight);
        _alarmCtx.fillStyle = '#b70000';
        _alarmCtx.fillRect(0, _elHeight, 1, _elHeight);
        _alarmCtx.globalAlpha = 0.5;
        _alarmCtx.fillStyle = '#ffffff';
        _alarmCtx.fillRect(0, _elHeight, 1, 1);
        _alarmCtx.globalAlpha = 1;

        function _init() {

            _canvas.width = _elWidth;
            _canvas.height = _elHeight;
            _canvas.style.width = _canvas.width + 'px';
            _canvas.style.height = _canvas.height + 'px';
            _canvas.className = 'rs-canvas';
            _dom.appendChild(_canvas);

            _ctx.fillStyle = '#444444';
            _ctx.fillRect(0, 0, _canvas.width, _canvas.height);

        }

        function _draw(v, alarm) {
            _current += (v - _current) * 0.1;
            _max *= 0.99;
            if (_current > _max) _max = _current;
            _ctx.drawImage(_canvas, 1, 0, _canvas.width - 1, _canvas.height, 0, 0, _canvas.width - 1, _canvas.height);
            if (alarm) {
                _ctx.drawImage(_alarmCanvas, _canvas.width - 1, _canvas.height - _current * _canvas.height / _max - _elHeight);
            } else {
                _ctx.drawImage(_dotCanvas, _canvas.width - 1, _canvas.height - _current * _canvas.height / _max - _elHeight);
            }
        }

        _init();

        return {
            draw: _draw
        };

    }

    function StackGraph(_dom, _num) {

        var _canvas = document.createElement('canvas'),
            _ctx = _canvas.getContext('2d');

        function _init() {

            _canvas.width = _elWidth;
            _canvas.height = _elHeight * _num;
            _canvas.style.width = _canvas.width + 'px';
            _canvas.style.height = _canvas.height + 'px';
            _canvas.className = 'rs-canvas';
            _dom.appendChild(_canvas);

            _ctx.fillStyle = '#444444';
            _ctx.fillRect(0, 0, _canvas.width, _canvas.height);

        }

        function _draw(v) {
            _ctx.drawImage(_canvas, 1, 0, _canvas.width - 1, _canvas.height, 0, 0, _canvas.width - 1, _canvas.height);
            var th = 0;
            iterateKeys(v, function(j) {
                var h = v[j] * _canvas.height;
                _ctx.fillStyle = _colours[j];
                _ctx.fillRect(_canvas.width - 1, th, 1, h);
                th += h;
            });
        }

        _init();

        return {
            draw: _draw
        };

    }

    function PerfCounter(id, group) {

        var _id = id,
            _time,
            _value = 0,
            _total = 0,
            _averageValue = 0,
            _accumValue = 0,
            _accumStart = performance.now(),
            _accumSamples = 0,
            _dom = document.createElement('div'),
            _spanId = document.createElement('span'),
            _spanValue = document.createElement('div'),
            _spanValueText = document.createTextNode(''),
            _def = _settings ? _settings.values[_id.toLowerCase()] : null,
            _graph = new Graph(_dom, _id, _def),
            _started = false;

        _dom.className = 'rs-counter-base';

        _spanId.className = 'rs-counter-id';
        _spanId.textContent = (_def && _def.caption) ? _def.caption : _id;

        _spanValue.className = 'rs-counter-value';
        _spanValue.appendChild(_spanValueText);

        _dom.appendChild(_spanId);
        _dom.appendChild(_spanValue);
        if (group) group.div.appendChild(_dom);
        else _div.appendChild(_dom);

        _time = performance.now();

        function _average(v) {
            if (_def && _def.average) {
                _accumValue += v;
                _accumSamples++;
                var t = performance.now();
                if (t - _accumStart >= (_def.avgMs || 1000)) {
                    _averageValue = _accumValue / _accumSamples;
                    _accumValue = 0;
                    _accumStart = t;
                    _accumSamples = 0;
                }
            }
        }

        function _start() {
            _time = performance.now();
            if (_settings.userTimingAPI) performance.mark(_id + '-start');
            _started = true;
        }

        function _end() {
            _value = performance.now() - _time;
            if (_settings.userTimingAPI) {
                performance.mark(_id + '-end');
                if (_started) {
                    performance.measure(_id, _id + '-start', _id + '-end');
                }
            }
            _average(_value);
        }

        function _tick() {
            _end();
            _start();
        }

        function _draw() {
            var v = (_def && _def.average) ? _averageValue : _value;
            _spanValueText.nodeValue = Math.round(v * 100) / 100;
            var a = (_def && ((_def.below && _value < _def.below) || (_def.over && _value > _def.over)));
            _graph.draw(_value, a);
            _dom.style.color = a ? '#b70000' : '#ffffff';
        }

        function _frame() {
            var t = performance.now();
            var e = t - _time;
            _total++;
            if (e > 1000) {
                if (_def && _def.interpolate === false) {
                    _value = _total;
                } else {
                    _value = _total * 1000 / e;
                }
                _total = 0;
                _time = t;
                _average(_value);
            }
        }

        function _set(v) {
            _value = v;
            _average(_value);
        }

        return {
            set: _set,
            start: _start,
            tick: _tick,
            end: _end,
            frame: _frame,
            value: function() {
                return _value;
            },
            draw: _draw
        };

    }

    function sample() {

        var _value = 0;

        function _set(v) {
            _value = v;
        }

        return {
            set: _set,
            value: function() {
                return _value;
            }
        };

    }

    function _perf(idArg) {

        var id = idArg.toLowerCase();
        if (id === undefined) id = 'default';
        if (_perfCounters[id]) return _perfCounters[id];

        var group = null;
        if (_settings && _settings.groups) {
            iterateKeys(_settings.groups, function(j) {
                var g = _settings.groups[parseInt(j, 10)];
                if (!group && g.values.indexOf(id.toLowerCase()) !== -1) {
                    group = g;
                }
            });
        }

        var p = new PerfCounter(id, group);
        _perfCounters[id] = p;
        return p;

    }

    function _init() {

        if (_settings.plugins) {
            if (!_settings.values) _settings.values = {};
            if (!_settings.groups) _settings.groups = [];
            if (!_settings.fractions) _settings.fractions = [];
            for (var j = 0; j < _settings.plugins.length; j++) {
                _settings.plugins[j].attach(_perf);
                iterateKeys(_settings.plugins[j].values, function(k) {
                    _settings.values[k] = _settings.plugins[j].values[k];
                });
                _settings.groups = _settings.groups.concat(_settings.plugins[j].groups);
                _settings.fractions = _settings.fractions.concat(_settings.plugins[j].fractions);
            }
        } else {
            _settings.plugins = {};
        }

        _base = document.createElement('div');
        _base.className = 'rs-base';
        _div = document.createElement('div');
        _div.className = 'rs-container';
        _div.style.height = 'auto';
        _base.appendChild(_div);
        document.body.appendChild(_base);

        if (!_settings) return;

        if (_settings.groups) {
            iterateKeys(_settings.groups, function(j) {
                var g = _settings.groups[parseInt(j, 10)];
                var div = document.createElement('div');
                div.className = 'rs-group';
                g.div = div;
                var h1 = document.createElement('h1');
                h1.textContent = g.caption;
                h1.addEventListener('click', function(e) {
                    this.classList.toggle('hidden');
                    e.preventDefault();
                }.bind(div));
                _div.appendChild(h1);
                _div.appendChild(div);
            });
        }

        if (_settings.fractions) {
            iterateKeys(_settings.fractions, function(j) {
                var f = _settings.fractions[parseInt(j, 10)];
                var div = document.createElement('div');
                div.className = 'rs-fraction';
                var legend = document.createElement('div');
                legend.className = 'rs-legend';

                var h = 0;
                iterateKeys(_settings.fractions[j].steps, function(k) {
                    var p = document.createElement('p');
                    p.textContent = _settings.fractions[j].steps[k];
                    p.style.color = _colours[h];
                    legend.appendChild(p);
                    h++;
                });
                div.appendChild(legend);
                div.style.height = h * _elHeight + 'px';
                f.div = div;
                var graph = new StackGraph(div, h);
                f.graph = graph;
                _div.appendChild(div);
            });
        }

    }

    function _update() {

        iterateKeys(_settings.plugins, function(j) {
            _settings.plugins[j].update();
        });

        iterateKeys(_perfCounters, function(j) {
            _perfCounters[j].draw();
        });

        if (_settings && _settings.fractions) {
            iterateKeys(_settings.fractions, function(j) {
                var f = _settings.fractions[parseInt(j, 10)];
                var v = [];
                var base = _perfCounters[f.base.toLowerCase()];
                if (base) {
                    base = base.value();
                    iterateKeys(_settings.fractions[j].steps, function(k) {
                        var s = _settings.fractions[j].steps[parseInt(k, 10)].toLowerCase();
                        var val = _perfCounters[s];
                        if (val) {
                            v.push(val.value() / base);
                        }
                    });
                }
                f.graph.draw(v);
            });
        }

        /*if( _height != _div.clientHeight ) {
            _height = _div.clientHeight;
            _base.style.height = _height + 2 * _elHeight + 'px';
        console.log( _base.clientHeight );
        }*/

    }

    _init();

    return function(id) {
        if (id) return _perf(id);
        return {
            element: _base,
            update: _update
        };
    };

}

if (typeof module === 'object') {
    module.exports = window.rStats;
}
var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var spacedesk;
(function(spacedesk) {
    var Utils = (function() {
        function Utils() {}
        Object.defineProperty(Utils, "isIE", {
            get: function() {
                return Utils.browser.browser.group === "Explorer" || Utils.browser.userAgent.indexOf("Edge") > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Utils, "isEdge", {
            get: function() {
                return Utils.browser.userAgent.indexOf("Edge") > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Utils, "isAndroid", {
            get: function() {
                return Utils.browser.os.group === "Android";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Utils, "iOSDevice", {
            get: function() {
                return Utils.browser.os.group === "iOS";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Utils, "isDesktopDevice", {
            get: function() {
                switch (Utils.browser.os.group) {
                    case "Windows":
                    case "Chrome OS":
                    case "Mac OS":
                    case "Linux":
                        return true;
                    default:
                        return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Utils, "isRetinaDisplay", {
            get: function() {
                var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
                if (window.devicePixelRatio > 1) {
                    return true;
                }
                if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Utils.browser = $.pgwBrowser();
        return Utils;
    }());
    spacedesk.Utils = Utils;
})(spacedesk || (spacedesk = {}));
var SpacedeskEvent = (function() {
    function SpacedeskEvent() {
        this.handlers = [];
    }
    SpacedeskEvent.prototype.on = function(handler) {
        this.handlers.push(handler);
    };
    SpacedeskEvent.prototype.off = function(handler) {
        this.handlers = this.handlers.filter(function(h) {
            return h !== handler;
        });
    };
    SpacedeskEvent.prototype.trigger = function(data) {
        for (var i = 0; i < this.handlers.length; i++) {
            var element = this.handlers[i];
            element(data);
        }
    };
    return SpacedeskEvent;
}());
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Resolution = (function() {
            function Resolution(width, height) {
                if (width === void 0) {
                    width = 0;
                }
                if (height === void 0) {
                    height = 0;
                }
                this.width = width;
                this.height = height;
            }
            Resolution.GetScreenResolution = function() {
                if (spacedesk.Utils.isDesktopDevice) {
                    return Resolution.GetFullScreenResolution();
                }
                var width = window.innerWidth;
                var height = window.innerHeight;
                width *= window.devicePixelRatio;
                height *= window.devicePixelRatio;
                return new Resolution(width, height);
            };
            Resolution.GetFullScreenResolution = function() {
                return new Resolution(window.screen.width, window.screen.height);
            };
            return Resolution;
        }());
        Model.Resolution = Resolution;
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var HelpController = (function() {
                function HelpController() {
                    this.registerEvents();
                }
                HelpController.hideHelp = function() {
                    var $help = $("#help");
                    $help.removeClass(this.toggleInEffect).removeClass(this.toggleOutEffect);
                    $help.hide();
                };
                HelpController.toggleHelp = function(visible, animated) {
                    var _this = this;
                    if (visible === void 0) {
                        visible = true;
                    }
                    if (animated === void 0) {
                        animated = true;
                    }
                    var $inputs = $("#form-input");
                    var $help = $("#help");
                    if (visible && $help.hasClass(this.toggleInEffect)) {
                        return;
                    }
                    $inputs.removeClass(this.toggleInEffect).removeClass(this.toggleOutEffect);
                    $help.removeClass(this.toggleInEffect).removeClass(this.toggleOutEffect);
                    if (animated) {
                        if (visible) {
                            $("#help section").removeClass(this.stepInEffect).removeClass(this.stepOutEffect).removeClass("active");
                            var $firstSection = $("#help section:first");
                            $firstSection.addClass("active");
                            $("#help .close").toggle($firstSection.data("closeable"));
                            $inputs.addClass(this.toggleOutEffect);
                        } else {
                            $help.addClass(this.toggleOutEffect);
                        }
                        setTimeout(function() {
                            if (visible) {
                                $inputs.hide();
                                $help.show().addClass(_this.toggleInEffect);
                            } else {
                                $help.hide();
                                $inputs.show().addClass(_this.toggleInEffect);
                                setTimeout(function() {
                                    $("#server").focus().click();
                                }, 400);
                            }
                        }, 600);
                    } else {
                        if (visible) {
                            $inputs.hide();
                            $help.show();
                        } else {
                            $help.hide();
                            $inputs.show();
                        }
                    }
                };
                HelpController.prototype.registerEvents = function() {
                    var _this = this;
                    $(document).on("click", "#help-me", function() {
                        return HelpController.toggleHelp(true);
                    });
                    $(document).on("click", "#help .close", function() {
                        return HelpController.toggleHelp(false);
                    });
                    $(document).on("click", "#help a.input-button-large", function(e) {
                        return _this.nextStep(e);
                    });
                };
                HelpController.prototype.nextStep = function(e) {
                    e.preventDefault();
                    var target = $(e.target).attr("href");
                    if (target === "#close") {
                        HelpController.toggleHelp(false);
                        return;
                    }
                    var $current = $("#help section.active");
                    var $next = $current.next(target);
                    $current.removeClass(HelpController.stepInEffect).removeClass(HelpController.stepOutEffect);
                    $next.removeClass(HelpController.stepInEffect).removeClass(HelpController.stepOutEffect);
                    $current.addClass(HelpController.stepOutEffect);
                    setTimeout(function() {
                        $current.removeClass("active");
                        $next.addClass(HelpController.stepInEffect).addClass("active");
                    }, 500);
                    $("#help .close").toggle($next.data("closeable"));
                };
                HelpController.toggleInEffect = "fadeIn";
                HelpController.toggleOutEffect = "fadeOut";
                HelpController.stepInEffect = "bounceInRight";
                HelpController.stepOutEffect = "bounceOutLeft";
                return HelpController;
            }());
            UI.HelpController = HelpController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var SettingsController = (function() {
                function SettingsController(option) {
                    this.toggleInEffect = "fadeIn";
                    this.toggleOutEffect = "fadeOut";
                    this.stepInEffect = "fadeIn";
                    this.stepOutEffect = "fadeOut";
                    this.settingsChanged = false;
                    this.registerEvents(option);
                }
                Object.defineProperty(SettingsController.prototype, "ChangedSettings", {
                    get: function() {
                        return this.settingsChanged;
                    },
                    enumerable: true,
                    configurable: true
                });
                SettingsController.loadSettings = function(option) {
                    this.quality = option.quality;
                    this.customResolution = option.resolutionCustom;
                    this.subsampling = option.subsampling;
                    this.fullscreen = option.fullscreen;
                    this.framerate = option.frameRate;
                    this.kvmEnabled = option.kvmControl;
                    this.kvmKeyboardEnabled = option.kvmKeyboard;
                    this.kvmTouchAbsolute = option.kvmAbsoluteTouchPosition;
                    this.useClientResolution = option.useClientResolution;
                    this.useCustomResolution = option.useCustomResolution;
                };
                SettingsController.saveSettings = function(option) {
                    option.quality = this.quality;
                    option.resolutionCustom = this.customResolution;
                    option.subsampling = this.subsampling;
                    option.fullscreen = this.fullscreen;
                    option.frameRate = this.framerate;
                    option.kvmControl = this.kvmEnabled;
                    option.kvmKeyboard = this.kvmKeyboardEnabled;
                    option.kvmAbsoluteTouchPosition = this.kvmTouchAbsolute;
                    option.useClientResolution = this.useClientResolution;
                    option.useCustomResolution = this.useCustomResolution;
                };
                Object.defineProperty(SettingsController, "customResolution", {
                    get: function() {
                        return new spacedesk.Model.Resolution($("#customResX").val(), $("#customResY").val());
                    },
                    set: function(resolution) {
                        resolution = resolution || new spacedesk.Model.Resolution(0, 0);
                        $("#customResX").val(resolution.width);
                        $("#customResY").val(resolution.height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "fullscreen", {
                    get: function() {
                        return $("#checkboxFullscreen").is(":checked");
                    },
                    set: function(value) {
                        $("#checkboxFullscreen").prop("checked", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "framerate", {
                    get: function() {
                        return Number($("input[name='framerate']:checked").val());
                    },
                    set: function(value) {
                        $("input[name='framerate']").removeAttr("checked").prop("checked", false);
                        $("input[name='framerate'][value='" + value + "']").prop("checked", true);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "useClientResolution", {
                    get: function() {
                        return $("#checkboxClientResolution").is(":checked");
                    },
                    set: function(value) {
                        $("#checkboxClientResolution").prop("checked", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "useCustomResolution", {
                    get: function() {
                        return $("#checkboxCustomResolution").is(":checked");
                    },
                    set: function(value) {
                        $("#checkboxCustomResolution").prop("checked", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "kvmEnabled", {
                    get: function() {
                        return $("#checkboxKVM").is(":checked");
                    },
                    set: function(value) {
                        $("#checkboxKVM").prop("checked", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "kvmKeyboardEnabled", {
                    get: function() {
                        return $("#checkboxKVMKeyboard").is(":checked");
                    },
                    set: function(value) {
                        $("#checkboxKVMKeyboard").prop("checked", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "kvmTouchAbsolute", {
                    get: function() {
                        return $("#checkboxKVMTouchAbsolute").is(":checked");
                    },
                    set: function(value) {
                        $("#checkboxKVMTouchAbsolute").prop("checked", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "quality", {
                    get: function() {
                        return Number($("#rangeQuality").val());
                    },
                    set: function(value) {
                        $("#rangeQuality").val(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SettingsController, "subsampling", {
                    get: function() {
                        return Number($("input[name='subsampling']:checked").val());
                    },
                    set: function(value) {
                        $("input[name='subsampling']").removeAttr("checked").prop("checked", false);
                        $("input[name='subsampling'][value='" + value + "']").prop("checked", true);
                    },
                    enumerable: true,
                    configurable: true
                });
                SettingsController.prototype.showSettingsReloadModal = function() {
                    UI.OrientationController.resetZoom();
                    $("#modalSettingsReload").prop("checked", true).change();
                };
                SettingsController.prototype.hideSettingsReloadModal = function() {
                    UI.OrientationController.resetZoom();
                    $("#modalSettingsReload").prop("checked", false).change();
                };
                SettingsController.prototype.showSettings = function(animated) {
                    if (animated === void 0) {
                        animated = true;
                    }
                    this.toggleSettings(true, animated);
                };
                SettingsController.prototype.hideSettings = function(animated, focusInput) {
                    if (animated === void 0) {
                        animated = true;
                    }
                    if (focusInput === void 0) {
                        focusInput = true;
                    }
                    this.toggleSettings(false, animated, focusInput);
                };
                SettingsController.prototype.restoreSettings = function() {
                    SettingsController.loadSettings(spacedesk.Model.Options.currentOptions);
                    this.settingsChanged = false;
                };
                SettingsController.prototype.toggleSettings = function(visible, animated, focusInput) {
                    var _this = this;
                    if (visible === void 0) {
                        visible = true;
                    }
                    if (animated === void 0) {
                        animated = true;
                    }
                    if (focusInput === void 0) {
                        focusInput = true;
                    }
                    var $inputs = $("#form-input");
                    var $settings = $("#settings");
                    this.setKvmKeyboardState();
                    UI.OrientationController.resetZoom();
                    $("#experimental").toggle(spacedesk.Model.Options.currentOptions.experimental);
                    if (visible && $settings.hasClass(this.toggleInEffect) || !visible && $settings.hasClass(this.toggleOutEffect)) {
                        return;
                    }
                    $inputs.removeClass(this.toggleInEffect).removeClass(this.toggleOutEffect);
                    $settings.removeClass(this.toggleInEffect).removeClass(this.toggleOutEffect);
                    UI.HelpController.hideHelp();
                    $("#start footer").toggle(!visible);
                    if (animated) {
                        if (visible) {
                            $inputs.addClass(this.toggleOutEffect);
                        } else {
                            $settings.addClass(this.toggleOutEffect);
                            this.settingsChanged = false;
                        }
                        setTimeout(function() {
                            if (visible) {
                                $inputs.hide();
                                $settings.show().addClass(_this.toggleInEffect);
                            } else {
                                $settings.hide();
                                $inputs.show().addClass(_this.toggleInEffect);
                                if (focusInput) {
                                    setTimeout(function() {
                                        $("#server").focus().click();
                                    }, 400);
                                }
                            }
                        }, 300);
                    } else {
                        if (visible) {
                            $inputs.hide();
                            $settings.show();
                        } else {
                            $settings.hide();
                            $inputs.show();
                            this.settingsChanged = false;
                            if (focusInput) {
                                $("#server").focus().click();
                            }
                        }
                    }
                };
                SettingsController.prototype.registerEvents = function(option) {
                    var _this = this;
                    $.each(SettingsController.screenResolutions, function(index, resolution) {
                        var text = resolution.width + "x" + resolution.height;
                        if (resolution.width <= 0) {
                            text = "Resolutions...";
                        }
                        $("#customResolution").append($("<option/>", {
                            value: index,
                            text: text
                        }));
                    });
                    $("#customResolution option[value='0']").prop("selected", true);
                    $("#customResolution").on("change", function() {
                        return _this.onChangeCustomResolution();
                    });
                    $("#customResX").on("change", function() {
                        return _this.onChangeCustomResolutionX();
                    });
                    $("#customResY").on("change", function() {
                        return _this.onChangeCustomResolutionY();
                    });
                    SettingsController.loadSettings(option);
                    var res = spacedesk.Model.Resolution.GetScreenResolution();
                    $("#resolutionSettings").html(res.width + "x" + res.height);
                    $("input, select", $("#settings")).bind("change paste keyup", function() {
                        _this.settingsChanged = true;
                    });
                    $("#checkboxKVM").on("change", function() {
                        return _this.setKvmKeyboardState();
                    });
                    $("#checkboxKVMTouchAbsolute").on("change", function() {
                        return _this.setKvmAbsoluteState();
                    });
                    $("#checkboxCustomResolution").on("change", function() {
                        return _this.setCustomeResolutionState();
                    });
                    $("#checkboxClientResolution").on("change", function() {
                        return _this.setNativeResulotionState();
                    });
                };
                SettingsController.prototype.setKvmKeyboardState = function() {
                    var checked = $("#checkboxKVM").is(":checked");
                    if (checked) {
                        $("#checkboxKVMKeyboard").removeAttr("disabled");
                        $("#checkboxKeyboard").removeClass("disabled");
                    } else {
                        $("#checkboxKeyboard").addClass("disabled");
                        $("#checkboxKVMKeyboard").prop("disabled", true);
                        $("#checkboxKVMKeyboard").prop("checked", false);
                        $("#checkboxKVMTouchAbsolute").prop("checked", false);
                    }
                };
                SettingsController.prototype.onChangeCustomResolution = function() {
                    var selected = SettingsController.screenResolutions[$("#customResolution").val()];
                    if (selected.width === 0) {
                        return;
                    }
                    $("#customResX").val(selected.width);
                    $("#customResY").val(selected.height);
                    $("#customResolution option").removeAttr("selected").filter("[value=0]").prop("selected", true);
                };
                SettingsController.prototype.onChangeCustomResolutionX = function() {
                    var currVal = $("#customResX").val();
                    var needUpdate = false;
                    if ((currVal % 2) !== 0) {
                        currVal = currVal - 1;
                        needUpdate = true;
                    }
                    if (currVal < SettingsController.minRes.width) {
                        currVal = SettingsController.minRes.width;
                        needUpdate = true;
                    }
                    if (currVal > SettingsController.maxRes.width) {
                        currVal = SettingsController.maxRes.width;
                        needUpdate = true;
                    }
                    if (needUpdate) {
                        $("#customResX").val(currVal);
                    }
                };
                SettingsController.prototype.onChangeCustomResolutionY = function() {
                    var currVal = $("#customResY").val();
                    var needUpdate = false;
                    if ((currVal % 2) !== 0) {
                        currVal = currVal - 1;
                        needUpdate = true;
                    }
                    if (currVal < SettingsController.minRes.height) {
                        currVal = SettingsController.minRes.height;
                        needUpdate = true;
                    }
                    if (currVal > SettingsController.maxRes.height) {
                        currVal = SettingsController.maxRes.height;
                        needUpdate = true;
                    }
                    if (needUpdate) {
                        $("#customResY").val(currVal);
                    }
                };
                SettingsController.prototype.setKvmAbsoluteState = function() {
                    var checked = $("#checkboxKVM").is(":checked");
                    if (!checked) {
                        $("#checkboxKVMTouchAbsolute").prop("checked", false);
                    }
                };
                SettingsController.prototype.setNativeResulotionState = function() {
                    var checked = $("#checkboxCustomResolution").is(":checked");
                    if (!checked) {
                        $("#checkboxClientResolution").prop("checked", true);
                    }
                };
                SettingsController.prototype.setCustomeResolutionState = function() {
                    var checked = $("#checkboxClientResolution").is(":checked");
                    if (!checked) {
                        $("#checkboxCustomResolution").prop("checked", true);
                    }
                };
                SettingsController.screenResolutions = [{
                        "width": 0,
                        "height": 0
                    },
                    {
                        "width": 800,
                        "height": 600
                    },
                    {
                        "width": 1024,
                        "height": 600
                    },
                    {
                        "width": 1024,
                        "height": 768
                    },
                    {
                        "width": 1152,
                        "height": 864
                    },
                    {
                        "width": 1280,
                        "height": 720
                    },
                    {
                        "width": 1280,
                        "height": 768
                    },
                    {
                        "width": 1280,
                        "height": 800
                    },
                    {
                        "width": 1280,
                        "height": 960
                    },
                    {
                        "width": 1280,
                        "height": 1024
                    },
                    {
                        "width": 1360,
                        "height": 768
                    },
                    {
                        "width": 1366,
                        "height": 768
                    },
                    {
                        "width": 1400,
                        "height": 1050
                    },
                    {
                        "width": 1440,
                        "height": 900
                    },
                    {
                        "width": 1600,
                        "height": 900
                    },
                    {
                        "width": 1600,
                        "height": 1200
                    },
                    {
                        "width": 1680,
                        "height": 1050
                    },
                    {
                        "width": 1920,
                        "height": 1080
                    },
                    {
                        "width": 1920,
                        "height": 1200
                    },
                    {
                        "width": 2048,
                        "height": 1152
                    },
                    {
                        "width": 2560,
                        "height": 1440
                    },
                    {
                        "width": 2560,
                        "height": 1600
                    },
                    {
                        "width": 2560,
                        "height": 1920
                    },
                    {
                        "width": 3840,
                        "height": 2160
                    },
                    {
                        "width": 4096,
                        "height": 2160
                    }
                ];
                SettingsController.minRes = {
                    "width": 800,
                    "height": 600
                };
                SettingsController.maxRes = {
                    "width": 4096,
                    "height": 2160
                };
                return SettingsController;
            }());
            UI.SettingsController = SettingsController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Options = (function() {
            function Options() {
                this.server = "";
                this.port = 28252;
                this.resolutionMaxWidth = 2560;
                this.resolutionMaxHeight = 1600;
                this.resolution = Model.Resolution.GetScreenResolution();
                this.resolutionCustom = new Model.Resolution(1024, 768);
                this.useClientResolution = true;
                this.useCustomResolution = true;
                this.connectionTimeout = 20000;
                this.reconnections = 5;
                this.reconnectionTimeout = 60000;
                this.subsampling = 2;
                this.quality = 40;
                this.compression = 3;
                this.fullscreen = true;
                this.stretchScreen = true;
                this.autoConnect = false;
                this.queryConnect = false;
                this.kvmControl = true;
                this.kvmAbsoluteTouchPosition = false;
                this.kvmKeyboard = false;
                this.experimental = false;
                this.frameRate = 0;
            }
            Object.defineProperty(Options, "currentOptions", {
                get: function() {
                    if (this.instance == null) {
                        this.loadCurrentOptions();
                    }
                    return this.instance;
                },
                enumerable: true,
                configurable: true
            });
            Options.loadCurrentOptions = function() {
                var settings = new Options();
                try {
                    if (localStorage.getItem(Options.localStorageKey) != null) {
                        this.parseJSON(settings, JSON.parse(localStorage.getItem(Options.localStorageKey)));
                    }
                } catch (error) {
                    spacedesk.Debug.error(error);
                }
                if (window.location.search.length > 0) {
                    this.loadSettingsFromQuery(settings);
                }
                this.instance = settings;
            };
            Options.parseJSON = function(settings, json) {
                for (var key in json) {
                    if (json.hasOwnProperty(key)) {
                        var element = json[key];
                        if (settings[key] != null) {
                            settings[key] = element;
                        }
                    }
                }
            };
            Options.loadSettingsFromQuery = function(settings) {
                var queries = window.location.search.substr(1).split("&");
                var args = {};
                for (var i = 0; i < queries.length; ++i) {
                    var split = queries[i].split("=", 2);
                    var key = split[0];
                    if (split.length === 1) {
                        args[split[0]] = "";
                    } else {
                        var value = decodeURIComponent(split[1].replace(/\+/g, " "));
                        if (key === Options.QUERYKEY_CONNECT_TO) {
                            settings.server = value;
                            settings.queryConnect = true;
                        } else if (settings[key] != null) {
                            if (typeof(settings[key]) === "number") {
                                settings[key] = Number(value);
                            }
                            if (typeof(settings[key]) === "boolean") {
                                settings[key] = value === "true";
                            } else {
                                settings[key] = value;
                            }
                        }
                    }
                }
            };
            Options.prototype.updateScreenResolution = function() {
                this.resolution = Model.Resolution.GetScreenResolution();
            };
            Options.prototype.getSocketUrl = function() {
                return "ws://" + this.server + ":" + this.port;
            };
            Options.prototype.saveOptions = function() {
                this.queryConnect = false;
                spacedesk.Controller.UI.SettingsController.saveSettings(this);
                try {
                    localStorage.clear();
                    localStorage.setItem(Options.localStorageKey, JSON.stringify(this));
                } catch (error) {
                    spacedesk.Debug.error(error);
                }
            };
            Options.prototype.clearOptions = function() {
                try {
                    localStorage.clear();
                } catch (error) {
                    spacedesk.Debug.error(error);
                }
                Options.instance = null;
            };
            Options.QUERYKEY_CONNECT_TO = "connectTo";
            Options.localStorageKey = "options";
            return Options;
        }());
        Model.Options = Options;
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var ProtocolDefinition = (function() {
                function ProtocolDefinition() {}
                ProtocolDefinition.versionNumberMajor = 4;
                ProtocolDefinition.versionNumberMinor = 8;
                ProtocolDefinition.headerLength = 128;
                ProtocolDefinition.payloadLength = 334;
                ProtocolDefinition.packetLength = ProtocolDefinition.headerLength + ProtocolDefinition.payloadLength;
                ProtocolDefinition.headerKVMLength = 28;
                return ProtocolDefinition;
            }());
            Protocol.ProtocolDefinition = ProtocolDefinition;
            (function(ProtocolHeaderType) {
                ProtocolHeaderType[ProtocolHeaderType["Identification"] = 0] = "Identification";
                ProtocolHeaderType[ProtocolHeaderType["Ping"] = 1] = "Ping";
                ProtocolHeaderType[ProtocolHeaderType["FrameBuffer"] = 2] = "FrameBuffer";
                ProtocolHeaderType[ProtocolHeaderType["Visibility"] = 3] = "Visibility";
                ProtocolHeaderType[ProtocolHeaderType["CursorPosition"] = 4] = "CursorPosition";
                ProtocolHeaderType[ProtocolHeaderType["CursorBitmap"] = 5] = "CursorBitmap";
                ProtocolHeaderType[ProtocolHeaderType["PowerSuspendHibernate"] = 6] = "PowerSuspendHibernate";
                ProtocolHeaderType[ProtocolHeaderType["FlowControlAck"] = 7] = "FlowControlAck";
                ProtocolHeaderType[ProtocolHeaderType["Disconnect"] = 8] = "Disconnect";
                ProtocolHeaderType[ProtocolHeaderType["Rotation"] = 9] = "Rotation";
                ProtocolHeaderType[ProtocolHeaderType["Mouse"] = 10] = "Mouse";
                ProtocolHeaderType[ProtocolHeaderType["Keyboard"] = 11] = "Keyboard";
                ProtocolHeaderType[ProtocolHeaderType["Touch"] = 12] = "Touch";
                ProtocolHeaderType[ProtocolHeaderType["Max"] = 13] = "Max";
            })(Protocol.ProtocolHeaderType || (Protocol.ProtocolHeaderType = {}));
            var ProtocolHeaderType = Protocol.ProtocolHeaderType;
            (function(ProtocolClientType) {
                ProtocolClientType[ProtocolClientType["WindowsRemoteMonitor"] = 0] = "WindowsRemoteMonitor";
                ProtocolClientType[ProtocolClientType["WebBrowser"] = 1] = "WebBrowser";
                ProtocolClientType[ProtocolClientType["UsbCableApple"] = 2] = "UsbCableApple";
                ProtocolClientType[ProtocolClientType["KvmWindows"] = 3] = "KvmWindows";
                ProtocolClientType[ProtocolClientType["Max"] = 4] = "Max";
            })(Protocol.ProtocolClientType || (Protocol.ProtocolClientType = {}));
            var ProtocolClientType = Protocol.ProtocolClientType;
            (function(ProtocolColorType) {
                ProtocolColorType[ProtocolColorType["RGB8"] = 0] = "RGB8";
                ProtocolColorType[ProtocolColorType["RGB16"] = 1] = "RGB16";
                ProtocolColorType[ProtocolColorType["RGB24"] = 2] = "RGB24";
                ProtocolColorType[ProtocolColorType["RGBX32"] = 3] = "RGBX32";
                ProtocolColorType[ProtocolColorType["RGBA32"] = 4] = "RGBA32";
                ProtocolColorType[ProtocolColorType["YUV444"] = 5] = "YUV444";
                ProtocolColorType[ProtocolColorType["YUV422"] = 6] = "YUV422";
                ProtocolColorType[ProtocolColorType["YUV420"] = 7] = "YUV420";
                ProtocolColorType[ProtocolColorType["Max"] = 8] = "Max";
            })(Protocol.ProtocolColorType || (Protocol.ProtocolColorType = {}));
            var ProtocolColorType = Protocol.ProtocolColorType;
            (function(CompressionType) {
                CompressionType[CompressionType["Off"] = 0] = "Off";
                CompressionType[CompressionType["H264"] = 1] = "H264";
                CompressionType[CompressionType["Unused1"] = 2] = "Unused1";
                CompressionType[CompressionType["JPEG"] = 3] = "JPEG";
                CompressionType[CompressionType["MJPEGD2"] = 4] = "MJPEGD2";
            })(Protocol.CompressionType || (Protocol.CompressionType = {}));
            var CompressionType = Protocol.CompressionType;
            (function(CursorType) {
                CursorType[CursorType["Monochrome"] = 1] = "Monochrome";
                CursorType[CursorType["Default"] = 2] = "Default";
                CursorType[CursorType["MaskedColor"] = 4] = "MaskedColor";
            })(Protocol.CursorType || (Protocol.CursorType = {}));
            var CursorType = Protocol.CursorType;
            (function(MouseEvents) {
                MouseEvents[MouseEvents["Absolute"] = 32768] = "Absolute";
                MouseEvents[MouseEvents["LeftDown"] = 2] = "LeftDown";
                MouseEvents[MouseEvents["LeftUp"] = 4] = "LeftUp";
                MouseEvents[MouseEvents["MiddleDown"] = 32] = "MiddleDown";
                MouseEvents[MouseEvents["MiddleUp"] = 64] = "MiddleUp";
                MouseEvents[MouseEvents["Move"] = 1] = "Move";
                MouseEvents[MouseEvents["RightDown"] = 8] = "RightDown";
                MouseEvents[MouseEvents["RightUp"] = 16] = "RightUp";
                MouseEvents[MouseEvents["Wheel"] = 2048] = "Wheel";
                MouseEvents[MouseEvents["XDown"] = 128] = "XDown";
                MouseEvents[MouseEvents["XUp"] = 256] = "XUp";
                MouseEvents[MouseEvents["HWheel"] = 4096] = "HWheel";
                MouseEvents[MouseEvents["VirtualDesk"] = 16384] = "VirtualDesk";
            })(Protocol.MouseEvents || (Protocol.MouseEvents = {}));
            var MouseEvents = Protocol.MouseEvents;
            (function(KeyEvents) {
                KeyEvents[KeyEvents["ExtendKey"] = 1] = "ExtendKey";
                KeyEvents[KeyEvents["KeyUp"] = 2] = "KeyUp";
                KeyEvents[KeyEvents["ScanCode"] = 8] = "ScanCode";
                KeyEvents[KeyEvents["Unicode"] = 4] = "Unicode";
            })(Protocol.KeyEvents || (Protocol.KeyEvents = {}));
            var KeyEvents = Protocol.KeyEvents;
            (function(TouchState) {
                TouchState[TouchState["TouchStateUp"] = 0] = "TouchStateUp";
                TouchState[TouchState["TouchStateDown"] = 1] = "TouchStateDown";
                TouchState[TouchState["TouchSateNone"] = 2] = "TouchSateNone";
            })(Protocol.TouchState || (Protocol.TouchState = {}));
            var TouchState = Protocol.TouchState;
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var GenericHeader = (function() {
                        function GenericHeader(buffer) {
                            this.countByteDataFollowingHeader = Protocol.ProtocolDefinition.payloadLength;
                            if (buffer != null) {
                                this.identification = buffer.getInteger32Value(0);
                                this.countByteDataFollowingHeader = buffer.getInteger32Value(4);
                                this.LoadFromBuffer(buffer);
                            }
                        }
                        return GenericHeader;
                    }());
                    Header.GenericHeader = GenericHeader;
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Rect = (function() {
            function Rect(posX, posY, posX2, posY2) {
                if (posX === void 0) {
                    posX = 0;
                }
                if (posY === void 0) {
                    posY = 0;
                }
                if (posX2 === void 0) {
                    posX2 = 0;
                }
                if (posY2 === void 0) {
                    posY2 = 0;
                }
                this.width = this.posX2 - this.posX;
                this.height = this.posY2 - this.posY;
                this.posX = posX;
                this.posY = posY;
                this.posX2 = posX2;
                this.posY2 = posY2;
            }
            return Rect;
        }());
        Model.Rect = Rect;
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
Uint8Array.prototype.getInteger32Value = function(index) {
    return this[index] | (this[index + 1] << 8) | (this[index + 2] << 16) | (this[index + 3] << 24);
};
Uint8Array.prototype.assignInteger32 = function(index, value) {
    this[index] = value & 0xFF;
    this[index + 1] = (value & 0xFF00) >> 8;
    this[index + 2] = (value & 0xFF0000) >> 16;
    this[index + 3] = (value & 0xFF000000) >> 24;
};
Uint8Array.prototype.assignInteger16 = function(index, value) {
    this[index] = value & 0xFF;
    this[index + 1] = (value & 0xFF00) >> 8;
};
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var FrameBufferHeader = (function(_super) {
                        __extends(FrameBufferHeader, _super);

                        function FrameBufferHeader() {
                            _super.apply(this, arguments);
                        }
                        FrameBufferHeader.prototype.GetBytes = function() {
                            return null;
                        };
                        FrameBufferHeader.prototype.LoadFromBuffer = function(buffer) {
                            var width = buffer.getInteger32Value(8);
                            var height = buffer.getInteger32Value(12);
                            this.resolution = new Model.Resolution(width, height);
                            this.pitch = buffer.getInteger32Value(16);
                            this.format = buffer.getInteger32Value(20);
                            var posX = buffer.getInteger32Value(24);
                            var posY = buffer.getInteger32Value(28);
                            var posX2 = buffer.getInteger32Value(32);
                            var posY2 = buffer.getInteger32Value(36);
                            this.position = new Model.Rect(posX, posY, posX2, posY2);
                            this.compressionType = buffer.getInteger32Value(40);
                            this.fragmentInfo = buffer.getInteger32Value(64);
                        };
                        return FrameBufferHeader;
                    }(Header.GenericHeader));
                    Header.FrameBufferHeader = FrameBufferHeader;
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var VisibilityHeader = (function(_super) {
                        __extends(VisibilityHeader, _super);

                        function VisibilityHeader() {
                            _super.apply(this, arguments);
                        }
                        VisibilityHeader.prototype.GetBytes = function() {
                            return null;
                        };
                        VisibilityHeader.prototype.LoadFromBuffer = function(buffer) {
                            var visibleValue = buffer.getInteger32Value(8);
                            this.visible = visibleValue === 1;
                        };
                        return VisibilityHeader;
                    }(Header.GenericHeader));
                    Header.VisibilityHeader = VisibilityHeader;
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var CursorPositionHeader = (function(_super) {
                        __extends(CursorPositionHeader, _super);

                        function CursorPositionHeader() {
                            _super.apply(this, arguments);
                        }
                        CursorPositionHeader.prototype.GetBytes = function() {
                            return null;
                        };
                        CursorPositionHeader.prototype.LoadFromBuffer = function(buffer) {
                            var posX = buffer.getInteger32Value(8);
                            var posY = buffer.getInteger32Value(12);
                            this.position = new Model.Rect(posX, posY, 0, 0);
                            var visibleValue = buffer.getInteger32Value(16);
                            this.visible = visibleValue === 1;
                        };
                        return CursorPositionHeader;
                    }(Header.GenericHeader));
                    Header.CursorPositionHeader = CursorPositionHeader;
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var CursorBitmapHeader = (function(_super) {
                        __extends(CursorBitmapHeader, _super);

                        function CursorBitmapHeader() {
                            _super.apply(this, arguments);
                        }
                        CursorBitmapHeader.prototype.GetBytes = function() {
                            return null;
                        };
                        CursorBitmapHeader.prototype.LoadFromBuffer = function(buffer) {
                            var width = buffer.getInteger32Value(8);
                            var height = buffer.getInteger32Value(12);
                            this.resolution = new Model.Resolution(width, height);
                            this.pitch = buffer.getInteger32Value(16);
                            this.xHot = buffer.getInteger32Value(20);
                            this.yHot = buffer.getInteger32Value(24);
                            this.flags = buffer.getInteger32Value(28);
                        };
                        return CursorBitmapHeader;
                    }(Header.GenericHeader));
                    Header.CursorBitmapHeader = CursorBitmapHeader;
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var HeaderFactory = (function() {
                        function HeaderFactory() {}
                        HeaderFactory.GetHeader = function(buffer) {
                            var header = new Uint8Array(buffer, 0, Protocol.ProtocolDefinition.headerLength);
                            var headerType = header.getInteger32Value(0);
                            switch (headerType) {
                                case Protocol.ProtocolHeaderType.FrameBuffer:
                                    return new Header.FrameBufferHeader(header);
                                case Protocol.ProtocolHeaderType.Visibility:
                                    return new Header.VisibilityHeader(header);
                                case Protocol.ProtocolHeaderType.CursorPosition:
                                    return new Header.CursorPositionHeader(header);
                                case Protocol.ProtocolHeaderType.CursorBitmap:
                                    return new Header.CursorBitmapHeader(header);
                                default:
                                    break;
                            }
                            return null;
                        };
                        return HeaderFactory;
                    }());
                    Header.HeaderFactory = HeaderFactory;
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Payloads;
                (function(Payloads) {
                    var GenericPayload = (function() {
                        function GenericPayload(buffer) {
                            if (buffer != null) {
                                this.data = buffer;
                            }
                        }
                        return GenericPayload;
                    }());
                    Payloads.GenericPayload = GenericPayload;
                })(Payloads = Packet.Payloads || (Packet.Payloads = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Payloads;
                (function(Payloads) {
                    var PayloadFactory = (function() {
                        function PayloadFactory() {}
                        PayloadFactory.GetPayload = function(buffer) {
                            return new Payloads.GenericPayload(new Uint8Array(buffer, Protocol.ProtocolDefinition.headerLength));
                        };
                        return PayloadFactory;
                    }());
                    Payloads.PayloadFactory = PayloadFactory;
                })(Payloads = Packet.Payloads || (Packet.Payloads = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var IdentificationHeader = (function(_super) {
                        __extends(IdentificationHeader, _super);

                        function IdentificationHeader(settings, protocolType) {
                            _super.call(this);
                            this.clientType = Protocol.ProtocolClientType.WebBrowser;
                            this.colorType = Protocol.ProtocolColorType.RGBA32;
                            this.resolution = null;
                            this.resolutionCustom = null;
                            if (protocolType != null) {
                                this.clientType = protocolType;
                            }
                            this.identification = Protocol.ProtocolHeaderType.Identification;
                            this.compression = settings.compression;
                            this.subsampling = settings.subsampling;
                            this.quality = settings.quality;
                            this.frameRate = settings.frameRate;
                            if (settings.useClientResolution) {
                                this.resolution = Model.Resolution.GetScreenResolution();
                                if (settings.useCustomResolution && settings.resolutionCustom != null) {
                                    this.resolutionCustom = settings.resolutionCustom;
                                }
                            } else if (settings.useCustomResolution) {
                                this.resolution = settings.resolutionCustom;
                            } else {
                                this.resolution = Model.Resolution.GetScreenResolution();
                            }
                        }
                        IdentificationHeader.prototype.GetBytes = function() {
                            var header = new Uint8Array(Protocol.ProtocolDefinition.headerLength);
                            header.assignInteger32(0, this.identification);
                            header.assignInteger32(4, this.countByteDataFollowingHeader);
                            header.assignInteger32(8, Protocol.ProtocolDefinition.versionNumberMajor);
                            header.assignInteger32(12, Protocol.ProtocolDefinition.versionNumberMinor);
                            header.assignInteger32(16, this.clientType);
                            if (this.quality <= 0) {
                                this.quality = 1;
                            }
                            header.assignInteger32(20, 0);
                            header.assignInteger32(24, 3);
                            header.assignInteger32(24, this.compression);
                            header.assignInteger32(32, this.quality);
                            header.assignInteger16(44, this.frameRate);
                            header.assignInteger16(46, 0);
                            header.assignInteger32(52, this.resolution.width);
                            header.assignInteger32(88, this.resolution.height);
                            if (this.resolutionCustom != null) {
                                header.assignInteger32(48, 2);
                                header.assignInteger32(56, this.resolutionCustom.width);
                                header.assignInteger32(92, this.resolutionCustom.height);
                            } else {
                                header.assignInteger32(48, 1);
                                header.assignInteger32(56, 0);
                                header.assignInteger32(92, 0);
                            }
                            header.assignInteger32(60, 0);
                            header.assignInteger32(64, 0);
                            header.assignInteger32(68, 0);
                            header.assignInteger32(72, 0);
                            header.assignInteger32(76, 0);
                            header.assignInteger32(80, 0);
                            header.assignInteger32(84, 0);
                            header.assignInteger32(96, 0);
                            header.assignInteger32(100, 0);
                            header.assignInteger32(104, 0);
                            header.assignInteger32(108, 0);
                            header.assignInteger32(112, 0);
                            header.assignInteger32(116, 0);
                            header.assignInteger32(120, 0);
                            header.assignInteger32(124, 0);
                            return header;
                        };
                        IdentificationHeader.prototype.LoadFromBuffer = function(buffer) {
                            return;
                        };
                        return IdentificationHeader;
                    }(Header.GenericHeader));
                    Header.IdentificationHeader = IdentificationHeader;
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Payloads;
                (function(Payloads) {
                    var IdentificationPayload = (function(_super) {
                        __extends(IdentificationPayload, _super);

                        function IdentificationPayload() {
                            _super.call(this);
                            var payload = new Uint8Array(Protocol.ProtocolDefinition.payloadLength);
                            payload[0] = 0x31;
                            payload[1] = 0;
                            payload[2] = 0x31;
                            payload[3] = 0;
                            payload[4] = 0x31;
                            payload[5] = 0;
                            payload[6] = 0x31;
                            payload[7] = 0;
                            payload[8] = 0x31;
                            payload[9] = 0;
                            payload[10] = 0x32;
                            payload[11] = 0;
                            payload[12] = 0x32;
                            payload[13] = 0;
                            payload[14] = 0x32;
                            payload[15] = 0;
                            payload[16] = 0x32;
                            payload[17] = 0;
                            payload[18] = 0x32;
                            payload[19] = 0;
                            var counter = 78;
                            var name = spacedesk.Utils.browser.browser.name + " on " + spacedesk.Utils.browser.os.name;
                            for (var i = 0; i < name.length; i++) {
                                payload[counter] = name.charCodeAt(i);
                                counter = counter + 2;
                            }
                            this.data = payload;
                        }
                        return IdentificationPayload;
                    }(Payloads.GenericPayload));
                    Payloads.IdentificationPayload = IdentificationPayload;
                })(Payloads = Packet.Payloads || (Packet.Payloads = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var SpacedeskPacket = (function() {
                    function SpacedeskPacket(buffer) {
                        if (buffer == null) {
                            return;
                        }
                        if (buffer.byteLength < 128) {
                            spacedesk.Debug.error("Received Packet is to small.");
                            return;
                        }
                        this.header = Packet.Header.HeaderFactory.GetHeader(buffer);
                        this.payload = Packet.Payloads.PayloadFactory.GetPayload(buffer);
                        if (this.header == null) {
                            spacedesk.Debug.error("header is null.");
                            return;
                        }
                    }
                    return SpacedeskPacket;
                }());
                Packet.SpacedeskPacket = SpacedeskPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var GenericRequestPacket = (function(_super) {
                    __extends(GenericRequestPacket, _super);

                    function GenericRequestPacket() {
                        _super.apply(this, arguments);
                    }
                    GenericRequestPacket.prototype.GetBufferData = function() {
                        var data = new Uint8Array(Protocol.ProtocolDefinition.packetLength);
                        data.set(this.header.GetBytes());
                        data.set(this.payload.data, Protocol.ProtocolDefinition.headerLength);
                        return data;
                    };
                    GenericRequestPacket.prototype.dispose = function() {
                        this.header = null;
                        this.payload = null;
                    };
                    return GenericRequestPacket;
                }(Packet.SpacedeskPacket));
                Packet.GenericRequestPacket = GenericRequestPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var IdentificationPacket = (function(_super) {
                    __extends(IdentificationPacket, _super);

                    function IdentificationPacket(settings, protocolType) {
                        _super.call(this);
                        this.header = new Packet.Header.IdentificationHeader(settings, protocolType);
                        this.payload = new Packet.Payloads.IdentificationPayload();
                    }
                    return IdentificationPacket;
                }(Packet.GenericRequestPacket));
                Packet.IdentificationPacket = IdentificationPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Debug = (function() {
        function Debug() {}
        Debug.time = function(name) {
            if (Debug.diagnostic && Debug.consoleTime) {
                Debug.log(name);
            }
        };
        Debug.timeEnd = function(name) {
            if (Debug.diagnostic && Debug.consoleTime) {
                Debug.log(name);
            }
        };
        Debug.log = function(message) {};
        Debug.info = function(message) {
            if (Debug.diagnostic) {
                Debug.log(message);
            }
        };
        Debug.warn = function(message) {
            if (Debug.diagnostic) {
                Debug.log(message);
            }
        };
        Debug.error = function(message) {
            if (Debug.diagnostic) {
                Debug.log(message);
            }
        };
        Debug.diagnostic = false;
        Debug.consoleTime = false;
        Debug.cursorProtocol = false;
        Debug.kvmProtocol = false;
        Debug.fpsMeter = false;
        return Debug;
    }());
    spacedesk.Debug = Debug;
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var CursorBitmapPacket = (function(_super) {
                    __extends(CursorBitmapPacket, _super);

                    function CursorBitmapPacket() {
                        _super.apply(this, arguments);
                    }
                    return CursorBitmapPacket;
                }(Packet.SpacedeskPacket));
                Packet.CursorBitmapPacket = CursorBitmapPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var CursorPositionPacket = (function(_super) {
                    __extends(CursorPositionPacket, _super);

                    function CursorPositionPacket() {
                        _super.apply(this, arguments);
                    }
                    return CursorPositionPacket;
                }(Packet.SpacedeskPacket));
                Packet.CursorPositionPacket = CursorPositionPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var CursorController = (function() {
            function CursorController() {
                this.cursorCanvas = document.createElement("canvas");
                this.context = this.cursorCanvas.getContext("2d");
                this.cursorVisible = false;
            }
            Object.defineProperty(CursorController.prototype, "LastCursorPosition", {
                get: function() {
                    return this.cursorPosition;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CursorController.prototype, "CursorVisible", {
                get: function() {
                    return this.cursorVisible;
                },
                enumerable: true,
                configurable: true
            });
            CursorController.prototype.init = function() {
                this.cursorPosition = new spacedesk.Model.Rect(0, 0, 0, 0);
                this.lastMonoCursorPositionDrawed = new spacedesk.Model.Rect(0, 0, 0, 0);
                this.context.transform(1, 0, 0, -1, 0, this.cursorCanvas.height);
                return true;
            };
            CursorController.prototype.setCursorBitmap = function(bitmap) {
                this.cursorBuffer = (JSON.parse(JSON.stringify(bitmap)));
                if (bitmap.header.flags === spacedesk.Model.Protocol.CursorType.Default) {
                    this.drawDefaultCursor();
                }
            };
            CursorController.prototype.drawCursorOn = function(desktop) {
                if (typeof this.cursorBuffer === "undefined") {
                    return;
                }
                var posY = this.LastCursorPosition.posY;
                if (this.cursorBuffer.header.flags === spacedesk.Model.Protocol.CursorType.Default) {
                    desktop.drawImage(this.cursorCanvas, this.LastCursorPosition.posX, posY, this.cursorCanvas.width, this.cursorCanvas.height, this.LastCursorPosition.posX, posY, this.cursorCanvas.width, this.cursorCanvas.height);
                } else {
                    if (this.LastCursorPosition.posX !== this.lastMonoCursorPositionDrawed.posX || this.LastCursorPosition.posY !== this.lastMonoCursorPositionDrawed.posY) {
                        this.drawMonochromeCursor(desktop);
                    }
                    desktop.drawImage(this.cursorCanvas, this.LastCursorPosition.posX, posY, this.cursorCanvas.width, this.cursorCanvas.height, this.LastCursorPosition.posX, posY, this.cursorCanvas.width, this.cursorCanvas.height);
                }
            };
            CursorController.prototype.setCursorPositon = function(data) {
                if (spacedesk.Debug.cursorProtocol) {
                    spacedesk.Debug.log("Cursor Position: X=" + data.header.position.posX + " Y=" + data.header.position.posY);
                }
                this.cursorPosition = data.header.position;
                this.cursorVisible = data.header.visible;
            };
            CursorController.prototype.drawDefaultCursor = function() {
                if (spacedesk.Debug.cursorProtocol) {
                    spacedesk.Debug.info("Cursor Draw Bitmap");
                }
                Controller.DiagnosticController.start(Controller.DiagnosticTimeTypes.cursor);
                var bitmap = this.cursorBuffer;
                this.cursorCanvas.width = bitmap.header.resolution.width;
                this.cursorCanvas.height = bitmap.header.resolution.height;
                var imgData = this.context.getImageData(0, 0, bitmap.header.resolution.width, bitmap.header.resolution.height);
                var data = imgData.data;
                for (var i = 0; i < data.length; i += 4) {
                    switch (bitmap.header.flags) {
                        case spacedesk.Model.Protocol.CursorType.Default:
                            this.ConvertRGBAToBGRA(bitmap, data, i);
                            break;
                    }
                }
                this.context.putImageData(imgData, 0, 0);
                Controller.DiagnosticController.end(Controller.DiagnosticTimeTypes.cursor);
            };
            CursorController.prototype.drawMonochromeCursor = function(desktop) {
                if (spacedesk.Debug.cursorProtocol) {
                    spacedesk.Debug.info("Cursor Draw Bitmap");
                }
                var bitmap = this.cursorBuffer;
                this.cursorCanvas.width = bitmap.header.resolution.width;
                this.cursorCanvas.height = bitmap.header.resolution.height;
                var imgData = desktop.getImageData(this.LastCursorPosition.posX, this.LastCursorPosition.posY, bitmap.header.resolution.width, bitmap.header.resolution.height);
                var data = imgData.data;
                for (var i = 0; i < data.length; i += 4) {
                    switch (bitmap.header.flags) {
                        case spacedesk.Model.Protocol.CursorType.Monochrome:
                            var xor = (bitmap.payload.data[i] & bitmap.payload.data[i + 1] & bitmap.payload.data[i + 2]) === 255;
                            if (xor) {
                                data[i] = bitmap.payload.data[i + 2] ^ data[i];
                                data[i + 1] = bitmap.payload.data[i + 1] ^ data[i + 1];
                                data[i + 2] = bitmap.payload.data[i] ^ data[i + 2];
                                data[i + 3] = bitmap.payload.data[i + 3] ^ data[i + 3];
                            } else {
                                data[i] = bitmap.payload.data[i + 2];
                                data[i + 1] = bitmap.payload.data[i + 1];
                                data[i + 2] = bitmap.payload.data[i];
                                data[i + 3] = 0;
                            }
                            break;
                        case spacedesk.Model.Protocol.CursorType.MaskedColor:
                            var xorMasked = (bitmap.payload.data[i] & bitmap.payload.data[i + 1] & bitmap.payload.data[i + 2]) === 0;
                            if (bitmap.payload.data[i + 3] !== 255) {
                                spacedesk.Debug.info("HEY");
                            }
                            if (xorMasked) {
                                data[i] = data[i] ^ bitmap.payload.data[i + 2];
                                data[i + 1] = data[i + 1] ^ bitmap.payload.data[i + 1];
                                data[i + 2] = data[i + 2] ^ bitmap.payload.data[i];
                                data[i + 3] = data[i + 3] ^ bitmap.payload.data[i + 3];
                            } else {
                                data[i + 3] = 0;
                            }
                            break;
                    }
                }
                this.context.putImageData(imgData, 0, 0);
                this.lastMonoCursorPositionDrawed = this.LastCursorPosition;
            };
            CursorController.prototype.ConvertRGBAToBGRA = function(source, target, atIndex, xOR) {
                if (xOR === void 0) {
                    xOR = false;
                }
                if (xOR) {
                    target[atIndex] ^= source.payload.data[atIndex + 2];
                    target[atIndex + 1] ^= source.payload.data[atIndex + 1];
                    target[atIndex + 2] ^= source.payload.data[atIndex];
                } else {
                    target[atIndex] = source.payload.data[atIndex + 2];
                    target[atIndex + 1] = source.payload.data[atIndex + 1];
                    target[atIndex + 2] = source.payload.data[atIndex];
                    target[atIndex + 3] = source.payload.data[atIndex + 3];
                }
            };
            return CursorController;
        }());
        Controller.CursorController = CursorController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var OrientationController = (function() {
                function OrientationController() {}
                Object.defineProperty(OrientationController, "OrientationChanged", {
                    get: function() {
                        return this.onOrientationChanged;
                    },
                    enumerable: true,
                    configurable: true
                });
                OrientationController.registerEvents = function() {
                    window.addEventListener("orientationchange", this.callback, false);
                    window.addEventListener("resize", this.callback, false);
                };
                OrientationController.resetZoom = function() {
                    var meta = document.querySelector("meta[name=viewport]");
                    meta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
                    window.setTimeout(function() {
                        meta.setAttribute("content", "minimal-ui, initial-scale=1.0, user-scalable=yes, width=device-width");
                    }, 200);
                };
                OrientationController.callback = function() {
                    if (!OrientationController.onOrientationChanged) {
                        OrientationController.onOrientationChanged.trigger();
                    }
                    if (OrientationController.timeoutHandle > 0) {
                        window.clearTimeout(OrientationController.timeoutHandle);
                    }
                    OrientationController.timeoutHandle = window.setTimeout(function() {
                        OrientationController.timeoutHandle = -1;
                        OrientationController.resetZoom();
                    }, 200);
                };
                OrientationController.timeoutHandle = -1;
                OrientationController.onOrientationChanged = new SpacedeskEvent();
                return OrientationController;
            }());
            UI.OrientationController = OrientationController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var FlowControlAckPacket = (function(_super) {
                    __extends(FlowControlAckPacket, _super);

                    function FlowControlAckPacket() {
                        _super.apply(this, arguments);
                    }
                    FlowControlAckPacket.prototype.GetBufferData = function() {
                        var POSITION_TYPE = 0;
                        var POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER = 4;
                        this.data = new Uint8Array(Protocol.ProtocolDefinition.headerLength);
                        this.data.assignInteger32(POSITION_TYPE, Protocol.ProtocolHeaderType.FlowControlAck);
                        this.data.assignInteger32(POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER, 0);
                        return this.data;
                    };
                    return FlowControlAckPacket;
                }(Packet.SpacedeskPacket));
                Packet.FlowControlAckPacket = FlowControlAckPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Render;
        (function(Render) {
            var RenderItemModel = (function() {
                function RenderItemModel(data) {
                    this.isFragement = false;
                    if (data != null) {
                        this.posX = data.header.position.posX;
                        this.posX2 = data.header.position.posX2;
                        this.posY = data.header.position.posY;
                        this.posY2 = data.header.position.posY2;
                        this.isFragement = data.header.fragmentInfo === 1;
                    }
                }
                Object.defineProperty(RenderItemModel.prototype, "width", {
                    get: function() {
                        return this.posX2 - this.posX;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RenderItemModel.prototype, "height", {
                    get: function() {
                        return this.posY2 - this.posY;
                    },
                    enumerable: true,
                    configurable: true
                });
                return RenderItemModel;
            }());
            Render.RenderItemModel = RenderItemModel;
        })(Render = Model.Render || (Model.Render = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var ShaderTypes;
(function(ShaderTypes) {
    ShaderTypes[ShaderTypes["Vertex"] = WebGLRenderingContext.VERTEX_SHADER] = "Vertex";
    ShaderTypes[ShaderTypes["Fragment"] = WebGLRenderingContext.FRAGMENT_SHADER] = "Fragment";
})(ShaderTypes || (ShaderTypes = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Render;
        (function(Render) {
            var WebGLHelper = (function() {
                function WebGLHelper() {}
                WebGLHelper.CheckForWebGL = function() {
                    var canvas = document.createElement("canvas");
                    var context = this.create3DContext(canvas);
                    if (context != null) {
                        canvas = null;
                        context = null;
                        return true;
                    }
                    canvas = null;
                    return false;
                };
                WebGLHelper.create3DContext = function(canvas) {
                    var names = ["webgl", "experimental-webgl"];
                    var options = {
                        alpha: false,
                        antialias: false,
                        depth: false,
                        preserveDrawingBuffer: true,
                    };
                    if (spacedesk.Utils.isIE) {
                        options.preserveDrawingBuffer = true;
                    }
                    var context;
                    names.forEach(function(name) {
                        try {
                            context = canvas.getContext(name, options);
                        } catch (e) {}
                        if (context != null) {
                            return true;
                        }
                    });
                    return context;
                };
                WebGLHelper.loadShader = function(context, shaderSource, shaderType) {
                    var shader = context.createShader(shaderType);
                    context.shaderSource(shader, shaderSource);
                    context.compileShader(shader);
                    var compiled = context.getShaderParameter(shader, context.COMPILE_STATUS);
                    if (!compiled) {
                        context.deleteShader(shader);
                        return null;
                    }
                    return shader;
                };
                return WebGLHelper;
            }());
            Render.WebGLHelper = WebGLHelper;
        })(Render = Model.Render || (Model.Render = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var RenderEngine;
        (function(RenderEngine) {
            var Model = spacedesk.Model;
            var WebGL = Model.Render.WebGLHelper;
            var WebGLRender = (function() {
                function WebGLRender(targetCanvas) {
                    if (targetCanvas === void 0) {
                        targetCanvas = null;
                    }
                    this.errorMessage = "";
                    this.resolution = new Model.Resolution(0, 0);
                    this.vertexShaderSource = "\n                attribute vec2 a_position;\n                attribute vec2 a_texCoord;\n\n                uniform vec2 u_resolution;\n                varying vec2 v_texCoord;\n\n                void main() {\n\n                    // convert the rectangle from pixels to 0.0 to 1.0\n                    vec2 zeroToOne = a_position / u_resolution;\n\n                    // convert from 0->1 to 0->2\n                    vec2 zeroToTwo = zeroToOne * 2.0;\n\n                    // convert from 0->2 to -1->+1 (clipspace)\n                    vec2 clipSpace = zeroToTwo - 1.0;\n\n                    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n\n                    // pass the texCoord to the fragment shader\n                    // The GPU will interpolate this value between points.\n\n                    v_texCoord = a_texCoord;\n                }\n        ";
                    this.fragmentShaderSource = "\n                precision mediump float;\n                // our texture\n                uniform sampler2D u_image;\n\n                // the texCoords passed in from the vertex shader.\n                varying vec2 v_texCoord;\n\n                void main() {\n                    gl_FragColor = texture2D(u_image, v_texCoord);\n                }\n        ";
                    if (targetCanvas != null) {
                        this.targetCanvas = targetCanvas;
                    } else {
                        this.targetCanvas = document.createElement("canvas");
                    }
                }
                WebGLRender.prototype.draw = function(model) {
                    spacedesk.Debug.time("CanvasDrawing");
                    this.context.texImage2D(this.context.TEXTURE_2D, 0, this.context.RGB, this.context.RGB, this.context.UNSIGNED_BYTE, model.image);
                    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_S, this.context.CLAMP_TO_EDGE);
                    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_T, this.context.CLAMP_TO_EDGE);
                    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MIN_FILTER, this.context.NEAREST);
                    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MAG_FILTER, this.context.NEAREST);
                    var resolutionLocation = this.context.getUniformLocation(this.program, "u_resolution");
                    this.context.uniform2f(resolutionLocation, this.targetCanvas.width, this.targetCanvas.height);
                    this.context.bindBuffer(this.context.ARRAY_BUFFER, this.textureBuffer);
                    this.context.enableVertexAttribArray(this.positionLocation);
                    this.context.vertexAttribPointer(this.positionLocation, 2, this.context.FLOAT, false, 0, 0);
                    var x1 = model.posX;
                    var x2 = model.posX2;
                    var y1 = model.posY;
                    var y2 = model.posY2;
                    this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array([
                        x1, y1,
                        x2, y1,
                        x1, y2,
                        x1, y2,
                        x2, y1,
                        x2, y2
                    ]), this.context.STATIC_DRAW);
                    this.context.drawArrays(this.context.TRIANGLE_STRIP, 0, 6);
                    this.context.bindFramebuffer(this.context.FRAMEBUFFER, null);
                    spacedesk.Debug.timeEnd("CanvasDrawing");
                };
                WebGLRender.prototype.onresize = function(resolution) {
                    this.resolution = resolution;
                    this.targetCanvas.width = resolution.width;
                    this.targetCanvas.height = resolution.height;
                    this.context.viewport(0, 0, resolution.width, resolution.height);
                };
                WebGLRender.prototype.init = function() {
                    try {
                        this.context = WebGL.create3DContext(this.targetCanvas);
                        var vertexShader = WebGL.loadShader(this.context, this.vertexShaderSource, this.context.VERTEX_SHADER);
                        var fragmentShader = WebGL.loadShader(this.context, this.fragmentShaderSource, this.context.FRAGMENT_SHADER);
                        if (vertexShader == null || fragmentShader == null) {
                            spacedesk.Debug.error("Failed to load shaders");
                            return false;
                        }
                        this.program = this.context.createProgram();
                        this.context.attachShader(this.program, vertexShader);
                        this.context.attachShader(this.program, fragmentShader);
                        this.context.linkProgram(this.program);
                        if (!this.context.getProgramParameter(this.program, this.context.LINK_STATUS)) {
                            var error = this.context.getProgramInfoLog(this.program);
                            this.errorMessage = "Error in program linking:" + error;
                            this.context.deleteProgram(this.program);
                            return false;
                        }
                        this.context.useProgram(this.program);
                        return this.setupWebGL();
                    } catch (error) {
                        this.errorMessage = "Error in Init " + error;
                        return false;
                    }
                };
                WebGLRender.prototype.setupWebGL = function() {
                    try {
                        this.context.clearColor(0.0, 0.0, 0.0, 1.0);
                        this.context.clearDepth(1.0);
                        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT | this.context.STENCIL_BUFFER_BIT);
                        this.context.disable(this.context.CULL_FACE);
                        this.context.colorMask(true, true, true, false);
                        this.context.enable(this.context.BLEND);
                        this.context.blendFunc(this.context.SRC_ALPHA, this.context.ONE_MINUS_SRC_ALPHA);
                        this.positionLocation = this.context.getAttribLocation(this.program, "a_position");
                        this.texCoordLocation = this.context.getAttribLocation(this.program, "a_texCoord");
                        var texCoordBuffer = this.context.createBuffer();
                        this.context.bindBuffer(this.context.ARRAY_BUFFER, texCoordBuffer);
                        this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array([
                            0.0, 0.0,
                            1.0, 0.0,
                            0.0, 1.0,
                            0.0, 1.0,
                            1.0, 0.0,
                            1.0, 1.0
                        ]), this.context.STATIC_DRAW);
                        this.context.enableVertexAttribArray(this.texCoordLocation);
                        this.context.vertexAttribPointer(this.texCoordLocation, 2, this.context.FLOAT, false, 0, 0);
                        this.context.viewport(0, 0, window.innerWidth, window.innerHeight);
                        this.textureBuffer = this.context.createBuffer();
                        this.texture = this.context.createTexture();
                        this.context.activeTexture(this.context.TEXTURE0);
                        this.context.bindTexture(this.context.TEXTURE_2D, this.texture);
                        this.context.pixelStorei(this.context.UNPACK_ALIGNMENT, 1);
                        return true;
                    } catch (error) {
                        return false;
                    }
                };
                return WebGLRender;
            }());
            RenderEngine.WebGLRender = WebGLRender;
        })(RenderEngine = Controller.RenderEngine || (Controller.RenderEngine = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var RenderEngine;
        (function(RenderEngine) {
            var CanvasRender = (function() {
                function CanvasRender(targetCanvas, compositeOver) {
                    if (targetCanvas === void 0) {
                        targetCanvas = null;
                    }
                    if (compositeOver === void 0) {
                        compositeOver = true;
                    }
                    this.resolution = new spacedesk.Model.Resolution(0, 0);
                    this.compositeOver = true;
                    if (targetCanvas != null) {
                        this.targetCanvas = targetCanvas;
                    } else {
                        this.targetCanvas = document.createElement("canvas");
                    }
                    this.compositeOver = compositeOver;
                }
                CanvasRender.prototype.draw = function(model) {
                    spacedesk.Debug.time("CanvasDrawing");
                    this.context.drawImage(model.image, 0, 0, model.width, model.height, model.posX, model.posY, model.width, model.height);
                    spacedesk.Debug.timeEnd("CanvasDrawing");
                };
                CanvasRender.prototype.onresize = function(resolution) {
                    this.resolution = resolution;
                    this.targetCanvas.width = resolution.width;
                    this.targetCanvas.height = resolution.height;
                };
                CanvasRender.prototype.init = function() {
                    this.context = this.targetCanvas.getContext("2d", {
                        willReadFrequently: true,
                        alpha: false
                    });
                    if (this.targetCanvas.hasAttribute("mozOpaque")) {
                        this.targetCanvas.mozOpaque = false;
                    }
                    if (this.compositeOver) {
                        this.context.globalCompositeOperation = "destination-over";
                    }
                    return true;
                };
                return CanvasRender;
            }());
            RenderEngine.CanvasRender = CanvasRender;
        })(RenderEngine = Controller.RenderEngine || (Controller.RenderEngine = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var RenderEngine = spacedesk.Controller.RenderEngine;
        var ViewController = (function() {
            function ViewController() {
                this.stretchScreen = true;
                this.isVisibile = false;
                this.desktopController = new Controller.DesktopController();
                this.cursorController = new Controller.CursorController();
                this.viewWrapper = document.getElementById("canvas-wrapper");
                this.labelDesktopSize = document.getElementById("desktopSize");
                this.requestAnimFrame = (function() {
                    return window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function(callback) {
                            window.setTimeout(callback, 1000 / 60, new Date().getTime());
                        };
                })();
            }
            Object.defineProperty(ViewController, "Canvas", {
                get: function() {
                    return ViewController.viewControl;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ViewController, "DesktopResolution", {
                get: function() {
                    return this.lastResolution;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ViewController, "touchDevice", {
                get: function() {
                    return "ontouchstart" in window || "msmaxtouchpoints" in window.navigator || Modernizr.touchevents;
                },
                enumerable: true,
                configurable: true
            });
            ViewController.prototype.init = function(cc) {
                var _this = this;
                this.renderEngine = new RenderEngine.CanvasRender(ViewController.viewControl);
                this.renderEngine.init();
                ViewController.lastResolution = spacedesk.Model.Resolution.GetScreenResolution();
                this.desktopController.DesktopDrawed.on(function(data) {
                    return _this.requestForUpdateDesktop();
                });
                var result = this.desktopController.init(cc) && this.cursorController.init();
                if (!result) {
                    return false;
                }
                this.setDesktopSize(ViewController.lastResolution);
                window.addEventListener("resize", function() {
                    return _this.setDesktopScaling();
                });
                Controller.UI.OrientationController.OrientationChanged.on(function() {
                    _this.setDesktopScaling();
                });
                this.requestForUpdateDesktop();
                return result;
            };
            ViewController.prototype.pushFrameBuffer = function(data) {
                var newWidth = data.header.resolution.width;
                var newHeight = data.header.resolution.height;
                if (newWidth !== ViewController.lastResolution.width || newHeight !== ViewController.lastResolution.height) {
                    ViewController.lastResolution = new spacedesk.Model.Resolution(newWidth, newHeight);
                    this.setDesktopSize(ViewController.lastResolution);
                }
                this.desktopController.pushFrameBuffer(data);
            };
            ViewController.prototype.drawCursor = function(data) {
                this.cursorController.setCursorBitmap(data);
                this.requestForUpdateDesktop();
            };
            ViewController.prototype.setCursorPosition = function(data) {
                this.cursorController.setCursorPositon(data);
                this.requestForUpdateDesktop();
            };
            ViewController.prototype.setVisibility = function(visible) {
                spacedesk.Debug.info("Visibility changed to: " + visible);
                this.isVisibile = visible;
                $(ViewController.viewControl).toggle(visible);
                $(ViewController.viewControl).toggleClass("on", visible);
                $(ViewController.viewControl).toggleClass("off", !visible);
                this.setDesktopScaling();
            };
            ViewController.prototype.setDesktopSize = function(resolution) {
                spacedesk.Debug.info("Resolution changed to " + resolution.width + "x" + resolution.height);
                this.desktopController.resizeDesktop(resolution);
                this.renderEngine.onresize(resolution);
                ViewController.viewControl.width = resolution.width;
                ViewController.viewControl.height = resolution.height;
                this.setDesktopScaling();
            };
            ViewController.prototype.setDesktopScaling = function() {
                var $canvas = $(ViewController.viewControl);
                if (this.stretchScreen) {
                    if (!$canvas.is(".upscaleY, .upscaleX")) {
                        $canvas.addClass("upscaleX").addClass("upscaleY");
                    }
                } else {
                    $canvas.toggleClass("upscaleX", (window.innerWidth < ViewController.lastResolution.width));
                    $canvas.toggleClass("upscaleY", (window.innerHeight < ViewController.lastResolution.height));
                }
                var labelText = ViewController.lastResolution.width + " x " + ViewController.lastResolution.height;
                if ($canvas.is(".upscaleY, .upscaleX")) {
                    labelText = labelText + " (" + ViewController.viewControl.offsetWidth + " x " + ViewController.viewControl.offsetHeight + " scaled)";
                }
                if (spacedesk.Utils.iOSDevice || spacedesk.Utils.isAndroid) {
                    $canvas.css("height", $(window).height());
                }
                this.labelDesktopSize.innerHTML = labelText;
            };
            ViewController.prototype.requestForUpdateDesktop = function() {
                var _this = this;
                if (spacedesk.Utils.iOSDevice) {
                    this.drawDesktop();
                } else {
                    this.requestAnimFrame.call(window, function() {
                        _this.drawDesktop();
                    });
                }
            };
            ViewController.prototype.drawDesktop = function() {
                Controller.DiagnosticController.meterRAF();
                if (document.hidden) {
                    spacedesk.Debug.log("Document is hidden. No desktop drawing");
                    return;
                }
                Controller.DiagnosticController.meterFPS();
                Controller.DiagnosticController.start(Controller.DiagnosticTimeTypes.frame);
                if (this.renderEngine instanceof RenderEngine.CanvasRender) {
                    this.renderEngine.onresize(this.renderEngine.resolution);
                }
                spacedesk.Debug.time("Draw Desktop");
                this.desktopController.drawDesktopOn(this.renderEngine);
                spacedesk.Debug.timeEnd("Draw Desktop");
                spacedesk.Debug.time("Draw Cursor");
                spacedesk.Debug.timeEnd("Draw Cursor");
                Controller.DiagnosticController.count(Controller.DiagnosticCountTypes.drawing);
                Controller.DiagnosticController.end(Controller.DiagnosticTimeTypes.frame);
                Controller.DiagnosticController.update();
            };
            ViewController.viewId = "viewCanvas";
            ViewController.viewControl = document.getElementById(ViewController.viewId);
            ViewController.lastResolution = new spacedesk.Model.Resolution(0, 0);
            return ViewController;
        }());
        Controller.ViewController = ViewController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var PointerLockController = (function() {
                function PointerLockController() {}
                Object.defineProperty(PointerLockController, "pointerLockActivated", {
                    get: function() {
                        return (document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement) != null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PointerLockController, "pointerLockEnabled", {
                    get: function() {
                        return spacedesk.Model.Options.currentOptions.kvmControl &&
                            !Controller.ViewController.touchDevice &&
                            ("pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document);
                    },
                    enumerable: true,
                    configurable: true
                });
                PointerLockController.requestPointerLock = function() {
                    if (this.pointerLockEnabled) {
                        Controller.ViewController.Canvas.requestPointerLock = Controller.ViewController.Canvas.requestPointerLock ||
                            Controller.ViewController.Canvas.mozRequestPointerLock ||
                            Controller.ViewController.Canvas.webkitRequestPointerLock;
                        Controller.ViewController.Canvas.requestPointerLock();
                        console.log("Pointer requested in PointerLockController!");
                    }
                };
                PointerLockController.exitPointerLock = function() {
                    if (this.pointerLockEnabled) {
                        document.exitPointerLock = document.exitPointerLock ||
                            document.mozExitPointerLock ||
                            document.webkitExitPointerLock;
                        document.exitPointerLock();
                    }
                };
                return PointerLockController;
            }());
            UI.PointerLockController = PointerLockController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var FullscreenController = (function() {
                function FullscreenController() {}
                FullscreenController.registerEvents = function() {
                    $(".togglefullscreen").toggle(FullscreenController.fullscreenEnabled);
                    if (FullscreenController.fullscreenEnabled) {
                        $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function(e) {
                            var fullscreen = Controller.UI.FullscreenController.isFullscreen;
                            var icon_fullscreen_exit = "<!--fullscreen_exit-->&#xE5D1;";
                            var icon_fullscreen = "<!--fullscreen-->&#xE5D0;";
                            $(".togglefullscreen .material-icons").html(fullscreen ? icon_fullscreen_exit : icon_fullscreen);
                            $("#menu .togglefullscreen").html(fullscreen ? "<i class='material-icons'>" + icon_fullscreen_exit + "</i>Leave Fullscreen</a>" : "<i class='material-icons'>" + icon_fullscreen + "</i>Enter Fullscreen</a>");
                        });
                    }
                };
                Object.defineProperty(FullscreenController, "fullscreenEnabled", {
                    get: function() {
                        return document.fullscreenEnabled ||
                            document.webkitFullscreenEnabled ||
                            document.mozFullScreenEnabled ||
                            document.msFullscreenEnabled;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FullscreenController, "isFullscreen", {
                    get: function() {
                        if (document.fullscreenElement) {
                            return document.fullscreenElement != null;
                        }
                        if (document.webkitFullscreenElement) {
                            return document.webkitFullscreenElement != null;
                        }
                        if (document.mozFullScreenElement) {
                            return document.mozFullScreenElement != null;
                        }
                        if (document.msFullscreenElement) {
                            return document.msFullscreenElement != null;
                        }
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                FullscreenController.requestFullscreen = function(setOptions) {
                    if (setOptions === void 0) {
                        setOptions = true;
                    }
                    var elem = document.body;
                    if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                    } else if (elem.webkitRequestFullscreen) {
                        elem.webkitRequestFullscreen();
                    } else if (elem.mozRequestFullScreen) {
                        elem.mozRequestFullScreen();
                    } else if (elem.msRequestFullscreen) {
                        elem.msRequestFullscreen();
                    }
                    if (setOptions) {
                        spacedesk.Model.Options.currentOptions.fullscreen = true;
                    }
                    if (spacedesk.Model.Options.currentOptions.kvmControl) {
                        UI.PointerLockController.requestPointerLock();
                    }
                };
                FullscreenController.cancelFullscreen = function(setOptions) {
                    if (setOptions === void 0) {
                        setOptions = true;
                    }
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                    if (setOptions) {
                        spacedesk.Model.Options.currentOptions.fullscreen = false;
                    }
                };
                FullscreenController.toggleFullscreen = function(setOptions) {
                    if (setOptions === void 0) {
                        setOptions = true;
                    }
                    if (FullscreenController.isFullscreen) {
                        FullscreenController.cancelFullscreen(setOptions);
                    } else {
                        FullscreenController.requestFullscreen(setOptions);
                    }
                };
                return FullscreenController;
            }());
            UI.FullscreenController = FullscreenController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var SpacedeskController = (function() {
            function SpacedeskController() {
                this.initialPayloadTimeout = false;
                this.initialPayloadTimeoutTime = 5000;
                this.onConnectedTriggered = false;
                this.connectionTimeout = false;
                this.reconnecting = false;
                this.reconnections = 0;
                this.shouldReconnectToServer = true;
                this.connected = false;
                this.naturalClosed = false;
                this.screenVisible = false;
                this.onPacketReceived = new SpacedeskEvent();
                this.onConnected = new SpacedeskEvent();
                this.onDisconnected = new SpacedeskEvent();
                this.onReconnect = new SpacedeskEvent();
                this.onConnectionTimout = new SpacedeskEvent();
                this.onConnectionError = new SpacedeskEvent();
            }
            Object.defineProperty(SpacedeskController.prototype, "Connected", {
                get: function() {
                    return this.websocket != null && this.websocket.readyState === WebSocket.OPEN;
                },
                enumerable: true,
                configurable: true
            });
            SpacedeskController.prototype.connectToServer = function(settings) {
                var _this = this;
                this.options = settings;
                if (settings == null || settings.server == null) {
                    spacedesk.Debug.error("settings model is null oder settings.server is null");
                    return;
                }
                try {
                    var url = this.options.getSocketUrl();
                    this.onConnectedTriggered = false;
                    this.websocket = new WebSocket(url);
                    this.websocket.binaryType = "arraybuffer";
                    this.websocket.onopen = function() {
                        return _this.onSocketOpened();
                    };
                    this.websocket.onerror = function(event) {
                        return _this.onSocketError(event);
                    };
                    this.websocket.onclose = function(event) {
                        return _this.onSocketClose(event);
                    };
                    this.websocket.onmessage = function(message) {
                        return _this.onSocketMessageReceived(message);
                    };
                    var time = (this.reconnecting ? this.options.reconnectionTimeout : this.options.connectionTimeout);
                    this.timerTimeoutHandle = setTimeout(function() {
                        spacedesk.Debug.warn("Connection timeout.");
                        _this.connectionTimeout = true;
                        if (_this.websocket != null) {
                            _this.websocket.close();
                        }
                        _this.connectionTimeout = false;
                        _this.onConnectionTimout.trigger();
                    }, time);
                } catch (e) {
                    this.onConnectionError.trigger(this.getErrorCode(1));
                    spacedesk.Debug.log(e);
                }
            };
            SpacedeskController.prototype.closeConnection = function(message) {
                this.naturalClosed = true;
                if (this.websocket) {
                    if (this.websocket.readyState === WebSocket.OPEN) {
                        if (message != null && message.length > 0) {
                            this.sendData(message);
                        }
                        this.websocket.close(1000);
                    } else {
                        clearTimeout(this.timerTimeoutHandle);
                        this.shouldReconnectToServer = false;
                    }
                }
            };
            SpacedeskController.prototype.sendData = function(buffer) {
                if (this.Connected) {
                    this.websocket.send(buffer);
                }
            };
            SpacedeskController.prototype.sendInitialPayload = function(buffer) {
                var _this = this;
                this.sendData(buffer);
                this.initialPayloadTimeoutId = setTimeout(function() {
                    _this.initialPayloadTimeout = true;
                    _this.onConnectionError.trigger(_this.getErrorCode(2));
                }, this.initialPayloadTimeoutTime);
            };
            SpacedeskController.prototype.onSocketOpened = function() {
                clearTimeout(this.timerTimeoutHandle);
                this.reconnecting = false;
                this.shouldReconnectToServer = true;
                this.reconnections = 0;
                this.connected = true;
                if (!this.onConnectedTriggered) {
                    this.onConnectedTriggered = true;
                    this.onConnected.trigger();
                }
            };
            SpacedeskController.prototype.onSocketError = function(event) {
                if (event.code == null || event.code === undefined) {
                    event.code = 3;
                } else {
                    this.onConnectionError.trigger(this.getErrorCode(event.code));
                }
            };
            SpacedeskController.prototype.onSocketClose = function(event) {
                var serverClosedSession = false;
                clearTimeout(this.timerTimeoutHandle);
                this.websocket = null;
                if (this.initialPayloadTimeout) {
                    return;
                }
                if (this.connectionTimeout) {
                    return;
                }
                if (event.code !== 1000) {
                    var reason = this.getErrorCode(event.code, event);
                    if (event.code === 1006) {
                        serverClosedSession = true;
                    } else {
                        spacedesk.Debug.warn(reason);
                    }
                }
                if (this.connected && this.shouldReconnectToServer && serverClosedSession && !this.screenVisible) {
                    spacedesk.Debug.info("Reconnect: Server closed the session due a Power State Event.");
                    this.naturalClosed = false;
                }
                this.connected = false;
                if (this.naturalClosed) {
                    this.naturalClosed = false;
                    this.onDisconnected.trigger();
                } else {
                    this.reconnecting = true;
                    if (this.reconnections <= this.options.reconnections) {
                        this.reconnections++;
                        this.onReconnect.trigger();
                        spacedesk.Debug.info("Reconnecting to server " + this.reconnections + " of " + this.options.reconnections + "");
                        if (spacedesk.Model.Options.currentOptions.fullscreen) {
                            Controller.UI.FullscreenController.requestFullscreen();
                        }
                        this.connectToServer(this.options);
                    } else {
                        spacedesk.Debug.warn("Could not reconnect to server. Max. Reconnections (" + this.options.reconnections + ") reached. Show Error.");
                        this.onDisconnected.trigger();
                    }
                }
            };
            SpacedeskController.prototype.onSocketMessageReceived = function(message) {
                spacedesk.Debug.time("socket message");
                Controller.DiagnosticController.count(Controller.DiagnosticCountTypes.packets);
                if (this.initialPayloadTimeoutId > 0) {
                    clearTimeout(this.initialPayloadTimeoutId);
                    this.initialPayloadTimeoutId = 0;
                }
                var data = new spacedesk.Model.Protocol.Packet.SpacedeskPacket(message.data);
                if (data != null) {
                    this.onPacketReceived.trigger(data);
                    if (data.header.identification === spacedesk.Model.Protocol.ProtocolHeaderType.Visibility) {
                        this.screenVisible = data.header.visible;
                    }
                }
                data.header = null;
                data.payload = null;
                data = null;
                message.data = null;
                message = null;
                spacedesk.Debug.timeEnd("socket message");
            };
            SpacedeskController.prototype.getErrorCode = function(code, event) {
                if (event === void 0) {
                    event = null;
                }
                var reason = "";
                switch (code) {
                    case 1:
                        reason = "Could not create Websocket";
                        break;
                    case 2:
                        reason = "Server is not responding.";
                        break;
                    case 3:
                        reason = "Connection timeout. Maybe a wrong IP-Address?";
                        break;
                    case 1001:
                        reason = "An endpoint is \"going away\", such as a server going down or a browser having navigated away from a page.";
                        break;
                    case 1002:
                        reason = "An endpoint is terminating the connection due to a protocol error";
                        break;
                    case 1003:
                        reason = "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).";
                        break;
                    case 1004:
                        reason = "Reserved. The specific meaning might be defined in the future.";
                        break;
                    case 1005:
                        reason = "No status code was actually present.";
                        break;
                    case 1006:
                        reason = "The connection was closed abnormally, e.g., without sending or receiving a Close control frame";
                        break;
                    case 1007:
                        reason = "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message).";
                        break;
                    case 1008:
                        reason = "An endpoint is terminating the connection because it has received a message that \"violates its policy\". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.";
                        break;
                    case 1009:
                        reason = "An endpoint is terminating the connection because it has received a message that is too big for it to process.";
                        break;
                    case 1010:
                        reason = "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + event.reason;
                        break;
                    case 1011:
                        reason = "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.";
                        break;
                    case 1015:
                        reason = "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).";
                        break;
                    default:
                        reason = "Unknown reason";
                        break;
                }
                return reason;
            };
            Object.defineProperty(SpacedeskController.prototype, "PacketReceived", {
                get: function() {
                    return this.onPacketReceived;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpacedeskController.prototype, "ConnectionEstablished", {
                get: function() {
                    return this.onConnected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpacedeskController.prototype, "Reconnect", {
                get: function() {
                    return this.onReconnect;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpacedeskController.prototype, "ConnectionError", {
                get: function() {
                    return this.onConnectionError;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpacedeskController.prototype, "Disconnected", {
                get: function() {
                    return this.onDisconnected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpacedeskController.prototype, "Timeout", {
                get: function() {
                    return this.onConnectionTimout;
                },
                enumerable: true,
                configurable: true
            });
            return SpacedeskController;
        }());
        Controller.SpacedeskController = SpacedeskController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var FrameBufferPacket = (function(_super) {
                    __extends(FrameBufferPacket, _super);

                    function FrameBufferPacket() {
                        _super.apply(this, arguments);
                    }
                    return FrameBufferPacket;
                }(Packet.SpacedeskPacket));
                Packet.FrameBufferPacket = FrameBufferPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var DiagnosticController = (function() {
            function DiagnosticController() {}
            DiagnosticController.count = function(type) {
                if (typeof this.rS !== "undefined") {
                    var name_1 = this.getRenderingCountName(type);
                    var val = this.counter[name_1] || 0;
                    this.rS(name_1).set(val++);
                    this.counter[name_1] = val;
                }
            };
            DiagnosticController.start = function(type) {
                if (typeof this.rS !== "undefined") {
                    var name_2 = this.getRenderingTypeName(type);
                    this.rS(name_2).start();
                }
            };
            DiagnosticController.end = function(type) {
                if (typeof this.rS !== "undefined") {
                    var name_3 = this.getRenderingTypeName(type);
                    this.rS(name_3).end();
                }
            };
            DiagnosticController.meterRAF = function() {
                if (typeof this.rS !== "undefined") {
                    this.rS("raf").tick();
                }
            };
            DiagnosticController.meterFPS = function() {
                if (typeof this.rS !== "undefined") {
                    this.rS("fps").frame();
                }
            };
            DiagnosticController.update = function() {
                if (typeof this.rS !== "undefined") {
                    this.rS().update();
                }
            };
            DiagnosticController.createInstance = function() {
                if (spacedesk.Debug.fpsMeter) {
                    return new rStats({
                        values: {
                            raf: {
                                caption: "Last rAF (ms)"
                            },
                            fps: {
                                caption: "Framerate (FPS)",
                                below: 25
                            },
                            frame: {
                                caption: "View Render (ms)",
                                over: 20
                            },
                            decode: {
                                caption: "Image Decode (ms)",
                                over: 20
                            },
                            render: {
                                caption: "WebGL Render (ms)"
                            },
                            cursor: {
                                caption: "Cursor  Render (ms)"
                            },
                            packets: {
                                caption: "Packets received"
                            },
                            drawing: {
                                caption: "Drawing times"
                            }
                        },
                        groups: [{
                                caption: "Framerate",
                                values: ["fps", "raf"]
                            },
                            {
                                caption: "Rendering",
                                values: ["frame", "decode", "render", "cursor"]
                            },
                            {
                                caption: "Stats",
                                values: ["packets", "drawing"]
                            }
                        ],
                        css: []
                    });
                }
                return undefined;
            };
            DiagnosticController.getRenderingTypeName = function(type) {
                switch (type) {
                    case DiagnosticTimeTypes.frame:
                        return "frame";
                    case DiagnosticTimeTypes.render:
                        return "render";
                    case DiagnosticTimeTypes.decode:
                        return "decode";
                    case DiagnosticTimeTypes.cursor:
                        return "cursor";
                    default:
                        return "";
                }
            };
            DiagnosticController.getRenderingCountName = function(type) {
                switch (type) {
                    case DiagnosticCountTypes.packets:
                        return "packets";
                    case DiagnosticCountTypes.drawing:
                        return "drawing";
                    default:
                        return "";
                }
            };
            DiagnosticController.rS = DiagnosticController.createInstance();
            DiagnosticController.counter = {};
            return DiagnosticController;
        }());
        Controller.DiagnosticController = DiagnosticController;
        (function(DiagnosticTimeTypes) {
            DiagnosticTimeTypes[DiagnosticTimeTypes["frame"] = 0] = "frame";
            DiagnosticTimeTypes[DiagnosticTimeTypes["decode"] = 1] = "decode";
            DiagnosticTimeTypes[DiagnosticTimeTypes["render"] = 2] = "render";
            DiagnosticTimeTypes[DiagnosticTimeTypes["cursor"] = 3] = "cursor";
        })(Controller.DiagnosticTimeTypes || (Controller.DiagnosticTimeTypes = {}));
        var DiagnosticTimeTypes = Controller.DiagnosticTimeTypes;
        (function(DiagnosticCountTypes) {
            DiagnosticCountTypes[DiagnosticCountTypes["packets"] = 0] = "packets";
            DiagnosticCountTypes[DiagnosticCountTypes["drawing"] = 1] = "drawing";
        })(Controller.DiagnosticCountTypes || (Controller.DiagnosticCountTypes = {}));
        var DiagnosticCountTypes = Controller.DiagnosticCountTypes;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var Model = spacedesk.Model;
        var RenderModel = Model.Render.RenderItemModel;
        var ImageController = (function() {
            function ImageController() {
                this.imageReadyQueue = new Array();
                this.onImageReady = new SpacedeskEvent();
                this.onImageError = new SpacedeskEvent();
            }
            ImageController.prototype.push = function(data) {
                this.renderImage(data);
            };
            ImageController.prototype.cleanUpModel = function(model) {
                model.image.onload = undefined;
                model.image.onerror = undefined;
                var url = model.image.src;
                model.image.src = "";
                if (!spacedesk.Utils.isIE) {
                    model.image.remove();
                }
                model.image = null;
                model = null;
                URL.revokeObjectURL(url);
            };
            ImageController.prototype.renderImage = function(data) {
                var _this = this;
                spacedesk.Debug.time("Image load");
                Controller.DiagnosticController.start(Controller.DiagnosticTimeTypes.decode);
                var model = new RenderModel(data);
                var url = this.getBlobUrl(data);
                if (url != null && url.length > 0) {
                    var loader_1 = function(resolve) {
                        var image = new Image(data.header.resolution.width, data.header.resolution.height);
                        model.image = image;
                        image.onload = resolve;
                        image.onerror = function(ev) {
                            return _this.onImageErrorHandler(ev);
                        };
                        image.src = url;
                    };
                    if ("Promise" in window) {
                        var promise = new Promise(function(resolve, reject) {
                            return loader_1(resolve);
                        }).then(function() {
                            _this.onImageReadyHandler(model);
                        });
                    } else {
                        loader_1(function() {
                            _this.onImageReadyHandler(model);
                        });
                    }
                } else {
                    spacedesk.Debug.error("Blob Url is null");
                    this.onImageError.trigger("Blob Url is null");
                }
            };
            ImageController.prototype.getBlobUrl = function(data) {
                switch (data.header.compressionType) {
                    case Model.Protocol.CompressionType.Off:
                        var backCanvas = document.createElement("canvas");
                        backCanvas.width = data.header.position.posX2 - data.header.position.posX;
                        backCanvas.height = data.header.position.posY2 - data.header.position.posY;
                        var backCtx = backCanvas.getContext("2d");
                        var imgData = backCtx.getImageData(0, 0, backCanvas.width, backCanvas.height);
                        var rawData = imgData.data;
                        for (var i = 0; i < rawData.length; i += 4) {
                            rawData[i] = data.payload.data[i + 2];
                            rawData[i + 1] = data.payload.data[i + 1];
                            rawData[i + 2] = data.payload.data[i];
                            rawData[i + 3] = 255;
                        }
                        backCtx.putImageData(imgData, 0, 0);
                        var url = backCanvas.toDataURL();
                        backCtx = null;
                        backCanvas.remove();
                        backCanvas = null;
                        return url;
                    case Model.Protocol.CompressionType.JPEG:
                    case Model.Protocol.CompressionType.MJPEGD2:
                        if (data.payload.data[0] === 255) {
                            var blob = new Blob([data.payload.data], {
                                type: "image/jpg"
                            });
                            return URL.createObjectURL(blob);
                        }
                }
                return null;
            };
            ImageController.prototype.onImageErrorHandler = function(ev) {
                spacedesk.Debug.error("Image could not be loaded: " + ev.error);
                this.onImageError.trigger(ev.error);
            };
            ImageController.prototype.onImageReadyHandler = function(model) {
                spacedesk.Debug.timeEnd("Image load");
                Controller.DiagnosticController.end(Controller.DiagnosticTimeTypes.decode);
                spacedesk.Debug.log("Queue added - y:" + model.posY);
                var index = this.imageReadyQueue.push(model);
                this.onImageReady.trigger();
            };
            Object.defineProperty(ImageController.prototype, "ImageReady", {
                get: function() {
                    return this.onImageReady;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageController.prototype, "ImageError", {
                get: function() {
                    return this.onImageError;
                },
                enumerable: true,
                configurable: true
            });
            return ImageController;
        }());
        Controller.ImageController = ImageController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var Packet = spacedesk.Model.Protocol.Packet;
        var WebGL = spacedesk.Model.Render.WebGLHelper;
        var RenderItemModel = spacedesk.Model.Render.RenderItemModel;
        var RenderEngine = spacedesk.Controller.RenderEngine;
        var DesktopController = (function() {
            function DesktopController() {
                this.imageController = new Controller.ImageController();
                this.fragmentCounter = 0;
                this.isBusy = false;
                this.ackPacket = new Packet.FlowControlAckPacket();
                this.onDesktopDrawed = new SpacedeskEvent();
            }
            Object.defineProperty(DesktopController.prototype, "DesktopCanvas", {
                get: function() {
                    return this.renderEngine.targetCanvas;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DesktopController.prototype, "DesktopDrawed", {
                get: function() {
                    return this.onDesktopDrawed;
                },
                enumerable: true,
                configurable: true
            });
            DesktopController.prototype.drawDesktopOn = function(renderEngine) {
                var model = new RenderItemModel();
                model.posX = 0;
                model.posX2 = this.renderEngine.resolution.width;
                model.posY = 0;
                model.posY2 = this.renderEngine.resolution.height;
                if (this.backBufferCanvas !== undefined) {
                    model.image = this.backBufferCanvas;
                } else {
                    model.image = this.renderEngine.targetCanvas;
                }
                renderEngine.draw(model);
            };
            DesktopController.prototype.init = function(cc) {
                var _this = this;
                this.imageController.ImageReady.on(function() {
                    _this.onImageReady();
                });
                this.registerVisibilityChangeEvents();
                this.connectionController = cc;
                if (WebGL.CheckForWebGL()) {
                    this.renderEngine = new RenderEngine.WebGLRender();
                } else {
                    this.renderEngine = new RenderEngine.CanvasRender();
                }
                if (this.renderEngine != null) {
                    return this.renderEngine.init();
                }
                return false;
            };
            DesktopController.prototype.pushFrameBuffer = function(data) {
                this.imageController.push(data);
            };
            DesktopController.prototype.resizeDesktop = function(resolution) {
                this.renderEngine.onresize(resolution);
            };
            DesktopController.prototype.onImageReady = function() {
                if (this.isBusy) {
                    return;
                }
                this.isBusy = true;
                spacedesk.Debug.log("Start Queue: " + this.imageController.imageReadyQueue.length);
                while (this.imageController.imageReadyQueue.length > 0) {
                    var model = this.imageController.imageReadyQueue.shift();
                    Controller.DiagnosticController.start(Controller.DiagnosticTimeTypes.render);
                    this.renderEngine.draw(model);
                    Controller.DiagnosticController.end(Controller.DiagnosticTimeTypes.render);
                    if (model.isFragement) {
                        this.fragmentCounter++;
                        if (this.fragmentCounter % 4 !== 0) {
                            this.imageController.cleanUpModel(model);
                            var moreFragmentNeeded = 4 - this.fragmentCounter;
                            if (this.imageController.imageReadyQueue.length >= moreFragmentNeeded) {
                                continue;
                            } else {
                                spacedesk.Debug.log("End Queue (Fragment not available)");
                                this.isBusy = false;
                                return;
                            }
                        } else {
                            this.fragmentCounter = 0;
                        }
                    } else {
                        this.fragmentCounter = 0;
                    }
                    this.imageController.cleanUpModel(model);
                    this.backBufferCanvas = undefined;
                    spacedesk.Debug.log("Draw");
                    this.onDesktopDrawed.trigger(this.renderEngine.targetCanvas);
                    this.connectionController.sendAck(this.ackPacket.GetBufferData());
                    spacedesk.Debug.log("ACK sent");
                }
                spacedesk.Debug.log("End Queue");
                this.isBusy = false;
            };
            DesktopController.prototype.registerVisibilityChangeEvents = function() {
                var _this = this;
                var hidden = "";
                var visibilityChange = "";
                if (typeof document.hidden !== "undefined") {
                    hidden = "hidden";
                    visibilityChange = "visibilitychange";
                } else if (typeof document.mozHidden !== "undefined") {
                    hidden = "mozHidden";
                    visibilityChange = "mozvisibilitychange";
                } else if (typeof document.msHidden !== "undefined") {
                    hidden = "msHidden";
                    visibilityChange = "msvisibilitychange";
                } else if (typeof document.webkitHidden !== "undefined") {
                    hidden = "webkitHidden";
                    visibilityChange = "webkitvisibilitychange";
                }
                document.addEventListener(visibilityChange, function() {
                    if (document[hidden]) {
                        _this.copyDesktopToBackCanvas();
                    }
                }, false);
                document.addEventListener("blur", function() {
                    if (document[hidden]) {
                        _this.copyDesktopToBackCanvas();
                    }
                }, false);
                window.addEventListener("blur", function() {
                    if (document[hidden]) {
                        _this.copyDesktopToBackCanvas();
                    }
                }, false);
            };
            DesktopController.prototype.copyDesktopToBackCanvas = function() {
                this.backBufferCanvas = document.createElement("canvas");
                var context = this.backBufferCanvas.getContext("2d");
                var width = this.renderEngine.resolution.width;
                var height = this.renderEngine.resolution.height;
                this.backBufferCanvas.width = width;
                this.backBufferCanvas.height = height;
                this.copyDesktopOn(context);
            };
            DesktopController.prototype.copyDesktopOn = function(context) {
                var width = this.renderEngine.resolution.width;
                var height = this.renderEngine.resolution.height;
                var pixels = new Uint8Array(width * height * 4);
                var image = context.createImageData(width, height);
                var gl = this.renderEngine.context;
                gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
                var dst = image.data;
                var d = pixels;
                for (var y = 0; y < height; y++) {
                    for (var x = 0; x < width; x++) {
                        var off = (y * width + x) * 4;
                        var dstOff = ((height - y - 1) * width + x) * 4;
                        dst[dstOff] = d[off];
                        dst[dstOff + 1] = d[off + 1];
                        dst[dstOff + 2] = d[off + 2];
                        dst[dstOff + 3] = d[off + 3];
                    }
                }
                context.putImageData(image, 0, 0);
            };
            return DesktopController;
        }());
        Controller.DesktopController = DesktopController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        (function(MouseButton) {
            MouseButton[MouseButton["None"] = -1] = "None";
            MouseButton[MouseButton["Left"] = 0] = "Left";
            MouseButton[MouseButton["Middle"] = 1] = "Middle";
            MouseButton[MouseButton["Right"] = 2] = "Right";
        })(Model.MouseButton || (Model.MouseButton = {}));
        var MouseButton = Model.MouseButton;
        (function(MouseState) {
            MouseState[MouseState["Move"] = 0] = "Move";
            MouseState[MouseState["Down"] = 1] = "Down";
            MouseState[MouseState["Up"] = 2] = "Up";
            MouseState[MouseState["Scroll"] = 3] = "Scroll";
        })(Model.MouseState || (Model.MouseState = {}));
        var MouseState = Model.MouseState;
        (function(KeyState) {
            KeyState[KeyState["Down"] = 0] = "Down";
            KeyState[KeyState["Up"] = 1] = "Up";
        })(Model.KeyState || (Model.KeyState = {}));
        var KeyState = Model.KeyState;
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Point = (function() {
            function Point(posX, posY) {
                if (posX === void 0) {
                    posX = 0;
                }
                if (posY === void 0) {
                    posY = 0;
                }
                this.x = 0;
                this.y = 0;
                this.x = posX;
                this.y = posY;
            }
            return Point;
        }());
        Model.Point = Point;
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var KVM;
                    (function(KVM) {
                        var GenericInputHeader = (function() {
                            function GenericInputHeader() {}
                            return GenericInputHeader;
                        }());
                        KVM.GenericInputHeader = GenericInputHeader;
                    })(KVM = Header.KVM || (Header.KVM = {}));
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var KVMPacket = (function() {
                    function KVMPacket(header) {
                        this.header = header;
                    }
                    KVMPacket.prototype.GetBufferData = function() {
                        return this.header.GetBytes();
                    };
                    KVMPacket.prototype.dispose = function() {
                        this.header = null;
                    };
                    return KVMPacket;
                }());
                Packet.KVMPacket = KVMPacket;
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var KVM;
                    (function(KVM) {
                        var KeyboardInputHeader = (function(_super) {
                            __extends(KeyboardInputHeader, _super);

                            function KeyboardInputHeader() {
                                _super.apply(this, arguments);
                                this.type = Protocol.ProtocolHeaderType.Keyboard;
                            }
                            KeyboardInputHeader.prototype.GetBytes = function() {
                                var POSITION_TYPE = 0;
                                var POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER = 4;
                                var POSITION_VKEYCODE = 8;
                                var POSITION_SCANCODE = 12;
                                var POSITION_FLAGS = 16;
                                var POSITION_TIME = 20;
                                var POSITION_RESERVED = 24;
                                var header = new Uint8Array(Protocol.ProtocolDefinition.headerLength);
                                var flags = 0x0;
                                header.assignInteger32(POSITION_TYPE, this.type);
                                header.assignInteger32(POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER, 0);
                                header.assignInteger32(POSITION_VKEYCODE, this.keyCode);
                                header.assignInteger32(POSITION_SCANCODE, this.keyCode);
                                flags |= Protocol.KeyEvents.ScanCode;
                                if (this.state === Model.KeyState.Up) {
                                    flags |= Protocol.KeyEvents.KeyUp;
                                }
                                header.assignInteger32(POSITION_FLAGS, flags);
                                header.assignInteger32(POSITION_TIME, 0);
                                header.assignInteger32(POSITION_RESERVED, 0);
                                return header;
                            };
                            return KeyboardInputHeader;
                        }(KVM.GenericInputHeader));
                        KVM.KeyboardInputHeader = KeyboardInputHeader;
                    })(KVM = Header.KVM || (Header.KVM = {}));
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var KVM;
                    (function(KVM) {
                        var MouseInputHeader = (function(_super) {
                            __extends(MouseInputHeader, _super);

                            function MouseInputHeader() {
                                _super.apply(this, arguments);
                                this.type = Protocol.ProtocolHeaderType.Mouse;
                                this.position = new Model.Point(0, 0);
                                this.wheelDelta = 0;
                            }
                            MouseInputHeader.prototype.GetBytes = function() {
                                var POSITION_TYPE = 0;
                                var POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER = 4;
                                var POSITION_X = 8;
                                var POSITION_Y = 12;
                                var POSITION_BUTTON_DATA = 16;
                                var POSITION_BUTTON_FLAGS = 20;
                                var POSITION_FLAGS = 24;
                                var header = new Uint8Array(Protocol.ProtocolDefinition.headerLength);
                                header.assignInteger32(POSITION_TYPE, this.type);
                                header.assignInteger32(POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER, 0);
                                var flags = 0x0;
                                switch (this.state) {
                                    case Model.MouseState.Move:
                                        header.assignInteger32(POSITION_X, this.position.x);
                                        header.assignInteger32(POSITION_Y, this.position.y);
                                        flags |= 0x01;
                                        break;
                                    case Model.MouseState.Scroll:
                                        header.assignInteger32(POSITION_BUTTON_DATA, this.wheelDelta);
                                        flags |= Protocol.MouseEvents.Wheel;
                                        break;
                                    case Model.MouseState.Up:
                                    case Model.MouseState.Down:
                                        var buttonValue = 0;
                                        switch (this.button) {
                                            case Model.MouseButton.Left:
                                                buttonValue = this.state === Model.MouseState.Down ? Protocol.MouseEvents.LeftDown : Protocol.MouseEvents.LeftUp;
                                                break;
                                            case Model.MouseButton.Right:
                                                buttonValue = this.state === Model.MouseState.Down ? Protocol.MouseEvents.RightDown : Protocol.MouseEvents.RightUp;
                                                break;
                                            default:
                                                break;
                                        }
                                        console.log("FLAG = STATE - " + this.state + " BUTTON - " + this.button + " FLAG - " + buttonValue);
                                        flags |= buttonValue;
                                        break;
                                }
                                header.assignInteger32(POSITION_BUTTON_FLAGS, flags);
                                header.assignInteger32(POSITION_FLAGS, 0);
                                return header;
                            };
                            return MouseInputHeader;
                        }(KVM.GenericInputHeader));
                        KVM.MouseInputHeader = MouseInputHeader;
                    })(KVM = Header.KVM || (Header.KVM = {}));
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var KVM;
                    (function(KVM) {
                        var TouchInputHeader = (function(_super) {
                            __extends(TouchInputHeader, _super);

                            function TouchInputHeader() {
                                _super.apply(this, arguments);
                                this.type = Protocol.ProtocolHeaderType.Touch;
                                this.position = new spacedesk.Model.Point(0, 0);
                                this.resX = 0;
                                this.resY = 0;
                            }
                            TouchInputHeader.prototype.GetBytes = function() {
                                var POSITION_TYPE = 0;
                                var POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER = 4;
                                var POSITION_X = 8;
                                var POSITION_Y = 12;
                                var POSITION_RES_X = 16;
                                var POSITION_RES_Y = 20;
                                var POSITION_FLAGS = 24;
                                var POSITION_TIMESTAMP_MILLISECONDS = 28;
                                var header = new Uint8Array(Protocol.ProtocolDefinition.headerLength);
                                var flags = 0x0;
                                if (Model.Options.currentOptions.kvmAbsoluteTouchPosition) {
                                    flags |= 0x01;
                                }
                                header.assignInteger32(POSITION_TYPE, this.type);
                                header.assignInteger32(POSITION_COUNT_BYTE_DATA_FOLLOWING_HEADER, 0);
                                header.assignInteger32(POSITION_X, this.position.x);
                                header.assignInteger32(POSITION_Y, this.position.y);
                                header.assignInteger32(POSITION_RES_X, this.resX);
                                header.assignInteger32(POSITION_RES_Y, this.resY);
                                if (this.touchState === Protocol.TouchState.TouchStateDown) {
                                    flags = flags | 0x2;
                                }
                                if (this.touchState === Protocol.TouchState.TouchStateUp) {
                                    flags = flags | 0x4;
                                }
                                header.assignInteger32(POSITION_FLAGS, flags);
                                this.date = new Date();
                                header.assignInteger32(POSITION_TIMESTAMP_MILLISECONDS, this.date.getMilliseconds());
                                return header;
                            };
                            return TouchInputHeader;
                        }(KVM.GenericInputHeader));
                        KVM.TouchInputHeader = TouchInputHeader;
                    })(KVM = Header.KVM || (Header.KVM = {}));
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        var Protocol;
        (function(Protocol) {
            var Packet;
            (function(Packet) {
                var Header;
                (function(Header) {
                    var KVM;
                    (function(KVM) {
                        var DisconnectHeader = (function(_super) {
                            __extends(DisconnectHeader, _super);

                            function DisconnectHeader() {
                                _super.apply(this, arguments);
                                this.type = Protocol.ProtocolHeaderType.Disconnect;
                            }
                            DisconnectHeader.prototype.GetBytes = function() {
                                var POSITION_TYPE = 0;
                                var header = new Uint8Array(Protocol.ProtocolDefinition.headerKVMLength);
                                header.assignInteger32(POSITION_TYPE, this.type);
                                return header;
                            };
                            return DisconnectHeader;
                        }(KVM.GenericInputHeader));
                        KVM.DisconnectHeader = DisconnectHeader;
                    })(KVM = Header.KVM || (Header.KVM = {}));
                })(Header = Packet.Header || (Packet.Header = {}));
            })(Packet = Protocol.Packet || (Protocol.Packet = {}));
        })(Protocol = Model.Protocol || (Model.Protocol = {}));
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var KVM;
        (function(KVM_1) {
            var Packet = spacedesk.Model.Protocol.Packet;
            var KVM = spacedesk.Model.Protocol.Packet.Header.KVM;
            var KeyState = spacedesk.Model.KeyState;
            var MouseButton = spacedesk.Model.MouseButton;
            var MouseState = spacedesk.Model.MouseState;
            var Point = spacedesk.Model.Point;
            var KVMBaseController = (function() {
                function KVMBaseController(sc) {
                    var _this = this;
                    this.lastPosition = new Point();
                    this.spacedeskController = sc;
                    this.spacedeskController.ConnectionEstablished.on(function() {
                        return _this.connectionEstablished();
                    });
                    this.spacedeskController.Disconnected.on(function() {
                        return _this.removeEventListener();
                    });
                }
                Object.defineProperty(KVMBaseController.prototype, "connected", {
                    get: function() {
                        return this.spacedeskController.Connected;
                    },
                    enumerable: true,
                    configurable: true
                });
                KVMBaseController.prototype.connectToServer = function(settings) {
                    this.spacedeskController.connectToServer(settings);
                };
                KVMBaseController.prototype.closeConnection = function() {
                    var header = new KVM.DisconnectHeader();
                    var packet = new Packet.KVMPacket(header);
                    var data = packet.GetBufferData();
                    this.spacedeskController.closeConnection(data);
                };
                KVMBaseController.prototype.sendMouse = function(button, state, position, wheelDelta) {
                    if (button === void 0) {
                        button = MouseButton.None;
                    }
                    if (state === void 0) {
                        state = MouseState.Move;
                    }
                    if (position === void 0) {
                        position = null;
                    }
                    if (wheelDelta === void 0) {
                        wheelDelta = -1;
                    }
                    if (!this.spacedeskController.Connected) {
                        return;
                    }
                    if (!spacedesk.Model.Options.currentOptions.kvmControl) {
                        return;
                    }
                    var header = new KVM.MouseInputHeader();
                    header.button = button;
                    header.state = state;
                    if (wheelDelta > 0) {
                        header.wheelDelta = wheelDelta;
                    }
                    header.position = position;
                    var packet = new Packet.KVMPacket(header);
                    var data = packet.GetBufferData();
                    this.spacedeskController.sendData(data);
                    data = null;
                    packet.dispose();
                    return;
                };
                KVMBaseController.prototype.sendTouch = function(touchState, position) {
                    if (!this.spacedeskController.Connected) {
                        return;
                    }
                    if (!spacedesk.Model.Options.currentOptions.kvmControl) {
                        return;
                    }
                    var header = new spacedesk.Model.Protocol.Packet.Header.KVM.TouchInputHeader();
                    header.touchState = touchState;
                    header.position = position;
                    header.resX = Controller.ViewController.Canvas.clientWidth;
                    header.resY = Controller.ViewController.Canvas.clientHeight;
                    var packet = new Packet.KVMPacket(header);
                    var data = packet.GetBufferData();
                    if (spacedesk.Debug.kvmProtocol) {
                        spacedesk.Debug.info("TouchState: " + touchState + " Coords: x -" + header.position.x + " y -" + header.position.y);
                    }
                    this.spacedeskController.sendData(data);
                    data = null;
                    packet.dispose();
                };
                KVMBaseController.prototype.sendKey = function(state, keyCode) {
                    if (!this.spacedeskController.Connected) {
                        return;
                    }
                    if (spacedesk.Debug.kvmProtocol) {
                        spacedesk.Debug.info("Key: " + String.fromCharCode(keyCode) + " (" + KeyState[state] + ")");
                    }
                    var header = new KVM.KeyboardInputHeader();
                    header.keyCode = keyCode;
                    header.state = state;
                    var packet = new Packet.KVMPacket(header);
                    var data = packet.GetBufferData();
                    this.spacedeskController.sendData(data);
                    data = null;
                    packet.dispose();
                    return;
                };
                KVMBaseController.prototype.keyDownEvent = function(event) {
                    event.preventDefault();
                    if (event.keyCode > 0) {
                        this.sendKey(KeyState.Down, event.keyCode);
                    }
                };
                KVMBaseController.prototype.keyUpEvent = function(event) {
                    event.preventDefault();
                    if (event.keyCode > 0) {
                        this.sendKey(KeyState.Up, event.keyCode);
                    }
                };
                KVMBaseController.prototype.connectionEstablished = function() {
                    this.addEventListener();
                };
                return KVMBaseController;
            }());
            KVM_1.KVMBaseController = KVMBaseController;
        })(KVM = Controller.KVM || (Controller.KVM = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var KVM;
        (function(KVM_2) {
            var Point = spacedesk.Model.Point;
            var TouchController = (function(_super) {
                __extends(TouchController, _super);

                function TouchController() {
                    _super.apply(this, arguments);
                    this.tapDelayTimerId = -1;
                    this.tapDelay = 300;
                    this.touchDrag = false;
                }
                TouchController.prototype.addEventListener = function() {
                    (Controller.ViewController.Canvas).addEventListener("touchstart", this.touchStartEvent.bind(this));
                    (Controller.ViewController.Canvas).addEventListener("touchmove", this.touchMoveEvent.bind(this));
                    (Controller.ViewController.Canvas).addEventListener("touchend", this.touchEndEvent.bind(this));
                };
                TouchController.prototype.removeEventListener = function() {
                    $(Controller.ViewController.Canvas).swipe("destroy");
                };
                TouchController.prototype.touchMoveEvent = function(event, target) {
                    this.sendTouch(spacedesk.Model.Protocol.TouchState.TouchSateNone, this.getPointerPosition(event));
                };
                TouchController.prototype.touchStartEvent = function(event, target) {
                    this.sendTouch(spacedesk.Model.Protocol.TouchState.TouchStateDown, this.getPointerPosition(event));
                };
                TouchController.prototype.touchEndEvent = function(event, target) {
                    this.sendTouch(spacedesk.Model.Protocol.TouchState.TouchStateUp, this.getPointerPosition(event));
                };
                TouchController.prototype.getPointerPosition = function(event) {
                    return new Point(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                };
                TouchController.mouseMaxAbsolutePosition = 65535;
                TouchController.key_backspace = 8;
                return TouchController;
            }(Controller.KVM.KVMBaseController));
            KVM_2.TouchController = TouchController;
        })(KVM = Controller.KVM || (Controller.KVM = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var KVM;
        (function(KVM_3) {
            var MouseButton = spacedesk.Model.MouseButton;
            var MouseState = spacedesk.Model.MouseState;
            var Point = spacedesk.Model.Point;
            var PointerLockController = Controller.UI.PointerLockController;
            var MouseController = (function(_super) {
                __extends(MouseController, _super);

                function MouseController() {
                    _super.apply(this, arguments);
                }
                MouseController.prototype.addEventListener = function() {
                    var _this = this;
                    Controller.ViewController.Canvas.addEventListener("mousewheel", this.mouseWheelEvent.bind(this), false);
                    Controller.ViewController.Canvas.addEventListener("DOMMouseScroll", function(event) {
                        return _this.mouseWheelEvent.bind(_this);
                    }, false);
                    Controller.ViewController.Canvas.addEventListener("onmousewheel", function(event) {
                        return _this.mouseWheelEvent.bind(_this);
                    }, false);
                    if (spacedesk.Model.Options.currentOptions.kvmKeyboard) {
                        window.addEventListener("keydown", this.keyDownEvent.bind(this), false);
                        window.addEventListener("keyup", this.keyUpEvent.bind(this), false);
                    }
                    Controller.ViewController.Canvas.addEventListener("dblclick", function(event) {
                        return event.preventDefault();
                    }, false);
                    Controller.ViewController.Canvas.addEventListener("mouseup", this.mouseUpEvent.bind(this), false);
                    Controller.ViewController.Canvas.addEventListener("mousedown", this.mouseDownEvent.bind(this), false);
                    Controller.ViewController.Canvas.addEventListener("mousemove", this.mouseMoveEvent.bind(this), false);
                };
                MouseController.prototype.removeEventListener = function() {
                    if (spacedesk.Model.Options.currentOptions.kvmKeyboard) {
                        window.removeEventListener("keydown", this.keyDownEvent);
                        window.removeEventListener("keyup", this.keyUpEvent);
                    }
                    Controller.ViewController.Canvas.removeEventListener("mouseup", this.mouseUpEvent);
                    Controller.ViewController.Canvas.removeEventListener("mousedown", this.mouseDownEvent);
                    Controller.ViewController.Canvas.removeEventListener("mousemove", this.mouseMoveEvent);
                    Controller.ViewController.Canvas.removeEventListener("mousewheel", this.mouseWheelEvent);
                    Controller.ViewController.Canvas.removeEventListener("DOMMouseScroll", this.mouseWheelEvent);
                    Controller.ViewController.Canvas.removeEventListener("onmousewheel", this.mouseWheelEvent);
                };
                MouseController.prototype.mouseUpEvent = function(event) {
                    if (!spacedesk.Model.Options.currentOptions.kvmControl) {
                        return;
                    }
                    this.sendMouse(event.button, MouseState.Up);
                };
                MouseController.prototype.mouseDownEvent = function(event) {
                    if (!spacedesk.Model.Options.currentOptions.kvmControl) {
                        return;
                    }
                    if (PointerLockController.pointerLockEnabled && !PointerLockController.pointerLockActivated) {
                        PointerLockController.requestPointerLock();
                        return;
                    }
                    this.sendMouse(event.button, MouseState.Down);
                };
                MouseController.prototype.mouseMoveEvent = function(event) {
                    if (!spacedesk.Model.Options.currentOptions.kvmControl) {
                        return;
                    }
                    if (PointerLockController.pointerLockEnabled && !PointerLockController.pointerLockActivated) {
                        return;
                    }
                    var position = this.getPointerPosition(event);
                    this.sendMouse(MouseButton.None, MouseState.Move, position);
                };
                MouseController.prototype.mouseWheelEvent = function(event) {
                    if (PointerLockController.pointerLockEnabled && !PointerLockController.pointerLockActivated) {
                        return;
                    }
                    this.sendMouse(MouseButton.None, MouseState.Scroll, null, event.wheelDelta);
                };
                MouseController.prototype.getPointerPosition = function(event) {
                    var scaleX = Controller.ViewController.DesktopResolution.width / Controller.ViewController.Canvas.clientWidth;
                    var scaleY = Controller.ViewController.DesktopResolution.height / Controller.ViewController.Canvas.clientHeight;
                    var newPosition = new Point(0, 0);
                    var mouseEvent = event;
                    if (Controller.UI.PointerLockController.pointerLockEnabled && Controller.UI.PointerLockController.pointerLockActivated) {
                        return new Point(mouseEvent.movementX, mouseEvent.movementY);
                    }
                    newPosition = new Point(mouseEvent.clientX, mouseEvent.clientY);
                    if (newPosition.x > 0 || newPosition.y > 0) {
                        var deltaX = newPosition.x - this.lastPosition.x;
                        var deltaY = newPosition.y - this.lastPosition.y;
                        deltaX = deltaX * scaleX;
                        deltaY = deltaY * scaleY;
                        this.lastPosition = newPosition;
                        return new Point(deltaX, deltaY);
                    }
                    return new Point(0, 0);
                };
                return MouseController;
            }(Controller.KVM.KVMBaseController));
            KVM_3.MouseController = MouseController;
        })(KVM = Controller.KVM || (Controller.KVM = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var KVM;
        (function(KVM_4) {
            var KVMFactory = (function() {
                function KVMFactory() {}
                KVMFactory.Build = function(sc) {
                    if (Controller.ViewController.touchDevice) {
                        console.log("Touchcontroller built");
                        return new KVM_4.TouchController(sc);
                    } else {
                        console.log("Mousecontroller built");
                        return new KVM_4.MouseController(sc);
                    }
                };
                return KVMFactory;
            }());
            KVM_4.KVMFactory = KVMFactory;
        })(KVM = Controller.KVM || (Controller.KVM = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Model;
    (function(Model) {
        (function(ConnectionState) {
            ConnectionState[ConnectionState["NotConnected"] = 0] = "NotConnected";
            ConnectionState[ConnectionState["Connecting"] = 1] = "Connecting";
            ConnectionState[ConnectionState["Connected"] = 2] = "Connected";
            ConnectionState[ConnectionState["Reconnecting"] = 3] = "Reconnecting";
            ConnectionState[ConnectionState["Error"] = 4] = "Error";
        })(Model.ConnectionState || (Model.ConnectionState = {}));
        var ConnectionState = Model.ConnectionState;
    })(Model = spacedesk.Model || (spacedesk.Model = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var ConnectionController = (function() {
            function ConnectionController() {
                this.spacedeskController = new Controller.SpacedeskController();
                this.viewController = new Controller.ViewController();
                this.state = spacedesk.Model.ConnectionState.NotConnected;
                this.lastErrorCode = "";
                this.onStateChanged = new SpacedeskEvent();
            }
            Object.defineProperty(ConnectionController.prototype, "connectionState", {
                get: function() {
                    return this.state;
                },
                set: function(newState) {
                    this.state = newState;
                    this.onStateChanged.trigger(this.state);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConnectionController.prototype, "errorCode", {
                get: function() {
                    return this.lastErrorCode;
                },
                enumerable: true,
                configurable: true
            });
            ConnectionController.prototype.disconnect = function() {
                Controller.UI.PointerLockController.exitPointerLock();
                this.spacedeskController.closeConnection();
            };
            ConnectionController.prototype.connectToServer = function(server) {
                spacedesk.Model.Options.currentOptions.server = server;
                return this.connect(spacedesk.Model.Options.currentOptions);
            };
            ConnectionController.prototype.connect = function(options) {
                if (this.state === spacedesk.Model.ConnectionState.NotConnected) {
                    this.connectionState = spacedesk.Model.ConnectionState.Connecting;
                    this.spacedeskController.connectToServer(options);
                    this.viewController.stretchScreen = options.stretchScreen;
                    return true;
                }
                return false;
            };
            ConnectionController.prototype.sendAck = function(packet) {
                if (this.state = spacedesk.Model.ConnectionState.Connected) {
                    this.spacedeskController.sendData(packet);
                }
            };
            ConnectionController.prototype.init = function() {
                var _this = this;
                this.spacedeskController.PacketReceived.on(function(data) {
                    _this.PacketReceived(data);
                });
                this.spacedeskController.Reconnect.on(function() {
                    _this.connectionState = spacedesk.Model.ConnectionState.Reconnecting;
                });
                this.spacedeskController.ConnectionError.on(function(errorCode) {
                    _this.lastErrorCode = errorCode;
                    _this.connectionState = spacedesk.Model.ConnectionState.Error;
                });
                this.spacedeskController.Timeout.on(function() {
                    _this.lastErrorCode = "Connection Timeout. Make sure your Server-IP is correct.";
                    _this.connectionState = spacedesk.Model.ConnectionState.Error;
                });
                this.spacedeskController.Disconnected.on(function() {
                    _this.connectionState = spacedesk.Model.ConnectionState.NotConnected;
                });
                this.spacedeskController.ConnectionEstablished.on(function() {
                    var identification = new spacedesk.Model.Protocol.Packet.IdentificationPacket(spacedesk.Model.Options.currentOptions);
                    var data = identification.GetBufferData();
                    _this.spacedeskController.sendData(data);
                    _this.connectionState = spacedesk.Model.ConnectionState.Connected;
                });
                if (!this.viewController.init(this)) {
                    return false;
                }
                this.kvmController = Controller.KVM.KVMFactory.Build(this.spacedeskController);
                return true;
            };
            Object.defineProperty(ConnectionController.prototype, "StateChanged", {
                get: function() {
                    return this.onStateChanged;
                },
                enumerable: true,
                configurable: true
            });
            ConnectionController.prototype.PacketReceived = function(data) {
                switch (data.header.identification) {
                    case spacedesk.Model.Protocol.ProtocolHeaderType.FrameBuffer:
                        this.viewController.pushFrameBuffer(data);
                        break;
                    case spacedesk.Model.Protocol.ProtocolHeaderType.Visibility:
                        this.viewController.setVisibility(data.header.visible);
                        break;
                    case spacedesk.Model.Protocol.ProtocolHeaderType.CursorBitmap:
                        this.viewController.drawCursor(data);
                        break;
                    case spacedesk.Model.Protocol.ProtocolHeaderType.CursorPosition:
                        this.viewController.setCursorPosition(data);
                        break;
                    default:
                        break;
                }
            };
            return ConnectionController;
        }());
        Controller.ConnectionController = ConnectionController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var BroadcastController = (function() {
            function BroadcastController() {}
            BroadcastController.addBroadcastServer = function(server) {
                if (!this.broadcastLookup) {
                    this.registerBroadcastLookup();
                }
                $("#server").val(server);
                console.log("New Broadcast server found: " + server);
                if ($("#broadcastlist a[data-server='" + server + "']").length <= 0) {
                    $("#broadcastlist").append("<a href='#' class='input-button-large' data-server='" + server + "'>" + server + "</a>");
                }
            };
            BroadcastController.registerBroadcastLookup = function() {
                this.broadcastLookup = true;
                $("#input").hide();
                $("#broadcast").show();
            };
            BroadcastController.unregisterBroadcastLookup = function() {
                this.broadcastLookup = false;
                if ($("#broadcastlist a").length <= 0) {
                    $("#input").show();
                    $("#broadcast").hide();
                } else {
                    $("#broadcast .description").html("Please select a server");
                }
            };
            BroadcastController.broadcastLookup = false;
            return BroadcastController;
        }());
        Controller.BroadcastController = BroadcastController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var AnimationController = (function() {
                function AnimationController() {}
                AnimationController.showConnect = function(backgroundAnimated) {
                    if (backgroundAnimated === void 0) {
                        backgroundAnimated = true;
                    }
                    $(".hide-on-connect").addClass("hide");
                    $(".show-on-connect").addClass("show");
                    $("#start").show().removeClass("hide");
                    if (backgroundAnimated) {
                        $("#start").addClass("animate");
                    }
                    $("#start").addClass("active");
                    $("#buttonLogin").addClass("pulse");
                    $("#buttonLogin").text("Connecting...");
                    setTimeout(function() {
                        var $icon = $("#icon");
                        $icon.attr("src", $icon.data(spacedesk.Utils.isRetinaDisplay ? "animation2x" : "animation"));
                    }, 200);
                };
                AnimationController.resetConnect = function(backgroundAnimated) {
                    if (backgroundAnimated === void 0) {
                        backgroundAnimated = true;
                    }
                    if (!backgroundAnimated) {
                        $("#start").removeClass("animate");
                    }
                    $(".hide-on-connect").removeClass("hide");
                    $(".show-on-connect").removeClass("show");
                    $("#start").removeClass("active");
                    $("#buttonLogin").removeClass("pulse");
                    $("#buttonLogin").text("Connect");
                    setTimeout(function() {
                        var $icon = $("#icon");
                        $icon.attr("src", $icon.data(spacedesk.Utils.isRetinaDisplay ? "src2x" : "src"));
                    }, 200);
                };
                AnimationController.showStart = function(backgroundAnimated) {
                    if (backgroundAnimated === void 0) {
                        backgroundAnimated = true;
                    }
                    if (!backgroundAnimated) {
                        $("#start").removeClass("animate");
                    }
                    $("#center-stage").addClass("hide");
                    $("#start").show().removeClass("hide");
                };
                AnimationController.showErrorState = function(errorMessage) {
                    this.resetConnect();
                    $("#start").addClass("error").addClass("active");
                    $("#input").hide();
                    $("#errorWrapper").show();
                    $("#errorText").html(errorMessage);
                };
                AnimationController.showDesktop = function() {
                    $("#start").addClass("hide");
                    $("#center-stage").removeClass("hide");
                };
                return AnimationController;
            }());
            UI.AnimationController = AnimationController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var MenuController = (function() {
                function MenuController() {
                    this.$element = $(".sliding-panel-content,.sliding-panel-fade-screen");
                    this.$mainStage = $("#canvas-wrapper");
                    this.registerEvents();
                }
                MenuController.prototype.toggleMenu = function(visible) {
                    if (visible === void 0) {
                        visible = true;
                    }
                    UI.OrientationController.resetZoom();
                    this.$element.toggleClass("is-visible", visible);
                    this.$mainStage.toggleClass("showMenu", visible);
                };
                MenuController.prototype.toggleMenuEvent = function(evt, preventDefault) {
                    if (preventDefault === void 0) {
                        preventDefault = true;
                    }
                    if (preventDefault) {
                        evt.preventDefault();
                    }
                    this.toggleMenu(!this.$element.hasClass("is-visible"));
                };
                MenuController.prototype.registerEvents = function() {
                    var _this = this;
                    $(".sliding-panel-content a").on("click touchend", function(e) {
                        return _this.toggleMenuEvent(e);
                    });
                    $(".sliding-panel-button, .sliding-panel-close,.sliding-panel-fade-screen").on("click touchend", function(e) {
                        _this.toggleMenuEvent(e);
                        if (!_this.$element.hasClass("is-visible")) {
                            UI.PointerLockController.requestPointerLock();
                        } else {
                            UI.PointerLockController.exitPointerLock();
                        }
                    });
                    $("#center-stage").on("contextmenu", function(e) {
                        if (spacedesk.Model.Options.currentOptions.kvmControl && e.ctrlKey) {
                            _this.toggleMenu(true);
                        } else {
                            _this.toggleMenu(true);
                        }
                        return false;
                    });
                };
                return MenuController;
            }());
            UI.MenuController = MenuController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var UI;
        (function(UI) {
            var LoaderController = (function() {
                function LoaderController() {}
                LoaderController.registerLoader = function() {
                    $(window).load(function() {
                        setTimeout(function() {
                            $("#loader").fadeOut();
                            $("#form-input").delay(350).fadeIn("slow");
                            $("#start footer").delay(350).fadeIn("slow");
                        }, 300);
                    });
                };
                return LoaderController;
            }());
            UI.LoaderController = LoaderController;
        })(UI = Controller.UI || (Controller.UI = {}));
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var spacedesk;
(function(spacedesk) {
    var Controller;
    (function(Controller) {
        var FullscreenController = Controller.UI.FullscreenController;
        var PointerLockController = Controller.UI.PointerLockController;
        var AppController = (function() {
            function AppController() {
                this.connection = new Controller.ConnectionController();
                this.help = new Controller.UI.HelpController();
                this.menu = new Controller.UI.MenuController();
                this.shouldReconnectToServer = false;
            }
            AppController.prototype.init = function() {
                var _this = this;
                if (!this.checkCompatibility()) {
                    return;
                }
                Controller.UI.LoaderController.registerLoader();
                this.settings = new Controller.UI.SettingsController(spacedesk.Model.Options.currentOptions);
                this.setRetinaImages();
                this.registerEvents();
                if (this.connection.init()) {
                    this.connection.StateChanged.on(function(newState) {
                        switch (newState) {
                            case spacedesk.Model.ConnectionState.NotConnected:
                                _this.onDisconnected();
                                break;
                            case spacedesk.Model.ConnectionState.Connected:
                                _this.onConnected();
                                break;
                            case spacedesk.Model.ConnectionState.Error:
                                FullscreenController.cancelFullscreen(false);
                                Controller.UI.AnimationController.showErrorState("<i class='material-icons md-48' ><!--warning-->&#xE002;</i> Could not connect.<br/> " + _this.connection.errorCode);
                                $("#connectionStatus").text("Not connected");
                                break;
                            default:
                                break;
                        }
                    });
                    if (spacedesk.Model.Options.currentOptions.server != null && spacedesk.Model.Options.currentOptions.server !== "") {
                        $("#server").val(spacedesk.Model.Options.currentOptions.server);
                        if (spacedesk.Model.Options.currentOptions.autoConnect || spacedesk.Model.Options.currentOptions.queryConnect) {
                            this.connect();
                        }
                    }
                }
            };
            AppController.prototype.addBroadcastServer = function(server) {
                Controller.BroadcastController.addBroadcastServer(server);
            };
            AppController.prototype.registerBroadcastLookup = function() {
                Controller.BroadcastController.registerBroadcastLookup();
            };
            AppController.prototype.unregisterBroadcastLookup = function() {
                Controller.BroadcastController.unregisterBroadcastLookup();
            };
            AppController.prototype.checkCompatibility = function() {
                return Modernizr.websockets && Modernizr.canvas;
            };
            AppController.prototype.registerEvents = function() {
                var _this = this;
                this.registerModalEvents();
                var app = this;
                window.onbeforeunload = function(e) {
                    app.disconnect();
                };
                $(document).on("click touchend", "#buttonLogin", function(e) {
                    e.preventDefault();
                    _this.connectUsingInput();
                });
                $("#server").keypress(function(e) {
                    if (e.which === 13) {
                        e.preventDefault();
                        _this.connectUsingInput();
                        return false;
                    }
                });
                $("#enterself").on("click touchend", function(e) {
                    $("#input").show();
                    $("#broadcast").hide();
                });
                $(document).on("click touchend", "#broadcastlist a", function(e) {
                    e.preventDefault();
                    var server = $(e.target).data("server");
                    if (typeof server !== "undefined") {
                        $("#server").val(server);
                        $("#input").show();
                        $("#broadcast").hide();
                        _this.connectUsingInput();
                    }
                });
                $("input:text").focus(function() {
                    $(this).select();
                    this.selectionStart = 0;
                    this.selectionEnd = this.value.length + 1;
                });
                $(".reconnect").on("click touchend", function(e) {
                    $("#modalOrientationChanged").prop("checked", false).change();
                    app.settings.hideSettingsReloadModal();
                    app.reconnectToServer();
                });
                $(".noreconnect").on("click touchend", function(e) {
                    app.settings.hideSettingsReloadModal();
                    $("#modalOrientationChanged").prop("checked", false).change();
                    if (app.connection.connectionState !== spacedesk.Model.ConnectionState.NotConnected) {
                        Controller.UI.AnimationController.showDesktop();
                    }
                });
                $(".closeConnection").on("click touchend", function(e) {
                    app.disconnect();
                    spacedesk.Model.Options.currentOptions.autoConnect = false;
                });
                $(".togglefullscreen").on("click touchend", function(e) {
                    FullscreenController.toggleFullscreen(true);
                });
                $(".togglekvm").on("click touchend", function(e) {
                    PointerLockController.requestPointerLock();
                });
                $(".reloadPage").on("click touchend", function(e) {
                    location.reload();
                });
                $(".showKeyboard").on("click touchend", function(e) {
                    $("#keyboard").focus();
                });
                $("#generateStaticLink").on("click touchend", function(e) {
                    $("#modalStaticLink").prop("checked", true).change();
                });
                $("#staticUrl").on("click touchend", function(e) {
                    $("#staticUrl").select();
                });
                $("#clearSettings").on("click touchend", function(e) {
                    spacedesk.Model.Options.currentOptions.clearOptions();
                    location.reload();
                });
                $("#center-stage").on("dblclick", function(e) {
                    if (FullscreenController.fullscreenEnabled && !PointerLockController.pointerLockEnabled) {
                        FullscreenController.toggleFullscreen(true);
                        window.getSelection().empty();
                    }
                });
                $(document).on("click touchend", ".showsettings", function(e) {
                    e.preventDefault();
                    if (app.connection.connectionState !== spacedesk.Model.ConnectionState.NotConnected) {
                        Controller.UI.AnimationController.showStart(false);
                        app.settings.showSettings(false);
                    } else {
                        app.settings.showSettings();
                    }
                });
                $(document).on("click touchend", ".applysettings", function(e) {
                    e.preventDefault();
                    var idle = app.connection.connectionState === spacedesk.Model.ConnectionState.NotConnected;
                    if (app.settings.ChangedSettings) {
                        spacedesk.Model.Options.currentOptions.saveOptions();
                        app.settings.hideSettings(idle, idle);
                        if (!idle) {
                            app.settings.showSettingsReloadModal();
                        }
                    } else {
                        if (!idle) {
                            Controller.UI.AnimationController.showDesktop();
                        }
                        setTimeout(function() {
                            app.settings.hideSettings(idle);
                        }, idle ? 0 : 1000);
                    }
                });
                $(document).on("click touchend", ".abortsettings", function(e) {
                    e.preventDefault();
                    var idle = app.connection.connectionState === spacedesk.Model.ConnectionState.NotConnected;
                    app.settings.restoreSettings();
                    if (!idle) {
                        Controller.UI.AnimationController.showDesktop();
                    }
                    setTimeout(function() {
                        app.settings.hideSettings(idle);
                    }, idle ? 0 : 1000);
                });
                Controller.UI.FullscreenController.registerEvents();
                Controller.UI.OrientationController.registerEvents();
                window.addEventListener("orientationchange", function() {
                    if (app.connection.connectionState !== spacedesk.Model.ConnectionState.NotConnected) {
                        $("#modalOrientationChanged").prop("checked", true).change();
                    }
                }, false);
                $("body").addClass(spacedesk.Utils.browser.os.group.replace(/\s+/g, "").toLowerCase());
                if (spacedesk.Utils.isDesktopDevice) {
                    $("body").addClass("desktop");
                }
                if (spacedesk.Utils.browser.browser.group === "Explorer") {
                    $("body").addClass("ie");
                    if (spacedesk.Utils.browser.browser.majorVersion < 9) {
                        $("body").addClass("notsupported");
                    }
                }
                if (spacedesk.Utils.browser.browser.name === "Firefox") {
                    $("body").addClass("notsupported");
                    $(".errorText").html("<p>Mozilla Firefox Browser is currently not supported, due performance limitations.</p>");
                }
                if (spacedesk.Utils.isEdge) {
                    $("body").addClass("notsupported");
                    $(".errorText").html("<p>Microsoft Edge Browser is temporarily not supported.</p>");
                }
            };
            AppController.prototype.registerModalEvents = function() {
                $(function() {
                    $(".modal-state").on("change", function() {
                        if ($(this).is(":checked")) {
                            $(this).parent().addClass("modal-open");
                        } else {
                            $(this).parent().removeClass("modal-open");
                        }
                    });
                    $(".modal-close").on("click", function() {
                        $(".modal-state:checked").prop("checked", false).change();
                    });
                    $(".modal-inner").on("click", function(e) {
                        e.stopPropagation();
                    });
                });
            };
            AppController.prototype.connectUsingInput = function() {
                var server = $("#server").val();
                if (server != null && server.length > 0) {
                    spacedesk.Model.Options.currentOptions.server = server;
                    this.connect();
                }
            };
            AppController.prototype.connect = function() {
                var _this = this;
                if (this.connection.connectionState === spacedesk.Model.ConnectionState.NotConnected) {
                    $("input").blur();
                    window.focus();
                    $("#buttonLogin").focus();
                    if (spacedesk.Model.Options.currentOptions.fullscreen) {
                        FullscreenController.requestFullscreen();
                    }
                    spacedesk.Controller.UI.AnimationController.showConnect();
                    spacedesk.Model.Options.currentOptions.saveOptions();
                    setTimeout(function() {
                        _this.connection.connect(spacedesk.Model.Options.currentOptions);
                    }, 500);
                }
            };
            AppController.prototype.disconnect = function() {
                document.title = "spacedesk HTML5 VIEWER";
                this.connection.disconnect();
                this.settings.hideSettings(false);
                spacedesk.Model.Options.currentOptions.saveOptions();
                FullscreenController.cancelFullscreen(false);
                Controller.UI.OrientationController.resetZoom();
            };
            AppController.prototype.reconnectToServer = function() {
                spacedesk.Model.Options.currentOptions.saveOptions();
                spacedesk.Model.Options.currentOptions.updateScreenResolution();
                if (this.connection.connectionState === spacedesk.Model.ConnectionState.Reconnecting) {
                    return;
                }
                Controller.UI.OrientationController.resetZoom();
                this.shouldReconnectToServer = true;
                this.connection.disconnect();
            };
            AppController.prototype.onConnected = function() {
                Controller.UI.AnimationController.showDesktop();
                $("#connectionStatus").text("Connected to " + spacedesk.Model.Options.currentOptions.server + " ");
                $("#staticUrl").text(window.location.href + "?" + spacedesk.Model.Options.QUERYKEY_CONNECT_TO + "=" + spacedesk.Model.Options.currentOptions.server);
                setTimeout(function() {
                    Controller.UI.AnimationController.resetConnect();
                }, 1200);
                $(".togglekvm").toggle(spacedesk.Model.Options.currentOptions.kvmControl && !Controller.ViewController.touchDevice);
                $(".showKeyboard").toggle(spacedesk.Model.Options.currentOptions.kvmControl && spacedesk.Model.Options.currentOptions.kvmKeyboard && Controller.ViewController.touchDevice);
                if (!PointerLockController.pointerLockEnabled) {
                    Controller.ViewController.Canvas.className = "noCursor";
                }
            };
            AppController.prototype.onDisconnected = function() {
                if (this.shouldReconnectToServer) {
                    this.connectUsingInput();
                    this.shouldReconnectToServer = false;
                    Controller.UI.AnimationController.showConnect();
                } else {
                    FullscreenController.cancelFullscreen(false);
                    Controller.UI.AnimationController.showStart(false);
                }
                $("#connectionStatus").text("Not connected");
            };
            AppController.prototype.setRetinaImages = function() {
                $("img").each(function() {
                    var $img = $(this);
                    var src = $img.data("src");
                    if (src != null && src.length > 0) {
                        if (spacedesk.Utils.isRetinaDisplay) {
                            var ext = "." + src.substr((Math.max(0, src.lastIndexOf(".")) || Infinity) + 1);
                            var filesource = src.split(ext)[0];
                            var retinaImage_1 = filesource + "@2x" + ext;
                            $.ajax({
                                url: retinaImage_1,
                                success: function() {
                                    if (!$img.hasClass("nowidth")) {
                                        $img.css("width", $img.get(0).clientWidth);
                                    }
                                    $img.attr("src", retinaImage_1);
                                }
                            });
                        } else {
                            $img.attr("src", src);
                        }
                    }
                });
            };
            return AppController;
        }());
        Controller.AppController = AppController;
    })(Controller = spacedesk.Controller || (spacedesk.Controller = {}));
})(spacedesk || (spacedesk = {}));
var Controller = spacedesk.Controller;
var app = new Controller.AppController();
app.init();