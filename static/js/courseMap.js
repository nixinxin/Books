/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!
function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	var c = [],
		d = c.slice,
		e = c.concat,
		f = c.push,
		g = c.indexOf,
		h = {},
		i = h.toString,
		j = h.hasOwnProperty,
		k = {},
		l = a.document,
		m = "2.1.4",
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
			return d.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		},
		pushStack: function(a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a, b) {
			return n.each(this, a, b)
		},
		map: function(a) {
			return this.pushStack(n.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(d.apply(this, arguments))
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
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
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
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isPlainObject: function(a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		},
		globalEval: function(a) {
			var b, c = eval;
			a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function(a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b, c) {
			var d, e = 0,
				f = a.length,
				g = s(a);
			if (c) {
				if (g) {
					for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
				} else for (e in a) if (d = b.apply(a[e], c), d === !1) break
			} else if (g) {
				for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
			} else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
			return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function(a, b, c) {
			return null == b ? -1 : g.call(b, a, c)
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
			var d, f = 0,
				g = a.length,
				h = s(a),
				i = [];
			if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
			else for (f in a) d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, e, f;
			return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
				return a.apply(b || this, e.concat(d.call(arguments)))
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0
		},
		now: Date.now,
		support: k
	}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
				v = a.document,
				w = 0,
				x = 0,
				y = ha(),
				z = ha(),
				A = ha(),
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
					for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
					return -1
				},
				K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				L = "[\\x20\\t\\r\\n\\f]",
				M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				N = M.replace("w", "w#"),
				O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
				P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
				Q = new RegExp(L + "+", "g"),
				R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
				S = new RegExp("^" + L + "*," + L + "*"),
				T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
				U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
				V = new RegExp(P),
				W = new RegExp("^" + N + "$"),
				X = {
					ID: new RegExp("^#(" + M + ")"),
					CLASS: new RegExp("^\\.(" + M + ")"),
					TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + O),
					PSEUDO: new RegExp("^" + P),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + K + ")$", "i"),
					needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
				},
				Y = /^(?:input|select|textarea|button)$/i,
				Z = /^h\d$/i,
				$ = /^[^{]+\{\s*\[native \w/,
				_ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				aa = /[+~]/,
				ba = /'|\\/g,
				ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
				da = function(a, b, c) {
					var d = "0x" + b - 65536;
					return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
				},
				ea = function() {
					m()
				};
			try {
				H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
			} catch (fa) {
				H = {
					apply: E.length ?
					function(a, b) {
						G.apply(a, I.call(b))
					} : function(a, b) {
						var c = a.length,
							d = 0;
						while (a[c++] = b[d++]);
						a.length = c - 1
					}
				}
			}
			function ga(a, b, d, e) {
				var f, h, j, k, l, o, r, s, w, x;
				if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
				if (!e && p) {
					if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
						if (9 === k) {
							if (h = b.getElementById(j), !h || !h.parentNode) return d;
							if (h.id === j) return d.push(h), d
						} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
					} else {
						if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
					}
					if (c.qsa && (!q || !q.test(a))) {
						if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
							o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
							while (l--) o[l] = s + ra(o[l]);
							w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
						}
						if (x) try {
							return H.apply(d, w.querySelectorAll(x)), d
						} catch (y) {} finally {
							r || b.removeAttribute("id")
						}
					}
				}
				return i(a.replace(R, "$1"), b, d, e)
			}
			function ha() {
				var a = [];

				function b(c, e) {
					return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
				}
				return b
			}
			function ia(a) {
				return a[u] = !0, a
			}
			function ja(a) {
				var b = n.createElement("div");
				try {
					return !!a(b)
				} catch (c) {
					return !1
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null
				}
			}
			function ka(a, b) {
				var c = a.split("|"),
					e = a.length;
				while (e--) d.attrHandle[c[e]] = b
			}
			function la(a, b) {
				var c = b && a,
					d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
				if (d) return d;
				if (c) while (c = c.nextSibling) if (c === b) return -1;
				return a ? 1 : -1
			}
			function ma(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a
				}
			}
			function na(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}
			function oa(a) {
				return ia(function(b) {
					return b = +b, ia(function(c, d) {
						var e, f = a([], c.length, b),
							g = f.length;
						while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}
			function pa(a) {
				return a && "undefined" != typeof a.getElementsByTagName && a
			}
			c = ga.support = {}, f = ga.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? "HTML" !== b.nodeName : !1
			}, m = ga.setDocument = function(a) {
				var b, e, g = a ? a.ownerDocument || a : v;
				return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
					return a.className = "i", !a.getAttribute("className")
				}), c.getElementsByTagName = ja(function(a) {
					return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
				}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
					return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
				}), c.getById ? (d.find.ID = function(a, b) {
					if ("undefined" != typeof b.getElementById && p) {
						var c = b.getElementById(a);
						return c && c.parentNode ? [c] : []
					}
				}, d.filter.ID = function(a) {
					var b = a.replace(ca, da);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (delete d.find.ID, d.filter.ID = function(a) {
					var b = a.replace(ca, da);
					return function(a) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), d.find.TAG = c.getElementsByTagName ?
				function(a, b) {
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
				}, d.find.CLASS = c.getElementsByClassName &&
				function(a, b) {
					return p ? b.getElementsByClassName(a) : void 0
				}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
					o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
				}), ja(function(a) {
					var b = g.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
				})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
					c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
				}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ?
				function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b) while (b = b.parentNode) if (b === a) return !0;
					return !1
				}, B = b ?
				function(a, b) {
					if (a === b) return l = !0, 0;
					var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
					return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
				} : function(a, b) {
					if (a === b) return l = !0, 0;
					var c, d = 0,
						e = a.parentNode,
						f = b.parentNode,
						h = [a],
						i = [b];
					if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
					if (e === f) return la(a, b);
					c = a;
					while (c = c.parentNode) h.unshift(c);
					c = b;
					while (c = c.parentNode) i.unshift(c);
					while (h[d] === i[d]) d++;
					return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
				}, g) : n
			}, ga.matches = function(a, b) {
				return ga(a, null, null, b)
			}, ga.matchesSelector = function(a, b) {
				if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
					var d = s.call(a, b);
					if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
				} catch (e) {}
				return ga(b, n, null, [a]).length > 0
			}, ga.contains = function(a, b) {
				return (a.ownerDocument || a) !== n && m(a), t(a, b)
			}, ga.attr = function(a, b) {
				(a.ownerDocument || a) !== n && m(a);
				var e = d.attrHandle[b.toLowerCase()],
					f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
				return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
			}, ga.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, ga.uniqueSort = function(a) {
				var b, d = [],
					e = 0,
					f = 0;
				if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
					while (b = a[f++]) b === a[f] && (e = d.push(f));
					while (e--) a.splice(d[e], 1)
				}
				return k = null, a
			}, e = ga.getText = function(a) {
				var b, c = "",
					d = 0,
					f = a.nodeType;
				if (f) {
					if (1 === f || 9 === f || 11 === f) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
					} else if (3 === f || 4 === f) return a.nodeValue
				} else while (b = a[d++]) c += e(b);
				return c
			}, d = ga.selectors = {
				cacheLength: 50,
				createPseudo: ia,
				match: X,
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
						return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
					},
					PSEUDO: function(a) {
						var b, c = !a[6] && a[2];
						return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
					}
				},
				filter: {
					TAG: function(a) {
						var b = a.replace(ca, da).toLowerCase();
						return "*" === a ?
						function() {
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
							var e = ga.attr(d, a);
							return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
							g = "last" !== a.slice(-4),
							h = "of-type" === b;
						return 1 === d && 0 === e ?
						function(a) {
							return !!a.parentNode
						} : function(b, c, i) {
							var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
								q = b.parentNode,
								r = h && b.nodeName.toLowerCase(),
								s = !i && !h;
							if (q) {
								if (f) {
									while (p) {
										l = b;
										while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
										o = p = "only" === a && !o && "nextSibling"
									}
									return !0
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
									while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];
										break
									}
								} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
								else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
								return m -= e, m === d || m % d === 0 && m / d >= 0
							}
						}
					},
					PSEUDO: function(a, b) {
						var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
						return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
							var d, f = e(a, b),
								g = f.length;
							while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
						}) : function(a) {
							return e(a, 0, c)
						}) : e
					}
				},
				pseudos: {
					not: ia(function(a) {
						var b = [],
							c = [],
							d = h(a.replace(R, "$1"));
						return d[u] ? ia(function(a, b, c, e) {
							var f, g = d(a, null, e, []),
								h = a.length;
							while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
						}) : function(a, e, f) {
							return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
						}
					}),
					has: ia(function(a) {
						return function(b) {
							return ga(a, b).length > 0
						}
					}),
					contains: ia(function(a) {
						return a = a.replace(ca, da), function(b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
					}),
					lang: ia(function(a) {
						return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function(b) {
							var c;
							do
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							while ((b = b.parentNode) && 1 === b.nodeType);
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
						return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
					},
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !! a.checked || "option" === b && !! a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					empty: function(a) {
						for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
						return !0
					},
					parent: function(a) {
						return !d.pseudos.empty(a)
					},
					header: function(a) {
						return Z.test(a.nodeName)
					},
					input: function(a) {
						return Y.test(a.nodeName)
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
					},
					first: oa(function() {
						return [0]
					}),
					last: oa(function(a, b) {
						return [b - 1]
					}),
					eq: oa(function(a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: oa(function(a, b) {
						for (var c = 0; b > c; c += 2) a.push(c);
						return a
					}),
					odd: oa(function(a, b) {
						for (var c = 1; b > c; c += 2) a.push(c);
						return a
					}),
					lt: oa(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: oa(function(a, b, c) {
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
			}) d.pseudos[b] = ma(b);
			for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = na(b);

			function qa() {}
			qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
				var c, e, f, g, h, i, j, k = z[a + " "];
				if (k) return b ? 0 : k.slice(0);
				h = a, i = [], j = d.preFilter;
				while (h) {
					(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
						value: c,
						type: e[0].replace(R, " ")
					}), h = h.slice(c.length));
					for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
						value: c,
						type: g,
						matches: e
					}), h = h.slice(c.length));
					if (!c) break
				}
				return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
			};

			function ra(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
				return d
			}
			function sa(a, b, c) {
				var d = b.dir,
					e = c && "parentNode" === d,
					f = x++;
				return b.first ?
				function(b, c, f) {
					while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
				} : function(b, c, g) {
					var h, i, j = [w, f];
					if (g) {
						while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
					} else while (b = b[d]) if (1 === b.nodeType || e) {
						if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
						if (i[d] = j, j[2] = a(b, c, g)) return !0
					}
				}
			}
			function ta(a) {
				return a.length > 1 ?
				function(b, c, d) {
					var e = a.length;
					while (e--) if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}
			function ua(a, b, c) {
				for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
				return c
			}
			function va(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
				return g
			}
			function wa(a, b, c, d, e, f) {
				return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
					var j, k, l, m = [],
						n = [],
						o = g.length,
						p = f || ua(b || "*", h.nodeType ? [h] : h, []),
						q = !a || !f && b ? p : va(p, m, a, h, i),
						r = c ? e || (f ? a : o || d) ? [] : g : q;
					if (c && c(q, r, h, i), d) {
						j = va(r, n), d(j, [], h, i), k = j.length;
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
					} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
				})
			}
			function xa(a) {
				for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
					return a === b
				}, h, !0), l = sa(function(a) {
					return J(b, a) > -1
				}, h, !0), m = [function(a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
						return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
					}
					m.push(c)
				}
				return ta(m)
			}
			function ya(a, b) {
				var c = b.length > 0,
					e = a.length > 0,
					f = function(f, g, h, i, k) {
						var l, m, o, p = 0,
							q = "0",
							r = f && [],
							s = [],
							t = j,
							u = f || e && d.find.TAG("*", k),
							v = w += null == t ? 1 : Math.random() || .1,
							x = u.length;
						for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
							if (e && l) {
								m = 0;
								while (o = a[m++]) if (o(l, g, h)) {
									i.push(l);
									break
								}
								k && (w = v)
							}
							c && ((l = !o && l) && p--, f && r.push(l))
						}
						if (p += q, c && q !== p) {
							m = 0;
							while (o = b[m++]) o(r, s, g, h);
							if (f) {
								if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
								s = va(s)
							}
							H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
						}
						return k && (w = v, j = t), r
					};
				return c ? ia(f) : f
			}
			return h = ga.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = A[a + " "];
				if (!f) {
					b || (b = g(a)), c = b.length;
					while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
					f = A(a, ya(e, d)), f.selector = a
				}
				return f
			}, i = ga.select = function(a, b, e, f) {
				var i, j, k, l, m, n = "function" == typeof a && a,
					o = !f && g(a = n.selector || a);
				if (e = e || [], 1 === o.length) {
					if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
						if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
						n && (b = b.parentNode), a = a.slice(j.shift().value.length)
					}
					i = X.needsContext.test(a) ? 0 : j.length;
					while (i--) {
						if (k = j[i], d.relative[l = k.type]) break;
						if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
							if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
							break
						}
					}
				}
				return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
			}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !! l, m(), c.sortDetached = ja(function(a) {
				return 1 & a.compareDocumentPosition(n.createElement("div"))
			}), ja(function(a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || ka("type|href|height|width", function(a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), c.attributes && ja(function(a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
			}) || ka("value", function(a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), ja(function(a) {
				return null == a.getAttribute("disabled")
			}) || ka(K, function(a, b, c) {
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}), ga
		}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = n.expr.match.needsContext,
		v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return n.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function(a) {
			return g.call(b, a) >= 0 !== c
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
				for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0
			}));
			for (b = 0; c > b; b++) n.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function(a) {
			return this.pushStack(x(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(x(this, a || [], !0))
		},
		is: function(a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
		}
	});
	var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		A = n.fn.init = function(a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	A.prototype = n.fn, y = n(l);
	var B = /^(?:parents|prev(?:Until|All))/,
		C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.extend({
		dir: function(a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
				if (e && n(a).is(c)) break;
				d.push(a)
			}
			return d
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), n.fn.extend({
		has: function(a) {
			var b = n(a, this),
				c = b.length;
			return this.filter(function() {
				for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0
			})
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? n.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return n.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return n.dir(a, "parentNode", c)
		},
		next: function(a) {
			return D(a, "nextSibling")
		},
		prev: function(a) {
			return D(a, "previousSibling")
		},
		nextAll: function(a) {
			return n.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return n.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return n.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return n.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return n.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return n.sibling(a.firstChild)
		},
		contents: function(a) {
			return a.contentDocument || n.merge([], a.childNodes)
		}
	}, function(a, b) {
		n.fn[a] = function(c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var E = /\S+/g,
		F = {};

	function G(a) {
		var b = F[a] = {};
		return n.each(a.match(E) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function(a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
		var b, c, d, e, f, g, h = [],
			i = !a.once && [],
			j = function(l) {
				for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
					b = !1;
					break
				}
				d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
			},
			k = {
				add: function() {
					if (h) {
						var c = h.length;
						!
						function g(b) {
							n.each(b, function(b, c) {
								var d = n.type(c);
								"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
							})
						}(arguments), d ? f = h.length : b && (e = c, j(b))
					}
					return this
				},
				remove: function() {
					return h && n.each(arguments, function(a, b) {
						var c;
						while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
					}), this
				},
				has: function(a) {
					return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
				},
				empty: function() {
					return h = [], f = 0, this
				},
				disable: function() {
					return h = i = b = void 0, this
				},
				disabled: function() {
					return !h
				},
				lock: function() {
					return i = void 0, b || k.disable(), this
				},
				locked: function() {
					return !i
				},
				fireWith: function(a, b) {
					return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
				},
				fire: function() {
					return k.fireWith(this, arguments), this
				},
				fired: function() {
					return !!c
				}
			};
		return k
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
									a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
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
				c = d.call(arguments),
				e = c.length,
				f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function(a, b, c) {
					return function(e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	n.fn.ready = function(a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
		}
	});

	function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
	}
	n.ready.promise = function(b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
	}, n.ready.promise();
	var J = n.access = function(a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === n.type(c)) {
				e = !0;
				for (h in c) n.access(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
				return j.call(n(a), c)
			})), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		};
	n.acceptData = function(a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	};

	function K() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = n.expando + K.uid++
	}
	K.uid = 1, K.accepts = n.acceptData, K.prototype = {
		key: function(a) {
			if (!K.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c) {
				c = K.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c, n.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function(a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
			else for (d in b) f[d] = b[d];
			return f
		},
		get: function(a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function(a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function(a, b) {
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if (void 0 === b) this.cache[f] = {};
			else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
				while (c--) delete g[d[c]]
			}
		},
		hasData: function(a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function(a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var L = new K,
		M = new K,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
			try {
				c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
			} catch (e) {}
			M.set(a, b, c)
		} else c = void 0;
		return c
	}
	n.extend({
		hasData: function(a) {
			return M.hasData(a) || L.hasData(a)
		},
		data: function(a, b, c) {
			return M.access(a, b, c)
		},
		removeData: function(a, b) {
			M.remove(a, b)
		},
		_data: function(a, b, c) {
			return L.access(a, b, c)
		},
		_removeData: function(a, b) {
			L.remove(a, b)
		}
	}), n.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;
					while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					L.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				M.set(this, a)
			}) : J(this, function(b) {
				var c, d = n.camelCase(a);
				if (f && void 0 === b) {
					if (c = M.get(f, a), void 0 !== c) return c;
					if (c = M.get(f, d), void 0 !== c) return c;
					if (c = P(f, d, void 0), void 0 !== c) return c
				} else this.each(function() {
					var c = M.get(this, d);
					M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function(a) {
			return this.each(function() {
				M.remove(this, a)
			})
		}
	}), n.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
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
			return L.get(a, c) || L.access(a, c, {
				empty: n.Callbacks("once memory").add(function() {
					L.remove(a, [b + "queue", c])
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
			while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		R = ["Top", "Right", "Bottom", "Left"],
		S = function(a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		},
		T = /^(?:checkbox|radio)$/i;
	!
	function() {
		var a = l.createDocumentFragment(),
			b = a.appendChild(l.createElement("div")),
			c = l.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue
	}();
	var U = "undefined";
	k.focusinBubbles = "onfocusin" in a;
	var V = /^key/,
		W = /^(?:mouse|pointer|contextmenu)|click/,
		X = /^(?:focusinfocus|focusoutblur)$/,
		Y = /^([^.]*)(?:\.(.+)|)$/;

	function Z() {
		return !0
	}
	function $() {
		return !1
	}
	function _() {
		try {
			return l.activeElement
		} catch (a) {}
	}
	n.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
			if (r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
					return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
				}), b = (b || "").match(E) || [""], j = b.length;
				while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
			if (r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
					l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
					while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
					g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
				} else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
			}
		},
		trigger: function(b, c, d, e) {
			var f, g, h, i, k, m, o, p = [d || l],
				q = j.call(b, "type") ? b.type : b,
				r = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
					h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
				}
				f = 0;
				while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
			}
		},
		dispatch: function(a) {
			a = n.event.fix(a);
			var b, c, e, f, g, h = [],
				i = d.call(arguments),
				j = (L.get(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
				for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
				d.length && g.push({
					elem: i,
					handlers: d
				})
			}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
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
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function(a) {
			if (a[n.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
			while (b--) c = d[b], a[c] = f[c];
			return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === _() && this.blur ? (this.blur(), !1) : void 0
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
		},
		simulate: function(a, b, c, d) {
			var e = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, n.Event = function(a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		isDefaultPrevented: $,
		isPropagationStopped: $,
		isImmediatePropagationStopped: $,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
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
	}), k.focusinBubbles || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
				n.event.simulate(b, a.target, n.event.fix(a), !0)
			};
		n.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = L.access(d, b);
				e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = L.access(d, b) - 1;
				e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
			}
		}
	}), n.fn.extend({
		on: function(a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
			else if (!d) return this;
			return 1 === e && (f = d, d = function(a) {
				return n().off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
				n.event.add(this, a, d, c, b)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ba = /<([\w:]+)/,
		ca = /<|&#?\w+;/,
		da = /<(?:script|style|link)/i,
		ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
		fa = /^$|\/(?:java|ecma)script/i,
		ga = /^true\/(.*)/,
		ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ia = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

	function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function ka(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}
	function la(a) {
		var b = ga.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}
	function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
	}
	function na(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
			}
			M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
		}
	}
	function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
	}
	function pa(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}
	n.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = n.contains(a.ownerDocument, a);
			if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
			if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
			else na(a, h);
			return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
		},
		buildFragment: function(a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
			else if (ca.test(e)) {
				f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
				while (j--) f = f.lastChild;
				n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			} else l.push(b.createTextNode(e));
			k.textContent = "", m = 0;
			while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
				j = 0;
				while (e = f[j++]) fa.test(e.type || "") && c.push(e)
			}
			return k
		},
		cleanData: function(a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
					L.cache[e] && delete L.cache[e]
				}
				delete M.cache[c[M.expando]]
			}
		}
	}), n.fn.extend({
		text: function(a) {
			return J(this, function(a) {
				return void 0 === a ? n.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return n.clone(this, a, b)
			})
		},
		html: function(a) {
			return J(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = arguments[0];
			return this.domManip(arguments, function(b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0,
				l = this.length,
				m = this,
				o = l - 1,
				p = a[0],
				q = n.isFunction(p);
			if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
				var d = m.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
				if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
			}
			return this
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		n.fn[a] = function(a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var qa, ra = {};

	function sa(b, c) {
		var d, e = n(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
		return e.detach(), f
	}
	function ta(a) {
		var b = l,
			c = ra[a];
		return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
	}
	var ua = /^margin/,
		va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
		wa = function(b) {
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
		};

	function xa(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}
	function ya(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}!
	function() {
		var b, c, d = l.documentElement,
			e = l.createElement("div"),
			f = l.createElement("div");
		if (f.style) {
			f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

			function g() {
				f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
				var g = a.getComputedStyle(f, null);
				b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
			}
			a.getComputedStyle && n.extend(k, {
				pixelPosition: function() {
					return g(), b
				},
				boxSizingReliable: function() {
					return null == c && g(), c
				},
				reliableMarginRight: function() {
					var b, c = f.appendChild(l.createElement("div"));
					return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
				}
			})
		}
	}(), n.swap = function(a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var za = /^(none|table(?!-c[ea]).+)/,
		Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
		Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
		Ca = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Da = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ea = ["Webkit", "O", "Moz", "ms"];

	function Fa(a, b) {
		if (b in a) return b;
		var c = b[0].toUpperCase() + b.slice(1),
			d = b,
			e = Ea.length;
		while (e--) if (b = Ea[e] + c, b in a) return b;
		return d
	}
	function Ga(a, b, c) {
		var d = Aa.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}
	function Ha(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		return g
	}
	function Ia(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = wa(a),
			g = "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	function Ja(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = xa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
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
				return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
		}
	}), n.each(["height", "width"], function(a, b) {
		n.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
					return Ia(a, b, d)
				}) : Ia(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && wa(a);
				return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
		return b ? n.swap(a, {
			display: "inline-block"
		}, xa, [a, "marginRight"]) : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		n.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, ua.test(a) || (n.cssHooks[a + b].set = Ga)
	}), n.fn.extend({
		css: function(a, b) {
			return J(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return Ja(this, !0)
		},
		hide: function() {
			return Ja(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				S(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e)
	}
	n.Tween = Ka, Ka.prototype = {
		constructor: Ka,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = Ka.propHooks[this.prop];
			return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = Ka.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
		}
	}, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, n.fx = Ka.prototype.init, n.fx.step = {};
	var La, Ma, Na = /^(?:toggle|show|hide)$/,
		Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
		Pa = /queueHooks$/,
		Qa = [Va],
		Ra = {
			"*": [function(a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = Oa.exec(b),
					f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
					g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, n.style(c.elem, a, g + f);
					while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};

	function Sa() {
		return setTimeout(function() {
			La = void 0
		}), La = n.now()
	}
	function Ta(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}
	function Ua(a, b, c) {
		for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
	}
	function Va(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = {},
			o = a.style,
			p = a.nodeType && S(a),
			q = L.get(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, l.always(function() {
			l.always(function() {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
		}));
		for (d in b) if (e = b[d], Na.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
				if ("show" !== e || !q || void 0 === q[d]) continue;
				p = !0
			}
			m[d] = q && q[d] || n.style(a, d)
		} else j = void 0;
		if (n.isEmptyObject(m))"inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
		else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
				n(a).hide()
			}), l.done(function() {
				var b;
				L.remove(a, "fxshow");
				for (b in m) n.style(a, b, m[b])
			});
			for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}
	function Wa(a, b) {
		var c, d, e, f, g;
		for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f) c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}
	function Xa(a, b, c) {
		var d, e, f = 0,
			g = Qa.length,
			h = n.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: La || Sa(),
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
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
		return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(Xa, {
		tweener: function(a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? Qa.unshift(a) : Qa.push(a)
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
			return this.filter(S).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = n.isEmptyObject(a),
				f = n.speed(b, c, d),
				g = function() {
					var b = Xa(this, n.extend({}, a), f);
					(e || L.get(this, "finish")) && b.stop(!0)
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
					g = L.get(this);
				if (e) g[e] && g[e].stop && d(g[e]);
				else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
				for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && n.dequeue(this, a)
			})
		},
		finish: function(a) {
			return a !== !1 && (a = a || "fx"), this.each(function() {
				var b, c = L.get(this),
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
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
		}
	}), n.each({
		slideDown: Ta("show"),
		slideUp: Ta("hide"),
		slideToggle: Ta("toggle"),
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
		for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		c.length || n.fx.stop(), La = void 0
	}, n.fx.timer = function(a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
	}, n.fx.interval = 13, n.fx.start = function() {
		Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
	}, n.fx.stop = function() {
		clearInterval(Ma), Ma = null
	}, n.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, n.fn.delay = function(a, b) {
		return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
			var d = setTimeout(b, a);
			c.stop = function() {
				clearTimeout(d)
			}
		})
	}, function() {
		var a = l.createElement("input"),
			b = l.createElement("select"),
			c = b.appendChild(l.createElement("option"));
		a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
	}();
	var Ya, Za, $a = n.expr.attrHandle;
	n.fn.extend({
		attr: function(a, b) {
			return J(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(E);
			if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), Za = {
		set: function(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = $a[b] || n.find.attr;
		$a[b] = function(a, b, d) {
			var e, f;
			return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
		}
	});
	var _a = /^(?:input|select|textarea|button)$/i;
	n.fn.extend({
		prop: function(a, b) {
			return J(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return this.each(function() {
				delete this[n.propFix[a] || a]
			})
		}
	}), n.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), k.optSelected || (n.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		n.propFix[this.toLowerCase()] = this
	});
	var ab = /[\t\r\n\f]/g;
	n.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).addClass(a.call(this, b, this.className))
			});
			if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
				f = 0;
				while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
				g = n.trim(d), c.className !== g && (c.className = g)
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).removeClass(a.call(this, b, this.className))
			});
			if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
				f = 0;
				while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
				g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ?
			function(c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function() {
				if ("string" === c) {
					var b, d = 0,
						e = n(this),
						f = a.match(E) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	});
	var bb = /\r/g;
	n.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a))
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
						if (b = n(c).val(), f) return b;
						g.push(b)
					}
					return g
				},
				set: function(a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), n.each(["radio", "checkbox"], function() {
		n.valHooks[this] = {
			set: function(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
			}
		}, k.checkOn || (n.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		n.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
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
		}
	});
	var cb = n.now(),
		db = /\?/;
	n.parseJSON = function(a) {
		return JSON.parse(a + "")
	}, n.parseXML = function(a) {
		var b, c;
		if (!a || "string" != typeof a) return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
	};
	var eb = /#.*$/,
		fb = /([?&])_=[^&]*/,
		gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		ib = /^(?:GET|HEAD)$/,
		jb = /^\/\//,
		kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		lb = {},
		mb = {},
		nb = "*/".concat("*"),
		ob = a.location.href,
		pb = kb.exec(ob.toLowerCase()) || [];

	function qb(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(E) || [];
			if (n.isFunction(c)) while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}
	function rb(a, b, c, d) {
		var e = {},
			f = a === mb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}
	function sb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && n.extend(!0, a, d), a
	}
	function tb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d) for (e in h) if (h[e] && h[e].test(d)) {
			i.unshift(e);
			break
		}
		if (i[0] in c) f = i[0];
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
	function ub(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
		else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0) if (g && a["throws"]) b = g(b);
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
			url: ob,
			type: "GET",
			isLocal: hb.test(pb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": nb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
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
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
		},
		ajaxPrefilter: qb(lb),
		ajaxTransport: qb(mb),
		ajax: function(a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
				l = k.context || k,
				m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
				o = n.Deferred(),
				p = n.Callbacks("once memory"),
				q = k.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === t) {
							if (!f) {
								f = {};
								while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
							}
							b = f[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === t ? e : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function(a) {
						return t || (k.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];
						else v.always(a[v.status]);
						return this
					},
					abort: function(a) {
						var b = a || u;
						return c && c.abort(b), x(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
			i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
			for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
			if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (j in {
				success: 1,
				error: 1,
				complete: 1
			}) v[j](k[j]);
			if (c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, c.send(r, x)
				} catch (w) {
					if (!(2 > t)) throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");

			function x(a, b, f, h) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
			}
			return v
		},
		getJSON: function(a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function(a, b) {
		n[b] = function(a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
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
			return this.each(n.isFunction(a) ?
			function(b) {
				n(this).wrapInner(a.call(this, b))
			} : function() {
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
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, n.expr.filters.visible = function(a) {
		return !n.expr.filters.hidden(a)
	};
	var vb = /%20/g,
		wb = /\[\]$/,
		xb = /\r?\n/g,
		yb = /^(?:submit|button|image|reset|file)$/i,
		zb = /^(?:input|select|textarea|keygen)/i;

	function Ab(a, b, c, d) {
		var e;
		if (n.isArray(b)) n.each(b, function(b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== n.type(b)) d(a, b);
		else for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
			e(this.name, this.value)
		});
		else for (c in a) Ab(c, a[c], b, e);
		return d.join("&").replace(vb, "+")
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
				return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
			}).map(function(a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(xb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(xb, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (a) {}
	};
	var Bb = 0,
		Cb = {},
		Db = {
			0: 200,
			1223: 204
		},
		Eb = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
		for (var a in Cb) Cb[a]()
	}), k.cors = !! Eb && "withCredentials" in Eb, k.ajax = Eb = !! Eb, n.ajaxTransport(function(a) {
		var b;
		return k.cors || Eb && !a.crossDomain ? {
			send: function(c, d) {
				var e, f = a.xhr(),
					g = ++Bb;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c) f.setRequestHeader(e, c[e]);
				b = function(a) {
					return function() {
						b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch (h) {
					if (b) throw h
				}
			},
			abort: function() {
				b && b()
			}
		} : void 0
	}), n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
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
				send: function(d, e) {
					b = n("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function(a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), l.head.appendChild(b[0])
				},
				abort: function() {
					c && c()
				}
			}
		}
	});
	var Fb = [],
		Gb = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Fb.pop() || n.expando + "_" + cb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function(a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || l;
		var d = v.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
	};
	var Hb = n.fn.load;
	n.fn.load = function(a, b, c) {
		if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e,
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).complete(c &&
		function(a, b) {
			g.each(c, f || [a.responseText, b, a])
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
	var Ib = a.document.documentElement;

	function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	n.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
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
			if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
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
				return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - n.css(c, "marginTop", !0),
					left: b.left - d.left - n.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || Ib;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
				return a || Ib
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, c) {
		var d = "pageYOffset" === c;
		n.fn[b] = function(e) {
			return J(this, function(b, e, f) {
				var g = Jb(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), n.each(["top", "left"], function(a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
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
				return J(this, function(b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.size = function() {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return n
	});
	var Kb = a.jQuery,
		Lb = a.$;
	return n.noConflict = function(b) {
		return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
	}, typeof b === U && (a.jQuery = a.$ = n), n
});

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +
function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b) if (void 0 !== a.style[c]) return {
			end: b[c]
		};
		return !1
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function() {
			c = !0
		});
		var e = function() {
				c || a(d).trigger(a.support.transition.end)
			};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function(b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function(b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a(f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function(b, d) {
			this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
		};
	c.VERSION = "3.3.4", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function(b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, c.prototype.toggle = function() {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		a && this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function(b, c) {
			this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
		};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function(a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function(a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function(a, b) {
		var c = this.getItemIndex(b),
			d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap) return b;
		var e = "prev" == a ? -1 : 1,
			f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function(a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, c.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, c.prototype.slide = function(b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if (f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = d, this
	};
	var e = function(c) {
			var d, e = a(this),
				f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
			if (f.hasClass("carousel")) {
				var g = a.extend({}, f.data(), e.data()),
					h = e.attr("data-slide-to");
				h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
			}
		};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}
	function c(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function(b, c) {
			this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
		};
	d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function() {
							this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
						};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function() {
						this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
					};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function() {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function(a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		b && 3 === b.which || (a(e).remove(), a(f).each(function() {
			var d = a(this),
				e = c(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
		}))
	}
	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	function d(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.4", g.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
			}
			return !1
		}
	}, g.prototype.keydown = function(b) {
		if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = c(d),
					g = e.hasClass("open");
				if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
				if (i.length) {
					var j = i.index(b.target);
					38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), +
function(a) {
	"use strict";

	function b(b, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function(b, c) {
			this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function(a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function(b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			d.$element.one("mouseup.dismiss.bs.modal", function(b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function() {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function() {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function(b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
				return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
			}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function() {
					d.removeBackdrop(), b && b()
				};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function() {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function() {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function() {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
			this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b)
		};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function(b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide()
	}, c.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.options.container ? a(this.options.container) : this.$element.parent(),
					p = this.getPosition(o);
				h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var q = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(q, h);
			var r = function() {
					var a = e.hoverState;
					e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
				};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
		}
	}, c.prototype.applyPlacement = function(b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
			using: function(a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function(b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
	}, c.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function() {
		return this.getTitle()
	}, c.prototype.getPosition = function(b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = d ? {
			top: 0,
			left: 0
		} : b.offset(),
			g = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			h = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, g, h, f)
	}, c.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function(a) {
		do a += ~~ (1e6 * Math.random());
		while (document.getElementById(a));
		return a
	}, c.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function() {
		this.enabled = !0
	}, c.prototype.disable = function() {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function(b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function() {
		var a = this;
		clearTimeout(this.timeout), this.hide(function() {
			a.$element.off("." + a.type).removeData("bs." + a.type)
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = d, this
	}
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
			this.init("popover", a, b)
		};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
		return a.fn.popover = d, this
	}
}(jQuery), +
function(a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}
	function c(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.4", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function() {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function() {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b) {
			this.element = a(b)
		};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function(b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !! d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
		return a.fn.tab = d, this
	};
	var e = function(c) {
			c.preventDefault(), b.call(a(this), "show")
		};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b, d) {
			this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
		};
	c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function(a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
		if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top,
			j = h ? g : b;
		return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
	}, c.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = a(document.body).height();
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
		return a.fn.affix = d, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery);
!
function(t, e) {
	"use strict";
	"undefined" != typeof module && module.exports ? module.exports = e(require("jquery"), require("bootstrap")) : "function" == typeof define && define.amd ? define("bootstrap-dialog", ["jquery", "bootstrap"], function(t) {
		return e(t)
	}) : t.BootstrapDialog = e(t.jQuery)
}(this, function(t) {
	"use strict";
	var e = t.fn.modal.Constructor,
		n = function(t, n) {
			e.call(this, t, n)
		};
	n.getModalVersion = function() {
		var e = null;
		return e = "undefined" == typeof t.fn.modal.Constructor.VERSION ? "v3.1" : /3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION) ? "v3.2" : /3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION) ? "v3.3" : "v3.3.4"
	}, n.ORIGINAL_BODY_PADDING = t("body").css("padding-right") || 0, n.METHODS_TO_OVERRIDE = {}, n.METHODS_TO_OVERRIDE["v3.1"] = {}, n.METHODS_TO_OVERRIDE["v3.2"] = {
		hide: function(e) {
			if (e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented()) {
				this.isShown = !1;
				var n = this.getGlobalOpenedDialogs();
				0 === n.length && this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
			}
		}
	}, n.METHODS_TO_OVERRIDE["v3.3"] = {
		setScrollbar: function() {
			var t = n.ORIGINAL_BODY_PADDING;
			this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
		},
		resetScrollbar: function() {
			var t = this.getGlobalOpenedDialogs();
			0 === t.length && this.$body.css("padding-right", n.ORIGINAL_BODY_PADDING)
		},
		hideModal: function() {
			this.$element.hide(), this.backdrop(t.proxy(function() {
				var t = this.getGlobalOpenedDialogs();
				0 === t.length && this.$body.removeClass("modal-open"), this.resetAdjustments(), this.resetScrollbar(), this.$element.trigger("hidden.bs.modal")
			}, this))
		}
	}, n.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, n.METHODS_TO_OVERRIDE["v3.3"]), n.prototype = {
		constructor: n,
		getGlobalOpenedDialogs: function() {
			var e = [];
			return t.each(o.dialogs, function(t, n) {
				n.isRealized() && n.isOpened() && e.push(n)
			}), e
		}
	}, n.prototype = t.extend(n.prototype, e.prototype, n.METHODS_TO_OVERRIDE[n.getModalVersion()]);
	var o = function(e) {
			this.defaultOptions = t.extend(!0, {
				id: o.newGuid(),
				buttons: [],
				data: {},
				onshow: null,
				onshown: null,
				onhide: null,
				onhidden: null
			}, o.defaultOptions), this.indexedButtons = {}, this.registeredButtonHotkeys = {}, this.draggableData = {
				isMouseDown: !1,
				mouseOffset: {}
			}, this.realized = !1, this.opened = !1, this.initOptions(e), this.holdThisInstance()
		};
	return o.BootstrapDialogModal = n, o.NAMESPACE = "bootstrap-dialog", o.TYPE_DEFAULT = "type-default", o.TYPE_INFO = "type-info", o.TYPE_PRIMARY = "type-primary", o.TYPE_SUCCESS = "type-success", o.TYPE_WARNING = "type-warning", o.TYPE_DANGER = "type-danger", o.DEFAULT_TEXTS = {}, o.DEFAULT_TEXTS[o.TYPE_DEFAULT] = "Information", o.DEFAULT_TEXTS[o.TYPE_INFO] = "Information", o.DEFAULT_TEXTS[o.TYPE_PRIMARY] = "Information", o.DEFAULT_TEXTS[o.TYPE_SUCCESS] = "Success", o.DEFAULT_TEXTS[o.TYPE_WARNING] = "Warning", o.DEFAULT_TEXTS[o.TYPE_DANGER] = "Danger", o.DEFAULT_TEXTS.OK = "OK", o.DEFAULT_TEXTS.CANCEL = "Cancel", o.DEFAULT_TEXTS.CONFIRM = "Confirmation", o.SIZE_NORMAL = "size-normal", o.SIZE_SMALL = "size-small", o.SIZE_WIDE = "size-wide", o.SIZE_LARGE = "size-large", o.BUTTON_SIZES = {}, o.BUTTON_SIZES[o.SIZE_NORMAL] = "", o.BUTTON_SIZES[o.SIZE_SMALL] = "", o.BUTTON_SIZES[o.SIZE_WIDE] = "", o.BUTTON_SIZES[o.SIZE_LARGE] = "btn-lg", o.ICON_SPINNER = "glyphicon glyphicon-asterisk", o.defaultOptions = {
		type: o.TYPE_PRIMARY,
		size: o.SIZE_NORMAL,
		cssClass: "",
		title: null,
		message: null,
		nl2br: !0,
		closable: !0,
		closeByBackdrop: !0,
		closeByKeyboard: !0,
		spinicon: o.ICON_SPINNER,
		autodestroy: !0,
		draggable: !1,
		animate: !0,
		description: "",
		tabindex: -1
	}, o.configDefaultOptions = function(e) {
		o.defaultOptions = t.extend(!0, o.defaultOptions, e)
	}, o.dialogs = {}, o.openAll = function() {
		t.each(o.dialogs, function(t, e) {
			e.open()
		})
	}, o.closeAll = function() {
		t.each(o.dialogs, function(t, e) {
			e.close()
		})
	}, o.moveFocus = function() {
		var e = null;
		t.each(o.dialogs, function(t, n) {
			e = n
		}), null !== e && e.isRealized() && e.getModal().focus()
	}, o.METHODS_TO_OVERRIDE = {}, o.METHODS_TO_OVERRIDE["v3.1"] = {
		handleModalBackdropEvent: function() {
			return this.getModal().on("click", {
				dialog: this
			}, function(t) {
				t.target === this && t.data.dialog.isClosable() && t.data.dialog.canCloseByBackdrop() && t.data.dialog.close()
			}), this
		},
		updateZIndex: function() {
			var e = 1040,
				n = 1050,
				i = 0;
			t.each(o.dialogs, function(t, e) {
				i++
			});
			var s = this.getModal(),
				a = s.data("bs.modal").$backdrop;
			return s.css("z-index", n + 20 * (i - 1)), a.css("z-index", e + 20 * (i - 1)), this
		},
		open: function() {
			return !this.isRealized() && this.realize(), this.getModal().modal("show"), this.updateZIndex(), this
		}
	}, o.METHODS_TO_OVERRIDE["v3.2"] = {
		handleModalBackdropEvent: o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,
		updateZIndex: o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,
		open: o.METHODS_TO_OVERRIDE["v3.1"].open
	}, o.METHODS_TO_OVERRIDE["v3.3"] = {}, o.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, o.METHODS_TO_OVERRIDE["v3.1"]), o.prototype = {
		constructor: o,
		initOptions: function(e) {
			return this.options = t.extend(!0, this.defaultOptions, e), this
		},
		holdThisInstance: function() {
			return o.dialogs[this.getId()] = this, this
		},
		initModalStuff: function() {
			return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()), this.getModal().append(this.getModalDialog()), this.getModalDialog().append(this.getModalContent()), this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()), this
		},
		createModal: function() {
			var e = t('<div class="modal" role="dialog" aria-hidden="true"></div>');
			return e.prop("id", this.getId()), e.attr("aria-labelledby", this.getId() + "_title"), e
		},
		getModal: function() {
			return this.$modal
		},
		setModal: function(t) {
			return this.$modal = t, this
		},
		createModalDialog: function() {
			return t('<div class="modal-dialog"></div>')
		},
		getModalDialog: function() {
			return this.$modalDialog
		},
		setModalDialog: function(t) {
			return this.$modalDialog = t, this
		},
		createModalContent: function() {
			return t('<div class="modal-content"></div>')
		},
		getModalContent: function() {
			return this.$modalContent
		},
		setModalContent: function(t) {
			return this.$modalContent = t, this
		},
		createModalHeader: function() {
			return t('<div class="modal-header"></div>')
		},
		getModalHeader: function() {
			return this.$modalHeader
		},
		setModalHeader: function(t) {
			return this.$modalHeader = t, this
		},
		createModalBody: function() {
			return t('<div class="modal-body"></div>')
		},
		getModalBody: function() {
			return this.$modalBody
		},
		setModalBody: function(t) {
			return this.$modalBody = t, this
		},
		createModalFooter: function() {
			return t('<div class="modal-footer"></div>')
		},
		getModalFooter: function() {
			return this.$modalFooter
		},
		setModalFooter: function(t) {
			return this.$modalFooter = t, this
		},
		createDynamicContent: function(t) {
			var e = null;
			return e = "function" == typeof t ? t.call(t, this) : t, "string" == typeof e && (e = this.formatStringContent(e)), e
		},
		formatStringContent: function(t) {
			return this.options.nl2br ? t.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />") : t
		},
		setData: function(t, e) {
			return this.options.data[t] = e, this
		},
		getData: function(t) {
			return this.options.data[t]
		},
		setId: function(t) {
			return this.options.id = t, this
		},
		getId: function() {
			return this.options.id
		},
		getType: function() {
			return this.options.type
		},
		setType: function(t) {
			return this.options.type = t, this.updateType(), this
		},
		updateType: function() {
			if (this.isRealized()) {
				var t = [o.TYPE_DEFAULT, o.TYPE_INFO, o.TYPE_PRIMARY, o.TYPE_SUCCESS, o.TYPE_WARNING, o.TYPE_DANGER];
				this.getModal().removeClass(t.join(" ")).addClass(this.getType())
			}
			return this
		},
		getSize: function() {
			return this.options.size
		},
		setSize: function(t) {
			return this.options.size = t, this.updateSize(), this
		},
		updateSize: function() {
			if (this.isRealized()) {
				var e = this;
				this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE), this.getModal().addClass(this.getSize()), this.getModalDialog().removeClass("modal-sm"), this.getSize() === o.SIZE_SMALL && this.getModalDialog().addClass("modal-sm"), this.getModalDialog().removeClass("modal-lg"), this.getSize() === o.SIZE_WIDE && this.getModalDialog().addClass("modal-lg"), t.each(this.options.buttons, function(n, o) {
					var i = e.getButton(o.id),
						s = ["btn-lg", "btn-sm", "btn-xs"],
						a = !1;
					if ("string" == typeof o.cssClass) {
						var d = o.cssClass.split(" ");
						t.each(d, function(e, n) {
							-1 !== t.inArray(n, s) && (a = !0)
						})
					}
					a || (i.removeClass(s.join(" ")), i.addClass(e.getButtonSize()))
				})
			}
			return this
		},
		getCssClass: function() {
			return this.options.cssClass
		},
		setCssClass: function(t) {
			return this.options.cssClass = t, this
		},
		getTitle: function() {
			return this.options.title
		},
		setTitle: function(t) {
			return this.options.title = t, this.updateTitle(), this
		},
		updateTitle: function() {
			if (this.isRealized()) {
				var t = null !== this.getTitle() ? this.createDynamicContent(this.getTitle()) : this.getDefaultText();
				this.getModalHeader().find("." + this.getNamespace("title")).html("").append(t).prop("id", this.getId() + "_title")
			}
			return this
		},
		getMessage: function() {
			return this.options.message
		},
		setMessage: function(t) {
			return this.options.message = t, this.updateMessage(), this
		},
		updateMessage: function() {
			if (this.isRealized()) {
				var t = this.createDynamicContent(this.getMessage());
				this.getModalBody().find("." + this.getNamespace("message")).html("").append(t)
			}
			return this
		},
		isClosable: function() {
			return this.options.closable
		},
		setClosable: function(t) {
			return this.options.closable = t, this.updateClosable(), this
		},
		setCloseByBackdrop: function(t) {
			return this.options.closeByBackdrop = t, this
		},
		canCloseByBackdrop: function() {
			return this.options.closeByBackdrop
		},
		setCloseByKeyboard: function(t) {
			return this.options.closeByKeyboard = t, this
		},
		canCloseByKeyboard: function() {
			return this.options.closeByKeyboard
		},
		isAnimate: function() {
			return this.options.animate
		},
		setAnimate: function(t) {
			return this.options.animate = t, this
		},
		updateAnimate: function() {
			return this.isRealized() && this.getModal().toggleClass("fade", this.isAnimate()), this
		},
		getSpinicon: function() {
			return this.options.spinicon
		},
		setSpinicon: function(t) {
			return this.options.spinicon = t, this
		},
		addButton: function(t) {
			return this.options.buttons.push(t), this
		},
		addButtons: function(e) {
			var n = this;
			return t.each(e, function(t, e) {
				n.addButton(e)
			}), this
		},
		getButtons: function() {
			return this.options.buttons
		},
		setButtons: function(t) {
			return this.options.buttons = t, this.updateButtons(), this
		},
		getButton: function(t) {
			return "undefined" != typeof this.indexedButtons[t] ? this.indexedButtons[t] : null
		},
		getButtonSize: function() {
			return "undefined" != typeof o.BUTTON_SIZES[this.getSize()] ? o.BUTTON_SIZES[this.getSize()] : ""
		},
		updateButtons: function() {
			return this.isRealized() && (0 === this.getButtons().length ? this.getModalFooter().hide() : this.getModalFooter().show().find("." + this.getNamespace("footer")).html("").append(this.createFooterButtons())), this
		},
		isAutodestroy: function() {
			return this.options.autodestroy
		},
		setAutodestroy: function(t) {
			this.options.autodestroy = t
		},
		getDescription: function() {
			return this.options.description
		},
		setDescription: function(t) {
			return this.options.description = t, this
		},
		setTabindex: function(t) {
			return this.options.tabindex = t, this
		},
		getTabindex: function() {
			return this.options.tabindex
		},
		updateTabindex: function() {
			return this.isRealized() && this.getModal().attr("tabindex", this.getTabindex()), this
		},
		getDefaultText: function() {
			return o.DEFAULT_TEXTS[this.getType()]
		},
		getNamespace: function(t) {
			return o.NAMESPACE + "-" + t
		},
		createHeaderContent: function() {
			var e = t("<div></div>");
			return e.addClass(this.getNamespace("header")), e.append(this.createTitleContent()), e.prepend(this.createCloseButton()), e
		},
		createTitleContent: function() {
			var e = t("<div></div>");
			return e.addClass(this.getNamespace("title")), e
		},
		createCloseButton: function() {
			var e = t("<div></div>");
			e.addClass(this.getNamespace("close-button"));
			var n = t('<button class="close">&times;</button>');
			return e.append(n), e.on("click", {
				dialog: this
			}, function(t) {
				t.data.dialog.close()
			}), e
		},
		createBodyContent: function() {
			var e = t("<div></div>");
			return e.addClass(this.getNamespace("body")), e.append(this.createMessageContent()), e
		},
		createMessageContent: function() {
			var e = t("<div></div>");
			return e.addClass(this.getNamespace("message")), e
		},
		createFooterContent: function() {
			var e = t("<div></div>");
			return e.addClass(this.getNamespace("footer")), e
		},
		createFooterButtons: function() {
			var e = this,
				n = t("<div></div>");
			return n.addClass(this.getNamespace("footer-buttons")), this.indexedButtons = {}, t.each(this.options.buttons, function(t, i) {
				i.id || (i.id = o.newGuid());
				var s = e.createButton(i);
				e.indexedButtons[i.id] = s, n.append(s)
			}), n
		},
		createButton: function(e) {
			var n = t('<button class="btn"></button>');
			return n.prop("id", e.id), n.data("button", e), "undefined" != typeof e.icon && "" !== t.trim(e.icon) && n.append(this.createButtonIcon(e.icon)), "undefined" != typeof e.label && n.append(e.label), n.addClass("undefined" != typeof e.cssClass && "" !== t.trim(e.cssClass) ? e.cssClass : "btn-default"), "undefined" != typeof e.hotkey && (this.registeredButtonHotkeys[e.hotkey] = n), n.on("click", {
				dialog: this,
				$button: n,
				button: e
			}, function(t) {
				var e = t.data.dialog,
					n = t.data.$button,
					o = n.data("button");
				"function" == typeof o.action && o.action.call(n, e, t), o.autospin && n.toggleSpin(!0)
			}), this.enhanceButton(n), n
		},
		enhanceButton: function(t) {
			return t.dialog = this, t.toggleEnable = function(t) {
				var e = this;
				return "undefined" != typeof t ? e.prop("disabled", !t).toggleClass("disabled", !t) : e.prop("disabled", !e.prop("disabled")), e
			}, t.enable = function() {
				var t = this;
				return t.toggleEnable(!0), t
			}, t.disable = function() {
				var t = this;
				return t.toggleEnable(!1), t
			}, t.toggleSpin = function(e) {
				var n = this,
					o = n.dialog,
					i = n.find("." + o.getNamespace("button-icon"));
				return "undefined" == typeof e && (e = !(t.find(".icon-spin").length > 0)), e ? (i.hide(), t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))) : (i.show(), t.find(".icon-spin").remove()), n
			}, t.spin = function() {
				var t = this;
				return t.toggleSpin(!0), t
			}, t.stopSpin = function() {
				var t = this;
				return t.toggleSpin(!1), t
			}, this
		},
		createButtonIcon: function(e) {
			var n = t("<span></span>");
			return n.addClass(this.getNamespace("button-icon")).addClass(e), n
		},
		enableButtons: function(e) {
			return t.each(this.indexedButtons, function(t, n) {
				n.toggleEnable(e)
			}), this
		},
		updateClosable: function() {
			return this.isRealized() && this.getModalHeader().find("." + this.getNamespace("close-button")).toggle(this.isClosable()), this
		},
		onShow: function(t) {
			return this.options.onshow = t, this
		},
		onShown: function(t) {
			return this.options.onshown = t, this
		},
		onHide: function(t) {
			return this.options.onhide = t, this
		},
		onHidden: function(t) {
			return this.options.onhidden = t, this
		},
		isRealized: function() {
			return this.realized
		},
		setRealized: function(t) {
			return this.realized = t, this
		},
		isOpened: function() {
			return this.opened
		},
		setOpened: function(t) {
			return this.opened = t, this
		},
		handleModalEvents: function() {
			return this.getModal().on("show.bs.modal", {
				dialog: this
			}, function(t) {
				var e = t.data.dialog;
				if (e.setOpened(!0), e.isModalEvent(t) && "function" == typeof e.options.onshow) {
					var n = e.options.onshow(e);
					return n === !1 && e.setOpened(!1), n
				}
			}), this.getModal().on("shown.bs.modal", {
				dialog: this
			}, function(t) {
				var e = t.data.dialog;
				e.isModalEvent(t) && "function" == typeof e.options.onshown && e.options.onshown(e)
			}), this.getModal().on("hide.bs.modal", {
				dialog: this
			}, function(t) {
				var e = t.data.dialog;
				if (e.setOpened(!1), e.isModalEvent(t) && "function" == typeof e.options.onhide) {
					var n = e.options.onhide(e);
					return n === !1 && e.setOpened(!0), n
				}
			}), this.getModal().on("hidden.bs.modal", {
				dialog: this
			}, function(e) {
				var n = e.data.dialog;
				n.isModalEvent(e) && "function" == typeof n.options.onhidden && n.options.onhidden(n), n.isAutodestroy() && (delete o.dialogs[n.getId()], t(this).remove()), o.moveFocus()
			}), this.handleModalBackdropEvent(), this.getModal().on("keyup", {
				dialog: this
			}, function(t) {
				27 === t.which && t.data.dialog.isClosable() && t.data.dialog.canCloseByKeyboard() && t.data.dialog.close()
			}), this.getModal().on("keyup", {
				dialog: this
			}, function(e) {
				var n = e.data.dialog;
				if ("undefined" != typeof n.registeredButtonHotkeys[e.which]) {
					var o = t(n.registeredButtonHotkeys[e.which]);
					!o.prop("disabled") && o.focus().trigger("click")
				}
			}), this
		},
		handleModalBackdropEvent: function() {
			return this.getModal().on("click", {
				dialog: this
			}, function(e) {
				t(e.target).hasClass("modal-backdrop") && e.data.dialog.isClosable() && e.data.dialog.canCloseByBackdrop() && e.data.dialog.close()
			}), this
		},
		isModalEvent: function(t) {
			return "undefined" != typeof t.namespace && "bs.modal" === t.namespace
		},
		makeModalDraggable: function() {
			return this.options.draggable && (this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown", {
				dialog: this
			}, function(t) {
				var e = t.data.dialog;
				e.draggableData.isMouseDown = !0;
				var n = e.getModalDialog().offset();
				e.draggableData.mouseOffset = {
					top: t.clientY - n.top,
					left: t.clientX - n.left
				}
			}), this.getModal().on("mouseup mouseleave", {
				dialog: this
			}, function(t) {
				t.data.dialog.draggableData.isMouseDown = !1
			}), t("body").on("mousemove", {
				dialog: this
			}, function(t) {
				var e = t.data.dialog;
				e.draggableData.isMouseDown && e.getModalDialog().offset({
					top: t.clientY - e.draggableData.mouseOffset.top,
					left: t.clientX - e.draggableData.mouseOffset.left
				})
			})), this
		},
		realize: function() {
			return this.initModalStuff(), this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()), this.updateSize(), this.getDescription() && this.getModal().attr("aria-describedby", this.getDescription()), this.getModalFooter().append(this.createFooterContent()), this.getModalHeader().append(this.createHeaderContent()), this.getModalBody().append(this.createBodyContent()), this.getModal().data("bs.modal", new n(this.getModal(), {
				backdrop: "static",
				keyboard: !1,
				show: !1
			})), this.makeModalDraggable(), this.handleModalEvents(), this.setRealized(!0), this.updateButtons(), this.updateType(), this.updateTitle(), this.updateMessage(), this.updateClosable(), this.updateAnimate(), this.updateSize(), this.updateTabindex(), this
		},
		open: function() {
			return !this.isRealized() && this.realize(), this.getModal().modal("show"), this
		},
		close: function() {
			return this.getModal().modal("hide"), this
		}
	}, o.prototype = t.extend(o.prototype, o.METHODS_TO_OVERRIDE[n.getModalVersion()]), o.newGuid = function() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
			var e = 16 * Math.random() | 0,
				n = "x" === t ? e : 3 & e | 8;
			return n.toString(16)
		})
	}, o.show = function(t) {
		return new o(t).open()
	}, o.alert = function() {
		var e = {},
			n = {
				type: o.TYPE_PRIMARY,
				title: null,
				message: null,
				closable: !1,
				draggable: !1,
				buttonLabel: o.DEFAULT_TEXTS.OK,
				callback: null
			};
		return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
			message: arguments[0],
			callback: "undefined" != typeof arguments[1] ? arguments[1] : null
		}), new o({
			type: e.type,
			title: e.title,
			message: e.message,
			closable: e.closable,
			draggable: e.draggable,
			data: {
				callback: e.callback
			},
			onhide: function(t) {
				!t.getData("btnClicked") && t.isClosable() && "function" == typeof t.getData("callback") && t.getData("callback")(!1)
			},
			buttons: [{
				label: e.buttonLabel,
				action: function(t) {
					t.setData("btnClicked", !0), "function" == typeof t.getData("callback") && t.getData("callback")(!0), t.close()
				}
			}]
		}).open()
	}, o.confirm = function() {
		var e = {},
			n = {
				type: o.TYPE_PRIMARY,
				title: null,
				message: null,
				closable: !1,
				draggable: !1,
				btnCancelLabel: o.DEFAULT_TEXTS.CANCEL,
				btnOKLabel: o.DEFAULT_TEXTS.OK,
				btnOKClass: null,
				callback: null
			};
		return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
			message: arguments[0],
			closable: !1,
			buttonLabel: o.DEFAULT_TEXTS.OK,
			callback: "undefined" != typeof arguments[1] ? arguments[1] : null
		}), null === e.btnOKClass && (e.btnOKClass = ["btn", e.type.split("-")[1]].join("-")), new o({
			type: e.type,
			title: e.title,
			message: e.message,
			closable: e.closable,
			draggable: e.draggable,
			data: {
				callback: e.callback
			},
			buttons: [{
				label: e.btnCancelLabel,
				action: function(t) {
					"function" == typeof t.getData("callback") && t.getData("callback")(!1), t.close()
				}
			}, {
				label: e.btnOKLabel,
				cssClass: e.btnOKClass,
				action: function(t) {
					"function" == typeof t.getData("callback") && t.getData("callback")(!0), t.close()
				}
			}]
		}).open()
	}, o.warning = function(t, e) {
		return new o({
			type: o.TYPE_WARNING,
			message: t
		}).open()
	}, o.danger = function(t, e) {
		return new o({
			type: o.TYPE_DANGER,
			message: t
		}).open()
	}, o.success = function(t, e) {
		return new o({
			type: o.TYPE_SUCCESS,
			message: t
		}).open()
	}, o
});
!
function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
	function b(b, d, e) {
		var d = {
			content: {
				message: "object" == typeof d ? d.message : d,
				title: d.title ? d.title : "",
				icon: d.icon ? d.icon : "",
				url: d.url ? d.url : "#",
				target: d.target ? d.target : "-"
			}
		};
		e = a.extend(!0, {}, d, e), this.settings = a.extend(!0, {}, c, e), this._defaults = c, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
			start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
			end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
		}, "number" == typeof this.settings.offset && (this.settings.offset = {
			x: this.settings.offset,
			y: this.settings.offset
		}), this.init()
	}
	var c = {
		element: "body",
		position: null,
		type: "info",
		allow_dismiss: !0,
		newest_on_top: !1,
		showProgressbar: !1,
		placement: {
			from: "top",
			align: "right"
		},
		offset: 20,
		spacing: 10,
		z_index: 1031,
		delay: 5e3,
		timer: 1e3,
		url_target: "_blank",
		mouse_over: null,
		animate: {
			enter: "animated fadeInDown",
			exit: "animated fadeOutUp"
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: "class",
		template: '<div data-notify="container" style="box-shadow: 0 0 12px #999999;" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
	};
	String.format = function() {
		for (var a = arguments[0], b = 1; b < arguments.length; b++) a = a.replace(RegExp("\\{" + (b - 1) + "\\}", "gm"), arguments[b]);
		return a
	}, a.extend(b.prototype, {
		init: function() {
			var a = this;
			this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
				$ele: this.$ele,
				update: function(b, c) {
					var d = {};
					"string" == typeof b ? d[b] = c : d = b;
					for (var b in d) switch (b) {
					case "type":
						this.$ele.removeClass("alert-" + a.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + a.settings.type), a.settings.type = d[b], this.$ele.addClass("alert-" + d[b]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + d[b]);
						break;
					case "icon":
						var e = this.$ele.find('[data-notify="icon"]');
						"class" == a.settings.icon_type.toLowerCase() ? e.removeClass(a.settings.content.icon).addClass(d[b]) : (e.is("img") || e.find("img"), e.attr("src", d[b]));
						break;
					case "progress":
						var f = a.settings.delay - a.settings.delay * (d[b] / 100);
						this.$ele.data("notify-delay", f), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", d[b]).css("width", d[b] + "%");
						break;
					case "url":
						this.$ele.find('[data-notify="url"]').attr("href", d[b]);
						break;
					case "target":
						this.$ele.find('[data-notify="url"]').attr("target", d[b]);
						break;
					default:
						this.$ele.find('[data-notify="' + b + '"]').html(d[b])
					}
					var g = this.$ele.outerHeight() + parseInt(a.settings.spacing) + parseInt(a.settings.offset.y);
					a.reposition(g)
				},
				close: function() {
					a.close()
				}
			}
		},
		buildNotify: function() {
			var b = this.settings.content;
			this.$ele = a(String.format(this.settings.template, this.settings.type, b.title, b.message, b.url, b.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
		},
		setIcon: function() {
			"class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
		},
		styleDismiss: function() {
			this.$ele.find('[data-notify="dismiss"]').css({
				position: "absolute",
				right: "10px",
				top: "5px",
				zIndex: this.settings.z_index + 2
			})
		},
		styleURL: function() {
			this.$ele.find('[data-notify="url"]').css({
				backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
				height: "100%",
				left: "0px",
				position: "absolute",
				top: "0px",
				width: "100%",
				zIndex: this.settings.z_index + 1
			})
		},
		placement: function() {
			var b = this,
				c = this.settings.offset.y,
				d = {
					display: "inline-block",
					margin: "0px auto",
					position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
					transition: "all .5s ease-in-out",
					zIndex: this.settings.z_index
				},
				e = !1,
				f = this.settings;
			switch (a('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
				return c = Math.max(c, parseInt(a(this).css(f.placement.from)) + parseInt(a(this).outerHeight()) + parseInt(f.spacing))
			}), 1 == this.settings.newest_on_top && (c = this.settings.offset.y), d[this.settings.placement.from] = c + "px", this.settings.placement.align) {
			case "left":
			case "right":
				d[this.settings.placement.align] = this.settings.offset.x + "px";
				break;
			case "center":
				d.left = 0, d.right = 0
			}
			this.$ele.css(d).addClass(this.settings.animate.enter), a.each(Array("webkit", "moz", "o", "ms", ""), function(a, c) {
				b.$ele[0].style[c + "AnimationIterationCount"] = 1
			}), a(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (c = parseInt(c) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(c)), a.isFunction(b.settings.onShow) && b.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function(a) {
				e = !0
			}).one(this.animations.end, function(c) {
				a.isFunction(b.settings.onShown) && b.settings.onShown.call(this)
			}), setTimeout(function() {
				e || a.isFunction(b.settings.onShown) && b.settings.onShown.call(this)
			}, 600)
		},
		bind: function() {
			var b = this;
			if (this.$ele.find('[data-notify="dismiss"]').on("click", function() {
				b.close()
			}), this.$ele.mouseover(function(b) {
				a(this).data("data-hover", "true")
			}).mouseout(function(b) {
				a(this).data("data-hover", "false")
			}), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
				b.$ele.data("notify-delay", b.settings.delay);
				var c = setInterval(function() {
					var a = parseInt(b.$ele.data("notify-delay")) - b.settings.timer;
					if ("false" === b.$ele.data("data-hover") && "pause" == b.settings.mouse_over || "pause" != b.settings.mouse_over) {
						var d = (b.settings.delay - a) / b.settings.delay * 100;
						b.$ele.data("notify-delay", a), b.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", d).css("width", d + "%")
					}
					a <= -b.settings.timer && (clearInterval(c), b.close())
				}, b.settings.timer)
			}
		},
		close: function() {
			var b = this,
				c = parseInt(this.$ele.css(this.settings.placement.from)),
				d = !1;
			this.$ele.data("closing", "true").addClass(this.settings.animate.exit), b.reposition(c), a.isFunction(b.settings.onClose) && b.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function(a) {
				d = !0
			}).one(this.animations.end, function(c) {
				a(this).remove(), a.isFunction(b.settings.onClosed) && b.settings.onClosed.call(this)
			}), setTimeout(function() {
				d || (b.$ele.remove(), b.settings.onClosed && b.settings.onClosed(b.$ele))
			}, 600)
		},
		reposition: function(b) {
			var c = this,
				d = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
				e = this.$ele.nextAll(d);
			1 == this.settings.newest_on_top && (e = this.$ele.prevAll(d)), e.each(function() {
				a(this).css(c.settings.placement.from, b), b = parseInt(b) + parseInt(c.settings.spacing) + a(this).outerHeight()
			})
		}
	}), a.notify = function(a, c) {
		var d = new b(this, a, c);
		return d.notify
	}, a.notifyDefaults = function(b) {
		return c = a.extend(!0, {}, c, b)
	}, a.notifyClose = function(b) {
		"undefined" == typeof b || "all" == b ? a("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : a('[data-notify-position="' + b + '"]').find('[data-notify="dismiss"]').trigger("click")
	}
});
!
function(e, o) {
	"use strict";
	"undefined" != typeof module && module.exports ? module.exports = o(require("jquery")) : window.HZ = o(e)
}(jQuery, function(e) {
	e.fn.serializeJSON = function() {
		var o = {};
		return e.map(e(this).serializeArray(), function(e, t) {
			o[e.name] = e.value
		}), o
	}, String.prototype.toJSON = function() {
		for (var e = {}, o = this.split("&"), t = 0; t < o.length; t++) {
			var n = o[t].split("=");
			2 == n.length && (e[n[0]] = n[1].trim())
		}
		return e
	};
	var o = {};
	return o.HOST = document.domain, o.API = location.origin + ":9000", o.LAB = "http://lab.hubwiz.com:8081", o.cookie = function(o, t, n) {
		if ("undefined" == typeof t) {
			var a = null;
			if (document.cookie && "" != document.cookie) for (var i = document.cookie.split(";"), s = 0; s < i.length; s++) {
				var r = e.trim(i[s]);
				if (r.substring(0, o.length + 1) == o + "=") {
					a = decodeURIComponent(r.substring(o.length + 1));
					break
				}
			}
			return a
		}
		n = n || {}, null === t && (t = "", n.expires = -1);
		var l = "";
		if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
			var d;
			"number" == typeof n.expires ? (d = new Date, d.setTime(d.getTime() + 60 * n.expires * 1e3)) : d = n.expires, l = "; expires=" + d.toUTCString()
		}
		var c = n.path ? "; path=" + n.path : "; path=/",
			u = n.domain ? "; domain=" + n.domain : "",
			p = n.secure ? "; secure" : "";
		document.cookie = [o, "=", encodeURIComponent(t), l, c, u, p].join("")
	}, o.toJson = function(e) {
		var o = {},
			t = e.split("&");
		for (var n in t) {
			var a = t[n].split("=");
			o[a[0]] = a[1].trim()
		}
		return o
	}, o.getParams = function() {
		for (var e = location.search.substring(1).split("&"), o = {}, t = 0; t < e.length; t++) {
			var n = e[t].split("=");
			2 == n.length && (o[n[0]] = decodeURI(n[1]))
		}
		return o
	}, o.ajax = function(o) {
		var t = {
			type: "GET",
			beforeSend: function(e) {
				e.setRequestHeader("ajax", "true")
			}
		};
		t = e.extend(t, o, !0), e.ajax(t)
	}, o.Comments = function() {
		var t = '<div id="messageBoard" class="modal fade">  <div class="modal-dialog">    <div class="modal-content">        <div class="modal-header">            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>            <h4 class="modal-title">                <span class="glyphicon glyphicon-question-sign"></span> 留言板            </h4>        </div>        <div class="modal-body">            <div class="form-group">            <label for="mContact">联系方式</label>            <input id="mContact" type="text" class="form-control">            </div>            <div class="form-group">            <label for="leaveMsg">留言内容</label>                <textarea class="form-control" id="mContent" rows="8"></textarea>            </div>            <button style="margin-top:10px;" id="sendLeaveMsg" type="button" class="btn btn-primary btn-block"><i class="glyphicon glyphicon-send"></i> 发送留言</button>        </div>    </div>  </div></div>';
		e("body").append(t);
		var n = e("#messageBoard"),
			a = e("#mContact"),
			i = e("#mContent"),
			s = o.cookie("email");
		s && a.val(s), n.modal({
			show: !0
		}), n.on("shown.bs.modal", function(e) {
			a.focus()
		}).on("hidden.bs.modal", function(e) {
			n.remove()
		}), a.keyup(function() {
			e(this).val().trim().length > 0 ? e(this).popover("hide") : e(this).popover("show")
		}), i.keyup(function() {
			e(this).val().trim().length > 0 ? e(this).popover("hide") : e(this).popover("show")
		}), e("#sendLeaveMsg").click(function() {
			var o = i.val().trim(),
				t = a.val().trim();
			0 == t.length ? a.popover({
				title: "提示信息",
				content: "请输入联系方式！",
				placement: "left",
				trigger: "manual"
			}).popover("show").focus() : 0 == o.length ? i.popover({
				title: "提示信息",
				content: "请输入留言内容！",
				placement: "left",
				trigger: "manual"
			}).popover("show").focus() : e.ajax({
				url: "http://xu.demo.com/feedback",
				dataType: "jsonp",
				jsonp: "callback",
				data: {
					contact: t,
					content: o
				},
				success: function(e, o) {
					console.log(arguments), n.modal("hide"), bootbox.alert("发送成功，谢谢支持！")
				},
				error: function(e, o) {
					console.log(arguments), n.modal("hide"), bootbox.alert("服务器繁忙，请稍后再试！")
				}
			})
		}), this.show = function() {
			n.modal("show")
		}, this.hide = function() {
			n.modal("hide")
		}
	}, o.getMessage = function() {
		var o = e("a:first", "#userInfo");
		e.getJSON("/api/message/unread", function(t) {
			t.count > 0 && o.append(e("<span>").css("font-size", "1.5em").addClass("fa fa-envelope pull-right")).append(e("<span>").addClass("navbar-unread").text(t.count))
		})
	}, o
}), $(function() {
	if (!/^\/(class)|(book)/.test(location.pathname)) {
		var e = $("<div>").attr("id", "fixedTools").addClass("hidden-xs hidden-sm").append($("<i>").addClass("glyphicon glyphicon-circle-arrow-up")).appendTo("body");
		$(window).scroll(function() {
			0 != $(this).scrollTop() ? e.fadeIn() : e.fadeOut()
		}), e.click(function() {
			return $("html, body").animate({
				scrollTop: 0
			}, 300), !1
		})
	}
	$('a[href="' + document.location.pathname + '"]', "#hb-nav>li").parent().addClass("active"), document.getElementById("userInfo") && ($("#userInfo").hover(function() {
		$("#userMenu").stop().slideDown("fast")
	}, function() {
		$("#userMenu").slideUp("fast")
	}), HZ.getMessage()), $("#leaveMsg").click(function() {
		new HZ.Comments
	})
});
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

!
function(a, b) {
	"function" == typeof define && define.amd ? define("bloodhound", ["jquery"], function(c) {
		return a.Bloodhound = b(c)
	}) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.Bloodhound = b(jQuery)
}(this, function(a) {
	var b = function() {
			"use strict";
			return {
				isMsie: function() {
					return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
				},
				isBlankString: function(a) {
					return !a || /^\s*$/.test(a)
				},
				escapeRegExChars: function(a) {
					return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
				},
				isString: function(a) {
					return "string" == typeof a
				},
				isNumber: function(a) {
					return "number" == typeof a
				},
				isArray: a.isArray,
				isFunction: a.isFunction,
				isObject: a.isPlainObject,
				isUndefined: function(a) {
					return "undefined" == typeof a
				},
				isElement: function(a) {
					return !(!a || 1 !== a.nodeType)
				},
				isJQuery: function(b) {
					return b instanceof a
				},
				toStr: function(a) {
					return b.isUndefined(a) || null === a ? "" : a + ""
				},
				bind: a.proxy,
				each: function(b, c) {
					function d(a, b) {
						return c(b, a)
					}
					a.each(b, d)
				},
				map: a.map,
				filter: a.grep,
				every: function(b, c) {
					var d = !0;
					return b ? (a.each(b, function(a, e) {
						return (d = c.call(null, e, a, b)) ? void 0 : !1
					}), !! d) : d
				},
				some: function(b, c) {
					var d = !1;
					return b ? (a.each(b, function(a, e) {
						return (d = c.call(null, e, a, b)) ? !1 : void 0
					}), !! d) : d
				},
				mixin: a.extend,
				identity: function(a) {
					return a
				},
				clone: function(b) {
					return a.extend(!0, {}, b)
				},
				getIdGenerator: function() {
					var a = 0;
					return function() {
						return a++
					}
				},
				templatify: function(b) {
					function c() {
						return String(b)
					}
					return a.isFunction(b) ? b : c
				},
				defer: function(a) {
					setTimeout(a, 0)
				},
				debounce: function(a, b, c) {
					var d, e;
					return function() {
						var f, g, h = this,
							i = arguments;
						return f = function() {
							d = null, c || (e = a.apply(h, i))
						}, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e
					}
				},
				throttle: function(a, b) {
					var c, d, e, f, g, h;
					return g = 0, h = function() {
						g = new Date, e = null, f = a.apply(c, d)
					}, function() {
						var i = new Date,
							j = b - (i - g);
						return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
					}
				},
				stringify: function(a) {
					return b.isString(a) ? a : JSON.stringify(a)
				},
				noop: function() {}
			}
		}(),
		c = "0.11.1",
		d = function() {
			"use strict";

			function a(a) {
				return a = b.toStr(a), a ? a.split(/\s+/) : []
			}
			function c(a) {
				return a = b.toStr(a), a ? a.split(/\W+/) : []
			}
			function d(a) {
				return function(c) {
					return c = b.isArray(c) ? c : [].slice.call(arguments, 0), function(d) {
						var e = [];
						return b.each(c, function(c) {
							e = e.concat(a(b.toStr(d[c])))
						}), e
					}
				}
			}
			return {
				nonword: c,
				whitespace: a,
				obj: {
					nonword: d(c),
					whitespace: d(a)
				}
			}
		}(),
		e = function() {
			"use strict";

			function c(c) {
				this.maxSize = b.isNumber(c) ? c : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = a.noop)
			}
			function d() {
				this.head = this.tail = null
			}
			function e(a, b) {
				this.key = a, this.val = b, this.prev = this.next = null
			}
			return b.mixin(c.prototype, {
				set: function(a, b) {
					var c, d = this.list.tail;
					this.size >= this.maxSize && (this.list.remove(d), delete this.hash[d.key], this.size--), (c = this.hash[a]) ? (c.val = b, this.list.moveToFront(c)) : (c = new e(a, b), this.list.add(c), this.hash[a] = c, this.size++)
				},
				get: function(a) {
					var b = this.hash[a];
					return b ? (this.list.moveToFront(b), b.val) : void 0
				},
				reset: function() {
					this.size = 0, this.hash = {}, this.list = new d
				}
			}), b.mixin(d.prototype, {
				add: function(a) {
					this.head && (a.next = this.head, this.head.prev = a), this.head = a, this.tail = this.tail || a
				},
				remove: function(a) {
					a.prev ? a.prev.next = a.next : this.head = a.next, a.next ? a.next.prev = a.prev : this.tail = a.prev
				},
				moveToFront: function(a) {
					this.remove(a), this.add(a)
				}
			}), c
		}(),
		f = function() {
			"use strict";

			function c(a, c) {
				this.prefix = ["__", a, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + b.escapeRegExChars(this.prefix)), this.ls = c || h, !this.ls && this._noop()
			}
			function d() {
				return (new Date).getTime()
			}
			function e(a) {
				return JSON.stringify(b.isUndefined(a) ? null : a)
			}
			function f(b) {
				return a.parseJSON(b)
			}
			function g(a) {
				var b, c, d = [],
					e = h.length;
				for (b = 0; e > b; b++)(c = h.key(b)).match(a) && d.push(c.replace(a, ""));
				return d
			}
			var h;
			try {
				h = window.localStorage, h.setItem("~~~", "!"), h.removeItem("~~~")
			} catch (i) {
				h = null
			}
			return b.mixin(c.prototype, {
				_prefix: function(a) {
					return this.prefix + a
				},
				_ttlKey: function(a) {
					return this._prefix(a) + this.ttlKey
				},
				_noop: function() {
					this.get = this.set = this.remove = this.clear = this.isExpired = b.noop
				},
				_safeSet: function(a, b) {
					try {
						this.ls.setItem(a, b)
					} catch (c) {
						"QuotaExceededError" === c.name && (this.clear(), this._noop())
					}
				},
				get: function(a) {
					return this.isExpired(a) && this.remove(a), f(this.ls.getItem(this._prefix(a)))
				},
				set: function(a, c, f) {
					return b.isNumber(f) ? this._safeSet(this._ttlKey(a), e(d() + f)) : this.ls.removeItem(this._ttlKey(a)), this._safeSet(this._prefix(a), e(c))
				},
				remove: function(a) {
					return this.ls.removeItem(this._ttlKey(a)), this.ls.removeItem(this._prefix(a)), this
				},
				clear: function() {
					var a, b = g(this.keyMatcher);
					for (a = b.length; a--;) this.remove(b[a]);
					return this
				},
				isExpired: function(a) {
					var c = f(this.ls.getItem(this._ttlKey(a)));
					return b.isNumber(c) && d() > c ? !0 : !1
				}
			}), c
		}(),
		g = function() {
			"use strict";

			function c(a) {
				a = a || {}, this.cancelled = !1, this.lastReq = null, this._send = a.transport, this._get = a.limiter ? a.limiter(this._get) : this._get, this._cache = a.cache === !1 ? new e(0) : h
			}
			var d = 0,
				f = {},
				g = 6,
				h = new e(10);
			return c.setMaxPendingRequests = function(a) {
				g = a
			}, c.resetCache = function() {
				h.reset()
			}, b.mixin(c.prototype, {
				_fingerprint: function(b) {
					return b = b || {}, b.url + b.type + a.param(b.data || {})
				},
				_get: function(a, b) {
					function c(a) {
						b(null, a), k._cache.set(i, a)
					}
					function e() {
						b(!0)
					}
					function h() {
						d--, delete f[i], k.onDeckRequestArgs && (k._get.apply(k, k.onDeckRequestArgs), k.onDeckRequestArgs = null)
					}
					var i, j, k = this;
					i = this._fingerprint(a), this.cancelled || i !== this.lastReq || ((j = f[i]) ? j.done(c).fail(e) : g > d ? (d++, f[i] = this._send(a).done(c).fail(e).always(h)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
				},
				get: function(c, d) {
					var e, f;
					d = d || a.noop, c = b.isString(c) ? {
						url: c
					} : c || {}, f = this._fingerprint(c), this.cancelled = !1, this.lastReq = f, (e = this._cache.get(f)) ? d(null, e) : this._get(c, d)
				},
				cancel: function() {
					this.cancelled = !0
				}
			}), c
		}(),
		h = window.SearchIndex = function() {
			"use strict";

			function c(c) {
				c = c || {}, c.datumTokenizer && c.queryTokenizer || a.error("datumTokenizer and queryTokenizer are both required"), this.identify = c.identify || b.stringify, this.datumTokenizer = c.datumTokenizer, this.queryTokenizer = c.queryTokenizer, this.reset()
			}
			function d(a) {
				return a = b.filter(a, function(a) {
					return !!a
				}), a = b.map(a, function(a) {
					return a.toLowerCase()
				})
			}
			function e() {
				var a = {};
				return a[i] = [], a[h] = {}, a
			}
			function f(a) {
				for (var b = {}, c = [], d = 0, e = a.length; e > d; d++) b[a[d]] || (b[a[d]] = !0, c.push(a[d]));
				return c
			}
			function g(a, b) {
				var c = 0,
					d = 0,
					e = [];
				a = a.sort(), b = b.sort();
				for (var f = a.length, g = b.length; f > c && g > d;) a[c] < b[d] ? c++ : a[c] > b[d] ? d++ : (e.push(a[c]), c++, d++);
				return e
			}
			var h = "c",
				i = "i";
			return b.mixin(c.prototype, {
				bootstrap: function(a) {
					this.datums = a.datums, this.trie = a.trie
				},
				add: function(a) {
					var c = this;
					a = b.isArray(a) ? a : [a], b.each(a, function(a) {
						var f, g;
						c.datums[f = c.identify(a)] = a, g = d(c.datumTokenizer(a)), b.each(g, function(a) {
							var b, d, g;
							for (b = c.trie, d = a.split(""); g = d.shift();) b = b[h][g] || (b[h][g] = e()), b[i].push(f)
						})
					})
				},
				get: function(a) {
					var c = this;
					return b.map(a, function(a) {
						return c.datums[a]
					})
				},
				search: function(a) {
					var c, e, j = this;
					return c = d(this.queryTokenizer(a)), b.each(c, function(a) {
						var b, c, d, f;
						if (e && 0 === e.length) return !1;
						for (b = j.trie, c = a.split(""); b && (d = c.shift());) b = b[h][d];
						return b && 0 === c.length ? (f = b[i].slice(0), void(e = e ? g(e, f) : f)) : (e = [], !1)
					}), e ? b.map(f(e), function(a) {
						return j.datums[a]
					}) : []
				},
				all: function() {
					var a = [];
					for (var b in this.datums) a.push(this.datums[b]);
					return a
				},
				reset: function() {
					this.datums = {}, this.trie = e()
				},
				serialize: function() {
					return {
						datums: this.datums,
						trie: this.trie
					}
				}
			}), c
		}(),
		i = function() {
			"use strict";

			function a(a) {
				this.url = a.url, this.ttl = a.ttl, this.cache = a.cache, this.prepare = a.prepare, this.transform = a.transform, this.transport = a.transport, this.thumbprint = a.thumbprint, this.storage = new f(a.cacheKey)
			}
			var c;
			return c = {
				data: "data",
				protocol: "protocol",
				thumbprint: "thumbprint"
			}, b.mixin(a.prototype, {
				_settings: function() {
					return {
						url: this.url,
						type: "GET",
						dataType: "json"
					}
				},
				store: function(a) {
					this.cache && (this.storage.set(c.data, a, this.ttl), this.storage.set(c.protocol, location.protocol, this.ttl), this.storage.set(c.thumbprint, this.thumbprint, this.ttl))
				},
				fromCache: function() {
					var a, b = {};
					return this.cache ? (b.data = this.storage.get(c.data), b.protocol = this.storage.get(c.protocol), b.thumbprint = this.storage.get(c.thumbprint), a = b.thumbprint !== this.thumbprint || b.protocol !== location.protocol, b.data && !a ? b.data : null) : null
				},
				fromNetwork: function(a) {
					function b() {
						a(!0)
					}
					function c(b) {
						a(null, e.transform(b))
					}
					var d, e = this;
					a && (d = this.prepare(this._settings()), this.transport(d).fail(b).done(c))
				},
				clear: function() {
					return this.storage.clear(), this
				}
			}), a
		}(),
		j = function() {
			"use strict";

			function a(a) {
				this.url = a.url, this.prepare = a.prepare, this.transform = a.transform, this.transport = new g({
					cache: a.cache,
					limiter: a.limiter,
					transport: a.transport
				})
			}
			return b.mixin(a.prototype, {
				_settings: function() {
					return {
						url: this.url,
						type: "GET",
						dataType: "json"
					}
				},
				get: function(a, b) {
					function c(a, c) {
						b(a ? [] : e.transform(c))
					}
					var d, e = this;
					if (b) return a = a || "", d = this.prepare(a, this._settings()), this.transport.get(d, c)
				},
				cancelLastRequest: function() {
					this.transport.cancel()
				}
			}), a
		}(),
		k = function() {
			"use strict";

			function d(d) {
				var e;
				return d ? (e = {
					url: null,
					ttl: 864e5,
					cache: !0,
					cacheKey: null,
					thumbprint: "",
					prepare: b.identity,
					transform: b.identity,
					transport: null
				}, d = b.isString(d) ? {
					url: d
				} : d, d = b.mixin(e, d), !d.url && a.error("prefetch requires url to be set"), d.transform = d.filter || d.transform, d.cacheKey = d.cacheKey || d.url, d.thumbprint = c + d.thumbprint, d.transport = d.transport ? h(d.transport) : a.ajax, d) : null
			}
			function e(c) {
				var d;
				if (c) return d = {
					url: null,
					cache: !0,
					prepare: null,
					replace: null,
					wildcard: null,
					limiter: null,
					rateLimitBy: "debounce",
					rateLimitWait: 300,
					transform: b.identity,
					transport: null
				}, c = b.isString(c) ? {
					url: c
				} : c, c = b.mixin(d, c), !c.url && a.error("remote requires url to be set"), c.transform = c.filter || c.transform, c.prepare = f(c), c.limiter = g(c), c.transport = c.transport ? h(c.transport) : a.ajax, delete c.replace, delete c.wildcard, delete c.rateLimitBy, delete c.rateLimitWait, c
			}
			function f(a) {
				function b(a, b) {
					return b.url = f(b.url, a), b
				}
				function c(a, b) {
					return b.url = b.url.replace(g, encodeURIComponent(a)), b
				}
				function d(a, b) {
					return b
				}
				var e, f, g;
				return e = a.prepare, f = a.replace, g = a.wildcard, e ? e : e = f ? b : a.wildcard ? c : d
			}
			function g(a) {
				function c(a) {
					return function(c) {
						return b.debounce(c, a)
					}
				}
				function d(a) {
					return function(c) {
						return b.throttle(c, a)
					}
				}
				var e, f, g;
				return e = a.limiter, f = a.rateLimitBy, g = a.rateLimitWait, e || (e = /^throttle$/i.test(f) ? d(g) : c(g)), e
			}
			function h(c) {
				return function(d) {
					function e(a) {
						b.defer(function() {
							g.resolve(a)
						})
					}
					function f(a) {
						b.defer(function() {
							g.reject(a)
						})
					}
					var g = a.Deferred();
					return c(d, e, f), g
				}
			}
			return function(c) {
				var f, g;
				return f = {
					initialize: !0,
					identify: b.stringify,
					datumTokenizer: null,
					queryTokenizer: null,
					sufficient: 5,
					sorter: null,
					local: [],
					prefetch: null,
					remote: null
				}, c = b.mixin(f, c || {}), !c.datumTokenizer && a.error("datumTokenizer is required"), !c.queryTokenizer && a.error("queryTokenizer is required"), g = c.sorter, c.sorter = g ?
				function(a) {
					return a.sort(g)
				} : b.identity, c.local = b.isFunction(c.local) ? c.local() : c.local, c.prefetch = d(c.prefetch), c.remote = e(c.remote), c
			}
		}(),
		l = function() {
			"use strict";

			function c(a) {
				a = k(a), this.sorter = a.sorter, this.identify = a.identify, this.sufficient = a.sufficient, this.local = a.local, this.remote = a.remote ? new j(a.remote) : null, this.prefetch = a.prefetch ? new i(a.prefetch) : null, this.index = new h({
					identify: this.identify,
					datumTokenizer: a.datumTokenizer,
					queryTokenizer: a.queryTokenizer
				}), a.initialize !== !1 && this.initialize()
			}
			var e;
			return e = window && window.Bloodhound, c.noConflict = function() {
				return window && (window.Bloodhound = e), c
			}, c.tokenizers = d, b.mixin(c.prototype, {
				__ttAdapter: function() {
					function a(a, b, d) {
						return c.search(a, b, d)
					}
					function b(a, b) {
						return c.search(a, b)
					}
					var c = this;
					return this.remote ? a : b
				},
				_loadPrefetch: function() {
					function b(a, b) {
						return a ? c.reject() : (e.add(b), e.prefetch.store(e.index.serialize()), void c.resolve())
					}
					var c, d, e = this;
					return c = a.Deferred(), this.prefetch ? (d = this.prefetch.fromCache()) ? (this.index.bootstrap(d), c.resolve()) : this.prefetch.fromNetwork(b) : c.resolve(), c.promise()
				},
				_initialize: function() {
					function a() {
						b.add(b.local)
					}
					var b = this;
					return this.clear(), (this.initPromise = this._loadPrefetch()).done(a), this.initPromise
				},
				initialize: function(a) {
					return !this.initPromise || a ? this._initialize() : this.initPromise
				},
				add: function(a) {
					return this.index.add(a), this
				},
				get: function(a) {
					return a = b.isArray(a) ? a : [].slice.call(arguments), this.index.get(a)
				},
				search: function(a, c, d) {
					function e(a) {
						var c = [];
						b.each(a, function(a) {
							!b.some(f, function(b) {
								return g.identify(a) === g.identify(b)
							}) && c.push(a)
						}), d && d(c)
					}
					var f, g = this;
					return f = this.sorter(this.index.search(a)), c(this.remote ? f.slice() : f), this.remote && f.length < this.sufficient ? this.remote.get(a, e) : this.remote && this.remote.cancelLastRequest(), this
				},
				all: function() {
					return this.index.all()
				},
				clear: function() {
					return this.index.reset(), this
				},
				clearPrefetchCache: function() {
					return this.prefetch && this.prefetch.clear(), this
				},
				clearRemoteCache: function() {
					return g.resetCache(), this
				},
				ttAdapter: function() {
					return this.__ttAdapter()
				}
			}), c
		}();
	return l
}), function(a, b) {
	"function" == typeof define && define.amd ? define("typeahead.js", ["jquery"], function(a) {
		return b(a)
	}) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
	var b = function() {
			"use strict";
			return {
				isMsie: function() {
					return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
				},
				isBlankString: function(a) {
					return !a || /^\s*$/.test(a)
				},
				escapeRegExChars: function(a) {
					return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
				},
				isString: function(a) {
					return "string" == typeof a
				},
				isNumber: function(a) {
					return "number" == typeof a
				},
				isArray: a.isArray,
				isFunction: a.isFunction,
				isObject: a.isPlainObject,
				isUndefined: function(a) {
					return "undefined" == typeof a
				},
				isElement: function(a) {
					return !(!a || 1 !== a.nodeType)
				},
				isJQuery: function(b) {
					return b instanceof a
				},
				toStr: function(a) {
					return b.isUndefined(a) || null === a ? "" : a + ""
				},
				bind: a.proxy,
				each: function(b, c) {
					function d(a, b) {
						return c(b, a)
					}
					a.each(b, d)
				},
				map: a.map,
				filter: a.grep,
				every: function(b, c) {
					var d = !0;
					return b ? (a.each(b, function(a, e) {
						return (d = c.call(null, e, a, b)) ? void 0 : !1
					}), !! d) : d
				},
				some: function(b, c) {
					var d = !1;
					return b ? (a.each(b, function(a, e) {
						return (d = c.call(null, e, a, b)) ? !1 : void 0
					}), !! d) : d
				},
				mixin: a.extend,
				identity: function(a) {
					return a
				},
				clone: function(b) {
					return a.extend(!0, {}, b)
				},
				getIdGenerator: function() {
					var a = 0;
					return function() {
						return a++
					}
				},
				templatify: function(b) {
					function c() {
						return String(b)
					}
					return a.isFunction(b) ? b : c
				},
				defer: function(a) {
					setTimeout(a, 0)
				},
				debounce: function(a, b, c) {
					var d, e;
					return function() {
						var f, g, h = this,
							i = arguments;
						return f = function() {
							d = null, c || (e = a.apply(h, i))
						}, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e
					}
				},
				throttle: function(a, b) {
					var c, d, e, f, g, h;
					return g = 0, h = function() {
						g = new Date, e = null, f = a.apply(c, d)
					}, function() {
						var i = new Date,
							j = b - (i - g);
						return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
					}
				},
				stringify: function(a) {
					return b.isString(a) ? a : JSON.stringify(a)
				},
				noop: function() {}
			}
		}(),
		c = function() {
			"use strict";

			function a(a) {
				var g, h;
				return h = b.mixin({}, f, a), g = {
					css: e(),
					classes: h,
					html: c(h),
					selectors: d(h)
				}, {
					css: g.css,
					html: g.html,
					classes: g.classes,
					selectors: g.selectors,
					mixin: function(a) {
						b.mixin(a, g)
					}
				}
			}
			function c(a) {
				return {
					wrapper: '<span class="' + a.wrapper + '"></span>',
					menu: '<div class="' + a.menu + '"></div>'
				}
			}
			function d(a) {
				var c = {};
				return b.each(a, function(a, b) {
					c[b] = "." + a
				}), c
			}
			function e() {
				var a = {
					wrapper: {
						position: "relative",
						display: "inline-block"
					},
					hint: {
						position: "absolute",
						top: "0",
						left: "0",
						borderColor: "transparent",
						boxShadow: "none",
						opacity: "1"
					},
					input: {
						position: "relative",
						verticalAlign: "top",
						backgroundColor: "transparent"
					},
					inputWithNoHint: {
						position: "relative",
						verticalAlign: "top"
					},
					menu: {
						position: "absolute",
						top: "100%",
						left: "0",
						zIndex: "100",
						display: "none"
					},
					ltr: {
						left: "0",
						right: "auto"
					},
					rtl: {
						left: "auto",
						right: " 0"
					}
				};
				return b.isMsie() && b.mixin(a.input, {
					backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
				}), a
			}
			var f = {
				wrapper: "twitter-typeahead",
				input: "tt-input",
				hint: "tt-hint",
				menu: "tt-menu",
				dataset: "tt-dataset",
				suggestion: "tt-suggestion",
				selectable: "tt-selectable",
				empty: "tt-empty",
				open: "tt-open",
				cursor: "tt-cursor",
				highlight: "tt-highlight"
			};
			return a
		}(),
		d = function() {
			"use strict";

			function c(b) {
				b && b.el || a.error("EventBus initialized without el"), this.$el = a(b.el)
			}
			var d, e;
			return d = "typeahead:", e = {
				render: "rendered",
				cursorchange: "cursorchanged",
				select: "selected",
				autocomplete: "autocompleted"
			}, b.mixin(c.prototype, {
				_trigger: function(b, c) {
					var e;
					return e = a.Event(d + b), (c = c || []).unshift(e), this.$el.trigger.apply(this.$el, c), e
				},
				before: function(a) {
					var b, c;
					return b = [].slice.call(arguments, 1), c = this._trigger("before" + a, b), c.isDefaultPrevented()
				},
				trigger: function(a) {
					var b;
					this._trigger(a, [].slice.call(arguments, 1)), (b = e[a]) && this._trigger(b, [].slice.call(arguments, 1))
				}
			}), c
		}(),
		e = function() {
			"use strict";

			function a(a, b, c, d) {
				var e;
				if (!c) return this;
				for (b = b.split(i), c = d ? h(c, d) : c, this._callbacks = this._callbacks || {}; e = b.shift();) this._callbacks[e] = this._callbacks[e] || {
					sync: [],
					async: []
				}, this._callbacks[e][a].push(c);
				return this
			}
			function b(b, c, d) {
				return a.call(this, "async", b, c, d)
			}
			function c(b, c, d) {
				return a.call(this, "sync", b, c, d)
			}
			function d(a) {
				var b;
				if (!this._callbacks) return this;
				for (a = a.split(i); b = a.shift();) delete this._callbacks[b];
				return this
			}
			function e(a) {
				var b, c, d, e, g;
				if (!this._callbacks) return this;
				for (a = a.split(i), d = [].slice.call(arguments, 1);
				(b = a.shift()) && (c = this._callbacks[b]);) e = f(c.sync, this, [b].concat(d)), g = f(c.async, this, [b].concat(d)), e() && j(g);
				return this
			}
			function f(a, b, c) {
				function d() {
					for (var d, e = 0, f = a.length; !d && f > e; e += 1) d = a[e].apply(b, c) === !1;
					return !d
				}
				return d
			}
			function g() {
				var a;
				return a = window.setImmediate ?
				function(a) {
					setImmediate(function() {
						a()
					})
				} : function(a) {
					setTimeout(function() {
						a()
					}, 0)
				}
			}
			function h(a, b) {
				return a.bind ? a.bind(b) : function() {
					a.apply(b, [].slice.call(arguments, 0))
				}
			}
			var i = /\s+/,
				j = g();
			return {
				onSync: c,
				onAsync: b,
				off: d,
				trigger: e
			}
		}(),
		f = function(a) {
			"use strict";

			function c(a, c, d) {
				for (var e, f = [], g = 0, h = a.length; h > g; g++) f.push(b.escapeRegExChars(a[g]));
				return e = d ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")", c ? new RegExp(e) : new RegExp(e, "i")
			}
			var d = {
				node: null,
				pattern: null,
				tagName: "strong",
				className: null,
				wordsOnly: !1,
				caseSensitive: !1
			};
			return function(e) {
				function f(b) {
					var c, d, f;
					return (c = h.exec(b.data)) && (f = a.createElement(e.tagName), e.className && (f.className = e.className), d = b.splitText(c.index), d.splitText(c[0].length), f.appendChild(d.cloneNode(!0)), b.parentNode.replaceChild(f, d)), !! c
				}
				function g(a, b) {
					for (var c, d = 3, e = 0; e < a.childNodes.length; e++) c = a.childNodes[e], c.nodeType === d ? e += b(c) ? 1 : 0 : g(c, b)
				}
				var h;
				e = b.mixin({}, d, e), e.node && e.pattern && (e.pattern = b.isArray(e.pattern) ? e.pattern : [e.pattern], h = c(e.pattern, e.caseSensitive, e.wordsOnly), g(e.node, f))
			}
		}(window.document),
		g = function() {
			"use strict";

			function c(c, e) {
				c = c || {}, c.input || a.error("input is missing"), e.mixin(this), this.$hint = a(c.hint), this.$input = a(c.input), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = d(this.$input), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = b.noop)
			}
			function d(b) {
				return a('<pre aria-hidden="true"></pre>').css({
					position: "absolute",
					visibility: "hidden",
					whiteSpace: "pre",
					fontFamily: b.css("font-family"),
					fontSize: b.css("font-size"),
					fontStyle: b.css("font-style"),
					fontVariant: b.css("font-variant"),
					fontWeight: b.css("font-weight"),
					wordSpacing: b.css("word-spacing"),
					letterSpacing: b.css("letter-spacing"),
					textIndent: b.css("text-indent"),
					textRendering: b.css("text-rendering"),
					textTransform: b.css("text-transform")
				}).insertAfter(b)
			}
			function f(a, b) {
				return c.normalizeQuery(a) === c.normalizeQuery(b)
			}
			function g(a) {
				return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey
			}
			var h;
			return h = {
				9: "tab",
				27: "esc",
				37: "left",
				39: "right",
				13: "enter",
				38: "up",
				40: "down"
			}, c.normalizeQuery = function(a) {
				return b.toStr(a).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
			}, b.mixin(c.prototype, e, {
				_onBlur: function() {
					this.resetInputValue(), this.trigger("blurred")
				},
				_onFocus: function() {
					this.queryWhenFocused = this.query, this.trigger("focused")
				},
				_onKeydown: function(a) {
					var b = h[a.which || a.keyCode];
					this._managePreventDefault(b, a), b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
				},
				_onInput: function() {
					this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
				},
				_managePreventDefault: function(a, b) {
					var c;
					switch (a) {
					case "up":
					case "down":
						c = !g(b);
						break;
					default:
						c = !1
					}
					c && b.preventDefault()
				},
				_shouldTrigger: function(a, b) {
					var c;
					switch (a) {
					case "tab":
						c = !g(b);
						break;
					default:
						c = !0
					}
					return c
				},
				_checkLanguageDirection: function() {
					var a = (this.$input.css("direction") || "ltr").toLowerCase();
					this.dir !== a && (this.dir = a, this.$hint.attr("dir", a), this.trigger("langDirChanged", a))
				},
				_setQuery: function(a, b) {
					var c, d;
					c = f(a, this.query), d = c ? this.query.length !== a.length : !1, this.query = a, b || c ? !b && d && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
				},
				bind: function() {
					var a, c, d, e, f = this;
					return a = b.bind(this._onBlur, this), c = b.bind(this._onFocus, this), d = b.bind(this._onKeydown, this), e = b.bind(this._onInput, this), this.$input.on("blur.tt", a).on("focus.tt", c).on("keydown.tt", d), !b.isMsie() || b.isMsie() > 9 ? this.$input.on("input.tt", e) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(a) {
						h[a.which || a.keyCode] || b.defer(b.bind(f._onInput, f, a))
					}), this
				},
				focus: function() {
					this.$input.focus()
				},
				blur: function() {
					this.$input.blur()
				},
				getLangDir: function() {
					return this.dir
				},
				getQuery: function() {
					return this.query || ""
				},
				setQuery: function(a, b) {
					this.setInputValue(a), this._setQuery(a, b)
				},
				hasQueryChangedSinceLastFocus: function() {
					return this.query !== this.queryWhenFocused
				},
				getInputValue: function() {
					return this.$input.val()
				},
				setInputValue: function(a) {
					this.$input.val(a), this.clearHintIfInvalid(), this._checkLanguageDirection()
				},
				resetInputValue: function() {
					this.setInputValue(this.query)
				},
				getHint: function() {
					return this.$hint.val()
				},
				setHint: function(a) {
					this.$hint.val(a)
				},
				clearHint: function() {
					this.setHint("")
				},
				clearHintIfInvalid: function() {
					var a, b, c, d;
					a = this.getInputValue(), b = this.getHint(), c = a !== b && 0 === b.indexOf(a), d = "" !== a && c && !this.hasOverflow(), !d && this.clearHint()
				},
				hasFocus: function() {
					return this.$input.is(":focus")
				},
				hasOverflow: function() {
					var a = this.$input.width() - 2;
					return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= a
				},
				isCursorAtEnd: function() {
					var a, c, d;
					return a = this.$input.val().length, c = this.$input[0].selectionStart, b.isNumber(c) ? c === a : document.selection ? (d = document.selection.createRange(), d.moveStart("character", -a), a === d.text.length) : !0
				},
				destroy: function() {
					this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = a("<div>")
				}
			}), c
		}(),
		h = function() {
			"use strict";

			function c(c, e) {
				c = c || {}, c.templates = c.templates || {}, c.templates.notFound = c.templates.notFound || c.templates.empty, c.source || a.error("missing source"), c.node || a.error("missing node"), c.name && !h(c.name) && a.error("invalid dataset name: " + c.name), e.mixin(this), this.highlight = !! c.highlight, this.name = c.name || j(), this.limit = c.limit || 5, this.displayFn = d(c.display || c.displayKey), this.templates = g(c.templates, this.displayFn), this.source = c.source.__ttAdapter ? c.source.__ttAdapter() : c.source, this.async = b.isUndefined(c.async) ? this.source.length > 2 : !! c.async, this._resetLastSuggestion(), this.$el = a(c.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
			}
			function d(a) {
				function c(b) {
					return b[a]
				}
				return a = a || b.stringify, b.isFunction(a) ? a : c
			}
			function g(c, d) {
				function e(b) {
					return a("<div>").text(d(b))
				}
				return {
					notFound: c.notFound && b.templatify(c.notFound),
					pending: c.pending && b.templatify(c.pending),
					header: c.header && b.templatify(c.header),
					footer: c.footer && b.templatify(c.footer),
					suggestion: c.suggestion || e
				}
			}
			function h(a) {
				return /^[_a-zA-Z0-9-]+$/.test(a)
			}
			var i, j;
			return i = {
				val: "tt-selectable-display",
				obj: "tt-selectable-object"
			}, j = b.getIdGenerator(), c.extractData = function(b) {
				var c = a(b);
				return c.data(i.obj) ? {
					val: c.data(i.val) || "",
					obj: c.data(i.obj) || null
				} : null
			}, b.mixin(c.prototype, e, {
				_overwrite: function(a, b) {
					b = b || [], b.length ? this._renderSuggestions(a, b) : this.async && this.templates.pending ? this._renderPending(a) : !this.async && this.templates.notFound ? this._renderNotFound(a) : this._empty(), this.trigger("rendered", this.name, b, !1)
				},
				_append: function(a, b) {
					b = b || [], b.length && this.$lastSuggestion.length ? this._appendSuggestions(a, b) : b.length ? this._renderSuggestions(a, b) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(a), this.trigger("rendered", this.name, b, !0)
				},
				_renderSuggestions: function(a, b) {
					var c;
					c = this._getSuggestionsFragment(a, b), this.$lastSuggestion = c.children().last(), this.$el.html(c).prepend(this._getHeader(a, b)).append(this._getFooter(a, b))
				},
				_appendSuggestions: function(a, b) {
					var c, d;
					c = this._getSuggestionsFragment(a, b), d = c.children().last(), this.$lastSuggestion.after(c), this.$lastSuggestion = d
				},
				_renderPending: function(a) {
					var b = this.templates.pending;
					this._resetLastSuggestion(), b && this.$el.html(b({
						query: a,
						dataset: this.name
					}))
				},
				_renderNotFound: function(a) {
					var b = this.templates.notFound;
					this._resetLastSuggestion(), b && this.$el.html(b({
						query: a,
						dataset: this.name
					}))
				},
				_empty: function() {
					this.$el.empty(), this._resetLastSuggestion()
				},
				_getSuggestionsFragment: function(c, d) {
					var e, g = this;
					return e = document.createDocumentFragment(), b.each(d, function(b) {
						var d, f;
						f = g._injectQuery(c, b), d = a(g.templates.suggestion(f)).data(i.obj, b).data(i.val, g.displayFn(b)).addClass(g.classes.suggestion + " " + g.classes.selectable), e.appendChild(d[0])
					}), this.highlight && f({
						className: this.classes.highlight,
						node: e,
						pattern: c
					}), a(e)
				},
				_getFooter: function(a, b) {
					return this.templates.footer ? this.templates.footer({
						query: a,
						suggestions: b,
						dataset: this.name
					}) : null
				},
				_getHeader: function(a, b) {
					return this.templates.header ? this.templates.header({
						query: a,
						suggestions: b,
						dataset: this.name
					}) : null
				},
				_resetLastSuggestion: function() {
					this.$lastSuggestion = a()
				},
				_injectQuery: function(a, c) {
					return b.isObject(c) ? b.mixin({
						_query: a
					}, c) : c
				},
				update: function(b) {
					function c(a) {
						g || (g = !0, a = (a || []).slice(0, e.limit), h = a.length, e._overwrite(b, a), h < e.limit && e.async && e.trigger("asyncRequested", b))
					}
					function d(c) {
						c = c || [], !f && h < e.limit && (e.cancel = a.noop, h += c.length, e._append(b, c.slice(0, e.limit - h)), e.async && e.trigger("asyncReceived", b))
					}
					var e = this,
						f = !1,
						g = !1,
						h = 0;
					this.cancel(), this.cancel = function() {
						f = !0, e.cancel = a.noop, e.async && e.trigger("asyncCanceled", b)
					}, this.source(b, c, d), !g && c([])
				},
				cancel: a.noop,
				clear: function() {
					this._empty(), this.cancel(), this.trigger("cleared")
				},
				isEmpty: function() {
					return this.$el.is(":empty")
				},
				destroy: function() {
					this.$el = a("<div>")
				}
			}), c
		}(),
		i = function() {
			"use strict";

			function c(c, d) {
				function e(b) {
					var c = f.$node.find(b.node).first();
					return b.node = c.length ? c : a("<div>").appendTo(f.$node), new h(b, d)
				}
				var f = this;
				c = c || {}, c.node || a.error("node is required"), d.mixin(this), this.$node = a(c.node), this.query = null, this.datasets = b.map(c.datasets, e)
			}
			return b.mixin(c.prototype, e, {
				_onSelectableClick: function(b) {
					this.trigger("selectableClicked", a(b.currentTarget))
				},
				_onRendered: function(a, b, c, d) {
					this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", b, c, d)
				},
				_onCleared: function() {
					this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
				},
				_propagate: function() {
					this.trigger.apply(this, arguments)
				},
				_allDatasetsEmpty: function() {
					function a(a) {
						return a.isEmpty()
					}
					return b.every(this.datasets, a)
				},
				_getSelectables: function() {
					return this.$node.find(this.selectors.selectable)
				},
				_removeCursor: function() {
					var a = this.getActiveSelectable();
					a && a.removeClass(this.classes.cursor)
				},
				_ensureVisible: function(a) {
					var b, c, d, e;
					b = a.position().top, c = b + a.outerHeight(!0), d = this.$node.scrollTop(), e = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), 0 > b ? this.$node.scrollTop(d + b) : c > e && this.$node.scrollTop(d + (c - e))
				},
				bind: function() {
					var a, c = this;
					return a = b.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, a), b.each(this.datasets, function(a) {
						a.onSync("asyncRequested", c._propagate, c).onSync("asyncCanceled", c._propagate, c).onSync("asyncReceived", c._propagate, c).onSync("rendered", c._onRendered, c).onSync("cleared", c._onCleared, c)
					}), this
				},
				isOpen: function() {
					return this.$node.hasClass(this.classes.open)
				},
				open: function() {
					this.$node.addClass(this.classes.open)
				},
				close: function() {
					this.$node.removeClass(this.classes.open), this._removeCursor()
				},
				setLanguageDirection: function(a) {
					this.$node.attr("dir", a)
				},
				selectableRelativeToCursor: function(a) {
					var b, c, d, e;
					return c = this.getActiveSelectable(), b = this._getSelectables(), d = c ? b.index(c) : -1, e = d + a, e = (e + 1) % (b.length + 1) - 1, e = -1 > e ? b.length - 1 : e, -1 === e ? null : b.eq(e)
				},
				setCursor: function(a) {
					this._removeCursor(), (a = a && a.first()) && (a.addClass(this.classes.cursor), this._ensureVisible(a))
				},
				getSelectableData: function(a) {
					return a && a.length ? h.extractData(a) : null
				},
				getActiveSelectable: function() {
					var a = this._getSelectables().filter(this.selectors.cursor).first();
					return a.length ? a : null
				},
				getTopSelectable: function() {
					var a = this._getSelectables().first();
					return a.length ? a : null
				},
				update: function(a) {
					function c(b) {
						b.update(a)
					}
					var d = a !== this.query;
					return d && (this.query = a, b.each(this.datasets, c)), d
				},
				empty: function() {
					function a(a) {
						a.clear()
					}
					b.each(this.datasets, a), this.query = null, this.$node.addClass(this.classes.empty)
				},
				destroy: function() {
					function c(a) {
						a.destroy()
					}
					this.$node.off(".tt"), this.$node = a("<div>"), b.each(this.datasets, c)
				}
			}), c
		}(),
		j = function() {
			"use strict";

			function a() {
				i.apply(this, [].slice.call(arguments, 0))
			}
			var c = i.prototype;
			return b.mixin(a.prototype, i.prototype, {
				open: function() {
					return !this._allDatasetsEmpty() && this._show(), c.open.apply(this, [].slice.call(arguments, 0))
				},
				close: function() {
					return this._hide(), c.close.apply(this, [].slice.call(arguments, 0))
				},
				_onRendered: function() {
					return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), c._onRendered.apply(this, [].slice.call(arguments, 0))
				},
				_onCleared: function() {
					return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), c._onCleared.apply(this, [].slice.call(arguments, 0))
				},
				setLanguageDirection: function(a) {
					return this.$node.css("ltr" === a ? this.css.ltr : this.css.rtl), c.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
				},
				_hide: function() {
					this.$node.hide()
				},
				_show: function() {
					this.$node.css("display", "block")
				}
			}), a
		}(),
		k = function() {
			"use strict";

			function c(c, e) {
				var f, g, h, i, j, k, l, m, n, o, p;
				c = c || {}, c.input || a.error("missing input"), c.menu || a.error("missing menu"), c.eventBus || a.error("missing event bus"), e.mixin(this), this.eventBus = c.eventBus, this.minLength = b.isNumber(c.minLength) ? c.minLength : 1, this.input = c.input, this.menu = c.menu, this.enabled = !0, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), f = d(this, "activate", "open", "_onFocused"), g = d(this, "deactivate", "_onBlurred"), h = d(this, "isActive", "isOpen", "_onEnterKeyed"), i = d(this, "isActive", "isOpen", "_onTabKeyed"), j = d(this, "isActive", "_onEscKeyed"), k = d(this, "isActive", "open", "_onUpKeyed"), l = d(this, "isActive", "open", "_onDownKeyed"), m = d(this, "isActive", "isOpen", "_onLeftKeyed"), n = d(this, "isActive", "isOpen", "_onRightKeyed"), o = d(this, "_openIfActive", "_onQueryChanged"), p = d(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", f, this).onSync("blurred", g, this).onSync("enterKeyed", h, this).onSync("tabKeyed", i, this).onSync("escKeyed", j, this).onSync("upKeyed", k, this).onSync("downKeyed", l, this).onSync("leftKeyed", m, this).onSync("rightKeyed", n, this).onSync("queryChanged", o, this).onSync("whitespaceChanged", p, this).onSync("langDirChanged", this._onLangDirChanged, this)
			}
			function d(a) {
				var c = [].slice.call(arguments, 1);
				return function() {
					var d = [].slice.call(arguments);
					b.each(c, function(b) {
						return a[b].apply(a, d)
					})
				}
			}
			return b.mixin(c.prototype, {
				_hacks: function() {
					var c, d;
					c = this.input.$input || a("<div>"), d = this.menu.$node || a("<div>"), c.on("blur.tt", function(a) {
						var e, f, g;
						e = document.activeElement, f = d.is(e), g = d.has(e).length > 0, b.isMsie() && (f || g) && (a.preventDefault(), a.stopImmediatePropagation(), b.defer(function() {
							c.focus()
						}))
					}), d.on("mousedown.tt", function(a) {
						a.preventDefault()
					})
				},
				_onSelectableClicked: function(a, b) {
					this.select(b)
				},
				_onDatasetCleared: function() {
					this._updateHint()
				},
				_onDatasetRendered: function(a, b, c, d) {
					this._updateHint(), this.eventBus.trigger("render", c, d, b)
				},
				_onAsyncRequested: function(a, b, c) {
					this.eventBus.trigger("asyncrequest", c, b)
				},
				_onAsyncCanceled: function(a, b, c) {
					this.eventBus.trigger("asynccancel", c, b)
				},
				_onAsyncReceived: function(a, b, c) {
					this.eventBus.trigger("asyncreceive", c, b)
				},
				_onFocused: function() {
					this._minLengthMet() && this.menu.update(this.input.getQuery())
				},
				_onBlurred: function() {
					this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
				},
				_onEnterKeyed: function(a, b) {
					var c;
					(c = this.menu.getActiveSelectable()) && this.select(c) && b.preventDefault()
				},
				_onTabKeyed: function(a, b) {
					var c;
					(c = this.menu.getActiveSelectable()) ? this.select(c) && b.preventDefault() : (c = this.menu.getTopSelectable()) && this.autocomplete(c) && b.preventDefault()
				},
				_onEscKeyed: function() {
					this.close()
				},
				_onUpKeyed: function() {
					this.moveCursor(-1)
				},
				_onDownKeyed: function() {
					this.moveCursor(1)
				},
				_onLeftKeyed: function() {
					"rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
				},
				_onRightKeyed: function() {
					"ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
				},
				_onQueryChanged: function(a, b) {
					this._minLengthMet(b) ? this.menu.update(b) : this.menu.empty()
				},
				_onWhitespaceChanged: function() {
					this._updateHint()
				},
				_onLangDirChanged: function(a, b) {
					this.dir !== b && (this.dir = b, this.menu.setLanguageDirection(b))
				},
				_openIfActive: function() {
					this.isActive() && this.open()
				},
				_minLengthMet: function(a) {
					return a = b.isString(a) ? a : this.input.getQuery() || "", a.length >= this.minLength
				},
				_updateHint: function() {
					var a, c, d, e, f, h, i;
					a = this.menu.getTopSelectable(), c = this.menu.getSelectableData(a), d = this.input.getInputValue(), !c || b.isBlankString(d) || this.input.hasOverflow() ? this.input.clearHint() : (e = g.normalizeQuery(d), f = b.escapeRegExChars(e), h = new RegExp("^(?:" + f + ")(.+$)", "i"), i = h.exec(c.val), i && this.input.setHint(d + i[1]))
				},
				isEnabled: function() {
					return this.enabled
				},
				enable: function() {
					this.enabled = !0
				},
				disable: function() {
					this.enabled = !1
				},
				isActive: function() {
					return this.active
				},
				activate: function() {
					return this.isActive() ? !0 : !this.isEnabled() || this.eventBus.before("active") ? !1 : (this.active = !0, this.eventBus.trigger("active"), !0)
				},
				deactivate: function() {
					return this.isActive() ? this.eventBus.before("idle") ? !1 : (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0) : !0
				},
				isOpen: function() {
					return this.menu.isOpen()
				},
				open: function() {
					return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
				},
				close: function() {
					return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
				},
				setVal: function(a) {
					this.input.setQuery(b.toStr(a))
				},
				getVal: function() {
					return this.input.getQuery()
				},
				select: function(a) {
					var b = this.menu.getSelectableData(a);
					return b && !this.eventBus.before("select", b.obj) ? (this.input.setQuery(b.val, !0), this.eventBus.trigger("select", b.obj), this.close(), !0) : !1
				},
				autocomplete: function(a) {
					var b, c, d;
					return b = this.input.getQuery(), c = this.menu.getSelectableData(a), d = c && b !== c.val, d && !this.eventBus.before("autocomplete", c.obj) ? (this.input.setQuery(c.val), this.eventBus.trigger("autocomplete", c.obj), !0) : !1
				},
				moveCursor: function(a) {
					var b, c, d, e, f;
					return b = this.input.getQuery(), c = this.menu.selectableRelativeToCursor(a), d = this.menu.getSelectableData(c), e = d ? d.obj : null, f = this._minLengthMet() && this.menu.update(b), f || this.eventBus.before("cursorchange", e) ? !1 : (this.menu.setCursor(c), d ? this.input.setInputValue(d.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", e), !0)
				},
				destroy: function() {
					this.input.destroy(), this.menu.destroy()
				}
			}), c
		}();
	!
	function() {
		"use strict";

		function e(b, c) {
			b.each(function() {
				var b, d = a(this);
				(b = d.data(p.typeahead)) && c(b, d)
			})
		}
		function f(a, b) {
			return a.clone().addClass(b.classes.hint).removeData().css(b.css.hint).css(l(a)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
				autocomplete: "off",
				spellcheck: "false",
				tabindex: -1
			})
		}
		function h(a, b) {
			a.data(p.attrs, {
				dir: a.attr("dir"),
				autocomplete: a.attr("autocomplete"),
				spellcheck: a.attr("spellcheck"),
				style: a.attr("style")
			}), a.addClass(b.classes.input).attr({
				autocomplete: "off",
				spellcheck: !1
			});
			try {
				!a.attr("dir") && a.attr("dir", "auto")
			} catch (c) {}
			return a
		}
		function l(a) {
			return {
				backgroundAttachment: a.css("background-attachment"),
				backgroundClip: a.css("background-clip"),
				backgroundColor: a.css("background-color"),
				backgroundImage: a.css("background-image"),
				backgroundOrigin: a.css("background-origin"),
				backgroundPosition: a.css("background-position"),
				backgroundRepeat: a.css("background-repeat"),
				backgroundSize: a.css("background-size")
			}
		}
		function m(a) {
			var c, d;
			c = a.data(p.www), d = a.parent().filter(c.selectors.wrapper), b.each(a.data(p.attrs), function(c, d) {
				b.isUndefined(c) ? a.removeAttr(d) : a.attr(d, c)
			}), a.removeData(p.typeahead).removeData(p.www).removeData(p.attr).removeClass(c.classes.input), d.length && (a.detach().insertAfter(d), d.remove())
		}
		function n(c) {
			var d, e;
			return d = b.isJQuery(c) || b.isElement(c), e = d ? a(c).first() : [], e.length ? e : null
		}
		var o, p, q;
		o = a.fn.typeahead, p = {
			www: "tt-www",
			attrs: "tt-attrs",
			typeahead: "tt-typeahead"
		}, q = {
			initialize: function(e, l) {
				function m() {
					var c, m, q, r, s, t, u, v, w, x, y;
					b.each(l, function(a) {
						a.highlight = !! e.highlight
					}), c = a(this), m = a(o.html.wrapper), q = n(e.hint), r = n(e.menu), s = e.hint !== !1 && !q, t = e.menu !== !1 && !r, s && (q = f(c, o)), t && (r = a(o.html.menu).css(o.css.menu)), q && q.val(""), c = h(c, o), (s || t) && (m.css(o.css.wrapper), c.css(s ? o.css.input : o.css.inputWithNoHint), c.wrap(m).parent().prepend(s ? q : null).append(t ? r : null)), y = t ? j : i, u = new d({
						el: c
					}), v = new g({
						hint: q,
						input: c
					}, o), w = new y({
						node: r,
						datasets: l
					}, o), x = new k({
						input: v,
						menu: w,
						eventBus: u,
						minLength: e.minLength
					}, o), c.data(p.www, o), c.data(p.typeahead, x)
				}
				var o;
				return l = b.isArray(l) ? l : [].slice.call(arguments, 1), e = e || {}, o = c(e.classNames), this.each(m)
			},
			isEnabled: function() {
				var a;
				return e(this.first(), function(b) {
					a = b.isEnabled()
				}), a
			},
			enable: function() {
				return e(this, function(a) {
					a.enable()
				}), this
			},
			disable: function() {
				return e(this, function(a) {
					a.disable()
				}), this
			},
			isActive: function() {
				var a;
				return e(this.first(), function(b) {
					a = b.isActive()
				}), a
			},
			activate: function() {
				return e(this, function(a) {
					a.activate()
				}), this
			},
			deactivate: function() {
				return e(this, function(a) {
					a.deactivate()
				}), this
			},
			isOpen: function() {
				var a;
				return e(this.first(), function(b) {
					a = b.isOpen()
				}), a
			},
			open: function() {
				return e(this, function(a) {
					a.open()
				}), this
			},
			close: function() {
				return e(this, function(a) {
					a.close()
				}), this
			},
			select: function(b) {
				var c = !1,
					d = a(b);
				return e(this.first(), function(a) {
					c = a.select(d)
				}), c
			},
			autocomplete: function(b) {
				var c = !1,
					d = a(b);
				return e(this.first(), function(a) {
					c = a.autocomplete(d)
				}), c
			},
			moveCursor: function(a) {
				var b = !1;
				return e(this.first(), function(c) {
					b = c.moveCursor(a)
				}), b
			},
			val: function(a) {
				var b;
				return arguments.length ? (e(this, function(b) {
					b.setVal(a)
				}), this) : (e(this.first(), function(a) {
					b = a.getVal()
				}), b)
			},
			destroy: function() {
				return e(this, function(a, b) {
					m(b), a.destroy()
				}), this
			}
		}, a.fn.typeahead = function(a) {
			return q[a] ? q[a].apply(this, [].slice.call(arguments, 1)) : q.initialize.apply(this, arguments)
		}, a.fn.typeahead.noConflict = function() {
			return a.fn.typeahead = o, this
		}
	}()
});
!
function() {
	function n(n) {
		return n && (n.ownerDocument || n.document || n).documentElement
	}
	function t(n) {
		return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView)
	}
	function e(n, t) {
		return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
	}
	function r(n) {
		return null === n ? 0 / 0 : +n
	}
	function u(n) {
		return !isNaN(n)
	}
	function i(n) {
		return {
			left: function(t, e, r, u) {
				for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
					var i = r + u >>> 1;
					n(t[i], e) < 0 ? r = i + 1 : u = i
				}
				return r
			},
			right: function(t, e, r, u) {
				for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
					var i = r + u >>> 1;
					n(t[i], e) > 0 ? u = i : r = i + 1
				}
				return r
			}
		}
	}
	function o(n) {
		return n.length
	}
	function a(n) {
		for (var t = 1; n * t % 1;) t *= 10;
		return t
	}
	function c(n, t) {
		for (var e in t) Object.defineProperty(n.prototype, e, {
			value: t[e],
			enumerable: !1
		})
	}
	function l() {
		this._ = Object.create(null)
	}
	function s(n) {
		return (n += "") === pa || n[0] === va ? va + n : n
	}
	function f(n) {
		return (n += "")[0] === va ? n.slice(1) : n
	}
	function h(n) {
		return s(n) in this._
	}
	function g(n) {
		return (n = s(n)) in this._ && delete this._[n]
	}
	function p() {
		var n = [];
		for (var t in this._) n.push(f(t));
		return n
	}
	function v() {
		var n = 0;
		for (var t in this._)++n;
		return n
	}
	function d() {
		for (var n in this._) return !1;
		return !0
	}
	function m() {
		this._ = Object.create(null)
	}
	function y(n) {
		return n
	}
	function M(n, t, e) {
		return function() {
			var r = e.apply(t, arguments);
			return r === t ? n : r
		}
	}
	function x(n, t) {
		if (t in n) return t;
		t = t.charAt(0).toUpperCase() + t.slice(1);
		for (var e = 0, r = da.length; r > e; ++e) {
			var u = da[e] + t;
			if (u in n) return u
		}
	}
	function b() {}
	function _() {}
	function w(n) {
		function t() {
			for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
			return n
		}
		var e = [],
			r = new l;
		return t.on = function(t, u) {
			var i, o = r.get(t);
			return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
				on: u
			})), n)
		}, t
	}
	function S() {
		ta.event.preventDefault()
	}
	function k() {
		for (var n, t = ta.event; n = t.sourceEvent;) t = n;
		return t
	}
	function E(n) {
		for (var t = new _, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = w(t);
		return t.of = function(e, r) {
			return function(u) {
				try {
					var i = u.sourceEvent = ta.event;
					u.target = n, ta.event = u, t[u.type].apply(e, r)
				} finally {
					ta.event = i
				}
			}
		}, t
	}
	function A(n) {
		return ya(n, _a), n
	}
	function N(n) {
		return "function" == typeof n ? n : function() {
			return Ma(n, this)
		}
	}
	function C(n) {
		return "function" == typeof n ? n : function() {
			return xa(n, this)
		}
	}
	function z(n, t) {
		function e() {
			this.removeAttribute(n)
		}
		function r() {
			this.removeAttributeNS(n.space, n.local)
		}
		function u() {
			this.setAttribute(n, t)
		}
		function i() {
			this.setAttributeNS(n.space, n.local, t)
		}
		function o() {
			var e = t.apply(this, arguments);
			null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
		}
		function a() {
			var e = t.apply(this, arguments);
			null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
		}
		return n = ta.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
	}
	function q(n) {
		return n.trim().replace(/\s+/g, " ")
	}
	function L(n) {
		return new RegExp("(?:^|\\s+)" + ta.requote(n) + "(?:\\s+|$)", "g")
	}
	function T(n) {
		return (n + "").trim().split(/^|\s+/)
	}
	function R(n, t) {
		function e() {
			for (var e = -1; ++e < u;) n[e](this, t)
		}
		function r() {
			for (var e = -1, r = t.apply(this, arguments); ++e < u;) n[e](this, r)
		}
		n = T(n).map(D);
		var u = n.length;
		return "function" == typeof t ? r : e
	}
	function D(n) {
		var t = L(n);
		return function(e, r) {
			if (u = e.classList) return r ? u.add(n) : u.remove(n);
			var u = e.getAttribute("class") || "";
			r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", q(u + " " + n))) : e.setAttribute("class", q(u.replace(t, " ")))
		}
	}
	function P(n, t, e) {
		function r() {
			this.style.removeProperty(n)
		}
		function u() {
			this.style.setProperty(n, t, e)
		}
		function i() {
			var r = t.apply(this, arguments);
			null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
		}
		return null == t ? r : "function" == typeof t ? i : u
	}
	function U(n, t) {
		function e() {
			delete this[n]
		}
		function r() {
			this[n] = t
		}
		function u() {
			var e = t.apply(this, arguments);
			null == e ? delete this[n] : this[n] = e
		}
		return null == t ? e : "function" == typeof t ? u : r
	}
	function j(n) {
		function t() {
			var t = this.ownerDocument,
				e = this.namespaceURI;
			return e ? t.createElementNS(e, n) : t.createElement(n)
		}
		function e() {
			return this.ownerDocument.createElementNS(n.space, n.local)
		}
		return "function" == typeof n ? n : (n = ta.ns.qualify(n)).local ? e : t
	}
	function F() {
		var n = this.parentNode;
		n && n.removeChild(this)
	}
	function H(n) {
		return {
			__data__: n
		}
	}
	function O(n) {
		return function() {
			return ba(this, n)
		}
	}
	function I(n) {
		return arguments.length || (n = e), function(t, e) {
			return t && e ? n(t.__data__, e.__data__) : !t - !e
		}
	}
	function Y(n, t) {
		for (var e = 0, r = n.length; r > e; e++) for (var u, i = n[e], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, e);
		return n
	}
	function Z(n) {
		return ya(n, Sa), n
	}
	function V(n) {
		var t, e;
		return function(r, u, i) {
			var o, a = n[i].update,
				c = a.length;
			for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
			return o
		}
	}
	function X(n, t, e) {
		function r() {
			var t = this[o];
			t && (this.removeEventListener(n, t, t.$), delete this[o])
		}
		function u() {
			var u = c(t, ra(arguments));
			r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
		}
		function i() {
			var t, e = new RegExp("^__on([^.]+)" + ta.requote(n) + "$");
			for (var r in this) if (t = r.match(e)) {
				var u = this[r];
				this.removeEventListener(t[1], u, u.$), delete this[r]
			}
		}
		var o = "__on" + n,
			a = n.indexOf("."),
			c = $;
		a > 0 && (n = n.slice(0, a));
		var l = ka.get(n);
		return l && (n = l, c = B), a ? t ? u : r : t ? b : i
	}
	function $(n, t) {
		return function(e) {
			var r = ta.event;
			ta.event = e, t[0] = this.__data__;
			try {
				n.apply(this, t)
			} finally {
				ta.event = r
			}
		}
	}
	function B(n, t) {
		var e = $(n, t);
		return function(n) {
			var t = this,
				r = n.relatedTarget;
			r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
		}
	}
	function W(e) {
		var r = ".dragsuppress-" + ++Aa,
			u = "click" + r,
			i = ta.select(t(e)).on("touchmove" + r, S).on("dragstart" + r, S).on("selectstart" + r, S);
		if (null == Ea && (Ea = "onselectstart" in e ? !1 : x(e.style, "userSelect")), Ea) {
			var o = n(e).style,
				a = o[Ea];
			o[Ea] = "none"
		}
		return function(n) {
			if (i.on(r, null), Ea && (o[Ea] = a), n) {
				var t = function() {
						i.on(u, null)
					};
				i.on(u, function() {
					S(), t()
				}, !0), setTimeout(t, 0)
			}
		}
	}
	function J(n, e) {
		e.changedTouches && (e = e.changedTouches[0]);
		var r = n.ownerSVGElement || n;
		if (r.createSVGPoint) {
			var u = r.createSVGPoint();
			if (0 > Na) {
				var i = t(n);
				if (i.scrollX || i.scrollY) {
					r = ta.select("body").append("svg").style({
						position: "absolute",
						top: 0,
						left: 0,
						margin: 0,
						padding: 0,
						border: "none"
					}, "important");
					var o = r[0][0].getScreenCTM();
					Na = !(o.f || o.e), r.remove()
				}
			}
			return Na ? (u.x = e.pageX, u.y = e.pageY) : (u.x = e.clientX, u.y = e.clientY), u = u.matrixTransform(n.getScreenCTM().inverse()), [u.x, u.y]
		}
		var a = n.getBoundingClientRect();
		return [e.clientX - a.left - n.clientLeft, e.clientY - a.top - n.clientTop]
	}
	function G() {
		return ta.event.changedTouches[0].identifier
	}
	function K(n) {
		return n > 0 ? 1 : 0 > n ? -1 : 0
	}
	function Q(n, t, e) {
		return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
	}
	function nt(n) {
		return n > 1 ? 0 : -1 > n ? qa : Math.acos(n)
	}
	function tt(n) {
		return n > 1 ? Ra : -1 > n ? -Ra : Math.asin(n)
	}
	function et(n) {
		return ((n = Math.exp(n)) - 1 / n) / 2
	}
	function rt(n) {
		return ((n = Math.exp(n)) + 1 / n) / 2
	}
	function ut(n) {
		return ((n = Math.exp(2 * n)) - 1) / (n + 1)
	}
	function it(n) {
		return (n = Math.sin(n / 2)) * n
	}
	function ot() {}
	function at(n, t, e) {
		return this instanceof at ? (this.h = +n, this.s = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof at ? new at(n.h, n.s, n.l) : bt("" + n, _t, at) : new at(n, t, e)
	}
	function ct(n, t, e) {
		function r(n) {
			return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
		}
		function u(n) {
			return Math.round(255 * r(n))
		}
		var i, o;
		return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, new mt(u(n + 120), u(n), u(n - 120))
	}
	function lt(n, t, e) {
		return this instanceof lt ? (this.h = +n, this.c = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof lt ? new lt(n.h, n.c, n.l) : n instanceof ft ? gt(n.l, n.a, n.b) : gt((n = wt((n = ta.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new lt(n, t, e)
	}
	function st(n, t, e) {
		return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new ft(e, Math.cos(n *= Da) * t, Math.sin(n) * t)
	}
	function ft(n, t, e) {
		return this instanceof ft ? (this.l = +n, this.a = +t, void(this.b = +e)) : arguments.length < 2 ? n instanceof ft ? new ft(n.l, n.a, n.b) : n instanceof lt ? st(n.h, n.c, n.l) : wt((n = mt(n)).r, n.g, n.b) : new ft(n, t, e)
	}
	function ht(n, t, e) {
		var r = (n + 16) / 116,
			u = r + t / 500,
			i = r - e / 200;
		return u = pt(u) * Xa, r = pt(r) * $a, i = pt(i) * Ba, new mt(dt(3.2404542 * u - 1.5371385 * r - .4985314 * i), dt(-.969266 * u + 1.8760108 * r + .041556 * i), dt(.0556434 * u - .2040259 * r + 1.0572252 * i))
	}
	function gt(n, t, e) {
		return n > 0 ? new lt(Math.atan2(e, t) * Pa, Math.sqrt(t * t + e * e), n) : new lt(0 / 0, 0 / 0, n)
	}
	function pt(n) {
		return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
	}
	function vt(n) {
		return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
	}
	function dt(n) {
		return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
	}
	function mt(n, t, e) {
		return this instanceof mt ? (this.r = ~~n, this.g = ~~t, void(this.b = ~~e)) : arguments.length < 2 ? n instanceof mt ? new mt(n.r, n.g, n.b) : bt("" + n, mt, ct) : new mt(n, t, e)
	}
	function yt(n) {
		return new mt(n >> 16, n >> 8 & 255, 255 & n)
	}
	function Mt(n) {
		return yt(n) + ""
	}
	function xt(n) {
		return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
	}
	function bt(n, t, e) {
		n = n.toLowerCase();
		var r, u, i, o = 0,
			a = 0,
			c = 0;
		if (r = /([a-z]+)\((.*)\)/.exec(n)) switch (u = r[2].split(","), r[1]) {
		case "hsl":
			return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
		case "rgb":
			return t(kt(u[0]), kt(u[1]), kt(u[2]))
		}
		return (i = Ga.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c))
	}
	function _t(n, t, e) {
		var r, u, i = Math.min(n /= 255, t /= 255, e /= 255),
			o = Math.max(n, t, e),
			a = o - i,
			c = (o + i) / 2;
		return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), new at(r, u, c)
	}
	function wt(n, t, e) {
		n = St(n), t = St(t), e = St(e);
		var r = vt((.4124564 * n + .3575761 * t + .1804375 * e) / Xa),
			u = vt((.2126729 * n + .7151522 * t + .072175 * e) / $a),
			i = vt((.0193339 * n + .119192 * t + .9503041 * e) / Ba);
		return ft(116 * u - 16, 500 * (r - u), 200 * (u - i))
	}
	function St(n) {
		return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
	}
	function kt(n) {
		var t = parseFloat(n);
		return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
	}
	function Et(n) {
		return "function" == typeof n ? n : function() {
			return n
		}
	}
	function At(n) {
		return function(t, e, r) {
			return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Nt(t, e, n, r)
		}
	}
	function Nt(n, t, e, r) {
		function u() {
			var n, t = c.status;
			if (!t && zt(c) || t >= 200 && 300 > t || 304 === t) {
				try {
					n = e.call(i, c)
				} catch (r) {
					return void o.error.call(i, r)
				}
				o.load.call(i, n)
			} else o.error.call(i, c)
		}
		var i = {},
			o = ta.dispatch("beforesend", "progress", "load", "error"),
			a = {},
			c = new XMLHttpRequest,
			l = null;
		return !this.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
			c.readyState > 3 && u()
		}, c.onprogress = function(n) {
			var t = ta.event;
			ta.event = n;
			try {
				o.progress.call(i, c)
			} finally {
				ta.event = t
			}
		}, i.header = function(n, t) {
			return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
		}, i.mimeType = function(n) {
			return arguments.length ? (t = null == n ? null : n + "", i) : t
		}, i.responseType = function(n) {
			return arguments.length ? (l = n, i) : l
		}, i.response = function(n) {
			return e = n, i
		}, ["get", "post"].forEach(function(n) {
			i[n] = function() {
				return i.send.apply(i, [n].concat(ra(arguments)))
			}
		}), i.send = function(e, r, u) {
			if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader) for (var s in a) c.setRequestHeader(s, a[s]);
			return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on("error", u).on("load", function(n) {
				u(null, n)
			}), o.beforesend.call(i, c), c.send(null == r ? null : r), i
		}, i.abort = function() {
			return c.abort(), i
		}, ta.rebind(i, o, "on"), null == r ? i : i.get(Ct(r))
	}
	function Ct(n) {
		return 1 === n.length ?
		function(t, e) {
			n(null == t ? e : null)
		} : n
	}
	function zt(n) {
		var t = n.responseType;
		return t && "text" !== t ? n.response : n.responseText
	}
	function qt() {
		var n = Lt(),
			t = Tt() - n;
		t > 24 ? (isFinite(t) && (clearTimeout(tc), tc = setTimeout(qt, t)), nc = 0) : (nc = 1, rc(qt))
	}
	function Lt() {
		var n = Date.now();
		for (ec = Ka; ec;) n >= ec.t && (ec.f = ec.c(n - ec.t)), ec = ec.n;
		return n
	}
	function Tt() {
		for (var n, t = Ka, e = 1 / 0; t;) t.f ? t = n ? n.n = t.n : Ka = t.n : (t.t < e && (e = t.t), t = (n = t).n);
		return Qa = n, e
	}
	function Rt(n, t) {
		return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
	}
	function Dt(n, t) {
		var e = Math.pow(10, 3 * ga(8 - t));
		return {
			scale: t > 8 ?
			function(n) {
				return n / e
			} : function(n) {
				return n * e
			},
			symbol: n
		}
	}
	function Pt(n) {
		var t = n.decimal,
			e = n.thousands,
			r = n.grouping,
			u = n.currency,
			i = r && e ?
		function(n, t) {
			for (var u = n.length, i = [], o = 0, a = r[0], c = 0; u > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)), i.push(n.substring(u -= a, u + a)), !((c += a + 1) > t));) a = r[o = (o + 1) % r.length];
			return i.reverse().join(e)
		} : y;
		return function(n) {
			var e = ic.exec(n),
				r = e[1] || " ",
				o = e[2] || ">",
				a = e[3] || "-",
				c = e[4] || "",
				l = e[5],
				s = +e[6],
				f = e[7],
				h = e[8],
				g = e[9],
				p = 1,
				v = "",
				d = "",
				m = !1,
				y = !0;
			switch (h && (h = +h.substring(1)), (l || "0" === r && "=" === o) && (l = r = "0", o = "="), g) {
			case "n":
				f = !0, g = "g";
				break;
			case "%":
				p = 100, d = "%", g = "f";
				break;
			case "p":
				p = 100, d = "%", g = "r";
				break;
			case "b":
			case "o":
			case "x":
			case "X":
				"#" === c && (v = "0" + g.toLowerCase());
			case "c":
				y = !1;
			case "d":
				m = !0, h = 0;
				break;
			case "s":
				p = -1, g = "r"
			}
			"$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = oc.get(g) || Ut;
			var M = l && f;
			return function(n) {
				var e = d;
				if (m && n % 1) return "";
				var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === a ? "" : a;
				if (0 > p) {
					var c = ta.formatPrefix(n, h);
					n = c.scale(n), e = c.symbol + d
				} else n *= p;
				n = g(n, h);
				var x, b, _ = n.lastIndexOf(".");
				if (0 > _) {
					var w = y ? n.lastIndexOf("e") : -1;
					0 > w ? (x = n, b = "") : (x = n.substring(0, w), b = n.substring(w))
				} else x = n.substring(0, _), b = t + n.substring(_ + 1);
				!l && f && (x = i(x, 1 / 0));
				var S = v.length + x.length + b.length + (M ? 0 : u.length),
					k = s > S ? new Array(S = s - S + 1).join(r) : "";
				return M && (x = i(k + x, k.length ? s - b.length : 1 / 0)), u += v, n = x + b, ("<" === o ? u + n + k : ">" === o ? k + u + n : "^" === o ? k.substring(0, S >>= 1) + u + n + k.substring(S) : u + (M ? n : k + n)) + e
			}
		}
	}
	function Ut(n) {
		return n + ""
	}
	function jt() {
		this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
	}
	function Ft(n, t, e) {
		function r(t) {
			var e = n(t),
				r = i(e, 1);
			return r - t > t - e ? e : r
		}
		function u(e) {
			return t(e = n(new cc(e - 1)), 1), e
		}
		function i(n, e) {
			return t(n = new cc(+n), e), n
		}
		function o(n, r, i) {
			var o = u(n),
				a = [];
			if (i > 1) for (; r > o;) e(o) % i || a.push(new Date(+o)), t(o, 1);
			else for (; r > o;) a.push(new Date(+o)), t(o, 1);
			return a
		}
		function a(n, t, e) {
			try {
				cc = jt;
				var r = new jt;
				return r._ = n, o(r, t, e)
			} finally {
				cc = Date
			}
		}
		n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
		var c = n.utc = Ht(n);
		return c.floor = c, c.round = Ht(r), c.ceil = Ht(u), c.offset = Ht(i), c.range = a, n
	}
	function Ht(n) {
		return function(t, e) {
			try {
				cc = jt;
				var r = new jt;
				return r._ = t, n(r, e)._
			} finally {
				cc = Date
			}
		}
	}
	function Ot(n) {
		function t(n) {
			function t(t) {
				for (var e, u, i, o = [], a = -1, c = 0; ++a < r;) 37 === n.charCodeAt(a) && (o.push(n.slice(c, a)), null != (u = sc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = N[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1);
				return o.push(n.slice(c, a)), o.join("")
			}
			var r = n.length;
			return t.parse = function(t) {
				var r = {
					y: 1900,
					m: 0,
					d: 1,
					H: 0,
					M: 0,
					S: 0,
					L: 0,
					Z: null
				},
					u = e(r, n, t, 0);
				if (u != t.length) return null;
				"p" in r && (r.H = r.H % 12 + 12 * r.p);
				var i = null != r.Z && cc !== jt,
					o = new(i ? jt : cc);
				return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), i ? o._ : o
			}, t.toString = function() {
				return n
			}, t
		}
		function e(n, t, e, r) {
			for (var u, i, o, a = 0, c = t.length, l = e.length; c > a;) {
				if (r >= l) return -1;
				if (u = t.charCodeAt(a++), 37 === u) {
					if (o = t.charAt(a++), i = C[o in sc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1
				} else if (u != e.charCodeAt(r++)) return -1
			}
			return r
		}
		function r(n, t, e) {
			_.lastIndex = 0;
			var r = _.exec(t.slice(e));
			return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
		}
		function u(n, t, e) {
			x.lastIndex = 0;
			var r = x.exec(t.slice(e));
			return r ? (n.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1
		}
		function i(n, t, e) {
			E.lastIndex = 0;
			var r = E.exec(t.slice(e));
			return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1
		}
		function o(n, t, e) {
			S.lastIndex = 0;
			var r = S.exec(t.slice(e));
			return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1
		}
		function a(n, t, r) {
			return e(n, N.c.toString(), t, r)
		}
		function c(n, t, r) {
			return e(n, N.x.toString(), t, r)
		}
		function l(n, t, r) {
			return e(n, N.X.toString(), t, r)
		}
		function s(n, t, e) {
			var r = M.get(t.slice(e, e += 2).toLowerCase());
			return null == r ? -1 : (n.p = r, e)
		}
		var f = n.dateTime,
			h = n.date,
			g = n.time,
			p = n.periods,
			v = n.days,
			d = n.shortDays,
			m = n.months,
			y = n.shortMonths;
		t.utc = function(n) {
			function e(n) {
				try {
					cc = jt;
					var t = new cc;
					return t._ = n, r(t)
				} finally {
					cc = Date
				}
			}
			var r = t(n);
			return e.parse = function(n) {
				try {
					cc = jt;
					var t = r.parse(n);
					return t && t._
				} finally {
					cc = Date
				}
			}, e.toString = r.toString, e
		}, t.multi = t.utc.multi = ae;
		var M = ta.map(),
			x = Yt(v),
			b = Zt(v),
			_ = Yt(d),
			w = Zt(d),
			S = Yt(m),
			k = Zt(m),
			E = Yt(y),
			A = Zt(y);
		p.forEach(function(n, t) {
			M.set(n.toLowerCase(), t)
		});
		var N = {
			a: function(n) {
				return d[n.getDay()]
			},
			A: function(n) {
				return v[n.getDay()]
			},
			b: function(n) {
				return y[n.getMonth()]
			},
			B: function(n) {
				return m[n.getMonth()]
			},
			c: t(f),
			d: function(n, t) {
				return It(n.getDate(), t, 2)
			},
			e: function(n, t) {
				return It(n.getDate(), t, 2)
			},
			H: function(n, t) {
				return It(n.getHours(), t, 2)
			},
			I: function(n, t) {
				return It(n.getHours() % 12 || 12, t, 2)
			},
			j: function(n, t) {
				return It(1 + ac.dayOfYear(n), t, 3)
			},
			L: function(n, t) {
				return It(n.getMilliseconds(), t, 3)
			},
			m: function(n, t) {
				return It(n.getMonth() + 1, t, 2)
			},
			M: function(n, t) {
				return It(n.getMinutes(), t, 2)
			},
			p: function(n) {
				return p[+(n.getHours() >= 12)]
			},
			S: function(n, t) {
				return It(n.getSeconds(), t, 2)
			},
			U: function(n, t) {
				return It(ac.sundayOfYear(n), t, 2)
			},
			w: function(n) {
				return n.getDay()
			},
			W: function(n, t) {
				return It(ac.mondayOfYear(n), t, 2)
			},
			x: t(h),
			X: t(g),
			y: function(n, t) {
				return It(n.getFullYear() % 100, t, 2)
			},
			Y: function(n, t) {
				return It(n.getFullYear() % 1e4, t, 4)
			},
			Z: ie,
			"%": function() {
				return "%"
			}
		},
			C = {
				a: r,
				A: u,
				b: i,
				B: o,
				c: a,
				d: Qt,
				e: Qt,
				H: te,
				I: te,
				j: ne,
				L: ue,
				m: Kt,
				M: ee,
				p: s,
				S: re,
				U: Xt,
				w: Vt,
				W: $t,
				x: c,
				X: l,
				y: Wt,
				Y: Bt,
				Z: Jt,
				"%": oe
			};
		return t
	}
	function It(n, t, e) {
		var r = 0 > n ? "-" : "",
			u = (r ? -n : n) + "",
			i = u.length;
		return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
	}
	function Yt(n) {
		return new RegExp("^(?:" + n.map(ta.requote).join("|") + ")", "i")
	}
	function Zt(n) {
		for (var t = new l, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
		return t
	}
	function Vt(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 1));
		return r ? (n.w = +r[0], e + r[0].length) : -1
	}
	function Xt(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e));
		return r ? (n.U = +r[0], e + r[0].length) : -1
	}
	function $t(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e));
		return r ? (n.W = +r[0], e + r[0].length) : -1
	}
	function Bt(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 4));
		return r ? (n.y = +r[0], e + r[0].length) : -1
	}
	function Wt(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 2));
		return r ? (n.y = Gt(+r[0]), e + r[0].length) : -1
	}
	function Jt(n, t, e) {
		return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1
	}
	function Gt(n) {
		return n + (n > 68 ? 1900 : 2e3)
	}
	function Kt(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 2));
		return r ? (n.m = r[0] - 1, e + r[0].length) : -1
	}
	function Qt(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 2));
		return r ? (n.d = +r[0], e + r[0].length) : -1
	}
	function ne(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 3));
		return r ? (n.j = +r[0], e + r[0].length) : -1
	}
	function te(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 2));
		return r ? (n.H = +r[0], e + r[0].length) : -1
	}
	function ee(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 2));
		return r ? (n.M = +r[0], e + r[0].length) : -1
	}
	function re(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 2));
		return r ? (n.S = +r[0], e + r[0].length) : -1
	}
	function ue(n, t, e) {
		fc.lastIndex = 0;
		var r = fc.exec(t.slice(e, e + 3));
		return r ? (n.L = +r[0], e + r[0].length) : -1
	}
	function ie(n) {
		var t = n.getTimezoneOffset(),
			e = t > 0 ? "-" : "+",
			r = ga(t) / 60 | 0,
			u = ga(t) % 60;
		return e + It(r, "0", 2) + It(u, "0", 2)
	}
	function oe(n, t, e) {
		hc.lastIndex = 0;
		var r = hc.exec(t.slice(e, e + 1));
		return r ? e + r[0].length : -1
	}
	function ae(n) {
		for (var t = n.length, e = -1; ++e < t;) n[e][0] = this(n[e][0]);
		return function(t) {
			for (var e = 0, r = n[e]; !r[1](t);) r = n[++e];
			return r[0](t)
		}
	}
	function ce() {}
	function le(n, t, e) {
		var r = e.s = n + t,
			u = r - n,
			i = r - u;
		e.t = n - i + (t - u)
	}
	function se(n, t) {
		n && dc.hasOwnProperty(n.type) && dc[n.type](n, t)
	}
	function fe(n, t, e) {
		var r, u = -1,
			i = n.length - e;
		for (t.lineStart(); ++u < i;) r = n[u], t.point(r[0], r[1], r[2]);
		t.lineEnd()
	}
	function he(n, t) {
		var e = -1,
			r = n.length;
		for (t.polygonStart(); ++e < r;) fe(n[e], t, 1);
		t.polygonEnd()
	}
	function ge() {
		function n(n, t) {
			n *= Da, t = t * Da / 2 + qa / 4;
			var e = n - r,
				o = e >= 0 ? 1 : -1,
				a = o * e,
				c = Math.cos(t),
				l = Math.sin(t),
				s = i * l,
				f = u * c + s * Math.cos(a),
				h = s * o * Math.sin(a);
			yc.add(Math.atan2(h, f)), r = n, u = c, i = l
		}
		var t, e, r, u, i;
		Mc.point = function(o, a) {
			Mc.point = n, r = (t = o) * Da, u = Math.cos(a = (e = a) * Da / 2 + qa / 4), i = Math.sin(a)
		}, Mc.lineEnd = function() {
			n(t, e)
		}
	}
	function pe(n) {
		var t = n[0],
			e = n[1],
			r = Math.cos(e);
		return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
	}
	function ve(n, t) {
		return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
	}
	function de(n, t) {
		return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
	}
	function me(n, t) {
		n[0] += t[0], n[1] += t[1], n[2] += t[2]
	}
	function ye(n, t) {
		return [n[0] * t, n[1] * t, n[2] * t]
	}
	function Me(n) {
		var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
		n[0] /= t, n[1] /= t, n[2] /= t
	}
	function xe(n) {
		return [Math.atan2(n[1], n[0]), tt(n[2])]
	}
	function be(n, t) {
		return ga(n[0] - t[0]) < Ca && ga(n[1] - t[1]) < Ca
	}
	function _e(n, t) {
		n *= Da;
		var e = Math.cos(t *= Da);
		we(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
	}
	function we(n, t, e) {
		++xc, _c += (n - _c) / xc, wc += (t - wc) / xc, Sc += (e - Sc) / xc
	}
	function Se() {
		function n(n, u) {
			n *= Da;
			var i = Math.cos(u *= Da),
				o = i * Math.cos(n),
				a = i * Math.sin(n),
				c = Math.sin(u),
				l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
			bc += l, kc += l * (t + (t = o)), Ec += l * (e + (e = a)), Ac += l * (r + (r = c)), we(t, e, r)
		}
		var t, e, r;
		qc.point = function(u, i) {
			u *= Da;
			var o = Math.cos(i *= Da);
			t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), qc.point = n, we(t, e, r)
		}
	}
	function ke() {
		qc.point = _e
	}
	function Ee() {
		function n(n, t) {
			n *= Da;
			var e = Math.cos(t *= Da),
				o = e * Math.cos(n),
				a = e * Math.sin(n),
				c = Math.sin(t),
				l = u * c - i * a,
				s = i * o - r * c,
				f = r * a - u * o,
				h = Math.sqrt(l * l + s * s + f * f),
				g = r * o + u * a + i * c,
				p = h && -nt(g) / h,
				v = Math.atan2(h, g);
			Nc += p * l, Cc += p * s, zc += p * f, bc += v, kc += v * (r + (r = o)), Ec += v * (u + (u = a)), Ac += v * (i + (i = c)), we(r, u, i)
		}
		var t, e, r, u, i;
		qc.point = function(o, a) {
			t = o, e = a, qc.point = n, o *= Da;
			var c = Math.cos(a *= Da);
			r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), we(r, u, i)
		}, qc.lineEnd = function() {
			n(t, e), qc.lineEnd = ke, qc.point = _e
		}
	}
	function Ae(n, t) {
		function e(e, r) {
			return e = n(e, r), t(e[0], e[1])
		}
		return n.invert && t.invert && (e.invert = function(e, r) {
			return e = t.invert(e, r), e && n.invert(e[0], e[1])
		}), e
	}
	function Ne() {
		return !0
	}
	function Ce(n, t, e, r, u) {
		var i = [],
			o = [];
		if (n.forEach(function(n) {
			if (!((t = n.length - 1) <= 0)) {
				var t, e = n[0],
					r = n[t];
				if (be(e, r)) {
					u.lineStart();
					for (var a = 0; t > a; ++a) u.point((e = n[a])[0], e[1]);
					return void u.lineEnd()
				}
				var c = new qe(e, n, null, !0),
					l = new qe(e, null, c, !1);
				c.o = l, i.push(c), o.push(l), c = new qe(r, n, null, !1), l = new qe(r, null, c, !0), c.o = l, i.push(c), o.push(l)
			}
		}), o.sort(t), ze(i), ze(o), i.length) {
			for (var a = 0, c = e, l = o.length; l > a; ++a) o[a].e = c = !c;
			for (var s, f, h = i[0];;) {
				for (var g = h, p = !0; g.v;) if ((g = g.n) === h) return;
				s = g.z, u.lineStart();
				do {
					if (g.v = g.o.v = !0, g.e) {
						if (p) for (var a = 0, l = s.length; l > a; ++a) u.point((f = s[a])[0], f[1]);
						else r(g.x, g.n.x, 1, u);
						g = g.n
					} else {
						if (p) {
							s = g.p.z;
							for (var a = s.length - 1; a >= 0; --a) u.point((f = s[a])[0], f[1])
						} else r(g.x, g.p.x, -1, u);
						g = g.p
					}
					g = g.o, s = g.z, p = !p
				} while (!g.v);
				u.lineEnd()
			}
		}
	}
	function ze(n) {
		if (t = n.length) {
			for (var t, e, r = 0, u = n[0]; ++r < t;) u.n = e = n[r], e.p = u, u = e;
			u.n = e = n[0], e.p = u
		}
	}
	function qe(n, t, e, r) {
		this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
	}
	function Le(n, t, e, r) {
		return function(u, i) {
			function o(t, e) {
				var r = u(t, e);
				n(t = r[0], e = r[1]) && i.point(t, e)
			}
			function a(n, t) {
				var e = u(n, t);
				d.point(e[0], e[1])
			}
			function c() {
				y.point = a, d.lineStart()
			}
			function l() {
				y.point = o, d.lineEnd()
			}
			function s(n, t) {
				v.push([n, t]);
				var e = u(n, t);
				x.point(e[0], e[1])
			}
			function f() {
				x.lineStart(), v = []
			}
			function h() {
				s(v[0][0], v[0][1]), x.lineEnd();
				var n, t = x.clean(),
					e = M.buffer(),
					r = e.length;
				if (v.pop(), p.push(v), v = null, r) if (1 & t) {
					n = e[0];
					var u, r = n.length - 1,
						o = -1;
					if (r > 0) {
						for (b || (i.polygonStart(), b = !0), i.lineStart(); ++o < r;) i.point((u = n[o])[0], u[1]);
						i.lineEnd()
					}
				} else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Te))
			}
			var g, p, v, d = t(i),
				m = u.invert(r[0], r[1]),
				y = {
					point: o,
					lineStart: c,
					lineEnd: l,
					polygonStart: function() {
						y.point = s, y.lineStart = f, y.lineEnd = h, g = [], p = []
					},
					polygonEnd: function() {
						y.point = o, y.lineStart = c, y.lineEnd = l, g = ta.merge(g);
						var n = Fe(m, p);
						g.length ? (b || (i.polygonStart(), b = !0), Ce(g, De, n, e, i)) : n && (b || (i.polygonStart(), b = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), b && (i.polygonEnd(), b = !1), g = p = null
					},
					sphere: function() {
						i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
					}
				},
				M = Re(),
				x = t(M),
				b = !1;
			return y
		}
	}
	function Te(n) {
		return n.length > 1
	}
	function Re() {
		var n, t = [];
		return {
			lineStart: function() {
				t.push(n = [])
			},
			point: function(t, e) {
				n.push([t, e])
			},
			lineEnd: b,
			buffer: function() {
				var e = t;
				return t = [], n = null, e
			},
			rejoin: function() {
				t.length > 1 && t.push(t.pop().concat(t.shift()))
			}
		}
	}
	function De(n, t) {
		return ((n = n.x)[0] < 0 ? n[1] - Ra - Ca : Ra - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ra - Ca : Ra - t[1])
	}
	function Pe(n) {
		var t, e = 0 / 0,
			r = 0 / 0,
			u = 0 / 0;
		return {
			lineStart: function() {
				n.lineStart(), t = 1
			},
			point: function(i, o) {
				var a = i > 0 ? qa : -qa,
					c = ga(i - e);
				ga(c - qa) < Ca ? (n.point(e, r = (r + o) / 2 > 0 ? Ra : -Ra), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= qa && (ga(e - u) < Ca && (e -= u * Ca), ga(i - a) < Ca && (i -= a * Ca), r = Ue(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
			},
			lineEnd: function() {
				n.lineEnd(), e = r = 0 / 0
			},
			clean: function() {
				return 2 - t
			}
		}
	}
	function Ue(n, t, e, r) {
		var u, i, o = Math.sin(n - e);
		return ga(o) > Ca ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
	}
	function je(n, t, e, r) {
		var u;
		if (null == n) u = e * Ra, r.point(-qa, u), r.point(0, u), r.point(qa, u), r.point(qa, 0), r.point(qa, -u), r.point(0, -u), r.point(-qa, -u), r.point(-qa, 0), r.point(-qa, u);
		else if (ga(n[0] - t[0]) > Ca) {
			var i = n[0] < t[0] ? qa : -qa;
			u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
		} else r.point(t[0], t[1])
	}
	function Fe(n, t) {
		var e = n[0],
			r = n[1],
			u = [Math.sin(e), -Math.cos(e), 0],
			i = 0,
			o = 0;
		yc.reset();
		for (var a = 0, c = t.length; c > a; ++a) {
			var l = t[a],
				s = l.length;
			if (s) for (var f = l[0], h = f[0], g = f[1] / 2 + qa / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
				d === s && (d = 0), n = l[d];
				var m = n[0],
					y = n[1] / 2 + qa / 4,
					M = Math.sin(y),
					x = Math.cos(y),
					b = m - h,
					_ = b >= 0 ? 1 : -1,
					w = _ * b,
					S = w > qa,
					k = p * M;
				if (yc.add(Math.atan2(k * _ * Math.sin(w), v * x + k * Math.cos(w))), i += S ? b + _ * La : b, S ^ h >= e ^ m >= e) {
					var E = de(pe(f), pe(n));
					Me(E);
					var A = de(u, E);
					Me(A);
					var N = (S ^ b >= 0 ? -1 : 1) * tt(A[2]);
					(r > N || r === N && (E[0] || E[1])) && (o += S ^ b >= 0 ? 1 : -1)
				}
				if (!d++) break;
				h = m, p = M, v = x, f = n
			}
		}
		return (-Ca > i || Ca > i && 0 > yc) ^ 1 & o
	}
	function He(n) {
		function t(n, t) {
			return Math.cos(n) * Math.cos(t) > i
		}
		function e(n) {
			var e, i, c, l, s;
			return {
				lineStart: function() {
					l = c = !1, s = 1
				},
				point: function(f, h) {
					var g, p = [f, h],
						v = t(f, h),
						d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? qa : -qa), h) : 0;
					if (!e && (l = c = v) && n.lineStart(), v !== c && (g = r(e, p), (be(e, g) || be(p, g)) && (p[0] += Ca, p[1] += Ca, v = t(p[0], p[1]))), v !== c) s = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
					else if (a && e && o ^ v) {
						var m;
						d & i || !(m = r(p, e, !0)) || (s = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
					}!v || e && be(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d
				},
				lineEnd: function() {
					c && n.lineEnd(), e = null
				},
				clean: function() {
					return s | (l && c) << 1
				}
			}
		}
		function r(n, t, e) {
			var r = pe(n),
				u = pe(t),
				o = [1, 0, 0],
				a = de(r, u),
				c = ve(a, a),
				l = a[0],
				s = c - l * l;
			if (!s) return !e && n;
			var f = i * c / s,
				h = -i * l / s,
				g = de(o, a),
				p = ye(o, f),
				v = ye(a, h);
			me(p, v);
			var d = g,
				m = ve(p, d),
				y = ve(d, d),
				M = m * m - y * (ve(p, p) - 1);
			if (!(0 > M)) {
				var x = Math.sqrt(M),
					b = ye(d, (-m - x) / y);
				if (me(b, p), b = xe(b), !e) return b;
				var _, w = n[0],
					S = t[0],
					k = n[1],
					E = t[1];
				w > S && (_ = w, w = S, S = _);
				var A = S - w,
					N = ga(A - qa) < Ca,
					C = N || Ca > A;
				if (!N && k > E && (_ = k, k = E, E = _), C ? N ? k + E > 0 ^ b[1] < (ga(b[0] - w) < Ca ? k : E) : k <= b[1] && b[1] <= E : A > qa ^ (w <= b[0] && b[0] <= S)) {
					var z = ye(d, (-m + x) / y);
					return me(z, p), [b, xe(z)]
				}
			}
		}
		function u(t, e) {
			var r = o ? n : qa - n,
				u = 0;
			return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
		}
		var i = Math.cos(n),
			o = i > 0,
			a = ga(i) > Ca,
			c = gr(n, 6 * Da);
		return Le(t, e, c, o ? [0, -n] : [-qa, n - qa])
	}
	function Oe(n, t, e, r) {
		return function(u) {
			var i, o = u.a,
				a = u.b,
				c = o.x,
				l = o.y,
				s = a.x,
				f = a.y,
				h = 0,
				g = 1,
				p = s - c,
				v = f - l;
			if (i = n - c, p || !(i > 0)) {
				if (i /= p, 0 > p) {
					if (h > i) return;
					g > i && (g = i)
				} else if (p > 0) {
					if (i > g) return;
					i > h && (h = i)
				}
				if (i = e - c, p || !(0 > i)) {
					if (i /= p, 0 > p) {
						if (i > g) return;
						i > h && (h = i)
					} else if (p > 0) {
						if (h > i) return;
						g > i && (g = i)
					}
					if (i = t - l, v || !(i > 0)) {
						if (i /= v, 0 > v) {
							if (h > i) return;
							g > i && (g = i)
						} else if (v > 0) {
							if (i > g) return;
							i > h && (h = i)
						}
						if (i = r - l, v || !(0 > i)) {
							if (i /= v, 0 > v) {
								if (i > g) return;
								i > h && (h = i)
							} else if (v > 0) {
								if (h > i) return;
								g > i && (g = i)
							}
							return h > 0 && (u.a = {
								x: c + h * p,
								y: l + h * v
							}), 1 > g && (u.b = {
								x: c + g * p,
								y: l + g * v
							}), u
						}
					}
				}
			}
		}
	}
	function Ie(n, t, e, r) {
		function u(r, u) {
			return ga(r[0] - n) < Ca ? u > 0 ? 0 : 3 : ga(r[0] - e) < Ca ? u > 0 ? 2 : 1 : ga(r[1] - t) < Ca ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
		}
		function i(n, t) {
			return o(n.x, t.x)
		}
		function o(n, t) {
			var e = u(n, 1),
				r = u(t, 1);
			return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
		}
		return function(a) {
			function c(n) {
				for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u) for (var i, o = 1, a = d[u], c = a.length, l = a[0]; c > o; ++o) i = a[o], l[1] <= r ? i[1] > r && Q(l, i, n) > 0 && ++t : i[1] <= r && Q(l, i, n) < 0 && --t, l = i;
				return 0 !== t
			}
			function l(i, a, c, l) {
				var s = 0,
					f = 0;
				if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
					do l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
					while ((s = (s + c + 4) % 4) !== f)
				} else l.point(a[0], a[1])
			}
			function s(u, i) {
				return u >= n && e >= u && i >= t && r >= i
			}
			function f(n, t) {
				s(n, t) && a.point(n, t)
			}
			function h() {
				C.point = p, d && d.push(m = []), S = !0, w = !1, b = _ = 0 / 0
			}
			function g() {
				v && (p(y, M), x && w && A.rejoin(), v.push(A.buffer())), C.point = f, w && a.lineEnd()
			}
			function p(n, t) {
				n = Math.max(-Tc, Math.min(Tc, n)), t = Math.max(-Tc, Math.min(Tc, t));
				var e = s(n, t);
				if (d && m.push([n, t]), S) y = n, M = t, x = e, S = !1, e && (a.lineStart(), a.point(n, t));
				else if (e && w) a.point(n, t);
				else {
					var r = {
						a: {
							x: b,
							y: _
						},
						b: {
							x: n,
							y: t
						}
					};
					N(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1)
				}
				b = n, _ = t, w = e
			}
			var v, d, m, y, M, x, b, _, w, S, k, E = a,
				A = Re(),
				N = Oe(n, t, e, r),
				C = {
					point: f,
					lineStart: h,
					lineEnd: g,
					polygonStart: function() {
						a = A, v = [], d = [], k = !0
					},
					polygonEnd: function() {
						a = E, v = ta.merge(v);
						var t = c([n, r]),
							e = k && t,
							u = v.length;
						(e || u) && (a.polygonStart(), e && (a.lineStart(), l(null, null, 1, a), a.lineEnd()), u && Ce(v, i, t, l, a), a.polygonEnd()), v = d = m = null
					}
				};
			return C
		}
	}
	function Ye(n) {
		var t = 0,
			e = qa / 3,
			r = ir(n),
			u = r(t, e);
		return u.parallels = function(n) {
			return arguments.length ? r(t = n[0] * qa / 180, e = n[1] * qa / 180) : [t / qa * 180, e / qa * 180]
		}, u
	}
	function Ze(n, t) {
		function e(n, t) {
			var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
			return [e * Math.sin(n *= u), o - e * Math.cos(n)]
		}
		var r = Math.sin(n),
			u = (r + Math.sin(t)) / 2,
			i = 1 + r * (2 * u - r),
			o = Math.sqrt(i) / u;
		return e.invert = function(n, t) {
			var e = o - t;
			return [Math.atan2(n, e) / u, tt((i - (n * n + e * e) * u * u) / (2 * u))]
		}, e
	}
	function Ve() {
		function n(n, t) {
			Dc += u * n - r * t, r = n, u = t
		}
		var t, e, r, u;
		Hc.point = function(i, o) {
			Hc.point = n, t = r = i, e = u = o
		}, Hc.lineEnd = function() {
			n(t, e)
		}
	}
	function Xe(n, t) {
		Pc > n && (Pc = n), n > jc && (jc = n), Uc > t && (Uc = t), t > Fc && (Fc = t)
	}
	function $e() {
		function n(n, t) {
			o.push("M", n, ",", t, i)
		}
		function t(n, t) {
			o.push("M", n, ",", t), a.point = e
		}
		function e(n, t) {
			o.push("L", n, ",", t)
		}
		function r() {
			a.point = n
		}
		function u() {
			o.push("Z")
		}
		var i = Be(4.5),
			o = [],
			a = {
				point: n,
				lineStart: function() {
					a.point = t
				},
				lineEnd: r,
				polygonStart: function() {
					a.lineEnd = u
				},
				polygonEnd: function() {
					a.lineEnd = r, a.point = n
				},
				pointRadius: function(n) {
					return i = Be(n), a
				},
				result: function() {
					if (o.length) {
						var n = o.join("");
						return o = [], n
					}
				}
			};
		return a
	}
	function Be(n) {
		return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
	}
	function We(n, t) {
		_c += n, wc += t, ++Sc
	}
	function Je() {
		function n(n, r) {
			var u = n - t,
				i = r - e,
				o = Math.sqrt(u * u + i * i);
			kc += o * (t + n) / 2, Ec += o * (e + r) / 2, Ac += o, We(t = n, e = r)
		}
		var t, e;
		Ic.point = function(r, u) {
			Ic.point = n, We(t = r, e = u)
		}
	}
	function Ge() {
		Ic.point = We
	}
	function Ke() {
		function n(n, t) {
			var e = n - r,
				i = t - u,
				o = Math.sqrt(e * e + i * i);
			kc += o * (r + n) / 2, Ec += o * (u + t) / 2, Ac += o, o = u * n - r * t, Nc += o * (r + n), Cc += o * (u + t), zc += 3 * o, We(r = n, u = t)
		}
		var t, e, r, u;
		Ic.point = function(i, o) {
			Ic.point = n, We(t = r = i, e = u = o)
		}, Ic.lineEnd = function() {
			n(t, e)
		}
	}
	function Qe(n) {
		function t(t, e) {
			n.moveTo(t + o, e), n.arc(t, e, o, 0, La)
		}
		function e(t, e) {
			n.moveTo(t, e), a.point = r
		}
		function r(t, e) {
			n.lineTo(t, e)
		}
		function u() {
			a.point = t
		}
		function i() {
			n.closePath()
		}
		var o = 4.5,
			a = {
				point: t,
				lineStart: function() {
					a.point = e
				},
				lineEnd: u,
				polygonStart: function() {
					a.lineEnd = i
				},
				polygonEnd: function() {
					a.lineEnd = u, a.point = t
				},
				pointRadius: function(n) {
					return o = n, a
				},
				result: b
			};
		return a
	}
	function nr(n) {
		function t(n) {
			return (a ? r : e)(n)
		}
		function e(t) {
			return rr(t, function(e, r) {
				e = n(e, r), t.point(e[0], e[1])
			})
		}
		function r(t) {
			function e(e, r) {
				e = n(e, r), t.point(e[0], e[1])
			}
			function r() {
				M = 0 / 0, S.point = i, t.lineStart()
			}
			function i(e, r) {
				var i = pe([e, r]),
					o = n(e, r);
				u(M, x, y, b, _, w, M = o[0], x = o[1], y = e, b = i[0], _ = i[1], w = i[2], a, t), t.point(M, x)
			}
			function o() {
				S.point = e, t.lineEnd()
			}
			function c() {
				r(), S.point = l, S.lineEnd = s
			}
			function l(n, t) {
				i(f = n, h = t), g = M, p = x, v = b, d = _, m = w, S.point = i
			}
			function s() {
				u(M, x, y, b, _, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o()
			}
			var f, h, g, p, v, d, m, y, M, x, b, _, w, S = {
				point: e,
				lineStart: r,
				lineEnd: o,
				polygonStart: function() {
					t.polygonStart(), S.lineStart = c
				},
				polygonEnd: function() {
					t.polygonEnd(), S.lineStart = r
				}
			};
			return S
		}
		function u(t, e, r, a, c, l, s, f, h, g, p, v, d, m) {
			var y = s - t,
				M = f - e,
				x = y * y + M * M;
			if (x > 4 * i && d--) {
				var b = a + g,
					_ = c + p,
					w = l + v,
					S = Math.sqrt(b * b + _ * _ + w * w),
					k = Math.asin(w /= S),
					E = ga(ga(w) - 1) < Ca || ga(r - h) < Ca ? (r + h) / 2 : Math.atan2(_, b),
					A = n(E, k),
					N = A[0],
					C = A[1],
					z = N - t,
					q = C - e,
					L = M * z - y * q;
				(L * L / x > i || ga((y * z + M * q) / x - .5) > .3 || o > a * g + c * p + l * v) && (u(t, e, r, a, c, l, N, C, E, b /= S, _ /= S, w, d, m), m.point(N, C), u(N, C, E, b, _, w, s, f, h, g, p, v, d, m))
			}
		}
		var i = .5,
			o = Math.cos(30 * Da),
			a = 16;
		return t.precision = function(n) {
			return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
		}, t
	}
	function tr(n) {
		var t = nr(function(t, e) {
			return n([t * Pa, e * Pa])
		});
		return function(n) {
			return or(t(n))
		}
	}
	function er(n) {
		this.stream = n
	}
	function rr(n, t) {
		return {
			point: t,
			sphere: function() {
				n.sphere()
			},
			lineStart: function() {
				n.lineStart()
			},
			lineEnd: function() {
				n.lineEnd()
			},
			polygonStart: function() {
				n.polygonStart()
			},
			polygonEnd: function() {
				n.polygonEnd()
			}
		}
	}
	function ur(n) {
		return ir(function() {
			return n
		})()
	}
	function ir(n) {
		function t(n) {
			return n = a(n[0] * Da, n[1] * Da), [n[0] * h + c, l - n[1] * h]
		}
		function e(n) {
			return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * Pa, n[1] * Pa]
		}
		function r() {
			a = Ae(o = lr(m, M, x), i);
			var n = i(v, d);
			return c = g - n[0] * h, l = p + n[1] * h, u()
		}
		function u() {
			return s && (s.valid = !1, s = null), t
		}
		var i, o, a, c, l, s, f = nr(function(n, t) {
			return n = i(n, t), [n[0] * h + c, l - n[1] * h]
		}),
			h = 150,
			g = 480,
			p = 250,
			v = 0,
			d = 0,
			m = 0,
			M = 0,
			x = 0,
			b = Lc,
			_ = y,
			w = null,
			S = null;
		return t.stream = function(n) {
			return s && (s.valid = !1), s = or(b(o, f(_(n)))), s.valid = !0, s
		}, t.clipAngle = function(n) {
			return arguments.length ? (b = null == n ? (w = n, Lc) : He((w = +n) * Da), u()) : w
		}, t.clipExtent = function(n) {
			return arguments.length ? (S = n, _ = n ? Ie(n[0][0], n[0][1], n[1][0], n[1][1]) : y, u()) : S
		}, t.scale = function(n) {
			return arguments.length ? (h = +n, r()) : h
		}, t.translate = function(n) {
			return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
		}, t.center = function(n) {
			return arguments.length ? (v = n[0] % 360 * Da, d = n[1] % 360 * Da, r()) : [v * Pa, d * Pa]
		}, t.rotate = function(n) {
			return arguments.length ? (m = n[0] % 360 * Da, M = n[1] % 360 * Da, x = n.length > 2 ? n[2] % 360 * Da : 0, r()) : [m * Pa, M * Pa, x * Pa]
		}, ta.rebind(t, f, "precision"), function() {
			return i = n.apply(this, arguments), t.invert = i.invert && e, r()
		}
	}
	function or(n) {
		return rr(n, function(t, e) {
			n.point(t * Da, e * Da)
		})
	}
	function ar(n, t) {
		return [n, t]
	}
	function cr(n, t) {
		return [n > qa ? n - La : -qa > n ? n + La : n, t]
	}
	function lr(n, t, e) {
		return n ? t || e ? Ae(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr
	}
	function sr(n) {
		return function(t, e) {
			return t += n, [t > qa ? t - La : -qa > t ? t + La : t, e]
		}
	}
	function fr(n) {
		var t = sr(n);
		return t.invert = sr(-n), t
	}
	function hr(n, t) {
		function e(n, t) {
			var e = Math.cos(t),
				a = Math.cos(n) * e,
				c = Math.sin(n) * e,
				l = Math.sin(t),
				s = l * r + a * u;
			return [Math.atan2(c * i - s * o, a * r - l * u), tt(s * i + c * o)]
		}
		var r = Math.cos(n),
			u = Math.sin(n),
			i = Math.cos(t),
			o = Math.sin(t);
		return e.invert = function(n, t) {
			var e = Math.cos(t),
				a = Math.cos(n) * e,
				c = Math.sin(n) * e,
				l = Math.sin(t),
				s = l * i - c * o;
			return [Math.atan2(c * i + l * o, a * r + s * u), tt(s * r - a * u)]
		}, e
	}
	function gr(n, t) {
		var e = Math.cos(n),
			r = Math.sin(n);
		return function(u, i, o, a) {
			var c = o * t;
			null != u ? (u = pr(e, u), i = pr(e, i), (o > 0 ? i > u : u > i) && (u += o * La)) : (u = n + o * La, i = n - .5 * c);
			for (var l, s = u; o > 0 ? s > i : i > s; s -= c) a.point((l = xe([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1])
		}
	}
	function pr(n, t) {
		var e = pe(t);
		e[0] -= n, Me(e);
		var r = nt(-e[1]);
		return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ca) % (2 * Math.PI)
	}
	function vr(n, t, e) {
		var r = ta.range(n, t - Ca, e).concat(t);
		return function(n) {
			return r.map(function(t) {
				return [n, t]
			})
		}
	}
	function dr(n, t, e) {
		var r = ta.range(n, t - Ca, e).concat(t);
		return function(n) {
			return r.map(function(t) {
				return [t, n]
			})
		}
	}
	function mr(n) {
		return n.source
	}
	function yr(n) {
		return n.target
	}
	function Mr(n, t, e, r) {
		var u = Math.cos(t),
			i = Math.sin(t),
			o = Math.cos(r),
			a = Math.sin(r),
			c = u * Math.cos(n),
			l = u * Math.sin(n),
			s = o * Math.cos(e),
			f = o * Math.sin(e),
			h = 2 * Math.asin(Math.sqrt(it(r - t) + u * o * it(e - n))),
			g = 1 / Math.sin(h),
			p = h ?
		function(n) {
			var t = Math.sin(n *= h) * g,
				e = Math.sin(h - n) * g,
				r = e * c + t * s,
				u = e * l + t * f,
				o = e * i + t * a;
			return [Math.atan2(u, r) * Pa, Math.atan2(o, Math.sqrt(r * r + u * u)) * Pa]
		} : function() {
			return [n * Pa, t * Pa]
		};
		return p.distance = h, p
	}
	function xr() {
		function n(n, u) {
			var i = Math.sin(u *= Da),
				o = Math.cos(u),
				a = ga((n *= Da) - t),
				c = Math.cos(a);
			Yc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
		}
		var t, e, r;
		Zc.point = function(u, i) {
			t = u * Da, e = Math.sin(i *= Da), r = Math.cos(i), Zc.point = n
		}, Zc.lineEnd = function() {
			Zc.point = Zc.lineEnd = b
		}
	}
	function br(n, t) {
		function e(t, e) {
			var r = Math.cos(t),
				u = Math.cos(e),
				i = n(r * u);
			return [i * u * Math.sin(t), i * Math.sin(e)]
		}
		return e.invert = function(n, e) {
			var r = Math.sqrt(n * n + e * e),
				u = t(r),
				i = Math.sin(u),
				o = Math.cos(u);
			return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
		}, e
	}
	function _r(n, t) {
		function e(n, t) {
			o > 0 ? -Ra + Ca > t && (t = -Ra + Ca) : t > Ra - Ca && (t = Ra - Ca);
			var e = o / Math.pow(u(t), i);
			return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
		}
		var r = Math.cos(n),
			u = function(n) {
				return Math.tan(qa / 4 + n / 2)
			},
			i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
			o = r * Math.pow(u(n), i) / i;
		return i ? (e.invert = function(n, t) {
			var e = o - t,
				r = K(i) * Math.sqrt(n * n + e * e);
			return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Ra]
		}, e) : Sr
	}
	function wr(n, t) {
		function e(n, t) {
			var e = i - t;
			return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
		}
		var r = Math.cos(n),
			u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
			i = r / u + n;
		return ga(u) < Ca ? ar : (e.invert = function(n, t) {
			var e = i - t;
			return [Math.atan2(n, e) / u, i - K(u) * Math.sqrt(n * n + e * e)]
		}, e)
	}
	function Sr(n, t) {
		return [n, Math.log(Math.tan(qa / 4 + t / 2))]
	}
	function kr(n) {
		var t, e = ur(n),
			r = e.scale,
			u = e.translate,
			i = e.clipExtent;
		return e.scale = function() {
			var n = r.apply(e, arguments);
			return n === e ? t ? e.clipExtent(null) : e : n
		}, e.translate = function() {
			var n = u.apply(e, arguments);
			return n === e ? t ? e.clipExtent(null) : e : n
		}, e.clipExtent = function(n) {
			var o = i.apply(e, arguments);
			if (o === e) {
				if (t = null == n) {
					var a = qa * r(),
						c = u();
					i([
						[c[0] - a, c[1] - a],
						[c[0] + a, c[1] + a]
					])
				}
			} else t && (o = null);
			return o
		}, e.clipExtent(null)
	}
	function Er(n, t) {
		return [Math.log(Math.tan(qa / 4 + t / 2)), -n]
	}
	function Ar(n) {
		return n[0]
	}
	function Nr(n) {
		return n[1]
	}
	function Cr(n) {
		for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
			for (; r > 1 && Q(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)--r;
			e[r++] = u
		}
		return e.slice(0, r)
	}
	function zr(n, t) {
		return n[0] - t[0] || n[1] - t[1]
	}
	function qr(n, t, e) {
		return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
	}
	function Lr(n, t, e, r) {
		var u = n[0],
			i = e[0],
			o = t[0] - u,
			a = r[0] - i,
			c = n[1],
			l = e[1],
			s = t[1] - c,
			f = r[1] - l,
			h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
		return [u + h * o, c + h * s]
	}
	function Tr(n) {
		var t = n[0],
			e = n[n.length - 1];
		return !(t[0] - e[0] || t[1] - e[1])
	}
	function Rr() {
		tu(this), this.edge = this.site = this.circle = null
	}
	function Dr(n) {
		var t = el.pop() || new Rr;
		return t.site = n, t
	}
	function Pr(n) {
		Xr(n), Qc.remove(n), el.push(n), tu(n)
	}
	function Ur(n) {
		var t = n.circle,
			e = t.x,
			r = t.cy,
			u = {
				x: e,
				y: r
			},
			i = n.P,
			o = n.N,
			a = [n];
		Pr(n);
		for (var c = i; c.circle && ga(e - c.circle.x) < Ca && ga(r - c.circle.cy) < Ca;) i = c.P, a.unshift(c), Pr(c), c = i;
		a.unshift(c), Xr(c);
		for (var l = o; l.circle && ga(e - l.circle.x) < Ca && ga(r - l.circle.cy) < Ca;) o = l.N, a.push(l), Pr(l), l = o;
		a.push(l), Xr(l);
		var s, f = a.length;
		for (s = 1; f > s; ++s) l = a[s], c = a[s - 1], Kr(l.edge, c.site, l.site, u);
		c = a[0], l = a[f - 1], l.edge = Jr(c.site, l.site, null, u), Vr(c), Vr(l)
	}
	function jr(n) {
		for (var t, e, r, u, i = n.x, o = n.y, a = Qc._; a;) if (r = Fr(a, o) - i, r > Ca) a = a.L;
		else {
			if (u = i - Hr(a, o), !(u > Ca)) {
				r > -Ca ? (t = a.P, e = a) : u > -Ca ? (t = a, e = a.N) : t = e = a;
				break
			}
			if (!a.R) {
				t = a;
				break
			}
			a = a.R
		}
		var c = Dr(n);
		if (Qc.insert(t, c), t || e) {
			if (t === e) return Xr(t), e = Dr(t.site), Qc.insert(c, e), c.edge = e.edge = Jr(t.site, c.site), Vr(t), void Vr(e);
			if (!e) return void(c.edge = Jr(t.site, c.site));
			Xr(t), Xr(e);
			var l = t.site,
				s = l.x,
				f = l.y,
				h = n.x - s,
				g = n.y - f,
				p = e.site,
				v = p.x - s,
				d = p.y - f,
				m = 2 * (h * d - g * v),
				y = h * h + g * g,
				M = v * v + d * d,
				x = {
					x: (d * y - g * M) / m + s,
					y: (h * M - v * y) / m + f
				};
			Kr(e.edge, l, p, x), c.edge = Jr(l, n, null, x), e.edge = Jr(n, p, null, x), Vr(t), Vr(e)
		}
	}
	function Fr(n, t) {
		var e = n.site,
			r = e.x,
			u = e.y,
			i = u - t;
		if (!i) return r;
		var o = n.P;
		if (!o) return -1 / 0;
		e = o.site;
		var a = e.x,
			c = e.y,
			l = c - t;
		if (!l) return a;
		var s = a - r,
			f = 1 / i - 1 / l,
			h = s / l;
		return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + r : (r + a) / 2
	}
	function Hr(n, t) {
		var e = n.N;
		if (e) return Fr(e, t);
		var r = n.site;
		return r.y === t ? r.x : 1 / 0
	}
	function Or(n) {
		this.site = n, this.edges = []
	}
	function Ir(n) {
		for (var t, e, r, u, i, o, a, c, l, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Kc, d = v.length; d--;) if (i = v[d], i && i.prepare()) for (a = i.edges, c = a.length, o = 0; c > o;) s = a[o].end(), r = s.x, u = s.y, l = a[++o % c].start(), t = l.x, e = l.y, (ga(r - t) > Ca || ga(u - e) > Ca) && (a.splice(o, 0, new Qr(Gr(i.site, s, ga(r - f) < Ca && p - u > Ca ? {
			x: f,
			y: ga(t - f) < Ca ? e : p
		} : ga(u - p) < Ca && h - r > Ca ? {
			x: ga(e - p) < Ca ? t : h,
			y: p
		} : ga(r - h) < Ca && u - g > Ca ? {
			x: h,
			y: ga(t - h) < Ca ? e : g
		} : ga(u - g) < Ca && r - f > Ca ? {
			x: ga(e - g) < Ca ? t : f,
			y: g
		} : null), i.site, null)), ++c)
	}
	function Yr(n, t) {
		return t.angle - n.angle
	}
	function Zr() {
		tu(this), this.x = this.y = this.arc = this.site = this.cy = null
	}
	function Vr(n) {
		var t = n.P,
			e = n.N;
		if (t && e) {
			var r = t.site,
				u = n.site,
				i = e.site;
			if (r !== i) {
				var o = u.x,
					a = u.y,
					c = r.x - o,
					l = r.y - a,
					s = i.x - o,
					f = i.y - a,
					h = 2 * (c * f - l * s);
				if (!(h >= -za)) {
					var g = c * c + l * l,
						p = s * s + f * f,
						v = (f * g - l * p) / h,
						d = (c * p - s * g) / h,
						f = d + a,
						m = rl.pop() || new Zr;
					m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
					for (var y = null, M = tl._; M;) if (m.y < M.y || m.y === M.y && m.x <= M.x) {
						if (!M.L) {
							y = M.P;
							break
						}
						M = M.L
					} else {
						if (!M.R) {
							y = M;
							break
						}
						M = M.R
					}
					tl.insert(y, m), y || (nl = m)
				}
			}
		}
	}
	function Xr(n) {
		var t = n.circle;
		t && (t.P || (nl = t.N), tl.remove(t), rl.push(t), tu(t), n.circle = null)
	}
	function $r(n) {
		for (var t, e = Gc, r = Oe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;) t = e[u], (!Br(t, n) || !r(t) || ga(t.a.x - t.b.x) < Ca && ga(t.a.y - t.b.y) < Ca) && (t.a = t.b = null, e.splice(u, 1))
	}
	function Br(n, t) {
		var e = n.b;
		if (e) return !0;
		var r, u, i = n.a,
			o = t[0][0],
			a = t[1][0],
			c = t[0][1],
			l = t[1][1],
			s = n.l,
			f = n.r,
			h = s.x,
			g = s.y,
			p = f.x,
			v = f.y,
			d = (h + p) / 2,
			m = (g + v) / 2;
		if (v === g) {
			if (o > d || d >= a) return;
			if (h > p) {
				if (i) {
					if (i.y >= l) return
				} else i = {
					x: d,
					y: c
				};
				e = {
					x: d,
					y: l
				}
			} else {
				if (i) {
					if (i.y < c) return
				} else i = {
					x: d,
					y: l
				};
				e = {
					x: d,
					y: c
				}
			}
		} else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1) if (h > p) {
			if (i) {
				if (i.y >= l) return
			} else i = {
				x: (c - u) / r,
				y: c
			};
			e = {
				x: (l - u) / r,
				y: l
			}
		} else {
			if (i) {
				if (i.y < c) return
			} else i = {
				x: (l - u) / r,
				y: l
			};
			e = {
				x: (c - u) / r,
				y: c
			}
		} else if (v > g) {
			if (i) {
				if (i.x >= a) return
			} else i = {
				x: o,
				y: r * o + u
			};
			e = {
				x: a,
				y: r * a + u
			}
		} else {
			if (i) {
				if (i.x < o) return
			} else i = {
				x: a,
				y: r * a + u
			};
			e = {
				x: o,
				y: r * o + u
			}
		}
		return n.a = i, n.b = e, !0
	}
	function Wr(n, t) {
		this.l = n, this.r = t, this.a = this.b = null
	}
	function Jr(n, t, e, r) {
		var u = new Wr(n, t);
		return Gc.push(u), e && Kr(u, n, t, e), r && Kr(u, t, n, r), Kc[n.i].edges.push(new Qr(u, n, t)), Kc[t.i].edges.push(new Qr(u, t, n)), u
	}
	function Gr(n, t, e) {
		var r = new Wr(n, null);
		return r.a = t, r.b = e, Gc.push(r), r
	}
	function Kr(n, t, e, r) {
		n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
	}
	function Qr(n, t, e) {
		var r = n.a,
			u = n.b;
		this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
	}
	function nu() {
		this._ = null
	}
	function tu(n) {
		n.U = n.C = n.L = n.R = n.P = n.N = null
	}
	function eu(n, t) {
		var e = t,
			r = t.R,
			u = e.U;
		u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
	}
	function ru(n, t) {
		var e = t,
			r = t.L,
			u = e.U;
		u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
	}
	function uu(n) {
		for (; n.L;) n = n.L;
		return n
	}
	function iu(n, t) {
		var e, r, u, i = n.sort(ou).pop();
		for (Gc = [], Kc = new Array(n.length), Qc = new nu, tl = new nu;;) if (u = nl, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== e || i.y !== r) && (Kc[i.i] = new Or(i), jr(i), e = i.x, r = i.y), i = n.pop();
		else {
			if (!u) break;
			Ur(u.arc)
		}
		t && ($r(t), Ir(t));
		var o = {
			cells: Kc,
			edges: Gc
		};
		return Qc = tl = Gc = Kc = null, o
	}
	function ou(n, t) {
		return t.y - n.y || t.x - n.x
	}
	function au(n, t, e) {
		return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
	}
	function cu(n) {
		return n.x
	}
	function lu(n) {
		return n.y
	}
	function su() {
		return {
			leaf: !0,
			nodes: [],
			point: null,
			x: null,
			y: null
		}
	}
	function fu(n, t, e, r, u, i) {
		if (!n(t, e, r, u, i)) {
			var o = .5 * (e + u),
				a = .5 * (r + i),
				c = t.nodes;
			c[0] && fu(n, c[0], e, r, o, a), c[1] && fu(n, c[1], o, r, u, a), c[2] && fu(n, c[2], e, a, o, i), c[3] && fu(n, c[3], o, a, u, i)
		}
	}
	function hu(n, t, e, r, u, i, o) {
		var a, c = 1 / 0;
		return function l(n, s, f, h, g) {
			if (!(s > i || f > o || r > h || u > g)) {
				if (p = n.point) {
					var p, v = t - n.x,
						d = e - n.y,
						m = v * v + d * d;
					if (c > m) {
						var y = Math.sqrt(c = m);
						r = t - y, u = e - y, i = t + y, o = e + y, a = p
					}
				}
				for (var M = n.nodes, x = .5 * (s + h), b = .5 * (f + g), _ = t >= x, w = e >= b, S = w << 1 | _, k = S + 4; k > S; ++S) if (n = M[3 & S]) switch (3 & S) {
				case 0:
					l(n, s, f, x, b);
					break;
				case 1:
					l(n, x, f, h, b);
					break;
				case 2:
					l(n, s, b, x, g);
					break;
				case 3:
					l(n, x, b, h, g)
				}
			}
		}(n, r, u, i, o), a
	}
	function gu(n, t) {
		n = ta.rgb(n), t = ta.rgb(t);
		var e = n.r,
			r = n.g,
			u = n.b,
			i = t.r - e,
			o = t.g - r,
			a = t.b - u;
		return function(n) {
			return "#" + xt(Math.round(e + i * n)) + xt(Math.round(r + o * n)) + xt(Math.round(u + a * n))
		}
	}
	function pu(n, t) {
		var e, r = {},
			u = {};
		for (e in n) e in t ? r[e] = mu(n[e], t[e]) : u[e] = n[e];
		for (e in t) e in n || (u[e] = t[e]);
		return function(n) {
			for (e in r) u[e] = r[e](n);
			return u
		}
	}
	function vu(n, t) {
		return n = +n, t = +t, function(e) {
			return n * (1 - e) + t * e
		}
	}
	function du(n, t) {
		var e, r, u, i = il.lastIndex = ol.lastIndex = 0,
			o = -1,
			a = [],
			c = [];
		for (n += "", t += "";
		(e = il.exec(n)) && (r = ol.exec(t));)(u = r.index) > i && (u = t.slice(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
			i: o,
			x: vu(e, r)
		})), i = ol.lastIndex;
		return i < t.length && (u = t.slice(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function(n) {
			return t(n) + ""
		}) : function() {
			return t
		} : (t = c.length, function(n) {
			for (var e, r = 0; t > r; ++r) a[(e = c[r]).i] = e.x(n);
			return a.join("")
		})
	}
	function mu(n, t) {
		for (var e, r = ta.interpolators.length; --r >= 0 && !(e = ta.interpolators[r](n, t)););
		return e
	}
	function yu(n, t) {
		var e, r = [],
			u = [],
			i = n.length,
			o = t.length,
			a = Math.min(n.length, t.length);
		for (e = 0; a > e; ++e) r.push(mu(n[e], t[e]));
		for (; i > e; ++e) u[e] = n[e];
		for (; o > e; ++e) u[e] = t[e];
		return function(n) {
			for (e = 0; a > e; ++e) u[e] = r[e](n);
			return u
		}
	}
	function Mu(n) {
		return function(t) {
			return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
		}
	}
	function xu(n) {
		return function(t) {
			return 1 - n(1 - t)
		}
	}
	function bu(n) {
		return function(t) {
			return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
		}
	}
	function _u(n) {
		return n * n
	}
	function wu(n) {
		return n * n * n
	}
	function Su(n) {
		if (0 >= n) return 0;
		if (n >= 1) return 1;
		var t = n * n,
			e = t * n;
		return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
	}
	function ku(n) {
		return function(t) {
			return Math.pow(t, n)
		}
	}
	function Eu(n) {
		return 1 - Math.cos(n * Ra)
	}
	function Au(n) {
		return Math.pow(2, 10 * (n - 1))
	}
	function Nu(n) {
		return 1 - Math.sqrt(1 - n * n)
	}
	function Cu(n, t) {
		var e;
		return arguments.length < 2 && (t = .45), arguments.length ? e = t / La * Math.asin(1 / n) : (n = 1, e = t / 4), function(r) {
			return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * La / t)
		}
	}
	function zu(n) {
		return n || (n = 1.70158), function(t) {
			return t * t * ((n + 1) * t - n)
		}
	}
	function qu(n) {
		return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
	}
	function Lu(n, t) {
		n = ta.hcl(n), t = ta.hcl(t);
		var e = n.h,
			r = n.c,
			u = n.l,
			i = t.h - e,
			o = t.c - r,
			a = t.l - u;
		return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
			return st(e + i * n, r + o * n, u + a * n) + ""
		}
	}
	function Tu(n, t) {
		n = ta.hsl(n), t = ta.hsl(t);
		var e = n.h,
			r = n.s,
			u = n.l,
			i = t.h - e,
			o = t.s - r,
			a = t.l - u;
		return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
			return ct(e + i * n, r + o * n, u + a * n) + ""
		}
	}
	function Ru(n, t) {
		n = ta.lab(n), t = ta.lab(t);
		var e = n.l,
			r = n.a,
			u = n.b,
			i = t.l - e,
			o = t.a - r,
			a = t.b - u;
		return function(n) {
			return ht(e + i * n, r + o * n, u + a * n) + ""
		}
	}
	function Du(n, t) {
		return t -= n, function(e) {
			return Math.round(n + t * e)
		}
	}
	function Pu(n) {
		var t = [n.a, n.b],
			e = [n.c, n.d],
			r = ju(t),
			u = Uu(t, e),
			i = ju(Fu(e, t, -u)) || 0;
		t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Pa, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Pa : 0
	}
	function Uu(n, t) {
		return n[0] * t[0] + n[1] * t[1]
	}
	function ju(n) {
		var t = Math.sqrt(Uu(n, n));
		return t && (n[0] /= t, n[1] /= t), t
	}
	function Fu(n, t, e) {
		return n[0] += e * t[0], n[1] += e * t[1], n
	}
	function Hu(n, t) {
		var e, r = [],
			u = [],
			i = ta.transform(n),
			o = ta.transform(t),
			a = i.translate,
			c = o.translate,
			l = i.rotate,
			s = o.rotate,
			f = i.skew,
			h = o.skew,
			g = i.scale,
			p = o.scale;
		return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
			i: 1,
			x: vu(a[0], c[0])
		}, {
			i: 3,
			x: vu(a[1], c[1])
		})) : r.push(c[0] || c[1] ? "translate(" + c + ")" : ""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({
			i: r.push(r.pop() + "rotate(", null, ")") - 2,
			x: vu(l, s)
		})) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? u.push({
			i: r.push(r.pop() + "skewX(", null, ")") - 2,
			x: vu(f, h)
		}) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
			i: e - 4,
			x: vu(g[0], p[0])
		}, {
			i: e - 2,
			x: vu(g[1], p[1])
		})) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length, function(n) {
			for (var t, i = -1; ++i < e;) r[(t = u[i]).i] = t.x(n);
			return r.join("")
		}
	}
	function Ou(n, t) {
		return t = (t -= n = +n) || 1 / t, function(e) {
			return (e - n) / t
		}
	}
	function Iu(n, t) {
		return t = (t -= n = +n) || 1 / t, function(e) {
			return Math.max(0, Math.min(1, (e - n) / t))
		}
	}
	function Yu(n) {
		for (var t = n.source, e = n.target, r = Vu(t, e), u = [t]; t !== r;) t = t.parent, u.push(t);
		for (var i = u.length; e !== r;) u.splice(i, 0, e), e = e.parent;
		return u
	}
	function Zu(n) {
		for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
		return t.push(n), t
	}
	function Vu(n, t) {
		if (n === t) return n;
		for (var e = Zu(n), r = Zu(t), u = e.pop(), i = r.pop(), o = null; u === i;) o = u, u = e.pop(), i = r.pop();
		return o
	}
	function Xu(n) {
		n.fixed |= 2
	}
	function $u(n) {
		n.fixed &= -7
	}
	function Bu(n) {
		n.fixed |= 4, n.px = n.x, n.py = n.y
	}
	function Wu(n) {
		n.fixed &= -5
	}
	function Ju(n, t, e) {
		var r = 0,
			u = 0;
		if (n.charge = 0, !n.leaf) for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) i = o[c], null != i && (Ju(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
		if (n.point) {
			n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
			var l = t * e[n.point.index];
			n.charge += n.pointCharge = l, r += l * n.point.x, u += l * n.point.y
		}
		n.cx = r / n.charge, n.cy = u / n.charge
	}
	function Gu(n, t) {
		return ta.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ri, n
	}
	function Ku(n, t) {
		for (var e = [n]; null != (n = e.pop());) if (t(n), (u = n.children) && (r = u.length)) for (var r, u; --r >= 0;) e.push(u[r])
	}
	function Qu(n, t) {
		for (var e = [n], r = []; null != (n = e.pop());) if (r.push(n), (i = n.children) && (u = i.length)) for (var u, i, o = -1; ++o < u;) e.push(i[o]);
		for (; null != (n = r.pop());) t(n)
	}
	function ni(n) {
		return n.children
	}
	function ti(n) {
		return n.value
	}
	function ei(n, t) {
		return t.value - n.value
	}
	function ri(n) {
		return ta.merge(n.map(function(n) {
			return (n.children || []).map(function(t) {
				return {
					source: n,
					target: t
				}
			})
		}))
	}
	function ui(n) {
		return n.x
	}
	function ii(n) {
		return n.y
	}
	function oi(n, t, e) {
		n.y0 = t, n.y = e
	}
	function ai(n) {
		return ta.range(n.length)
	}
	function ci(n) {
		for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
		return r
	}
	function li(n) {
		for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
		return r
	}
	function si(n) {
		return n.reduce(fi, 0)
	}
	function fi(n, t) {
		return n + t[1]
	}
	function hi(n, t) {
		return gi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
	}
	function gi(n, t) {
		for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) i[e] = u * e + r;
		return i
	}
	function pi(n) {
		return [ta.min(n), ta.max(n)]
	}
	function vi(n, t) {
		return n.value - t.value
	}
	function di(n, t) {
		var e = n._pack_next;
		n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
	}
	function mi(n, t) {
		n._pack_next = t, t._pack_prev = n
	}
	function yi(n, t) {
		var e = t.x - n.x,
			r = t.y - n.y,
			u = n.r + t.r;
		return .999 * u * u > e * e + r * r
	}
	function Mi(n) {
		function t(n) {
			s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
		}
		if ((e = n.children) && (l = e.length)) {
			var e, r, u, i, o, a, c, l, s = 1 / 0,
				f = -1 / 0,
				h = 1 / 0,
				g = -1 / 0;
			if (e.forEach(xi), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2)) for (i = e[2], wi(r, u, i), t(i), di(r, i), r._pack_prev = i, di(i, u), u = r._pack_next, o = 3; l > o; o++) {
				wi(r, u, i = e[o]);
				var p = 0,
					v = 1,
					d = 1;
				for (a = u._pack_next; a !== u; a = a._pack_next, v++) if (yi(a, i)) {
					p = 1;
					break
				}
				if (1 == p) for (c = r._pack_prev; c !== a._pack_prev && !yi(c, i); c = c._pack_prev, d++);
				p ? (d > v || v == d && u.r < r.r ? mi(r, u = a) : mi(r = c, u), o--) : (di(r, i), u = i, t(i))
			}
			var m = (s + f) / 2,
				y = (h + g) / 2,
				M = 0;
			for (o = 0; l > o; o++) i = e[o], i.x -= m, i.y -= y, M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
			n.r = M, e.forEach(bi)
		}
	}
	function xi(n) {
		n._pack_next = n._pack_prev = n
	}
	function bi(n) {
		delete n._pack_next, delete n._pack_prev
	}
	function _i(n, t, e, r) {
		var u = n.children;
		if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u) for (var i = -1, o = u.length; ++i < o;) _i(u[i], t, e, r)
	}
	function wi(n, t, e) {
		var r = n.r + e.r,
			u = t.x - n.x,
			i = t.y - n.y;
		if (r && (u || i)) {
			var o = t.r + e.r,
				a = u * u + i * i;
			o *= o, r *= r;
			var c = .5 + (r - o) / (2 * a),
				l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
			e.x = n.x + c * u + l * i, e.y = n.y + c * i - l * u
		} else e.x = n.x + r, e.y = n.y
	}
	function Si(n, t) {
		return n.parent == t.parent ? 1 : 2
	}
	function ki(n) {
		var t = n.children;
		return t.length ? t[0] : n.t
	}
	function Ei(n) {
		var t, e = n.children;
		return (t = e.length) ? e[t - 1] : n.t
	}
	function Ai(n, t, e) {
		var r = e / (t.i - n.i);
		t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e
	}
	function Ni(n) {
		for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;) t = u[i], t.z += e, t.m += e, e += t.s + (r += t.c)
	}
	function Ci(n, t, e) {
		return n.a.parent === t.parent ? n.a : e
	}
	function zi(n) {
		return 1 + ta.max(n, function(n) {
			return n.y
		})
	}
	function qi(n) {
		return n.reduce(function(n, t) {
			return n + t.x
		}, 0) / n.length
	}
	function Li(n) {
		var t = n.children;
		return t && t.length ? Li(t[0]) : n
	}
	function Ti(n) {
		var t, e = n.children;
		return e && (t = e.length) ? Ti(e[t - 1]) : n
	}
	function Ri(n) {
		return {
			x: n.x,
			y: n.y,
			dx: n.dx,
			dy: n.dy
		}
	}
	function Di(n, t) {
		var e = n.x + t[3],
			r = n.y + t[0],
			u = n.dx - t[1] - t[3],
			i = n.dy - t[0] - t[2];
		return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
			x: e,
			y: r,
			dx: u,
			dy: i
		}
	}
	function Pi(n) {
		var t = n[0],
			e = n[n.length - 1];
		return e > t ? [t, e] : [e, t]
	}
	function Ui(n) {
		return n.rangeExtent ? n.rangeExtent() : Pi(n.range())
	}
	function ji(n, t, e, r) {
		var u = e(n[0], n[1]),
			i = r(t[0], t[1]);
		return function(n) {
			return i(u(n))
		}
	}
	function Fi(n, t) {
		var e, r = 0,
			u = n.length - 1,
			i = n[r],
			o = n[u];
		return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
	}
	function Hi(n) {
		return n ? {
			floor: function(t) {
				return Math.floor(t / n) * n
			},
			ceil: function(t) {
				return Math.ceil(t / n) * n
			}
		} : ml
	}
	function Oi(n, t, e, r) {
		var u = [],
			i = [],
			o = 0,
			a = Math.min(n.length, t.length) - 1;
		for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
		return function(t) {
			var e = ta.bisect(n, t, 1, a) - 1;
			return i[e](u[e](t))
		}
	}
	function Ii(n, t, e, r) {
		function u() {
			var u = Math.min(n.length, t.length) > 2 ? Oi : ji,
				c = r ? Iu : Ou;
			return o = u(n, t, c, e), a = u(t, n, c, mu), i
		}
		function i(n) {
			return o(n)
		}
		var o, a;
		return i.invert = function(n) {
			return a(n)
		}, i.domain = function(t) {
			return arguments.length ? (n = t.map(Number), u()) : n
		}, i.range = function(n) {
			return arguments.length ? (t = n, u()) : t
		}, i.rangeRound = function(n) {
			return i.range(n).interpolate(Du)
		}, i.clamp = function(n) {
			return arguments.length ? (r = n, u()) : r
		}, i.interpolate = function(n) {
			return arguments.length ? (e = n, u()) : e
		}, i.ticks = function(t) {
			return Xi(n, t)
		}, i.tickFormat = function(t, e) {
			return $i(n, t, e)
		}, i.nice = function(t) {
			return Zi(n, t), u()
		}, i.copy = function() {
			return Ii(n, t, e, r)
		}, u()
	}
	function Yi(n, t) {
		return ta.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
	}
	function Zi(n, t) {
		return Fi(n, Hi(Vi(n, t)[2]))
	}
	function Vi(n, t) {
		null == t && (t = 10);
		var e = Pi(n),
			r = e[1] - e[0],
			u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
			i = t / r * u;
		return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
	}
	function Xi(n, t) {
		return ta.range.apply(ta, Vi(n, t))
	}
	function $i(n, t, e) {
		var r = Vi(n, t);
		if (e) {
			var u = ic.exec(e);
			if (u.shift(), "s" === u[8]) {
				var i = ta.formatPrefix(Math.max(ga(r[0]), ga(r[1])));
				return u[7] || (u[7] = "." + Bi(i.scale(r[2]))), u[8] = "f", e = ta.format(u.join("")), function(n) {
					return e(i.scale(n)) + i.symbol
				}
			}
			u[7] || (u[7] = "." + Wi(u[8], r)), e = u.join("")
		} else e = ",." + Bi(r[2]) + "f";
		return ta.format(e)
	}
	function Bi(n) {
		return -Math.floor(Math.log(n) / Math.LN10 + .01)
	}
	function Wi(n, t) {
		var e = Bi(t[2]);
		return n in yl ? Math.abs(e - Bi(Math.max(ga(t[0]), ga(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
	}
	function Ji(n, t, e, r) {
		function u(n) {
			return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
		}
		function i(n) {
			return e ? Math.pow(t, n) : -Math.pow(t, -n)
		}
		function o(t) {
			return n(u(t))
		}
		return o.invert = function(t) {
			return i(n.invert(t))
		}, o.domain = function(t) {
			return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r
		}, o.base = function(e) {
			return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
		}, o.nice = function() {
			var t = Fi(r.map(u), e ? Math : xl);
			return n.domain(t), r = t.map(i), o
		}, o.ticks = function() {
			var n = Pi(r),
				o = [],
				a = n[0],
				c = n[1],
				l = Math.floor(u(a)),
				s = Math.ceil(u(c)),
				f = t % 1 ? 2 : t;
			if (isFinite(s - l)) {
				if (e) {
					for (; s > l; l++) for (var h = 1; f > h; h++) o.push(i(l) * h);
					o.push(i(l))
				} else for (o.push(i(l)); l++ < s;) for (var h = f - 1; h > 0; h--) o.push(i(l) * h);
				for (l = 0; o[l] < a; l++);
				for (s = o.length; o[s - 1] > c; s--);
				o = o.slice(l, s)
			}
			return o
		}, o.tickFormat = function(n, t) {
			if (!arguments.length) return Ml;
			arguments.length < 2 ? t = Ml : "function" != typeof t && (t = ta.format(t));
			var r, a = Math.max(.1, n / o.ticks().length),
				c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
			return function(n) {
				return n / i(c(u(n) + r)) <= a ? t(n) : ""
			}
		}, o.copy = function() {
			return Ji(n.copy(), t, e, r)
		}, Yi(o, n)
	}
	function Gi(n, t, e) {
		function r(t) {
			return n(u(t))
		}
		var u = Ki(t),
			i = Ki(1 / t);
		return r.invert = function(t) {
			return i(n.invert(t))
		}, r.domain = function(t) {
			return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
		}, r.ticks = function(n) {
			return Xi(e, n)
		}, r.tickFormat = function(n, t) {
			return $i(e, n, t)
		}, r.nice = function(n) {
			return r.domain(Zi(e, n))
		}, r.exponent = function(o) {
			return arguments.length ? (u = Ki(t = o), i = Ki(1 / t), n.domain(e.map(u)), r) : t
		}, r.copy = function() {
			return Gi(n.copy(), t, e)
		}, Yi(r, n)
	}
	function Ki(n) {
		return function(t) {
			return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
		}
	}
	function Qi(n, t) {
		function e(e) {
			return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]
		}
		function r(t, e) {
			return ta.range(n.length).map(function(n) {
				return t + e * n
			})
		}
		var u, i, o;
		return e.domain = function(r) {
			if (!arguments.length) return n;
			n = [], u = new l;
			for (var i, o = -1, a = r.length; ++o < a;) u.has(i = r[o]) || u.set(i, n.push(i));
			return e[t.t].apply(e, t.a)
		}, e.range = function(n) {
			return arguments.length ? (i = n, o = 0, t = {
				t: "range",
				a: arguments
			}, e) : i
		}, e.rangePoints = function(u, a) {
			arguments.length < 2 && (a = 0);
			var c = u[0],
				l = u[1],
				s = n.length < 2 ? (c = (c + l) / 2, 0) : (l - c) / (n.length - 1 + a);
			return i = r(c + s * a / 2, s), o = 0, t = {
				t: "rangePoints",
				a: arguments
			}, e
		}, e.rangeRoundPoints = function(u, a) {
			arguments.length < 2 && (a = 0);
			var c = u[0],
				l = u[1],
				s = n.length < 2 ? (c = l = Math.round((c + l) / 2), 0) : (l - c) / (n.length - 1 + a) | 0;
			return i = r(c + Math.round(s * a / 2 + (l - c - (n.length - 1 + a) * s) / 2), s), o = 0, t = {
				t: "rangeRoundPoints",
				a: arguments
			}, e
		}, e.rangeBands = function(u, a, c) {
			arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
			var l = u[1] < u[0],
				s = u[l - 0],
				f = u[1 - l],
				h = (f - s) / (n.length - a + 2 * c);
			return i = r(s + h * c, h), l && i.reverse(), o = h * (1 - a), t = {
				t: "rangeBands",
				a: arguments
			}, e
		}, e.rangeRoundBands = function(u, a, c) {
			arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
			var l = u[1] < u[0],
				s = u[l - 0],
				f = u[1 - l],
				h = Math.floor((f - s) / (n.length - a + 2 * c));
			return i = r(s + Math.round((f - s - (n.length - a) * h) / 2), h), l && i.reverse(), o = Math.round(h * (1 - a)), t = {
				t: "rangeRoundBands",
				a: arguments
			}, e
		}, e.rangeBand = function() {
			return o
		}, e.rangeExtent = function() {
			return Pi(t.a[0])
		}, e.copy = function() {
			return Qi(n, t)
		}, e.domain(n)
	}
	function no(n, t) {
		function i() {
			var e = 0,
				r = t.length;
			for (a = []; ++e < r;) a[e - 1] = ta.quantile(n, e / r);
			return o
		}
		function o(n) {
			return isNaN(n = +n) ? void 0 : t[ta.bisect(a, n)]
		}
		var a;
		return o.domain = function(t) {
			return arguments.length ? (n = t.map(r).filter(u).sort(e), i()) : n
		}, o.range = function(n) {
			return arguments.length ? (t = n, i()) : t
		}, o.quantiles = function() {
			return a
		}, o.invertExtent = function(e) {
			return e = t.indexOf(e), 0 > e ? [0 / 0, 0 / 0] : [e > 0 ? a[e - 1] : n[0], e < a.length ? a[e] : n[n.length - 1]]
		}, o.copy = function() {
			return no(n, t)
		}, i()
	}
	function to(n, t, e) {
		function r(t) {
			return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
		}
		function u() {
			return i = e.length / (t - n), o = e.length - 1, r
		}
		var i, o;
		return r.domain = function(e) {
			return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
		}, r.range = function(n) {
			return arguments.length ? (e = n, u()) : e
		}, r.invertExtent = function(t) {
			return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
		}, r.copy = function() {
			return to(n, t, e)
		}, u()
	}
	function eo(n, t) {
		function e(e) {
			return e >= e ? t[ta.bisect(n, e)] : void 0
		}
		return e.domain = function(t) {
			return arguments.length ? (n = t, e) : n
		}, e.range = function(n) {
			return arguments.length ? (t = n, e) : t
		}, e.invertExtent = function(e) {
			return e = t.indexOf(e), [n[e - 1], n[e]]
		}, e.copy = function() {
			return eo(n, t)
		}, e
	}
	function ro(n) {
		function t(n) {
			return +n
		}
		return t.invert = t, t.domain = t.range = function(e) {
			return arguments.length ? (n = e.map(t), t) : n
		}, t.ticks = function(t) {
			return Xi(n, t)
		}, t.tickFormat = function(t, e) {
			return $i(n, t, e)
		}, t.copy = function() {
			return ro(n)
		}, t
	}
	function uo() {
		return 0
	}
	function io(n) {
		return n.innerRadius
	}
	function oo(n) {
		return n.outerRadius
	}
	function ao(n) {
		return n.startAngle
	}
	function co(n) {
		return n.endAngle
	}
	function lo(n) {
		return n && n.padAngle
	}
	function so(n, t, e, r) {
		return (n - e) * t - (t - r) * n > 0 ? 0 : 1
	}
	function fo(n, t, e, r, u) {
		var i = n[0] - t[0],
			o = n[1] - t[1],
			a = (u ? r : -r) / Math.sqrt(i * i + o * o),
			c = a * o,
			l = -a * i,
			s = n[0] + c,
			f = n[1] + l,
			h = t[0] + c,
			g = t[1] + l,
			p = (s + h) / 2,
			v = (f + g) / 2,
			d = h - s,
			m = g - f,
			y = d * d + m * m,
			M = e - r,
			x = s * g - h * f,
			b = (0 > m ? -1 : 1) * Math.sqrt(M * M * y - x * x),
			_ = (x * m - d * b) / y,
			w = (-x * d - m * b) / y,
			S = (x * m + d * b) / y,
			k = (-x * d + m * b) / y,
			E = _ - p,
			A = w - v,
			N = S - p,
			C = k - v;
		return E * E + A * A > N * N + C * C && (_ = S, w = k), [
			[_ - c, w - l],
			[_ * e / M, w * e / M]
		]
	}
	function ho(n) {
		function t(t) {
			function o() {
				l.push("M", i(n(s), a))
			}
			for (var c, l = [], s = [], f = -1, h = t.length, g = Et(e), p = Et(r); ++f < h;) u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(), s = []);
			return s.length && o(), l.length ? l.join("") : null
		}
		var e = Ar,
			r = Nr,
			u = Ne,
			i = go,
			o = i.key,
			a = .7;
		return t.x = function(n) {
			return arguments.length ? (e = n, t) : e
		}, t.y = function(n) {
			return arguments.length ? (r = n, t) : r
		}, t.defined = function(n) {
			return arguments.length ? (u = n, t) : u
		}, t.interpolate = function(n) {
			return arguments.length ? (o = "function" == typeof n ? i = n : (i = El.get(n) || go).key, t) : o
		}, t.tension = function(n) {
			return arguments.length ? (a = n, t) : a
		}, t
	}
	function go(n) {
		return n.join("L")
	}
	function po(n) {
		return go(n) + "Z"
	}
	function vo(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
		return e > 1 && u.push("H", r[0]), u.join("")
	}
	function mo(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("V", (r = n[t])[1], "H", r[0]);
		return u.join("")
	}
	function yo(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r = n[t])[0], "V", r[1]);
		return u.join("")
	}
	function Mo(n, t) {
		return n.length < 4 ? go(n) : n[1] + _o(n.slice(1, -1), wo(n, t))
	}
	function xo(n, t) {
		return n.length < 3 ? go(n) : n[0] + _o((n.push(n[0]), n), wo([n[n.length - 2]].concat(n, [n[1]]), t))
	}
	function bo(n, t) {
		return n.length < 3 ? go(n) : n[0] + _o(n, wo(n, t))
	}
	function _o(n, t) {
		if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return go(n);
		var e = n.length != t.length,
			r = "",
			u = n[0],
			i = n[1],
			o = t[0],
			a = o,
			c = 1;
		if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
			a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
			for (var l = 2; l < t.length; l++, c++) i = n[c], a = t[l], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
		}
		if (e) {
			var s = n[c];
			r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1]
		}
		return r
	}
	function wo(n, t) {
		for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
		return r
	}
	function So(n) {
		if (n.length < 3) return go(n);
		var t = 1,
			e = n.length,
			r = n[0],
			u = r[0],
			i = r[1],
			o = [u, u, u, (r = n[1])[0]],
			a = [i, i, i, r[1]],
			c = [u, ",", i, "L", No(Cl, o), ",", No(Cl, a)];
		for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Co(c, o, a);
		return n.pop(), c.push("L", r), c.join("")
	}
	function ko(n) {
		if (n.length < 4) return go(n);
		for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;) t = n[r], i.push(t[0]), o.push(t[1]);
		for (e.push(No(Cl, i) + "," + No(Cl, o)), --r; ++r < u;) t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Co(e, i, o);
		return e.join("")
	}
	function Eo(n) {
		for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;) e = n[r % u], o.push(e[0]), a.push(e[1]);
		for (t = [No(Cl, o), ",", No(Cl, a)], --r; ++r < i;) e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Co(t, o, a);
		return t.join("")
	}
	function Ao(n, t) {
		var e = n.length - 1;
		if (e) for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e;) r = n[l], u = l / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
		return So(n)
	}
	function No(n, t) {
		return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
	}
	function Co(n, t, e) {
		n.push("C", No(Al, t), ",", No(Al, e), ",", No(Nl, t), ",", No(Nl, e), ",", No(Cl, t), ",", No(Cl, e))
	}
	function zo(n, t) {
		return (t[1] - n[1]) / (t[0] - n[0])
	}
	function qo(n) {
		for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = zo(u, i); ++t < e;) r[t] = (o + (o = zo(u = i, i = n[t + 1]))) / 2;
		return r[t] = o, r
	}
	function Lo(n) {
		for (var t, e, r, u, i = [], o = qo(n), a = -1, c = n.length - 1; ++a < c;) t = zo(n[a], n[a + 1]), ga(t) < Ca ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
		for (a = -1; ++a <= c;) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
		return i
	}
	function To(n) {
		return n.length < 3 ? go(n) : n[0] + _o(n, Lo(n))
	}
	function Ro(n) {
		for (var t, e, r, u = -1, i = n.length; ++u < i;) t = n[u], e = t[0], r = t[1] - Ra, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
		return n
	}
	function Do(n) {
		function t(t) {
			function c() {
				v.push("M", a(n(m), f), s, l(n(d.reverse()), f), "Z")
			}
			for (var h, g, p, v = [], d = [], m = [], y = -1, M = t.length, x = Et(e), b = Et(u), _ = e === r ?
			function() {
				return g
			} : Et(r), w = u === i ?
			function() {
				return p
			} : Et(i); ++y < M;) o.call(this, h = t[y], y) ? (d.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), m.push([+_.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
			return d.length && c(), v.length ? v.join("") : null
		}
		var e = Ar,
			r = Ar,
			u = 0,
			i = Nr,
			o = Ne,
			a = go,
			c = a.key,
			l = a,
			s = "L",
			f = .7;
		return t.x = function(n) {
			return arguments.length ? (e = r = n, t) : r
		}, t.x0 = function(n) {
			return arguments.length ? (e = n, t) : e
		}, t.x1 = function(n) {
			return arguments.length ? (r = n, t) : r
		}, t.y = function(n) {
			return arguments.length ? (u = i = n, t) : i
		}, t.y0 = function(n) {
			return arguments.length ? (u = n, t) : u
		}, t.y1 = function(n) {
			return arguments.length ? (i = n, t) : i
		}, t.defined = function(n) {
			return arguments.length ? (o = n, t) : o
		}, t.interpolate = function(n) {
			return arguments.length ? (c = "function" == typeof n ? a = n : (a = El.get(n) || go).key, l = a.reverse || a, s = a.closed ? "M" : "L", t) : c
		}, t.tension = function(n) {
			return arguments.length ? (f = n, t) : f
		}, t
	}
	function Po(n) {
		return n.radius
	}
	function Uo(n) {
		return [n.x, n.y]
	}
	function jo(n) {
		return function() {
			var t = n.apply(this, arguments),
				e = t[0],
				r = t[1] - Ra;
			return [e * Math.cos(r), e * Math.sin(r)]
		}
	}
	function Fo() {
		return 64
	}
	function Ho() {
		return "circle"
	}
	function Oo(n) {
		var t = Math.sqrt(n / qa);
		return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
	}
	function Io(n) {
		return function() {
			var t, e;
			(t = this[n]) && (e = t[t.active]) && (--t.count ? delete t[t.active] : delete this[n], t.active += .5, e.event && e.event.interrupt.call(this, this.__data__, e.index))
		}
	}
	function Yo(n, t, e) {
		return ya(n, Pl), n.namespace = t, n.id = e, n
	}
	function Zo(n, t, e, r) {
		var u = n.id,
			i = n.namespace;
		return Y(n, "function" == typeof e ?
		function(n, o, a) {
			n[i][u].tween.set(t, r(e.call(n, n.__data__, o, a)))
		} : (e = r(e), function(n) {
			n[i][u].tween.set(t, e)
		}))
	}
	function Vo(n) {
		return null == n && (n = ""), function() {
			this.textContent = n
		}
	}
	function Xo(n) {
		return null == n ? "__transition__" : "__transition_" + n + "__"
	}
	function $o(n, t, e, r, u) {
		var i = n[e] || (n[e] = {
			active: 0,
			count: 0
		}),
			o = i[r];
		if (!o) {
			var a = u.time;
			o = i[r] = {
				tween: new l,
				time: a,
				delay: u.delay,
				duration: u.duration,
				ease: u.ease,
				index: t
			}, u = null, ++i.count, ta.timer(function(u) {
				function c(e) {
					if (i.active > r) return s();
					var u = i[i.active];
					u && (--i.count, delete i[i.active], u.event && u.event.interrupt.call(n, n.__data__, u.index)), i.active = r, o.event && o.event.start.call(n, n.__data__, t), o.tween.forEach(function(e, r) {
						(r = r.call(n, n.__data__, t)) && v.push(r)
					}), h = o.ease, f = o.duration, ta.timer(function() {
						return p.c = l(e || 1) ? Ne : l, 1
					}, 0, a)
				}
				function l(e) {
					if (i.active !== r) return 1;
					for (var u = e / f, a = h(u), c = v.length; c > 0;) v[--c].call(n, a);
					return u >= 1 ? (o.event && o.event.end.call(n, n.__data__, t), s()) : void 0
				}
				function s() {
					return --i.count ? delete i[r] : delete n[e], 1
				}
				var f, h, g = o.delay,
					p = ec,
					v = [];
				return p.t = g + a, u >= g ? c(u - g) : void(p.c = c)
			}, 0, a)
		}
	}
	function Bo(n, t, e) {
		n.attr("transform", function(n) {
			var r = t(n);
			return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"
		})
	}
	function Wo(n, t, e) {
		n.attr("transform", function(n) {
			var r = t(n);
			return "translate(0," + (isFinite(r) ? r : e(n)) + ")"
		})
	}
	function Jo(n) {
		return n.toISOString()
	}
	function Go(n, t, e) {
		function r(t) {
			return n(t)
		}
		function u(n, e) {
			var r = n[1] - n[0],
				u = r / e,
				i = ta.bisect(Vl, u);
			return i == Vl.length ? [t.year, Vi(n.map(function(n) {
				return n / 31536e6
			}), e)[2]] : i ? t[u / Vl[i - 1] < Vl[i] / u ? i - 1 : i] : [Bl, Vi(n, e)[2]]
		}
		return r.invert = function(t) {
			return Ko(n.invert(t))
		}, r.domain = function(t) {
			return arguments.length ? (n.domain(t), r) : n.domain().map(Ko)
		}, r.nice = function(n, t) {
			function e(e) {
				return !isNaN(e) && !n.range(e, Ko(+e + 1), t).length
			}
			var i = r.domain(),
				o = Pi(i),
				a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
			return a && (n = a[0], t = a[1]), r.domain(Fi(i, t > 1 ? {
				floor: function(t) {
					for (; e(t = n.floor(t));) t = Ko(t - 1);
					return t
				},
				ceil: function(t) {
					for (; e(t = n.ceil(t));) t = Ko(+t + 1);
					return t
				}
			} : n))
		}, r.ticks = function(n, t) {
			var e = Pi(r.domain()),
				i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
					range: n
				},
				t];
			return i && (n = i[0], t = i[1]), n.range(e[0], Ko(+e[1] + 1), 1 > t ? 1 : t)
		}, r.tickFormat = function() {
			return e
		}, r.copy = function() {
			return Go(n.copy(), t, e)
		}, Yi(r, n)
	}
	function Ko(n) {
		return new Date(n)
	}
	function Qo(n) {
		return JSON.parse(n.responseText)
	}
	function na(n) {
		var t = ua.createRange();
		return t.selectNode(ua.body), t.createContextualFragment(n.responseText)
	}
	var ta = {
		version: "3.5.6"
	},
		ea = [].slice,
		ra = function(n) {
			return ea.call(n)
		},
		ua = this.document;
	if (ua) try {
		ra(ua.documentElement.childNodes)[0].nodeType
	} catch (ia) {
		ra = function(n) {
			for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
			return e
		}
	}
	if (Date.now || (Date.now = function() {
		return +new Date
	}), ua) try {
		ua.createElement("DIV").style.setProperty("opacity", 0, "")
	} catch (oa) {
		var aa = this.Element.prototype,
			ca = aa.setAttribute,
			la = aa.setAttributeNS,
			sa = this.CSSStyleDeclaration.prototype,
			fa = sa.setProperty;
		aa.setAttribute = function(n, t) {
			ca.call(this, n, t + "")
		}, aa.setAttributeNS = function(n, t, e) {
			la.call(this, n, t, e + "")
		}, sa.setProperty = function(n, t, e) {
			fa.call(this, n, t + "", e)
		}
	}
	ta.ascending = e, ta.descending = function(n, t) {
		return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
	}, ta.min = function(n, t) {
		var e, r, u = -1,
			i = n.length;
		if (1 === arguments.length) {
			for (; ++u < i;) if (null != (r = n[u]) && r >= r) {
				e = r;
				break
			}
			for (; ++u < i;) null != (r = n[u]) && e > r && (e = r)
		} else {
			for (; ++u < i;) if (null != (r = t.call(n, n[u], u)) && r >= r) {
				e = r;
				break
			}
			for (; ++u < i;) null != (r = t.call(n, n[u], u)) && e > r && (e = r)
		}
		return e
	}, ta.max = function(n, t) {
		var e, r, u = -1,
			i = n.length;
		if (1 === arguments.length) {
			for (; ++u < i;) if (null != (r = n[u]) && r >= r) {
				e = r;
				break
			}
			for (; ++u < i;) null != (r = n[u]) && r > e && (e = r)
		} else {
			for (; ++u < i;) if (null != (r = t.call(n, n[u], u)) && r >= r) {
				e = r;
				break
			}
			for (; ++u < i;) null != (r = t.call(n, n[u], u)) && r > e && (e = r)
		}
		return e
	}, ta.extent = function(n, t) {
		var e, r, u, i = -1,
			o = n.length;
		if (1 === arguments.length) {
			for (; ++i < o;) if (null != (r = n[i]) && r >= r) {
				e = u = r;
				break
			}
			for (; ++i < o;) null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
		} else {
			for (; ++i < o;) if (null != (r = t.call(n, n[i], i)) && r >= r) {
				e = u = r;
				break
			}
			for (; ++i < o;) null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
		}
		return [e, u]
	}, ta.sum = function(n, t) {
		var e, r = 0,
			i = n.length,
			o = -1;
		if (1 === arguments.length) for (; ++o < i;) u(e = +n[o]) && (r += e);
		else for (; ++o < i;) u(e = +t.call(n, n[o], o)) && (r += e);
		return r
	}, ta.mean = function(n, t) {
		var e, i = 0,
			o = n.length,
			a = -1,
			c = o;
		if (1 === arguments.length) for (; ++a < o;) u(e = r(n[a])) ? i += e : --c;
		else for (; ++a < o;) u(e = r(t.call(n, n[a], a))) ? i += e : --c;
		return c ? i / c : void 0
	}, ta.quantile = function(n, t) {
		var e = (n.length - 1) * t + 1,
			r = Math.floor(e),
			u = +n[r - 1],
			i = e - r;
		return i ? u + i * (n[r] - u) : u
	}, ta.median = function(n, t) {
		var i, o = [],
			a = n.length,
			c = -1;
		if (1 === arguments.length) for (; ++c < a;) u(i = r(n[c])) && o.push(i);
		else for (; ++c < a;) u(i = r(t.call(n, n[c], c))) && o.push(i);
		return o.length ? ta.quantile(o.sort(e), .5) : void 0
	}, ta.variance = function(n, t) {
		var e, i, o = n.length,
			a = 0,
			c = 0,
			l = -1,
			s = 0;
		if (1 === arguments.length) for (; ++l < o;) u(e = r(n[l])) && (i = e - a, a += i / ++s, c += i * (e - a));
		else for (; ++l < o;) u(e = r(t.call(n, n[l], l))) && (i = e - a, a += i / ++s, c += i * (e - a));
		return s > 1 ? c / (s - 1) : void 0
	}, ta.deviation = function() {
		var n = ta.variance.apply(this, arguments);
		return n ? Math.sqrt(n) : n
	};
	var ha = i(e);
	ta.bisectLeft = ha.left, ta.bisect = ta.bisectRight = ha.right, ta.bisector = function(n) {
		return i(1 === n.length ?
		function(t, r) {
			return e(n(t), r)
		} : n)
	}, ta.shuffle = function(n, t, e) {
		(i = arguments.length) < 3 && (e = n.length, 2 > i && (t = 0));
		for (var r, u, i = e - t; i;) u = Math.random() * i-- | 0, r = n[i + t], n[i + t] = n[u + t], n[u + t] = r;
		return n
	}, ta.permute = function(n, t) {
		for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
		return r
	}, ta.pairs = function(n) {
		for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;) i[e] = [t = u, u = n[++e]];
		return i
	}, ta.zip = function() {
		if (!(r = arguments.length)) return [];
		for (var n = -1, t = ta.min(arguments, o), e = new Array(t); ++n < t;) for (var r, u = -1, i = e[n] = new Array(r); ++u < r;) i[u] = arguments[u][n];
		return e
	}, ta.transpose = function(n) {
		return ta.zip.apply(ta, n)
	}, ta.keys = function(n) {
		var t = [];
		for (var e in n) t.push(e);
		return t
	}, ta.values = function(n) {
		var t = [];
		for (var e in n) t.push(n[e]);
		return t
	}, ta.entries = function(n) {
		var t = [];
		for (var e in n) t.push({
			key: e,
			value: n[e]
		});
		return t
	}, ta.merge = function(n) {
		for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;) o += n[i].length;
		for (e = new Array(o); --u >= 0;) for (r = n[u], t = r.length; --t >= 0;) e[--o] = r[t];
		return e
	};
	var ga = Math.abs;
	ta.range = function(n, t, e) {
		if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e === 1 / 0) throw new Error("infinite range");
		var r, u = [],
			i = a(ga(e)),
			o = -1;
		if (n *= i, t *= i, e *= i, 0 > e) for (;
		(r = n + e * ++o) > t;) u.push(r / i);
		else for (;
		(r = n + e * ++o) < t;) u.push(r / i);
		return u
	}, ta.map = function(n, t) {
		var e = new l;
		if (n instanceof l) n.forEach(function(n, t) {
			e.set(n, t)
		});
		else if (Array.isArray(n)) {
			var r, u = -1,
				i = n.length;
			if (1 === arguments.length) for (; ++u < i;) e.set(u, n[u]);
			else for (; ++u < i;) e.set(t.call(n, r = n[u], u), r)
		} else for (var o in n) e.set(o, n[o]);
		return e
	};
	var pa = "__proto__",
		va = "\x00";
	c(l, {
		has: h,
		get: function(n) {
			return this._[s(n)]
		},
		set: function(n, t) {
			return this._[s(n)] = t
		},
		remove: g,
		keys: p,
		values: function() {
			var n = [];
			for (var t in this._) n.push(this._[t]);
			return n
		},
		entries: function() {
			var n = [];
			for (var t in this._) n.push({
				key: f(t),
				value: this._[t]
			});
			return n
		},
		size: v,
		empty: d,
		forEach: function(n) {
			for (var t in this._) n.call(this, f(t), this._[t])
		}
	}), ta.nest = function() {
		function n(t, o, a) {
			if (a >= i.length) return r ? r.call(u, o) : e ? o.sort(e) : o;
			for (var c, s, f, h, g = -1, p = o.length, v = i[a++], d = new l; ++g < p;)(h = d.get(c = v(s = o[g]))) ? h.push(s) : d.set(c, [s]);
			return t ? (s = t(), f = function(e, r) {
				s.set(e, n(t, r, a))
			}) : (s = {}, f = function(e, r) {
				s[e] = n(t, r, a)
			}), d.forEach(f), s
		}
		function t(n, e) {
			if (e >= i.length) return n;
			var r = [],
				u = o[e++];
			return n.forEach(function(n, u) {
				r.push({
					key: n,
					values: t(u, e)
				})
			}), u ? r.sort(function(n, t) {
				return u(n.key, t.key)
			}) : r
		}
		var e, r, u = {},
			i = [],
			o = [];
		return u.map = function(t, e) {
			return n(e, t, 0)
		}, u.entries = function(e) {
			return t(n(ta.map, e, 0), 0)
		}, u.key = function(n) {
			return i.push(n), u
		}, u.sortKeys = function(n) {
			return o[i.length - 1] = n, u
		}, u.sortValues = function(n) {
			return e = n, u
		}, u.rollup = function(n) {
			return r = n, u
		}, u
	}, ta.set = function(n) {
		var t = new m;
		if (n) for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
		return t
	}, c(m, {
		has: h,
		add: function(n) {
			return this._[s(n += "")] = !0, n
		},
		remove: g,
		values: p,
		size: v,
		empty: d,
		forEach: function(n) {
			for (var t in this._) n.call(this, f(t))
		}
	}), ta.behavior = {}, ta.rebind = function(n, t) {
		for (var e, r = 1, u = arguments.length; ++r < u;) n[e = arguments[r]] = M(n, t, t[e]);
		return n
	};
	var da = ["webkit", "ms", "moz", "Moz", "o", "O"];
	ta.dispatch = function() {
		for (var n = new _, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = w(n);
		return n
	}, _.prototype.on = function(n, t) {
		var e = n.indexOf("."),
			r = "";
		if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
		if (2 === arguments.length) {
			if (null == t) for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
			return this
		}
	}, ta.event = null, ta.requote = function(n) {
		return n.replace(ma, "\\$&")
	};
	var ma = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
		ya = {}.__proto__ ?
	function(n, t) {
		n.__proto__ = t
	} : function(n, t) {
		for (var e in t) n[e] = t[e]
	}, Ma = function(n, t) {
		return t.querySelector(n)
	}, xa = function(n, t) {
		return t.querySelectorAll(n)
	}, ba = function(n, t) {
		var e = n.matches || n[x(n, "matchesSelector")];
		return (ba = function(n, t) {
			return e.call(n, t)
		})(n, t)
	};
	"function" == typeof Sizzle && (Ma = function(n, t) {
		return Sizzle(n, t)[0] || null
	}, xa = Sizzle, ba = Sizzle.matchesSelector), ta.selection = function() {
		return ta.select(ua.documentElement)
	};
	var _a = ta.selection.prototype = [];
	_a.select = function(n) {
		var t, e, r, u, i = [];
		n = N(n);
		for (var o = -1, a = this.length; ++o < a;) {
			i.push(t = []), t.parentNode = (r = this[o]).parentNode;
			for (var c = -1, l = r.length; ++c < l;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
		}
		return A(i)
	}, _a.selectAll = function(n) {
		var t, e, r = [];
		n = C(n);
		for (var u = -1, i = this.length; ++u < i;) for (var o = this[u], a = -1, c = o.length; ++a < c;)(e = o[a]) && (r.push(t = ra(n.call(e, e.__data__, a, u))), t.parentNode = e);
		return A(r)
	};
	var wa = {
		svg: "http://www.w3.org/2000/svg",
		xhtml: "http://www.w3.org/1999/xhtml",
		xlink: "http://www.w3.org/1999/xlink",
		xml: "http://www.w3.org/XML/1998/namespace",
		xmlns: "http://www.w3.org/2000/xmlns/"
	};
	ta.ns = {
		prefix: wa,
		qualify: function(n) {
			var t = n.indexOf(":"),
				e = n;
			return t >= 0 && (e = n.slice(0, t), n = n.slice(t + 1)), wa.hasOwnProperty(e) ? {
				space: wa[e],
				local: n
			} : n
		}
	}, _a.attr = function(n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) {
				var e = this.node();
				return n = ta.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
			}
			for (t in n) this.each(z(t, n[t]));
			return this
		}
		return this.each(z(n, t))
	}, _a.classed = function(n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) {
				var e = this.node(),
					r = (n = T(n)).length,
					u = -1;
				if (t = e.classList) {
					for (; ++u < r;) if (!t.contains(n[u])) return !1
				} else for (t = e.getAttribute("class"); ++u < r;) if (!L(n[u]).test(t)) return !1;
				return !0
			}
			for (t in n) this.each(R(t, n[t]));
			return this
		}
		return this.each(R(n, t))
	}, _a.style = function(n, e, r) {
		var u = arguments.length;
		if (3 > u) {
			if ("string" != typeof n) {
				2 > u && (e = "");
				for (r in n) this.each(P(r, n[r], e));
				return this
			}
			if (2 > u) {
				var i = this.node();
				return t(i).getComputedStyle(i, null).getPropertyValue(n)
			}
			r = ""
		}
		return this.each(P(n, e, r))
	}, _a.property = function(n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) return this.node()[n];
			for (t in n) this.each(U(t, n[t]));
			return this
		}
		return this.each(U(n, t))
	}, _a.text = function(n) {
		return arguments.length ? this.each("function" == typeof n ?
		function() {
			var t = n.apply(this, arguments);
			this.textContent = null == t ? "" : t
		} : null == n ?
		function() {
			this.textContent = ""
		} : function() {
			this.textContent = n
		}) : this.node().textContent
	}, _a.html = function(n) {
		return arguments.length ? this.each("function" == typeof n ?
		function() {
			var t = n.apply(this, arguments);
			this.innerHTML = null == t ? "" : t
		} : null == n ?
		function() {
			this.innerHTML = ""
		} : function() {
			this.innerHTML = n
		}) : this.node().innerHTML
	}, _a.append = function(n) {
		return n = j(n), this.select(function() {
			return this.appendChild(n.apply(this, arguments))
		})
	}, _a.insert = function(n, t) {
		return n = j(n), t = N(t), this.select(function() {
			return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
		})
	}, _a.remove = function() {
		return this.each(F)
	}, _a.data = function(n, t) {
		function e(n, e) {
			var r, u, i, o = n.length,
				f = e.length,
				h = Math.min(o, f),
				g = new Array(f),
				p = new Array(f),
				v = new Array(o);
			if (t) {
				var d, m = new l,
					y = new Array(o);
				for (r = -1; ++r < o;) m.has(d = t.call(u = n[r], u.__data__, r)) ? v[r] = u : m.set(d, u), y[r] = d;
				for (r = -1; ++r < f;)(u = m.get(d = t.call(e, i = e[r], r))) ? u !== !0 && (g[r] = u, u.__data__ = i) : p[r] = H(i), m.set(d, !0);
				for (r = -1; ++r < o;) m.get(y[r]) !== !0 && (v[r] = n[r])
			} else {
				for (r = -1; ++r < h;) u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = H(i);
				for (; f > r; ++r) p[r] = H(e[r]);
				for (; o > r; ++r) v[r] = n[r]
			}
			p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, a.push(p), c.push(g), s.push(v)
		}
		var r, u, i = -1,
			o = this.length;
		if (!arguments.length) {
			for (n = new Array(o = (r = this[0]).length); ++i < o;)(u = r[i]) && (n[i] = u.__data__);
			return n
		}
		var a = Z([]),
			c = A([]),
			s = A([]);
		if ("function" == typeof n) for (; ++i < o;) e(r = this[i], n.call(r, r.parentNode.__data__, i));
		else for (; ++i < o;) e(r = this[i], n);
		return c.enter = function() {
			return a
		}, c.exit = function() {
			return s
		}, c
	}, _a.datum = function(n) {
		return arguments.length ? this.property("__data__", n) : this.property("__data__")
	}, _a.filter = function(n) {
		var t, e, r, u = [];
		"function" != typeof n && (n = O(n));
		for (var i = 0, o = this.length; o > i; i++) {
			u.push(t = []), t.parentNode = (e = this[i]).parentNode;
			for (var a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
		}
		return A(u)
	}, _a.order = function() {
		for (var n = -1, t = this.length; ++n < t;) for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
		return this
	}, _a.sort = function(n) {
		n = I.apply(this, arguments);
		for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
		return this.order()
	}, _a.each = function(n) {
		return Y(this, function(t, e, r) {
			n.call(t, t.__data__, e, r)
		})
	}, _a.call = function(n) {
		var t = ra(arguments);
		return n.apply(t[0] = this, t), this
	}, _a.empty = function() {
		return !this.node()
	}, _a.node = function() {
		for (var n = 0, t = this.length; t > n; n++) for (var e = this[n], r = 0, u = e.length; u > r; r++) {
			var i = e[r];
			if (i) return i
		}
		return null
	}, _a.size = function() {
		var n = 0;
		return Y(this, function() {
			++n
		}), n
	};
	var Sa = [];
	ta.selection.enter = Z, ta.selection.enter.prototype = Sa, Sa.append = _a.append, Sa.empty = _a.empty, Sa.node = _a.node, Sa.call = _a.call, Sa.size = _a.size, Sa.select = function(n) {
		for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
			r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
			for (var l = -1, s = u.length; ++l < s;)(i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)), e.__data__ = i.__data__) : t.push(null)
		}
		return A(o)
	}, Sa.insert = function(n, t) {
		return arguments.length < 2 && (t = V(this)), _a.insert.call(this, n, t)
	}, ta.select = function(t) {
		var e;
		return "string" == typeof t ? (e = [Ma(t, ua)], e.parentNode = ua.documentElement) : (e = [t], e.parentNode = n(t)), A([e])
	}, ta.selectAll = function(n) {
		var t;
		return "string" == typeof n ? (t = ra(xa(n, ua)), t.parentNode = ua.documentElement) : (t = n, t.parentNode = null), A([t])
	}, _a.on = function(n, t, e) {
		var r = arguments.length;
		if (3 > r) {
			if ("string" != typeof n) {
				2 > r && (t = !1);
				for (e in n) this.each(X(e, n[e], t));
				return this
			}
			if (2 > r) return (r = this.node()["__on" + n]) && r._;
			e = !1
		}
		return this.each(X(n, t, e))
	};
	var ka = ta.map({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	});
	ua && ka.forEach(function(n) {
		"on" + n in ua && ka.remove(n)
	});
	var Ea, Aa = 0;
	ta.mouse = function(n) {
		return J(n, k())
	};
	var Na = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
	ta.touch = function(n, t, e) {
		if (arguments.length < 3 && (e = t, t = k().changedTouches), t) for (var r, u = 0, i = t.length; i > u; ++u) if ((r = t[u]).identifier === e) return J(n, r)
	}, ta.behavior.drag = function() {
		function n() {
			this.on("mousedown.drag", i).on("touchstart.drag", o)
		}
		function e(n, t, e, i, o) {
			return function() {
				function a() {
					var n, e, r = t(h, v);
					r && (n = r[0] - M[0], e = r[1] - M[1], p |= n | e, M = r, g({
						type: "drag",
						x: r[0] + l[0],
						y: r[1] + l[1],
						dx: n,
						dy: e
					}))
				}
				function c() {
					t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && ta.event.target === f), g({
						type: "dragend"
					}))
				}
				var l, s = this,
					f = ta.event.target,
					h = s.parentNode,
					g = r.of(s, arguments),
					p = 0,
					v = n(),
					d = ".drag" + (null == v ? "" : "-" + v),
					m = ta.select(e(f)).on(i + d, a).on(o + d, c),
					y = W(f),
					M = t(h, v);
				u ? (l = u.apply(s, arguments), l = [l.x - M[0], l.y - M[1]]) : l = [0, 0], g({
					type: "dragstart"
				})
			}
		}
		var r = E(n, "drag", "dragstart", "dragend"),
			u = null,
			i = e(b, ta.mouse, t, "mousemove", "mouseup"),
			o = e(G, ta.touch, y, "touchmove", "touchend");
		return n.origin = function(t) {
			return arguments.length ? (u = t, n) : u
		}, ta.rebind(n, r, "on")
	}, ta.touches = function(n, t) {
		return arguments.length < 2 && (t = k().touches), t ? ra(t).map(function(t) {
			var e = J(n, t);
			return e.identifier = t.identifier, e
		}) : []
	};
	var Ca = 1e-6,
		za = Ca * Ca,
		qa = Math.PI,
		La = 2 * qa,
		Ta = La - Ca,
		Ra = qa / 2,
		Da = qa / 180,
		Pa = 180 / qa,
		Ua = Math.SQRT2,
		ja = 2,
		Fa = 4;
	ta.interpolateZoom = function(n, t) {
		function e(n) {
			var t = n * y;
			if (m) {
				var e = rt(v),
					o = i / (ja * h) * (e * ut(Ua * t + v) - et(v));
				return [r + o * l, u + o * s, i * e / rt(Ua * t + v)]
			}
			return [r + n * l, u + n * s, i * Math.exp(Ua * t)]
		}
		var r = n[0],
			u = n[1],
			i = n[2],
			o = t[0],
			a = t[1],
			c = t[2],
			l = o - r,
			s = a - u,
			f = l * l + s * s,
			h = Math.sqrt(f),
			g = (c * c - i * i + Fa * f) / (2 * i * ja * h),
			p = (c * c - i * i - Fa * f) / (2 * c * ja * h),
			v = Math.log(Math.sqrt(g * g + 1) - g),
			d = Math.log(Math.sqrt(p * p + 1) - p),
			m = d - v,
			y = (m || Math.log(c / i)) / Ua;
		return e.duration = 1e3 * y, e
	}, ta.behavior.zoom = function() {
		function n(n) {
			n.on(q, f).on(Oa + ".zoom", g).on("dblclick.zoom", p).on(R, h)
		}
		function e(n) {
			return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k]
		}
		function r(n) {
			return [n[0] * k.k + k.x, n[1] * k.k + k.y]
		}
		function u(n) {
			k.k = Math.max(N[0], Math.min(N[1], n))
		}
		function i(n, t) {
			t = r(t), k.x += n[0] - t[0], k.y += n[1] - t[1]
		}
		function o(t, e, r, o) {
			t.__chart__ = {
				x: k.x,
				y: k.y,
				k: k.k
			}, u(Math.pow(2, o)), i(d = e, r), t = ta.select(t), C > 0 && (t = t.transition().duration(C)), t.call(n.event)
		}
		function a() {
			b && b.domain(x.range().map(function(n) {
				return (n - k.x) / k.k
			}).map(x.invert)), w && w.domain(_.range().map(function(n) {
				return (n - k.y) / k.k
			}).map(_.invert))
		}
		function c(n) {
			z++ || n({
				type: "zoomstart"
			})
		}
		function l(n) {
			a(), n({
				type: "zoom",
				scale: k.k,
				translate: [k.x, k.y]
			})
		}
		function s(n) {
			--z || (n({
				type: "zoomend"
			}), d = null)
		}
		function f() {
			function n() {
				f = 1, i(ta.mouse(u), g), l(a)
			}
			function r() {
				h.on(L, null).on(T, null), p(f && ta.event.target === o), s(a)
			}
			var u = this,
				o = ta.event.target,
				a = D.of(u, arguments),
				f = 0,
				h = ta.select(t(u)).on(L, n).on(T, r),
				g = e(ta.mouse(u)),
				p = W(u);
			Dl.call(u), c(a)
		}
		function h() {
			function n() {
				var n = ta.touches(p);
				return g = k.k, n.forEach(function(n) {
					n.identifier in d && (d[n.identifier] = e(n))
				}), n
			}
			function t() {
				var t = ta.event.target;
				ta.select(t).on(x, r).on(b, a), _.push(t);
				for (var e = ta.event.changedTouches, u = 0, i = e.length; i > u; ++u) d[e[u].identifier] = null;
				var c = n(),
					l = Date.now();
				if (1 === c.length) {
					if (500 > l - M) {
						var s = c[0];
						o(p, s, d[s.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), S()
					}
					M = l
				} else if (c.length > 1) {
					var s = c[0],
						f = c[1],
						h = s[0] - f[0],
						g = s[1] - f[1];
					m = h * h + g * g
				}
			}
			function r() {
				var n, t, e, r, o = ta.touches(p);
				Dl.call(p);
				for (var a = 0, c = o.length; c > a; ++a, r = null) if (e = o[a], r = d[e.identifier]) {
					if (t) break;
					n = e, t = r
				}
				if (r) {
					var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s,
						f = m && Math.sqrt(s / m);
					n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2], u(f * g)
				}
				M = null, i(n, t), l(v)
			}
			function a() {
				if (ta.event.touches.length) {
					for (var t = ta.event.changedTouches, e = 0, r = t.length; r > e; ++e) delete d[t[e].identifier];
					for (var u in d) return void n()
				}
				ta.selectAll(_).on(y, null), w.on(q, f).on(R, h), E(), s(v)
			}
			var g, p = this,
				v = D.of(p, arguments),
				d = {},
				m = 0,
				y = ".zoom-" + ta.event.changedTouches[0].identifier,
				x = "touchmove" + y,
				b = "touchend" + y,
				_ = [],
				w = ta.select(p),
				E = W(p);
			t(), c(v), w.on(q, null).on(R, t)
		}
		function g() {
			var n = D.of(this, arguments);
			y ? clearTimeout(y) : (Dl.call(this), v = e(d = m || ta.mouse(this)), c(n)), y = setTimeout(function() {
				y = null, s(n)
			}, 50), S(), u(Math.pow(2, .002 * Ha()) * k.k), i(d, v), l(n)
		}
		function p() {
			var n = ta.mouse(this),
				t = Math.log(k.k) / Math.LN2;
			o(this, n, e(n), ta.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1)
		}
		var v, d, m, y, M, x, b, _, w, k = {
			x: 0,
			y: 0,
			k: 1
		},
			A = [960, 500],
			N = Ia,
			C = 250,
			z = 0,
			q = "mousedown.zoom",
			L = "mousemove.zoom",
			T = "mouseup.zoom",
			R = "touchstart.zoom",
			D = E(n, "zoomstart", "zoom", "zoomend");
		return Oa || (Oa = "onwheel" in ua ? (Ha = function() {
			return -ta.event.deltaY * (ta.event.deltaMode ? 120 : 1)
		}, "wheel") : "onmousewheel" in ua ? (Ha = function() {
			return ta.event.wheelDelta
		}, "mousewheel") : (Ha = function() {
			return -ta.event.detail
		}, "MozMousePixelScroll")), n.event = function(n) {
			n.each(function() {
				var n = D.of(this, arguments),
					t = k;
				Tl ? ta.select(this).transition().each("start.zoom", function() {
					k = this.__chart__ || {
						x: 0,
						y: 0,
						k: 1
					}, c(n)
				}).tween("zoom:zoom", function() {
					var e = A[0],
						r = A[1],
						u = d ? d[0] : e / 2,
						i = d ? d[1] : r / 2,
						o = ta.interpolateZoom([(u - k.x) / k.k, (i - k.y) / k.k, e / k.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
					return function(t) {
						var r = o(t),
							a = e / r[2];
						this.__chart__ = k = {
							x: u - r[0] * a,
							y: i - r[1] * a,
							k: a
						}, l(n)
					}
				}).each("interrupt.zoom", function() {
					s(n)
				}).each("end.zoom", function() {
					s(n)
				}) : (this.__chart__ = k, c(n), l(n), s(n))
			})
		}, n.translate = function(t) {
			return arguments.length ? (k = {
				x: +t[0],
				y: +t[1],
				k: k.k
			}, a(), n) : [k.x, k.y]
		}, n.scale = function(t) {
			return arguments.length ? (k = {
				x: k.x,
				y: k.y,
				k: +t
			}, a(), n) : k.k
		}, n.scaleExtent = function(t) {
			return arguments.length ? (N = null == t ? Ia : [+t[0], +t[1]], n) : N
		}, n.center = function(t) {
			return arguments.length ? (m = t && [+t[0], +t[1]], n) : m
		}, n.size = function(t) {
			return arguments.length ? (A = t && [+t[0], +t[1]], n) : A
		}, n.duration = function(t) {
			return arguments.length ? (C = +t, n) : C
		}, n.x = function(t) {
			return arguments.length ? (b = t, x = t.copy(), k = {
				x: 0,
				y: 0,
				k: 1
			}, n) : b
		}, n.y = function(t) {
			return arguments.length ? (w = t, _ = t.copy(), k = {
				x: 0,
				y: 0,
				k: 1
			}, n) : w
		}, ta.rebind(n, D, "on")
	};
	var Ha, Oa, Ia = [0, 1 / 0];
	ta.color = ot, ot.prototype.toString = function() {
		return this.rgb() + ""
	}, ta.hsl = at;
	var Ya = at.prototype = new ot;
	Ya.brighter = function(n) {
		return n = Math.pow(.7, arguments.length ? n : 1), new at(this.h, this.s, this.l / n)
	}, Ya.darker = function(n) {
		return n = Math.pow(.7, arguments.length ? n : 1), new at(this.h, this.s, n * this.l)
	}, Ya.rgb = function() {
		return ct(this.h, this.s, this.l)
	}, ta.hcl = lt;
	var Za = lt.prototype = new ot;
	Za.brighter = function(n) {
		return new lt(this.h, this.c, Math.min(100, this.l + Va * (arguments.length ? n : 1)))
	}, Za.darker = function(n) {
		return new lt(this.h, this.c, Math.max(0, this.l - Va * (arguments.length ? n : 1)))
	}, Za.rgb = function() {
		return st(this.h, this.c, this.l).rgb()
	}, ta.lab = ft;
	var Va = 18,
		Xa = .95047,
		$a = 1,
		Ba = 1.08883,
		Wa = ft.prototype = new ot;
	Wa.brighter = function(n) {
		return new ft(Math.min(100, this.l + Va * (arguments.length ? n : 1)), this.a, this.b)
	}, Wa.darker = function(n) {
		return new ft(Math.max(0, this.l - Va * (arguments.length ? n : 1)), this.a, this.b)
	}, Wa.rgb = function() {
		return ht(this.l, this.a, this.b)
	}, ta.rgb = mt;
	var Ja = mt.prototype = new ot;
	Ja.brighter = function(n) {
		n = Math.pow(.7, arguments.length ? n : 1);
		var t = this.r,
			e = this.g,
			r = this.b,
			u = 30;
		return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), new mt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new mt(u, u, u)
	}, Ja.darker = function(n) {
		return n = Math.pow(.7, arguments.length ? n : 1), new mt(n * this.r, n * this.g, n * this.b)
	}, Ja.hsl = function() {
		return _t(this.r, this.g, this.b)
	}, Ja.toString = function() {
		return "#" + xt(this.r) + xt(this.g) + xt(this.b)
	};
	var Ga = ta.map({
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	});
	Ga.forEach(function(n, t) {
		Ga.set(n, yt(t))
	}), ta.functor = Et, ta.xhr = At(y), ta.dsv = function(n, t) {
		function e(n, e, i) {
			arguments.length < 3 && (i = e, e = null);
			var o = Nt(n, t, null == e ? r : u(e), i);
			return o.row = function(n) {
				return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
			}, o
		}
		function r(n) {
			return e.parse(n.responseText)
		}
		function u(n) {
			return function(t) {
				return e.parse(t.responseText, n)
			}
		}
		function i(t) {
			return t.map(o).join(n)
		}
		function o(n) {
			return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
		}
		var a = new RegExp('["' + n + "\n]"),
			c = n.charCodeAt(0);
		return e.parse = function(n, t) {
			var r;
			return e.parseRows(n, function(n, e) {
				if (r) return r(n, e - 1);
				var u = new Function("d", "return {" + n.map(function(n, t) {
					return JSON.stringify(n) + ": d[" + t + "]"
				}).join(",") + "}");
				r = t ?
				function(n, e) {
					return t(u(n), e)
				} : u
			})
		}, e.parseRows = function(n, t) {
			function e() {
				if (s >= l) return o;
				if (u) return u = !1, i;
				var t = s;
				if (34 === n.charCodeAt(t)) {
					for (var e = t; e++ < l;) if (34 === n.charCodeAt(e)) {
						if (34 !== n.charCodeAt(e + 1)) break;
						++e
					}
					s = e + 2;
					var r = n.charCodeAt(e + 1);
					return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.slice(t + 1, e).replace(/""/g, '"')
				}
				for (; l > s;) {
					var r = n.charCodeAt(s++),
						a = 1;
					if (10 === r) u = !0;
					else if (13 === r) u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
					else if (r !== c) continue;
					return n.slice(t, s - a)
				}
				return n.slice(t)
			}
			for (var r, u, i = {}, o = {}, a = [], l = n.length, s = 0, f = 0;
			(r = e()) !== o;) {
				for (var h = []; r !== i && r !== o;) h.push(r), r = e();
				t && null == (h = t(h, f++)) || a.push(h)
			}
			return a
		}, e.format = function(t) {
			if (Array.isArray(t[0])) return e.formatRows(t);
			var r = new m,
				u = [];
			return t.forEach(function(n) {
				for (var t in n) r.has(t) || u.push(r.add(t))
			}), [u.map(o).join(n)].concat(t.map(function(t) {
				return u.map(function(n) {
					return o(t[n])
				}).join(n)
			})).join("\n")
		}, e.formatRows = function(n) {
			return n.map(i).join("\n")
		}, e
	}, ta.csv = ta.dsv(",", "text/csv"), ta.tsv = ta.dsv("	", "text/tab-separated-values");
	var Ka, Qa, nc, tc, ec, rc = this[x(this, "requestAnimationFrame")] ||
	function(n) {
		setTimeout(n, 17)
	};
	ta.timer = function(n, t, e) {
		var r = arguments.length;
		2 > r && (t = 0), 3 > r && (e = Date.now());
		var u = e + t,
			i = {
				c: n,
				t: u,
				f: !1,
				n: null
			};
		Qa ? Qa.n = i : Ka = i, Qa = i, nc || (tc = clearTimeout(tc), nc = 1, rc(qt))
	}, ta.timer.flush = function() {
		Lt(), Tt()
	}, ta.round = function(n, t) {
		return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
	};
	var uc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
	ta.formatPrefix = function(n, t) {
		var e = 0;
		return n && (0 > n && (n *= -1), t && (n = ta.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), uc[8 + e / 3]
	};
	var ic = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
		oc = ta.map({
			b: function(n) {
				return n.toString(2)
			},
			c: function(n) {
				return String.fromCharCode(n)
			},
			o: function(n) {
				return n.toString(8)
			},
			x: function(n) {
				return n.toString(16)
			},
			X: function(n) {
				return n.toString(16).toUpperCase()
			},
			g: function(n, t) {
				return n.toPrecision(t)
			},
			e: function(n, t) {
				return n.toExponential(t)
			},
			f: function(n, t) {
				return n.toFixed(t)
			},
			r: function(n, t) {
				return (n = ta.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
			}
		}),
		ac = ta.time = {},
		cc = Date;
	jt.prototype = {
		getDate: function() {
			return this._.getUTCDate()
		},
		getDay: function() {
			return this._.getUTCDay()
		},
		getFullYear: function() {
			return this._.getUTCFullYear()
		},
		getHours: function() {
			return this._.getUTCHours()
		},
		getMilliseconds: function() {
			return this._.getUTCMilliseconds()
		},
		getMinutes: function() {
			return this._.getUTCMinutes()
		},
		getMonth: function() {
			return this._.getUTCMonth()
		},
		getSeconds: function() {
			return this._.getUTCSeconds()
		},
		getTime: function() {
			return this._.getTime()
		},
		getTimezoneOffset: function() {
			return 0
		},
		valueOf: function() {
			return this._.valueOf()
		},
		setDate: function() {
			lc.setUTCDate.apply(this._, arguments)
		},
		setDay: function() {
			lc.setUTCDay.apply(this._, arguments)
		},
		setFullYear: function() {
			lc.setUTCFullYear.apply(this._, arguments)
		},
		setHours: function() {
			lc.setUTCHours.apply(this._, arguments)
		},
		setMilliseconds: function() {
			lc.setUTCMilliseconds.apply(this._, arguments)
		},
		setMinutes: function() {
			lc.setUTCMinutes.apply(this._, arguments)
		},
		setMonth: function() {
			lc.setUTCMonth.apply(this._, arguments)
		},
		setSeconds: function() {
			lc.setUTCSeconds.apply(this._, arguments)
		},
		setTime: function() {
			lc.setTime.apply(this._, arguments)
		}
	};
	var lc = Date.prototype;
	ac.year = Ft(function(n) {
		return n = ac.day(n), n.setMonth(0, 1), n
	}, function(n, t) {
		n.setFullYear(n.getFullYear() + t)
	}, function(n) {
		return n.getFullYear()
	}), ac.years = ac.year.range, ac.years.utc = ac.year.utc.range, ac.day = Ft(function(n) {
		var t = new cc(2e3, 0);
		return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
	}, function(n, t) {
		n.setDate(n.getDate() + t)
	}, function(n) {
		return n.getDate() - 1
	}), ac.days = ac.day.range, ac.days.utc = ac.day.utc.range, ac.dayOfYear = function(n) {
		var t = ac.year(n);
		return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
	}, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
		t = 7 - t;
		var e = ac[n] = Ft(function(n) {
			return (n = ac.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
		}, function(n, t) {
			n.setDate(n.getDate() + 7 * Math.floor(t))
		}, function(n) {
			var e = ac.year(n).getDay();
			return Math.floor((ac.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
		});
		ac[n + "s"] = e.range, ac[n + "s"].utc = e.utc.range, ac[n + "OfYear"] = function(n) {
			var e = ac.year(n).getDay();
			return Math.floor((ac.dayOfYear(n) + (e + t) % 7) / 7)
		}
	}), ac.week = ac.sunday, ac.weeks = ac.sunday.range, ac.weeks.utc = ac.sunday.utc.range, ac.weekOfYear = ac.sundayOfYear;
	var sc = {
		"-": "",
		_: " ",
		0: "0"
	},
		fc = /^\s*\d+/,
		hc = /^%/;
	ta.locale = function(n) {
		return {
			numberFormat: Pt(n),
			timeFormat: Ot(n)
		}
	};
	var gc = ta.locale({
		decimal: ".",
		thousands: ",",
		grouping: [3],
		currency: ["$", ""],
		dateTime: "%a %b %e %X %Y",
		date: "%m/%d/%Y",
		time: "%H:%M:%S",
		periods: ["AM", "PM"],
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	ta.format = gc.numberFormat, ta.geo = {}, ce.prototype = {
		s: 0,
		t: 0,
		add: function(n) {
			le(n, this.t, pc), le(pc.s, this.s, this), this.s ? this.t += pc.t : this.s = pc.t
		},
		reset: function() {
			this.s = this.t = 0
		},
		valueOf: function() {
			return this.s
		}
	};
	var pc = new ce;
	ta.geo.stream = function(n, t) {
		n && vc.hasOwnProperty(n.type) ? vc[n.type](n, t) : se(n, t)
	};
	var vc = {
		Feature: function(n, t) {
			se(n.geometry, t)
		},
		FeatureCollection: function(n, t) {
			for (var e = n.features, r = -1, u = e.length; ++r < u;) se(e[r].geometry, t)
		}
	},
		dc = {
			Sphere: function(n, t) {
				t.sphere()
			},
			Point: function(n, t) {
				n = n.coordinates, t.point(n[0], n[1], n[2])
			},
			MultiPoint: function(n, t) {
				for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) n = e[r], t.point(n[0], n[1], n[2])
			},
			LineString: function(n, t) {
				fe(n.coordinates, t, 0)
			},
			MultiLineString: function(n, t) {
				for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) fe(e[r], t, 0)
			},
			Polygon: function(n, t) {
				he(n.coordinates, t)
			},
			MultiPolygon: function(n, t) {
				for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) he(e[r], t)
			},
			GeometryCollection: function(n, t) {
				for (var e = n.geometries, r = -1, u = e.length; ++r < u;) se(e[r], t)
			}
		};
	ta.geo.area = function(n) {
		return mc = 0, ta.geo.stream(n, Mc), mc
	};
	var mc, yc = new ce,
		Mc = {
			sphere: function() {
				mc += 4 * qa
			},
			point: b,
			lineStart: b,
			lineEnd: b,
			polygonStart: function() {
				yc.reset(), Mc.lineStart = ge
			},
			polygonEnd: function() {
				var n = 2 * yc;
				mc += 0 > n ? 4 * qa + n : n, Mc.lineStart = Mc.lineEnd = Mc.point = b
			}
		};
	ta.geo.bounds = function() {
		function n(n, t) {
			M.push(x = [s = n, h = n]), f > t && (f = t), t > g && (g = t)
		}
		function t(t, e) {
			var r = pe([t * Da, e * Da]);
			if (m) {
				var u = de(m, r),
					i = [u[1], -u[0], 0],
					o = de(i, u);
				Me(o), o = xe(o);
				var c = t - p,
					l = c > 0 ? 1 : -1,
					v = o[0] * Pa * l,
					d = ga(c) > 180;
				if (d ^ (v > l * p && l * t > v)) {
					var y = o[1] * Pa;
					y > g && (g = y)
				} else if (v = (v + 360) % 360 - 180, d ^ (v > l * p && l * t > v)) {
					var y = -o[1] * Pa;
					f > y && (f = y)
				} else f > e && (f = e), e > g && (g = e);
				d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t)
			} else n(t, e);
			m = r, p = t
		}
		function e() {
			b.point = t
		}
		function r() {
			x[0] = s, x[1] = h, b.point = n, m = null
		}
		function u(n, e) {
			if (m) {
				var r = n - p;
				y += ga(r) > 180 ? r + (r > 0 ? 360 : -360) : r
			} else v = n, d = e;
			Mc.point(n, e), t(n, e)
		}
		function i() {
			Mc.lineStart()
		}
		function o() {
			u(v, d), Mc.lineEnd(), ga(y) > Ca && (s = -(h = 180)), x[0] = s, x[1] = h, m = null
		}
		function a(n, t) {
			return (t -= n) < 0 ? t + 360 : t
		}
		function c(n, t) {
			return n[0] - t[0]
		}
		function l(n, t) {
			return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
		}
		var s, f, h, g, p, v, d, m, y, M, x, b = {
			point: n,
			lineStart: e,
			lineEnd: r,
			polygonStart: function() {
				b.point = u, b.lineStart = i, b.lineEnd = o, y = 0, Mc.polygonStart()
			},
			polygonEnd: function() {
				Mc.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > yc ? (s = -(h = 180), f = -(g = 90)) : y > Ca ? g = 90 : -Ca > y && (f = -90), x[0] = s, x[1] = h
			}
		};
		return function(n) {
			g = h = -(s = f = 1 / 0), M = [], ta.geo.stream(n, b);
			var t = M.length;
			if (t) {
				M.sort(c);
				for (var e, r = 1, u = M[0], i = [u]; t > r; ++r) e = M[r], l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
				for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) e = i[r], (o = a(u[1], e[0])) > p && (p = o, s = e[0], h = u[1])
			}
			return M = x = null, 1 / 0 === s || 1 / 0 === f ? [
				[0 / 0, 0 / 0],
				[0 / 0, 0 / 0]
			] : [
				[s, f],
				[h, g]
			]
		}
	}(), ta.geo.centroid = function(n) {
		xc = bc = _c = wc = Sc = kc = Ec = Ac = Nc = Cc = zc = 0, ta.geo.stream(n, qc);
		var t = Nc,
			e = Cc,
			r = zc,
			u = t * t + e * e + r * r;
		return za > u && (t = kc, e = Ec, r = Ac, Ca > bc && (t = _c, e = wc, r = Sc), u = t * t + e * e + r * r, za > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Pa, tt(r / Math.sqrt(u)) * Pa]
	};
	var xc, bc, _c, wc, Sc, kc, Ec, Ac, Nc, Cc, zc, qc = {
		sphere: b,
		point: _e,
		lineStart: Se,
		lineEnd: ke,
		polygonStart: function() {
			qc.lineStart = Ee
		},
		polygonEnd: function() {
			qc.lineStart = Se
		}
	},
		Lc = Le(Ne, Pe, je, [-qa, -qa / 2]),
		Tc = 1e9;
	ta.geo.clipExtent = function() {
		var n, t, e, r, u, i, o = {
			stream: function(n) {
				return u && (u.valid = !1), u = i(n), u.valid = !0, u
			},
			extent: function(a) {
				return arguments.length ? (i = Ie(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
					[n, t],
					[e, r]
				]
			}
		};
		return o.extent([
			[0, 0],
			[960, 500]
		])
	}, (ta.geo.conicEqualArea = function() {
		return Ye(Ze)
	}).raw = Ze, ta.geo.albers = function() {
		return ta.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
	}, ta.geo.albersUsa = function() {
		function n(n) {
			var i = n[0],
				o = n[1];
			return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
		}
		var t, e, r, u, i = ta.geo.albers(),
			o = ta.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
			a = ta.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
			c = {
				point: function(n, e) {
					t = [n, e]
				}
			};
		return n.invert = function(n) {
			var t = i.scale(),
				e = i.translate(),
				r = (n[0] - e[0]) / t,
				u = (n[1] - e[1]) / t;
			return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
		}, n.stream = function(n) {
			var t = i.stream(n),
				e = o.stream(n),
				r = a.stream(n);
			return {
				point: function(n, u) {
					t.point(n, u), e.point(n, u), r.point(n, u)
				},
				sphere: function() {
					t.sphere(), e.sphere(), r.sphere()
				},
				lineStart: function() {
					t.lineStart(), e.lineStart(), r.lineStart()
				},
				lineEnd: function() {
					t.lineEnd(), e.lineEnd(), r.lineEnd()
				},
				polygonStart: function() {
					t.polygonStart(), e.polygonStart(), r.polygonStart()
				},
				polygonEnd: function() {
					t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
				}
			}
		}, n.precision = function(t) {
			return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
		}, n.scale = function(t) {
			return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
		}, n.translate = function(t) {
			if (!arguments.length) return i.translate();
			var l = i.scale(),
				s = +t[0],
				f = +t[1];
			return e = i.translate(t).clipExtent([
				[s - .455 * l, f - .238 * l],
				[s + .455 * l, f + .238 * l]
			]).stream(c).point, r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([
				[s - .425 * l + Ca, f + .12 * l + Ca],
				[s - .214 * l - Ca, f + .234 * l - Ca]
			]).stream(c).point, u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([
				[s - .214 * l + Ca, f + .166 * l + Ca],
				[s - .115 * l - Ca, f + .234 * l - Ca]
			]).stream(c).point, n
		}, n.scale(1070)
	};
	var Rc, Dc, Pc, Uc, jc, Fc, Hc = {
		point: b,
		lineStart: b,
		lineEnd: b,
		polygonStart: function() {
			Dc = 0, Hc.lineStart = Ve
		},
		polygonEnd: function() {
			Hc.lineStart = Hc.lineEnd = Hc.point = b, Rc += ga(Dc / 2)
		}
	},
		Oc = {
			point: Xe,
			lineStart: b,
			lineEnd: b,
			polygonStart: b,
			polygonEnd: b
		},
		Ic = {
			point: We,
			lineStart: Je,
			lineEnd: Ge,
			polygonStart: function() {
				Ic.lineStart = Ke
			},
			polygonEnd: function() {
				Ic.point = We, Ic.lineStart = Je, Ic.lineEnd = Ge
			}
		};
	ta.geo.path = function() {
		function n(n) {
			return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), ta.geo.stream(n, o)), i.result()
		}
		function t() {
			return o = null, n
		}
		var e, r, u, i, o, a = 4.5;
		return n.area = function(n) {
			return Rc = 0, ta.geo.stream(n, u(Hc)), Rc
		}, n.centroid = function(n) {
			return _c = wc = Sc = kc = Ec = Ac = Nc = Cc = zc = 0, ta.geo.stream(n, u(Ic)), zc ? [Nc / zc, Cc / zc] : Ac ? [kc / Ac, Ec / Ac] : Sc ? [_c / Sc, wc / Sc] : [0 / 0, 0 / 0]
		}, n.bounds = function(n) {
			return jc = Fc = -(Pc = Uc = 1 / 0), ta.geo.stream(n, u(Oc)), [
				[Pc, Uc],
				[jc, Fc]
			]
		}, n.projection = function(n) {
			return arguments.length ? (u = (e = n) ? n.stream || tr(n) : y, t()) : e
		}, n.context = function(n) {
			return arguments.length ? (i = null == (r = n) ? new $e : new Qe(n), "function" != typeof a && i.pointRadius(a), t()) : r
		}, n.pointRadius = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
		}, n.projection(ta.geo.albersUsa()).context(null)
	}, ta.geo.transform = function(n) {
		return {
			stream: function(t) {
				var e = new er(t);
				for (var r in n) e[r] = n[r];
				return e
			}
		}
	}, er.prototype = {
		point: function(n, t) {
			this.stream.point(n, t)
		},
		sphere: function() {
			this.stream.sphere()
		},
		lineStart: function() {
			this.stream.lineStart()
		},
		lineEnd: function() {
			this.stream.lineEnd()
		},
		polygonStart: function() {
			this.stream.polygonStart()
		},
		polygonEnd: function() {
			this.stream.polygonEnd()
		}
	}, ta.geo.projection = ur, ta.geo.projectionMutator = ir, (ta.geo.equirectangular = function() {
		return ur(ar)
	}).raw = ar.invert = ar, ta.geo.rotation = function(n) {
		function t(t) {
			return t = n(t[0] * Da, t[1] * Da), t[0] *= Pa, t[1] *= Pa, t
		}
		return n = lr(n[0] % 360 * Da, n[1] * Da, n.length > 2 ? n[2] * Da : 0), t.invert = function(t) {
			return t = n.invert(t[0] * Da, t[1] * Da), t[0] *= Pa, t[1] *= Pa, t
		}, t
	}, cr.invert = ar, ta.geo.circle = function() {
		function n() {
			var n = "function" == typeof r ? r.apply(this, arguments) : r,
				t = lr(-n[0] * Da, -n[1] * Da, 0).invert,
				u = [];
			return e(null, null, 1, {
				point: function(n, e) {
					u.push(n = t(n, e)), n[0] *= Pa, n[1] *= Pa
				}
			}), {
				type: "Polygon",
				coordinates: [u]
			}
		}
		var t, e, r = [0, 0],
			u = 6;
		return n.origin = function(t) {
			return arguments.length ? (r = t, n) : r
		}, n.angle = function(r) {
			return arguments.length ? (e = gr((t = +r) * Da, u * Da), n) : t
		}, n.precision = function(r) {
			return arguments.length ? (e = gr(t * Da, (u = +r) * Da), n) : u
		}, n.angle(90)
	}, ta.geo.distance = function(n, t) {
		var e, r = (t[0] - n[0]) * Da,
			u = n[1] * Da,
			i = t[1] * Da,
			o = Math.sin(r),
			a = Math.cos(r),
			c = Math.sin(u),
			l = Math.cos(u),
			s = Math.sin(i),
			f = Math.cos(i);
		return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a)
	}, ta.geo.graticule = function() {
		function n() {
			return {
				type: "MultiLineString",
				coordinates: t()
			}
		}
		function t() {
			return ta.range(Math.ceil(i / d) * d, u, d).map(h).concat(ta.range(Math.ceil(l / m) * m, c, m).map(g)).concat(ta.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
				return ga(n % d) > Ca
			}).map(s)).concat(ta.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
				return ga(n % m) > Ca
			}).map(f))
		}
		var e, r, u, i, o, a, c, l, s, f, h, g, p = 10,
			v = p,
			d = 90,
			m = 360,
			y = 2.5;
		return n.lines = function() {
			return t().map(function(n) {
				return {
					type: "LineString",
					coordinates: n
				}
			})
		}, n.outline = function() {
			return {
				type: "Polygon",
				coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
			}
		}, n.extent = function(t) {
			return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
		}, n.majorExtent = function(t) {
			return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [
				[i, l],
				[u, c]
			]
		}, n.minorExtent = function(t) {
			return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
				[r, a],
				[e, o]
			]
		}, n.step = function(t) {
			return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
		}, n.majorStep = function(t) {
			return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
		}, n.minorStep = function(t) {
			return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
		}, n.precision = function(t) {
			return arguments.length ? (y = +t, s = vr(a, o, 90), f = dr(r, e, y), h = vr(l, c, 90), g = dr(i, u, y), n) : y
		}, n.majorExtent([
			[-180, -90 + Ca],
			[180, 90 - Ca]
		]).minorExtent([
			[-180, -80 - Ca],
			[180, 80 + Ca]
		])
	}, ta.geo.greatArc = function() {
		function n() {
			return {
				type: "LineString",
				coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
			}
		}
		var t, e, r = mr,
			u = yr;
		return n.distance = function() {
			return ta.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
		}, n.source = function(e) {
			return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
		}, n.target = function(t) {
			return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
		}, n.precision = function() {
			return arguments.length ? n : 0
		}, n
	}, ta.geo.interpolate = function(n, t) {
		return Mr(n[0] * Da, n[1] * Da, t[0] * Da, t[1] * Da)
	}, ta.geo.length = function(n) {
		return Yc = 0, ta.geo.stream(n, Zc), Yc
	};
	var Yc, Zc = {
		sphere: b,
		point: b,
		lineStart: xr,
		lineEnd: b,
		polygonStart: b,
		polygonEnd: b
	},
		Vc = br(function(n) {
			return Math.sqrt(2 / (1 + n))
		}, function(n) {
			return 2 * Math.asin(n / 2)
		});
	(ta.geo.azimuthalEqualArea = function() {
		return ur(Vc)
	}).raw = Vc;
	var Xc = br(function(n) {
		var t = Math.acos(n);
		return t && t / Math.sin(t)
	}, y);
	(ta.geo.azimuthalEquidistant = function() {
		return ur(Xc)
	}).raw = Xc, (ta.geo.conicConformal = function() {
		return Ye(_r)
	}).raw = _r, (ta.geo.conicEquidistant = function() {
		return Ye(wr)
	}).raw = wr;
	var $c = br(function(n) {
		return 1 / n
	}, Math.atan);
	(ta.geo.gnomonic = function() {
		return ur($c)
	}).raw = $c, Sr.invert = function(n, t) {
		return [n, 2 * Math.atan(Math.exp(t)) - Ra]
	}, (ta.geo.mercator = function() {
		return kr(Sr)
	}).raw = Sr;
	var Bc = br(function() {
		return 1
	}, Math.asin);
	(ta.geo.orthographic = function() {
		return ur(Bc)
	}).raw = Bc;
	var Wc = br(function(n) {
		return 1 / (1 + n)
	}, function(n) {
		return 2 * Math.atan(n)
	});
	(ta.geo.stereographic = function() {
		return ur(Wc)
	}).raw = Wc, Er.invert = function(n, t) {
		return [-t, 2 * Math.atan(Math.exp(n)) - Ra]
	}, (ta.geo.transverseMercator = function() {
		var n = kr(Er),
			t = n.center,
			e = n.rotate;
		return n.center = function(n) {
			return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]])
		}, n.rotate = function(n) {
			return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90])
		}, e([0, 0, 90])
	}).raw = Er, ta.geom = {}, ta.geom.hull = function(n) {
		function t(n) {
			if (n.length < 3) return [];
			var t, u = Et(e),
				i = Et(r),
				o = n.length,
				a = [],
				c = [];
			for (t = 0; o > t; t++) a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
			for (a.sort(zr), t = 0; o > t; t++) c.push([a[t][0], -a[t][1]]);
			var l = Cr(a),
				s = Cr(c),
				f = s[0] === l[0],
				h = s[s.length - 1] === l[l.length - 1],
				g = [];
			for (t = l.length - 1; t >= 0; --t) g.push(n[a[l[t]][2]]);
			for (t = +f; t < s.length - h; ++t) g.push(n[a[s[t]][2]]);
			return g
		}
		var e = Ar,
			r = Nr;
		return arguments.length ? t(n) : (t.x = function(n) {
			return arguments.length ? (e = n, t) : e
		}, t.y = function(n) {
			return arguments.length ? (r = n, t) : r
		}, t)
	}, ta.geom.polygon = function(n) {
		return ya(n, Jc), n
	};
	var Jc = ta.geom.polygon.prototype = [];
	Jc.area = function() {
		for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;) n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
		return .5 * u
	}, Jc.centroid = function(n) {
		var t, e, r = -1,
			u = this.length,
			i = 0,
			o = 0,
			a = this[u - 1];
		for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
		return [i * n, o * n]
	}, Jc.clip = function(n) {
		for (var t, e, r, u, i, o, a = Tr(n), c = -1, l = this.length - Tr(this), s = this[l - 1]; ++c < l;) {
			for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;) o = t[e], qr(o, s, u) ? (qr(i, s, u) || n.push(Lr(i, o, s, u)), n.push(o)) : qr(i, s, u) && n.push(Lr(i, o, s, u)), i = o;
			a && n.push(n[0]), s = u
		}
		return n
	};
	var Gc, Kc, Qc, nl, tl, el = [],
		rl = [];
	Or.prototype.prepare = function() {
		for (var n, t = this.edges, e = t.length; e--;) n = t[e].edge, n.b && n.a || t.splice(e, 1);
		return t.sort(Yr), t.length
	}, Qr.prototype = {
		start: function() {
			return this.edge.l === this.site ? this.edge.a : this.edge.b
		},
		end: function() {
			return this.edge.l === this.site ? this.edge.b : this.edge.a
		}
	}, nu.prototype = {
		insert: function(n, t) {
			var e, r, u;
			if (n) {
				if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
					for (n = n.R; n.L;) n = n.L;
					n.L = t
				} else n.R = t;
				e = n
			} else this._ ? (n = uu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
			for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (eu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ru(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ru(this, e), n = e, e = n.U), e.C = !1, r.C = !0, eu(this, r))), e = n.U;
			this._.C = !1
		},
		remove: function(n) {
			n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
			var t, e, r, u = n.U,
				i = n.L,
				o = n.R;
			if (e = i ? o ? uu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
				if (n && n.C) return void(n.C = !1);
				do {
					if (n === this._) break;
					if (n === u.L) {
						if (t = u.R, t.C && (t.C = !1, u.C = !0, eu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
							t.R && t.R.C || (t.L.C = !1, t.C = !0, ru(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, eu(this, u), n = this._;
							break
						}
					} else if (t = u.L, t.C && (t.C = !1, u.C = !0, ru(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
						t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ru(this, u), n = this._;
						break
					}
					t.C = !0, n = u, u = u.U
				} while (!n.C);
				n && (n.C = !1)
			}
		}
	}, ta.geom.voronoi = function(n) {
		function t(n) {
			var t = new Array(n.length),
				r = a[0][0],
				u = a[0][1],
				i = a[1][0],
				o = a[1][1];
			return iu(e(n), a).cells.forEach(function(e, a) {
				var c = e.edges,
					l = e.site,
					s = t[a] = c.length ? c.map(function(n) {
						var t = n.start();
						return [t.x, t.y]
					}) : l.x >= r && l.x <= i && l.y >= u && l.y <= o ? [
						[r, o],
						[i, o],
						[i, u],
						[r, u]
					] : [];
				s.point = n[a]
			}), t
		}
		function e(n) {
			return n.map(function(n, t) {
				return {
					x: Math.round(i(n, t) / Ca) * Ca,
					y: Math.round(o(n, t) / Ca) * Ca,
					i: t
				}
			})
		}
		var r = Ar,
			u = Nr,
			i = r,
			o = u,
			a = ul;
		return n ? t(n) : (t.links = function(n) {
			return iu(e(n)).edges.filter(function(n) {
				return n.l && n.r
			}).map(function(t) {
				return {
					source: n[t.l.i],
					target: n[t.r.i]
				}
			})
		}, t.triangles = function(n) {
			var t = [];
			return iu(e(n)).cells.forEach(function(e, r) {
				for (var u, i, o = e.site, a = e.edges.sort(Yr), c = -1, l = a.length, s = a[l - 1].edge, f = s.l === o ? s.r : s.l; ++c < l;) u = s, i = f, s = a[c].edge, f = s.l === o ? s.r : s.l, r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
			}), t
		}, t.x = function(n) {
			return arguments.length ? (i = Et(r = n), t) : r
		}, t.y = function(n) {
			return arguments.length ? (o = Et(u = n), t) : u
		}, t.clipExtent = function(n) {
			return arguments.length ? (a = null == n ? ul : n, t) : a === ul ? null : a
		}, t.size = function(n) {
			return arguments.length ? t.clipExtent(n && [
				[0, 0], n]) : a === ul ? null : a && a[1]
		}, t)
	};
	var ul = [
		[-1e6, -1e6],
		[1e6, 1e6]
	];
	ta.geom.delaunay = function(n) {
		return ta.geom.voronoi().triangles(n)
	}, ta.geom.quadtree = function(n, t, e, r, u) {
		function i(n) {
			function i(n, t, e, r, u, i, o, a) {
				if (!isNaN(e) && !isNaN(r)) if (n.leaf) {
					var c = n.x,
						s = n.y;
					if (null != c) if (ga(c - e) + ga(s - r) < .01) l(n, t, e, r, u, i, o, a);
					else {
						var f = n.point;
						n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, e, r, u, i, o, a)
					} else n.x = e, n.y = r, n.point = t
				} else l(n, t, e, r, u, i, o, a)
			}
			function l(n, t, e, r, u, o, a, c) {
				var l = .5 * (u + a),
					s = .5 * (o + c),
					f = e >= l,
					h = r >= s,
					g = h << 1 | f;
				n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = su()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, e, r, u, o, a, c)
			}
			var s, f, h, g, p, v, d, m, y, M = Et(a),
				x = Et(c);
			if (null != t) v = t, d = e, m = r, y = u;
			else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o) for (g = 0; p > g; ++g) s = n[g], s.x < v && (v = s.x), s.y < d && (d = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
			else for (g = 0; p > g; ++g) {
				var b = +M(s = n[g], g),
					_ = +x(s, g);
				v > b && (v = b), d > _ && (d = _), b > m && (m = b), _ > y && (y = _), f.push(b), h.push(_)
			}
			var w = m - v,
				S = y - d;
			w > S ? y = d + w : m = v + S;
			var k = su();
			if (k.add = function(n) {
				i(k, n, +M(n, ++g), +x(n, g), v, d, m, y)
			}, k.visit = function(n) {
				fu(n, k, v, d, m, y)
			}, k.find = function(n) {
				return hu(k, n[0], n[1], v, d, m, y)
			}, g = -1, null == t) {
				for (; ++g < p;) i(k, n[g], f[g], h[g], v, d, m, y);
				--g
			} else n.forEach(k.add);
			return f = h = n = s = null, k
		}
		var o, a = Ar,
			c = Nr;
		return (o = arguments.length) ? (a = cu, c = lu, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
			return arguments.length ? (a = n, i) : a
		}, i.y = function(n) {
			return arguments.length ? (c = n, i) : c
		}, i.extent = function(n) {
			return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
				[t, e],
				[r, u]
			]
		}, i.size = function(n) {
			return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
		}, i)
	}, ta.interpolateRgb = gu, ta.interpolateObject = pu, ta.interpolateNumber = vu, ta.interpolateString = du;
	var il = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		ol = new RegExp(il.source, "g");
	ta.interpolate = mu, ta.interpolators = [function(n, t) {
		var e = typeof t;
		return ("string" === e ? Ga.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? gu : du : t instanceof ot ? gu : Array.isArray(t) ? yu : "object" === e && isNaN(t) ? pu : vu)(n, t)
	}], ta.interpolateArray = yu;
	var al = function() {
			return y
		},
		cl = ta.map({
			linear: al,
			poly: ku,
			quad: function() {
				return _u
			},
			cubic: function() {
				return wu
			},
			sin: function() {
				return Eu
			},
			exp: function() {
				return Au
			},
			circle: function() {
				return Nu
			},
			elastic: Cu,
			back: zu,
			bounce: function() {
				return qu
			}
		}),
		ll = ta.map({
			"in": y,
			out: xu,
			"in-out": bu,
			"out-in": function(n) {
				return bu(xu(n))
			}
		});
	ta.ease = function(n) {
		var t = n.indexOf("-"),
			e = t >= 0 ? n.slice(0, t) : n,
			r = t >= 0 ? n.slice(t + 1) : "in";
		return e = cl.get(e) || al, r = ll.get(r) || y, Mu(r(e.apply(null, ea.call(arguments, 1))))
	}, ta.interpolateHcl = Lu, ta.interpolateHsl = Tu, ta.interpolateLab = Ru, ta.interpolateRound = Du, ta.transform = function(n) {
		var t = ua.createElementNS(ta.ns.prefix.svg, "g");
		return (ta.transform = function(n) {
			if (null != n) {
				t.setAttribute("transform", n);
				var e = t.transform.baseVal.consolidate()
			}
			return new Pu(e ? e.matrix : sl)
		})(n)
	}, Pu.prototype.toString = function() {
		return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
	};
	var sl = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	};
	ta.interpolateTransform = Hu, ta.layout = {}, ta.layout.bundle = function() {
		return function(n) {
			for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Yu(n[e]));
			return t
		}
	}, ta.layout.chord = function() {
		function n() {
			var n, l, f, h, g, p = {},
				v = [],
				d = ta.range(i),
				m = [];
			for (e = [], r = [], n = 0, h = -1; ++h < i;) {
				for (l = 0, g = -1; ++g < i;) l += u[h][g];
				v.push(l), m.push(ta.range(i)), n += l
			}
			for (o && d.sort(function(n, t) {
				return o(v[n], v[t])
			}), a && m.forEach(function(n, t) {
				n.sort(function(n, e) {
					return a(u[t][n], u[t][e])
				})
			}), n = (La - s * i) / n, l = 0, h = -1; ++h < i;) {
				for (f = l, g = -1; ++g < i;) {
					var y = d[h],
						M = m[y][g],
						x = u[y][M],
						b = l,
						_ = l += x * n;
					p[y + "-" + M] = {
						index: y,
						subindex: M,
						startAngle: b,
						endAngle: _,
						value: x
					}
				}
				r[y] = {
					index: y,
					startAngle: f,
					endAngle: l,
					value: (l - f) / n
				}, l += s
			}
			for (h = -1; ++h < i;) for (g = h - 1; ++g < i;) {
				var w = p[h + "-" + g],
					S = p[g + "-" + h];
				(w.value || S.value) && e.push(w.value < S.value ? {
					source: S,
					target: w
				} : {
					source: w,
					target: S
				})
			}
			c && t()
		}
		function t() {
			e.sort(function(n, t) {
				return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
			})
		}
		var e, r, u, i, o, a, c, l = {},
			s = 0;
		return l.matrix = function(n) {
			return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u
		}, l.padding = function(n) {
			return arguments.length ? (s = n, e = r = null, l) : s
		}, l.sortGroups = function(n) {
			return arguments.length ? (o = n, e = r = null, l) : o
		}, l.sortSubgroups = function(n) {
			return arguments.length ? (a = n, e = null, l) : a
		}, l.sortChords = function(n) {
			return arguments.length ? (c = n, e && t(), l) : c
		}, l.chords = function() {
			return e || n(), e
		}, l.groups = function() {
			return r || n(), r
		}, l
	}, ta.layout.force = function() {
		function n(n) {
			return function(t, e, r, u) {
				if (t.point !== n) {
					var i = t.cx - n.x,
						o = t.cy - n.y,
						a = u - e,
						c = i * i + o * o;
					if (c > a * a / d) {
						if (p > c) {
							var l = t.charge / c;
							n.px -= i * l, n.py -= o * l
						}
						return !0
					}
					if (t.point && c && p > c) {
						var l = t.pointCharge / c;
						n.px -= i * l, n.py -= o * l
					}
				}
				return !t.charge
			}
		}
		function t(n) {
			n.px = ta.event.x, n.py = ta.event.y, a.resume()
		}
		var e, r, u, i, o, a = {},
			c = ta.dispatch("start", "tick", "end"),
			l = [1, 1],
			s = .9,
			f = fl,
			h = hl,
			g = -30,
			p = gl,
			v = .1,
			d = .64,
			m = [],
			M = [];
		return a.tick = function() {
			if ((r *= .99) < .005) return c.end({
				type: "end",
				alpha: r = 0
			}), !0;
			var t, e, a, f, h, p, d, y, x, b = m.length,
				_ = M.length;
			for (e = 0; _ > e; ++e) a = M[e], f = a.source, h = a.target, y = h.x - f.x, x = h.y - f.y, (p = y * y + x * x) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, y *= p, x *= p, h.x -= y * (d = f.weight / (h.weight + f.weight)), h.y -= x * d, f.x += y * (d = 1 - d), f.y += x * d);
			if ((d = r * v) && (y = l[0] / 2, x = l[1] / 2, e = -1, d)) for (; ++e < b;) a = m[e], a.x += (y - a.x) * d, a.y += (x - a.y) * d;
			if (g) for (Ju(t = ta.geom.quadtree(m), r, o), e = -1; ++e < b;)(a = m[e]).fixed || t.visit(n(a));
			for (e = -1; ++e < b;) a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s);
			c.tick({
				type: "tick",
				alpha: r
			})
		}, a.nodes = function(n) {
			return arguments.length ? (m = n, a) : m
		}, a.links = function(n) {
			return arguments.length ? (M = n, a) : M
		}, a.size = function(n) {
			return arguments.length ? (l = n, a) : l
		}, a.linkDistance = function(n) {
			return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
		}, a.distance = a.linkDistance, a.linkStrength = function(n) {
			return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
		}, a.friction = function(n) {
			return arguments.length ? (s = +n, a) : s
		}, a.charge = function(n) {
			return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
		}, a.chargeDistance = function(n) {
			return arguments.length ? (p = n * n, a) : Math.sqrt(p)
		}, a.gravity = function(n) {
			return arguments.length ? (v = +n, a) : v
		}, a.theta = function(n) {
			return arguments.length ? (d = n * n, a) : Math.sqrt(d)
		}, a.alpha = function(n) {
			return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
				type: "start",
				alpha: r = n
			}), ta.timer(a.tick)), a) : r
		}, a.start = function() {
			function n(n, r) {
				if (!e) {
					for (e = new Array(c), a = 0; c > a; ++a) e[a] = [];
					for (a = 0; s > a; ++a) {
						var u = M[a];
						e[u.source.index].push(u.target), e[u.target.index].push(u.source)
					}
				}
				for (var i, o = e[t], a = -1, l = o.length; ++a < l;) if (!isNaN(i = o[a][n])) return i;
				return Math.random() * r
			}
			var t, e, r, c = m.length,
				s = M.length,
				p = l[0],
				v = l[1];
			for (t = 0; c > t; ++t)(r = m[t]).index = t, r.weight = 0;
			for (t = 0; s > t; ++t) r = M[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
			for (t = 0; c > t; ++t) r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
			if (u = [], "function" == typeof f) for (t = 0; s > t; ++t) u[t] = +f.call(this, M[t], t);
			else for (t = 0; s > t; ++t) u[t] = f;
			if (i = [], "function" == typeof h) for (t = 0; s > t; ++t) i[t] = +h.call(this, M[t], t);
			else for (t = 0; s > t; ++t) i[t] = h;
			if (o = [], "function" == typeof g) for (t = 0; c > t; ++t) o[t] = +g.call(this, m[t], t);
			else for (t = 0; c > t; ++t) o[t] = g;
			return a.resume()
		}, a.resume = function() {
			return a.alpha(.1)
		}, a.stop = function() {
			return a.alpha(0)
		}, a.drag = function() {
			return e || (e = ta.behavior.drag().origin(y).on("dragstart.force", Xu).on("drag.force", t).on("dragend.force", $u)), arguments.length ? void this.on("mouseover.force", Bu).on("mouseout.force", Wu).call(e) : e
		}, ta.rebind(a, c, "on")
	};
	var fl = 20,
		hl = 1,
		gl = 1 / 0;
	ta.layout.hierarchy = function() {
		function n(u) {
			var i, o = [u],
				a = [];
			for (u.depth = 0; null != (i = o.pop());) if (a.push(i), (l = e.call(n, i, i.depth)) && (c = l.length)) {
				for (var c, l, s; --c >= 0;) o.push(s = l[c]), s.parent = i, s.depth = i.depth + 1;
				r && (i.value = 0), i.children = l
			} else r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children;
			return Qu(u, function(n) {
				var e, u;
				t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value)
			}), a
		}
		var t = ei,
			e = ni,
			r = ti;
		return n.sort = function(e) {
			return arguments.length ? (t = e, n) : t
		}, n.children = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.value = function(t) {
			return arguments.length ? (r = t, n) : r
		}, n.revalue = function(t) {
			return r && (Ku(t, function(n) {
				n.children && (n.value = 0)
			}), Qu(t, function(t) {
				var e;
				t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
			})), t
		}, n
	}, ta.layout.partition = function() {
		function n(t, e, r, u) {
			var i = t.children;
			if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
				var o, a, c, l = -1;
				for (r = t.value ? r / t.value : 0; ++l < o;) n(a = i[l], e, c = a.value * r, u), e += c
			}
		}
		function t(n) {
			var e = n.children,
				r = 0;
			if (e && (u = e.length)) for (var u, i = -1; ++i < u;) r = Math.max(r, t(e[i]));
			return 1 + r
		}
		function e(e, i) {
			var o = r.call(this, e, i);
			return n(o[0], 0, u[0], u[1] / t(o[0])), o
		}
		var r = ta.layout.hierarchy(),
			u = [1, 1];
		return e.size = function(n) {
			return arguments.length ? (u = n, e) : u
		}, Gu(e, r)
	}, ta.layout.pie = function() {
		function n(o) {
			var a, c = o.length,
				l = o.map(function(e, r) {
					return +t.call(n, e, r)
				}),
				s = +("function" == typeof r ? r.apply(this, arguments) : r),
				f = ("function" == typeof u ? u.apply(this, arguments) : u) - s,
				h = Math.min(Math.abs(f) / c, +("function" == typeof i ? i.apply(this, arguments) : i)),
				g = h * (0 > f ? -1 : 1),
				p = (f - c * g) / ta.sum(l),
				v = ta.range(c),
				d = [];
			return null != e && v.sort(e === pl ?
			function(n, t) {
				return l[t] - l[n]
			} : function(n, t) {
				return e(o[n], o[t])
			}), v.forEach(function(n) {
				d[n] = {
					data: o[n],
					value: a = l[n],
					startAngle: s,
					endAngle: s += a * p + g,
					padAngle: h
				}
			}), d
		}
		var t = Number,
			e = pl,
			r = 0,
			u = La,
			i = 0;
		return n.value = function(e) {
			return arguments.length ? (t = e, n) : t
		}, n.sort = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.startAngle = function(t) {
			return arguments.length ? (r = t, n) : r
		}, n.endAngle = function(t) {
			return arguments.length ? (u = t, n) : u
		}, n.padAngle = function(t) {
			return arguments.length ? (i = t, n) : i
		}, n
	};
	var pl = {};
	ta.layout.stack = function() {
		function n(a, c) {
			if (!(h = a.length)) return a;
			var l = a.map(function(e, r) {
				return t.call(n, e, r)
			}),
				s = l.map(function(t) {
					return t.map(function(t, e) {
						return [i.call(n, t, e), o.call(n, t, e)]
					})
				}),
				f = e.call(n, s, c);
			l = ta.permute(l, f), s = ta.permute(s, f);
			var h, g, p, v, d = r.call(n, s, c),
				m = l[0].length;
			for (p = 0; m > p; ++p) for (u.call(n, l[0][p], v = d[p], s[0][p][1]), g = 1; h > g; ++g) u.call(n, l[g][p], v += s[g - 1][p][1], s[g][p][1]);
			return a
		}
		var t = y,
			e = ai,
			r = ci,
			u = oi,
			i = ui,
			o = ii;
		return n.values = function(e) {
			return arguments.length ? (t = e, n) : t
		}, n.order = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : vl.get(t) || ai, n) : e
		}, n.offset = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : dl.get(t) || ci, n) : r
		}, n.x = function(t) {
			return arguments.length ? (i = t, n) : i
		}, n.y = function(t) {
			return arguments.length ? (o = t, n) : o
		}, n.out = function(t) {
			return arguments.length ? (u = t, n) : u
		}, n
	};
	var vl = ta.map({
		"inside-out": function(n) {
			var t, e, r = n.length,
				u = n.map(li),
				i = n.map(si),
				o = ta.range(r).sort(function(n, t) {
					return u[n] - u[t]
				}),
				a = 0,
				c = 0,
				l = [],
				s = [];
			for (t = 0; r > t; ++t) e = o[t], c > a ? (a += i[e], l.push(e)) : (c += i[e], s.push(e));
			return s.reverse().concat(l)
		},
		reverse: function(n) {
			return ta.range(n.length).reverse()
		},
		"default": ai
	}),
		dl = ta.map({
			silhouette: function(n) {
				var t, e, r, u = n.length,
					i = n[0].length,
					o = [],
					a = 0,
					c = [];
				for (e = 0; i > e; ++e) {
					for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
					r > a && (a = r), o.push(r)
				}
				for (e = 0; i > e; ++e) c[e] = (a - o[e]) / 2;
				return c
			},
			wiggle: function(n) {
				var t, e, r, u, i, o, a, c, l, s = n.length,
					f = n[0],
					h = f.length,
					g = [];
				for (g[0] = c = l = 0, e = 1; h > e; ++e) {
					for (t = 0, u = 0; s > t; ++t) u += n[t][e][1];
					for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; s > t; ++t) {
						for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
						i += o * n[t][e][1]
					}
					g[e] = c -= u ? i / u * a : 0, l > c && (l = c)
				}
				for (e = 0; h > e; ++e) g[e] -= l;
				return g
			},
			expand: function(n) {
				var t, e, r, u = n.length,
					i = n[0].length,
					o = 1 / u,
					a = [];
				for (e = 0; i > e; ++e) {
					for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
					if (r) for (t = 0; u > t; t++) n[t][e][1] /= r;
					else for (t = 0; u > t; t++) n[t][e][1] = o
				}
				for (e = 0; i > e; ++e) a[e] = 0;
				return a
			},
			zero: ci
		});
	ta.layout.histogram = function() {
		function n(n, i) {
			for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
			if (g > 0) for (i = -1; ++i < h;) a = l[i], a >= s[0] && a <= s[1] && (o = c[ta.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
			return c
		}
		var t = !0,
			e = Number,
			r = pi,
			u = hi;
		return n.value = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.range = function(t) {
			return arguments.length ? (r = Et(t), n) : r
		}, n.bins = function(t) {
			return arguments.length ? (u = "number" == typeof t ?
			function(n) {
				return gi(n, t)
			} : Et(t), n) : u
		}, n.frequency = function(e) {
			return arguments.length ? (t = !! e, n) : t
		}, n
	}, ta.layout.pack = function() {
		function n(n, i) {
			var o = e.call(this, n, i),
				a = o[0],
				c = u[0],
				l = u[1],
				s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
					return t
				};
			if (a.x = a.y = 0, Qu(a, function(n) {
				n.r = +s(n.value)
			}), Qu(a, Mi), r) {
				var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
				Qu(a, function(n) {
					n.r += f
				}), Qu(a, Mi), Qu(a, function(n) {
					n.r -= f
				})
			}
			return _i(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o
		}
		var t, e = ta.layout.hierarchy().sort(vi),
			r = 0,
			u = [1, 1];
		return n.size = function(t) {
			return arguments.length ? (u = t, n) : u
		}, n.radius = function(e) {
			return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
		}, n.padding = function(t) {
			return arguments.length ? (r = +t, n) : r
		}, Gu(n, e)
	}, ta.layout.tree = function() {
		function n(n, u) {
			var s = o.call(this, n, u),
				f = s[0],
				h = t(f);
			if (Qu(h, e), h.parent.m = -h.z, Ku(h, r), l) Ku(f, i);
			else {
				var g = f,
					p = f,
					v = f;
				Ku(f, function(n) {
					n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n)
				});
				var d = a(g, p) / 2 - g.x,
					m = c[0] / (p.x + a(p, g) / 2 + d),
					y = c[1] / (v.depth || 1);
				Ku(f, function(n) {
					n.x = (n.x + d) * m, n.y = n.depth * y
				})
			}
			return s
		}
		function t(n) {
			for (var t, e = {
				A: null,
				children: [n]
			}, r = [e]; null != (t = r.pop());) for (var u, i = t.children, o = 0, a = i.length; a > o; ++o) r.push((i[o] = u = {
				_: i[o],
				parent: t,
				children: (u = i[o].children) && u.slice() || [],
				A: null,
				a: null,
				z: 0,
				m: 0,
				c: 0,
				s: 0,
				t: null,
				i: o
			}).a = u);
			return e.children[0]
		}
		function e(n) {
			var t = n.children,
				e = n.parent.children,
				r = n.i ? e[n.i - 1] : null;
			if (t.length) {
				Ni(n);
				var i = (t[0].z + t[t.length - 1].z) / 2;
				r ? (n.z = r.z + a(n._, r._), n.m = n.z - i) : n.z = i
			} else r && (n.z = r.z + a(n._, r._));
			n.parent.A = u(n, r, n.parent.A || e[0])
		}
		function r(n) {
			n._.x = n.z + n.parent.m, n.m += n.parent.m
		}
		function u(n, t, e) {
			if (t) {
				for (var r, u = n, i = n, o = t, c = u.parent.children[0], l = u.m, s = i.m, f = o.m, h = c.m; o = Ei(o), u = ki(u), o && u;) c = ki(c), i = Ei(i), i.a = n, r = o.z + f - u.z - l + a(o._, u._), r > 0 && (Ai(Ci(o, n, e), n, r), l += r, s += r), f += o.m, l += u.m, h += c.m, s += i.m;
				o && !Ei(i) && (i.t = o, i.m += f - s), u && !ki(c) && (c.t = u, c.m += l - h, e = n)
			}
			return e
		}
		function i(n) {
			n.x *= c[0], n.y = n.depth * c[1]
		}
		var o = ta.layout.hierarchy().sort(null).value(null),
			a = Si,
			c = [1, 1],
			l = null;
		return n.separation = function(t) {
			return arguments.length ? (a = t, n) : a
		}, n.size = function(t) {
			return arguments.length ? (l = null == (c = t) ? i : null, n) : l ? null : c
		}, n.nodeSize = function(t) {
			return arguments.length ? (l = null == (c = t) ? null : i, n) : l ? c : null
		}, Gu(n, o)
	}, ta.layout.cluster = function() {
		function n(n, i) {
			var o, a = t.call(this, n, i),
				c = a[0],
				l = 0;
			Qu(c, function(n) {
				var t = n.children;
				t && t.length ? (n.x = qi(t), n.y = zi(t)) : (n.x = o ? l += e(n, o) : 0, n.y = 0, o = n)
			});
			var s = Li(c),
				f = Ti(c),
				h = s.x - e(s, f) / 2,
				g = f.x + e(f, s) / 2;
			return Qu(c, u ?
			function(n) {
				n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
			} : function(n) {
				n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
			}), a
		}
		var t = ta.layout.hierarchy().sort(null).value(null),
			e = Si,
			r = [1, 1],
			u = !1;
		return n.separation = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.size = function(t) {
			return arguments.length ? (u = null == (r = t), n) : u ? null : r
		}, n.nodeSize = function(t) {
			return arguments.length ? (u = null != (r = t), n) : u ? r : null
		}, Gu(n, t)
	}, ta.layout.treemap = function() {
		function n(n, t) {
			for (var e, r, u = -1, i = n.length; ++u < i;) r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
		}
		function t(e) {
			var i = e.children;
			if (i && i.length) {
				var o, a, c, l = f(e),
					s = [],
					h = i.slice(),
					p = 1 / 0,
					v = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
				for (n(h, l.dx * l.dy / e.value), s.area = 0;
				(c = h.length) > 0;) s.push(o = h[c - 1]), s.area += o.area, "squarify" !== g || (a = r(s, v)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, v, l, !1), v = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
				s.length && (u(s, v, l, !0), s.length = s.area = 0), i.forEach(t)
			}
		}
		function e(t) {
			var r = t.children;
			if (r && r.length) {
				var i, o = f(t),
					a = r.slice(),
					c = [];
				for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
				r.forEach(e)
			}
		}
		function r(n, t) {
			for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (i > e && (i = e), e > u && (u = e));
			return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
		}
		function u(n, t, e, r) {
			var u, i = -1,
				o = n.length,
				a = e.x,
				l = e.y,
				s = t ? c(n.area / t) : 0;
			if (t == e.dx) {
				for ((r || s > e.dy) && (s = e.dy); ++i < o;) u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
				u.z = !0, u.dx += e.x + e.dx - a, e.y += s, e.dy -= s
			} else {
				for ((r || s > e.dx) && (s = e.dx); ++i < o;) u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
				u.z = !1, u.dy += e.y + e.dy - l, e.x += s, e.dx -= s
			}
		}
		function i(r) {
			var u = o || a(r),
				i = u[0];
			return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
		}
		var o, a = ta.layout.hierarchy(),
			c = Math.round,
			l = [1, 1],
			s = null,
			f = Ri,
			h = !1,
			g = "squarify",
			p = .5 * (1 + Math.sqrt(5));
		return i.size = function(n) {
			return arguments.length ? (l = n, i) : l
		}, i.padding = function(n) {
			function t(t) {
				var e = n.call(i, t, t.depth);
				return null == e ? Ri(t) : Di(t, "number" == typeof e ? [e, e, e, e] : e)
			}
			function e(t) {
				return Di(t, n)
			}
			if (!arguments.length) return s;
			var r;
			return f = null == (s = n) ? Ri : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
		}, i.round = function(n) {
			return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
		}, i.sticky = function(n) {
			return arguments.length ? (h = n, o = null, i) : h
		}, i.ratio = function(n) {
			return arguments.length ? (p = n, i) : p
		}, i.mode = function(n) {
			return arguments.length ? (g = n + "", i) : g
		}, Gu(i, a)
	}, ta.random = {
		normal: function(n, t) {
			var e = arguments.length;
			return 2 > e && (t = 1), 1 > e && (n = 0), function() {
				var e, r, u;
				do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r;
				while (!u || u > 1);
				return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
			}
		},
		logNormal: function() {
			var n = ta.random.normal.apply(ta, arguments);
			return function() {
				return Math.exp(n())
			}
		},
		bates: function(n) {
			var t = ta.random.irwinHall(n);
			return function() {
				return t() / n
			}
		},
		irwinHall: function(n) {
			return function() {
				for (var t = 0, e = 0; n > e; e++) t += Math.random();
				return t
			}
		}
	}, ta.scale = {};
	var ml = {
		floor: y,
		ceil: y
	};
	ta.scale.linear = function() {
		return Ii([0, 1], [0, 1], mu, !1)
	};
	var yl = {
		s: 1,
		g: 1,
		p: 1,
		r: 1,
		e: 1
	};
	ta.scale.log = function() {
		return Ji(ta.scale.linear().domain([0, 1]), 10, !0, [1, 10])
	};
	var Ml = ta.format(".0e"),
		xl = {
			floor: function(n) {
				return -Math.ceil(-n)
			},
			ceil: function(n) {
				return -Math.floor(-n)
			}
		};
	ta.scale.pow = function() {
		return Gi(ta.scale.linear(), 1, [0, 1])
	}, ta.scale.sqrt = function() {
		return ta.scale.pow().exponent(.5)
	}, ta.scale.ordinal = function() {
		return Qi([], {
			t: "range",
			a: [
				[]
			]
		})
	}, ta.scale.category10 = function() {
		return ta.scale.ordinal().range(bl)
	}, ta.scale.category20 = function() {
		return ta.scale.ordinal().range(_l)
	}, ta.scale.category20b = function() {
		return ta.scale.ordinal().range(wl)
	}, ta.scale.category20c = function() {
		return ta.scale.ordinal().range(Sl)
	};
	var bl = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(Mt),
		_l = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(Mt),
		wl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(Mt),
		Sl = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(Mt);
	ta.scale.quantile = function() {
		return no([], [])
	}, ta.scale.quantize = function() {
		return to(0, 1, [0, 1])
	}, ta.scale.threshold = function() {
		return eo([.5], [0, 1])
	}, ta.scale.identity = function() {
		return ro([0, 1])
	}, ta.svg = {}, ta.svg.arc = function() {
		function n() {
			var n = Math.max(0, +e.apply(this, arguments)),
				l = Math.max(0, +r.apply(this, arguments)),
				s = o.apply(this, arguments) - Ra,
				f = a.apply(this, arguments) - Ra,
				h = Math.abs(f - s),
				g = s > f ? 0 : 1;
			if (n > l && (p = l, l = n, n = p), h >= Ta) return t(l, g) + (n ? t(n, 1 - g) : "") + "Z";
			var p, v, d, m, y, M, x, b, _, w, S, k, E = 0,
				A = 0,
				N = [];
			if ((m = (+c.apply(this, arguments) || 0) / 2) && (d = i === kl ? Math.sqrt(n * n + l * l) : +i.apply(this, arguments), g || (A *= -1), l && (A = tt(d / l * Math.sin(m))), n && (E = tt(d / n * Math.sin(m)))), l) {
				y = l * Math.cos(s + A), M = l * Math.sin(s + A), x = l * Math.cos(f - A), b = l * Math.sin(f - A);
				var C = Math.abs(f - s - 2 * A) <= qa ? 0 : 1;
				if (A && so(y, M, x, b) === g ^ C) {
					var z = (s + f) / 2;
					y = l * Math.cos(z), M = l * Math.sin(z), x = b = null
				}
			} else y = M = 0;
			if (n) {
				_ = n * Math.cos(f - E), w = n * Math.sin(f - E), S = n * Math.cos(s + E), k = n * Math.sin(s + E);
				var q = Math.abs(s - f + 2 * E) <= qa ? 0 : 1;
				if (E && so(_, w, S, k) === 1 - g ^ q) {
					var L = (s + f) / 2;
					_ = n * Math.cos(L), w = n * Math.sin(L), S = k = null
				}
			} else _ = w = 0;
			if ((p = Math.min(Math.abs(l - n) / 2, +u.apply(this, arguments))) > .001) {
				v = l > n ^ g ? 0 : 1;
				var T = null == S ? [_, w] : null == x ? [y, M] : Lr([y, M], [S, k], [x, b], [_, w]),
					R = y - T[0],
					D = M - T[1],
					P = x - T[0],
					U = b - T[1],
					j = 1 / Math.sin(Math.acos((R * P + D * U) / (Math.sqrt(R * R + D * D) * Math.sqrt(P * P + U * U))) / 2),
					F = Math.sqrt(T[0] * T[0] + T[1] * T[1]);
				if (null != x) {
					var H = Math.min(p, (l - F) / (j + 1)),
						O = fo(null == S ? [_, w] : [S, k], [y, M], l, H, g),
						I = fo([x, b], [_, w], l, H, g);
					p === H ? N.push("M", O[0], "A", H, ",", H, " 0 0,", v, " ", O[1], "A", l, ",", l, " 0 ", 1 - g ^ so(O[1][0], O[1][1], I[1][0], I[1][1]), ",", g, " ", I[1], "A", H, ",", H, " 0 0,", v, " ", I[0]) : N.push("M", O[0], "A", H, ",", H, " 0 1,", v, " ", I[0])
				} else N.push("M", y, ",", M);
				if (null != S) {
					var Y = Math.min(p, (n - F) / (j - 1)),
						Z = fo([y, M], [S, k], n, -Y, g),
						V = fo([_, w], null == x ? [y, M] : [x, b], n, -Y, g);
					p === Y ? N.push("L", V[0], "A", Y, ",", Y, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", g ^ so(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - g, " ", Z[1], "A", Y, ",", Y, " 0 0,", v, " ", Z[0]) : N.push("L", V[0], "A", Y, ",", Y, " 0 0,", v, " ", Z[0])
				} else N.push("L", _, ",", w)
			} else N.push("M", y, ",", M), null != x && N.push("A", l, ",", l, " 0 ", C, ",", g, " ", x, ",", b), N.push("L", _, ",", w), null != S && N.push("A", n, ",", n, " 0 ", q, ",", 1 - g, " ", S, ",", k);
			return N.push("Z"), N.join("")
		}
		function t(n, t) {
			return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n
		}
		var e = io,
			r = oo,
			u = uo,
			i = kl,
			o = ao,
			a = co,
			c = lo;
		return n.innerRadius = function(t) {
			return arguments.length ? (e = Et(t), n) : e
		}, n.outerRadius = function(t) {
			return arguments.length ? (r = Et(t), n) : r
		}, n.cornerRadius = function(t) {
			return arguments.length ? (u = Et(t), n) : u
		}, n.padRadius = function(t) {
			return arguments.length ? (i = t == kl ? kl : Et(t), n) : i
		}, n.startAngle = function(t) {
			return arguments.length ? (o = Et(t), n) : o
		}, n.endAngle = function(t) {
			return arguments.length ? (a = Et(t), n) : a
		}, n.padAngle = function(t) {
			return arguments.length ? (c = Et(t), n) : c
		}, n.centroid = function() {
			var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
				t = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ra;
			return [Math.cos(t) * n, Math.sin(t) * n]
		}, n
	};
	var kl = "auto";
	ta.svg.line = function() {
		return ho(y)
	};
	var El = ta.map({
		linear: go,
		"linear-closed": po,
		step: vo,
		"step-before": mo,
		"step-after": yo,
		basis: So,
		"basis-open": ko,
		"basis-closed": Eo,
		bundle: Ao,
		cardinal: bo,
		"cardinal-open": Mo,
		"cardinal-closed": xo,
		monotone: To
	});
	El.forEach(function(n, t) {
		t.key = n, t.closed = /-closed$/.test(n)
	});
	var Al = [0, 2 / 3, 1 / 3, 0],
		Nl = [0, 1 / 3, 2 / 3, 0],
		Cl = [0, 1 / 6, 2 / 3, 1 / 6];
	ta.svg.line.radial = function() {
		var n = ho(Ro);
		return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
	}, mo.reverse = yo, yo.reverse = mo, ta.svg.area = function() {
		return Do(y)
	}, ta.svg.area.radial = function() {
		var n = Do(Ro);
		return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
	}, ta.svg.chord = function() {
		function n(n, a) {
			var c = t(this, i, n, a),
				l = t(this, o, n, a);
			return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
		}
		function t(n, t, e, r) {
			var u = t.call(n, e, r),
				i = a.call(n, u, r),
				o = c.call(n, u, r) - Ra,
				s = l.call(n, u, r) - Ra;
			return {
				r: i,
				a0: o,
				a1: s,
				p0: [i * Math.cos(o), i * Math.sin(o)],
				p1: [i * Math.cos(s), i * Math.sin(s)]
			}
		}
		function e(n, t) {
			return n.a0 == t.a0 && n.a1 == t.a1
		}
		function r(n, t, e) {
			return "A" + n + "," + n + " 0 " + +(e > qa) + ",1 " + t
		}
		function u(n, t, e, r) {
			return "Q 0,0 " + r
		}
		var i = mr,
			o = yr,
			a = Po,
			c = ao,
			l = co;
		return n.radius = function(t) {
			return arguments.length ? (a = Et(t), n) : a
		}, n.source = function(t) {
			return arguments.length ? (i = Et(t), n) : i
		}, n.target = function(t) {
			return arguments.length ? (o = Et(t), n) : o
		}, n.startAngle = function(t) {
			return arguments.length ? (c = Et(t), n) : c
		}, n.endAngle = function(t) {
			return arguments.length ? (l = Et(t), n) : l
		}, n
	}, ta.svg.diagonal = function() {
		function n(n, u) {
			var i = t.call(this, n, u),
				o = e.call(this, n, u),
				a = (i.y + o.y) / 2,
				c = [i,
				{
					x: i.x,
					y: a
				}, {
					x: o.x,
					y: a
				},
				o];
			return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
		}
		var t = mr,
			e = yr,
			r = Uo;
		return n.source = function(e) {
			return arguments.length ? (t = Et(e), n) : t
		}, n.target = function(t) {
			return arguments.length ? (e = Et(t), n) : e
		}, n.projection = function(t) {
			return arguments.length ? (r = t, n) : r
		}, n
	}, ta.svg.diagonal.radial = function() {
		var n = ta.svg.diagonal(),
			t = Uo,
			e = n.projection;
		return n.projection = function(n) {
			return arguments.length ? e(jo(t = n)) : t
		}, n
	}, ta.svg.symbol = function() {
		function n(n, r) {
			return (zl.get(t.call(this, n, r)) || Oo)(e.call(this, n, r))
		}
		var t = Ho,
			e = Fo;
		return n.type = function(e) {
			return arguments.length ? (t = Et(e), n) : t
		}, n.size = function(t) {
			return arguments.length ? (e = Et(t), n) : e
		}, n
	};
	var zl = ta.map({
		circle: Oo,
		cross: function(n) {
			var t = Math.sqrt(n / 5) / 2;
			return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
		},
		diamond: function(n) {
			var t = Math.sqrt(n / (2 * Ll)),
				e = t * Ll;
			return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"
		},
		square: function(n) {
			var t = Math.sqrt(n) / 2;
			return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
		},
		"triangle-down": function(n) {
			var t = Math.sqrt(n / ql),
				e = t * ql / 2;
			return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
		},
		"triangle-up": function(n) {
			var t = Math.sqrt(n / ql),
				e = t * ql / 2;
			return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
		}
	});
	ta.svg.symbolTypes = zl.keys();
	var ql = Math.sqrt(3),
		Ll = Math.tan(30 * Da);
	_a.transition = function(n) {
		for (var t, e, r = Tl || ++Ul, u = Xo(n), i = [], o = Rl || {
			time: Date.now(),
			ease: Su,
			delay: 0,
			duration: 250
		}, a = -1, c = this.length; ++a < c;) {
			i.push(t = []);
			for (var l = this[a], s = -1, f = l.length; ++s < f;)(e = l[s]) && $o(e, s, u, r, o), t.push(e)
		}
		return Yo(i, u, r)
	}, _a.interrupt = function(n) {
		return this.each(null == n ? Dl : Io(Xo(n)))
	};
	var Tl, Rl, Dl = Io(Xo()),
		Pl = [],
		Ul = 0;
	Pl.call = _a.call, Pl.empty = _a.empty, Pl.node = _a.node, Pl.size = _a.size, ta.transition = function(n, t) {
		return n && n.transition ? Tl ? n.transition(t) : n : ta.selection().transition(n)
	}, ta.transition.prototype = Pl, Pl.select = function(n) {
		var t, e, r, u = this.id,
			i = this.namespace,
			o = [];
		n = N(n);
		for (var a = -1, c = this.length; ++a < c;) {
			o.push(t = []);
			for (var l = this[a], s = -1, f = l.length; ++s < f;)(r = l[s]) && (e = n.call(r, r.__data__, s, a)) ? ("__data__" in r && (e.__data__ = r.__data__), $o(e, s, i, u, r[i][u]), t.push(e)) : t.push(null)
		}
		return Yo(o, i, u)
	}, Pl.selectAll = function(n) {
		var t, e, r, u, i, o = this.id,
			a = this.namespace,
			c = [];
		n = C(n);
		for (var l = -1, s = this.length; ++l < s;) for (var f = this[l], h = -1, g = f.length; ++h < g;) if (r = f[h]) {
			i = r[a][o], e = n.call(r, r.__data__, h, l), c.push(t = []);
			for (var p = -1, v = e.length; ++p < v;)(u = e[p]) && $o(u, p, a, o, i), t.push(u)
		}
		return Yo(c, a, o)
	}, Pl.filter = function(n) {
		var t, e, r, u = [];
		"function" != typeof n && (n = O(n));
		for (var i = 0, o = this.length; o > i; i++) {
			u.push(t = []);
			for (var e = this[i], a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
		}
		return Yo(u, this.namespace, this.id)
	}, Pl.tween = function(n, t) {
		var e = this.id,
			r = this.namespace;
		return arguments.length < 2 ? this.node()[r][e].tween.get(n) : Y(this, null == t ?
		function(t) {
			t[r][e].tween.remove(n)
		} : function(u) {
			u[r][e].tween.set(n, t)
		})
	}, Pl.attr = function(n, t) {
		function e() {
			this.removeAttribute(a)
		}
		function r() {
			this.removeAttributeNS(a.space, a.local)
		}
		function u(n) {
			return null == n ? e : (n += "", function() {
				var t, e = this.getAttribute(a);
				return e !== n && (t = o(e, n), function(n) {
					this.setAttribute(a, t(n))
				})
			})
		}
		function i(n) {
			return null == n ? r : (n += "", function() {
				var t, e = this.getAttributeNS(a.space, a.local);
				return e !== n && (t = o(e, n), function(n) {
					this.setAttributeNS(a.space, a.local, t(n))
				})
			})
		}
		if (arguments.length < 2) {
			for (t in n) this.attr(t, n[t]);
			return this
		}
		var o = "transform" == n ? Hu : mu,
			a = ta.ns.qualify(n);
		return Zo(this, "attr." + n, t, a.local ? i : u)
	}, Pl.attrTween = function(n, t) {
		function e(n, e) {
			var r = t.call(this, n, e, this.getAttribute(u));
			return r &&
			function(n) {
				this.setAttribute(u, r(n))
			}
		}
		function r(n, e) {
			var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
			return r &&
			function(n) {
				this.setAttributeNS(u.space, u.local, r(n))
			}
		}
		var u = ta.ns.qualify(n);
		return this.tween("attr." + n, u.local ? r : e)
	}, Pl.style = function(n, e, r) {
		function u() {
			this.style.removeProperty(n)
		}
		function i(e) {
			return null == e ? u : (e += "", function() {
				var u, i = t(this).getComputedStyle(this, null).getPropertyValue(n);
				return i !== e && (u = mu(i, e), function(t) {
					this.style.setProperty(n, u(t), r)
				})
			})
		}
		var o = arguments.length;
		if (3 > o) {
			if ("string" != typeof n) {
				2 > o && (e = "");
				for (r in n) this.style(r, n[r], e);
				return this
			}
			r = ""
		}
		return Zo(this, "style." + n, e, i)
	}, Pl.styleTween = function(n, e, r) {
		function u(u, i) {
			var o = e.call(this, u, i, t(this).getComputedStyle(this, null).getPropertyValue(n));
			return o &&
			function(t) {
				this.style.setProperty(n, o(t), r)
			}
		}
		return arguments.length < 3 && (r = ""), this.tween("style." + n, u)
	}, Pl.text = function(n) {
		return Zo(this, "text", n, Vo)
	}, Pl.remove = function() {
		var n = this.namespace;
		return this.each("end.transition", function() {
			var t;
			this[n].count < 2 && (t = this.parentNode) && t.removeChild(this)
		})
	}, Pl.ease = function(n) {
		var t = this.id,
			e = this.namespace;
		return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = ta.ease.apply(ta, arguments)), Y(this, function(r) {
			r[e][t].ease = n
		}))
	}, Pl.delay = function(n) {
		var t = this.id,
			e = this.namespace;
		return arguments.length < 1 ? this.node()[e][t].delay : Y(this, "function" == typeof n ?
		function(r, u, i) {
			r[e][t].delay = +n.call(r, r.__data__, u, i)
		} : (n = +n, function(r) {
			r[e][t].delay = n
		}))
	}, Pl.duration = function(n) {
		var t = this.id,
			e = this.namespace;
		return arguments.length < 1 ? this.node()[e][t].duration : Y(this, "function" == typeof n ?
		function(r, u, i) {
			r[e][t].duration = Math.max(1, n.call(r, r.__data__, u, i))
		} : (n = Math.max(1, n), function(r) {
			r[e][t].duration = n
		}))
	}, Pl.each = function(n, t) {
		var e = this.id,
			r = this.namespace;
		if (arguments.length < 2) {
			var u = Rl,
				i = Tl;
			try {
				Tl = e, Y(this, function(t, u, i) {
					Rl = t[r][e], n.call(t, t.__data__, u, i)
				})
			} finally {
				Rl = u, Tl = i
			}
		} else Y(this, function(u) {
			var i = u[r][e];
			(i.event || (i.event = ta.dispatch("start", "end", "interrupt"))).on(n, t)
		});
		return this
	}, Pl.transition = function() {
		for (var n, t, e, r, u = this.id, i = ++Ul, o = this.namespace, a = [], c = 0, l = this.length; l > c; c++) {
			a.push(n = []);
			for (var t = this[c], s = 0, f = t.length; f > s; s++)(e = t[s]) && (r = e[o][u], $o(e, s, o, i, {
				time: r.time,
				ease: r.ease,
				delay: r.delay + r.duration,
				duration: r.duration
			})), n.push(e)
		}
		return Yo(a, o, i)
	}, ta.svg.axis = function() {
		function n(n) {
			n.each(function() {
				var n, l = ta.select(this),
					s = this.__chart__ || e,
					f = this.__chart__ = e.copy(),
					h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
					g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : y : t,
					p = l.selectAll(".tick").data(h, f),
					v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ca),
					d = ta.transition(p.exit()).style("opacity", Ca).remove(),
					m = ta.transition(p.order()).style("opacity", 1),
					M = Math.max(u, 0) + o,
					x = Ui(f),
					b = l.selectAll(".domain").data([0]),
					_ = (b.enter().append("path").attr("class", "domain"), ta.transition(b));
				v.append("line"), v.append("text");
				var w, S, k, E, A = v.select("line"),
					N = m.select("line"),
					C = p.select("text").text(g),
					z = v.select("text"),
					q = m.select("text"),
					L = "top" === r || "left" === r ? -1 : 1;
				if ("bottom" === r || "top" === r ? (n = Bo, w = "x", k = "y", S = "x2", E = "y2", C.attr("dy", 0 > L ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + L * i + "V0H" + x[1] + "V" + L * i)) : (n = Wo, w = "y", k = "x", S = "y2", E = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > L ? "end" : "start"), _.attr("d", "M" + L * i + "," + x[0] + "H0V" + x[1] + "H" + L * i)), A.attr(E, L * u), z.attr(k, L * M), N.attr(S, 0).attr(E, L * u), q.attr(w, 0).attr(k, L * M), f.rangeBand) {
					var T = f,
						R = T.rangeBand() / 2;
					s = f = function(n) {
						return T(n) + R
					}
				} else s.rangeBand ? s = f : d.call(n, f, s);
				v.call(n, s, f), m.call(n, f, f)
			})
		}
		var t, e = ta.scale.linear(),
			r = jl,
			u = 6,
			i = 6,
			o = 3,
			a = [10],
			c = null;
		return n.scale = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.orient = function(t) {
			return arguments.length ? (r = t in Fl ? t + "" : jl, n) : r
		}, n.ticks = function() {
			return arguments.length ? (a = arguments, n) : a
		}, n.tickValues = function(t) {
			return arguments.length ? (c = t, n) : c
		}, n.tickFormat = function(e) {
			return arguments.length ? (t = e, n) : t
		}, n.tickSize = function(t) {
			var e = arguments.length;
			return e ? (u = +t, i = +arguments[e - 1], n) : u
		}, n.innerTickSize = function(t) {
			return arguments.length ? (u = +t, n) : u
		}, n.outerTickSize = function(t) {
			return arguments.length ? (i = +t, n) : i
		}, n.tickPadding = function(t) {
			return arguments.length ? (o = +t, n) : o
		}, n.tickSubdivide = function() {
			return arguments.length && n
		}, n
	};
	var jl = "bottom",
		Fl = {
			top: 1,
			right: 1,
			bottom: 1,
			left: 1
		};
	ta.svg.brush = function() {
		function n(t) {
			t.each(function() {
				var t = ta.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i),
					o = t.selectAll(".background").data([0]);
				o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
				var a = t.selectAll(".resize").data(v, y);
				a.exit().remove(), a.enter().append("g").attr("class", function(n) {
					return "resize " + n
				}).style("cursor", function(n) {
					return Hl[n]
				}).append("rect").attr("x", function(n) {
					return /[ew]$/.test(n) ? -3 : null
				}).attr("y", function(n) {
					return /^[ns]/.test(n) ? -3 : null
				}).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
				var c, f = ta.transition(t),
					h = ta.transition(o);
				l && (c = Ui(l), h.attr("x", c[0]).attr("width", c[1] - c[0]), r(f)), s && (c = Ui(s), h.attr("y", c[0]).attr("height", c[1] - c[0]), u(f)), e(f)
			})
		}
		function e(n) {
			n.selectAll(".resize").attr("transform", function(n) {
				return "translate(" + f[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")"
			})
		}
		function r(n) {
			n.select(".extent").attr("x", f[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0])
		}
		function u(n) {
			n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
		}
		function i() {
			function i() {
				32 == ta.event.keyCode && (C || (M = null, q[0] -= f[1], q[1] -= h[1], C = 2), S())
			}
			function v() {
				32 == ta.event.keyCode && 2 == C && (q[0] += f[1], q[1] += h[1], C = 0, S())
			}
			function d() {
				var n = ta.mouse(b),
					t = !1;
				x && (n[0] += x[0], n[1] += x[1]), C || (ta.event.altKey ? (M || (M = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]), q[0] = f[+(n[0] < M[0])], q[1] = h[+(n[1] < M[1])]) : M = null), A && m(n, l, 0) && (r(k), t = !0), N && m(n, s, 1) && (u(k), t = !0), t && (e(k), w({
					type: "brush",
					mode: C ? "move" : "resize"
				}))
			}
			function m(n, t, e) {
				var r, u, i = Ui(t),
					c = i[0],
					l = i[1],
					s = q[e],
					v = e ? h : f,
					d = v[1] - v[0];
				return C && (c -= s, l -= d + s), r = (e ? p : g) ? Math.max(c, Math.min(l, n[e])) : n[e], C ? u = (r += s) + d : (M && (s = Math.max(c, Math.min(l, 2 * M[e] - r))), r > s ? (u = r, r = s) : u = s), v[0] != r || v[1] != u ? (e ? a = null : o = null, v[0] = r, v[1] = u, !0) : void 0
			}
			function y() {
				d(), k.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), ta.select("body").style("cursor", null), L.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), z(), w({
					type: "brushend"
				})
			}
			var M, x, b = this,
				_ = ta.select(ta.event.target),
				w = c.of(b, arguments),
				k = ta.select(b),
				E = _.datum(),
				A = !/^(n|s)$/.test(E) && l,
				N = !/^(e|w)$/.test(E) && s,
				C = _.classed("extent"),
				z = W(b),
				q = ta.mouse(b),
				L = ta.select(t(b)).on("keydown.brush", i).on("keyup.brush", v);
			if (ta.event.changedTouches ? L.on("touchmove.brush", d).on("touchend.brush", y) : L.on("mousemove.brush", d).on("mouseup.brush", y), k.interrupt().selectAll("*").interrupt(), C) q[0] = f[0] - q[0], q[1] = h[0] - q[1];
			else if (E) {
				var T = +/w$/.test(E),
					R = +/^n/.test(E);
				x = [f[1 - T] - q[0], h[1 - R] - q[1]], q[0] = f[T], q[1] = h[R]
			} else ta.event.altKey && (M = q.slice());
			k.style("pointer-events", "none").selectAll(".resize").style("display", null), ta.select("body").style("cursor", _.style("cursor")), w({
				type: "brushstart"
			}), d()
		}
		var o, a, c = E(n, "brushstart", "brush", "brushend"),
			l = null,
			s = null,
			f = [0, 0],
			h = [0, 0],
			g = !0,
			p = !0,
			v = Ol[0];
		return n.event = function(n) {
			n.each(function() {
				var n = c.of(this, arguments),
					t = {
						x: f,
						y: h,
						i: o,
						j: a
					},
					e = this.__chart__ || t;
				this.__chart__ = t, Tl ? ta.select(this).transition().each("start.brush", function() {
					o = e.i, a = e.j, f = e.x, h = e.y, n({
						type: "brushstart"
					})
				}).tween("brush:brush", function() {
					var e = yu(f, t.x),
						r = yu(h, t.y);
					return o = a = null, function(u) {
						f = t.x = e(u), h = t.y = r(u), n({
							type: "brush",
							mode: "resize"
						})
					}
				}).each("end.brush", function() {
					o = t.i, a = t.j, n({
						type: "brush",
						mode: "resize"
					}), n({
						type: "brushend"
					})
				}) : (n({
					type: "brushstart"
				}), n({
					type: "brush",
					mode: "resize"
				}), n({
					type: "brushend"
				}))
			})
		}, n.x = function(t) {
			return arguments.length ? (l = t, v = Ol[!l << 1 | !s], n) : l
		}, n.y = function(t) {
			return arguments.length ? (s = t, v = Ol[!l << 1 | !s], n) : s
		}, n.clamp = function(t) {
			return arguments.length ? (l && s ? (g = !! t[0], p = !! t[1]) : l ? g = !! t : s && (p = !! t), n) : l && s ? [g, p] : l ? g : s ? p : null
		}, n.extent = function(t) {
			var e, r, u, i, c;
			return arguments.length ? (l && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), o = [e, r], l.invert && (e = l(e), r = l(r)), e > r && (c = e, e = r, r = c), (e != f[0] || r != f[1]) && (f = [e, r])), s && (u = t[0], i = t[1], l && (u = u[1], i = i[1]), a = [u, i], s.invert && (u = s(u), i = s(i)), u > i && (c = u, u = i, i = c), (u != h[0] || i != h[1]) && (h = [u, i])), n) : (l && (o ? (e = o[0], r = o[1]) : (e = f[0], r = f[1], l.invert && (e = l.invert(e), r = l.invert(r)), e > r && (c = e, e = r, r = c))), s && (a ? (u = a[0], i = a[1]) : (u = h[0], i = h[1], s.invert && (u = s.invert(u), i = s.invert(i)), u > i && (c = u, u = i, i = c))), l && s ? [
				[e, u],
				[r, i]
			] : l ? [e, r] : s && [u, i])
		}, n.clear = function() {
			return n.empty() || (f = [0, 0], h = [0, 0], o = a = null), n
		}, n.empty = function() {
			return !!l && f[0] == f[1] || !! s && h[0] == h[1]
		}, ta.rebind(n, c, "on")
	};
	var Hl = {
		n: "ns-resize",
		e: "ew-resize",
		s: "ns-resize",
		w: "ew-resize",
		nw: "nwse-resize",
		ne: "nesw-resize",
		se: "nwse-resize",
		sw: "nesw-resize"
	},
		Ol = [
			["n", "e", "s", "w", "nw", "ne", "se", "sw"],
			["e", "w"],
			["n", "s"],
			[]
		],
		Il = ac.format = gc.timeFormat,
		Yl = Il.utc,
		Zl = Yl("%Y-%m-%dT%H:%M:%S.%LZ");
	Il.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Jo : Zl, Jo.parse = function(n) {
		var t = new Date(n);
		return isNaN(t) ? null : t
	}, Jo.toString = Zl.toString, ac.second = Ft(function(n) {
		return new cc(1e3 * Math.floor(n / 1e3))
	}, function(n, t) {
		n.setTime(n.getTime() + 1e3 * Math.floor(t))
	}, function(n) {
		return n.getSeconds()
	}), ac.seconds = ac.second.range, ac.seconds.utc = ac.second.utc.range, ac.minute = Ft(function(n) {
		return new cc(6e4 * Math.floor(n / 6e4))
	}, function(n, t) {
		n.setTime(n.getTime() + 6e4 * Math.floor(t))
	}, function(n) {
		return n.getMinutes()
	}), ac.minutes = ac.minute.range, ac.minutes.utc = ac.minute.utc.range, ac.hour = Ft(function(n) {
		var t = n.getTimezoneOffset() / 60;
		return new cc(36e5 * (Math.floor(n / 36e5 - t) + t))
	}, function(n, t) {
		n.setTime(n.getTime() + 36e5 * Math.floor(t))
	}, function(n) {
		return n.getHours()
	}), ac.hours = ac.hour.range, ac.hours.utc = ac.hour.utc.range, ac.month = Ft(function(n) {
		return n = ac.day(n), n.setDate(1), n
	}, function(n, t) {
		n.setMonth(n.getMonth() + t)
	}, function(n) {
		return n.getMonth()
	}), ac.months = ac.month.range, ac.months.utc = ac.month.utc.range;
	var Vl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
		Xl = [
			[ac.second, 1],
			[ac.second, 5],
			[ac.second, 15],
			[ac.second, 30],
			[ac.minute, 1],
			[ac.minute, 5],
			[ac.minute, 15],
			[ac.minute, 30],
			[ac.hour, 1],
			[ac.hour, 3],
			[ac.hour, 6],
			[ac.hour, 12],
			[ac.day, 1],
			[ac.day, 2],
			[ac.week, 1],
			[ac.month, 1],
			[ac.month, 3],
			[ac.year, 1]
		],
		$l = Il.multi([
			[".%L", function(n) {
				return n.getMilliseconds()
			}],
			[":%S", function(n) {
				return n.getSeconds()
			}],
			["%I:%M", function(n) {
				return n.getMinutes()
			}],
			["%I %p", function(n) {
				return n.getHours()
			}],
			["%a %d", function(n) {
				return n.getDay() && 1 != n.getDate()
			}],
			["%b %d", function(n) {
				return 1 != n.getDate()
			}],
			["%B", function(n) {
				return n.getMonth()
			}],
			["%Y", Ne]
		]),
		Bl = {
			range: function(n, t, e) {
				return ta.range(Math.ceil(n / e) * e, +t, e).map(Ko)
			},
			floor: y,
			ceil: y
		};
	Xl.year = ac.year, ac.scale = function() {
		return Go(ta.scale.linear(), Xl, $l)
	};
	var Wl = Xl.map(function(n) {
		return [n[0].utc, n[1]]
	}),
		Jl = Yl.multi([
			[".%L", function(n) {
				return n.getUTCMilliseconds()
			}],
			[":%S", function(n) {
				return n.getUTCSeconds()
			}],
			["%I:%M", function(n) {
				return n.getUTCMinutes()
			}],
			["%I %p", function(n) {
				return n.getUTCHours()
			}],
			["%a %d", function(n) {
				return n.getUTCDay() && 1 != n.getUTCDate()
			}],
			["%b %d", function(n) {
				return 1 != n.getUTCDate()
			}],
			["%B", function(n) {
				return n.getUTCMonth()
			}],
			["%Y", Ne]
		]);
	Wl.year = ac.year.utc, ac.scale.utc = function() {
		return Go(ta.scale.linear(), Wl, Jl)
	}, ta.text = At(function(n) {
		return n.responseText
	}), ta.json = function(n, t) {
		return Nt(n, "application/json", Qo, t)
	}, ta.html = function(n, t) {
		return Nt(n, "text/html", na, t)
	}, ta.xml = At(function(n) {
		return n.responseXML
	}), "function" == typeof define && define.amd ? define(ta) : "object" == typeof module && module.exports && (module.exports = ta), this.d3 = ta
}();
ejs = function() {
	function require(p) {
		if ("fs" == p) return {};
		if ("path" == p) return {};
		var path = require.resolve(p),
			mod = require.modules[path];
		if (!mod) throw new Error('failed to require "' + p + '"');
		if (!mod.exports) {
			mod.exports = {};
			mod.call(mod.exports, mod, mod.exports, require.relative(path))
		}
		return mod.exports
	}
	require.modules = {};
	require.resolve = function(path) {
		var orig = path,
			reg = path + ".js",
			index = path + "/index.js";
		return require.modules[reg] && reg || require.modules[index] && index || orig
	};
	require.register = function(path, fn) {
		require.modules[path] = fn
	};
	require.relative = function(parent) {
		return function(p) {
			if ("." != p.substr(0, 1)) return require(p);
			var path = parent.split("/"),
				segs = p.split("/");
			path.pop();
			for (var i = 0; i < segs.length; i++) {
				var seg = segs[i];
				if (".." == seg) path.pop();
				else if ("." != seg) path.push(seg)
			}
			return require(path.join("/"))
		}
	};
	require.register("ejs.js", function(module, exports, require) {
		var utils = require("./utils"),
			path = require("path"),
			dirname = path.dirname,
			extname = path.extname,
			join = path.join,
			fs = require("fs"),
			read = fs.readFileSync;
		var filters = exports.filters = require("./filters");
		var cache = {};
		exports.clearCache = function() {
			cache = {}
		};

		function filtered(js) {
			return js.substr(1).split("|").reduce(function(js, filter) {
				var parts = filter.split(":"),
					name = parts.shift(),
					args = parts.join(":") || "";
				if (args) args = ", " + args;
				return "filters." + name + "(" + js + args + ")"
			})
		}
		function rethrow(err, str, filename, lineno) {
			var lines = str.split("\n"),
				start = Math.max(lineno - 3, 0),
				end = Math.min(lines.length, lineno + 3);
			var context = lines.slice(start, end).map(function(line, i) {
				var curr = i + start + 1;
				return (curr == lineno ? " >> " : "    ") + curr + "| " + line
			}).join("\n");
			err.path = filename;
			err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
			throw err
		}
		var parse = exports.parse = function(str, options) {
				var options = options || {},
					open = options.open || exports.open || "<%",
					close = options.close || exports.close || "%>",
					filename = options.filename,
					compileDebug = options.compileDebug !== false,
					buf = "";
				buf += "var buf = [];";
				if (false !== options._with) buf += "\nwith (locals || {}) { (function(){ ";
				buf += "\n buf.push('";
				var lineno = 1;
				var consumeEOL = false;
				for (var i = 0, len = str.length; i < len; ++i) {
					var stri = str[i];
					if (str.slice(i, open.length + i) == open) {
						i += open.length;
						var prefix, postfix, line = (compileDebug ? "__stack.lineno=" : "") + lineno;
						switch (str[i]) {
						case "=":
							prefix = "', escape((" + line + ", ";
							postfix = ")), '";
							++i;
							break;
						case "-":
							prefix = "', (" + line + ", ";
							postfix = "), '";
							++i;
							break;
						default:
							prefix = "');" + line + ";";
							postfix = "; buf.push('"
						}
						var end = str.indexOf(close, i);
						if (end < 0) {
							throw new Error('Could not find matching close tag "' + close + '".')
						}
						var js = str.substring(i, end),
							start = i,
							include = null,
							n = 0;
						if ("-" == js[js.length - 1]) {
							js = js.substring(0, js.length - 2);
							consumeEOL = true
						}
						if (0 == js.trim().indexOf("include")) {
							var name = js.trim().slice(7).trim();
							if (!filename) throw new Error("filename option is required for includes");
							var path = resolveInclude(name, filename);
							include = read(path, "utf8");
							include = exports.parse(include, {
								filename: path,
								_with: false,
								open: open,
								close: close,
								compileDebug: compileDebug
							});
							buf += "' + (function(){" + include + "})() + '";
							js = ""
						}
						while (~ (n = js.indexOf("\n", n))) n++, lineno++;
						if (js.substr(0, 1) == ":") js = filtered(js);
						if (js) {
							if (js.lastIndexOf("//") > js.lastIndexOf("\n")) js += "\n";
							buf += prefix;
							buf += js;
							buf += postfix
						}
						i += end - start + close.length - 1
					} else if (stri == "\\") {
						buf += "\\\\"
					} else if (stri == "'") {
						buf += "\\'"
					} else if (stri == "\r") {} else if (stri == "\n") {
						if (consumeEOL) {
							consumeEOL = false
						} else {
							buf += "\\n";
							lineno++
						}
					} else {
						buf += stri
					}
				}
				if (false !== options._with) buf += "'); })();\n} \nreturn buf.join('');";
				else buf += "');\nreturn buf.join('');";
				return buf
			};
		var compile = exports.compile = function(str, options) {
				options = options || {};
				var escape = options.escape || utils.escape;
				var input = JSON.stringify(str),
					compileDebug = options.compileDebug !== false,
					client = options.client,
					filename = options.filename ? JSON.stringify(options.filename) : "undefined";
				if (compileDebug) {
					str = ["var __stack = { lineno: 1, input: " + input + ", filename: " + filename + " };", rethrow.toString(), "try {", exports.parse(str, options), "} catch (err) {", "  rethrow(err, __stack.input, __stack.filename, __stack.lineno);", "}"].join("\n")
				} else {
					str = exports.parse(str, options)
				}
				if (options.debug) console.log(str);
				if (client) str = "escape = escape || " + escape.toString() + ";\n" + str;
				try {
					var fn = new Function("locals, filters, escape, rethrow", str)
				} catch (err) {
					if ("SyntaxError" == err.name) {
						err.message += options.filename ? " in " + filename : " while compiling ejs"
					}
					throw err
				}
				if (client) return fn;
				return function(locals) {
					return fn.call(this, locals, filters, escape, rethrow)
				}
			};
		exports.render = function(str, options) {
			var fn, options = options || {};
			if (options.cache) {
				if (options.filename) {
					fn = cache[options.filename] || (cache[options.filename] = compile(str, options))
				} else {
					throw new Error('"cache" option requires "filename".')
				}
			} else {
				fn = compile(str, options)
			}
			options.__proto__ = options.locals;
			return fn.call(options.scope, options)
		};
		exports.renderFile = function(path, options, fn) {
			var key = path + ":string";
			if ("function" == typeof options) {
				fn = options, options = {}
			}
			options.filename = path;
			var str;
			try {
				str = options.cache ? cache[key] || (cache[key] = read(path, "utf8")) : read(path, "utf8")
			} catch (err) {
				fn(err);
				return
			}
			fn(null, exports.render(str, options))
		};

		function resolveInclude(name, filename) {
			var path = join(dirname(filename), name);
			var ext = extname(name);
			if (!ext) path += ".ejs";
			return path
		}
		exports.__express = exports.renderFile;
		if (require.extensions) {
			require.extensions[".ejs"] = function(module, filename) {
				filename = filename || module.filename;
				var options = {
					filename: filename,
					client: true
				},
					template = fs.readFileSync(filename).toString(),
					fn = compile(template, options);
				module._compile("module.exports = " + fn.toString() + ";", filename)
			}
		} else if (require.registerExtension) {
			require.registerExtension(".ejs", function(src) {
				return compile(src, {})
			})
		}
	});
	require.register("filters.js", function(module, exports, require) {
		exports.first = function(obj) {
			return obj[0]
		};
		exports.last = function(obj) {
			return obj[obj.length - 1]
		};
		exports.capitalize = function(str) {
			str = String(str);
			return str[0].toUpperCase() + str.substr(1, str.length)
		};
		exports.downcase = function(str) {
			return String(str).toLowerCase()
		};
		exports.upcase = function(str) {
			return String(str).toUpperCase()
		};
		exports.sort = function(obj) {
			return Object.create(obj).sort()
		};
		exports.sort_by = function(obj, prop) {
			return Object.create(obj).sort(function(a, b) {
				a = a[prop], b = b[prop];
				if (a > b) return 1;
				if (a < b) return -1;
				return 0
			})
		};
		exports.size = exports.length = function(obj) {
			return obj.length
		};
		exports.plus = function(a, b) {
			return Number(a) + Number(b)
		};
		exports.minus = function(a, b) {
			return Number(a) - Number(b)
		};
		exports.times = function(a, b) {
			return Number(a) * Number(b)
		};
		exports.divided_by = function(a, b) {
			return Number(a) / Number(b)
		};
		exports.join = function(obj, str) {
			return obj.join(str || ", ")
		};
		exports.truncate = function(str, len, append) {
			str = String(str);
			if (str.length > len) {
				str = str.slice(0, len);
				if (append) str += append
			}
			return str
		};
		exports.truncate_words = function(str, n) {
			var str = String(str),
				words = str.split(/ +/);
			return words.slice(0, n).join(" ")
		};
		exports.replace = function(str, pattern, substitution) {
			return String(str).replace(pattern, substitution || "")
		};
		exports.prepend = function(obj, val) {
			return Array.isArray(obj) ? [val].concat(obj) : val + obj
		};
		exports.append = function(obj, val) {
			return Array.isArray(obj) ? obj.concat(val) : obj + val
		};
		exports.map = function(arr, prop) {
			return arr.map(function(obj) {
				return obj[prop]
			})
		};
		exports.reverse = function(obj) {
			return Array.isArray(obj) ? obj.reverse() : String(obj).split("").reverse().join("")
		};
		exports.get = function(obj, prop) {
			return obj[prop]
		};
		exports.json = function(obj) {
			return JSON.stringify(obj)
		}
	});
	require.register("utils.js", function(module, exports, require) {
		exports.escape = function(html) {
			return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
		}
	});
	return require("ejs")
}();
/*! jQuery UI - v1.11.2 - 2015-01-21
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, draggable.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
	function t(t, s) {
		var n, a, o, r = t.nodeName.toLowerCase();
		return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !! o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
	}
	function i(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.11.2",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		scrollParent: function(t) {
			var i = this.css("position"),
				s = "absolute" === i,
				n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				a = this.parents().filter(function() {
					var t = e(this);
					return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
				}).eq(0);
			return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
		},
		uniqueId: function() {
			var e = 0;
			return function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++e)
				})
			}
		}(),
		removeUniqueId: function() {
			return this.each(function() {
				/^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
			return function(i) {
				return !!e.data(i, t)
			}
		}) : function(t, i, s) {
			return !!e.data(t, s[3])
		},
		focusable: function(i) {
			return t(i, !isNaN(e.attr(i, "tabindex")))
		},
		tabbable: function(i) {
			var s = e.attr(i, "tabindex"),
				n = isNaN(s);
			return (n || s >= 0) && t(i, !n)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
		function s(t, i, s, a) {
			return e.each(n, function() {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			a = i.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + i] = function(t) {
			return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
				e(this).css(a, s(this, t) + "px")
			})
		}, e.fn["outer" + i] = function(t, n) {
			return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
				e(this).css(a, s(this, t, !0, n) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function(e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
		return function(i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
		focus: function(t) {
			return function(i, s) {
				return "number" == typeof i ? this.each(function() {
					var t = this;
					setTimeout(function() {
						e(t).focus(), s && s.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		disableSelection: function() {
			var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function() {
				return this.bind(e + ".ui-disableSelection", function(e) {
					e.preventDefault()
				})
			}
		}(),
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function(t) {
			if (void 0 !== t) return this.css("zIndex", t);
			if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
				if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
				n = n.parent()
			}
			return 0
		}
	}), e.ui.plugin = {
		add: function(t, i, s) {
			var n, a = e.ui[t].prototype;
			for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
		},
		call: function(e, t, i, s) {
			var n, a = e.plugins[t];
			if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
		}
	};
	var s = 0,
		n = Array.prototype.slice;
	e.cleanData = function(t) {
		return function(i) {
			var s, n, a;
			for (a = 0; null != (n = i[a]); a++) try {
				s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
			} catch (o) {}
			t(i)
		}
	}(e.cleanData), e.widget = function(t, i, s) {
		var n, a, o, r, h = {},
			l = t.split(".")[0];
		return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
			return !!e.data(t, n)
		}, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
			return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
		}, e.extend(o, a, {
			version: s.version,
			_proto: e.extend({}, s),
			_childConstructors: []
		}), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
			return e.isFunction(s) ? (h[t] = function() {
				var e = function() {
						return i.prototype[t].apply(this, arguments)
					},
					n = function(e) {
						return i.prototype[t].apply(this, e)
					};
				return function() {
					var t, i = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
				}
			}(), void 0) : (h[t] = s, void 0)
		}), o.prototype = e.widget.extend(r, {
			widgetEventPrefix: a ? r.widgetEventPrefix || t : t
		}, h, {
			constructor: o,
			namespace: l,
			widgetName: t,
			widgetFullName: n
		}), a ? (e.each(a._childConstructors, function(t, i) {
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
	}, e.widget.extend = function(t) {
		for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
		return t
	}, e.widget.bridge = function(t, i) {
		var s = i.prototype.widgetFullName || t;
		e.fn[t] = function(a) {
			var o = "string" == typeof a,
				r = n.call(arguments, 1),
				h = this;
			return a = !o && r.length ? e.widget.extend.apply(null, [a].concat(r)) : a, o ? this.each(function() {
				var i, n = e.data(this, s);
				return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
			}) : this.each(function() {
				var t = e.data(this, s);
				t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
			}), h
		}
	}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(t, i) {
			i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(e) {
					e.target === i && this.destroy()
				}
			}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function() {
			return this.element
		},
		option: function(t, i) {
			var s, n, a, o = t;
			if (0 === arguments.length) return e.widget.extend({}, this.options);
			if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
				for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
				if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
				n[t] = i
			} else {
				if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
				o[t] = i
			}
			return this._setOptions(o), this
		},
		_setOptions: function(e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function(e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !! t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function() {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function() {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function(t, i, s) {
			var n, a = this;
			"boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
				function r() {
					return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
				}
				"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
				var h = s.match(/^([\w:-]*)\s*(.*)$/),
					l = h[1] + a.eventNamespace,
					u = h[2];
				u ? n.delegate(u, l, r) : i.bind(l, r)
			})
		},
		_off: function(t, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
		},
		_delay: function(e, t) {
			function i() {
				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function(t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function(t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, i, s) {
			var n, a, o = this.options[t];
			if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, i) {
		e.Widget.prototype["_" + t] = function(s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
				e(this)[t](), a && a.call(s[0]), i()
			})
		}
	}), e.widget;
	var a = !1;
	e(document).mouseup(function() {
		a = !1
	}), e.widget("ui.mouse", {
		version: "1.11.2",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function(e) {
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function(i) {
				return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(t) {
			if (!a) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
				var i = this,
					s = 1 === t.which,
					n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
				return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
					return i._mouseMove(e)
				}, this._mouseUpDelegate = function(e) {
					return i._mouseUp(e)
				}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
			}
		},
		_mouseMove: function(t) {
			if (this._mouseMoved) {
				if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
				if (!t.which) return this._mouseUp(t)
			}
			return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
		},
		_mouseUp: function(t) {
			return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
		},
		_mouseDistanceMet: function(e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return !0
		}
	}), e.widget("ui.draggable", e.ui.mouse, {
		version: "1.11.2",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
		},
		_setOption: function(e, t) {
			this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function() {
			return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
		},
		_mouseCapture: function(t) {
			var i = this.options;
			return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
		},
		_blockFrames: function(t) {
			this.iframeBlocks = this.document.find(t).map(function() {
				var t = e(this);
				return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_blurActiveElement: function(t) {
			var i = this.document[0];
			if (this.handleElement.is(t.target)) try {
				i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
			} catch (s) {}
		},
		_mouseStart: function(t) {
			var i = this.options;
			return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
				return "fixed" === e(this).css("position")
			}).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
		},
		_refreshOffsets: function(e) {
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: !1,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}, this.offset.click = {
				left: e.pageX - this.offset.left,
				top: e.pageY - this.offset.top
			}
		},
		_mouseDrag: function(t, i) {
			if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
				this.position = s.position
			}
			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
		},
		_mouseStop: function(t) {
			var i = this,
				s = !1;
			return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				i._trigger("stop", t) !== !1 && i._clear()
			}) : this._trigger("stop", t) !== !1 && this._clear(), !1
		},
		_mouseUp: function(t) {
			return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(t) {
			return this.options.handle ? !! e(t.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_setHandleClassName: function() {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
		},
		_removeHandleClassName: function() {
			this.handleElement.removeClass("ui-draggable-handle")
		},
		_createHelper: function(t) {
			var i = this.options,
				s = e.isFunction(i.helper),
				n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
		},
		_setPositionRelative: function() {
			/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
		},
		_adjustOffsetFromHelper: function(t) {
			"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_isRootNode: function(e) {
			return /(html|body)/i.test(e.tagName) || e === this.document[0]
		},
		_getParentOffset: function() {
			var t = this.offsetParent.offset(),
				i = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var e = this.element.position(),
				t = this._isRootNode(this.scrollParent[0]);
			return {
				top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
				left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var t, i, s, n = this.options,
				a = this.document[0];
			return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
		},
		_convertPositionTo: function(e, t) {
			t || (t = this.position);
			var i = "absolute" === e ? 1 : -1,
				s = this._isRootNode(this.scrollParent[0]);
			return {
				top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
				left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
			}
		},
		_generatePosition: function(e, t) {
			var i, s, n, a, o = this.options,
				r = this._isRootNode(this.scrollParent[0]),
				h = e.pageX,
				l = e.pageY;
			return r && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
				top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
				left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
		},
		_normalizeRightBottom: function() {
			"y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
		},
		_trigger: function(t, i, s) {
			return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), e.ui.plugin.add("draggable", "connectToSortable", {
		start: function(t, i, s) {
			var n = e.extend({}, i, {
				item: s.element
			});
			s.sortables = [], e(s.options.connectToSortable).each(function() {
				var i = e(this).sortable("instance");
				i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
			})
		},
		stop: function(t, i, s) {
			var n = e.extend({}, i, {
				item: s.element
			});
			s.cancelHelperRemoval = !1, e.each(s.sortables, function() {
				var e = this;
				e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
					position: e.placeholder.css("position"),
					top: e.placeholder.css("top"),
					left: e.placeholder.css("left")
				}, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
			})
		},
		drag: function(t, i, s) {
			e.each(s.sortables, function() {
				var n = !1,
					a = this;
				a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function() {
					return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n
				})), n ? (a.isOver || (a.isOver = 1, a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() {
					return i.helper[0]
				}, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function() {
					this.refreshPositions()
				}), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function() {
					this.refreshPositions()
				}))
			})
		}
	}), e.ui.plugin.add("draggable", "cursor", {
		start: function(t, i, s) {
			var n = e("body"),
				a = s.options;
			n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
		},
		stop: function(t, i, s) {
			var n = s.options;
			n._cursor && e("body").css("cursor", n._cursor)
		}
	}), e.ui.plugin.add("draggable", "opacity", {
		start: function(t, i, s) {
			var n = e(i.helper),
				a = s.options;
			n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
		},
		stop: function(t, i, s) {
			var n = s.options;
			n._opacity && e(i.helper).css("opacity", n._opacity)
		}
	}), e.ui.plugin.add("draggable", "scroll", {
		start: function(e, t, i) {
			i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
		},
		drag: function(t, i, s) {
			var n = s.options,
				a = !1,
				o = s.scrollParentNotHidden[0],
				r = s.document[0];
			o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
		}
	}), e.ui.plugin.add("draggable", "snap", {
		start: function(t, i, s) {
			var n = s.options;
			s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
				var t = e(this),
					i = t.offset();
				this !== s.element[0] && s.snapElements.push({
					item: this,
					width: t.outerWidth(),
					height: t.outerHeight(),
					top: i.top,
					left: i.left
				})
			})
		},
		drag: function(t, i, s) {
			var n, a, o, r, h, l, u, d, c, p, f = s.options,
				m = f.snapTolerance,
				g = i.offset.left,
				v = g + s.helperProportions.width,
				y = i.offset.top,
				b = y + s.helperProportions.height;
			for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
				snapItem: s.snapElements[c].item
			})), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
				top: u - s.helperProportions.height,
				left: 0
			}).top), a && (i.position.top = s._convertPositionTo("relative", {
				top: d,
				left: 0
			}).top), o && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h - s.helperProportions.width
			}).left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l
			}).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
				top: u,
				left: 0
			}).top), a && (i.position.top = s._convertPositionTo("relative", {
				top: d - s.helperProportions.height,
				left: 0
			}).top), o && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l - s.helperProportions.width
			}).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
				snapItem: s.snapElements[c].item
			})), s.snapElements[c].snapping = n || a || o || r || p)
		}
	}), e.ui.plugin.add("draggable", "stack", {
		start: function(t, i, s) {
			var n, a = s.options,
				o = e.makeArray(e(a.stack)).sort(function(t, i) {
					return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
				});
			o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
				e(this).css("zIndex", n + t)
			}), this.css("zIndex", n + o.length))
		}
	}), e.ui.plugin.add("draggable", "zIndex", {
		start: function(t, i, s) {
			var n = e(i.helper),
				a = s.options;
			n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
		},
		stop: function(t, i, s) {
			var n = s.options;
			n._zIndex && e(i.helper).css("zIndex", n._zIndex)
		}
	}), e.ui.draggable
});

function loadMap(e) {
	var t = document.getElementById("map");
	t.parentNode.removeChild(t);
	var r = ["#1f77b4", "#ff7f0e", "#2ca02c", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
		a = e.width,
		n = e.height,
		o = d3.select("#mapRow").append("svg").attr({
			id: "map",
			width: a,
			height: n
		}),
		c = o.append("g"),
		s = d3.behavior.zoom().on("zoom", function() {
			c.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")")
		});
	o.call(s), $(".courses-list").fadeOut();
	var i = $(".courses-map").slideDown();
	e.course ? i.attr("data-id", e.course) : e.course = i.attr("data-id"), d3.json("/neo4j/course/" + e.course, function(t) {
		if (0 != t.nodes.length) {
			var s = {},
				i = [];
			t.nodes.map(function(t) {
				void 0 === s[t.id] && (t.course = t.properties.course, t.course == e.course ? (t.index = 0, t.x = a / 2 - 100, t.y = n / 2 - 50, t.fixed = !0) : t.index = 1, s[t.id] = i.length, i.push(t))
			});
			var l = {},
				u = [];
			t.rel.map(function(t) {
				if (void 0 == l[t.startNode + t.endNode]) {
					var r = i[s[t.startNode]],
						a = i[s[t.endNode]];
					r.course == e.course ? a.index = 2 : a.course == e.course && (r.index = 2), u.push({
						type: t.type,
						target: s[t.endNode],
						source: s[t.startNode],
						desc: t.properties.desc
					}), l[t.startNode + t.endNode] = !0
				}
			}), getCourse(e.course);
			var d = d3.layout.force();
			d.on("tick", function() {
				c.selectAll("line.link").each(function(e) {
					var t, r, a, n, o = d3.select(this);
					if ("NEXT" == e.type) {
						var c = e.target.x - e.source.x,
							s = e.target.y - e.source.y,
							i = Math.sqrt(c * c + s * s),
							l = c / i,
							u = s / i,
							d = 35,
							p = 35;
						t = e.source.x + d * l, r = e.target.x - p * l, a = e.source.y + d * u, n = e.target.y - p * u, o.attr("marker-end", "url(#arrow)")
					} else t = e.source.x, a = e.source.y, r = e.target.x, n = e.target.y;
					o.attr("x1", t), o.attr("x2", r), o.attr("y1", a), o.attr("y2", n)
				}), c.selectAll("g.node").selectAll("circle.ring").attr({
					cx: function(e) {
						return e.x
					},
					cy: function(e) {
						return e.y
					}
				}), c.selectAll("g.node").selectAll("circle.outline").attr({
					cx: function(e) {
						return e.x
					},
					cy: function(e) {
						return e.y
					}
				}), c.selectAll("g.node").selectAll("text").attr({
					x: function(e) {
						return e.x - 35
					},
					y: function(e) {
						return e.y - 35
					}
				}), p.attr({
					x: function(e) {
						return (e.source.x + e.target.x) / 2 - 25
					},
					y: function(e) {
						return (e.source.y + e.target.y) / 2 + 5
					},
					transform: function(e) {
						var t = e.target.x - e.source.x,
							r = e.target.y - e.source.y,
							a = 360 * Math.atan(r / t) / (2 * Math.PI),
							n = (e.target.x + e.source.x) / 2,
							o = (e.target.y + e.source.y) / 2;
						return "rotate(" + a + "," + n + "," + o + ")"
					}
				})
			}).charge(-1300).linkDistance(200).nodes(i).links(u).size([a, n]).alpha(.1), o.append("svg:defs").append("svg:marker").attr("id", "arrow").attr("viewBox", "0 -5 10 10").attr("refX", 6).attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto").append("svg:path").attr("d", "M0,-5L10,0L0,5").attr("fill", "#6ac6ff"), c.selectAll("line.link").data(u).enter().append("line").attr("class", "link");
			var p = c.selectAll("link.desc").data(u).enter().append("text").attr("class", "desc").text(function(e) {
				return e.desc
			}),
				f = c.selectAll("g.node").data(i),
				g = f.enter().append("g").attr("class", function(e, t) {
					return 0 === t ? "node active" : "node"
				}).on("click", function(e) {
					var t = d3.select(this);
					"node" === t.attr("class") && (d3.selectAll(".node").attr("class", function(t) {
						return t.course === e.course ? "node active" : "node"
					}), getCourse(e.course))
				}).on("dblclick", function(t) {
					e.course = t.course, loadMap(e)
				});
			g.append("circle").attr({
				r: 29,
				"class": "ring"
			}), g.append("circle").attr({
				r: 25,
				"class": "outline"
			}).style({
				fill: function(e) {
					return r[e.index]
				},
				stroke: "#5CA8DB",
				"stroke-width": "2px"
			}), g.append("text").text(function(e) {
				return e.properties.name
			}).style("fill", "black"), d.start();
			for (var h = 0; 50 > h; h++) d.tick();
			var v = setInterval(function() {
				d.alpha() < .01 ? clearInterval(v) : d.tick()
			}, 80)
		}
	})
}
function getCourse(e) {
	$.getJSON("/api/course/" + e, function(e) {
		var t = $("#course-card").removeClass("hide").css("transition", "all .5s").addClass("trans");
		setTimeout(function() {
			$(".course-name").text(e.course.name).prepend('<i class="iconfont icon-' + e.course.type + '"></i> ');
			var r = $(".course-author").attr("href", "/personal/" + e.author._id).empty();
			$("<img>").attr("src", e.author.avatar).appendTo(r), $("<div>").append($("<div>").text(e.author.name).prepend($("<i>").addClass("glyphicon glyphicon-user"))).append($("<div>").text(e.author.job).prepend($("<i>").addClass("glyphicon glyphicon-briefcase"))).appendTo(r), $("#goMore").attr("href", "/course/" + e.course._id), $("#goClass").attr("href", "/class/" + e.course._id), $(".course-desc").text(e.course.description), t.removeClass("trans").draggable({
				cursor: "move",
				containment: "#menuNav"
			})
		}, 700), setTimeout(function() {
			t.css("transition", "background-color .6s").draggable({
				cursor: "move",
				containment: "#menuNav"
			})
		}, 1300)
	})
}
$(function() {
	ejs.open = "##", ejs.close = "##";
	var e = document.getElementById("tpl-s-list"),
		t = document.getElementById("view-subject"),
		r = {};
	$("#navMap").click(function() {
		$.getJSON("/subject", function(a) {
			t.innerHTML = ejs.render(e.innerHTML, {
				subjects: a
			}), $(".subject").click(function() {
				$("html,body").animate({
					scrollTop: 0
				}, 500), r.width = t.offsetWidth, r.height = t.offsetHeight, r.course = $(this).attr("data-base"), loadMap(r)
			})
		})
	}), $("#backToNav").click(function() {
		$(".courses-map").slideUp(), $(".courses-list").fadeIn()
	}), $("#refreshMap").click(function() {
		loadMap(r)
	})
});