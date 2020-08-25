
if(window.screen.width > 1000){
  new WOW().init();
}



var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  speed: 1000,
  effect: 'coverflow',
  // If we need pagination
  pagination: {
    el: '.projects-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 4000,
  },


  coverflowEffect: {
    rotate: 180,
    slideShadows: true,
    depth: 0,
  },

  

  // And if we need scrollbar
  /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
})