function bubbleSort(ar) {
     let arLength = ar.length;
     for (let i = 0; i < arLength-1; i++) {
          for (let j = i + 1; j < arLength; j++) {
               if (ar[i] > ar[j]) {
                    let temp = ar[i];
                    ar[i] = ar[j];
                    ar[j] = temp;
               }
          }
     }
     return ar;
}


function bubbleSortOptimised(ar) {
     for (let i = ar.length; i > 0; i--) {
          let noSwap = true;
          for (let j = 0; j < i - 1; j++) {
               if (ar[j] > ar[j + 1]) {
                    let temp = ar[j];
                    ar[j] = ar[j + 1];
                    ar[j + 1] = temp;
                    noSwap = false;
               }
          }
          if (noSwap) {
               break;
          };
     }
     return ar
}



const swap = (ar, i, j) => [ar[i], ar[j]] = [ar[j], ar[i]]

// console.log('==============Bubble sort==================', bubbleSort([10, 2, 4, 1, 5]))
// console.log("=========")
// console.log('==============Bubble sort optimised==================', bubbleSortOptimised([10, 2, 4, 1, 5]))

console.log('==============Bubble sort Damage==================', bubbleSort(Array.from(Array(100000)).map(x=>Math.random())))
