#include <iostream>
#include <vector>
#include <set>
using namespace std;

class Solution {
public:
    vector<vector<string> > solveNQueens(int n) {
        vector<int> col(n, 0);
        vector<int> diag1(2 * n - 1, 0);
        vector<int> diag2(2 * n - 1, 0);
        vector<string> board(n, string(n, '.'));
        set<vector<string> > sol;
        vector<vector<string> > res;
        dfs(0, n, sol, board, col, diag1, diag2);
        set<vector<string> >::iterator it;
        int k = 0;
        for (it = sol.begin(); it != sol.end(); it++) {
            res.push_back(*it);
        }
        return res;
    }

    void dfs(int y, int n, set<vector<string> >& sol, vector<string>& board, vector<int>& col, vector<int>& diag1, vector<int>& diag2) {
        if (y == n) {
            sol.insert(board);
            return;
        }
        for (int i = 0; i < n; i++) {
            if (col[i] || diag1[i + y] || diag2[i - y + n - 1]) continue;
            col[i] = 1;
            diag1[i + y] = 1;
            diag2[i - y + n - 1] = 1;
            board[y][i] = 'Q';
            dfs(y + 1, n, sol, board, col, diag1, diag2);
            col[i] = 0;
            diag1[i + y] = 0;
            diag2[i - y + n - 1] = 0;
            board[y][i] = '.';
        }
    }
};

int main()
{
    Solution sol;
    vector<vector<string> > res;
    res = sol.solveNQueens(8);
    for (int i = 0; i < res.size(); i++) {
        for (int j = 0; j < res[i].size(); j++) {
            cout << res[i][j] << endl;
        }
        cout << endl;
    }
    return 0;
}
