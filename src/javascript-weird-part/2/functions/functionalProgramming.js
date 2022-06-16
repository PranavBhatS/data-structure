function mapForEach(ar, fn) {
  let result = [];
  ar.forEach(element => {
    result.push(fn(element));
  });
  return result;
}

var response = mapForEach([2, 3, 4], function (val) {
  return val * 2;
});
console.log(response);
