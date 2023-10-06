class Solution {
    public int integerBreak(int n) {
         int[] dp = new int[n + 1];
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * (i - j));
            }
        }      
        return dp[n];
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        int n1 = 2;
        System.out.println(solution.integerBreak(n1));
        int n2 = 10;
        System.out.println(solution.integerBreak(n2));
    }
}
