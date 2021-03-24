'use strict';


// выпадение popUp
const changeClub = () => {
   const menu = document.querySelector('.clubs-list ul'),
         popUp = document.getElementById('free_visit_form'),
         callbackForm = document.getElementById('callback_form'),
         fixedGift = document.querySelector('.fixed-gift'),
         gift = document.getElementById('gift'),
         modalThanks = document.getElementById('thanks');


   // плавное перемещение к меню
   const scrollPage = (target) => {
      let menuId = target.getAttribute('href').substring(1);
      if (document.getElementById(menuId)) {
         event.preventDefault();
         document.getElementById(menuId).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
         });
      }
   };

   const toggle = () => {
      if (menu.style.display === 'block'){
         menu.style.display = 'none';
      } else {
         menu.style.display = 'block';
      }
   };

   document.addEventListener('click', (e) => {
      let target = e.target;

      if (target.closest('.clubs-list')){
         toggle();
      }

      if (target.getAttribute('href') && target.getAttribute('href').charAt(0) === '#') {
         scrollPage(target);
      }

      if (target.closest('.open-popup')) {
         popUp.style.display = 'block';
      }

      if (target.closest('.close_icon') || target.closest('.overlay') || target.closest('.close-btn')) {
         popUp.style.display = 'none';
         callbackForm.style.display = 'none';
         modalThanks.style.display = 'none';
         if (gift){
            gift.style.display = 'none';
         }
      }

      if (target.closest('.callback-btn') && target.closest('.head-main')) {
         callbackForm.style.display = 'block';
      }

      if (target.closest('.fixed-gift')){
         gift.style.display = 'block';
         fixedGift.style.display = 'none';
      }

   });
};

changeClub();


