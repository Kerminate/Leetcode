#include <iostream>
#include <math.h>
#include <vector>
using namespace std;

class Solution
{
  public:
    bool canJump(vector<int> &nums)
    {
        int len = nums.size();
        if (len < 2)
            return true;
        int reach = 0;
        for (int i = 0; i < len && i <= reach; i++)
        {
            reach = max(reach, nums[i] + i);
            if (reach >= len - 1)
                return true;
        }
        return false;
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
    bool is = sol.canJump(v);
    cout << is << endl;
    return 0;
}
