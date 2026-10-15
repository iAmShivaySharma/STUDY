/*
 * Problem  : Rearrange 0s and 1s
 * Pattern  : Two Pointers
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrange = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        while (l < r && nums[l] !== 1) l++;
        while (l < r && nums[r] !== 0) r--;
        if (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
    return nums;
};

/* ────────── Test ────────── */
console.log(rearrange([1, 0, 1, 0, 0, 1, 0]));
