#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void sortColors(vector<int>& nums) {
        int p1 = 0;
        int p2 = nums.size() - 1;
        while (nums[p1] == 0) p1++;
        while (nums[p2] == 2) p2--;
        int i = p1;
        while (i <= p2 && p1 <= p2) {
            if (nums[i] == 0) {
                nums[i++] = nums[p1];
                nums[p1] = 0;
                while (nums[p1] == 0) p1++;
            } else if (nums[i] == 2) {
                nums[i] = nums[p2];
                nums[p2] = 2;
                while (nums[p2] == 2) p2--;
            } else i++;
        }
    }
};

int main()
{
    Solution sol;
    vector<int> nums;
    nums.push_back(2);
    nums.push_back(0);
    nums.push_back(0);
    sol.sortColors(nums);
    return 0;
}
