import assert from "assert";
import ArrayQueue from "./arrayQueue";

test('test', () => {

    let item1 = 'aa';
    let item2 = 'bb';

    let arrayQueue = new ArrayQueue();
    arrayQueue.enqueue(item1);

    assert.strictEqual(arrayQueue.size(), 1);

    arrayQueue.enqueue(item2);

    assert.strictEqual(arrayQueue.peek(), item2);

    assert.strictEqual(arrayQueue.dequeue(), item2);

});