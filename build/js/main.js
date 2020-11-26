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

/***/ "./src/js/_parts/_bx-filter.js":
/*!*************************************!*\
  !*** ./src/js/_parts/_bx-filter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function bxFilterOpen() {
  $(document).on('click', '.bx-filter-parameters-box', function () {
    $(this).toggleClass('active');
    console.log('active');
  });
}

$(document).ready(function () {
  $('.bx-filter-parameters-box-row > .bx-filter-parameters-box').addClass(function (index) {
    return index < 3 ? 'bx-active' : '';
  });
  $('.bx-filter-parameters-box-row > .bx-filter-parameters-box').each(function (index) {
    if (index <= 3) {
      $(this).find('[data-role="bx_filter_block"]').slideDown();
    }
  });
}); //$(document).ready(bxFilterOpen());
//$(document).ajaxComplete(bxFilterOpen());

/***/ }),

/***/ "./src/js/_parts/_calendar.js":
/*!************************************!*\
  !*** ./src/js/_parts/_calendar.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-datepicker */ "./node_modules/js-datepicker/dist/datepicker.min.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_datepicker__WEBPACK_IMPORTED_MODULE_0__);
 //window.pickerRemove = function() {
//	const picker = datepicker('[data-inputmask="date"]');
//	picker.remove()
//}

window.calendarMask = function () {
  //pickerRemove();
  var mindate = $('[data-inputmask="date"]').data('mindate');
  var maxdate = $('[data-inputmask="date"]').data('maxdate');
  /*var options = {
  	day: 'numeric',
  	month: 'numeric',
  	year: 'numeric'
  }
  	function getDate(str) {
  	var date = new Date(str);
  	return date.toLocaleString('ru', options)
  }
  	var mindateFormated = getDate(mindate);
  var maxdateFormated = getDate(maxdate);
  	console.log(mindateFormated, maxdateFormated);*/

  if (typeof $('input').data('inputmask') !== 'undefined') {
    var picker = js_datepicker__WEBPACK_IMPORTED_MODULE_0___default()('[data-inputmask="date"]', {
      customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      overlayPlaceholder: "Год",
      overlayButton: "Сохранить",
      minDate: new Date(mindate),
      maxDate: new Date(maxdate),
      formatter: function formatter(input, date, instance) {
        var value = date.toLocaleDateString();
        input.value = value; // => '1/1/2099'
      }
    });
  } else {
    console.log('nope 1');
  }
};

$(document).ready(function () {
  calendarMask();
});
$(document).ajaxComplete(function () {
  calendarMask();
});

/***/ }),

/***/ "./src/js/_parts/_cart.js":
/*!********************************!*\
  !*** ./src/js/_parts/_cart.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function dropdownSelectSearch() {
  $('.dropdown-select__search').on('keyup', function () {
    var valThis = $(this).val();
    $(this).parents('.dropdown-select').find('li').each(function () {
      var text = $(this).text();
      text.toLowerCase().indexOf(valThis.toLowerCase()) > -1 ? $(this).show() : $(this).hide();
    });
  });
}

$(document).ready(function () {
  dropdownSelectSearch();
});
$(document).ajaxComplete(function () {
  dropdownSelectSearch();
});

/***/ }),

/***/ "./src/js/_parts/_catalog-list-mobile.js":
/*!***********************************************!*\
  !*** ./src/js/_parts/_catalog-list-mobile.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('load resize', function () {
  if ($(window).width < 768) {
    $();
  }
});

/***/ }),

/***/ "./src/js/_parts/_cssVars.js":
/*!***********************************!*\
  !*** ./src/js/_parts/_cssVars.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");

var userAgent = navigator.userAgent.toLowerCase();
var InternetExplorer = false;
if (/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent) || /msie/.test(userAgent)) InternetExplorer = true;

if (InternetExplorer) {
  Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // Only styles from CodePen's CSS panel
    //include: 'style:not([data-ignore])',
    // Treat all browsers as legacy
    onlyLegacy: false,
    preserveStatic: false,
    preserveVars: true,
    updateURLs: false // DEMO: Toggles to see results
    // ----------------------------
    // preserveStatic: false,
    // preserveVars: true,
    // updateURLs: false,
    // variables: { '--color': 'purple' },
    // ----------------------------
    // Display transformed CSS
    //	onComplete: function(cssText, styleNodes, cssVariables, benchmark) {
    //		var codeElm = document.querySelector('code');
    //
    //		// Format CSS (external library)
    //		cssText = css_beautify(cssText);
    //
    //		// Update <code> tag with CSS result
    //		codeElm.textContent = cssText;
    //	}

  });
}

/***/ }),

/***/ "./src/js/_parts/_dropdown.js":
/*!************************************!*\
  !*** ./src/js/_parts/_dropdown.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* выпадающий список */

/* убираем действие по умолчанию для ссылке, если она с иконкой */
$(document).on('click touch', '.dropdown:not(.header-search):not(.cart-field__city)', function () {
  $(this).addClass('is-open');
});
$(document).on('click touch', '.dropdown a.link-icon__text', function (event) {
  event.preventDefault();
});
$(document).on('click touch', '.header-burger__link', function (event) {
  event.preventDefault();
  $(this).parents('.dropdown').toggleClass('is-open');
}).on('click touch', function (event) {
  var $trigger = $(".dropdown");

  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    //$(".dropdown-block").slideUp("fast");
    $trigger.removeClass('is-open');
  }
}).on('click touch', '.mobile .nav-item.has-submenu > .nav-item__link', function (event) {
  event.preventDefault(); //if($(this).parents('.nav-item').hasClass('has-submenu')){
  //	console.log('false');
  //
  //} else {
  //	console.log('true');
  //	return true;
  //}

  if ($(this).parents('.nav-item').hasClass('has-submenu')) {
    $(this).parents('.nav-list').toggleClass('is-open');
    $(this).parents('.nav-item').toggleClass('active');
  } else {}
}).on('click touch', '.dropdown-delivery__item.express', function () {
  $(this).siblings('.express-type').addClass('active');
  $('.dropdown-delivery__item').hide();
}).on('click touch', '.express__close', function () {
  $(this).parents('.express-type').removeClass('active');
  $('.dropdown-delivery__item').removeAttr("style");
});
/* выпадаюищй список в корзине */

$(document).ready(function () {
  $(document).on('click', '.dropdown-select__label', function () {
    $('.dropdown-select').removeClass('is-open');
    $(this).parents('.dropdown-select').toggleClass('is-open');
  }).on('click', '.dropdown-select__item', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).parents('.dropdown-select').find('.dropdown-select__label__text').text($(this).text());
    $(this).parents('.dropdown-select').toggleClass('is-open');
    $(this).parents('.dropdown-select').find('.dropdown-select__value').val($(this).data('value'));
    $(this).parents('.dropdown-select').addClass('is-valid');
  }).on('click touch', function (event) {
    var $trigger = $(".dropdown-select");

    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      //$(".dropdown-block").slideUp("fast");
      $trigger.removeClass('is-open');
    }
  });
});
/* выпадашка для поиска */

$(document).on('keyup', '.header-search .form-search__input', function () {
  $(this).parents('.dropdown').addClass('is-open');
});
/* выпадашка для изменения города в корзине */

$(document).on('click', '.cart-field-city__change', function () {
  $(this).parents('.dropdown').toggleClass('is-open');
});
/* социальные сети на в деталке */
//$(document).on('click', '[data-dropdown="share"]', function () {
//	$(this).addClass('is-open');
//});

/* о компании в мобилке */

$(window).on('load resize', function () {
  $(document).on('click', '.header-nav__item.dropdown .header-nav__item__link', function (event) {
    if ($(window).width() < 768) {
      event.preventDefault();
    } else {}
  });
});

/***/ }),

/***/ "./src/js/_parts/_equalHeight.js":
/*!***************************************!*\
  !*** ./src/js/_parts/_equalHeight.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $.fn.equalHeights = function () {
    var max_height = 0;
    $(this).each(function () {
      max_height = Math.max($(this).height(), max_height);
    });
    $(this).each(function () {
      $(this).height(max_height);
    });
  };

  $.fn.equalWidth = function () {
    var max_width = 0;
    $(this).each(function () {
      max_width = Math.max($(this).width(), max_width);
    });
    $(this).each(function () {
      $(this).width(max_width);
    });
  };

  $('.products__item:not(.products__item__size__big) .products__item__name').equalHeights();
}); //$('.nav-item__icon svg').equalWidth();
//$('.nav-item__icon svg').equalHeights();

/***/ }),

/***/ "./src/js/_parts/_express.js":
/*!***********************************!*\
  !*** ./src/js/_parts/_express.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function express__change() {
  $('.express__change').on('click touch', function (event) {
    event.preventDefault();
    var parentBlock = $(this).parents('.express');
    $(this).hide();
    parentBlock.removeClass('submited');
    parentBlock.find('.express__title').text('Экспресс доставка до 90 минут!');
    parentBlock.find('.express__address').text('').hide();
    parentBlock.removeClass('error');
  });
}

$(document).ready(function () {
  express__change();
});
$(document).ajaxComplete(function () {
  express__change();
});

/***/ }),

/***/ "./src/js/_parts/_fixingHeader.js":
/*!****************************************!*\
  !*** ./src/js/_parts/_fixingHeader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).scroll(function () {
  var headerMain = $('.header-main'),
      scroll = $(window).scrollTop(),
      headerTop = $('.header-top'),
      headerTopHeight = headerTop.height();

  if ($(window).width() > 768) {
    if (scroll >= headerTopHeight) headerMain.addClass('fixed');else headerMain.removeClass('fixed');
  } else {}
});

/***/ }),

/***/ "./src/js/_parts/_header.js":
/*!**********************************!*\
  !*** ./src/js/_parts/_header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* скрипты для шапки */
//var timeout = 0;
//$('.nav-item.has-submenu').on({
//	mouseenter: function() {
//		timeout = setTimeout(function() {
//			$(this).parents('.dropdown-block__inner').addClass('active');
//			$(this).addClass('active');
//		}.bind(this), 300);
//	},
//	mouseleave: function() {
//		clearTimeout(timeout);
//		$(this).removeClass('active');
//	}
//});
var navItem = $('.nav-item.has-submenu'),
    timer = null;
navItem.each(function (i, el) {
  $(el).on({
    mouseenter: function mouseenter() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        $(el).siblings(el).removeClass('active');
        $(el).parents('.dropdown-block__inner').addClass('active');
        $(el).addClass('active');
      }, 500);
    },
    mouseleave: function mouseleave() {
      //$(el).removeClass('active');
      clearTimeout(timer);
    }
  }); //$('.nav-item__submenu').on({
  //	mouseleave: function(){
  //		$(el).removeClass('active');
  //		clearTimeout(timer);
  //	}
  //});
});
$(document).ready(function () {//var navItem = $('.nav-item.has-submenu'),
  //	timer;
  //
  //navItem.each(function(i,el){
  //	$(el).on({
  //		mouseenter: function(){
  //			clearTimeout(timer);
  //			timer = setTimeout(function(){
  //				console.log(el);
  //				el.parents('.dropdown-block__inner').addClass('active');
  //				el.addClass('active');
  //				console.log('1');
  //				//$(el).next().show();
  //			}, 500);
  //		},
  //		mouseleave: function(){
  //			//el.parents('.dropdown-block__inner').removeClass('active');
  //			clearTimeout(timer);
  //			console.log('2');
  //		}
  //	});
  //});
  //var timer, pause = 400;
  //$(document).on("mouseenter mouseleave", ".nav-item.has-submenu", function(event) {
  //	clearTimeout(timer);
  //	if (event.type == "mouseenter") {
  //		timer = setTimeout(function(){
  //			$(this).parents('.dropdown-block__inner').addClass('active');
  //			$(this).addClass('active');
  //		}, pause);
  //	} else {
  //		clearTimeout(timer);
  //		$(this).removeClass('active');
  //		//$(this).parents('.dropdown-block').removeClass('active');
  //		//$('.dropdown-block').removeClass('active');
  //	}
  //});
  //	//var that = this;
  //	//if (event.type == "mouseenter") {
  //	//	timer = window.setTimeout(function() {
  //	//		that.closest('.dropdown-block__inner').classList.add("active")
  //	//	}, pause)
  //	//} else this.closest('.dropdown-block__inner').classList.remove("active")
  //});
  //$(document).on("mouseleave", ".nav-item:not(.has-submenu)", function(event) {
  //	$(this).parents('.dropdown-block').addClass('active');
  //});
});
$(document).ajaxComplete(function () {//subMenu();
});

/***/ }),

/***/ "./src/js/_parts/_mask.js":
/*!********************************!*\
  !*** ./src/js/_parts/_mask.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_masked_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vendor/masked-input */ "./src/js/_vendor/masked-input.js");


