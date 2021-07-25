const elfFunctionsStore = {
  attack() {
    return "attack with " + this.weapon;
  },
};

function creatElf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  //   this.attack = elfFunctionsStore.attack;
}
creatElf.prototype.attack = elfFunctionsStore.attack;

creatElf.prototype.build = function () {
  function building() {
    return this.name + " building the house";
  }
  return building.bind(this);
};

// const elf = new Function(
//   "name",
//   "weapon",
//   `
//   this.name = name;
//   this.weapon = weapon;
// `
// );
// console.log(new elf("pranv", "kl"));
const pranav = new creatElf("pranav", "war machine");
console.log(pranav.build()());
// const pkg = new creatElf("pkg", "sniper");
// console.log(pkg.attack());
