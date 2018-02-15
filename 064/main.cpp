#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

class Solution {
public:
    int minPathSum(vector<vector<int> >& grid) {
        int m = grid.size();
        int n = grid[0].size();
        for (int i = 1; i < n; i++) grid[0][i] += grid[0][i - 1];
        for (int i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                grid[i][j] += min(grid[i - 1][j], grid[i][j - 1]);
            }
        }
        return grid[m - 1][n - 1];
    }
};

int main()
{
    Solution sol;
    vector<vector<int> > grid;
    vector<int> v1, v2, v3;
    v1.push_back(1);
    v1.push_back(3);
    v1.push_back(1);
    v2.push_back(1);
    v2.push_back(5);
    v2.push_back(1);
    v3.push_back(4);
    v3.push_back(2);
    v3.push_back(1);
    grid.push_back(v1);
    grid.push_back(v2);
    grid.push_back(v3);
    int res = sol.minPathSum(grid);
    cout << res << endl;
    return 0;
}
