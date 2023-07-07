/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = (nums, val) => {
  let withUnderScore = [];
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }
  return j;
};

console.log(removeElement([3, 2, 2, 3], 3));
