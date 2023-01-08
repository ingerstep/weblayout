document.addEventListener("DOMContentLoaded", function () {

  const validation = new JustValidate('#form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7(999) 999-99-99");

  im.mask(selector);

  validation
    .addField('.name', [{
      rule: 'minLength',
      value: 3,
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: "Вы ввели больше чем положено"
    }
    ])

    .addField('.tel', [{

      rule: "function",

      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },

      errorMessage: 'Вы не ввели телефон',
    }]);
})
