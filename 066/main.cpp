#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int len = digits.size();
        int flag = 1;
        for (int i = len - 1; i >= 0; i--) {
            if (digits[i] == 9 && flag) {
                digits[i] = 0;
            } else if (flag) {
                digits[i]++;
                flag = 0;
            } else {
                flag = 0;
                break;
            }
        }
        if (flag) digits.insert(digits.begin(), 1);
        return digits;
    }
};

int main()
{
    Solution sol;
    vector<int> digits;
    digits.push_back(9);
    digits.push_back(9);
    digits.push_back(9);
    vector<int> res = sol.plusOne(digits);
    for (int i = 0; i < res.size(); i++) {
        cout << res[i] << " ";
    }
    return 0;
}
