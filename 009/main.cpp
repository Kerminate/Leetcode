#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        if (x == 0) return true;
        if (x < 0) return false;
        vector<int> arr;
        int mid;
        while (x) {
            mid = x % 10;
            arr.push_back(mid);
            x = x / 10;
        }
        bool flag = true;
        int len = arr.size();
        if (len % 2 == 0) {
            for (int i = 0; i < len / 2; i++) {
                if (arr[len / 2 - i - 1] != arr[len / 2 + i]) {
                    flag = false;
                    break;
                }
            }
        } else {
            for (int i = 0; i < len / 2 + 1; i++) {
                if (arr[len / 2 - i] != arr[len / 2 + i]) {
                    flag = false;
                    break;
                }
            }
        }
        return flag;
    }
};

int main()
{
    Solution sol;
    bool res = sol.isPalindrome(100);
    cout << res << endl;
    return 0;
}
