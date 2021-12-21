function maxSequence(arr) {
  let positives = false;

  while (positives == false) {
      if (arr[0] <= 0 || arr[0] + arr[1] < 0) {
          arr.shift();
      } else if (arr[arr.length-1] <= 0 || arr[arr.length-1] + arr[arr.length-2] < 0) {
          arr.pop();
      } else {
          positives = true;
      }
  }
  
  let sum = arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  
  return sum;
}

module.exports = maxSequence;