window.maskField = function () {
  $('[data-inputmask]').each(function () {
    var $this = $(this),
        type = $this.attr('data-inputmask');

    if ($this) {
      switch (type) {
        case 'phone':
          $(this).mask("+7 (999) 999-9999");
          break;

        case 'time':
          $(this).mask("99:99 - 99:99");
          break;

        case 'date':
          $(this).mask("99/99/9999");
          break;
      }
    }
  });
};

$(document).ready(function () {
  maskField();
});
$(document).ajaxComplete(function () {
  maskField();
});

/***/ }),

/***/ "./src/js/_parts/_mobile-el-replace.js":
/*!*********************************************!*\
  !*** ./src/js/_parts/_mobile-el-replace.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('load resize', function () {
  /* проверяет все блоки с data-move и перемещает в блоки в мобилке/десктопе на основе их атрибутов */
  if ($(window).width() < 992) {
    if ($('[data-mobile-menu="catalog-links"] > *').length > 1) {
      $('[data-mobile-menu="catalog-links"] .nav-list').remove();
    } else {
      $('[data-desktop="catalog"] [data-move="catalog"]').clone().appendTo('[data-mobile-menu="catalog-links"]');
    }
    /* блок каталога в мобилке */


    $('[data-mobile-menu="catalog-links"] .nav-list').removeAttr('data-move');
    $('[data-mobile-menu="catalog-links"] .nav-list .nav-item__submenu').remove();
    $('[data-mobile-menu="catalog-links"] .nav-list .nav-item').removeClass('.nav-item');
    setTimeout(function () {
      $('[data-move]').each(function (element) {
        var dataMoveAttr = $(this).data('move');
        $(this).siblings('.dropdown-block').appendTo('[data-mobile-menu="' + dataMoveAttr + '"]');
        $(this).prependTo('[data-mobile-menu="' + dataMoveAttr + '"]');
      });
    }, 100); //$('[data-mobile-menu="catalog"] .nav-item__submenu').addClass('prevented');

    /*$(document).on('click', '[data-mobile-menu="catalog"] .has-submenu .nav-item__link', function (event) {
    	event.preventDefault();
    });*/

    console.log('переставил на мобилку');
  } else if ($(window).width() > 991) {
    $('[data-move]').each(function (element) {
      var dataMoveAttr = $(this).data('move');
      $(this).siblings('.dropdown-block').appendTo('[data-desktop="' + dataMoveAttr + '"]');
      $(this).prependTo('[data-desktop="' + dataMoveAttr + '"]');
    }); //$('.nav-item__submenu').removeClass('prevented');
    //$(document).on('click', '.prevented .nav-item__link', function (event) {
    //	$(this).unbind('click');
    //	return true;
    //});
    //console.log('переставил на пк');
  }
  /* перестановка блоков в деталке */


  $('[data-move-left-right]').each(function () {
    if ($(window).width() < 992) {
      $(this).appendTo('.product-col__left');
      $('[data-share-move]').appendTo('[data-share-mobile]');
    } else if ($(window).width() > 991) {
      $(this).appendTo('.product-col__right');
      $('[data-share-move]').appendTo('[data-share-desktop]');
    }
  });
});
$(document).ready(function () {
  /* закрытие мобильного меню */
  window.mobilePanelClose = function () {
    $('.mobile').removeClass('is-open');
    $('body').removeClass('mobile-open');
    $('[data-mobile-menu*="catalog-"]:not([data-mobile-menu="catalog-list"])').hide();
    $('[data-mobile-menu-type]').attr('data-mobile-menu-type', '');
  };

  $('[data-mobile-menu-close]').on('click touch', function () {
    mobilePanelClose();
  });
  /* открытие мобильного меню */

  $('[data-mobile-menu="burger"]').on('click touch', function () {
    $('body').addClass('mobile-open'); //$('[data-mobile-menu-type]').addClass('main-mobile');
    //$('[data-mobile-menu-type="main-mobile"]').parent().addClass('is-open');

    $('[data-mobile-menu*="catalog-"]:not([data-mobile-menu="catalog-list"])').hide();
    $('.mobile-menu-section:not([data-mobile-menu*="catalog-"])').show();
    $('[data-mobile-menu-type]').attr('data-mobile-menu-type', 'main-mobile');
    $('.mobile').addClass('is-open');
  });
  /* открытие мобильного меню на странице списка товаров */

  $('[data-catalog-mobile-menu]').on('click touch', function () {
    $('body').addClass('mobile-open'); //$('[data-mobile-menu-type]').addClass('catalog-list-mobile');
    //$('[data-mobile-menu-type="catalog-list"]').parent().addClass('is-open');

    $('[data-mobile-menu-type]').attr('data-mobile-menu-type', 'catalog-list');
    $('.mobile-menu-section').hide();
    $('.mobile').addClass('is-open');
    var dataMoveAttrName = $(this).data('mobile-menu-title');
    var dataCatalogType = $(this).data('catalog-type'); //console.log(dataCatalogType);

    $('.mobile-menu__title').text(dataMoveAttrName);
    $('[data-mobile-menu="catalog-' + dataCatalogType + '"]').show();
  });
  /* при клике на иконку поиска в шапке меню */

  $('.header-mobile__search').on('click touch', function () {
    $('body').addClass('mobile-open');
    $('[data-mobile-menu-type]').attr('data-mobile-menu-type', 'catalog-list');
    $('.mobile-menu-section').hide();
    $('[data-mobile-menu="search"]').show();
    $('.mobile').addClass('is-open');
    var dataMoveAttrName = $(this).data('mobile-menu-title');
    $('.mobile-menu__title').text(dataMoveAttrName);
  });
});

/***/ }),

/***/ "./src/js/_parts/_modal.js":
/*!*********************************!*\
  !*** ./src/js/_parts/_modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import '../_vendor/jquery.fancybox';
//function openModal(element){
//	$.fancybox.close();
//	$.fancybox.open(element,{
//		//src: element,
//		type: 'inline',
//		opts: {
//			baseClass: 'fancybox-modal',
//			buttons: []
//		}
//	});
//}
//$(document).on('click touch', '[data-modal-open]', function(event) {
//	event.preventDefault();
//	openModal($(this).attr('href'));
//});
$(document).on('click touch', '[data-modal-open=""]', function (event, element) {
  event.preventDefault();
  $.fancybox.close();
  $.fancybox.open({
    //selector: element,
    src: $(this).attr('href'),
    type: 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal__custom",
    infobar: false,
    buttons: false
  });
}); //$(document).on('click touch', '[data-modal-open="city"]', function(event, element) {
//	event.preventDefault();
//	$.fancybox.close();
//	$.fancybox.open( {
//		//selector: element,
//		src: $(this).attr('href'),
//		type : 'inline',
//		touch: false,
//		autoFocus: false,
//		fullScreen: true,
//		baseClass: "modal-city-choose",
//		infobar: false,
//		buttons: false,
//	});
//});

function cityChoose() {
  $.fancybox.close();
  $.fancybox.open({
    //selector: element,
    src: '#city-choose',
    type: 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal-city-choose",
    infobar: false,
    buttons: false
  });
}

$(document).ready(function () {
  if ($('#city-choose').length) {
    //cityChoose();
    console.log("всплывашка городов есть");
  } else {
    console.log("всплывашки городов нет");
  }
});

function thxCallback() {
  $.fancybox.close();
  $.fancybox.open({
    //selector: element,
    src: '#thx-callback',
    type: 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal__custom",
    infobar: false,
    buttons: false
  });
}

function thxPalichEmail() {
  $.fancybox.close();
  $.fancybox.open({
    //selector: element,
    src: '#thx-palich-email',
    type: 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal__custom",
    infobar: false,
    buttons: false
  });
}

function thxOrder() {
  $.fancybox.close();
  $.fancybox.open({
    //selector: element,
    src: '#thx-order',
    type: 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal__custom",
    infobar: false,
    buttons: false
  });
}

function welcome() {
  $.fancybox.close();
  $.fancybox.open({
    //selector: element,
    src: '#welcome',
    type: 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal__custom",
    infobar: false,
    buttons: false
  });
  $('.welcome .delivery-item__text').equalHeights();
}

$(document).ready(function () {//welcome();
});

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

$(document).ready(function () {
  object_fit_images__WEBPACK_IMPORTED_MODULE_0___default()();
});

/***/ }),

/***/ "./src/js/_parts/_product-pickup.js":
/*!******************************************!*\
  !*** ./src/js/_parts/_product-pickup.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function productPickup() {
  $(document).on('click', '.products-pickup__close', function (event) {
    event.preventDefault();
    $(this).parents('.products__item__inner').removeClass('pickup-show'); //$(this).parents('.products-pickup').hide();

    $('body').removeClass('products-pickup-bg');
  }); //$(document).on('click', '.products__item__cart', function (event) {
  //	event.preventDefault();
  //	$(this).parents('.products__item__inner').addClass('pickup-show');
  //	setTimeout(function () {
  //		$('.products__item__inner').removeClass('pickup-show');
  //	},1000);
  //});

  if ($(window).width() < 768) {
    $('.products__item__cart').on({
      click: function click() {
        $(this).parents('.products__item__inner').addClass('pickup-show'); //setTimeout(function () {
        //	$('.products__item__inner').removeClass('pickup-show');
        //},1000);
      }
    });
  } else {
    $('.products__item__cart').on({
      mouseenter: function mouseenter() {
        $(this).parents('.products__item__inner').addClass('on-hover');
        var positionTop = $(this).position().top;
        $(this).parents('.products__item__inner').find('.products-pickup').css({
          'bottom': 'calc(107% - ' + positionTop + 'px)'
        });
      },
      mouseleave: function mouseleave() {
        $(this).parents('.products__item__inner').removeClass('on-hover');
      }
    });
  }
}

function pickupHide() {}

$(document).ready(function () {
  productPickup();
});
$(document).ajaxComplete(function () {
  productPickup();
});

/***/ }),

/***/ "./src/js/_parts/_products.js":
/*!************************************!*\
  !*** ./src/js/_parts/_products.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.section.products .section-content').addClass('scroll scroll-x');
  } else if ($(window).width() > 767) {
    $('.section.products .section-content').removeClass('scroll scroll-x');
  }
});
/*$('.js-countMinus').on('click', (event) => {
	const _this = $(event.currentTarget);
	const count = _this.parents('.js-count');
	const input = count.find('.js-countInput');

	if(input.val() <= 1) return false;

	input.val(parseFloat(input.val()) - 1);
});

$('.js-countPlus').on('click', (event) => {
	const _this = $(event.currentTarget);
	const count = _this.parents('.js-count');
	const input = count.find('.js-countInput');

	input.val(parseFloat(input.val()) + 1);
});*/

/***/ }),

/***/ "./src/js/_parts/_shops-tabs.js":
/*!**************************************!*\
  !*** ./src/js/_parts/_shops-tabs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Вкладки - фирменные магазины */
$(document).ready(function () {
  $('.shops-nav__item:first-child, .shops-content-tab:first-child').addClass('active');
});
$(document).on('click touch', '[data-shops-nav]', function () {
  $('[data-shops-nav]').removeClass('active');
  $(this).addClass('active');
  var shops_view_type = $(this).data('shops-nav');
  $('.shops-content-tab').removeClass('active');
  $('[data-shops-content="' + shops_view_type + '"]').addClass('active');
  console.log(shops_view_type);
});

/***/ }),

/***/ "./src/js/_parts/_shopsMap.js":
/*!************************************!*\
  !*** ./src/js/_parts/_shopsMap.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.allMarkers2 = {};
/*var shops = [
	{
		id: 1,
		cityId: 1,
		city: 'Краснодар',
		address: 'ул. Тургеневское шоссе, д. 27',
		location: [55.8617, 38.1988]
	},
	{
		id: 2,
		cityId: 1,
		city: 'Краснодар',
		address: 'ул. Головатого, д. 313',
		location: [55.8617, 37.7788]
	},
	{
		id: 3,
		cityId: 2,
		city: 'Анапа',
		address: 'ул. Крылатая, д. 2',
		location: [55.8617, 37.1988]
	},
	{
		id: 4,
		cityId: 3,
		city: 'Новороссийск',
		address: 'ул. Уральская, д. 98',
		location: [55.8617, 38.2988]
	}
];*/

