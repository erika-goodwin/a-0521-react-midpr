// function linearSearch(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === val) {
//       return i;
//     }
//     return -1;
//   }
// }

// linearSearch([1, 2, 3, 4, 5, 6, 7], 4);

// function binarySearch(arr, val) {
//   const arrSorted = arr.sort();
//   let leftPointer = arrSorted[0];
//   let rightPointer = arrSorted[arr.length];
//   let centerPointer = arrSorted[arr.length / 2];

//   if (centerPointer === val) {
//     return arr[centerPointer];
//   } else if (centerPointer > val) {
//     leftPointer = arr[centerPointer + 1];
//     while (arr[i] > val) {
//       if ((val = arr[i])) return arr[i];
//     }
//   } else {
//     rightPointer = arr[centerPointer - 1];
//   }
// }

// binarySearch([2, 5, 3, 1, 6, 8, 4, 5, 7, 2], 6);

//Frounsia

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(start + end) / 2;

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle - 1;
    }
    middle = Math.floor(start + end) / 2;
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
  // console.log(start, end, middle);
}

const result = binarySearch([2, 5, 6, 9, 13, 28, 30], 28);
console.log(result);
