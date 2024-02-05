/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const getLength = (head: ListNode | null) => {
  if (head === null) {
    return 0;
  }

  if (head.next === null) {
    return 1;
  }

  let curr = head.next;
  let counter = 2;

  while (curr.next !== null) {
    counter += 1;
    curr = curr.next;
  }

  return counter;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const length = getLength(head);

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

const test1 = [1];
let head1: ListNode | null = null;
let last: ListNode | null = null;

for (let i = 0; i< test1.length; i++) {
  if (head1 === null) {
    head1 = new ListNode();
    head1.val = test1[i];
    last = head1;
  } else {
    const nextNode = new ListNode();
    nextNode.val = test1[i];
    nextNode.next = null;

    if (last) {
      last.next = nextNode;
    }

    last = nextNode;
  }
}

const traverseNode = (head: ListNode | null) => {
  if (head === null) {
    console.log("SLL is empty")
    return;
  }

  let curr = head;

  console.log("SLL values : ")

  while (curr.next) {
    console.log(curr.val)
    curr = curr.next
  }
  console.log(curr.val)

  return;
}

traverseNode(removeNthFromEnd(head1, 1))