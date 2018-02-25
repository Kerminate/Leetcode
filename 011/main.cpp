#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int len = height.size();
        int i = 0;
        int j = len - 1;
        int ans = (j - i) * min(height[i], height[j]);
        int tmp;
        while (i < j) {
            int hi = height[i];
            int hj = height[j];
            if (hi < hj) {
                while (hi < hj && i < j) {
                    i++;
                    hi = height[i];
                    tmp = (j - i) * min(hi, hj);
                    if (tmp > ans) ans = tmp;
                }
            } else {
                while (hi >= hj && i < j) {
                    j--;
                    hj = height[j];
                    tmp = (j - i) * min(hi, hj);
                    if (tmp > ans) ans = tmp;
                }
            }
        }
        return ans;
    }
};

int main()
{
    Solution sol;
    vector<int> height;
    height.push_back(1);
    height.push_back(2);
    height.push_back(3);
    height.push_back(4);
    int res = sol.maxArea(height);
    cout << res << endl;
    return 0;
}
