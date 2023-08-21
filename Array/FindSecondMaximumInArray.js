// Given an array of size n, find the second maximum element in the array
export default function findSecondMaximum(arr) {
  let secondMaximum = Number.NEGATIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val > max) {
      secondMaximum = max;
      max = val;
    } else if (val > secondMaximum && val < max) {
      secondMaximum = val;
    }
  }

  return secondMaximum;
}
