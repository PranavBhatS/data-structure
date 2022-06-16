let person = {
  fName: "pk",
  lName: "sarang",
  getFullName: function () {
    return this.fName + " " + this.lName;
  },
};

let logName = function (fName, lName) {
  this.fName = fName;
  this.lName = lName;
  console.log("logged: ", this.getFullName());
};

let logPersonName = logName.bind(person);

logPersonName("prsaa");

logName.apply(person, ["lj", "pk"]);
logName.call(person, "lgj", "pk");
