"use strict"

/*2022-08-26*/
/*---Coprime Validator---*/

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