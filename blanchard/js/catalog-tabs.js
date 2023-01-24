const tabsBtn = document.querySelectorAll('.artists__btn');
const tabsItem = document.querySelectorAll('.artist__card');

tabsBtn.forEach(element => {
  element.addEventListener('click', e => {
    const path = e.currentTarget.dataset.name;

    tabsItem.forEach(el => {
      el.classList.remove('artist__card--active')
    });

    document.querySelector(`[data-path="${path}"]`).classList.add('artist__card--active');
  })
})
