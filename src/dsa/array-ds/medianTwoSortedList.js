/**
 *
 * @param {Number[]} l
 * @param {Number[]} r
 * @returns {Number[]}
 */
const merge = (l, r) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < l.length && j < r.length) {
    if (r[j] > l[i]) {
      result.push(l[i++]);
    } else {
      result.push(r[j++]);
    }
  }
  while (i < l.length) {
    result.push(l[i++]);
  }
  while (j < r.length) {
    result.push(r[j++]);
  }
  return result;
};
/**
 *
 * @param {Array} ar
 */
const mergeSort = (ar) => {
  if (ar.length <= 1) return ar;
  return merge(
    mergeSort(ar.slice(0, Math.floor(ar.length / 2))),
    mergeSort(ar.slice(Math.floor(ar.length / 2)))
  );
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const combined = [...nums1, ...nums2];
  const sortedList = mergeSort(combined);
  const middle = Math.floor(sortedList.length / 2);
  let median = 0;
  if (sortedList.length % 2 === 0) {
    median = (sortedList[middle] + sortedList[middle - 1]) / 2;
  } else {
    median = sortedList[middle];
  }
  return median;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
