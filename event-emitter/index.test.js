import {EventEmitter} from './index'

test('test on', function () {

    let emitter = new EventEmitter();

    emitter.on("foo", function () {
        console.log(1)
    })

    console.log(emitter.allEvents())

    expect(emitter.allEvents().length).toBe(1)

});

test('test it', function () {

    let emitter = new EventEmitter();

    function callback(...data) {
        console.log(data)
    }

    emitter.on("foo", callback)

    emitter.emit("foo", 1, 2, 3)

});

test('test once', function () {

    let emitter = new EventEmitter();

    function callback(...data) {
        console.log(data)
    }

    emitter.once("foo", callback)

    emitter.emit("foo", 1, 2, 3)

    expect(emitter.allEvents().length).toBe(0)

});

test('test off', function () {

    let emitter = new EventEmitter();

    function callback(...data) {
        console.log(data)
    }

    emitter.on("foo", callback)

    emitter.emit("foo", 1, 2, 3)

    emitter.off("foo", callback);

    expect(emitter.allEvents().length).toBe(0)

});