// Arrange elements in such a way that the maximum element appears at first, then minimum at second,
// then second maximum at third position and second minimum at fourth, and so on.
export default function maxMin(arr) {
  // O(n) time complexity
  // O(1) space complexity
  let maxIndex = arr.length - 1;
  let minIndex = 0;
  const maxElement = arr[maxIndex] + 1;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] += Math.floor((arr[maxIndex] % maxElement) * maxElement);
      maxIndex--;
    } else {
      arr[i] += Math.floor((arr[minIndex] % maxElement) * maxElement);
      minIndex++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(arr[i] / maxElement);
  }
  return arr;
}
