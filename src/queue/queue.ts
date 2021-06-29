
class Queue {
   storage: any[] = [];
   head = 0;
   tail = 0;
   size = 0;
   constructor() {
   }

   enqueue(data: any) {
      this.storage[this.tail] = data;
      this.tail += 1;
      this.size += 1;
   }

   dequeue() {
      if (!this.size) throw new Error("Empty queue");

      let data = this.storage[this.head];
      // this.storage.splice(this.head,1)
      this.head += 1;
      if (this.head === this.tail) {
         this.head = this.tail = 0;
      }
      this.size -= 1;
      return data;
   }

   printData() {
      return this.storage;
   }


}

export default Queue;