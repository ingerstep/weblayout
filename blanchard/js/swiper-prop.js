const heroSwiper = document.querySelector('.hero__swiper');
const galerySwiper = document.querySelector('.galery__swiper');
const eventsSwiper = document.querySelector('.events__swiper');
const projectsSwiper = document.querySelector('.projects__swiper');
const galeryCounterPerv = document.querySelector('.galery-button-prev');
const galeryCounterNext = document.querySelector('.galery-button-next');
const galeryCounterText = document.querySelector('.galery__counter');

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
  slidesPerView: 3,
  slidesPerGroup: 3,
  containerModifierClass: 'galery__swiper',
  slideClass: 'galery__slide',
  wrapperClass: 'galery__wrapper',
  navigation: {
    nextEl: '.galery-button-next',
    prevEl: '.galery-button-prev',
  },
})

galeryCounterNext.addEventListener('click', e => {
  galeryCounterText.textContent = '2 / 2'
})

galeryCounterPerv.addEventListener('click', e => {
  galeryCounterText.textContent = '1 / 2'
})

const swiperEvents = new Swiper(eventsSwiper, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  containerModifierClass: 'events__swiper',
  slideClass: 'events__slide',
  wrapperClass: 'events__wrapper',
  navigation: {
    nextEl: '.events-button-next',
    prevEl: '.events-button-prev',
  },
})

const swiperProjects = new Swiper(projectsSwiper, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  containerModifierClass: 'projects__swiper',
  slideClass: 'projects__slide',
  wrapperClass: 'projects__wrapper',
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
})
