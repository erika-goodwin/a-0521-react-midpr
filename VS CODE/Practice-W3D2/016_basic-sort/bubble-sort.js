function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr[j], arr[j+1])
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; //<---- O(1) space complexity
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const result = bubbleSort([8, 1, 5, 9, 3, 2, 6, 7]);
console.log(result);

// [8, 1, 5, 9, 3, 2, 6, 7]

//(i,j) = (7, 0)
//-> arr[j] = 8, arr[j+1] = 1 -> 8 > 1 YES
//--> temp = arr[j] = 8 <-> 1
//[1, 8, 5, 9, 3, 2, 6, 7]

//(i,j) = (7, 1)
//-> arr[j] = 8, arr[j+1] = 5 -> 8 > 5 YES
//--> temp = arr[j] = 8 <-> 5
//[1, 5, 8, 9, 3, 2, 6, 7]

//(i,j) = (7, 2)
//-> arr[j] = 8, arr[j+1] = 9 -> 8 > 9 NO
//[1, 5, 8, 9, 3, 2, 6, 7]

//(i,j) = (7, 3)
//-> arr[j] = 9, arr[j+1] = 3 -> 9 > 3 YES
//--> temp = arr[j] = 9 <-> 3
//[1, 5, 8, 3, 9, 2, 6, 7]

//(i,j) = (7, 4)
//-> arr[j] = 9, arr[j+1] = 2 -> 9 > 2 YES
//--> temp = arr[j] = 9 <-> 2
//[1, 5, 8, 3, 2, 9, 6, 7]

//(i,j) = (7, 5)
//-> arr[j] = 9, arr[j+1] = 6 -> 9 > 6 YES
//--> temp = arr[j] = 9 <-> 6
//[1, 5, 8, 3, 2, 6, 9, 7]

//(i,j) = (7, 6)
//-> arr[j] = 9, arr[j+1] = 7 -> 9 > 7 YES
//--> temp = arr[j] = 9 <-> 7
//[1, 5, 8, 3, 2, 6, 7, 9]
