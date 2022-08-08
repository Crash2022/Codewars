var countSheep = function (num){
  let startArr = [];
  for (let i = 1; i <= num; i++) {
    startArr.push(i + " sheep...");
  }
  let finalArr = startArr.join('');
  return finalArr;
}
countSheep(3);