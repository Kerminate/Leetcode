class Solution {
public:
    vector<vector<int> > permuteUnique(vector<int>& nums) {
        vector<vector<int> > res;
        vector<int> arr;
        set<int> s;
        if (nums.size() == 0) return res;
        sort(nums.begin(), nums.end());
        dfs(res, arr, s, nums);
        return res;
    }
    
    void dfs(vector<vector<int> >& res, vector<int>& arr, set<int>& s, vector<int>& nums) {
        if (arr.size() == nums.size()) {
            res.push_back(arr);
        } else {
            int pre = nums[0] - 1;
            for (int i = 0; i < nums.size(); i++) {
                if (s.find(i) == s.end() && pre != nums[i]) {
                    pre = nums[i];
                    arr.push_back(nums[i]);
                    s.insert(i);
                    dfs(res, arr, s, nums);
                    arr.pop_back();
                    s.erase(i);
                }
            }
        }
    }
};