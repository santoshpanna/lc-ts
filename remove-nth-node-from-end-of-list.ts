/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

import { ListNode, SLL } from "./helpers/sll";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const length = SLL.getLength(head);

  if (head === null) {
    return null;
  }
  
  if (length === 1 && n === 1) {
    return null;
  }

  let prev: ListNode | null = head;
  let curr: ListNode | null = head;

  if (n === 1) {
    while (curr.next) {
      prev = curr;
      curr = curr.next
    }

    prev.next = null;

    return head;
  }

  let i = 0;

  

  while (curr.next) {
    if (i === length - n) {
      const nextNode = curr?.next;
      
      if (curr === head) {
        head = nextNode;
      } else if (!nextNode) {
        prev = null;
      } else {
        prev!.next = nextNode;
      }
    } else {
      prev = curr;
      curr = curr.next as ListNode
    }
    i += 1;
  }

  return head;
};

const head1 = SLL.create([1]);

SLL.traverse(removeNthFromEnd(head1, 1))