const wizard = {
  name: "pranav",
  health: 100,
  heal(num1, num2) {
    return (this.health = this.health + num1 + num2);
  },
};

const archer = {
  name: "robin",
  health: 30,
};

console.log(archer.health);
wizard.heal.apply(archer, [10, 20]);
wizard.heal.apply(archer, 10, 20);
console.log(archer.health);

let archerHeal = wizard.heal.bind(archer,10,2);
console.log(archerHeal());



