import findProduct from "./ProductsOfAllElements";

test("Products of All Elements", () => {
  expect(findProduct([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);

  expect(findProduct([2, 5, 9, 3, 6])).toEqual([810, 324, 180, 540, 270]);
});
