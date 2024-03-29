const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const menuLinks = menu.querySelectorAll('.header__link')
const isOpen = document.getElementById('burger')


burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');

  if (isOpen.classList.contains("burger--active")) {
    burger.setAttribute("aria-label", "Закрыть навигацию")
  } else {
    burger.setAttribute("aria-label", "Открыть навигацию")
  }

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach((e) => {
  e.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    burger.setAttribute("aria-label", "Открыть навигацию")
    document.body.classList.remove('stop-scroll');
  })
})
