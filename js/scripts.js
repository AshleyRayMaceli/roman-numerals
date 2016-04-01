$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    var symbols = ["M", "D", "C", "L", "X", "V", "I"];
    var outputRomanNumeral = "";
    var validDigit = parseInt($("input#digit").val());

    var rangeCheck = function(validDigit) {
      if ((validDigit > 0) && (validDigit <= 3999)) {
        return true;
      } else {
        return alert("Please enter number between 1-3,999");
      }
    };

    var mainFunction = function(number) {
        if (true) {
        var variable1 = Math.floor(number/1000);
        var outputRomanNumeral = symbols[0].repeat(variable1);
        var newNumber = (number % 1000);
      } if ((newNumber % 500) === 0) {
        var variable2 = Math.floor(newNumber/500);
        var outputRomanNumeral = outputRomanNumeral + symbols[1].repeat(variable2);
        var newNumber = (newNumber % 500);
      } if ((newNumber > 0) && ((number/100) <= 3)) {
        var variable3 = Math.floor(newNumber/100);
        var outputRomanNumeral = outputRomanNumeral + symbols[2].repeat(variable3);
        var newNumber = (newNumber % 100);
      } if ((newNumber > 0) && ((number/100) === 9)) {
        var outputRomanNumeral = outputRomanNumeral + ("CM");
      } if ((newNumber > 0) && ((number/100) === 4)) {
        var outputRomanNumeral = outputRomanNumeral + ("CD");
      } if (newNumber > 0) {
        var variable4 = Math.floor(newNumber/50);
        var outputRomanNumeral = outputRomanNumeral + symbols[3].repeat(variable4);
        var newNumber = (newNumber % 50);
      } if ((newNumber > 0) && ((number/50) === 9)) {
        var outputRomanNumeral = outputRomanNumeral + ("XC");
      } if ((newNumber > 0) && ((number/50) === 4)) {
        var outputRomanNumeral = outputRomanNumeral + ("XL");
      } if (newNumber > 0) {
        var variable5 = Math.floor(newNumber/10);
        var outputRomanNumeral = outputRomanNumeral + symbols[4].repeat(variable5);
        var newNumber = (newNumber % 10);
      } if ((newNumber > 0) && ((number/10) === 9)) {
        var outputRomanNumeral = outputRomanNumeral + ("IX");
      } if ((newNumber > 0) && ((number/10) === 4)) {
        var outputRomanNumeral = outputRomanNumeral + ("IV");
      } if (newNumber > 0) {
        var variable6 = Math.floor(newNumber/5);
        var outputRomanNumeral = outputRomanNumeral + symbols[5].repeat(variable6);
        var newNumber = (newNumber % 5);
      } if (newNumber > 0) {
        var variable7 = Math.floor(newNumber/1);
        var outputRomanNumeral = outputRomanNumeral + symbols[6].repeat(variable7);
        var newNumber = (newNumber % 1);
      }
      return outputRomanNumeral;
    };

    var result = mainFunction(validDigit);
    console.log(result);
    console.log(outputRomanNumeral);
    $("#result").show();
    $(".digit").text(validDigit);
    $(".result").text(result);
  });
});