function mapInit() {
  var mapContainer = $('.js-shop-map');
  var mapMarkers = eval(mapContainer.data('map'));
  var mapPinIcon = mapContainer.data('pin');
  var offsetValue = 0;
  var mapCenter = mapContainer.data('center').split(',');
  mapCenter = [mapCenter[1], mapCenter[0]];
  var allMarkers = []; //var allMarkers2 = {};

  var baloonHTML = ""; // Создание экземпляра карты.

  var myMap = new ymaps.Map('map', {
    center: mapCenter,
    zoom: 15,
    controls: []
  }, {
    suppressMapOpenBlock: true
  });
  var clusterer = new ymaps.Clusterer({
    //preset: mapPinIcon,
    groupByCoordinates: false,
    clusterDisableClickZoom: false,
    clusterHideIconOnBalloonOpen: true,
    geoObjectHideIconOnBalloonOpen: true
  });

  for (var i = 0, l = mapMarkers.length; i < l; i++) {
    //createMenuGroup(mapMarkers[i]);
    // Кастомный балун
    var location = mapMarkers[i].location;
    var id = mapMarkers[i].id;
    var markerMetro = mapMarkers[i].metro.length == 0 ? '<span class=\'map-tooltip__metro\'>' + mapMarkers[i].metro + '</span>' : '<span class=\'map-tooltip__metro\'>' + mapMarkers[i].metro + ', </span>';
    var markerAddress = mapMarkers[i].address;
    var markerClosest = mapMarkers[i].closest;
    var markerTime = mapMarkers[i].time;
    var markerTel = mapMarkers[i].tel;
    MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="map-tooltip" data-tooltip-id="' + id + '">' + '<div class="map-tooltip__close js-mapTooltipClose"></div>' + '<div class="arrow"></div>' + '<div class="map-tooltip__desc">' + '$[[options.contentLayout observeSize]]' + '</div>' + '</div>', {
      build: function build() {
        this.constructor.superclass.build.call(this);
        this._$element = $('.map-tooltip', this.getParentElement());
        this.applyElementOffset();

        this._$element.find('.js-mapTooltipClose').on('click', $.proxy(this.onCloseClick, this));
      },
      clear: function clear() {
        this._$element.find('.js-mapTooltipClose').off('click');

        this.constructor.superclass.clear.call(this);
      },
      onSublayoutSizeChange: function onSublayoutSizeChange() {
        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

        if (!this._isElement(this._$element)) {
          return;
        }

        this.applyElementOffset();
        this.events.fire('shapechange');
      },
      applyElementOffset: function applyElementOffset() {
        this._$element.css({
          left: -(this._$element[0].offsetWidth / 2),
          top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
        });
      },
      onCloseClick: function onCloseClick(e) {
        e.preventDefault();
        this.events.fire('userclose');
      },
      getShape: function getShape() {
        if (!this._isElement(this._$element)) {
          return MyBalloonLayout.superclass.getShape.call(this);
        }

        var position = this._$element.position();

        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight]]));
      },
      _isElement: function _isElement(element) {
        return element && element[0] && element.find('.arrow')[0];
      }
    });
    MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass("<div class='map-tooltip__address'>" + markerMetro + markerAddress + "<div class='map-tooltip__closest'>" + markerClosest + "</div>" + "</div>" + "<div class='map-tooltip__info'>" + "<div class='map-tooltip__time'>" + markerTime + "</div>" + "<div class='map-tooltip__tel'>" + markerTel + "</div>" + "</div>");
    placemark = window.placemark = new ymaps.Placemark(location, {//balloonHeader: 'Заголовок балуна',
      //balloonContent: 'Контент балуна'
    }, {
      balloonShadow: false,
      balloonLayout: MyBalloonLayout,
      balloonContentLayout: MyBalloonContentLayout,
      balloonPanelMaxMapArea: 0,
      // Не скрываем иконку при открытом балуне.
      hideIconOnBalloonOpen: false,
      iconLayout: 'default#image',
      iconImageHref: mapPinIcon,
      iconImageOffset: [-6, -40],
      iconImageSize: [84, 84]
    });
    placemark.events //.add('click', function (e) {
    //	if (!myMap.balloon.isOpen()) {
    //		e.get('target').options.set({iconImageHref: 'images/map-pin-active.svg'});
    //	} else {
    //		e.get('target').options.set({iconImageHref: 'images/map-pin.svg'});
    //	}
    //})
    .add('balloonclose', function (e) {
      e.get('target').options.set({
        iconImageHref: '/local/templates/main/frontend/images/map-pin.svg'
      });
    }).add('balloonopen', function (e) {
      e.get('target').options.set({
        iconImageHref: '/local/templates/main/frontend/images/map-pin-active.svg'
      });
    });
    clusterer.options.set({
      gridSize: 50,
      clusterDisableClickZoom: false,
      preset: 'islands#redClusterIcons'
    });
    clusterer.add(placemark);
    myMap.geoObjects.add(clusterer);
    myMap.setBounds(clusterer.getBounds(), {
      checkZoomRange: true
    }); //allMarkers.push(placemark);
    //allMarkers2[id] = placemark;
    //
    //// allMarkers2[2].balloon.open(); - работает и allMarkers2.balloon.close(); - тоже
    //
    ////placemark.balloon.open();
    ////console.log(allMarkers2[id]);
    //
    //myMap.setBounds(myMap.geoObjects.add(placemark).getBounds(),clusterer.getBounds(),{
    //	checkZoomRange: true
    //});
    //myMap.events.add('boundschange', function(e){
    //	if (e.get('newZoom') !== e.get('oldZoom')) {
    //		console.log(e.get('zoom '));
    //	}
    //})
    //var rectangle = new ymaps.Rectangle(myMap.getBounds(), {}, {
    //	//cursor: "dragCursor",
    //	draggable: false,
    //	outline: false,
    //	strokeOpacity: 0,
    //	fillImageHref: 'images/map-metro-no-bg.svg',
    //	fillMethod: 'stretch'
    //});
    //myMap.geoObjects.add(rectangle);
    //

    /*var myCircle = new ymaps.Circle([
    	// Координаты центра круга.
    	[55.74954, 37.621587],
    	// Радиус круга в метрах.
    	10000
    ], {
    	// Описываем свойства круга.
    	// Содержимое балуна.
    	balloonContent: "Радиус круга - 10 км",
    	// Содержимое хинта.
    	hintContent: "Подвинь меня"
    }, {
    	// Задаем опции круга.
    	// Включаем возможность перетаскивания круга.
    	draggable: false,
    	// Цвет заливки.
    	// Последний байт (77) определяет прозрачность.
    	// Прозрачность заливки также можно задать используя опцию "fillOpacity".
    	fillColor: false,
    	// Цвет обводки.
    	strokeColor: false,
    	// Прозрачность обводки.
    	strokeOpacity: 0,
    	// Ширина обводки в пикселях.
    	strokeWidth: 0,
    	fillImageHref: 'images/map-metro-no-bg.svg',
    	fillMethod: 'stretch'
    });
    	myMap.geoObjects.add(myCircle);*/
  }
}

$(document).ready(function () {
  typeof ymaps !== 'undefined' && $('.js-shop-map').length > 0 && ymaps.ready(mapInit);
});
/*ymaps.ready(function () {

	var LAYER_NAME = 'user#layer',
		MAP_TYPE_NAME = 'user#customMap',
		// Директория с тайлами.
		TILES_PATH = 'images/tiles',
		/!* Для того чтобы вычислить координаты левого нижнего и правого верхнего углов прямоугольной координатной
		 * области, нам необходимо знать максимальный зум, ширину и высоту изображения в пикселях на максимальном зуме.
		 *!/
		MAX_ZOOM = 4,
		PIC_WIDTH = 2526,
		PIC_HEIGHT = 3085;

	/!**
	 * Конструктор, создающий собственный слой.
	 *!/
	var Layer = function () {
		var layer = new ymaps.Layer(TILES_PATH + '/%z/tile-%x-%y.jpg', {
			// Если есть необходимость показать собственное изображение в местах неподгрузившихся тайлов,
			// раскомментируйте эту строчку и укажите ссылку на изображение.
			// notFoundTile: 'url'
		});
		// Указываем доступный диапазон масштабов для данного слоя.
		layer.getZoomRange = function () {
			return ymaps.vow.resolve([0, 4]);
		};
		// Добавляем свои копирайты.
		layer.getCopyrights = function () {
			return ymaps.vow.resolve('©');
		};
		return layer;
	};
	// Добавляем в хранилище слоев свой конструктор.
	ymaps.layer.storage.add(LAYER_NAME, Layer);

	/!**
	 * Создадим новый тип карты.
	 * MAP_TYPE_NAME - имя нового типа.
	 * LAYER_NAME - ключ в хранилище слоев или функция конструктор.
	 *!/
	var mapType = new ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
	// Сохраняем тип в хранилище типов.
	ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType);

	// Вычисляем размер всех тайлов на максимальном зуме.
	var worldSize = Math.pow(2, MAX_ZOOM) * 256,
		/!**
		 * Создаем карту, указав свой новый тип карты.
		 *!/
		map = new ymaps.Map('map', {
			center: [0, 0],
			zoom: 2,
			controls: ['zoomControl'],
			type: MAP_TYPE_NAME
		}, {

			// Задаем в качестве проекции Декартову. При данном расчёте центр изображения будет лежать в координатах [0, 0].
			projection: new ymaps.projection.Cartesian([[PIC_HEIGHT / 2 - worldSize, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, worldSize - PIC_WIDTH / 2]], [false, false]),
			// Устанавливаем область просмотра карты так, чтобы пользователь не смог выйти за пределы изображения.
			restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]

			// При данном расчёте, в координатах [0, 0] будет находиться левый нижний угол изображения,
			// правый верхний будет находиться в координатах [PIC_HEIGHT, PIC_WIDTH].
			// projection: new ymaps.projection.Cartesian([[PIC_HEIGHT - worldSize, 0], [PIC_HEIGHT, worldSize]], [false, false]),
			// restrictMapArea: [[0, 0], [PIC_HEIGHT, PIC_WIDTH]]
		});

	// Ставим метку в центр координат. Обратите внимание, координаты метки задаются в порядке [y, x].
	var point = new ymaps.Placemark([0, 0], {
		balloonContent: 'Координаты метки: [0, 0]'
	}, {
		preset: 'islands#darkOrangeDotIcon'
	});

	map.geoObjects.add(point);
});*/

/***/ }),

/***/ "./src/js/_parts/_sliders.js":
/*!***********************************!*\
  !*** ./src/js/_parts/_sliders.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__);

/* слайдеры */

