#include <iostream>
#include <string.h>
using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1) return s;
        int len = s.size();
        int dis = 2 * numRows - 2;
        string sub = "";
        int i = 0;
        int j = 1;
        while (i < len) {
            sub += s[i];
            i += dis;
        }
        while (j < numRows - 1) {
            i = j;
            bool flag = true;
            while (i < len) {
                sub += s[i];
                if (flag) {
                    i += dis - 2 * j;
                    flag = false;
                } else {
                    i += 2 * j;
                    flag = true;
                }
            }
            j++;
        }
        i = numRows - 1;
        while (i < len) {
            sub += s[i];
            i += dis;
        }
        return sub;
    }
};

int main()
{
    Solution sol;
    string res = sol.convert("PAYPALISHIRING", 3);
    cout << res << endl;
    return 0;
}
