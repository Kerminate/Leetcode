#include <iostream>
#include <math.h>
#include <vector>
using namespace std;

class Solution
{
  public:
    int jump(vector<int> &nums)
    {
        int len = nums.size();
        if (len < 2)
            return 0;
        int curMax = 0;
        int nextMax = 0;
        int step = 0;
        int index = 0;
        while (index <= curMax)
        {
            while (index <= curMax)
            {
                nextMax = max(nextMax, nums[index] + index);
                index++;
            }
            step++;
            curMax = nextMax;
            if (curMax >= len - 1)
                return step;
        }
        return 0;
    }
};

int main()
{
    Solution sol;
    vector<int> v;
    v.push_back(2);
    v.push_back(3);
    v.push_back(1);
    v.push_back(1);
    v.push_back(4);
    int res = sol.jump(v);
    cout << res << endl;
    return 0;
}
