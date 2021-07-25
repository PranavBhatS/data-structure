const elfFunctionsStore = {
  attack() {
    return "attack with " + this.weapon;
  },
};

function creatElf(name, weapon) {
  let newElf = Object.create(elfFunctionsStore);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

// const pranav = creatElf("pranav","war machine");
// pranav.attack = elfFunctionsStore.attack
// console.log(pranav.attack())
// const pkg = creatElf("pkg","sniper");
// pkg.attack = elfFunctionsStore.attack
// console.log(pkg.attack())

//using Object.create

const pranav = creatElf("pranav", "war machine");
console.log(pranav.attack());
const pkg = creatElf("pkg", "sniper");
console.log(pkg.attack());
