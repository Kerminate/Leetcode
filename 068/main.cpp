#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
  vector<string> fullJustify(vector<string> &words, int maxWidth)
  {
    int len = words.size();
    vector<string> res;
    vector<string> arr;
    int sum = words[0].size();
    string mid = "";
    if (!sum)
    {
      while (maxWidth--)
        mid += ' ';
      res.push_back(mid);
    }
    else
    {
      arr.push_back(words[0]);
    }
    for (int i = 1; i < len; i++)
    {
      if (sum + words[i].size() + 1 <= maxWidth)
      {
        sum += words[i].size() + 1;
        mid = ' ' + words[i];
        arr.push_back(mid);
      }
      else
      {
        int space = maxWidth - sum;
        mid = "";
        if (arr.size() == 1)
        {
          mid += arr[0];
          while (space--)
            mid += ' ';
          res.push_back(mid);
        }
        else
        {
          int num = space / (arr.size() - 1);
          int point = space % (arr.size() - 1);
          for (int j = 0; j < arr.size() - 1; j++)
          {
            mid += arr[j];
            for (int k = 0; k < num; k++)
            {
              mid += ' ';
            }
            if (j < point)
              mid += ' ';
          }
          mid += arr[arr.size() - 1];
          res.push_back(mid);
        }
        sum = words[i].size();
        arr.clear();
        arr.push_back(words[i]);
      }
    }
    if (sum)
    {
      mid = "";
      for (int i = 0; i < arr.size(); i++)
      {
        mid += arr[i];
      }
      int num = maxWidth - mid.size();
      while (num--)
        mid += ' ';
      res.push_back(mid);
    }
    return res;
  }
};

int main()
{
  Solution sol;
  vector<string> words, res;
  words.push_back("Listen");
  words.push_back("to");
  words.push_back("many");
  words.push_back("speak");
  words.push_back("to");
  words.push_back("a");
  words.push_back("few.");
  res = sol.fullJustify(words, 6);
  for (int i = 0; i < res.size(); i++)
  {
    cout << res[i] << endl;
  }
  return 0;
}
