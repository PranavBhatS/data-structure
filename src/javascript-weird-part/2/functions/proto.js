function Person() {
  this.fName = "pranav";
  this.lName = "bhat";
}

let personObj = new Person();
console.log(personObj.fName);

let ar = [1, 2, 3];
ar["pranav"] = "4";
ar["pranav"] = '5'

for (const key in ar) {
    console.log(ar[key] + "  :" + key);
}
console.log(ar);
