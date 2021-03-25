const photoSlider = () => {
   const slider = document.querySelector('.gallery-slider'),
      slide = document.querySelectorAll('.gallery-slider .slide');

   const style = document.createElement('style');

   style.textContent = `
				.active-item{
               opacity: 1 !important;;
				}
            .item-slider{
               position: absolute;
               left: auto;
               opacity: 0;
               -webkit-transition: opacity .5s;
               transition: opacity .5s
               top: 50%;
               left: 50%;
               transform: translate(-50% , 0%);
            }
			`;

   document.head.appendChild(style);

   slider.style.position = 'relative';
   slider.style.height = '400px';

   slide.forEach(item => {
      item.classList.add('item-slider');
   });

   slide[0].classList.add('active-item');

   const ul = document.createElement('ul');
   ul.classList.add('slider-dots');
   slider.append(ul);

   slide.forEach((item, i) => {
      const li = document.createElement('li');
      ul.append(li);

      const btn = document.createElement('button');
      li.append(btn);

      if (i === 0) {
         li.classList.add('slick-active');
      }
   });

   for (let i = 0; i < 2; i++) {
      const a = document.createElement('a');
      slider.append(a);

      const span = document.createElement('span');
      a.append(span);
      a.classList.add('slider-arrow');
      if (i === 0) {
         a.classList.add('prev');
      } else {
         a.classList.add('next');
      }

   }

   const dots = document.querySelectorAll('.slider-dots li');

   let currentSlide = 0,
      interval;

   const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
   };

   const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
   };

   const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'active-item');
      prevSlide(dots, currentSlide, 'slick-active');

      currentSlide++;
      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'active-item');
      nextSlide(dots, currentSlide, 'slick-active');
   };

   const startSlide = (time = 2000) => {
      interval = setInterval(autoPlaySlide, time);
   };

   const stopSlide = () => {
      clearInterval(interval);
   };

   slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.slider-dots li button, .slider-arrow span')) {
         return;
      }

      prevSlide(slide, currentSlide, 'active-item');
      prevSlide(dots, currentSlide, 'slick-active');

      if (target.matches('.next span')) {
         currentSlide++;
      } else if (target.matches('.prev span')) {
         currentSlide--;
      } else if (target.matches('.slider-dots li button')) {
         dots.forEach((elem, index) => {

            if (elem === target.closest('li')) {
               currentSlide = index;
            }
         });
      }

      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }

      if (currentSlide < 0) {
         currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'active-item');
      nextSlide(dots, currentSlide, 'slick-active');

   });

   slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.slider-dots li button') || event.target.matches('.slider-arrow span')) {
         stopSlide();
      }
   });

   slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.slider-dots li button') || event.target.matches('.slider-arrow span')) {
         startSlide();
      }
   });

   startSlide(2000);

};

export default photoSlider;