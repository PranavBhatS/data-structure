/**
 * @advantages  no need to swap very time.
 * @description assign to minPos index of lowest value. And at last swap ith index and minPos values.
 * @param {*} ar
 * @return {*} ar
 */
function selectionSort(ar) {
     let arLength = ar.length;
     for (let i = 0; i < arLength - 1; i++) {
          let minPos = i
          for (let j = i + 1; j < arLength; j++) {
               if (ar[minPos] > ar[j]) {
                    minPos = j;
               }
          }
          if (minPos !== i) {
               [ar[i], ar[minPos]] = [ar[minPos], ar[i]];
          }
     }
     return ar;
}

console.log('==============selection sort==================', selectionSort([10, 2, 4, 1, 5]))
