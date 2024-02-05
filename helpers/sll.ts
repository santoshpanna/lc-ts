export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const traverseNode = (head: ListNode | null) => {
  if (head === null) {
    console.log("SLL is empty")
    return;
  }

  let curr = head;

  const values: number[] = [];

  while (curr.next) {
    values.push(curr.val);
    curr = curr.next
  }
  values.push(curr.val);

  console.log("SLL values : ", values);

  return;
}

const create = (arr: number[]) => {
  let head: ListNode | null = null;
  let last: ListNode | null = null;

  for (let i = 0; i< arr.length; i++) {
    if (head === null) {
      head = new ListNode();
      head.val = arr[i];
      last = head;
    } else {
      const nextNode = new ListNode();
      nextNode.val = arr[i];
      nextNode.next = null;

      if (last) {
        last.next = nextNode;
      }

      last = nextNode;
    }
  }

  return head;
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

export const SLL = {
  traverse: traverseNode,
  create,
  getLength,
}