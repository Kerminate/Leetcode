#include <iostream>
#include <string.h>
#include <set>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int len = s.size();
        if (!len) return 0;
        int max = 1;
        for (int i = 0; i < len; i++) {
            set<char> dup;
            int j = 0;
            while (dup.size() == j && i + j <= len) {
                dup.insert(s[i + j]);
                j++;
            }
            if (max < j) max = j - 1;
        }
        return max;
    }
};

int main()
{
    Solution sol;
    string s = "au";
    int m = sol.lengthOfLongestSubstring(s);
    cout << m;
    return 0;
}
