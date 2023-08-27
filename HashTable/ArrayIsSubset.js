import HashTable from "./HashTable.js";

// An Array as a Subset of Another Array
export default function isSubset(arr1, arr2) {
  // edge case
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }
  // if arr2 is larger than arr1, then it cannot be a subset
  if (arr2.length > arr1.length) {
    return false;
  }

  // create a hash table
  const ht = new HashTable();
  for (let i = 0; i < arr1.length; i++) {
    ht.insert(arr1[i], i);
  }
  // check if arr2 is a subset of arr1
  for (let i = 0; i < arr2.length; i++) {
    if (!ht.search(arr2[i])) {
      return false;
    }
  }
  return true;
}
