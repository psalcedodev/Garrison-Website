function countUp(a, b, c, d, e, f) {
    this.options = f || {
        useEasing: !0,
        useGrouping: !0,
        separator: ",",
        decimal: "."
    };
    for (var g = 0, h = ["webkit", "moz", "ms"], i = 0; i < h.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[h[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[h[i] + "CancelAnimationFrame"] || window[h[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(a, b) {
        var c = (new Date).getTime(),
            d = Math.max(0, 16 - (c - g)),
            e = window.setTimeout(function() {
                a(c + d)
            }, d);
        return g = c + d, e
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    });
    var j = this;
    this.d = "string" == typeof a ? document.getElementById(a) : a, this.startVal = Number(b), this.endVal = Number(c), this.countDown = this.startVal > this.endVal, this.startTime = null, this.timestamp = null, this.remaining = null, this.frameVal = this.startVal, this.rAF = null, this.decimals = Math.max(0, d || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * e || 2e3, this.easeOutExpo = function(a, b, c, d) {
        return c * (-Math.pow(2, -10 * a / d) + 1) * 1024 / 1023 + b
    }, this.count = function(a) {
        null === j.startTime && (j.startTime = a), j.timestamp = a;
        var b = a - j.startTime;
        if (j.remaining = j.duration - b, j.options.useEasing)
            if (j.countDown) {
                var c = j.easeOutExpo(b, 0, j.startVal - j.endVal, j.duration);
                j.frameVal = j.startVal - c
            } else j.frameVal = j.easeOutExpo(b, j.startVal, j.endVal - j.startVal, j.duration);
        else if (j.countDown) {
            var c = (j.startVal - j.endVal) * (b / j.duration);
            j.frameVal = j.startVal - c
        } else j.frameVal = j.startVal + (j.endVal - j.startVal) * (b / j.duration);
        j.frameVal = Math.round(j.frameVal * j.dec) / j.dec, j.countDown ? j.frameVal = j.frameVal < j.endVal ? j.endVal : j.frameVal : j.frameVal = j.frameVal > j.endVal ? j.endVal : j.frameVal, j.d.innerHTML = j.formatNumber(j.frameVal.toFixed(j.decimals)), b < j.duration ? j.rAF = requestAnimationFrame(j.count) : null != j.callback && j.callback()
    }, this.start = function(a) {
        return j.callback = a, isNaN(j.endVal) || isNaN(j.startVal) ? (console.log("countUp error: startVal or endVal is not a number"), j.d.innerHTML = "--") : j.rAF = requestAnimationFrame(j.count), !1
    }, this.stop = function() {
        cancelAnimationFrame(j.rAF)
    }, this.reset = function() {
        j.startTime = null, cancelAnimationFrame(j.rAF), j.d.innerHTML = j.formatNumber(j.startVal.toFixed(j.decimals))
    }, this.resume = function() {
        j.startTime = null, j.duration = j.remaining, j.startVal = j.frameVal, requestAnimationFrame(j.count)
    }, this.formatNumber = function(a) {
        a += "";
        var b, c, d, e;
        if (b = a.split("."), c = b[0], d = b.length > 1 ? j.options.decimal + b[1] : "", e = /(\d+)(\d{3})/, j.options.useGrouping)
            for (; e.test(c);) c = c.replace(e, "$1" + j.options.separator + "$2");
        return c + d
    }, j.d.innerHTML = j.formatNumber(j.startVal.toFixed(j.decimals))
}

function ult_creative_link_ht() {
    jQuery(".ult_cl_link_9").each(function(a) {
        var b = jQuery(this).find(".ult_colorlink").outerHeight(),
            b = parseInt(b / 2);
        jQuery(this).find(".ult_btn9_link_top").css({
            "-webkit-transform": "translateY(-" + b + "px)",
            "-ms-transform": "translateY(-" + b + "px)",
            "-moz-transform": "translateY(-" + b + "px)",
            transform: "translateY(-" + b + "px)"
        }), jQuery(this).find(".ult_btn9_link_btm").css({
            "-webkit-transform": "translateY(" + b + "px)",
            "-moz-transform": "translateY(" + b + "px)",
            "-ms-transform": "translateY(" + b + "px)",
            transform: "translateY(" + b + "px)"
        })
    })
}

function recallme() {
    jQuery(".ult_dual_button").each(function(a) {
        var b = jQuery(this).attr("id"),
            c = jQuery(this).data("response");
        "undefined" != c && "" != c || (c = "on");
        var d = "right";
        if (jQuery("body").hasClass("rtl")) var d = "left";
        var e = "left";
        if (jQuery("body").hasClass("rtl")) var e = "right";
        if ("on" == c) {
            var f = b;
            f = document.createElement("style"), f.type = "text/css", f.innerHTML = "@media(min-width:300px) and (max-width:768px) {#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: 0px;float: none;position: relative}.ult_main_dualbtn { display: inline-block}.ult_dualbutton-wrapper { display: block }#" + b + ".ult_dual_button .middle-text {top: 100%;right: 50%}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit; border-bottom: 0px!important;}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;border-top-right-radius: 0!important}}@media(min-width:0px) and (max-width:0px) {#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { float: left; position: relative}.ult_dual1 {     border-right: none!important } .ult_dualbutton-wrapper {display: block}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important;  border-bottom-right-radius: 0!important}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;  border-bottom-left-radius: 0!important  }}@media(min-width:768px) and (max-width:970px) { #" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: -4px; float: none; position: relative }.ult_dualbutton-wrapper { display: block} #" + b + ".ult_dual_button .middle-text { top: 100%; right: 50% }#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit }#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button {     border-top-left-radius: 0!important;   border-top-right-radius: 0!important  }}@media(min-width:970px){ #" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-" + d + "-radius: 0!important; border-bottom-" + d + "-radius: 0!important}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-" + e + "-radius: 0!important; border-bottom-" + e + "-radius: 0!important }#" + b + ".ult_dual_button .ult_dual1 { border-" + d + ": none!important}}", document.getElementsByTagName("head")[0].appendChild(f), document.getElementsByTagName("head")[0].appendChild(f);
            var g = jQuery(window).width(),
                h = jQuery(this).find(".ult_dual1").outerWidth(),
                i = jQuery(this).find(".ult_dual2").outerWidth();
            if (g > 300 && g <= 768) var j = "inset 0px -" + h + "px 0px 0px ",
                k = " inset 0px " + i + "px 0px 0px ";
            else if (g > 768 && g < 1015) var j = "inset 0px -" + h + "px 0px 0px ",
                k = " inset 0px " + i + "px 0px 0px ";
            else var j = "inset -" + h + "px 0 0 0 ",
                k = "inset " + i + "px 0 0 0";
            jQuery("#" + b).find(".ult_dual1").mouseenter(function() {
                var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2];
                if ("Style2" == a) {
                    var c = jQuery(this).find(".ult-dual-btn-1").data("bghovercolor");
                    jQuery(this).css({
                        "box-shadow": j + c
                    })
                }
            }), jQuery("#" + b).find(".ult_dual1").mouseleave(function() {
                var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2];
                if ("Style2" == a) {
                    var c = jQuery(this).find(".ult-dual-btn-1").data("bgcolor");
                    jQuery(this).css({
                        "box-shadow": "inset 0px 0 0 0 " + c
                    })
                }
            }), jQuery("#" + b).find(".ult_dual2").mouseenter(function() {
                var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2];
                if ("Style2" == a) {
                    var c = jQuery(this).find(".ult-dual-btn-2").data("bghovercolor");
                    jQuery(this).css({
                        "box-shadow": k + c
                    })
                }
            }), jQuery("#" + b).find(".ult_dual2").mouseleave(function() {
                var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2];
                if ("Style2" == a) {
                    var c = jQuery(this).find(".ult-dual-btn-2").data("bgcolor");
                    jQuery(this).css({
                        "box-shadow": "inset 0px 0 0 0 " + c
                    })
                }
            })
        } else {
            var f = b;
            f = document.createElement("style"), f.type = "text/css", f.innerHTML = "#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important; border-bottom-right-radius: 0!important }#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important; border-bottom-left-radius: 0!important }#" + b + ".ult_dual_button .ult_dual1 { border-right: none!important}", document.getElementsByTagName("head")[0].appendChild(f), document.getElementsByTagName("head")[0].appendChild(f), jQuery("#" + b).find(".ult_dual1").mouseenter(function() {
                var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2],
                    c = jQuery(this).outerWidth();
                if ("Style2" == a) {
                    var d = "inset -" + c + "px 0 0 0 ",
                        e = jQuery(this).find(".ult-dual-btn-1").data("bghovercolor");
                    jQuery(this).css({
                        "box-shadow": d + e
                    })
                }
            }), jQuery("#" + b).find(".ult_dual1").mouseleave(function() {
                var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2];
                if ("Style2" == a) {
                    var c = jQuery(this).find(".ult-dual-btn-1").data("bgcolor");
                    jQuery(this).css({
                        "box-shadow": "inset 0px 0 0 0 " + c
                    })
                }
            }), jQuery("#" + b).find(".ult_dual2").mouseenter(function() {
                var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2],
                    c = jQuery(this).outerWidth();
                if ("Style2" == a) {
                    var d = "inset " + c + "px 0 0 0",
                        e = jQuery(this).find(".ult-dual-btn-2").data("bghovercolor");
                    jQuery(this).css({
                        "box-shadow": d + e
                    })
                }
            }), jQuery("#" + b).find(".ult_dual2").mouseleave(function() {
                var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
                    b = a.split(" "),
                    a = b[1] + b[2];
                if ("Style2" == a) {
                    var c = jQuery(this).find(".ult-dual-btn-2").data("bgcolor");
                    jQuery(this).css({
                        "box-shadow": "inset 0px 0 0 0 " + c
                    })
                }
            })
        }
    })
}

function info_box_set_auto_height() {
    jQuery(".aio-icon-box.square_box-icon").each(function(a, b) {
        var c = jQuery(window).width() || "";
        if ("" != c)
            if (c >= 768) {
                var d = jQuery(this).attr("data-min-height") || "";
                "" != d && jQuery(this).css("min-height", d)
            } else jQuery(this).css("min-height", "initial")
    })
}

function calculate_clipped_circle() {
    jQuery(".clipped-info-circle").each(function() {
        var a = jQuery(this).data("circle-type"),
            b = jQuery(this).data("half-percentage"),
            c = jQuery(this).children().data("responsive-circle");
        if ("on" == c) {
            var d = jQuery(this).children().data("responsive-breakpoint"),
                e = jQuery(window).width(),
                a = jQuery(this).data("circle-type");
            if (e > d) {
                var f = jQuery(this).data("first-height");
                "undefined" != typeof f && "" != f && jQuery(this).height(f), jQuery(this).width("100%"), make_info_circle(".info-c-full-br", resizedd)
            }
        }
        var g = jQuery(this).find(".info-circle-icons").outerHeight(),
            h = jQuery(this).find(".info-circle-icons").outerHeight();
        if ("full-circle" != a) {
            var i = jQuery(this).outerHeight(),
                j = (jQuery(this).outerWidth(), jQuery(this).css("margin-top")),
                k = jQuery(this).css("margin-bottom"),
                l = jQuery(this).children().outerWidth(),
                m = parseInt(jQuery(this).find(".info-c-full").css("margin-top").replace(/[^-\d\.]/g, "")),
                n = parseInt(jQuery(this).find(".info-c-full").css("padding-top").replace(/[^-\d\.]/g, ""));
            if ("top-circle" == a || "bottom-circle" == a) {
                jQuery(this).css({
                    overflow: "hidden"
                });
                var o = (jQuery(this).find(".info-c-full").outerWidth(), jQuery(this).find(".info-c-full").width());
                if ("top-circle" == a) {
                    var p = b / 100 * i;
                    jQuery(this).css({
                        "padding-top": j,
                        height: p,
                        "margin-bottom": 0
                    });
                    var q = p - m - parseInt(j.replace(/[^-\d\.]/g, "")) - n - n / 2;
                    jQuery(this).find(".info-c-full-wrap").css({
                        height: q
                    })
                } else if ("bottom-circle" == a) {
                    var r = (100 - b) / 100 * i,
                        p = i - r + 10;
                    jQuery(this).css({
                        "padding-bottom": k,
                        height: p,
                        "margin-top": 0
                    }), jQuery(this).children().css({
                        "margin-top": -(r + g / 2)
                    });
                    var q = p - m - parseInt(j.replace(/[^-\d\.]/g, "")) - n - n / 2;
                    jQuery(this).find(".info-c-full-wrap").height(q);
                    var s = o - q;
                    jQuery(this).find(".info-c-full-wrap").css({
                        "margin-top": s + "px"
                    })
                }
            } else if ("left-circle" == a || "right-circle" == a) {
                jQuery(this).css({
                    overflow: "hidden",
                    "padding-top": j,
                    "padding-bottom": k
                });
                var o = (jQuery(this).find(".info-c-full").outerWidth(), jQuery(this).find(".info-c-full").width());
                if ("left-circle" == a) {
                    var t = b / 100 * l;
                    jQuery(this).css({
                        width: t,
                        "padding-left": j
                    }), jQuery(this).children().css({
                        width: l,
                        "max-width": l
                    });
                    var u = t - m - (n + n / 2) - parseInt(j.replace(/[^-\d\.]/g, ""));
                    jQuery(this).find(".info-c-full-wrap").width(u)
                } else if ("right-circle" == a) {
                    var v = (100 - b) / 100 * l,
                        t = parseInt(l - v);
                    jQuery(this).css({
                        width: t,
                        "padding-right": j
                    }), jQuery(this).children().css({
                        "margin-left": -(v + h / 2),
                        "max-width": l,
                        width: l
                    });
                    var w = v - m;
                    w = w + parseInt(j.replace(/[^-\d\.]/g, "")) - n;
                    var u = t - m - parseInt(j.replace(/[^-\d\.]/g, "")) - n,
                        x = w;
                    jQuery(this).find(".info-c-full-wrap").width(u), jQuery(this).find(".info-c-full-wrap").css({
                        "margin-left": x + "px"
                    })
                }
            }
        }
        if ("on" == c) {
            var d = jQuery(this).children().data("responsive-breakpoint"),
                e = jQuery(window).width();
            e <= d && jQuery(this).css({
                width: "auto",
                overflow: "visible",
                height: "auto",
                padding: 0
            })
        }
    })
}

function info_circle_slide(a, b) {
    b.bsf_appear(function() {
        setInterval(function() {
            if ("on" == b.attr("data-slide-true")) {
                var a = 1 * b.attr("data-slide-number"),
                    c = b.find(".info-circle-icons").length;
                "full" != b.data("info-circle-angle") ? c - 1 == a && (a = 0) : c == a && (a = 0);
                var d = b.find(".info-circle-icons").eq(a);
                b.attr("data-slide-number", a + 1), show_next_info_circle(d)
            }
        }, a)
    })
}

function show_next_info_circle(a) {
    var b = a.parents(".info-c-full-br").data("highlight-style");
    "" != b && (a.parents(".info-c-full-br").find("." + b).removeClass(b).removeClass("info-cirlce-active"), a.addClass(b).addClass("info-cirlce-active"));
    var c = a.next(),
        d = a.parents(".info-c-full-br").data("icon-show-size");
    "not-show" == a.parents(".info-c-full-br").data("icon-show") && (c.find("i").remove(), c.find("img").remove(), a.parents(".info-c-full-br").find(".info-c-full").addClass("cirlce-noicon")), c = c.html();
    var e = (a.css("font-size"), a.attr("style"), a.parents(".info-c-full-br"));
    e.find(".info-c-full-wrap").stop().animate({
        opacity: 0
    }, "slow", function() {
        a.parents(".info-c-full-br").find(".info-c-full .info-c-full-wrap").html(c), e.find(".info-c-full i").css({
            "font-size": parseInt(d) + "px"
        }), e.find(".info-c-full img").css({
            width: parseInt(d) + "px"
        }), a.parents(".info-c-full-br").find(".info-c-full-wrap").animate({
            opacity: 1
        }, "slow")
    })
}

function responsive_check(a) {
    jQuery(a).each(function() {
        if ("on" == jQuery(this).data("responsive-circle")) {
            var a = jQuery(this).parent(),
                b = a.data("uniqid"),
                c = jQuery(this).data("responsive-breakpoint"),
                d = "info-circle-wrapper-" + b,
                e = "<style>@media(max-width:" + c + "px){ #" + d + " .smile_icon_list_wrap{ display: block; margin-top: auto !important; } #" + d + " .info-c-full-br{ display: none; } .smile_icon_list_wrap { margin-left:auto !important; max-width:inherit !important; width:auto !important; } .info-circle-responsive .info-circle-def { display: block; width: auto; height: auto; } .info-circle-responsive .info-circle-sub-def { display: block; vertical-align: top; } }</style>";
            jQuery("head").append(e);
            var f = jQuery(this).parent().find(".smile_icon_list_wrap .smile_icon_list"),
                g = f.find(".icon_list_item").clone();
            f.find(".icon_list_item").remove();
            var h = jQuery(this).next().data("content_bg"),
                i = jQuery(this).next().data("content_color");
            jQuery(this).find(".icon-circle-list .info-details").each(function() {
                var a = jQuery(this).attr("data-icon-class"),
                    b = jQuery(this).find(".info-circle-heading").html(),
                    c = jQuery(this).find(".info-circle-text").html(),
                    d = jQuery(this).prev().css("background-color"),
                    e = jQuery(this).prev().css("color"),
                    j = jQuery(this).prev().css("border"),
                    k = jQuery(this).find(".info-circle-sub-def").children().eq(0).clone();
                g.find(".icon_list_icon").html(k.wrap("<div />").parent().html()), g.find(".icon_description").css("color", i), g.find(".icon_description").css("background-color", h), g.find(".icon_description h3").html(b), g.find(".icon_description p").html(c), g.find(".icon_list_icon").css({
                    "background-color": d,
                    color: e,
                    border: j
                }), g.addClass(a), f.append(g.wrap("<div />").parent().html())
            })
        }
    })
}

function make_info_circle(a, b) {
    jQuery(a).each(function(a, b) {
        var c = jQuery(b).data("icon-size");
        jQuery(jQuery(b).find(".icon-circle-list .info-circle-icons")).each(function(a, d) {
            var e, f, g, h, i = !!jQuery(d).hasClass("info-circle-icon-without-background");
            i ? (e = f = h = c, g = c / 2) : (e = f = h = 2 * c, g = c), jQuery(b).parent().css({
                "margin-top": g + 10 + "px",
                "margin-bottom": g + 10 + "px"
            }), jQuery(b).find(".icon-circle-list .info-circle-icons").css({
                "font-size": c + "px",
                height: e + "px",
                width: f + "px",
                margin: "-" + (g + "px"),
                "line-height": h + "px"
            })
        })
    }), ".info-c-full-br" == a && jQuery(a).each(function() {
        jQuery(this).css("height", jQuery(this).width()), jQuery(this).css("opacity", "1")
    }), ".info-c-semi-br" == a && jQuery(a).each(function() {
        var a = jQuery(this).width();
        jQuery(this).css("height", parseInt(a) / 2 + "px");
        var a = a + "px " + a + "px  0 0";
        jQuery(this).css("border-radius", a);
        var b = jQuery(this).find(".info-c-full").width();
        b = b + "px " + b + "px 0 0", jQuery(this).find(".info-c-full").css("border-radius", b)
    }), setTimeout(function() {
        b == resizedd && (".info-c-full-br" == a && part_circle_icon(a), ".info-c-semi-br" == a && semi_circle_icon(a))
    }, 1e3)
}

function part_circle_icon(a) {
    jQuery(a).each(function() {
        jQuery(this).bsf_appear(function() {
            if ("none" != jQuery(this).css("display")) {
                var a = jQuery(this).find(".icon-circle-list .info-circle-icons").length,
                    b = new Array,
                    c = jQuery(this).outerWidth() / 2,
                    d = 0,
                    e = jQuery(this).data("start-degree");
                "undefined" == typeof e && "" == e || (d = e);
                var f = 180 / a,
                    g = jQuery(this).data("info-circle-angle"),
                    h = jQuery(this).data("divert"),
                    i = "";
                "full" == g && (i = g, g = 180, f = 90, c = -c);
                var j = 0,
                    k = !1;
                for (m = 1; m <= a; m++) {
                    var l = m * ((180 + 2 * f) / a);
                    "full" == i ? (l < d && 1 == m ? (j = d - l, k = !1) : l > d && 1 == m && (j = l - d, k = !0), 1 == k ? l -= j : l += j) : l = l + g - f + h, l *= .0174532925, b.push(c * Math.cos(l)), b.push(c * Math.sin(l))
                }
                var m = 0,
                    n = 0,
                    o = jQuery(this).data("launch"),
                    p = jQuery(this).data("launch-duration"),
                    q = jQuery(this).data("launch-delay");
                p || (p = 1), q || (q = .15), "" != o ? (n = -(1e3 * q), jQuery(this).find(".icon-circle-list .info-circle-icons").each(function() {
                    var a = jQuery(this);
                    n += 1e3 * q, setTimeout(function() {
                        a.animate({
                            opacity: 1,
                            left: b[m++],
                            top: b[m++]
                        }, {
                            duration: 1e3 * p,
                            easing: o
                        })
                    }, n)
                })) : jQuery(this).find(".icon-circle-list .info-circle-icons").each(function() {
                    var a = jQuery(this);
                    a.css({
                        opacity: "1",
                        left: b[m++],
                        top: b[m++]
                    })
                })
            }
        })
    })
}

