function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

let array = [10, 3, 2, 6, 4, 5, 9, 1];
console.log(bubbleSort(array));
