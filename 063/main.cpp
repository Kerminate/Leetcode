#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

class Solution
{
  public:
    int uniquePathsWithObstacles(vector<vector<int>> &obstacleGrid)
    {
        int m = obstacleGrid.size();
        int n = obstacleGrid[0].size();
        int matrix[m][n];
        memset(matrix, 0, sizeof(matrix));
        for (int i = 0; i < m; i++)
        {
            if (obstacleGrid[i][0] == 1)
                break;
            matrix[i][0] = 1;
        }
        for (int i = 0; i < n; i++)
        {
            if (obstacleGrid[0][i] == 1)
                break;
            matrix[0][i] = 1;
        }
        for (int i = 1; i < m; i++)
        {
            for (int j = 1; j < n; j++)
            {
                if (!obstacleGrid[i][j])
                    matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
                else
                    matrix[i][j] = 0;
            }
        }
        return matrix[m - 1][n - 1];
    }
};

int main()
{
    Solution sol;
    vector<int> v;
    vector<vector<int>> obstacleGrid;
    for (int i = 0; i < 3; i++)
    {
        v.clear();
        if (i == 0 || i == 2)
        {
            v.push_back(0);
            v.push_back(0);
        }
        else
        {
            v.push_back(1);
            v.push_back(1);
        }
        obstacleGrid.push_back(v);
    }
    int ans = sol.uniquePathsWithObstacles(obstacleGrid);
    cout << ans << endl;
    return 0;
}
