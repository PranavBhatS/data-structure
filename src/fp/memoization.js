function addTo80(n) {
     console.log('long time')
     return n + 80;
}



function memoizeAddTo80() {
     let cache = {};
     return function (n) {
          if (n in cache) {
               return cache[n];
          }
          cache[n] = addTo80(n);
          return cache[n];
     }

}

let memoize = memoizeAddTo80()

console.log(memoize(5))
console.log(memoize(5))
console.log(memoize(6))