document.querySelector('.counter__dec').addEventListener('click', function() {
  var value = document.querySelector('.counter__input').getAttribute('value');
  var min = parseInt(document.querySelector('.counter__input').getAttribute('data-min'));
  if (value > min || min == null) {
    value = value - 1;
  }
  document.querySelector('.counter__input').setAttribute('value', value);
});

document.querySelector('.counter__inc').addEventListener('click', function() {
  var value = document.querySelector('.counter__input').getAttribute('value');
  var max = parseInt(document.querySelector('.counter__input').getAttribute('data-max'));
  if (value < max || max == null) {
    value++;
  }
  document.querySelector('.counter__input').setAttribute('value', value);
});

document.querySelector('.counter__input').addEventListener('keyup', function(e) {
  if (typeof(parseInt(e.key)) == 'number') {
    alert(parseInt(e.key));
  }
});