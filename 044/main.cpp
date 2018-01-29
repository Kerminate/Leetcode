#include <iostream>
#include <cstring>
#include <vector>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        int len1 = s.length() + 1;
        int len2 = p.length() + 1;
        bool match[len1][len2];
        memset(match, false, sizeof(match));
        match[0][0] = true;
        for (int i = 1; i <= p.length(); i++) {
            if (p[i - 1] == '*') {
                match[0][i] = match[0][i - 1];
            }
        }
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 1; j <= p.length(); j++) {
                if (s[i - 1] == p[j - 1] || p[j - 1] == '?') {
                    match[i][j] = match[i - 1][j - 1];
                } else if (p[j - 1] == '*') {
                    match[i][j] = match[i][j - 1] || match[i - 1][j];
                }
            }
        }
        return match[s.length()][p.length()];
    }
};

int main()
{
    Solution sol;
    string a = "ab";
    string b = "ab*";
    bool res = sol.isMatch(a, b);
    cout << res << endl;
    return 0;
}
