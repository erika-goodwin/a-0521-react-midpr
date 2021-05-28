function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++; //**1**
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]; // **2**
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxChar("abcc"));

//**1**
// charMap = {
//   a: 1, //Property:
//   b: 1,
//   c: 2,
// };

// **2**
// max = 1
// maxChar = 'a'
