"use strict"

/*2022-08-31*/
/*Split The Bill*/
/*#объекты #копирование #математика*/

/* It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.

Example
3 friends go out together: A spends ?20, B spends ?15, and C spends ?10. The function should return an object/dict showing that 
A should receive ?5, B should receive ?0, and C should pay ?5. */

function splitTheBill(x) {
    //const sumValues = Object.values(x).reduce((a, b) => a + b);

    let sum = 0;
    for (let property in x) {
        sum += x[property];
    }
    let each = (sum / Object.keys(x).length).toFixed(0);
    console.log(each);
    
    let copyX = Object.assign({}, x);
    console.log(copyX);

    for (let property in copyX) {
        copyX[property] = +(copyX[property] - each).toFixed(2);
    }
    console.log(copyX);
}
//splitTheBill({A: 10, B: 2, X: 3});