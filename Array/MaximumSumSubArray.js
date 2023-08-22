// Given an array, find the contiguous subarray with the largest sum.
export default function findMaxSumSubArray(arr) {
  let globalMax = arr[0];
  let currentMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (currentMax < 0) {
      currentMax = arr[i];
    } else {
      currentMax += arr[i];
    }

    if (globalMax < currentMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
}
