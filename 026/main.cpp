#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (!nums.size()) return 0;
        int slow = 1;
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[i - 1]) {
                nums[slow++] = nums[i];
            }
        }
        return slow;
    }
};

int main()
{
    Solution sol;
    vector <int> nums;
    nums.push_back(1);
    nums.push_back(1);
    nums.push_back(2);
    int res = sol.removeDuplicates(nums);
    cout << res << endl;
    return 0;
}
