//business logic
    var rangeCheck = function(validDigit) {
      if ((validDigit > 0) && (validDigit <= 3999)) {
        return true;
      } else {
        return alert("Please enter number between 1-3,999");
      }
    };

    var symbols = ["M", "D", "C", "L", "X", "V", "I"];
    var outputRomanNumeral = "";

    var mainFunction = function(number) {
        if (true) {
        var variable1 = Math.floor(number/1000);
        var outputRomanNumeral = symbols[0].repeat(variable1);
        var newNumber = (number % 1000);
        console.log(newNumber);
        console.log(outputRomanNumeral);
      } if ((newNumber % 500) === 0) {
        var variable2 = Math.floor(newNumber/500);
        var outputRomanNumeral = outputRomanNumeral + symbols[1].repeat(variable2);
        var newNumber = (newNumber % 500);
        console.log(newNumber);
        console.log(outputRomanNumeral);
      } if ((newNumber > 0) && ((number/100) <= 3)) {
        var variable3 = Math.floor(newNumber/100);
        var outputRomanNumeral = outputRomanNumeral + symbols[2].repeat(variable3);
        var newNumber = (newNumber % 100);
        console.log(newNumber);
        console.log(outputRomanNumeral);
      } if ((newNumber > 0) && ((number/100) === 4)) {
        var outputRomanNumeral = outputRomanNumeral + ("CD");
        console.log(newNumber);
        console.log(outputRomanNumeral);
      } if ((newNumber > 0) && ((number/100) === 9)) {
        var outputRomanNumeral = outputRomanNumeral + ("CM");
        console.log(newNumber);
        console.log(outputRomanNumeral);
      } if (newNumber > 0) {
        var variable4 = Math.floor(newNumber/50);
        var outputRomanNumeral = outputRomanNumeral + symbols[3].repeat(variable4);
        var newNumber = (newNumber % 50);
        console.log(newNumber);
      } if (newNumber > 0) {
        var variable5 = Math.floor(newNumber/10);
        var outputRomanNumeral = outputRomanNumeral + symbols[4].repeat(variable5);
        var newNumber = (newNumber % 10);
        console.log(newNumber);
      } if (newNumber > 0) {
        var variable6 = Math.floor(newNumber/5);
        var outputRomanNumeral = outputRomanNumeral + symbols[5].repeat(variable6);
        var newNumber = (newNumber % 5);
        console.log(newNumber);
      } if (newNumber > 0) {
        var variable7 = Math.floor(newNumber/1);
        var outputRomanNumeral = outputRomanNumeral + symbols[6].repeat(variable7);
        var newNumber = (newNumber % 1);
        console.log(newNumber);
      }
    }

//user interface logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();

    var validDigit = parseInt($("input#digit").val());
    var result = mainFunction(validDigit);

    console.log(outputRomanNumeral);
    $("#result").show();
    $(".digit").text(validDigit);
    $(".result").text(outputRomanNumeral);
  });
});

//
//   // console.log(newNumber);
//   // if (newNumber === 0) {
//   //   result = "done";
//   // } else {
//   //   mainFunction(newNumber);
//   // }
//   // var newNumber = newNumber - 500;
//   // if (newNumber <= 0) {
//   //   result = "done"
//   // }
//   // else {
//   //   mainFunction(newNumber);
//   // }
// }
//

// var thousands = function(romanNumeral) {
//   for (var i = 0; i < romanNumeralArray.length; i += 1) {
//     if ((rangeCheck(romanNumeral) === true) && (romanNumeral >= 1000) && (romanNumeral/1000 <= 3)) {
//       // var numberOfThousands = (romanNumeral/1000);
//       console.log(romanNumeral);
//       var romanNumeralM = (romanNumeralArray[i].repeat(romanNumeral/1000));
//     } else {
//       alert("test");
//       // fiveHundreds(romanNumeral);
//     }
//   }
// };
//
// var fiveHundreds = function(romanNumeral) {
//   for (var i = 1; i < romanNumeralArray.length; i += 1) {
//     if ((romanNumeral % 1000 !== 0) && (romanNumeral >= 500) && (romanNumeral/500 <= 3)) {
//       var romanNumeralMD = (romanNumeral - (numberOfThousands * 1000));
//       var romanNumeralD = (romanNumeralArray[i] + romanNumeralArray[i += 1].repeat(romanNumeral/500));
//     }
//   }
// };
//
// var oneHundreds = function(romanNumeral) {
//   for (var i = 2; i < romanNumeralArray.length; i += 1) {
//     if ((romanNumeral % 500 !== 0) && (romanNumeral >= 100) && (romanNumeral/100 <= 3)) {
//       return(romanNumeralArray[i] + romanNumeralArray[i += 2].repeat(romanNumeral/100));
//     } else {
//       break;
//     }
//   }
// };


// Summer's Suggestions on Recursive Functions
// function - number
// 1000
// - 1000 from number
// adds symbol to an array
// function(restofnumber)
//
// var result;
// var romanNumerals = function(number) {
//   var newnumber = number - 10;
//   console.log(newnumber);
//   if (newnumber == 0) {
//     result = "done";
//   } else {
//     romanNumerals(newnumber);
//   }
// }
// End Summer's Code
