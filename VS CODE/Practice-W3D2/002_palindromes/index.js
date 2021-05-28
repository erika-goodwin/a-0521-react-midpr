// -- DIRECTION

function palindrome1(str) {
  const reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  }
  //   } else {
  //     return false;
  //   }
}
console.log(palindrome1("aba"));

function palindrome2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(palindrome2("abaahssh"));
