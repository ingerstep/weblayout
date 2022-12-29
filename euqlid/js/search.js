const search = document.querySelector('.header__btn')
const exitBtn = document.querySelector('.header__exit')
const input = document.querySelector('.header__input')

search.addEventListener('click', () => {
  input.classList.add('header__input--active')
  exitBtn.classList.add('header__exit--active')
  search.classList.add('header__btn--active')

  exitBtn.addEventListener('click', () => {
    input.classList.remove('header__input--active')
    exitBtn.classList.remove('header__exit--active')
    search.classList.remove('header__btn--active')
  })
})
