!function(a, b) {
    "use strict";
    a.HoverDir = function(b, c) {
        this.$el = a(c),
            this._init(b)
    },
        a.HoverDir.defaults = {
            speed: 300,
            easing: "ease",
            hoverDelay: 0,
            inverse: !1
        },
        a.HoverDir.prototype = {
            _init: function(b) {
                this.options = a.extend(!0, {},
                    a.HoverDir.defaults, b),
                    this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing,
                    this.support = Modernizr.csstransitions,
                    this._loadEvents()
            },
            _loadEvents: function() {
                var b = this;
                this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir",
                    function(c) {
                        var d = a(this),
                            e = d.find("div"),
                            f = b._getDir(d, {
                                x: c.pageX,
                                y: c.pageY
                            }),
                            g = b._getStyle(f);
                        "mouseenter" === c.type ? (e.hide().css(g.from), clearTimeout(b.tmhover), b.tmhover = setTimeout(function() {
                                e.show(0,
                                    function() {
                                        var c = a(this);
                                        b.support && c.css("transition", b.transitionProp),
                                            b._applyAnimation(c, g.to, b.options.speed)
                                    })
                            },
                            b.options.hoverDelay)) : (b.support && e.css("transition", b.transitionProp), clearTimeout(b.tmhover), b._applyAnimation(e, g.from, b.options.speed))
                    })
            },
            _getDir: function(a, b) {
                var c = a.width(),
                    d = a.height(),
                    e = (b.x - a.offset().left - c / 2) * (c > d ? d / c: 1),
                    f = (b.y - a.offset().top - d / 2) * (d > c ? c / d: 1),
                    g = Math.round((Math.atan2(f, e) * (180 / Math.PI) + 180) / 90 + 3) % 4;
                return g
            },
            _getStyle: function(a) {
                var b,
                    c,
                    d = {
                        left: "0px",
                        top: "-100%"
                    },
                    e = {
                        left: "0px",
                        top: "100%"
                    },
                    f = {
                        left: "-100%",
                        top: "0px"
                    },
                    g = {
                        left: "100%",
                        top: "0px"
                    },
                    h = {
                        top: "0px"
                    },
                    i = {
                        left: "0px"
                    };
                switch (a) {
                    case 0:
                        b = this.options.inverse ? e: d,
                            c = h;
                        break;
                    case 1:
                        b = this.options.inverse ? f: g,
                            c = i;
                        break;
                    case 2:
                        b = this.options.inverse ? d: e,
                            c = h;
                        break;
                    case 3:
                        b = this.options.inverse ? g: f,
                            c = i
                }
                return {
                    from: b,
                    to: c
                }
            },
            _applyAnimation: function(b, c, d) {
                a.fn.applyStyle = this.support ? a.fn.css: a.fn.animate,
                    b.stop().applyStyle(c, a.extend(!0, [], {
                        duration: d + "ms"
                    }))
            }
        };
    var c = function(a) {
        b.console && b.console.error(a)
    };
    a.fn.hoverdir = function(b) {
        var d,
            e = a.data(this, "hoverdir");
        return "string" == typeof b ? (d = Array.prototype.slice.call(arguments, 1), this.each(function() {
            return e ? a.isFunction(e[b]) && "_" !== b.charAt(0) ? (e[b].apply(e, d), void 0) : (c("no such method '" + b + "' for hoverdir instance"), void 0) : (c("cannot call methods on hoverdir prior to initialization; attempted to call method '" + b + "'"), void 0)
        })) : this.each(function() {
            e ? e._init() : e = a.data(this, "hoverdir", new a.HoverDir(b, this))
        }),
            e
    }
} (jQuery, window),
window.Modernizr = function(a, b, c) {
    function d(a) {
        q.cssText = a
    }
    function f(a, b) {
        return typeof a === b
    }
    function g(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function h(a, b) {
        var d,
            e;
        for (d in a) if (e = a[d], !g(e, "-") && q[e] !== c) return "pfx" == b ? e: !0;
        return ! 1
    }
    function i(a, b, d) {
        var e,
            g;
        for (e in a) if (g = b[a[e]], g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g;
        return ! 1
    }
    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + u.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + v.join(d + " ") + d).split(" "), i(e, b, c))
    }
    var r,
        B,
        D,
        E,
        k = "2.6.2",
        l = {},
        m = !0,
        n = b.documentElement,
        o = "modernizr",
        p = b.createElement(o),
        q = p.style,
        t = ({}.toString, "Webkit Moz O ms"),
        u = t.split(" "),
        v = t.toLowerCase().split(" "),
        w = {},
        z = [],
        A = z.slice,
        C = {}.hasOwnProperty;
    D = f(C, "undefined") || f(C.call, "undefined") ?
        function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        }: function(a, b) {
        return C.call(a, b)
    },
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var c,
            d,
            b = this;
        if ("function" != typeof b) throw new TypeError;
        return c = A.call(arguments, 1),
            d = function() {
                var e,
                    f,
                    g;
                return this instanceof d ? (e = function() {},
                    e.prototype = b.prototype, f = new e, g = b.apply(f, c.concat(A.call(arguments))), Object(g) === g ? g: f) : b.apply(a, c.concat(A.call(arguments)))
            }
    }),
        w.csstransitions = function() {
            return j("transition")
        };
    for (E in w) D(w, E) && (B = E.toLowerCase(), l[B] = w[E](), z.push((l[B] ? "": "no-") + B));
    return l.addTest = function(a, b) {
        if ("object" == typeof a) for (var d in a) D(a, d) && l.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), l[a] !== c) return l;
            b = "function" == typeof b ? b() : b,
            "undefined" != typeof m && m && (n.className += " " + (b ? "": "no-") + a),
                l[a] = b
        }
        return l
    },
        d(""),
        p = r = null,
        function(a, b) {
            function c(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return c.innerHTML = "x<style>" + b + "</style>",
                    d.insertBefore(c.lastChild, d.firstChild)
            }
            function d() {
                var a = r.elements;
                return "string" == typeof a ? a.split(" ") : a
            }
            function e(a) {
                var b = p[a[n]];
                return b || (b = {},
                    o++, a[n] = o, p[o] = b),
                    b
            }
            function f(a, c, d) {
                if (c || (c = b), q) return c.createElement(a);
                d || (d = e(c));
                var f;
                return f = d.cache[a] ? d.cache[a].cloneNode() : l.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a),
                    f.canHaveChildren && !k.test(a) ? d.frag.appendChild(f) : f
            }
            function g(a, c) {
                if (a || (a = b), q) return a.createDocumentFragment();
                c = c || e(a);
                for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                return f
            }
            function h(a, b) {
                b.cache || (b.cache = {},
                    b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()),
                    a.createElement = function(c) {
                        return r.shivMethods ? f(c, a, b) : b.createElem(c)
                    },
                    a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g,
                            function(a) {
                                return b.createElem(a),
                                    b.frag.createElement(a),
                                'c("' + a + '")'
                            }) + ");return n}")(r, b.frag)
            }
            function i(a) {
                a || (a = b);
                var d = e(a);
                return r.shivCSS && !m && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
                q || h(a, d),
                    a
            }
            var m,
                q,
                r,
                j = a.html5 || {},
                k = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                l = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                n = "_html5shiv",
                o = 0,
                p = {}; !
                function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>",
                            m = "hidden" in a,
                            q = 1 == a.childNodes.length ||
                                function() {
                                    b.createElement("a");
                                    var a = b.createDocumentFragment();
                                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                                } ()
                    } catch(c) {
                        m = !0,
                            q = !0
                    }
                } (),
                r = {
                    elements: j.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: j.shivCSS !== !1,
                    supportsUnknownElements: q,
                    shivMethods: j.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                },
                a.html5 = r,
                i(b)
        } (this, b),
        l._version = k,
        l._domPrefixes = v,
        l._cssomPrefixes = u,
        l.testProp = function(a) {
            return h([a])
        },
        l.testAllProps = j,
        n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + z.join(" ") : ""),
        l
} (this, this.document),
    
$(function(){
    $(" #da-thumbs > li ").each(function() {
        $(this).hoverdir()
    })
})()