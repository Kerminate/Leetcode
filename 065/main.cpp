#include <iostream>
#include <string.h>
using namespace std;

class Solution
{
  public:
    bool isNumber(string s)
    {
        if (s.size() == 0)
            return false;
        int len = s.size();
        int i = 0;
        bool flag = false;
        while (i < len && s[i] == ' ')
            i++;
        if (i < len && (s[i] == '+' || s[i] == '-'))
            i++;
        while (i < len && s[i] >= '0' && s[i] <= '9')
        {
            flag = true;
            i++;
        }
        if (i < len && s[i] == '.')
        {
            i++;
            while (i < len && s[i] >= '0' && s[i] <= '9')
            {
                flag = true;
                i++;
            }
        }
        if (i < len && s[i] == 'e' && flag)
        {
            i++;
            flag = false;
            if (i < len && (s[i] == '+' || s[i] == '-'))
                i++;
            while (i < len && s[i] >= '0' && s[i] <= '9')
            {
                flag = true;
                i++;
            }
        }
        while (i < len && s[i] == ' ')
            i++;
        return flag && i == len;
    }
};

int main()
{
    Solution sol;
    string s = "e10";
    cout << sol.isNumber(s) << endl;
    return 0;
}
