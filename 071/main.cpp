#include <iostream>
#include <string.h>
using namespace std;

class Solution
{
public:
  string simplifyPath(string path)
  {
    int len = path.size();
    string arr[100];
    int point = 0;
    int i = 0;
    while (i < len)
    {
      i++;
      string mid = "";
      while (i < len && path[i] != '/')
      {
        mid += path[i++];
      }
      if (mid == "..")
      {
        point = point > 0 ? point - 1 : 0;
      }
      else if (mid != "" && mid != ".")
      {
        arr[++point] = mid;
      }
    }
    string res = "";
    for (int j = 1; j <= point; j++)
    {
      res += '/' + arr[j];
    }
    if (!point)
      res = "/";
    return res;
  }
};

int main()
{
  Solution sol;
  string res = sol.simplifyPath("/home//foo/");
  cout << res << endl;
  return 0;
}