function setmytime(a, b) {
    function c() {
        var a = jQuery(window).width();
        jQuery(".ult_tabs").each(function() {
            var b = (jQuery(this).data("tabsstyle"), jQuery(this).data("respmode")),
                c = jQuery(this).data("respwidth"),
                d = jQuery(this).data("responsivemode"),
                f = jQuery(this).attr("id");
            a >= c ? (jQuery(this).parent().find("." + f).css({
                display: "none"
            }), jQuery(this).parent().find("#" + f).css({
                display: "block"
            }), "Both" != d && (jQuery(this).find(".aio-icon").hasClass("ult_tab_resp_icon") && jQuery(this).find(".aio-icon").removeClass("ult_tab_resp_icon").addClass("icon-top"), jQuery(this).find(".ult_tab_main").hasClass("ult_tab_resp_ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_tab_resp_ult_top").addClass("ult_top"))) : ("Accordion" == b && (jQuery(this).parent().find("." + f).css({
                display: "block"
            }), jQuery(this).parent().find("#" + f).css({
                display: "none"
            })), "Both" != d && (jQuery(this).find(".aio-icon").hasClass("icon-top") && jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"), jQuery(this).find(".ult_tab_main").hasClass("ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top"))), a > 300 && a < 660 && (jQuery(this).find(".ult_a ").removeClass("false"), e.push(ht1), "Both" != d && (jQuery(this).find(".aio-icon").hasClass("icon-top") && jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"), jQuery(this).find(".ult_tab_main").hasClass("ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top")))
        })
    }
    var d = [],
        e = [],
        f = !0,
        g = escape(window.location.hash.substr(1));
    if ("" != a && "undefined" != typeof a && (g = a), "" != g) {
        var h = jQuery("a.ult_a[href$='" + g + "']");
        if (h.parents(".ult_tabs").length > 0) {
            var i = h.parents(".ult_tabs"),
                j = i.data("activebg"),
                k = i.data("titlebg"),
                l = i.data("titlecolor"),
                m = i.data("activetitle"),
                n = i.data("tabsstyle"),
                o = i.data("activeicon"),
                p = i.find("li.ult_tab_li").data("iconcolor");
            if ("" == o) var o = i.find("li.ult_tab_li").data("iconhover");
            i.find("li.ult_tab_li").removeClass("current"), h.hasClass("ult_a") && h.parent().addClass("current"), "style1" == n || "style2" == n ? (i.find("a.ult_a").css({
                "background-color": k
            }), h.css({
                "background-color": j
            })) : (i.find("li.ult_tab_li").css({
                "background-color": k
            }), h.parent().css({
                "background-color": j
            })), i.find("a.ult_a").css({
                color: l
            }), h.css({
                color: m
            }), i.find(".ult_tab_icon").css({
                color: p
            }), h.find(".ult_tab_icon").css({
                color: o
            });
            var q = h.parent().index() + 1;
            i.find(".ult_tabitemname").css({
                display: "none"
            }), i.find(".ult_tabitemname:nth-child(" + q + ")").css({
                display: "block"
            });
            i.offset().top, i.offset().left;
            i.hasClass("ult_aniamte") || b === !0 || jQuery("html, body").animate({
                scrollTop: i.offset().top - 100
            }, 1e3), i.addClass("ult_aniamte"), i.find("ul.ult_tabmenu li a.ult_a").click(function(a) {
                a.preventDefault(), jQuery("html,body").clearQueue(), jQuery("html,body").stop()
            })
        }
    }
    jQuery(".ult_tabs").each(function() {
        var a = jQuery(this).data("fullheight"),
            b = 0;
        "on" == a && jQuery(this).find(".ult_tabitemname").each(function() {
            b < jQuery(this).outerHeight() && (b = jQuery(this).outerHeight(), jQuery(this).parents(".ult_tabcontent").css({
                "min-height": b + "px"
            }))
        });
        var c = jQuery(this).data("tabsstyle"),
            g = jQuery(window).width(),
            h = jQuery(this).data("respmode"),
            i = jQuery(this).data("respwidth"),
            j = jQuery(this).data("responsivemode"),
            k = jQuery(this).closest(".ult_tabs").data("animation");
        if ("Fade" == k || "Scale" == k || "Slide-Zoom" == k) {
            var l = jQuery(this).find("div.ult_tabcontent").outerHeight();
            jQuery(this).find(".ult_tabcontent").css({
                height: l
            })
        }
        if ("Slide-Horizontal" == k) {
            var g = jQuery(this).find("div.ult_tabcontent").outerWidth();
            jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("ult_active_tabnme")
        }
        "Scale" == k && (jQuery(this).find(".ult_tabitemname").not("div.ult_tabitemname:eq(0)").addClass("scaleTabname"), jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("scaleTabname2")), "Slide-Zoom" == k && (jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in"), jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in"));
        var m = jQuery(this).attr("id");
        g >= i ? (jQuery(this).parent().find("." + m).css({
            display: "none"
        }), jQuery(this).parent().find("#" + m).css({
            display: "block"
        })) : "Accordion" == h && (jQuery(this).parent().find("." + m).css({
            display: "block"
        }), jQuery(this).parent().find("#" + m).css({
            display: "none"
        }));
        var n = 0;
        f = "false", jQuery(this).find(".ult_tab_li").each(function() {
            n < jQuery(this).outerHeight() && (n = jQuery(this).outerHeight())
        }), jQuery(this).find(".ult_a").addClass(f), ht1 = parseInt(n), "style2" == c && (ht1 = parseInt(ht1 / 2), g > 300 && g < 660 && (ht1 = n / 2)), g > 300 && g < 660 && (jQuery(this).find(".ult_a ").removeClass("false"), e.push(ht1), "Both" != j && (jQuery(this).find(".aio-icon").hasClass("icon-top") && jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"), jQuery(this).find(".ult_tab_main").hasClass("ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top"))), jQuery(this).find(".ult_a ").hasClass("false") && d.push(ht1)
    }), jQuery(window).resize(function(a) {
        c()
    })
}! function(a) {
    function b() {
        return !!jQuery("body").hasClass("rtl")
    }
    jQuery(document).ready(function() {
        function c() {
            return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && void jQuery(".enable-on-viewport").each(function(a, b) {
                var c = jQuery(this).isVdoOnScreen();
                jQuery(this).hasClass("hosted-video") && !jQuery(this).hasClass("override-controls") && (c ? (jQuery(this)[0].play(), jQuery(this).parent().parent().parent().find(".video-controls").attr("data-action", "play"), jQuery(this).parent().parent().parent().find(".video-controls").html('<i class="ult-vid-cntrlpause"></i>')) : (jQuery(this)[0].pause(), jQuery(this).parent().parent().parent().find(".video-controls").attr("data-action", "pause"), jQuery(this).parent().parent().parent().find(".video-controls").html('<i class="ult-vid-cntrlplay"></i>')))
            })
        }

        function d(a) {
            var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            a = a.replace(b, function(a, b, c, d) {
                return b + b + c + c + d + d
            });
            var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return c ? {
                r: parseInt(c[1], 16),
                g: parseInt(c[2], 16),
                b: parseInt(c[3], 16)
            } : null
        }

        function e(b, c) {
            var e = b.data("seperator"),
                f = b.data("seperator-type"),
                g = b.data("seperator-shape-size"),
                h = b.data("seperator-background-color"),
                i = b.data("seperator-border"),
                j = b.data("seperator-border-color"),
                k = b.data("seperator-border-width"),
                l = b.data("seperator-svg-height"),
                m = b.data("seperator-full-width"),
                n = b.data("seperator-position");
            "undefined" != typeof n && "" != n || (n = "top_seperator");
            var o = b.data("icon");
            o = "undefined" == typeof o ? "" : '<div class="separator-icon">' + o + "</div>";
            var p = seperator_class = seperator_border_css = seperator_border_line_css = seperator_css = "";
            if ("undefined" != typeof e && "true" == e.toString()) {
                var q = shape_css = svg = inner_html = seperator_css = shape_css = "",
                    r = !1,
                    s = Math.floor(9999999999999 * Math.random()),
                    t = "uvc-seperator-" + s;
                "undefined" != typeof g && "" != g && "undefined" != g || (g = 0), g = parseInt(g);
                var u = g / 2,
                    v = 0;
                if ("triangle_seperator" == f) seperator_class = "ult-trinalge-seperator";
                else if ("circle_seperator" == f) seperator_class = "ult-circle-seperator";
                else if ("diagonal_seperator" == f) seperator_class = "ult-double-diagonal";
                else if ("triangle_svg_seperator" == f) seperator_class = "ult-svg-triangle", svg = '<svg class="uvc-svg-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 0.156661 0.1"><polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 "/></svg>', r = !0;
                else if ("circle_svg_seperator" == f) seperator_class = "ult-svg-circle", svg = '<svg class="uvc-svg-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 0.2 0.1"><path d="M0.200004 0c-3.93701e-006,0.0552205 -0.0447795,0.1 -0.100004,0.1 -0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1l0.200004 0z"/></svg>', r = !0;
                else if ("xlarge_triangle_seperator" == f) seperator_class = "ult-xlarge-triangle", svg = '<svg class="uvc-x-large-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-0 0.333331l4.66666 0 0 -3.93701e-006 -2.33333 0 -2.33333 0 0 3.93701e-006zm0 -0.333331l4.66666 0 0 0.166661 -4.66666 0 0 -0.166661zm4.66666 0.332618l0 -0.165953 -4.66666 0 0 0.165953 1.16162 -0.0826181 1.17171 -0.0833228 1.17171 0.0833228 1.16162 0.0826181z"/></svg>', r = !0;
                else if ("xlarge_triangle_left_seperator" == f) seperator_class = "ult-xlarge-triangle-left", svg = '<svg class="uvc-x-large-triangle-left" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>', r = !0;
                else if ("xlarge_triangle_right_seperator" == f) seperator_class = "ult-xlarge-triangle-right", svg = '<svg class="uvc-x-large-triangle-right" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>', r = !0;
                else if ("xlarge_circle_seperator" == f) seperator_class = "ult-xlarge-circle", svg = '<svg class="uvc-x-large-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil1" d="M4.66666 0l0 7.87402e-006 -3.93701e-006 0c0,0.0920315 -1.04489,0.166665 -2.33333,0.166665 -1.28844,0 -2.33333,-0.0746339 -2.33333,-0.166665l-3.93701e-006 0 0 -7.87402e-006 4.66666 0z"/></svg>', r = !0;
                else if ("curve_up_seperator" == f) seperator_class = "ult-curve-up-seperator", svg = '<svg class="curve-up-inner-seperator uvc-curve-up-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>', r = !0;
                else if ("curve_down_seperator" == f) seperator_class = "ult-curve-down-seperator", svg = '<svg class="curve-down-inner-seperator uvc-curve-down-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>', r = !0;
                else if ("tilt_left_seperator" == f) seperator_class = "ult-tilt-left-seperator", svg = '<svg class="uvc-tilt-left-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>', r = !0;
                else if ("tilt_right_seperator" == f) seperator_class = "ult-tilt-right-seperator", svg = '<svg class="uvc-tilt-right-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>', r = !0;
                else if ("waves_seperator" == f) seperator_class = "ult-wave-seperator", svg = '<svg class="wave-inner-seperator uvc-wave-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 6 0.1" preserveAspectRatio="none"><path d="M0.199945 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c-0.0541102,0 -0.0981929,-0.0430079 -0.0999409,-0.0967008l0 0.0967008 0.0999409 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm2.00004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm-0.1 0.1l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm1.90004 -0.1c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.199945 0.00329921l0 0.0967008 -0.0999409 0c0.0541102,0 0.0981929,-0.0430079 0.0999409,-0.0967008z"/></svg>',
                    r = !0;
                else if ("clouds_seperator" == f) seperator_class = "ult-cloud-seperator", svg = '<svg class="cloud-inner-seperator uvc-cloud-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 2.23333 0.1" preserveAspectRatio="none"><path class="fil0" d="M2.23281 0.0372047c0,0 -0.0261929,-0.000389764 -0.0423307,-0.00584252 0,0 -0.0356181,0.0278268 -0.0865354,0.0212205 0,0 -0.0347835,-0.00524803 -0.0579094,-0.0283701 0,0 -0.0334252,0.0112677 -0.0773425,-0.00116929 0,0 -0.0590787,0.0524724 -0.141472,0.000779528 0,0 -0.0288189,0.0189291 -0.0762362,0.0111535 -0.00458268,0.0141024 -0.0150945,0.040122 -0.0656811,0.0432598 -0.0505866,0.0031378 -0.076126,-0.0226614 -0.0808425,-0.0308228 -0.00806299,0.000854331 -0.0819961,0.0186969 -0.111488,-0.022815 -0.0076378,0.0114843 -0.059185,0.0252598 -0.083563,-0.000385827 -0.0295945,0.0508661 -0.111996,0.0664843 -0.153752,0.019 -0.0179843,0.00227559 -0.0571181,0.00573622 -0.0732795,-0.0152953 -0.027748,0.0419646 -0.110602,0.0366654 -0.138701,0.00688189 0,0 -0.0771732,0.0395709 -0.116598,-0.0147677 0,0 -0.0497598,0.02 -0.0773346,-0.00166929 0,0 -0.0479646,0.0302756 -0.0998937,0.00944094 0,0 -0.0252638,0.0107874 -0.0839488,0.00884646 0,0 -0.046252,0.000775591 -0.0734567,-0.0237087 0,0 -0.046252,0.0101024 -0.0769567,-0.00116929 0,0 -0.0450827,0.0314843 -0.118543,0.0108858 0,0 -0.0715118,0.0609803 -0.144579,0.00423228 0,0 -0.0385787,0.00770079 -0.0646299,0.000102362 0,0 -0.0387559,0.0432205 -0.125039,0.0206811 0,0 -0.0324409,0.0181024 -0.0621457,0.0111063l-3.93701e-005 0.0412205 2.2323 0 0 -0.0627953z"/></svg>', r = !0;
                else if ("multi_triangle_seperator" == f) {
                    seperator_class = "ult-multi-trianle";
                    var w = d(h);
                    svg = '<svg class="uvc-multi-triangle-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="' + l + '">\t\t\t\t            <path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .1)"></path>\t\t\t\t            <path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .1)"></path>\t\t\t\t            <path class="medium left" d="M0 100 L50 50 L0 33.3" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .3)"></path>\t\t\t\t            <path class="medium right" d="M100 100 L50 50 L100 33.3" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .3)"></path>\t\t\t\t            <path class="small left" d="M0 100 L50 50 L0 66.6" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .5)"></path>\t\t\t\t            <path class="small right" d="M100 100 L50 50 L100 66.6" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .5)"></path>\t\t\t\t            <path d="M0 99.9 L50 49.9 L100 99.9 L0 99.9" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', 1)"></path>\t\t\t\t            <path d="M48 52 L50 49 L52 52 L48 52" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', 1)"></path>\t\t\t\t        </svg>', r = !0
                } else if ("round_split_seperator" == f) {
                    var x = temp_border_before = temp_border_after = temp_border_line = "";
                    temp_padding = 0, seperator_class = "ult-rounded-split-seperator-wrapper";
                    jQuery(b).outerHeight();
                    if (0 != g) {
                        var y = parseInt(jQuery(b).css("padding-bottom"));
                        jQuery(b).css({
                            "padding-bottom": g + "px"
                        }), 0 == y && (temp_padding = g)
                    }
                    if ("top_seperator" == n) var z = "top-split-seperator",
                        A = "0px",
                        B = "auto",
                        C = "border-radius: 0 0 " + g + "px 0 !important;",
                        D = "border-radius: 0 0 0 " + g + "px !important;";
                    else if ("bottom_seperator" == n) var z = "bottom-split-seperator",
                        A = "auto",
                        B = "0px",
                        C = "border-radius: 0 " + g + "px 0 0 !important;",
                        D = "border-radius: " + g + "px 0 0 0 !important;";
                    else var z = "top-bottom-split-seperator",
                        E = "0px",
                        F = "auto",
                        G = "auto",
                        H = "0px",
                        I = "border-radius: 0 0 " + g + "px 0 !important;",
                        J = "border-radius: 0 0 0 " + g + "px !important;",
                        K = "border-radius: 0 " + g + "px 0 0 !important;",
                        L = "border-radius: " + g + "px 0 0 0 !important;";
                    inner_html = '<div class="ult-rounded-split-seperator ' + z + '"></div>', "none" != i && (temp_border_line = k + "px " + i + " " + j, temp_border_before = "border-top: " + temp_border_line + "; border-right: " + temp_border_line + ";", temp_border_after = "border-top: " + temp_border_line + "; border-left: " + temp_border_line + ";"), "top_seperator" == n || "bottom_seperator" == n ? (x = "<style>." + t + " .ult-rounded-split-seperator." + z + ":before { background-color:" + h + "; height:" + g + "px !important; top:" + A + "; bottom:" + B + "; " + temp_border_before + " " + C + " } ." + t + " .ult-rounded-split-seperator." + z + ":after { background-color:" + h + "; left: 50%; height:" + g + "px !important; top:" + A + "; bottom:" + B + "; " + temp_border_after + " " + D + " }</style>", jQuery("head").append(x)) : (x = "<style>." + t + ".top_seperator .ult-rounded-split-seperator:before { background-color:" + h + "; height:" + g + "px !important; top:" + E + "; bottom:" + F + "; " + temp_border_before + " " + I + " } ." + t + ".top_seperator .ult-rounded-split-seperator:after { background-color:" + h + "; left: 50%; height:" + g + "px !important; top:" + E + "; bottom:" + F + "; " + temp_border_after + " " + J + " }</style>", temp_css_bottom = "<style>." + t + ".bottom_seperator .ult-rounded-split-seperator:before { background-color:" + h + "; height:" + g + "px !important; top:" + G + "; bottom:" + H + "; " + temp_border_before + " " + K + " } ." + t + ".bottom_seperator .ult-rounded-split-seperator:after { background-color:" + h + "; left: 50%; height:" + g + "px !important; top:" + G + "; bottom:" + H + "; " + temp_border_after + " " + L + " }</style>", jQuery("head").append(x + temp_css_bottom))
                } else seperator_class = "ult-no-shape-seperator";
                if ("undefined" != typeof k && "" != k && 0 != k && (v = parseInt(k)), shape_css = 'content: "";width:' + g + "px; height:" + g + "px; bottom: -" + (u + v) + "px;", "" != h && (shape_css += "background-color:" + h + ";"), "none" != i && "ult-rounded-split-seperator-wrapper" != seperator_class && 0 == r && (seperator_border_line_css = k + "px " + i + " " + j, shape_css += "border-bottom:" + seperator_border_line_css + "; border-right:" + seperator_border_line_css + ";", seperator_css += "border-bottom:" + seperator_border_line_css + ";", p = "bottom:" + k + "px !important"), "ult-no-shape-seperator" != seperator_class && "ult-rounded-split-seperator-wrapper" != seperator_class && 0 == r) {
                    var q = "<style>." + t + " .ult-main-seperator-inner:after { " + shape_css + " }</style>";
                    jQuery("head").append(q)
                }
                if (1 == r && (inner_html = svg), "top_bottom_seperator" == n) {
                    var M = '<div class="ult-vc-seperator top_seperator ' + seperator_class + " " + t + '" data-full-width="' + m + '" data-border="' + i + '" data-border-width="' + k + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + o + "</div>";
                    M += '<div class="ult-vc-seperator bottom_seperator ' + seperator_class + " " + t + '" data-full-width="' + m + '" data-border="' + i + '" data-border-width="' + k + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + o + "</div>"
                } else var M = '<div class="ult-vc-seperator ' + n + " " + seperator_class + " " + t + '" data-full-width="' + m + '" data-border="' + i + '" data-border-width="' + k + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + o + "</div>";
                if (c.prepend(M), seperator_css = "<style>." + t + " .ult-main-seperator-inner { " + seperator_css + " }</style>", "" != p && (p = "<style>." + t + " .ult-main-seperator-inner { " + p + " }</style>", seperator_css += p), "" != o) {
                    var N = l / 2;
                    "none_seperator" == f || "circle_svg_seperator" == f || "triangle_svg_seperator" == f ? seperator_css += "<style>." + t + " .separator-icon { -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }</style>" : seperator_css += "<style>." + t + ".top_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% + " + N + "px)); -moz-transform: translate(-50%, calc(-50% + " + N + "px)); -ms-transform: translate(-50%, calc(-50% + " + N + "px)); -o-transform: translate(-50%, calc(-50% + " + N + "px)); transform: translate(-50%, calc(-50% + " + N + "px)); } ." + t + ".bottom_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% - " + N + "px)); -moz-transform: translate(-50%, calc(-50% - " + N + "px)); -ms-transform: translate(-50%, calc(-50% - " + N + "px)); -o-transform: translate(-50%, calc(-50% - " + N + "px)); transform: translate(-50%, calc(-50% - " + N + "px)); }</style>"
                }
                1 == r && (jQuery("." + t).find("svg").css("height", l), setTimeout(function() {
                    "multi_triangle_seperator" == f && jQuery(".ult-multi-trianle").each(function(b, c) {
                        var d = a(c).find("svg").height();
                        a(c).hasClass("top_seperator") || a(c).hasClass("bottom_seperator") && a(c).css("bottom", d - 1)
                    })
                }, 300)), jQuery("head").append(seperator_css)
            }
        }

        function f() {
            jQuery(".ult-vc-hide-row").each(function(a, b) {
                var c = jQuery(b).data("hide-row");
                "" != c && jQuery(b).addClass(c)
            })
        }

        function g() {
            jQuery(".ult-vc-seperator").each(function(a, b) {
                var c = jQuery(this).data("full-width"),
                    d = jQuery(this).parent().data("rtl");
                "undefined" == typeof d && (d = "false");
                var e = jQuery(this).parent().find(".upb_row_bg").data("bg-override");
                if ("undefined" == typeof e) var e = jQuery(this).parent().find(".upb_video-bg").data("bg-override");
                if (("ex-full" == e || "full" == e || "browser_size" == e) && 1 == c) {
                    var f = jQuery("html").width();
                    if (jQuery(this).hasClass("ult-rounded-split-seperator-wrapper")) {
                        var g = jQuery(this).data("border"),
                            h = jQuery(this).data("border-width");
                        "undefined" != typeof g && "none" != g && "undefined" != g && (f -= h)
                    }
                    var i = jQuery(this).offset().left;
                    jQuery(this).find(".ult-main-seperator-inner").width(f), "true" == d.toString() ? jQuery(this).find(".ult-main-seperator-inner").css({
                        "margin-right": -i + "px"
                    }) : jQuery(this).find(".ult-main-seperator-inner").css({
                        "margin-left": -i + "px"
                    })
                }
            })
        }
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a("html").addClass("ult-remove-fixed-background"), jQuery(window).scroll(function() {
            c()
        }), jQuery(window).load(function() {
            c()
        }), jQuery.fn.isVdoOnScreen = function() {
            var a = jQuery(window),
                b = {
                    top: a.scrollTop(),
                    left: a.scrollLeft()
                };
            b.right = b.left + a.width(), b.bottom = b.top + a.height() - 200;
            var c = this.parent().offset();
            return c.right = c.left + this.parent().outerWidth(), c.bottom = c.top + this.parent().outerHeight() - 300, !(b.right < c.left || b.left > c.right || b.bottom < c.top || b.top > c.bottom)
        }, jQuery.fn.ultimate_video_bg = function(a) {
            return jQuery(this).each(function() {
                var b = jQuery(this),
                    d = b.data("ultimate-video"),
                    f = b.data("ultimate-video2"),
                    g = b.data("ultimate-video-muted"),
                    h = b.data("ultimate-video-loop"),
                    i = b.data("ultimate-video-autoplay"),
                    j = b.data("ultimate-video-poster"),
                    k = b.data("bg-override"),
                    l = b.data("start-time"),
                    m = b.data("stop-time"),
                    n = b.data("upb-bg-animation"),
                    o = b.data("overlay"),
                    p = b.data("overlay-color"),
                    q = b.data("overlay-pattern"),
                    r = b.data("overlay-pattern-opacity"),
                    s = b.data("overlay-pattern-size"),
                    t = b.data("overlay-pattern-attachment"),
                    u = b.data("viewport-video"),
                    v = b.data("controls"),
                    w = b.data("controls-color"),
                    x = b.data("fadeout"),
                    y = b.data("fadeout-percentage"),
                    z = b.data("parallax-content"),
                    A = b.data("parallax-content-sense"),
                    B = b.data("row-effect-mobile-disable"),
                    C = b.data("hide-row"),
                    D = b.data("rtl"),
                    E = b.data("video_fixer"),
                    F = "",
                    G = "",
                    H = b.data("custom-vc-row"),
                    I = b.data("vc"),
                    J = b.data("theme-support"),
                    K = b.data("is_old_vc");
                "undefined" != typeof H && "" !== H || (H = "wpb_row"), "undefined" == typeof I && (I = 0), "undefined" == typeof K && (K = !1), "undefined" == typeof J && (J = "disable"), b.data("multi-color-overlay") && (F = b.data("multi-color-overlay"), G = b.data("multi-color-overlay-opacity"));
                var L = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if ("undefined" != typeof o && "true" === o.toString() && ("" != q && ("" != s && (s = "background-size:" + s + "px;"), "undefined" != typeof t && "" != t && (overlay_pattern_attachment_css = "background-attachment:" + t + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + q + "); opacity:" + r + "; " + s + "; " + overlay_pattern_attachment_css + '"></div>'), "" != p && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + p + ';"></div>'), "" != F && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + F + '" style="opacity:' + G + ';"></div>'), L = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), m = 0 != m ? m : "", 1 == K || "enable" == J)
                    if (b.prev().is("p") || b.prev().is("style")) var M = b.prev().prev();
                    else var M = b.prev();
                else var M = b.prevAll("." + H + ":first");
                M.css("position", "relative");
                var N = M.attr("class"),
                    O = b;
                b = M;
                var P = function() {
                    var a, c, d, e = "",
                        f = "";
                    if (d = b, resize_selector = d.find(".upb_video-bg"), "full" == k && (d = jQuery("body")), "ex-full" == k && (d = jQuery("html")), !isNaN(k))
                        for (var g = 0; g < k && "HTML" != d.prop("tagName"); g++) d = d.parent();
                    c = resize_selector.parents("upb_video_class").outerHeight(), a = d.outerWidth(), "browser_size" == k && (c = jQuery(window).height(), a = jQuery(window).width(), d.css("min-height", c + "px")), resize_selector.css({
                        "min-height": c + "px",
                        "min-width": a + "px"
                    }), d.offset() && (e = d.offset().left, resize_selector.offset() && (f = resize_selector.offset().left));
                    var h, i, j = a,
                        l = c,
                        m = resize_selector.find(".upb_vimeo_iframe");
                    youvideoplayer = resize_selector.find(".upb_utube_iframe"), embeddedvideoplayer = resize_selector.find(".upb_video-src");
                    var n = 16 / 9;
                    if (m && (j / n < l ? (h = Math.ceil(l * n), m.width(h).height(l).css({
                            left: (j - h) / 2,
                            top: 0
                        })) : (i = Math.ceil(j / n), m.width(j).height(i).css({
                            left: 0,
                            top: (l - i) / 2
                        }))), embeddedvideoplayer) {
                        var o = resize_selector.height();
                        j / (16 / 9) < o ? (embeddedvideoplayer.css("width", "auto"), embeddedvideoplayer.css("height", "100%")) : (embeddedvideoplayer.css("width", "100%"), embeddedvideoplayer.css("height", "auto"))
                    }
                };
                P(), "" != C && (b.addClass("ult-vc-hide-row"), b.attr("data-hide-row", C)), b.attr("data-rtl", D), b.addClass("upb_video_class"), b.attr("data-row-effect-mobile-disable", B), "fadeout_row_value" == x && (b.addClass("vc-row-fade"), b.attr("data-fadeout-percentage", y)), b.attr("data-upb_br_animation", n), d && (d.indexOf("youtube.com") != -1 ? a = "youtube" : d.indexOf("vimeo.com") != -1 && (a = "vimeo"));
                var Q = "";
                if ("display_control" == v) {
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var R = "ult-vid-cntrlplay",
                        S = "pause";
                    else var R = "ult-vid-cntrlpause",
                        S = "play";
                    Q = '<span class="video-controls" data-action="' + S + '" style="color:' + w + '"><i class="' + R + '"></i></span>'
                }
                if ("browser_size" == k && (b.wrapInner('<div class="upb_video-text-wrapper"><div class="upb_video-text"></div></div>'), b.find(".upb_video-text-wrapper").find(".upb_video-text").addClass(N)), "parallax_content_value" == z) {
                    b.addClass("vc-row-translate"), b.attr("data-parallax-content-sense", A), b.wrapInner('<div class="vc-row-translate-wrapper ' + N + '"></div>');
                    var T = b.css("padding-top"),
                        U = b.css("padding-bottom");
                    b.find(".vc-row-translate-wrapper").css({
                        "padding-top": T,
                        "padding-bottom": U
                    }), b[0].style.setProperty("padding-top", "0px", "important"), b[0].style.setProperty("padding-bottom", "0px", "important")
                }
                var V = "";
                if ("true" == E.toString() && (V = "uvc-video-fixer"), "youtube" == a || "vimeo" == a ? b.prepend('<div class="upb_video-wrapper ' + V + '"><div class="upb_video-bg utube" data-rtl="' + D + '" data-bg-override="' + k + '" data-row="' + H + '" data-theme-support="' + J + '">' + L + "</div></div>") : b.prepend(' <div class="upb_video-wrapper"><div class="upb_video-bg" data-bg-override="' + k + '" data-rtl="' + D + '" data-row="' + H + '" data-theme-support="' + J + '"><video class="upb_video-src"></video>' + Q + L + "</div></div>"), e(O, b), O.remove(), "youtube" == a) {
                    d = d.substring(d.indexOf("watch?v=") + 8, d.indexOf("watch?v=") + 19);
                    var W = b.find(".upb_video-bg");
                    "loop" == h && (h = !0), "muted" == g && (g = !0), W.attr("data-vdo", d), W.attr("data-loop", h), W.attr("data-poster", j), W.attr("data-muted", g), W.attr("data-start", l), W.attr("data-stop", m), u === !0 && (W.addClass("enable-on-viewport"), W.addClass("youtube-video"), c())
                } else if ("vimeo" == a) {
                    d = d.substring(d.indexOf("vimeo.com/") + 10, d.indexOf("vimeo.com/") + 18);
                    var W = b.find(".upb_video-bg");
                    W.html('<iframe class="upb_vimeo_iframe" src="https://player.vimeo.com/video/' + d + '?portrait=0&amp;byline=0&amp;title=0&amp;badge=0&amp;loop=0&amp;autoplay=1&amp;api=1&amp;rel=0&amp;" height="1600" width="900" frameborder=""></iframe>')
                } else {
                    var W = b.find(".upb_video-src");
                    if (hosted_wrapper = W.parent(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "display_control" != v) "display_control" != v && ("" != j && W.parent().find(".video-controls").hide(), W.remove());
                    else {
                        if (jQuery("<source/>", {
                                type: "video/mp4",
                                src: d
                            }).appendTo(W), "undefined" != typeof f && "" !== f) {
                            var X = "";
                            f.match(/.ogg/i) ? X = "video/ogg" : f.match(/.webm/i) && (X = "video/webm"), "" != X && jQuery("<source/>", {
                                type: X,
                                src: f
                            }).appendTo(W)
                        }
                        "muted" == g && W.attr({
                            "data-mute": "muted"
                        }), "loop" == h && W.attr({
                            loop: h
                        }), W.attr({
                            preload: "auto"
                        }), u === !0 ? (W.addClass("enable-on-viewport"), W.addClass("hosted-video"), c()) : "autoplay" == i && W.attr({
                            autoplay: i
                        })
                    }
                }
                "" != j && (console.log(W), W.is(".utube") ? W.css({
                    "background-image": "url(" + j + ")"
                }) : hosted_wrapper.css({
                    "background-image": "url(" + j + ")"
                })), jQuery(".upb_video-src").each(function(a, b) {
                    var c = jQuery(b).attr("data-mute");
                    if ("undefined" == typeof c && (c = !1), "muted" === c) {
                        var d = jQuery(b)[0];
                        d.muted = "muted"
                    }
                })
            }), this
        }, jQuery.fn.ultimate_bg_shift = function() {
            return jQuery(this).each(function() {
                var a = jQuery(this),
                    c = a.data("ultimate-bg"),
                    d = a.data("ultimate-bg-style"),
                    f = a.prev().css("background-color"),
                    g = a.data("bg-img-repeat"),
                    h = a.data("bg-img-size"),
                    i = a.data("bg-img-position"),
                    j = a.data("parallx_sense"),
                    k = a.data("bg-override"),
                    l = a.data("bg_img_attach"),
                    m = a.data("upb-bg-animation"),
                    n = "",
                    o = a.data("overlay"),
                    n = a.data("overlay-color"),
                    p = a.data("overlay-pattern"),
                    q = a.data("overlay-pattern-opacity"),
                    r = a.data("overlay-pattern-size"),
                    s = a.data("overlay-pattern-attachment"),
                    t = a.data("fadeout"),
                    u = a.data("fadeout-percentage"),
                    v = a.data("parallax-content"),
                    w = a.data("parallax-content-sense"),
                    x = a.data("bg-animation"),
                    y = a.data("bg-animation-type"),
                    z = a.data("animation-repeat"),
                    A = a.data("row-effect-mobile-disable"),
                    B = a.data("img-parallax-mobile-disable"),
                    C = a.data("hide-row"),
                    D = a.data("rtl"),
                    E = "",
                    F = "",
                    G = a.data("custom-vc-row"),
                    H = a.data("vc"),
                    I = a.data("theme-support"),
                    J = a.data("is_old_vc");
                "undefined" != typeof G && "" !== G || (G = "wpb_row"), "undefined" == typeof H && (H = 0), "undefined" == typeof J && (J = !1), "undefined" == typeof I && (I = "disable"), a.data("multi-color-overlay") && (E = a.data("multi-color-overlay"), F = a.data("multi-color-overlay-opacity"));
                var K = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if ("undefined" != typeof o && "true" === o.toString() && ("" != p && ("" != r && (r = "background-size:" + r + "px;"), "undefined" != typeof s && "" != s && (overlay_pattern_attachment_css = "background-attachment:" + s + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + p + "); opacity:" + q + "; " + r + "; " + overlay_pattern_attachment_css + '"></div>'), "" != n && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + n + ';"></div>'), "" != E && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + E + '" style="opacity:' + F + ';"></div>'), K = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), 1 == J || "enable" == I)
                    if (a.prev().is("p") || a.prev().is("style")) var L = a.prev().prev();
                    else var L = a.prev();
                else var L = a.prevAll("." + G + ":first");
                L.css("position", "relative");
                var M = L.attr("class");
                if ("browser_size" == k && (L.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), a.parent().find(".upb-background-text-wrapper").addClass("full-browser-size"), a.parent().find(".upb-background-text-wrapper").find(".upb-background-text").addClass(M)), "parallax_content_value" == v) {
                    L.addClass("vc-row-translate"), L.attr("data-parallax-content-sense", w), L.wrapInner('<div class="vc-row-translate-wrapper ' + M + '"></div>');
                    var N = L.css("padding-top"),
                        O = L.css("padding-bottom");
                    L.find(".vc-row-translate-wrapper").css({
                        "padding-top": N,
                        "padding-bottom": O
                    }), L[0].style.setProperty("padding-top", "0px", "important"), L[0].style.setProperty("padding-bottom", "0px", "important")
                }
                "" != C && (L.addClass("ult-vc-hide-row"), L.attr("data-hide-row", C)), L.attr("data-rtl", D), L.prepend('<div class="upb_row_bg">' + K + "</div>"), a.remove(), e(a, L), a = L, a.attr("data-row-effect-mobile-disable", A), a.attr("data-img-parallax-mobile-disable", B), "fadeout_row_value" == t && (a.addClass("vc-row-fade"), a.attr("data-fadeout-percentage", u)), a.css("background-image", ""), a = a.find(".upb_row_bg"), a.attr("data-upb_br_animation", m), "automatic" != h ? a.css({
                    "background-size": h
                }) : a.addClass("upb_bg_size_automatic"), a.css({
                    "background-repeat": g,
                    "background-position": i,
                    "background-color": f
                }), "vcpb-fs-jquery" == d || "vcpb-mlvp-jquery" == d ? a.attr("data-img-array", c) : a.css({
                    "background-image": c,
                    "background-attachment": l
                }), a.attr("data-parallax_sense", j), a.attr("data-bg-override", k), a.attr("data-bg-animation", x), a.attr("data-bg-animation-type", y), a.attr("data-animation-repeat", z), a.addClass(d);
                var P = function() {
                    var c, d, e, f, g;
                    if (e = a.parent(), "full" == k && (e = jQuery("body"), f = 0), "ex-full" == k && (e = jQuery("html"), f = 0), !isNaN(k)) {
                        for (var h = 0; h < k && "HTML" != e.prop("tagName"); h++) e = e.parent();
                        f = e.offset().left
                    }
                    if (wh = jQuery(window).height(), d = a.parent().outerHeight(), c = e.outerWidth(), a.css({
                            "min-width": c + "px"
                        }), g = a.offset().left, 1 == b() ? a.css({
                            right: -Math.abs(f - g) + "px"
                        }) : a.css({
                            left: -Math.abs(f - g) + "px"
                        }), "browser_size" == k) {
                        var i = a.parent().find(".upb-background-text").height();
                        i > wh && (wh = i), a.parent().css("height", wh + "px"), a.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
                    }
                };
                P(), jQuery(window).load(function() {
                    P()
                }), jQuery(window).resize(function() {
                    P()
                })
            }), this
        }, jQuery.fn.ultimate_grad_shift = function() {
            return jQuery(this).each(function() {
                var a = jQuery(this),
                    c = a.data("grad"),
                    d = (a.data("grad-type"), a.data("grad-custom-degree"), jQuery(this).data("bg-override")),
                    f = a.data("overlay"),
                    g = a.data("overlay-color"),
                    h = a.data("overlay-pattern"),
                    i = a.data("overlay-pattern-opacity"),
                    j = a.data("overlay-pattern-size"),
                    k = a.data("overlay-pattern-attachment"),
                    l = a.data("upb-bg-animation"),
                    m = a.data("fadeout"),
                    n = a.data("fadeout-percentage"),
                    o = a.data("parallax-content"),
                    p = a.data("parallax-content-sense"),
                    q = a.data("row-effect-mobile-disable"),
                    r = a.data("hide-row"),
                    s = a.data("rtl"),
                    t = "",
                    u = "",
                    v = a.data("custom-vc-row"),
                    w = a.data("vc"),
                    x = a.data("theme-support"),
                    y = a.data("is_old_vc");
                if ("undefined" != typeof v && "" !== v || (v = "wpb_row"), "undefined" == typeof w && (w = 0), "undefined" == typeof y && (y = !1), "undefined" == typeof x && (x = "disable"), a.data("multi-color-overlay") && (t = a.data("multi-color-overlay"), u = a.data("multi-color-overlay-opacity")), 1 == y || "enable" == x)
                    if (a.prev().is("p") || a.prev().is("style")) var z = a.prev().prev();
                    else var z = a.prev();
                else var z = a.prevAll("." + v + ":first");
                z.css("position", "relative");
                var A = z.attr("class");
                a.remove();
                var B = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if ("undefined" != typeof f && "true" === f.toString() && ("" != h && ("" != j && (j = "background-size:" + j + "px;"), "undefined" != typeof k && "" != k && (overlay_pattern_attachment_css = "background-attachment:" + k + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + h + "); opacity:" + i + "; " + j + "; " + overlay_pattern_attachment_css + '"></div>'), "" != g && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + g + ';"></div>'), "" != t && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + t + '" style="opacity:' + u + ';"></div>'), B = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), "browser_size" == d && (z.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), z.find(".upb-background-text-wrapper").find(".upb-background-text").addClass(A), z.addClass("full-browser-size")), "parallax_content_value" == o) {
                    z.addClass("vc-row-translate"), z.attr("data-parallax-content-sense", p), z.wrapInner('<div class="vc-row-translate-wrapper ' + A + '"></div>');
                    var C = z.css("padding-top"),
                        D = z.css("padding-bottom");
                    z.find(".vc-row-translate-wrapper").css({
                        "padding-top": C,
                        "padding-bottom": D
                    }), z[0].style.setProperty("padding-top", "0px", "important"), z[0].style.setProperty("padding-bottom", "0px", "important")
                }
                "" != r && (z.addClass("ult-vc-hide-row"), z.attr("data-hide-row", r)), z.attr("data-rtl", s), z.prepend('<div class="upb_row_bg">' + B + "</div>"), e(a, z), a = z, a.attr("data-row-effect-mobile-disable", q), "fadeout_row_value" == m && (a.addClass("vc-row-fade"), a.attr("data-fadeout-percentage", n)), a.css("background-image", ""), a = a.find(".upb_row_bg"), a.attr("data-upb_br_animation", l), c = c.replace("url(data:image/svg+xml;base64,", "");
                var E = c.indexOf(";");
                c = c.substring(E + 1), a.attr("style", c), a.attr("data-bg-override", d), "browser_size" == d && a.parent().find(".upb-background-text-wrapper").addClass("full-browser-size");
                var F = function() {
                    var c, e, f, g, h;
                    if (f = a.parent(), "full" == d && (f = jQuery("body"), g = 0), "ex-full" == d && (f = jQuery("html"), g = 0), !isNaN(d)) {
                        for (var i = 0; i < d && "HTML" != f.prop("tagName"); i++) f = f.parent();
                        g = f.offset().left
                    }
                    if (wh = jQuery(window).height(), e = a.parent().outerHeight(), c = f.outerWidth(), a.css({
                            "min-width": c + "px"
                        }), h = a.offset().left, 1 == b() ? a.css({
                            right: -Math.abs(g - h) + "px"
                        }) : a.css({
                            left: -Math.abs(g - h) + "px"
                        }), "browser_size" == d) {
                        var j = a.parent().find(".upb-background-text").height();
                        j > wh && (wh = j), a.parent().css("height", wh + "px"), a.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
                    }
                };
                F(), jQuery(window).load(function() {
                    F()
                }), jQuery(window).resize(function() {
                    F()
                })
            }), this
        }, jQuery.fn.ultimate_bg_color_shift = function() {
            return jQuery(this).each(function() {
                var a = jQuery(this),
                    c = jQuery(this).data("bg-override"),
                    d = jQuery(this).data("bg-color"),
                    f = a.data("fadeout"),
                    g = a.data("fadeout-percentage"),
                    h = a.data("parallax-content"),
                    i = a.data("parallax-content-sense"),
                    j = a.data("row-effect-mobile-disable"),
                    k = a.data("overlay"),
                    l = a.data("overlay-color"),
                    m = a.data("overlay-pattern"),
                    n = a.data("overlay-pattern-opacity"),
                    o = a.data("overlay-pattern-size"),
                    p = a.data("overlay-pattern-attachment"),
                    q = a.data("hide-row"),
                    r = a.data("rtl"),
                    s = "",
                    t = "",
                    u = a.data("vc"),
                    v = a.data("theme-support"),
                    w = a.data("custom-vc-row"),
                    x = a.data("is_old_vc");
                if ("undefined" != typeof w && "" !== w || (w = "wpb_row"), "undefined" == typeof u && (u = 0), "undefined" == typeof x && (x = !1), "undefined" == typeof v && (v = "disable"), a.data("multi-color-overlay") && (s = a.data("multi-color-overlay"), t = a.data("multi-color-overlay-opacity")), 1 == x || "enable" == v)
                    if (a.prev().is("p") || a.prev().is("style")) var y = a.prev().prev();
                    else var y = a.prev();
                else var y = a.prevAll("." + w + ":first");
                y.css("position", "relative");
                var z = y.attr("class"),
                    A = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
                if ("undefined" != typeof k && "true" === k.toString() && ("" != m && ("" != o && (o = "background-size:" + o + "px;"), "undefined" != typeof p && "" != p && (overlay_pattern_attachment_css = "background-attachment:" + p + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + m + "); opacity:" + n + "; " + o + "; " + overlay_pattern_attachment_css + '"></div>'), "" != l && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + l + ';"></div>'), "" != s && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + s + '" style="opacity:' + t + ';"></div>'), A = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), "browser_size" == c) y.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), y.find(".upb-background-text-wrapper").find(".upb-background-text").addClass(z);
                else;
                if ("" != q && (y.addClass("ult-vc-hide-row"), y.attr("data-hide-row", q)), y.attr("data-rtl", r), "parallax_content_value" == h) {
                    y.addClass("vc-row-translate"), y.wrapInner('<div class="vc-row-translate-wrapper ' + z + '"></div>'), y.attr("data-parallax-content-sense", i);
                    var B = y.css("padding-top"),
                        C = y.css("padding-bottom");
                    y.find(".vc-row-translate-wrapper").css({
                        "padding-top": B,
                        "padding-bottom": C
                    }), y[0].style.setProperty("padding-top", "0px", "important"), y[0].style.setProperty("padding-bottom", "0px", "important")
                }
                y.prepend('<div class="upb_row_bg">' + A + "</div>"), e(a, y), a.remove(), a = y, a.attr("data-row-effect-mobile-disable", j), "fadeout_row_value" == f && (a.addClass("vc-row-fade"), a.attr("data-fadeout-percentage", g)), a.css("background-image", ""), a = a.find(".upb_row_bg"), a.css({
                    background: d
                }), a.attr("data-bg-override", c), "browser_size" == c && a.parent().find(".upb-background-text-wrapper").addClass("full-browser-size");
                var D = function() {
                    var d, e, f, g, h;
                    if (f = a.parent(), "full" == c && (f = jQuery("body"), g = 0), "ex-full" == c && (f = jQuery("html"), g = 0), !isNaN(c)) {
                        for (var i = 0; i < c && "HTML" != f.prop("tagName"); i++) f = f.parent();
                        g = f.offset().left
                    }
                    if (wh = jQuery(window).height(), e = a.parent().outerHeight(), d = f.outerWidth(), a.css({
                            "min-width": d + "px"
                        }), h = a.offset().left, 1 == b() ? a.css({
                            right: -Math.abs(g - h) + "px"
                        }) : a.css({
                            left: -Math.abs(g - h) + "px"
                        }), "browser_size" == c) {
                        var j = a.parent().find(".upb-background-text").height();
                        j > wh && (wh = j), a.parent().css("height", wh + "px"), a.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
                    }
                };
                D(), jQuery(window).load(function() {
                    D()
                }), jQuery(window).resize(function() {
                    D()
                })
            }), this
        }, jQuery.fn.ultimate_parallax_animation = function(a) {
            function b() {
                var b, g = jQuery(window).scrollTop();
                e.each(function() {
                    if ("upb_fade_animation" == jQuery(this).data("upb_br_animation")) {
                        b = jQuery(this).offset().top;
                        var e = jQuery(this),
                            h = e.offset().top,
                            i = d(e);
                        if (h + i < g || h > g + c - 100) return;
                        var j = f - g;
                        if (h + i - c < g) {
                            var k = j / c;
                            if ("parent" == a) {
                                var l = parseInt(jQuery(this).css("opacity"));
                                l += k / 2.3, jQuery(this).parents(".wpb_row").css({
                                    opacity: l
                                })
                            }
                            if ("self" == a) {
                                var l = parseInt(jQuery(this).css("opacity"));
                                l += k / 2.3, jQuery(this).css({
                                    opacity: l
                                })
                            }
                        }
                        f = g
                    }
                })
            }
            var c = jQuery(window).height(),
                d = function(a) {
                    return a.height()
                },
                e = jQuery(this),
                f = jQuery(window).scrollTop();
            jQuery(window).bind("scroll", b).resize(b), b()
        };
        var h = 0;
        jQuery(".upb_content_video, .upb_content_iframe").prev().is("p") ? jQuery(".upb_content_video, .upb_content_iframe").prev().prev().css("background-image", "").css("background-repeat", "") : jQuery(".upb_content_video, .upb_content_iframe").prev().css("background-image", "").css("background-repeat", ""), jQuery(".upb_content_video").ultimate_video_bg(), jQuery(".upb_bg_img").ultimate_bg_shift(), jQuery(".upb_content_iframe").ultimate_video_bg(), jQuery(".upb_grad").ultimate_grad_shift(), jQuery(".upb_color").ultimate_bg_color_shift(), jQuery(".upb_no_bg").each(function(a, b) {
            var c = jQuery(b).attr("data-fadeout"),
                d = jQuery(b).data("fadeout-percentage"),
                e = jQuery(b).data("parallax-content"),
                f = jQuery(b).data("parallax-content-sense"),
                g = jQuery(b).data("row-effect-mobile-disable"),
                h = jQuery(b).data("custom-vc-row"),
                i = jQuery(b).data("vc"),
                j = jQuery(b).data("theme-support");
            if ("undefined" != typeof h && "" !== h || (h = "wpb_row"), "undefined" == typeof i && (i = 0), "undefined" == typeof j && (j = "disable"), i = parseFloat(i), i < 4.4 || "enable" == j)
                if (jQuery(b).prev().is("p") || jQuery(b).prev().is("style")) var k = jQuery(b).prev().prev();
                else var k = jQuery(b).prev();
            else var k = jQuery(b).prevAll("." + h + ":first");
            if (k.css("position", "relative"), "undefined" == typeof k[0]) return !1;
            if (k.attr("row-effect-mobile-disable", g), "fadeout_row_value" == c && (k.addClass("vc-row-fade"), k.data("fadeout-percentage", d)), "parallax_content_value" == e) {
                k.addClass("vc-row-translate"), k.attr("data-parallax-content-sense", f), k.wrapInner('<div class="vc-row-translate-wrapper"></div>');
                var l = k.css("padding-top"),
                    m = k.css("padding-bottom");
                k.find(".vc-row-translate-wrapper").css({
                    "padding-top": l,
                    "padding-bottom": m
                }), k[0].style.setProperty("padding-top", "0px", "important"), k[0].style.setProperty("padding-bottom", "0px", "important")
            }
        }), jQuery(".upb_no_bg").remove();
        var i = function() {
            jQuery(".upb_row_bg").each(function() {
                var a, c, d = jQuery(this).data("bg-override"),
                    e = jQuery(this).data("theme-support"),
                    f = jQuery(this).data("row");
                if (c = "undefined" != typeof e && "enable" !== e ? jQuery(this).parents("." + f + ":first") : jQuery(this).parent(), c.addClass("vc_row-has-fill"), "browser_size" == d && (a = jQuery("html")), "ex-full" == d) a = jQuery("html");
                else if ("full" == d) a = jQuery("body");
                else if (!isNaN(d)) {
                    a = c;
                    for (var g = 0; g < d && !a.is("html"); g++) a = a.parent()
                }
                var h = parseInt(a.css("paddingLeft")),
                    i = parseInt(a.css("paddingRight")),
                    j = h + i + a.width(),
                    k = -(c.offset().left - a.offset().left);
                if (k > 0 && (left = 0), 1 == b() ? jQuery(this).css({
                        width: j,
                        right: k
                    }) : jQuery(this).css({
                        width: j,
                        left: k
                    }), "browser_size" == d) {
                    var l = (a.width(), a.height(), c.width(), c.height()),
                        m = c.find(".upb-background-text").height(),
                        n = jQuery(window).height();
                    if (m > l) var o = m;
                    else var o = n;
                    c.css("min-height", o + "px"), c.find(".upb-background-text-wrapper").css("min-height", o + "px")
                }
            }), jQuery(".upb_video-bg").each(function(a, b) {
                var c, d, e = jQuery(this).data("bg-override"),
                    f = jQuery(this).attr("data-rtl"),
                    g = jQuery(this).data("theme-support"),
                    i = jQuery(this).data("row");
                if (d = "undefined" != typeof g && "enable" !== g ? jQuery(this).parents("." + i + ":first") : jQuery(this).parent(), "true" == d.attr("data-vc-full-width") || 1 == d.attr("data-vc-full-width") ? d.addClass("uvc-vc-full-width") : d.addClass("uvc-row"),
                    "browser_size" == e) c = jQuery("html"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
                else if ("ex-full" == e) c = jQuery("html"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
                else if ("full" == e) c = jQuery("body"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
                else if (isNaN(e) || 0 == e) c = d;
                else {
                    c = d;
                    for (var j = 1; j <= e && !c.is("html"); j++) c = c.parent()
                }
                var k = (parseInt(c.css("paddingLeft")), parseInt(c.css("paddingRight")), parseInt(c.css("marginLeft")), c.outerWidth()),
                    l = k,
                    m = jQuery(this).offset().left,
                    n = jQuery(this).position().left,
                    o = c.offset().left,
                    p = o - m;
                n < 0 && (p = n + p), 0 == a && (h = n), h > 0 && (p = h), p > 0 && (p = 0), "undefined" == typeof f || f !== !0 && "true" !== f ? jQuery(this).css({
                    width: k,
                    "min-width": k,
                    left: p
                }) : jQuery(this).css({
                    width: k,
                    "min-width": k,
                    right: p
                });
                var q = 16 / 9,
                    r = (jQuery(window).width(), jQuery(window).height());
                d.find("video").height();
                if ("browser_size" == e) var s = d.find(".upb_video-text").height();
                else var s = d.height();
                if (k < 960) {
                    var t = 16 / 9 * s;
                    k = t + k
                }
                pHeight = Math.ceil(k / q), children = jQuery(this).children(), children.removeClass("ult-make-full-height"), s > l && children.addClass("ult-make-full-height");
                var u = jQuery(this).css("background-image");
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) "undefined" != typeof u && "none" != u || (children.css({
                    "max-height": "auto",
                    height: "auto"
                }), d.css("min-height", "auto"));
                else if ("browser_size" == e) {
                    if (s > r) var v = s;
                    else var v = r;
                    d.addClass("video-browser-size"), d.find(".upb-background-text-wrapper").addClass("full-browser-size"), d.css("min-height", v + "px"), d.find(".upb_video-text-wrapper").length > 0 && (d.find(".upb_video-text-wrapper").addClass("full-browser-size"), d.find(".upb_video-text-wrapper").css("min-height", v + "px"))
                }
            })
        };
        i(), jQuery(window).load(function() {
            i(), g()
        }), jQuery(window).resize(function() {
            i(), g()
        }), jQuery(document).ajaxComplete(function(a, b, c) {
            jQuery(".upb_content_video, .upb_content_iframe").prev().is("p") ? jQuery(".upb_content_video, .upb_content_iframe").prev().prev().css("background-image", "").css("background-repeat", "") : jQuery(".upb_content_video, .upb_content_iframe").prev().css("background-image", "").css("background-repeat", ""), jQuery(".upb_content_video").ultimate_video_bg(), jQuery(".upb_bg_img").ultimate_bg_shift(), jQuery(".upb_content_iframe").ultimate_video_bg(), jQuery(".upb_grad").ultimate_grad_shift(), jQuery(".upb_color").ultimate_bg_color_shift()
        }), jQuery(".video-controls").click(function(a) {
            var b = jQuery(this).attr("data-action"),
                c = jQuery(this).parent().find(".upb_video-src");
            "pause" == b ? (jQuery(this).attr("data-action", "play"), c[0].play(), jQuery(this).html('<i class="ult-vid-cntrlpause"></i>')) : (jQuery(this).attr("data-action", "pause"), c[0].pause(), jQuery(this).html('<i class="ult-vid-cntrlplay"></i>')), c.hasClass("enable-on-viewport") && c.addClass("override-controls")
        }), f(), g(), jQuery(".vcpb-animated").each(function(a, b) {
            var c = jQuery(b).data("animation-repeat");
            jQuery(this).css({
                "background-repeat": c
            });
            var d = jQuery(b).parent().attr("data-img-parallax-mobile-disable");
            if (d = "undefined" == typeof d ? "false" : d.toString(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var e = "true";
            else var e = "false";
            if ("true" == e && "true" == d) var f = "true";
            else var f = "false";
            if ("false" == f) {
                var g = 10;
                "" != jQuery(this).attr("data-parallax_sense") && (g = jQuery(this).attr("data-parallax_sense")), g = 100 - g;
                var h = jQuery(this).attr("data-bg-animation-type"),
                    i = jQuery(this).attr("data-bg-animation"),
                    j = 0,
                    k = h;
                setInterval(function(a) {
                    "right-animation" == i || "bottom-animation" == i ? j -= 1 : j += 1, jQuery(b).css("backgroundPosition", "h" == k ? j + "px 0" : "0 " + j + "px")
                }, g)
            }
        })
    })
}(jQuery),
function(a, b, c) {
    function d() {
        a(".ult-content-box").each(function(c, d) {
            var f = a(d).css("background-color") || "",
                i = a(d).data("border_color") || "transparent",
                j = a(d).css("box-shadow") || "",
                k = a(d).data("hover_bg_color") || a(d).css("background-color"),
                l = a(d).data("hover_border_color") || "transparent",
                m = a(d).data("hover_box_shadow") || a(d).css("box-shadow");
            a(d).hover(function() {
                a(d).css("background-color", k), a(d).css("border-color", l), a(d).css("box-shadow", m)
            }, function() {
                a(d).css("background-color", f), a(d).css("border-color", i), a(d).css("box-shadow", j)
            });
            var n = {},
                o = a(d).data("responsive_margins");
            "undefined" != typeof o && null != o && (n = g(o));
            var p = {},
                q = a(d).data("normal_margins");
            p = "undefined" != typeof q && null != q ? g(q) : e(d);
            var r = a(b).width() || "";
            "" != r && (r >= 768 ? h(p, d) : h(n, d))
        })
    }

    function e(b) {
        var c = {};
        c["margin-left"] = f(a(b).css("margin-left")), c["margin-right"] = f(a(b).css("margin-right")), c["margin-top"] = f(a(b).css("margin-top")), c["margin-bottom"] = f(a(b).css("margin-bottom"));
        var d = "";
        return a.each(c, function(a, b) {
            "undefined" != typeof b && null != b && (d += a + ":" + b + "px;")
        }), a(b).attr("data-normal_margins", d), c
    }

    function f(a) {
        var b;
        return "undefined" != typeof a && null != a && (b = a.split("px"), b = parseInt(b[0])), b
    }

    function g(b) {
        var d = {},
            e = b.split(";");
        return "undefined" != typeof e && null != e && a.each(e, function(a, b) {
            if (typeof b != c && null != b) {
                var e = b.split(":");
                if (typeof e[0] != c && null != e[0] && typeof e[1] != c && null != e[1]) switch (e[0]) {
                    case "margin":
                        d.margin = e[1];
                        break;
                    case "margin-left":
                        d["margin-left"] = e[1];
                        break;
                    case "margin-right":
                        d["margin-right"] = e[1];
                        break;
                    case "margin-top":
                        d["margin-top"] = e[1];
                        break;
                    case "margin-bottom":
                        d["margin-bottom"] = e[1]
                }
            }
        }), d
    }

    function h(b, c) {
        a.isEmptyObject(b) || a.each(b, function(b, d) {
            "undefined" != typeof d && null != d && a(c).css(b, d)
        })
    }
    jQuery(b).load(function(a) {
        d()
    }), jQuery(b).resize(function(a) {
        d()
    }), jQuery(document).ready(function(a) {
        d()
    })
}(jQuery, window), jQuery(window).load(function() {
        var a = function() {
            var a = "",
                b = "",
                c = "",
                d = "",
                e = "",
                f = "";
            jQuery(".ult-responsive").each(function(g, h) {
                var i = jQuery(h),
                    j = i.attr("data-responsive-json-new"),
                    k = i.data("ultimate-target"),
                    l = "",
                    m = "",
                    n = "",
                    o = "",
                    p = "",
                    q = "";
                "undefined" == typeof j && null == j || jQuery.each(jQuery.parseJSON(j), function(a, b) {
                    var c = a;
                    if ("undefined" != typeof b && null != b) {
                        var d = b.split(";");
                        jQuery.each(d, function(a, b) {
                            if ("undefined" != typeof b || null != b) {
                                var d = b.split(":");
                                switch (d[0]) {
                                    case "large_screen":
                                        l += c + ":" + d[1] + ";";
                                        break;
                                    case "desktop":
                                        m += c + ":" + d[1] + ";";
                                        break;
                                    case "tablet":
                                        n += c + ":" + d[1] + ";";
                                        break;
                                    case "tablet_portrait":
                                        o += c + ":" + d[1] + ";";
                                        break;
                                    case "mobile_landscape":
                                        p += c + ":" + d[1] + ";";
                                        break;
                                    case "mobile":
                                        q += c + ":" + d[1] + ";"
                                }
                            }
                        })
                    }
                }), "" != q && (f += k + "{" + q + "}"), "" != p && (e += k + "{" + p + "}"), "" != o && (d += k + "{" + o + "}"), "" != n && (c += k + "{" + n + "}"), "" != m && (b += k + "{" + m + "}"), "" != l && (a += k + "{" + l + "}")
            });
            var g = "<style>\n/** Ultimate: CountDown Responsive **/ ";
            g += b, g += "\n@media (min-width: 1824px) { " + a + "\n}", g += "\n@media (max-width: 1199px) { " + c + "\n}", g += "\n@media (max-width: 991px)  { " + d + "\n}", g += "\n@media (max-width: 767px)  { " + e + "\n}", g += "\n@media (max-width: 479px)  { " + f + "\n}", g += "\n/** Ultimate: Tooltipster Responsive - **/</style>", jQuery("head").append(g)
        };
        a(), jQuery(".ult_countdown-dateAndTime").each(function() {
            var a = new Date(jQuery(this).html()),
                b = (60 * jQuery(this).data("time-zone"), jQuery(this).data("countformat")),
                c = jQuery(this).data("labels"),
                d = c.split(","),
                e = jQuery(this).data("labels2"),
                f = e.split(","),
                g = function() {
                    return new Date(jQuery(this).data("time-now"))
                },
                h = function(a) {
                    var b = jQuery(".ult_countdown-dateAndTime").attr("data-responsive-json-new"),
                        c = jQuery(".ult_countdown-dateAndTime").attr("data-ultimate-target"),
                        d = jQuery(".ult_countdown").attr("data-responsive-json-new"),
                        e = jQuery(".ult_countdown").attr("data-ultimate-target");
                    jQuery(".ult_countdown-period").addClass("ult-responsive");
                    var f = jQuery(this).find(".ult_countdown-amount"),
                        g = jQuery(this).find(".ult_countdown-period"),
                        h = (jQuery(this).data("tick-col"), jQuery(this).data("tick-p-size"), jQuery(this).data("tick-font-family")),
                        i = jQuery(this).data("br-color"),
                        j = jQuery(this).data("br-size"),
                        k = jQuery(this).data("br-style"),
                        l = jQuery(this).data("br-radius"),
                        m = jQuery(this).data("bg-color"),
                        n = jQuery(this).data("padd");
                    f.attr({
                        "data-ultimate-target": c,
                        "data-responsive-json-new": b
                    }), g.attr({
                        "data-ultimate-target": e,
                        "data-responsive-json-new": d
                    }), f.addClass("ult-responsive"), f.css({
                        "font-family": h,
                        "border-width": j,
                        "border-style": k,
                        "border-radius": l,
                        background: m,
                        padding: n,
                        "border-color": i
                    })
                };
            jQuery(this).hasClass("ult-usrtz") ? jQuery(this).ult_countdown({
                labels: d,
                labels1: f,
                until: a,
                format: b,
                padZeroes: !0,
                onTick: h
            }) : jQuery(this).ult_countdown({
                labels: d,
                labels1: f,
                until: a,
                format: b,
                padZeroes: !0,
                onTick: h,
                serverSync: g
            })
        })
    }),
    function() {
        var a = !1;
        window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function b(c) {
            function d() {
                !a && this._init && this._init.apply(this, arguments)
            }
            var e = this.prototype;
            a = !0;
            var f = new this;
            a = !1;
            for (var g in c) f[g] = "function" == typeof c[g] && "function" == typeof e[g] ? function(a, b) {
                return function() {
                    var c = this._super;
                    this._super = function(b) {
                        return e[a].apply(this, b)
                    };
                    var d = b.apply(this, arguments);
                    return this._super = c, d
                }
            }(g, c[g]) : c[g];
            return d.prototype = f, d.prototype.constructor = d, d.extend = b, d
        }
    }(),
    function($) {
        function camelCase(a) {
            return a.replace(/-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })
        }
        JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            _getters: [],
            _getMarker: function() {
                return "is-" + this.name
            },
            _init: function() {
                $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
                var a = camelCase(this.name);
                $[a] = this, $.fn[a] = function(b) {
                    var c = Array.prototype.slice.call(arguments, 1);
                    return $[a]._isNotChained(b, c) ? $[a][b].apply($[a], [this[0]].concat(c)) : this.each(function() {
                        if ("string" == typeof b) {
                            if ("_" === b[0] || !$[a][b]) throw "Unknown method: " + b;
                            $[a][b].apply($[a], [this].concat(c))
                        } else $[a]._attach(this, b)
                    })
                }
            },
            setDefaults: function(a) {
                $.extend(this.defaultOptions, a || {})
            },
            _isNotChained: function(a, b) {
                return "option" === a && (0 === b.length || 1 === b.length && "string" == typeof b[0]) || $.inArray(a, this._getters) > -1
            },
            _attach: function(a, b) {
                if (a = $(a), !a.hasClass(this._getMarker())) {
                    a.addClass(this._getMarker()), b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
                    var c = $.extend({
                        name: this.name,
                        elem: a,
                        options: b
                    }, this._instSettings(a, b));
                    a.data(this.name, c), this._postAttach(a, c), this.option(a, b)
                }
            },
            _instSettings: function(a, b) {
                return {}
            },
            _postAttach: function(a, b) {},
            _getMetadata: function(d) {
                try {
                    var f = d.data(this.name.toLowerCase()) || "";
                    f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(a, b, c) {
                        var d = f.substring(0, c).match(/"/g);
                        return d && d.length % 2 !== 0 ? b + ":" : '"' + b + '":'
                    }), f = $.parseJSON("{" + f + "}");
                    for (var g in f) {
                        var h = f[g];
                        "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                    }
                    return f
                } catch (e) {
                    return {}
                }
            },
            _getInst: function(a) {
                return $(a).data(this.name) || {}
            },
            option: function(a, b, c) {
                a = $(a);
                var d = a.data(this.name);
                if (!b || "string" == typeof b && null == c) {
                    var e = (d || {}).options;
                    return e && b ? e[b] : e
                }
                if (a.hasClass(this._getMarker())) {
                    var e = b || {};
                    "string" == typeof b && (e = {}, e[b] = c), this._optionsChanged(a, d, e), $.extend(d.options, e)
                }
            },
            _optionsChanged: function(a, b, c) {},
            destroy: function(a) {
                a = $(a), a.hasClass(this._getMarker()) && (this._preDestroy(a, this._getInst(a)), a.removeData(this.name).removeClass(this._getMarker()))
            },
            _preDestroy: function(a, b) {}
        }), $.JQPlugin = {
            createPlugin: function(a, b) {
                "object" == typeof a && (b = a, a = "JQPlugin"), a = camelCase(a);
                var c = camelCase(b.name);
                JQClass.classes[c] = JQClass.classes[a].extend(b), new JQClass.classes[c]
            }
        }
    }(jQuery),
    function(a) {
        var b = "ult_countdown",
            c = 0,
            d = 1,
            e = 2,
            f = 3,
            g = 4,
            h = 5,
            i = 6;
        a.JQPlugin.createPlugin({
            name: b,
            defaultOptions: {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                padZeroes: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            },
            regionalOptions: {
                "": {
                    labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                    labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                    compactLabels: ["y", "m", "w", "d"],
                    whichLabels: null,
                    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    timeSeparator: ":",
                    isRTL: !1
                }
            },
            _getters: ["getTimes"],
            _rtlClass: b + "-rtl",
            _sectionClass: b + "-section",
            _amountClass: b + "-amount",
            _periodClass: b + "-period",
            _rowClass: b + "-row",
            _holdingClass: b + "-holding",
            _showClass: b + "-show",
            _descrClass: b + "-descr",
            _timerElems: [],
            _init: function() {
                function b(a) {
                    var h = a < 1e12 ? e ? performance.now() + performance.timing.navigationStart : d() : a || d();
                    h - g >= 1e3 && (c._updateElems(), g = h), f(b)
                }
                var c = this;
                this._super(), this._serverSyncs = [];
                var d = "function" == typeof Date.now ? Date.now : function() {
                        return (new Date).getTime()
                    },
                    e = window.performance && "function" == typeof window.performance.now,
                    f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                    g = 0;
                !f || a.noRequestAnimationFrame ? (a.noRequestAnimationFrame = null, setInterval(function() {
                    c._updateElems()
                }, 980)) : (g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d(), f(b))
            },
            UTCDate: function(a, b, c, d, e, f, g, h) {
                "object" == typeof b && b.constructor == Date && (h = b.getMilliseconds(), g = b.getSeconds(), f = b.getMinutes(), e = b.getHours(), d = b.getDate(), c = b.getMonth(), b = b.getFullYear());
                var i = new Date;
                return i.setUTCFullYear(b), i.setUTCDate(1), i.setUTCMonth(c || 0), i.setUTCDate(d || 1), i.setUTCHours(e || 0), i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)), i.setUTCSeconds(g || 0), i.setUTCMilliseconds(h || 0), i
            },
            periodsToSeconds: function(a) {
                return 31557600 * a[0] + 2629800 * a[1] + 604800 * a[2] + 86400 * a[3] + 3600 * a[4] + 60 * a[5] + a[6]
            },
            _instSettings: function(a, b) {
                return {
                    _periods: [0, 0, 0, 0, 0, 0, 0]
                }
            },
            _addElem: function(a) {
                this._hasElem(a) || this._timerElems.push(a)
            },
            _hasElem: function(b) {
                return a.inArray(b, this._timerElems) > -1
            },
            _removeElem: function(b) {
                this._timerElems = a.map(this._timerElems, function(a) {
                    return a == b ? null : a
                })
            },
            _updateElems: function() {
                for (var a = this._timerElems.length - 1; a >= 0; a--) this._updateCountdown(this._timerElems[a])
            },
            _optionsChanged: function(b, c, d) {
                d.layout && (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(c.options, d);
                var e = c.options.timezone != d.timezone;
                a.extend(c.options, d), this._adjustSettings(b, c, null != d.until || null != d.since || e);
                var f = new Date;
                (c._since && c._since < f || c._until && c._until > f) && this._addElem(b[0]), this._updateCountdown(b, c)
            },
            _updateCountdown: function(b, c) {
                if (b = b.jquery ? b : a(b), c = c || b.data(this.name)) {
                    if (b.html(this._generateHTML(c)).toggleClass(this._rtlClass, c.options.isRTL), a.isFunction(c.options.onTick)) {
                        var d = "lap" != c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date);
                        1 != c.options.tickInterval && this.periodsToSeconds(d) % c.options.tickInterval != 0 || c.options.onTick.apply(b[0], [d])
                    }
                    var e = "pause" != c._hold && (c._since ? c._now.getTime() < c._since.getTime() : c._now.getTime() >= c._until.getTime());
                    if (e && !c._expiring) {
                        if (c._expiring = !0, this._hasElem(b[0]) || c.options.alwaysExpire) {
                            if (this._removeElem(b[0]), a.isFunction(c.options.onExpiry) && c.options.onExpiry.apply(b[0], []), c.options.expiryText) {
                                var f = c.options.layout;
                                c.options.layout = c.options.expiryText, this._updateCountdown(b[0], c), c.options.layout = f
                            }
                            c.options.expiryUrl && (window.location = c.options.expiryUrl)
                        }
                        c._expiring = !1
                    } else "pause" == c._hold && this._removeElem(b[0])
                }
            },
            _resetExtraLabels: function(a, b) {
                var c = !1;
                for (var d in b)
                    if ("whichLabels" != d && d.match(/[Ll]abels/)) {
                        c = !0;
                        break
                    } if (c)
                    for (var d in a) d.match(/[Ll]abels[02-9]|compactLabels1/) && (a[d] = null)
            },
            _adjustSettings: function(b, c, d) {
                for (var e, f = 0, g = null, h = 0; h < this._serverSyncs.length; h++)
                    if (this._serverSyncs[h][0] == c.options.serverSync) {
                        g = this._serverSyncs[h][1];
                        break
                    } if (null != g) f = c.options.serverSync ? g : 0, e = new Date;
                else {
                    var i = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(b[0], []) : null;
                    e = new Date, f = i ? e.getTime() - i.getTime() : 0, this._serverSyncs.push([c.options.serverSync, f])
                }
                var j = c.options.timezone;
                j = null == j ? -e.getTimezoneOffset() : j, (d || !d && null == c._until && null == c._since) && (c._since = c.options.since, null != c._since && (c._since = this.UTCDate(j, this._determineTime(c._since, null)), c._since && f && c._since.setMilliseconds(c._since.getMilliseconds() + f)), c._until = this.UTCDate(j, this._determineTime(c.options.until, e)), f && c._until.setMilliseconds(c._until.getMilliseconds() + f)), c._show = this._determineShow(c)
            },
            _preDestroy: function(a, b) {
                this._removeElem(a[0]), a.empty()
            },
            pause: function(a) {
                this._hold(a, "pause")
            },
            lap: function(a) {
                this._hold(a, "lap")
            },
            resume: function(a) {
                this._hold(a, null)
            },
            toggle: function(b) {
                var c = a.data(b, this.name) || {};
                this[c._hold ? "resume" : "pause"](b)
            },
            toggleLap: function(b) {
                var c = a.data(b, this.name) || {};
                this[c._hold ? "resume" : "lap"](b)
            },
            _hold: function(b, c) {
                var d = a.data(b, this.name);
                if (d) {
                    if ("pause" == d._hold && !c) {
                        d._periods = d._savePeriods;
                        var e = d._since ? "-" : "+";
                        d[d._since ? "_since" : "_until"] = this._determineTime(e + d._periods[0] + "y" + e + d._periods[1] + "o" + e + d._periods[2] + "w" + e + d._periods[3] + "d" + e + d._periods[4] + "h" + e + d._periods[5] + "m" + e + d._periods[6] + "s"), this._addElem(b)
                    }
                    d._hold = c, d._savePeriods = "pause" == c ? d._periods : null, a.data(b, this.name, d), this._updateCountdown(b, d)
                }
            },
            getTimes: function(b) {
                var c = a.data(b, this.name);
                return c ? "pause" == c._hold ? c._savePeriods : c._hold ? this._calculatePeriods(c, c._show, c.options.significant, new Date) : c._periods : null
            },
            _determineTime: function(a, b) {
                var c = this,
                    d = function(a) {
                        var b = new Date;
                        return b.setTime(b.getTime() + 1e3 * a), b
                    },
                    e = function(a) {
                        a = a.toLowerCase();
                        for (var b = new Date, d = b.getFullYear(), e = b.getMonth(), f = b.getDate(), g = b.getHours(), h = b.getMinutes(), i = b.getSeconds(), j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, k = j.exec(a); k;) {
                            switch (k[2] || "s") {
                                case "s":
                                    i += parseInt(k[1], 10);
                                    break;
                                case "m":
                                    h += parseInt(k[1], 10);
                                    break;
                                case "h":
                                    g += parseInt(k[1], 10);
                                    break;
                                case "d":
                                    f += parseInt(k[1], 10);
                                    break;
                                case "w":
                                    f += 7 * parseInt(k[1], 10);
                                    break;
                                case "o":
                                    e += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e));
                                    break;
                                case "y":
                                    d += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e))
                            }
                            k = j.exec(a)
                        }
                        return new Date(d, e, f, g, h, i, 0)
                    },
                    f = null == a ? b : "string" == typeof a ? e(a) : "number" == typeof a ? d(a) : a;
                return f && f.setMilliseconds(0), f
            },
            _getDaysInMonth: function(a, b) {
                return 32 - new Date(a, b, 32).getDate()
            },
            _normalLabels: function(a) {
                return a
            },
            _generateHTML: function(b) {
                var j = this;
                b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date);
                for (var k = !1, l = 0, m = b.options.significant, n = a.extend({}, b._show), o = c; o <= i; o++) k |= "?" == b._show[o] && b._periods[o] > 0, n[o] = "?" != b._show[o] || k ? b._show[o] : null, l += n[o] ? 1 : 0, m -= b._periods[o] > 0 ? 1 : 0;
                for (var p = [!1, !1, !1, !1, !1, !1, !1], o = i; o >= c; o--) b._show[o] && (b._periods[o] ? p[o] = !0 : (p[o] = m > 0, m--));
                var q = b.options.compact ? b.options.compactLabels : b.options.labels,
                    r = b.options.whichLabels || this._normalLabels,
                    s = function(a) {
                        var c = b.options["compactLabels" + r(b._periods[a])];
                        return n[a] ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " " : ""
                    },
                    t = b.options.padZeroes ? 2 : 1,
                    u = function(a) {
                        var c = b.options["labels" + r(b._periods[a])];
                        return !b.options.significant && n[a] || b.options.significant && p[a] ? '<span class="' + j._sectionClass + '"><span class="ult_time-mid"><span class="' + j._amountClass + '">' + j._minDigits(b, b._periods[a], t) + '</span><span class="' + j._periodClass + '">' + (c ? c[a] : q[a]) + "</span></span></span>" : ""
                    };
                return b.options.layout ? this._buildLayout(b, n, b.options.layout, b.options.compact, b.options.significant, p) : (b.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (b._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(d) + s(e) + s(f) + (n[g] ? this._minDigits(b, b._periods[g], 2) : "") + (n[h] ? (n[g] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[h], 2) : "") + (n[i] ? (n[g] || n[h] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (b.options.significant || l) + (b._hold ? " " + this._holdingClass : "") + '">' + u(c) + u(d) + u(e) + u(f) + u(g) + u(h) + u(i)) + "</span>" + (b.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + b.options.description + "</span>" : "")
            },
            _buildLayout: function(b, j, k, l, m, n) {
                for (var o = b.options[l ? "compactLabels" : "labels"], p = b.options.whichLabels || this._normalLabels, q = function(a) {
                        return (b.options[(l ? "compactLabels" : "labels") + p(b._periods[a])] || o)[a]
                    }, r = function(a, c) {
                        return b.options.digits[Math.floor(a / c) % 10]
                    }, s = {
                        desc: b.options.description,
                        sep: b.options.timeSeparator,
                        yl: q(c),
                        yn: this._minDigits(b, b._periods[c], 1),
                        ynn: this._minDigits(b, b._periods[c], 2),
                        ynnn: this._minDigits(b, b._periods[c], 3),
                        y1: r(b._periods[c], 1),
                        y10: r(b._periods[c], 10),
                        y100: r(b._periods[c], 100),
                        y1000: r(b._periods[c], 1e3),
                        ol: q(d),
                        on: this._minDigits(b, b._periods[d], 1),
                        onn: this._minDigits(b, b._periods[d], 2),
                        onnn: this._minDigits(b, b._periods[d], 3),
                        o1: r(b._periods[d], 1),
                        o10: r(b._periods[d], 10),
                        o100: r(b._periods[d], 100),
                        o1000: r(b._periods[d], 1e3),
                        wl: q(e),
                        wn: this._minDigits(b, b._periods[e], 1),
                        wnn: this._minDigits(b, b._periods[e], 2),
                        wnnn: this._minDigits(b, b._periods[e], 3),
                        w1: r(b._periods[e], 1),
                        w10: r(b._periods[e], 10),
                        w100: r(b._periods[e], 100),
                        w1000: r(b._periods[e], 1e3),
                        dl: q(f),
                        dn: this._minDigits(b, b._periods[f], 1),
                        dnn: this._minDigits(b, b._periods[f], 2),
                        dnnn: this._minDigits(b, b._periods[f], 3),
                        d1: r(b._periods[f], 1),
                        d10: r(b._periods[f], 10),
                        d100: r(b._periods[f], 100),
                        d1000: r(b._periods[f], 1e3),
                        hl: q(g),
                        hn: this._minDigits(b, b._periods[g], 1),
                        hnn: this._minDigits(b, b._periods[g], 2),
                        hnnn: this._minDigits(b, b._periods[g], 3),
                        h1: r(b._periods[g], 1),
                        h10: r(b._periods[g], 10),
                        h100: r(b._periods[g], 100),
                        h1000: r(b._periods[g], 1e3),
                        ml: q(h),
                        mn: this._minDigits(b, b._periods[h], 1),
                        mnn: this._minDigits(b, b._periods[h], 2),
                        mnnn: this._minDigits(b, b._periods[h], 3),
                        m1: r(b._periods[h], 1),
                        m10: r(b._periods[h], 10),
                        m100: r(b._periods[h], 100),
                        m1000: r(b._periods[h], 1e3),
                        sl: q(i),
                        sn: this._minDigits(b, b._periods[i], 1),
                        snn: this._minDigits(b, b._periods[i], 2),
                        snnn: this._minDigits(b, b._periods[i], 3),
                        s1: r(b._periods[i], 1),
                        s10: r(b._periods[i], 10),
                        s100: r(b._periods[i], 100),
                        s1000: r(b._periods[i], 1e3)
                    }, t = k, u = c; u <= i; u++) {
                    var v = "yowdhms".charAt(u),
                        w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}", "g");
                    t = t.replace(w, !m && j[u] || m && n[u] ? "$1" : "")
                }
                return a.each(s, function(a, b) {
                    var c = new RegExp("\\{" + a + "\\}", "g");
                    t = t.replace(c, b)
                }), t
            },
            _minDigits: function(a, b, c) {
                return b = "" + b, b.length >= c ? this._translateDigits(a, b) : (b = "0000000000" + b, this._translateDigits(a, b.substr(b.length - c)))
            },
            _translateDigits: function(a, b) {
                return ("" + b).replace(/[0-9]/g, function(b) {
                    return a.options.digits[b]
                })
            },
            _determineShow: function(a) {
                var b = a.options.format,
                    j = [];
                return j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null, j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null, j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null, j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null, j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null, j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null, j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null, j
            },
            _calculatePeriods: function(a, b, j, k) {
                a._now = k, a._now.setMilliseconds(0);
                var l = new Date(a._now.getTime());
                a._since ? k.getTime() < a._since.getTime() ? a._now = k = l : k = a._since : (l.setTime(a._until.getTime()), k.getTime() > a._until.getTime() && (a._now = k = l));
                var m = [0, 0, 0, 0, 0, 0, 0];
                if (b[c] || b[d]) {
                    var n = this._getDaysInMonth(k.getFullYear(), k.getMonth()),
                        o = this._getDaysInMonth(l.getFullYear(), l.getMonth()),
                        p = l.getDate() == k.getDate() || l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o),
                        q = function(a) {
                            return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds()
                        },
                        r = Math.max(0, 12 * (l.getFullYear() - k.getFullYear()) + l.getMonth() - k.getMonth() + (l.getDate() < k.getDate() && !p || p && q(l) < q(k) ? -1 : 0));
                    m[c] = b[c] ? Math.floor(r / 12) : 0, m[d] = b[d] ? r - 12 * m[c] : 0, k = new Date(k.getTime());
                    var s = k.getDate() == n,
                        t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
                    k.getDate() > t && k.setDate(t), k.setFullYear(k.getFullYear() + m[c]), k.setMonth(k.getMonth() + m[d]), s && k.setDate(t)
                }
                var u = Math.floor((l.getTime() - k.getTime()) / 1e3),
                    v = function(a, c) {
                        m[a] = b[a] ? Math.floor(u / c) : 0, u -= m[a] * c
                    };
                if (v(e, 604800), v(f, 86400), v(g, 3600), v(h, 60), v(i, 1), u > 0 && !a._since)
                    for (var w = [1, 12, 4.3482, 7, 24, 60, 60], x = i, y = 1, z = i; z >= c; z--) b[z] && (m[x] >= y && (m[x] = 0, u = 1), u > 0 && (m[z]++, u = 0, x = z, y = 1)), y *= w[z];
                if (j)
                    for (var z = c; z <= i; z++) j && m[z] ? j-- : j || (m[z] = 0);
                return m
            }
        })
    }(jQuery), jQuery(document).ready(function() {
        jQuery(".ult_colorlink").hover(function() {
            var a = jQuery(this).data("style");
            if ("Style_6" == a) {
                var b = jQuery(this).find(".ult_btn6_link_top").data("color");
                jQuery(this).find(".ult_btn6_link_top").css("text-shadow", "10px 0 " + b + ", -10px 0 " + b), jQuery(this).find(".ult_btn6_link_top").css("color", b)
            }
            if ("Style_10" == a) {
                var c = jQuery(this).find(".ult_btn10_span").data("bhover"),
                    d = jQuery(this).find(".ult_btn10_span").data("bstyle");
                " " != d && (jQuery(this).find(".ult_btn10_span").css("border-top-style", "solid"), jQuery(this).find(".ult_btn10_span").css("border-top-color", c))
            }
            var e = jQuery(this).data("texthover"),
                f = jQuery(this).data("bghover");
            jQuery(this).css("color", e), jQuery(this).find(".ult_btn10_span").css("color", e), "Style_2" == a && jQuery(this).find(".ult_btn10_span").css("background", f)
        }, function() {
            var a = jQuery(this).data("style");
            if ("Style_6" == a && jQuery(this).find(".ult_btn6_link_top").removeAttr("style"), "Style_10" == a) {
                var b = jQuery(this).find(".ult_btn10_span").data("color"),
                    c = jQuery(this).find(".ult_btn10_span").data("bstyle");
                " " != c && (jQuery(this).find(".ult_btn10_span").css("border-top-style", c), jQuery(this).find(".ult_btn10_span").css("border-top-color", b))
            }
            var d = jQuery(this).data("textcolor"),
                e = jQuery(this).data("bgcolor");
            jQuery(this).css("color", d), jQuery(this).find(".ult_btn10_span").css("color", d), "Style_2" == a && jQuery(this).find(".ult_btn10_span").css("background", e)
        })
    }), jQuery(window).load(function() {
        ult_creative_link_ht()
    }), jQuery(document).ready(function(a) {
        ult_creative_link_ht()
    }), jQuery(window).resize(function(a) {
        ult_creative_link_ht()
    }),
    function(a) {
        "use strict";

        function b(a, b, c) {
            if ("img" === c) {
                var d = parseInt(b.outerHeight()),
                    e = d / 2;
                a.css("padding-top", e + "px"), a.parent().css("margin-top", e + 20 + "px"), b.css("top", -d + "px")
            } else {
                var d = parseInt(b.outerHeight()),
                    e = d / 2;
                a.css("padding-top", e + "px"), a.parent().css("margin-top", e + 20 + "px"), b.css("top", -d + "px")
            }
        }

        function c(b) {
            b.find(".timeline-icon-block").length > 0 && a(".timeline-block").each(function(b, c) {
                var d = a(this).find(".timeline-header-block"),
                    e = a(this).find(".timeline-icon-block");
                e.css({
                    position: "absolute"
                });
                var f = e.outerHeight(),
                    g = e.outerWidth(),
                    h = -(g / 2),
                    i = parseInt(d.find(".timeline-header").css("padding-left").replace(/[^\d.]/g, ""));
                a(this).hasClass("timeline-post-left") ? (e.css({
                    left: h,
                    right: "auto"
                }), d.css({
                    "padding-left": g / 2 + i + "px"
                })) : a(this).hasClass("timeline-post-right") && (e.css({
                    left: "auto",
                    right: h
                }), d.css({
                    "padding-right": g / 2 + i + "px"
                }));
                var j = d.height(),
                    k = j / 2,
                    l = f / 2,
                    m = k - l;
                e.css({
                    top: m
                });
                var n = e.offset().left,
                    o = a(window).width();
                (0 > n || o < n + g) && (e.css({
                    position: "relative",
                    top: "auto",
                    left: "auto",
                    right: "auto",
                    "text-align": "center"
                }), e.children().children().css({
                    margin: "10px auto"
                }), d.css({
                    padding: "0"
                }))
            })
        }

        function d() {
            jQuery(".ult-animation").each(function() {
                if (jQuery(this).attr("data-animate")) {
                    var a = jQuery(this).children("*"),
                        b = jQuery(this).attr("data-animate"),
                        c = jQuery(this).attr("data-animation-duration") + "s",
                        d = jQuery(this).attr("data-animation-iteration"),
                        f = jQuery(this).attr("data-animation-delay"),
                        g = (jQuery(this).attr("data-opacity_start_effect"), "opacity:1;-webkit-animation-delay:" + f + "s;-webkit-animation-duration:" + c + ";-webkit-animation-iteration-count:" + d + "; -moz-animation-delay:" + f + "s;-moz-animation-duration:" + c + ";-moz-animation-iteration-count:" + d + "; animation-delay:" + f + "s;animation-duration:" + c + ";animation-iteration-count:" + d + ";"),
                        h = "opacity:1;-webkit-transition-delay: " + f + "s; -moz-transition-delay: " + f + "s; transition-delay: " + f + "s;";
                    if (e(jQuery(this))) {
                        var i = jQuery(this).attr("style");
                        "undefined" == typeof i && (i = "test"), i = i.replace(/ /g, ""), "opacity:0;" == i && 0 !== i.indexOf(h) && jQuery(this).attr("style", h), jQuery.each(a, function(a, c) {
                            var d = jQuery(c),
                                f = d.attr("style");
                            "undefined" == typeof f && (f = "test");
                            var h = "";
                            h = 0 == f.indexOf(g) ? f : g + f, d.attr("style", h), e(d) && d.addClass("animated").addClass(b)
                        })
                    }
                }
            })
        }

        function e(a) {
            var b = jQuery(window).scrollTop(),
                c = jQuery(window).height();
            if (jQuery(a).hasClass("ult-animate-viewport")) var d = jQuery(a).data("opacity_start_effect");
            if ("undefined" == typeof d || "" == d) var e = 2;
            else var e = 100 - d;
            var f = (jQuery(a).outerHeight(), jQuery(a).offset().top),
                g = f - b,
                h = c - c * (e / 100);
            return g <= h
        }

        function f() {
            var a = jQuery(".ult-new-ib");
            a.each(function(a, b) {
                var c = jQuery(this);
                if (c.hasClass("ult-ib-resp")) {
                    var d = jQuery(document).width(),
                        e = c.data("min-width"),
                        f = c.data("max-width");
                    d <= f && d >= e ? c.find(".ult-new-ib-content").hide() : c.find(".ult-new-ib-content").show()
                }
            })
        }

        function g() {
            var b = "";
            a(".ult-spacer").each(function(c, d) {
                var e = a(d).data("id"),
                    f = (a("body").width(), a(d).data("height-mobile")),
                    g = a(d).data("height-mobile-landscape"),
                    h = a(d).data("height-tab"),
                    i = a(d).data("height-tab-portrait"),
                    j = a(d).data("height");
                "" != j && (b += " .spacer-" + e + " { height:" + j + "px } "), "" == h && "0" != h && 0 != h || (b += " @media (max-width: 1199px) { .spacer-" + e + " { height:" + h + "px } } "), "undefined" == typeof i || "" == i && "0" != i && 0 != i || (b += " @media (max-width: 991px) { .spacer-" + e + " { height:" + i + "px } } "), "undefined" == typeof g || "" == g && "0" != g && 0 != g || (b += " @media (max-width: 767px) { .spacer-" + e + " { height:" + g + "px } } "), "" == f && "0" != f && 0 != f || (b += " @media (max-width: 479px) { .spacer-" + e + " { height:" + f + "px } } ")
            }), "" != b && (b = "<style>" + b + "</style>", a("head").append(b))
        }
        a.fn.vc_translate_row = function() {
            var b = a(window).scrollTop(),
                c = a(window).height();
            a(this).each(function(d, e) {
                var f = a(e).attr("data-row-effect-mobile-disable");
                if (f = "undefined" == typeof f ? "false" : f.toString(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var g = "true";
                else var g = "false";
                if ("true" == g && "true" == f) var h = "true";
                else var h = "false";
                if ("false" == h) {
                    var i = 0,
                        j = a(e).outerHeight(),
                        k = a(e).offset().top,
                        l = k - b,
                        m = l + j,
                        n = a(e).attr("data-parallax-content-sense"),
                        o = n / 100,
                        p = 0,
                        q = c - c * (i / 100);
                    if (m <= q && l <= 0) {
                        if (j > c) var p = (c - m) * o;
                        else var p = -(l * o);
                        p < 0 && (p = 0)
                    } else p = 0;
                    var r = ".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator,.ult-easy-separator-wrapper";
                    a(e).find(".vc-row-translate-wrapper").children().each(function(b, c) {
                        jQuery(c).is(r) || a(c).css({
                            transform: "translate3d(0," + p + "px,0)",
                            "-webkit-transform": "translate3d(0," + p + "px,0)",
                            "-ms-transform": "translate3d(0," + p + "px,0)"
                        })
                    })
                }
            })
        }, a.fn.vc_fade_row = function() {
            var b = a(window).scrollTop(),
                c = a(window).height();
            a(this).each(function(d, e) {
                var f = a(e).attr("data-row-effect-mobile-disable");
                if (f = "undefined" == typeof f ? "false" : f.toString(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var g = "true";
                else var g = "false";
                if ("true" == g && "true" == f) var h = "true";
                else var h = "false";
                if ("false" == h) {
                    var i = 0,
                        j = a(e).data("fadeout-percentage");
                    j = 100 - j;
                    var k = a(e).outerHeight(),
                        l = a(e).offset().top,
                        m = l - b,
                        n = m + k,
                        o = 1,
                        p = c - c * (j / 100),
                        q = (p - n) / p * (1 - i);
                    q > 0 && (o = 1 - q), n <= p ? (o < i ? o = i : o > 1 && (o = 1), a(e).children().each(function(b, c) {
                        var d = ".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator";
                        a(c).is(d) || a(c).css({
                            opacity: o
                        })
                    })) : a(e).children().each(function(b, c) {
                        a(c).css({
                            opacity: o
                        })
                    })
                }
            })
        }, jQuery(document).ready(function() {
            g()
        }), jQuery(window).scroll(function() {
            var b = jQuery(".ult-no-mobile").length;
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && b >= 1 ? jQuery(".ult-animation").css("opacity", 1) : d(), a(".vc-row-fade").vc_fade_row(), a(".vc-row-translate").vc_translate_row()
        }), jQuery(window).load(function() {
            jQuery(".ult-banner-block-custom-height").each(function(a, b) {
                var c = jQuery(this).find("img"),
                    d = jQuery(this).width(),
                    e = jQuery(this).height();
                c.width();
                d > e && c.css({
                    width: "100%",
                    height: "auto"
                })
            });
            var b = 0,
                d = 0,
                e = function() {
                    jQuery(".ifb-jq-height").each(function() {
                        jQuery(this).find(".ifb-back").css("height", "auto"), jQuery(this).find(".ifb-front").css("height", "auto");
                        var a = parseInt(jQuery(this).find(".ifb-front > div").outerHeight(!0)),
                            b = parseInt(jQuery(this).find(".ifb-back > div").outerHeight(!0)),
                            c = a > b ? a : b;
                        jQuery(this).find(".ifb-front").css("height", c + "px"), jQuery(this).find(".ifb-back").css("height", c + "px"), jQuery(this).hasClass("vertical_door_flip") ? jQuery(this).find(".ifb-flip-box").css("height", c + "px") : jQuery(this).hasClass("horizontal_door_flip") ? jQuery(this).find(".ifb-flip-box").css("height", c + "px") : jQuery(this).hasClass("style_9") && jQuery(this).find(".ifb-flip-box").css("height", c + "px")
                    }), jQuery(".ifb-auto-height").each(function() {
                        if (jQuery(this).hasClass("horizontal_door_flip") || jQuery(this).hasClass("vertical_door_flip")) {
                            var a = parseInt(jQuery(this).find(".ifb-front > div").outerHeight()),
                                b = parseInt(jQuery(this).find(".ifb-back > div").outerHeight()),
                                c = a > b ? a : b;
                            jQuery(this).find(".ifb-flip-box").css("height", c + "px")
                        }
                    })
                };
            navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 ? setTimeout(function() {
                e()
            }, 500) : e(), jQuery(document).on("ultAdvancedTabClicked", function(a, b) {
                e()
            }), jQuery(window).resize(function() {
                b++, setTimeout(function() {
                    d++, b == d && e()
                }, 500)
            });
            var g = 0;
            jQuery(window).resize(function() {
                f(), jQuery(".csstime.smile-icon-timeline-wrap").each(function() {
                    c(jQuery(this))
                }), a(".jstime .timeline-wrapper").each(function() {
                    c(jQuery(this))
                }), "none" == jQuery(".smile-icon-timeline-wrap.jstime .timeline-line").css("display") ? 0 === g && (a(".jstime .timeline-wrapper").masonry("destroy"), g = 1) : 1 == g && (jQuery(".jstime .timeline-wrapper").masonry({
                    itemSelector: ".timeline-block"
                }), setTimeout(function() {
                    jQuery(".jstime .timeline-wrapper").masonry({
                        itemSelector: ".timeline-block",
                        width: "401px"
                    }), jQuery(this).find(".timeline-block").each(function() {
                        jQuery(this).css("left", "initial"), "0px" == jQuery(this).css("left") ? jQuery(this).addClass("timeline-post-left") : jQuery(this).addClass("timeline-post-right")
                    }), g = 0
                }, 300))
            }), a(".smile-icon-timeline-wrap").each(function() {
                var b = jQuery(this).data("timeline-cutom-width");
                b && jQuery(this).css("width", 2 * b + 40 + "px");
                var d = parseInt(jQuery(this).width()),
                    e = parseInt(jQuery(this).find(".timeline-block").width()),
                    f = d - 2 * e - 40;
                f = f / d * 100, a(".jstime .timeline-wrapper").each(function() {
                    jQuery(this).masonry({
                        itemSelector: ".timeline-block"
                    })
                }), setTimeout(function() {
                    a(".jstime .timeline-wrapper").each(function() {
                        jQuery(this).find(".timeline-block").each(function() {
                            "0px" == jQuery(this).css("left") ? jQuery(this).addClass("timeline-post-left") : jQuery(this).addClass("timeline-post-right"), c(jQuery(this))
                        }), jQuery(".timeline-block").each(function() {
                            var a = parseInt(jQuery(this).css("top")) - parseInt(jQuery(this).next().css("top"));
                            a < 14 && a > 0 || 0 == a ? jQuery(this).next().addClass("time-clash-right") : a > -14 && jQuery(this).next().addClass("time-clash-left")
                        })
                    }), jQuery(".timeline-post-right").each(function() {
                        var a = jQuery(this).find(".timeline-icon-block").clone();
                        jQuery(this).find(".timeline-icon-block").remove(), jQuery(this).find(".timeline-header-block").after(a)
                    }), jQuery(".smile-icon-timeline-wrap").each(function() {
                        var a = jQuery(this).data("time_block_bg_color");
                        jQuery(this).find(".timeline-block").css("background-color", a), jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color", a), jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color", a), jQuery(this).find(".feat-item").css("background-color", a), jQuery(this).find(".feat-item").find(".feat-top").length > 0 ? jQuery(this).find(".feat-item l").css("border-top-color", a) : jQuery(this).find(".feat-item l").css("border-bottom-color", a)
                    }), jQuery(".jstime.timeline_preloader").remove(), jQuery(".smile-icon-timeline-wrap.jstime").css("opacity", "1")
                }, 1e3), jQuery(this).find(".timeline-wrapper").each(function() {
                    "" === jQuery(this).text().trim() && jQuery(this).remove()
                }), jQuery(this).find(".timeline-line ").next().hasClass("timeline-separator-text") || jQuery(this).find(".timeline-line").prepend("<o></o>");
                var g = jQuery(this).data("time_sep_color"),
                    h = jQuery(this).data("time_sep_bg_color"),
                    i = jQuery(".smile-icon-timeline-wrap .timeline-line").css("border-right-color");
                jQuery(this).find(".timeline-dot").css("background-color", h), jQuery(this).find(".timeline-line z").css("background-color", h), jQuery(this).find(".timeline-line o").css("background-color", h), jQuery(this).find(".timeline-separator-text").css("color", g), jQuery(this).find(".timeline-separator-text .sep-text").css("background-color", h), jQuery(this).find(".ult-timeline-arrow s").css("border-color", "rgba(255, 255, 255, 0) " + i), jQuery(this).find(".feat-item .ult-timeline-arrow s").css("border-color", i + " rgba(255, 255, 255, 0)"), jQuery(this).find(".timeline-block").css("border-color", i), jQuery(this).find(".feat-item").css("border-color", i)
            })
        }), jQuery(document).ready(function(a) {
            var e = jQuery(".ult-no-mobile").length;
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && e >= 1 ? jQuery(".ult-animation").css("opacity", 1) : d(), f(), jQuery(".ubtn").hover(function() {
                var a = jQuery(this);
                a.find(".ubtn-text").css("color", a.data("hover")), a.find(".ubtn-hover").css("background", a.data("hover-bg")).addClass("ubtn-hover-active");
                var b = "" != a.data("hover-bg") && a.data("hover-bg");
                setTimeout(function() {
                    b !== !1 && a.hasClass(".ubtn-fade-bg") && a.css("background", a.data("hover-bg"))
                }, 150);
                var c = a.attr("style");
                if ("" != a.data("shadow-hover")) {
                    a.css("box-shadow");
                    c += "box-shadow:" + a.data("shadow-hover")
                }
                if (a.attr("style", c), "" != a.data("border-hover") && a.css("border-color", a.data("border-hover")), "none" != a.data("shadow-click")) {
                    var d = a.data("shd-shadow") - 3;
                    "" != a.is(".shd-left") ? a.css({
                        right: d
                    }) : "" != a.is(".shd-right") ? a.css({
                        left: d
                    }) : "" != a.is(".shd-top") ? a.css({
                        bottom: d
                    }) : "" != a.is(".shd-bottom") && a.css({
                        top: d
                    })
                }
            }, function() {
                var a = jQuery(this);
                a.find(".ubtn-text").removeAttr("style"), a.find(".ubtn-hover").removeClass("ubtn-hover-active"), a.css("background", a.data("bg"));
                var b = a.data("border-color"),
                    c = a.attr("style");
                "" != a.data("shadow-hover") && (c += "box-shadow:" + a.data("shadow")), a.attr("style", c), "" != a.data("border-hover") && a.css("border-color", b), "none" != a.data("shadow-click") && (a.removeClass("no-ubtn-shadow"), "" != a.is(".shd-left") ? a.css({
                    right: "auto"
                }) : "" != a.is(".shd-right") ? a.css({
                    left: "auto"
                }) : "" != a.is(".shd-top") ? a.css({
                    bottom: "auto"
                }) : "" != a.is(".shd-bottom") && a.css({
                    top: "auto"
                }))
            }), jQuery(".ubtn").on("focus blur mousedown mouseup", function(a) {
                var b = jQuery(this);
                "none" != b.data("shadow-click") && setTimeout(function() {
                    b.is(":focus") ? (b.addClass("no-ubtn-shadow"), "" != b.is(".shd-left") ? b.css({
                        right: b.data("shd-shadow") + "px"
                    }) : "" != b.is(".shd-right") ? b.css({
                        left: b.data("shd-shadow") + "px"
                    }) : "" != b.is(".shd-top") ? b.css({
                        bottom: b.data("shd-shadow") + "px"
                    }) : "" != b.is(".shd-bottom") && b.css({
                        top: b.data("shd-shadow") + "px"
                    })) : (b.removeClass("no-ubtn-shadow"), "" != b.is(".shd-left") ? b.css({
                        right: "auto"
                    }) : "" != b.is(".shd-right") ? b.css({
                        left: "auto"
                    }) : "" != b.is(".shd-top") ? b.css({
                        bottom: "auto"
                    }) : "" != b.is(".shd-bottom") && b.css({
                        top: "auto"
                    }))
                }, 0)
            }), jQuery(".ubtn").focusout(function() {
                var a = jQuery(this);
                a.removeClass("no-ubtn-shadow"), "" != a.is(".shd-left") ? a.css({
                    right: "auto"
                }) : "" != a.is(".shd-right") ? a.css({
                    left: "auto"
                }) : "" != a.is(".shd-top") ? a.css({
                    bottom: "auto"
                }) : "" != a.is(".shd-bottom") && a.css({
                    top: "auto"
                })
            }), jQuery(".smile-icon-timeline-wrap.jstime").css("opacity", "0"), jQuery(".jstime.timeline_preloader").css("opacity", "1"), jQuery(".smile-icon-timeline-wrap.csstime .timeline-wrapper").each(function() {
                jQuery(".csstime .timeline-block:even").addClass("timeline-post-left"), jQuery(".csstime .timeline-block:odd").addClass("timeline-post-right")
            }), jQuery(".csstime .timeline-post-right").each(function() {
                jQuery(this).css("float", "right"), jQuery("<div style='clear:both'></div>").insertAfter(jQuery(this))
            }), jQuery(".csstime.smile-icon-timeline-wrap").each(function() {
                var a = jQuery(this).data("time_block_bg_color");
                jQuery(this).find(".timeline-block").css("background-color", a), jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color", a), jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color", a), jQuery(this).find(".feat-item").css("background-color", a), jQuery(this).find(".feat-item").find(".feat-top").length > 0 ? jQuery(this).find(".feat-item l").css("border-top-color", a) : jQuery(this).find(".feat-item l").css("border-bottom-color", a), c(jQuery(this))
            }), jQuery(".aio-icon, .aio-icon-img, .flip-box, .ultb3-info, .icon_list_icon, .ult-banner-block, .uavc-list-icon, .ult_tabs, .icon_list_connector").each(function() {
                if (jQuery(this).attr("data-animation")) {
                    var b = jQuery(this).attr("data-animation"),
                        c = "delay-" + jQuery(this).attr("data-animation-delay");
                    if ("undefined" == typeof b || "" === b) return !1;
                    a(this).bsf_appear(function() {
                        var a = jQuery(this);
                        a.addClass("animated").addClass(b), a.addClass("animated").addClass(c)
                    })
                }
            }), jQuery(".stats-block").each(function() {
                a(this).bsf_appear(function() {
                    var a = parseFloat(jQuery(this).find(".stats-number").data("counter-value")),
                        b = jQuery(this).find(".stats-number").data("counter-value") + " ",
                        c = parseInt(jQuery(this).find(".stats-number").data("speed")),
                        d = jQuery(this).find(".stats-number").data("id"),
                        e = jQuery(this).find(".stats-number").data("separator"),
                        f = jQuery(this).find(".stats-number").data("decimal"),
                        g = b.split(".");
                    g = g[1] ? g[1].length - 1 : 0;
                    var h = !0;
                    "none" == f && (f = ""), h = "none" != e;
                    var i = {
                            useEasing: !0,
                            useGrouping: h,
                            separator: e,
                            decimal: f
                        },
                        j = new countUp(d, 0, a, g, c, i);
                    setTimeout(function() {
                        j.start()
                    }, 500)
                })
            }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? jQuery(".ifb-flip-box").on("click", function(a) {
                var b = jQuery(this);
                b.hasClass("ifb-hover") ? b.removeClass("ifb-hover") : b.addClass("ifb-hover")
            }) : jQuery(".ifb-flip-box").on("hover", function(a) {
                var b = jQuery(this);
                b.hasClass("ifb-hover") ? b.removeClass("ifb-hover") : b.addClass("ifb-hover")
            }), jQuery(".ifb-flip-box").each(function(a, b) {
                jQuery(this).parent().hasClass("style_9") && (jQuery(this).hover(function() {
                    jQuery(this).addClass("ifb-door-hover")
                }, function() {
                    jQuery(this).removeClass("ifb-door-hover")
                }), jQuery(this).on("click", function() {
                    jQuery(this).toggleClass("ifb-door-right-open"), jQuery(this).removeClass("ifb-door-hover")
                }))
            }), jQuery(document).on("click", ".ifb-flip-box", function(a) {
                a.stopPropagation(), jQuery(document).trigger("ultFlipBoxClicked", jQuery(this))
            }), jQuery(".vertical_door_flip .ifb-front").each(function() {
                jQuery(this).wrap('<div class="v_door ifb-multiple-front ifb-front-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())
            }), jQuery(".reverse_vertical_door_flip .ifb-back").each(function() {
                jQuery(this).wrap('<div class="rv_door ifb-multiple-back ifb-back-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())
            }), jQuery(".horizontal_door_flip .ifb-front").each(function() {
                jQuery(this).wrap('<div class="h_door ifb-multiple-front ifb-front-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())
            }), jQuery(".reverse_horizontal_door_flip .ifb-back").each(function() {
                jQuery(this).wrap('<div class="rh_door ifb-multiple-back ifb-back-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())
            }), jQuery(".style_9 .ifb-front").each(function() {
                jQuery(this).wrap('<div class="new_style_9 ifb-multiple-front ifb-front-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())
            }), jQuery(".style_9 .ifb-back").each(function() {
                jQuery(this).wrap('<div class="new_style_9 ifb-multiple-back ifb-back-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())
            });
            var g = /^((?!chrome).)*safari/i.test(navigator.userAgent);
            g && (jQuery(".vertical_door_flip").each(function(a, b) {
                var c = jQuery(this).find(".flip_link").outerHeight();
                jQuery(this).find(".flip_link").css("top", -c / 2 + "px"), jQuery(this).find(".ifb-multiple-front").css("width", "50.2%")
            }), jQuery(".horizontal_door_flip").each(function(a, b) {
                var c = jQuery(this).find(".flip_link").outerHeight();
                jQuery(this).find(".flip_link").css("top", -c / 2 + "px"), jQuery(this).find(".ifb-multiple-front").css("height", "50.2%")
            }), jQuery(".reverse_vertical_door_flip").each(function(a, b) {
                var c = jQuery(this).find(".flip_link").outerHeight();
                jQuery(this).find(".flip_link").css("top", -c / 2 + "px")
            }), jQuery(".reverse_horizontal_door_flip").each(function(a, b) {
                var c = jQuery(this).find(".flip_link").outerHeight();
                jQuery(this).find(".flip_link").css("top", -c / 2 + "px"), jQuery(this).find(".ifb-back").css("position", "inherit")
            })), jQuery(".square_box-icon").each(function(a, c) {
                var d = jQuery(this);
                if (jQuery(this).find(".aio-icon-img").length > 0) {
                    var e = jQuery(this).find(".aio-icon-img");
                    b(d, e, "img"), e.find(".img-icon").load(function() {
                        b(d, e, "icon")
                    })
                } else {
                    var e = jQuery(this).find(".aio-icon");
                    b(d, e, "icon"), jQuery(window).load(function() {
                        b(d, e, "icon")
                    })
                }
            })
        })
    }(jQuery), jQuery(document).ready(function() {
        function a() {
            jQuery(".ult-new-ib").each(function(a, b) {
                var c = jQuery(this).data("min-height") || "";
                jQuery(this).find(".ult-new-ib-img").data("min-height") || "", jQuery(this).find(".ult-new-ib-img").data("max-width") || "";
                if ("" != c) {
                    jQuery(this).addClass("ult-ib2-min-height"), jQuery(this).css("height", c), jQuery(this).find(".ult-new-ib-img").removeClass("ult-ib2-toggle-size");
                    var d = (jQuery(this).find(".ult-new-ib-img").width(), jQuery(this).find(".ult-new-ib-img").height()),
                        e = jQuery(this).width();
                    (e <= c || d < c) && jQuery(this).find(".ult-new-ib-img").addClass("ult-ib2-toggle-size")
                }
                jQuery(this).hover(function() {
                    jQuery(this).find(".ult-new-ib-img").css("opacity", jQuery(this).data("hover-opacity"))
                }, function() {
                    jQuery(this).find(".ult-new-ib-img").css("opacity", jQuery(this).data("opacity"))
                })
            })
        }
        a(), jQuery(window).load(function() {
            a()
        }), jQuery(window).resize(function() {
            a()
        })
    }), jQuery(document).ready(function() {
        function a() {
            jQuery(".ultimate-map-wrapper").each(function(a, b) {
                var c = jQuery(b).attr("id");
                if ("undefined" == typeof c || "" === c) return !1;
                var d = jQuery(b).find(".ultimate_google_map").attr("id"),
                    e = jQuery("#" + d).attr("data-map_override"),
                    f = "true";
                jQuery("#" + d).css({
                    "margin-left": 0
                }), jQuery("#" + d).css({
                    right: 0
                });
                var g = jQuery("#" + c).parent();
                if ("full" == e && (g = jQuery("body"), f = "false"), "ex-full" == e && (g = jQuery("html"), f = "false"), !isNaN(e))
                    for (var a = 0; a < e && "HTML" != g.prop("tagName"); a++) g = g.parent();
                if (0 == e || "0" == e) var h = g.width();
                else var h = g.outerWidth();
                var i = g.offset().left,
                    j = jQuery("#" + d).offset().left,
                    k = i - j;
                if (jQuery("#" + d).css({
                        width: h
                    }), 0 == e && "0" == e || jQuery("#" + d).css({
                        "margin-left": k
                    }), "full" == e && jQuery("body").hasClass("rtl")) {
                    var l = jQuery("#" + d),
                        m = jQuery(window).width() - (l.offset().left + l.outerWidth());
                    jQuery("#" + d).css({
                        right: -m
                    })
                }
            })
        }
        a(), jQuery(window).load(function() {
            a()
        }), jQuery(window).resize(function() {
            a()
        }), jQuery(".ui-tabs").bind("tabsactivate", function(b, c) {
            jQuery(this).find(".ultimate-map-wrapper").length > 0 && a()
        }), jQuery(".ui-accordion").bind("accordionactivate", function(b, c) {
            jQuery(this).find(".ultimate-map-wrapper").length > 0 && a()
        }), jQuery(document).on("onUVCModalPopupOpen", function() {
            a()
        }), jQuery(document).on("UVCMapResize", function() {
            a()
        })
    }),
    function(a) {
        a(document).ready(function() {
            var b = a(window).width();
            if (b > 300 && b < 768);
            else if (b > 768 && b < 1015);
            else;
            a(document).on("mouseenter", ".ult_dual1", function() {
                var b = a(this).find(".ult-dual-btn-1").attr("class"),
                    c = b.split(" "),
                    b = c[1] + c[2];
                if ("Style1" == b) {
                    var d = a(this).find(".ult-dual-btn-1").data("bghovercolor");
                    a(this)[0].style.setProperty("background-color", d, "important")
                }
                if ("Style2" == b) var d = a(this).find(".ult-dual-btn-1").data("bghovercolor");
                if ("Style3" == b) {
                    var d = a(this).find(".ult-dual-btn-1").data("bghovercolor");
                    a(this).css({
                        "box-shadow": " inset 0 0 20px 50px " + d
                    })
                }
                if ("undefined" != b) {
                    var e = a(this).find(".ult-dual-btn-1").data("icon_hover_color");
                    a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
                        color: e
                    });
                    var f = a(this).find(".ult-dual-btn-1").data("iconbghovercolor");
                    a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
                        background: f
                    });
                    var g = a(this).find(".ult-dual-btn-1").data("iconhoverborder");
                    a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
                        "border-color": g
                    }), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
                        background: f
                    }), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
                        "border-color": g
                    });
                    var h = a(this).find(".ult-dual-btn-1").data("texthovercolor");
                    a(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({
                        color: h
                    })
                }
            }), a(document).on("mouseleave", ".ult_dual1", function() {
                var b = a(this).find(".ult-dual-btn-1").attr("class"),
                    c = b.split(" "),
                    b = c[1] + c[2];
                if ("Style1" == b) {
                    var d = a(this).find(".ult-dual-btn-1").data("bgcolor");
                    a(this)[0].style.setProperty("background-color", d, "important")
                }
                if ("Style2" == b) var d = a(this).find(".ult-dual-btn-1").data("bgcolor");
                if ("Style3" == b) {
                    var d = a(this).find(".ult-dual-btn-1").data("bgcolor");
                    a(this).css({
                        "box-shadow": "inset 0px 0 0 0 " + d
                    })
                }
                if ("undefined" != b) {
                    var e = a(this).find(".ult-dual-btn-1").data("icon_color");
                    a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
                        color: e
                    });
                    var f = a(this).find(".ult-dual-btn-1").data("textcolor");
                    a(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({
                        color: f
                    });
                    var g = a(this).find(".ult-dual-btn-1").data("iconbgcolor");
                    a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
                        background: g
                    });
                    var h = a(this).find(".ult-dual-btn-1").data("iconborder");
                    a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
                        "border-color": h
                    }), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
                        background: g
                    }), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
                        "border-color": h
                    })
                }
            }), a(document).on("mouseenter", ".ult_dual2", function() {
                var b = a(this).find(".ult-dual-btn-2").attr("class"),
                    c = b.split(" "),
                    b = c[1] + c[2];
                if ("Style1" == b) {
                    var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
                    a(this)[0].style.setProperty("background-color", d, "important")
                }
                if ("Style2" == b) var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
                if ("Style3" == b) {
                    var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
                    a(this).css({
                        "box-shadow": " inset 0 0 20px 50px " + d
                    })
                }
                if ("undefined" != b) {
                    var e = a(this).find(".ult-dual-btn-2").data("icon_hover_color");
                    a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
                        color: e
                    });
                    var f = a(this).find(".ult-dual-btn-2").data("texthovercolor");
                    a(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({
                        color: f
                    });
                    var g = a(this).find(".ult-dual-btn-2").data("iconbghovercolor");
                    a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
                        background: g
                    });
                    var h = a(this).find(".ult-dual-btn-2").data("iconhoverborder");
                    a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
                        "border-color": h
                    }), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
                        background: g
                    }), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
                        "border-color": h
                    })
                }
            }), a(document).on("mouseleave", ".ult_dual2", function() {
                var b = a(this).find(".ult-dual-btn-2").attr("class"),
                    c = b.split(" "),
                    b = c[1] + c[2];
                if ("Style1" == b) {
                    var d = a(this).find(".ult-dual-btn-2").data("bgcolor");
                    a(this)[0].style.setProperty("background-color", d, "important")
                }
                if ("Style2" == b) var d = a(this).find(".ult-dual-btn-2").data("bgcolor");
                if ("Style3" == b) {
                    var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
                    a(this).css({
                        "box-shadow": " inset 0 0 0 0 " + d
                    })
                }
                if ("undefined" != b) {
                    var e = a(this).find(".ult-dual-btn-2").data("icon_color");
                    a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
                        color: e
                    });
                    var f = a(this).find(".ult-dual-btn-2").data("textcolor");
                    a(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({
                        color: f
                    });
                    var g = a(this).find(".ult-dual-btn-2").data("iconbgcolor");
                    a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
                        background: g
                    });
                    var h = a(this).find(".ult-dual-btn-2").data("iconborder");
                    a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
                        "border-color": h
                    }), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
                        background: g
                    }), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
                        "border-color": h
                    })
                }
            })
        }), a(document).on("mouseenter", ".ult_main_dualbtn", function() {
            a(this).data("bhcolor")
        }), a(document).on("mouseleave", ".ult_main_dualbtn", function() {
            a(this).data("bcolor")
        })
    }(jQuery), jQuery(document).ready(function(a) {
        jQuery(".ult_main_dualbtn").each(function(a) {
            var b = jQuery(this).find(".ult_dual1").outerHeight();
            b = parseInt(b);
            var c = jQuery(this).find(".ult_dual2").outerHeight();
            c = parseInt(c), b > c ? (jQuery(this).find(".ult_dual2").css({
                height: b
            }), jQuery(this).find(".ult_dual1").css({
                height: b
            })) : b < c ? (jQuery(this).find(".ult_dual1").css({
                height: c
            }), jQuery(this).find(".ult_dual2").css({
                height: c
            })) : b == c && (jQuery(this).find(".ult_dual1").css({
                height: c
            }), jQuery(this).find(".ult_dual2").css({
                height: c
            }))
        })
    }), jQuery(document).ready(function(a) {
        recallme(), jQuery(window).load(function() {
            recallme()
        }), jQuery(window).resize(function() {
            recallme()
        })
    }), jQuery(document).ready(function() {
        jQuery(".ult_exp_content").hide(), jQuery(".ult_exp_section").click(function() {
            var a = jQuery(this).data("effect");
            if (jQuery(this).toggleClass("ult_active_section"), jQuery(this).next(".ult_exp_content").toggleClass("ult_active_section"), "slideToggle" == a && jQuery(this).next(".ult_exp_content").slideToggle(500), "fadeToggle" == a) {
                var b = jQuery(this).next(".ult_exp_content");
                b.is(":visible") ? b.fadeTo(500, 0, function() {
                    b.slideUp()
                }) : b.slideDown(function() {
                    b.fadeTo(500, 1)
                })
            }
            jQuery(this).trigger("select")
        }), jQuery(".ult_exp_section").select(function() {
            var a = jQuery(this).data("title"),
                b = jQuery(this).data("newtitle"),
                c = jQuery(this).data("icon"),
                d = jQuery(this).data("newicon"),
                e = jQuery(this).data("img"),
                f = jQuery(this).data("newimg"),
                g = jQuery(this).data("activetitle"),
                h = jQuery(this).data("activebg"),
                i = jQuery(this).data("activeicon"),
                j = jQuery(this).data("activeiconbg"),
                k = jQuery(this).data("activeborder");
            jQuery(this).css({
                color: g
            }), jQuery(this).parent().find(".ult_exp_section").css({
                background: h
            }), jQuery(this).find(".ult_expsection_icon").css({
                color: i
            }), jQuery(this).find(".ult_expsection_icon").css({
                background: j
            }), jQuery(this).find(".ult_expsection_icon").css({
                "border-color": k
            }), a != b && jQuery(this).find(".ult_expheader").stop().css("opacity", "0.1").html(function(c, d) {
                return d == b ? a : b
            }).animate({
                opacity: 1
            }, 300), jQuery(this).hasClass("ult_active_section") ? (c !== d && (jQuery(this).find(".ult_ex_icon").removeClass(c), jQuery(this).find(".ult_ex_icon").fadeOut(100).switchClass(c, d, 1500, "easeInOutQuad").fadeIn(300)), e !== f && jQuery(this).find(".ult_exp_img").fadeOut(200).attr("src", f).fadeIn(500)) : (c !== d && (jQuery(this).find(".ult_ex_icon").removeClass(d), jQuery(this).find(".ult_ex_icon").fadeOut(100).switchClass(d, c, 1500, "easeInOutQuad").fadeIn(300)), e !== f && jQuery(this).find(".ult_exp_img").fadeOut(200).attr("src", e).fadeIn(500))
        })
    }), jQuery(document).ready(function() {
        function a() {
            jQuery(".ult_exp_section_layer").each(function(a, b) {
                jQuery(b).css({
                    "margin-left": 0
                });
                var c = jQuery(b).find(".ult_exp_section").data("override");
                if (0 != c) {
                    var d = "true";
                    if (jQuery(b).parents(".wpb_row").length > 0) var e = jQuery(b).parents(".wpb_column");
                    else if (jQuery(b).parents(".wpb_column").length > 0) var e = jQuery(b).parents(".wpb_row");
                    else var e = jQuery(b).parent();
                    if ("full" == c && (e = jQuery("body"), d = "false"), "ex-full" == c && (e = jQuery("html"), d = "false"), !isNaN(c))
                        for (var a = 1; a < c && "HTML" != e.prop("tagName"); a++) e = e.parent();
                    if ("false" == d) var f = e.outerWidth();
                    else var f = e.width();
                    var g = e.offset().left,
                        h = jQuery(b).offset().left,
                        i = g - h;
                    "false" == d ? jQuery(b).css({
                        width: f,
                        "margin-left": i
                    }) : jQuery(b).css({
                        width: f
                    })
                }
            })
        }
        jQuery(".ult_exp_section").hover(function() {
            var a = jQuery(this).data("texthover"),
                b = jQuery(this).data("ihover"),
                c = (jQuery(this).data("cnthvrbg"), jQuery(this).data("headerhover")),
                d = jQuery(this).data("icnhvrbg"),
                e = jQuery(this).data("icnhvrborder");
            jQuery(this).hasClass("ult_active_section") || (jQuery(this).css({
                color: a,
                background: c
            }), jQuery(this).find(".ult_expsection_icon").css({
                color: b
            }), jQuery(this).find(".ult_expsection_icon").css({
                background: d
            }), jQuery(this).find(".ult_expsection_icon").css({
                "border-color": e
            }))
        }, function() {
            var a = jQuery(this).data("textcolor"),
                b = jQuery(this).data("icncolor"),
                c = (jQuery(this).data("cntbg"), jQuery(this).data("headerbg")),
                d = jQuery(this).data("icnbg"),
                e = jQuery(this).data("icnborder");
            jQuery(this).hasClass("ult_active_section") || (jQuery(this).css({
                color: a,
                background: c
            }), jQuery(this).find(".ult_expsection_icon").css({
                color: b
            }), jQuery(this).find(".ult_expsection_icon").css({
                background: d
            }), jQuery(this).find(".ult_expsection_icon").css({
                "border-color": e
            }))
        }), jQuery(".ult_exp_content").hover(function() {
            jQuery(this).parent().find(".ult_exp_section").data("cnthvrbg")
        }, function() {
            jQuery(this).parent().find(".ult_exp_section").data("cntbg")
        }), jQuery(window).resize(function() {
            a()
        }), a()
    }), jQuery(document).ready(function() {
        jQuery(".ult_exp_section").select(function() {
            var a = jQuery(this).data("height");
            if (0 != a) {
                var b = jQuery(this).offset().top,
                    c = parseInt(b) - a;
                jQuery("html, body").animate({
                    scrollTop: c
                }, 1200)
            }
        })
    });
