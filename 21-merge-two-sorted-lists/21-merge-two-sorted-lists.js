/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

  if (!list1) return list2;
  if (!list2) return list1;

  let one = list1;
  let two = list2;
  let temp = new ListNode(0, one.val < two.val ? one : two);  
  let curr = temp;

  while (one && two) {
    if (one.val < two.val) {
      curr.next = one;
      curr = one;
      one = one.next;
    } else {
      curr.next = two;
      curr = two;
      two = two.next;
    }
  }

  if (!one) curr.next = two;
  if (!two) curr.next = one;

  return temp.next;
};