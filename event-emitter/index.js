export class EventEmitter {

    constructor() {
        this._events = {}
    }

    on(event, func) {
        if (!this._events[event]) {
            this._events[event] = [];
        }
        typeof func === 'function' && this._events[event].push(func);
    }

    once(event, func) {
        if (!this._events[event]) {
            this._events[event] = [];
        }

        function f(...data) {
            this.off(event, f);
            func.apply(this, data);
        }

        f.func = func;
        this.on(event, f);
    }

    emit(event, ...data) {
        let slot = this._events[event];
        if (slot && slot.length) {
            for (let func of slot) {
                func.apply(this, data);
            }
        }
    }

    off(event, func) {
        if (this._events[event]) {
            let index = this._events[event].findIndex(item => item === func || item.func === func)
            if (index > -1) {
                this._events[event].splice(index, 1)
            }
            if (this._events[event].length === 0) {
                delete this._events[event];
            }
        }
    }

    offAll(event) {
        if (this._events[event]) {
            delete this._events[event];
        }
    }

    allEvents() {
        return Object.keys(this._events);
    }
}