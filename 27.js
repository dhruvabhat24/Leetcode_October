/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const mod = 10 ** 9 + 7;
    
    arr.sort((a, b) => a - b);
    
    const dp = {};
    
    for (const num of arr) {
        dp[num] = 1;
    }
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] % arr[j] === 0) {
                const k = arr[i] / arr[j];
                if (dp[k]) {
                    dp[arr[i]] = (dp[arr[i]] + dp[arr[j]] * dp[k]) % mod;
                }
            }
        }
    }
    
    let ans = 0;
    Object.values(dp).forEach(v => ans += v);
    return ans % mod;
};
