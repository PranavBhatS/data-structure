// let human = {
//   mortal: true,
//   name: "Pranav ji",
// };

// let socrates = Object.create(human);
// socrates.age = "100";
// human.name = "ji";
// console.log(socrates.name, human.name);
// console.log(human.isPrototypeOf(socrates));
// console.log(Date)

// * add new method lastYear
Date.prototype.lastYear = function () {
  // console.log(this)
  return this.getUTCFullYear() - 1;
};
console.log(new Date().lastYear());

// * modify map method in array

Array.prototype.map = function () {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(this[index]+"🙋");
  }
  return resultArray;
};
console.log([1, 2, 3].map());