(function ($) {
  $(document).ready(function () {
    /* слайдер товаров */
    $('.section.products-slider').each(function (index) {
      $(this).addClass('products-slider-' + index);
      var data_slider_name = $(this).find('.swiper-container').data('slider-name');
      var productsSlider = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('[data-slider-name="' + data_slider_name + '"].swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
          nextEl: '.products-slider-' + index + ' .swiper-button-next',
          prevEl: '.products-slider-' + index + ' .swiper-button-prev'
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2.5,
            scrollbar: {
              el: '.swiper-scrollbar',
              hide: false
            },
            freeMode: true
          },
          576: {
            slidesPerView: 1.2
          }
        }
      });
    }); //if($('.js-productSlider .swiper-slide').length <= 1){
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
        var heroSwiper = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('[data-slider-name="' + data_slider_name + '"].swiper-container', {
          effect: "slide",
          speed: 250,
          slidesPerView: 'auto',
          spaceBetween: 70,
          slidesPerColumn: 1,
          loop: $loop,
          loopedSlides: $slides_no_dublicate,
          autoplay: {
            delay: 5000
          },
          delay: 4000,
          navigation: {
            nextEl: '[data-slider-name="' + data_slider_name + '"] .swiper-button-next',
            prevEl: '[data-slider-name="' + data_slider_name + '"] .swiper-button-prev'
          },
          breakpoints: {
            992: {
              spaceBetween: 15
            },
            768: {
              slidesPerColumn: 2,
              slidesPerGroup: 2,
              loop: false,
              //loopedSlides: 2,
              spaceBetween: 20,
              autoplay: false
            }
          },
          on: {
            init: function init() {
              checkArrow();
              sliderCheckBreakpoints();
            },
            resize: function resize() {
              checkArrow();
            }
          }
        });
      } else {
        var heroSwiper = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('[data-slider-name="' + data_slider_name + '"].swiper-container', {
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
          },
          breakpoints: {
            992: {
              spaceBetween: 15
            }
          },
          on: {
            init: function init() {
              sliderCheckBreakpoints();
            },
            resize: function resize() {}
          }
        });
      }

      var $progress = $('[data-slider-name="' + data_slider_name + '"]').parents('.slider').find('.options .progress'),
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
          $('[data-slider-name="' + data_slider_name + '"] + .options').hide();
        }
      }

      function sliderCheckBreakpoints() {
        if ($(window).width() < 992) {
          //console.log($('[data-slider-name="'+data_slider_name+'"]'));
          $('[data-slider-name="' + data_slider_name + '"] + .options').appendTo($('[data-slider-name="' + data_slider_name + '"] .swiper-button__wrapper'));
        } else {}
      }
    });
    /* в списке товаров */

    var products_list_big = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('.products__item__size__big .swiper-container', {
      observer: true,
      observeParents: true,
      speed: 400,
      //spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.products__item__size__big .swiper-button-next',
        prevEl: '.products__item__size__big .swiper-button-prev'
      }
    });
    /* где еще купить продукци "У Палыча" */

    var slider_web = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('.slider-web .swiper-container', {
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
      },
      breakpoints: {
        992: {
          spaceBetween: 15
        }
      },
      on: {
        init: function init() {
          sliderWebArrowsReplace();
        }
      }
    });

    function sliderWebArrowsReplace() {
      if ($(window).width() < 992) {
        //console.log($('[data-slider-name="'+data_slider_name+'"]'));
        $('.slider-web .swiper-button.inline').appendTo($('.slider-web .slider'));
      } else {}
    }

    function activeSlide() {
      console.log($(this));
    }
    /* галерея в деталке */


    var galleryThumbs = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('.product-gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      //loop: true,
      //freeMode: true,
      loopedSlides: 1,
      //looped slides should be the same
      //watchSlidesVisibility: true,
      //watchSlidesProgress: true,
      on: {
        init: {
          slideChange: activeSlide
        }
      }
    });
    var galleryTop = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('.product-gallery-top', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      loopedSlides: 1,
      //looped slides should be the same
      navigation: {
        nextEl: '.product-gallery-top .swiper-button-next',
        prevEl: '.product-gallery-top .swiper-button-prev'
      },
      thumbs: {
        swiper: galleryThumbs,
        slideThumbActiveClass: 'swiper-slide-thumb-active'
      },
      breakpoints: {
        992: {//centeredSlides: true,
        }
      }
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/js/_parts/_step-modal.js":
/*!**************************************!*\
  !*** ./src/js/_parts/_step-modal.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//$(document).on('click touch','.modal.welcome .city-link', function () {
//	$(".modal-steps").load("/local/inc/ajax/step-modal.php",{
//		"step":$(this).parents('.modal-step').data('step'),
//		"city":$(this).text()
//	});
//});
$(document).ready(function () {
  var stepFirst = 1;
  $.post("/local/inc/ajax/step-modal.php", {
    'modal-step': stepFirst
  }, function (data) {
    var data = JSON.parse(data);
    $('.modal-step-block').html(data.layout);
  });

  if ($(window).width() < 576) {
    $('.modal.welcome .modal__inner').prepend($('.step-back'));
  }
});
$(document).on('click touch', '.modal.welcome .city-link, .modal.welcome .delivery-item__url .button', function () {
  var stepCurrent = $(this).parents('.modal-step').data('step'),
      stepPrev = stepCurrent - 1,
      stepNext = stepCurrent + 1;

  if (stepPrev == 0) {
    stepPrev = 1;
  } else {
    stepPrev = stepCurrent - 1;
  }

  $.post("/local/inc/ajax/step-modal.php", {
    'modal-step': stepNext,
    'modal-city': $(this).text()
  }, function (data) {
    var data = JSON.parse(data); //console.log(data);
    //console.log(data.step);
    //console.log(data.city);

    console.log("Пред. " + stepPrev);
    console.log("Тек. " + stepCurrent);
    console.log("След. " + stepNext);
    $('[data-step-number="' + stepCurrent + '"]').addClass('complete').removeClass('current active');
    $('[data-step-number="' + stepNext + '"]').addClass('current active'); //$('[data-step-number="'+stepNext+'"]').addClass('current active');

    $('.modal-step-block').html(data.layout);
  });
}).on('click touch', '.step-back__link', function () {
  var stepCurrent = $(this).parents('.modal-step-block').find('.modal-step').data('step'),
      stepBack = stepCurrent - 1;
  console.log(stepBack);
  $.post("/local/inc/ajax/step-modal.php", {
    'modal-step': stepBack
  }, function (data) {
    var data = JSON.parse(data); //console.log(data);
    //console.log('Шаг '+data.step);
    //console.log(data.city);

    $('[data-step-number="' + stepCurrent + '"]').removeClass('current active complete');
    $('[data-step-number="' + stepBack + '"]').addClass('current active').removeClass('complete');
    $('.modal-step-block').html(data.layout);
  });
});

/***/ }),

/***/ "./src/js/_parts/_timer.js":
/*!*********************************!*\
  !*** ./src/js/_parts/_timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*function makeTimer2() {

	$('.product-timer').each(function () {
		var dateEnd = $(this).data('timer-time-end');

		var endTime = new Date(dateEnd);
		endTime = Number((Date.parse(endTime) / 1000));

		var now = new Date();
		now = Number((Date.parse(now) / 1000));

		var timeLeft = Number(endTime - now);

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$('[data-timer-type="day"]').html(days);
		$('[data-timer-type="hours"]').html(hours);
		$('[data-timer-type="minutes"]').html(minutes);
		$('[data-timer-type="seconds"]').html(seconds);
	});

	console.log(makeTimer2());
}
setInterval(function() { makeTimer2(); }, 1000);*/
window.makeTimer = function () {
  document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState === "complete") {
      var clockdiv = document.getElementsByClassName("product-timer");
      var countDownDate = new Array();

      for (var i = 0; i < clockdiv.length; i++) {
        countDownDate[i] = new Array();
        var endDateMatch = clockdiv[i].getAttribute('data-timer-time-end').match(/(\d+)-(\d+)-(\d+)/);
        var endDate = endDateMatch[3] + '-' + endDateMatch[1] + '-' + endDateMatch[2];
        countDownDate[i]['el'] = clockdiv[i];
        countDownDate[i]['time'] = new Date(endDate).getTime();
        countDownDate[i]['days'] = 0;
        countDownDate[i]['hours'] = 0;
        countDownDate[i]['seconds'] = 0;
        countDownDate[i]['minutes'] = 0;
        console.log(endDate);
      }

      console.log("После подсчета даты");
      var countdownfunction = setInterval(function () {
        for (var i = 0; i < countDownDate.length; i++) {
          var now = new Date().getTime();
          var distance = countDownDate[i]['time'] - now;
          countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
          countDownDate[i]['hours'] = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
          countDownDate[i]['minutes'] = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
          countDownDate[i]['seconds'] = Math.floor(distance % (1000 * 60) / 1000);

          if (distance < 0) {
            countDownDate[i]['el'].querySelector('[data-timer-type="day"]').innerHTML = 0;
            countDownDate[i]['el'].querySelector('[data-timer-type="hours"]').innerHTML = 0;
            countDownDate[i]['el'].querySelector('[data-timer-type="minutes"]').innerHTML = 0;
            countDownDate[i]['el'].querySelector('[data-timer-type="seconds"]').innerHTML = 0;
          } else {
            countDownDate[i]['el'].querySelector('[data-timer-type="day"]').innerHTML = countDownDate[i]['days'];
            countDownDate[i]['el'].querySelector('[data-timer-type="hours"]').innerHTML = countDownDate[i]['hours'];
            countDownDate[i]['el'].querySelector('[data-timer-type="minutes"]').innerHTML = countDownDate[i]['minutes'];
            countDownDate[i]['el'].querySelector('[data-timer-type="seconds"]').innerHTML = countDownDate[i]['seconds'];
          }
        }
      }, 1000);
      console.log("После выставления нормальных чисел");
    }
  });
};

$(document).ready(function () {
  console.log('Timer - ready');
  window.makeTimer();
});
$(document).on('ajaxComplete', function () {
  console.log('Timer - ajaxComplete');
  window.makeTimer();
});

/***/ }),

/***/ "./src/js/_parts/_validation.js":
/*!**************************************!*\
  !*** ./src/js/_parts/_validation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).on('submit', "[data-form-no-ajax]", function () {
  var form = $(this);
  var formData = new FormData(form[0]);
  var formName = form.data('form');
  var formCurUrl = form.data('url');
  var formRedirect = form.data('redirect');
  var formAction = form.data('action');
  var formPlace = form.data('place');
  submitFormValidate('Y', 'true', form, formData, formName, formCurUrl, formRedirect, formAction, formPlace);
  return false;
});

function submitFormValidate(val, valid, form, formData, formName, formCurUrl, formRedirect, formAction, formPlace) {
  form.find('.form_error').remove();
  form.addClass('submitting');
  form.find('.button').wrap('<div class="submitting__loader"></div>');

  if (valid == undefined) {
    valid = false;
  }

  if (valid) {
    var onAjaxSuccess = function onAjaxSuccess() {
      $.ajax({
        type: "POST",
        data: formData,
        dataType: 'json',
        url: formAction,
        processData: false,
        contentType: false,
        beforeSend: function beforeSend() {// Удаляем блок с ошибками перед отправкой
          //form.find('.form-row--errors').remove();
          //console.log("э вацапе бро " + formName);
        },
        success: function success(data) {
          console.log("э вацапе бро " + formName + " status: " + data.status);

          if (formName == 'express' || formName == 'cart') {
            if (data.status == 0) {
              // Успешный успех
              form.removeClass('submitting');
              form.find('.button').unwrap('.submitting__loader'); //console.log(formCurUrl);

              if (formName == 'express') {
                form.parents('.' + formName).attr('class');
                form.parents('.' + formName).addClass('submited');
                form.parents('.' + formName).find('.express__title').remove();
                form.parents('.' + formName).find('.express__text').html(data.message);

                if (formCurUrl !== 'catalog') {
                  var baseUrl = window.location.origin;
                  $(location).prop('href', formRedirect);
                } else {
                  location.reload();
                }
              } else if (formName == 'cart') {
                location.reload();
              } //console.log("Когда успех " + data.message);

            } else if (data.status == 1) {
              // Не можем доставить за 90 минут
              form.removeClass('submitting');
              form.find('.button').unwrap('.submitting__loader');

              if (formName == 'express') {
                form.parents('.' + formName).addClass('error error-time');
                form.parents('.' + formName).attr('class');
                form.parents('.' + formName).addClass('submited');
                form.parents('.' + formName).find('.express__title').remove();
                form.parents('.' + formName).find('.express__text').html(data.message); //form.find('.form_input').parents('.form_group').append("<span class='form_error'></span>");
                //form.find('.form_error').text(data.message);
              } else if (formName == 'cart') {
                form.append("<div class='form_row'><div class='form_group'><span class='form_error form_message'></span></div></div>");
                form.find('.form_message').text(data.message);
              } //console.log("Когда не можем " + data.message);

            } else if (data.status == 2) {
              // Неверно заполнены данные
              form.removeClass('submitting');
              form.find('.button').unwrap('.submitting__loader');
              console.log(data.message);

              if (formName == 'express') {
                form.find('.express__inp').parents('.form_group').append("<div class='form_group'><span class='form_error'></span></div>");
                form.find('.form_error').text(data.message);
              } else if (formName == 'cart') {
                form.find('.form_row').append("<div class='form_group'><span class='form_error'></span></div>");
                form.find('.form_error').text(data.message);
              } //console.log("Когда вы троите " + data.message);

            }
          } else if (formName == 'feedback' || formName == 'call') {
            form.removeClass('submitting');
            form.find('.button').unwrap('.submitting__loader');
            form.parents('.modal__inner').find('.modal__head').hide();
            form.parent().html(data.message); //console.log(data.message);
            //console.log("Форма: " + formName);
          } else if (formName == 'contacts') {
            form.removeClass('submitting');
            form.find('.button').unwrap('.submitting__loader'); //form.parent().append(data);
          } else if (formName == 'subscription') {
            form.removeClass('submitting');
            form.find('.button').unwrap('.submitting__loader');
            form.remove('.form_error');
            form.append("<div class='form_row'><div class='form_group'><div class='form_error'>" + data + "</div></div></div>"); //form.find('.subscribe_inp').append(data);
          } else if (formName == 'order') {
            if (data.status == 0) {
              //thxOrder();
              form.removeClass('submitting');
              form.find('.button').unwrap('.submitting__loader');
              $.fancybox.close();
              $.fancybox.open({
                //selector: element,
                src: '#thx-order',
                type: 'inline',
                touch: false,
                autoFocus: false,
                fullScreen: true,
                baseClass: "modal__custom",
                infobar: false,
                buttons: false
              });
              $('#thx-order .modal__text').html(data.text);
              $('.cart-ajax__order').html(data.message);
            } else {
              console.log("Чет не то, чинить нужно или нет");
            }
          } else {
            form.removeClass('submitting');
            form.find('.button').unwrap('.submitting__loader');
            console.log(data); //console.log("Форма: " + formName);
          }
        },
        error: function error(data) {
          console.log("э вацапе бро error " + formName);
          console.log(data.status);
        }
      });
    };

    var t = true;
    console.log("Valid:" + valid);

    if (formName == 'express') {
      $('[data-form="express"] .input--required').each(function () {
        var $this = $(this); //var type = $this.attr('data-input-required') || 'text';

        if ($this.val() == "") {
          form.removeClass('submitting');
          form.find('.button').unwrap('.submitting__loader');
          $this.addClass('invalid').parents('.form_group').append("<span class='form_error'>Обязательное поле</span>");
          t = false;
        } else if ($.trim($(this).val()).indexOf(",") == -1) {
          //console.log('запятая');
          form.removeClass('submitting');
          form.find('.button').unwrap('.submitting__loader');
          $this.addClass('invalid').parents('.form_group').append("<span class='form_error'></span>");
          t = false;
        }
        /*else if( $this.attr('type')=='email'){
        	function ValidateEmail(inputText)
        	{
        		var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        		if(inputText.value.match(mailformat))
        		{
        			console.log("Valid email address!");
        			//document.form1.text1.focus();
        			return true;
        		}
        		else
        		{
        			console.log("You have entered an invalid email address!");
        			//document.form1.text1.focus();
        			return false;
        		}
        	}
        	ValidateEmail($this);
        		console.log("зашли сюда");
        	}*/
        else {
            $this.removeClass('invalid').siblings('.form_error').remove();
          }
      });
    } else {
      $('[data-form="' + formName + '"] .input--required').each(function () {
        var $this = $(this); //var type = $this.attr('data-input-required') || 'text';

        if ($this.val() == "") {
          form.removeClass('submitting');
          form.find('.button').unwrap('.submitting__loader');
          $this.addClass('invalid').parents('.form_group').append("<span class='form_error'>Обязательное поле</span>");

          if ($this.parents('.dropdown-select')) {
            $this.parents('.dropdown-select').find('.dropdown-select__value').removeClass('invalid');
            $this.parents('.dropdown-select').find('.dropdown-select__label').addClass('invalid');
          } else {} //let email = $(this).val();
          //if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
          //	//console.log('email сука');
          //	form.find('.form_error').text('email сука');
          //	//$this.removeClass('invalid').siblings('.form_error').remove();
          //} else {
          //	form.find('.form_error').text('а ты хорош');
          //}
          //function validateEmail($this) {
          //	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          //	return emailReg.test( $this );
          //}
          //if( !validateEmail($this)) {
          //	form.find('.form_error').text('email сука');
          //}


          t = false;
        } else {
          $this.removeClass('invalid').siblings('.form_error').removeClass().addClass('form_success');
        }
      });
    }

    console.log("Обязательные поля:" + t);

    if (t) {
      $.post( //"/local/inc/ajax/"+formName+".php",
      $('[data-form="' + formName + '"]').serialize(), onAjaxSuccess());
      return true;
    } else {
      if (formPlace == 'subscribe-footer') {
        $('html, body').animate({
          scrollTop: $('[data-form="' + formName + '"][data-place="' + formPlace + '"] .invalid').offset().top - 100
        }, 500);
      } else {
        $('html, body').animate({
          scrollTop: $('[data-form="' + formName + '"] .invalid').offset().top - 100
        }, 500);
      }

      if (formName == 'express') {
        onAjaxSuccess();
      }

      console.log('12312');
    }
  } else {
    console.log('Идеальная форма');
    return true;
  }
}

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

