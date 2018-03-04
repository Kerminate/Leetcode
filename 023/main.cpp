#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        vector<int> arr;
        for (int i = 0; i < lists.size(); i++) {
            while (lists[i]) {
                arr.push_back(lists[i]->val);
                lists[i] = lists[i]->next;
            }
        }
        sort(arr.begin(), arr.end());
        ListNode* res = new ListNode(-1);
        ListNode* doc = res;
        for (int i = 0; i < arr.size(); i++) {
            doc->next = new ListNode(-1);
            doc = doc->next;
            doc->val = arr[i];
        }
        return res->next;
    }
};

int main()
{
    Solution sol;
    vector<ListNode*> lists;
    ListNode* l1 = new ListNode(1);
    l1->next = new ListNode(3);
    ListNode* l2 = new ListNode(2);
    l2->next = new ListNode(4);
    lists.push_back(l1);
    lists.push_back(l2);
    ListNode* res = sol.mergeKLists(lists);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
    return 0;
}
