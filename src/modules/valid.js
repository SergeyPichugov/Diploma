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

      if (target.type === 'tel') {
         regNumder(event);

         if (target.value.length < 7) {
            target.setCustomValidity('минимум 7 цифр');
         } else {
            target.setCustomValidity('');
         }
      }

      if (target.name === 'name') {
         regName(event);
      }
   });


   document.addEventListener('click', (event) => {
      let target = event.target;

      if (target.name === 'send' || target.name === 'send1' || target.matches('.card-order-btn')) {
         let check = target.closest('form').querySelector('[type="checkbox"]');

         if (!check.checked) {
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

export default valid;