/***/ "./src/js/_vendor/jquery.fancybox.js":
/*!*******************************************!*\
  !*** ./src/js/_vendor/jquery.fancybox.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function info(stuff) {}
  }; // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  } // Check if fancyBox is already initialized
  // ========================================


  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");
    return;
  } // Private default settings
  // ========================


  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,
    // Enable infinite gallery navigation
    loop: false,
    // Horizontal space between slides
    gutter: 50,
    // Enable keyboard navigation
    keyboard: true,
    // Should allow caption to overlap the content
    preventCaptionOverlap: true,
    // Should display navigation arrows at the screen edges
    arrows: true,
    // Should display counter at the top left corner
    infobar: true,
    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",
    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",
    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: ["zoom", //"share",
    "slideShow", //"fullScreen",
    //"download",
    "thumbs", "close"],
    // Detect "idle" time in seconds
    idleTime: 3,
    // Disable right-click and use simple image protection for images
    protect: false,
    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,
    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },
    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },
    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,
      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},
      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },
    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' + '<source src="{{src}}" type="{{format}}" />' + 'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' + "</video>",
      format: "",
      // custom video format
      autoStart: true
    },
    // Default content type if cannot be detected automatically
    defaultType: "image",
    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",
    // Duration in ms for open/close animation
    animationDuration: 366,
    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",
    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",
    // Duration in ms for transition animation
    transitionDuration: 366,
    // Custom CSS class for slide element
    slideClass: "",
    // Custom CSS class for layout
    baseClass: "",
    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' + "</div>" + "</div>",
    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',
    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' + "</a>",
      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' + "</button>",
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' + "</button>",
      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' + "</button>",
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' + "</button>",
      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' + "</button>"
    },
    // Container is injected into this element
    parentEl: "body",
    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,
    // Focus handling
    // ==============
    // Try to focus on the first focusable element after opening
    autoFocus: true,
    // Put focus back to active element after closing
    backFocus: true,
    // Do not let user to focus on element outside modal content
    trapFocus: true,
    // Module specific options
    // =======================
    fullScreen: {
      autoStart: false
    },
    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true,
      // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning

    },
    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,
    // Customize or add new media types
    // Example:

    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},
    slideShow: {
      autoStart: false,
      speed: 3000
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container",
      // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling

    },
    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",
    // Callbacks
    //==========
    // See Documentation/API/Events for more information
    // Example:

    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */
    onInit: $.noop,
    // When instance has been initialized
    beforeLoad: $.noop,
    // Before the content of a slide is being loaded
    afterLoad: $.noop,
    // When the content of a slide is done loading
    beforeShow: $.noop,
    // Before open animation starts
    afterShow: $.noop,
    // When content is done loading and animating
    beforeClose: $.noop,
    // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop,
    // After instance has been closed
    onActivate: $.noop,
    // When instance is brought to front
    onDeactivate: $.noop,
    // When other instance has been activated
    // Interaction
    // ===========
    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing
    // Clicked on the content
    clickContent: function clickContent(current, event) {
      return current.type === "image" ? "zoom" : false;
    },
    // Clicked on the slide
    clickSlide: "close",
    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",
    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,
    // Custom options when mobile device is detected
    // =============================================
    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function clickContent(current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function clickSlide(current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function dblclickContent(current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function dblclickSlide(current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },
    // Internationalization
    // ====================
    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  }; // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);
  var called = 0; // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================

  var isQuery = function isQuery(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  }; // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================


  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();

  var cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }(); // Detect the supported transition-end event property name
  // =======================================================


  var transitionEnd = function () {
    var el = document.createElement("fakeelement"),
        t;
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  }(); // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================


  var forceRedraw = function forceRedraw($el) {
    return $el && $el.length && $el[0].offsetHeight;
  }; // Exclude array (`buttons`) options from deep merging
  // ===================================================


  var mergeOpts = function mergeOpts(opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);
    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });
    return rez;
  }; // How much of an element is visible in viewport
  // =============================================


  var inViewport = function inViewport(elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");
    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
    $(".fancybox-container").css("pointer-events", "");
    return rez;
  }; // Class definition
  // ================


  var FancyBox = function FancyBox(content, opts, index) {
    var self = this;
    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;
    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;
    self.prevPos = null;
    self.currPos = 0;
    self.firstRun = true; // All group items

    self.group = []; // Existing slides (for current, next and previous gallery items)

    self.slides = {}; // Create group elements

    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================
    init: function init() {
      var self = this,
          firstItem = self.group[self.currIndex],
          firstItemOpts = firstItem.opts,
          $container,
          buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      } // Hide scrollbars
      // ===============


      $("body").addClass("fancybox-active");

      if (!$.fancybox.getInstance() && firstItemOpts.hideScrollbar !== false && !$.fancybox.isMobile && document.body.scrollHeight > window.innerHeight) {
        $("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>");
        $("body").addClass("compensate-for-scrollbar");
      } // Build html markup and set references
      // ====================================
      // Build html code for buttons and insert into main template


      buttonStr = "";
      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      }); // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete

      $container = $(self.translate(self, firstItemOpts.baseTpl.replace("{{buttons}}", buttonStr).replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight))).attr("id", "fancybox-container-" + self.id).addClass(firstItemOpts.baseClass).data("FancyBox", self).appendTo(firstItemOpts.parentEl); // Create object holding references to jQuery wrapped nodes

      self.$refs = {
        container: $container
      };
      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });
      self.trigger("onInit"); // Enable events, deactive previous instances

      self.activate(); // Build slides, load and reveal content

      self.jumpTo(self.currIndex);
    },
    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================
    translate: function translate(obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },
    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================
    addContent: function addContent(content) {
      var self = this,
          items = $.makeArray(content),
          thumbs;
      $.each(items, function (i, item) {
        var obj = {},
            opts = {},
            $item,
            type,
            found,
            src,
            srcParts; // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )
          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item); // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`

          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options); // Here we store clicked element

          opts.$orig = $item;
          obj.src = self.opts.src || opts.src || $item.attr("href"); // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`

          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        } // Each gallery object has full collection of options


        obj.opts = $.extend(true, {}, self.opts, opts); // Do not merge buttons array

        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        } // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================


        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if (found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        } // Step 3 - Some adjustments
        // =========================


        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        } // Find thumbnail image, check if exists and if is in the viewport


        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null); // "caption" is a "special" option, it can be used to customize caption per gallery item

        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        } // Make sure we have caption as a string or jQuery object


        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        } // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"


        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();
            obj.opts.filter = srcParts.shift();
          }
        } // Hide all buttons and disable interactivity for modal items


        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            // Disable keyboard navigation
            keyboard: 0,
            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        } // Step 4 - Add processed object to group
        // ======================================


        self.group.push(obj);
      }); // Update controls if gallery is already opened

      if (Object.keys(self.slides).length) {
        self.updateControls(); // Update thumbnails, if needed

        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();
          thumbs.focus();
        }
      }
    },
    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================
    addEvents: function addEvents() {
      var self = this;
      self.removeEvents(); // Make navigation elements clickable
      // ==================================

      self.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.close(e);
      }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.previous();
      }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.next();
      }).on("click.fb", "[data-fancybox-zoom]", function (e) {
        // Click handler for zoom button
        self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
      }); // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(function () {
            self.$refs.stage.show();
            self.update(e);
          }, $.fancybox.isMobile ? 600 : 250);
        }
      });
      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
            current = instance.current,
            keycode = e.keyCode || e.which; // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        } // Enable keyboard navigation
        // ==========================


        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        } // Backspace and Esc keys


        if (keycode === 8 || keycode === 27) {
          e.preventDefault();
          self.close(e);
          return;
        } // Left arrow and Up arrow


        if (keycode === 37 || keycode === 38) {
          e.preventDefault();
          self.previous();
          return;
        } // Righ arrow and Down arrow


        if (keycode === 39 || keycode === 40) {
          e.preventDefault();
          self.next();
          return;
        }

        self.trigger("afterKeydown", e, keycode);
      }); // Hide controls after some inactivity period

      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;
        $D.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
          self.idleSecondsCounter = 0;

          if (self.isIdle) {
            self.showControls();
          }

          self.isIdle = false;
        });
        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;
            self.hideControls();
          }
        }, 1000);
      }
    },
    // Remove events added by the core
    // ===============================
    removeEvents: function removeEvents() {
      var self = this;
      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");
      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);
        self.idleInterval = null;
      }
    },
    // Change to previous gallery item
    // ===============================
    previous: function previous(duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },
    // Change to next gallery item
    // ===========================
    next: function next(duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },
    // Switch to selected gallery item
    // ===============================
    jumpTo: function jumpTo(pos, duration) {
      var self = this,
          groupLen = self.group.length,
          firstRun,
          isMoved,
          loop,
          current,
          previous,
          slidePos,
          stagePos,
          prop,
          diff;

      if (self.isDragging || self.isClosing || self.isAnimating && self.firstRun) {
        return;
      } // Should loop?


      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      } // Check if opening for the first time; this helps to speed things up


      firstRun = self.firstRun = !Object.keys(self.slides).length; // Create slides

      previous = self.current;
      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;
      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;
      self.trigger("beforeShow", firstRun);
      self.updateControls(); // Validate duration length

      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10); // Check if user has swiped the slides or if still animating

      isMoved = self.isMoved(current); // Make sure current slide is visible

      current.$slide.addClass("fancybox-slide--current"); // Fresh start - reveal container, current slide and start loading content

      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus"); // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`

        self.loadSlide(current);
        self.preload("image");
        return;
      } // Get actual slide/stage positions (before cleaning up)


      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage); // Clean up all slides

      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"); // If slides are out of place, then animate them to correct position

      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          }); // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned

          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          } // Redraw to make sure that transition will start


          forceRedraw(slide.$slide); // Animate the slide

          $.fancybox.animate(slide.$slide, {
            top: 0,
            left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
          }, duration, function () {
            slide.$slide.css({
              transform: "",
              opacity: ""
            }).removeClass("fancybox-slide--next fancybox-slide--previous");

            if (slide.pos === self.currPos) {
              self.complete();
            }
          });
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
        $.fancybox.animate(previous.$slide, prop, duration, function () {
          previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
        }, false);
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },
    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================
    createSlide: function createSlide(pos) {
      var self = this,
          $slide,
          index;
      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });
        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },
    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================
    scaleToActual: function scaleToActual(x, y, duration) {
      var self = this,
          current = self.current,
          $content = current.$content,
          canvasWidth = $.fancybox.getTranslate(current.$slide).width,
          canvasHeight = $.fancybox.getTranslate(current.$slide).height,
          newImgWidth = current.width,
          newImgHeight = current.height,
          imgPos,
          posX,
          posY,
          scaleX,
          scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;
      $.fancybox.stop($content);
      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;
      imgPos = $.fancybox.getTranslate($content);
      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height; // Get center position for original image

      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5; // Make sure image does not move away from edges

      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);
      $.fancybox.animate($content, {
        top: posY,
        left: posX,
        scaleX: scaleX,
        scaleY: scaleY
      }, duration || 366, function () {
        self.isAnimating = false;
      }); // Stop slideshow

      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },
    // Scale image to fit inside parent element
    // ========================================
    scaleToFit: function scaleToFit(duration) {
      var self = this,
          current = self.current,
          $content = current.$content,
          end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;
      $.fancybox.stop($content);
      end = self.getFitPos(current);
      self.updateCursor(end.width, end.height);
      $.fancybox.animate($content, {
        top: end.top,
        left: end.left,
        scaleX: end.width / $content.width(),
        scaleY: end.height / $content.height()
      }, duration || 366, function () {
        self.isAnimating = false;
      });
    },
    // Calculate image size to fit inside viewport
    // ===========================================
    getFitPos: function getFitPos(slide) {
      var self = this,
          $content = slide.$content,
          $slide = slide.$slide,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          maxWidth,
          maxHeight,
          minRatio,
          aspectRatio,
          rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
      maxWidth -= parseFloat($slide.css("paddingLeft")) + parseFloat($slide.css("paddingRight")) + parseFloat($content.css("marginLeft")) + parseFloat($content.css("marginRight"));
      maxHeight -= parseFloat($slide.css("paddingTop")) + parseFloat($slide.css("paddingBottom")) + parseFloat($content.css("marginTop")) + parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);
      width = minRatio * width;
      height = minRatio * height; // Adjust width/height to precisely fit into container

      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;
      return rez;
    },
    // Update content size and position for all slides
    // ==============================================
    update: function update(e) {
      var self = this;
      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },
    // Update slide content position and size
    // ======================================
    updateSlide: function updateSlide(slide, e) {
      var self = this,
          $content = slide && slide.$content,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          $slide = slide.$slide; // First, prevent caption overlap, if needed

      self.adjustCaption(slide); // Then resize content to fit inside the slide

      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);
        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;
          self.updateCursor();
        }
      } // Then some adjustments


      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar.add(self.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },
    // Horizontally center slide
    // =========================
    centerSlide: function centerSlide(duration) {
      var self = this,
          current = self.current,
          $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });
      $slide.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next");
      $.fancybox.animate($slide, {
        top: 0,
        left: 0,
        opacity: 1
      }, duration === undefined ? 0 : duration, function () {
        // Clean up
        $slide.css({
          transform: "",
          opacity: ""
        });

        if (!current.isComplete) {
          self.complete();
        }
      }, false);
    },
    // Check if current slide is moved (swiped)
    // ========================================
    isMoved: function isMoved(slide) {
      var current = slide || this.current,
          slidePos,
          stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);
      return !current.$slide.hasClass("fancybox-animated") && (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5);
    },
    // Update cursor style depending if content can be zoomed
    // ======================================================
    updateCursor: function updateCursor(nextWidth, nextHeight) {
      var self = this,
          current = self.current,
          $container = self.$refs.container,
          canPan,
          isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
      canPan = self.canPan(nextWidth, nextHeight);
      isZoomable = canPan ? true : self.isZoomable();
      $container.toggleClass("fancybox-is-zoomable", isZoomable);
      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (isZoomable && (current.opts.clickContent === "zoom" || $.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom")) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },
    // Check if current slide is zoomable
    // ==================================
    isZoomable: function isZoomable() {
      var self = this,
          current = self.current,
          fitPos; // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area

      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },
    // Check if current image dimensions are smaller than actual
    // =========================================================
    isScaledDown: function isScaledDown(nextWidth, nextHeight) {
      var self = this,
          rez = false,
          current = self.current,
          $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },
    // Check if image dimensions exceed parent element
    // ===============================================
    canPan: function canPan(nextWidth, nextHeight) {
      var self = this,
          current = self.current,
          pos = null,
          rez = false;

      if (current.type === "image" && (current.isComplete || nextWidth && nextHeight) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },
    // Load content into the slide
    // ===========================
    loadSlide: function loadSlide(slide) {
      var self = this,
          type,
          $slide,
          ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;
        return false;
      }

      type = slide.type;
      $slide = slide.$slide;
      $slide.off("refresh").trigger("onReset").addClass(slide.opts.slideClass); // Create content depending on the type

      switch (type) {
        case "image":
          self.setImage(slide);
          break;

        case "iframe":
          self.setIframe(slide);
          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);
          break;

        case "video":
          self.setContent(slide, slide.opts.video.tpl.replace(/\{\{src\}\}/gi, slide.src).replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "").replace("{{poster}}", slide.thumb || ""));
          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);
          ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
            url: slide.src,
            success: function success(data, textStatus) {
              if (textStatus === "success") {
                self.setContent(slide, data);
              }
            },
            error: function error(jqXHR, textStatus) {
              if (jqXHR && textStatus !== "abort") {
                self.setError(slide);
              }
            }
          }));
          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });
          break;

        default:
          self.setError(slide);
          break;
      }

      return true;
    },
    // Use thumbnail image, if possible
    // ================================
    setImage: function setImage(slide) {
      var self = this,
          ghost; // Check if need to show loading icon

      setTimeout(function () {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50); //Check if image has srcset

      self.checkSrcset(slide); // This will be wrapper containing both ghost and actual image

      slide.$content = $('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(slide.$slide.addClass("fancybox-slide--image")); // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually

      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;
        ghost = document.createElement("img");

        ghost.onerror = function () {
          $(this).remove();
          slide.$ghost = null;
        };

        ghost.onload = function () {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost).addClass("fancybox-image").appendTo(slide.$content).attr("src", slide.thumb);
      } // Start loading actual image


      self.setBigImage(slide);
    },
    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function checkSrcset(slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
          found,
          temp,
          pxRatio,
          windowWidth; // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.

      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;
        temp = srcset.split(",").map(function (el) {
          var ret = {};
          el.trim().split(/\s+/).forEach(function (el, i) {
            var value = parseInt(el.substring(0, el.length - 1), 10);

            if (i === 0) {
              return ret.url = el;
            }

            if (value) {
              ret.value = value;
              ret.postfix = el[el.length - 1];
            }
          });
          return ret;
        }); // Sort by value

        temp.sort(function (a, b) {
          return a.value - b.value;
        }); // Ok, now we have an array of all srcset values

        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if (el.postfix === "w" && el.value >= windowWidth || el.postfix === "x" && el.value >= pxRatio) {
            found = el;
            break;
          }
        } // If not found, take the last one


        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url; // If we have default width/height values, we can calculate height for matching source

          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = slide.width / slide.height * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },
    // Create full-size image
    // ======================
    setBigImage: function setBigImage(slide) {
      var self = this,
          img = document.createElement("img"),
          $img = $(img);
      slide.$image = $img.one("error", function () {
        self.setError(slide);
      }).one("load", function () {
        var sizes;

        if (!slide.$ghost) {
          self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
          self.afterLoad(slide);
        }

        if (self.isClosing) {
          return;
        }

        if (slide.opts.srcset) {
          sizes = slide.opts.sizes;

          if (!sizes || sizes === "auto") {
            sizes = (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round(slide.width / slide.height * 100)) + "vw";
          }

          $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
        } // Hide temporary image after some delay


        if (slide.$ghost) {
          setTimeout(function () {
            if (slide.$ghost && !self.isClosing) {
              slide.$ghost.hide();
            }
          }, Math.min(300, Math.max(1000, slide.height / 1600)));
        }

        self.hideLoading(slide);
      }).addClass("fancybox-image").attr("src", slide.src).appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },
    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================
    resolveImageSlideSize: function resolveImageSlideSize(slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
          maxHeight = parseInt(slide.opts.height, 10); // Sets the default values from the image

      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor(maxWidth * imgHeight / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor(maxHeight * imgWidth / imgHeight);
        slide.height = maxHeight;
      }
    },
    // Create iframe wrapper, iframe and bindings
    // ==========================================
    setIframe: function setIframe(slide) {
      var self = this,
          opts = slide.opts.iframe,
          $slide = slide.$slide,
          $iframe;
      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>').css(opts.css).appendTo($slide);
      $slide.addClass("fancybox-slide--" + slide.contentType);
      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(opts.attr).appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide); // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;
          slide.$slide.trigger("refresh");
          self.afterLoad(slide);
        }); // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
              frameWidth = opts.css.width,
              frameHeight = opts.css.height,
              $contents,
              $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {} // Calculate content dimensions, if it is accessible


          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");
            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");
            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src); // Remove iframe if closing or changing gallery item

      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this).find("iframe").hide().unbind().attr("src", "//about:blank");
        } catch (ignore) {}

        $(this).off("refresh.fb").empty();
        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },
    // Wrap and append content to the slide
    // ======================================
    setContent: function setContent(slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty(); // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.

      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        } // Create temporary element marking original place of the content


        slide.$placeholder = $("<div>").hide().insertAfter(content); // Make sure content is visible

        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>").append($.trim(content)).contents();
        } // If "filter" option is provided, then filter content


        if (slide.opts.filter) {
          content = $("<div>").html(content).find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this).find("video,audio").trigger("pause"); // Put content back

        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
          slide.$placeholder = null;
        } // Remove custom close button


        if (slide.$smallBtn) {
          slide.$smallBtn.remove();
          slide.$smallBtn = null;
        } // Remove content and mark slide as not loaded


        if (!slide.hasError) {
          $(this).empty();
          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });
      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");
        $(content).wrap("<div></div>");
        slide.contentType = "video";
        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first();
      slide.$content.siblings().hide(); // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)

      if (!slide.$content.length) {
        slide.$content = slide.$slide.wrapInner("<div></div>").children().first();
      }

      slide.$content.addClass("fancybox-content");
      slide.$slide.addClass("fancybox-slide--" + slide.contentType);
      self.afterLoad(slide);
    },
    // Display error message
    // =====================
    setError: function setError(slide) {
      slide.hasError = true;
      slide.$slide.trigger("onReset").removeClass("fancybox-slide--" + slide.contentType).addClass("fancybox-slide--error");
      slide.contentType = "html";
      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },
    // Show loading icon inside the slide
    // ==================================
    showLoading: function showLoading(slide) {
      var self = this;
      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl)).appendTo(slide.$slide).hide().fadeIn("fast");
      }
    },
    // Remove loading icon from the slide
    // ==================================
    hideLoading: function hideLoading(slide) {
      var self = this;
      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();
        delete slide.$spinner;
      }
    },
    // Adjustments after slide content has been loaded
    // ===============================================
    afterLoad: function afterLoad(slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;
      self.trigger("afterLoad", slide);
      self.hideLoading(slide); // Add small close button

      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      } // Disable right click


      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        }); // Add fake element on top of the image
        // This makes a bit harder for user to select image

        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);
      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },
    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================
    adjustCaption: function adjustCaption(slide) {
      var self = this,
          current = slide || self.current,
          caption = current.opts.caption,
          preventOverlap = current.opts.preventCaptionOverlap,
          $caption = self.$refs.caption,
          $clone,
          captionH = false;
      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());
          $clone.children().eq(0).empty().html(caption);
          captionH = $clone.outerHeight(true);
          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },
    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================
    adjustLayout: function adjustLayout(slide) {
      var self = this,
          current = slide || self.current,
          scrollHeight,
          marginBottom,
          inlinePadding,
          actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", ""); // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align

        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;
            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },
    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================
    revealContent: function revealContent(slide) {
      var self = this,
          $slide = slide.$slide,
          end = false,
          start = false,
          isMoved = self.isMoved(slide),
          isRevealed = slide.isRevealed,
          effect,
          effectClassName,
          duration,
          opacity;
      slide.isRevealed = true;
      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      } // Check if can zoom


      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      } // Zoom animation
      // ==============


      if (effect === "zoom") {
        self.isAnimating = true;
        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height; // Check if we need to animate opacity

        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        } // Draw image at start position


        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
        forceRedraw(slide.$content); // Start animation

        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;
          self.complete();
        });
        return;
      }

      self.updateSlide(slide); // Simply show content if no effect
      // ================================

      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      } // Prepare for CSS transiton
      // =========================


      $.fancybox.stop($slide); //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;

      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden"); // Force reflow

      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate($slide, "fancybox-slide--current", duration, function () {
        $slide.removeClass(effectClassName).css({
          transform: "",
          opacity: ""
        });

        if (slide.pos === self.currPos) {
          self.complete();
        }
      }, true);
    },
    // Check if we can and have to zoom from thumbnail
    //================================================
    getThumbPos: function getThumbPos(slide) {
      var rez = false,
          $thumb = slide.$thumb,
          thumbPos,
          btw,
          brw,
          bbw,
          blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);
      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);
      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };
      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },
    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================
    complete: function complete() {
      var self = this,
          current = self.current,
          slides = {},
          $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;
        current.$slide.siblings().trigger("onReset");
        self.preload("inline"); // Trigger any CSS transiton inside the slide

        forceRedraw(current.$slide);
        current.$slide.addClass("fancybox-slide--complete"); // Remove unnecessary slides

        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);
            slide.$slide.off().remove();
          }
        });
        self.slides = slides;
      }

      self.isAnimating = false;
      self.updateCursor();
      self.trigger("afterShow"); // Autoplay first html5 video/audio

      if (!!current.opts.video.autoStart) {
        current.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          if (Document.exitFullscreen) {
            Document.exitFullscreen();
          } else if (this.webkitExitFullscreen) {
            this.webkitExitFullscreen();
          }

          self.next();
        });
      } // Try to focus on the first focusable element


      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      } // Avoid jumping


      current.$slide.scrollTop(0).scrollLeft(0);
    },
    // Preload next and previous slides
    // ================================
    preload: function preload(type) {
      var self = this,
          prev,
          next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },
    // Try to find and focus on the first focusable element
    // ====================================================
    focus: function focus(e, firstRun) {
      var self = this,
          focusableStr = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(","),
          focusableItems,
          focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();
            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },
    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================
    activate: function activate() {
      var self = this; // Deactivate all instances

      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox"); // Skip self and closing instances

        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");
          instance.removeEvents();
          instance.isVisible = false;
        }
      });
      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();
        self.updateControls();
      }

      self.trigger("onActivate");
      self.addEvents();
    },
    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================
    close: function close(e, d) {
      var self = this,
          current = self.current,
          effect,
          duration,
          $content,
          domRect,
          opacity,
          start,
          end;

      var done = function done() {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true; // If beforeClose callback prevents closing, make sure content is centered

      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;
        requestAFrame(function () {
          self.update();
        });
        return false;
      } // Remove all events
      // If there are multiple instances, they will be set again by "activate" method


      self.removeEvents();
      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      } // Remove other slides


      current.$slide.siblings().trigger("onReset").remove(); // Trigger animations

      if (duration) {
        self.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", duration + "ms");
      } // Clean up


      self.hideLoading(current);
      self.hideControls(true);
      self.updateCursor(); // Check if possible to zoom-out

      if (effect === "zoom" && !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);
        domRect = $.fancybox.getTranslate($content);
        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        }; // Check if we need to animate opacity

        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);
        forceRedraw($content);
        $.fancybox.animate($content, end, duration, done);
        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + effect, duration, done);
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },
    // Final adjustments after removing the instance
    // =============================================
    cleanUp: function cleanUp(e) {
      var self = this,
          instance,
          $focus = self.current.opts.$orig,
          x,
          y;
      self.current.$slide.trigger("onReset");
      self.$refs.container.empty().remove();
      self.trigger("afterClose", e); // Place back focus

      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;
          $focus.trigger("focus");
          $("html, body").scrollTop(y).scrollLeft(x);
        }
      }

      self.current = null; // Check if there are other instances

      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");
        $("#fancybox-style-noscroll").remove();
      }
    },
    // Call callback and trigger an event
    // ==================================
    trigger: function trigger(name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
          self = this,
          obj = slide && slide.opts ? slide : self.current,
          rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },
    // Update infobar values, navigation button states and reveal caption
    // ==================================================================
    updateControls: function updateControls() {
      var self = this,
          current = self.current,
          index = current.index,
          $container = self.$refs.container,
          $caption = self.$refs.caption,
          caption = current.opts.caption; // Recalculate content dimensions

      current.$slide.trigger("refresh"); // Set caption

      if (caption && caption.length) {
        self.$caption = $caption;
        $caption.children().eq(0).html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      } // Update info and navigation elements


      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);
      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", current.opts.image.src || current.src).show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      } // Make sure focus is not on disabled button/element


      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },
    // Hide toolbar and caption
    // ========================
    hideControls: function hideControls(andCaption) {
      var self = this,
          arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(arr.map(function (i) {
        return "fancybox-show-" + i;
      }).join(" "));
      this.hasHiddenControls = true;
    },
    showControls: function showControls() {
      var self = this,
          opts = self.current ? self.current.opts : self.opts,
          $container = self.$refs.container;
      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;
      $container.toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons)).toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1)).toggleClass("fancybox-show-caption", !!self.$caption).toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1)).toggleClass("fancybox-is-modal", !!opts.modal);
    },
    // Toggle toolbar and caption
    // ==========================
    toggleControls: function toggleControls() {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });
  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,
    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================
    getInstance: function getInstance(command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },
    // Create new instance
    // ===================
    open: function open(items, opts, index) {
      return new FancyBox(items, opts, index);
    },
    // Close current or all instances
    // ==============================
    close: function close(all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close(); // Try to find and close next instance

        if (all === true) {
          this.close(all);
        }
      }
    },
    // Close all instances and unbind all events
    // =========================================
    destroy: function destroy() {
      this.close(true);
      $D.add("body").off("click.fb-start", "**");
    },
    // Try to detect mobile devices
    // ============================
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    // Detect if 'translate3d' support is available
    // ============================================
    use3d: function () {
      var div = document.createElement("div");
      return window.getComputedStyle && window.getComputedStyle(div) && window.getComputedStyle(div).getPropertyValue("transform") && !(document.documentMode && document.documentMode < 11);
    }(),
    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================
    getTranslate: function getTranslate($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();
      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },
    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================
    setTranslate: function setTranslate($el, props) {
      var str = "",
          css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str = (props.left === undefined ? $el.position().left : props.left) + "px, " + (props.top === undefined ? $el.position().top : props.top) + "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },
    // Simple CSS transition handler
    // =============================
    animate: function animate($el, to, duration, callback, leaveAnimationName) {
      var self = this,
          from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);
      from = self.getTranslate($el);
      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      } // Start animation by changing CSS properties or class name


      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      } // Make sure that `transitionend` callback gets fired


      $el.data("timer", setTimeout(function () {
        $el.trigger(transitionEnd);
      }, duration + 33));
    },
    stop: function stop($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");
        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  }; // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
        index = 0,
        $target,
        value,
        instance; // Avoid opening multiple times

    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();
    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target); // Sometimes current item can not be found

    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index); // Save last active element

    instance.$trigger = $target;
  } // Create a jQuery plugin
  // ======================


  $.fn.fancybox = function (options) {
    var selector;
    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body").off("click.fb-start", selector).on("click.fb-start", selector, {
        options: options
      }, _run);
    } else {
      this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: options
      }, _run);
    }

    return this;
  }; // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================


  $D.on("click.fb-start", "[data-fancybox]", _run); // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]').eq($(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
      $trigger: $(this)
    });
  }); // Track focus event for better accessibility styling
  // ==================================================

  (function () {
    var buttonStr = ".fancybox-button",
        focusStr = "fancybox-focus",
        $pressed = null;
    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;

        case "mouseup":
          $pressed = null;
          break;

        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }

          break;

        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery); // ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================


