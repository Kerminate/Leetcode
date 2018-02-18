#include <iostream>
#include <string.h>
using namespace std;

class Solution {
public:
    string addBinary(string a, string b) {
        int len1 = a.size();
        int len2 = b.size();
        int num;
        int dif;
        string res = "";
        string ss = "";
        if (len1 > len2) {
            num = len1;
            dif = len1 - len2;
            while (dif--) {
                b = "0" + b;
            }
        } else {
            num = len2;
            dif = len2 - len1;
            while (dif--) {
                a = "0" + a;
            }
        }
        cout << a << " " << b << endl;
        int flag = 0;
        int mid;
        for (int i = num - 1; i >= 0; i--) {
            mid = (a[i] - '0') + (b[i] - '0') + flag;
            if (mid >= 2) {
                mid -= 2;
                flag = 1;
            } else {
                flag = 0;
            }
            ss = mid + '0';
            res = ss + res;
        }
        if (flag) res = "1" + res;
        return res;
    }
};

int main()
{
    Solution sol;
    string a = "11";
    string b = "1";
    string res = sol.addBinary(a, b);
    cout << res << endl;
    return 0;
}
