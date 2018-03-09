#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    bool searchMatrix(vector<vector<int> >& matrix, int target) {
        if (!matrix.size()) return false;
        int row = matrix.size();
        int col = matrix[0].size();
        int start = 0;
        int end = row - 1;
        while (start < end - 1) {
            int mid = (start + end) / 2;
            if (matrix[mid][0] == target) return true;
            else if (matrix[mid][0] > target) end = mid;
            else start = mid;
        }
        for (int i = start; i <= end; i++) {
            for (int j = 0; j < col; j++) {
                if (matrix[i][j] == target) return true;
            }
        }
        return false;
    }
};

int main()
{
    Solution sol;
    vector<vector<int> > matrix;
    vector<int> m1;
    vector<int> m2;
    vector<int> m3;
    m1.push_back(1);
    m2.push_back(3);
    m3.push_back(5);
    matrix.push_back(m1);
    matrix.push_back(m2);
    matrix.push_back(m3);
    int res = sol.searchMatrix(matrix, 5);
    cout << res << endl;
    return 0;
}
