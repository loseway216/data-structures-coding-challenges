# data-structures-coding-challenges

data structures and related coding challenges in JavaScript

---

Array

- [Merge Two Sorted Arrays](./Array/MergeTwoSortedArrays.js)
- [Products of All Elements](./Array/ProductsOfAllElements.js)
- [Find Second Maximum in an Array](./Array/FindSecondMaximumInArray.js)
- [Rearrange Positive & Negative Values](./Array/RearrangePositiveNegativeValues.js)
- [Rearrange Sorted Array in Max/Min Form](./Array/RearrangeSortedArrayMaxMinForm.js)
- [Maximum Sum SubArray](./Array/MaximumSumSubArray.js)

[LinkedList](./LinkedList/SinglyLinkedList.js)

- [Find the Length of a Linked List](./LinkedList/FindTheLengthOfLinkedList.js)
- [Reverse a Linked List](./LinkedList/ReverseLinkedList.js)
- [Detect a Loop in a Linked List](./LinkedList/DetectLoop.js)
- [Find Middle Node of a Linked List](./LinkedList/FindMiddleNodeOfLinkedList.js)
- [Remove Duplicates from Linked List](./LinkedList/RemoveDuplicatesFromLinkedList.js)
- [Union & Intersection of Linked Lists](./LinkedList/UnionAndIntersectionOfLinkedLists.js)
- [Return the Nth Node from the End](./LinkedList/ReturnNthNodeFromEnd.js)

[Queue&Stacks](./Queue&Stack/Queue.js)

- [Generate Binary Numbers From 1 to n Using Queue](./Queue&Stack/GenerateBinaryNumbersUsingQueue.js)
- [Reverse First k Elements of Queue](./Queue&Stack/ReverseFirstKElementsOfQueue.js)
- [Implement a Queue Using Stacks](./Queue&Stack/ImplementQueueUsingStacks.js)
- [Implement Two Stacks using One Array](./Queue&Stack/ImplementTwoStacksUsingArray.js)
- [Sort Values in Stack](./Queue&Stack/SortValuesInStack.js)
- [Evaluate Postfix Expression Using a Stack](./Queue&Stack/EvaluatePostfixExpressionUsingStack.js)
- [Next Greater Element Using a Stack](./Queue&Stack/NextGreaterElementUsingStack.js)
- [Check Balanced Parentheses Using Stack"](./Queue&Stack/CheckBalancedParenthesesUsingStack.js)
- [Min Stack](./Queue&Stack/MinStack.js)

[Graph](./Graph/Graph.js)

- [Detect Cycle in Graph](./Graph/DetectCycleInGraph.js)
- [Find a "Mother Vertex" in a Graph](./Graph/FindMotherVertex.js)

[BinarySearchTree](./BinarySearchTree/BinarySearchTree.js)

[Trie](./Trie/Trie.js)

[Heap](./Heap/MaxHeap.js)

[HashTable](./HashTable/HashTable.js)

## Time and Space Complexity Cheat Table

Note: In the table, n is the total number of elements stored in the structure.

| Data Structure                                        | Insert                           | Delete                             | Search                           | Space complexity                 |
| :---------------------------------------------------- | :------------------------------- | :--------------------------------- | :------------------------------- | :------------------------------- |
| Array                                                 | O(n)                             | O(n)                               | O(n)                             | O(n)                             |
| Single linked list                                    | O(1) (insert at head)            | O(1) (delete head)                 | O(n)                             | O(n)                             |
| Doubly linked list                                    | O(1) (insert at head)            | O(1) (delete head)                 | O(n)                             | O(n)                             |
| Doubly linked list (with tail pointer)                | O(1) (insert at head or tail)    | O(1) (delete head or tail)         | O(n)                             | O(n)                             |
| Stack                                                 | O(1) (push)                      | O(1) (pop)                         | O(n)                             | O(n)                             |
| Queue                                                 | O(1) (enqueue)                   | O(1) (dequeue)                     | O(n)                             | O(n)                             |
| Binary heap                                           | O(lg n)                          | O(lg n) removeMin() or removeMax() | O(n)                             | O(n)                             |
| Binary tree                                           | O(n)                             | O(n)                               | O(n)                             | O(n)                             |
| Binary search tree                                    | O(n)                             | O(n)                               | O(n)                             | O(n)                             |
| Red-Black / AVL / 2-3 Tree                            | O(lg n)                          | O(lg n)                            | O(lg n)                          | O(n)                             |
| Hash table                                            | O(n): worst case O(1): amortized | O(n): worst case O(1): amortized   | O(n): worst case O(1): amortized | O(n): worst case O(1): amortized |
| Trie (size of alphabet: d, length of longest word: n) | O(n)                             | O(n)                               | O(n)                             | O(d^n)                           |

### Graph Operations

The following are the time and space complexities of some common operations in a graph with n vertices and m edges.

| Operation                    | Adjacency list | Adjacency matrix |
| :--------------------------- | :------------- | :--------------- |
| Add vertex                   | O(n)           | O(n^2)           |
| Remove vertex                | O(m+n)         | O(n^2)           |
| Add edge                     | O(1)           | O(1)             |
| Remove edge                  | O(n)           | O(1)             |
| Depth / Breadth first search | O(m+n)         | O(n^2)           |
| Space complexity             | O(m+n)         | O(n^2)           |
