// Find Middle Node of a Linked List
export default function findMid(list) {
  if (list.isEmpty()) {
    return null;
  }

  let oneStep = list.getHead();
  let twoStep = list.getHead();

  while (
    oneStep.next != null &&
    twoStep.next != null &&
    twoStep.next.next != null
  ) {
    oneStep = oneStep.next;
    twoStep = twoStep.next.next;
  }

  if (oneStep == null) {
    return null;
  }

  return oneStep;
}
