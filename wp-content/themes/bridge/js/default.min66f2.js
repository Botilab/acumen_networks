function getScrollAmountForStickyHeader() {
    return "undefined" != typeof page_scroll_amount_for_sticky ? amount = page_scroll_amount_for_sticky : $j(".carousel.full_screen").length ? amount = $j(".carousel").height() : amount = scroll_amount_for_sticky, amount
}
function headerSize(a) {
    "use strict";
    if ($j("header.page_header").hasClass("scroll_top") && $j("header.page_header").hasClass("has_top") && ($j("header.page_header").hasClass("fixed") || $j("header.page_header").hasClass("fixed_hiding")) && (a >= 0 && 34 >= a ? ($j("header.page_header").css("top", -a), $j("header.page_header").css("margin-top", 0), $j(".header_top").show()) : a > 34 && ($j("header.page_header").css("top", "-34px"), $j("header.page_header").css("margin-top", 34), $j(".header_top").hide())), sticky_amount = getScrollAmountForStickyHeader(), $j("header").hasClass("regular") && (header_height - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(header_height - 10), $j(".q_logo a img").css("height", "100%")), $j("header.page_header").hasClass("fixed") && ($top_header_height = $j("header.page_header").hasClass("scroll_top") ? 34 : 0, header_height - a + $top_header_height >= min_header_height_scroll && a >= $top_header_height ? ($j("header.page_header").removeClass("scrolled"), $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height - a + $top_header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height - a + $top_header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height - a + $top_header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height - a + $top_header_height + "px"), header_height - logo_height > 0 ? $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - a + $top_header_height - 10 + "px")) : $top_header_height > a ? ($j("header.page_header").removeClass("scrolled"), $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height + "px"), header_height - logo_height > 0 ? $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - 10 + "px")) : header_height - a + $top_header_height < min_header_height_scroll && ($j("header.page_header").addClass("scrolled"), $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", min_header_height_scroll + "px"), $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", min_header_height_scroll + "px"), $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", min_header_height_scroll + "px"), $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", min_header_height_scroll + "px"), min_header_height_scroll - logo_height > 0 ? $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", min_header_height_scroll - 10 + "px")), $j("header.page_header").hasClass("centered_logo") && $j("header.page_header").hasClass("centered_logo_animate") ? header_height - a + $top_header_height < logo_height && header_height - a + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && a >= $top_header_height ? $j(".q_logo a").height(header_height - a + $top_header_height - 10) : header_height - a + $top_header_height < logo_height && header_height - a + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && $top_header_height > a ? $j(".q_logo a").height(header_height - 10) : header_height - a + $top_header_height < logo_height && header_height - a + $top_header_height < min_header_height_scroll && logo_height > min_header_height_scroll - 10 ? $j(".q_logo a").height(min_header_height_scroll - 10) : header_height - a + $top_header_height < logo_height && header_height - a + $top_header_height < min_header_height_scroll && logo_height < min_header_height_scroll - 10 ? $j(".q_logo a").height(logo_height) : a + $top_header_height === 0 && logo_height > header_height - 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(logo_height) : $j("header.page_header").hasClass("centered_logo") ? ($j(".q_logo a").height(logo_height), $j(".q_logo img").height("auto")) : $j(".q_logo img").height("100%"), setLeftPostionedMenuPadding()), $j("header.page_header").hasClass("fixed_hiding") && (a < scroll_amount_for_fixed_hiding ? $j("header.page_header").removeClass("scrolled") : $j("header.page_header").addClass("scrolled"), $j(".q_logo a").height(logo_height / 2), $j(".q_logo img").height("100%")), $j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu")) {
        if (a > sticky_amount) {
            if (!$j("header.page_header").hasClass("sticky")) {
                $top_header_height = $j("header.page_header").hasClass("has_top") ? 34 : 0;
                var b = $j("header.page_header").hasClass("centered_logo") ? $j("header.page_header").height() : header_height + $top_header_height;
                $j("header.page_header").hasClass("menu_bottom") && (b = header_height + 60), $j("header.page_header").addClass("sticky"), $j(".content").css("padding-top", b), window.clearTimeout(sticky_animate), sticky_animate = window.setTimeout(function () {
                    $j("header.page_header").addClass("sticky_animate")
                }, 100), min_header_height_sticky - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(min_header_height_sticky - 10), $j("header.page_header").hasClass("menu_bottom") && initDropDownMenu()
            }
            min_header_height_sticky - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(min_header_height_sticky - 10)
        } else $j("header.page_header").hasClass("sticky") && ($j("header").removeClass("sticky_animate"), $j("header").removeClass("sticky"), $j(".content").css("padding-top", "0px"), $j("header.page_header").hasClass("menu_bottom") && initDropDownMenu()), setMargingsForLeftAndRightMenu(), $j("header.page_header").hasClass("centered_logo") ? ($j(".q_logo a").height(logo_height), $j(".q_logo img").height("auto")) : header_height - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(header_height - 10), $j(".q_logo a img").css("height", "100%");
        setLeftPostionedMenuPadding()
    }
}
function setMargingsForLeftAndRightMenu() {
    "use strict";
    if ($j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("header.page_header").hasClass("left_right_margin_set")) {
        var a = $j(".q_logo a img").width() / 2;
        0 == $scroll && 0 != a && $j("header.page_header").addClass("left_right_margin_set"), $j(".logo_wrapper").width(2 * a), $j("nav.main_menu.left_side > ul > li:last-child").css("margin-right", a), $j("nav.main_menu.right_side > ul > li:first-child").css("margin-left", a), $j(".rtl nav.main_menu.left_side > ul > li:first-child").css("margin-right", a), $j(".rtl nav.main_menu.left_side > ul > li:last-child").css("margin-right", 0), $j(".rtl nav.main_menu.right_side > ul > li:last-child").css("margin-left", a), $j(".rtl nav.main_menu.right_side > ul > li:first-child").css("margin-left", 0)
    }
}
function setLeftPostionedMenuPadding() {
    "use strict";
    var a = $j("header:not(.centered_logo) nav.main_menu");
    if (a.length && a.hasClass("left")) {
        var b = $j(".q_logo a img").filter(function () {
            return "1" == $j(this).css("opacity")
        });
        a.css("left", b.width())
    }
}
function logoSizeOnSmallScreens() {
    "use strict";
    logo_height > 80 ? $j(".q_logo a").height(80) : $j(".q_logo a").height(logo_height), $j(".q_logo a img").css("height", "100%"), $j("header.page_header").removeClass("sticky_animate sticky"), $j(".content").css("padding-top", "0px")
}
function contentMinHeight() {
    "use strict";
    if ($j("header .header_bottom").length || $j("header .bottom_header").length) {
        if ($j("header .header_bottom").length)var a = $j("header .header_bottom").css("background-color");
        if ($j("header .bottom_header").length)var a = $j("header .bottom_header").css("background-color");
        var b = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).split(/,\s*/)[3], c = void 0 != b || $j("header.page_header").hasClass("transparent") ? 0 : $j("header.page_header").height();
        $j("body .content").css("min-height", $window_height - c - $j("footer:not(.uncover)").height())
    }
}
function contentMinHeightWithPaspartu() {
    "use strict";
    if ($j(".paspartu_enabled").length) {
        var a, b = 0, c = $window_width * paspartu_width, d = $j("footer").height();
        if ($j(".disable_footer").length && (d = 0), $j(".vertical_menu_enabled").length ? $j(".paspartu_top").length && $j(".paspartu_middle_inner").length && (b += c) : $j(".paspartu_top").length && (b += c), !$j(".paspartu_bottom").length && $j(".disable_bottom_paspartu").length || (b += c), $j(".vertical_menu_enabled").length) a = $window_height - b - d; else {
            if ($j("header .header_bottom").length)var e = $j("header .header_bottom").css("background-color");
            if ($j("header .bottom_header").length)var e = $j("header .bottom_header").css("background-color");
            var f = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")")).split(/,\s*/)[3], g = void 0 != f || $j("header.page_header").hasClass("transparent") ? 0 : $j("header.page_header").height();
            a = $window_height - g - b - d
        }
        $j(".content").length && $j(".content").css("min-height", a)
    }
}
function initQodeSlider() {
    "use strict";
    var a = /url\(["']?([^'")]+)['"]?\)/;
    if (default_header_style = "", $j("header.page_header").hasClass("light") && (default_header_style = "light"), $j("header.page_header").hasClass("dark") && (default_header_style = "dark"), $j(".carousel").length) {
        var b = {
            zoom_center: "1.2, 0, 0, 1.2, 0, 0",
            zoom_top_left: "1.2, 0, 0, 1.2, -150, -150",
            zoom_top_right: "1.2, 0, 0, 1.2, 150, -150",
            zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150",
            zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150"
        };
        !function (a) {
            var b = /\([0-9epx\.\, \t\-]+/gi, c = function (a) {
                return a.match(b)[0].substr(1).split(",").map(function (a) {
                    return parseFloat(a)
                })
            }, d = ["transform", "-webkit-transform"], e = function (a) {
                var b = null;
                return d.some(function (c) {
                    return b = a.css(c), null !== b && "" !== b
                }), b = b && "none" !== b ? b : "matrix(1,0,0,1,0,0)", c(b)
            }, f = function (a, b) {
                for (var c = "matrix(" + b.join(",") + ")", e = d.length - 1; e >= 0; --e)a.css(d[e], c + " rotate(0.01deg)")
            }, g = function (a, b, c) {
                return a + (b - a) * (c / 100)
            };
            a.fn.transformAnimate = function (b) {
                var d = {transform: "matrix(1,0,0,1,0,0)"};
                a.extend(d, b), this.css("percentAnim", 0);
                var h = e(this), i = c(d.transform);
                return d.step = function (c, d) {
                    var e = a(this), j = h.map(function (a, b) {
                        return g(a, i[b], c)
                    });
                    f(e, j), b.step && b.step.apply(this, [j, d])
                }, this.stop().animate({percentAnim: 100}, d)
            }
        }(jQuery), $j(".carousel").each(function () {
            function c(a, b) {
                var c = b;
                a.hasClass("advanced_responsiveness") ? $window_width > t[0] ? c = b : $window_width > t[1] ? c = .75 * b : $window_width > t[2] ? c = .6 * b : $window_width > t[3] ? c = .55 * b : $window_width <= t[3] && (c = .45 * b) : $window_width > t[0] ? c = b : $window_width > t[1] ? c = .8 * b : $window_width > t[2] ? c = .7 * b : $window_width <= t[2] && (c = 1 * b), a.css({height: c + "px"}), a.find(".qode_slider_preloader").css({height: c + "px"}), a.find(".qode_slider_preloader .ajax_loader").css({display: "block"}), a.find(".item").css({height: c + "px"})
            }

            function d(a) {
                p.css({height: a + "px"}), p.find(".qode_slider_preloader").css({height: a + "px"}), p.find(".qode_slider_preloader .ajax_loader").css({display: "block"}), p.find(".item").css({height: a + "px"})
            }

            function e(a, b) {
                window["slider_graphic_width_" + b] = [], window["slider_graphic_height_" + b] = [], window["slider_svg_width_" + b] = [], window["slider_svg_height_" + b] = [], window["slider_title_" + b] = [], window["slider_subtitle_" + b] = [], window["slider_text_" + b] = [], window["slider_button1_" + b] = [], window["slider_button2_" + b] = [], window["slider_separator_" + b] = [], window["slider_graphic_width_" + b].push(parseFloat(a.find(".thumb img").data("width"))), window["slider_graphic_height_" + b].push(parseFloat(a.find(".thumb img").data("height"))), window["slider_svg_width_" + b].push(parseFloat(a.find(".qode_slide-svg-holder svg").attr("width"))), window["slider_svg_height_" + b].push(parseFloat(a.find(".qode_slide-svg-holder svg").attr("height"))), window["slider_title_" + b].push(parseFloat(a.find(".q_slide_title").css("font-size"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".q_slide_subtitle").css("font-size"))), window["slider_text_" + b].push(parseFloat(a.find(".q_slide_text").css("font-size"))), window["slider_button1_" + b].push(parseFloat(a.find(".qbutton:eq(0)").css("font-size"))), window["slider_button2_" + b].push(parseFloat(a.find(".qbutton:eq(1)").css("font-size"))), window["slider_title_" + b].push(parseFloat(a.find(".q_slide_title").css("line-height"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".q_slide_subtitle").css("line-height"))), window["slider_text_" + b].push(parseFloat(a.find(".q_slide_text").css("line-height"))), window["slider_button1_" + b].push(parseFloat(a.find(".qbutton:eq(0)").css("line-height"))), window["slider_button2_" + b].push(parseFloat(a.find(".qbutton:eq(1)").css("line-height"))), window["slider_title_" + b].push(parseFloat(a.find(".q_slide_title").css("letter-spacing"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".q_slide_subtitle").css("letter-spacing"))), window["slider_text_" + b].push(parseFloat(a.find(".q_slide_text").css("letter-spacing"))), window["slider_button1_" + b].push(parseFloat(a.find(".qbutton:eq(0)").css("letter-spacing"))), window["slider_button2_" + b].push(parseFloat(a.find(".qbutton:eq(1)").css("letter-spacing"))), window["slider_title_" + b].push(parseFloat(a.find(".q_slide_title").css("margin-bottom"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".q_slide_subtitle").css("margin-bottom"))), window["slider_button1_" + b].push(parseFloat(a.find(".qbutton:eq(0)").css("height"))), window["slider_button2_" + b].push(parseFloat(a.find(".qbutton:eq(1)").css("height"))), 0 != parseFloat(a.find(".qbutton:eq(0)").css("width")) ? window["slider_button1_" + b].push(parseFloat(a.find(".qbutton:eq(0)").css("width"))) : window["slider_button1_" + b].push(0), 0 != parseFloat(a.find(".qbutton:eq(1)").css("width")) ? window["slider_button2_" + b].push(parseFloat(a.find(".qbutton:eq(1)").css("width"))) : window["slider_button2_" + b].push(0), window["slider_button1_" + b].push(parseFloat(a.find(".qbutton:eq(0)").css("padding-left"))), window["slider_button1_" + b].push(parseFloat(a.find(".qbutton:eq(0)").css("padding-right"))), window["slider_button2_" + b].push(parseFloat(a.find(".qbutton:eq(1)").css("padding-left"))), window["slider_button2_" + b].push(parseFloat(a.find(".qbutton:eq(1)").css("padding-right"))), window["slider_separator_" + b].push(parseFloat(a.find(".separator").css("margin-top"))), window["slider_separator_" + b].push(parseFloat(a.find(".separator").css("margin-bottom")))
            }

            function f(a, b) {
                $window_width > t[0] ? (k = u[0], l = v[0], m = w[0], n = x[0], o = y[0]) : $window_width > t[1] ? (k = u[1], l = v[1], m = w[1], n = x[1], o = y[1]) : $window_width > t[2] ? (k = u[2], l = v[2], m = w[2], n = x[2], o = y[2]) : $window_width > t[3] ? (k = u[3], l = v[3], m = w[3], n = x[3], o = y[3]) : $window_width > t[4] ? (k = u[4], l = v[4], m = w[4], n = x[4], o = y[4]) : $window_width > t[5] ? (k = u[5], l = v[5], m = w[5], n = x[5], o = y[5]) : (k = u[6], l = v[6], m = w[6], n = x[6], o = y[6]);
                var c = l, d = m, e = n;
                $window_width <= t[0] && (c = l / 2, d = m / 2, e = n / 2), a.find(".thumb").css({width: Math.round(window["slider_graphic_width_" + b][0] * k) + "px"}).css({height: Math.round(window["slider_graphic_height_" + b][0] * k) + "px"}), a.find(".qode_slide-svg-holder svg").css({width: Math.round(window["slider_svg_width_" + b][0] * k) + "px"}).css({height: Math.round(window["slider_svg_height_" + b][0] * k) + "px"}), a.find(".q_slide_title").css({"font-size": Math.round(window["slider_title_" + b][0] * l) + "px"}), a.find(".q_slide_title").css({"line-height": Math.round(window["slider_title_" + b][1] * l) + "px"}), a.find(".q_slide_title").css({"letter-spacing": Math.round(window["slider_title_" + b][2] * c) + "px"}), a.find(".q_slide_title").css({"margin-bottom": Math.round(window["slider_title_" + b][3] * l) + "px"}), a.find(".q_slide_subtitle").css({"font-size": Math.round(window["slider_subtitle_" + b][0] * m) + "px"}), a.find(".q_slide_subtitle").css({"line-height": Math.round(window["slider_subtitle_" + b][1] * m) + "px"}), a.find(".q_slide_subtitle").css({"letter-spacing": Math.round(window["slider_subtitle_" + b][2] * d) + "px"}), a.find(".q_slide_subtitle").css({"margin-bottom": Math.round(window["slider_subtitle_" + b][3] * m) + "px"}), a.find(".q_slide_text").css({"font-size": Math.round(window["slider_text_" + b][0] * n) + "px"}), a.find(".q_slide_text").css({"line-height": Math.round(window["slider_text_" + b][1] * n) + "px"}), a.find(".q_slide_text").css({"letter-spacing": Math.round(window["slider_text_" + b][2] * e) + "px"}), a.find(".qbutton:eq(0)").css({"font-size": Math.round(window["slider_button1_" + b][0] * o) + "px"}), a.find(".qbutton:eq(1)").css({"font-size": Math.round(window["slider_button2_" + b][0] * o) + "px"}), a.find(".qbutton:eq(0)").css({"line-height": Math.round(window["slider_button1_" + b][1] * o) + "px"}), a.find(".qbutton:eq(1)").css({"line-height": Math.round(window["slider_button2_" + b][1] * o) + "px"}), a.find(".qbutton:eq(0)").css({"letter-spacing": Math.round(window["slider_button1_" + b][2] * o) + "px"}), a.find(".qbutton:eq(1)").css({"letter-spacing": Math.round(window["slider_button2_" + b][2] * o) + "px"}), a.find(".qbutton:eq(0)").css({height: Math.round(window["slider_button1_" + b][3] * o) + "px"}), a.find(".qbutton:eq(1)").css({height: Math.round(window["slider_button2_" + b][3] * o) + "px"}), 0 != window["slider_button1_" + b][4] ? a.find(".qbutton:eq(0)").css({width: Math.round(window["slider_button1_" + b][4] * o) + "px"}) : a.find(".qbutton:eq(0)").css({width: "auto"}), 0 != window["slider_button2_" + b][4] ? a.find(".qbutton:eq(1)").css({width: Math.round(window["slider_button2_" + b][4] * o) + "px"}) : a.find(".qbutton:eq(1)").css({width: "auto"}), a.find(".qbutton:eq(0)").css({"padding-left": Math.round(window["slider_button1_" + b][5] * o) + "px"}), a.find(".qbutton:eq(1)").css({"padding-left": Math.round(window["slider_button2_" + b][5] * o) + "px"}), a.find(".qbutton:eq(0)").css({"padding-right": Math.round(window["slider_button1_" + b][6] * o) + "px"}), a.find(".qbutton:eq(1)").css({"padding-right": Math.round(window["slider_button2_" + b][6] * o) + "px"}), a.find(".separator").css({"margin-top": Math.round(window["slider_separator_" + b][0] * l) + "px"}), a.find(".separator").css({"margin-bottom": Math.round(window["slider_separator_" + b][1] * l) + "px"})
            }

            function g(a, b) {
                a.find(".thumb").css({width: Math.round(window["slider_graphic_width_" + b][0]) + "px"}).css({height: Math.round(window["slider_graphic_height_" + b][0]) + "px"}), a.find(".qode_slide-svg-holder svg").css({width: Math.round(window["slider_svg_width_" + b][0]) + "px"}).css({height: Math.round(window["slider_svg_height_" + b][0]) + "px"}), a.find(".q_slide_title").css({"font-size": Math.round(window["slider_title_" + b][0]) + "px"}), a.find(".q_slide_title").css({"line-height": Math.round(window["slider_title_" + b][1]) + "px"}), a.find(".q_slide_title").css({"letter-spacing": Math.round(window["slider_title_" + b][2]) + "px"}), a.find(".q_slide_title").css({"margin-bottom": Math.round(window["slider_title_" + b][3]) + "px"}), a.find(".q_slide_subtitle").css({"font-size": Math.round(window["slider_subtitle_" + b][0]) + "px"}), a.find(".q_slide_subtitle").css({"line-height": Math.round(window["slider_subtitle_" + b][1]) + "px"}), a.find(".q_slide_subtitle").css({"letter-spacing": Math.round(window["slider_subtitle_" + b][2]) + "px"}), a.find(".q_slide_subtitle").css({"margin-bottom": Math.round(window["slider_subtitle_" + b][3]) + "px"}), a.find(".q_slide_text").css({"font-size": Math.round(window["slider_text_" + b][0]) + "px"}), a.find(".q_slide_text").css({"line-height": Math.round(window["slider_text_" + b][1]) + "px"}), a.find(".q_slide_text").css({"letter-spacing": Math.round(window["slider_text_" + b][2]) + "px"}), a.find(".qbutton:eq(0)").css({"font-size": Math.round(window["slider_button1_" + b][0]) + "px"}), a.find(".qbutton:eq(1)").css({"font-size": Math.round(window["slider_button2_" + b][0]) + "px"}), a.find(".qbutton:eq(0)").css({"line-height": Math.round(window["slider_button1_" + b][1]) + "px"}), a.find(".qbutton:eq(1)").css({"line-height": Math.round(window["slider_button2_" + b][1]) + "px"}), a.find(".qbutton:eq(0)").css({"letter-spacing": Math.round(window["slider_button1_" + b][2]) + "px"}), a.find(".qbutton:eq(1)").css({"letter-spacing": Math.round(window["slider_button2_" + b][2]) + "px"}), a.find(".qbutton:eq(0)").css({height: Math.round(window["slider_button1_" + b][3]) + "px"}), a.find(".qbutton:eq(1)").css({height: Math.round(window["slider_button2_" + b][3]) + "px"}), 0 != window["slider_button1_" + b][4] ? a.find(".qbutton:eq(0)").css({width: Math.round(window["slider_button1_" + b][4]) + "px"}) : a.find(".qbutton:eq(0)").css({width: "auto"}), 0 != window["slider_button2_" + b][4] ? a.find(".qbutton:eq(1)").css({width: Math.round(window["slider_button2_" + b][4]) + "px"}) : a.find(".qbutton:eq(1)").css({width: "auto"}), a.find(".qbutton:eq(0)").css({"padding-left": Math.round(window["slider_button1_" + b][5]) + "px"}), a.find(".qbutton:eq(1)").css({"padding-left": Math.round(window["slider_button2_" + b][5]) + "px"}), a.find(".qbutton:eq(0)").css({"padding-right": Math.round(window["slider_button1_" + b][6]) + "px"}), a.find(".qbutton:eq(1)").css({"padding-right": Math.round(window["slider_button2_" + b][6]) + "px"}), a.find(".separator").css({"margin-top": Math.round(window["slider_separator_" + b][0]) + "px"}), a.find(".separator").css({"margin-bottom": Math.round(window["slider_separator_" + b][1]) + "px"})
            }

            function h(a, b) {
                1 == a ? (p.find(".left.carousel-control .prev").html(b), p.find(".right.carousel-control .next").html(a + 1)) : a == b ? (p.find(".left.carousel-control .prev").html(a - 1), p.find(".right.carousel-control .next").html(1)) : (p.find(".left.carousel-control .prev").html(a - 1), p.find(".right.carousel-control .next").html(a + 1))
            }

            function i() {
                p.find(".carousel-inner .item:first-child").addClass("active"), checkSliderForHeaderStyle($j(".carousel .active"), p.hasClass("header_effect")), p.hasClass("slider_thumbs") && (h(1, C), p.find(".active").next("div").find(".image").length ? (src = a.exec(p.find(".active").next("div").find(".image").attr("style")), next_image = new Image, next_image.src = src[1]) : (next_image = p.find(".active").next("div").find("> .video").clone(), next_image.find(".video-overlay").remove(), next_image.find(".video-wrap").width(170).height(95), next_image.find(".mejs-container").width(170).height(95), next_image.find("video").width(170).height(95)), p.find(".right.carousel-control .img").html(next_image).find("img, div.video").addClass("old"), p.find(".carousel-inner .item:last-child .image").length ? (src = a.exec(p.find(".carousel-inner .item:last-child .image").attr("style")), prev_image = new Image, prev_image.src = src[1]) : (prev_image = p.find(".carousel-inner .item:last-child > .video").clone(), prev_image.find(".video-overlay").remove(), prev_image.find(".video-wrap").width(170).height(95), prev_image.find(".mejs-container").width(170).height(95), prev_image.find("video").width(170).height(95)), p.find(".left.carousel-control .img").html(prev_image).find("img, div.video").addClass("old")), p.hasClass("q_auto_start") ? p.carousel({
                    interval: B,
                    pause: !1
                }) : p.carousel({
                    interval: 0,
                    pause: !1
                }), p.find(".item video").length && initVideoBackgroundSize(), p.hasClass("advanced_responsiveness") && (p.hasClass("responsive_height") || p.hasClass("full_screen")) && p.find(".item").each(function (a) {
                    e($j(this), a), f($j(this), a)
                }), $j(".carousel-inner .item:first-child").hasClass("animate_image") && $window_width > 1e3 && p.find(".carousel-inner .item.animate_image:first-child .image").transformAnimate({
                    transform: "matrix(" + b[$j(".carousel-inner .item:first-child").data("animate_image")] + ")",
                    duration: 3e4
                })
            }

            var j, k, l, m, n, o, p = $j(this), j = $j(window).width() < 1e3 ? $j("header.page_header").height() : 0, q = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") && 0 == $j("body.paspartu_on_top_fixed").length ? $j("header.page_header").height() : 0, r = $j(".paspartu_outer:not(.disable_top_paspartu)").length > 0 ? Math.round($window_width * paspartu_width + q) : 0, s = $j(".paspartu_outer.paspartu_on_bottom_slider").length > 0 ? Math.round($window_width * paspartu_width) : 0, t = [1300, 1e3, 768];
            if (p.hasClass("advanced_responsiveness")) {
                t = [1600, 1200, 900, 650, 500, 320], p.data("q_responsive_breakpoints") && "set2" == p.data("q_responsive_breakpoints") && (t = [1600, 1300, 1e3, 768, 567, 320]);
                var u = p.data("q_responsive_graphic_coefficients").split(","), v = p.data("q_responsive_title_coefficients").split(","), w = p.data("q_responsive_subtitle_coefficients").split(","), x = p.data("q_responsive_text_coefficients").split(","), y = p.data("q_responsive_button_coefficients").split(",")
            }
            if (p.hasClass("full_screen")) p.css({height: $j(window).height() - j - r - s + "px"}), p.find(".qode_slider_preloader").css({height: $j(window).height() - j - r - s + "px"}), p.find(".qode_slider_preloader .ajax_loader").css({display: "block"}), p.find(".item").css({height: $j(window).height() - j - r - s + "px"}), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(q + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), $j(window).resize(function () {
                j = $j(window).width() < 1e3 ? $j("header.page_header").height() : 0, q = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") && 0 == $j("body.paspartu_on_top_fixed").length ? $j("header.page_header").height() : 0, r = $j(".paspartu_outer:not(.disable_top_paspartu)").length > 0 ? Math.round($window_width * paspartu_width + q) : 0, s = $j(".paspartu_outer.paspartu_on_bottom_slider").length > 0 ? Math.round($window_width * paspartu_width) : 0, p.css({height: $j(window).height() - j - r - s + "px"}), p.find(".qode_slider_preloader .ajax_loader").css({display: "block"}), p.find(".item").css({height: $j(window).height() - j - r - s + "px"}), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(q + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), p.hasClass("advanced_responsiveness") && p.find(".item").each(function (a) {
                    f($j(this), a)
                })
            }); else if (p.hasClass("responsive_height")) {
                var z = p.data("height");
                p.find(".qode_slider_preloader").css({
                    height: p.height() - j - r - s + "px",
                    display: "block"
                }), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(q + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), c(p, z), $j(window).resize(function () {
                    $j(".paspartu_outer:not(.disable_top_paspartu)").length && (q = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0, $j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(q + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), c(p, z), p.hasClass("advanced_responsiveness") && p.find(".item").each(function (a) {
                        f($j(this), a)
                    })
                })
            } else p.find(".qode_slider_preloader").css({
                height: p.height() - j + "px",
                display: "block"
            }), p.find(".qode_slider_preloader .ajax_loader").css({display: "block"}), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(q + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), p.hasClass("advanced_responsiveness") && p.find(".item").each(function (a) {
                e($j(this), a), f($j(this), a)
            }), 1e3 > $window_width ? c(p, z) : d(z), $j(window).resize(function () {
                $j(".paspartu_outer:not(.disable_top_paspartu)").length && (q = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0, $j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(q + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), 1e3 > $window_width ? (c(p, z), p.hasClass("advanced_responsiveness") && p.find(".item").each(function (a) {
                    f($j(this), a)
                })) : (d(z), p.hasClass("advanced_responsiveness") && p.find(".item").each(function (a) {
                    g($j(this), a)
                }))
            });
            if ($j("body:not(.boxed):not(.vertical_menu_transparency):not(.vertical_menu_hidden):not(.page-template-landing_page-php)").hasClass("vertical_menu_enabled") && $j(window).width() > 1e3) {
                var A = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
                p.find(".carousel-inner").width($window_width - 260 - A), $j(window).resize(function () {
                    $j(window).width() > 1e3 ? (A = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0, p.find(".carousel-inner").width($window_width - 260 - A)) : p.find(".carousel-inner").css("width", "100%")
                })
            }
            if ($j("body:not(.boxed):not(.vertical_menu_transparency):not(.page-template-landing_page-php)").hasClass("vertical_menu_hidden") && $window_width > 1e3) {
                var A = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
                p.find(".carousel-inner").width($window_width - 40 - A), $j(window).resize(function () {
                    $j(window).width() > 1e3 ? (A = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0, p.find(".carousel-inner").width($window_width - 40 - A)) : p.find(".carousel-inner").css("width", "100%")
                })
            }
            $j(window).scroll(function () {
                $scroll > p.height() + $j("header.page_header").height() && $j(window).width() > 1e3 ? p.find(".carousel-inner, .carousel-indicators, button").hide() : p.find(".carousel-inner, .carousel-indicators, button").show()
            });
            var B = p.data("slide_animation");
            "" === B && (B = 6e3);
            var C = $j("div.item").length;
            if ($j("html").hasClass("touch")) {
                if (p.find(".item:first-child .mobile-video-image").length > 0) {
                    if (src = a.exec(p.find(".item:first-child .mobile-video-image").attr("style"))) {
                        var D = new Image;
                        D.src = src[1], $j(D).load(function () {
                            $j(".qode_slider_preloader").fadeOut(500), i(), checkSVG(p)
                        })
                    }
                } else if (src = a.exec(p.find(".item:first-child .image").attr("style"))) {
                    var D = new Image;
                    D.src = src[1], $j(D).load(function () {
                        $j(".qode_slider_preloader").fadeOut(500), i(), checkSVG(p)
                    })
                }
            } else if (p.find(".item:first-child video").length > 0) p.find(".item:first-child video").get(0).addEventListener("loadeddata", function () {
                $j(".qode_slider_preloader").fadeOut(500), i(), checkSVG(p)
            }); else if (src = a.exec(p.find(".item:first-child .image").attr("style"))) {
                var D = new Image;
                D.src = src[1], $j(D).load(function () {
                    $j(".qode_slider_preloader").fadeOut(500), i(), checkSVG(p)
                })
            }
            p.on("slide.bs.carousel", function () {
                p.addClass("in_progress"), p.find(".active .slider_content_outer").fadeTo(800, 0)
            }), p.on("slid.bs.carousel", function () {
                if (p.removeClass("in_progress"), p.find(".active .slider_content_outer").fadeTo(0, 1), checkSVG(p), $j("div.item.animate_image .image").stop().css({
                        transform: "",
                        "-webkit-transform": ""
                    }), $j("div.item.active").hasClass("animate_image") && $window_width > 1e3 && $j("div.item.animate_image.active .image").transformAnimate({
                        transform: "matrix(" + b[$j("div.item.animate_image.active").data("animate_image")] + ")",
                        duration: 3e4
                    }), p.hasClass("slider_thumbs")) {
                    var c = $j("div.item").index($j("div.item.active")[0]) + 1;
                    h(c, C), p.find(".active").prev("div.item").length ? (p.find(".active").prev("div").find(".image").length ? (src = a.exec(p.find(".active").prev("div").find(".image").attr("style")), prev_image = new Image, prev_image.src = src[1]) : (prev_image = p.find(".active").prev("div").find("> .video").clone(), prev_image.find(".video-overlay").remove(), prev_image.find(".video-wrap").width(170).height(95), prev_image.find(".mejs-container").width(170).height(95), prev_image.find("video").width(170).height(95)), p.find(".left.carousel-control .img .old").fadeOut(300, function () {
                        $j(this).remove()
                    }), p.find(".left.carousel-control .img").append(prev_image).find("img, div.video").fadeIn(300).addClass("old")) : (p.find(".carousel-inner .item:last-child .image").length ? (src = a.exec(p.find(".carousel-inner .item:last-child .image").attr("style")),
                        prev_image = new Image, prev_image.src = src[1]) : (prev_image = p.find(".carousel-inner .item:last-child > .video").clone(), prev_image.find(".video-overlay").remove(), prev_image.find(".video-wrap").width(170).height(95), prev_image.find(".mejs-container").width(170).height(95), prev_image.find("video").width(170).height(95)), p.find(".left.carousel-control .img .old").fadeOut(300, function () {
                        $j(this).remove()
                    }), p.find(".left.carousel-control .img").append(prev_image).find("img, div.video").fadeIn(300).addClass("old")), p.find(".active").next("div.item").length ? (p.find(".active").next("div").find(".image").length ? (src = a.exec(p.find(".active").next("div").find(".image").attr("style")), next_image = new Image, next_image.src = src[1]) : (next_image = p.find(".active").next("div").find("> .video").clone(), next_image.find(".video-overlay").remove(), next_image.find(".video-wrap").width(170).height(95), next_image.find(".mejs-container").width(170).height(95), next_image.find("video").width(170).height(95)), p.find(".right.carousel-control .img .old").fadeOut(300, function () {
                        $j(this).remove()
                    }), p.find(".right.carousel-control .img").append(next_image).find("img, div.video").fadeIn(300).addClass("old")) : (p.find(".carousel-inner .item:first-child .image").length ? (src = a.exec(p.find(".carousel-inner .item:first-child .image").attr("style")), next_image = new Image, next_image.src = src[1]) : (next_image = p.find(".carousel-inner .item:first-child > .video").clone(), next_image.find(".video-overlay").remove(), next_image.find(".video-wrap").width(170).height(95), next_image.find(".mejs-container").width(170).height(95), next_image.find("video").width(170).height(95)), p.find(".right.carousel-control .img .old").fadeOut(300, function () {
                        $j(this).remove()
                    }), p.find(".right.carousel-control .img").append(next_image).find("img, div.video").fadeIn(300).addClass("old"))
                }
            }), p.swipe({
                swipeLeft: function (a, b, c, d, e) {
                    p.carousel("next")
                }, swipeRight: function (a, b, c, d, e) {
                    p.carousel("prev")
                }, threshold: 20
            })
        }), $j(".no-touch .carousel").length && (skrollr_slider = skrollr.init({
            edgeStrategy: "set",
            smoothScrolling: !0,
            forceHeight: !1
        }), skrollr_slider.refresh())
    }
}
function checkSliderForHeaderStyle(a, b) {
    "use strict";
    var c = "", d = a.data("navigation-color");
    a.hasClass("light") && (c = "light"), a.hasClass("dark") && (c = "dark"), "" !== c ? (b && ($j("header.page_header").removeClass("dark light").addClass(c), $j("aside.vertical_menu_area").removeClass("dark light").addClass(c)), $j(".carousel .carousel-control, .carousel .carousel-indicators").removeClass("dark light").addClass(c)) : (b && ($j("header.page_header").removeClass("dark light").addClass(default_header_style), $j("aside.vertical_menu_area").removeClass("dark light").addClass(default_header_style)), $j(".carousel .carousel-control, .carousel .carousel-indicators").removeClass("dark light").addClass(default_header_style)), void 0 !== d ? ($j(".carousel-control .thumb_holder .thumb_top, .carousel-indicators li").css("background-color", d), $j(".carousel-control .prev_nav, .carousel-control .next_nav").css("border-color", d), $j(".carousel-control .prev_nav i, .carousel-control .next_nav i").css("color", d)) : ($j(".carousel-control .thumb_holder .thumb_top, .carousel-indicators li").css("background-color", ""), $j(".carousel-control .prev_nav, .carousel-control .next_nav").css("border-color", ""), $j(".carousel-control .prev_nav i, .carousel-control .next_nav i").css("color", ""))
}
function calculateHeights() {
    $j(".portfolio_slides").length && $j(".portfolio_slides").each(function () {
        $j(this).parents(".caroufredsel_wrapper").css({height: $j(this).find("li.item").outerHeight() - 3 + "px"})
    }), $j(".qode_carousels .slides").length && $j(".qode_carousels .slides").each(function () {
        $j(this).parents(".caroufredsel_wrapper").css({height: $j(this).find("li.item").outerHeight() + "px"})
    }), $j(".blog_slides").length && $j(".blog_slides").each(function () {
        $j(this).parents(".caroufredsel_wrapper").css({height: $j(this).find("li.item").outerHeight() - 3 + "px"})
    }), $j(".qode-bct-posts").length && $j(".qode-bct-posts").each(function () {
        $j(this).parents(".caroufredsel_wrapper").css({height: $j(this).find(".qode-bct-post").outerHeight() + "px"})
    })
}
function initQodeCarousel() {
    "use strict";
    $j(".qode_carousels").length && ($j(".qode_carousels").each(function () {
        var a = $j(this), b = 6;
        "undefined" != typeof a.data("number-of-visible-items") && "" !== a.data("number-of-visible-items") && (4 === a.data("number-of-visible-items") ? b = 4 : 5 === a.data("number-of-visible-items") && (b = 5));
        var c = 1 == a.parents(".grid_section").length ? 170 : 315, d = 6;
        4 === b ? (c = 1 == a.parents(".grid_section").length ? 255 : 472, d = 4) : 5 === b && (c = 1 == a.parents(".grid_section").length ? 204 : 378, d = 5), a.find(".slides").carouFredSel({
            circular: !0,
            responsive: !0,
            scroll: {items: 1, duration: 1e3, pauseOnHover: !1},
            items: {width: c, visible: {min: 1, max: d}},
            auto: !0,
            mousewheel: !1,
            swipe: {onMouse: !0, onTouch: !0}
        }).animate({opacity: 1}, 1e3)
    }), calculateHeights())
}
function initPortfolioSlider() {
    "use strict";
    $j(".portfolio_slider").length && ($j(".portfolio_slider").each(function () {
        var a, b;
        switch (a = "undefined" != typeof $j(this).data("number_of_items") ? $j(this).data("number_of_items") : "auto") {
            case 4:
                b = 500;
                break;
            case 5:
                b = 350;
                break;
            default:
                b = 500
        }
        var c = 1 == $j(this).parents(".grid_section").length ? 3 : a, d = 1 == $j(this).parents(".grid_section").length ? 353 : b;
        $j(this).find(".portfolio_slides").carouFredSel({
            circular: !0,
            responsive: !0,
            scroll: 1,
            prev: {
                button: function () {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-prev")
                }
            },
            next: {
                button: function () {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-next")
                }
            },
            items: {width: d, visible: {min: 1, max: c}},
            auto: !1,
            mousewheel: !1,
            swipe: {onMouse: !0, onTouch: !0}
        }).animate({opacity: 1}, 1e3)
    }), calculateHeights(), $j(".portfolio_slider .flex-direction-nav a").click(function (a) {
        a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation()
    }))
}
function initBlogSlider() {
    "use strict";
    $j(".blog_slider").length && ($j(".blog_slider").each(function () {
        var a, b, c, d = $j(this), e = !1;
        if (a = "undefined" != typeof d.data("blogs_shown") ? d.data("blogs_shown") : d.hasClass("simple_slider") ? 1 : "auto", e = d.data("auto_start"), d.hasClass("simple_slider")) b = 1, c = 300; else {
            b = 1 == d.parents(".grid_section").length ? 3 : a;
            var f;
            switch (a) {
                case 3:
                    f = 667;
                    break;
                case 4:
                    f = 500;
                    break;
                case 5:
                    f = 400;
                    break;
                case 6:
                    f = 334;
                    break;
                default:
                    f = 500
            }
            c = 1 == d.parents(".grid_section").length ? 353 : f
        }
        d.find(".blog_slides").carouFredSel({
            circular: !0, responsive: !0, scroll: 1, prev: {
                button: function () {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-prev")
                }
            }, next: {
                button: function () {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-next")
                }
            }, items: {width: c, visible: {min: 1, max: b}}, auto: e, mousewheel: !1, swipe: {onMouse: !0, onTouch: !0}
        }).animate({opacity: 1}, 1e3)
    }), calculateHeights(), $j(".blog_slider .flex-direction-nav a").click(function (a) {
        a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation()
    }))
}
function qodeInitBlogCarouselTitled() {
    "use strict";
    $j(".qode-blog-carousel-titled").length && ($j(".qode-blog-carousel-titled").each(function () {
        var a, b = $j(this), c = 4, d = !1;
        "undefined" != typeof b.data("posts-shown") && (c = b.data("posts-shown")), 769 > $window_width && c > 2 && (c = 2), 601 > $window_width && c > 1 && (c = 1), a = b.width() / c, b.find(".qode-bct-posts").carouFredSel({
            circular: !0,
            responsive: !0,
            scroll: 1,
            prev: {
                button: function () {
                    return b.find(".qode-bct-caroufredsel-prev")
                }
            },
            next: {
                button: function () {
                    return b.find(".qode-bct-caroufredsel-next")
                }
            },
            items: {width: a, visible: {min: 1, max: c}},
            auto: d,
            mousewheel: !1,
            swipe: {onMouse: !0, onTouch: !0}
        }), b.animate({opacity: 1}, 1e3)
    }), calculateHeights())
}
function initSideMenu() {
    "use strict";
    $j("body").hasClass("side_area_uncovered_from_content") && $j(".side_menu_button_wrapper a.side_menu_button_link,  a.close_side_menu").click(function (a) {
        if (a.preventDefault(), $j(".side_menu").css({right: "0"}), $j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened")) {
            $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("right_side_menu_opened");
            var b = setTimeout(function () {
                $j(".side_menu").css({visibility: "hidden"}), clearTimeout(b)
            }, 400)
        } else $j(".side_menu").css({visibility: "visible"}), $j(this).addClass("opened"), $j("body").addClass("right_side_menu_opened"), current_scroll = $j(window).scrollTop(), $j(window).scroll(function () {
            if (Math.abs($scroll - current_scroll) > 400) {
                $j("body").removeClass("right_side_menu_opened"), $j(".side_menu_button_wrapper a").removeClass("opened");
                var a = setTimeout(function () {
                    $j(".side_menu").css({visibility: "hidden"}), clearTimeout(a)
                }, 400)
            }
        })
    }), $j("body").hasClass("side_menu_slide_with_content") && $j(".side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu").click(function (a) {
        a.preventDefault(), $j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened") ? ($j("body").removeClass("side_menu_open"), $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("side_menu_open")) : ($j(this).addClass("opened"), $j("body").addClass("side_menu_open"), current_scroll = $j(window).scrollTop(), $j(window).scroll(function () {
            Math.abs($scroll - current_scroll) > 400 && ($j("body").removeClass("side_menu_open"), $j(".side_menu_button_wrapper a").removeClass("opened"))
        })), a.stopPropagation(), $j(".wrapper").click(function () {
            a.preventDefault(), $j("body").removeClass("side_menu_open"), $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("side_menu_open")
        })
    }), $j("body").hasClass("side_menu_slide_from_right") && ($j(".wrapper").prepend('<div class="cover"/>'), $j(".side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu").click(function (a) {
        a.preventDefault(), $j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened") ? ($j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("right_side_menu_opened")) : ($j(this).addClass("opened"), $j("body").addClass("right_side_menu_opened"), $j(" .wrapper .cover").click(function () {
            $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("right_side_menu_opened"), $j(".side_menu_button_wrapper a").removeClass("opened")
        }), current_scroll = $j(window).scrollTop(), $j(window).scroll(function () {
            Math.abs($scroll - current_scroll) > 400 && ($j("body").removeClass("right_side_menu_opened"), $j(".side_menu_button_wrapper a").removeClass("opened"))
        }))
    }))
}
function setDropDownMenuPosition() {
    "use strict";
    var a = $j(".drop_down > ul > li.narrow");
    a.each(function (b) {
        var c, d = $j(window).width() - 16;
        switch (!0) {
            case qode_body.hasClass("qode_grid_1300"):
                c = 1350;
                break;
            case qode_body.hasClass("qode_grid_1200"):
                c = 1250;
                break;
            default:
                c = 1150
        }
        var e = $j(a[b]).offset().left, f = $j(a[b]).find(".second .inner ul").width(), g = 0;
        g = $j("body").hasClass("boxed") ? c - (e - (d - c) / 2) + 17 : d - e + 17;
        var h;
        $j(a[b]).find("li.sub").length > 0 && (h = g - f), (f > g || f > h) && ($j(a[b]).find(".second").addClass("right"), $j(a[b]).find(".second .inner ul").addClass("right"))
    })
}
function initDropDownMenu() {
    "use strict";
    var a = $j(".drop_down > ul > li");
    a.each(function (b) {
        if ($j(a[b]).find(".second").length > 0) {
            if ($j(a[b]).hasClass("wide")) {
                var c = $j(this).find(".inner > ul"), d = parseInt(c.css("padding-left").slice(0, -2)) + parseInt(c.css("padding-right").slice(0, -2));
                $j(this).hasClass("left_position") || $j(this).hasClass("right_position") || $j(this).find(".second").css("left", 0);
                var e = 0;
                $j(this).find(".second > .inner > ul > li").each(function () {
                    var a = $j(this).height();
                    a > e && (e = a)
                }), $j(this).find(".second > .inner > ul > li").height(e);
                var f;
                f = $j(this).find(".second > .inner > ul > li").length > 4 ? 4 : $j(this).find(".second > .inner > ul > li").length;
                var g = f * $j(this).find(".second > .inner > ul > li").outerWidth();
                if ($j(this).find(".second > .inner > ul").width(g), $j(this).hasClass("wide_background")) {
                    if (!$j(this).hasClass("left_position") && !$j(this).hasClass("right_position")) {
                        var h = $j(this).find(".second").offset().left;
                        $j(this).find(".second").css("left", -h), $j(this).find(".second").css("width", $j(window).width())
                    }
                } else if (!$j(this).hasClass("left_position") && !$j(this).hasClass("right_position")) {
                    var h = ($j(window).width() - 2 * ($j(window).width() - $j(this).find(".second").offset().left)) / 2 + (g + d) / 2;
                    $j(this).find(".second").css("left", -h)
                }
            }
            if (menu_dropdown_height_set || ($j(a[b]).data("original_height", $j(a[b]).find(".second").height() + "px"), $j(a[b]).find(".second").height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) $j(a[b]).on("touchstart mouseenter", function () {
                $j(a[b]).find(".second").css({
                    height: $j(a[b]).data("original_height"),
                    overflow: "visible",
                    visibility: "visible",
                    opacity: "1"
                })
            }).on("mouseleave", function () {
                $j(a[b]).find(".second").css({height: "0px", overflow: "hidden", visivility: "hidden", opacity: "0"})
            }); else {
                var i = {
                    interval: 0, over: function () {
                        setTimeout(function () {
                            $j(a[b]).find(".second").addClass("drop_down_start"), $j(a[b]).find(".second").stop().css({height: $j(a[b]).data("original_height")})
                        }, 150)
                    }, timeout: 150, out: function () {
                        $j(a[b]).find(".second").stop().css({height: "0px"}), $j(a[b]).find(".second").removeClass("drop_down_start")
                    }
                };
                $j(a[b]).hoverIntent(i)
            }
        }
    }), $j(".drop_down ul li.wide ul li a, .drop_down ul li.narrow ul li a").on("click", function () {
        var a = $j(this);
        a.next("ul").length || "http://#" === a.attr("href") || "#" === a.attr("href") || a.hasClass("no_link") || setTimeout(function () {
            a.mouseleave()
        }, 500)
    }), menu_dropdown_height_set = !0
}
function initVerticalMenu() {
    "use strict";
    if ($j(".no-touch .vertical_menu_toggle").length) {
        var a = $j(".no-touch .vertical_menu_toggle > ul > li"), b = $j(".no-touch .vertical_menu_toggle ul li ul li");
        a.each(function (b) {
            if ($j(a[b]).hasClass("has_sub")) {
                var c = $j(a[b]).find(".inner > ul > li").length;
                $j(a[b]).hoverIntent({
                    over: function () {
                        $j(a[b]).addClass("open"), $j(a[b]).find(".second").slideDown(40 * c, "easeInOutSine", function () {
                            $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                        })
                    }, out: function () {
                        $j(a[b]).removeClass("open"), $j(a[b]).find(".second").slideUp(40 * c, "easeInOutSine")
                    }, timeout: 1e3
                })
            }
        }), b.each(function (a) {
            if ($j(b[a]).hasClass("menu-item-has-children")) {
                var c = $j(b[a]).find("ul > li").length;
                $j(b[a]).hoverIntent({
                    over: function () {
                        $j(b[a]).addClass("open"), $j(b[a]).find("ul").slideDown(40 * c, "easeInOutSine", function () {
                            $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                        })
                    }, out: function () {
                        $j(b[a]).removeClass("open"), $j(b[a]).find("ul").slideUp(40 * c, "easeInOutSine")
                    }, timeout: 1e3
                })
            }
        })
    } else if ($j(".vertical_menu_on_click").length) {
        var a = $j(".vertical_menu_on_click > ul > li > a"), b = $j(".vertical_menu_on_click ul li ul li a");
        a.each(function (b) {
            $j(a[b]).parent().hasClass("has_sub") && $j(a[b]).on("tap click", function (a) {
                return a.preventDefault(), $j(this).parent().hasClass("open") ? ($j(this).parent().removeClass("open"), $j(this).parent().find(".second").slideUp("fast", function () {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })) : ($j(".vertical_menu_on_click > ul > li").removeClass("open"), $j(".vertical_menu_on_click > ul > li").find(".second").slideUp("fast"), $j(this).parent().addClass("open"), $j(this).parent().find(".second").slideDown("slow", function () {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })), !1
            })
        }), b.each(function (a) {
            $j(b[a]).parent().hasClass("menu-item-has-children") && $j(b[a]).on("tap click", function (a) {
                return a.preventDefault(), $j(this).parent().hasClass("open") ? ($j(this).parent().removeClass("open"), $j(this).parent().find("ul").slideUp("fast", function () {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })) : ($j(".vertical_menu_on_click ul li ul li").removeClass("open"), $j(".vertical_menu_on_click ul li ul li").find("ul").slideUp("fast"), $j(this).parent().addClass("open"), $j(this).parent().find("ul").slideDown("slow", function () {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })), !1
            })
        })
    } else if ($j(".no-touch .vertical_menu_float").length) {
        var a = $j(".no-touch .vertical_menu_float > ul > li"), b = $j(".no-touch .vertical_menu_float ul li ul li");
        a.each(function (b) {
            $j(a[b]).hasClass("has_sub") && $j(a[b]).hoverIntent({
                over: function () {
                    $j(a[b]).addClass("open"), $j(a[b]).find(".second").addClass("vertical_menu_start")
                }, out: function () {
                    $j(a[b]).removeClass("open"), $j(a[b]).find(".second").removeClass("vertical_menu_start")
                }, timeout: 300
            })
        }), b.each(function (a) {
            if ($j(b[a]).hasClass("menu-item-has-children")) {
                $j(b[a]).find("ul > li").length;
                $j(b[a]).hoverIntent({
                    over: function () {
                        $j(b[a]).addClass("open"), $j(b[a]).find("ul").addClass("vertical_submenu_start")
                    }, out: function () {
                        $j(b[a]).removeClass("open"), $j(b[a]).find("ul").removeClass("vertical_submenu_start")
                    }, timeout: 300
                })
            }
        })
    }
}
function initVerticalMobileMenu() {
    "use strict";
    $j(".vertical_menu_toggle").length ? ($j(".touch .vertical_menu_toggle > ul > li.has_sub > a .plus").on("tap click", function (a) {
        a.stopPropagation(), a.preventDefault(), $j(this).parent().next("div.second").is(":visible") ? ($j(this).parents(".touch .vertical_menu_toggle > ul > li.has_sub").removeClass("open"), $j(this).parent().next("div.second").slideUp(200)) : ($j(this).parents(".touch .vertical_menu_toggle > ul > li.has_sub").addClass("open"), $j(this).parent().next("div.second").slideDown(200))
    }), $j(".touch .vertical_menu_toggle ul li ul li > a .plus").on("tap click", function (a) {
        a.stopPropagation(), a.preventDefault(), $j(this).parent().next("ul").is(":visible") ? ($j(this).parents(".touch .vertical_menu_toggle ul li ul li").removeClass("open"), $j(this).parent().next("ul").slideUp(200)) : ($j(this).parents(".touch .vertical_menu_toggle ul li ul li").addClass("open"), $j(this).parent().next("ul").slideDown(200))
    })) : $j(".vertical_menu_float").length && ($j(".touch .vertical_menu_float > ul > li.has_sub > a .plus").on("tap click", function (a) {
        a.stopPropagation(), a.preventDefault(), $j(this).parent().next("div.second").hasClass("vertical_menu_start") ? ($j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").removeClass("open"), $j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").find(".second").removeClass("vertical_menu_start")) : ($j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").addClass("open"), $j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").find(".second").addClass("vertical_menu_start"))
    }), $j(".touch .vertical_menu_float ul li ul li > a .plus").on("tap click", function (a) {
        a.stopPropagation(), a.preventDefault(), $j(this).parent().next("ul").hasClass("vertical_submenu_start") ? ($j(this).parents(".touch .vertical_menu_float ul li ul li").removeClass("open"), $j(this).parents(".touch .vertical_menu_float ul li ul li").find("ul").removeClass("vertical_submenu_start")) : ($j(this).parents(".touch .vertical_menu_float ul li ul li").addClass("open"), $j(this).parents(".touch .vertical_menu_float ul li ul li").find("ul").addClass("vertical_submenu_start"))
    }))
}
function checkVerticalMenuTransparency() {
    0 !== $scroll ? $j("body.vertical_menu_transparency").removeClass("vertical_menu_transparency_on") : $j("body.vertical_menu_transparency").addClass("vertical_menu_transparency_on")
}
function showHideVerticalMenu() {
    if ($j(".vertical_menu_hidden").length) {
        var a = $j("aside.vertical_menu_area"), b = $j(".vertical_menu_area_bottom_logo"), c = !0;
        $j(".vertical_menu_hidden_button").on("click", function (d) {
            d.preventDefault(), c ? (c = !1, current_scroll = $j(window).scrollTop(), a.addClass("active"), b.addClass("active")) : (c = !0, a.removeClass("active"), b.removeClass("active"))
        }), $j(window).scroll(function () {
            Math.abs($scroll - current_scroll) > 400 && (c = !0, a.removeClass("active"), b.removeClass("active"))
        }), function () {
            var a, b;
            a = function () {
                function a() {
                    this.objects = []
                }

                return a.name = "Outclick", a.prototype.check = function (a, b) {
                    return !a.is(b.target) && 0 === a.has(b.target).length
                }, a.prototype.trigger = function (a) {
                    var b, c = this;
                    return b = !1, $j.each(this.objects, function (d, e) {
                        return c.check(e.container, a) && (e.related.length < 1 ? b = !0 : $j.each(e.related, function (d, e) {
                            return c.check(e, a) ? b = !0 : (b = !1, !1)
                        }), b) ? e.callback.call(e.container) : void 0
                    })
                }, a
            }(), b = new a, $j.fn.outclick = function (a) {
                var c = this;
                return null == a && (a = {}), a.related || (a.related = []), a.callback || (a.callback = function () {
                    return c.hide()
                }), b.objects.push({container: this, related: a.related, callback: a.callback})
            }, $j(document).mouseup(function (a) {
                return b.trigger(a)
            })
        }.call(this), $j(a).outclick({
            callback: function () {
                c = !0, a.removeClass("active"), b.removeClass("active")
            }
        })
    }
}
function initToCounter() {
    "use strict";
    $j(".counter.zero").length && $j(".counter.zero").each(function () {
        var a = $j(this).parent(), b = 200;
        if ("undefined" != typeof a.data("element-appearance") && a.data("element-appearance") !== !1 && (b = a.data("element-appearance")), !$j(this).hasClass("executed"))if ($j(this).addClass("executed"), $j(this).parents(".vertical_split_slider").length) {
            $j(this).parent().css("opacity", "1");
            var c = parseFloat($j(this).text());
            $j(this).countTo({from: 0, to: c, speed: 1500, refreshInterval: 100})
        } else $j(this).appear(function () {
            $j(this).parent().css("opacity", "1");
            var a = parseFloat($j(this).text());
            $j(this).countTo({from: 0, to: a, speed: 1500, refreshInterval: 100})
        }, {accX: 0, accY: -b})
    })
}
function initCounter() {
    "use strict";
    $j(".counter.random").length && $j(".counter.random").each(function () {
        var a = $j(this).parent(), b = 200;
        "undefined" != typeof a.data("element-appearance") && a.data("element-appearance") !== !1 && (b = a.data("element-appearance")), $j(this).hasClass("executed") || ($j(this).addClass("executed"), $j(this).parents(".vertical_split_slider").length ? ($j(this).parent().css("opacity", "1"), $j(this).absoluteCounter({
            speed: 2e3,
            fadeInDelay: 1e3
        })) : $j(this).appear(function () {
            $j(this).parent().css("opacity", "1"), $j(this).absoluteCounter({speed: 2e3, fadeInDelay: 1e3})
        }, {accX: 0, accY: -b}))
    })
}
function initCountdown() {
    "use strict";
    $j(".countdown").length && $j(".countdown").each(function () {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p = $j(this).attr("id"), q = $j("#" + p), r = 0, s = 0, t = 0, u = 0, v = 0;
        "undefined" != typeof q.data("year") && q.data("year") !== !1 && (r = q.data("year")), "undefined" != typeof q.data("month") && q.data("month") !== !1 && (s = q.data("month")), "undefined" != typeof q.data("day") && q.data("day") !== !1 && (t = q.data("day")), "undefined" != typeof q.data("hour") && q.data("hour") !== !1 && (u = q.data("hour")), "undefined" != typeof q.data("minute") && q.data("minute") !== !1 && (v = q.data("minute")), "undefined" != typeof q.data("monthslabel") && q.data("monthslabel") !== !1 && (a = q.data("monthslabel")), "undefined" != typeof q.data("monthlabel") && q.data("monthlabel") !== !1 && (b = q.data("monthlabel")), "undefined" != typeof q.data("dayslabel") && q.data("dayslabel") !== !1 && (c = q.data("dayslabel")), "undefined" != typeof q.data("daylabel") && q.data("daylabel") !== !1 && (d = q.data("daylabel")), "undefined" != typeof q.data("hourslabel") && q.data("hourslabel") !== !1 && (e = q.data("hourslabel")), "undefined" != typeof q.data("hourlabel") && q.data("hourlabel") !== !1 && (f = q.data("hourlabel")), "undefined" != typeof q.data("minuteslabel") && q.data("minuteslabel") !== !1 && (g = q.data("minuteslabel")), "undefined" != typeof q.data("minutelabel") && q.data("minutelabel") !== !1 && (h = q.data("minuteLabel")), "undefined" != typeof q.data("secondslabel") && q.data("secondslabel") !== !1 && (i = q.data("secondslabel")), "undefined" != typeof q.data("secondlabel") && q.data("secondlabel") !== !1 && (j = q.data("secondlabel")), "undefined" != typeof q.data("tickf") && q.data("tickf") !== !1 && (k = q.data("tickf")), "undefined" != typeof q.data("timezone") && q.data("timezone") !== !1 && (l = q.data("timezone")), "undefined" != typeof q.data("digitfs") && q.data("digitfs") !== !1 && (m = q.data("digitfs")), "undefined" != typeof q.data("labelfs") && q.data("labelfs") !== !1 && (n = q.data("labelfs")), "undefined" != typeof q.data("color") && q.data("color") !== !1 && (o = q.data("color")), q.countdown({
            until: new Date(r, s - 1, t, u, v, 44),
            labels: ["Years", a, "Weeks", c, e, g, i],
            labels1: ["Year", b, "Week", d, f, h, j],
            format: "ODHMS",
            timezone: l,
            padZeroes: !0,
            significant: 0,
            onTick: function () {
                "undefined" !== m && "" !== m && q.find(".countdown-amount").css("font-size", m + "px").css("line-height", m + "px"), "undefined" !== n && "" !== n && q.find(".countdown-period").css("font-size", n + "px"), "undefined" !== o && "" !== o && q.find(".countdown_separator").css("background-color", o)
            }
        })
    })
}
function initProgressBars() {
    "use strict";
    $j(".q_progress_bar").length && $j(".q_progress_bar").each(function () {
        if ($j(this).parents(".vertical_split_slider").length) {
            initToCounterHorizontalProgressBar($j(this));
            var a = $j(this).find(".progress_content").data("percentage");
            $j(this).find(".progress_content").css("width", "0%"), $j(this).find(".progress_content").animate({width: a + "%"}, 1500), $j(this).find(".progress_number_wrapper").css("width", "0%"), $j(this).find(".progress_number_wrapper").animate({width: a + "%"}, 1500)
        } else $j(this).appear(function () {
            initToCounterHorizontalProgressBar($j(this));
            var a = $j(this).find(".progress_content").data("percentage");
            $j(this).find(".progress_content").css("width", "0%"), $j(this).find(".progress_content").animate({width: a + "%"}, 1500), $j(this).find(".progress_number_wrapper").css("width", "0%"), $j(this).find(".progress_number_wrapper").animate({width: a + "%"}, 1500)
        }, {accX: 0, accY: -200})
    })
}
function initToCounterHorizontalProgressBar(a) {
    "use strict";
    var b = parseFloat(a.find(".progress_content").data("percentage"));
    a.find(".progress_number span").length && a.find(".progress_number span").each(function () {
        $j(this).parents(".progress_number_wrapper").css("opacity", "1"), $j(this).countTo({
            from: 0,
            to: b,
            speed: 1500,
            refreshInterval: 50
        })
    })
}
function initListAnimation() {
    "use strict";
    $j(".animate_list").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".animate_list").each(function () {
        $j(this).appear(function () {
            $j(this).find("li").each(function (a) {
                var b = $j(this);
                setTimeout(function () {
                    b.animate({opacity: 1, top: 0}, 1500)
                }, 100 * a)
            })
        }, {accX: 0, accY: -200})
    })
}
function initPieChart() {
    "use strict";
    $j(".q_percentage").length && $j(".q_percentage").each(function () {
        var a = piechartcolor;
        "undefined" != typeof $j(this).data("active") && "" !== $j(this).data("active") && (a = $j(this).data("active"));
        var b = "#eeeeee";
        "undefined" != typeof $j(this).data("noactive") && "" !== $j(this).data("noactive") && (b = $j(this).data("noactive"));
        var c = 10;
        "undefined" != typeof $j(this).data("linewidth") && "" !== $j(this).data("linewidth") && (c = $j(this).data("linewidth"));
        var d = 174, e = 200;
        "undefined" != typeof $j(this).data("element-appearance") && $j(this).data("element-appearance") !== !1 && (e = $j(this).data("element-appearance")), $j(this).appear(function () {
            initToCounterPieChart($j(this)), $j(this).parent().css("opacity", "1"), $j(this).easyPieChart({
                barColor: a,
                trackColor: b,
                scaleColor: !1,
                lineCap: "butt",
                lineWidth: c,
                animate: 1500,
                size: d
            })
        }, {accX: 0, accY: -e})
    })
}
function initPieChartWithIcon() {
    "use strict";
    $j(".q_percentage_with_icon").length && $j(".q_percentage_with_icon").each(function () {
        var a = piechartcolor;
        "" !== $j(this).data("active") && (a = $j(this).data("active"));
        var b = "#eeeeee";
        "" !== $j(this).data("noactive") && (b = $j(this).data("noactive"));
        var c = 10;
        "" !== $j(this).data("linewidth") && (c = $j(this).data("linewidth"));
        var d = 174;
        $j(this).appear(function () {
            $j(this).parent().css("opacity", "1"), $j(this).css("opacity", "1"), $j(this).easyPieChart({
                barColor: a,
                trackColor: b,
                scaleColor: !1,
                lineCap: "butt",
                lineWidth: c,
                animate: 1500,
                size: d
            })
        }, {accX: 0, accY: -200})
    })
}
function initToCounterPieChart(a) {
    "use strict";
    $j(a).css("opacity", "1");
    var b = parseFloat($j(a).find(".tocounter").text());
    $j(a).find(".tocounter").countTo({from: 0, to: b, speed: 1500, refreshInterval: 50})
}
function initPortfolio() {
    "use strict";
    $j(".projects_holder_outer:not(.masonry_with_space, .justified_gallery)").length && $j(".projects_holder_outer").each(function () {
        var a = $j(this).find(".projects_holder");
        if (9 != getIEversion() && 10 != getIEversion() || a.addClass("ie-specific-styles"), $j(".filter_holder .filter").on("click", function () {
                var b = $j(this).text(), c = $j(this).data("filter");
                a.children("article").length && a.children("article").each(function () {
                    var a = $j(this);
                    a.hasClass(c) && "all" !== c ? (a.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery_" + b.toLowerCase() + "]"), a.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery_" + b.toLowerCase() + "]")) : "all" === c && (a.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery]"), a.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery]"))
                });
                var d = $j(".filter_holder").find(".label span");
                d.each(function () {
                    $j(this).text(b)
                })
            }), a.hasClass("v1"))var b = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25); else if (a.hasClass("v2"))var b = new Array(1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20); else if (a.hasClass("v3"))var b = new Array(1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10, 9, 10, 11, 10, 11, 12, 11, 12, 13, 12, 13, 14, 13, 14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18, 17, 18, 19, 18, 19, 20, 19, 20, 21, 20, 21, 22); else if (a.hasClass("v4"))var b = new Array(1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10, 8, 9, 10, 11, 9, 10, 11, 12, 10, 11, 12, 13, 11, 12, 13, 14, 12, 13, 14, 15, 13, 14, 15, 16, 14, 15, 16, 17, 15, 16, 17, 18, 16, 17, 18, 19, 17, 18, 19, 20, 18, 19, 20, 21); else if (a.hasClass("v5"))var b = new Array(1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 6, 7, 8, 9, 10, 7, 8, 9, 10, 11, 8, 9, 10, 11, 12, 9, 10, 11, 12, 13, 10, 11, 12, 13, 14, 11, 12, 13, 14, 15, 12, 13, 14, 15, 16, 13, 14, 15, 16, 17, 14, 15, 16, 17, 18, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 17, 18, 19, 20, 21, 18, 19, 20, 21, 22, 19, 20, 21, 22, 23); else if (a.hasClass("v6"))var b = new Array(1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 11, 7, 8, 9, 10, 11, 12, 8, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 15, 11, 12, 13, 14, 15, 16, 12, 13, 14, 15, 16, 17, 13, 14, 15, 16, 17, 18, 14, 15, 16, 17, 18, 19, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 21, 17, 18, 19, 20, 21, 22);
        var c;
        c = window.location.hash && 1 == window.location.hash.indexOf("portfolio_category") ? window.location.hash.replace("#", "") : "all", qodeInitPortFilterCounter($j(this)), a.mixitup({
            showOnLoad: c,
            transitionSpeed: 600,
            minHeight: 150,
            onMixLoad: function () {
                $j(".projects_holder").addClass("hideItems"), $j(".projects_holder article").css("visibility", "visible"), a.hasClass("portfolio_one_by_one") && a.find("article").each(function (a) {
                    var b = $j(this);
                    if ($j(".vertical_split_slider").length); else;
                    setTimeout(function () {
                        b.addClass("show")
                    }, 100 * a)
                }), a.hasClass("slide_from_left") && a.find("article").each(function (a) {
                    var b = $j(this);
                    setTimeout(function () {
                        b.addClass("show")
                    }, 200 * Math.random())
                }), a.hasClass("slide_from_top") && a.find("article").each(function (a) {
                    var c = $j(this);
                    setTimeout(function () {
                        c.addClass("show")
                    }, 50 * b[a])
                }), a.hasClass("diagonal_fade") && a.find("article").each(function (a) {
                    var c = $j(this);
                    setTimeout(function () {
                        c.addClass("show")
                    }, 50 * b[a])
                }), initParallax()
            },
            onMixEnd: function () {
                initParallax()
            }
        })
    })
}
function initPortfolioZIndex() {
    "use strict";
    $j(".projects_holder_outer.portfolio_no_space").length && $j(".no_space.hover_text article").each(function (a) {
        $j(this).css("z-index", a + 10)
    })
}
function initPortfolioJustifiedGallery() {
    "use strict";
    var a = $j(".projects_holder_outer.justified_gallery");
    a.each(function () {
        var b = $j(this).find(".filter_holder");
        b.find("li.filter").first().addClass("current"), b.find(".filter").on("click", function () {
            var a = $j(this).text(), d = b.find(".label span");
            d.each(function () {
                $j(this).text(a)
            });
            var e = $j(this).attr("data-filter"), f = c.find("article"), g = 500;
            return f.css("transition", "all " + g + "ms ease"), f.not(e).css({transform: "scale(0)"}), setTimeout(function () {
                f.filter(e).css({transform: ""}), c.css("transition", "height " + g + "ms ease").justifiedGallery({selector: ">article" + ("*" != e ? e : "")})
            }, 1.1 * g), setTimeout(function () {
                f.css("transition", ""), c.css("transition", "")
            }, 2.2 * g), $j(".filter").removeClass("current active"), $j(this).addClass("current active"), !1
        }), qodeInitPortFilterCounter(a);
        var c = $j(this).find(".projects_holder"), d = "undefined" != typeof c.data("row-height") ? c.data("row-height") : 200, e = "undefined" != typeof c.data("spacing") ? c.data("spacing") : 0, f = "undefined" != typeof c.data("last-row") ? c.data("last-row") : "nojustify", g = "undefined" != typeof c.data("justify-threshold") ? c.data("justify-threshold") : .75;
        c.justifiedGallery({
            captions: !1,
            rowHeight: d,
            margins: e,
            border: 0,
            lastRow: f,
            justifyThreshold: g,
            selector: "> article"
        }).on("jg.complete jg.rowflush", function () {
            $j(this).find("article").addClass("show").each(function () {
                $j(this).height(Math.round($j(this).height()))
            })
        })
    })
}
function initPortfolioMasonryFilter() {
    "use strict";
    var a = $j(".projects_masonry_holder, .masonry_with_space .projects_holder");
    if (a.length) {
        var b = null;
        $j(".filter:first").addClass("current"), $j(".filter").click(function () {
            clearTimeout(b), $j(".isotope, .isotope .isotope-item").css("transition-duration", "0.8s"), b = setTimeout(function () {
                $j(".isotope, .isotope .isotope-item").css("transition-duration", "0s")
            }, 700);
            var c = $j(this).attr("data-filter");
            a.isotope({filter: c}), $j(".filter").removeClass("current"), $j(this).addClass("current");
            var d = $j(this).text();
            return "*" !== c && (c = c.substring(1)), a.children("article").length && a.children("article").each(function () {
                var a = $j(this);
                a.hasClass(c) && "*" !== c ? (a.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery_" + d.toLowerCase() + "]"), a.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery_" + d.toLowerCase() + "]")) : "*" === c && (a.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery]"), a.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery]"))
            }), setTimeout(setPortfolioMasZIndex(), 700), !1
        })
    }
}
function initPortfolioMasonry() {
    "use strict";
    var a = $j(".projects_masonry_holder, .masonry_with_space .projects_holder");
    a.length && a.each(function () {
        var b = $j(this), c = b.find(".qode-portfolio-masonry-gallery-grid-sizer").width();
        a.hasClass("projects_masonry_holder") && resizeMasonry(c, b), qodeInitMasonry(b), qodeInitPortFilterCounter(a.parent()), $j(window).resize(function () {
            setPortfolioMasZIndex(), a.hasClass("projects_masonry_holder") && resizeMasonry(c, b), qodeInitMasonry(b)
        })
    })
}
function qodeInitMasonry(a) {
    a.waitForImages(function () {
        a.animate({opacity: 1}), a.isotope({
            itemSelector: ".portfolio_masonry_item, .masonry_with_space .mix",
            masonry: {columnWidth: ".qode-portfolio-masonry-gallery-grid-sizer"}
        }), a.hasClass("portfolio_one_by_one") && a.find("article").each(function (a) {
            var b = $j(this);
            setTimeout(function () {
                b.addClass("show")
            }, 100 * a)
        }), a.hasClass("portfolio_fade_from_bottom") && a.find("article").each(function (a) {
            var b = $j(this);
            $j(this).css({opacity: "0", transform: "translateY(150px)"}), $j(this).appear(function () {
                setTimeout(function () {
                    b.css({opacity: "1", transition: "all .8s ease", transform: "translateY(0)"})
                }, 100)
            }, {accX: 0, accY: -150})
        })
    })
}
function resizeMasonry(a, b) {
    var c = jQuery(window);
    if (b.hasClass("portfolio_masonry_gallery_with_space")) {
        var d = b.find(".portfolio_masonry_item.default"), e = b.find(".large_width"), f = b.find(".large_height"), g = b.find(".large_width_height");
        d.css("height", a), f.css("height", Math.round(2 * a)), c.innerWidth() > 480 ? (g.css("height", Math.round(2 * a)), e.css("height", a)) : g.css("height", a)
    } else {
        var h;
        h = b.find('article[class*="default"]:first img').height() ? b.find('article[class*="default"]:first img').height() : b.find('article[class*="large_width"]:not(.large_width_height):first img').height() ? b.find('article[class*="large_width"]:not(.large_width_height):first img').height() : b.find('article[class*="large_width_height"]:first img').height() ? b.find('article[class*="large_width_height"]:first img').height() / 2 : b.find('article[class*="large_height"]:first img').height() / 2;
        var i = c.innerWidth() > 480 ? 2 : 1;
        b.find('article[class*="large_width_height"] img, article[class*="large_height"] img').css("height", h * i)
    }
}
function setPortfolioMasZIndex() {
    var a = {}, b = {};
    $j(".projects_masonry_holder article").each(function () {
        a[$j(this).index()] = getPortfolioXPos($j(this).css("left"))
    });
    var c = $j.map(a, function (a) {
        return a
    });
    c = cleanPortfolioMasXArray(c), c.sort(function (a, b) {
        return a - b
    });
    for (var d = 0; d < c.length; d++)b[c[d]] = 10 * d;
    $j.each(a, function (a, c) {
        var d, e = c;
        $j.each(b, function (a, b) {
            e == a && (d = b)
        }), $j(".projects_masonry_holder article:eq(" + a + ")").css("z-index", d)
    })
}
function cleanPortfolioMasXArray(a) {
    var b, c = a.length, d = [], e = {};
    for (b = 0; c > b; b++)e[a[b]] = 0;
    for (b in e)d.push(b);
    return d
}
function getPortfolioXPos(a) {
    return a.substr(0, a.length - 2)
}
function qodeInitPortFilterCounter(a) {
    function b(a, b, c) {
        a.find(b).text(c)
    }

    if (a.hasClass("portfolio_holder_fwn")) {
        var c = a.find("article"), d = a.find(".filter_holder ul li");
        d.each(function () {
            var d = $j(this);
            if ("all" == d.data("filter") || "*" == d.data("filter")) b(d, ".filter_number_of_items", c.length); else {
                var e = d.attr("data-filter");
                e = e.replace(/\./g, ""), b(d, ".filter_number_of_items", a.find("article." + e).length)
            }
        }), d.css("opacity", "1")
    }
}
function qodeGridWidth() {
    var a = qode_body.attr("class");
    a.match(/grid[\w-]*\b/) && (gridClass = a.match(/grid[\w-]*\b/).toString(), qode_grid_width = parseInt(gridClass.substr(5)))
}
function initServiceAnimation() {
    "use strict";
    $j(".fade_in_circle_holder").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".fade_in_circle_holder").each(function () {
        $j(this).appear(function () {
            $j(this).addClass("animate_circle")
        }, {accX: 0, accY: -200})
    })
}
function checkTitleToShowOrHide() {
    if ($j(".title_outer.animate_title_area").length) {
        var a = $j(".title_outer").data("height");
        $scroll > $j(".title").height() && $j(".title_outer").css({height: a, opacity: "1", overflow: "visible"})
    }
}
function initTitleAreaAnimation() {
    if ($j(".title_outer.animate_title_area").length) {
        var a = $j(".title_outer").data("height");
        $j(".title_outer").hasClass("with_image") && (a = $j(".image.responsive").height()), $scroll < $j(".title").height() && $j(".title_outer").animate({
            height: a,
            opacity: 1
        }, 500, function () {
            $j(this).css({overflow: "visible"}), initPortfolioSingleInfo(), $j("nav.content_menu").length > 0 && (content_menu_position = $j("nav.content_menu").offset().top, contentMenuPosition())
        })
    }
}
function initParallaxTitle() {
    "use strict";
    if ($j(".title").length > 0 && 0 === $j(".touch").length) {
        if ($j(".title.has_fixed_background").length) {
            var a = parseInt($j(".title.has_fixed_background").css("background-size").match(/\d+/)), b = $j(".title.has_fixed_background").height(), c = b / 1e4 * 7, d = $scroll - $j(".title.has_fixed_background").offset().top;
            $j(".title.has_fixed_background").css({"background-position": "center " + (0 + add_for_admin_bar) + "px"}), $j(".title.has_fixed_background").hasClass("zoom_out") && $j(".title.has_fixed_background").css({"background-size": a - $scroll + "px auto"})
        }
        $j(window).on("scroll", function () {
            if ($j(".title.has_fixed_background").length) {
                var b = $scroll - $j(".title.has_fixed_background").offset().top, d = -(b * c);
                $j(".title.has_fixed_background").css({"background-position": "center " + (d + add_for_admin_bar) + "px"}), $j(".title.has_fixed_background").hasClass("zoom_out") && $j(".title.has_fixed_background").css({"background-size": a - $scroll + "px auto"})
            }
        })
    }
}
function initParallax() {
    "use strict";
    $j(".parallax_section_holder").length && $j(".parallax_section_holder").each(function () {
        var a = $j(this);
        a.hasClass("qode_full_screen_height_parallax") && a.height($window_height);
        var b = .4 * a.data("speed");
        a.parallax("50%", b)
    })
}
function initSideAreaScroll() {
    "use strict";
    $j(".side_menu").length && $j(".side_menu").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 40,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    })
}
function initVerticalAreaMenuScroll() {
    "use strict";
    $j(".vertical_menu_area.with_scroll").length && $j(".vertical_menu_area.with_scroll").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 40,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    })
}
function loadMore() {
    "use strict";
    var a = 1;
    $j(".load_more a").on("click", function (b) {
        b.preventDefault();
        var c = ($j(this), $j(this).closest(".projects_holder_outer")), d = $j(this).attr("href"), e = ".projects_holder", f = ".portfolio_paging .load_more a", g = $j(f).attr("href"), h = $j(".projects_holder .filler").length, i = $j(".portfolio_paging"), j = $j(".portfolio_paging_loading");
        i.hide(), j.show(), $j.get(d + "", function (b) {
            if ($j(e).is(".justified-gallery")) {
                var c = $j(e, b).wrapInner("").html();
                g = $j(f, b).attr("href"), $j(e, b).waitForImages(function () {
                    $j(e).find("article:last").after(c), $j(e).find("article").css("visibility", "visible"), $j(e).justifiedGallery("norewind"), prettyPhoto(), $j(".load_more").attr("rel") > a ? $j(".load_more a").attr("href", g) : $j(".load_more").remove(), $j(".projects_holder .portfolio_paging:last").remove(), i.show(), j.hide()
                })
            } else {
                $j(".projects_holder .filler").slice(-h).remove();
                var c = $j(e, b).wrapInner("").html();
                g = $j(f, b).attr("href"), $j(e, b).waitForImages(function () {
                    if ($j("article.mix:last").after(c), $j(".projects_holder article").css("visibility", "visible"), $j("article:not(.show)").each(function (a) {
                            $j(this).addClass("show")
                        }), $j(".masonry_with_space").length) $j(".masonry_with_space .projects_holder").isotope("reloadItems").isotope(); else {
                        var b = $j("article.mix:first").height();
                        $j("article.mix").css("min-height", b), $j(".projects_holder").mixitup("remix", "all")
                    }
                    prettyPhoto(), $j(".load_more").attr("rel") > a ? $j(".load_more a").attr("href", g) : $j(".load_more").remove(), $j(".projects_holder .portfolio_paging:last").remove(), $j("article.mix").css("min-height", 0), i.show(), j.hide()
                })
            }
        }).done(function () {
            setTimeout(function () {
                qodeInitPortFilterCounter(c)
            }, 1e3)
        }), a++
    })
}
function prettyPhoto() {
    "use strict";
    $j("a[data-rel]").each(function () {
        $j(this).attr("rel", $j(this).data("rel"))
    }), $j("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: "normal",
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: .8,
        show_title: !0,
        allow_resize: !0,
        horizontal_padding: 0,
        default_width: 650,
        default_height: 400,
        counter_separator_label: "/",
        theme: "pp_default",
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        social_tools: !1
    })
}
function initMobileMenu() {
    "use strict";
    $j(".mobile_menu_button > span").on("tap click", function (a) {
        a.preventDefault(), $j(".mobile_menu > ul").is(":visible") ? $j(".mobile_menu > ul").slideUp(200) : $j(".mobile_menu > ul").slideDown(200)
    }), $j(".mobile_menu > ul > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > h3, .mobile_menu > ul > li.has_sub > a[href*='#']").on("tap click", function (a) {
        a.preventDefault(), $j(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible") ? ($j(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200), $j(this).closest("li.has_sub").removeClass("open_sub")) : ($j(this).closest("li.has_sub").addClass("open_sub"), $j(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200))
    }), $j(".mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > h3, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > a[href*='#']").on("tap click", function (a) {
        a.preventDefault(), $j(this).parent().find("ul.sub_menu").is(":visible") ? ($j(this).parent().find("ul.sub_menu").slideUp(200), $j(this).parent().removeClass("open_sub")) : ($j(this).parent().addClass("open_sub"), $j(this).parent().find("ul.sub_menu").slideDown(200))
    }), $j(".mobile_menu ul li > a, .q_logo a").on("click", function () {
        "http://#" !== $j(this).attr("href") && "#" !== $j(this).attr("href") && $j(".mobile_menu > ul").slideUp()
    })
}
function initFlexSlider() {
    "use strict";
    $j(".flexslider").each(function () {
        var a = $j(this), b = 8e3;
        "undefined" != typeof a.data("interval") && a.data("interval") !== !1 && (b = 1e3 * parseFloat(a.data("interval")));
        var c = !0;
        "undefined" != typeof a.data("direction") && (c = a.data("direction"));
        var d = !1;
        "undefined" != typeof a.data("control") && (d = a.data("control"));
        var e = !0;
        "undefined" != typeof a.data("pause-on-hover") && (e = a.data("pause-on-hover"));
        var f = !1;
        "undefined" != typeof a.data("drag") && (f = a.data("drag"));
        var g = !0;
        0 === b && (g = !1);
        var h = "slide";
        "undefined" != typeof a.data("flex_fx") && a.data("flex_fx") !== !1 && (h = a.data("flex_fx")), a.flexslider({
            animationLoop: !0,
            controlNav: d,
            directionNav: c,
            useCSS: !1,
            pauseOnAction: e,
            pauseOnHover: e,
            slideshow: g,
            animation: h,
            prevText: "<div><i class='fa fa-angle-left'></i></div>",
            nextText: "<div><i class='fa fa-angle-right'></i></div>",
            animationSpeed: 600,
            slideshowSpeed: b,
            touch: !0,
            start: function () {
                setTimeout(function () {
                    $j(".flexslider").fitVids()
                }, 100)
            }
        }), a.find(".flex-direction-nav a").click(function (a) {
            a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation()
        }), f && a.swipe({
            swipeLeft: function () {
                a.flexslider("next")
            }, swipeRight: function () {
                a.flexslider("prev")
            }, threshold: 20
        })
    })
}
function fitVideo() {
    "use strict";
    $j(".portfolio_images").fitVids(), $j(".video_holder").fitVids(), $j(".format-video .post_image").fitVids(), $j(".format-video .q_masonry_blog_post_image").fitVids()
}
function initPortfolioSingleInfo() {
    "use strict";
    var a = $j(".portfolio_single_follow");
    if ($j(".portfolio_single_follow").length > 0) {
        var b = a.offset();
        $scrollHeight = $j(".portfolio_container").height();
        var c = $j(".portfolio_container").offset(), d = $j(window), e = parseInt($j("header.page_header").css("height"), 10);
        d.scroll(function () {
            d.width() > 960 ? d.scrollTop() + e + 3 > b.top ? d.scrollTop() + e + a.height() + 24 < c.top + $scrollHeight ? a.stop().animate({marginTop: d.scrollTop() - b.top + e}) : a.stop().animate({marginTop: $scrollHeight - a.height() - 24}) : a.stop().animate({marginTop: 0}) : a.css("margin-top", 0)
        })
    }
}
function initTabs() {
    "use strict";
    if ($j(".q_tabs").length) {
        $j(".q_tabs").appear(function () {
            $j(".q_tabs").css("visibility", "visible")
        }, {accX: 0, accY: -100});
        var a = $j(".tabs-nav"), b = a.children("li");
        a.each(function () {
            var a = $j(this);
            a.next().children(".tab-content").stop(!0, !0).hide().first().show(), a.children("li").first().addClass("active").stop(!0, !0).show()
        }), b.on("click", function (a) {
            var b = $j(this);
            b.siblings().removeClass("active").end().addClass("active"), b.parent().next().children(".tab-content").stop(!0, !0).hide().siblings(b.find("a").attr("href")).fadeIn(), a.preventDefault()
        })
    }
}
function qodeInitAdvancedTabs() {
    var a = $j(".qode-advanced-tabs");
    a.length && a.each(function () {
        var a = $j(this);
        a.children(".qode-advanced-tab-container").each(function (a) {
            a += 1;
            var b = $j(this), c = b.attr("id"), d = b.parent().find(".qode-advanced-tabs-nav li:nth-child(" + a + ") a"), e = d.attr("href");
            c = "#" + c, c.indexOf(e) > -1 && d.attr("href", c)
        }), a.tabs()
    })
}
function qodeInitAdvancedTabsIcons() {
    var a = $j(".qode-advanced-tab-container");
    a.length && a.each(function () {
        var a = $j(this), b = a.attr("id"), c = "";
        "undefined" == typeof a.data("icon-html") && "false" === a.data("icon-html") || (c = a.data("icon-html"));
        var d = a.parents(".qode-advanced-tabs").find('.qode-advanced-tabs-nav > li a[href="#' + b + '"]');
        "undefined" != typeof d && d.children(".qode-advanced-icon-frame").append(c)
    })
}
function initAccordion() {
    "use strict";
    $j(".q_accordion_holder").length && ($j(".q_accordion_holder").appear(function () {
        $j(".q_accordion_holder").css("visibility", "visible")
    }, {accX: 0, accY: -100}), $j(".accordion").length && ($j(".accordion").accordion({
        animate: "swing",
        collapsible: !0,
        active: !1,
        icons: "",
        heightStyle: "content",
        activate: function (a, b) {
            initParallax()
        }
    }), $j(".accordion").each(function () {
        var a = parseInt($j(this).data("active-tab"));
        "" !== a && (a -= 1, $j(this).accordion("option", "active", a));
        var b = parseInt($j(this).data("border-radius"));
        "" !== b && $j(this).find(".accordion_mark").css("border-radius", b + "px");
        var c = "yes" == $j(this).data("collapsible");
        $j(this).accordion("option", "collapsible", c), $j(this).accordion("option", "collapsible", c)
    })), $j(".toggle").addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find(".title-holder").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover(function () {
        $j(this).toggleClass("ui-state-hover")
    }).click(function () {
        return $j(this).toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom").next().toggleClass("ui-accordion-content-active").slideToggle(400), !1
    }).next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), $j(".toggle").each(function () {
        var a = parseInt($j(this).data("active-tab"));
        "" !== a && a >= 1 && (a -= 1, $j(this).find(".ui-accordion-content").eq(a).show(), $j(this).find(".ui-accordion-header").eq(a).addClass("ui-state-active"))
    }))
}
function initAccordionContentLink() {
    "use strict";
    $j(".accordion").length && $j(".accordion_holder .accordion_inner .accordion_content a").click(function () {
        return "_blank" === $j(this).attr("target") ? window.open($j(this).attr("href"), "_blank") : window.open($j(this).attr("href"), "_self"), !1
    })
}
function initTestimonials() {
    "use strict";
    $j(".testimonials_carousel").length && $j(".testimonials_carousel").each(function () {
        var a = 5e3, b = $j(this);
        "undefined" != typeof b.data("auto-rotate-slides") && b.data("auto-rotate-slides") !== !1 && (a = 1e3 * parseFloat(b.data("auto-rotate-slides")));
        var c = !0;
        0 === a && (c = !1);
        var d = "fade";
        "undefined" != typeof b.data("animation-type") && b.data("animation-type") !== !1 && (d = b.data("animation-type"));
        var e = !0;
        "undefined" != typeof b.data("show-navigation") && (e = "no" != b.data("show-navigation"));
        var f = 600;
        "undefined" != typeof b.data("animation-speed") && b.data("animation-speed") !== !1 && (f = b.data("animation-speed"));
        var g = qodeNumberOfTestimonialsItems(b), h = 0, i = 0;
        "undefined" != typeof g && 1 !== g && (h = 200, i = 40), b.flexslider({
            animationLoop: !0,
            controlNav: !1,
            directionNav: e,
            useCSS: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            slideshow: c,
            animation: d,
            itemMargin: i,
            minItems: g,
            maxItems: g,
            itemWidth: h,
            animationSpeed: f,
            slideshowSpeed: a,
            start: function (a) {
                initParallax()
            }
        })
    })
}
function qodeNumberOfTestimonialsItems(a) {
    var b = a.data("number-per-slide");
    return 768 > $window_width && b > 1 ? b = 1 : 1024 > $window_width && b > 2 && (b = 2), b
}
function qodeNumberOfTestimonialsItemsResize() {
    var a = $j(".testimonials_carousel, .testimonials_c_carousel");
    a.length && a.each(function () {
        var a = $j(this), b = qodeNumberOfTestimonialsItems(a);
        "undefined" != typeof a.data("flexslider") && (a.data("flexslider").vars.minItems = b), "undefined" != typeof a.data("flexslider") && (a.data("flexslider").vars.maxItems = b)
    })
}
function initTestimonialsCarousel() {
    "use strict";
    $j(".testimonials_c_carousel").length && $j(".testimonials_c_carousel").each(function () {
        var a = 5e3, b = $j(this);
        "undefined" != typeof b.data("auto-rotate-slides") && b.data("auto-rotate-slides") !== !1 && (a = 1e3 * parseFloat(b.data("auto-rotate-slides")));
        var c = !0;
        0 === a && (c = !1);
        var d = !0;
        "undefined" != typeof b.data("show-navigation") && (d = "no" != b.data("show-navigation"));
        var e = 600;
        "undefined" != typeof b.data("animation-speed") && b.data("animation-speed") !== !1 && (e = b.data("animation-speed"));
        var f = qodeNumberOfTestimonialsItems(b), g = 0, h = 0;
        "undefined" != typeof f && 1 !== f && (g = 300, h = 30), b.flexslider({
            animationLoop: !0,
            controlNav: d,
            directionNav: !1,
            useCSS: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            slideshow: c,
            animation: "slide",
            itemMargin: h,
            minItems: f,
            maxItems: f,
            itemWidth: g,
            animationSpeed: e,
            slideshowSpeed: a,
            start: function (a) {
                initParallax()
            }
        })
    })
}
function initMessages() {
    "use strict";
    $j(".q_message").length && $j(".q_message").each(function () {
        $j(this).find(".close").click(function (a) {
            a.preventDefault(), $j(this).parent().parent().fadeOut(500)
        })
    })
}
function initElementsAnimation() {
    "use strict";
    $j(".element_from_fade").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_fade").each(function () {
        var a = $j(this);
        a.appear(function () {
            a.addClass("element_from_fade_on")
        }, {accX: 0, accY: -100})
    }), $j(".element_from_left").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_left").each(function () {
        var a = $j(this);
        a.appear(function () {
            a.addClass("element_from_left_on")
        }, {accX: 0, accY: -100})
    }), $j(".element_from_right").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_right").each(function () {
        var a = $j(this);
        a.appear(function () {
            a.addClass("element_from_right_on")
        }, {accX: 0, accY: -100})
    }), $j(".element_from_top").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_top").each(function () {
        var a = $j(this);
        a.appear(function () {
            a.addClass("element_from_top_on")
        }, {accX: 0, accY: -100})
    }), $j(".element_from_bottom").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_bottom").each(function () {
        var a = $j(this);
        a.appear(function () {
            a.addClass("element_from_bottom_on")
        }, {accX: 0, accY: -100})
    }), $j(".element_transform").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_transform").each(function () {
        var a = $j(this);
        a.appear(function () {
            a.addClass("element_transform_on")
        }, {accX: 0, accY: -100})
    })
}
function fitAudio() {
    "use strict";
    $j("audio.blog_audio").mediaelementplayer({audioWidth: "100%"})
}
function initBlog() {
    "use strict";
    if ($j(".blog_holder.masonry, .blog_holder.blog_pinterest").length) {
        var a = $j(this).closest(".container_inner").width();
        $j(".blog_holder").closest(".column_inner").length && (a = $j(".blog_holder").closest(".column_inner").width()), $j(".blog_holder").width(a);
        var b = $j(".blog_holder");
        if (b.waitForImages(function () {
                setTimeout(function () {
                    b.isotope({
                        itemSelector: "article",
                        resizable: !1,
                        masonry: {columnWidth: ".blog_holder_grid_sizer", gutter: ".blog_holder_grid_gutter"}
                    }), $j(".blog_holder.masonry, .blog_holder.blog_pinterest").animate({opacity: "1"}, 500)
                }, 400)
            }), $j(".filter").click(function () {
                var a = $j(this).attr("data-filter");
                return b.isotope({filter: a}), !1
            }), b.hasClass("masonry_infinite_scroll")) b.infinitescroll({
            navSelector: ".blog_infinite_scroll_button span",
            nextSelector: ".blog_infinite_scroll_button span a",
            itemSelector: "article",
            loading: {finishedMsg: finished_text, msgText: loading_text}
        }, function (a) {
            b.isotope("appended", $j(a)), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
                $j(".blog_holder.masonry, .blog_holder.blog_pinterest").isotope("layout")
            }, 400)
        }); else if (b.hasClass("masonry_load_more")) {
            var c = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function (a) {
                a.preventDefault();
                var d = $j(".blog_load_more_button"), e = $j(".blog_load_more_button_loading");
                d.hide(), e.show();
                var f = $j(this).attr("href"), g = ".masonry_load_more", h = ".blog_load_more_button a", i = $j(h).attr("href");
                $j.get(f + "", function (a) {
                    var f = $j(g, a).wrapInner("").html();
                    i = $j(h, a).attr("href"), b.append($j(f)).isotope("reloadItems").isotope({sortBy: "original-order"}), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
                        $j(".blog_holder.masonry, .blog_holder.blog_pinterest").isotope("layout")
                    }, 400), d.show(), e.hide(), $j(".blog_load_more_button span").attr("rel") > c ? $j(".blog_load_more_button a").attr("href", i) : $j(".blog_load_more_button").remove()
                }), c++
            })
        }
    }
}
function initBlogMasonryFullWidth() {
    "use strict";
    if ($j(".masonry_full_width").length) {
        var a = $j(".full_width_inner").width();
        $j(".masonry_full_width").width(a);
        var b = $j(".masonry_full_width");
        if ($j(".filter").click(function () {
                var a = $j(this).attr("data-filter");
                return b.isotope({filter: a}), !1
            }), b.hasClass("masonry_infinite_scroll")) b.infinitescroll({
            navSelector: ".blog_infinite_scroll_button span",
            nextSelector: ".blog_infinite_scroll_button span a",
            itemSelector: "article",
            loading: {finishedMsg: finished_text, msgText: loading_text}
        }, function (a) {
            b.isotope("appended", $j(a)), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
                $j(".blog_holder.masonry_full_width").isotope("layout")
            }, 400)
        }); else if (b.hasClass("masonry_load_more")) {
            var c = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function (a) {
                a.preventDefault();
                var d = $j(this).attr("href"), e = ".masonry_load_more", f = ".blog_load_more_button a", g = $j(f).attr("href");
                $j.get(d + "", function (a) {
                    var d = $j(e, a).wrapInner("").html();
                    g = $j(f, a).attr("href"), b.append($j(d)).isotope("reloadItems").isotope({sortBy: "original-order"}), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
                        $j(".blog_holder.masonry_full_width").isotope("layout")
                    }, 400), $j(".blog_load_more_button span").attr("rel") > c ? $j(".blog_load_more_button a").attr("href", g) : $j(".blog_load_more_button").remove()
                }), c++
            })
        }
        b.waitForImages(function () {
            setTimeout(function () {
                b.isotope({
                    itemSelector: "article",
                    resizable: !1,
                    masonry: {columnWidth: ".blog_holder_grid_sizer", gutter: ".blog_holder_grid_gutter"}
                }), $j(".masonry_full_width").animate({opacity: "1"}, 500)
            }, 400)
        })
    }
}
function initBlogMasonryGallery() {
    "use strict";
    if ($j(".blog_holder.masonry_gallery").length) {
        qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width());
        var a = $j(".blog_holder.masonry_gallery");
        if (a.width(Math.round(a.parent().width())), a.isotope({
                itemSelector: "article",
                resizable: !1,
                masonry: {columnWidth: ".blog_holder_grid_sizer", gutter: ".blog_holder_grid_gutter"}
            }), a.waitForImages(function () {
                a.animate({opacity: "1"}, 300, function () {
                    a.isotope().isotope("layout")
                })
            }), a.hasClass("masonry_infinite_scroll")) a.infinitescroll({
            navSelector: ".blog_infinite_scroll_button span",
            nextSelector: ".blog_infinite_scroll_button span a",
            itemSelector: "article",
            loading: {finishedMsg: finished_text, msgText: loading_text}
        }, function (b) {
            a.isotope("appended", $j(b)), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function () {
                a.isotope("layout")
            }, 300)
        }); else if (a.hasClass("masonry_load_more")) {
            var b = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function (c) {
                c.preventDefault();
                var d = $j(this).attr("href"), e = ".masonry_load_more", f = ".blog_load_more_button a", g = $j(f).attr("href");
                $j.get(d + "", function (c) {
                    var d = $j(e, c).wrapInner("").html();
                    g = $j(f, c).attr("href"), a.append($j(d)).isotope("reloadItems").isotope({sortBy: "original-order"}), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function () {
                        a.isotope("layout")
                    }, 300), $j(".blog_load_more_button span").attr("rel") > b ? $j(".blog_load_more_button a").attr("href", g) : $j(".blog_load_more_button").remove()
                }), b++
            })
        }
        $j(window).resize(function () {
            qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width()), a.isotope().isotope("layout"), a.width(Math.round(a.parent().width()))
        })
    }
}
function initBlogGallery() {
    "use strict";
    if ($j(".blog_holder.blog_gallery, .blog_holder.blog_chequered").length) {
        qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width());
        var a = $j(".blog_holder.blog_gallery, .blog_holder.blog_chequered");
        if (a.width(Math.round(a.parent().width())), a.isotope({
                itemSelector: "article",
                resizable: !1,
                masonry: {columnWidth: ".blog_holder_grid_sizer", gutter: ".blog_holder_grid_gutter"}
            }), a.waitForImages(function () {
                a.animate({opacity: "1"}, 300, function () {
                    a.isotope().isotope("layout")
                })
            }), a.hasClass("masonry_infinite_scroll")) a.infinitescroll({
            navSelector: ".blog_infinite_scroll_button span",
            nextSelector: ".blog_infinite_scroll_button span a",
            itemSelector: "article",
            loading: {finishedMsg: finished_text, msgText: loading_text}
        }, function (b) {
            a.isotope("appended", $j(b)), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function () {
                a.isotope("layout")
            }, 300)
        }); else if (a.hasClass("masonry_load_more")) {
            var b = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function (c) {
                c.preventDefault();
                var d = $j(this).attr("href"), e = ".masonry_load_more", f = ".blog_load_more_button a", g = $j(f).attr("href");
                $j.get(d + "", function (c) {
                    var d = $j(e, c).wrapInner("").html();
                    g = $j(f, c).attr("href"), a.append($j(d)).isotope("reloadItems").isotope({sortBy: "original-order"}), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function () {
                        a.isotope("layout")
                    }, 300), $j(".blog_load_more_button span").attr("rel") > b ? $j(".blog_load_more_button a").attr("href", g) : $j(".blog_load_more_button").remove()
                }), b++
            })
        }
        $j(window).resize(function () {
            qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width()), a.isotope().isotope("layout"), a.width(Math.round(a.parent().width()))
        })
    }
}
function qodeResizeBlogMasonryGallery(a) {
    var b = $j(".blog_holder.masonry_gallery .large-height"), c = $j(".blog_holder.masonry_gallery .large-width"), d = $j(".blog_holder.masonry_gallery .large-width-height"), e = $j(".blog_holder.masonry_gallery .default");
    b.css("height", 2 * a), c.css("height", a), d.css("height", 2 * a), d.width() < 600 && d.css("height", d.width()), 600 > $window_width && b.css("height", b.width()), e.css("height", a)
}
function qodeResizeBlogGallery(a) {
    var b = $j(".blog_holder.blog_chequered .default");
    b.css("height", a)
}
function initSmallImageBlogHeight() {
    "use strict";
    $j(".blog_small_image").length && $j("article").each(function () {
        $j(this).find(".post_text_inner").css("min-height", $j(this).find(".post_image").height() - 46)
    })
}
function initQBlog() {
    "use strict";
    $j(".q_masonry_blog").length && $j(".q_masonry_blog").each(function () {
        var a = $j(this);
        a.waitForImages(function () {
            setTimeout(function () {
                a.isotope({
                    itemSelector: "article",
                    resizable: !1,
                    masonry: {columnWidth: ".q_masonry_blog_grid_sizer", gutter: ".q_masonry_blog_grid_gutter"}
                }), a.animate({opacity: "1"}, 500)
            }, 400)
        })
    })
}
function qodeBlogCompundMasonryGallery() {
    var a = $j(".qode_blog_masonry_gallery"), b = a.find(".qode_blog_gallery_sizer").outerWidth(), c = b + 8, d = function () {
        b = a.find(".qode_blog_gallery_sizer").outerWidth(), c = b + 8;
        var d = a.find(".qode_blog_gallery_item.default"), e = a.find(".qode_blog_img_large_height"), f = a.find(".qode_blog_img_large_height_width");
        d.css("height", c), e.css("height", Math.round(2 * c)), $window_width > 600 ? f.css("height", Math.round(2 * c)) : f.css("height", c)
    }, e = function () {
        a.isotope({
            itemSelector: ".qode_blog_gallery_item",
            masonry: {columnWidth: ".qode_blog_gallery_sizer", gutter: ".qode_blog_gallery_gutter"}
        })
    };
    return {
        init: function () {
            a.length && (d(), e(), $j(window).resize(function () {
                d()
            }))
        }
    }
}
function qodeBlogHeadlines() {
    "use strict";
    if ($j(".blog_headlines").length) {
        var a = $j(".blog_headlines"), b = function () {
            a.bigtext({childSelector: "> article > h2", minfontsize: 20}), a.find("h2").appear(function () {
                $j(this).addClass("show")
            }, {accX: 0, accY: -100})
        };
        if (b(), a.hasClass("blog_infinite_scroll")) a.infinitescroll({
            navSelector: ".blog_infinite_scroll_button span",
            nextSelector: ".blog_infinite_scroll_button span a",
            itemSelector: "article",
            loading: {finishedMsg: finished_text, msgText: loading_text}
        }, function () {
            b()
        }); else if (a.hasClass("blog_load_more")) {
            var c = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function (d) {
                d.preventDefault();
                var e = $j(this).attr("href"), f = ".blog_load_more", g = ".blog_load_more_button a", h = $j(g).attr("href");
                $j.get(e + "", function (d) {
                    var e = $j(f, d).wrapInner("").html();
                    h = $j(g, d).attr("href"), a.append($j(e)), b(), $j(".blog_load_more_button span").attr("rel") > c ? $j(".blog_load_more_button a").attr("href", h) : $j(".blog_load_more_button").remove()
                }), c++
            })
        }
    }
}
function initProgressBarsIcon() {
    "use strict";
    $j(".q_progress_bars_icons_holder").length && $j(".q_progress_bars_icons_holder").each(function () {
        var a = $j(this), b = 200;
        "undefined" != typeof a.data("element-appearance") && a.data("element-appearance") !== !1 && (b = a.data("element-appearance")), a.appear(function () {
            a.find(".q_progress_bars_icons").css("opacity", "1"), a.find(".q_progress_bars_icons").each(function () {
                var a = $j(this).find(".q_progress_bars_icons_inner").data("number"), b = $j(this).find(".q_progress_bars_icons_inner").data("size");
                "" !== b && ($j(this).find(".q_progress_bars_icons_inner.custom_size .bar").css({
                    width: b + "px",
                    height: b + "px"
                }), $j(this).find(".q_progress_bars_icons_inner.custom_size .bar .fa-stack").css({"font-size": b / 2 + "px"}));
                var c = $j(this).find(".bar");
                c.each(function (b) {
                    if (a > b) {
                        var d = 150 * (b + 1);
                        timeOuts[b] = setTimeout(function () {
                            $j(c[b]).addClass("active")
                        }, d)
                    }
                })
            })
        }, {accX: 0, accY: -b})
    })
}
function initMasonryGallery() {
    "use strict";
    resizeMasonryGallery($j(".grid-sizer").width()), $j(".masonry_gallery_holder").length && ($j(".masonry_gallery_holder").each(function () {
        var a = $j(this);
        a.waitForImages(function () {
            a.animate({opacity: 1}), a.isotope({
                itemSelector: ".masonry_gallery_item",
                masonry: {columnWidth: ".grid-sizer"}
            }), a.find(".masonry_gallery_item.parallax_item").each(function (b) {
                $j(this).masonryParallax(a.data("parallax_item_speed"), !0, a.data("parallax_item_offset"))
            })
        })
    }), $j(window).resize(function () {
        resizeMasonryGallery($j(".grid-sizer").width()), $j(".masonry_gallery_holder").isotope("reloadItems")
    }))
}
function resizeMasonryGallery(a) {
    "use strict";
    var b = $j(".masonry_gallery_holder .rectangle_portrait"), c = $j(".masonry_gallery_holder .rectangle_landscape"), d = $j(".masonry_gallery_holder .square_big"), e = $j(".masonry_gallery_holder .square_small");
    b.css("height", 2 * a), window.innerWidth < 600 ? c.css("height", a / 2) : c.css("height", a), d.css("height", 2 * a), window.innerWidth < 600 && d.css("height", d.width() + 20), e.css("height", a)
}
function initMoreFacts() {
    "use strict";
    $j(".more_facts_holder").length && $j(".more_facts_holder").each(function () {
        var a = $j(this), b = "More Facts";
        "" !== $j(this).find(".more_facts_button").data("morefacts") && (b = $j(this).find(".more_facts_button").data("morefacts"));
        var c = "Less Facts";
        "" !== $j(this).find(".more_facts_button").data("lessfacts") && (c = $j(this).find(".more_facts_button").data("lessfacts")), a.find(".more_facts_button").on("mouseenter", function () {
            $j(this).css("color", $j(this).data("hovercolor"))
        }).on("mouseleave", function () {
            0 == a.find(".more_facts_outer").height() && $j(this).css("color", $j(this).data("color"));
        });
        var d = 70;
        "" !== a.find(".more_facts_inner").data("expandable_content_top_padding") && (d = a.find(".more_facts_inner").data("expandable_content_top_padding"), a.find(".more_facts_inner").css({"padding-top": d}));
        var e = 0, f = 600;
        a.find(".more_facts_button").click(function () {
            e = a.find(".more_facts_inner").height() + d, f = e > 0 && 601 > e ? 800 : e > 600 && 1201 > e ? 1500 : 2100, a.hasClass("more_fact_opened") ? (a.find(".more_facts_fake_arrow").fadeOut(f), a.find(".more_facts_outer").stop().animate({height: "0px"}, f, function () {
                a.find(".more_facts_button").is(":hover") || a.find(".more_facts_button").css("color", a.find(".more_facts_button").data("color")), a.removeClass("more_fact_opened"), $j(".parallax_section_holder").length && initParallax()
            }), $j(this).find(".more_facts_button_text").text(b), $j(this).find(".more_facts_button_arrow").removeClass("rotate_arrow")) : (a.addClass("more_fact_opened"), a.find(".more_facts_fake_arrow").fadeIn(f), a.find(".more_facts_outer").stop().animate({height: e}, f, function () {
                $j(".parallax_section_holder").length && initParallax()
            }), $j(this).find(".more_facts_button_text").text(c), $j(this).find(".more_facts_button_arrow").addClass("rotate_arrow"))
        })
    })
}
function placeholderReplace() {
    "use strict";
    $j("#contact-form [placeholder]").focus(function () {
        var a = $j(this);
        a.val() === a.attr("placeholder") && (this.originalType && (this.type = this.originalType, delete this.originalType), a.val(""), a.removeClass("placeholder"))
    }).blur(function () {
        var a = $j(this);
        "" === a.val() && ("password" === this.type && (this.originalType = this.type, this.type = "text"), a.addClass("placeholder"), a.val(a.attr("placeholder")))
    }).blur(), $j("#contact-form [placeholder]").parents("form").submit(function () {
        $j(this).find("[placeholder]").each(function () {
            var a = $j(this);
            a.val() === a.attr("placeholder") && a.val("")
        })
    })
}
function totop_button(a) {
    "use strict";
    var b = $j("#back_to_top");
    b.removeClass("off on"), "on" === a ? b.addClass("on") : b.addClass("off")
}
function backButtonShowHide() {
    "use strict";
    $j(window).scroll(function () {
        var a, b = $j(this).scrollTop(), c = $j(this).height();
        a = b > 0 ? b + c / 2 : 1, totop_button(1e3 > a ? "off" : "on")
    })
}
function backToTop() {
    "use strict";
    $j(document).on("click", "#back_to_top", function (a) {
        a.preventDefault(), $j("body,html").animate({scrollTop: 0}, $j(window).scrollTop() / 3, "linear")
    })
}
function initSteps() {
    "use strict";
    $j(".q_steps_holder").length && $j(".q_steps_holder").each(function () {
        $j(this).appear(function () {
            $j(this).addClass("show")
        }, {accX: 0, accY: -200})
    })
}
function initMessageHeight() {
    "use strict";
    $j(".q_message.with_icon").length && $j(".q_message.with_icon").each(function () {
        $j(this).find(".message_text_holder").height() > $j(this).find(".q_message_icon_holder").height() ? $j(this).find(".q_message_icon_holder").height($j(this).find(".message_text").height()) : $j(this).find(".message_text").height($j(this).find(".q_message_icon_holder").height())
    })
}
function initImageHover() {
    "use strict";
    $j(".image_hover").length && $j(".image_hover").each(function () {
        $j(this).appear(function () {
            var a = 300, b = $j(this).attr("data-transition-delay"), c = a + parseFloat(b), d = $j(this);
            setTimeout(function () {
                d.addClass("show")
            }, parseFloat(b)), setTimeout(function () {
                d.removeClass("show")
            }, c)
        }, {accX: 0, accY: -200})
    })
}
function initProgressBarsVertical() {
    "use strict";
    $j(".q_progress_bars_vertical").length && $j(".q_progress_bars_vertical").each(function () {
        $j(this).appear(function () {
            initToCounterVerticalProgressBar($j(this));
            var a = $j(this).find(".progress_content").data("percentage");
            $j(this).find(".progress_content").css("height", "0%"), $j(this).find(".progress_content").animate({height: a + "%"}, 1500)
        }, {accX: 0, accY: -200})
    })
}
function initToCounterVerticalProgressBar(a) {
    "use strict";
    a.find(".progress_number span").length && a.find(".progress_number span").each(function () {
        var a = parseFloat($j(this).text());
        $j(this).countTo({from: 0, to: a, speed: 1500, refreshInterval: 50})
    })
}
function checkAnchorOnLoad() {
    "use strict";
    var a, b, c = window.location.hash, d = $j("body").hasClass("paspartu_on_top_fixed") ? $window_width * paspartu_width : 0;
    if ("" !== c && $j('[data-q_id="' + c + '"]').length > 0) {
        if ($j("header.page_header").hasClass("fixed") && !$j("body").hasClass("vertical_menu_enabled"))if (b = $j("header.page_header").hasClass("scroll_top") ? header_top_height : 0, !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent"))if (header_height - ($j('[data-q_id="' + c + '"]').offset().top + b) / 4 >= min_header_height_scroll) {
            var e = $j('[data-q_id="' + c + '"]').offset().top - header_height - d;
            a = e + e / 4 + e / 16 + e / 64 + 1
        } else a = $j("header.page_header").hasClass("centered_logo") ? $j('[data-q_id="' + c + '"]').offset().top - min_header_height_scroll - logo_height - 30 - d : $j('[data-q_id="' + c + '"]').offset().top - min_header_height_scroll - d; else a = $j('[data-q_id="' + c + '"]').offset().top - d; else a = $j("header.page_header").hasClass("fixed_top_header") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + c + '"]').offset().top - header_top_height - d : $j('[data-q_id="' + c + '"]').offset().top - d : $j("header.page_header").hasClass("fixed_hiding") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + c + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding ? $j('[data-q_id="' + c + '"]').offset().top - header_height - logo_height / 2 - 40 - d : $j('[data-q_id="' + c + '"]').offset().top - min_header_height_fixed_hidden - 40 - d : $j('[data-q_id="' + c + '"]').offset().top - d : ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("body").hasClass("vertical_menu_enabled")) && (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) ? sticky_amount >= $j('[data-q_id="' + c + '"]').offset().top ? $j('[data-q_id="' + c + '"]').offset().top + 1 - d : $j('[data-q_id="' + c + '"]').offset().top - min_header_height_sticky - d : $j('[data-q_id="' + c + '"]').offset().top - d;
        $j("html, body").animate({scrollTop: Math.round(a)}, 1500, function () {
        })
    }
    $j(".main_menu a, .vertical_menu a, .mobile_menu a").each(function () {
        var a = $j(this).prop("hash");
        "" !== a && $j('[data-q_id="' + a + '"]').length > 0 && $j('[data-q_id="' + a + '"]').offset().top >= $window_height && 0 === $scroll && ($j(this).parent().removeClass("active current-menu-item"), $j(this).removeClass("current"))
    })
}
function changeActiveState(a) {
    "use strict";
    $j(".main_menu a[href*='#']").length && $j(".main_menu a").parent().removeClass("active"), $j(".main_menu a").each(function () {
        var b = $j(this).prop("hash");
        b === a && (0 === $j(this).closest(".second").length ? $j(this).parent().addClass("active") : $j(this).closest(".second").parent().addClass("active"), $j(".main_menu a").removeClass("current"), $j(this).addClass("current"))
    }), $j(".vertical_menu a[href*='#']").length && $j(".vertical_menu a").parent().removeClass("active"), $j(".vertical_menu a").each(function () {
        var b = $j(this).prop("hash");
        b === a && (0 === $j(this).closest(".second").length ? $j(this).parent().addClass("active") : $j(this).closest(".second").parent().addClass("active"), $j(".vertical_menu a").removeClass("current"), $j(this).addClass("current"))
    }), $j(".mobile_menu a[href*='#']").length && $j(".mobile_menu a").parent().removeClass("active"), $j(".mobile_menu a").each(function () {
        var b = $j(this).prop("hash");
        b === a && (0 === $j(this).closest(".sub_menu").length ? $j(this).parent().addClass("active") : $j(this).closest(".sub_menu").parent().addClass("active"), $j(".mobile_menu a").removeClass("current"), $j(this).addClass("current"))
    })
}
function checkAnchorOnScroll() {
    "use strict";
    $j("[data-q_id]").length && !$j("header.page_header").hasClass("regular") && ($j("[data-q_id]").waypoint(function (a) {
        "down" === a && changeActiveState($j(this).data("q_id"))
    }, {offset: "50%"}), $j("[data-q_id]").waypoint(function (a) {
        "up" === a && changeActiveState($j(this).data("q_id"))
    }, {
        offset: function () {
            return -($j(this).outerHeight() - 150)
        }
    }))
}
function initHashClick() {
    "use strict";
    var a, b = $j("html, body"), c = $j("body").hasClass("paspartu_on_top_fixed") ? $window_width * paspartu_width : 0;
    $j(document).on("click", ".main_menu a, .vertical_menu a, .qbutton:not(.contact_form_button), .anchor, .widget li.anchor a", function () {
        var d, e = $j(this), f = $j(this).prop("hash");
        if ("" !== f && "" === $j(this).attr("href").split("#")[0] || "" !== f && "" !== $j(this).attr("href").split("#")[0] && f === window.location.hash || "" !== f && $j(this).attr("href").split("#")[0] === window.location.href.split("#")[0]) {
            if ($j("header.page_header").hasClass("fixed") && !$j("body").hasClass("vertical_menu_enabled"))if (d = $j("header.page_header").hasClass("scroll_top") ? header_top_height : 0, !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent"))if (header_height - ($j('[data-q_id="' + f + '"]').offset().top + d) / 4 >= min_header_height_scroll) {
                var g = $j('[data-q_id="' + f + '"]').offset().top - header_height - c;
                a = g + g / 4 + g / 16 + g / 64 + 1
            } else a = $j("header.page_header").hasClass("centered_logo") ? $j('[data-q_id="' + f + '"]').offset().top - min_header_height_scroll - logo_height - c - 30 : $j('[data-q_id="' + f + '"]').offset().top - min_header_height_scroll - c; else a = $j('[data-q_id="' + f + '"]').offset().top - c; else a = $j("header.page_header").hasClass("fixed_top_header") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + f + '"]').offset().top - header_top_height - c : $j('[data-q_id="' + f + '"]').offset().top - c : $j("header.page_header").hasClass("fixed_hiding") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + f + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding ? $j('[data-q_id="' + f + '"]').offset().top - header_height - logo_height / 2 - 40 - c : $j('[data-q_id="' + f + '"]').offset().top - min_header_height_fixed_hidden - 40 - c : $j('[data-q_id="' + f + '"]').offset().top - c : ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("body").hasClass("vertical_menu_enabled")) && (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) ? sticky_amount >= $j('[data-q_id="' + f + '"]').offset().top ? $j('[data-q_id="' + f + '"]').offset().top + 2 - c : $j('[data-q_id="' + f + '"]').offset().top - min_header_height_sticky - c : $j('[data-q_id="' + f + '"]').offset().top - c;
            return $j('[data-q_id="' + f + '"]').length > 0 && b.stop().animate({scrollTop: Math.round(a)}, 1500, function () {
                anchorActiveState(e)
            }), history.pushState && history.pushState(null, null, f), !1
        }
    }), $j(document).on("click", ".mobile_menu a")
}
function countClientsPerRow() {
    "use strict";
    $j(".qode_clients").length && $j(".qode_clients").each(function () {
        var a, b = $j(this), c = b.height(), d = b.width(), e = b.find(".qode_client_holder").width(), f = b.find(".qode_client_holder").length;
        b.find(".qode_client_holder").each(function () {
            a = a > $j(this).height() ? a : $j(this).height()
        }), a += 35;
        var g = (Math.ceil(c / a), Math.ceil(d / e)), h = Math.floor(f / g), i = f - g * h;
        0 === i && (i = g), b.find(".qode_client_holder").removeClass("border-bottom-none");
        var j = f - i - 1;
        b.find(".qode_client_holder:gt(" + j + ")").addClass("border-bottom-none")
    })
}
function animatedTextIconHeight() {
    "use strict";
    if ($j(".animated_icons_with_text").length) {
        var a, b = $j(".animated_icons_with_text");
        b.find(".animated_text p").each(function () {
            a = a > $j(this).height() ? a : $j(this).height()
        }), 155 > a && (a = 155), b.find(".animated_icon_with_text_inner").height(a)
    }
}
function countAnimatedTextIconPerRow() {
    "use strict";
    $j(".animated_icons_with_text").length && $j(".animated_icons_with_text").each(function () {
        var a, b = $j(this), c = (b.height(), b.width()), d = b.find(".animated_icon_with_text_holder").width() + 1, e = b.find(".animated_icon_with_text_holder").length;
        b.find(".animated_icon_with_text_holder").each(function () {
            a = a > $j(this).height() ? a : $j(this).height()
        }), a += 30;
        var f = Math.ceil(c / d), g = Math.floor(e / f), h = e - f * g;
        0 === h && (h = f), b.find(".animated_icon_with_text_holder").removeClass("border-bottom-none");
        var i = e - h - 1;
        b.find(".animated_icon_with_text_holder:gt(" + i + ")").addClass("border-bottom-none")
    })
}
function anchorActiveState(a) {
    a.closest(".main_menu").length > 0 && $j(".main_menu a").parent().removeClass("active"), a.closest(".vertical_menu").length > 0 && $j(".vertical_menu a").parent().removeClass("active"), 0 === a.closest(".second").length ? a.parent().addClass("active") : a.closest(".second").parent().addClass("active"), a.closest(".mobile_menu").length > 0 && ($j(".mobile_menu a").parent().removeClass("active"), a.parent().addClass("active")), $j(".mobile_menu a, .main_menu a, .vertical_menu a").removeClass("current"), a.addClass("current")
}
function initVideoBackground() {
    "use strict";
    $j(".video-wrap .video").mediaelementplayer({
        enableKeyboard: !1,
        iPadUseNativeControls: !1,
        pauseOtherPlayers: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1
    }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (initVideoBackgroundSize(), $j(".mobile-video-image").show(), $j(".video-wrap").remove())
}
function initVideoBackgroundSize() {
    "use strict";
    $j(".section .video-wrap").each(function (a) {
        var b = $j(this).closest(".section").outerWidth();
        $j(this).width(b);
        var c = $j(this).closest(".section").outerHeight();
        min_w = vid_ratio * (c + 20), $j(this).height(c);
        var d = b / video_width_original, e = (c - header_height) / video_height_original, f = e;
        d > e && (f = d), min_w > f * video_width_original && (f = min_w / video_width_original), $j(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(f * video_width_original + 2)), $j(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(f * video_height_original + 2)), $j(this).scrollLeft(($j(this).find("video").width() - b) / 2), $j(this).find(".mejs-overlay, .mejs-poster").scrollTop(($j(this).find("video").height() - c) / 2), $j(this).scrollTop(($j(this).find("video").height() - c) / 2), $j(this).css("opacity", 1), $j(".no-touch .section .mobile-video-image ").css("display", "none")
    }), $j(".carousel .item .video .video-wrap").each(function (a) {
        var b = $j(window).width();
        $j(this).width(b);
        var c = $j(window).width() < 1e3 ? $j("header.page_header").height() - 6 : 0, d = $j(this).closest(".carousel.slide").height() - c;
        min_w = vid_ratio * (d + 20), $j(this).height(d);
        var e = b / video_width_original, f = (d - header_height) / video_height_original, g = f;
        e > f && (g = e), min_w > g * video_width_original && (g = min_w / video_width_original), $j(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(g * video_width_original + 2)), $j(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(g * video_height_original + 2)), $j(this).scrollLeft(($j(this).find("video").width() - b) / 2), $j(this).find(".mejs-overlay, .mejs-poster").scrollTop(($j(this).find("video").height() - d) / 2), $j(this).scrollTop(($j(this).find("video").height() - d) / 2)
    }), $j(".portfolio_single .video .video-wrap, .blog_holder .video .video-wrap").each(function (a) {
        var b = $j(this), c = $j(this).closest(".video").outerWidth();
        $j(this).width(c);
        var d = 9 * c / 16;
        navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (b.parent().width(c), b.parent().height(d)), min_w = vid_ratio * (d + 20), $j(this).height(d);
        var e = c / video_width_original, f = (d - header_height) / video_height_original, g = f;
        e > f && (g = e), min_w > g * video_width_original && (g = min_w / video_width_original), $j(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(g * video_width_original + 2)), $j(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(g * video_height_original + 2)), $j(this).scrollLeft(($j(this).find("video").width() - c) / 2), $j(this).find(".mejs-overlay, .mejs-poster").scrollTop(($j(this).find("video").height() - d) / 2), $j(this).scrollTop(($j(this).find("video").height() - d) / 2)
    })
}
function initIconWithTextAnimation() {
    "use strict";
    $j(".q_icon_animation").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".q_icon_animation").each(function () {
        $j(this).appear(function () {
            $j(this).addClass("q_show_animation")
        }, {accX: 0, accY: -200})
    })
}
function initCheckSafariBrowser() {
    "use strict";
    -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && $j("body").addClass("safari_browser")
}
function initSearchButton() {
    $j(".search_slides_from_window_top").length && $j(".search_slides_from_window_top").click(function (a) {
        if (a.preventDefault(), $j("html").hasClass("touch")) "0" == $j(".qode_search_form").height() ? ($j('.qode_search_form input[type="text"]').onfocus = function () {
            window.scrollTo(0, 0), document.body.scrollTop = 0
        }, $j('.qode_search_form input[type="text"]').onclick = function () {
            window.scrollTo(0, 0), document.body.scrollTop = 0
        }, $j(".header_top_bottom_holder").css("top", "50px"), $j(".qode_search_form").css("height", "50px"), $j(".content_inner").css("margin-top", "50px"), 34 > $scroll && $j("header.page_header").css("top", "0")) : ($j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"), 34 > $scroll && $j("header.page_header").css("top", -$scroll)), $j(window).scroll(function () {
            "0" != $j(".qode_search_form").height() && $scroll > 50 && ($j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"))
        }), $j(".qode_search_close").click(function (a) {
            a.preventDefault(), $j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"), 34 > $scroll && $j("header.page_header").css("top", -$scroll)
        }); else {
            if ($j(".title").hasClass("has_fixed_background"))var b = parseInt($j(".title.has_fixed_background").css("backgroundPosition").split(" ")[1]); else var b = 0;
            "0" == $j(".qode_search_form").height() ? ($j('.qode_search_form input[type="text"]').focus(), $j(".header_top_bottom_holder").stop().animate({top: "50px"}, 150), $j(".qode_search_form").stop().animate({height: "50px"}, 150), $j(".content_inner").stop().animate({marginTop: "50px"}, 150), 34 > $scroll && $j("header.page_header").stop().animate({top: 0}, 150), $j(".title.has_fixed_background").animate({"background-position-y": b + 50 + "px"}, 150)) : ($j(".qode_search_form").stop().animate({height: "0"}, 150), $j(".header_top_bottom_holder").stop().animate({top: "0px"}, 150), $j(".content_inner").stop().animate({marginTop: "0"}, 150), 34 > $scroll && $j("header.page_header").stop().animate({top: -$scroll}, 150), $j(".title.has_fixed_background").animate({"background-position-y": b - 50 + "px"}, 150)), $j(window).scroll(function () {
                "0" != $j(".qode_search_form").height() && $scroll > 50 && ($j(".qode_search_form").stop().animate({height: "0"}, 150), $j(".header_top_bottom_holder").stop().animate({top: "0px"}, 150), $j(".content_inner").stop().animate({marginTop: "0"}, 150), $j(".title.has_fixed_background").css("backgroundPosition", "center " + b + "px"))
            }), $j(".qode_search_close").click(function (a) {
                a.preventDefault(), $j(".qode_search_form").stop().animate({height: "0"}, 150), $j(".content_inner").stop().animate({marginTop: "0"}, 150), $j(".header_top_bottom_holder").stop().animate({top: "0px"}, 150), 34 > $scroll && $j("header.page_header").stop().animate({top: -$scroll}, 150), $j(".title.has_fixed_background").animate({"background-position-y": b + "px"}, 150)
            })
        }
    }), $j(".search_slides_from_header_bottom").length && $j(".search_slides_from_header_bottom").click(function (a) {
        if (a.preventDefault(), $j(".qode_search_form_2").hasClass("animated")) $j(".qode_search_form_2").removeClass("animated"), $j(".qode_search_form_2").css("bottom", "0"); else {
            $j('.qode_search_form input[type="text"]').focus(), $j(".qode_search_form_2").addClass("animated");
            var b = $j(".qode_search_form_2").height();
            $j(".qode_search_form_2").css("bottom", -b)
        }
        $j(".qode_search_form_2").addClass("disabled"), $j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled"), "" !== $j(".qode_search_form_2 .qode_search_field").val() && " " !== $j(".qode_search_form_2 .qode_search_field").val() ? ($j('.qode_search_form_2 input[type="submit"]').removeAttr("disabled"), $j(".qode_search_form_2").removeClass("disabled")) : ($j(".qode_search_form_2").addClass("disabled"), $j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled")), $j(".qode_search_form_2 .qode_search_field").keyup(function () {
            "" !== $j(this).val() && " " != $j(this).val() ? ($j('.qode_search_form_2 input[type="submit"]').removeAttr("disabled"), $j(".qode_search_form_2").removeClass("disabled")) : ($j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled"), $j(".qode_search_form_2").addClass("disabled"))
        }), $j(".content, footer").click(function (a) {
            a.preventDefault(), $j(".qode_search_form_2").removeClass("animated"), $j(".qode_search_form_2").css("bottom", "0")
        })
    }), $j(".search_covers_header").length && $j(".search_covers_header").click(function (a) {
        if (a.preventDefault(), $j(".search_covers_only_bottom").length)var b = $j(".header_bottom").height(); else if ($j(".fixed_top_header").length)var b = $j(".top_header").height(); else var b = $j(".header_top_bottom_holder").height();
        $j(".qode_search_form_3 .form_holder_outer").height(b), $j(".search_covers_only_bottom").length && ($j(".qode_search_form_3").css("bottom", 0), $j(".qode_search_form_3").css("top", "auto")), $j(".qode_search_form_3").stop(!0).fadeIn(600, "easeOutExpo"), $j('.qode_search_form_3 input[type="text"]').focus(), $j(window).scroll(function () {
            if ($j(".search_covers_only_bottom").length)var a = $j(".header_bottom").height(); else if ($j(".fixed_top_header").length)var a = $j(".top_header").height(); else var a = $j(".header_top_bottom_holder").height();
            $j(".qode_search_form_3 .form_holder_outer").height(a)
        }), $j(".qode_search_close, .content, footer").click(function (a) {
            a.preventDefault(), $j(".qode_search_form_3").stop(!0).fadeOut(450, "easeOutExpo")
        }), $j(".qode_search_form_3").blur(function (a) {
            $j(".qode_search_form_3").stop(!0).fadeOut(450, "easeOutExpo")
        })
    }), $j(".fullscreen_search").length && ($j(".fullscreen_search_holder.from_circle").length && ($j(".fullscreen_search").on("click", function (a) {
        a.preventDefault(), $j(".fullscreen_search_overlay").hasClass("animate") ? ($j(".fullscreen_search_overlay").removeClass("animate"), $j(".fullscreen_search_holder").css("opacity", "0"), $j(".fullscreen_search_close").css("opacity", "0"), $j(".fullscreen_search_close").css("visibility", "hidden"), $j(".fullscreen_search").css("opacity", "1"), $j(".fullscreen_search_holder").css("display", "none")) : ($j(".fullscreen_search_overlay").addClass("animate"), $j(".fullscreen_search_holder").css("display", "block"), setTimeout(function () {
            $j(".fullscreen_search_holder").css("opacity", "1"), $j(".fullscreen_search_close").css("opacity", "1"), $j(".fullscreen_search_close").css("visibility", "visible"), $j(".fullscreen_search").css("opacity", "0")
        }, 200))
    }), $j(".fullscreen_search_close").on("click", function (a) {
        a.preventDefault(), $j(".fullscreen_search_overlay").removeClass("animate"), $j(".fullscreen_search_holder").css("opacity", "0"), $j(".fullscreen_search_close").css("opacity", "0"), $j(".fullscreen_search_close").css("visibility", "hidden"), $j(".fullscreen_search").css("opacity", "1"), $j(".fullscreen_search_holder").css("display", "none")
    })), $j(".fullscreen_search_holder.fade").length && ($j(".fullscreen_search").on("click", function (a) {
        a.preventDefault(), $j(".fullscreen_search_holder").hasClass("animate") ? ($j("body").removeClass("fullscreen_search_opened"), $j(".fullscreen_search_holder").removeClass("animate"), $j("body").removeClass("search_fade_out"), $j("body").removeClass("search_fade_in")) : ($j("body").addClass("fullscreen_search_opened"), $j("body").removeClass("search_fade_out"), $j("body").addClass("search_fade_in"), $j(".fullscreen_search_holder").addClass("animate"))
    }), $j(".fullscreen_search_close").on("click", function (a) {
        a.preventDefault(), $j("body").removeClass("fullscreen_search_opened"), $j(".fullscreen_search_holder").removeClass("animate"), $j("body").removeClass("search_fade_in"), $j("body").addClass("search_fade_out")
    })), $j(".fullscreen_search_holder .search_field").focus(function () {
        $j(".fullscreen_search_holder .field_holder .line").css("width", "100%")
    }), $j(".fullscreen_search_holder .search_field").blur(function () {
        $j(".fullscreen_search_holder .field_holder .line").css("width", "0")
    }), $j(window).scroll(function () {
        var a = $j(".page_header .header_bottom").height();
        $j(".page_header").hasClass("sticky") ? ($j(".fullscreen_search_holder .side_menu_button").css("height", a), $j(".fullscreen_search_holder .close_container").css("top", "0")) : $j(".page_header").hasClass("fixed") ? $j(".fullscreen_search_holder .side_menu_button").css("height", a) : ($j(".fullscreen_search_holder .side_menu_button").css("height", ""), $j(".fullscreen_search_holder .close_container").css("top", ""))
    })), $j(".qode_search_submit").length && $j(".qode_search_submit").click(function (a) {
        a.preventDefault(), a.stopPropagation();
        var b = $j(this).parents("form").first();
        b.submit()
    })
}
function updateShoppingCart() {
    "use strict";
    function a(a, b, c) {
        var d = $j(".shopping_cart_header");
        if (b["div.widget_shopping_cart_content"]) {
            var e = jQuery(b["div.widget_shopping_cart_content"]), f = e.find(".cart_list"), g = e.find(".total").contents(":not(strong)").text();
            d.find(".shopping_cart_dropdown_inner").html("").append(f), d.find(".total span").html("").append(g)
        }
    }

    $j("body").bind("added_to_cart", a)
}
function setContentBottomMargin() {
    $j(".uncover").length && $j(".content").css("margin-bottom", $j("footer").height())
}
function footerWidth() {
    "use strict";
    $j(".uncover").length && $j("body").hasClass("vertical_menu_enabled") && $window_width > 1e3 ? $j(".uncover").width($window_width - $j(".vertical_menu_area").width()) : $j(".uncover").css("width", "100%")
}
function initCoverBoxes() {
    $j(".cover_boxes").length && $j(".cover_boxes").each(function () {
        var a = 0, b = 1;
        "undefined" != typeof $j(this).data("active-element") && $j(this).data("active-element") !== !1 && (b = parseFloat($j(this).data("active-element")), a = b - 1);
        var c = 3;
        a = b > c ? 0 : a, $j(this).find("li").eq(a).addClass("act");
        var d = $j(this);
        $j(this).find("li").each(function () {
            $j(this).hover(function () {
                $j(d).find("li").removeClass("act"), $j(this).addClass("act")
            })
        })
    })
}
function createContentMenu() {
    "use strict";
    var a = $j(".content_menu");
    a.each(function () {
        if (0 === $j(this).find("ul").length) {
            if ("" !== $j(this).css("background-color"))var a = $j(this).css("background-color");
            var b = $j("<ul class='menu'></ul>");
            b.appendTo($j(this));
            var c = $j(this).siblings(".in_content_menu");
            c.length && c.each(function () {
                var c, d = $j(this).data("q_id"), e = $j(this).data("q_title"), f = $j(this).data("q_icon"), g = $j("<li />"), h = $j("<i />", {"class": "fa " + f}), i = $j("<a />", {
                    href: d,
                    html: "<span>" + e + "</span>"
                });
                c = "" !== a ? $j("<div />", {
                    "class": "arrow",
                    style: "border-color: " + a + " transparent transparent transparent"
                }) : $j("<div />", {"class": "arrow"}), h.prependTo(i), i.appendTo(g), c.appendTo(g), g.appendTo(b)
            })
        }
    })
}
function createSelectContentMenu() {
    "use strict";
    var a = $j(".content_menu");
    a.each(function () {
        var a = $j(this), b = $j("<ul></ul>");
        b.appendTo($j(this).find(".nav_select_menu")), $j(this).find("ul.menu li a").each(function () {
            var a = $j(this).attr("href"), c = $j(this).text(), d = $j(this).find("i").clone();
            2 === $j(this).parents("li").length && (c = "&nbsp;&nbsp;&nbsp;" + c), 3 === $j(this).parents("li").length && (c = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c), $j(this).parents("li").length > 3 && (c = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c);
            var e = $j("<li />"), f = $j("<a />", {href: a, html: c});
            d.prependTo(f), f.appendTo(e), e.appendTo(b)
        }), a.find(".nav_select_button").on("click", function () {
            return a.find(".nav_select_menu ul").is(":visible") ? a.find(".nav_select_menu ul").slideUp() : a.find(".nav_select_menu ul").slideDown(), !1
        }), a.find(".nav_select_menu ul li a").on("click", function () {
            a.find(".nav_select_menu ul").slideUp();
            var b = $j(this), c = b.attr("href"), d = $j("div.wpb_row[data-q_id='" + c + "'],section.parallax_section_holder[data-q_id='" + c + "']").offset().top;
            return $j("html,body").stop().animate({scrollTop: d}, 500, "swing", function () {
                $j("nav.content_menu ul li").removeClass("active"), b.parent().addClass("active")
            }), !1
        })
    })
}
function contentMenuPosition() {
    "use strict";
    if ($j("nav.content_menu").length) {
        if (content_menu_position > sticky_amount)var a = min_header_height_sticky; else var a = 0;
        0 >= content_menu_position - a - content_menu_top_add - $scroll && ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu")) ? (sticky_amount > content_menu_position ? $scroll > sticky_amount ? $j("nav.content_menu").css({
            position: "fixed",
            top: min_header_height_sticky + content_menu_top_add
        }).addClass("fixed") : $j("nav.content_menu").css({
            position: "fixed",
            top: 0,
            transition: "none"
        }).addClass("fixed") : $j("nav.content_menu").css({
            position: "fixed",
            top: min_header_height_sticky + content_menu_top_add
        }).addClass("fixed"), $j("header.sticky").addClass("no_shadow"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $j(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : 0 >= content_menu_position - content_menu_top - content_menu_top_add - $scroll && !$j("header").hasClass("stick") ? ($j("nav.content_menu").css({
            position: "fixed",
            top: content_menu_top + content_menu_top_add
        }).addClass("fixed"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $j(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : ($j("nav.content_menu").css({
            position: "relative",
            top: "0px"
        }).removeClass("fixed"), $j("header.sticky").removeClass("no_shadow"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", "0px"), $j(".content > .content_inner > .full_width").css("margin-top", "0px")), $j(".content .in_content_menu").waypoint(function (a) {
            var b = $j(this), c = b.data("q_id");
            $j("nav.content_menu.fixed li a").each(function () {
                var a = $j(this).attr("href");
                a === c ? $j(this).parent().addClass("active") : $j(this).parent().removeClass("active")
            })
        }, {offset: "150"})
    }
}
function contentMenuCheckLastSection() {
    "use strict";
    if ($j("nav.content_menu").length && $j(".content .in_content_menu").length) {
        var a = $j(".content .in_content_menu:last").offset().top + $j(".content .in_content_menu:last").height(), b = $j(".content .in_content_menu:first").offset().top - content_menu_top - content_menu_top_add - 100;
        $scroll > a && $j("nav.content_menu.fixed li").removeClass("active"), b > $scroll && $j("nav.content_menu li:first, nav.content_menu ul.menu li:first").removeClass("active")
    }
}
function contentMenuScrollTo() {
    "use strict";
    $j("nav.content_menu").length && $j("nav.content_menu ul.menu li a").on("click", function (a) {
        a.preventDefault();
        var b = $j(this);
        if ($j(this).parent().hasClass("active"))return !1;
        var c = b.attr("href"), d = $j("div.wpb_row[data-q_id='" + c + "'],section.parallax_section_holder[data-q_id='" + c + "']").offset().top - content_line_height - content_menu_top - content_menu_top_add;
        return $j("html,body").stop().animate({scrollTop: d}, 500, "swing", function () {
            $j("nav.content_menu ul li").removeClass("active"), b.parent().addClass("active")
        }), !1
    })
}
function initButtonHover() {
    $j(".qbutton").length && $j(".qbutton").each(function () {
        if ("undefined" != typeof $j(this).data("hover-background-color") && $j(this).data("hover-background-color") !== !1) {
            var a = $j(this).data("hover-background-color"), b = $j(this).css("background-color");
            $j(this).hover(function () {
                $j(this).css("background-color", a)
            }, function () {
                $j(this).css("background-color", b)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-border-color") && $j(this).data("hover-border-color") !== !1) {
            var c = $j(this).data("hover-border-color"), d = $j(this).css("border-top-color");
            $j(this).hover(function () {
                $j(this).css("border-color", c)
            }, function () {
                $j(this).css("border-color", d)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-color") && $j(this).data("hover-color") !== !1) {
            var e = $j(this).data("hover-color"), f = $j(this).css("color");
            $j(this).hover(function () {
                $j(this).css("color", e)
            }, function () {
                $j(this).css("color", f);
            })
        }
    })
}
function initEnlargeButton() {
    $j(".qbutton.enlarge").length && $j(".qbutton.enlarge").each(function () {
        var a = $j(this), b = parseInt(a.css("padding-left")), c = Math.floor(b / 100 * 20);
        a.mouseenter(function () {
            a.css({"padding-left": b + c}), a.css({"padding-right": b + c})
        }), a.mouseleave(function () {
            a.css({"padding-left": b}), a.css({"padding-right": b})
        })
    })
}
function initSocialIconHover() {
    $j(".q_social_icon_holder").length && $j(".q_social_icon_holder").each(function () {
        if ("undefined" != typeof $j(this).data("hover-background-color") && $j(this).data("hover-background-color") !== !1) {
            var a = $j(this).data("hover-background-color"), b = $j(this).find(".fa-stack").css("background-color");
            $j(this).find(".fa-stack").hover(function () {
                $j(this).css("background-color", a)
            }, function () {
                $j(this).css("background-color", b)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-border-color") && $j(this).data("hover-border-color") !== !1) {
            var c = $j(this).data("hover-border-color"), d = $j(this).find(".fa-stack").css("border-top-color");
            $j(this).find(".fa-stack").hover(function () {
                $j(this).css("border-color", c)
            }, function () {
                $j(this).css("border-color", d)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-color") && $j(this).data("hover-color") !== !1) {
            var e, f, g = $j(this).data("hover-color");
            $j(this).find(".fa-stack i, .fa-stack span").length ? (e = "undefined" != typeof $j(this).data("color") ? $j(this).data("color") : $j(this).find(".fa-stack i, .fa-stack span").css("color"), f = $j(this).find(".fa-stack i, .fa-stack span").attr("style")) : $j(this).find(".simple_social").length && (e = "undefined" != typeof $j(this).data("color") ? $j(this).data("color") : $j(this).find(".simple_social").css("color"), f = $j(this).find(".simple_social").attr("style")), $j(this).find(".fa-stack").length ? $j(this).find(".fa-stack").hover(function () {
                $j(this).find("i, span").attr("style", function (a, b) {
                    return f + "color: " + g + "!important;"
                })
            }, function () {
                $j(this).find("i, span").attr("style", function (a, b) {
                    return f + "color: " + e + ";"
                })
            }) : $j(this).find(".simple_social").length && $j(this).find(".simple_social").hover(function () {
                $j(this).attr("style", function (a, b) {
                    return f + "color: " + g + "!important;"
                })
            }, function () {
                $j(this).attr("style", function (a, b) {
                    return f + "color: " + e + ";"
                })
            })
        }
    })
}
function initTabsActiveBorder() {
    $j(".q_tabs.vertical, .q_tabs.boxed").length && $j(".q_tabs.vertical, .q_tabs.boxed").each(function () {
        var a = getParentBackgroundColor($j(this)), b = $j(this).find("li.active a");
        $j(this).hasClass("boxed") && b.css("border-bottom-color", a), $j(this).hasClass("left") && b.css("border-right-color", a), $j(this).hasClass("right") && b.css("border-left-color", a)
    })
}
function getParentBackgroundColor(a) {
    return a.parents().filter(function () {
        var a = $j(this).css("background-color");
        return "transparent" != a && "rgba(0, 0, 0, 0)" != a
    }).eq(0).css("background-color")
}
function setActiveTabBorder() {
    $j(".q_tabs li.active").length && $j(this).click(function () {
        initTabsActiveBorder()
    })
}
function initPopupMenu() {
    "use strict";
    $j("a.popup_menu").length && ($j(".popup_menu_holder_outer").height($window_height).niceScroll({
        scrollspeed: 30,
        mousescrollstep: 20,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    }), ($j("body").hasClass("qode_popup_menu_push_text_right") || $j("body").hasClass("qode_popup_menu_push_text_top")) && ($j(".popup_menu_holder_outer nav > ul > li > a").each(function (a) {
        $j(this).css({"-webkit-animation-delay": 70 * a + "ms", "animation-delay": 70 * a + "ms"})
    }), $j(".popup_menu_widget_holder > div").css({
        "-webkit-animation-delay": 70 * ($j(".popup_menu_holder_outer nav > ul > li > a").length + 1) + "ms",
        "animation-delay": 70 * ($j(".popup_menu_holder_outer nav > ul > li > a").length + 1) + "ms"
    })), $j(window).resize(function () {
        $j(".popup_menu_holder_outer").height($window_height)
    }), $j("a.popup_menu").on("click", function (a) {
        a.preventDefault(), $j(this).hasClass("opened") ? ($j(this).removeClass("opened"), $j("body").removeClass("popup_menu_opened"), ($j(this).hasClass("qode_popup_menu_push_text_right") || $j(this).hasClass("qode_popup_menu_push_text_top") || $j(this).hasClass("qode_popup_menu_text_scaledown")) && $j("body").removeClass("qode_popup_menu_fade_in").addClass("qode_popup_menu_fade_out"), $j(this).hasClass("qode_popup_menu_push_text_right") ? $j("body").addClass("qode_popup_menu_push_nav_right") : $j(this).hasClass("qode_popup_menu_push_text_top") && $j("body").addClass("qode_popup_menu_push_nav_top"), setTimeout(function () {
            $j("body").hasClass("page-template-full_screen-php") || $j("body").css("overflow", "visible"), $j("nav.popup_menu ul.sub_menu").slideUp(200, function () {
                $j("nav.popup_menu").getNiceScroll().resize()
            })
        }, 400)) : ($j(this).addClass("opened"), $j("body").addClass("popup_menu_opened"), $j(this).hasClass("qode_popup_menu_push_text_right") ? ($j("body").addClass("qode_popup_menu_fade_in").removeClass("qode_popup_menu_fade_out"), $j("body").removeClass("qode_popup_menu_push_nav_right")) : $j(this).hasClass("qode_popup_menu_push_text_top") ? ($j("body").addClass("qode_popup_menu_fade_in").removeClass("qode_popup_menu_fade_out"), $j("body").removeClass("qode_popup_menu_push_nav_top")) : $j(this).hasClass("qode_popup_menu_text_scaledown") && $j("body").addClass("qode_popup_menu_fade_in").removeClass("qode_popup_menu_fade_out"), setTimeout(function () {
            $j("body").hasClass("page-template-full_screen-php") || $j("body").css("overflow", "hidden")
        }, 400))
    }), $j(".popup_menu > ul > li.has_sub > a, .popup_menu > ul > li.has_sub > h6").on("tap click", function (a) {
        return a.preventDefault(), $j(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible") ? ($j(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200, function () {
            $j(".popup_menu_holder_outer").getNiceScroll().resize()
        }), $j(this).closest("li.has_sub").removeClass("open_sub")) : ($j(this).closest("li.has_sub").addClass("open_sub"), $j(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200, function () {
            $j(".popup_menu_holder_outer").getNiceScroll().resize()
        })), !1
    }), $j(".popup_menu ul li:not(.has_sub) a").click(function () {
        return "http://#" === $j(this).attr("href") || "#" === $j(this).attr("href") ? !1 : ($j("a.popup_menu").removeClass("opened"), $j("body").removeClass("popup_menu_opened").css("overflow", "visible"), $j("nav.popup_menu ul.sub_menu").slideUp(200, function () {
            $j("nav.popup_menu").getNiceScroll().resize()
        }), void 0)
    }))
}
function initFullScreenTemplate() {
    "use strict";
    if ($j(".full_screen_holder").length && $window_width > 600) {
        var a = "";
        a = $j("header.page_header").hasClass("light") ? "light" : $j("header.page_header").hasClass("dark") ? "dark" : header_style_admin, $j(".full_screen_preloader").css("height", $window_height), $j("#up_fs_button").on("click", function () {
            return $j.fn.fullpage.moveSectionUp(), !1
        }), $j("#down_fs_button").on("click", function () {
            return $j.fn.fullpage.moveSectionDown(), !1
        });
        var b = $j(".full_screen_inner > .full_screen_section").length;
        if (!$j('html').hasClass('fp-enabled')) {
            $j(".full_screen_inner").fullpage({
                sectionSelector: ".full_screen_section",
                scrollOverflow: !0,
                afterLoad: function (c, d) {
                    checkActiveArrowsOnFullScrrenTemplate(b, d), checkFullScreenSectionsForHeaderStyle(d, a)
                },
                afterRender: function () {
                    checkActiveArrowsOnFullScrrenTemplate(b, 1), checkFullScreenSectionsForHeaderStyle(1, a), 1 !== b && $j(".full_screen_holder").find(".full_screen_navigation_holder").css("visibility", "visible"), $j(".full_screen_holder").find(".full_screen_inner").css("visibility", "visible"), $j(".full_screen_preloader").hide(), $j(".full_screen_holder video.full_screen_sections_video").length && $j(".full_screen_holder video.full_screen_sections_video").each(function () {
                        $j(this).get(0).play()
                    })
                }
            })
        }
    }
}
function checkActiveArrowsOnFullScrrenTemplate(a, b) {
    "use strict";
    1 === b ? ($j(".full_screen_navigation_holder #up_fs_button").hide(), b != a && $j(".full_screen_navigation_holder #down_fs_button").show()) : b === a ? (2 === a && $j(".full_screen_navigation_holder #up_fs_button").show(), $j(".full_screen_navigation_holder #down_fs_button").hide()) : ($j(".full_screen_navigation_holder #up_fs_button").show(), $j(".full_screen_navigation_holder #down_fs_button").show())
}
function checkFullScreenSectionsForHeaderStyle(a, b) {
    "use strict";
    if ($j("[data-q_header_style]").length > 0 && $j("header").hasClass("header_style_on_scroll"))if (void 0 !== $j($j(".full_screen_holder .full_screen_inner .full_screen_section")[a - 1]).data("q_header_style")) {
        var c = $j($j(".full_screen_holder .full_screen_inner .full_screen_section")[a - 1]).data("q_header_style");
        $j("header").removeClass("dark light").addClass(c)
    } else $j("header").removeClass("dark light").addClass(b)
}
function checkHeaderStyleOnScroll() {
    "use strict";
    if ($j("[data-q_header_style]").length > 0 && $j("header").hasClass("header_style_on_scroll")) {
        var a = "";
        a = $j("header.page_header").hasClass("light") ? "light" : $j("header.page_header").hasClass("dark") ? "dark" : header_style_admin;
        var b = $j("body").hasClass("paspartu_on_top_fixed") ? Math.round($window_width * paspartu_width) : 0, c = $j("body").hasClass("paspartu_on_bottom_fixed") ? Math.round($window_width * paspartu_width) : 0;
        $j(".full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section").waypoint(function (b) {
            if ("down" === b)if (void 0 !== $j(this).data("q_header_style")) {
                var c = $j(this).data("q_header_style");
                $j("header").removeClass("dark light").addClass(c)
            } else $j("header").removeClass("dark light").addClass(a)
        }, {offset: 0 + b}), $j(".title, .full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section, .q_slider").waypoint(function (b) {
            if ("up" === b)if (void 0 !== $j(this).data("q_header_style")) {
                var c = $j(this).data("q_header_style");
                $j("header").removeClass("dark light").addClass(c)
            } else $j("header").removeClass("dark light").addClass(a)
        }, {
            offset: function () {
                return -$j(this).outerHeight() + c
            }
        })
    }
}
function initImageGallerySliderNoSpace() {
    $j(".qode_image_gallery_no_space").length && ($j(".qode_image_gallery_no_space").each(function () {
        $j(this).animate({opacity: 1}, 1e3), $j(this).find(".qode_image_gallery_holder").lemmonSlider({infinite: !0})
    }), $j(".qode_image_gallery_no_space").on("click", "li:not(.active) a", function () {
        return !(window.innerWidth > 800)
    }))
}
function initVerticalSplitSlider() {
    "use strict";
    $j("html").hasClass("vertical_split_screen_initalized") && ($j("html").removeClass("vertical_split_screen_initalized"), $j.fn.multiscroll.destroy()), $j(".vertical_split_slider").length ? ($j(".vertical_split_slider").height($window_height).animate({opacity: 1}, 300), $j(".vertical_split_slider").multiscroll({
        scrollingSpeed: 500,
        navigation: !0,
        afterRender: function () {
            if ($j("html").addClass("vertical_split_screen_initalized"), initButtonHover(), $j("div.wpcf7 > form").length && $j("div.wpcf7 > form").wpcf7InitForm(), initCountdown(), $j("body").hasClass("vss_responsive_adv")) {
                var a = $j("<div class='vertical_split_slider_responsive' />");
                $j(".vertical_split_slider").after(a);
                for (var b = $j(".vertical_split_slider .ms-left > div"), c = $j(".vertical_split_slider .ms-right > div"), d = 0; d < b.length; d++)a.append($j(b[d]).clone(!0)), a.append($j(c[b.length - 1 - d]).clone(!0))
            }
        }
    }), $j("body").hasClass("vss_responsive_adv") && (768 > $window_width ? ($j.fn.multiscroll.destroy(), $j("html,body").css("height", "auto").css("overflow", "auto")) : ($j.fn.multiscroll.build(), $j("html,body").css("height", "100%").css("overflow", "hidden")), $j(window).resize(function () {
        768 > $window_width ? ($j.fn.multiscroll.destroy(), $j("html,body").css("height", "auto").css("overflow", "auto")) : ($j.fn.multiscroll.build(), $j("html,body").css("height", "100%").css("overflow", "hidden"))
    }))) : $j(".full_screen_holder").length || $j("html,body").css("height", "auto").css("overflow", "auto")
}
function showGoogleMap() {
    "use strict";
    $j(".qode_google_map").length && $j(".qode_google_map").each(function () {
        var a;
        "undefined" != typeof $j(this).data("custom-map-style") && (a = $j(this).data("custom-map-style"));
        var b;
        "undefined" != typeof $j(this).data("color-overlay") && $j(this).data("color-overlay") !== !1 && (b = $j(this).data("color-overlay"));
        var c;
        "undefined" != typeof $j(this).data("saturation") && $j(this).data("saturation") !== !1 && (c = $j(this).data("saturation"));
        var d;
        "undefined" != typeof $j(this).data("lightness") && $j(this).data("lightness") !== !1 && (d = $j(this).data("lightness"));
        var e;
        "undefined" != typeof $j(this).data("zoom") && $j(this).data("zoom") !== !1 && (e = $j(this).data("zoom"));
        var f;
        "undefined" != typeof $j(this).data("pin") && $j(this).data("pin") !== !1 && (f = $j(this).data("pin"));
        var g;
        "undefined" != typeof $j(this).data("map-height") && $j(this).data("map-height") !== !1 && (g = $j(this).data("map-height"));
        var h;
        "undefined" != typeof $j(this).data("unique-id") && $j(this).data("unique-id") !== !1 && (h = $j(this).data("unique-id"));
        var i;
        "undefined" != typeof $j(this).data("google-maps-scroll-wheel") && (i = $j(this).data("google-maps-scroll-wheel"));
        var j;
        "undefined" != typeof $j(this).data("addresses") && $j(this).data("addresses") !== !1 && (j = $j(this).data("addresses"));
        var k = "map_" + h, l = "geocoder_" + h, m = "map_canvas_" + h;
        initializeGoogleMap(a, b, c, d, i, e, m, g, f, k, l, j)
    })
}
function initializeGoogleMap(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m, n = [{stylers: [{hue: b}, {saturation: c}, {lightness: d}, {gamma: 1}]}];
    m = a ? "qode_style" : google.maps.MapTypeId.ROADMAP;
    var o = new google.maps.StyledMapType(n, {name: "Qode Google Map"});
    k = new google.maps.Geocoder;
    var p = new google.maps.LatLng(-34.397, 150.644), q = {
        zoom: f,
        scrollwheel: e,
        center: p,
        zoomControl: !0,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scaleControl: !1,
        scaleControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
        streetViewControl: !1,
        streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
        panControl: !1,
        panControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
        mapTypeControl: !1,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "qode_style"],
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        mapTypeId: m
    };
    j = new google.maps.Map(document.getElementById(g), q), j.mapTypes.set("qode_style", o);
    var r;
    for (r = 0; r < l.length; ++r)initializeGoogleAddress(l[r], i, j, k);
    var s = document.getElementById(g);
    s.style.height = h + "px"
}
function initializeGoogleAddress(a, b, c, d) {
    "use strict";
    if ("" !== a) {
        var e = '<div class="content_map"><div class="site_notice_map"></div><div class="body_content_map"><p>' + a + "</p></div></div>", f = new google.maps.InfoWindow({content: e});
        d.geocode({address: a}, function (d, e) {
            if (e === google.maps.GeocoderStatus.OK) {
                c.setCenter(d[0].geometry.location);
                var g = new google.maps.Marker({
                    map: c,
                    position: d[0].geometry.location,
                    icon: b,
                    title: a.store_title
                });
                google.maps.event.addListener(g, "click", function () {
                    f.open(c, g)
                }), google.maps.event.addDomListener(window, "resize", function () {
                    c.setCenter(d[0].geometry.location)
                })
            }
        })
    }
}
function initHorizontalMarquee() {
    "use strict";
    var a = $j(".qode-horizontal-marquee");
    a.each(function () {
        var a, b, c, d, e = function () {
            d = i.width(), c = 0, l.find("> .qode-hm-item").css("margin", 0), i.height(Math.min($window_height, k)), l.find("> .qode-hm-item").each(function () {
                $j(this).css("max-width", d), c += $j(this).outerWidth() + j
            }), c -= j, l.width(c).css("left", 0), l.find("> .qode-hm-item").css("margin-right", j + "px")
        }, f = function (c) {
            c = "undefined" != typeof c.originalEvent ? c.originalEvent : c, c = "touchstart" == c.type ? c.touches[0] : c, a = {
                x: c.clientX,
                y: c.clientY
            }, b = parseInt(l.css("left"), 10), l.addClass("qode-dragged")
        }, g = function (a) {
            l.removeClass("qode-dragged")
        }, h = function (e) {
            e = "undefined" != typeof e.originalEvent ? e.originalEvent : e;
            var f = e.type;
            e = "touchmove" == f ? e.touches[0] : e;
            var g = {x: e.clientX, y: e.clientY};
            ("touchmove" == f || "mousemove" == f && l.is(".qode-dragged")) && l.css({left: Math.max(-c + d, Math.min(b + (g.x - a.x), 0)) + "px"})
        }, i = $j(this), j = "undefined" != typeof i.data("spacing") ? i.data("spacing") : 0, k = "undefined" != typeof i.data("height") ? i.data("height") : 0, l = i.find(".qode-horizontal-marquee-inner");
        e(), $j(window).resize(e), l.find("img").on("dragstart", function (a) {
            a.preventDefault()
        }), l.on("mousedown touchstart", f), l.on("mousemove touchmove", h), l.on("mouseup touchend mouseleave", g)
    })
}
function initTextMarquee() {
    "use strict";
    var a = $j(".qode-text-marquee");
    a.length && a.each(function () {
        var a = $j(this);
        $j("html").hasClass("touch") || a.find(".qode-text-marquee-wrapper").clone().appendTo(a);
        var b = a.find(".qode-text-marquee-wrapper"), c = a.find(".qode-text-marquee-title");
        $j("html").hasClass("touch") || b.each(function () {
            for (var a = $j(this), b = a.find(".qode-text-marquee-title"), c = b.html().split(" "), d = c.length, e = [], f = 0; d > f; f++)e[f] = '<span class="qode-inner-text">' + c[f] + "</span>";
            b.html(e.join("")), b.find(".qode-inner-text").css({display: "inline-block", "margin-right": "40px"})
        }), c.stretch(), b.eq(1).addClass("qode-marquee-additional-title"), c.css("visibility", "visible");
        var d = function () {
            c.unwrap(".stretch--resizer"), c.unwrap(".stretch--handle"), c.stretch()
        };
        if ($j("html").hasClass("touch")) $j(window).resize(function () {
            d()
        }); else {
            qodeRequestAnimationFrame();
            var e = b.first(), f = e.offset().left, g = b.last(), h = !1;
            g.offset({left: f - $j(window).width()}), b.each(function () {
                var a = $j(this), b = a.offset().left, e = 0, f = 2, i = function () {
                    h = !1, e += f, a.offset().left > $j(window).width() && (e = -($j(window).width() + b)), a.css("transform", "translate3d(" + e + "px,0,0)"), requestAnimFrame(i), $j(window).resize(function () {
                        h || (d(), e = 0, g.offset({left: -c.first().width()}), h = !0)
                    })
                };
                i()
            })
        }
    })
}
function qodeRequestAnimationFrame() {
    $j("html").hasClass("touch") || window.requestAnimFrame || (window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
                window.setTimeout(a, 1e3 / 60)
            }
    }())
}
function initExpandingImages() {
    var a = $j(".qode-expanding-images");
    a.length && a.each(function () {
        var a = $j(this), b = getIEversion();
        if (b > 0 && a.addClass("qode-ie-specific"), !$j("html").hasClass("touch")) {
            var c = skrollr.init({edgeStrategy: "set", smoothScrolling: !1, forceHeight: !1});
            c.refresh()
        }
    })
}
function initItemShowcase() {
    var a = $j(".qode-item-showcase");
    a.length && a.each(function () {
        function a(a) {
            b.find(a).each(function (a) {
                var b = $j(this);
                setTimeout(function () {
                    b.addClass("qode-appeared")
                }, 150 * a)
            })
        }

        var b = $j(this), c = b.find(".qode-item-left"), d = b.find(".qode-item-right"), e = b.find(".qode-item-image");
        c.wrapAll("<div class='qode-item-showcase-holder qode-holder-left' />"), d.wrapAll("<div class='qode-item-showcase-holder qode-holder-right' />"), b.find(".qode-item-showcase-holder").append("<span class='qode-item-line'></span>");
        var f = $j(".qode-item-line");
        $j("html").hasClass("touch") ? f.each(function () {
            var a = $j(this), b = a.closest(".qode-item-showcase-holder"), c = b.height() - b.find(".qode-item").last().height();
            a.css("height", c), a.css("opacity", 1)
        }) : (b.animate({opacity: 1}, 200), setTimeout(function () {
            b.appear(function () {
                e.addClass("qode-appeared"), f.each(function () {
                    var a = $j(this), b = a.closest(".qode-item-showcase-holder"), c = b.height() - b.find(".qode-item").last().height();
                    a.css("height", c), a.css("opacity", 1)
                }), b.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (b) {
                    $window_width > 1200 ? (a(".qode-holder-left .qode-item"), a(".qode-holder-right .qode-item")) : a(".qode-item")
                })
            })
        }, 100))
    })
}
function initPreviewSlider() {
    "use strict";
    var a = $j(".qode-preview-slider");
    a.each(function () {
        var a = $j(this), b = a.find(".qode-presl-main-slider"), c = a.find(".qode-presl-small-slider-holder"), d = c.find(".qode-presl-small-slider"), e = 5e3, f = 700;
        b.find(".qode-presl-link.small").each(function (a) {
            $j('<li><div class="qode-presl-small-item"><div class="qode-presl-main-item-inner"></div></div></li>').appendTo(d.find("> .slides")).find(".qode-presl-main-item-inner").append($j(this))
        }), b.flexslider({
            animation: "slide",
            animationSpeed: f,
            slideshow: !0,
            slideshowSpeed: e,
            useCSS: !0,
            touch: !0,
            autostart: !1,
            directionNav: !0,
            controlNav: !0,
            prevText: '<i class="icon-arrows-left"></i>',
            nextText: '<i class="icon-arrows-right"></i>',
            start: function (a) {
                a.find(".qode-presl-main-item").css({
                    opacity: "1",
                    filter: "alpha(opacity=100)"
                }).find("img").addClass("visible")
            },
            before: function (a) {
                var b = a.animatingTo, c = a.currentSlide;
                0 == b ? a.find(".slides li:first-child").next().next().clone().appendTo(a.find(".slides")).removeClass("clone").addClass("clone_end") : b == a.count - 1 && a.find(".slides li:last-child").prev().prev().clone().appendTo(a.find(".slides")).removeClass("clone").addClass("clone_start"), 0 == b && c == a.count - 1 && "next" == a.direction ? d.flexslider("next") : b == a.count - 1 && 0 == c && "prev" == a.direction ? d.flexslider("prev") : d.find(".flex-control-nav a").eq(b).click(), a.find(".flex-direction-nav").addClass("moving")
            },
            after: function (a) {
                a.removeClass("control-initiated direction-initiated"), a.find(".clone_start, .clone_end").remove(), a.find(".flex-direction-nav").removeClass("moving")
            }
        }), d.flexslider({
            animation: "slide",
            animationSpeed: f,
            animationLoop: !0,
            useCSS: !0,
            touch: !1,
            slideshow: !1,
            directionNav: !1,
            controlNav: !0,
            start: function (a) {
                a.find("img").addClass("visible"), a.closest(".qode-presl-small-slider-holder").find(".qode-presl-phone").addClass("visible")
            }
        })
    })
}
function initInDeviceSlider() {
    "use strict";
    var a = $j(".qode-in-device-slider");
    a.each(function () {
        var a = $j(this).find(".qode-ids-slider"), b = "yes" == a.data("navigation"), c = "yes" == a.data("auto-start"), d = c ? a.data("timeout") : 0, e = !!a.closest(".qode-horizontal-marquee").length, f = getIEversion();
        if (f > 0 && a.addClass("qode-ids-ie-specific"), a.flexslider({
                animation: "slide",
                animationSpeed: 700,
                animationLoop: !0,
                useCSS: !0,
                touch: !e,
                slideshow: c,
                slideshowSpeed: d,
                directionNav: b,
                controlNav: !1,
                prevText: '<i class="icon-arrows-left"></i>',
                nextText: '<i class="icon-arrows-right"></i>',
                start: function (a) {
                    a.find("img").addClass("visible"), a.closest(".qode-ids-slider-holder").find(".qode-ids-frame").addClass("visible"), a.is(".qode-ids-titles-on-hover") && a.hover(function () {
                        $j(this).find(".qode-ids-link").addClass("hovered")
                    }, function () {
                        $j(this).find(".qode-ids-link").removeClass("hovered")
                    })
                }
            }), e) {
            var g, h = !1, i = function (a) {
                a = "undefined" != typeof a.originalEvent ? a.originalEvent : a, a = "touchstart" == a.type ? a.touches[0] : a, g = {
                    x: a.clientX,
                    y: a.clientY
                }
            }, j = function (a) {
                a = "undefined" != typeof a.originalEvent ? a.originalEvent : a, a = "touchend" == a.type ? a.changedTouches[0] : a;
                var b = {x: a.clientX, y: a.clientY};
                Math.abs(b.x - g.x) < 10 && (h = !0)
            }, k = function (a) {
                h ? h = !1 : a.preventDefault()
            };
            a.find(".qode-ids-link").on("dragstart", function (a) {
                a.preventDefault()
            }).on("click", k).on("mousedown touchstart", i).on("mouseup touchend", j)
        }
    })
}
function checkSVG(a) {
    "use strict";
    var b = a.find(".active .qode_slide-svg-holder"), c = b.data("svg-drawing");
    "yes" === c && drawSVG(b)
}
function drawSVG(a) {
    "use strict";
    var b = Array.prototype.slice.call(a.find("svg")), c = [];
    b.forEach(function (a, b) {
        var d = new SVGEl(a);
        c[b] = d, setTimeout(function (a) {
            return function () {
                d.render()
            }
        }(a), 0)
    })
}
function SVGEl(a) {
    this.el = a;
    var b = $j(this.el).closest(".qode_slide-svg-holder").data("svg-frames");
    this.image = this.el.previousElementSibling, this.current_frame = 0, this.total_frames = b, this.path = [], this.length = [], this.handle = 0, this.init()
}
function initPageTitleAnimation() {
    "use strict";
    if ("yes" === $j(".title_outer").data("animation") && $j(".no-touch .title_outer").length > 0) {
        var a = skrollr.init({edgeStrategy: "set", smoothScrolling: !1, forceHeight: !1});
        a.refresh()
    }
}
function initQodeElementAnimationSkrollr() {
    "use strict";
    if (0 === $j(".no-touch .carousel").length) {
        var a = $j(".no-touch .q_elements_holder > .q_elements_item");
        a.each(function () {
            if (("undefined" != typeof $j(this).data("animation") || "undefined" != typeof $j(".title_outer").data("animation")) && "yes" === $j(this).data("animation")) {
                var a = skrollr.init({edgeStrategy: "set", smoothScrolling: !1, forceHeight: !1});
                a.refresh()
            }
        })
    }
}
function initIconShortcodeHover() {
    "use strict";
    $j(".qode_icon_shortcode").length && $j(".qode_icon_shortcode").each(function () {
        if ("undefined" != typeof $j(this).data("type") && -1 != ["circle", "square"].indexOf($j(this).data("type")) && "undefined" != typeof $j(this).data("hover-bg-color"))if ("circle" == $j(this).data("type")) {
            var a = $j(this).find("i").first(), b = $j(this).data("hover-bg-color"), c = a.attr("style");
            $j(this).hover(function () {
                a.attr("style", c + "color: " + b + "!important")
            }, function () {
                a.attr("style", c)
            })
        } else {
            var b = $j(this).data("hover-bg-color"), d = $j(this).css("background-color");
            $j(this).hover(function () {
                $j(this).css("background-color", b)
            }, function () {
                $j(this).css("background-color", d)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-icon-color")) {
            var e = $j(this).data("hover-icon-color"), f = $j(this).find(".qode_icon_element ").css("color");
            $j(this).hover(function () {
                $j(this).find(".qode_icon_element ").css("color", e)
            }, function () {
                $j(this).find(".qode_icon_element ").css("color", f)
            })
        }
    })
}
function initIconWithTextHover() {
    "use strict";
    $j(".qode_iwt_icon_holder").length && $j(".qode_iwt_icon_holder").each(function () {
        if ("undefined" != typeof $j(this).data("icon-hover-bg-color")) {
            var a = $j(this).data("icon-hover-bg-color"), b = $j(this).css("background-color");
            $j(this).hover(function () {
                $j(this).css("background-color", a)
            }, function () {
                $j(this).css("background-color", b)
            })
        }
        if ("undefined" != typeof $j(this).data("icon-hover-color")) {
            var c = $j(this).find(".qode_iwt_icon_element"), d = $j(this).data("icon-hover-color"), e = c.css("color");
            $j(this).hover(function () {
                c.css("color", d)
            }, function () {
                c.css("color", e)
            })
        }
    })
}
function initLoadNextPostOnBottom() {
    "use strict";
    if ($j(".blog_vertical_loop").length) {
        var a, b, c = $j("body").hasClass("paspartu_enabled") ? Math.round($window_width * paspartu_width) : 0;
        b = $j("header.page_header").hasClass("transparent") ? 0 : header_height;
        var d = !0, e = $j(".blog_vertical_loop .blog_holder");
        $j(document).on("click", ".blog_vertical_loop_button a", function (f) {
            if (f.preventDefault(), !d)return !1;
            d = !1;
            var g = $j(this), h = g.attr("href"), i = ".blog_vertical_loop_button_holder a", j = $j(i).attr("href");
            a = 1e3 > $window_width ? $j("header.page_header").height() : b;
            var k = $j(window).scrollTop(), l = g.closest("article").offset().top, m = l - k - a - c;
            e.find("article:eq(1)").addClass("fade_out"), g.closest("article").addClass("move_up").removeClass("next_post").css("transform", "translateY(-" + m + "px)"), setTimeout(function () {
                $j(window).scrollTop(0), e.find("article:eq(0)").remove(), e.find("article:eq(0)").addClass("previous_post"), g.closest("article").removeAttr("style").removeClass("move_up")
            }, 450), $j.get(h + "", function (a) {
                var b = $j(a).find("article").addClass("next_post");
                j = $j(i, a).attr("href"), e.append($j(b)), d = !0
            })
        }), $j(document).on("click", ".blog_vertical_loop_back_button a", function (a) {
            if (a.preventDefault(), !d)return !1;
            d = !1;
            var b = $j(this), c = b.attr("href"), f = ".blog_vertical_loop_button_holder.prev_post a", g = $j(f).attr("href");
            e.find("article:eq(0)").removeClass("fade_out").addClass("fade_in"), b.closest("article").addClass("move_up").css("transform", "translateY(" + $window_height + "px)"), setTimeout(function () {
                e.find("article:last-child").remove(), e.find("article:eq(0)").removeClass("previous_post fade_in"), b.closest("article").addClass("next_post").removeAttr("style").removeClass("move_up"), $j.get(c + "", function (a) {
                    var b = $j(a).find("article").removeClass("next_post").addClass("previous_post");
                    g = $j(f, a).attr("href"), e.prepend($j(b)), d = !0
                })
            }, 450)
        }), $j.get($j(".blog_vertical_loop_button_holder .last_page a").attr("href") + "", function (a) {
            var b = $j(a).find("article").removeClass("next_post").addClass("previous_post");
            e.prepend($j(b))
        }), $j.get($j(".blog_vertical_loop_button a").attr("href") + "", function (a) {
            var b = $j(a).find("article").addClass("next_post");
            e.append($j(b))
        })
    }
}
function setParallaxLayersHeight(a, b) {
    "use strict";
    var c = b, d = [1600, 1300, 1e3, 768, 567, 320];
    $window_width > d[0] ? c = b : $window_width > d[1] ? c = .75 * b : $window_width > d[2] ? c = .6 * b : $window_width > d[3] ? c = .55 * b : $window_width <= d[3] && (c = .45 * b), a.css({height: c + "px"})
}
function parallaxLayers() {
    "use strict";
    $j(".qode_parallax_layers").length && $j(".qode_parallax_layers").each(function () {
        var a = $j(this);
        if ($j(this).hasClass("full_screen_height")) a.height($window_height), $j(window).resize(function () {
            a.height($window_height)
        }); else {
            var b = $j(this).data("height");
            setParallaxLayersHeight(a, b), $j(window).resize(function () {
                setParallaxLayersHeight(a, b)
            })
        }
        var c = a.find(".qode_parallax_layers_holder"), d = 0, e = a.find(".image").length;
        a.find(".image").each(function () {
            var a = $j(this);
            if ("" != a.css("background-image") && "none" != a.css("background-image")) {
                var b = a.attr("style");
                if (b = b.match(/url\(["']?([^'")]+)['"]?\)/), b = b ? b[1] : "") {
                    var f = new Image;
                    f.src = b, $j(f).load(function () {
                        d++, d == e && (c.removeClass("preload_parallax_layers"), $j("html").hasClass("no-touch") && c.mouseParallax())
                    })
                }
            }
        })
    })
}
function alterWPMLSwitcherHeaderBottom() {
    "use strict";
    if ($j(".header_bottom .main_menu li.menu-item-language").length) {
        var a = $j(".header_bottom .main_menu .menu-item-language").find(".submenu-languages");
        "undefined" != typeof a && (a.parent("li").addClass("narrow"), a.wrap('<div class="second"><div class="inner"></div></div>'), a.show())
    }
    if ($j(".header_bottom .mobile_menu li.menu-item-language").length) {
        var a = $j(".header_bottom .mobile_menu .menu-item-language").find(".submenu-languages");
        "undefined" != typeof a && (a.parent("li").addClass("has_sub"), a.prev("a").after('<span class="mobile_arrow"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span>'), a.addClass("sub_menu"))
    }
}
function initContentSlider() {
    "use strict";
    $j(".qode_content_slider").each(function () {
        var a = $j(this), b = 8e3;
        "undefined" != typeof a.data("interval") && a.data("interval") !== !1 && (b = 1e3 * parseFloat(a.data("interval")));
        var c = !1;
        "undefined" != typeof a.data("direction") && (c = a.data("direction"));
        var d = !1;
        "undefined" != typeof a.data("control") && (d = a.data("control"));
        var e = !1;
        "undefined" != typeof a.data("pause-on-hover") && (e = a.data("pause-on-hover"));
        var f = !1;
        "undefined" != typeof a.data("drag") && (f = a.data("drag"));
        var g = !0;
        0 === b && (g = !1);
        var h = "slide";
        "undefined" != typeof a.data("flex_fx") && a.data("flex_fx") !== !1 && (h = a.data("flex_fx"));
        var i = !1;
        a.find(".qode-lazy-image").length && (i = !0), a.flexslider({
            selector: ".qode_content_slider_inner > .qode_content_slider_item",
            animationLoop: !0,
            controlNav: d,
            directionNav: c,
            useCSS: !1,
            pauseOnAction: e,
            pauseOnHover: e,
            slideshow: g,
            animation: h,
            prevText: "<div><i class='fa fa-angle-left'></i></div>",
            nextText: "<div><i class='fa fa-angle-right'></i></div>",
            animationSpeed: 600,
            slideshowSpeed: b,
            touch: !0,
            smoothHeight: i,
            start: function () {
                j(a)
            },
            after: function () {
                j(a)
            }
        });
        var j = function (b) {
            a.find(".qode-lazy-image").length && qodeLazyImages()
        };
        if (a.find(".flex-direction-nav a").click(function (a) {
                a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation()
            }), f && a.swipe({
                swipeLeft: function () {
                    a.flexslider("next")
                }, swipeRight: function () {
                    a.flexslider("prev")
                }, threshold: 20
            }), a.hasClass("control_nav_justified")) {
            var k = function (b) {
                var c = a.find("ol");
                c.addClass("qode-type1-gradient-left-to-right-after"), $window_width > 1440 ? c.css("max-width", qode_grid_width) : c.css("max-width", Math.round(.8 * a.outerWidth()));
                var d = c.find("li"), e = d.outerWidth(), f = parseInt(c.css("max-width")), g = f - e * d.length, h = Math.floor(g / d.length);
                d.css("margin-right", h), d.last().css("margin-right", 0)
            };
            k(a), $j(window).resize(function () {
                k(a)
            })
        }
    })
}
function qodeInitStickyWidget() {
    var a = $j(".qode-widget-sticky-sidebar");
    if (a.length && $window_width > 1e3) {
        var b = $j("header.page_header");
        sticky_amount = getScrollAmountForStickyHeader(), a.each(function () {
            var a = $j(this), c = ".full_section_inner, .section_inner, .two_columns_75_25, .two_columns_25_75, .two_columns_66_33, .two_columns_33_66", d = 0, e = a.offset().top;
            if (a.parent("aside.sidebar").length)var f = a.parents("aside.sidebar"); else if (a.parents(".wpb_widgetised_column").length) {
                var f = a.parents(".wpb_widgetised_column");
                a.closest(".wpb_column").css("position", "static")
            }
            var g = f.offset().top;
            d = g > sticky_amount && (b.hasClass("stick") || b.hasClass("stick_with_left_right_menu")) ? min_header_height_sticky : b.hasClass("fixed") ? min_header_height_scroll + content_menu_top_add : b.hasClass("fixed_top_header") ? header_top_height : b.hasClass("fixed_hiding") ? min_header_height_fixed_hidden + 40 : (1e3 > qode_window || $j(".vertical_menu_enabled").length > 0, 0);
            var h = -(e - g - d - 10);
            f.stick_in_parent({
                parent: c,
                sticky_class: "qode-sticky-sidebar",
                inner_scrolling: !1,
                offset_top: h
            }).on("sticky_kit:bottom", function () {
                f.addClass("qode-sticky-sidebar-on-bottom")
            }).on("sticky_kit:unbottom", function () {
                f.removeClass("qode-sticky-sidebar-on-bottom")
            }), $j(window).scroll(function () {
                $window_width >= 1e3 && (sticky_amount > g && b.hasClass("sticky") && f.hasClass("qode-sticky-sidebar") && !f.hasClass("qode-sticky-sidebar-on-bottom") ? (f.css("-webkit-transform", "translateY(" + min_header_height_sticky + "px)"), f.css("transform", "translateY(" + min_header_height_sticky + "px)")) : (f.css("-webkit-transform", "translateY(0px)"), f.css("transform", "translateY(0px)")))
            })
        })
    }
}
function qodeBlogGalleryAnimation() {
    var a = $j(".blog_holder.blog_gallery");
    a.length && a.each(function () {
        var a = $j(this), b = a.find("article");
        b.each(function () {
            var a = $j(this), b = a.find(".post_excerpt"), c = parseInt(b.outerHeight(!0)), d = a.find(".post_category"), e = a.find(".entry_title");
            d.css({transform: "translateY(" + c + "px)"}), e.css({transform: "translateY(" + c + "px)"}), a.mouseenter(function () {
                d.css({transform: "translateY(0px)"}), e.css({transform: "translateY(0px)"}), b.css({
                    visibility: "visible",
                    opacity: "1"
                })
            }), a.mouseleave(function () {
                d.css({transform: "translateY(" + c + "px)"}), e.css({transform: "translateY(" + c + "px)"}), b.css({
                    visibility: "hidden",
                    opacity: "0"
                })
            })
        })
    })
}
function qodeLazyImages() {
    $j.fn.preloader = function (a, b) {
        if (a && "destroy" == a) this.find(".qode-lazy-preloader").remove(); else {
            var c = $j('<div class="qode-lazy-preloader"></div>');
            $j('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="75" width="75" viewbox="0 0 75 75"><circle stroke-linecap="round" cx="37.5" cy="37.5" r="33.5" stroke-width="4"/></svg>').appendTo(c), c.appendTo(this), "function" == typeof b && b()
        }
        return this
    }, $j('.qode-lazy-image[data-image][data-lazy="true"]:not(.lazyLoading)').each(function (a, b) {
        b = $j(b), b.attr("data-ratio") && b.height(b.width() * b.data("ratio"));
        var c = b[0].getBoundingClientRect(), d = $window_height || document.documentElement.clientHeight, e = $window_width || document.documentElement.clientWidth, f = b.outerHeight(), g = b.outerWidth();
        if ((0 != c.top || 0 != c.right || 0 != c.bottom || 0 != c.left) && (c.top >= 0 || c.top + f >= 0) && c.bottom >= 0 && c.bottom - f - d <= 0 && (c.left >= 0 || c.left + g >= 0) && c.right >= 0 && c.right - g - e <= 0) {
            var h = null;
            h = "IMG" == b.prop("tagName") ? b.parent() : b, h && h.preloader("init"), b.addClass("lazyLoading");
            var i = new Image;
            $j(i).on("load", function () {
                switch (h.preloader("destroy"), b.removeAttr("data-image").removeData("image").removeAttr("data-lazy").removeData("lazy").removeClass("lazyLoading"), b.prop("tagName")) {
                    case"IMG":
                        b.attr("src", $j(this).attr("src")), b.height("auto");
                        break;
                    case"DIV":
                    default:
                        b.css("background-image", "url(" + $j(this).attr("src") + ")")
                }
            }).attr("src", b.data("image"))
        }
    })
}
function qodeCardsGallery() {
    $j(".qode-cards-gallery-holder").length && $j(".qode-cards-gallery-holder").each(function () {
        var a, b = $j(this), c = b.find(".card"), d = b.data("side");
        switch (d) {
            case"left":
                a = "0 0 0 20%";
                break;
            case"right":
                a = "0 20% 0 0";
                break;
            case"top":
                a = "20% 0 0 0";
                break;
            case"bottom":
                a = "0 0 20% 0"
        }
        c.each(function () {
            var d = $j(this);
            d.click(function () {
                return c.last().is(d) ? void 0 : (d.addClass("out").animate({opacity: 0, margin: a}, 200, function () {
                    d.detach(), d.insertAfter(c.last()).animate({opacity: 1, margin: "0"}, 500, function () {
                        d.removeClass("out")
                    }), c = b.find(".card")
                }), !1)
            })
        })
    })
}
function qodeInitEllipticalSlider() {
    var a = $j(".qode-elliptical-slider");
    a.length && a.each(function () {
        var a = $j(this), b = 5e3, c = !0, d = !1, e = 600;
        "undefined" != typeof a.data("animation-speed") && a.data("animation-speed") !== !1 && (e = a.data("animation-speed")), a.flexslider({
            selector: ".qode-elliptical-slider-slides > .qode-elliptical-slide",
            animationLoop: !0,
            controlNav: c,
            directionNav: d,
            useCSS: !1,
            pauseOnAction: !0,
            pauseOnHover: !0,
            slideshow: !1,
            animationSpeed: e,
            slideshowSpeed: b,
            touch: !0
        })
    })
}
function qodeInitPricingCalculator() {
    var a = $j(".qode-pricing-calculator");
    a.length && a.each(function () {
        var a = $j(this), b = $j(this).find(".qode-pricing-calculator-item"), c = 0;
        b.each(function () {
            var b = $j(this), d = b.data("price"), e = b.find("input");
            e.attr("checked") && (c += d), b.on("change", function (b) {
                e.attr("checked") ? c += d : c -= d, a.find(".qode-pricing-calculator-total-price").text(c)
            })
        })
    })
}
function qodeSlidingImageHolder() {
    var a = $j(".qode-sliding-image-holder");
    a.length && a.each(function () {
        var a = $j(this);
        if (!$j("html").hasClass("touch")) {
            qodeRequestAnimationFrame();
            var b = a.find(".qode-sliding-image-background-image"), c = Math.round(b.width());
            0 == c && (c = 1920), a.find(".qode-aux-background-image").css("left", c), b.each(function (a) {
                var b = $j(this), d = 0, e = 1, f = function () {
                    d -= e, Math.round(b.offset().left) <= -c && (b.css("left", parseInt(c - 2 * e)), d = 0), b.css("transform", "translate3d(" + d + "px,0,0)"), requestNextAnimationFrame(f)
                };
                $j(window).load(function () {
                    f()
                })
            })
        }
    })
}
function qodeRequestAnimationFrame() {
    window.requestNextAnimationFrame = function () {
        var a = void 0, b = void 0, c = 0, d = navigator.userAgent, e = 0, f = this;
        return window.webkitRequestAnimationFrame && (b = function (a) {
            void 0 === a && (a = +new Date), f.callback(a)
        }, a = window.webkitRequestAnimationFrame, window.webkitRequestAnimationFrame = function (c, d) {
            f.callback = c, a(b, d)
        }), window.mozRequestAnimationFrame && (e = d.indexOf("rv:"), -1 != d.indexOf("Gecko") && (c = d.substr(e + 3, 3), "2.0" === c && (window.mozRequestAnimationFrame = void 0))), window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
            var c, d;
            window.setTimeout(function () {
                c = +new Date, a(c), d = +new Date, f.timeout = 1e3 / 60 - (d - c)
            }, f.timeout)
        }
    }()
}
function qodePageTransitionEffect() {
    var a = $j("body.qode-page-loading-effect-enabled > .qode-page-loading-effect-holder");
    a.length && (a.fadeOut(500), $j(window).bind("pageshow", function (b) {
        b.originalEvent.persisted && a.fadeOut(500)
    }), $j("a").click(function (b) {
        var c = $j(this);
        !(1 == b.which && c.attr("href").indexOf(window.location.host) >= 0 && "undefined" == typeof c.data("rel") && "undefined" == typeof c.attr("rel")) || c.hasClass("qode-like") || c.parents(".blog_load_more_button") || c.parents(".qode-single-product-images") || "undefined" != typeof c.attr("target") && "_self" !== c.attr("target") || c.attr("href").split("#")[0] === window.location.href.split("#")[0] || (b.preventDefault(), a.addClass("qode-hide-spinner"), a.fadeIn(500, function () {
            window.location = c.attr("href")
        }))
    }))
}
function qodeInitAccordions() {
    "use strict";
    var a = $j(".qode-accordion-holder");
    a.length && a.each(function () {
        var a = $j(this);
        if (a.hasClass("qode-accordion") && a.accordion({
                animate: "easeInOutQuint",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "content"
            }), a.hasClass("qode-toggle")) {
            var b = $j(this), c = b.find(".qode-title-holder"), d = c.next();
            b.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), c.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), d.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), c.each(function () {
                var a = $j(this);
                a.hover(function () {
                    a.toggleClass("ui-state-hover")
                }), a.on("click", function () {
                    a.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), a.next().toggleClass("ui-accordion-content-active").slideToggle(300)
                })
            })
        }
    })
}
function qodeInitInteractiveIconShowcase() {
    var a = $j(".qode-int-icon-showcase"), b = $j(".no_animation_on_touch");
    a.length && a.each(function () {
        function a() {
            c = 0;
            setInterval(function () {
                j || (e.removeClass("qode-showcase-active qode-current"), c == l - 1 ? c = 0 : c++, e.eq(c).addClass("qode-showcase-active"))
            }, k)
        }

        var c, d = $j(this), e = d.find(".qode-showcase-item-holder"), f = d.find(".qode-showcase-icon"), g = (d.find(".qode-showcase-content"), d.find(".qode-showcase-item-holder:first-child")), h = d.find(".qode-showcase-item-holder.qode-showcase-active"), i = !1, j = !1, k = 3e3, l = e.length;
        "undefined" != typeof d.data("interval") && d.data("interval") !== !1 && (k = d.data("interval")), b.length ? (g.addClass("qode-showcase-active"), i = !0) : d.appear(function () {
            setTimeout(function () {
                d.addClass("qode-appeared"), h.length || (i = !0, g.addClass("qode-showcase-active"), d.hasClass("qode-autoplay") && (a(), d.hover(function (a) {
                    j = !0
                }, function (a) {
                    j = !1
                })))
            }, 30)
        }, {accX: 0, accY: -200}), f.each(function () {
            var a = $j(this), b = a.parent();
            a.mouseenter(function () {
                1 == i && (b.siblings().removeClass("qode-showcase-active qode-current"), b.addClass("qode-showcase-active qode-current"), c = d.find(".qode-current").index())
            })
        })
    })
}
function qodeInitSendContactForm() {
    "use strict";
    var a = $j(".qode-contact-form-contact-template");
    a.length && a.each(function () {
        var a = $j(this);
        a.on("submit", function (b) {
            b.preventDefault();
            var c = !0;
            if (a.find(".contact-error").remove(), a.parent().find(".contact-success").remove(), a.find(".requiredField").each(function () {
                    var b = $j(this);
                    if ("" == jQuery.trim(b.val()) || jQuery.trim(b.val()) == jQuery.trim(b.attr("placeholder"))) b.parent().append('<strong class="contact-error">' + a.data("required-message") + "</strong>"), b.addClass("inputError"), c = !1; else if (b.hasClass("email")) {
                        var d = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
                        d.test(jQuery.trim(b.val())) || (b.parent().append('<strong class="contact-error">' + a.data("wrong-email-message") + "</strong>"), b.addClass("inputError"), c = !1)
                    }
                }), c) {
                var d = a.serialize(), e = {action: "qode_send_contact_page_form", form_data: d};
                $j.ajax({
                    type: "POST", data: e, url: QodeAdminAjax.ajaxurl, success: function (b) {
                        var c = JSON.parse(b);
                        "success" == c.status ? (a.before('<div class="contact-success"><p>' + c.message + "</p></div>"), a.hide()) : a.before('<div class="contact-success"><p>' + c.message + "</p></div>")
                    }
                })
            }
        })
    })
}
function qodeRecaptchaCallback() {
    "use strict";
    var a = $j("#qode-captcha-element-holder");
    a.length && grecaptcha.render("qode-captcha-element-holder", {sitekey: a.data("sitekey")})
}
function qodeWorkflow() {
    var a = $j(".qode-workflow");
    a.length && a.each(function () {
        var a = $j(this);
        if (a.hasClass("qode-workflow-animate")) {
            var b = a.find(".qode-workflow-item");
            a.appear(function () {
                a.addClass("qode-appeared"), setTimeout(function () {
                    b.each(function (a) {
                        var b = $j(this);
                        setTimeout(function () {
                            b.addClass("qode-appeared")
                        }, 350 * a)
                    })
                }, 350)
            }, {accX: 0, accY: -($window_height / 3)})
        }
    })
}
var $j = jQuery.noConflict(), $scroll = 0, qode_body = $j("body"), qode_window = $j(window), $window_width = $j(window).width(), $window_height = $j(window).height(), logo_height, menu_dropdown_height_set = !1, sticky_amount = 0, qode_grid_width = 1100, content_menu_position, content_menu_top, content_menu_top_add = 0, src, next_image, prev_image, $top_header_height, min_w = 1500, video_width_original = 1280, video_height_original = 720, vid_ratio = 1280 / 720, skrollr_slider, paspartu_width;
if ("undefined" == typeof paspartu_width_init)var paspartu_width_init = .02;
$j(document).ready(function () {
    "use strict";
    if ($j("header").hasClass("regular") && (content_menu_top = 0), $j("header").hasClass("fixed_top_header") && (content_menu_top = header_height), $j("header").hasClass("fixed") && (content_menu_top = min_header_height_scroll), $j("header").hasClass("fixed_hiding") && (content_menu_top = min_header_height_fixed_hidden + 40), ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu")) && (content_menu_top = 0), !$j("header.page_header").hasClass("scroll_top") && $j("header.page_header").hasClass("has_top") && $j("header.page_header").hasClass("fixed") && (content_menu_top_add = 34), $j("body").hasClass("vertical_menu_enabled")) {
        content_menu_top = 0, content_menu_top_add = 0
    }
    paspartu_width = 1024 > $window_width ? .02 : paspartu_width_init, contentMinHeight(), contentMinHeightWithPaspartu(), qodeGridWidth(), setDropDownMenuPosition(), initDropDownMenu(), initVerticalMenu(), initVerticalMobileMenu(), initQodeSlider(), initSideMenu(), initPopupMenu(), initMessageHeight(), initToCounter(), initCounter(), $j(".vertical_split_slider").length || initCountdown(), initProgressBars(), initListAnimation(), initPieChart(), initPieChartWithIcon(), initServiceAnimation(), initParallaxTitle(), initSideAreaScroll(), initVerticalAreaMenuScroll(), loadMore(), prettyPhoto(), alterWPMLSwitcherHeaderBottom(), initMobileMenu(), initFlexSlider(), fitVideo(), fitAudio(), initAccordion(), initAccordionContentLink(), qodeInitAccordions(), initMessages(), initProgressBarsIcon(), initMoreFacts(), placeholderReplace(), backButtonShowHide(), backToTop(), initSteps(), showGoogleMap(), initProgressBarsVertical(), initElementsAnimation(), updateShoppingCart(), initIconWithTextAnimation(), initVideoBackground(), initCheckSafariBrowser(), initSearchButton(), initCoverBoxes(), createContentMenu(), contentMenuScrollTo(), createSelectContentMenu(), initButtonHover(), initEnlargeButton(), initSocialIconHover(), initPageTitleAnimation(), initIconShortcodeHover(), qodeIcon().init(), initIconWithTextHover(), parallaxLayers(), initHorizontalMarquee(), initTextMarquee(), initExpandingImages(), qodeLazyImages(), initItemShowcase(), qodeCTASection().init(), qodeInitInteractiveIconShowcase(), qodeInitSendContactForm(), qodeWorkflow(), $j(".widget #searchform").mousedown(function () {
        $j(this).addClass("form_focus")
    }).focusout(function () {
        $j(this).removeClass("form_focus")
    }), $scroll = $j(window).scrollTop(), checkTitleToShowOrHide(), checkVerticalMenuTransparency(), $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), $j("header:not(.stick_with_left_right_menu) .q_logo a").css("visibility", "visible"), initFullScreenTemplate(), showHideVerticalMenu(), initMasonryGallery(), initLoadNextPostOnBottom(), initBlogMasonryGallery(), initBlogGallery(), qodeV2Button().init(), qodeCardsSlider().init(), qodeCardsGallery(), qodeInitEllipticalSlider(), qodeInitPricingCalculator(), qodeSlidingImageHolder()
}), $j(window).load(function () {
    "use strict";
    $j(".touch .main_menu li:has(div.second)").doubleTapToGo(), setLeftPostionedMenuPadding(), initSmallImageBlogHeight(), setDropDownMenuPosition(), initDropDownMenu(), initPortfolio(), initPortfolioZIndex(), initPortfolioSingleInfo(), initTestimonials(), initTestimonialsCarousel(), initVideoBackgroundSize(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), initPortfolioJustifiedGallery(), initPortfolioMasonry(), initPortfolioMasonryFilter(), initTabs(), qodeInitAdvancedTabs(), qodeInitAdvancedTabsIcons(), countClientsPerRow(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initTitleAreaAnimation(), setContentBottomMargin(), footerWidth(), $j("nav.content_menu").length > 0 && (content_menu_position = $j("nav.content_menu").offset().top, contentMenuPosition()), contentMenuCheckLastSection(), initQodeCarousel(), initPortfolioSlider(), initBlogSlider(), qodeInitBlogCarouselTitled(), initPreviewSlider(), initInDeviceSlider(), initTabsActiveBorder(), setActiveTabBorder(), initImageHover(), $j("header.stick_with_left_right_menu .q_logo a").css("visibility", "visible"), setMargingsForLeftAndRightMenu(), initImageGallerySliderNoSpace(), initVerticalSplitSlider(), initParallax(), initQodeElementAnimationSkrollr(), qodeBlogCompundMasonryGallery().init(), qodeInitStickyWidget(), qodeBlogHeadlines(), qodeCardsSlider().load(), initContentSlider(), qodePageTransitionEffect(), setTimeout(function () {
        checkAnchorOnScroll(), qodeBlogGalleryAnimation(), checkAnchorOnLoad(), checkHeaderStyleOnScroll(), $j(".no-touch .carousel").length && skrollr_slider.refresh()
    }, 700)
}), $j(window).scroll(function () {
    "use strict";
    $scroll = $j(window).scrollTop(), $j(window).width() > 1e3 && headerSize($scroll), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), checkVerticalMenuTransparency(), qodeLazyImages(), $j(".touch .drop_down > ul > li").mouseleave(), $j(".touch .drop_down > ul > li").blur()
}), $j(window).resize(function () {
    "use strict";
    $window_width = $j(window).width(), $window_height = $j(window).height(), paspartu_width = 1024 > $window_width ? .02 : paspartu_width_init, $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), initMessageHeight(), qodeNumberOfTestimonialsItemsResize(), fitAudio(), initSmallImageBlogHeight(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initVideoBackgroundSize(), countClientsPerRow(), setContentBottomMargin(), footerWidth(), calculateHeights(), $j(".vertical_split_slider").height($window_height), initMasonryGallery(), initPortfolioMasonry(), contentMinHeight(), contentMinHeightWithPaspartu(), qodeInitStickyWidget()
});
var sticky_animate, default_header_style, current_scroll;
!function (a) {
    "use strict";
    a.fn.countTo = function (b) {
        b = a.extend({}, a.fn.countTo.defaults, b || {});
        var c = Math.ceil(b.speed / b.refreshInterval), d = (b.to - b.from) / c;
        return a(this).each(function () {
            function e() {
                h += d, g++, a(f).html(h.toFixed(b.decimals)), "function" == typeof b.onUpdate && b.onUpdate.call(f, h), g >= c && (clearInterval(i), h = b.to, "function" == typeof b.onComplete && b.onComplete.call(f, h))
            }

            var f = this, g = 0, h = b.from, i = setInterval(e, b.refreshInterval)
        })
    }, a.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
}(jQuery), function (a) {
    var b = a(window), c = b.height();
    b.resize(function () {
        c = b.height()
    }), a.fn.parallax = function (d, e, f) {
        function g() {
            var f = b.scrollTop();
            j.each(function () {
                var b = a(this), g = b.offset().top, k = h(b);
                f > g + k || g > f + c || j.css("backgroundPosition", d + " " + Math.round((i - f) * e) + "px")
            })
        }

        var h, i, j = a(this);
        j.each(function () {
            i = j.offset().top
        }), h = f ? function (a) {
            return a.outerHeight(!0)
        } : function (a) {
            return a.height()
        }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === f) && (f = !0), b.bind("scroll", g).resize(g), g()
    }
}(jQuery);
var $scrollHeight, timeOuts = [];
!function (a) {
    "use strict";
    var b = a(window);
    a.fn.masonryParallax = function (c, d, e) {
        function f() {
            $scroll > k + l || k > $scroll + $window_height || i.css("transform", "translate3d(0px, " + Math.round((h - l - $scroll) * c + j) + "px, 0px)")
        }

        var g, h, i = a(this), j = 0;
        h = i.offset().top, g = d ? function (a) {
            return a.outerHeight(!0)
        } : function (a) {
            return a.height()
        }, 0 != e && (j = e), (arguments.length < 1 || null === c) && (c = .1), (arguments.length < 2 || null === d) && (d = !0);
        var k = i.offset().top, l = g(i);
        b.bind("scroll", f).resize(f), f()
    }
}(jQuery);
var qodeV2Button = function () {
    var a = $j(".qode-btn"), b = function (a) {
        if ("undefined" != typeof a.data("hover-color")) {
            var b = function (a) {
                a.data.button.css("color", a.data.color)
            }, c = a.css("color"), d = a.data("hover-color");
            a.hasClass("qode-btn-3d-hover") || (a.on("mouseenter", {
                button: a,
                color: d
            }, b), a.on("mouseleave", {button: a, color: c}, b))
        }
    }, c = function (a) {
        if ("undefined" != typeof a.data("hover-bg-color")) {
            var b = function (a) {
                a.data.button.css("background-color", a.data.color)
            }, c = a.css("background-color"), d = a.data("hover-bg-color");
            a.hasClass("qode-btn-3d-hover") || (a.on("mouseenter", {
                button: a,
                color: d
            }, b), a.on("mouseleave", {button: a, color: c}, b))
        }
    }, d = function (a) {
        var b = a.find(".qode-button-v2-icon-holder");
        if ("undefined" != typeof b.data("hover-icon-border-color")) {
            var c = function (a) {
                a.data.iconHolder.css("border-color", a.data.color)
            }, d = b.css("borderLeftColor"), e = b.data("hover-icon-border-color");
            a.hasClass("qode-btn-3d-hover") || (a.on("mouseenter", {
                iconHolder: b,
                color: e
            }, c), a.on("mouseleave", {iconHolder: b, color: d}, c))
        }
    }, e = function (a) {
        var b = a.find(".qode-button-v2-icon-holder");
        if ("undefined" != typeof b.data("hover-icon-bg-color")) {
            var c = function (a) {
                a.data.iconHolder.css("background-color", a.data.color)
            }, d = b.css("backgroundColor"), e = b.data("hover-icon-bg-color");
            a.hasClass("qode-btn-3d-hover") || (a.on("mouseenter", {
                iconHolder: b,
                color: e
            }, c), a.on("mouseleave", {iconHolder: b, color: d}, c))
        }
    }, f = function (a) {
        if (a.hasClass("qode-btn-3d-hover")) {
            var b = a.closest(".qode-3d-button-holder"), c = b.find(".qode-btn-3d-hover"), d = c.first(), e = c.last(), f = e.find(".qode-button-v2-icon-holder"), g = b.outerHeight(), h = Math.round(g / 2);
            if (d.css("transform", "rotateX(0deg) translateZ(" + h + "px)"), e.css("transform", "rotateX(90deg) translateZ(" + h + "px)"), setTimeout(function () {
                    b.css("opacity", "1")
                }, 200), b.on("mouseenter", function () {
                    d.css("transform", "rotateX(-90deg) translateZ(" + h + "px)"), e.css("transform", "rotateX(0deg) translateZ(" + h + "px)")
                }), b.on("mouseleave", function () {
                    d.css("transform", "rotateX(0deg) translateZ(" + h + "px)"), e.css("transform", "rotateX(90deg) translateZ(" + h + "px)")
                }), "undefined" != typeof e.data("hover-color")) {
                var i = e.data("hover-color");
                e.css("color", i)
            }
            if ("undefined" != typeof e.data("hover-bg-color")) {
                var j = e.data("hover-bg-color");
                e.css("background-color", j)
            }
            if ("undefined" != typeof e.data("hover-border-color")) {
                var k = e.data("hover-border-color");
                e.css("border-color", k)
            }
            if ("undefined" != typeof f.data("hover-icon-border-color")) {
                var l = f.data("hover-icon-border-color");
                f.css("border-color", l)
            }
            if ("undefined" != typeof f.data("hover-icon-bg-color")) {
                var m = f.data("hover-icon-bg-color");
                f.css("background-color", m)
            }
        }
    };
    return {
        init: function () {
            a.length && a.each(function () {
                b($j(this)), c($j(this)), d($j(this)), e($j(this)), f($j(this))
            })
        }
    }
}, qodeCTASection = function () {
    "use strict";
    var a = $j(".qode-cta-section"), b = function () {
        a.each(function () {
            var a = $j(this), b = a.find("img"), c = a.find(".qode-cta-section-text-wrapper");
            if (!$j("html").hasClass("touch") && a.hasClass("qode-cta-appear-effect")) {
                var d = function (a) {
                    a.appear(function () {
                        setTimeout(function () {
                            a.addClass("qode-appeared")
                        }, 30)
                    }, {accX: 0, accY: -($window_height / 3)})
                };
                d(b), d(c)
            }
        })
    };
    return {
        init: function () {
            a.length && b()
        }
    }
}, getIEversion = function () {
    var a = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var b = navigator.userAgent, c = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        null != c.exec(b) && (a = parseFloat(RegExp.$1))
    } else if ("Netscape" == navigator.appName) {
        var b = navigator.userAgent, c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
        null != c.exec(b) && (a = parseFloat(RegExp.$1))
    }
    return a
}, docElem = window.document.documentElement;
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1e3 / 60)
        }
}(), window.cancelAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (a) {
            window.clearTimeout(a)
        }
}(), SVGEl.prototype.init = function () {
    var a = this;
    [].slice.call(this.el.querySelectorAll("path")).forEach(function (b, c) {
        a.path[c] = b;
        var d = a.path[c].getTotalLength();
        a.length[c] = d, a.path[c].style.strokeDasharray = d + " " + d, a.path[c].style.strokeDashoffset = d
    })
}, SVGEl.prototype.render = function () {
    this.rendered || (this.rendered = !0, this.draw())
}, SVGEl.prototype.draw = function () {
    var a = this, b = this.current_frame / this.total_frames;
    if (b > 1) window.cancelAnimFrame(this.handle); else {
        this.current_frame++;
        for (var c = 0, d = this.path.length; d > c; c++)this.path[c].style.strokeDashoffset = Math.floor(this.length[c] * (1 - b));
        this.handle = window.requestAnimFrame(function () {
            a.draw()
        })
    }
};
var qodeIcon = function () {
    var a = $j(".qode-icon-holder"), b = function (a) {
        if ("undefined" != typeof a.data("hover-color")) {
            var b = function (a) {
                a.data.icon.css("color", a.data.color)
            }, c = a.find(".qode-icon-element"), d = a.data("hover-color"), e = c.css("color");
            "" !== d && (a.parents(".qode-start-icon-hover").length ? (a.parents(".qode-start-icon-hover").on("mouseenter", {
                icon: c,
                color: d
            }, b), a.parents(".qode-start-icon-hover").on("mouseleave", {
                icon: c,
                color: e
            }, b)) : (a.on("mouseenter", {icon: c, color: d}, b), a.on("mouseleave", {icon: c, color: e}, b)))
        }
    }, c = function (a) {
        if ("undefined" != typeof a.data("hover-background-color")) {
            var b = function (a) {
                a.data.icon.css("background-color", a.data.color)
            }, c = a.data("hover-background-color"), d = a.css("background-color");
            "" !== c && (a.parents(".qode-start-icon-hover").length ? (a.parents(".qode-start-icon-hover").on("mouseenter", {
                icon: a,
                color: c
            }, b), a.parents(".qode-start-icon-hover").on("mouseleave", {
                icon: a,
                color: d
            }, b)) : (a.on("mouseenter", {icon: a, color: c}, b), a.on("mouseleave", {icon: a, color: d}, b)))
        }
    };
    return {
        init: function () {
            a.length && a.each(function () {
                b($j(this)), c($j(this))
            })
        }
    }
};
!function (a) {
    "use strict";
    a.fn.extend({
        mouseParallax: function (b) {
            var c = {moveFactor: 1.5, targetContainer: this}, b = a.extend(c, b);
            return this.each(function () {
                var c = b, d = a(c.targetContainer).find(".image, .paralax_layers_content_holder");
                d.each(function (b) {
                    a(this).css("z-index", b)
                });
                var e, f;
                e = a(c.targetContainer).offset().left, f = a(c.targetContainer).offset().top, a(c.targetContainer).on("mouseenter", function (b) {
                    e = b.pageX - a(this).offset().left, f = b.pageY - a(this).offset().top
                }), a(c.targetContainer).on("mousemove", function (b) {
                    var g = a(this).offset().left + e, h = a(this).offset().top + f, i = b.pageX - g, j = b.pageY - h;
                    d.each(function (b) {
                        a(this).css({
                            marginLeft: -i / 100 * c.moveFactor * (b + 1),
                            marginTop: -j / 100 * c.moveFactor * (b + 1)
                        }, 100)
                    })
                });
                var g = {
                    interval: 0, over: function () {
                    }, timeout: 500, out: function () {
                        d.each(function (b) {
                            a(this).stop().animate({marginLeft: 0, marginTop: 0}, 300)
                        })
                    }
                };
                a(c.targetContainer).hoverIntent(g)
            })
        }
    })
}(jQuery);
var qodeCardsSlider = function () {
    var a = function (a, b, c, d, e, f) {
        b.data("card-slide", d).attr("data-card-slide", d), b.find(".qode-card-slider").css("margin-left", f ? -e.position().left + $j(b).outerWidth() / 2 - e.outerWidth() / 2 : -e.position().left), setTimeout(function () {
            qodeLazyImages()
        }, 500);
        var g = d > c ? 1 : -1;
        g > 0 && d == a.length ? b.find('.button[data-direction="next"]').addClass("hidden") : b.find('.button[data-direction="next"]').removeClass("hidden"), 0 > g && 1 == d ? b.find('.button[data-direction="prev"]').addClass("hidden") : b.find('.button[data-direction="prev"]').removeClass("hidden")
    }, b = function (b, c, d) {
        b.each(function (b, e) {
            var f = $j(e).find(".qode-card-slider > .slide"), g = $j(e).find(".dot"), h = Math.round(f.length / 2) - 1;
            c ? (g.length > 0 ? $j(g[h]).click() : a(f, $j(e), 1, h, $j(f[h]), d), $j(e).data("card-slide", h + 1).attr("data-card-slide", h + 1), $j(e).find(".button").removeClass("hidden")) : g.length > 0 ? $j(g[0]).click() : a(f, $j(e), 1, 1, $j(f[0]), d)
        })
    }, c = function (a, b, c) {
        b.find(".qode-card-slider").width(99999), a.each(function () {
            $j(this).css("max-width", b.outerWidth())
        })
    }, d = function () {
        var a = $j(".cards");
        a.each(function () {
            var a = $j(this), b = a.find(".card");
            b.each(function () {
                var c = $j(this);
                c.click(function () {
                    return b.last().is(c) || (c.detach(), c.insertAfter(b.last()), b = a.find(".card")), !1
                })
            })
        })
    }, e = function () {
        var a = $j(".cards");
        a.each(function () {
            var a = $j(this), b = a.find(".card").get().reverse();
            a.appear(function () {
                $j(b).each(function (a) {
                    var b = $j(this);
                    setTimeout(function () {
                        b.addClass("hovered"), setTimeout(function () {
                            b.removeClass("hovered")
                        }, 600)
                    }, 200 * a)
                })
            }, {accX: 0, accY: -($window_height / 3)})
        })
    }, f = function () {
        $j(".qode-cards-holder .card").each(function (a, b) {
            $j(b).click(function () {
                var a = $j("." + $j(b).data("value"));
                return a.closest(".qode-card-panes").find(".pane").removeClass("active"), a.addClass("active"), qodeLazyImages(), !1
            })
        }), $j(".qode-cards-holder").each(function (a, b) {
            $j(b).find(".qode-card-panes .pane").last().addClass("active"), $j(b).find(".qode-card-panes .pane .card").length ? $j(b).find(".qode-card-panes .pane .card").each(function (a, c) {
                $j(c).detach(), $j(b).find(".qode-cards-header").append($j(c))
            }) : $j(b).find(".qode-cards-header").remove()
        })
    }, g = function () {
        $j(".qode-card-panes").each(function () {
            var a = $j(this), b = -1, c = a.find(".pane").height();
            b = b > c ? b : c, a.height(b)
        })
    }, h = function (a) {
        a.swipe({
            swipeLeft: function () {
                a.find('.button[data-direction="next"]').click()
            }, swipeRight: function () {
                a.find('.button[data-direction="prev"]').click()
            }, threshold: 20
        })
    }, i = function () {
        $j(".qode-card-slider-holder").each(function (d, e) {
            var f = $j(e).find(".qode-card-slider > .slide"), i = $j(e).data("active-middle-slide"), j = $j(e).data("center");
            $j(e).find(".button").each(function (b, c) {
                $j(c).click(function () {
                    var b = "prev" == $j(c).data("direction") ? -1 : 1, d = $j(e).data("card-slide"), g = $j(e).data("card-slide") + b, h = $j(e).find('.slide[data-card-slide="' + g + '"]');
                    return h.length && (a(f, $j(e), d, g, h, j), $j(e).find(".dot").removeClass("active").filter('[data-card-slide="' + g + '"]').addClass("active")), !1
                })
            }), $j(e).find(".dot").each(function (b, c) {
                $j(c).click(function () {
                    $j(e).find(".dot").removeClass("active"), $j(c).addClass("active");
                    var b = $j(e).data("card-slide"), d = $j(c).data("card-slide"), g = $j(e).find('.slide[data-card-slide="' + d + '"]');
                    return g.length && a(f, $j(e), b, d, g, j), !1
                })
            }), c(f, $j(e), !1), b($j(e), i, j), h($j(e)), $j(window).resize(function () {
                c(f, $j(e), !0), b($j(e), i, j), g()
            })
        })
    };
    return {
        init: function () {
            $j(".qode-card-slider-holder").length && (i(), g(), f(), d())
        }, load: function () {
            $j(".qode-card-slider-holder").length && (g(), e())
        }
    }
};