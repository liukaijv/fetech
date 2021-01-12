const {EventEmitter} = require('events');

export default class TimerWheel extends EventEmitter {
    constructor(ticks) {
        super();

        this.ticks = ticks;
        this.round = 0;
        this.currentIndex = 0;

        this.slot = new Array(ticks).fill(new Set())

    }

    add(element) {
        let index = this.currentIndex - 1;
        index = index < 0 ? this.ticks - 1 : index;
        this.slot[index].add(element);
        return this;
    }

    tick() {
        let elements = Array.from(this.slot[this.currentIndex]);
        this.slot[this.currentIndex].clear();
        this.emit("tick", elements);

        if (this.currentIndex >= this.ticks - 1) {
            this.round++
            this.currentIndex = 0;
            this.emit("round");
        } else {
            this.currentIndex++
        }
    }
}