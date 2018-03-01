#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
 };

class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* te = head;
        int num = 0;
        while (te) {
            te = te->next;
            num++;
        }
        int index = num - n;
        if (!index) {
            head = head->next;
        } else {
            te = head;
            while (--index) {
                te = te->next;
            }
            te->next = te->next->next;
        }
        return head;
    }
};

int main()
{
    Solution sol;
    ListNode* head = new ListNode(1);
    ListNode* head1 = new ListNode(2);
    ListNode* head2 = new ListNode(3);
    ListNode* head3 = new ListNode(4);
    ListNode* head4 = new ListNode(5);
    head3->next = head4;
    head2->next = head3;
    head1->next = head2;
    head->next = head1;
    ListNode* res = sol.removeNthFromEnd(head, 2);
    while (res) {
        cout << res->val << " ";
        res = res->next;
    }
    return 0;
}
