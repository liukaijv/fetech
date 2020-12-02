import Observable from './observable'

export class Observer {

    constructor(context, getter, callback, immediate = false) {
        this.unsubscribes = [];
        this.context = context;
        this.getter = getter;
        this.callback = callback;
        this.lastValue = this._get();
        if (immediate) {
            this.triggerImmediate();
        }
    }

    _get() {

        try {
            Observable.target = this;
            return this.getter.call(this.context);
        } finally {
            Observable.target = null;
        }
    }

    update(force = false) {
        const {lastValue, context} = this;
        const newValue = this._get();
        if (force || (lastValue !== newValue)) {
            this.callback.call(context, newValue, lastValue);
            this.lastValue = newValue;
        }
    }

    triggerImmediate() {
        this.update(true);
    }

    subscribe(observable, key) {
        let unsubscribeFn = observable.addObserver(key, this);
        if (typeof unsubscribeFn === 'function') {
            this.unsubscribes.push(unsubscribeFn);
        }
    }

    unsubscribe() {
        while (this.unsubscribes.length) {
            this.unsubscribes.pop()();
        }
    }

}