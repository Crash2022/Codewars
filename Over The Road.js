"use strict"

/*2022-09-09*/
/*Over The Road*/
/*#массивы #копирование #поиск*/

/* You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, 
you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. 
When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Given your house number address and length of street n, give the house number on the opposite side of the street. */

/* return (n*2+1)-address; */

function overTheRoad(address, n) {
    let odd = 1;
    let leftStreet = [];

    for (let i=0; i < n; i++) {
        leftStreet.push(odd);
        odd += 2;
    }
    //console.log(leftStreet);

    let even = 2;
    let rightStreet = [];

    for (let i=0; i < n; i++) {
        rightStreet.push(even);
        even += 2;
    }
    let rightStreetReverse = rightStreet.reverse();
    //console.log(rightStreetReverse);
    
    if (address % 2 !== 0) {
        let findLeftStreet = leftStreet.indexOf(address);
        let findLeftStreetResult = rightStreetReverse[findLeftStreet];
        //console.log(findLeftStreetResult);
	return findLeftStreetResult;
    } else {
        let findRightStreet = rightStreetReverse.indexOf(address);
        let findRightStreetResult = leftStreet[findRightStreet];
        return findRightStreetResult;
    }
}
//overTheRoad(7, 11);
