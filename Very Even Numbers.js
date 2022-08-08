function isVeryEvenNumber(n) {
  if (String(n).length === 1 && n % 2 === 0) {
    return true;
  } else if (String(n).length === 1 && n % 2 !== 0) {
    return false;
  }

    if (String(n).length > 1) {
      let firstArray = Array.from(n.toString(), Number);
      
      let firstSumArray = 0;
      for (i = 0; i < firstArray.length; i++) {
        firstSumArray += firstArray[i];
      }
      
        if (String(firstSumArray).length === 1 && String(firstSumArray) % 2 === 0) {
          return true;
        } else if (String(firstSumArray).length === 1 && String(firstSumArray) % 2 !== 0) {
          return false;
        }
    
        if (String(firstSumArray).length > 1) {
          let nextArray = Array.from(firstSumArray.toString(), Number);
              
          let nextArraySum = 0;
          for (j = 0; j < nextArray.length; j++) {
          nextArraySum += nextArray[j];
          }
         
          if (String(nextArraySum).length === 1 && String(nextArraySum) % 2 === 0) {
            return true;
          } else if (String(nextArraySum).length === 1 && String(nextArraySum) % 2 !== 0) {
            return false;
          
          } else if (String(nextArraySum).length > 1) {
            let lastArray = Array.from(nextArraySum.toString(), Number);
                  
            let lastArraySum = 0;
            for (k = 0; k < lastArray.length; k++) {
            lastArraySum += lastArray[k];
            }
              
            if (String(lastArraySum).length === 1 && String(lastArraySum) % 2 === 0) {
              return true;
            } else if (String(lastArraySum).length === 1 && String(lastArraySum) % 2 !== 0) {
              return false;
            }
          }
        }
    }
}
isVeryEvenNumber(222);