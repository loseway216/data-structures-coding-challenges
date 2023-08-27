import HashTable from "./HashTable";

// Remove Duplicates from a Linked List
export default function removeDuplicates(list) {
  const ht = new HashTable();
  let current = list.getHead();
  let prev = list.getHead();

  while (current) {
    if (ht.search(current.data) != null) {
      prev.next = current.next;
      current = current.next;
    } else {
      ht.insert(current.data, true);
      prev = current;
      current = current.next;
    }
  }

  return list;
}
