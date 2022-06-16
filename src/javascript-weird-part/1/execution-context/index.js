function b() {
  console.log("b");
  // var myVar;
  console.log(myVar);
}

function a() {
  function c() {
    console.log(myVar, "inside a=>c");
  }
  var myVar = 2;
  console.log(myVar);
  b();
}
var myVar = 21;
a();
var myVar = 21;
console.log(myVar);
