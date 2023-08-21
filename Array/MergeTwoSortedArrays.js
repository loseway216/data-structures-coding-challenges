export default function mergeArrays(arr1, arr2) {
  if (!arr1 || !arr2) {
    return [];
  }

  const merged = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return [...merged, ...arr1, ...arr2];
}
