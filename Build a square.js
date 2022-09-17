"use strict"

/*2022-08-31*/
/*Build a square*/

/* I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50. */

function generateShape(integer) {
    let newArray = [];

    for (let i=0; i < integer; i++) {
        let inArray = [];
        newArray.push(inArray);
       
        for (let j=0; j < integer; j++) {
            newArray[i].push('+');
        }
        //newArray[i].join('');
    }
    console.log(newArray);

    let newArray2 = newArray.map(el=> el.join(''));
    console.log(newArray2);

}
generateShape(4);