function abbrevName(name){
    let firstLetter = name[0].toUpperCase() + ".";
      
    let space = " ";
    let spaceIndex = name.indexOf(space);
    
    let nextIndex = ++spaceIndex;
    let secondLetter = name.charAt(nextIndex).toUpperCase();
    
    let abbrevLetters = firstLetter + secondLetter;
    return abbrevLetters;
  }