function enough(cap, on, wait) {
    var totalPeople = cap - on - wait;
    var enoughPlace = 0;
    
    if (totalPeople >= 0) {
      return enoughPlace;
    } else if (totalPeople < 0) {
      return Math.abs(totalPeople);
    }
  }
  enough(100, 60, 50);