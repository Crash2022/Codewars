function largestOfFour(arr) {
	let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
		maxArr.push(Math.max.apply(null, arr[i]));
	}
	console.log(maxArr);
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);