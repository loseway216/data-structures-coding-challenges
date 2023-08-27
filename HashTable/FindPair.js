import HashTable from "./HashTable";

// Find Two Pairs Such That a+b = c+d
export default function findPair(arr) {
  const ht = new HashTable();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (ht.search(sum) != null) {
        result.push(ht.search(sum));
        result.push([arr[i], arr[j]]);
        return result;
      } else {
        ht.insert(sum, [arr[i], arr[j]]);
      }
    }
  }

  return result;
}
