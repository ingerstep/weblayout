const tabsBtn = document.querySelectorAll('.work__link');
const tabsItem = document.querySelectorAll('.work__subtitle');
const tabsDescr = document.querySelectorAll('.work__descr');
const afterBg = document.querySelector('.work__wrapper');


tabsBtn.forEach(element => {
  element.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(btn => {
      btn.classList.remove('work__link--active')
    });
    e.currentTarget.classList.add('work__link--active');

    if (path == 'one') {
      afterBg.classList.remove('work__two', 'work__three', 'work__four')
      afterBg.classList.add('work__one')
    } else if (path == 'two') {
      afterBg.classList.remove('work__one', 'work__three', 'work__four')
      afterBg.classList.add('work__two')
    } else if (path == 'three') {
      afterBg.classList.remove('work__one', 'work__two', 'work__four')
      afterBg.classList.add('work__three')
    } else {
      afterBg.classList.remove('work__one', 'work__two', 'work__three')
      afterBg.classList.add('work__four')
    }

    tabsItem.forEach(el => {
      el.classList.remove('work__subtitle--active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('work__subtitle--active')

    tabsDescr.forEach(el => {
      el.classList.remove('work__descr--active')
    })
    document.querySelector(`[data-text="${path}"]`).classList.add('work__descr--active')
  })
})
