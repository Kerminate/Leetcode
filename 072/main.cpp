#include <iostream>
#include <string.h>
#include <math.h>
using namespace std;

class Solution {
public:
    int minDistance(string word1, string word2) {
        int len1 = word1.size();
        int len2 = word2.size();
        if (!len1) return len2;
        if (!len2) return len1;
        int dp[len1 + 1][len2 + 1];
        dp[0][0] = 0;
        for (int i = 1; i <= len1; i++) dp[i][0] = i;
        for (int i = 1; i <= len2; i++) dp[0][i] = i;
        for (int i = 1; i <= len1; i++) {
            for (int j = 1; j <= len2; j++) {
                if (word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
                else {
                    int tmp = min(dp[i - 1][j], dp[i][j - 1]);
                    dp[i][j] = min(tmp, dp[i - 1][j - 1]) + 1;
                }
            }
        }
        return dp[len1][len2];
    }
};

int main()
{
    Solution sol;
    string a = "ab";
    string b = "bc";
    int res = sol.minDistance(a, b);
    cout << res << endl;
    return 0;
}
