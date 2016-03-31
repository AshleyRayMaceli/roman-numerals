//business logic
var romanNumeralArray = ["M", "D", "C", "L", "X", "V", "I"];
var outputRomanNumeral = [];

var rangeCheck = function(validDigit) {
  if ((validDigit > 0) && (validDigit <= 3999)) {
    return true;
  } else {
    return alert("Please enter number between 1-3,999");
    // $("#result").hide();
  }
};

var changeNumber = function(romanNumeral) {
  for (var i = 0; i < romanNumeralArray.length; i += 1) {
    if ((rangeCheck(romanNumeral) === true) && (romanNumeral % 1000 === 0) && (romanNumeral/1000 <= 3)) {
      var romanNumeralM = (romanNumeralArray[i].repeat(romanNumeral/1000));
      outputRomanNumeral.push(romanNumeralM);
      console.log(romanNumeralM);
    } else if ((romanNumeral % 1000 !== 0) && (romanNumeral % 500 === 0) && (romanNumeral/500 <= 3)) {
      var romanNumeralMD = (romanNumeral - ((romanNumeral/1000) * 1000));
      //Not currently getting to this point - not recognizing the variable.
      console.log(romanNumeralMD);
      var romanNumeralD = (romanNumeralArray[i] + romanNumeralArray[i += 1].repeat(romanNumeral/500));
      outputRomanNumeral.push(romanNumeralD);
    } if ((romanNumeral % 500 !== 0) && (romanNumeral % 100 === 0) && (romanNumeral/100 <= 3)) {
      return(romanNumeralArray[i] + romanNumeralArray[i += 2].repeat(romanNumeral/100));
    } else {
      break;
    }
  }
};


//user interface logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    var romanNumeral = parseInt($("input#digit").val());
    var result = changeNumber(romanNumeral);

    $("#result").show();
    $(".digit").text(romanNumeral);
    $(".result").text(outputRomanNumeral);
  });
});
