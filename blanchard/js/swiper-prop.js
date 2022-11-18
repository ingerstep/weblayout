const heroSwiper = document.querySelector('.hero__swiper');
const galerySwiper = document.querySelector('.galery__swiper')

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
})

const swiperGalery = new Swiper(galerySwiper, {
  slidesPerView: 'auto',
  spaceBetween: 49,
  containerModifierClass: 'galery__swiper',
  slideClass: 'galery__slide',
  wrapperClass: 'galery__wrapper',
  slideDuplicateNextClass: 'galery__button-next',
  slideDuplicatePervClass: 'galery__button-perv',
  navigation: {
    nextEl: '.galery__button-next',
    prevEl: '.galery__button-prev',
  },
})
