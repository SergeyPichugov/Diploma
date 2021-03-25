const menuInBurger = () => {
   const popupMenu = document.querySelector('.popup-menu');

   document.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.top-menu img')) {
         popupMenu.style.display = 'flex';
      }

      if (target.closest('.close-menu-btn') || target.closest('.scroll')) {
         popupMenu.style.display = 'none';
      }
   });

};

export default menuInBurger;