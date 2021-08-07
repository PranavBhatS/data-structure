// data stored in sequencely in memory
/**
lookup - O(1)
push - 0(1)
insert - O(n)
delete - O(n)
 types of Array: 1. Static array 2. Dynamic array 
*/

export default class MyArray {
     constructor() {
          this.length = 0;
          this.data = {};
     }
     get(index) {
          return this.data[index]
     }

     push(value) {
          this.data[this.length] = value;
          this.length++;
          return this.length;
     }

     pop() {
          if (!this.length) throw new Error("You can't remove elements from empty array");
          const lastItem = this.data[this.length - 1];
          delete this.data[this.length - 1];
          this.length--;
          return lastItem;
     }

     delete(index) {
          const deletedItem = this.data[index];
          this.shiftItemsLeft(index);
          return deletedItem;
     }

     shiftItemsLeft(index) {
          for (let i = index; i < this.length; i++) {
               this.data[i] = this.data[i + 1];
          }
          delete this.data[this.length - 1];
          this.length--;
     }
}

const newArray = new MyArray();
newArray.push("ok")
newArray.push("ok2")
// newArray.pop()
newArray.delete(0)
console.log(newArray)