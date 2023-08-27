// Trace the Complete Path of a Journey
export default function tracePath(arr) {
  const map = {};
  let result = [];

  // Create a map of source -> destination
  for (let i = 0; i < arr.length; i++) {
    map[arr[i][0]] = arr[i][1];
  }

  const count = Object.keys(map).length;
  for (let key in map) {
    let source = key;
    let destination = map[key];
    while (destination) {
      result.push(source);
      source = destination;
      destination = map[destination];
    }

    if (result.length == count) {
      result.push(source);
      break;
    } else {
      result = [];
    }
  }

  return result;
}
