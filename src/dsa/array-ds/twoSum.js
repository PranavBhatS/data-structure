/**
 *
 *  
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]


    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumBrutForce = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
};


const twoSumTwoPointer = (nums, target) => {
  nums = nums.sort((a, b) => a - b)
  let x = 0; let y = nums.length-1;
  while (x < y) {
    let sum = nums[x] + nums[y]
    if (sum === target) {
      return true;
    } else if (sum < target) {
      x++;
    } else {
      y--;
    }
  }
  return false;
}

const twoSumTwoMap = (nums, target) => {
  let vals = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
     if (vals.has(target - n)) {
       return [vals.get(target - n), i];
     } else {
       vals.set(n, i);
     }
  }
};

console.log(twoSumTwoMap([-1, -2, -3, -4, -5], -8));
