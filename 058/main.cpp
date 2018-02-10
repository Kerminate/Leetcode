#include <iostream>

using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        if (s.size() == 0) return 0;
        int count = 0;
        for (int i = s.size() - 1; i >= 0; i--) {
            if (s[i] == ' ' && count == 0) continue;
            if (s[i] == ' ' && count != 0) break;
            if (s[i] != ' ') count++;
        }
        return count;
    }
};

int main()
{
    Solution sol;
    string s = "hello world";
    int res;
    res = sol.lengthOfLastWord(s);
    cout << res;
    return 0;
}
