const arrow = () => {
   const totop = document.getElementById('totop');
   totop.style.display = 'none';

   window.addEventListener('scroll', function () {
      const height = document.documentElement.scrollTop;
      const header = document.querySelector('.header-main').offsetHeight;

      if (height < header) {
         totop.style.display = 'none';
      } else {
         totop.style.display = 'block';
      }
   });
};

export default arrow;