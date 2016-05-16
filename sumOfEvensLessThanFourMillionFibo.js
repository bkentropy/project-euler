// basic recursive fibbonaci function
var fib = function(n) {
  if ( n === 0) {
    return 0;
  }
  if ( n === 1) {
    return 1;
  }
  return fib(n-2) + fib(n-1);
};

// takes a number and sums of the even values of the fib sequence up to the value passed in
function fibLessThanFourMil (num) {
  var currentValue = 0;
  var i = 0;
  var evensArr = [];
  while(currentValue < num) {
    currentValue = fib(i);
    if (currentValue % 2 === 0) {
      evensArr.push(currentValue); 
    }   
    i++;
  }
  return evensArr.reduce(function add(a, b) {
    return a + b;
  }, 0);
}

console.log(fibLessThanFourMil(num));
