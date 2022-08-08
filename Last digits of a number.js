function lastDigit(n, d) {
  var arrayOne = Array.from(String(n), Number);
  var arrayTwo = [];
  var arrayThree = [];

  if (d <= 0) {
    return arrayTwo;
  } else if (d >= arrayOne.length) {
    return arrayOne;
  } else if (d < arrayOne.length) {
    var countDigit = d;
    for (let i = arrayOne.length-1; countDigit > 0; i--) {
      countDigit = countDigit - 1;
      arrayThree.push(arrayOne[i]);
    }
    return arrayThree.reverse();
  }
}
lastDigit(123767, 4);