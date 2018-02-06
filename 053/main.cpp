#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

class Solution
{
  public:
    int maxSubArray(vector<int> &nums)
    {
        int maxToCur = nums[0];
        int res = nums[0];
        for (int i = 1; i < nums.size(); i++)
        {
            maxToCur = max(maxToCur + nums[i], nums[i]);
            res = max(res, maxToCur);
        }
        return res;
    }
};

int main()
{
    Solution sol;
    int res;
    vector<int> nums;
    nums.push_back(-2);
    nums.push_back(1);
    nums.push_back(-3);
    nums.push_back(4);
    nums.push_back(-1);
    nums.push_back(2);
    nums.push_back(1);
    nums.push_back(-5);
    nums.push_back(4);
    res = sol.maxSubArray(nums);
    cout << res << endl;
    return 0;
}
