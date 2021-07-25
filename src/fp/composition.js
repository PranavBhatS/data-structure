const compose = (f, g) => (data) => f(g(data))

const multiplyBy3 = num => 3 * num;

const makePositive = num => Math.abs(num);

const multiplyBy3AndAbsolute = compose(makePositive, multiplyBy3)


console.log(multiplyBy3AndAbsolute(-50));