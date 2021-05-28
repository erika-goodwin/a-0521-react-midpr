function someFunc(x) {
  //base case
  if (x === 0) {
    return;
  }

  console.log(x);
  someFunc(x - 1); // IF (x) -> 無限ループ
}
// someFunc(5);

function inPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];

  if (firstLetter === lastLetter) {
    let stringWithoutFistAndLastLetters = str.substring(1, str.length - 1);
    return inPalindrome(stringWithoutFistAndLastLetters);
  } else {
    return false;
  }
}
inPalindrome("noon");