(function ($) {
  "use strict"; // Object containing properties for each media type

  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function url(rez) {
        return "//maps.google." + rez[2] + "/?ll=" + (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") + "&output=" + (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      }
    },
    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function url(rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  }; // Formats matching url to final form

  var format = function format(url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
        type = false,
        media,
        thumb,
        rez,
        params,
        urlParams,
        paramObj,
        provider;
    media = $.extend(true, {}, defaults, item.opts.media); // Look for any matching media type

    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
      url = $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
      thumb = $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    }); // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  }); // Load YouTube/Video API on request to detect when video finished playing

  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      "class": "YT",
      loading: false,
      loaded: false
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      "class": "Vimeo",
      loading: false,
      loaded: false
    },
    load: function load(vendor) {
      var _this = this,
          script;

      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;

          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;

          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function done(vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function onStateChange(e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);
          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };
  $(document).on({
    "afterShow.fb": function afterShowFb(e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery); // ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================


(function (window, document, $) {
  "use strict";

  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();

  var cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  var getPointerXY = function getPointerXY(e) {
    var result = [];
    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function distance(point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function isClickable($el) {
    if ($el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || $.isFunction($el.get(0).onclick) || $el.data("selectable")) {
      return true;
    } // Check for attributes like data-fancybox-next or data-fancybox-close


    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function hasScrollbars(el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
        overflowX = window.getComputedStyle(el)["overflow-x"],
        vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
        horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
    return vertical || horizontal;
  };

  var isScrollable = function isScrollable($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function Guestures(instance) {
    var self = this;
    self.instance = instance;
    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;
    self.destroy();
    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function () {
    var self = this;
    self.$container.off(".fb.touch");
    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
        $target = $(e.target),
        instance = self.instance,
        current = instance.current,
        $slide = current.$slide,
        $content = current.$content,
        isTouchDevice = e.type == "touchstart"; // Do not respond to both (touch and mouse) events

    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    } // Ignore right click


    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    } // Ignore taping on links, buttons, input elements


    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    } // Ignore clicks on the scrollbar


    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    } // Ignore clicks while zooming or closing


    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    } // Allow other scripts to catch touch event if "touch" is set to false


    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;
    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;
    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();
    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;
    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);
    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide); // Since position will be absolute, but we need to make it relative to the stage

    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;
    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;
    $(document).off(".fb.touch").on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend")).on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    } // Skip if clicked outside the sliding area


    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent()); // Check if element is scrollable and try to prevent default behavior (scrolling)

    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    } // One finger or mouse click - swipe or pan an image


    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);
        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    } // Two fingers - zoom image


    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;
      self.isZooming = true;
      $.fancybox.stop(self.$content);
      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    var self = this;
    self.isScrolling = true;
    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this; // Make sure user has not released over iframe or disabled element

    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
    self.distance = distance(self.newPoints[0], self.startPoints[0]); // Skip false ontouchmove events (Chrome)

    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
        instance = self.instance,
        swiping = self.isSwiping,
        left = self.sliderStartPos.left || 0,
        angle; // If direction is not yet determined

    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || self.opts.vertical === "auto" && $(window).width() > 800) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs(Math.atan2(self.distanceY, self.distanceX) * 180 / Math.PI);
          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;
          return;
        }

        instance.isDragging = self.isSwiping; // Reset points to avoid jumping, because we dropped first swipes to calculate the angle

        self.startPoints = self.newPoints;
        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;
          $.fancybox.stop(slide.$slide);
          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);
          slide.$slide.css({
            transform: "",
            opacity: "",
            "transition-duration": ""
          }).removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        }); // Stop slideshow

        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    } // Sticky edges


    if (swiping == "x") {
      if (self.distanceX > 0 && (self.instance.group.length < 2 || self.instance.current.index === 0 && !self.instance.current.opts.loop)) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (self.distanceX < 0 && (self.instance.group.length < 2 || self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop)) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;
          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });
        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this; // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)

    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;
    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  }; // Make panning sticky to the edges


  Guestures.prototype.limitMovement = function () {
    var self = this;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;
    var distanceX = self.distanceX;
    var distanceY = self.distanceY;
    var contentStartPos = self.contentStartPos;
    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;
    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;
    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY; // Slow down proportionally to traveled distance

    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5); //   ->

    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    } //    <-


    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    } //   \/


    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    } //   /\


    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this; // Calculate current distance between points to get pinch ratio and new width and height

    var contentStartPos = self.contentStartPos;
    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;
    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;
    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio); // This is the translation due to pinch-zooming

    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY; // Point between the two touches

    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop(); // And this is the translation due to translation of the centerpoint
    // between the two fingers

    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY; // The new offset is the old/current one plus the total translation

    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };
    self.canTap = false;
    self.newWidth = newWidth;
    self.newHeight = newHeight;
    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;
    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;
    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
    self.$container.removeClass("fancybox-is-grabbing");
    $(document).off(".fb.touch");
    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100; // Speed in px/ms

    self.velocityX = self.distanceX / self.dMs * 0.5;
    self.velocityY = self.distanceY / self.dMs * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
        ret = false,
        len = self.instance.group.length,
        distanceX = Math.abs(self.distanceX),
        canAdvance = swiping == "x" && len > 1 && (self.dMs > 130 && distanceX > 10 || distanceX > 50),
        speedX = 300;
    self.sliderLastPos = null; // Close if swiped vertically / navigate if horizontally

    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(self.instance.current.$slide, {
        top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
        opacity: 0
      }, 200);
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  }; // Limit panning from edges
  // ========================


  Guestures.prototype.endPanning = function () {
    var self = this,
        newOffsetX,
        newOffsetY,
        newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;
    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;
    var current = self.instance.current;
    var newOffsetX, newOffsetY, newPos, reset;
    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;
    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    }; // Reset scalex/scaleY values; this helps for perfomance and does not break animation

    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);
    var instance = self.instance;
    var current = instance.current;
    var endPoints = e && getPointerXY(e) || self.startPoints;
    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
    var where;

    var process = function process(prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);
          break;

        case "toggleControls":
          instance.toggleControls();
          break;

        case "next":
          instance.next();
          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    }; // Ignore right click


    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    } // Skip if clicked on the scrollbar


    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    } // Check where is clicked


    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (instance.current.$content && instance.current.$content.find($target).addBack().filter($target).length) {
      where = "Content";
    } else {
      return;
    } // Check if this is a double tap


    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null; // Skip if distance between taps is too big

      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      } // OK, now we assume that this is a double-tap


      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document).on("onActivate.fb", function (e, instance) {
    if (instance && !instance.Guestures) {
      instance.Guestures = new Guestures(instance);
    }
  }).on("beforeClose.fb", function (e, instance) {
    if (instance && instance.Guestures) {
      instance.Guestures.destroy();
    }
  });
})(window, document, jQuery); // ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================


