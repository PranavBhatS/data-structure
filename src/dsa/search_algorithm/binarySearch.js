/** 
1. function is accept only sorted array.
2. create pointer left at start of array and right pointer at end of array.
3. left<right
*/

function binarySearch(arr, x, start = 0, end = arr.length) {
     // If the item does not exist, return -1
     if (end < start) return -1;

     // Calculate middle index of the array
     let mid = Math.floor((start + end) / 2);

     // Is the middle a match?
     if (arr[mid] === x) return mid;
     // Is the middle less than x
     if (arr[mid] < x) return binarySearch(arr, x, mid + 1, end);
     // Else the middle is more than x
     else return binarySearch(arr, x, start, mid - 1);
}

console.log('binarySearch', binarySearch([1, 2, 3, 4], 5))