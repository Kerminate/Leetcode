#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;

class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int len = nums.size();
        sort(nums.begin(), nums.end());
        int res = nums[0] + nums[1] + nums[2];
        int min = abs(res - target);
        if (len == 3) return res;
        for (int i = 0; i < len; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int start = i + 1;
            int end = len - 1;
            while (start < end) {
                int sum = nums[i] + nums[start] + nums[end];
                if (abs(sum - target) <= min) {
                    min = abs(sum - target);
                    res = sum;
                    if (sum < target) start++;
                    else end--;
                } else if (sum > res) end--;
                else if (sum < res) start++;
            }
        }
        return res;
    }
};

int main()
{
    Solution sol;
    vector<int> nums;
    nums.push_back(-1);
    nums.push_back(2);
    nums.push_back(1);
    nums.push_back(4);
    int res = sol.threeSumClosest(nums, 1);
    cout << res << endl;
    return 0;
}
