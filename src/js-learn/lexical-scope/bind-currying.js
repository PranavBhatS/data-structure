function multiply(a, b) {
  return a * b;
}

//currying - only partially giving params

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);

console.log(multiplyByTwo(8))
console.log(multiplyByThree(8))