//business logic
var romanNumeralArray = ["M", "D", "C", "L", "X", "V", "I"];

var rangeCheck = function(validDigit) {
  if ((validDigit > 0) && (validDigit <= 3999)) {
    return true;
  } else {
    alert("Please enter number between 1-3,999");
    return false;
  }
};

var changeNumber = function(romanNumeralM) {
  if ((rangeCheck(romanNumeralM) === true) && (romanNumeralM % 1000 === 0) && (romanNumeralM/1000 <= 3)) {
    return ("M".repeat(romanNumeralM/1000));
  } else if (romanNumeralM % 1000 !== 0) {
    return ()
  }
};






//user interface logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    var romanNumeralM = parseInt($("input#digit").val());
    var result = changeNumber(romanNumeralM);

    $(".digit").text(romanNumeralM);
    $(".result").text(result);
  });
});
