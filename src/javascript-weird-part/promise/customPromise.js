const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomePromise(executor) {
  let state = PENDING,
    value = null,
    hanlder = [],
    catches = [];
  function resolve(result) {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;
    hanlder.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;
    catches.forEach((c) => c(value));
  }

  this.then = function (callback) {
    if (state === FULFILLED) callback(value);
    else hanlder.push(callback);
  };
  executor(resolve, reject);
}

const doWork = (res, rej) => {
  setTimeout(() => {
    res("hello world");
  }, 1000);
};

let someText = new CustomePromise(doWork);
someText.then((res) => {
  console.log(res);
});
