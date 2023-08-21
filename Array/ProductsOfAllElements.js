// Given an array, return an array where each index stores the product of all numbers
// in the array except the number at the index itself.
export default function findProduct(arr) {
  const product = [];
  let temp = 1;

  for (let i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp *= arr[i];
  }

  temp = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    product[i] *= temp;
    temp *= arr[i];
  }

  return product;
}
