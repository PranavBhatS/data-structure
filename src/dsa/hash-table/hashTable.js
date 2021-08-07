
class HashTable {
     constructor(size) {
          this.data = new Array(size)
     }

     _hash(key) {
          let hash = 0;
          for (let i = 0; i < key.length; i++) {
               hash = (hash + key.charCodeAt(i) * i) % this.data.length
          }
          return hash
     }

     set(key, value) {
          let address = this._hash(key);
          if (!this.data[address]) {
               this.data[address] = [];
               this.data[address].push([key, value]);
          }
          this.data[address].push([key, value]);
          return this.data
     }

     get(key) {
          let address = this._hash(key);
          const currentBucket = this.data[address];
          if (currentBucket) {
               for (let index = 0; index < currentBucket.length; index++) {
                    const buk = currentBucket[index];
                    if (buk[0] === key) {
                         return buk[1];
                    }
               }
          }
          return undefined;
     }

     keys() {
          const keysArray = [];
          for (let index = 0; index < this.data.length; index++) {
               const cell = this.data[index];
               if(cell) {
                    keysArray.push(cell[0][0])
               }
          }
          return keysArray;
     }

}

let temp = (new HashTable(5));
temp.set("pranav2", 3000);
temp.set("pranav3", 2000);
temp.set("pranav1", 2002);
console.log(
     "get", temp.get("pranav1")
)

console.log(
     "keys", temp.keys()
)
