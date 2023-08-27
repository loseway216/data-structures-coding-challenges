import HashTable from "./HashTable";

// Check if Arrays are Disjointed
export default function isDisjoint(arr1, arr2) {
  // edge case
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }

  const ht = new HashTable();

  for (let i = 0; i < arr1.length; i++) {
    ht.insert(arr1[i], i);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (ht.search(arr2[i]) != null) {
      return false;
    }
  }

  return true;
}
