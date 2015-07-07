function primeFactorization(num) {
  var root = Math.sqrt(num),
    result = arguments[1] || [], //get unnamed paremeter from recursive calls
    x = arguments[2] || 2;

  if (x === 2 && num % x) { //if not divisible by 2
    x = 3; //assign first odd
  }
  while ((num % x) && ((x = x + 2) < root)) {} //iterate odds
  //if no factor found then num is prime
  x = (x <= root) ? x : num;
  result.push(x); //push latest prime factor

  //if num isn't prime factor make recursive call
  return (x === num) ? result : primeFactorization(num / x, result, x);
}

function ValidateResult(origText, result) {
  var index, total = 1;
  for (index = 0; index < result.length; index++) {
    total = total * result[index];
  }
  return (origText === total.toString()) ? result : "Error: Factoring did not validate";
};

//jQuery implementation
$('#number').keyup(function () {
  var result, tbresult = $('#result');
  var numText = $('#number').val();
  var num = Math.abs(parseFloat(numText, 10)); //note around 15 or 16 digits program begins to fail, e.g. "10000000000000001" == 10000000000000000.

  if (numText != num.toString()) {
    tbresult.html("Input number is to large to be calculated accurately or is not a valid number"); //Outputs Error if number is to large or not a number
  } else { //Calculates Prime Factors
    result = primeFactorization(num);
    result = ValidateResult(numText, result);
    tbresult.html(result.toString());
  }
});
