function randomObjectGenerator(n) {
  var obj = {};
  for (var i = 0; i < n; i++) {
    obj[i] = Math.random();
  }
  return obj;
}

console.log(randomObjectGenerator(10));