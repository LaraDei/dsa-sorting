const mergeSort = require('./notes')
const MyLinkedList = require('./linked-list.js')

// 1. Understanding merge sort
// console.log(
//     'merge: ',
//     mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])
//   );

  //[ 21, 1 ]
  //[16, 49, 39, 27, 43, 34, 46, 40]
  //[ 21, 1 ], [ 26, 45 ]
  //[16, 49, 39, 27, 43, 34, 46, 40] & [21,  1, 26, 45,29, 28,  2,  9]

// 2. Understanding quicksort
  //The pivot could have been either 14 or 17: the values to the left of 17 or 14 are all less values and to the right are greater values.
  // last [10, 3, 9, 12, 19, 14, 17, 16, 13, 15]
  //fisrt [14, 13, 10, 3, 9, 12, 15, 16, 19, 17]

// 3. Implementing quicksort
// 4. Implementing merge sort
const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
const dataset = data.split(' ').map(num => Number(num));
// console.log(
//   'merge: ',
//   mergeSort(dataset)
// )
// 5. Sorting a linked list using merge sort
function sortedLinkedList(head) {
  if (head === null || head.next !== null) {
      return head;
  }

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
  }

  prev.next = null;
  const list1 = sortedLinkedList(head);
  const list2 = sortedLinkedList(slow);

  return mergeLinkedList(list1, list2)
}

function mergeLinkedList(link1, link2) {
  const head = new  MyLinkedList._Node();
  let current = head;
  while(link1 !== null && link2 !== null) {
      if (link1.val < link2.val) {
          current.next = link1;
          link1 = link1.next;
      } else {
          current.next = link2;
          link2 = link2.next;
      }
      current = current.next;
  }
  current.next = link1 === null ? link2 : link1;
  return head.next;
}

function main() {
  let sortll = new MyLinkedList()
  sortll.insertFirst(1);
  sortll.insertLast(5);
  sortll.insertLast(4);
  sortll.insertLast(3);
  sortll.insertLast(2);

  console.log(JSON.stringify(sortedLinkedList(sortll.head), null, 2))
}
main();

// 6. Bucket sort
function bucketSort(array, low, high) {
  const newArray = [];
  for (let i = 0; i < high; i++) {
      newArray[i] = '';
  }
  for (let i = 0; i < array.length; i++) {
      newArray[array[i] - low] = array[i];
  }
  return newArray;
}

//console.log(bucketSort([9, 5, 4, 10, 6, 2, 3, 8, 7, 1], 1 , 10))

// 7. Sort in place
function sortInPlace (array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
//console.log('sortInPlace', sortInPlace([3, 1, 7, 9, 11, 13, 21]));
// 8. Sorting books

// let array = [...books];
// let sortedArray = array.sort();
