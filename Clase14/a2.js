function randomArrayGenerator(n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

console.log(randomArrayGenerator(10));