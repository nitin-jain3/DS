/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const isPalindrome = function(head) {
    let copy = head;
    let sec = new ListNode(head.val);
    while (copy.next != null) {
      copy = copy.next;
      let a = new ListNode(copy.val, sec);
      sec = a;
    }
    console.log(sec);
    let bool = true;
    while (head.next !== null && sec.next !== null) {
      if (head.val !== sec.val) {
        bool = false;
        return bool;
      }
      head = head.next;
      sec = sec.next;
    }
    return bool;
};
