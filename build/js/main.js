/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_parts/_dropdown.js":
/*!************************************!*\
  !*** ./src/js/_parts/_dropdown.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* выпадающий список */
$(document).on('click touch', '.header-burger__link', function (event) {
  event.preventDefault();
  $(this).parents('.dropdown').toggleClass('is-open');
}).on('click', function (event) {
  var $trigger = $(".dropdown");

  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    //$(".dropdown-block").slideUp("fast");
    $('.dropdown').removeClass('is-open');
  }
}).on('click touch', '.nav-item__link', function () {
  if ($(this).parents('.nav-item').hasClass('has-submenu')) {
    console.log('false');
    return false;
  } else {
    console.log('true');
    return true;
  }
});

/***/ }),

/***/ "./src/js/_parts/_header.js":
/*!**********************************!*\
  !*** ./src/js/_parts/_header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* скрипты для шапки */

/*$(document).on('mouseenter', '.nav-item__link', function () {
	$(this).siblings('.nav-item__submenu').show();
});*/

/***/ }),

/***/ "./src/js/_parts/_object-fit-images.js":
/*!*********************************************!*\
  !*** ./src/js/_parts/_object-fit-images.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_0__);
//var objectFitImages = require('object-fit-images');

object_fit_images__WEBPACK_IMPORTED_MODULE_0___default()();

/***/ }),

/***/ "./src/js/_parts/_sliders.js":
/*!***********************************!*\
  !*** ./src/js/_parts/_sliders.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");

$(document).ready(function () {
  //if($('.js-productSlider .swiper-slide').length <= 1){
  //	$('.js-productSlider .swiper-pagination').hide();
  //	$('.js-productSlider .slider-button').hide();
  //}
  $('.section-slider').each(function () {
    //var $hero = $(this),
    var data_slider_name = $(this).find('.swiper-container').data('slider-name'); //console.log(data_slider_name);
    //console.log(data_slider_name);

    var $slides = $(this).find('[data-slider-name="' + data_slider_name + '"] .swiper-slide');
    var $slides_no_dublicate = $slides.not('.swiper-slide-duplicate').length; //console.log($slides_no_dublicate);

    var $loop;

    if ($slides_no_dublicate > 1) {
      $loop = true;
    } else {
      $loop = false;
    }

    if (data_slider_name == "slider-stock") {
      var heroSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-slider-name="' + data_slider_name + '"].swiper-container', {
        effect: "slide",
        speed: 250,
        slidesPerView: 'auto',
        spaceBetween: 70,
        loop: $loop,
        //loopedSlides: $slides_no_dublicate,
        autoplay: {
          delay: 5000
        },
        delay: 4000,
        navigation: {
          nextEl: '[data-slider-name="' + data_slider_name + '"] .swiper-button-next',
          prevEl: '[data-slider-name="' + data_slider_name + '"] .swiper-button-prev'
        },
        breakpoints: {},
        on: {
          init: function init() {
            checkArrow();
          },
          resize: function resize() {
            checkArrow();
          }
        }
      });
    } else {
      var heroSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-slider-name="' + data_slider_name + '"].swiper-container', {
        effect: "slide",
        speed: 250,
        spaceBetween: 70,
        loop: true,
        //loopedSlides: $slides_no_dublicate,
        autoplay: {
          delay: 5000
        },
        delay: 4000,
        navigation: {
          nextEl: '[data-slider-name="' + data_slider_name + '"] .swiper-button-next',
          prevEl: '[data-slider-name="' + data_slider_name + '"] .swiper-button-prev'
        }
      });
    }

    var $progress = $('[data-slider-name="' + data_slider_name + '"] + .options .progress'),
        $progressIndex = $progress.find("span.index"),
        $progressSlides = $progress.find("span.slides"),
        $progressBar = $progress.find(".progress-bar .back");
    var slides = $slides.length,
        progressSlides = slides;

    if (progressSlides < 10) {
      progressSlides = "0" + progressSlides;
    }

    $progressSlides.text(progressSlides);
    heroSwiper.on('slideChange', function () {
      var progressIndex = heroSwiper.realIndex + 1,
          progress = heroSwiper.realIndex / (slides - 1) * 100;

      if (progressIndex < 10) {
        progressIndex = "0" + progressIndex;
      }

      $progressIndex.text(progressIndex);
      $progressBar.css("width", progress + "%");
    });

    function checkArrow() {
      var swiperPrev = $('[data-slider-name="' + data_slider_name + '"] .swiper-button-prev');
      var swiperNext = $('[data-slider-name="' + data_slider_name + '"] .swiper-button-next');

      if ($slides_no_dublicate > 1) {
        swiperPrev.show();
        swiperNext.show();
        $('options').show();
      } else {
        swiperPrev.hide();
        swiperNext.hide();
        $('[data-slider-name="' + data_slider_name + '"] .options').hide();
      }
    }
  });
  /* в списке товаров */

  var products_list_big = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.products__item__slider .swiper-container', {
    observer: true,
    observeParents: true,
    speed: 400,
    //spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.products__list .swiper-button-next',
      prevEl: '.products__list .swiper-button-prev'
    }
  });
  /* где еще купить продукци "У Палыча" */

  var slider_web = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-web .swiper-container', {
    effect: "slide",
    observer: false,
    observeParents: false,
    speed: 400,
    slidesPerView: 'auto',
    loopedSlides: 5,
    spaceBetween: 70,
    loop: true,
    navigation: {
      nextEl: '.slider-web .swiper-button-next',
      prevEl: '.slider-web .swiper-button-prev'
    }
  });
});

