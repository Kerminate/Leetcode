#include <iostream>
using namespace std;

class Solution
{
public:
  int climbStairs(int n)
  {
    int arr[n + 2];
    arr[1] = 1;
    arr[2] = 2;
    for (int i = 3; i <= n; i++)
    {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
  }
};

int main()
{
  Solution sol;
  int res = sol.climbStairs(5);
  cout << res << endl;
  return 0;
}
