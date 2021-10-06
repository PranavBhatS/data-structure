function mult(a=1) {
     return function inner(b) {
          return a*b;
     }
}

let multByFive = mult();
let multByTwo = mult(2);
multByTwo(3)//6