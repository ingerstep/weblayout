const scroll = document.querySelectorAll('.choices__list')

scroll.forEach(e => {
  e.dataset.simplebar;
  e.dataset.simplebarAutoHide = 'false';

  const simpleBar = new SimpleBar(e, {
    autoHide: false,
  });
  simpleBar.recalculate();

});

