// [-4,-3,0,4,5] ==> [-4,4]

function sumZero(ar) {

     let left = 0, right = ar.length - 1;

     while (left < right) {
          let sum = ar[left] + ar[right];
          if (sum === 0) {
               return [ar[left], ar[right]]
          } else if (sum > 0) {
               right--;
          } else {
               left++
          }
     }
}

console.log(sumZero([-6,-6,-3,0,4,5]))