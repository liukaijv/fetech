import Observable from './observable'

export class Observer {

    constructor(context, getter, callback) {
        this.unsubscribes = [];
        this.context = context;
        this.getter = getter;
        this.callback = callback;
        this.lastValue = this._get();
    }

    _get() {

        try {
            Observable.target = this;
            return this.getter.call(this.context);
        } finally {
            Observable.target = null;
        }
    }

    update() {
        const {lastValue, context} = this;
        const newValue = this._get();
        if (lastValue !== newValue) {
            this.callback.call(context, newValue, lastValue);
            this.lastValue = newValue;
        }
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