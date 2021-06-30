//! HOF - are functions that can take fn as params or return fn.
// function authenticate(person,verify) {
//   let ar = [];
//   for (let index = 0; index < verify; index++) {
//     ar.push(index);
//   }
//   return giveAccessTo(person.name);
// }

// const giveAccessTo = (name) => `access granted to ${name}`;

// function letPerson(person, fn) {
//   if (person.level === "admin") {
//     return fn(person,50000000);
//   } else if (person.level === "user") {
//      return fn(person,1000000);
//   }

// }

// console.log(letPerson({level: "user",name:"pranav"},authenticate));

// * exercise- generic multiply

function multiplyBy(n1) {
  return function (n2) {
    return n1 * n2;
  };
}

// const multiplyBy = (n1) => (n2) => n1 * n2;


const multiplyBy2 = multiplyBy(2);
const multiplyBy9 = multiplyBy(9);
console.log(multiplyBy2(3));
console.log(multiplyBy9(3));
