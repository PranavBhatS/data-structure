import { defaultEquals, EqualsFunction } from "../utils";
import LinkedListNode from "./linked-list-node";



interface List<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;
    size: number;
}

class LinkedList<T> implements Iterable<T> {
    private list: List<T> | undefined;
    constructor() {
        this.list = undefined;
    }

    size(): number {
        if (this.list) return this.list.size
        return 0
    }

    isEmpty(): boolean {
        return !this.list
    }

    addFront(val: T): void {
        const newNode = new LinkedListNode(val);

        if (this.list) {
            this.list.head.prev = newNode;
            newNode.next = this.list.head;

            this.list.head = newNode;
            this.list.size += 1;
        } else {
            this.list = {
                head: newNode,
                size: 1,
                tail: newNode
            }
        }
    }

    addBack(val: T): void {
        const newNode = new LinkedListNode(val);

        if (this.list) {
            this.list.tail.next = newNode;
            newNode.prev = this.list.tail;

            this.list.tail = newNode;
            this.list.size += 1;
        } else {
            this.list = {
                head: newNode,
                size: 1,
                tail: newNode
            }
        }
    }

    addAt(i: number, val: T): void {
        if (i === 0) {
            this.addFront(val);
            return;
        }
        if (i === this.size()) {
            this.addBack(val);
            return;
        }
        if (i < 0 || i >= this.size() || !this.list) {
            throw new Error("OUT_OF_BOUNDS_ERROR");
        }

        let cur = this.list.head;
        for (let j = 0; j < i - 1; j++) {
            cur = cur.next!
        }

        const newNode = new LinkedListNode(val);

        cur.next!.prev = newNode;
        newNode.next = cur.next;

        newNode.prev = cur;
        cur.next = newNode;
        this.list.size += 1;
    }

    peekFront(): T {
        if (!this.list) throw new Error("EMPTY_ERROR");

        return this.list.head.val;
    }

    peekBack(): T {
        if (!this.list) throw new Error("EMPTY_ERROR");

        return this.list.tail.val;
    }

    get(i: number): T {
        if (i < 0 || i >= this.size() || !this.list) {
            throw new Error("OUT_OF_BOUNDS_ERROR");
        }
        let j = 0;
        let cur = this.list.head;
        while (j < i) {
            cur = cur.next!;
            j++;
        }
        return cur.val;
    }

    indexOf(value: T, equalsFunction?: EqualsFunction<T>): number {
        if (!this.list) return -1;

        const equalsF = equalsFunction || defaultEquals;

        let i = 0;
        let cur = this.list.head;

        while (!equalsF(cur.val, value)) {
            cur = cur.next!;
            i += 1;
        }
        return i;
    }

    contains(value: T, equalsFunction?: EqualsFunction<T>): boolean {
        const index = this.indexOf(value,
            equalsFunction ? equalsFunction : undefined)
        return index !== -1;
    }

    removeFront(): T {
        if (!this.list) throw new Error("EMPTY_ERROR");

        const val = this.list.head.val;
        if (this.list.head.next) {
            this.list.head.next.prev = null;
            this.list.head = this.list.head.next
            this.list.size -= 1;
        } else {
            this.list = undefined;
        }
        return val;
    }

    removeBack(): T {
        if (!this.list) throw new Error("EMPTY_ERROR");

        const val = this.list.tail.val;
        if (this.list.tail.next) {
            (this.list.tail as any).prev.next = null;
            (this.list.tail as any) = this.list.tail.prev;
            this.list.size -= 1;
        } else {
            this.list = undefined;
        }
        return val;
    }
    remove(val: T): T {
        const index = this.indexOf(val);

        if (index === -1) throw new Error("VALUE_DOES_NOT_EXIST");
        return this.removeAt(index);
    }

    removeAt(i: number): T {
        if (i === 0) {
            return this.removeFront();
        }
        if (i === this.size() - 1) {
            return this.removeBack();
        }
        if (i < 0 || i >= this.size() || !this.list) {
            throw new Error("EMPTY_ERROR");
        }

        let j = 0;
        let cur = this.list.head;
        while (j < i) {
            cur = cur.next!;
            j += 1;
        }
        (cur.next as any).prev = cur.prev;
        (cur.prev as any).next = cur.next;
        this.list.size -= 1
        return cur.val;
    }

    clear(): void {
        this.list = undefined;
    }

    fromArray(A: T[]): LinkedList<T> {
        for (const a of A) {
            this.addBack(a)
        }
        return this
    }

    *[Symbol.iterator](): Iterator<T> {
        if (!this.list) return;
        let cur: LinkedListNode<T> | null;
        for (cur = this.list.head; cur != null; cur = cur.next) {
            yield cur.val
        }
    }
}

export default LinkedList;