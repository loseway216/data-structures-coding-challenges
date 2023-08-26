import convertMax from "./ConvertMaxToMin";
import MaxHeap from "./MaxHeap";

describe("Convert Max Heap to Min Heap", () => {
  test("convertMax", () => {
    const maxHeap = new MaxHeap();
    maxHeap.insert(5);
    maxHeap.insert(4);
    maxHeap.insert(3);
    maxHeap.insert(2);
    maxHeap.insert(1);

    expect(convertMax(maxHeap.heap)).toEqual([1, 2, 3, 5, 4]);
  });
});
