// function loop() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("finally: " + i);
// }

// loop();

// const a = function () {
//   console.log("a", this);
//   const b = function () {
//     console.log("b", this);
//     const c = {
//       hi: function () {
//         console.log("c", this);
//       },
//     };
//     c.hi();
//   };
//   b();
// };
// a();
/// disable-jslint
const obj = {
  name: "pranav",
  sing() {
    console.log("a", this);
    let anotherFunction = function () {
      console.log("b", this);
    };
    anotherFunction.bind(this);
  },
};
obj.sing();