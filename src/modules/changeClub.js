const changeClub = () => {
   const menu = document.querySelector('.clubs-list ul'),
      popUp = document.getElementById('free_visit_form'),
      callbackForm = document.getElementById('callback_form'),
      fixedGift = document.querySelector('.fixed-gift'),
      gift = document.getElementById('gift'),
      modalThanks = document.getElementById('thanks');


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
      if (menu.style.display === 'block') {
         menu.style.display = 'none';
      } else {
         menu.style.display = 'block';
      }
   };

   document.addEventListener('click', (e) => {
      let target = e.target;

      if (target.closest('.clubs-list')) {
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
         if (gift) {
            gift.style.display = 'none';
         }
      }

      if (target.closest('.callback-btn') && target.closest('.head-main')) {
         callbackForm.style.display = 'block';
      }

      if (target.closest('.fixed-gift')) {
         gift.style.display = 'block';
         fixedGift.style.display = 'none';
      }

   });
};

export default changeClub;