/***/ }),

/***/ "./src/js/_vendor/disableBodyScroll.js":
/*!*********************************************!*\
  !*** ./src/js/_vendor/disableBodyScroll.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Prevent body scroll and overscroll.
 * Tested on mac, iOS chrome / Safari, Android Chrome.
 *
 * Based on: https://benfrain.com/preventing-body-scroll-for-modals-in-ios/
 *           https://stackoverflow.com/a/41601290
 *
 * Use in combination with:
 * html, body {overflow: hidden;}
 *
 * and: -webkit-overflow-scrolling: touch; for the element that should scroll.
 *
 * disableBodyScroll(true, '.i-can-scroll');
 */
var disableBodyScroll = function () {
  /**
   * Private variables
   */
  var _selector = false,
      _element = false,
      _clientY;
  /**
   * Polyfills for Element.matches and Element.closest
   */


  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  if (!Element.prototype.closest) Element.prototype.closest = function (s) {
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);

    return el;
  };
  /**
   * Prevent default unless within _selector
   *
   * @param  event object event
   * @return void
   */

  var preventBodyScroll = function preventBodyScroll(event) {
    if (false === _element || !event.target.closest(_selector)) {
      event.preventDefault();
    }
  };
  /**
   * Cache the clientY co-ordinates for
   * comparison
   *
   * @param  event object event
   * @return void
   */


  var captureClientY = function captureClientY(event) {
    // only respond to a single touch
    if (event.targetTouches.length === 1) {
      _clientY = event.targetTouches[0].clientY;
    }
  };
  /**
   * Detect whether the element is at the top
   * or the bottom of their scroll and prevent
   * the user from scrolling beyond
   *
   * @param  event object event
   * @return void
   */


  var preventOverscroll = function preventOverscroll(event) {
    // only respond to a single touch
    if (event.targetTouches.length !== 1) {
      return;
    }

    var clientY = event.targetTouches[0].clientY - _clientY; // The element at the top of its scroll,
    // and the user scrolls down

    if (_element.scrollTop === 0 && clientY > 0) {
      event.preventDefault();
    } // The element at the bottom of its scroll,
    // and the user scrolls up
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions


    if (_element.scrollHeight - _element.scrollTop <= _element.clientHeight && clientY < 0) {
      event.preventDefault();
    }
  };
  /**
   * Disable body scroll. Scrolling with the selector is
   * allowed if a selector is porvided.
   *
   * @param  boolean allow
   * @param  string selector Selector to element to change scroll permission
   * @return void
   */


  return function (allow, selector) {
    if (typeof selector !== "undefined") {
      _selector = selector;
      _element = document.querySelector(selector);
    }

    if (true === allow) {
      if (false !== _element) {
        _element.addEventListener('touchstart', captureClientY, false);

        _element.addEventListener('touchmove', preventOverscroll, false);
      }

      document.body.addEventListener("touchmove", preventBodyScroll, false);
    } else {
      if (false !== _element) {
        _element.removeEventListener('touchstart', captureClientY, false);

        _element.removeEventListener('touchmove', preventOverscroll, false);
      }

      document.body.removeEventListener("touchmove", preventBodyScroll, false);
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (disableBodyScroll);

/***/ }),

