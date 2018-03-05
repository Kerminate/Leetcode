#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if (!head) return head;
        ListNode* pot = head;
        vector<int> arr;
        while (pot) {
            arr.push_back(pot->val);
            pot = pot->next;
        }
        for (int i = 0; i < arr.size() - 1; i += 2) {
            int tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
        }
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
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    ListNode* res = sol.swapPairs(head);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
    return 0;
}
