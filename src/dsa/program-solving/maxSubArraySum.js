function maxSubArraySum(ar, subLength) {
     if (ar.length < subLength) return null;
     let maxSum = 0, tempSum = 0;
     for (let j = 0; j < subLength; j++) {
          maxSum += ar[j];
     }
     tempSum = maxSum;

     for (let i = subLength; i < ar.length; i++) {
          tempSum = tempSum - ar[i - subLength] + ar[i];
          maxSum = Math.max(maxSum, tempSum);
     }
     return maxSum;
}


console.log(maxSubArraySum([5, 20, 8, 4, 5, 6, 1, 20], 3))