(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' + "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function SlideShow(instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,
    init: function init() {
      var self = this,
          instance = self.instance,
          opts = instance.group[instance.currIndex].opts.slideShow;
      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },
    set: function set(force) {
      var self = this,
          instance = self.instance,
          current = instance.current; // Check if reached last element

      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },
    clear: function clear() {
      var self = this;
      clearTimeout(self.timer);
      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },
    start: function start() {
      var self = this,
          current = self.instance.current;

      if (current) {
        self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause");
        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },
    stop: function stop() {
      var self = this,
          current = self.instance.current;
      self.clear();
      self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
      self.isActive = false;
      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },
    toggle: function toggle() {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });
  $(document).on({
    "onInit.fb": function onInitFb(e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },
    "beforeShow.fb": function beforeShowFb(e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },
    "afterShow.fb": function afterShowFb(e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },
    "afterKeydown.fb": function afterKeydownFb(e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow; // "P" or Spacebar

      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();
        SlideShow.toggle();
      }
    },
    "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  }); // Page Visibility API to pause slideshow when window is not active

  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
        SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery); // ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================


(function (document, $) {
  "use strict"; // Collection of methods supported by user browser

  var fn = function () {
    var fnMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], // new WebKit
    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], // old WebKit (Safari 5.1)
    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  }();

  if (fn) {
    var FullScreen = {
      request: function request(elem) {
        elem = elem || document.documentElement;
        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function exit() {
        document[fn.exitFullscreen]();
      },
      toggle: function toggle(elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function isFullscreen() {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function enabled() {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };
    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' + "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });
    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
          instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;
          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);
        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !isFullscreen).toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function onInitFb(e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;
        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();
          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        } // Expose API


        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },
    "afterKeydown.fb": function afterKeydownFb(e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();
        instance.FullScreen.toggle();
      }
    },
    "beforeClose.fb": function beforeCloseFb(e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery); // ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================


(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
      CLASS_ACTIVE = CLASS + "-active"; // Make sure there are default values

  $.fancybox.defaults = $.extend(true, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' + "</button>"
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container",
      // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling

    }
  }, $.fancybox.defaults);

  var FancyThumbs = function FancyThumbs(instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,
    init: function init(instance) {
      var self = this,
          group = instance.group,
          enabled = 0;
      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;
      instance.Thumbs = self;
      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]"); // Enable thumbs if at least two group items have thumbnails

      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });
        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },
    create: function create() {
      var self = this,
          instance = self.instance,
          parentEl = self.opts.parentEl,
          list = [],
          src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl)); // Add "click" event that performs gallery navigation

        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      } // Build the list


      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function (i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push('<a href="javascript:;" tabindex="0" data-index="' + i + '"' + (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      });
      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(parseInt(self.$grid.css("padding-right"), 10) + instance.group.length * self.$list.children().eq(0).outerWidth(true));
      }
    },
    focus: function focus(duration) {
      var self = this,
          $list = self.$list,
          $grid = self.$grid,
          thumb,
          thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list.children().removeClass(CLASS_ACTIVE).filter('[data-index="' + self.instance.current.index + '"]').addClass(CLASS_ACTIVE);
      thumbPos = thumb.position(); // Check if need to scroll to make current thumb visible

      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
          scrollTop: $list.scrollTop() + thumbPos.top
        }, duration);
      } else if (self.opts.axis === "x" && (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))) {
        $list.parent().stop().animate({
          scrollLeft: thumbPos.left
        }, duration);
      }
    },
    update: function update() {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");
        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      } // Update content position


      that.instance.update();
    },
    hide: function hide() {
      this.isVisible = false;
      this.update();
    },
    show: function show() {
      this.isVisible = true;
      this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });
  $(document).on({
    "onInit.fb": function onInitFb(e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },
    "beforeShow.fb": function beforeShowFb(e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },
    "afterKeydown.fb": function afterKeydownFb(e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs; // "G"

      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();
        Thumbs.toggle();
      }
    },
    "beforeClose.fb": function beforeCloseFb(e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery); //// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================


(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' + "</button>"
    },
    share: {
      url: function url(instance, item) {
        return (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location;
      },
      tpl: '<div class="fancybox-share">' + "<h1>{{SHARE}}</h1>" + "<p>" + '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' + "<span>Facebook</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' + "<span>Twitter</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' + "<span>Pinterest</span>" + "</a>" + "</p>" + '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' + "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
        current = instance.current || null,
        url,
        tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl.replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g, escapeHtml(url)).replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function afterLoad(shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          }); // Opening links in a popup window

          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery); // ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================


