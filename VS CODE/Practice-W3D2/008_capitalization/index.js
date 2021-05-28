// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize(‘a short sentence’) --> ‘A Short Sentence’
//   capitalize(‘a lazy fox’) --> ‘A Lazy Fox’
//   capitalize(‘look, it is working!’) --> ‘Look, It Is Working!’

function capitalize(str) {
  let capitalized = [];

  //   capitalized = str.replace(/\w\S*/g, (w) =>
  //     w.replace(/^\w/, (c) => c.toUpperCase())
  //   );

  const arr = str.split(" "); //[ 'a', 'short', 'sentence' ]

  for (let i = 0; i < arr.length; i++) {
    //FOR UPPER WORD
    const oneWordArr = arr[i].split(""); //[ 'a' ][ 'short' ][ 'sentence' ]
    const upper = oneWordArr[0].toUpperCase();

    //FOR LOWER WORD
    const lower = arr[i].slice(1).toLowerCase();

    capitalized.push(upper + lower);
  }

  return console.log(capitalized.join(" "));
}

capitalize("a short sentence");
