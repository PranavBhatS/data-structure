// import LinkedList from "./linked-list/linked-list";

import Queue from "./queue/queue";


// let linkedList = new LinkedList()
// linkedList.addFront("pranav 1");
// linkedList.addFront("pk bhat");
// linkedList.addAt(1, "pranav 2");

// linkedList.fromArray([1,2,3,4])
// for (let index = 0; index < linkedList.size(); index++) {
//     console.log(linkedList.get(index));
// }


// let queue = new Queue();
// for (let index = 0; index < 11; index++) {
//     queue.enqueue(index)
// }
// console.log(queue.printData())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.printData())

(async () => {
    await Promise.resolve(console.log("hello dude"))
})()

function demo(name: string): `hello ${string}` {
    return `hello ${name}`
}