var minOperations = function(nums) {
    const n = nums.length;
    const set = new Set(nums);
    const distinctNums = Array.from(set).sort((a, b) => a - b);
    const targetLen = distinctNums.length;

    let left = 0;
    let right = 0;
    let maxLen = 0;

    while (right < targetLen) {
        while (distinctNums[right] - distinctNums[left] > n - 1) {
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return n - maxLen;
};

const nums = [8, 5, 9, 9, 8, 4];
console.log(minOperations(nums));  // Output: 2
