function confirmEnding(str, target) {
      
  let targetRegex = new RegExp(`${target}$`, 'g')

  if(typeof str === 'string' && targetRegex.test(str)) {
    console.log('true');
    //return true;
  } else {
    console.log('false');
    //return false;
  }
}
confirmEnding("Bastian", "n");