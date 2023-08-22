// Given an array, re-arrange its elements in such a way that the negative elements appear at one side and positive elements appear in the other
export default function reArrange(arr) {
  // O(n) time complexity and no extra space
  let leftMostPositiveIndex = 0;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== leftMostPositiveIndex) {
        temp = arr[i];
        arr[i] = arr[leftMostPositiveIndex];
        arr[leftMostPositiveIndex] = temp;
      }
      leftMostPositiveIndex++;
    }
  }

  return arr;
}
