/*  A closure is the combination of a function bundled together (enclosed) with references 
 to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/

/*
     Features of closures:
     1. Memory efficient
     2. Encapsulation
*/

// function a() {
//   let grandpa = "grandpa";
//   return function b() {
//     let father = "father";
//     return function c() {
//       let son = "son";
//       return `${grandpa} >> ${father} >> ${son}`;
//     };
//   };
// }

// console.log(a()()());

function callMe() {
  setTimeout(() => {
    console.log(`i'm ${name}`);
  }, 0);
  const name = "pranav";
}
// callMe(); //! i'm pranav

// * Memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill("😃");
  console.log("creating big array...");
  return bigArray[index];
}
function heavyDutyHelper() {
  const bigArray = new Array(7000).fill("😃");
  console.log("creating big array again...");
  return function (index) {
    return bigArray[index];
  };
}
// console.log(heavyDuty(10));
// console.log(heavyDuty(10));
// let getHeavyDuty = heavyDutyHelper();
// console.log(getHeavyDuty(10));
// console.log(getHeavyDuty(10));

// 2. Encapsulation
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "🧨";
  };
  const totalPeaceTime = () => timeWithoutDestruction;
  const passTime = () => {
    timeWithoutDestruction++;
  };
  setInterval(passTime, 1000);

  return {
    totalPeaceTime,
  };
};


const ohno = makeNuclearButton()
console.log(ohno.totalPeaceTime())