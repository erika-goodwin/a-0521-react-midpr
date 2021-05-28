// (W3D4)

console.log("hi");

// -- DURRCTIONS
// given a String, return a new string with the reversed order of characters

//apple ====> function  ====> elppa

function reverseStr(str) {
  //-First solution
  //turn str to an array of characters
  const arr = str.split("");
  // use reverse method
  arr.reverse();

  return arr.join("");
}

console.log(reverseStr("apple"));

//-second solution
function reverseStr2(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  // h+''
  // h = e + h
  // eh = l + eh
  // leh = l + leh
  // lleh = o + lleh
  // olleh

  return reversed;
}
console.log(reverseStr2("hello"));

// -Third solution
function reversedStr3(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
console.log(reversedStr3("Greeting!"));
