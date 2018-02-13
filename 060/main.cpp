#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    string getPermutation(int n, int k) {
        vector<int> v;
        int fac[n];
        string res = "";
        for (int i = 0; i < n; i++) {
            v.push_back(i + 1);
        }
        fac[0] = 1;
        for (int i = 1; i < n; i++) {
            fac[i] = fac[i - 1] * i;
        }
        k--;
        for (int i = n - 1; i >= 0; i--) {
            int num = k / fac[i];
            res += v[num] + '0';
            v.erase(v.begin() + num);
            k = k % fac[i];
        }
        return res;
    }
};

int main()
{
    Solution sol;
    string res = sol.getPermutation(4, 4);
    cout << res << endl;
    return 0;
}
