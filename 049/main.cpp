#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<string> > groupAnagrams(vector<string>& strs) {
        vector<vector<string> > res;
        vector<char> ch;
        vector<string> ini;
        map<string, vector<string> > m;
        map<string, vector<string> >::iterator it;
        for (int i = 0; i < strs.size(); i++) {
            ch.clear();
            for (int j= 0; j < strs[i].size(); j++) {
                ch.push_back(strs[i][j]);
            }
            sort(ch.begin(), ch.end());
            string s;
            for (int j = 0; j < ch.size(); j++) {
                s += ch[j];
            }
            if (m[s].empty()) {
                ini.clear();
                ini.push_back(strs[i]);
                m[s] = ini;
            } else {
                m[s].push_back(strs[i]);
            }
        }
        for (it = m.begin(); it != m.end(); it++) {
            res.push_back(it->second);
        }
        return res;
    }
};

int main()
{
    Solution sol;
    vector<string> strs;
    string s1 = "eat";
    string s2 = "tea";
    string s3 = "tan";
    string s4 = "ate";
    string s5 = "nat";
    string s6 = "bat";
    strs.push_back(s1);
    strs.push_back(s2);
    strs.push_back(s3);
    strs.push_back(s4);
    strs.push_back(s5);
    strs.push_back(s6);
    vector<vector<string> > res;
    res = sol.groupAnagrams(strs);
    for (int i = 0; i < res.size(); i++) {
        for (int j = 0; j < res[i].size(); j++) {
            cout << res[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
