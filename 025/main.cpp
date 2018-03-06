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
    ListNode* reverseKGroup(ListNode* head, int k) {
        vector<int> arr;
        while (head) {
            arr.push_back(head->val);
            head = head->next;
        }
        int i = 0;
        while (i + k <= arr.size()) {
            for (int j = 0; j < k / 2; j++) {
                int tmp = arr[i + j];
                arr[i + j] = arr[i + k - j - 1];
                arr[i + k - j - 1] = tmp;
            }
            i += k;
        }
        ListNode* res = new ListNode(-1);
        ListNode* doc = res;
        for (i = 0; i < arr.size(); i++) {
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
    head->next->next->next->next = new ListNode(5);
    ListNode* res = sol.reverseKGroup(head, 2);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
    return 0;
}
