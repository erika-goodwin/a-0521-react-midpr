// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144…

// Print out the n-th entry in the fibonacci series.
//The fibonacci series in an ordering of number where each number is the sum of the preceeding tqo.

//For example, the sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// forms the first tem entries of the fribonacci series

const fibonacciArray = [0, 1];

function fib(n) {
  // adding function for the array
  for (let i = 0; i < n; i++) {
    fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i + 1]);
  }

  // pick up the fibnacciArray[n] and return
  return fibonacciArray[n];
}
// console.log(fib(4)); //-> 3

//---------------------------

function fib2(n) {
  //base
  if (n < 2) return n;

  return fib2(n - 1) + fib2(n - 2);
}

// console.log(fib2(4));

//---------------------------
function slowFib(n) {
  if (n < 2) return n;
  return fib2(n - 1) + fib2(n - 2);
}
function memoize(fn) {
  const cache = {};

  return function (...args) {
    //function(1,2,3,4,5) .... functionCall(...arg)
    if (cache[arg]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}
const fibMemo = memoize(slowFib(5));
