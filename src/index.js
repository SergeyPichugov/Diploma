'use strict';

import changeClub from './modules/changeClub.js';
import sendForm from './modules/sendForm.js';
import valid from './modules/valid.js';
import calck from './modules/calck.js';
import arrow from './modules/arrow.js';
import burgerMenu from './modules/burgerMenu.js';
import menuInBurger from './modules/menuInBurger.js';
import mainSlider from './modules/mainSlider.js';
import photoSlider from './modules/photoSlider.js';
import carousel from './modules/carousel.js';


// выпадение popUp
changeClub();

// ajax
sendForm();

// валидация
valid();

// калькулятор
calck();

//стрелка наверх
arrow();

// бургер меню
burgerMenu();

// меню в бургер меню
menuInBurger();

// главный сдайдер
mainSlider();

//фотогалерея
photoSlider();

// карусель
carousel();