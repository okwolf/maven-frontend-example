$(function() {
  $('#inputNumber').change(function(event) {
    var inputValue = Number(event.target.value),
    outputValue = square(inputValue);
    $('#outputAnswer').text(outputValue);
  });
});