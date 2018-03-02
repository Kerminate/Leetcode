#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        vector<int> arr;
        while (l1) {
            arr.push_back(l1->val);
            l1 = l1->next;
        }
        while (l2) {
            arr.push_back(l2->val);
            l2 = l2->next;
        }
        sort(arr.begin(), arr.end());
        ListNode* res = new ListNode(-1);
        ListNode* ans = res;
        for (int i = 0; i < arr.size(); i++) {
            ListNode* tmp = new ListNode(-1);
            tmp->val = arr[i];
            ans->next = tmp;
            ans = ans->next;
        }
        return res->next;
    }
};

int main()
{
    Solution sol;
    ListNode* l1 = new ListNode(1);
    ListNode* l12 = new ListNode(2);
    ListNode* l13 = new ListNode(4);
    ListNode* l2 = new ListNode(1);
    ListNode* l22 = new ListNode(3);
    ListNode* l23 = new ListNode(4);
    l12->next = l13;
    l1->next = l12;
    l22->next = l23;
    l2->next = l22;
    ListNode* res = sol.mergeTwoLists(l1, l2);
    while (res) {
        cout << res->val << " ";
        res = res->next;
    }
    return 0;
}
