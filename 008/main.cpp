#include <iostream>
#include <string.h>
#include <math.h>
using namespace std;

class Solution {
public:
    int myAtoi(string str) {
        int p1 = pow(2, 31) - 1;
        int p2 = -pow(2, 31);
        int len = str.size();
        int i = 0;
        while (i < len && str[i] == ' ') {
            i++;
        }
        bool flag = true;
        if (str[i] == '+') i++;
        else if (str[i] == '-') {
            flag = false;
            i++;
        }
        string ans = "";
        while (i < len && str[i] != ' ') {
            ans += str[i++];
        }
        long long res = 0;
        int mid, j;
        int tmp = 0;
        for (j = 0; j < ans.size(); j++) {
            mid = ans[j] - '0';
            if (mid >= 0 && mid <= 9) res = res * 10 + mid;
            else break;
        }
        if (j > 11) {
            if (flag) return p1;
            else return p2;
        }
        if (!flag) res = -res;
        if (res > p1) return p1;
        if (res < p2) return p2;
        return res;
    }
};

int main()
{
    Solution sol;
    int res = sol.myAtoi("9223372036854775809");
    cout << res << endl;
    return 0;
}
