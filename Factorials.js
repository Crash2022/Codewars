function factorialize(num) {
  if (num == 0) {
    console.log(1);
  } else {
    let counter = []
    for (let i = 1; i <= num; i++) {
      counter.push(i);
    }
    console.log(counter);
		
		let result = 1;
		for (let elem of counter) {
      result *= elem;
    }
		console.log(result);
  }
}
factorialize(5);