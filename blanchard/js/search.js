const search = document.querySelector('.header__btn')
const exitBtn = document.querySelector('.btn-closed')
const input = document.querySelector('.header__search_input')

search.addEventListener('click', () => {
  input.classList.add('header__input--active')
  exitBtn.classList.add('header--active')
  search.classList.add('header__btn--active')

  exitBtn.addEventListener('click', () => {
    input.classList.remove('header__input--active')
    exitBtn.classList.remove('header--active')
    search.classList.remove('header__btn--active')
  })
})