/***/ "./src/js/_vendor/jquery-formstyler.js":
/*!*********************************************!*\
  !*** ./src/js/_vendor/jquery-formstyler.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/* jQuery Form Styler v1.7.4 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
(function (b) {
  "function" === typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(["jquery"], b) : "object" === (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) ? module.exports = b(__webpack_require__(/*! jquery */ "jquery")) : b(jQuery);
})(function (b) {
  function z(c, a) {
    this.element = c;
    this.options = b.extend({}, N, a);
    this.init();
  }

  function G(c) {
    if (!b(c.target).parents().hasClass("jq-selectbox") && "OPTION" != c.target.nodeName && b("div.jq-selectbox.opened").length) {
      c = b("div.jq-selectbox.opened");
      var a = b("div.jq-selectbox__search input", c),
          f = b("div.jq-selectbox__dropdown", c);
      c.find("select").data("_" + h).options.onSelectClosed.call(c);
      a.length && a.val("").keyup();
      f.hide().find("li.sel").addClass("selected");
      c.removeClass("focused opened dropup dropdown");
    }
  }

  var h = "styler",
      N = {
    wrapper: "form",
    idSuffix: "-styler",
    filePlaceholder: "\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
    fileBrowse: "\u041E\u0431\u0437\u043E\u0440...",
    fileNumber: "\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: %s",
    selectPlaceholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435...",
    selectSearch: !1,
    selectSearchLimit: 10,
    selectSearchNotFound: "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
    selectSearchPlaceholder: "\u041F\u043E\u0438\u0441\u043A...",
    selectVisibleOptions: 0,
    singleSelectzIndex: "100",
    selectSmartPositioning: !0,
    onSelectOpened: function onSelectOpened() {},
    onSelectClosed: function onSelectClosed() {},
    onFormStyled: function onFormStyled() {}
  };
  z.prototype = {
    init: function init() {
      function c() {
        var b = "",
            d = "",
            c = "",
            e = "";
        void 0 !== a.attr("id") && "" !== a.attr("id") && (b = ' id="' + a.attr("id") + f.idSuffix + '"');
        void 0 !== a.attr("title") && "" !== a.attr("title") && (d = ' title="' + a.attr("title") + '"');
        void 0 !== a.attr("class") && "" !== a.attr("class") && (c = " " + a.attr("class"));
        var l = a.data(),
            t;

        for (t in l) {
          "" !== l[t] && "_styler" !== t && (e += " data-" + t + '="' + l[t] + '"');
        }

        this.id = b + e;
        this.title = d;
        this.classes = c;
      }

      var a = b(this.element),
          f = this.options,
          y = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1,
          h = navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1;

      if (a.is(":checkbox")) {
        var z = function z() {
          var f = new c(),
              d = b("<div" + f.id + ' class="jq-checkbox' + f.classes + '"' + f.title + '><div class="jq-checkbox__div"></div></div>');
          a.css({
            position: "absolute",
            zIndex: "-1",
            opacity: 0,
            margin: 0,
            padding: 0
          }).after(d).prependTo(d);
          d.attr("unselectable", "on").css({
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none",
            display: "inline-block",
            position: "relative",
            overflow: "hidden"
          });
          a.is(":checked") && d.addClass("checked");
          a.is(":disabled") && d.addClass("disabled");
          d.click(function (b) {
            b.preventDefault();
            d.is(".disabled") || (a.is(":checked") ? (a.prop("checked", !1), d.removeClass("checked")) : (a.prop("checked", !0), d.addClass("checked")), a.focus().change());
          });
          a.closest("label").add('label[for="' + a.attr("id") + '"]').on("click.styler", function (a) {
            b(a.target).is("a") || b(a.target).closest(d).length || (d.triggerHandler("click"), a.preventDefault());
          });
          a.on("change.styler", function () {
            a.is(":checked") ? d.addClass("checked") : d.removeClass("checked");
          }).on("keydown.styler", function (a) {
            32 == a.which && d.click();
          }).on("focus.styler", function () {
            d.is(".disabled") || d.addClass("focused");
          }).on("blur.styler", function () {
            d.removeClass("focused");
          });
        };

        z();
        a.on("refresh", function () {
          a.closest("label").add('label[for="' + a.attr("id") + '"]').off(".styler");
          a.off(".styler").parent().before(a).remove();
          z();
        });
      } else if (a.is(":radio")) {
        var B = function B() {
          var x = new c(),
              d = b("<div" + x.id + ' class="jq-radio' + x.classes + '"' + x.title + '><div class="jq-radio__div"></div></div>');
          a.css({
            position: "absolute",
            zIndex: "-1",
            opacity: 0,
            margin: 0,
            padding: 0
          }).after(d).prependTo(d);
          d.attr("unselectable", "on").css({
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none",
            display: "inline-block",
            position: "relative"
          });
          a.is(":checked") && d.addClass("checked");
          a.is(":disabled") && d.addClass("disabled");
          d.click(function (b) {
            b.preventDefault();
            d.is(".disabled") || (d.closest(f.wrapper).find('input[name="' + a.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), a.prop("checked", !0).parent().addClass("checked"), a.focus().change());
          });
          a.closest("label").add('label[for="' + a.attr("id") + '"]').on("click.styler", function (a) {
            b(a.target).is("a") || b(a.target).closest(d).length || (d.triggerHandler("click"), a.preventDefault());
          });
          a.on("change.styler", function () {
            a.parent().addClass("checked");
          }).on("focus.styler", function () {
            d.is(".disabled") || d.addClass("focused");
          }).on("blur.styler", function () {
            d.removeClass("focused");
          });
        };

        B();
        a.on("refresh", function () {
          a.closest("label").add('label[for="' + a.attr("id") + '"]').off(".styler");
          a.off(".styler").parent().before(a).remove();
          B();
        });
      } else if (a.is(":file")) {
        a.css({
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          margin: 0,
          padding: 0
        });

        var C = function C() {
          var x = new c(),
              d = a.data("placeholder");
          void 0 === d && (d = f.filePlaceholder);
          var A = a.data("browse");
          if (void 0 === A || "" === A) A = f.fileBrowse;
          var e = b("<div" + x.id + ' class="jq-file' + x.classes + '"' + x.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
              l = b('<div class="jq-file__name">' + d + "</div>").appendTo(e);
          b('<div class="jq-file__browse">' + A + "</div>").appendTo(e);
          a.after(e).appendTo(e);
          a.is(":disabled") && e.addClass("disabled");
          a.on("change.styler", function () {
            var b = a.val();

            if (a.is("[multiple]")) {
              var b = "",
                  c = a[0].files.length;
              0 < c && (b = a.data("number"), void 0 === b && (b = f.fileNumber), b = b.replace("%s", c));
            }

            l.text(b.replace(/.+[\\\/]/, ""));
            "" === b ? (l.text(d), e.removeClass("changed")) : e.addClass("changed");
          }).on("focus.styler", function () {
            e.addClass("focused");
          }).on("blur.styler", function () {
            e.removeClass("focused");
          }).on("click.styler", function () {
            e.removeClass("focused");
          });
        };

        C();
        a.on("refresh", function () {
          a.off(".styler").parent().before(a).remove();
          C();
        });
      } else if (a.is('input[type="number"]')) {
        var D = function D() {
          var c = b('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
          a.after(c).prependTo(c).wrap('<div class="jq-number__field"></div>');
          a.is(":disabled") && c.addClass("disabled");
          var d,
              f,
              e,
              l = null,
              t = null;
          void 0 !== a.attr("min") && (d = a.attr("min"));
          void 0 !== a.attr("max") && (f = a.attr("max"));
          e = void 0 !== a.attr("step") && b.isNumeric(a.attr("step")) ? Number(a.attr("step")) : Number(1);

          var K = function K(s) {
            var c = a.val(),
                k;
            b.isNumeric(c) || (c = 0, a.val("0"));
            s.is(".minus") ? (k = parseInt(c, 10) - e, 0 < e && (k = Math.ceil(k / e) * e)) : s.is(".plus") && (k = parseInt(c, 10) + e, 0 < e && (k = Math.floor(k / e) * e));
            b.isNumeric(d) && b.isNumeric(f) ? k >= d && k <= f && a.val(k) : b.isNumeric(d) && !b.isNumeric(f) ? k >= d && a.val(k) : !b.isNumeric(d) && b.isNumeric(f) ? k <= f && a.val(k) : a.val(k);
          };

          c.is(".disabled") || (c.on("mousedown", "div.jq-number__spin", function () {
            var a = b(this);
            K(a);
            l = setTimeout(function () {
              t = setInterval(function () {
                K(a);
              }, 40);
            }, 350);
          }).on("mouseup mouseout", "div.jq-number__spin", function () {
            clearTimeout(l);
            clearInterval(t);
          }), a.on("focus.styler", function () {
            c.addClass("focused");
          }).on("blur.styler", function () {
            c.removeClass("focused");
          }));
        };

        D();
        a.on("refresh", function () {
          a.off(".styler").closest(".jq-number").before(a).remove();
          D();
        });
      } else if (a.is("select")) {
        var M = function M() {
          function x(a) {
            a.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (a) {
              var c = null;
              "mousewheel" == a.type ? c = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" == a.type && (c = 40 * a.originalEvent.detail);
              c && (a.stopPropagation(), a.preventDefault(), b(this).scrollTop(c + b(this).scrollTop()));
            });
          }

          function d() {
            for (var a = 0; a < l.length; a++) {
              var b = l.eq(a),
                  c = "",
                  d = "",
                  e = c = "",
                  u = "",
                  p = "",
                  v = "",
                  w = "",
                  g = "";
              b.prop("selected") && (d = "selected sel");
              b.is(":disabled") && (d = "disabled");
              b.is(":selected:disabled") && (d = "selected sel disabled");
              void 0 !== b.attr("id") && "" !== b.attr("id") && (e = ' id="' + b.attr("id") + f.idSuffix + '"');
              void 0 !== b.attr("title") && "" !== l.attr("title") && (u = ' title="' + b.attr("title") + '"');
              void 0 !== b.attr("class") && (v = " " + b.attr("class"), g = ' data-jqfs-class="' + b.attr("class") + '"');
              var h = b.data(),
                  r;

              for (r in h) {
                "" !== h[r] && (p += " data-" + r + '="' + h[r] + '"');
              }

              "" !== d + v && (c = ' class="' + d + v + '"');
              c = "<li" + g + p + c + u + e + ">" + b.html() + "</li>";
              b.parent().is("optgroup") && (void 0 !== b.parent().attr("class") && (w = " " + b.parent().attr("class")), c = "<li" + g + p + ' class="' + d + v + " option" + w + '"' + u + e + ">" + b.html() + "</li>", b.is(":first-child") && (c = '<li class="optgroup' + w + '">' + b.parent().attr("label") + "</li>" + c));
              t += c;
            }
          }

          function z() {
            var e = new c(),
                s = "",
                H = a.data("placeholder"),
                k = a.data("search"),
                h = a.data("search-limit"),
                u = a.data("search-not-found"),
                p = a.data("search-placeholder"),
                v = a.data("z-index"),
                w = a.data("smart-positioning");
            void 0 === H && (H = f.selectPlaceholder);
            if (void 0 === k || "" === k) k = f.selectSearch;
            if (void 0 === h || "" === h) h = f.selectSearchLimit;
            if (void 0 === u || "" === u) u = f.selectSearchNotFound;
            void 0 === p && (p = f.selectSearchPlaceholder);
            if (void 0 === v || "" === v) v = f.singleSelectzIndex;
            if (void 0 === w || "" === w) w = f.selectSmartPositioning;
            var g = b("<div" + e.id + ' class="jq-selectbox jqselect' + e.classes + '" style="display: inline-block; position: relative; z-index:' + v + '"><div class="jq-selectbox__select"' + e.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
            a.css({
              margin: 0,
              padding: 0
            }).after(g).prependTo(g);
            var L = b("div.jq-selectbox__select", g),
                r = b("div.jq-selectbox__select-text", g),
                e = l.filter(":selected");
            d();
            k && (s = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + p + '"></div><div class="jq-selectbox__not-found">' + u + "</div>");
            var m = b('<div class="jq-selectbox__dropdown" style="position: absolute">' + s + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + t + "</ul></div>");
            g.append(m);
            var q = b("ul", m),
                n = b("li", m),
                E = b("input", m),
                A = b("div.jq-selectbox__not-found", m).hide();
            n.length < h && E.parent().hide();
            "" === a.val() ? r.text(H).addClass("placeholder") : r.text(e.text());
            var F = 0,
                B = 0;
            n.each(function () {
              var a = b(this);
              a.css({
                display: "inline-block"
              });
              a.innerWidth() > F && (F = a.innerWidth(), B = a.width());
              a.css({
                display: ""
              });
            });
            r.is(".placeholder") && r.width() > F ? r.width(r.width()) : (s = g.clone().appendTo("body").width("auto"), k = s.outerWidth(), s.remove(), k == g.outerWidth() && r.width(B));
            F > g.width() && m.width(F);
            "" === l.first().text() && "" !== a.data("placeholder") && n.first().hide();
            a.css({
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: 0
            });
            var C = g.outerHeight(),
                I = E.outerHeight(),
                J = q.css("max-height"),
                s = n.filter(".selected");
            1 > s.length && n.first().addClass("selected sel");
            void 0 === n.data("li-height") && n.data("li-height", n.outerHeight());
            var D = m.css("top");
            "auto" == m.css("left") && m.css({
              left: 0
            });
            "auto" == m.css("top") && m.css({
              top: C
            });
            m.hide();
            s.length && (l.first().text() != e.text() && g.addClass("changed"), g.data("jqfs-class", s.data("jqfs-class")), g.addClass(s.data("jqfs-class")));
            if (a.is(":disabled")) return g.addClass("disabled"), !1;
            L.click(function () {
              b("div.jq-selectbox").filter(".opened").length && f.onSelectClosed.call(b("div.jq-selectbox").filter(".opened"));
              a.focus();

              if (!y) {
                var c = b(window),
                    d = n.data("li-height"),
                    e = g.offset().top,
                    k = c.height() - C - (e - c.scrollTop()),
                    p = a.data("visible-options");
                if (void 0 === p || "" === p) p = f.selectVisibleOptions;
                var s = 5 * d,
                    h = d * p;
                0 < p && 6 > p && (s = h);
                0 === p && (h = "auto");

                var p = function p() {
                  m.height("auto").css({
                    bottom: "auto",
                    top: D
                  });

                  var a = function a() {
                    q.css("max-height", Math.floor((k - 20 - I) / d) * d);
                  };

                  a();
                  q.css("max-height", h);
                  "none" != J && q.css("max-height", J);
                  k < m.outerHeight() + 20 && a();
                },
                    r = function r() {
                  m.height("auto").css({
                    top: "auto",
                    bottom: D
                  });

                  var a = function a() {
                    q.css("max-height", Math.floor((e - c.scrollTop() - 20 - I) / d) * d);
                  };

                  a();
                  q.css("max-height", h);
                  "none" != J && q.css("max-height", J);
                  e - c.scrollTop() - 20 < m.outerHeight() + 20 && a();
                };

                !0 === w || 1 === w ? k > s + I + 20 ? (p(), g.removeClass("dropup").addClass("dropdown")) : (r(), g.removeClass("dropdown").addClass("dropup")) : (!1 === w || 0 === w) && k > s + I + 20 && (p(), g.removeClass("dropup").addClass("dropdown"));
                g.offset().left + m.outerWidth() > c.width() && m.css({
                  left: "auto",
                  right: 0
                });
                b("div.jqselect").css({
                  zIndex: v - 1
                }).removeClass("opened");
                g.css({
                  zIndex: v
                });
                m.is(":hidden") ? (b("div.jq-selectbox__dropdown:visible").hide(), m.show(), g.addClass("opened focused"), f.onSelectOpened.call(g)) : (m.hide(), g.removeClass("opened dropup dropdown"), b("div.jq-selectbox").filter(".opened").length && f.onSelectClosed.call(g));
                E.length && (E.val("").keyup(), A.hide(), E.keyup(function () {
                  var c = b(this).val();
                  n.each(function () {
                    b(this).html().match(RegExp(".*?" + c + ".*?", "i")) ? b(this).show() : b(this).hide();
                  });
                  "" === l.first().text() && "" !== a.data("placeholder") && n.first().hide();
                  1 > n.filter(":visible").length ? A.show() : A.hide();
                }));
                n.filter(".selected").length && ("" === a.val() ? q.scrollTop(0) : (0 !== q.innerHeight() / d % 2 && (d /= 2), q.scrollTop(q.scrollTop() + n.filter(".selected").position().top - q.innerHeight() / 2 + d)));
                x(q);
              }
            });
            n.hover(function () {
              b(this).siblings().removeClass("selected");
            });
            n.filter(".selected").text();
            n.filter(":not(.disabled):not(.optgroup)").click(function () {
              a.focus();
              var c = b(this),
                  d = c.text();

              if (!c.is(".selected")) {
                var e = c.index(),
                    e = e - c.prevAll(".optgroup").length;
                c.addClass("selected sel").siblings().removeClass("selected sel");
                l.prop("selected", !1).eq(e).prop("selected", !0);
                r.text(d);
                g.data("jqfs-class") && g.removeClass(g.data("jqfs-class"));
                g.data("jqfs-class", c.data("jqfs-class"));
                g.addClass(c.data("jqfs-class"));
                a.change();
              }

              m.hide();
              g.removeClass("opened dropup dropdown");
              f.onSelectClosed.call(g);
            });
            m.mouseout(function () {
              b("li.sel", m).addClass("selected");
            });
            a.on("change.styler", function () {
              r.text(l.filter(":selected").text()).removeClass("placeholder");
              n.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
              l.first().text() != n.filter(".selected").text() ? g.addClass("changed") : g.removeClass("changed");
            }).on("focus.styler", function () {
              g.addClass("focused");
              b("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
            }).on("blur.styler", function () {
              g.removeClass("focused");
            }).on("keydown.styler keyup.styler", function (b) {
              var c = n.data("li-height");
              "" === a.val() ? r.text(H).addClass("placeholder") : r.text(l.filter(":selected").text());
              n.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
              if (38 == b.which || 37 == b.which || 33 == b.which || 36 == b.which) "" === a.val() ? q.scrollTop(0) : q.scrollTop(q.scrollTop() + n.filter(".selected").position().top);
              40 != b.which && 39 != b.which && 34 != b.which && 35 != b.which || q.scrollTop(q.scrollTop() + n.filter(".selected").position().top - q.innerHeight() + c);
              13 == b.which && (b.preventDefault(), m.hide(), g.removeClass("opened dropup dropdown"), f.onSelectClosed.call(g));
            }).on("keydown.styler", function (a) {
              32 == a.which && (a.preventDefault(), L.click());
            });
            G.registered || (b(document).on("click", G), G.registered = !0);
          }

          function e() {
            var e = new c(),
                f = b("<div" + e.id + ' class="jq-select-multiple jqselect' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative"></div>');
            a.css({
              margin: 0,
              padding: 0
            }).after(f);
            d();
            f.append("<ul>" + t + "</ul>");
            var h = b("ul", f).css({
              position: "relative",
              "overflow-x": "hidden",
              "-webkit-overflow-scrolling": "touch"
            }),
                k = b("li", f).attr("unselectable", "on"),
                e = a.attr("size"),
                y = h.outerHeight(),
                u = k.outerHeight();
            void 0 !== e && 0 < e ? h.css({
              height: u * e
            }) : h.css({
              height: 4 * u
            });
            y > f.height() && (h.css("overflowY", "scroll"), x(h), k.filter(".selected").length && h.scrollTop(h.scrollTop() + k.filter(".selected").position().top));
            a.prependTo(f).css({
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: 0
            });
            if (a.is(":disabled")) f.addClass("disabled"), l.each(function () {
              b(this).is(":selected") && k.eq(b(this).index()).addClass("selected");
            });else if (k.filter(":not(.disabled):not(.optgroup)").click(function (c) {
              a.focus();
              var d = b(this);
              c.ctrlKey || c.metaKey || d.addClass("selected");
              c.shiftKey || d.addClass("first");
              c.ctrlKey || c.metaKey || c.shiftKey || d.siblings().removeClass("selected first");
              if (c.ctrlKey || c.metaKey) d.is(".selected") ? d.removeClass("selected first") : d.addClass("selected first"), d.siblings().removeClass("first");

              if (c.shiftKey) {
                var e = !1,
                    f = !1;
                d.siblings().removeClass("selected").siblings(".first").addClass("selected");
                d.prevAll().each(function () {
                  b(this).is(".first") && (e = !0);
                });
                d.nextAll().each(function () {
                  b(this).is(".first") && (f = !0);
                });
                e && d.prevAll().each(function () {
                  if (b(this).is(".selected")) return !1;
                  b(this).not(".disabled, .optgroup").addClass("selected");
                });
                f && d.nextAll().each(function () {
                  if (b(this).is(".selected")) return !1;
                  b(this).not(".disabled, .optgroup").addClass("selected");
                });
                1 == k.filter(".selected").length && d.addClass("first");
              }

              l.prop("selected", !1);
              k.filter(".selected").each(function () {
                var a = b(this),
                    c = a.index();
                a.is(".option") && (c -= a.prevAll(".optgroup").length);
                l.eq(c).prop("selected", !0);
              });
              a.change();
            }), l.each(function (a) {
              b(this).data("optionIndex", a);
            }), a.on("change.styler", function () {
              k.removeClass("selected");
              var a = [];
              l.filter(":selected").each(function () {
                a.push(b(this).data("optionIndex"));
              });
              k.not(".optgroup").filter(function (c) {
                return -1 < b.inArray(c, a);
              }).addClass("selected");
            }).on("focus.styler", function () {
              f.addClass("focused");
            }).on("blur.styler", function () {
              f.removeClass("focused");
            }), y > f.height()) a.on("keydown.styler", function (a) {
              38 != a.which && 37 != a.which && 33 != a.which || h.scrollTop(h.scrollTop() + k.filter(".selected").position().top - u);
              40 != a.which && 39 != a.which && 34 != a.which || h.scrollTop(h.scrollTop() + k.filter(".selected:last").position().top - h.innerHeight() + 2 * u);
            });
          }

          var l = b("option", a),
              t = "";
          a.is("[multiple]") ? h || y || e() : z();
        };

        M();
        a.on("refresh", function () {
          a.off(".styler").parent().before(a).remove();
          M();
        });
      } else if (a.is(":reset")) a.on("click", function () {
        setTimeout(function () {
          a.closest(f.wrapper).find("input, select").trigger("refresh");
        }, 1);
      });
    },
    destroy: function destroy() {
      var c = b(this.element);
      c.is(":checkbox") || c.is(":radio") ? (c.removeData("_" + h).off(".styler refresh").removeAttr("style").parent().before(c).remove(), c.closest("label").add('label[for="' + c.attr("id") + '"]').off(".styler")) : c.is('input[type="number"]') ? c.removeData("_" + h).off(".styler refresh").closest(".jq-number").before(c).remove() : (c.is(":file") || c.is("select")) && c.removeData("_" + h).off(".styler refresh").removeAttr("style").parent().before(c).remove();
    }
  };

  b.fn[h] = function (c) {
    var a = arguments;
    if (void 0 === c || "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(c)) return this.each(function () {
      b.data(this, "_" + h) || b.data(this, "_" + h, new z(this, c));
    }).promise().done(function () {
      var a = b(this[0]).data("_" + h);
      a && a.options.onFormStyled.call();
    }), this;

    if ("string" === typeof c && "_" !== c[0] && "init" !== c) {
      var f;
      this.each(function () {
        var y = b.data(this, "_" + h);
        y instanceof z && "function" === typeof y[c] && (f = y[c].apply(y, Array.prototype.slice.call(a, 1)));
      });
      return void 0 !== f ? f : this;
    }
  };

  G.registered = !1;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/_vendor/masked-input.js":
/*!****************************************!*\
  !*** ./src/js/_vendor/masked-input.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) {
  "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) ? __webpack_require__(/*! jquery */ "jquery") : jQuery);
}(function (a) {
  var b,
      c = navigator.userAgent,
      d = /iphone/i.test(c),
      e = /chrome/i.test(c),
      f = /android/i.test(c);
  a.mask = {
    definitions: {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, a.fn.extend({
    caret: function caret(a, b) {
      var c;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
        this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
      })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
        begin: a,
        end: b
      });
    },
    unmask: function unmask() {
      return this.trigger("unmask");
    },
    mask: function mask(c, g) {
      var h, i, j, k, l, m, n, o;

      if (!c && this.length > 0) {
        h = a(this[0]);
        var p = h.data(a.mask.dataName);
        return p ? p() : void 0;
      }

      return g = a.extend({
        autoclear: a.mask.autoclear,
        placeholder: a.mask.placeholder,
        completed: null
      }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
        "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
      }), this.trigger("unmask").each(function () {
        function h() {
          if (g.completed) {
            for (var a = l; m >= a; a++) {
              if (j[a] && C[a] === p(a)) return;
            }

            g.completed.call(B);
          }
        }

        function p(a) {
          return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
        }

        function q(a) {
          for (; ++a < n && !j[a];) {
            ;
          }

          return a;
        }

        function r(a) {
          for (; --a >= 0 && !j[a];) {
            ;
          }

          return a;
        }

        function s(a, b) {
          var c, d;

          if (!(0 > a)) {
            for (c = a, d = q(b); n > c; c++) {
              if (j[c]) {
                if (!(n > d && j[c].test(C[d]))) break;
                C[c] = C[d], C[d] = p(d), d = q(d);
              }
            }

            z(), B.caret(Math.max(l, a));
          }
        }

        function t(a) {
          var b, c, d, e;

          for (b = a, c = p(a); n > b; b++) {
            if (j[b]) {
              if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
              c = e;
            }
          }
        }

        function u() {
          var a = B.val(),
              b = B.caret();

          if (o && o.length && o.length > a.length) {
            for (A(!0); b.begin > 0 && !j[b.begin - 1];) {
              b.begin--;
            }

            if (0 === b.begin) for (; b.begin < l && !j[b.begin];) {
              b.begin++;
            }
            B.caret(b.begin, b.begin);
          } else {
            for (A(!0); b.begin < n && !j[b.begin];) {
              b.begin++;
            }

            B.caret(b.begin, b.begin);
          }

          h();
        }

        function v() {
          A(), B.val() != E && B.change();
        }

        function w(a) {
          if (!B.prop("readonly")) {
            var b,
                c,
                e,
                f = a.which || a.keyCode;
            o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
          }
        }

        function x(b) {
          if (!B.prop("readonly")) {
            var c,
                d,
                e,
                g = b.which || b.keyCode,
                i = B.caret();

            if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
              if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                if (t(c), C[c] = d, z(), e = q(c), f) {
                  var k = function k() {
                    a.proxy(a.fn.caret, B, e)();
                  };

                  setTimeout(k, 0);
                } else B.caret(e);

                i.begin <= m && h();
              }

              b.preventDefault();
            }
          }
        }

        function y(a, b) {
          var c;

          for (c = a; b > c && n > c; c++) {
            j[c] && (C[c] = p(c));
          }
        }

        function z() {
          B.val(C.join(""));
        }

        function A(a) {
          var b,
              c,
              d,
              e = B.val(),
              f = -1;

          for (b = 0, d = 0; n > b; b++) {
            if (j[b]) {
              for (C[b] = p(b); d++ < e.length;) {
                if (c = e.charAt(d - 1), j[b].test(c)) {
                  C[b] = c, f = b;
                  break;
                }
              }

              if (d > e.length) {
                y(b + 1, n);
                break;
              }
            } else C[b] === e.charAt(d) && d++, k > b && (f = b);
          }

          return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
        }

        var B = a(this),
            C = a.map(c.split(""), function (a, b) {
          return "?" != a ? i[a] ? p(b) : a : void 0;
        }),
            D = C.join(""),
            E = B.val();
        B.data(a.mask.dataName, function () {
          return a.map(C, function (a, b) {
            return j[b] && a != p(b) ? a : null;
          }).join("");
        }), B.one("unmask", function () {
          B.off(".mask").removeData(a.mask.dataName);
        }).on("focus.mask", function () {
          if (!B.prop("readonly")) {
            clearTimeout(b);
            var a;
            E = B.val(), a = A(), b = setTimeout(function () {
              B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
            }, 10);
          }
        }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
          B.prop("readonly") || setTimeout(function () {
            var a = A(!0);
            B.caret(a), h();
          }, 0);
        }), e && f && B.off("input.mask").on("input.mask", u), A();
      });
    }
  });
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _parts_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_parts/_sliders */ "./src/js/_parts/_sliders.js");
/* harmony import */ var _parts_object_fit_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_parts/_object-fit-images */ "./src/js/_parts/_object-fit-images.js");
/* harmony import */ var _parts_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_parts/_dropdown */ "./src/js/_parts/_dropdown.js");
/* harmony import */ var _parts_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_parts/_header */ "./src/js/_parts/_header.js");
/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_parts_header__WEBPACK_IMPORTED_MODULE_4__);




 //import './_parts/_page';
//import './_parts/_aside';
//import './_parts/_menu';
//import './_parts/_contact';
//import './_parts/_contact-show-map';
//import './_parts/_product';
//import './_parts/_section';
//import './_parts/_animate';
//import './_parts/_modal';
//import './_parts/_helpers';
//import './_parts/_catalog';
//import './_parts/_filter';
//import './_parts/_2x';
//import './_parts/_hero';
//import './_parts/_countdown';
//import './_parts/_alert';
//import './_parts/_tab';
//import './_parts/_mask';
//import './_parts/_select';
//import './_parts/_order';
//import './_parts/_delivery';
//import './_parts/_checkout';
//import './_parts/_search';
//import './_parts/_header-tooltip';
//import './_parts/_product-day-slider';
//import './_parts/_city-confirm';

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_disableBodyScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vendor/disableBodyScroll */ "./src/js/_vendor/disableBodyScroll.js");
/* harmony import */ var _vendor_masked_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_vendor/masked-input */ "./src/js/_vendor/masked-input.js");
/* harmony import */ var _vendor_jquery_formstyler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_vendor/jquery-formstyler */ "./src/js/_vendor/jquery-formstyler.js");




svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();
window.disableBodyScroll = _vendor_disableBodyScroll__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map