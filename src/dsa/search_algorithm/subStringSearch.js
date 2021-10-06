// abcd bc
function subStringSearch(main, sub) {
     let start = 0
     while (start <= main.length - sub.length) {
          if(main.substr(start,sub.length) === sub) {
               return [true,start];
          }
          ++start;
     }
     return false;
}

console.log("subStringSearch",subStringSearch("abcd","ac"))


// or else we can use kmp algorithm