function findLongestWordLength(str) {
  let wordArray = str.split(' ');
	console.log(wordArray);
	let lengthArray = [];
	for (let elem of wordArray) {
		lengthArray.push(elem.length);
	}
	console.log(lengthArray);

	let wordsObj = {};
	for(let j = 0; j < wordArray.length; j++) {
		wordsObj[wordArray[j]] = lengthArray[j];
	}
	console.log(wordsObj);

	let result = Object.values(wordsObj);
	let max = Math.max(...result);
	console.log(max);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");