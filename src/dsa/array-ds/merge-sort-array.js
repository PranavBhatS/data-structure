
function mergeSortArray(ar1, ar2) {
     // return [...ar1,...ar2].sort();

     const mergedArray = [];
     let arr1Item = ar1[0];
     let arr2Item = ar2[0];
     let i = 1, j = 1;
     // check inputs

     while (arr1Item || arr2Item) {
          console.log(arr1Item, arr2Item)
          if (!arr2Item || arr1Item < arr2Item) {
               mergedArray.push(arr1Item)
               arr1Item = ar1[i];
               i++
          } else {
               mergedArray.push(arr2Item);
               arr2Item = ar2[j];
               j++;
          }
     }

     return mergedArray
}

console.log(mergeSortArray([3, 1, 0], [1, 2, 4]))