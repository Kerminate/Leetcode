#include <iostream>

using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == NULL || k == 0) return head;
        int sum = 1;
        ListNode* ll = head;
        while (ll->next != NULL) {
            ll = ll->next;
            sum++;
        }
        ll->next = head;
        int m = k % sum;
        for (int i = 0; i < sum - m; i++) {
            ll = ll->next;
        }
        head = ll->next;
        ll->next = NULL;
        return head;
    }
};

int main()
{
    Solution sol;
    ListNode* head = new ListNode(1);
    ListNode* ll;
    return 0;
}
