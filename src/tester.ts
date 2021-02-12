import LinkedList from "./linked-list/linked-list";


let linkedList = new LinkedList()
linkedList.addFront("pranav 1");
linkedList.addFront("pk bhat");
linkedList.addAt(1, "pranav 2");

linkedList.fromArray([1,2,3,4])
for (let index = 0; index < linkedList.size(); index++) {
    console.log(linkedList.get(index));
}