#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> res;
        double ans;
        for (int i = 0; i < nums1.size(); i++) {
            res.push_back(nums1[i]);
        }
        for (int i = 0; i < nums2.size(); i++) {
            res.push_back(nums2[i]);
        }
        sort(res.begin(), res.end());
        int len = res.size();
        if (len % 2 == 1) ans = res[len / 2];
        else ans = (res[len / 2 - 1] + res[len / 2]) * 1.0 / 2;
        return ans;
    }
};

int main()
{
    Solution sol;
    vector<int> nums1, nums2;
    nums1.push_back(1);
    nums1.push_back(3);
    nums2.push_back(2);
    nums2.push_back(4);
    double ans = sol.findMedianSortedArrays(nums1, nums2);
    cout << ans << endl;
    return 0;
}
