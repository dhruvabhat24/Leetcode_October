class Solution {
int mod = 1_000_000_007;
private int dfs(int n, int m, int k, int i, int max, int cost, Integer[][][]dp){
if(i==n){
if(k==cost){
return 1;
}
return 0;
}

    if(dp[i][max][cost] != null) return dp[i][max][cost];

    int ans=0;
    for(int num=1; num<=m; num++){
        int newCost = cost;
        int newMax = max;
        if(num>max){
            newCost++;
            newMax = num;
        }

        if(newCost>k) break;
        ans += dfs(n, m, k, i+1, newMax, newCost, dp);
        ans%=mod;
    }

    return dp[i][max][cost]=ans;
}

public int numOfArrays(int n, int m, int k) {
    Integer[][][] dp = new Integer[n+1][m+1][k+1]; // Initilization of DP-Array
    return dfs(n, m, k, 0, 0, 0, dp);
}
