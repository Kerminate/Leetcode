#include <iostream>
using namespace std;

class Solution
{
public:
  int mySqrt(int x)
  {
    if (x == 0 || x == 1)
      return x;
    int left = 1;
    int right = x / 2;
    int mid = 0;
    int res = 0;
    cout << left << " " << right << endl;
    while (left <= right)
    {
      mid = (left + right) / 2;
      if (x / mid < mid)
      {
        right = mid - 1;
      }
      else if (x / mid > mid)
      {
        left = mid + 1;
      }
      else
      {
        return mid;
      }
    }
    res = (left + right) / 2;
    return res;
  }
};

int main()
{
  Solution sol;
  int res = sol.mySqrt(2147395599);
  cout << res << endl;
  return 0;
}
