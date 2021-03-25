/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_changeClub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/changeClub.js */ \"./src/modules/changeClub.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_valid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/valid.js */ \"./src/modules/valid.js\");\n/* harmony import */ var _modules_calck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calck.js */ \"./src/modules/calck.js\");\n/* harmony import */ var _modules_arrow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/arrow.js */ \"./src/modules/arrow.js\");\n/* harmony import */ var _modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/burgerMenu.js */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_menuInBurger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menuInBurger.js */ \"./src/modules/menuInBurger.js\");\n/* harmony import */ var _modules_mainSlider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mainSlider.js */ \"./src/modules/mainSlider.js\");\n/* harmony import */ var _modules_photoSlider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/photoSlider.js */ \"./src/modules/photoSlider.js\");\n/* harmony import */ var _modules_carousel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/carousel.js */ \"./src/modules/carousel.js\");\n\n\n\n\n\n\n\n\n\n\n\n // выпадение popUp\n\n(0,_modules_changeClub_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // ajax\n\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_1__.default)(); // валидация\n\n(0,_modules_valid_js__WEBPACK_IMPORTED_MODULE_2__.default)(); // калькулятор\n\n(0,_modules_calck_js__WEBPACK_IMPORTED_MODULE_3__.default)(); //стрелка наверх\n\n(0,_modules_arrow_js__WEBPACK_IMPORTED_MODULE_4__.default)(); // бургер меню\n\n(0,_modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_5__.default)(); // меню в бургер меню\n\n(0,_modules_menuInBurger_js__WEBPACK_IMPORTED_MODULE_6__.default)(); // главный сдайдер\n\n(0,_modules_mainSlider_js__WEBPACK_IMPORTED_MODULE_7__.default)(); //фотогалерея\n\n(0,_modules_photoSlider_js__WEBPACK_IMPORTED_MODULE_8__.default)(); // карусель\n\n(0,_modules_carousel_js__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack://Diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/arrow.js":
/*!******************************!*\
  !*** ./src/modules/arrow.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar arrow = function arrow() {\n  var totop = document.getElementById('totop');\n  totop.style.display = 'none';\n  window.addEventListener('scroll', function () {\n    var height = document.documentElement.scrollTop;\n    var header = document.querySelector('.header-main').offsetHeight;\n\n    if (height < header) {\n      totop.style.display = 'none';\n    } else {\n      totop.style.display = 'block';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrow);\n\n//# sourceURL=webpack://Diplom/./src/modules/arrow.js?");

/***/ }),

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burgerMenu = function burgerMenu() {\n  var menuButton = document.querySelector('.top-menu');\n  var top = document.querySelector('.head-main').getBoundingClientRect().height;\n  window.addEventListener('scroll', function () {\n    if (menuButton.scrollWidth < 768) {\n      if (top < window.pageYOffset) {\n        menuButton.style.position = 'fixed';\n      }\n\n      if (top > window.pageYOffset) {\n        menuButton.style.position = '';\n      }\n    } else {\n      menuButton.style.position = '';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack://Diplom/./src/modules/burgerMenu.js?");

/***/ }),

/***/ "./src/modules/calck.js":
/*!******************************!*\
  !*** ./src/modules/calck.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calck = function calck() {\n  var form = document.getElementById('card_order'),\n      time = document.querySelectorAll('.time input'),\n      club = form.querySelectorAll('.club input'),\n      promo = document.querySelector('.price input'),\n      totalValue = document.getElementById('price-total');\n  var monthPrice = 1;\n  var url = '';\n  var priceArr = [];\n\n  var totalSum = function totalSum() {\n    var promoCode = 1;\n    time.forEach(function (item, i) {\n      if (item.checked) {\n        monthPrice = priceArr[i];\n      }\n    });\n\n    if (promo && promo.value === 'ТЕЛО2020') {\n      promoCode = 0.7;\n    }\n\n    var total = Math.floor(monthPrice * promoCode);\n    totalValue.textContent = total;\n  };\n\n  var request = function request() {\n    club.forEach(function (item) {\n      if (item.checked) {\n        url = item.value;\n      }\n    });\n    fetch(\"/\".concat(url, \".html\")).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      return response.text();\n    }).then(function (data) {\n      var moz = document.createElement('div');\n      moz.innerHTML = data;\n      var tmp = moz.querySelectorAll('.cards-types input');\n      var tmpPrice = moz.querySelectorAll('.cards-types .cost');\n      priceArr = [];\n      tmp.forEach(function (elem, i) {\n        if (elem.value.slice(-1) === 's') {\n          priceArr.push(parseInt(tmpPrice[i].textContent));\n        }\n      });\n      totalSum();\n    })[\"catch\"](function (error) {\n      return console.error(error);\n    });\n  };\n\n  if (totalValue) {\n    request();\n  }\n\n  form.addEventListener('input', function (e) {\n    var target = e.target;\n\n    if (totalValue) {\n      if (target.closest('.club input')) {\n        request();\n      }\n\n      if (target.closest('.time input')) {\n        totalSum();\n      }\n\n      if (target.closest('.price input')) {\n        totalSum();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calck);\n\n//# sourceURL=webpack://Diplom/./src/modules/calck.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar carousel = function carousel() {\n  var servicesSlider = document.querySelector('.services-slider'),\n      wrapSlideEl = document.querySelector('.wrap_slid_el');\n  var slide = document.querySelectorAll('.services-slider .slide');\n  var slidesToShow = 5;\n  var widthSlide = Math.floor(100 / slidesToShow);\n\n  for (var i = 0; i < slidesToShow; i++) {\n    var tmp = slide[slide.length - 1 - i].cloneNode(true);\n    servicesSlider.prepend(tmp);\n  }\n\n  slide = document.querySelectorAll('.services-slider .slide');\n  var style = document.createElement('style');\n  style.textContent = \"\\n\\t\\t\\t\\t.wrap_slid_el {\\n\\t\\t\\t\\t\\toverflow: hidden !important;\\n               position: relative !important;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.services-slider{\\n\\t\\t\\t\\t\\tdisplay: flex !important;\\n               padding: 0;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.services-slider .slide{\\n\\t\\t\\t\\t\\tdisplay: flex !important;\\n\\t\\t\\t\\t\\tjustify-content: right;\\n\\t\\t\\t\\t\\tflex: 0 0 \".concat(widthSlide, \"% !important;\\n               flex-wrap: wrap;\\n               flex-direction: column;\\n\\t\\t\\t\\t\\tmargin: 0 !important;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\");\n  document.head.appendChild(style);\n\n  for (var _i = 0; _i < 2; _i++) {\n    var a = document.createElement('a');\n    wrapSlideEl.append(a);\n    var span = document.createElement('span');\n    a.append(span);\n    a.classList.add('slider-arrow');\n\n    if (_i === 0) {\n      a.classList.add('prev');\n    } else {\n      a.classList.add('next');\n    }\n  }\n\n  var position = 5;\n  var maxPosition = slide.length - slidesToShow;\n  servicesSlider.style.transform = \"translateX(-\".concat(position * widthSlide, \"%)\");\n  var prev = document.querySelector('.wrap_slid_el .prev'),\n      next = document.querySelector('.wrap_slid_el .next');\n\n  var jump = function jump() {\n    servicesSlider.addEventListener('transitionend', function () {\n      if (position === 10 || position === 0) {\n        position = 5;\n        servicesSlider.style.transition = 'none';\n        servicesSlider.style.transform = \"translateX(-\".concat(position * widthSlide, \"%)\");\n      }\n    });\n  };\n\n  var prevSlider = function prevSlider() {\n    servicesSlider.style.transition = 'transform 0.5s';\n    position < 1 ? false : position--;\n    servicesSlider.style.transform = \"translateX(-\".concat(position * widthSlide, \"%)\");\n    jump();\n  };\n\n  var nextSlider = function nextSlider() {\n    servicesSlider.style.transition = 'transform 0.5s';\n    position >= maxPosition ? false : position++;\n    servicesSlider.style.transform = \"translateX(-\".concat(position * widthSlide, \"%)\");\n    jump();\n  };\n\n  prev.addEventListener('click', prevSlider);\n  next.addEventListener('click', nextSlider);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://Diplom/./src/modules/carousel.js?");

/***/ }),

