const buttons = document.querySelectorAll('.galery__slide');
const malevichModal = document.getElementById('modal-malevich');
const btnClosed = document.querySelector('.modal__btn');

buttons.forEach(e => {
  e.addEventListener('click', el => {
    malevichModal.classList.add('open');
    document.body.classList.add('stop-scroll');

    btnClosed.addEventListener('click', e => {
      malevichModal.classList.remove('open');
      document.body.classList.remove('stop-scroll');
    });
  })
})

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    malevichModal.classList.remove('open');
    document.body.classList.remove('stop-scroll');
  };
})

document.querySelector('#modal-malevich .modal__wrapper').addEventListener('click', e => {
  e._isClickWithModal = true;
})

malevichModal.addEventListener('click', e => {
  if (e._isClickWithModal) return;
  e.currentTarget.classList.remove('open');
  document.body.classList.remove('stop-scroll');
})
