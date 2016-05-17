function getLargestPrimeFactor(num) {
  var i = 3;
  var factorsArr = [];
  
  for (i; i < num/2; i++) {
    if (num % i === 0) {
       factorsArr.push(i); 
    }
  }
  console.log(factorsArr);
  
  function primeChecker(n) {
   var factorHolder = [];
   if (n === 1 || n === 2) {
     return true;
   } else {
    for (var j = 2; j < n/2; j++) {
      if (n % j === 0) {
        factorHolder.push(j);
      }
    }
   }
   return factorHolder.length;
  }
  
  
  var primeArry = [];
  for (var k = 0; k < factorsArr.length; k++) {
   if (!primeChecker(factorsArr[k])) {
     primeArry.push(factorsArr[k]);
   }
  }
  
  var largestPrime = primeArry.pop();
//   for (var l = 0; l < primeArry.length(); l++) {
//    if primeArry[l] > largestPrime) largestPrime = primeArry[l] 
//   }
  
  return largestPrime;
}

console.log(getLargestPrimeFactor(600851475143));
