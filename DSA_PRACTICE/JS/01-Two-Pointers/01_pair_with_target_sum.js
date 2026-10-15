/*
 * Problem  : Pair with Target Sum (Two Sum II)
 * Pattern  : Two Pointers
 * Link     : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

// Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum === target) {
            return [l, r];
        } else if (sum > target) {
            r--;
        } else {
            l++;
        }
    }
    return [l, r];
};

/* ────────── Test ────────── */
console.log(twoSum([1, 3, 4, 5, 8, 9], 11));
