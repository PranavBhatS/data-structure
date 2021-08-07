function firstRecurringChar(arr) {
     return arr.find((v,i,a)=>{
          return a.lastIndexOf(v) !== i;//indexOf 
     })
     // let charSet = new Set();
     // return arr.find(val => charSet.has(val) || !charSet.add(val));
}
console.log(firstRecurringChar([1,1]))