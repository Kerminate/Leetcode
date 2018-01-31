#include <iostream>
#include <set>
#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int> > permute(vector<int>& nums) {
        vector<vector<int> > res;
        vector<int> arr;
        set<int> s;
        if (nums.size() == 0) return res;
        dfs(res, arr, s, nums);
        return res;
    }

    void dfs(vector<vector<int> >& res, vector<int>& arr, set<int>& s, vector<int>& nums) {
        if (arr.size() == nums.size()) {
            res.push_back(arr);
        } else {
            for (int i = 0; i < nums.size(); i++) {
                if (s.find(nums[i]) == s.end()) {
                    arr.push_back(nums[i]);
                    s.insert(nums[i]);
                    dfs(res, arr, s, nums);
                    arr.pop_back();
                    s.erase(nums[i]);
                }
            }
        }
    }
};

int main()
{
    Solution sol;
    vector<vector<int> > doc;
    vector<int> nums;
    nums.push_back(1);
    nums.push_back(2);
    nums.push_back(3);
    doc = sol.permute(nums);
    for (int i = 0; i < doc.size(); i++) {
        for (int j = 0; j < doc[i].size(); j++) {
            cout << doc[i][j] << ' ';
        }
        cout << endl;
    }
    return 0;
}
