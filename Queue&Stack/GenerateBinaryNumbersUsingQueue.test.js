import generateBinary from "./GenerateBinaryNumbersUsingQueue";

test("Generate Binary Numbers From 1 to n Using Queue", () => {
  expect(generateBinary(-1)).toEqual([]);
  expect(generateBinary(3)).toEqual([1, 10, 11]);
  expect(generateBinary(5)).toEqual([1, 10, 11, 100, 101]);
});
