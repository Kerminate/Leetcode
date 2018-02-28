#include <iostream>
#include <vector>
#include <string.h>
using namespace std;

class Solution {
public:
    vector<string> letterCombinations(string digits) {
        string str[11] = {" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        vector<string> res;
        int len = digits.size();
        if (len == 0) return res;
        string tmp = "";
        dfs(0, tmp, res, len, digits, str);
        return res;
    }
    void dfs(int index, string pro, vector<string> &res, int len, string digits, string str[]) {
        int num = digits[index] - '0';
        string sel = str[num];
        for (int i = 0; i < sel.size(); i++) {
            if (index == len - 1) {
                res.push_back(pro + sel[i]);
            } else {
                dfs(index + 1, pro + sel[i], res, len, digits, str);
            }
        }
    }
};

int main()
{
    Solution sol;
    string dig = "23";
    vector<string> res = sol.letterCombinations(dig);
    for (int i = 0; i < res.size(); i++) {
        cout << res[i] << " ";
    }
    return 0;
}
