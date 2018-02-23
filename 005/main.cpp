#include <iostream>
#include <string.h>
using namespace std;

class Solution
{
public:
  string longestPalindrome(string s)
  {
    int len = s.size();
    int max = 1;
    string sub = s.substr(0, 1);
    for (int i = 0; i < len; i++)
    {
      int j = 1;
      while (i - j >= 0 && i + j < len && s[i - j] == s[i + j])
      {
        j++;
      }
      if (max < 2 * j - 1)
      {
        max = 2 * j - 1;
        sub = s.substr(i - j + 1, max);
      }
      j = 0;
      while (i - j >= 0 && i + j + 1 < len && s[i - j] == s[i + j + 1])
      {
        j++;
      }
      if (max < 2 * j)
      {
        max = 2 * j;
        sub = s.substr(i - j + 1, max);
      }
    }
    return sub;
  }
};

int main()
{
  Solution sol;
  string res = sol.longestPalindrome("cddb");
  cout << res << endl;
  return 0;
}
