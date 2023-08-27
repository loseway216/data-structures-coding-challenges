import HashTable from "./HashTable";

// A Subarray with a Sum of 0
// return true if a subarray with a sum of 0 exists
export default function findSubZero(arr) {
  const ht = new HashTable();
  let result = false;

  // edge case
  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    ht.insert(sum, i);

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        result = true;
        break;
      }
    }
  }

  return result;
}
