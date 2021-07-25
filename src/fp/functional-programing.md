1. what is functional progamming?
   ==> seperates data and functions.(separates data and behaviour).
   RUlES:
   => no side effect
   => same input same output

==> 1. should have single task. 2. should have return statement. 3. should pure 4. no shared state. 5. Immutable state. 6. Composable 7. Predictable result

2. When to use functional programing?
   ==> 1. Data processing 2. Concurrent System 3.High criticality Systems 4.Serverless

3. What is idempotence?
   ==> A function is said to be idempotent if it returns the same output for the same input or does what we expect it to do. Idempotence is different from pure function as it allows side effects. An example could be calling an API with an input and returning the same output no matter how many times it has been called.

4. Imperative vs declarative
   ==> Imperative it will tell what to do and how to do task.
   for loop
   ==> Declarative tells whats to do and what should happen.
   forEach

5. Immutability
   ` const obj ={name:"Pranav"} function clone(obj) { return {...obj} }`

structural sharing javascript

Referentail Transferency => Referential Transparency is the property that lets you replace an expression with its value, and not change the results of whatever you were doing.

persistent datastructures javascript

Currying

6. HOF
   const hof = ()=>()=>return 6;
   hof()()

7. closure
   const initCounter = () => {
   let counter = 0;
   return function increment() {
   return ++counter;
   }
   }

   let c1 = initCounter();
   console.log(c1())
   console.log(c1())

8. Currying

   - is a technique to translate the evaluation of a function that takes multiple argumennts into evaluating sequence of function each with single argumennt.
     Normal Function
     const multiply = (a, b) => {
     return a * b;
     }

   Using curry:
   const curriedMultiply = (a) => (b) => a * b;

   Using curriedMultiply function we can create multiple utility functions. For example:
   const multiplyByTwo = curriedMultiply(2);
   const multiplyByFive = curriedMultiply(5);
   console.log(multiplyByTwo(3),multiplyByFive(3))

9.Partial application
process of producing fun using smaller number of parameters.
The difference between curry and partial application is in curry it expect one arguement at a time, But in partial application on second call it expect all arguements.

     const multiply=(a,b,c)=>a*b*c;
     const partialMultiplyBy5 = multiply.bind(null,5);
     console.log(partialMultiplyBy5(2,10))

10. Memoization
    Memoization is a specific form of caching that involves caching the return value of a function based on its parameters.

    function addTo10(n) {
    console.log('long time')
    return n + 10;
    }
    let cache = {};
    function memoizeAddTo10(n) {
    if (n in cache) {
    return cache[n];
    }
    cache[n] = addTo10(n);
    return cache[n];
    }
    console.log(memoizeAddTo10(5))
    console.log(memoizeAddTo10(5))

    We can simplify above function by using closure.

    function memoizeAddTo10() {
    let cache = {};
    return function (n) {
    if (n in cache) {
    return cache[n];
    }
    cache[n] = addTo10(n);
    return cache[n];
    }
    }
    let memoize = memoizeAddTo10()

    console.log(memoize(5))
    console.log(memoize(5))
    console.log(memoize(6))

11. Composition

    const compose = (f, g) => (data) => f(g(data))
    const multiplyBy3 = num => 3 \* num;
    const makePositive = num => Math.abs(num);
    const multiplyBy3AndAbsolute = compose( makePositive,multiplyBy3)
    console.log(multiplyBy3AndAbsolute(-50));

12. Arity
    The term arity refers simply to the number of parameters in the definition of a function. This is casually expressed as how many arguments a function takes.
