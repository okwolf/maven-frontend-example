$(function() {
  $('#inputNumber').change(function(event) {
    var inputValue = event.target.value,
    outputValue = square(inputValue);
    $('#outputAnswer').text(outputValue);
  });
});