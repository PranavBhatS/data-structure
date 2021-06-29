var b = {
  name: "pks",
  say() {
    console.log("b", this);
  },
};

var c = {
  name: "pks",
  say() {
    return function () {
      console.log("c", this);//called globally =>dyanamic scope
    };
  },
};
var d = {
  name: "pks",
  say() {
    return () => {
      console.log("d", this);
    };
  },
};

// b.say()
// c.say()()
d.say()()