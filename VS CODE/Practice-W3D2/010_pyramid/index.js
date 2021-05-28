// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left and right hand sides
// --- Examples
//   pyramid(1)
//       ‘#’
//   pyramid(2)
//       ' # '
//       ‘###’
//   pyramid(3)
//       '  #  '
//       ' ### '
//       ‘#####’

function pyramid(n) {
  //calc the midpoint of our row
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
// pyramid(3);

function pyramidRecursive(n, row = 0, level = "") {
  //base case
  if (n === row) {
    return;
  }
  if (n * 2 - 1 === level.length) {
    console.log(level);
    return pyramidRecursive(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramidRecursive(n, row, level + add);
}

pyramidRecursive(4);
