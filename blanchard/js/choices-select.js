const element = document.querySelectorAll('select')

element.forEach(e => {
  const choices = new Choices(e, {
    searchEnabled: false,
    itemSelectText: '',
  });
})
