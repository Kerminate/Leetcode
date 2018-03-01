#include <iostream>
#include <string.h>
#include <vector>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        int len = s.size();
        vector<char> arr;
        for (int i = 0; i < len; i++) {
            arr.push_back(s[i]);
            int ll = arr.size();
            if (ll > 1 && judge(arr[ll - 2], arr[ll - 1])) {
                arr.pop_back();
                arr.pop_back();
            }
        }
        if (!arr.size()) return true;
        else return false;
    }
private:
    bool judge(char s1, char s2) {
        if ((s1 == '[' && s2 == ']') || (s1 == '(' && s2 == ')') || (s1 == '{' && s2 == '}')) return true;
        else return false;
    }
};

int main()
{
    Solution sol;
    string str = "()[]{}";
    bool ans = sol.isValid(str);
    cout << ans << endl;
    return 0;
}
