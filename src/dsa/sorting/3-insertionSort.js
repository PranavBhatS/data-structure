/**
 * @advantages  no need of extra variable.
 *
 * @param {*} ar
 * @return {*} sorted array
 */
function insertionSort(ar) {
     for (let index = 0; index < ar.length; index++) {
          const current = ar[index]; //-Infinity
          let j = index - 1;
          while (j >= 0 && ar[j] > current) {
               ar[j + 1] = ar[j];
               j--;
          }
          ar[j + 1] = current;
     }

     return ar;
}
console.log('==============Insertion sort==================', insertionSort([-110, 2, 4, -1, 5]))