// ajax
const sendForm = () => {
   const modalThanks = document.getElementById('thanks'),
         formContent = modalThanks.querySelector('.form-content p'),
         bodyTag = document.querySelector('body'),
         statusMessage = document.createElement('div');

   statusMessage.style.cssText = 'font-size: 2rem';


   const statusImg = document.createElement('img');
   statusImg.src = './images/294.svg';

   const clearInput = (formClear) => {
      const formInrut = formClear.querySelectorAll('input');
      formInrut.forEach((item, i) => {
         if (formClear.querySelector('[name="phone"]') === item || formClear.querySelector('[name="name"]') === item) {
            item.value = '';
         }

         if (formClear.querySelector('[type="checkbox"]') === item || formClear.querySelectorAll('[name="club-name"]')[i] === item) {
            item.checked = false;
         }
      });
   };

   const closeModal = () => {
      const popUp = document.getElementById('free_visit_form'),
            callbackForm = document.getElementById('callback_form');
      popUp.style.display = 'none';
      callbackForm.style.display = 'none';
   };

   const postData = (body) => {
      return fetch('./server.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      });
   };

   const statusMessageModal = () => {
      modalThanks.style.display = 'block';
   };

   bodyTag.addEventListener('submit', (event) => {
      event.preventDefault();
      let target = event.target;

      if (target.querySelector('[name="phone"]').value.length < 7 ){
         return;
      }

      target.appendChild(statusMessage);
      statusMessage.appendChild(statusImg);

      const formData = new FormData(target);
      let body = {};
      formData.forEach((val, key) => {
         body[key] = val;
      });


      postData(body)
         .then((response) => {
            if (response.status !== 200) {
               throw new Error('status network not 200');
            }
            closeModal();
            statusMessageModal();
            statusMessage.textContent = '';
            setTimeout(() => modalThanks.style.display = 'none', 4000);
         })
         .catch(error => {
            statusMessageModal();
            formContent.innerHTML = 'но что-то пошло не так...';
            statusMessage.textContent = '';
            console.error(error);
         });

      clearInput(target);
   });
};

sendForm();


// валидация
const valid = () => {
   const regNumder = (btn) => {
      if (!/[+\d]/ig.test(btn.data)) {
         btn.target.value = btn.target.value.replace(/[^+\d]/ig, '');
      }

      btn.target.value = btn.target.value.replace(/(.{12}).*/ig, '$1');

      if (/^[78]/ig.test(btn.target.value)) {
         btn.target.value = btn.target.value.replace(/[+]/ig, '');
         btn.target.value = btn.target.value.replace(/([\d]{11})\d*/ig, '$1');
      }
   };

   const regName = (btn) => {
      if (!/[а-я\s]/ig.test(btn.data)) {
         btn.target.value = btn.target.value.replace(/[^а-я\s]/ig, '');
      }
   };

   document.addEventListener('input', (event) => {
      let target = event.target;

      if (target.type === 'tel'){
         regNumder(event);

         if (target.value.length < 7) {
            target.setCustomValidity('минимум 7 цифр');
         } else {
            target.setCustomValidity('');
         }
      }

      if (target.name === 'name'){
         regName(event);
      }
   });


   //проверка checkbox
   document.addEventListener('click', (event) => {
      let target = event.target;
      
      if (target.name === 'send' || target.name === 'send1' || target.matches('.card-order-btn')) {
         let check = target.closest('form').querySelector('[type="checkbox"]');

         if (!check.checked){
            target.setCustomValidity('необходимо подтвердить согласие на обработку персональных данных');
         } else {
            target.setCustomValidity('');
         }
      }

      if (target.closest('#footer_form') && target.matches('.callback-btn')) {
         let check = target.closest('form').querySelectorAll('[type="radio"]');
         
         if (!check[0].checked && !check[1].checked) {
            target.setCustomValidity('необходимо выбрать клуб');
         } else {
            target.setCustomValidity('');
         }
      }
   });

};

valid();



// калькулятор

const calck = () => {
   const form = document.getElementById('card_order'),
         time = document.querySelectorAll('.time input'),
         club = form.querySelectorAll('.club input'),
         promo = document.querySelector('.price input'),
         totalValue = document.getElementById('price-total');

   let monthPrice = 1;
   let url = '';
   let priceArr = [];

   const totalSum = () => {
      let promoCode = 1;

      time.forEach((item, i) => {
         if (item.checked) {
            monthPrice = priceArr[i];
         }
      });

      if (promo && promo.value === 'ТЕЛО2020') {
         promoCode = 0.7;
      }

      let total = Math.floor(monthPrice * promoCode);

      totalValue.textContent = total;

   };

   const request = () => {

      club.forEach(item => {
         if (item.checked) {
            url = item.value;
         }
      });

      fetch(`/${url}.html`)
         .then((response) => {
   
            if (response.status !== 200) {
               throw new Error('status network not 200');
            }
            return (response.text());
         })
         .then((data) => {
            const moz = document.createElement('div');
            moz.innerHTML = data;
            const tmp = moz.querySelectorAll('.cards-types input');
            const tmpPrice = moz.querySelectorAll('.cards-types .cost');

            priceArr = [];

            tmp.forEach((elem, i) => {
               if (elem.value.slice(-1) === 's') {
                  priceArr.push(parseInt(tmpPrice[i].textContent));
               }
            });

            totalSum();
         })
         .catch((error) => console.error(error));

   };

   if (totalValue) {
      request();
   }

   form.addEventListener('input', (e) => {
      let target = e.target;

      if (totalValue) {

         if (target.closest('.club input')){
            request();
         }

         if (target.closest('.time input')) {
            totalSum();
         }
         if (target.closest('.price input')) {
            totalSum();
         }
      }
   });

};

calck();



//стрелка наверх

const arrow = () => {
   const totop = document.getElementById('totop');
   totop.style.display = 'none';

   window.addEventListener('scroll', function () {
      const height = document.documentElement.scrollTop;
      const header = document.querySelector('.header-main').offsetHeight;

      if (height < header){
         totop.style.display = 'none';
      } else {
         totop.style.display = 'block';
      }
   });
};

arrow();


// бургер меню
const burgerMenu = () => {
   const menuButton = document.querySelector('.top-menu');
   let top = document.querySelector('.head-main').getBoundingClientRect().height;

   window.addEventListener('scroll', function () {

      if (menuButton.scrollWidth < 768){
   
         if (top < window.pageYOffset) {
            menuButton.style.position = 'fixed';
         }
   
         if (top > window.pageYOffset) {
            menuButton.style.position = '';
         }

      } else {
         menuButton.style.position = '';
      }
   });

};

burgerMenu();



// меню в бургер меню
const menuInBurger = () => {
   const popupMenu = document.querySelector('.popup-menu');
   
   document.addEventListener('click', (event) => {
      let target = event.target;

      if(target.closest('.top-menu img')){
         popupMenu.style.display = 'flex';
      }
      
      if (target.closest('.close-menu-btn') || target.closest('.scroll')) {
         popupMenu.style.display = 'none';
      }
   });

};

menuInBurger();
