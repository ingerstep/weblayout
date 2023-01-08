ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14
  });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContent: 'Леонтьевский переулок, дом 5/1'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/yamap-point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-5, -38]
  })

  myMap.geoObjects
    .add(myPlacemark)
}
