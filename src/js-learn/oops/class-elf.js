
// class CreatElf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return "attack with " + this.weapon;
//   }
// }

// const pkg = new CreatElf("pkg", "sniper");
// console.log(pkg.attack());

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type;
  }
  attack() {
    return "attack with " + this.weapon + " type " + this.type;
  }
  // attack(type) {
  //   this.type = type;
  //   return "attack with " + this.weapon + " type " + this.type;
  // }
}

let a = new Elf("pranav", "machine gone", "normal");
console.log(a.attack());