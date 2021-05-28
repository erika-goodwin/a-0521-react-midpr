function reversInt(n) {
  //convert into string
  const reversed = n.toString().split("").reverse().join("");
  //1 ==> toString() ==> '1'
  //.split(''): No space & make it array
  if (n < 0) {
    // return parseInt(reversed) * -1;
    return parseInt(reversed) * Math.sign(n);
  }

  return parseInt(reversed);
}

console.log(reversInt(-500));
