#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

class Solution {
public:
    int reverse(int x) {
        long long P1 = pow(2, 31) - 1;
        long long P2 = -pow(2, 31);
        if (x == 0) return 0;
        bool flag = false;
        if (x < 0) {
            x = -x;
            flag = true;
        }
        vector<int> v;
        int a;
        while (x) {
            a = x % 10;
            v.push_back(a);
            x = x / 10;
        }
        long long ans = 0;
        for (int i = 0; i < v.size(); i++) {
            if (i == 0 && v[i] == 0) continue;
            ans = ans * 10 + v[i];
        }
        if (flag) ans = -ans;
        if (ans > P1 || ans < P2) return 0;
        return ans;
    }
};

int main()
{
    Solution sol;
    int ans = sol.reverse(1147483647);
    cout << ans << endl;
    return 0;
}
