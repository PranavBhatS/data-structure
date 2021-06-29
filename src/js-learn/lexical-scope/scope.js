function x() {
  console.log(a); // it will print --- 0
}

function y() {
  var a = 1;
  function xInside() {
       console.log(a) // it will print --- 1
  }
  xInside()
  x();
}

var a = 0;
y();
