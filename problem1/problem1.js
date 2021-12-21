function primeX(number) {
  let primes = [];

  let i = 2;
  while (primes.length < number) {
      let fac = 0;
      for (j = 2; j <= Math.sqrt(i); j++) {
          if (i % j == 0) {
              fac++;
              break;
          }
      }
      if (fac == 0) {
          primes.push(i);
      }
      i++;
  }
  return primes[primes.length-1];
}

module.exports = primeX;
