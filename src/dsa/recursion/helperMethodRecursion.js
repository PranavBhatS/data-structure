function getOddElementsInArray(arr) {
     let oddList = []
     function oddListHelper(arr) {
          if (arr.length === 0) return
          if (arr[0] % 2 !== 0) {
               oddList.push(arr[0])
          }
          return oddListHelper(arr.slice(1))
     }
     oddListHelper(arr)
     return oddList;
}
console.log(getOddElementsInArray([1, 2, 3, 4, 5, 6]))