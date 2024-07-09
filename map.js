function myMap(arr, callback) {
  const elem = [];
  for (let i = 0; i < arr.length; i++) {
    elem.push(callback(arr[i], i));
  }
  return elem;
}

const arr = [1, 3, 4, 6, 7];

console.log(myMap(arr, (elem) => elem + 1));
