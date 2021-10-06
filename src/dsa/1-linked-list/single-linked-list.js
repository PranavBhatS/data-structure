class Node {
     constructor(val) {
          this.val = val;
          this.next = null;
     }
}

class SinglyLinkedList {
     constructor(val) {
          this.length = 0;
          this.tail = null;
          this.head = null;
     }

     push(val) {
          const newNode = new Node(val);
          if (!this.head) {
               this.head = newNode;
               this.tail = newNode;
          } else {
               this.tail.next = newNode;
               this.tail = newNode;
          }
          this.length++;
          return this;
     }

     pop() {
          if (!this.head) return undefined;
          let current = this.head;
          let newTail = current;
          while (current.next) {
               newTail = current;
               current = current.next;
          }
          this.tail = newTail;
          this.tail.next = null;
          this.length--;
          if (this.length == 0) {
               this.head = null;
               this.tail = null;
          }
          return current.val;
     }

     shift() {
          if (!this.head) return undefined;
          let currentHead = this.head;
          this.head = currentHead.next;
          this.length--;
          if (this.length == 0) {
               this.tail = null;
          }
          return currentHead;
     }

     unshift(val) {
          const newNode = new Node(val)
          if (!this.head) {
               this.head = newNode;
               this.tail = this.head;

          } else {
               newNode.next = this.head;
               this.head = newNode;
          }
          this.length++;
          return this;
     }

     get(index) {
          if (!this.head || index >= this.length || index < 0) return null;
          let currentNode = this.head;
          while (index > 0) {
               currentNode = currentNode.next;
               index--;
          }
          return currentNode;
     }

     set(index, value) {
          let foundedNode = this.get(index);
          if (foundedNode) {
               foundedNode.val = value;
               return true;
          }
          return false;
     }

     insert(index, value) {
          if (index < 0 || index > this.length) return false;
          if (index === this.length) {
               return !!this.push(value)
          }
          if (index === 0) {
               return !!this.unshift(value)
          }
          let newNode = new Node(value)
          let prev = this.get(index - 1);
          let temp = prev.next;
          prev.next = newNode
          newNode.next = temp;
          this.length++;
          return true;
     }

     remove(index) {
          if (index < 0 || index > this.length) return false;
          if (index === this.length - 1) {
               return this.pop(value)
          }
          if (index === 0) {
               return this.shift(value)
          }
          let prev = this.get(index - 1);
          let removed = prev.next;
          prev.next = removed.next;

          this.length--;
          return removed;
     }

     reverse() {
          let node = this.head;
          this.head = this.tail;
          this.tail = node;
          let prev = null;
          let next;
          for(let i = 0; i < this.length; i++) {
               next = node.next;
               node.next = prev;
               prev = node;
               node = next;
          }
          return this;
     }

     print() {
          let array = [];
          let current = this.head;
          while(current) {
               array.push(current.val);
               current = current.next;
          }
          return array;
     }
}
let list = new SinglyLinkedList();
list.push("hi")
list.push("Bye")
// list.push("!")
// list.shift()