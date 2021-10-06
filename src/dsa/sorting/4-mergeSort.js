function merge(a, b) {
     let results = [];
     let i = 0, j = 0;
     while (i < a.length && j < b.length) {
          if (b[j] > a[i]) {
               results.push(a[i++])
               // i++;
          } else {
               results.push(b[j++])
               // j++;
          }
     }
     while (i < a.length) {
          results.push(a[i++])
          // i++;
     }
     while (j < b.length) {
          results.push(b[j++]);
          // j++;
     }
     return results;
}

function mergeSort(a) {
     // console.log(a)
     if (a.length <= 1) return a;
     let mid = Math.floor(a.length / 2)
     let left = mergeSort(a.slice(0, mid))
     let right = mergeSort(a.slice(mid))
     return merge(left, right)
}

console.log('==============Merge sort==================', mergeSort([-110, 2, 4, -1, 5]))
console.log('==============Merge sort==================', mergeSort(Array.from(Array(100000)).map(x=>Math.random())))