(function (window, document, $) {
  "use strict"; // Simple $.escapeSelector polyfill (for jQuery prior v3)

  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

      var fcssescape = function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          } // Control characters and (dependent upon position) numbers get escaped as code points


          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        } // Other potentially-special ASCII characters get backslash-escaped


        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  } // Get info about gallery name and current index from url


  function parseUrl() {
    var hash = window.location.hash.substr(1),
        rez = hash.split("-"),
        index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
        gallery = rez.join("-");
    return {
      hash: hash,

      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  } // Trigger click evnt on links to open new fancyBox instance


  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1).focus().trigger("click.fb-start");
    }
  } // Get gallery name from current instance


  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
    return ret === "" ? false : ret;
  } // Start when DOM becomes ready


  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    } // Update hash when opening/closing fancyBox


    $(document).on({
      "onInit.fb": function onInitFb(e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance); // Make sure gallery start index matches index from hash

        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },
      "beforeShow.fb": function beforeShowFb(e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        } // Check if need to update window hash


        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        } // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected


        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : ""); // If current hash is the same (this instance most likely is opened by hashchange), then do nothing

        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        } // Update hash


        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + instance.currentHash);

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },
      "beforeClose.fb": function beforeCloseFb(e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer); // Goto previous history entry

        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    }); // Check if need to start/close after url has changed

    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
          fb = null; // Find last fancyBox instance that has "hash"

      $.each($(".fancybox-container").get().reverse(), function (index, value) {
        var tmp = $(value).data("FancyBox");

        if (tmp && tmp.currentHash) {
          fb = tmp;
          return false;
        }
      });

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;
          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    }); // Check current hash and trigger click event on matching element to start fancyBox, if needed

    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery); // ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================


(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();
  $(document).on({
    "onInit.fb": function onInitFb(e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
            currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || current.opts.wheel === "auto" && current.type !== "image") {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;
        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);

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
/* harmony import */ var _parts_cssVars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_parts/_cssVars */ "./src/js/_parts/_cssVars.js");
/* harmony import */ var _parts_equalHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_parts/_equalHeight */ "./src/js/_parts/_equalHeight.js");
/* harmony import */ var _parts_equalHeight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_equalHeight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_mobile_el_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_parts/_mobile-el-replace */ "./src/js/_parts/_mobile-el-replace.js");
/* harmony import */ var _parts_mobile_el_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_mobile_el_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_parts/_sliders */ "./src/js/_parts/_sliders.js");
/* harmony import */ var _parts_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_parts/_express */ "./src/js/_parts/_express.js");
/* harmony import */ var _parts_express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_parts_express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_parts/_header */ "./src/js/_parts/_header.js");
/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_parts_header__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_fixingHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_parts/_fixingHeader */ "./src/js/_parts/_fixingHeader.js");
/* harmony import */ var _parts_fixingHeader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_parts_fixingHeader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_parts/_dropdown */ "./src/js/_parts/_dropdown.js");
/* harmony import */ var _parts_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_parts_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_object_fit_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_parts/_object-fit-images */ "./src/js/_parts/_object-fit-images.js");
/* harmony import */ var _parts_shops_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_parts/_shops-tabs */ "./src/js/_parts/_shops-tabs.js");
/* harmony import */ var _parts_shops_tabs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_parts_shops_tabs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _parts_shopsMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_parts/_shopsMap */ "./src/js/_parts/_shopsMap.js");
/* harmony import */ var _parts_shopsMap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_parts_shopsMap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_products__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_parts/_products */ "./src/js/_parts/_products.js");
/* harmony import */ var _parts_products__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_parts_products__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _parts_product_pickup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_parts/_product-pickup */ "./src/js/_parts/_product-pickup.js");
/* harmony import */ var _parts_product_pickup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_parts_product_pickup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _parts_catalog_list_mobile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_parts/_catalog-list-mobile */ "./src/js/_parts/_catalog-list-mobile.js");
/* harmony import */ var _parts_catalog_list_mobile__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_parts_catalog_list_mobile__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _parts_bx_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_parts/_bx-filter */ "./src/js/_parts/_bx-filter.js");
/* harmony import */ var _parts_bx_filter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_parts_bx_filter__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _parts_cart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_parts/_cart */ "./src/js/_parts/_cart.js");
/* harmony import */ var _parts_cart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_parts_cart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_parts/_modal */ "./src/js/_parts/_modal.js");
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_parts_modal__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _parts_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_parts/_mask */ "./src/js/_parts/_mask.js");
/* harmony import */ var _parts_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_parts/_calendar */ "./src/js/_parts/_calendar.js");
/* harmony import */ var _parts_validation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_parts/_validation */ "./src/js/_parts/_validation.js");
/* harmony import */ var _parts_validation__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_parts_validation__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_parts/_timer */ "./src/js/_parts/_timer.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_parts_timer__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _parts_step_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_parts/_step-modal */ "./src/js/_parts/_step-modal.js");
/* harmony import */ var _parts_step_modal__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_parts_step_modal__WEBPACK_IMPORTED_MODULE_22__);

















 //import './_parts/_cityInInpField';







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
/* harmony import */ var _vendor_jquery_fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_vendor/jquery.fancybox */ "./src/js/_vendor/jquery.fancybox.js");
/* harmony import */ var _vendor_jquery_fancybox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_fancybox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_masked_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_vendor/masked-input */ "./src/js/_vendor/masked-input.js");
/* harmony import */ var _vendor_jquery_formstyler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_vendor/jquery-formstyler */ "./src/js/_vendor/jquery-formstyler.js");





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