import HashTable from "./HashTable";

// First First Unique Integer in an Array
export default function findFirstUnique(arr) {
  const map = new HashTable();
  for (let i = 0; i < arr.length; i++) {
    const count = map.search(arr[i]);
    if (count != null) {
      map.insert(arr[i], Number(count) + 1);
    } else {
      map.insert(arr[i], 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (map.search(arr[i]) == 1) {
      return arr[i];
    }
  }
  return null;
}
