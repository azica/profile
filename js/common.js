$(document).ready(function(){
  var swiper = new Swiper('.js-articles__slider', {
    slidesPerView: 1,
    breakpoints: {
    325: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1024: {
      spaceBetween: 70,
      slidesPerView: 3,
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 100,
    }
    }
  });
  var swiper = new Swiper('.js-gallery__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
    580: {
        slidesPerView: 2,
        spaceBetween: 20,
    },    
    720: {
        slidesPerView: 7,
        spaceBetween: 25,
    }
    }
  });
  $("img").addClass('anim-items anim-hide');
  // ANIMATION 
  const animItems = document.querySelectorAll('.anim-items');
  if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 10;
        

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ( animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < ( animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('anim-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.lect + screenLeft}
      
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
  }

  
})




