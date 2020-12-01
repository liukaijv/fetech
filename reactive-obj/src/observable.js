const SYMBOL_OBSERVABLE = '__ob__'

export default class Observable {

    static target;

    static create(data) {
        if (!data || typeof data !== "object") {
            return data;
        }
        if (data[SYMBOL_OBSERVABLE]) {
            return data[SYMBOL_OBSERVABLE];
        }
        return new Observable(data);
    }

    constructor(data) {
        Object.defineProperty(data, SYMBOL_OBSERVABLE, {enumerable: false, value: this});
        this.observerMap = new Map();
        this.walk(data);
    }

    addObserver(key, observer) {
        if (!this.observerMap.has(key)) {
            this.observerMap.set(key, []);
        }
        const observers = this.observerMap.get(key);
        if (observers.indexOf(observer) == -1) {
            observers.push(observer);
            return function () {
                observers.splice(observers.indexOf(observer), 1);
            }
        }
    }

    notify(key) {
        if (this.observerMap.get(key)) {
            this.observerMap.get(key).forEach(observer => {
                observer.update();
            })
        }
    }

    walk(data) {
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
        })
    }

    defineReactive(data, key, val) {
        const observable = data[SYMBOL_OBSERVABLE];
        Object.defineProperty(data, key, {
            enumerable: true,
            get() {
                const observer = Observable.target;
                if (observer) {
                    observer.subscribe(observable, key)
                }
                Observable.create(val);
                return val;
            },
            set(newVal) {
                val = newVal;
                observable.notify(key)
            }
        })
    }

}