import Observable from './observable';
import {Observer} from "./observer";

export default class Reactive {

    static create(data) {
        return new Reactive(data);
    }

    constructor(data) {
        Observable.create(data);
        this.proxyData(data);
    }

    subscribe(getterFn, callbackFn) {
        return new Observer(this, getterFn, callbackFn);
    }

    proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: false,
                configurable: true,
                get() {
                    return data[key];
                },
                set(value) {
                    data[key] = value;
                }
            });
        });
    }

}