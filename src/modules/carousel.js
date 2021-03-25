const carousel = () => {
   const servicesSlider = document.querySelector('.services-slider'),
      wrapSlideEl = document.querySelector('.wrap_slid_el');
   let slide = document.querySelectorAll('.services-slider .slide');

   let slidesToShow = 5;
   let widthSlide = Math.floor(100 / slidesToShow);

   for (let i = 0; i < slidesToShow; i++) {
      let tmp = slide[slide.length - 1 - i].cloneNode(true);
      servicesSlider.prepend(tmp);
   }

   slide = document.querySelectorAll('.services-slider .slide');

   let style = document.createElement('style');

   style.textContent = `
				.wrap_slid_el {
					overflow: hidden !important;
               position: relative !important;
				}
				.services-slider{
					display: flex !important;
               padding: 0;
				}
				.services-slider .slide{
					display: flex !important;
					justify-content: right;
					flex: 0 0 ${widthSlide}% !important;
               flex-wrap: wrap;
               flex-direction: column;
					margin: 0 !important;
				}
			`;

   document.head.appendChild(style);

   for (let i = 0; i < 2; i++) {
      const a = document.createElement('a');
      wrapSlideEl.append(a);

      const span = document.createElement('span');
      a.append(span);
      a.classList.add('slider-arrow');
      if (i === 0) {
         a.classList.add('prev');
      } else {
         a.classList.add('next');
      }
   }

   let position = 5;
   let maxPosition = slide.length - slidesToShow;

   servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;

   const prev = document.querySelector('.wrap_slid_el .prev'),
      next = document.querySelector('.wrap_slid_el .next');

   const jump = () => {
      servicesSlider.addEventListener('transitionend', () => {
         if (position === 10 || position === 0) {
            position = 5;
            servicesSlider.style.transition = 'none';
            servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
         }
      });
   };

   const prevSlider = () => {
      servicesSlider.style.transition = 'transform 0.5s';
      position < 1 ? false : position--;
      servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
      jump();
   };

   const nextSlider = () => {
      servicesSlider.style.transition = 'transform 0.5s';
      position >= maxPosition ? false : position++;
      servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
      jump();
   };


   prev.addEventListener('click', prevSlider);
   next.addEventListener('click', nextSlider);

};

export default carousel;