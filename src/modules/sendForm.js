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

      if (target.querySelector('[name="phone"]').value.length < 7) {
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

export default sendForm;