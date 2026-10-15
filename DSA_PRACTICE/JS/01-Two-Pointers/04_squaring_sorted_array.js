/*
 * Problem  : Squares of a Sorted Array
 * Pattern  : Two Pointers
 * Link     : https://leetcode.com/problems/squares-of-a-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0;
    while (l < nums.length) {
        nums[l] = nums[l] * nums[l];
        l++;
    }
    return nums;
};

/* ────────── Test ────────── */
console.log(sortedSquares([1, 3, 5, 6, 7, 8, 9]));
