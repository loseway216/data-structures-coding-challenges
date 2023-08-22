// Return the Nth Node from the End
export default function findNth(list, n) {
  if (list.isEmpty()) {
    return null;
  }

  let length = 0;
  let startNode = list.getHead();

  while (startNode != null) {
    startNode = startNode.next;
    length++;
  }

  const nPos = length - n;

  if (nPos < 0 || nPos > length) {
    return null;
  }

  startNode = list.getHead();
  for (let i = 0; i < nPos; i++) {
    startNode = startNode.next;
  }

  return startNode;
}
