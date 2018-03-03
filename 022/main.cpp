#include <iostream>
#include <vector>
#include <string.h>
using namespace std;

class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> res;
        string str = "";
        dfs(str, n, 0, 0, res);
        return res;
    }
private:
    void dfs(string str, int len, int num, int pos, vector<string> &res) {
        if (str.size() == 2 * len) {
            res.push_back(str);
        } else {
            if (num > 0) {
                if (pos < len) {
                    dfs(str + '(', len, num + 1, pos + 1, res);
                    dfs(str + ')', len, num - 1, pos, res);
                } else {
                    dfs(str + ')', len, num - 1, pos, res);
                }
            } else {
                dfs(str + '(', len, num + 1, pos + 1, res);
            }
        }
    }
};

int main()
{
    Solution sol;
    vector<string> res = sol.generateParenthesis(3);
    for (int i = 0; i < res.size(); i++) {
        cout << res[i] << endl;
    }
    return 0;
}
