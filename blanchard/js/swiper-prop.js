const heroSwiper = document.querySelector('.hero__swiper');
const galerySwiper = document.querySelector('.galery__swiper');
const eventsSwiper = document.querySelector('.events__swiper');
const projectsSwiper = document.querySelector('.projects__swiper');

const swiperHero = new Swiper(heroSwiper, {
  containerModifierClass: 'hero__swiper',
  slideClass: 'hero__slide',
  wrapperClass: 'hero__wrapper',
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: false,
})

const swiperGalery = new Swiper(galerySwiper, {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  containerModifierClass: 'galery__swiper',
  slideClass: 'galery__slide',
  wrapperClass: 'galery__wrapper',
  navigation: {
    nextEl: '.galery-button-next',
    prevEl: '.galery-button-prev',
  },
  pagination: {
    el: '.galery-pagination',
    type: 'fraction',
  },
})

const swiperEvents = new Swiper(eventsSwiper, {
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1025: {
      spaceBetween: 50,
    },
  },
  pagination: {
    el: '.events-pagination',
    type: 'bullets',
    bulletClass: 'events__pagination',
    bulletActiveClass: 'events__pagination--active',
  },
  containerModifierClass: 'events__swiper',
  slideClass: 'events__slide',
  wrapperClass: 'events__wrapper',
  navigation: {
    nextEl: '.events-button-next',
    prevEl: '.events-button-prev',
  },
})

const swiperProjects = new Swiper(projectsSwiper, {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  spaceBetween: 50,
  containerModifierClass: 'projects__swiper',
  slideClass: 'projects__slide',
  wrapperClass: 'projects__wrapper',
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
})
