function greet(whatToSay) {
  return function (name) {
    console.log(whatToSay + " " + name);
  };
}
let sayHi = greet("Hi");
let sayBye = greet("Bye");

function builderFunction() {
  let ar = [];
  for (var index = 0; index < 3; index++) {
    ar.push(
      ((i) => {
        return function () {
          console.log(i);
        };
      })(index)
    );
  }
  return ar;
}
let fs = builderFunction();

fs[0]();
fs[1]();
fs[2]();
