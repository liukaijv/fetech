export default class ArrayQueue {

    constructor() {
        this.storage = [];
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    peek() {
        if (this.storage.length) {
            return this.storage[this.count - 1];
        }
        return null
    }

    enqueue(item) {
        this.storage.push(item);
        this.count++
    }

    dequeue() {
        if (this.storage.length) {
            this.count--;
            return this.storage.pop();
        }
        return null;
    }

}