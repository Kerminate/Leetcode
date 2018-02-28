#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int> > fourSum(vector<int>& nums, int target) {
        int len = nums.size();
        vector<vector<int> > res;
        vector<int> arr;
        if (len == 0) return res;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < len; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            for (int j = i + 1; j < len; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;
                int start = j + 1;
                int end = len - 1;
                while (start < end) {
                    if (nums[i] + nums[j] + nums[start] + nums[end] == target) {
                        arr.clear();
                        arr.push_back(nums[i]);
                        arr.push_back(nums[j]);
                        arr.push_back(nums[start]);
                        arr.push_back(nums[end]);
                        res.push_back(arr);
                        while (start < end && nums[start] == nums[start + 1]) start++;
                        while (start < end && nums[end] == nums[end - 1]) end--;
                        start++;
                        end--;
                    } else if (nums[i] + nums[j] + nums[start] + nums[end] > target) {
                        while (start < end && nums[end] == nums[end - 1]) end--;
                        end--;
                    } else {
                        while (start < end && nums[start] == nums[start + 1]) start++;
                        start++;
                    }
                }
            }
        }
        return res;
    }
};

int main()
{
    Solution sol;
    vector<int> nums;
    nums.push_back(1);
    nums.push_back(0);
    nums.push_back(-1);
    nums.push_back(0);
    nums.push_back(-2);
    nums.push_back(2);
    vector<vector<int> > res;
    res = sol.fourSum(nums, 0);
    for (int i = 0; i < res.size(); i++) {
        for (int j = 0; j < res[i].size(); j++) {
            cout << res[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
