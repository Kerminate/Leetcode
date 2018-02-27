#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int> > threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int len = nums.size();
        vector<vector<int> > res;
        vector<int> arr;
        for (int i = 0; i < len; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int target = nums[i];
            int start = i + 1;
            int end = len - 1;
            while (start < end) {
                int sum = nums[start] + nums[end];
                if (target + sum == 0) {
                    arr.clear();
                    arr.push_back(target);
                    arr.push_back(nums[start]);
                    arr.push_back(nums[end]);
                    res.push_back(arr);
                    while (start < end && nums[start] == nums[start + 1]) start++;
                    while (start < end && nums[end] == nums[end - 1]) end--;
                    start++;
                    end--;
                } else if (target + sum < 0) {
                    while (start < end && nums[start] == nums[start + 1]) start++;
                    start++;
                } else {
                    while (start < end && nums[end] == nums[end - 1]) end--;
                    end--;
                }
            }
        }
        return res;
    }
};

int main()
{
    Solution sol;
    vector<vector<int> > res;
    vector<int> nums;
    nums.push_back(-1);
    nums.push_back(0);
    nums.push_back(1);
    nums.push_back(2);
    nums.push_back(-1);
    nums.push_back(-4);
    res = sol.threeSum(nums);
    for (int i = 0; i < res.size(); i++) {
        for (int j = 0; j < res[i].size(); j++) {
            cout << res[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
