/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  let result;
  // n^m = return
  if (base === 0 || exponent === 0) {
    result = 1;
    return result;
  }

  if (base !== 0 && exponent !== 0) {
    // let newBase = base;
    // for (let i = 1; i <= exponent - 1; i++) {
    //   //   newBase = newBase * base;
    //   newBase *= base;
    //   //   console.log(newBase);
    // }
    // return newBase;

    return base * power(base, exponent - 1);
  }
}
// console.log(power(2, 4));

//----------------
// (2,3)
// (2,2)
// (2,1)
// (2,0 ) ->1

/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length;
  return arr[n - 1] * productOfArray(arr.slice(0, n - 1));
}

// console.log(productOfArray([1, 2, 3, 10]));

/* 03-----------------------recursiveRange---------------------------------------------------------------------
Write a function called 'recursiveRange' which accepts a number and adds up all 
the numbers from 0 to the number passed to the function
*/
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(n) {
  if (n === 0) return 0;

  return n + recursiveRange(n - 1);
}

// console.log(recursiveRange(10));

/* 04-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// add whatever parameters you deem necessary - good luck!

function reverse(str, arrReverse = []) {
  let strArr = str.split("");
  let n = strArr.length;

  if (n === 0) return;

  arrReverse.push(strArr[n - 1]);

  reverse(str.slice(0, n - 1), arrReverse);
  return arrReverse.join("");
}

// console.log(reverse("awesome"));

/* 05-----------------------isPalindrome---------------------------------------------------------------------
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!

  let strArr = str.split("");
  let n = strArr.length;

  console.log(strArr);

  if (strArr[0] === strArr[n - 1]) {
    isPalindrome(strArr.slice(1, n - 2).join(""));
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("amanaplanacanalpandemonium"));
