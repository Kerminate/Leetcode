#include <iostream>
#include <string.h>
using namespace std;

class Solution {
public:
    string intToRoman(int num) {
        string firstDigit[11] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
        string secondDigit[11] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        string thirdDigit[11] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
        string fourthDigit[11] = {"", "M", "MM", "MMM"};
        string arr[5];
        int i4 = num / 1000;
        arr[0] = fourthDigit[i4];
        num = num % 1000;
        int i3 = num / 100;
        arr[1] = thirdDigit[i3];
        num = num % 100;
        int i2 = num / 10;
        arr[2] = secondDigit[i2];
        num = num % 10;
        int i1 = num %10;
        arr[3] = firstDigit[i1];
        string res = "";
        for (int i = 0; i < 4; i++) {
            res += arr[i];
        }
        return res;
    }
};

int main()
{
    Solution sol;
    string res = sol.intToRoman(3999);
    cout << res << endl;
    return 0;
}