/***/ "./src/modules/changeClub.js":
/*!***********************************!*\
  !*** ./src/modules/changeClub.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeClub = function changeClub() {\n  var menu = document.querySelector('.clubs-list ul'),\n      popUp = document.getElementById('free_visit_form'),\n      callbackForm = document.getElementById('callback_form'),\n      fixedGift = document.querySelector('.fixed-gift'),\n      gift = document.getElementById('gift'),\n      modalThanks = document.getElementById('thanks');\n\n  var scrollPage = function scrollPage(target) {\n    var menuId = target.getAttribute('href').substring(1);\n\n    if (document.getElementById(menuId)) {\n      event.preventDefault();\n      document.getElementById(menuId).scrollIntoView({\n        block: 'start',\n        behavior: 'smooth'\n      });\n    }\n  };\n\n  var toggle = function toggle() {\n    if (menu.style.display === 'block') {\n      menu.style.display = 'none';\n    } else {\n      menu.style.display = 'block';\n    }\n  };\n\n  document.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.closest('.clubs-list')) {\n      toggle();\n    }\n\n    if (target.getAttribute('href') && target.getAttribute('href').charAt(0) === '#') {\n      scrollPage(target);\n    }\n\n    if (target.closest('.open-popup')) {\n      popUp.style.display = 'block';\n    }\n\n    if (target.closest('.close_icon') || target.closest('.overlay') || target.closest('.close-btn')) {\n      popUp.style.display = 'none';\n      callbackForm.style.display = 'none';\n      modalThanks.style.display = 'none';\n\n      if (gift) {\n        gift.style.display = 'none';\n      }\n    }\n\n    if (target.closest('.callback-btn') && target.closest('.head-main')) {\n      callbackForm.style.display = 'block';\n    }\n\n    if (target.closest('.fixed-gift')) {\n      gift.style.display = 'block';\n      fixedGift.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeClub);\n\n//# sourceURL=webpack://Diplom/./src/modules/changeClub.js?");

/***/ }),

