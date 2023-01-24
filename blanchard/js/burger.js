const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuLinks = menu.querySelectorAll('.header__link');
const login = document.querySelector('.header__login');
const isOpen = document.getElementById('burger');
const mediaQuery = window.matchMedia('(max-width: 576px)');
const mediaQueryHigh = window.matchMedia('(max-width: 1441px)');

if (mediaQueryHigh.matches) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');

    if (isOpen.classList.contains("burger--active")) {
      burger.setAttribute("aria-label", "Закрыть навигацию");
      login.style.visibility = 'visible';
    } else {
      burger.setAttribute("aria-label", "Открыть навигацию");
      login.style.visibility = 'hidden';
    }

    document.body.classList.toggle('stop-scroll');
  })

  menuLinks.forEach((e) => {
    e.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      burger.setAttribute("aria-label", "Открыть навигацию");
      login.style.visibility = 'hidden';
      document.body.classList.remove('stop-scroll');
    })
  })
}

if (mediaQuery.matches) {
  buttonContacts.textContent = 'Заказать';
}
