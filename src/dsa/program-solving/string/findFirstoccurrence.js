/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * 
 * 
 * Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

*  Example 2:

    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
//  return haystack.indexOf(needle)
  let h = haystack.length;
  let n = needle.length;
  let cur = 0;
  for (let i = 0; i < h; i++) {
    //as long as chars are equal increment cur
    if (haystack[i] === needle[cur]) {
      cur++;
    } else {
      // start from the next index of previous start index
      i = i - cur;
      // needle should start from index 0
      cur = 0;
    }

    // check if needleIndex reached needle length
    if (cur == n) {
      // return the first index
      return i - n + 1;
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
