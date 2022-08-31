"use strict"

/*2022-08-26*/
/*---Coprime Validator---*/

/* Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes */

function isCoprime(x, y) {
  let firstArr = [];
  let secondArr = [];

  for (let i=1, j=1; i <= x, j <= y; i++, j++) {
    let resOne = x / i;
    let resTwo = y / j;
    
    if (resOne % 1 == 0) {
      firstArr.push(resOne);
    }
    if (resTwo % 1 == 0) {
      secondArr.push(resTwo);
    }
  }

  let firstArrReverse = firstArr.reverse();
  let secondArrReverse = secondArr.reverse();

  console.log(firstArrReverse);
  console.log(secondArrReverse);

  let firstResultArr = [];
  let secondResultArr = [];

  for (let i=0, j=0; i < firstArrReverse.length, j < secondArrReverse.length; i++, j++) {
    let resOneResult = x / secondArrReverse[j];
    let resSecondResult = y / firstArrReverse[i];

    if (resOneResult % 1 == 0) {
      firstResultArr.push(resOneResult);
    }
    if (resSecondResult % 1 == 0) {
      secondResultArr.push(resSecondResult);
    }
  }
  console.log(firstResultArr);
  console.log(secondResultArr);

  if (firstResultArr.length === 1 && secondResultArr.length === 1) {
    console.log(`Numbers ${x} and ${y} are are coprime`);
  } else {
    console.log(`Numbers ${x} and ${y} are not are coprime`);
  }

}
//isCoprime(64, 27);