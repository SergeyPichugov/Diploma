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

         if (target.closest('.club input')) {
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

export default calck;