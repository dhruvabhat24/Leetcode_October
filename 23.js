/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    var i = k, j = k, ans = nums[k], mini = nums[k];
    while (i > 0 || j < nums.length - 1) {
        if (i == 0)
            ++j;
        else if (j == nums.length - 1)
            --i;
        else if (nums[i - 1] < nums[j + 1])
            ++j;
        else
            --i;
        mini = Math.min(mini, Math.min(nums[i], nums[j]));
        ans = Math.max(ans, mini * (j - i + 1));
    }
    return ans;
};
