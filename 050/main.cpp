#include <iostream>

using namespace std;

class Solution {
public:
    double myPow(double x, int n) {
        if (x == 1 || n == 0) return 1;
        if (n == 1) return x;
        // use -(n + 1) to avoid MIN_VALUE case
        if (n < 0) return 1.0 / (x * myPow(x, -(n + 1)));
        double res = 1;
        double num = x;
        while (n > 1) {
            if (n % 2 == 1) {
                res *= num;
                n--;
            } else {
                num *= num;
                n /= 2;
            }
        }
        return res * num;
    }
};

int main()
{
    Solution sol;
    double res = sol.myPow(2.0000, -1);
    cout << res << endl;
    return 0;
}
