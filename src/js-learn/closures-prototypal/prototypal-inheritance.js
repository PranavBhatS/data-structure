// console.log(typeof [])
const ar = [];
console.log(ar.__proto__.__proto__); //base object

let dragon = {
  name: "Pranav",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) return `iam ${this.name}, the breather of fire`;
    return "i cant breath without fire";
  },
};

let lizard = {
  name: "vizard",
  fight() {
    return 1;
  },
};

// const singingLizard = dragon.sing.bind(lizard);
// console.log(singingLizard());

lizard.__proto__ = dragon;
lizard.name ="zoozoz"
console.log(lizard.fight(), lizard.sing(),dragon.name);
for (const key in lizard) {
  if (lizard.hasOwnProperty(key))console.log(key);
}
