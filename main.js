function myConcat(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

myConcat([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])//?
