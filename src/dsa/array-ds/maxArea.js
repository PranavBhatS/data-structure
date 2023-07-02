/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let xPointer = 0; let yPointer = height.length-1;
    while (xPointer < yPointer) {
      if (height[xPointer] > height[yPointer]) {
        let tempMax = height[yPointer] * (yPointer - xPointer);
        max = Math.max(max, tempMax);
        yPointer--;
      } else {
        let tempMax = height[xPointer] * (yPointer - xPointer);
        max = Math.max(max, tempMax);
        xPointer++;
      }
    }
    return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
