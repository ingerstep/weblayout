document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
})


const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownItem = document.querySelectorAll('.dropdown__item')
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";
const btnIsOpen = 'menu__btn--open';
const btnClosed = 'menu__btn--closed';

btns.forEach(item => {

  item.classList.add(btnClosed)

  item.addEventListener("click", () => {
    let DropThis = item.parentElement.querySelector(".dropdown");

    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });

    btns.forEach(el => {
      if (el != item) {
        el.classList.remove(activeClassbtns)
        el.classList.remove(btnIsOpen)
      }
    });

    DropThis.classList.toggle(activeClassdropdowns);
    item.classList.toggle(activeClassbtns);
    item.classList.toggle(btnIsOpen)
  })

})

dropdownItem.forEach(e => {
  const value = e.getAttribute('data-value')
  e.style.backgroundImage = `url("../img/${value}.png")`
})

