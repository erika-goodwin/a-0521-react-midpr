function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

const result = insertionSort([2, 1, 9, 76, 4]);
console.log("result: ", result);

// [2, 1, 9, 76, 4]
// i = 1, currentVal = arr[i] = 1

// j = 0 >= 0 && arr[j] = 2 > currentVal = 1 YES
// arr[j+1] = 1 = arr[j] = 2

// j = -1 >= 0 NO
// arr[j+1] = arr[0] = 1

// [1, 2, 9, 76, 4]
// i = 2, currentVal = arr[i] = 9

// j = 1 >= 0 && arr[j] = 2 > currentVal = 9 NO
// arr[j+1] = arr[2] = 9

// [2, 1, 9, 76, 4]
// i = 3, currentVal = arr[i] = 76

// j = 2 >= 0 && arr[j] = 9 > currentVal = 76 NO
// arr[j+1] = arr[3] = 76

// [2, 1, 9, 76, 4]
// i = 4, currentVal = arr[i] = 4

// j = 3 >= 0 && arr[j] = 76 > currentVal = 4 YES
// arr[j+1] = 4 = arr[j] = 76

// [2, 1, 9, 4, 76]
// j = 2 >= 0 && arr[j] = 9 > currentVal = 9 YES
// arr[j+1] = 4 = arr[j] = 76
// arr[j+1] = arr[0] = 1
