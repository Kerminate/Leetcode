#include <iostream>
#include <vector>
using namespace std;

class Solution
{
  public:
    vector<vector<int>> generateMatrix(int n)
    {
        vector<vector<int>> arr;
        vector<int> vec;
        for (int i = 0; i < n; i++)
        {
            vec.clear();
            for (int j = 0; j < n; j++)
                vec.push_back(1);
            arr.push_back(vec);
        }
        int start = 0;
        int end = n - 1;
        int iter = 1;
        while (start < end)
        {
            for (int i = start; i < end; i++)
                arr[start][i] = iter++;
            for (int i = start; i < end; i++)
                arr[i][end] = iter++;
            for (int i = end; i > start; i--)
                arr[end][i] = iter++;
            for (int i = end; i > start; i--)
                arr[i][start] = iter++;
            start++;
            end--;
        }
        if (start == end)
            arr[start][start] = iter;
        return arr;
    }
};

int main()
{
    Solution sol;
    vector<vector<int>> arr;
    int n = 4;
    arr = sol.generateMatrix(n);
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
