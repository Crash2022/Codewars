"use strict"

/*2022-08-26*/
/*---Count by X---*/

function countBy(x, n) {
  let z = [];

   for (let i=1; i <= n; i++) {
     let res = x*i;
     z.push(res);
   }
  
  console.log(z);
}
//countBy(2, 5);