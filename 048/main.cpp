#include <iostream>
#include <vector>
using namespace std;

class Solution
{
  public:
    void rotate(vector<vector<int>> &matrix)
    {
        if (matrix.size() == 0 || matrix[0].size() == 0)
            return;
        int top = 0;
        int bottom = matrix.size() - 1;
        int left = 0;
        int right = matrix[0].size() - 1;
        int len = bottom - top;
        while (top < bottom && left < right)
        {
            for (int i = 0; i < len; i++)
            {
                int temp = matrix[top][left + i];
                matrix[top][left + i] = matrix[bottom - i][left];
                matrix[bottom - i][left] = matrix[bottom][right - i];
                matrix[bottom][right - i] = matrix[top + i][right];
                matrix[top + i][right] = temp;
            }
            top++;
            left++;
            bottom--;
            right--;
            len -= 2;
        }
    }
};

int main()
{
    Solution sol;
    vector<vector<int>> matrix;
    vector<int> row1;
    vector<int> row2;
    vector<int> row3;
    for (int i = 0; i < 3; i++)
    {
        row1.push_back(i + 1);
        row2.push_back(i + 4);
        row3.push_back(i + 7);
    }
    matrix.push_back(row1);
    matrix.push_back(row2);
    matrix.push_back(row3);
    sol.rotate(matrix);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
