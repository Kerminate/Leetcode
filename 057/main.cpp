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
    vector<Interval> insert(vector<Interval> &intervals, Interval newInterval)
    {
        vector<Interval> v;
        vector<Interval> arr;
        if (intervals.empty())
        {
            v.push_back(newInterval);
            return v;
        }
        int flag = 1;
        for (int i = 0; i < intervals.size(); i++)
        {
            if (flag && intervals[i].start > newInterval.start)
            {
                arr.push_back(newInterval);
                flag = 0;
            }
            arr.push_back(intervals[i]);
        }
        if (flag)
            arr.push_back(newInterval);
        for (int i = 0; i < arr.size() - 1; i++)
        {
            if (arr[i].end < arr[i + 1].start)
            {
                v.push_back(arr[i]);
            }
            else
            {
                arr[i + 1].start = arr[i].start;
                arr[i + 1].end = max(arr[i].end, arr[i + 1].end);
            }
        }
        v.push_back(arr[arr.size() - 1]);
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
    struct Interval s0(4, 9);
    intervals.push_back(s1);
    intervals.push_back(s2);
    intervals.push_back(s3);
    intervals.push_back(s4);
    vector<Interval> v;
    v = sol.insert(intervals, s0);
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i].start << " " << v[i].end << endl;
    }
    return 0;
}
