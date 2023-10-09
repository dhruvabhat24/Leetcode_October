var maxDotProduct = function(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(-Infinity));
    
    dp[0][0] = nums1[0] * nums2[0];
    
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], nums1[i] * nums2[0]);
    }
    
    for (let j = 1; j < m; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], nums1[0] * nums2[j]);
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.max(nums1[i] * nums2[j], nums1[i] * nums2[j] + dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
        }
    }   
    return dp[n - 1][m - 1];
};
const nums1 = [2, 1, -2, 5];
const nums2 = [3, 0, -6];
console.log(maxDotProduct(nums1, nums2));  

const nums3 = [3, -2];
const nums4 = [2, -6, 7];
console.log(maxDotProduct(nums3, nums4));  

