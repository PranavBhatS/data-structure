class Person {
  constructor(fname, lname) {
    this.fName = fname;
    this.lName = lname;
    console.log("PERSON: Constructor");
  }
  getFullName() {
    console.log("PERSON: getFullName");
    return "full name from Person: Iam " + this.fName + " " + this.lName;
  }
}

class InFormalPerson extends Person {
  constructor(fname, lname) {
    super(fname,lname);
    this.fName = fname;
    this.lName = lname;
  }
  
  getFullName() {
    console.log("InFormalPERSON: getFullName");
    return "full name from InFormalPerson: Iam " + this.fName + " " + this.lName;
  }
}

let ip = new InFormalPerson("pranav", "bhat");
console.log(ip.getFullName())
