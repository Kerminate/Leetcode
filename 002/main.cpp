#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* res = new ListNode(-1);
        ListNode* doc = res;
        int ans = 0;
        while (l1 != NULL || l2 != NULL || ans) {
            doc->next = new ListNode(-1);
            doc = doc->next;
            int val1 = l1 == NULL ? 0 : l1->val;
            int val2 = l2 == NULL ? 0 : l2->val;
            doc->val = (val1 + val2 + ans) % 10;
            ans = (val1 + val2 + ans) / 10;
            l1 = l1 == NULL ? l1 : l1->next;
            l2 = l2 == NULL ? l2 : l2->next;
        }
        return res->next;
    }
};

int main()
{
    Solution sol;
    ListNode* l1 = new ListNode(2);
    ListNode* l11 = new ListNode(4);
    ListNode* l12 = new ListNode(3);
    ListNode* l2 = new ListNode(5);
    ListNode* l21 = new ListNode(6);
    ListNode* l22 = new ListNode(4);
    l11->next = l12;
    l1->next = l11;
    l21->next = l22;
    l2->next = l21;
    ListNode* res = sol.addTwoNumbers(l1, l2);
    while (res != NULL) {
        cout << res->val << " ";
        res = res->next;
    }
    return 0;
}
