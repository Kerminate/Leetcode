#include <iostream>
#include <cstring>
#include <vector>

using namespace std;

class Solution {
public:
    string multiply(string num1, string num2) {
        int len1 = num1.length();
        int len2 = num2.length();
        int arr[221];
        memset(arr, 0, sizeof(arr));
        for (int i = len1 - 1; i >= 0; i--) {
            for (int j = len2 - 1; j >= 0; j--) {
                int mid = (num1[i] - '0') * (num2[j] - '0');
                int high = i + j;
                int low = i + j + 1;
                mid += arr[low];
                arr[low] = mid % 10;
                arr[high] += mid / 10;
            }
        }
        string str;
        for (int i = 0; i < len1 + len2; i++) {
            if (str.length() == 0 && arr[i] == 0) continue;
            str += arr[i] + '0';
        }
        if (str.size() == 0) str = "0";
        return str;
    }
};

int main()
{
    Solution sol;
    string a = "12";
    string b = "23";
    string res = sol.multiply(a, b);
    cout << res << endl;
    return 0;
}