/***/ "./src/modules/mainSlider.js":
/*!***********************************!*\
  !*** ./src/modules/mainSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainSlider = function mainSlider() {\n  var slide = document.querySelectorAll('.main-slider .slide');\n  var currentSlide = 0;\n\n  var autoPlaySlide = function autoPlaySlide() {\n    slide[currentSlide].style.display = 'none';\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    slide[currentSlide].style.display = 'flex';\n  };\n\n  var startSlide = function startSlide() {\n    setInterval(autoPlaySlide, 3000);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSlider);\n\n//# sourceURL=webpack://Diplom/./src/modules/mainSlider.js?");

/***/ }),

/***/ "./src/modules/menuInBurger.js":
/*!*************************************!*\
  !*** ./src/modules/menuInBurger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar menuInBurger = function menuInBurger() {\n  var popupMenu = document.querySelector('.popup-menu');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.top-menu img')) {\n      popupMenu.style.display = 'flex';\n    }\n\n    if (target.closest('.close-menu-btn') || target.closest('.scroll')) {\n      popupMenu.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuInBurger);\n\n//# sourceURL=webpack://Diplom/./src/modules/menuInBurger.js?");

/***/ }),

/***/ "./src/modules/photoSlider.js":
/*!************************************!*\
  !*** ./src/modules/photoSlider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar photoSlider = function photoSlider() {\n  var slider = document.querySelector('.gallery-slider'),\n      slide = document.querySelectorAll('.gallery-slider .slide');\n  var style = document.createElement('style');\n  style.textContent = \"\\n\\t\\t\\t\\t.active-item{\\n               opacity: 1 !important;;\\n\\t\\t\\t\\t}\\n            .item-slider{\\n               position: absolute;\\n               left: auto;\\n               opacity: 0;\\n               -webkit-transition: opacity .5s;\\n               transition: opacity .5s\\n               top: 50%;\\n               left: 50%;\\n               transform: translate(-50% , 0%);\\n            }\\n\\t\\t\\t\";\n  document.head.appendChild(style);\n  slider.style.position = 'relative';\n  slider.style.height = '400px';\n  slide.forEach(function (item) {\n    item.classList.add('item-slider');\n  });\n  slide[0].classList.add('active-item');\n  var ul = document.createElement('ul');\n  ul.classList.add('slider-dots');\n  slider.append(ul);\n  slide.forEach(function (item, i) {\n    var li = document.createElement('li');\n    ul.append(li);\n    var btn = document.createElement('button');\n    li.append(btn);\n\n    if (i === 0) {\n      li.classList.add('slick-active');\n    }\n  });\n\n  for (var i = 0; i < 2; i++) {\n    var a = document.createElement('a');\n    slider.append(a);\n    var span = document.createElement('span');\n    a.append(span);\n    a.classList.add('slider-arrow');\n\n    if (i === 0) {\n      a.classList.add('prev');\n    } else {\n      a.classList.add('next');\n    }\n  }\n\n  var dots = document.querySelectorAll('.slider-dots li');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'active-item');\n    prevSlide(dots, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'active-item');\n    nextSlide(dots, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-dots li button, .slider-arrow span')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'active-item');\n    prevSlide(dots, currentSlide, 'slick-active');\n\n    if (target.matches('.next span')) {\n      currentSlide++;\n    } else if (target.matches('.prev span')) {\n      currentSlide--;\n    } else if (target.matches('.slider-dots li button')) {\n      dots.forEach(function (elem, index) {\n        if (elem === target.closest('li')) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'active-item');\n    nextSlide(dots, currentSlide, 'slick-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.slider-dots li button') || event.target.matches('.slider-arrow span')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.slider-dots li button') || event.target.matches('.slider-arrow span')) {\n      startSlide();\n    }\n  });\n  startSlide(2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photoSlider);\n\n//# sourceURL=webpack://Diplom/./src/modules/photoSlider.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var modalThanks = document.getElementById('thanks'),\n      formContent = modalThanks.querySelector('.form-content p'),\n      bodyTag = document.querySelector('body'),\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem';\n  var statusImg = document.createElement('img');\n  statusImg.src = './images/294.svg';\n\n  var clearInput = function clearInput(formClear) {\n    var formInrut = formClear.querySelectorAll('input');\n    formInrut.forEach(function (item, i) {\n      if (formClear.querySelector('[name=\"phone\"]') === item || formClear.querySelector('[name=\"name\"]') === item) {\n        item.value = '';\n      }\n\n      if (formClear.querySelector('[type=\"checkbox\"]') === item || formClear.querySelectorAll('[name=\"club-name\"]')[i] === item) {\n        item.checked = false;\n      }\n    });\n  };\n\n  var closeModal = function closeModal() {\n    var popUp = document.getElementById('free_visit_form'),\n        callbackForm = document.getElementById('callback_form');\n    popUp.style.display = 'none';\n    callbackForm.style.display = 'none';\n  };\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var statusMessageModal = function statusMessageModal() {\n    modalThanks.style.display = 'block';\n  };\n\n  bodyTag.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.querySelector('[name=\"phone\"]').value.length < 7) {\n      return;\n    }\n\n    target.appendChild(statusMessage);\n    statusMessage.appendChild(statusImg);\n    var formData = new FormData(target);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      closeModal();\n      statusMessageModal();\n      statusMessage.textContent = '';\n      setTimeout(function () {\n        return modalThanks.style.display = 'none';\n      }, 4000);\n    })[\"catch\"](function (error) {\n      statusMessageModal();\n      formContent.innerHTML = 'но что-то пошло не так...';\n      statusMessage.textContent = '';\n      console.error(error);\n    });\n    clearInput(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://Diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/valid.js":
/*!******************************!*\
  !*** ./src/modules/valid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar valid = function valid() {\n  var regNumder = function regNumder(btn) {\n    if (!/[+\\d]/ig.test(btn.data)) {\n      btn.target.value = btn.target.value.replace(/[^+\\d]/ig, '');\n    }\n\n    btn.target.value = btn.target.value.replace(/(.{12}).*/ig, '$1');\n\n    if (/^[78]/ig.test(btn.target.value)) {\n      btn.target.value = btn.target.value.replace(/[+]/ig, '');\n      btn.target.value = btn.target.value.replace(/([\\d]{11})\\d*/ig, '$1');\n    }\n  };\n\n  var regName = function regName(btn) {\n    if (!/[а-я\\s]/ig.test(btn.data)) {\n      btn.target.value = btn.target.value.replace(/[^а-я\\s]/ig, '');\n    }\n  };\n\n  document.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.type === 'tel') {\n      regNumder(event);\n\n      if (target.value.length < 7) {\n        target.setCustomValidity('минимум 7 цифр');\n      } else {\n        target.setCustomValidity('');\n      }\n    }\n\n    if (target.name === 'name') {\n      regName(event);\n    }\n  });\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.name === 'send' || target.name === 'send1' || target.matches('.card-order-btn')) {\n      var check = target.closest('form').querySelector('[type=\"checkbox\"]');\n\n      if (!check.checked) {\n        target.setCustomValidity('необходимо подтвердить согласие на обработку персональных данных');\n      } else {\n        target.setCustomValidity('');\n      }\n    }\n\n    if (target.closest('#footer_form') && target.matches('.callback-btn')) {\n      var _check = target.closest('form').querySelectorAll('[type=\"radio\"]');\n\n      if (!_check[0].checked && !_check[1].checked) {\n        target.setCustomValidity('необходимо выбрать клуб');\n      } else {\n        target.setCustomValidity('');\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\n\n//# sourceURL=webpack://Diplom/./src/modules/valid.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;