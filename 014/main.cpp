#include <iostream>
#include <string.h>
#include <vector>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ss = "";
        if (strs.size() ==0 || strs[0].size() == 0) return ss;
        for (int i = 0; i < strs[0].size(); i++) {
            char mid = strs[0][i];
            bool tmp = false;
            for (int j = 0; j < strs.size(); j++) {
                if (strs[j][i] != mid) {
                    tmp = true;
                    break;
                }
            }
            if (tmp) break;
            ss += mid;
        }
        return ss;
    }
};

int main()
{
    Solution sol;
    vector<string> strs;
    strs.push_back("ab");
    strs.push_back("abb");
    strs.push_back("abc");
    string res = sol.longestCommonPrefix(strs);
    cout << res << endl;
    return 0;
}
