// const obj = {
//      two(){
//           return 2;
//      }
// };

// const four = new Function("num","return num")
// console.log(obj.two())
// console.log(four(3))
// ! functions are first class citizens in js
// * fn can assign to variables
// * fn can be passed as an argument
// * fn can be return as data

var logger = function (val) {
  console.log(val);
};

function caller(fn,value) {
  fn(value);
}
function b() {
  return function c() {
    console.log("bye");
  };
}

caller(logger,"hello");
