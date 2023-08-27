import HashTable from "./HashTable";

// Find Symmetric Pairs in an Array
export default function findSymmetric(arr) {
  const ht = new HashTable();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i][0];
    let key = arr[i][1];
    let found = ht.search(key);

    if (found != null && found === value) {
      result.push([key, value]);
    } else {
      ht.insert(value, key);
    }
  }

  return result;
}
