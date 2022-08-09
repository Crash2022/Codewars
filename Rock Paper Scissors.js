const rps = (p1, p2) => {
    var handOne = 'rock';
    var handTwo = 'scissors';
    var handThree = 'paper';
    
    var resultOne = 'Player 1 won!';
    var resultTwo = 'Player 2 won!';
    var resultThree = 'Draw!';
    
    if (p1 === p2) {
      return resultThree;
    } else if (p1 === handOne && p2 === handTwo) {
      return resultOne;
    } else if (p1 === handOne && p2 === handThree) {
      return resultTwo;
    } else if (p1 === handTwo && p2 === handOne) {
      return resultTwo;
    } else if (p1 === handTwo && p2 === handThree) {
      return resultOne;
    } else if (p1 === handThree && p2 === handOne) {
      return resultOne;
    } else if (p1 === handThree && p2 === handTwo) {
      return resultTwo;
    }
  };
  rps('scissors', 'scissors');