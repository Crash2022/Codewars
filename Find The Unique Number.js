"use strict"

/*2022-09-10*/
/* Find The Unique Number */

/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

function findUniq(arr) {

  let result = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
      let currentElement = arr[i];
      if (!(currentElement in obj)) {
          obj[currentElement] = 1;
      } else {
          obj[currentElement] += 1;
      }
  }

  let keys = Object.keys(obj);
  keys.forEach((key) => {
      if(obj[key] === 1) {
          result.push(key);
      }
  });

  let finalAnswer = result[0].toString();

  console.log(finalAnswer);

}
findUniq([10, 10, 7, 10, 10]);