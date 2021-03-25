const burgerMenu = () => {
   const menuButton = document.querySelector('.top-menu');
   let top = document.querySelector('.head-main').getBoundingClientRect().height;

   window.addEventListener('scroll', function () {

      if (menuButton.scrollWidth < 768) {

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

export default burgerMenu;