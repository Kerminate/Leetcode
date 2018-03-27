#include <bits/stdc++.h>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    int maxPathSum(TreeNode* root) {
        int ans = INT_MIN;
        maxPath(root, ans);
        return ans;
    }
private:
    int maxPath (TreeNode* root, int &ans) {
        if (!root) return 0;
        int l = max(maxPath(root->left, ans), 0);
        int r = max(maxPath(root->right, ans), 0);
        int sum = l + r + root->val;
        ans = max(ans, sum);
        return max(l, r) + root->val;
    }
};

int main()
{
    Solution sol;
    TreeNode *root = new TreeNode(1);
    int res = sol.maxPathSum(root);
    cout << res << endl;
    return 0;
}
