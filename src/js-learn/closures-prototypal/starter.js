const obj = {
     two(){
          return 2;
     }
};

const four = new Function("num","return num")
console.log(obj.two())
console.log(four(3))