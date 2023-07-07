/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    //try to find index if it exists
    let index = 0;
    for (index = 0; index < nums.length; index++) {
        const cur = nums[index];
        if (cur === target) return index
        if (cur > target) {
            return index
        }
    }
    return nums.length

};

console.log(searchInsert([1, 3, 5, 6],7));