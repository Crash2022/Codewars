function sumMix(x){
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    let newN = Number(x[i]);
    sum += newN;
  }
  return sum;
}
sumMix([9, 3, '7', '3']);