$(document).ready(function () {
    // Toggle menu
    $('.menu__icon').click(function(){
        $('.menu__list').toggleClass('menu__list-open');
        $(this).toggleClass('menu__icon-close');
    })
    // Search function 
    $('.header__search').click(function(e){
      e.preventDefault();
      $('.header__input').addClass('header__input-toggle');
    })
    $('.header__search-close').click(function(){
      $('.header__input').removeClass('header__input-toggle');
    })

    // Fixed header
    function myFunction() {
        window.onscroll = function() {myFunction()};
        var header = document.querySelector('.header');
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.add("header-sticky");
        } else {
          header.classList.remove("header-sticky");
        }
      }
      myFunction();
    // Main slider 
    var swiper = new Swiper('.js-main__slider', {
      slidesPerView: 1,
    });
    // Team slider 
    var swiper = new Swiper('.js-teams__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },    
        720: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1020: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }
    });

    // Quotes slider 
    var swiper = new Swiper('.js-quotes__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
    });

    // Team slider 
    var swiper = new Swiper('.js-brands__slider', {
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            660: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            970: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
          }
    });

$('.two.circle').circleProgress({
    value: 0.6,
      startAngle: -Math.PI,
      thickness: '3',
      fill: {
        color: '#00a99d'
      },
      emptyFill: ' #ebebeb',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(92 * progress) + '<i>%</i>');
});


$('.one.circle').circleProgress({
  value: 0.6,
    startAngle: -Math.PI,
    thickness: '3',
    fill: {
      color: '#00a99d'
    },
    emptyFill: ' #ebebeb',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});


$('.two.circle').circleProgress({
  value: 0.6,
    startAngle: -Math.PI,
    thickness: '3',
    fill: {
      color: '#00a99d'
    },
    emptyFill: ' #ebebeb',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});


$('.four.circle').circleProgress({
  value: 0.6,
    startAngle: -Math.PI,
    thickness: '3',
    fill: {
      color: '#00a99d'
    },
    emptyFill: ' #ebebeb',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
});


$('.six.circle').circleProgress({
  value: 0.6,
    startAngle: -Math.PI,
    thickness: '3',
    fill: {
      color: '#00a99d'
    },
    emptyFill: ' #ebebeb',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(92 * progress) + '<i>%</i>');
});

});


//  Counter 
$(document).ready(function($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem){
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom <= docViewBottom));
  }
  //Count up code
  function countUp() {
      $('.counter').each(function() {
        var $this = $(this), // <- Don't touch this variable. It's pure magic.
            countTo = $this.attr('data-count');
            ended = $this.attr('ended');

      if ( ended != "true" && isScrolledIntoView($this) ) {
          $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 8000, //duration of counting
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      $this.attr('ended', 'true');
      }
      });
  }
  //Start animation on page-load
  if ( isScrolledIntoView(".counter") ) {
      countUp();
  }
  //Start animation on screen
  $(document).scroll(function() {
      if ( isScrolledIntoView(".counter") ) {
          countUp();
      }
  });
});


var map = new google.maps.Map(document.getElementById('map'),{
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8,
});