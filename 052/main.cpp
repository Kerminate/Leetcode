#include <iostream>
#include <vector>
#include <set>
using namespace std;

class Solution
{
  public:
    int totalNQueens(int n) {
        vector<int> col(n, 0);
        vector<int> diag1(2 * n - 1, 0);
        vector<int> diag2(2 * n - 1, 0);
        vector<string> board(n, string(n, '.'));
        int res = 0;
        dfs(0, n, res, board, col, diag1, diag2);
        return res;
    }

    void dfs(int y, int n, int& res, vector<string> &board, vector<int> &col, vector<int> &diag1, vector<int> &diag2)
    {
        if (y == n)
        {
            res++;
            return;
        }
        for (int i = 0; i < n; i++)
        {
            if (col[i] || diag1[i + y] || diag2[i - y + n - 1])
                continue;
            col[i] = 1;
            diag1[i + y] = 1;
            diag2[i - y + n - 1] = 1;
            board[y][i] = 'Q';
            dfs(y + 1, n, res, board, col, diag1, diag2);
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
    int res;
    res = sol.totalNQueens(8);
    cout << res << endl;
    return 0;
}
