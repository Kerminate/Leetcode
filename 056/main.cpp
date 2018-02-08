#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;

struct Interval
{
    int start;
    int end;
    Interval() : start(0), end(0) {}
    Interval(int s, int e) : start(s), end(e) {}
};

class Solution
{
  public:
    static bool cmp(Interval a, Interval b)
    {
        if (a.start != b.start)
        {
            return a.start < b.start;
        }
        else
        {
            return a.end < b.end;
        }
    }
    vector<Interval> merge(vector<Interval> &intervals)
    {
        vector<Interval> v;
        if (intervals.empty())
            return v;
        sort(intervals.begin(), intervals.end(), cmp);
        for (int i = 0; i < intervals.size() - 1; i++)
        {
            if (intervals[i].end < intervals[i + 1].start)
            {
                v.push_back(intervals[i]);
            }
            else
            {
                intervals[i + 1].start = intervals[i].start;
                intervals[i + 1].end = max(intervals[i].end, intervals[i + 1].end);
            }
        }
        v.push_back(intervals[intervals.size() - 1]);
        return v;
    }
};

int main()
{
    Solution sol;
    vector<Interval> intervals;
    struct Interval s1(1, 3);
    struct Interval s2(2, 6);
    struct Interval s3(8, 10);
    struct Interval s4(15, 18);
    intervals.push_back(s1);
    intervals.push_back(s2);
    intervals.push_back(s3);
    intervals.push_back(s4);
    vector<Interval> v;
    v = sol.merge(intervals);
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i].start << " " << v[i].end << endl;
    }
    return 0;
}
