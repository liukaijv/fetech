export class Fsm {

    constructor(initState, transitions = [], onEventFn) {

        this.current = initState
        this.transitions = transitions || []
        this.onEvent = onEventFn

    }

    getState() {
        return this.current;
    }

    addTransitions(transitions = []) {
        transitions.forEach(transition => {
            this.transitions.push(transition);
        })
    }

    addTransition(transition) {
        this.transitions.push(transition);
    }

    can(event) {
        for (const trans of this.transitions) {
            if (trans.from === this.current && trans.event == event) {
                return true;
            }
        }
        return false;
    }

    go(event, ...args) {
        let found = false
        for (const trans of this.transitions) {
            if (trans.from === this.current && trans.event == event) {
                found = true;
                let old = this.current;
                this.current = trans.to;
                this.onEvent && this.onEvent.call(this, old, this.current, ...args);
                break;
            }
        }
        if (!found) {
            console.warn("not define transition")
        }
    }

}