// [1,2,2,3,1,4,4]===> 4
//it must be sorted array

function countUniqueValues(arr) {
     if (arr.length < 0) return 0;
     arr = arr.sort();
     let i = 0
     for (let j = 1; j < arr.length; j++) {
          const element = arr[j];
          if (arr[i] !== element) {
               i++;
               arr[i] = element;
          }
     }
     console.log(i)
     return i + 1;
}

countUniqueValues([1, 1,0])