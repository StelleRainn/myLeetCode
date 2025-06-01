//
// Created by 徐友友 on 2025/6/1.
//

#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {};
};

//
// ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
//     bool carry = false;
//     ListNode* result = nullptr;
//
//     while (l1 || l2 || carry) {
//         l1->val = l1->val || 0;
//         l2->val = l2->val || 0;
//
//         result->val = l1->val + l2->val;
//
//         if (carry) result->val += 1;
//
//         if (result->val >= 10) {
//             carry = true;
//             result->val %= 10;
//         } else {
//             carry = false;
//         }
//
//         l1 = l1 ? l1->next : nullptr;
//         l2 = l2 ? l2->next : nullptr;
//     }
//
//     return result;
// }

ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* current = &dummy;
    bool carry = false;

    while (l1 || l2 || carry) {
        int x = l1 ? l1->val : 0;
        int y = l2 ? l2->val : 0;

        int sum = x + y;

        if (carry) sum += 1;

        if (sum >=  10) {
            carry = true;
            sum %= 10;
        } else {
            carry = false;
        }

        current->next = new ListNode(sum);
        current = current->next;

        l1 = l1 ? l1->next : nullptr;
        l2 = l2 ? l2->next : nullptr;
    }

    return dummy.next;
}

// 创建链表
ListNode* createList(int arr[], int n) {
    if (n == 0) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* cur = head;
    for (int i = 1; i < n; i++) {
        cur->next = new ListNode(arr[i]);
        cur = cur->next;
    }
    return head;
}

// 打印链表
void printList(ListNode* head) {
    ListNode* cur = head;
    while (cur) {
        cout << cur->val << " -> ";
        cur = cur->next;
    }
    cout << "nullptr" << endl;
}

// 释放链表
void freeList(ListNode* head) {
    ListNode* cur = head;
    while (cur) {
        ListNode* temp = cur;
        cur = cur->next;
        delete temp;
    }
}

int main() {
    int arr1[] = {1, 2, 3};
    int arr2[] = {5, 6, 4};
    ListNode* l1 = createList(arr1, 3);
    ListNode* l2 = createList(arr2, 3);

    // printList(l1);
    // printList(l2);

    ListNode* result = addTwoNumbers(l1, l2);
    printList(result);

    freeList(l1);
    freeList(l2);

    return 0;
}