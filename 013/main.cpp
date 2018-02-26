#include <iostream>
#include <map>
#include <string.h>
using namespace std;

class Solution {
public:
    int romanToInt(string s) {
        map<char, int> m;
        m['I'] = 1;
        m['V'] = 5;
        m['X'] = 10;
        m['L'] = 50;
        m['C'] = 100;
        m['D'] = 500;
        m['M'] = 1000;
        int sum = 0;
        int len = s.size();
        for (int i = 0; i < len - 1; i++) {
            if (m[s[i]] < m[s[i + 1]]) sum -= m[s[i]];
            else sum += m[s[i]];
        }
        sum += m[s[len - 1]];
        return sum;
    }
};

int main()
{
    Solution sol;
    int res = sol.romanToInt("XCIX");
    cout << res << endl;
    return 0;
}
