// Detect a Loop in a Linked List
export default function detectLoop(list) {
  if (list.isEmpty()) {
    return false;
  }

  let oneStep = list.getHead();
  let twoStep = list.getHead();

  while (oneStep != null && twoStep != null && twoStep.next != null) {
    oneStep = oneStep.next;
    twoStep = twoStep.next.next;
    if (oneStep == twoStep) {
      return true;
    }
  }

  return false;
}
