// !call only once

let view;
// (() => {
//   function initialize() {
//     view = "📩";
//     console.log("view has been set");
//   }
//   initialize();
// })();

function once() {
  isCalled = false;
  return function () {
    if (isCalled) return;
    view = "📩";
    //     once = null;
    isCalled = true;
    console.log("view has been set");
  };
}
// let init = once();
// init();
// init();
// console.log(view);

// !for loop magic methods

const ar = [1, 2, 3, 4];
for (var i = 0; i <= ar.length; i++) {
  ((closureI) => {
    setTimeout(() => {
      console.log(`current index is ${closureI}`);
    }, 2000);
  })(i);
}

// or use let
