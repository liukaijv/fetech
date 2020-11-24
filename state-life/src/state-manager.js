export default class StateManager {

    _stacks = [];
    _states = {}

    _current = null;

    define(key, state) {
        if (this.hasState(key)) {
            console.log(`state ${key} has defined`)
            return false;
        }
        if (typeof state === 'function') {
            state = new state();
        }
        this._states[key] = state;
        return true;
    }

    go(key, params) {
        if (!this.hasState(key)) {
            console.log(`state ${key} not found`)
            return;
        }

        let old = this._current;
        let oldState = this.getByKey(old);
        let state = this.getByKey(key);

        let indexHistory = this.indexOfHistory(key);

        if (oldState !== state) {
            if (oldState && oldState.exit) {
                oldState.exit();
            }

            state.enter && state.enter(params);

            if (indexHistory === -1) {
                this._stacks.push(key);
            } else {
                this._stacks = this._stacks.slice(0, indexHistory + 1);
            }
        }

        state.update && state.update(params);

        this._current = key;

    }

    back() {
        if (this._stacks.length < 2) {
            console.log(`no state history`)
            return;
        }
        this._stacks.pop();
        let key = this._stacks.pop();
        this.go(key);
    }

    destroy() {
        this._stacks = [];
        this._states = {}
    }

    hasState(key) {
        return !!this._states[key];
    }

    indexOfHistory(key) {
        return this._stacks.indexOf(key);
    }

    getByKey(key) {
        return this._states[key];
    }

}