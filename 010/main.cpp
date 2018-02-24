#include <iostream>
#include <string.h>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        int slen = s.size();
        int plen = p.size();
        bool match[slen + 1][plen + 1];
        memset(match, 0, sizeof(match));
        match[0][0] = true;
        for (int i = 1; i <= slen; i++) match[i][0] = false;
        for (int i = 1; i <= plen; i++) {
            if (p[i - 1] == '*') {
                match[0][i] = match[0][i - 2];
            }
        }
        for (int i = 1; i <= slen; i++) {
            for (int j = 1; j <= plen; j++) {
                if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) match[i][j] = match[i - 1][j - 1];
                else if (p[j - 1] == '*') {
                    if (p[j - 2] == s[i - 1] || p[j - 2] == '.') match[i][j] = match[i][j - 2] || match[i - 1][j];
                    else match[i][j] = match[i][j - 2];
                }
            }
        }
        return match[slen][plen];
    }
};

int main()
{
    Solution sol;
    bool res = sol.isMatch("aab", "c*a*b");
    cout << res << endl;
    return 0;
}