var fixto = function(a, b, c) {
    function d() {
        this._vendor = null
    }

    function e() {
        var a = !1,
            b = c.createElement("div"),
            d = c.createElement("div");
        b.appendChild(d), b.style[n] = "translate(0)", b.style.marginTop = "10px", b.style.visibility = "hidden", d.style.position = "fixed", d.style.top = 0, c.body.appendChild(b);
        var e = d.getBoundingClientRect();
        return e.top > 0 && (a = !0), c.body.removeChild(b), a
    }

    function f(b, c, d) {
        this.child = b, this._$child = a(b), this.parent = c, this.options = {
            className: "fixto-fixed",
            top: 0
        }, this._setOptions(d)
    }

    function g(a, b, c) {
        f.call(this, a, b, c), this._replacer = new j.MimicNode(a), this._ghostNode = this._replacer.replacer, this._saveStyles(), this._saveViewportHeight(), this._proxied_onscroll = this._bind(this._onscroll, this), this._proxied_onresize = this._bind(this._onresize, this), this.start()
    }

    function h(a, b, c) {
        f.call(this, a, b, c), this.start()
    }
    var i = function() {
            var a = {
                getAll: function(a) {
                    return c.defaultView.getComputedStyle(a)
                },
                get: function(a, b) {
                    return this.getAll(a)[b]
                },
                toFloat: function(a) {
                    return parseFloat(a, 10) || 0
                },
                getFloat: function(a, b) {
                    return this.toFloat(this.get(a, b))
                },
                _getAllCurrentStyle: function(a) {
                    return a.currentStyle
                }
            };
            return c.documentElement.currentStyle && (a.getAll = a._getAllCurrentStyle), a
        }(),
        j = function() {
            function b(a) {
                this.element = a, this.replacer = c.createElement("div"), this.replacer.style.visibility = "hidden", this.hide(), a.parentNode.insertBefore(this.replacer, a)
            }
            b.prototype = {
                replace: function() {
                    var a = this.replacer.style,
                        b = i.getAll(this.element);
                    a.width = this._width(), a.height = this._height(), a.marginTop = b.marginTop, a.marginBottom = b.marginBottom, a.marginLeft = b.marginLeft, a.marginRight = b.marginRight, a.cssFloat = b.cssFloat, a.styleFloat = b.styleFloat, a.position = b.position, a.top = b.top, a.right = b.right, a.bottom = b.bottom, a.left = b.left, a.display = b.display
                },
                hide: function() {
                    this.replacer.style.display = "none"
                },
                _width: function() {
                    return this.element.getBoundingClientRect().width + "px"
                },
                _widthOffset: function() {
                    return this.element.offsetWidth + "px"
                },
                _height: function() {
                    return this.element.getBoundingClientRect().height + "px"
                },
                _heightOffset: function() {
                    return this.element.offsetHeight + "px"
                },
                destroy: function() {
                    a(this.replacer).remove();
                    for (var b in this) this.hasOwnProperty(b) && (this[b] = null)
                }
            };
            var d = c.documentElement.getBoundingClientRect();
            return d.width || (b.prototype._width = b.prototype._widthOffset, b.prototype._height = b.prototype._heightOffset), {
                MimicNode: b,
                computedStyle: i
            }
        }();
    d.prototype = {
        _vendors: {
            webkit: {
                cssPrefix: "-webkit-",
                jsPrefix: "Webkit"
            },
            moz: {
                cssPrefix: "-moz-",
                jsPrefix: "Moz"
            },
            ms: {
                cssPrefix: "-ms-",
                jsPrefix: "ms"
            },
            opera: {
                cssPrefix: "-o-",
                jsPrefix: "O"
            }
        },
        _prefixJsProperty: function(a, b) {
            return a.jsPrefix + b[0].toUpperCase() + b.substr(1)
        },
        _prefixValue: function(a, b) {
            return a.cssPrefix + b
        },
        _valueSupported: function(a, b, c) {
            try {
                return c.style[a] = b, c.style[a] === b
            } catch (d) {
                return !1
            }
        },
        propertySupported: function(a) {
            return void 0 !== c.documentElement.style[a]
        },
        getJsProperty: function(a) {
            if (this.propertySupported(a)) return a;
            if (this._vendor) return this._prefixJsProperty(this._vendor, a);
            var b;
            for (var c in this._vendors)
                if (b = this._prefixJsProperty(this._vendors[c], a), this.propertySupported(b)) return this._vendor = this._vendors[c], b;
            return null
        },
        getCssValue: function(a, b) {
            var d = c.createElement("div"),
                e = this.getJsProperty(a);
            if (this._valueSupported(e, b, d)) return b;
            var f;
            if (this._vendor && (f = this._prefixValue(this._vendor, b), this._valueSupported(e, f, d))) return f;
            for (var g in this._vendors)
                if (f = this._prefixValue(this._vendors[g], b), this._valueSupported(e, f, d)) return this._vendor = this._vendors[g], f;
            return null
        }
    };
    var k, l, m = new d,
        n = m.getJsProperty("transform"),
        o = m.getCssValue("position", "sticky"),
        p = m.getCssValue("position", "fixed"),
        q = "Microsoft Internet Explorer" === navigator.appName;
    q && (l = parseFloat(navigator.appVersion.split("MSIE")[1])), f.prototype = {
        _mindtop: function() {
            var a = 0;
            if (this._$mind)
                for (var b, c, d = 0, e = this._$mind.length; d < e; d++)
                    if (b = this._$mind[d], c = b.getBoundingClientRect(), c.height) a += c.height;
                    else {
                        var f = i.getAll(b);
                        a += b.offsetHeight + i.toFloat(f.marginTop) + i.toFloat(f.marginBottom)
                    } return a
        },
        stop: function() {
            this._stop(), this._running = !1
        },
        start: function() {
            this._running || (this._start(), this._running = !0)
        },
        destroy: function() {
            this.stop(), this._destroy(), this._$child.removeData("fixto-instance");
            for (var a in this) this.hasOwnProperty(a) && (this[a] = null)
        },
        _setOptions: function(b) {
            a.extend(this.options, b), this.options.mind && (this._$mind = a(this.options.mind)), this.options.zIndex && (this.child.style.zIndex = this.options.zIndex)
        },
        setOptions: function(a) {
            this._setOptions(a), this.refresh()
        },
        _stop: function() {},
        _start: function() {},
        _destroy: function() {},
        refresh: function() {}
    }, g.prototype = new f, a.extend(g.prototype, {
        _bind: function(a, b) {
            return function() {
                return a.call(b)
            }
        },
        _toresize: 8 === l ? c.documentElement : b,
        _onscroll: function() {
            if (this._scrollTop = c.documentElement.scrollTop || c.body.scrollTop, this._parentBottom = this.parent.offsetHeight + this._fullOffset("offsetTop", this.parent), this.options.mindBottomPadding !== !1 && (this._parentBottom -= i.getFloat(this.parent, "paddingBottom")), this.fixed) {
                if (this._scrollTop > this._parentBottom || this._scrollTop < this._fullOffset("offsetTop", this._ghostNode) - this.options.top - this._mindtop()) return void this._unfix();
                this._adjust()
            } else {
                var a = i.getAll(this.child);
                this._scrollTop < this._parentBottom && this._scrollTop > this._fullOffset("offsetTop", this.child) - this.options.top - this._mindtop() && this._viewportHeight > this.child.offsetHeight + i.toFloat(a.marginTop) + i.toFloat(a.marginBottom) && (this._fix(), this._adjust())
            }
        },
        _adjust: function() {
            var a = 0,
                b = this._mindtop(),
                c = 0,
                d = i.getAll(this.child),
                e = null;
            k && (e = this._getContext(), e && (e.getBoundingClientRect().top > 0 ? a -= e.getBoundingClientRect().top : a = Math.abs(e.getBoundingClientRect().top))), c = this._parentBottom - this._scrollTop - (this.child.offsetHeight + i.toFloat(d.marginBottom) + b + this.options.top), c > 0 && (c = 0), this.child.style.top = c + b + a + this.options.top - i.toFloat(d.marginTop) + "px"
        },
        _fullOffset: function(a, b, c) {
            for (var d = b[a], e = b.offsetParent; null !== e && e !== c;) d += e[a], e = e.offsetParent;
            return d
        },
        _getContext: function() {
            for (var a, b, d = this.child, e = null; !e;) {
                if (a = d.parentNode, a === c.documentElement) return null;
                if (b = i.getAll(a), "none" !== b[n]) {
                    e = a;
                    break
                }
                d = a
            }
            return e
        },
        _fix: function() {
            var a = this.child,
                b = a.style,
                d = i.getAll(a),
                e = a.getBoundingClientRect().left,
                f = d.width;
            if (this._saveStyles(), c.documentElement.currentStyle && (f = a.offsetWidth - (i.toFloat(d.paddingLeft) + i.toFloat(d.paddingRight) + i.toFloat(d.borderLeftWidth) + i.toFloat(d.borderRightWidth)) + "px"), k) {
                var g = this._getContext();
                g && (e = a.getBoundingClientRect().left - g.getBoundingClientRect().left)
            }
            this._replacer.replace(), b.left = e - i.toFloat(d.marginLeft) + "px", b.width = f, b.position = "fixed", b.top = this._mindtop() + this.options.top - i.toFloat(d.marginTop) + "px", this._$child.addClass(this.options.className), this.fixed = !0
        },
        _unfix: function() {
            var a = this.child.style;
            this._replacer.hide(), a.position = this._childOriginalPosition, a.top = this._childOriginalTop, a.width = this._childOriginalWidth, a.left = this._childOriginalLeft, this._$child.removeClass(this.options.className), this.fixed = !1
        },
        _saveStyles: function() {
            var a = this.child.style;
            this._childOriginalPosition = a.position, this._childOriginalTop = a.top, this._childOriginalWidth = a.width, this._childOriginalLeft = a.left
        },
        _onresize: function() {
            this.refresh()
        },
        _saveViewportHeight: function() {
            this._viewportHeight = b.innerHeight || c.documentElement.clientHeight
        },
        _stop: function() {
            this._unfix(), a(b).unbind("scroll", this._proxied_onscroll), a(this._toresize).unbind("resize", this._proxied_onresize)
        },
        _start: function() {
            this._onscroll(), a(b).bind("scroll", this._proxied_onscroll), a(this._toresize).bind("resize", this._proxied_onresize)
        },
        _destroy: function() {
            this._replacer.destroy()
        },
        refresh: function() {
            this._saveViewportHeight(), this._unfix(), this._onscroll()
        }
    }), h.prototype = new f, a.extend(h.prototype, {
        _start: function() {
            var a = i.getAll(this.child);
            this._childOriginalPosition = a.position, this._childOriginalTop = a.top, this.child.style.position = o, this.refresh()
        },
        _stop: function() {
            this.child.style.position = this._childOriginalPosition,
                this.child.style.top = this._childOriginalTop
        },
        refresh: function() {
            this.child.style.top = this._mindtop() + this.options.top + "px"
        }
    });
    var r = function(a, b, c) {
        return o && !c || o && c && c.useNativeSticky !== !1 ? new h(a, b, c) : p ? (void 0 === k && (k = e()), new g(a, b, c)) : "Neither fixed nor sticky positioning supported"
    };
    return l < 8 && (r = function() {
        return "not supported"
    }), a.fn.fixTo = function(b, c) {
        var d = a(b),
            e = 0;
        return this.each(function() {
            var f = a(this).data("fixto-instance");
            if (f) {
                var g = b;
                f[g].call(f, c)
            } else a(this).data("fixto-instance", r(this, d[e], c));
            e++
        })
    }, {
        FixToContainer: g,
        fixTo: r,
        computedStyle: i,
        mimicNode: j
    }
}(window.jQuery, window, document);
! function(a, b, c) {
    function d() {
        a(".flip-box").each(function(c, d) {
            var e = (a(document).width(), b.innerWidth);
            if ("" != e)
                if (e >= 768) {
                    var f = a(this).attr("data-min-height") || "";
                    if ("" != f) {
                        if (a(this).hasClass("ifb-custom-height")) {
                            if (a(this).css("min-height", f), a(this).css("height", f), a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
                                var g = a(this).find(".ifb-back").outerHeight(),
                                    h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
                                g = parseInt(f), h = parseInt(h), h >= g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
                            }
                            if (a(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
                                var i = a(this).find(".ifb-front").outerHeight();
                                i = parseInt(f);
                                var j = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
                                j = parseInt(j), j >= i && a(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
                            }
                        }
                    } else if (a(this).hasClass("ifb-jq-height")) {
                        var k = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
                        k = parseInt(k);
                        var l = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
                        l = parseInt(l), k >= l ? a(this).find(".ifb-face").css("height", k) : a(this).find(".ifb-face").css("height", l)
                    } else if (a(this).hasClass("ifb-auto-height") && a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
                        var g = a(this).find(".ifb-back").outerHeight();
                        g = parseInt(g);
                        var h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
                        h = parseInt(h), h >= g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
                    }
                } else {
                    var f = a(this).attr("data-min-height") || "";
                    if (a(this).hasClass("style_9")) {
                        a(this).css("height", "initial");
                        var m = a(this).find(".ifb-front-1 .ifb-front").outerHeight(),
                            n = a(this).find(".ifb-back-1 .ifb-back").outerHeight();
                        m > n ? a(this).css("height", m) : a(this).css("height", n)
                    } else if (a(this).hasClass("ifb-jq-height")) {
                        var k = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
                        k = parseInt(k);
                        var l = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
                        l = parseInt(l), k >= l ? a(this).find(".ifb-face").css("height", k) : a(this).find(".ifb-face").css("height", l)
                    } else if (a(this).hasClass("ifb-auto-height")) {
                        if (a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
                            var g = a(this).find(".ifb-back").outerHeight(),
                                h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
                            g = parseInt(g), h = parseInt(h), h > g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
                        }
                    } else if (a(this).hasClass("ifb-custom-height")) {
                        if ("" != f) {
                            if (a(this).css("min-height", f), a(this).css("height", f), a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
                                var g = a(this).find(".ifb-back").outerHeight();
                                g = parseInt(g);
                                var h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
                                h = parseInt(h), h >= g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
                            }
                            if (a(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
                                var i = a(this).find(".ifb-front").outerHeight();
                                i = parseInt(i);
                                var j = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
                                j = parseInt(j), j >= i ? a(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle") : a(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
                            }
                        }
                    } else a(this).css("height", "initial")
                }
        })
    }
    a(b).load(function(a) {
        d()
    }), a(document).ready(function(a) {
        d()
    }), a(b).resize(function(a) {
        d()
    })
}(jQuery, window),
function(a) {
    function b() {
        var a = 0;
        $jh(".uvc-heading").each(function() {
            var b, c, d, e = $jh(this).outerWidth(),
                f = $jh(this).attr("data-hline_width"),
                g = $jh(this).attr("data-hicon_type"),
                h = $jh(this).attr("data-halign"),
                i = $jh(this).attr("data-hspacer");
            if (left_rtl = "left", right_rtl = "right", jQuery("body").hasClass("rtl") && (left_rtl = "right", right_rtl = "left"), "line_with_icon" == i) {
                var j = $jh(this).attr("id");
                a = $jh(this).attr("data-hfixer"), a = "undefined" == typeof a || "" === a ? 0 : parseInt(a);
                var k = e / 2;
                $jh(this).find(".dynamic_ultimate_heading_css").remove(), d = "auto" == f || f > e ? e : f;
                var l = d / 2;
                "selector" == g ? (c = $jh(this).find(".aio-icon").outerWidth(), b = $jh(this).find(".aio-icon").outerHeight()) : (c = $jh(this).find(".aio-icon-img").outerWidth(), b = $jh(this).find(".aio-icon-img").outerHeight());
                var m = c / 2,
                    n = k - m + c + a,
                    o = l;
                if (b += 3, $jh(this).find(".uvc-heading-spacer").height(b), "center" == h) {
                    $jh(this).find(".aio-icon-img").css({
                        margin: "0 auto"
                    });
                    var p = "#" + j + " .uvc-heading-spacer.line_with_icon:before{" + right_rtl + ":" + n + "px;}#" + j + " .uvc-heading-spacer.line_with_icon:after{" + left_rtl + ":" + n + "px;}"
                } else if ("left" == h) {
                    $jh(this).find(".aio-icon-img").css({
                        float: h
                    });
                    var p = "";
                    p = "" != d ? "#" + j + " .uvc-heading-spacer.line_with_icon:before{left:" + (c + a) + "px;right:auto;}#" + j + " .uvc-heading-spacer.line_with_icon:after{left:" + (o + c + a) + "px;right:auto;}" : "#" + j + " .uvc-heading-spacer.line_with_icon:before{right:" + (n - c - 2 * a) + "px;}#" + j + " .uvc-heading-spacer.line_with_icon:after{left:" + (n - a) + "px;}"
                } else if ("right" == h) {
                    $jh(this).find(".aio-icon-img").css({
                        float: h
                    });
                    var p = "";
                    p = "" != d ? "#" + j + " .uvc-heading-spacer.line_with_icon:before{right:" + (c + a) + "px;left:auto;}#" + j + " .uvc-heading-spacer.line_with_icon:after{right:" + (o + c + a) + "px;left:auto;}" : "#" + j + " .uvc-heading-spacer.line_with_icon:before{right:" + (n - a) + "px;}#" + j + " .uvc-heading-spacer.line_with_icon:after{left:" + (n - c - 2 * a) + "px;}"
                }
                var q = $jh(this).attr("data-hborder_style"),
                    r = $jh(this).attr("data-hborder_color"),
                    s = $jh(this).attr("data-hborder_height");
                "auto" == f && "center" == h && (o = Math.floor(o - c + a));
                var t = '<div class="dynamic_ultimate_heading_css"><style>#' + j + " .uvc-heading-spacer.line_with_icon:before, #" + j + " .uvc-heading-spacer.line_with_icon:after{width:" + o + "px;border-style:" + q + ";border-color:" + r + ";border-bottom-width:" + s + "px;}" + p + "</style></div>";
                $jh(this).prepend(t)
            } else "line_only" == i && ("right" == h || "left" == h ? $jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({
                float: h
            }) : $jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({
                margin: "0 auto"
            }))
        })
    }
    $jh = a.noConflict(), $jh(document).ready(function(a) {
        b(), $jh(window).resize(function(a) {
            b()
        })
    }), a(window).load(function(a) {
        b(), jQuery(".ult_exp_section").select(function() {
            var a = jQuery(this).parent().find(".uvc-heading").length;
            a > 0 && b()
        })
    })
}(jQuery),
function(a) {
    function b() {
        a(".ultimate-call-to-action").each(function(b, c) {
            var d = a(c).data("override");
            if (0 != d) {
                a(c).css({
                    "margin-left": 0
                });
                var e = "true";
                if (a(c).parents(".wpb_row").length > 0) var f = a(c).parents(".wpb_row");
                else if (a(c).parents(".wpb_column").length > 0) var f = a(c).parents(".wpb_column");
                else var f = a(c).parent();
                if ("full" == d && (f = a("body"), e = "false"), "ex-full" == d && (f = a("html"), e = "false"), !isNaN(d))
                    for (var b = 1; b <= d && "HTML" != f.prop("tagName"); b++) f = f.parent();
                var g = f.outerWidth(),
                    h = a(c).offset().left,
                    i = (a(c).position().left, f.offset().left),
                    j = f.position().left,
                    k = i - h;
                "full" != d && "ex-full" != d && (k = i - j), a(c).css({
                    width: g,
                    "margin-left": k
                })
            }
        })
    }
    a(document).ready(function() {
        a(document).on("mouseenter", ".ultimate-call-to-action", function() {
            a(this).addClass("ultimate-call-to-action-hover");
            var b = a(this).data("background-hover");
            a(this).css({
                "background-color": b
            })
        }), a(document).on("mouseleave", ".ultimate-call-to-action", function() {
            a(this).removeClass("ultimate-call-to-action-hover");
            var b = a(this).data("background");
            a(this).css({
                "background-color": b
            })
        }), b(), a(window).resize(function() {
            b()
        })
    })
}(jQuery),
function(a, b, c) {
    function d(b, c) {
        this.bodyOverflowX, this.callbacks = {
            hide: [],
            show: []
        }, this.checkInterval = null, this.Content, this.$el = a(b), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = a.extend({}, i, c), this.mouseIsOverProxy = !1, this.namespace = "ult-tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
    }

    function e(b, c) {
        var d = !0;
        return a.each(b, function(a, e) {
            if ("undefined" == typeof c[a] || b[a] !== c[a]) return d = !1, !1
        }), d
    }

    function f() {
        return !k && j
    }

    function g() {
        var a = c.body || c.documentElement,
            b = a.style,
            d = "transition";
        if ("string" == typeof b[d]) return !0;
        v = ["Moz", "Webkit", "Khtml", "O", "ms"], d = d.charAt(0).toUpperCase() + d.substr(1);
        for (var e = 0; e < v.length; e++)
            if ("string" == typeof b[v[e] + d]) return !0;
        return !1
    }
    var h = "ulttooltipster",
        i = {
            animation: "fade",
            arrow: !0,
            arrowColor: "",
            autoClose: !0,
            content: null,
            contentAsHTML: !1,
            contentCloning: !0,
            debug: !0,
            delay: 200,
            minWidth: 0,
            ultCustomTooltipStyle: !1,
            ultContentStyle: null,
            ultBaseStyle: null,
            maxWidth: null,
            functionInit: function(a, b) {},
            functionBefore: function(a, b) {
                b()
            },
            functionReady: function(a, b) {},
            functionAfter: function(a) {},
            icon: "(?)",
            iconCloning: !0,
            iconDesktop: !1,
            iconTouch: !1,
            iconTheme: "ult-tooltipster-icon",
            interactive: !1,
            interactiveTolerance: 350,
            multiple: !1,
            offsetX: 0,
            offsetY: 0,
            onlyOne: !1,
            position: "top",
            positionTracker: !1,
            speed: 350,
            timer: 0,
            theme: "ult-tooltipster-default",
            touchDevices: !0,
            trigger: "hover",
            updateAnimation: !0,
            ult_adv_id: 0,
            ultimate_target: 0,
            responsive_json_new: 0
        };
    d.prototype = {
        _init: function() {
            var b = this;
            if (c.querySelector) {
                if (null !== b.options.content) b._content_set(b.options.content);
                else {
                    var d = b.$el.attr("title");
                    "undefined" == typeof d && (d = null), b._content_set(d)
                }
                var e = b.options.functionInit.call(b.$el, b.$el, b.Content);
                "undefined" != typeof e && b._content_set(e), b.$el.removeAttr("title").addClass("ult-tooltipstered"), !j && b.options.iconDesktop || j && b.options.iconTouch ? ("string" == typeof b.options.icon ? (b.$elProxy = a('<span class="' + b.options.iconTheme + '"></span>'), b.$elProxy.text(b.options.icon)) : b.options.iconCloning ? b.$elProxy = b.options.icon.clone(!0) : b.$elProxy = b.options.icon, b.$elProxy.insertAfter(b.$el)) : b.$elProxy = b.$el, "hover" == b.options.trigger ? (b.$elProxy.on("mouseenter." + b.namespace, function() {
                    f() && !b.options.touchDevices || (b.mouseIsOverProxy = !0, b._show())
                }).on("mouseleave." + b.namespace, function() {
                    f() && !b.options.touchDevices || (b.mouseIsOverProxy = !1)
                }), j && b.options.touchDevices && b.$elProxy.on("touchstart." + b.namespace, function() {
                    b._showNow()
                })) : "click" == b.options.trigger && b.$elProxy.on("click." + b.namespace, function() {
                    f() && !b.options.touchDevices || b._show()
                })
            }
        },
        _responsive: function() {
            var a = "",
                b = "",
                c = "",
                d = "",
                e = "",
                f = "";
            jQuery(".ult-responsive").each(function(g, h) {
                var i = jQuery(h),
                    j = i.attr("data-responsive-json-new"),
                    k = i.data("ultimate-target"),
                    l = "",
                    m = "",
                    n = "",
                    o = "",
                    p = "",
                    q = "";
                jQuery(h).hasClass("ult-tooltipster-content"), "undefined" == typeof j && null == j || jQuery.each(jQuery.parseJSON(j), function(a, b) {
                    var c = a;
                    if ("undefined" != typeof b && null != b) {
                        var d = b.split(";");
                        jQuery.each(d, function(a, b) {
                            if ("undefined" != typeof b || null != b) {
                                var d = b.split(":");
                                switch (d[0]) {
                                    case "large_screen":
                                        l += c + ":" + d[1] + ";";
                                        break;
                                    case "desktop":
                                        m += c + ":" + d[1] + ";";
                                        break;
                                    case "tablet":
                                        n += c + ":" + d[1] + ";";
                                        break;
                                    case "tablet_portrait":
                                        o += c + ":" + d[1] + ";";
                                        break;
                                    case "mobile_landscape":
                                        p += c + ":" + d[1] + ";";
                                        break;
                                    case "mobile":
                                        q += c + ":" + d[1] + ";"
                                }
                            }
                        })
                    }
                }), "" != q && (f += k + "{" + q + "}"), "" != p && (e += k + "{" + p + "}"), "" != o && (d += k + "{" + o + "}"), "" != n && (c += k + "{" + n + "}"), "" != m && (b += k + "{" + m + "}"), "" != l && (a += k + "{" + l + "}")
            });
            var g = "<style>\n/** Ultimate: Tooltipster Responsive **/ ";
            g += b, g += "\n@media (min-width: 1824px) { " + a + "\n}", g += "\n@media (max-width: 1199px) { " + c + "\n}", g += "\n@media (max-width: 991px)  { " + d + "\n}", g += "\n@media (max-width: 767px)  { " + e + "\n}", g += "\n@media (max-width: 479px)  { " + f + "\n}", g += "\n/** Ultimate: Tooltipster Responsive - **/</style>", jQuery("head").append(g)
        },
        _show: function() {
            var a = this;
            "shown" != a.Status && "appearing" != a.Status && (a.options.delay ? a.timerShow = setTimeout(function() {
                ("click" == a.options.trigger || "hover" == a.options.trigger && a.mouseIsOverProxy) && (a._showNow(), a._responsive())
            }, a.options.delay) : a._showNow()), a._responsive()
        },
        _showNow: function(c) {
            var d = this;
            d.options.functionBefore.call(d.$el, d.$el, function() {
                if (d.enabled && null !== d.Content) {
                    c && d.callbacks.show.push(c), d.callbacks.hide = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null, d.options.onlyOne && a(".ult-tooltipstered").not(d.$el).each(function(b, c) {
                        var d = a(c),
                            e = d.data("ult-tooltipster-ns");
                        a.each(e, function(a, b) {
                            var c = d.data(b),
                                e = c.status(),
                                f = c.option("autoClose");
                            "hidden" !== e && "disappearing" !== e && f && c.hide()
                        })
                    });
                    var e = function() {
                        d.Status = "shown", a.each(d.callbacks.show, function(a, b) {
                            b.call(d.$el)
                        }), d.callbacks.show = []
                    };
                    if ("hidden" !== d.Status) {
                        var f = 0;
                        "disappearing" === d.Status ? (d.Status = "appearing", g() ? (d.$tooltip.clearQueue().removeClass("ult-tooltipster-dying").addClass("ult-tooltipster-" + d.options.animation + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.stop().fadeIn(e)) : "shown" === d.Status && e()
                    } else {
                        d.Status = "appearing";
                        var f = d.options.speed,
                            h = BaseStyle = "";
                        d.options.ultCustomTooltipStyle && (h = d.options.ultContentStyle ? d.options.ultContentStyle : "", BaseStyle = d.options.ultBaseStyle ? d.options.ultBaseStyle : ""), d.bodyOverflowX = a("body").css("overflow-x"), a("body").css("overflow-x", "hidden");
                        var i = "ult-tooltipster-" + d.options.animation,
                            k = "-webkit-transition-duration: " + d.options.speed + "ms; -webkit-animation-duration: " + d.options.speed + "ms; -moz-transition-duration: " + d.options.speed + "ms; -moz-animation-duration: " + d.options.speed + "ms; -o-transition-duration: " + d.options.speed + "ms; -o-animation-duration: " + d.options.speed + "ms; -ms-transition-duration: " + d.options.speed + "ms; -ms-animation-duration: " + d.options.speed + "ms; transition-duration: " + d.options.speed + "ms; animation-duration: " + d.options.speed + "ms;",
                            l = d.options.minWidth ? "min-width:" + Math.round(d.options.minWidth) + "px;" : "",
                            m = d.options.maxWidth ? "max-width:" + Math.round(d.options.maxWidth) + "px;" : "",
                            n = d.options.interactive ? "pointer-events: auto;" : "";
                        if (BaseStyle = BaseStyle + " " + l + " " + m + " " + n + " " + k, d.$tooltip = a('<div id="' + d.options.ult_adv_id + '" class="ult-tooltipster-base ' + d.options.theme + '" style="' + BaseStyle + '"><div class="ult-tooltipster-content ult-responsive" data-ultimate-target="' + d.options.ultimate_target + "\" data-responsive-json-new = '" + d.options.responsive_json_new + "' style=\"" + h + '"></div></div>'), g() && d.$tooltip.addClass(i), d._content_insert(), d.$tooltip.appendTo("body"), d.reposition(), d.options.functionReady.call(d.$el, d.$el, d.$tooltip), g() ? (d.$tooltip.addClass(i + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.css("display", "none").fadeIn(d.options.speed, e), d._interval_set(), a(b).on("scroll." + d.namespace + " resize." + d.namespace, function() {
                                d.reposition()
                            }), d.options.autoClose)
                            if (a("body").off("." + d.namespace), "hover" == d.options.trigger)
                                if (j && setTimeout(function() {
                                        a("body").on("touchstart." + d.namespace, function() {
                                            d.hide()
                                        })
                                    }, 0), d.options.interactive) {
                                    j && d.$tooltip.on("touchstart." + d.namespace, function(a) {
                                        a.stopPropagation()
                                    });
                                    var o = null;
                                    d.$elProxy.add(d.$tooltip).on("mouseleave." + d.namespace + "-autoClose", function() {
                                        clearTimeout(o), o = setTimeout(function() {
                                            d.hide()
                                        }, d.options.interactiveTolerance)
                                    }).on("mouseenter." + d.namespace + "-autoClose", function() {
                                        clearTimeout(o)
                                    })
                                } else d.$elProxy.on("mouseleave." + d.namespace + "-autoClose", function() {
                                    d.hide()
                                });
                        else "click" == d.options.trigger && (setTimeout(function() {
                            a("body").on("click." + d.namespace + " touchstart." + d.namespace, function() {
                                d.hide()
                            })
                        }, 0), d.options.interactive && d.$tooltip.on("click." + d.namespace + " touchstart." + d.namespace, function(a) {
                            a.stopPropagation()
                        }))
                    }
                    d.options.timer > 0 && (d.timerHide = setTimeout(function() {
                        d.timerHide = null, d.hide()
                    }, d.options.timer + f))
                }
            })
        },
        _interval_set: function() {
            var b = this;
            b.checkInterval = setInterval(function() {
                if (0 === a("body").find(b.$el).length || 0 === a("body").find(b.$elProxy).length || "hidden" == b.Status || 0 === a("body").find(b.$tooltip).length) "shown" != b.Status && "appearing" != b.Status || b.hide(), b._interval_cancel();
                else if (b.options.positionTracker) {
                    var c = b._repositionInfo(b.$elProxy),
                        d = !1;
                    e(c.dimension, b.elProxyPosition.dimension) && ("fixed" === b.$elProxy.css("position") ? e(c.position, b.elProxyPosition.position) && (d = !0) : e(c.offset, b.elProxyPosition.offset) && (d = !0)), d || b.reposition()
                }
            }, 200)
        },
        _interval_cancel: function() {
            clearInterval(this.checkInterval), this.checkInterval = null
        },
        _content_set: function(a) {
            "object" == typeof a && null !== a && this.options.contentCloning && (a = a.clone(!0)), this.Content = a
        },
        _content_insert: function() {
            var a = this,
                b = this.$tooltip.find(".ult-tooltipster-content");
            "string" != typeof a.Content || a.options.contentAsHTML ? b.empty().append(a.Content) : b.text(a.Content)
        },
        _update: function(a) {
            var b = this;
            b._content_set(a), null !== b.Content ? "hidden" !== b.Status && (b._content_insert(), b.reposition(), b.options.updateAnimation && (g() ? (b.$tooltip.css({
                width: "",
                "-webkit-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                transition: "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
            }).addClass("ult-tooltipster-content-changing"), setTimeout(function() {
                "hidden" != b.Status && (b.$tooltip.removeClass("ult-tooltipster-content-changing"), setTimeout(function() {
                    "hidden" !== b.Status && b.$tooltip.css({
                        "-webkit-transition": b.options.speed + "ms",
                        "-moz-transition": b.options.speed + "ms",
                        "-o-transition": b.options.speed + "ms",
                        "-ms-transition": b.options.speed + "ms",
                        transition: b.options.speed + "ms"
                    })
                }, b.options.speed))
            }, b.options.speed)) : b.$tooltip.fadeTo(b.options.speed, .5, function() {
                "hidden" != b.Status && b.$tooltip.fadeTo(b.options.speed, 1)
            }))) : b.hide()
        },
        _repositionInfo: function(a) {
            return {
                dimension: {
                    height: a.outerHeight(!1),
                    width: a.outerWidth(!1)
                },
                offset: a.offset(),
                position: {
                    left: parseInt(a.css("left")),
                    top: parseInt(a.css("top"))
                }
            }
        },
        hide: function(c) {
            var d = this;
            c && d.callbacks.hide.push(c), d.callbacks.show = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null;
            var e = function() {
                a.each(d.callbacks.hide, function(a, b) {
                    b.call(d.$el)
                }), d.callbacks.hide = []
            };
            if ("shown" == d.Status || "appearing" == d.Status) {
                d.Status = "disappearing";
                var f = function() {
                    d.Status = "hidden", "object" == typeof d.Content && null !== d.Content && d.Content.detach(), d.$tooltip.remove(), d.$tooltip = null, a(b).off("." + d.namespace), a("body").off("." + d.namespace).css("overflow-x", d.bodyOverflowX), a("body").off("." + d.namespace), d.$elProxy.off("." + d.namespace + "-autoClose"), d.options.functionAfter.call(d.$el, d.$el), e()
                };
                g() ? (d.$tooltip.clearQueue().removeClass("ult-tooltipster-" + d.options.animation + "-show").addClass("ult-tooltipster-dying"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(f)) : d.$tooltip.stop().fadeOut(d.options.speed, f)
            } else "hidden" == d.Status && e();
            return d
        },
        show: function(a) {
            return this._showNow(a), this
        },
        update: function(a) {
            return this.content(a)
        },
        content: function(a) {
            return "undefined" == typeof a ? this.Content : (this._update(a), this)
        },
        reposition: function() {
            function c() {
                var c = a(b).scrollLeft();
                C - c < 0 && (f = C - c, C = c), C + i - c > g && (f = C - (g + c - i), C = g + c - i)
            }

            function d(c, d) {
                h.offset.top - a(b).scrollTop() - j - F - 12 < 0 && d.indexOf("top") > -1 && (H = c), h.offset.top + h.dimension.height + j + 12 + F > a(b).scrollTop() + a(b).height() && d.indexOf("bottom") > -1 && (H = c, E = h.offset.top - j - F - 12)
            }
            var e = this;
            if (0 !== a("body").find(e.$tooltip).length) {
                e.$tooltip.css("width", ""), e.elProxyPosition = e._repositionInfo(e.$elProxy);
                var f = null,
                    g = a(b).width(),
                    h = e.elProxyPosition,
                    i = e.$tooltip.outerWidth(!1),
                    j = (e.$tooltip.innerWidth() + 1, e.$tooltip.outerHeight(!1));
                if (e.$elProxy.is("area")) {
                    var k = e.$elProxy.attr("shape"),
                        l = e.$elProxy.parent().attr("name"),
                        m = a('img[usemap="#' + l + '"]'),
                        n = m.offset().left,
                        o = m.offset().top,
                        p = void 0 !== e.$elProxy.attr("coords") ? e.$elProxy.attr("coords").split(",") : void 0;
                    if ("circle" == k) {
                        var q = parseInt(p[0]),
                            r = parseInt(p[1]),
                            s = parseInt(p[2]);
                        h.dimension.height = 2 * s, h.dimension.width = 2 * s, h.offset.top = o + r - s, h.offset.left = n + q - s
                    } else if ("rect" == k) {
                        var q = parseInt(p[0]),
                            r = parseInt(p[1]),
                            t = parseInt(p[2]),
                            u = parseInt(p[3]);
                        h.dimension.height = u - r, h.dimension.width = t - q, h.offset.top = o + r, h.offset.left = n + q
                    } else if ("poly" == k) {
                        for (var v = 0, w = 0, x = 0, y = 0, z = "even", A = 0; A < p.length; A++) {
                            var B = parseInt(p[A]);
                            "even" == z ? (B > x && (x = B, 0 === A && (v = x)), B < v && (v = B), z = "odd") : (B > y && (y = B, 1 == A && (w = y)), B < w && (w = B), z = "even")
                        }
                        h.dimension.height = y - w, h.dimension.width = x - v, h.offset.top = o + w, h.offset.left = n + v
                    } else h.dimension.height = m.outerHeight(!1), h.dimension.width = m.outerWidth(!1), h.offset.top = o, h.offset.left = n
                }
                var C = 0,
                    D = 0,
                    E = 0,
                    F = parseInt(e.options.offsetY),
                    G = parseInt(e.options.offsetX),
                    H = e.options.position;
                if ("top" == H) {
                    var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                    C = h.offset.left + G - I / 2, E = h.offset.top - j - F - 12, c(), d("bottom", "top")
                }
                if ("top-left" == H && (C = h.offset.left + G, E = h.offset.top - j - F - 12, c(), d("bottom-left", "top-left")), "top-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top - j - F - 12, c(), d("bottom-right", "top-right")), "bottom" == H) {
                    var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                    C = h.offset.left - I / 2 + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top", "bottom")
                }
                if ("bottom-left" == H && (C = h.offset.left + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-left", "bottom-left")), "bottom-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-right", "bottom-right")), "left" == H) {
                    C = h.offset.left - G - i - 12, D = h.offset.left + G + h.dimension.width + 12;
                    var J = h.offset.top + j - (h.offset.top + h.dimension.height);
                    if (E = h.offset.top - J / 2 - F, C < 0 && D + i > g) {
                        var K = 2 * parseFloat(e.$tooltip.css("border-width")),
                            L = i + C - K;
                        e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), C = h.offset.left - G - L - 12 - K, J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
                    } else C < 0 && (C = h.offset.left + G + h.dimension.width + 12, f = "left")
                }
                if ("right" == H) {
                    C = h.offset.left + G + h.dimension.width + 12, D = h.offset.left - G - i - 12;
                    var J = h.offset.top + j - (h.offset.top + h.dimension.height);
                    if (E = h.offset.top - J / 2 - F, C + i > g && D < 0) {
                        var K = 2 * parseFloat(e.$tooltip.css("border-width")),
                            L = g - C - K;
                        e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
                    } else C + i > g && (C = h.offset.left - G - i - 12, f = "right")
                }
                if (e.options.arrow) {
                    var M = "ult-tooltipster-arrow-" + H;
                    if (e.options.arrowColor.length < 1) var N = e.$tooltip.css("background-color");
                    else var N = e.options.arrowColor;
                    if (f ? "left" == f ? (M = "ult-tooltipster-arrow-right", f = "") : "right" == f ? (M = "ult-tooltipster-arrow-left", f = "") : f = "left:" + Math.round(f) + "px;" : f = "", "top" == H || "top-left" == H || "top-right" == H) var O = parseFloat(e.$tooltip.css("border-bottom-width")),
                        P = e.$tooltip.css("border-bottom-color");
                    else if ("bottom" == H || "bottom-left" == H || "bottom-right" == H) var O = parseFloat(e.$tooltip.css("border-top-width")),
                        P = e.$tooltip.css("border-top-color");
                    else if ("left" == H) var O = parseFloat(e.$tooltip.css("border-right-width")),
                        P = e.$tooltip.css("border-right-color");
                    else if ("right" == H) var O = parseFloat(e.$tooltip.css("border-left-width")),
                        P = e.$tooltip.css("border-left-color");
                    else var O = parseFloat(e.$tooltip.css("border-bottom-width")),
                        P = e.$tooltip.css("border-bottom-color");
                    O > 1 && O++;
                    var Q = "";
                    if (0 !== O) {
                        var R = "",
                            S = "border-color: " + P + ";";
                        M.indexOf("bottom") !== -1 ? R = "margin-top: -" + Math.round(O) + "px;" : M.indexOf("top") !== -1 ? R = "margin-bottom: -" + Math.round(O) + "px;" : M.indexOf("left") !== -1 ? R = "margin-right: -" + Math.round(O) + "px;" : M.indexOf("right") !== -1 && (R = "margin-left: -" + Math.round(O) + "px;"), Q = '<span class="ult-tooltipster-arrow-border" style="' + R + " " + S + ';"></span>'
                    }
                    e.$tooltip.find(".ult-tooltipster-arrow").remove();
                    var T = '<div class="' + M + ' ult-tooltipster-arrow" style="' + f + '">' + Q + '<span style="border-color:' + N + ';" ></span></div>';
                    e.$tooltip.append(T)
                }
                e.$tooltip.css({
                    top: Math.round(E) + "px",
                    left: Math.round(C) + "px"
                })
            }
            return e
        },
        enable: function() {
            return this.enabled = !0, this
        },
        disable: function() {
            return this.hide(), this.enabled = !1, this
        },
        destroy: function() {
            var b = this;
            b.hide(), b.$el[0] !== b.$elProxy[0] && b.$elProxy.remove(), b.$el.removeData(b.namespace).off("." + b.namespace);
            var c = b.$el.data("ult-tooltipster-ns");
            if (1 === c.length) {
                var d = "string" == typeof b.Content ? b.Content : a("<div></div>").append(b.Content).html();
                b.$el.removeClass("ult-tooltipstered").attr("title", d).removeData(b.namespace).removeData("ult-tooltipster-ns").off("." + b.namespace)
            } else c = a.grep(c, function(a, c) {
                return a !== b.namespace
            }), b.$el.data("ult-tooltipster-ns", c);
            return b
        },
        elementIcon: function() {
            return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
        },
        elementTooltip: function() {
            return this.$tooltip ? this.$tooltip[0] : void 0
        },
        option: function(a, b) {
            return "undefined" == typeof b ? this.options[a] : (this.options[a] = b, this)
        },
        status: function() {
            return this.Status
        }
    }, a.fn[h] = function() {
        var b = arguments;
        if (0 === this.length) {
            if ("string" == typeof b[0]) {
                var c = !0;
                switch (b[0]) {
                    case "setDefaults":
                        a.extend(i, b[1]);
                        break;
                    default:
                        c = !1
                }
                return !!c || this
            }
            return this
        }
        if ("string" == typeof b[0]) {
            var e = "#*$~&";
            return this.each(function() {
                var c = a(this).data("ult-tooltipster-ns"),
                    d = c ? a(this).data(c[0]) : null;
                if (!d) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
                if ("function" != typeof d[b[0]]) throw new Error('Unknown method .ult-tooltipster("' + b[0] + '")');
                var f = d[b[0]](b[1], b[2]);
                if (f !== d) return e = f, !1
            }), "#*$~&" !== e ? e : this
        }
        var f = [],
            g = b[0] && "undefined" != typeof b[0].multiple,
            h = g && b[0].multiple || !g && i.multiple,
            j = b[0] && "undefined" != typeof b[0].debug,
            k = j && b[0].debug || !j && i.debug;
        return this.each(function() {
            var c = !1,
                e = a(this).data("ult-tooltipster-ns"),
                g = null;
            e ? h ? c = !0 : k && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : c = !0, c && (g = new d(this, b[0]), e || (e = []), e.push(g.namespace), a(this).data("ult-tooltipster-ns", e), a(this).data(g.namespace, g)), f.push(g)
        }), h ? f : this
    };
    var j = !!("ontouchstart" in b),
        k = !1;
    a("body").one("mousemove", function() {
        k = !0
    })
}(jQuery, window, document),
function(a, b, c) {
    a(document).ready(function(c) {
        function d() {
            var b = "",
                d = "";
            a('a[href="#"]').click(function(a) {
                a.preventDefault()
            }), c(".ult_hotspot_container.ult-hotspot-tooltip-wrapper").each(function() {
                c(this);
                c(this).data("opacity") || .5;
                c(".ult-hotspot-tooltip[data-link_style='tootip']", c(this)).each(function() {
                    if (a(this).find(".aio-icon-img").length > 0) var e = a(this).find(".aio-icon-img").outerHeight(!0),
                        f = a(this).find(".aio-icon-img").outerWidth(!0);
                    else var e = jQuery(this).find(".aio-icon").outerHeight(!0),
                        f = jQuery(this).find(".aio-icon").outerWidth(!0);
                    var g = Math.round(e / 2),
                        h = Math.round(f / 2),
                        i = c(this).data("tooltipanimation"),
                        j = c(this).data("trigger") || "hover",
                        k = c(this).data("arrowposition") || "top",
                        l = c(this).data("bubble-arrow"),
                        m = c(this).data("tooltip-content-style"),
                        n = c(this).data("tooltip-base-style"),
                        o = c(this).find(".hotspot-tooltip-content").html();
                    c(this).data("tooltip-offsety") || 0;
                    o = c(this).find(".hotspot-tooltip-content").html(o).text();
                    var p = c(this).data("mycust-id");
                    b = c(this).data("ultimate-target"), d = c(this).data("responsive-json-new"), d = JSON.stringify(d), "top" == k && (g = 0), "bottom" == k && (g = e), "left" == k && (g = -g, h = 0), "right" == k && (h = f, g = -g), /firefox/.test(navigator.userAgent.toLowerCase()) && (h = 0, g = 0), c(this).ulttooltipster({
                        content: o,
                        position: k,
                        offsetX: h,
                        offsetY: g,
                        ultCustomTooltipStyle: !0,
                        ultContentStyle: m,
                        ultBaseStyle: n,
                        arrow: l,
                        delay: 100,
                        speed: 300,
                        interactive: !0,
                        animation: i,
                        trigger: j,
                        contentAsHTML: 1,
                        ult_adv_id: p,
                        responsive_json_new: d,
                        ultimate_target: b
                    })
                })
            })
        }
        d(), setTimeout(function() {
            a(b).load(function() {
                if (a(".ult_hotspot_container").length > 0) {
                    var b = a(".ult_hotspot_container").find(".ult-hotspot-tooltip").attr("data-status") || "hide";
                    "show" === b && a(".ult-tooltipstered").ulttooltipster("destroy"), d()
                }
            })
        }, 700), a(document).ajaxComplete(function(a, b, c) {
            d()
        })
    })
}(jQuery, window),
function(a, b, c) {
    function d(b, c, d, e, f, g) {
        "" != c && (c >= 768 ? a(b).find(".ult-ih-item, .ult-ih-img, .ult-ih-image-block, .ult-ih-list-item").css({
            height: d,
            width: e
        }) : a(b).find(".ult-ih-item, .ult-ih-img, .ult-ih-image-block, .ult-ih-list-item").css({
            height: f,
            width: g
        }))
    }

    function e() {
        a(".ult-ih-list").each(function(c, e) {
            var f = a(e).attr("data-shape"),
                g = a(e).attr("data-height"),
                h = a(e).attr("data-width"),
                i = a(e).attr("data-res_height"),
                j = a(e).attr("data-res_width"),
                k = jQuery(b).width() || "";
            a(e).find("li").each(function() {
                a(e).find(".ult-ih-item").addClass("ult-ih-" + f), d(e, k, g, h, i, j)
            })
        })
    }
    a(b).load(function() {
        a(".ult-ih-container").css({
            visibility: "visible",
            opacity: 1
        })
    }), a(document).ready(function() {
        e(), a(document).ajaxComplete(function(a, b, c) {
            e()
        })
    }), a(b).resize(function() {
        e()
    })
}(jQuery, window),
function(a) {
    a(document).ready(function() {
        a(document).trigger("ultImageSeparator")
    }), a(window).load(function() {
        a(document).trigger("ultImageSeparator")
    }), a(document).on("ultImageSeparator", function(b) {
        a(".ult-easy-separator-wrapper").each(function(b, c) {
            var d = a(this).attr("data-vc-row"),
                e = a(this).parents("." + d + ":first");
            e.hasClass("upb-background-text") && (e = e.parents("." + d + ":first")), a(this).appendTo(e).find(".ult-no-animation").css({
                opacity: "1"
            })
        })
    })
}(jQuery),
function(a) {
    function b() {
        a(".ultb3-box").each(function(b, c) {
            var d = a(c).outerHeight(),
                e = a(c).find(".ultb3-info").outerHeight(),
                f = (d - e) / 2;
            a(c).find(".ultb3-info").css({
                top: f
            })
        })
    }
    a(document).ready(function() {
        b(), a(window).resize(function() {
            b()
        }), jQuery(".ultb3-box .ultb3-info").each(function() {
            if (jQuery(this).attr("data-animation")) {
                jQuery(this).css("opacity", "0");
                var a = jQuery(this).attr("data-animation"),
                    b = "delay-" + jQuery(this).attr("data-animation-delay");
                jQuery(this).bsf_appear(function() {
                    var c = jQuery(this);
                    c.addClass("animated").addClass(a), c.addClass("animated").addClass(b), c.css("opacity", "1")
                }, {
                    accY: -70
                })
            }
        })
    }), a(window).load(function() {
        b()
    })
}(jQuery), jQuery(window).load(function(a) {
    info_box_set_auto_height()
}), jQuery(document).ready(function(a) {
    info_box_set_auto_height(), jQuery(window).resize(function(a) {
        info_box_set_auto_height()
    })
});
var resizedd = 0,
    time_f_arr = [];
jQuery(document).ready(function() {
        make_info_circle(".info-c-full-br", 0), responsive_check(".info-c-full-br"), calculate_clipped_circle(), jQuery(".clipped-info-circle").each(function(a, b) {
            var c = jQuery(this).outerHeight(),
                d = jQuery(this).outerWidth();
            jQuery(this).attr("data-first-width", d), jQuery(this).attr("data-first-height", c)
        }), jQuery(window).resize(function() {
            resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle()
        }), jQuery(window).load(function() {
            resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle()
        }), jQuery(document).on("ultAdvancedTabClicked", function() {
            resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle()
        }), jQuery(".info-c-full-br").each(function() {
            "click" == jQuery(this).data("focus-on") && jQuery(this).find(".icon-circle-list .info-circle-icons").click(function() {
                var a = jQuery(this);
                jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"), show_next_info_circle(a)
            }), "hover" == jQuery(this).data("focus-on") && jQuery(this).find(".icon-circle-list .info-circle-icons").hover(function() {
                var a = jQuery(this);
                jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"), show_next_info_circle(a)
            }, function() {})
        }), setTimeout(function() {
            jQuery(".info-c-full-br").each(function() {
                var a = jQuery(this).data("slide-duration");
                a || (a = .2), jQuery(this).attr("data-slide-number", "1"), info_circle_slide(1e3 * a, jQuery(this));
                var b = jQuery(this).find(".info-circle-icons").eq(0);
                show_next_info_circle(b)
            })
        }, 1e3)
    }), jQuery(window).load(function() {
        jQuery(".info-c-full-br").each(function() {
            "on" == jQuery(this).attr("data-slide-true") && jQuery(this).hover(function() {
                jQuery(this).attr("data-slide-true", "off")
            }, function() {
                jQuery(this).attr("data-slide-true", "on")
            })
        })
    }), jQuery(document).ready(function(a) {
        jQuery(".icon_list_item").each(function(a, b) {
            var c = jQuery(this),
                d = c.find(".info-circle-img-icon").length;
            d >= 1 && c.closest("ul.smile_icon_list").addClass("ic-resp-img")
        })
    }),
    function(a) {
        a.fn.bsf_appear = function(b, c) {
            var d = a.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, c);
            return this.each(function() {
                var c = a(this);
                if (c.bsf_appeared = !1, !b) return void c.trigger("bsf_appear", d.data);
                var e = a(window),
                    f = function() {
                        if (!c.is(":visible")) return void(c.bsf_appeared = !1);
                        var a = e.scrollLeft(),
                            b = e.scrollTop(),
                            f = c.offset(),
                            g = f.left,
                            h = f.top,
                            i = d.accX,
                            j = d.accY,
                            k = c.height(),
                            l = e.height(),
                            m = c.width(),
                            n = e.width();
                        h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.bsf_appeared || c.trigger("bsf_appear", d.data) : c.bsf_appeared = !1
                    },
                    g = function() {
                        if (c.bsf_appeared = !0, d.one) {
                            e.unbind("scroll", f);
                            var g = a.inArray(f, a.fn.bsf_appear.checks);
                            g >= 0 && a.fn.bsf_appear.checks.splice(g, 1)
                        }
                        b.apply(this, arguments)
                    };
                d.one ? c.one("bsf_appear", d.data, g) : c.bind("bsf_appear", d.data, g), e.scroll(f), a.fn.bsf_appear.checks.push(f), f()
            })
        }, a.extend(a.fn.bsf_appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var b = a.fn.bsf_appear.checks.length;
                if (b > 0)
                    for (; b--;) a.fn.bsf_appear.checks[b]()
            },
            run: function() {
                a.fn.bsf_appear.timeout ? (clearTimeout(a.fn.bsf_appear.timeout), a.fn.bsf_appear.timeout = setTimeout(a.fn.bsf_appear.checkAll, 20)) : a.fn.bsf_appear.timeout = setTimeout(a.fn.bsf_appear.checkAll, 20)
            }
        }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(b, c) {
            var d = a.fn[c];
            d && (a.fn[c] = function() {
                var b = d.apply(this, arguments);
                return a.fn.bsf_appear.run(), b
            })
        })
    }(jQuery),
    function() {
        var a, b;
        a = this.jQuery || window.jQuery, b = a(window), a.fn.stick_in_parent = function(c) {
            var d, e, f, g, h, i, j, k, l, m, n, o;
            for (null == c && (c = {}), o = c.sticky_class, i = c.inner_scrolling, n = c.recalc_every, m = c.parent, l = c.offset_top, k = c.spacer, f = c.bottoming, null == l && (l = 0), null == m && (m = void 0), null == i && (i = !0), null == o && (o = "is_stuck"), d = a(document), null == f && (f = !0), g = function(c, e, g, h, j, p, q, r) {
                    var s, t, u, v, w, x, y, z, A, B, C, D;
                    if (!c.data("sticky_kit")) {
                        if (c.data("sticky_kit", !0), w = d.height(), y = c.parent(), null != m && (y = y.closest(m)), !y.length) throw "failed to find stick parent";
                        if (u = !1, s = !1, C = null != k ? k && c.closest(k) : a("<div />"), C && C.css("position", c.css("position")), z = function() {
                                var a, b, f;
                                if (!r) return w = d.height(), a = parseInt(y.css("border-top-width"), 10), b = parseInt(y.css("padding-top"), 10), e = parseInt(y.css("padding-bottom"), 10), g = y.offset().top + a + b, h = y.height(), u && (u = !1, s = !1, null == k && (c.insertAfter(C), C.detach()), c.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(o), f = !0), j = c.offset().top - (parseInt(c.css("margin-top"), 10) || 0) - l, p = c.outerHeight(!0), q = c.css("float"), C && C.css({
                                    width: c.outerWidth(!0),
                                    height: p,
                                    display: c.css("display"),
                                    "vertical-align": c.css("vertical-align"),
                                    float: q
                                }), f ? D() : void 0
                            }, z(), p !== h) return v = void 0, x = l, B = n, D = function() {
                            var a, m, t, A, D, E;
                            if (!r) return t = !1, null != B && (B -= 1, B <= 0 && (B = n, z(), t = !0)), t || d.height() === w || (z(), t = !0), A = b.scrollTop(), null != v && (m = A - v), v = A, u ? (f && (D = A + p + x > h + g, s && !D && (s = !1, c.css({
                                position: "fixed",
                                bottom: "",
                                top: x
                            }).trigger("sticky_kit:unbottom"))), A < j && (u = !1, x = l, null == k && ("left" !== q && "right" !== q || c.insertAfter(C), C.detach()), a = {
                                position: "",
                                width: "",
                                top: ""
                            }, c.css(a).removeClass(o).trigger("sticky_kit:unstick")), i && (E = b.height(), p + l > E && (s || (x -= m, x = Math.max(E - p, x), x = Math.min(l, x), u && c.css({
                                top: x + "px"
                            }))))) : A > j && (u = !0, a = {
                                position: "fixed",
                                top: x
                            }, a.width = "border-box" === c.css("box-sizing") ? c.outerWidth() + "px" : c.width() + "px", c.css(a).addClass(o), null == k && (c.after(C), "left" !== q && "right" !== q || C.append(c)), c.trigger("sticky_kit:stick")), u && f && (null == D && (D = A + p + x > h + g), !s && D) ? (s = !0, "static" === y.css("position") && y.css({
                                position: "relative"
                            }), c.css({
                                position: "absolute",
                                bottom: e,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")) : void 0
                        }, A = function() {
                            return z(), D()
                        }, t = function() {
                            if (r = !0, b.off("touchmove", D), b.off("scroll", D), b.off("resize", A), a(document.body).off("sticky_kit:recalc", A), c.off("sticky_kit:detach", t), c.removeData("sticky_kit"), c.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), y.position("position", ""), u) return null == k && ("left" !== q && "right" !== q || c.insertAfter(C), C.remove()), c.removeClass(o)
                        }, b.on("touchmove", D), b.on("scroll", D), b.on("resize", A), a(document.body).on("sticky_kit:recalc", A), c.on("sticky_kit:detach", t), setTimeout(D, 0)
                    }
                }, h = 0, j = this.length; h < j; h++) e = this[h], g(a(e));
            return this
        }
    }.call(this), jQuery(document).ready(function(a) {
        var b = function(a, b) {
                var c = "0";
                for (a += ""; a.length < b;) a = c + a;
                return a
            },
            c = function(a, c, d) {
                a = a.replace(/^\s*|\s*$/, ""), a = a.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, "#$1$1$2$2$3$3");
                var e = Math.round(256 * c) * (d ? -1 : 1),
                    f = a.match(new RegExp("^rgba?\\(\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$", "i")),
                    g = f && null != f[4] ? f[4] : null,
                    h = f ? [f[1], f[2], f[3]] : a.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function() {
                        return parseInt(arguments[1], 16) + "," + parseInt(arguments[2], 16) + "," + parseInt(arguments[3], 16)
                    }).split(/,/);
                return f ? "rgb" + (null !== g ? "a" : "") + "(" + Math[d ? "max" : "min"](parseInt(h[0], 10) + e, d ? 0 : 255) + ", " + Math[d ? "max" : "min"](parseInt(h[1], 10) + e, d ? 0 : 255) + ", " + Math[d ? "max" : "min"](parseInt(h[2], 10) + e, d ? 0 : 255) + (null !== g ? ", " + g : "") + ")" : ["#", b(Math[d ? "max" : "min"](parseInt(h[0], 10) + e, d ? 0 : 255).toString(16), 2), b(Math[d ? "max" : "min"](parseInt(h[1], 10) + e, d ? 0 : 255).toString(16), 2), b(Math[d ? "max" : "min"](parseInt(h[2], 10) + e, d ? 0 : 255).toString(16), 2)].join("")
            },
            d = function(a, b) {
                return c(a, b, !1)
            },
            e = function(a, b) {
                return c(a, b, !0)
            },
            f = a(".ult-rs-wrapper");
        count = 0, f.each(function() {
            function b(a) {
                var b = ".ult-slider-ticks" + a,
                    c = w.find(b);
                c.prevAll(".ui-slider-label-ticks").css("background", n), c.nextAll(".ui-slider-label-ticks").css("background", k)
            }
            count += 1;
            var c = 0,
                f = 0,
                g = 0,
                h = a(this).find(".ult-rslider-container"),
                i = 0,
                j = h.data("slider_steps"),
                k = h.data("slider_color");
            k = k ? k : "#3BF7D1";
            var l = k,
                m = (d(l, .2), e(l, .2)),
                n = m,
                o = m,
                p = h.data("title-background"),
                q = h.data("title-box"),
                r = (h.data("slider_size"), h.data("adaptive_height")),
                s = h.data("arrow"),
                t = "border-top-color:" + p + ";";
            if (s) {
                var u = document.createElement("style");
                u.type = "text/css", u.innerHTML = ".ult-arrow" + count + ":before { " + s + " }.ult-arrow" + count + ":after { " + t + " }", document.getElementsByTagName("head")[0].appendChild(u);
                var v = "ult-arrow" + count;
                h.find(".ult-arrow").addClass(v)
            }
            var w = h,
                x = a(this),
                y = h.find(".ult-rslider"),
                z = function(c, d) {
                    var e = h.find(".ui-slider-handle"),
                        f = d.value || 1,
                        g = ".ult-title" + f,
                        j = ".ult-desc" + f;
                    w.find(".ult-tooltip").hasClass("ult-done") || (w.find(".ult-tooltip").each(function(b) {
                        a(this).addClass("ult-done"), e.append(a(this))
                    }), i = 1), w.find(g).css("visibility", "visible"), w.find(g).siblings().css("visibility", "hidden"), x.find(j).css("display", "block"), x.find(j).siblings().css("display", "none"), b(f)
                };
            if (y.slider({
                    range: "min",
                    min: 1,
                    max: j,
                    step: 1,
                    create: z,
                    slide: z
                }), y.labeledslider({
                    max: j - 1,
                    tickInterval: 1
                }), "auto" == q) {
                h.find(".ult-tooltip").each(function() {
                    var b = a(this).outerWidth(),
                        d = a(this).outerHeight();
                    b = b / 2 + 10, c = c > b ? c : b, f = f > d ? f : d
                });
                var A = f + "px " + c + "px 35px";
                h.css("padding", A)
            }
            "on" == r && (x.find(".ult-description").each(function() {
                var b = a(this).outerHeight();
                g = g > b ? g : b
            }), g = g + 30 + "px", x.find(".ult-desc-wrap").css("min-height", g)), h.find(".ui-slider-labels").children(".ui-slider-label-ticks").css("background", k);
            var B = {},
                C = "background";
            B[C] = o;
            var D = y.find(".ui-slider-handle");
            y.css("background", k), D.css(B), y.find(".ui-slider-range").css("background", n)
        })
    }),
    function(a) {
        a(document).ready(function() {
            a(".ult-carousel-wrapper").each(function() {
                var b = a(this);
                if (b.hasClass("ult_full_width")) {
                    b.css("left", 0), b.css("right", 0);
                    var c = b.attr("data-rtl"),
                        d = a("html").outerWidth(),
                        e = 0,
                        f = b.offset().left,
                        g = Math.abs(e - f),
                        h = g;
                    "true" === c || c === !0 ? b.css({
                        position: "relative",
                        right: "-" + h + "px",
                        width: d + "px"
                    }) : b.css({
                        position: "relative",
                        left: "-" + h + "px",
                        width: d + "px"
                    })
                }
            }), a(".ult-carousel-wrapper").each(function(b, c) {
                var d = a(c).data("gutter"),
                    e = a(c).attr("id");
                if ("" != d) {
                    var f = "<style>#" + e + " .slick-slide { margin:0 " + d + "px; } </style>";
                    a("head").append(f)
                }
            }), a(".ult-carousel-wrapper").on("init", function(b) {
                b.preventDefault(), a(".ult-carousel-wrapper .ult-item-wrap.slick-active").each(function(b, c) {
                    $this = a(this), $this.addClass($this.data("animation"))
                })
            }), a(".ult-carousel-wrapper").on("beforeChange", function(b, c, d) {
                $inViewPort = a("[data-slick-index='" + d + "']"), $inViewPort.siblings().removeClass($inViewPort.data("animation"))
            }), a(".ult-carousel-wrapper").on("afterChange", function(b, c, d, e) {
                if (slidesScrolled = c.options.slidesToScroll, slidesToShow = c.options.slidesToShow, centerMode = c.options.centerMode, windowWidth = jQuery(window).width(), windowWidth < 1025 && (slidesToShow = c.options.responsive[0].settings.slidesToShow), windowWidth < 769 && (slidesToShow = c.options.responsive[1].settings.slidesToShow), windowWidth < 481 && (slidesToShow = c.options.responsive[2].settings.slidesToShow), $currentParent = c.$slider[0].parentElement.id, slideToAnimate = d + slidesToShow - 1, 1 == slidesScrolled) 1 == centerMode ? (animate = slideToAnimate - 2, $inViewPort = a("#" + $currentParent + " [data-slick-index='" + animate + "']"), $inViewPort.addClass($inViewPort.data("animation"))) : ($inViewPort = a("#" + $currentParent + " [data-slick-index='" + slideToAnimate + "']"), $inViewPort.addClass($inViewPort.data("animation")));
                else
                    for (var f = slidesScrolled + d; f >= 0; f--) $inViewPort = a("#" + $currentParent + " [data-slick-index='" + f + "']"), $inViewPort.addClass($inViewPort.data("animation"))
            }), a(window).resize(function() {
                a(".ult-carousel-wrapper").each(function() {
                    var b = a(this);
                    if (b.hasClass("ult_full_width")) {
                        var c = b.attr("data-rtl");
                        b.removeAttr("style");
                        var d = a("html").outerWidth(),
                            e = 0,
                            f = b.offset().left,
                            g = Math.abs(e - f),
                            h = g;
                        "true" === c || c === !0 ? b.css({
                            position: "relative",
                            right: "-" + h + "px",
                            width: d + "px"
                        }) : b.css({
                            position: "relative",
                            left: "-" + h + "px",
                            width: d + "px"
                        })
                    }
                })
            })
        }), a(window).load(function() {
            a(".ult-carousel-wrapper").each(function() {
                var b = a(this);
                if (b.hasClass("ult_full_width")) {
                    b.css("left", 0), b.css("right", 0);
                    var c = 0,
                        d = b.offset().left,
                        e = Math.abs(c - d),
                        f = b.attr("data-rtl"),
                        g = a("html").outerWidth(),
                        h = e;
                    "true" === f || f === !0 ? b.css({
                        position: "relative",
                        right: "-" + h + "px",
                        width: g + "px"
                    }) : b.css({
                        position: "relative",
                        left: "-" + h + "px",
                        width: g + "px"
                    })
                }
            })
        })
    }(jQuery), ! function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function b(b, d) {
                var e, f = this;
                f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(b, c) {
                        return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, f.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0)
            }
            var c = 0;
            return b
        }(), b.prototype.activateADA = function() {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed)
            }
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.getNavTarget = function() {
            var b = this,
                c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c
        }, b.prototype.asNavFor = function(b) {
            var c = this,
                d = c.getNavTarget();
            null !== d && "object" == typeof d && d.each(function() {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this,
                b = a.currentSlide + a.options.slidesToScroll;
            a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
        }, b.prototype.buildArrows = function() {
            var b = this;
            b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function() {
            var b, c, d = this;
            if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
                d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function() {
            var a, b, c, d, e, f, g, h = this;
            if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
                for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                    var i = document.createElement("div");
                    for (b = 0; b < h.options.rows; b++) {
                        var j = document.createElement("div");
                        for (c = 0; c < h.options.slidesPerRow; c++) {
                            var k = a * g + (b * h.options.slidesPerRow + c);
                            f.get(k) && j.appendChild(f.get(k))
                        }
                        i.appendChild(j)
                    }
                    d.appendChild(i)
                }
                h.$slider.empty().append(d), h.$slider.children().children().children().css({
                    width: 100 / h.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, b.prototype.checkResponsive = function(b, c) {
            var d, e, f, g = this,
                h = !1,
                i = g.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
                e = null;
                for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
            }
        }, b.prototype.changeSlide = function(b, c) {
            var d, e, f, g = this,
                h = a(b.currentTarget);
            switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                case "previous":
                    e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                    break;
                case "next":
                    e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                    g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function(a) {
            var b, c, d = this;
            if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
            else
                for (var e in b) {
                    if (a < b[e]) {
                        a = c;
                        break
                    }
                    c = b[e]
                }
            return a
        }, b.prototype.cleanUpEvents = function() {
            var b = this;
            b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpSlideEvents = function() {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.cleanUpRows = function() {
            var a, b = this;
            b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.empty().append(a))
        }, b.prototype.clickHandler = function(a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function(b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function(a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.focusHandler = function() {
            var b = this;
            b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function() {
                    b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
                }, 0)
            })
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function() {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (a.options.centerMode === !0) d = a.slideCount;
            else if (a.options.asNavFor)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
            return d - 1
        }, b.prototype.getLeft = function(a) {
            var b, c, d, e = this,
                f = 0;
            return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function() {
            var a, b = this,
                c = 0,
                d = 0,
                e = [];
            for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
            return e
        }, b.prototype.getSlick = function() {
            return this
        }, b.prototype.getSlideCount = function() {
            var b, c, d, e = this;
            return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
                return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
            }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function(b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
        }, b.prototype.initADA = function() {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                })
            }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.initSlideEvents = function() {
            var b = this;
            b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
                a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, b.prototype.lazyLoad = function() {
            function b(b) {
                a("img[data-lazy]", b).each(function() {
                    var b = a(this),
                        c = a(this).attr("data-lazy"),
                        d = document.createElement("img");
                    d.onload = function() {
                        b.animate({
                            opacity: 0
                        }, 100, function() {
                            b.attr("src", c).animate({
                                opacity: 1
                            }, 200, function() {
                                b.removeAttr("data-lazy").removeClass("slick-loading")
                            }), g.$slider.trigger("lazyLoaded", [g, b, c])
                        })
                    }, d.onerror = function() {
                        b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, b, c])
                    }, d.src = c
                })
            }
            var c, d, e, f, g = this;
            g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = Math.ceil(e + g.options.slidesToShow), g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function() {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
        }, b.prototype.postSlide = function(a) {
            var b = this;
            b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function(a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function(b) {
            b = b || 1;
            var c, d, e, f = this,
                g = a("img[data-lazy]", f.$slider);
            g.length ? (c = g.first(), d = c.attr("data-lazy"), e = document.createElement("img"), e.onload = function() {
                c.attr("src", d).removeAttr("data-lazy").removeClass("slick-loading"), f.options.adaptiveHeight === !0 && f.setPosition(), f.$slider.trigger("lazyLoaded", [f, c, d]), f.progressiveLazyLoad()
            }, e.onerror = function() {
                3 > b ? setTimeout(function() {
                    f.progressiveLazyLoad(b + 1)
                }, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), f.$slider.trigger("lazyLoadError", [f, c, d]), f.progressiveLazyLoad())
            }, e.src = d) : f.$slider.trigger("allImagesLoaded", [f])
        }, b.prototype.refresh = function(b) {
            var c, d, e = this;
            d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
                currentSlide: c
            }), e.init(), b || e.changeSlide({
                data: {
                    message: "index",
                    index: c
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function() {
            var b, c, d, e = this,
                f = e.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                e.respondTo = e.options.respondTo || "window";
                for (b in f)
                    if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                        for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                        e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                    } e.breakpoints.sort(function(a, b) {
                    return e.options.mobileFirst ? a - b : b - a
                })
            }
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
        }, b.prototype.resize = function() {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function(a) {
            var b, c, d = this,
                e = {};
            d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
        }, b.prototype.setDimensions = function() {
            var a = this;
            a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function() {
            var b, c = this;
            c.$slides.each(function(d, e) {
                b = c.slideWidth * d * -1, c.options.rtl === !0 ? a(e).css({
                    position: "relative",
                    right: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                })
            }), c.$slides.eq(c.currentSlide).css({
                zIndex: c.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function() {
            var b, c, d, e, f, g = this,
                h = !1;
            if ("object" === a.type(arguments[0]) ? (d = arguments[0], h = arguments[1], f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0], e = arguments[1], h = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : "undefined" != typeof arguments[1] && (f = "single")), "single" === f) g.options[d] = e;
            else if ("multiple" === f) a.each(d, function(a, b) {
                g.options[a] = b
            });
            else if ("responsive" === f)
                for (c in e)
                    if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
                    else {
                        for (b = g.options.responsive.length - 1; b >= 0;) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
                        g.options.responsive.push(e[c])
                    } h && (g.unload(), g.reinit())
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function() {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function(a) {
            var b, c, d, e, f = this;
            c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var b, c, d, e = this;
            if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
                for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.interrupt = function(a) {
            var b = this;
            a || b.autoPlay(), b.interrupted = a
        }, b.prototype.selectHandler = function(b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, h, i = null,
                j = this;
            return b = b || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a || j.slideCount <= j.options.slidesToShow ? void 0 : (b === !1 && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function() {
                j.postSlide(d)
            }) : j.postSlide(d))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function() {
                j.postSlide(d)
            }) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer), e = 0 > d ? j.slideCount % j.options.slidesToScroll !== 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll !== 0 ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, e]), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = j.getNavTarget(), h = h.slick("getSlick"), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)), j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (c !== !0 ? (j.fadeSlideOut(f), j.fadeSlide(e, function() {
                j.postSlide(e)
            })) : j.postSlide(e), void j.animateHeight()) : void(c !== !0 ? j.animateSlide(i, function() {
                j.postSlide(e)
            }) : j.postSlide(e))))
        }, b.prototype.startLoad = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
        }, b.prototype.swipeEnd = function(a) {
            var b, c, d = this;
            if (d.dragging = !1, d.interrupted = !1, d.shouldClick = !(d.touchObject.swipeLength > 10), void 0 === d.touchObject.curX) return !1;
            if (d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe) {
                switch (c = d.swipeDirection()) {
                    case "left":
                    case "down":
                        b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(), d.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(), d.currentDirection = 1
                }
                "vertical" != c && (d.slideHandler(b), d.touchObject = {}, d.$slider.trigger("swipe", [d, c]))
            } else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), d.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var b, c, d, e, f, g = this;
            return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.options.vertical === !1 ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade !== !0 && g.options.touchMove !== !1 && (g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft))) : void 0)
        }, b.prototype.swipeStart = function(a) {
            var b, c = this;
            return c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function(a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function() {
            var a, b = this;
            a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function() {
            var a = this;
            a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
        }, a.fn.slick = function() {
            var a, c, d = this,
                e = arguments[0],
                f = Array.prototype.slice.call(arguments, 1),
                g = d.length;
            for (a = 0; g > a; a++)
                if ("object" == typeof e || "undefined" == typeof e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), "undefined" != typeof c) return c;
            return d
        }
    }), jQuery(document).ready(function(a) {
        function b() {
            var b = a("div.ult-sticky-anchor");
            b.each(function() {
                var b = a(this),
                    c = (b.closest(".ult_row_spacer"), b.find(".ult-sticky")),
                    e = c.data("stick_behaviour"),
                    g = c.data("support");
                if ("stick_with_scroll_row" == e || "no" != g) {
                    var h = 0,
                        i = c.data("gutter"),
                        j = c.data("sticky_gutter_class"),
                        k = c.data("sticky_gutter_id"),
                        l = c.data("mobile");
                    i = d(h, i, j, k);
                    var m = b.closest(".wpb_column").closest(".vc_row");
                    b.parent().offset().top;
                    b.addClass("ult_stick_to_row"), m.addClass("ult_s_container"), "yes" == g && (m = "body"), f < 768 && "no" == l || b.fixTo(m, {
                        top: i,
                        useNativeSticky: !1
                    })
                }
            })
        }

        function c() {
            elements = a("div.ult-sticky-anchor"), elements.each(function() {
                var b = a(this),
                    c = b.find(".ult-sticky"),
                    h = c.data("mobile"),
                    i = b.find(".ult-space");
                if (f < 768 && "no" == h) return c.removeClass("ult-stick"), i.css("height", ""), void b.removeClass("ult-permanent-flag");
                var j = e.scrollTop(),
                    k = b.offset().top,
                    l = e.height(),
                    m = c.data("stick_behaviour"),
                    n = c.data("support");
                if ("stick_with_scroll_row" != m && "yes" != n) {
                    var o = b.parent().width(),
                        p = c.height(),
                        q = 0,
                        r = c.data("gutter"),
                        s = c.data("sticky_gutter_class"),
                        t = c.data("sticky_gutter_id"),
                        u = c.data("lr_position"),
                        v = c.data("lr_value"),
                        w = c.data("sticky_customwidth"),
                        x = c.data("sticky_width"),
                        y = c.data("sticky_position"),
                        z = -1;
                    r = d(q, r, s, t), "top" == y ? j = parseInt(j) + parseInt(r) : (j = parseInt(j) + parseInt(l) - parseInt(p) - parseInt(r), k = parseInt(k)), "fullwidth" == x ? o = "100%" : "customwidth" == x && (o = w);
                    var A = {},
                        B = "width";
                    A[y] = r, A[B] = o, "stick_permanent" == m && (A[u] = v);
                    var C = {};
                    C[y] = "", C[B] = "", "stick_permanent" != m || b.hasClass("ult-permanent-flag") || (b.addClass("ult-permanent-flag"), c.addClass("ult-stick").css(A)), "stick_with_scroll" == m && j > k ? (z = 0, b.hasClass("ult-flag") && 0 != g || (b.addClass("ult-flag"), "fullwidth" == x ? (c.addClass("ult-stick-full-width").css(A), b.find(".ult-space").css("height", p), z = 1) : (c.addClass("ult-stick").css(A), b.find(".ult-space").css("height", p), z = 1))) : "stick_with_scroll" == m && b.hasClass("ult-flag") && (b.removeClass("ult-flag"), "fullwidth" == x ? (c.removeClass("ult-stick-full-width").css(C), b.find(".ult-space").css("height", "")) : (c.removeClass("ult-stick").css(C), b.find(".ult-space").css("height", "")))
                }
            }), g = -1
        }

        function d(b, c, d, e) {
            if (d) {
                var f = d.split(" ");
                jQuery.each(f, function(c, d) {
                    b = parseInt(b) + a(d).outerHeight()
                })
            } else d = "null";
            if (e) {
                var g = e.split(" ");
                jQuery.each(g, function(c, d) {
                    b = parseInt(b) + a(d).outerHeight()
                })
            } else e = "null";
            return c = c ? parseInt(c) + parseInt(b) : b
        }
        var e = a(window),
            f = e.width(),
            g = -1;
        b(), c(), e.resize(function() {
            g = 0, f = e.width(), c()
        }), e.bind("scroll", function() {
            c()
        })
    }),
    function(a, b, c) {
        "use strict";
        var d = b.bsfmodernizr;
        jQuery.fn.reverse = [].reverse, a.SwatchBook = function(b, c) {
            this.$el = a(c), this._init(b)
        }, a.SwatchBook.defaults = {
            center: 6,
            angleInc: 8,
            speed: 700,
            easing: "ease",
            proximity: 45,
            neighbor: 4,
            onLoadAnim: !0,
            initclosed: !1,
            closeIdx: -1,
            openAt: -1
        }, a.SwatchBook.prototype = {
            _init: function(b) {
                this.options = a.extend(!0, {}, a.SwatchBook.defaults, b), this.$items = this.$el.children("div"), this.itemsCount = this.$items.length, this.current = -1, this.support = d.csstransitions, this.cache = [], this.options.onLoadAnim && this._setTransition(), this.options.initclosed ? (this.isClosed = !0, this.options.onLoadAnim || this._setTransition()) : this._center(this.options.center, this.options.onLoadAnim), this.options.openAt >= 0 && this.options.openAt < this.itemsCount && this._openItem(this.$items.eq(this.options.openAt)), this._initEvents()
            },
            _setTransition: function() {
                this.support && this.$items.css({
                    transition: "all " + this.options.speed + "ms " + this.options.easing
                })
            },
            _openclose: function() {
                this.isClosed ? this._center(this.options.center, !0) : this.$items.css({
                    transform: "rotate(0deg)"
                }), this.isClosed = !this.isClosed
            },
            _center: function(b, c) {
                var d = this;
                this.$items.each(function(c) {
                    var e = "rotate(" + d.options.angleInc * (c - b) + "deg)";
                    a(this).css({
                        transform: e
                    })
                })
            },
            _openItem: function(a) {
                var b = a.index();
                b !== this.current && (this.options.closeIdx !== -1 && b === this.options.closeIdx ? (this._openclose(), this._setCurrent()) : (this._setCurrent(a), a.css({
                    transform: "rotate(0deg)"
                }), this._rotateSiblings(a)))
            },
            _initEvents: function() {
                var b = this;
                this.$items.on("click.swatchbook", function(c) {
                    b._openItem(a(this))
                })
            },
            _rotateSiblings: function(b) {
                var c, d = this,
                    e = b.index(),
                    f = this.cache[e];
                f ? c = f : (c = b.siblings(), this.cache[e] = c), c.each(function(b) {
                    var c = b < e ? d.options.angleInc * (b - e) : b - e === 1 ? d.options.proximity : d.options.proximity + (b - e - 1) * d.options.neighbor,
                        f = "rotate(" + c + "deg)";
                    a(this).css({
                        transform: f
                    })
                })
            },
            _setCurrent: function(a) {
                this.current = a ? a.index() : -1, this.$items.removeClass("ff-active"), a && a.addClass("ff-active")
            }
        };
        var e = function(a) {
            b.console && b.console.error(a)
        };
        a.fn.swatchbook = function(b) {
            var c = a.data(this, "swatchbook");
            if ("string" == typeof b) {
                var d = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    return c ? a.isFunction(c[b]) && "_" !== b.charAt(0) ? void c[b].apply(c, d) : void e("no such method '" + b + "' for swatchbook instance") : void e("cannot call methods on swatchbook prior to initialization; attempted to call method '" + b + "'")
                })
            } else this.each(function() {
                c ? c._init() : c = a.data(this, "swatchbook", new a.SwatchBook(b, this))
            });
            return c
        }
    }(jQuery, window), jQuery(document).ready(function(a) {
        function b(a) {
            var b = escape(window.location.hash.substr(1));
            if ("" !== a && "undefined" != typeof a && (b = a), "" != b) {
                var c = jQuery(".ult_acord ").find("#" + b),
                    d = (c.addClass("ult-tabto-actitleActive"), c.parents(".ult-tabto-accordion").data("activebg")),
                    e = c.parents(".ult-tabto-accordion").data("activetitle"),
                    f = c.find(".aio-icon").data("iconhover");
                c.css("background-color", d), c.css("color", e), c.find(".aio-icon").css("color", f), jQuery(".ult_acord ").find("#" + b).parents("dt").next("dd").removeClass("ult-tabto-accolapsed")
            }
        }
        a(".cq-accordion").each(function() {
            a(this), a(this).find("li").each(function() {
                a(this).find("i").css("margin-top", .5 * (a(this).outerHeight() - 9))
            })
        }), a(".ult-tabto-accordion").each(function() {
            a(this);
            var b = a(this).data("titlebg"),
                c = a(this).data("titlecolor"),
                d = a(this).data("titlehoverbg"),
                e = a(this).data("titlehovercolor"),
                f = a(this).data("activetitle"),
                g = a(this).data("activeicon"),
                h = a(this).data("scroll"),
                i = a(this).data("activebg");
            if ("" == g) var g = a(this).find(".aio-icon").data("iconhover");
            a(this).find(".ult-tabto-actitle").each(function() {
                var f = a(this).find(".aio-icon").data("iconcolor"),
                    g = a(this).find(".aio-icon").data("iconhover");
                a(this).css("background-color", b).on("mouseover", function() {
                    a(this).hasClass("ult-tabto-actitleActive") || (a(this).css({
                        "background-color": d,
                        color: e
                    }), a(this).find(".aio-icon").css({
                        color: g
                    }))
                }).on("mouseleave", function() {
                    a(this).hasClass("ult-tabto-actitleActive") || a(this).css({
                        "background-color": b,
                        color: c
                    });
                    var d = a(this).hasClass("ult-tabto-actitleActive");
                    1 == d || a(this).find(".aio-icon").css({
                        color: f
                    })
                })
            }), a(this).on("click", function(b) {
                var c;
                if (c = a(b.target).is("i") ? a(b.target).parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
                    var d = c.parent().next(),
                        e = c.parents(".ult-tabto-accordion").data("animation");
                    d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" cq-animateOut ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function() {
                        var a = jQuery(this).find(".aio-icon").data("iconcolor"),
                            b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
                            c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
                        jQuery(this).css({
                            background: b,
                            color: c
                        }), jQuery(this).find(".aio-icon").css({
                            color: a
                        })
                    }), c.css({
                        color: f,
                        "background-color": i
                    }), c.find(".aio-icon").css({
                        color: g
                    });
                    c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
                    "Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
                } else if (c = a(b.target).is("span.ult-span-text.ult_acordian-text") ? a(b.target).parent().parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
                    var d = c.parent().next(),
                        e = c.parents(".ult-tabto-accordion").data("animation");
                    d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function() {
                        var a = jQuery(this).find(".aio-icon").data("iconcolor"),
                            b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
                            c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
                        jQuery(this).css({
                            background: b,
                            color: c
                        }), jQuery(this).find(".aio-icon").css({
                            color: a
                        })
                    });
                    c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
                    c.css({
                        color: f,
                        "background-color": i
                    }), c.find(".aio-icon").css({
                        color: g
                    }), "Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
                } else if (c = a(b.target).is("i") ? a(b.target).parent().parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
                    var d = c.parent().next(),
                        e = c.parents(".ult-tabto-accordion").data("animation");
                    d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" cq-animateOut ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"),
                        d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function() {
                            var a = jQuery(this).find(".aio-icon").data("iconcolor"),
                                b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
                                c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
                            jQuery(this).css({
                                background: b,
                                color: c
                            }), jQuery(this).find(".aio-icon").css({
                                color: a
                            })
                        });
                    c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
                    c.css({
                        color: f,
                        "background-color": i
                    }), c.find(".aio-icon").css({
                        color: g
                    }), "Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
                } else if (c = a(b.target).is("i") ? a(b.target).parent().parent().parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
                    var d = c.parent().next(),
                        e = c.parents(".ult-tabto-accordion").data("animation");
                    d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" cq-animateOut ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function() {
                        var a = jQuery(this).find(".aio-icon").data("iconcolor"),
                            b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
                            c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
                        jQuery(this).css({
                            background: b,
                            color: c
                        }), jQuery(this).find(".aio-icon").css({
                            color: a
                        })
                    });
                    c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
                    c.css({
                        color: f,
                        "background-color": i
                    }), c.find(".aio-icon").css({
                        color: g
                    }), "Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
                }
                "on" == h && jQuery("html, body").animate({
                    scrollTop: a(this).offset().top - 100
                }, 1200)
            })
        }), b(), jQuery(".ult-tabto-accordion").each(function() {
            var a = jQuery(this).data("activeindex");
            if (a -= 1, a >= 1) {
                var c = jQuery(this).find("dl dt:nth(" + a + ")"),
                    d = c.find(".ult-tabto-actitle").attr("id");
                "" !== d && "undefined" != typeof d && b(d)
            }
        }), jQuery(this).find("a").click(function(a) {
            var c = jQuery(this).attr("href");
            if ("undefined" != typeof c && c.length > 0) {
                var d = jQuery(this).hasClass("ult-tabto-actitle"),
                    e = escape(c.substring(c.indexOf("#") + 1)),
                    f = jQuery("a.ult-tabto-actitle[href$='" + e + "']"),
                    g = f.attr("href"),
                    h = f.parents(".ult-tabto-accordion").data("titlecolor"),
                    i = f.parents(".ult-tabto-accordion").data("titlebg");
                "undefined" != typeof g && "" !== g && (g = g.replace("#", "")), f.parents(".ult-tabto-accordion").length > 0 && e == g && !d && (f.parents(".ult-tabto-accordion").find(".ult-tabto-actitle").each(function(a, b) {
                    var c = jQuery(this).attr("id");
                    if (g !== c) {
                        jQuery(this).parent().removeClass("current"), jQuery(this).removeClass("ult-tabto-actitleActive"), jQuery(this).css({
                            background: i,
                            color: h
                        });
                        var d = jQuery(this).find(".aio-icon").data("iconcolor");
                        jQuery(this).find(".ult_tab_icon").css({
                            color: d
                        }), jQuery(this).parents("dt").next("dd").addClass("ult-tabto-accolapsed")
                    }
                }), b(g))
            }
        }), jQuery(this).find("a.ult-tabto-actitle").click(function(a) {
            var b = jQuery(this).parents(".ult-tabto-accordion"),
                c = jQuery(this).attr("id");
            b.find(".ult-tabto-actitle").each(function(a, b) {
                var d = jQuery(this).attr("id");
                c !== d && jQuery(this).parents("dt").next("dd").addClass("ult-tabto-accolapsed")
            })
        })
    }), jQuery(document).ready(function(a) {
        a(".ult_tabs").each(function() {
            function b() {
                clearTimeout(q), o++, o > j - 1 && (o = 0), q = setTimeout(function() {
                    c.find("ul.ult_tabmenu li.ult_tab_li").each(function(b) {
                        o == b && a(this).find("a.ult_a").trigger("click")
                    })
                }, 1e3 * i)
            }
            var c = a(this),
                d = a(this).data("tabsstyle"),
                e = a(this).data("titlecolor"),
                f = a(this).data("titlebg"),
                g = a(this).data("titlehovercolor"),
                h = a(this).data("titlehoverbg"),
                i = parseInt(a(this).data("rotatetabs")),
                j = a(this).find("ul.ult_tabmenu li.ult_tab_li").length,
                k = a(this).data("activetitle"),
                l = a(this).data("activeicon"),
                m = a(this).data("activebg"),
                n = parseInt(a(this).find(".ult_tabcontent").outerWidth()),
                o = 0,
                p = [];
            p.push(0), a(this).find("ul.ult_tabmenu").addClass("active").find("> li.ult_tab_li:eq(0)").addClass("current"), a(this).find("ul.ult_tabmenu li.ult_tab_li").each(function(b) {
                var c = a(this).data("iconhover"),
                    i = a(this).data("iconcolor");
                "" == l && (l = c), 0 == b && ("style2" == d || "style1" == d ? (a(this).find("a.ult_a").css({
                    background: m,
                    color: k
                }), a(this).find(".ult_tab_icon").css({
                    color: l
                })) : (a(this).find("a.ult_a").css({
                    color: k
                }), a(this).css({
                    background: m,
                    color: k
                }), a(this).find(".ult_tab_icon").css({
                    color: k
                }))), a(this).on("mouseover", function() {
                    a(this).hasClass("current") || (a(this).hasClass("current") || "style2" == d || "style1" == d ? (a(this).find("a.ult_a").css({
                        background: h,
                        color: g
                    }), a(this).find(".ult_tab_icon").css({
                        color: c
                    })) : (a(this).find("a.ult_a").css({
                        color: g
                    }), a(this).css({
                        background: h,
                        color: g
                    }), a(this).find("a.ult_a").find(".ult_tab_icon").css({
                        color: c
                    })))
                }).on("mouseleave", function() {
                    a(this).hasClass("current") || ("style2" == d || "style1" == d ? (a(this).find("a.ult_a").css({
                        background: f,
                        color: e
                    }), a(this).find(".ult_tab_icon").css({
                        color: i
                    })) : (a(this).find("a.ult_a").css({
                        color: e
                    }), a(this).css({
                        background: f,
                        color: e
                    }), a(this).find("a.ult_a").find(".ult_tab_icon").css({
                        color: i
                    })))
                })
            }), a(this).find("ul.ult_tabmenu li a.ult_a").click(function(c) {
                var g = a(this).closest(".ult_tabs"),
                    h = a(this).closest("li.ult_tab_li").index(),
                    j = a(this).parent().data("iconcolor");
                a(this).parent().data("iconhover");
                p.push(h);
                var q = (p[p.length - 1], p[p.length - 2]),
                    r = a(this).closest(".ult_tabs").data("animation");
                g.find("ul.ult_tabmenu > li.ult_tab_li").removeClass("current"), "style2" == d || "style1" == d ? (g.find("ul.ult_tabmenu > li.ult_tab_li").find("a").css({
                    background: f,
                    color: e
                }), g.find("ul.ult_tabmenu > li.ult_tab_li").find(".ult_tab_icon").css({
                    color: j
                })) : (g.find("ul.ult_tabmenu > li.ult_tab_li").find("a.ult_a").css({
                    color: e
                }), g.find("ul.ult_tabmenu > li.ult_tab_li").css({
                    background: f,
                    color: e
                }));
                var s = a(this).closest("li.ult_tab_li").addClass("current");
                "Slide" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
                    background: m,
                    color: k
                }), s.find(".ult_tab_icon").css({
                    color: l
                })) : (s.find("a.ult_a").css({
                    color: k
                }), s.css({
                    background: m,
                    color: k
                })), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").stop().slideUp(500, function() {
                    i > 0 && b()
                }), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").stop().slideDown(500, function() {}), o = h, c.preventDefault()) : "Fade" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
                    background: m,
                    color: k
                }), s.find(".ult_tab_icon").css({
                    color: l
                })) : (s.find("a.ult_a").css({
                    color: k
                }), s.css({
                    background: m,
                    color: k
                })), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").fadeOut(100, function() {
                    i > 0 && b()
                }), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").fadeIn(1200), o = h, c.preventDefault()) : "Scale" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
                    background: m,
                    color: k
                }), s.find(".ult_tab_icon").css({
                    color: l
                })) : (s.find("a.ult_a").css({
                    color: k
                }), s.css({
                    background: m,
                    color: k
                })), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").fadeOut(100, function() {
                    i > 0 && b(), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").addClass("scaleTabname"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass("scaleTabname2")
                }), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").fadeIn(300, function() {
                    g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").removeClass("scaleTabname"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").addClass("scaleTabname2")
                }), o = h, c.preventDefault()) : "Slide-Zoom" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
                    background: m,
                    color: k
                }), s.find(".ult_tab_icon").css({
                    color: l
                })) : (s.find("a.ult_a").css({
                    color: k
                }), s.css({
                    background: m,
                    color: k
                })), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlide-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlide-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlideright-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlideright-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").fadeOut(200, function() {
                    g.find(".ult_tabcontent").find("div.ult_tab_min_contain").addClass("ult_owl-origin"), h < q ? (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").addClass("ult_owl-backSlide-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlide-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").addClass("ult_owl-backSlide-out")) : (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").addClass("ult_owl-backSlideright-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlideright-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").addClass("ult_owl-backSlideright-out")), i > 0 && b()
                }), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").fadeIn(1500, function() {
                    g.find(".ult_tabcontent").find("div.ult_tab_min_contain").removeClass("ult_owl-origin"), h < q ? (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").removeClass(" ult_owl-backSlide-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlide-out")) : (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").removeClass(" ult_owl-backSlideright-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlideright-out"))
                }), o = h, c.preventDefault()) : "Slide-Horizontal" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
                    background: m,
                    color: k
                }), s.find(".ult_tab_icon").css({
                    color: l
                })) : (s.find("a.ult_a").css({
                    color: k
                }), s.css({
                    background: m,
                    color: k
                })), j = g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").hasClass("ult_active_tabnme"), 0 == j ? (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").hide(10, function() {
                    jQuery(this).addClass("ult_active_tabnme"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass("ult_active_tabnme"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").hide(10), h > q ? jQuery(this).animate({
                        left: "-" + n + "px"
                    }, 10) : jQuery(this).animate({
                        left: "" + n + "px"
                    }, 10), i > 0 && b()
                }), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").show(100, function() {
                    jQuery(this).animate({
                        left: "0px"
                    }, 800)
                }), o = h, c.preventDefault()) : (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").animate({
                    opacity: 1
                }, 1, function() {
                    i > 0 && b()
                }), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").animate({
                    opacity: 1
                }, 1, function() {}), o = h, c.preventDefault())) : ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
                    background: m,
                    color: k
                }), s.find(".ult_tab_icon").css({
                    color: l
                })) : (s.find("a.ult_a").css({
                    color: k
                }), s.css({
                    background: m,
                    color: k
                })), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").hide(1, function() {
                    i > 0 && b()
                }), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").show(10), o = h, c.preventDefault())
            });
            var q = 0;
            i > 0 && b()
        })
    }), jQuery(document).ready(function(a) {
        a(this).find("ul.ult_tabmenu li a.ult_a").click(function(b) {
            a(document).trigger("ultAdvancedTabClicked", a(this)), jQuery("html,body").stop(), a(this).closest("li.ult_tab_li").siblings().each(function(b, c) {
                var d = a(this).data("iconcolor");
                a(this).find(".ult_tab_icon").css({
                    color: d
                })
            })
        }), a(document).on("ultAdvancedTabClicked", function(a, b) {
            "function" == typeof wpb_prepare_tab_content && wpb_prepare_tab_content(a, {
                newPanel: jQuery(".ult_tabcontent")
            })
        })
    }), jQuery(document).ready(function() {
        setmytime(), jQuery(this).find("a").click(function(a) {
            var b = jQuery(this).attr("href");
            if ("undefined" != typeof b && b.length > 0) {
                var c = escape(b.substring(b.indexOf("#") + 1)),
                    d = jQuery("a.ult_a[href$='" + c + "']"),
                    e = d.attr("href");
                "undefined" != typeof e && "" !== e && (e = e.replace("#", "")), d.parents(".ult_tabs").length > 0 && c == e && setmytime(e)
            }
        }), jQuery(".ult_tabs").each(function() {
            var a = jQuery(this).data("activeindex"),
                b = jQuery(this).find("ul.ult_tabmenu li.ult_tab_li:nth-child(" + a + ")").find(".ult_a").attr("id");
            b.length >= 1 && a > 1 && setmytime(b, !0)
        }), jQuery(this).find("ul.ult_tabmenu li a.ult_a").click(function(a) {
            var b = jQuery(this).closest(".ult_tabs").data("animation");
            if (j = jQuery(this).closest("li.ult_tab_li").index(), "Fade" == b) {
                var c = jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname:eq(" + j + ")").outerHeight();
                jQuery(this).closest(".ult_tabs").find(".ult_tabitemname").css({
                    position: "absolute",
                    left: "0",
                    right: "0"
                }), jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate({
                    height: c
                }, "slow")
            }
            if ("Slide-Horizontal" == b) {
                var c = jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname:eq(" + j + ")").outerHeight();
                jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").css({
                    overflow: "hidden"
                }), jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate({
                    height: c
                }, "slow")
            }
        })
    }), jQuery(document).ready(function() {
        jQuery(this).find("ul.ult_tabmenu li a.ult_a").click(function(a) {
            jQuery(".slick-slider").parents(".ult_tabitemname").length && setTimeout(function() {
                jQuery(".slick-slider").slick("setPosition"), jQuery(window).trigger("resize")
            }, 200)
        }), jQuery(".vc_toggle").parents(".ult_tabs") && jQuery(".vc_toggle").click(function() {
            jQuery(this).parents(".ult_tabitemname").height();
            jQuery(this).find(".vc_toggle_content").toggleClass("vc_toggle_for_tab"), jQuery(this).find(".vc_toggle_content").hasClass("vc_toggle_for_tab") ? setTimeout(function() {
                var a = jQuery(".ult_tabitemname").height();
                jQuery(".ult_tabcontent").animate({
                    height: a
                }, 100)
            }, 100) : setTimeout(function() {
                var a = jQuery(".vc_toggle").parents(".ult_tabitemname").height();
                jQuery(".ult_tabcontent").animate({
                    height: a
                }, 100)
            }, 200)
        })
    }), jQuery(document).ready(function() {
        function a() {
            jQuery(".ult-team-member-wrap").each(function(a) {
                var b = jQuery(this).data("responsive_width");
                "" != b && (jQuery(window).width() <= b ? (jQuery(this).removeClass("ult-style-2"), jQuery(this).addClass("ult-style-1 ult-responsive")) : jQuery(this).hasClass("ult-responsive") && (jQuery(this).removeClass("ult-style-1 ult-responsive"), jQuery(this).addClass("ult-style-2")))
            })
        }

        function b() {
            jQuery(".ult-team-member-wrap").each(function(a) {
                var b = jQuery(this).height(),
                    c = jQuery(this).find(".ult-team_description_slide"),
                    d = c;
                parseFloat(b) < parseFloat(d.height()) ? d.addClass("ult-desc-set-top") : d.hasClass("ult-desc-set-top") && d.removeClass("ult-desc-set-top")
            }), jQuery(".ult-style-3 .ult-team-member-image").each(function(a) {
                var b = jQuery(this).height(),
                    c = jQuery(this).find(".ult-team-member-description"),
                    d = c;
                parseFloat(b) < parseFloat(d.height()) ? d.addClass("ult-desc-set-top") : d.hasClass("ult-desc-set-top") && d.removeClass("ult-desc-set-top")
            })
        }
        jQuery(".ult-team.ult-social-icon").hover(function() {
            var a = (jQuery(this).data("iconcolor"), jQuery(this).data("iconhover"));
            "inherit" != a ? jQuery(this).css("color", a) : jQuery(this).css("color", "")
        }, function() {
            var a = jQuery(this).data("iconcolor");
            jQuery(this).data("iconhover");
            "inherit" != a ? jQuery(this).css("color", a) : jQuery(this).css("color", "")
        }), jQuery(".ult-style-2").hover(function() {
            var a = jQuery(this).find(" .ult-team-member-image").first(),
                b = a.data("hover_opacity");
            a.children("img").css("opacity", b)
        }, function() {
            var a = jQuery(this).find(" .ult-team-member-image").first(),
                b = a.data("opacity");
            a.children("img").css("opacity", b)
        }), jQuery(".ult-style-3").hover(function() {
            var a = jQuery(this).find(" .ult-team-member-image").first(),
                b = a.data("hover_opacity");
            a.find("img").css("opacity", b)
        }, function() {
            var a = jQuery(this).find(" .ult-team-member-image").first();
            a.find("img").css("opacity", 1)
        }), a(), setTimeout(b, 500), jQuery(".ult-team-member-wrap .ult-team-member-image img").load(function() {
            b()
        }), jQuery(window).resize(function() {
            a(), b()
        }), jQuery(".ult-team-member-image-overlay.ult-team_img_hover").each(function() {
            var a = jQuery(this).data("background_clr");
            jQuery(this).css({
                "background-color": a
            })
        })
    }), + function(a) {
        "use strict";
        var b = function(a, b) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("bsf_tooltip", a, b)
        };
        b.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="bsf_tooltip"><div class="bsf_tooltip-arrow"></div><div class="bsf_tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, b.prototype.init = function(b, c, d) {
            this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
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
        }, b.prototype.getDefaults = function() {
            return b.DEFAULTS
        }, b.prototype.getOptions = function(b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        }, b.prototype.getDelegateOptions = function() {
            var b = {},
                c = this.getDefaults();
            return this._options && a.each(this._options, function(a, d) {
                c[a] != d && (b[a] = d)
            }), b
        }, b.prototype.enter = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)) : c.show()
        }, b.prototype.leave = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) : c.hide()
        }, b.prototype.show = function() {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(b), b.isDefaultPrevented()) return;
                var c = this,
                    d = this.tip();
                this.setContent(), this.options.animation && d.addClass("fade");
                var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                    f = /\s?auto?\s?/i,
                    g = f.test(e);
                g && (e = e.replace(f, "") || "top"), d.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
                var h = this.getPosition(),
                    i = d[0].offsetWidth,
                    j = d[0].offsetHeight;
                if (g) {
                    var k = this.$element.parent(),
                        l = e,
                        m = document.documentElement.scrollTop || document.body.scrollTop,
                        n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
                        o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
                        p = "body" == this.options.container ? 0 : k.offset().left;
                    e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
                }
                var q = this.getCalculatedOffset(e, h, i, j);
                this.applyPlacement(q, e), this.hoverState = null;
                var r = function() {
                    c.$element.trigger("shown.bs." + c.type)
                };
                a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
            }
        }, b.prototype.applyPlacement = function(b, c) {
            var d, e = this.tip(),
                f = e[0].offsetWidth,
                g = e[0].offsetHeight,
                h = parseInt(e.css("margin-top"), 10),
                i = parseInt(e.css("margin-left"), 10);
            isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
                using: function(a) {
                    e.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    })
                }
            }, b), 0), e.addClass("in");
            var j = e[0].offsetWidth,
                k = e[0].offsetHeight;
            if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
                var l = 0;
                b.left < 0 && (l = b.left * -2, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
            } else this.replaceArrow(k - g, k, "top");
            d && e.offset(b)
        }, b.prototype.replaceArrow = function(a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
        }, b.prototype.setContent = function() {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".bsf_tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        }, b.prototype.hide = function() {
            function b() {
                "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
            }
            var c = this,
                d = this.tip(),
                e = a.Event("hide.bs." + this.type);
            if (this.$element.trigger(e), !e.isDefaultPrevented()) return d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this
        }, b.prototype.fixTitle = function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        }, b.prototype.hasContent = function() {
            return this.getTitle()
        }, b.prototype.getPosition = function() {
            var b = this.$element[0];
            return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                width: b.offsetWidth,
                height: b.offsetHeight
            }, this.$element.offset())
        }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
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
        }, b.prototype.getTitle = function() {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        }, b.prototype.tip = function() {
            return this.$tip = this.$tip || a(this.options.template)
        }, b.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".bsf_tooltip-arrow")
        }, b.prototype.validate = function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, b.prototype.enable = function() {
            this.enabled = !0
        }, b.prototype.disable = function() {
            this.enabled = !1
        }, b.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, b.prototype.toggle = function(b) {
            var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
            c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
        }, b.prototype.destroy = function() {
            clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
        };
        var c = a.fn.bsf_tooltip;
        a.fn.bsf_tooltip = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.bsf_tooltip"),
                    f = "object" == typeof c && c;
                (e || "destroy" != c) && (e || d.data("bs.bsf_tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
            })
        }, a.fn.bsf_tooltip.Constructor = b, a.fn.bsf_tooltip.noConflict = function() {
            return a.fn.bsf_tooltip = c, this
        }
    }(jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.el = a(b), this.options = a.extend({}, a.fn.typed.defaults, c), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
        };
        b.prototype = {
            constructor: b,
            init: function() {
                var a = this;
                a.timeout = setTimeout(function() {
                    for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b;
                    a.shuffle && (a.sequence = a.shuffleArray(a.sequence)), a.typewrite(a.strings[a.sequence[a.arrayPos]], a.strPos)
                }, a.startDelay)
            },
            build: function() {
                var b = this;
                if (this.showCursor === !0 && (this.cursor = a('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                    this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                    var c = this.stringsElement.children();
                    a.each(c, function(c, d) {
                        b.strings.push(a(d).html())
                    })
                }
                this.init()
            },
            typewrite: function(a, b) {
                if (this.stop !== !0) {
                    var c = Math.round(70 * Math.random()) + this.typeSpeed,
                        d = this;
                    d.timeout = setTimeout(function() {
                        var c = 0,
                            e = a.substr(b);
                        if ("^" === e.charAt(0)) {
                            var f = 1;
                            /^\^\d+/.test(e) && (e = /\d+/.exec(e)[0], f += e.length, c = parseInt(e)), a = a.substring(0, b) + a.substring(b + f)
                        }
                        if ("html" === d.contentType) {
                            var g = a.substr(b).charAt(0);
                            if ("<" === g || "&" === g) {
                                var h = "",
                                    i = "";
                                for (i = "<" === g ? ">" : ";"; a.substr(b + 1).charAt(0) !== i && (h += a.substr(b).charAt(0), b++, !(b + 1 > a.length)););
                                b++, h += i
                            }
                        }
                        d.timeout = setTimeout(function() {
                            if (b === a.length) {
                                if (d.options.onStringTyped(d.arrayPos), d.arrayPos === d.strings.length - 1 && (d.options.callback(), d.curLoop++, d.loop === !1 || d.curLoop === d.loopCount)) return;
                                d.timeout = setTimeout(function() {
                                    d.backspace(a, b)
                                }, d.backDelay)
                            } else {
                                0 === b && d.options.preStringTyped(d.arrayPos);
                                var c = a.substr(0, b + 1);
                                d.attr ? d.el.attr(d.attr, c) : d.isInput ? d.el.val(c) : "html" === d.contentType ? d.el.html(c) : d.el.text(c), b++, d.typewrite(a, b)
                            }
                        }, c)
                    }, c)
                }
            },
            backspace: function(a, b) {
                if (this.stop !== !0) {
                    var c = Math.round(70 * Math.random()) + this.backSpeed,
                        d = this;
                    d.timeout = setTimeout(function() {
                        if ("html" === d.contentType && ">" === a.substr(b).charAt(0)) {
                            for (var c = "";
                                "<" !== a.substr(b - 1).charAt(0) && (c -= a.substr(b).charAt(0), b--, !(b < 0)););
                            b--, c += "<"
                        }
                        var e = a.substr(0, b);
                        d.attr ? d.el.attr(d.attr, e) : d.isInput ? d.el.val(e) : "html" === d.contentType ? d.el.html(e) : d.el.text(e), b > d.stopNum ? (b--, d.backspace(a, b)) : b <= d.stopNum && (d.arrayPos++, d.arrayPos === d.strings.length ? (d.arrayPos = 0, d.shuffle && (d.sequence = d.shuffleArray(d.sequence)), d.init()) : d.typewrite(d.strings[d.sequence[d.arrayPos]], b))
                    }, c)
                }
            },
            shuffleArray: function(a) {
                var b, c, d = a.length;
                if (d)
                    for (; --d;) c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
                return a
            },
            reset: function() {
                var a = this;
                clearInterval(a.timeout);
                this.el.attr("id");
                this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
            }
        }, a.fn.typed = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("typed"),
                    f = "object" == typeof c && c;
                e && e.reset(), d.data("typed", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.typed.defaults = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            shuffle: !1,
            backDelay: 500,
            loop: !1,
            loopCount: !1,
            showCursor: !0,
            cursorChar: "|",
            attr: null,
            contentType: "html",
            callback: function() {},
            preStringTyped: function() {},
            onStringTyped: function() {},
            resetCallback: function() {}
        }
    }(window.jQuery), jQuery(document).ready(function(a) {
        var b = "",
            c = "",
            d = "",
            e = "",
            f = "",
            g = "";
        jQuery(".ult-responsive").each(function(h, i) {
            var j = jQuery(this),
                k = j.attr("data-responsive-json-new"),
                l = j.data("ultimate-target"),
                m = "",
                n = "",
                o = "",
                p = "",
                q = "",
                r = "";
            "undefined" == typeof k && null == k || a.each(a.parseJSON(k), function(a, b) {
                var c = a;
                if ("undefined" != typeof b && null != b) {
                    var d = b.split(";");
                    jQuery.each(d, function(a, b) {
                        if ("undefined" != typeof b || null != b) {
                            var d = b.split(":");
                            switch (d[0]) {
                                case "large_screen":
                                    m += c + ":" + d[1] + ";";
                                    break;
                                case "desktop":
                                    n += c + ":" + d[1] + ";";
                                    break;
                                case "tablet":
                                    o += c + ":" + d[1] + ";";
                                    break;
                                case "tablet_portrait":
                                    p += c + ":" + d[1] + ";";
                                    break;
                                case "mobile_landscape":
                                    q += c + ":" + d[1] + ";";
                                    break;
                                case "mobile":
                                    r += c + ":" + d[1] + ";"
                            }
                        }
                    })
                }
            }), "" != r && (g += l + "{" + r + "}"), "" != q && (f += l + "{" + q + "}"), "" != p && (e += l + "{" + p + "}"), "" != o && (d += l + "{" + o + "}"), "" != n && (c += l + "{" + n + "}"), "" != m && (b += l + "{" + m + "}")
        });
        var h = "<style>/** Ultimate: Media Responsive **/ ";
        h += c, h += "@media (max-width: 1199px) { " + d + "}", h += "@media (max-width: 991px)  { " + e + "}", h += "@media (max-width: 767px)  { " + f + "}", h += "@media (max-width: 479px)  { " + g + "}", h += "/** Ultimate: Media Responsive - **/</style>", jQuery("head").append(h)
    }),
    function(a) {
        a(document).ready(function() {
            var b = "";
            a(".ult-video-banner").each(function(c, d) {
                var e = a(d).attr("id"),
                    f = a(d).data("current-time"),
                    g = (a(d).data("placeholder"), 0);
                a(d).find("video").get(0).addEventListener("canplay", function() {
                    return !(g >= 1) && (a(d).find("video").get(0).currentTime = f, a(d).find("video").get(0).pause(), void g++)
                });
                var h = a(d).find(".ult-video-banner-overlay").data("overlay"),
                    i = a(d).find(".ult-video-banner-overlay").data("overlay-hover");
                "" != h && (b += "#" + e + " .ult-video-banner-overlay { background:" + h + " }"), "" != i && (b += "#" + e + ".ult-vb-touch-start .ult-video-banner-overlay { background:" + i + " }")
            }), "" != b && a("head").append("<style>" + b + "</style>"), a(document).on("mouseover", ".ult-video-banner", function() {
                a(this).addClass("ult-vb-touch-start"), a(this).find("video").get(0).play()
            }), a(document).on("mouseout", ".ult-video-banner", function() {
                a(this).removeClass("ult-vb-touch-start"), a(this).find("video").get(0).pause()
            }), a(document).on("touchstart", ".ult-video-banner", function() {
                return a(this).hasClass("ult-vb-touch-start") ? (a(this).removeClass("ult-vb-touch-start"), a(this).find("video").get(0).pause(), !1) : (a(this).addClass("ult-vb-touch-start"), void a(this).find("video").get(0).play())
            })
        })
    }(jQuery),
    function(a) {
        var b, c, d;
        return b = {
            speed: 700,
            pause: 4e3,
            showItems: 1,
            mousePause: !0,
            height: 0,
            animate: !0,
            margin: 0,
            padding: 0,
            startPaused: !1,
            autoAppend: !0
        }, c = {
            moveUp: function(a, b) {
                return c.showNextItem(a, b, "up")
            },
            moveDown: function(a, b) {
                return c.showNextItem(a, b, "down")
            },
            nextItemState: function(a, b) {
                var c, d;
                return d = a.element.children("ul"), c = a.itemHeight, a.options.height > 0 && (c = d.children("li:first").height()), c += a.options.margin + 2 * a.options.padding, {
                    height: c,
                    options: a.options,
                    el: a.element,
                    obj: d,
                    selector: "up" === b ? "li:first" : "li:last",
                    dir: b
                }
            },
            showNextItem: function(a, b, d) {
                var e, f;
                return f = c.nextItemState(a, d), f.el.trigger("vticker.beforeTick"), e = f.obj.children(f.selector).clone(!0), "down" === f.dir && f.obj.css("top", "-" + f.height + "px").prepend(e), b && b.animate ? a.animating || c.animateNextItem(f, a) : c.nonAnimatedNextItem(f), "up" === f.dir && a.options.autoAppend && e.appendTo(f.obj), f.el.trigger("vticker.afterTick")
            },
            animateNextItem: function(b, c) {
                var d;
                return c.animating = !0, d = "up" === b.dir ? {
                    top: "-=" + b.height + "px"
                } : {
                    top: 0
                }, b.obj.animate(d, c.options.speed, function() {
                    return a(b.obj).children(b.selector).remove(), a(b.obj).css("top", "0px"), c.animating = !1
                })
            },
            nonAnimatedNextItem: function(a) {
                return a.obj.children(a.selector).remove(), a.obj.css("top", "0px")
            },
            nextUsePause: function() {
                var b, e;
                if (e = a(this).data("state"), b = e.options, !e.isPaused && !c.hasSingleItem(e)) return d.next.call(this, {
                    animate: b.animate
                })
            },
            startInterval: function() {
                var b, d;
                return d = a(this).data("state"), b = d.options, d.intervalId = setInterval(function(a) {
                    return function() {
                        return c.nextUsePause.call(a)
                    }
                }(this), b.pause)
            },
            stopInterval: function() {
                var b;
                if (b = a(this).data("state")) return b.intervalId && clearInterval(b.intervalId), b.intervalId = void 0
            },
            restartInterval: function() {
                return c.stopInterval.call(this), c.startInterval.call(this)
            },
            getState: function(b, c) {
                var d;
                if (!(d = a(c).data("state"))) throw new Error("vTicker: No state available from " + b);
                return d
            },
            isAnimatingOrSingleItem: function(a) {
                return a.animating || this.hasSingleItem(a)
            },
            hasMultipleItems: function(a) {
                return a.itemCount > 1
            },
            hasSingleItem: function(a) {
                return !c.hasMultipleItems(a)
            },
            bindMousePausing: function(a) {
                return function(a, b) {
                    return a.bind("mouseenter", function() {
                        if (!b.isPaused) return b.pausedByCode = !0, c.stopInterval.call(this), d.pause.call(this, !0)
                    }).bind("mouseleave", function() {
                        if (!b.isPaused || b.pausedByCode) return b.pausedByCode = !1, d.pause.call(this, !1), c.startInterval.call(this)
                    })
                }
            }(this),
            setItemLayout: function(b, c, d) {
                var e;
                return b.css({
                    overflow: "hidden",
                    position: "relative"
                }).children("ul").css({
                    position: "absolute",
                    margin: 0,
                    padding: 0
                }).children("li").css({
                    margin: d.margin,
                    padding: d.padding
                }), isNaN(d.height) || 0 === d.height ? (b.children("ul").children("li").each(function() {
                    if (a(this).height() > c.itemHeight) return c.itemHeight = a(this).height()
                }), b.children("ul").children("li").each(function() {
                    return a(this).height(c.itemHeight)
                }), e = d.margin + 2 * d.padding, b.height((c.itemHeight + e) * d.showItems + d.margin)) : b.height(d.height)
            },
            defaultStateAttribs: function(a, b) {
                return {
                    itemCount: a.children("ul").children("li").length,
                    itemHeight: 0,
                    itemMargin: 0,
                    element: a,
                    animating: !1,
                    options: b,
                    isPaused: b.startPaused,
                    pausedByCode: !1
                }
            }
        }, d = {
            init: function(e) {
                var f, g, h;
                if ((h = a(this).data("state")) && d.stop.call(this), h = null, f = jQuery.extend({}, b), e = a.extend(f, e), g = a(this), h = c.defaultStateAttribs(g, e), a(this).data("state", h), c.setItemLayout(g, h, e), e.startPaused || c.startInterval.call(this), e.mousePause) return c.bindMousePausing(g, h)
            },
            pause: function(b) {
                var d, e;
                return e = c.getState("pause", this), !!c.hasMultipleItems(e) && (e.isPaused = b, d = e.element, b ? (a(this).addClass("paused"), d.trigger("vticker.pause")) : (a(this).removeClass("paused"), d.trigger("vticker.resume")))
            },
            next: function(a) {
                var b;
                return b = c.getState("next", this), !c.isAnimatingOrSingleItem(b) && (c.restartInterval.call(this), c.moveUp(b, a))
            },
            prev: function(a) {
                var b;
                return b = c.getState("prev", this), !c.isAnimatingOrSingleItem(b) && (c.restartInterval.call(this), c.moveDown(b, a))
            },
            stop: function() {
                var a;
                return a = c.getState("stop", this), c.stopInterval.call(this)
            },
            remove: function() {
                var a, b;
                return b = c.getState("remove", this), c.stopInterval.call(this), a = b.element, a.unbind(), a.remove()
            }
        }, a.fn.vTicker = function(b) {
            return d[b] ? d[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? a.error("Method " + b + " does not exist on jQuery.vTicker") : d.init.apply(this, arguments)
        }
    }(jQuery);