//new binding
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// implicit bindings
const person = {
  name: "pranav",
  age: 24,
  hi() {
    console.log("hi " + this.name);
  },
};

//explicit binding
const person3 = {
  name: "pranav",
  age: 24,
  hi: function () {
    console.log(this);
  }.bind(),
};

console.log(person3.hi());
