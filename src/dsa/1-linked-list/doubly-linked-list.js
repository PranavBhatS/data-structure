class Node {
     constructor(val) {
          this.val = val;
          this.next = null;
          this.prev = null;
     }
}

class DoublyLinkedList {

     constructor(val) {
          this.head = null;
          this.tail = null;
          this.length = 0;
     }

     push(val) {
          let newNode = new Node(val)
          if (this.length === 0) {
               this.head = newNode;
               this.tail = newNode;
          } else {
               this.tail.next = newNode;
               newNode.prev = this.tail;
               this.tail = newNode;
          }
          this.length++;
          return this;
     }

     pop() {
          if (!this.length) return undefined;
          let lastNode = this.tail;
          if (this.length === 1) {
               this.head = null;
               this.tail = null;
          } else {
               this.tail = lastNode.prev;
               this.tail.next = null;
               lastNode.next = null;
          }
          this.length--;
          return lastNode;
     }

     shift() {
          if (!this.length) return undefined;
          let firstNode = this.head;
          if (this.length === 1) {
               this.head = null;
               this.tail = null;
          } else {
               this.head = firstNode.next;
               this.head.prev = null;
               firstNode.prev = null;
          }
          this.length--;
          return firstNode;
     }

     unshift(val) {
          let newNode = new Node(val)
          if (!this.length) {
               this.head = newNode;
               this.tail = newNode;
          } else {
               this.head.prev = newNode;
               newNode.next = this.head;
               this.head = newNode;
          }
          this.length++;
          return this;
     }

     get(index) {
          if (index < 0 || index >= this.length) return null;
          let current;
          if (index <= this.length / 2) {
               let count = 0;
               current = this.head;
               while (count !== index) {
                    current = current.next;
                    count++;
               }
          } else {
               let count = this.length - 1;
               current = this.tail;
               while (count !== index) {
                    current = current.prev;
                    count--;
               }
          }
          return current;
     }

     set(index, value) {
          let foundNode = this.get(index);
          if (foundNode === null) return false;
          foundNode.val = value;
          return true
     }

     insert(index, value) {
          if (index < 0 || index >= this.length) return false;
          if (index === 0) return !!this.unshift(value);
          if (index === this.length) return !!this.push(value);

          let beforeNode = this.get(index - 1);
          let afterNode = beforeNode.next;
          let newNode = new Node(value);

          beforeNode.next = newNode;
          newNode.prev = beforeNode;
          newNode.next = afterNode;
          afterNode.prev = newNode;

          this.length++;
          return true;

     }

     remove(index) {
          if (index < 0 || index >= this.length) return false;
          if (index === 0) return !!this.shift();
          if (index === this.length-1) return !!this.pop();

          let removedNode = this.get(index);
          let beforeNode = removedNode.prev;
          let afterNode = removedNode.next;

          beforeNode.next = afterNode;
          afterNode.prev = beforeNode;

          removedNode.next = null;
          removedNode.prev = null;

          this.length--;
          return true;

     }
     // 1 2 3 4 5
}

let l = new DoublyLinkedList()
l.push(1)
l.push(2)

// 1 2  "hello"  3 4 5